"use client";

import { useState, useEffect } from "react";

const SLIDES = [
  { subtitle: "FEEL THE", main: "DIFFERENCE", img: "/images/momanion/product-xl.webp", bg: "purple" },
  { subtitle: "SOFT AS A", main: "MOM'S TOUCH", img: "/images/momanion/product-xxl.webp", bg: "blue" },
  { subtitle: "DESIGNED FOR", main: "EVERY WOMAN", img: "/images/momanion/product-xl.webp", bg: "purple" },
  { subtitle: "A NEW ERA OF", main: "CONFIDENCE", img: "/images/momanion/product-xxl.webp", bg: "blue" },
] as const;

const FEATURES = [
  { icon: "🌿", title: "NATURAL ULTRA SOFT", sub: "Breathable Napkins" },
  { icon: "🛡️", title: "FIVE ADVANCED TECHNOLOGY", sub: "Superior Protection" },
  { icon: "♻️", title: "ECO-FRIENDLY", sub: "Next Generation Pads" },
  { icon: "🌙", title: "LONG LASTING", sub: "Day & Night Protection" },
];

const BG = {
  purple: "radial-gradient(ellipse 90% 65% at 50% 38%, #8B2FC9 0%, #3D0E7A 42%, #12033A 100%)",
  blue: "radial-gradient(ellipse 90% 65% at 50% 38%, #2D6BE4 0%, #0D2E8A 42%, #020B2E 100%)",
};

const SPARKLES = [
  { top: "12%", left: "8%", size: 18 },
  { top: "22%", left: "20%", size: 10 },
  { top: "8%", left: "60%", size: 14 },
  { top: "18%", right: "10%", size: 20 },
  { top: "35%", right: "22%", size: 10 },
  { top: "45%", left: "6%", size: 12 },
  { top: "28%", right: "38%", size: 8 },
];

