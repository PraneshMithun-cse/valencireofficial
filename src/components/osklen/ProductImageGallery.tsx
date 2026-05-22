"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

export interface ProductImage {
  src: string;
  alt: string;
}

function Lightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: ProductImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const startPan = useRef({ x: 0, y: 0 });

  const prev = () => { setPan({ x: 0, y: 0 }); setIndex((i) => (i - 1 + images.length) % images.length); };
  const next = () => { setPan({ x: 0, y: 0 }); setIndex((i) => (i + 1) % images.length); };

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startPos.current = { x: e.clientX, y: e.clientY };
    startPan.current = { ...pan };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;
    setPan({ x: startPan.current.x + dx, y: startPan.current.y + dy });
  };
  const onMouseUp = () => { isDragging.current = false; };

  const onTouchStart = (e: React.TouchEvent) => {
    startPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    startPan.current = { ...pan };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    const dx = e.touches[0].clientX - startPos.current.x;
    const dy = e.touches[0].clientY - startPos.current.y;
    setPan({ x: startPan.current.x + dx, y: startPan.current.y + dy });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center" onClick={onClose}>
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-colors"
        aria-label="Close"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-sm font-light tracking-widest">
        {index + 1} / {images.length}
      </div>

      {/* Image — pannable */}
      <div
        className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        <div
          className="absolute inset-0 select-none"
          style={{ transform: `translate(${pan.x}px, ${pan.y}px)`, transition: isDragging.current ? "none" : "transform 0.15s ease-out" }}
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            sizes="100vw"
            className="object-contain"
            draggable={false}
            priority
          />
        </div>
      </div>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-colors"
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-colors"
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setPan({ x: 0, y: 0 }); setIndex(i); }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? "bg-white scale-125" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

interface ProductImageGalleryProps {
  images: ProductImage[];
  children?: React.ReactNode;
}

export default function ProductImageGallery({ images, children }: ProductImageGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    didDrag.current = false;
    startX.current = e.pageX;
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.pageX - startX.current;
    if (Math.abs(dx) > 3) didDrag.current = true;
    trackRef.current.scrollLeft = scrollStart.current - dx;
  };
  const onMouseUp = () => { isDragging.current = false; };

  const onScroll = useCallback(() => {
    if (!trackRef.current) return;
    const w = trackRef.current.clientWidth;
    if (w === 0) return;
    setCurrent(Math.round(trackRef.current.scrollLeft / w));
  }, []);

  const goTo = (idx: number) => {
    if (!trackRef.current) return;
    trackRef.current.scrollTo({ left: idx * trackRef.current.clientWidth, behavior: "smooth" });
  };

  const openLightbox = () => setLightboxOpen(true);

  const scrollDown = () => window.scrollBy({ top: window.innerHeight, behavior: "smooth" });

  return (
    <>
      <div className="relative w-full bg-[#f0efed]">
        {/* Scrollable image track */}
        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onScroll={onScroll}
          className="flex h-screen overflow-x-auto cursor-grab active:cursor-grabbing select-none [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 w-screen h-screen [scroll-snap-align:start]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-40">
          <button
            onClick={openLightbox}
            aria-label="Expand image"
            className="w-[26px] h-[26px] rounded-full bg-white/80 backdrop-blur-sm grid place-items-center hover:bg-white transition-colors shadow-sm"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
          </button>

          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"}`}
              />
            ))}
          </div>

          <button
            onClick={scrollDown}
            aria-label="Scroll down"
            className="w-[26px] h-[26px] rounded-full bg-white/80 backdrop-blur-sm grid place-items-center hover:bg-white transition-colors shadow-sm"
          >
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 1v10M1 7l4 4 4-4" />
            </svg>
          </button>
        </div>

        {/* Product panel slot — absolutely positioned over gallery */}
        {children}
      </div>

      {lightboxOpen && (
        <Lightbox images={images} initialIndex={current} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  );
}
