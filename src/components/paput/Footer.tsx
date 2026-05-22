function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const footerLinks = [
  "Pedido",
  "Grandes Pedidos",
  "Delivery",
  "Shop",
  "Eventos",
];

const legalLinks = [
  "Política de Cookies",
  "Política de Privacidad",
  "Aviso Legal",
];

const footerLocations = [
  {
    name: "Chiringuito",
    address: "Andén de Poniente S/N\nPuerto de Mahón, Menorca",
  },
  {
    name: "Delivery & Takeaway",
    address: "Avinguda de Josep A. Clavé, 35\nMahón, Menorca",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2309] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-3xl font-black text-white mb-4 tracking-tight">PAPUT</div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Restaurante chiringuito en el Puerto de Mahón, Menorca.
            </p>
            <a
              href="mailto:hola@paputmenorca.com"
              className="text-[#f5c518]/80 text-sm hover:text-[#f5c518] transition-colors"
            >
              hola@paputmenorca.com
            </a>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#f5c518] mb-6">
              Menú
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#f5c518] mb-6">
              Dónde Estamos
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {footerLocations.map((loc) => (
                <div key={loc.name}>
                  <p className="font-black text-white text-sm mb-1">{loc.name}</p>
                  <p className="text-white/40 text-sm whitespace-pre-line leading-relaxed">
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/40 hover:text-white transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="text-white/40 hover:text-white transition-colors text-lg leading-none"
            >
              📱
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-white/40 hover:text-white transition-colors text-lg leading-none"
            >
              🎵
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="text-white/30 text-xs hover:text-white/60 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <p className="text-white/20 text-xs">© 2024 Paput Menorca</p>
        </div>
      </div>
    </footer>
  );
}
