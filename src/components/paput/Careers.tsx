export default function Careers() {
  return (
    <section id="careers" className="py-24 px-6 bg-[#f9f7f2]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#f5c518] font-black text-xs uppercase tracking-[0.4em] mb-6">
          Únete al equipo
        </p>
        <h2 className="text-5xl md:text-6xl font-black uppercase text-[#1a3a12] leading-tight mb-8 tracking-tight">
          SI QUIERES<br />UNIRTE AL EQUIPO
        </h2>
        <div className="w-16 h-1.5 bg-[#f5c518] mx-auto mb-10 rounded-full" />
        <p className="text-gray-500 text-lg leading-relaxed mb-2">
          ¿Te apasiona la gastronomía y el buen rollo?
        </p>
        <p className="text-gray-500 text-lg mb-10">
          Mándanos tu CV a{" "}
          <a
            href="mailto:rrhh@paputmenorca.com"
            className="text-[#2a5c1e] font-black hover:underline"
          >
            rrhh@paputmenorca.com
          </a>
        </p>
        <a
          href="mailto:rrhh@paputmenorca.com"
          className="inline-block bg-[#2a5c1e] text-white font-black text-xs uppercase tracking-widest px-12 py-5 rounded-full hover:bg-[#1e4415] transition-colors"
        >
          CONTÁCTANOS
        </a>
      </div>
    </section>
  );
}
