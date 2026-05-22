export default function Hero() {
  return (
    <section
      id="delivery"
      className="relative min-h-screen flex items-center justify-center bg-[#1a3a12] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2309] via-[#1a3a12] to-[#0f2309]" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#2a5c1e]/30 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#f5c518]/10 blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-[#f5c518] font-black text-xs uppercase tracking-[0.4em] mb-8">
          Ahora con Delivery a Domicilio
        </p>
        <h1 className="text-7xl sm:text-9xl font-black text-white uppercase leading-none tracking-tighter mb-8">
          PAPUT<br />
          <span className="text-[#f5c518]">EN CASA</span>
        </h1>
        <p className="text-white/60 text-lg max-w-md mx-auto mb-12 leading-relaxed">
          Nuestras hamburguesas llegan hasta tu puerta. Mahón, Es Castell, Sant Lluís y más.
        </p>
        <a
          href="#"
          className="inline-block bg-[#f5c518] text-[#1a3a12] font-black text-xs uppercase tracking-widest px-12 py-5 rounded-full hover:bg-yellow-300 transition-colors"
        >
          HACER PEDIDO
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