function Sparkle({ style }: { style: React.CSSProperties & { size: number } }) {
  const { size, ...rest } = style;
  return (
    <svg
      className="absolute pointer-events-none"
      style={{ ...rest, width: size, height: size, opacity: 0.7 }}
      viewBox="0 0 24 24"
    >
      <path
        d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z"
        fill="white"
      />
    </svg>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
        setVisible(true);
      }, 450);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  function goTo(i: number) {
    if (i === current) return;
    setVisible(false);
    setTimeout(() => { setCurrent(i); setVisible(true); }, 450);
  }

  const slide = SLIDES[current];
  const fade: React.CSSProperties = {
    transition: "opacity 0.45s ease, transform 0.45s ease",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(12px)",
  };

  return (
    <section
      className="relative overflow-hidden w-full flex flex-col"
      style={{ height: "100vh", background: BG[slide.bg], transition: "background 0.7s ease" }}
    >
      <style>{`
        @keyframes ma-float-hero {
          0%,100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-14px) rotate(-3deg); }
        }
        @keyframes ma-feather-l {
          0%,100% { transform: translateY(0px) rotate(-20deg); }
          50% { transform: translateY(-18px) rotate(-12deg); }
        }
        @keyframes ma-feather-r {
          0%,100% { transform: translateY(0px) rotate(15deg); }
          50% { transform: translateY(-12px) rotate(22deg); }
        }
        @keyframes ma-twinkle {
          0%,100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        .ma-sparkle { animation: ma-twinkle 2.5s ease-in-out infinite; }
        .ma-sparkle:nth-child(2) { animation-delay: 0.4s; }
        .ma-sparkle:nth-child(3) { animation-delay: 0.8s; }
        .ma-sparkle:nth-child(4) { animation-delay: 1.2s; }
        .ma-sparkle:nth-child(5) { animation-delay: 1.6s; }
        .ma-sparkle:nth-child(6) { animation-delay: 0.2s; }
        .ma-sparkle:nth-child(7) { animation-delay: 1.0s; }
      `}</style>

      {/* Sparkles */}
      {SPARKLES.map((s, i) => (
        <svg
          key={i}
          className="ma-sparkle absolute pointer-events-none"
          style={{ width: s.size, height: s.size, top: s.top, left: (s as {left?:string}).left, right: (s as {right?:string}).right }}
          viewBox="0 0 24 24"
        >
          <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" fill="white" />
        </svg>
      ))}

      {/* Left feather */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{ left: "3%", top: "15%", animation: "ma-feather-l 6s ease-in-out infinite", zIndex: 2 }}
      >
        <svg width="80" height="200" viewBox="0 0 80 200" fill="none">
          <ellipse cx="40" cy="80" rx="28" ry="70" fill="white" fillOpacity="0.18" />
          <ellipse cx="40" cy="80" rx="18" ry="60" fill="white" fillOpacity="0.25" />
          <line x1="40" y1="0" x2="40" y2="200" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
          {[20,40,60,80,100,120,140,160].map((y,i) => (
            <line key={i} x1="40" y1={y} x2={40 - (20 - Math.abs(i-4)*3)} y2={y-8}
              stroke="white" strokeOpacity="0.2" strokeWidth="1" />
          ))}
          {[20,40,60,80,100,120,140,160].map((y,i) => (
            <line key={`r${i}`} x1="40" y1={y} x2={40 + (20 - Math.abs(i-4)*3)} y2={y-8}
              stroke="white" strokeOpacity="0.2" strokeWidth="1" />
          ))}
        </svg>
      </div>

      {/* Right feather */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{ right: "4%", top: "10%", animation: "ma-feather-r 7s ease-in-out infinite", zIndex: 2 }}
      >
        <svg width="70" height="180" viewBox="0 0 70 180" fill="none">
          <ellipse cx="35" cy="70" rx="24" ry="62" fill="white" fillOpacity="0.15" />
          <ellipse cx="35" cy="70" rx="14" ry="52" fill="white" fillOpacity="0.22" />
          <line x1="35" y1="0" x2="35" y2="180" stroke="white" strokeOpacity="0.30" strokeWidth="1.5" />
          {[20,40,60,80,100,120,140].map((y,i) => (
            <line key={i} x1="35" y1={y} x2={35 - (18 - Math.abs(i-3.5)*2.5)} y2={y-7}
              stroke="white" strokeOpacity="0.18" strokeWidth="1" />
          ))}
          {[20,40,60,80,100,120,140].map((y,i) => (
            <line key={`r${i}`} x1="35" y1={y} x2={35 + (18 - Math.abs(i-3.5)*2.5)} y2={y-7}
              stroke="white" strokeOpacity="0.18" strokeWidth="1" />
          ))}
        </svg>
      </div>

      {/* Product — centered upper area, floating + tilted */}
      <div
        className="flex items-center justify-center"
        style={{
          flex: "1",
          paddingTop: "5rem",
          paddingBottom: "0.5rem",
          position: "relative",
          zIndex: 10,
          ...fade,
        }}
      >
        <img
          src={slide.img}
          alt="Mom Anion product"
          style={{
            height: "clamp(180px, 38vh, 340px)",
            width: "auto",
            maxWidth: "72vw",
            objectFit: "contain",
            animation: "ma-float-hero 4.5s ease-in-out infinite",
            filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.5))",
          }}
        />
      </div>

      {/* Subtitle — small italic pink, left-aligned */}
      <div
        className="px-6 lg:px-14"
        style={{ zIndex: 15, marginBottom: "0.1rem", ...fade }}
      >
        <span
          style={{
            fontFamily: '"Badrock Regular", sans-serif',
            fontSize: "clamp(22px, 3vw, 42px)",
            color: "#EC4899",
            fontStyle: "italic",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {slide.subtitle}
        </span>
      </div>

      {/* Massive full-width main word */}
      <div
        style={{
          zIndex: 15,
          lineHeight: 0.85,
          overflow: "hidden",
          paddingLeft: "0.1em",
          paddingRight: "0.1em",
          ...fade,
        }}
      >
        <div
          style={{
            fontFamily: '"Badrock Regular", sans-serif',
            fontSize: "clamp(80px, 19vw, 290px)",
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 0.88,
            whiteSpace: "nowrap",
          }}
        >
          {slide.main}
        </div>
      </div>

      {/* 4-feature bar */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-0"
        style={{
          zIndex: 15,
          borderTop: "1px solid rgba(255,255,255,0.15)",
          marginTop: "0.75rem",
        }}
      >
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className="flex items-center gap-3 px-4 lg:px-6 py-3"
            style={{
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none",
            }}
          >
            <span style={{ fontSize: "20px", flexShrink: 0 }}>{f.icon}</span>
            <div>
              <div
                style={{
                  fontFamily: "Onest, sans-serif",
                  fontSize: "clamp(10px, 1vw, 14px)",
                  fontWeight: 700,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                }}
              >
                {f.title}
              </div>
              <div
                style={{
                  fontFamily: "Onest, sans-serif",
                  fontSize: "clamp(10px, 1vw, 14px)",
                  color: "rgba(255,255,255,0.6)",
                  whiteSpace: "nowrap",
                }}
              >
                {f.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot nav — absolute top-right */}
      <div
        className="absolute flex gap-2"
        style={{ top: "80px", right: "48px", zIndex: 30 }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              borderRadius: "999px",
              backgroundColor: i === current ? "#EC4899" : "rgba(255,255,255,0.35)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
