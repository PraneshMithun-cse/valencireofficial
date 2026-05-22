"use client";
import { useState, useEffect } from "react";
import { Search, ShoppingBag, X, Menu } from "lucide-react";

const navLinks = [
  { label: "Trouser and Pants", href: "/en/trouser-pants" },
  { label: "Shirts", href: "/en/shirts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const NAV_MID = 45; // vertical midpoint of the navbar

    const detect = () => {
      const sections = document.querySelectorAll("[data-nav-theme]");
      let theme = "dark";
      sections.forEach((s) => {
        const rect = s.getBoundingClientRect();
        if (rect.top <= NAV_MID && rect.bottom > NAV_MID) {
          theme = s.getAttribute("data-nav-theme") ?? "dark";
        }
      });
      setIsDark(theme === "dark");
    };

    detect();
    window.addEventListener("scroll", detect, { passive: true });
    return () => window.removeEventListener("scroll", detect);
  }, []);

  const color = isDark ? "#fff" : "#000";

  return (
    <header
      className="fixed left-0 right-0 z-50"
      style={{ top: 0, background: "transparent" }}
    >
      <div className="max-w-[1440px] mx-auto px-12 h-[90px] flex items-center justify-between">
        {/* Left nav */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:opacity-60"
              style={{ color }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Center logo */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/valencire-logo-text.png"
            alt="Valenciré"
            style={{
              height: 26,
              width: "auto",
              display: "block",
              filter: isDark ? "invert(1)" : "none",
              transition: "filter 0.3s",
            }}
          />
        </a>

        {/* Right icons */}
        <div className="flex items-center gap-6 ml-auto">
          <button
            className="transition-opacity hover:opacity-60"
            aria-label="Search"
            style={{ color, transition: "color 0.3s" }}
          >
            <Search size={18} strokeWidth={1.3} />
          </button>
          <button
            className="transition-opacity hover:opacity-60"
            aria-label="Cart"
            style={{ color, transition: "color 0.3s" }}
          >
            <ShoppingBag size={18} strokeWidth={1.3} />
          </button>
          <button
            className="lg:hidden transition-opacity hover:opacity-60"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
            style={{ color, transition: "color 0.3s" }}
          >
            <Menu size={20} strokeWidth={1.3} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex items-center justify-between px-8 h-16 border-b border-gray-100">
            <a href="/"><img src="/valencire-logo-text.png" alt="Valenciré" style={{ height: 20, width: "auto" }} /></a>
            <button onClick={() => setMenuOpen(false)} aria-label="Close">
              <X size={18} strokeWidth={1.3} />
            </button>
          </div>
          <nav className="flex flex-col px-8 py-10 gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[22px] font-light tracking-wide text-gray-900 hover:opacity-50"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
