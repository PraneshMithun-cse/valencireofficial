const testimonials = [
  {
    name: "Priya S.",
    location: "Coimbatore",
    rating: 5,
    text: "I've tried so many brands over the years but nothing compares to Mom Anion. The anion technology really does make a difference — I feel so much fresher throughout the day. No more cramps, no more irritation. This is honestly a game changer.",
    bg: "#7C3AED",
  },
  {
    name: "Aisha M.",
    location: "Coimbatore",
    rating: 5,
    text: "The XXL night pads are incredible. I finally sleep through the night without any leaks or discomfort. The material is so soft against my skin — it doesn't feel like I'm wearing anything at all. Highly recommend to every woman!",
    bg: "#EC4899",
  },
  {
    name: "Kavitha R.",
    location: "Coimbatore",
    rating: 5,
    text: "My gynecologist actually recommended anion pads to help with recurring infections. Mom Anion has been a lifesaver. Three months in and I notice such a massive improvement. The fact that it uses nano silver and chitin technology is amazing.",
    bg: "#4C1D95",
  },
  {
    name: "Sunita T.",
    location: "Coimbatore",
    rating: 5,
    text: "I was skeptical at first but after one cycle I was completely convinced. The far infrared technology genuinely helps with cramp relief. I feel warm and comfortable all day. My whole family now uses Mom Anion — even bought it for my daughter!",
    bg: "#831843",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="w-full relative"
      style={{ backgroundColor: "#1B47B8", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      {/* Yellow scallop top */}
      <div className="absolute left-0 w-full" style={{ top: "-1px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" className="w-full" style={{ display: "block" }} fill="#FCD34D">
          <path d="M0,48 Q36,0 72,48 Q108,0 144,48 Q180,0 216,48 Q252,0 288,48 Q324,0 360,48 Q396,0 432,48 Q468,0 504,48 Q540,0 576,48 Q612,0 648,48 Q684,0 720,48 Q756,0 792,48 Q828,0 864,48 Q900,0 936,48 Q972,0 1008,48 Q1044,0 1080,48 Q1116,0 1152,48 Q1188,0 1224,48 Q1260,0 1296,48 Q1332,0 1368,48 Q1404,0 1440,48 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="px-6 lg:px-16">
        <div
          style={{
            fontFamily: '"Badrock Regular", sans-serif',
            fontSize: "clamp(38px, 7vw, 100px)",
            color: "#EC4899",
            lineHeight: 0.9,
            marginBottom: "3rem",
          }}
        >
          What Women Say
        </div>

        <div className="grid grid-cols-2 gap-3 lg:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl lg:rounded-3xl p-3 lg:p-8 bg-white"
            >
              {/* Stars */}
              <div style={{ marginBottom: "8px" }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: "#FCD34D", fontSize: "clamp(11px, 3vw, 18px)" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: "Onest, sans-serif",
                  fontSize: "clamp(10px, 2.4vw, 20px)",
                  color: "#000000",
                  lineHeight: 1.55,
                  marginBottom: "10px",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div
                style={{
                  fontFamily: "Onest, sans-serif",
                  fontSize: "clamp(10px, 2.4vw, 18px)",
                  fontWeight: 600,
                  color: "#000000",
                }}
              >
                {t.name}
                <span
                  style={{
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.6)",
                    marginLeft: "4px",
                    display: "block",
                    fontSize: "clamp(9px, 2vw, 16px)",
                  }}
                >
                  {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
