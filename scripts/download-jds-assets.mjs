import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

const BASE = '/Users/pranesh/my-clone/public/images/jds';
mkdirSync(BASE, { recursive: true });

const assets = [
  // Logo
  { url: 'https://framerusercontent.com/images/upII8DL6vYzoN39t9JQbBGt0.webp?width=488&height=224', name: 'logo.webp' },
  // Hero drink cup
  { url: 'https://framerusercontent.com/images/wDMfZl65hdw4GFRDKsdo05U.webp?width=963&height=1042', name: 'hero-drink.webp' },
  // Hero oranges/citrus fruit
  { url: 'https://framerusercontent.com/images/G70d9HV6pPxTg1sJz8R2XOCWog.webp?width=1500&height=1601', name: 'hero-orange.webp' },
  // Strawberry drink
  { url: 'https://framerusercontent.com/images/kwDlYyU2HyaT2iRBmzKJT6vthI.webp?width=1402&height=1582', name: 'hero-strawberry.webp' },
  // Store interior
  { url: 'https://framerusercontent.com/images/9xkRNXiD9tiHIBUC1Wja2Uvqs.webp?width=722&height=851', name: 'store.webp' },
  // Hero small card image 1
  { url: 'https://framerusercontent.com/images/fBhC9cpApQ1eXoRNO56LOJdhteI.png?width=1525&height=855', name: 'hero-card-bg.png' },
  // Hero small card image 2
  { url: 'https://framerusercontent.com/images/uQoLLmUcu0c7j7aciO3tcfeNVyA.webp?width=1260&height=2300', name: 'hero-card-drink.webp' },
  // DoorDash logo
  { url: 'https://framerusercontent.com/images/gf4DWKkyOyeql9SbKnCTqemUD2Q.png?width=225&height=225', name: 'doordash.png' },
  // Soda cards
  { url: 'https://framerusercontent.com/images/FEHkn8uKZ9ErR1JlEleqeFC7KA.webp?width=1706&height=2560', name: 'soda-king-coco.webp' },
  { url: 'https://framerusercontent.com/images/i8dodqvPFf2QdEJZDEyAwVAY58.webp?width=2188&height=2560', name: 'soda-magic-marker.webp' },
  { url: 'https://framerusercontent.com/images/igg8Q5UM7aFpF0oOSZkSY9du8yU.webp?width=2188&height=2560', name: 'soda-glow-up.webp' },
  // Soda cup images (additional)
  { url: 'https://framerusercontent.com/images/jzm8PqHuDBHKocsvcEYMjauX0.png?width=408&height=640', name: 'soda-cup-1.png' },
  { url: 'https://framerusercontent.com/images/Uq3SUgeNv9OTi6fQoBoPSSAihg.png?width=405&height=640', name: 'soda-cup-2.png' },
  { url: 'https://framerusercontent.com/images/Ug6Zu8VP63NqvIFIVfVRwb3Yiw.png?width=420&height=640', name: 'soda-cup-3.png' },
  { url: 'https://framerusercontent.com/images/jjmgRWSeEOCraAnMXP51HLxUFQ.png?width=416&height=640', name: 'soda-cup-4.png' },
  { url: 'https://framerusercontent.com/images/al5Sf5374OTwiURwE4EchmYy2YQ.png?width=409&height=640', name: 'soda-cup-5.png' },
  { url: 'https://framerusercontent.com/images/RMGCrCe3GURLW0VxZGbtWkqIs.png?width=411&height=640', name: 'soda-cup-6.png' },
  { url: 'https://framerusercontent.com/images/uvNwMxherUhvf65tBQuqhSSdM.png?width=392&height=640', name: 'soda-cup-7.png' },
  { url: 'https://framerusercontent.com/images/X169MAxZNHR1SktTO8LXTg4nY68.png?width=1247&height=2024', name: 'soda-cup-8.png' },
  { url: 'https://framerusercontent.com/images/YaaJsfMPKXqgiYTIXTJF1YGbhbQ.png?width=393&height=640', name: 'soda-cup-9.png' },
  { url: 'https://framerusercontent.com/images/o6JmAovAP8TzqSVRBpHOKSSxnmE.png?width=393&height=640', name: 'soda-cup-10.png' },
  { url: 'https://framerusercontent.com/images/PYsrjLBtu0UF9WvCHWXCj1H9K8.png?width=381&height=640', name: 'soda-cup-11.png' },
  { url: 'https://framerusercontent.com/images/C0D8FsugppWSFFwutMLQmMYWMxw.png?width=424&height=640', name: 'soda-cup-12.png' },
  { url: 'https://framerusercontent.com/images/wIgbTMQGitXSJhIKNCUgvtGsrg.png?width=415&height=640', name: 'soda-cup-13.png' },
  // Snack products
  { url: 'https://framerusercontent.com/images/Xq7D6SJVeaRIArvNFLlpdJs0SZ0.webp?width=899&height=900', name: 'snack-1.webp' },
  { url: 'https://framerusercontent.com/images/A8CDDBh6fIxbUMBbpef72GEUA.png?width=640&height=640', name: 'snack-miss-vicky.png' },
  { url: 'https://framerusercontent.com/images/OJZJnDEUY81dQ0VmYwBuW1c14c.png?width=640&height=640', name: 'snack-propitious.png' },
  { url: 'https://framerusercontent.com/images/7zwqHUSvBJbEWaR9wXYhmXw5M.webp?width=345&height=152', name: 'snack-dubai.webp' },
  // Instagram grid
  { url: 'https://framerusercontent.com/images/eOyloIenLUKC51k6E2ORDTjLcbU.webp?width=1080&height=1080', name: 'instagram-1.webp' },
  { url: 'https://framerusercontent.com/images/G5N6bnXAiaqUHpEBupPiEP5wIA.webp?width=1080&height=1080', name: 'instagram-2.webp' },
  { url: 'https://framerusercontent.com/images/yWRVDGfJI0tSVNzxvYqvH6QtoU.webp?width=1080&height=1080', name: 'instagram-3.webp' },
  // Favicon
  { url: 'https://framerusercontent.com/images/PvXjvcN4Pj3ucq5g5MTlkDiS40.png', name: '../../../public/seo/favicon.png' },
];

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) { console.warn(`SKIP ${url}: ${res.status}`); return; }
  const buf = await res.arrayBuffer();
  const fullPath = dest.startsWith('/') ? dest : join(BASE, dest);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, Buffer.from(buf));
  console.log(`OK ${dest} (${buf.byteLength} bytes)`);
}

const BATCH = 4;
for (let i = 0; i < assets.length; i += BATCH) {
  await Promise.all(assets.slice(i, i + BATCH).map(a => download(a.url, a.name)));
}
console.log('Done');
