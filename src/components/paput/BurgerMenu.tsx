const burgers = [
  {
    name: "LA CLÁSICA",
    ingredients: "Lechuga, tomate, cheddar, mayo",
    emoji: "🍔",
    bg: "from-amber-100 to-orange-100",
  },
  {
    name: "BACON CHEESE",
    ingredients: "Cheddar, bacon, mayo",
    emoji: "🥓",
    bg: "from-red-100 to-orange-100",
  },
  {
    name: "MCATOL",
    ingredients: "Doble cheddar, bacon, pepinillos, salsa especial",
    emoji: "🍔",
    bg: "from-yellow-100 to-amber-100",
  },
  {
    name: "BIG PONS",
    ingredients: "Muslo de pollo empanado, lechuga, cheddar",
    emoji: "🍗",
    bg: "from-amber-50 to-yellow-100",
  },
  {
    name: "GUIRIGALL",
    ingredients: "Cheddar, bacon jam, cebolla caramelizada, mayo",
    emoji: "🧀",
    bg: "from-orange-100 to-amber-100",
  },
  {
    name: "PAPUT",
    ingredients: "Queso Mahón, sobrasada, miel, mayo de romero",
    emoji: "🍯",
    bg: "from-yellow-100 to-orange-50",
  },
  {
    name: "TRUFA MEL·LA",
    ingredients: "Provolone, champiñones salteados, mayo de trufa",
    emoji: "🍄",
    bg: "from-stone-100 to-amber-50",
  },
  {
    name: "MARCO PAQUETTI",
    ingredients: "Rúcula, scamorza, guanciale, tomate seco, pesto",
    emoji: "🌿",
    bg: "from-green-100 to-emerald-50",
  },
  {
    name: "FORA FÚA",
    ingredients: "Heura burger, cheddar vegano, salsa Bahiana vegana",
    emoji: "🥦",
    bg: "from-green-100 to-lime-100",
    vegan: true,
  },
];

export default function BurgerMenu() {
  return (
    <section className="py-24 px-6 bg-[#f9f7f2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#f5c518] font-black text-xs uppercase tracking-[0.4em] mb-4">
            La Carta
          </p>
          <h2 className="text-5xl md:text-6xl font-black uppercase text-[#1a3a12] tracking-tight">
            NUESTRAS BURGERS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {burgers.map((burger) => (
            <div
              key={burger.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div
                className={`h-52 bg-gradient-to-br ${burger.bg} flex items-center justify-center`}
              >
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300 select-none">
                  {burger.emoji}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-black text-base uppercase text-[#1a3a12] tracking-tight">
                    {burger.name}
                  </h3>
                  {burger.vegan && (
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full uppercase shrink-0">
                      Vegana
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{burger.ingredients}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-block bg-[#2a5c1e] text-white font-black text-xs uppercase tracking-widest px-10 py-5 rounded-full hover:bg-[#1e4415] transition-colors"
          >
            HACER PEDIDO
          </a>
        </div>
      </div>
    </section>
  );
}
