const products = [
  { name: "Botella", emoji: "🍶" },
  { name: "Camiseta", emoji: "👕" },
  { name: "Tote Bag", emoji: "👜" },
  { name: "Gorra", emoji: "🧢" },
];

export default function LifestyleSection() {
  return (
    <section id="shop" className="py-24 px-6 bg-[#1a3a12] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#f5c518] font-black text-xs uppercase tracking-[0.4em] mb-6">
              Lifestyle
            </p>
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tight mb-8">
              A POC<br />A POC<br />LIFE
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
              Nos vestimos como hablamos, a poc a poc y con sabor a Menorca.
              Botellas, ropa y accesorios con la esencia de Paput.
            </p>
            <a
              href="#"
              className="inline-block border-2 border-[#f5c518] text-[#f5c518] font-black text-xs uppercase tracking-widest px-10 py-5 rounded-full hover:bg-[#f5c518] hover:text-[#1a3a12] transition-all"
            >
              IR A LA TIENDA
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {products.map((item) => (
              <div
                key={item.name}
                className="aspect-square bg-[#2a5c1e] rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-[#335e25] transition-colors cursor-pointer group"
              >
                <span className="text-5xl group-hover:scale-110 transition-transform duration-200 select-none">
                  {item.emoji}
                </span>
                <span className="text-white/50 text-xs font-bold uppercase tracking-widest">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
