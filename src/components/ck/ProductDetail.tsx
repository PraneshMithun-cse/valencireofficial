"use client";
import Header from "@/components/ck/Header";
import Footer from "@/components/ck/Footer";
import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import type { ProductData } from "@/lib/products";

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: "1px solid #e8e8e8" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#333" }}>
          {title}
        </span>
        <span style={{ fontSize: 18, color: "#333", lineHeight: 1, fontWeight: 300 }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 14, fontSize: 12, color: "#636262", lineHeight: 1.75 }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail({ product }: { product: ProductData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragDeltaX = useRef(0);
  const totalSlides = product.images.length;

  const sliderRef = useRef<HTMLDivElement>(null);
  const autoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cooldown = useRef(false);

  const goTo = useCallback((i: number) => {
    setCurrentSlide(Math.max(0, Math.min(i, totalSlides - 1)));
  }, [totalSlides]);

  const resetAutoTimer = useCallback(() => {
    if (autoTimer.current) clearTimeout(autoTimer.current);
    autoTimer.current = setTimeout(() => { autoTimer.current = null; }, 6000);
  }, []);

  // Auto-advance every 5s, pause after user interaction for 6s
  useEffect(() => {
    const id = setInterval(() => {
      if (autoTimer.current) return;
      setCurrentSlide(c => (c + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(id);
  }, [totalSlides]);

  // 2-finger horizontal trackpad scroll
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (cooldown.current) return;
      if (e.deltaX > 30) {
        cooldown.current = true;
        resetAutoTimer();
        setCurrentSlide(c => Math.min(c + 1, totalSlides - 1));
        setTimeout(() => { cooldown.current = false; }, 600);
      } else if (e.deltaX < -30) {
        cooldown.current = true;
        resetAutoTimer();
        setCurrentSlide(c => Math.max(c - 1, 0));
        setTimeout(() => { cooldown.current = false; }, 600);
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [totalSlides, resetAutoTimer]);

  // Touch/mouse drag support
  const onDragStart = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragDeltaX.current = 0;
    resetAutoTimer();
  };
  const onDragMove = (clientX: number) => {
    if (!isDragging) return;
    dragDeltaX.current = clientX - dragStartX.current;
  };
  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDeltaX.current < -60 && currentSlide < totalSlides - 1) {
      goTo(currentSlide + 1);
    } else if (dragDeltaX.current > 60 && currentSlide > 0) {
      goTo(currentSlide - 1);
    }
    dragDeltaX.current = 0;
  };

  // Each slide: 100vw × 100vh — full screen per image
  const slideTransform = `translateX(calc(${-currentSlide} * 100vw))`;

  return (
    <>
      <Header />

      {/* ── HERO: full-width horizontal image slider ── */}
      <div
        ref={sliderRef}
        data-nav-theme="light"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          background: "#000",
          overflow: "hidden",
          userSelect: "none",
        }}
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseMove={(e) => onDragMove(e.clientX)}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
        onTouchEnd={onDragEnd}
      >
        {/* Image strip */}
        <div
          style={{
            display: "flex",
            height: "100%",
            transform: slideTransform,
            transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {product.images.map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: "100vw",
                height: "100%",
                position: "relative",
              }}
            >
              <Image
                src={src}
                alt={product.name}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Prev arrow */}
        {currentSlide > 0 && (
          <button
            onClick={() => goTo(currentSlide - 1)}
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 40,
              height: 40,
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.85)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#111",
            }}
          >
            <ChevronLeft />
          </button>
        )}

        {/* Next arrow */}
        {currentSlide < totalSlides - 1 && (
          <button
            onClick={() => goTo(currentSlide + 1)}
            style={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 40,
              height: 40,
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.85)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#111",
            }}
          >
            <ChevronRight />
          </button>
        )}

        {/* Slide dots — below the image area */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 0,
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            gap: 8,
            zIndex: 10,
          }}
        >
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === currentSlide ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === currentSlide ? "#333" : "#bbb",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* ── Floating info panel — absolute bottom-right ── */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            right: 32,
            width: 394,
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {/* Breadcrumb row */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", margin: 0 }}>
              <a href="/en/collections" style={{ color: "#999", textDecoration: "none" }}>Collection</a>
              {" / "}
              <span>{product.category === "shirts" ? "Shirts" : "Trousers & Pants"}</span>
            </p>
          </div>

          {/* ── Card 1: Name + Price + Description ── */}
          <div
            style={{
              background: "#fff",
              borderRadius: 14,
              padding: "16px 10px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 25,
            }}
          >
            {/* Name + Price */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <h1
                style={{
                  fontSize: 17,
                  fontWeight: 500,
                  color: "rgb(51,51,51)",
                  margin: 0,
                  lineHeight: 1.07,
                  maxWidth: "62%",
                  fontFamily: "inherit",
                }}
              >
                {product.name}
              </h1>
              <span style={{ fontSize: 17, fontWeight: 500, color: "rgb(51,51,51)", whiteSpace: "nowrap" }}>
                {product.price}
              </span>
            </div>

            {/* Description — 2-line clamp */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 8 }}>
              <p
                style={{
                  fontSize: 13,
                  color: "rgb(99,98,98)",
                  margin: 0,
                  lineHeight: 1.4,
                  letterSpacing: "-0.02em",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  maxWidth: 269,
                }}
              >
                {product.description}
              </p>
            </div>
          </div>

          {/* ── Card 2: Size + Cart ── */}
          <div
            style={{
              background: "#fff",
              borderRadius: 14,
              padding: "16px 10px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Size label */}
            <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
              <span style={{ fontSize: 13, color: "rgb(58,58,58)" }}>Size</span>
              {selectedSize && (
                <span style={{ fontSize: 13, color: "rgb(58,58,58)", fontWeight: 500 }}>{selectedSize}</span>
              )}
            </div>

            {/* Size buttons — CIRCULAR */}
            <ul
              style={{
                display: "flex",
                gap: 24,
                listStyle: "none",
                padding: 0,
                margin: 0,
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {product.sizes.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => setSelectedSize(s)}
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "9999px",
                      background: selectedSize === s ? "#343434" : "#fff",
                      color: selectedSize === s ? "#fff" : "#000",
                      fontSize: 13,
                      fontWeight: 400,
                      border: selectedSize === s ? "1.5px solid #343434" : "1px solid transparent",
                      cursor: "pointer",
                      boxShadow: "0 0 4px rgba(0,0,0,0.08)",
                      transition: "all 0.18s ease",
                    }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div style={{ height: 0.5, background: "rgb(143,143,143)", width: "100%" }} />

            {/* Size guide link */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: -8 }}>
              <span
                style={{
                  fontSize: 11,
                  color: "rgb(99,98,98)",
                  cursor: "pointer",
                  borderBottom: "1px solid rgb(180,180,180)",
                  paddingBottom: 1,
                  letterSpacing: "0.02em",
                }}
              >
                Size guide
              </span>
              <span style={{ fontSize: 11, color: "rgb(99,98,98)" }}>
                Out of stock? Get notified.
              </span>
            </div>

            {/* Add to Cart */}
            <button
              style={{
                width: "100%",
                height: 42,
                background: "#343434",
                color: "#fff",
                borderRadius: 6,
                border: "none",
                fontSize: 16,
                fontWeight: 500,
                cursor: "pointer",
                transition: "background 0.2s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#555"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#343434"; }}
            >
              Add to Cart — {product.price}
            </button>

            {/* Free returns */}
            <span
              style={{
                fontSize: 11,
                color: "rgb(76,76,76)",
                textAlign: "center",
                display: "block",
              }}
            >
              Free shipping &amp; easy returns
            </span>
          </div>
        </div>
      </div>

      {/* ── Product details below hero ── */}
      <div
        data-nav-theme="light"
        style={{
          background: "#fff",
          padding: "48px 48px 64px",
          maxWidth: 900,
        }}
      >
        {/* Full description */}
        <p
          style={{
            fontSize: 14,
            color: "rgb(99,98,98)",
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 600,
            letterSpacing: "-0.01em",
          }}
        >
          {product.description}
        </p>

        {/* Accordions */}
        <div style={{ maxWidth: 480 }}>
          <Accordion title="Product Details">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {product.details.map((d) => (
                <li key={d} style={{ paddingBottom: 6 }}>— {d}</li>
              ))}
            </ul>
          </Accordion>
          <Accordion title="Fit & Sizing">
            <p style={{ margin: 0 }}>{product.fit}</p>
          </Accordion>
          <Accordion title="Fabric & Care">
            <p style={{ margin: 0 }}>{product.fabric}</p>
          </Accordion>
          <Accordion title="Shipping & Returns">
            <p style={{ margin: 0 }}>
              Free standard shipping on all orders. Returns accepted within 14 days of delivery — unworn with original tags attached.
            </p>
          </Accordion>
          <div style={{ borderTop: "1px solid #e8e8e8" }} />
        </div>
      </div>

      <div data-nav-theme="dark">
        <Footer />
      </div>
    </>
  );
}
