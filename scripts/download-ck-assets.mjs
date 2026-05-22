import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { pipeline } from 'stream/promises';
import https from 'https';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '..', 'public');

const assets = [
  // Logos
  { url: 'https://www.calvinklein.us/on/demandware.static/-/Sites-PVHCKUS-Library/default/dwa0e4bc21/logo/CK-logo-Dark.svg', dest: 'images/ck-logo-dark.svg' },
  { url: 'https://www.calvinklein.us/on/demandware.static/-/Sites-PVHCKUS-Library/default/dwcd59aeda/logo/CK-logo-Light.svg', dest: 'images/ck-logo-light.svg' },
  // Fonts
  { url: 'https://www.calvinklein.us/on/demandware.static/Sites-PVHCKUS-Site/-/en_US/fonts/Klein-55Regular-Web.woff2', dest: 'fonts/Klein-55Regular-Web.woff2' },
  { url: 'https://www.calvinklein.us/on/demandware.static/Sites-PVHCKUS-Site/-/en_US/fonts/Klein-65Medium-Web.woff2', dest: 'fonts/Klein-65Medium-Web.woff2' },
  // Hero video
  { url: 'https://media1.calvinklein.com/images/20260512/HP/HP_Summer_Denim.mp4', dest: 'videos/HP_Summer_Denim.mp4' },
  // Swimwear section
  { url: 'https://media1.calvinklein.com/images/20260512/HP/HP_Swim_W.jpg', dest: 'images/HP_Swim_W.jpg' },
  { url: 'https://media1.calvinklein.com/images/20260512/HP/HP_Swim_M.jpg', dest: 'images/HP_Swim_M.jpg' },
  { url: 'https://media1.calvinklein.com/images/20260512/HP/HP_Swim_Mobile.jpg', dest: 'images/HP_Swim_Mobile.jpg' },
  // Underwear section
  { url: 'https://media1.calvinklein.com/images/20260512/HP/HP_UW.jpg', dest: 'images/HP_UW.jpg' },
  { url: 'https://media1.calvinklein.com/images/20260512/HP/HP_UW_Mobile.jpg', dest: 'images/HP_UW_Mobile.jpg' },
  // 1989 Heritage section
  { url: 'https://media1.calvinklein.com/images/20260512/HP/HP_1989_W.jpg', dest: 'images/HP_1989_W.jpg' },
  { url: 'https://media1.calvinklein.com/images/20260512/HP/HP_1989_M.jpg', dest: 'images/HP_1989_M.jpg' },
  { url: 'https://media1.calvinklein.com/images/20260512/HP/HP_1989_W_Mobile.jpg', dest: 'images/HP_1989_W_Mobile.jpg' },
  { url: 'https://media1.calvinklein.com/images/20260512/HP/HP_1989_M_Mobile.jpg', dest: 'images/HP_1989_M_Mobile.jpg' },
  // Collection CKC section
  { url: 'https://media1.calvinklein.com/images/20260512/HP/HP_CKC_Drop2.jpg', dest: 'images/HP_CKC_Drop2.jpg' },
];

function download(url, destRel) {
  const dest = path.join(PUBLIC, destRel);
  const dir = path.dirname(dest);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  if (existsSync(dest)) { console.log('✓ exists:', destRel); return Promise.resolve(); }

  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, destRel).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`${res.statusCode} for ${url}`));
        return;
      }
      const ws = createWriteStream(dest);
      pipeline(res, ws)
        .then(() => { console.log('↓', destRel); resolve(); })
        .catch(reject);
    }).on('error', reject);
  });
}

// 4 concurrent
async function downloadAll() {
  const chunks = [];
  for (let i = 0; i < assets.length; i += 4) chunks.push(assets.slice(i, i + 4));
  for (const chunk of chunks) {
    await Promise.allSettled(chunk.map(a => download(a.url, a.dest).catch(e => console.error('✗', a.dest, e.message))));
  }
  console.log('Done');
}

downloadAll();
