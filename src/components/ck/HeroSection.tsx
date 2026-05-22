"use client";
import { useState, useEffect, useRef } from "react";

const slides = [
  { image: "/images/model1.JPG", label: "New Collection", href: "/en/shirts" },
  { image: "/images/gray-trousers1.JPG", label: "Old Money", href: "/en/trouser-pants" },
];

function getSlideStyle(index: number, current: number, prev: number): React.CSSProperties {
  const transition = "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  const goingBackward = current < prev;

  if (index === current) {
    // Entering slide: comes from behind (backward) or from below (forward)
    return {
      transform: "translate3d(0, 0, 0)",
      zIndex: goingBackward ? 1 : 2,
      transition,
    };
  }

  // When going backward, the slide we just LEFT stays on top and slides DOWN out
  if (goingBackward && index === prev) {
    return {
      transform: "translate3d(0, 100%, 0)",
      zIndex: 2,
      transition,
    };
  }

  // Past slides (already visited) sit behind at z-depth
  if (index < current) {
    return {
      transform: "translate3d(0, 0, -1px)",
      zIndex: 1,
      transition,
    };
  }

  // Future slides wait below
  return {
    transform: "translate3d(0, 100%, 0)",
    zIndex: 1,
    transition,
  };
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const prevRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cooldown = useRef(false);

  const goTo = (i: number) => {
    prevRef.current = current;
    setCurrent(i);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 10 && rect.bottom >= window.innerHeight * 0.5;
      if (!inView) return;

      if (cooldown.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && current < slides.length - 1) {
        e.preventDefault();
        cooldown.current = true;
        prevRef.current = current;
        setCurrent((c) => Math.min(c + 1, slides.length - 1));
        setTimeout(() => { cooldown.current = false; }, 600);
      } else if (e.deltaY < 0 && current > 0) {
        e.preventDefault();
        cooldown.current = true;
        prevRef.current = current;
        setCurrent((c) => Math.max(c - 1, 0));
        setTimeout(() => { cooldown.current = false; }, 600);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [current]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black"
      style={{ height: "100vh", overflow: "hidden", perspective: "1200px" }}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            ...getSlideStyle(i, current, prevRef.current),
          }}
        >
          <img
            src={slide.image}
            alt={slide.label}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)",
            }}
          />
        </div>
      ))}

      {/* Bottom overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          userSelect: "none",
        }}
      >
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 28 : 7,
                height: 1.5,
                background: "white",
                opacity: i === current ? 1 : 0.4,
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "width 0.4s ease, opacity 0.4s ease",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", margin: "0 0 6px" }}>
          {slides[current].label}
        </p>
        <a
          href={slides[current].href}
          style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "white", textDecoration: "none" }}
        >
          Explore
        </a>
        {current < slides.length - 1 && (
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" style={{ marginTop: 10, opacity: 0.7 }}>
            <path d="M1 1L5 6L9 1" stroke="white" strokeWidth="1" />
          </svg>
        )}
      </div>

      <button
        style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "33%", zIndex: 9, background: "none", border: "none", cursor: "default" }}
        onClick={() => goTo(Math.max(current - 1, 0))}
        aria-label="Previous"
      />
      <button
        style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "33%", zIndex: 9, background: "none", border: "none", cursor: "default" }}
        onClick={() => goTo(Math.min(current + 1, slides.length - 1))}
        aria-label="Next"
      />
    </section>
  );
}
