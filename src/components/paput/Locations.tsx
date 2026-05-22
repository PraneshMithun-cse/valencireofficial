const locations = [
  {
    type: "Chiringuito",
    icon: "🌊",
    address: "Andén de Poniente S/N, Puerto de Mahón",
    hours: [
      { days: "Dom – Jue", time: "10:00 – 23:30" },
      { days: "Vie – Sáb", time: "10:00 – 00:00" },
    ],
  },
  {
    type: "Delivery & Takeaway",
    icon: "🛵",
    address: "Avinguda de Josep A. Clavé, 35, Mahón",
    hours: [{ days: "Todos los días", time: "19:30 – 23:00" }],
    deliveryFees: [
      { zone: "Mahón", price: "€2" },
      { zone: "Es Castell, Sant Lluís, Sant Climent, Sa Mesquida, Cala Llonga", price: "€3" },
    ],
  },
];

export default function Locations() {
  return (
    <section id="delivery" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#f5c518] font-black text-xs uppercase tracking-[0.4em] mb-4">
            Encuéntranos
          </p>
          <h2 className="text-5xl md:text-6xl font-black uppercase text-[#1a3a12] tracking-tight">
            DÓNDE ESTAMOS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.type}
              className="border-2 border-[#1a3a12]/10 rounded-3xl p-8 hover:border-[#2a5c1e] hover:bg-[#f9f7f2] transition-all"
            >
              <div className="text-4xl mb-4 select-none">{loc.icon}</div>
              <h3 className="text-2xl font-black uppercase text-[#1a3a12] mb-2 tracking-tight">
                {loc.type}
              </h3>
              <p className="text-gray-500 text-sm mb-6">{loc.address}</p>

              <div className="space-y-2 mb-6">
                {loc.hours.map((h) => (
                  <div key={h.days} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{h.days}</span>
                    <span className="font-black text-[#1a3a12]">{h.time}</span>
                  </div>
                ))}
              </div>

              {loc.deliveryFees && (
                <div className="bg-[#f9f7f2] rounded-2xl p-4 mb-6 space-y-2">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
                    Gastos de envío
                  </p>
                  {loc.deliveryFees.map((fee) => (
                    <div key={fee.zone} className="flex justify-between text-sm">
                      <span className="text-gray-600 mr-4">{fee.zone}</span>
                      <span className="font-black text-[#2a5c1e] shrink-0">{fee.price}</span>
                    </div>
                  ))}
                </div>
              )}

              <a
                href="#"
                className="text-[#2a5c1e] font-black text-xs uppercase tracking-widest hover:underline"
              >
                Ver en Google Maps →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
