"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full h-[88px]"
      style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #EDE9FE" }}
    >
      <div className="flex items-center justify-between px-6 lg:px-16 h-full">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/momanion/logo.webp"
            alt="Mom Anion"
            style={{ height: "108px", width: "auto", objectFit: "contain" }}
            className="relative z-10 transition-transform hover:scale-105"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {[
            { label: "Products", href: "#products" },
            { label: "About", href: "#about" },
            { label: "Benefits", href: "#benefits" },
            { label: "Contact", href: "#footer" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: '"Badrock Regular", sans-serif',
                fontSize: "24px",
                fontWeight: 400,
                color: "#4C1D95",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#products"
          className="hidden lg:inline-flex items-center"
          style={{
            fontFamily: '"Badrock Regular", sans-serif',
            fontSize: "24px",
            fontWeight: 400,
            letterSpacing: "0.05em",
            color: "#ffffff",
            backgroundColor: "#6B21A8",
            borderRadius: "999px",
            padding: "10px 28px",
            textDecoration: "none",
          }}
        >
          Shop Now
        </a>

        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-[2px]"
              style={{ backgroundColor: "#6B21A8" }}
            />
          ))}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden flex flex-col gap-4 px-6 pb-6"
          style={{ backgroundColor: "#ffffff" }}
        >
          {[
            { label: "Products", href: "#products" },
            { label: "About", href: "#about" },
            { label: "Benefits", href: "#benefits" },
            { label: "Contact", href: "#footer" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: '"Badrock Regular", sans-serif',
                fontSize: "16px",
                fontWeight: 500,
                color: "#4C1D95",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "Onest, sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: "#6B21A8",
              borderRadius: "999px",
              padding: "10px 24px",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  );
}
