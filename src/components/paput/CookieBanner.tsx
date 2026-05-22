"use client";
import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center sm:text-left">
          Usamos cookies para mejorar tu experiencia y analizar el uso de nuestra web.{" "}
          <a href="#" className="text-[#2a5c1e] font-bold hover:underline">
            Política de Cookies
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => setVisible(false)}
            className="border border-gray-200 text-gray-600 font-black text-xs uppercase tracking-wide px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={() => setVisible(false)}
            className="bg-[#2a5c1e] text-white font-black text-xs uppercase tracking-wide px-5 py-2.5 rounded-full hover:bg-[#1e4415] transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
