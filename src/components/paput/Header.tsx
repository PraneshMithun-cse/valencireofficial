"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const navLinks = [
  { label: "Delivery", href: "#delivery" },
  { label: "Sobre Paput", href: "#about" },
  { label: "Shop", href: "#shop" },
  { label: "Eventos", href: "#events" },
  { label: "Grandes Pedidos", href: "#orders" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-[#2a5c1e]">PAPUT</span>
          <span className="text-xs font-bold text-[#2a5c1e]/50 uppercase tracking-widest hidden sm:block">
            Menorca
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-bold uppercase tracking-widest text-gray-800 hover:text-[#2a5c1e] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-gray-500 hover:text-[#2a5c1e] transition-colors"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="#"
            className="bg-[#2a5c1e] text-white font-black text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[#1e4415] transition-colors"
          >
            HACER PEDIDO
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-bold uppercase tracking-widest text-gray-800 hover:text-[#2a5c1e]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="mt-2 bg-[#2a5c1e] text-white font-black text-xs uppercase tracking-widest px-6 py-3 rounded-full text-center hover:bg-[#1e4415] transition-colors"
          >
            HACER PEDIDO
          </a>
        </div>
      )}
    </header>
  );
}
