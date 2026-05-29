"use client";

const products = [
  {
    id: "xl",
    name: "Mom Anion XL",
    size: "280mm",
    tagline: "Day Protection",
    description: "Perfect for regular flow days. Ultra-thin yet absorbent with anion technology for freshness and comfort.",
    features: ["Ultra Thin", "Anion Layer", "Breathable Cover", "Side Leak Guards"],
    bg: "#7C3AED",
    accent: "#EC4899",
    img: "/images/momanion/product-xl.webp",
  },
  {
    id: "xxl",
    name: "Mom Anion XXL",
    size: "280mm",
    tagline: "Night Protection",
    description: "Extended overnight coverage with wider back panel. Sleep peacefully with complete leak-proof confidence.",
    features: ["Extra Wide Back", "Deep Absorption", "Anti-Bacterial", "8-Hour Protection"],
    bg: "#1E1B4B",
    accent: "#FCD34D",
    img: "/images/momanion/product-xxl.webp",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="w-full relative"
      style={{ backgroundColor: "#FDF4FF", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      {/* Dark scallop top */}
      <div className="absolute left-0 w-full" style={{ top: "-1px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" className="w-full" style={{ display: "block" }} fill="#1a0540">
          <path d="M0,48 Q36,0 72,48 Q108,0 144,48 Q180,0 216,48 Q252,0 288,48 Q324,0 360,48 Q396,0 432,48 Q468,0 504,48 Q540,0 576,48 Q612,0 648,48 Q684,0 720,48 Q756,0 792,48 Q828,0 864,48 Q900,0 936,48 Q972,0 1008,48 Q1044,0 1080,48 Q1116,0 1152,48 Q1188,0 1224,48 Q1260,0 1296,48 Q1332,0 1368,48 Q1404,0 1440,48 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="px-6 lg:px-16">
        {/* Section heading */}
        <div
          style={{
            fontFamily: '"Badrock Regular", sans-serif',
            fontSize: "clamp(50px, 7vw, 100px)",
            color: "#6B21A8",
            lineHeight: 0.9,
            marginBottom: "3rem",
          }}
        >
          Our Products
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch"
              style={{ backgroundColor: product.bg, minHeight: "420px" }}
            >
              {/* Text side */}
              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div
                    style={{
                      fontFamily: "Onest, sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: product.accent,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "8px",
                    }}
                  >
                    {product.tagline}
                  </div>
                  <div
                    style={{
                      fontFamily: '"Badrock Regular", sans-serif',
                      fontSize: "clamp(46px, 6vw, 80px)",
                      color: "#ffffff",
                      lineHeight: 0.95,
                      marginBottom: "8px",
                    }}
                  >
                    {product.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "Onest, sans-serif",
                      fontSize: "16px",
                      color: "rgba(255,255,255,0.6)",
                      marginBottom: "16px",
                    }}
                  >
                    {product.size}
                  </div>
                  <p
                    style={{
                      fontFamily: "Onest, sans-serif",
                      fontSize: "18px",
                      color: "rgba(255,255,255,0.82)",
                      lineHeight: 1.6,
                      maxWidth: "280px",
                    }}
                  >
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {product.features.map((feat) => (
                    <span
                      key={feat}
                      style={{
                        fontFamily: "Onest, sans-serif",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#fff",
                        backgroundColor: "rgba(255,255,255,0.15)",
                        borderRadius: "999px",
                        padding: "4px 12px",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  style={{
                    display: "inline-block",
                    marginTop: "24px",
                    backgroundColor: product.accent,
                    color: product.id === "xxl" ? "#0F0A1E" : "#ffffff",
                    fontFamily: "Onest, sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    padding: "10px 24px",
                    borderRadius: "999px",
                    textDecoration: "none",
                    width: "fit-content",
                  }}
                >
                  Order Now
                </a>
              </div>

              {/* Product image + price */}
              <div className="w-full lg:w-[42%] flex flex-col items-center justify-between p-6 gap-4">
                {/* Price badge */}
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: '"Badrock Regular", sans-serif',
                      fontSize: "clamp(56px, 7vw, 96px)",
                      color: "#ffffff",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    }}
                  >
                    ₹99
                  </div>
                  <div
                    style={{
                      fontFamily: "Onest, sans-serif",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.6)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginTop: "2px",
                    }}
                  >
                    per pack
                  </div>
                </div>
                <img
                  src={product.img}
                  alt={product.name}
                  style={{ width: "100%", maxWidth: "200px", objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
