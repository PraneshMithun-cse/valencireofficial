"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const DESIGN_W = 1728;
const DESIGN_H = 864;
const THEMES = ["purple", "blue"] as const;
type Theme = (typeof THEMES)[number];

export default function DirtySodaBanner() {
  const [theme, setThemeState] = useState<Theme>("purple");
  const [isBlue, setIsBlue] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [noAnim, setNoAnim] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const currentRef = useRef(0);
  const animLockRef = useRef(false);
  const dragRef = useRef<{ x0: number; dx: number; w: number } | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const bgLayerRefs = useRef<Record<Theme, HTMLDivElement | null>>({ purple: null, blue: null });
  const packRefs = useRef<Record<Theme, HTMLImageElement | null>>({ purple: null, blue: null });

  useEffect(() => {
    function fit() {
      const h = sectionRef.current?.clientHeight ?? window.innerHeight;
      const s = Math.min(window.innerWidth / DESIGN_W, h / DESIGN_H);
      document.documentElement.style.setProperty("--ma-scale", String(s));
    }
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  const setActive = useCallback((idx: number) => {
    if (animLockRef.current) return;
    idx = ((idx % THEMES.length) + THEMES.length) % THEMES.length;
    if (idx === currentRef.current) return;
    animLockRef.current = true;
    currentRef.current = idx;
    const t = THEMES[idx];
    setThemeState(t);
    setIsBlue(t === "blue");
    setTransitioning(true);
    setTimeout(() => {
      animLockRef.current = false;
      setTransitioning(false);
    }, 950);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") setActive(currentRef.current - 1);
      if (e.key === "ArrowRight") setActive(currentRef.current + 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setActive]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const id = setInterval(() => setActive(currentRef.current + 1), 5000);
    return () => clearInterval(id);
  }, [setActive]);

  const onDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (animLockRef.current) return;
    const target = e.target as HTMLElement;
    if (target.closest(".ma-navBtn") || target.closest(".ma-dot")) return;
    const x = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    dragRef.current = { x0: x, dx: 0, w: window.innerWidth };
    setNoAnim(true);
    setDragging(true);
  }, []);

  useEffect(() => {
    function onMove(e: MouseEvent | TouchEvent) {
      if (!dragRef.current) return;
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      let dx = x - dragRef.current.x0;
      const cur = currentRef.current;
      if ((cur === 0 && dx > 0) || (cur === THEMES.length - 1 && dx < 0)) dx *= 0.25;
      dragRef.current.dx = dx;
      const f = dx / dragRef.current.w;
      const curTheme = THEMES[cur];
      const otherTheme = dx < 0
        ? THEMES[Math.min(cur + 1, THEMES.length - 1)]
        : THEMES[Math.max(cur - 1, 0)];
      const otherBase = dx < 0 ? 100 : -100;
      (Object.keys(bgLayerRefs.current) as Theme[]).forEach((k) => {
        if (bgLayerRefs.current[k]) bgLayerRefs.current[k]!.style.transform = "";
      });
      if (bgLayerRefs.current[curTheme])
        bgLayerRefs.current[curTheme]!.style.transform = `translateX(${f * 100}%)`;
      if (otherTheme !== curTheme && bgLayerRefs.current[otherTheme])
        bgLayerRefs.current[otherTheme]!.style.transform = `translateX(${otherBase + f * 100}%)`;
      if (packRefs.current[curTheme])
        packRefs.current[curTheme]!.style.transform = `translateX(${f * 20}px) scale(${1 - Math.abs(f) * 0.02})`;
      if (otherTheme !== curTheme) {
        if (packRefs.current[otherTheme])
          packRefs.current[otherTheme]!.style.opacity = String(Math.min(1, Math.abs(f) * 1.4));
        if (packRefs.current[curTheme])
          packRefs.current[curTheme]!.style.opacity = String(Math.max(0, 1 - Math.abs(f) * 1.4));
      }
    }
    function onUp() {
      if (!dragRef.current) return;
      const f = dragRef.current.dx / dragRef.current.w;
      setNoAnim(false);
      setDragging(false);
      (Object.keys(bgLayerRefs.current) as Theme[]).forEach((k) => {
        if (bgLayerRefs.current[k]) bgLayerRefs.current[k]!.style.transform = "";
      });
      (Object.keys(packRefs.current) as Theme[]).forEach((k) => {
        if (packRefs.current[k]) {
          packRefs.current[k]!.style.transform = "";
          packRefs.current[k]!.style.opacity = "";
        }
      });
      if (f < -0.18) setActive(currentRef.current + 1);
      else if (f > 0.18) setActive(currentRef.current - 1);
      dragRef.current = null;
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [setActive]);

  const stageClass = ["ma-stage", theme, dragging ? "dragging" : "", noAnim ? "no-anim" : ""].filter(Boolean).join(" ");
  const bgStackClass = ["ma-bgStack", theme, transitioning ? "transitioning" : "", noAnim ? "no-anim" : ""].filter(Boolean).join(" ");

  return (
    <>
      <style>{`
        @property --ma-feel-c        { syntax: '<color>'; inherits: true; initial-value: #ff3aa3; }
        @property --ma-feel-shadow-c { syntax: '<color>'; inherits: true; initial-value: rgba(255,58,163,0.35); }
        @property --ma-pack-shadow-c { syntax: '<color>'; inherits: true; initial-value: rgba(0,0,0,0.55); }
        @property --ma-feather-tint  { syntax: '<color>'; inherits: true; initial-value: #b78bff; }
        @property --ma-feather-glow  { syntax: '<color>'; inherits: true; initial-value: rgba(181,107,255,0.45); }

        .ma-hero { position: relative; height: 100vh; overflow: hidden; background: #1a0540; transition: background 700ms ease; }
        .ma-hero.is-blue { background: #0b3c80; }

        .ma-bgStack { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
        .ma-bgLayer {
          position: absolute; inset: 0;
          will-change: transform, opacity, filter;
          transition: transform 900ms cubic-bezier(.6,.05,.2,1), opacity 700ms ease, filter 900ms cubic-bezier(.6,.05,.2,1);
        }
        .ma-bgLayer.purple { background: #1a0540 url('/images/momanion/bg-purple.webp') center center / cover no-repeat; }
        .ma-bgLayer.blue   { background: #0b3c80 url('/images/momanion/bg-blue.webp') center center / cover no-repeat; }
        .ma-bgStack.purple .ma-bgLayer.purple { transform: translateX(0); }
        .ma-bgStack.purple .ma-bgLayer.blue   { transform: translateX(100%); }
        .ma-bgStack.blue   .ma-bgLayer.purple { transform: translateX(-100%); }
        .ma-bgStack.blue   .ma-bgLayer.blue   { transform: translateX(0); }
        .ma-bgStack.no-anim .ma-bgLayer { transition: none !important; }
        .ma-bgStack.transitioning .ma-bgLayer { filter: url(#ma-bg-blur); }

        .ma-stage {
          --ma-feel-c: #ff3aa3;
          --ma-feel-shadow-c: rgba(255,58,163,0.35);
          --ma-pack-shadow-c: rgba(0,0,0,0.55);
          --ma-feather-tint: #b78bff;
          --ma-feather-glow: rgba(181,107,255,0.45);
          position: absolute; left: 50%; top: 50%;
          width: 1728px; height: 864px;
          transform: translate(-50%, -50%) scale(var(--ma-scale, 1));
          transform-origin: center center;
          overflow: visible; isolation: isolate;
          cursor: grab; user-select: none; -webkit-user-select: none;
          z-index: 1; background: transparent;
          transition: --ma-feel-c 700ms ease, --ma-feel-shadow-c 700ms ease, --ma-pack-shadow-c 700ms ease, --ma-feather-tint 700ms ease, --ma-feather-glow 700ms ease;
        }
        .ma-stage.dragging { cursor: grabbing; }
        .ma-stage.blue {
          --ma-feel-c: #0b53a8;
          --ma-feel-shadow-c: rgba(11,83,168,0.35);
          --ma-pack-shadow-c: rgba(0,30,80,0.45);
          --ma-feather-tint: #a4cdff;
          --ma-feather-glow: rgba(150,200,255,0.55);
        }

        .ma-sparkles { position: absolute; inset: 0; z-index: 1; pointer-events: none; transition: opacity 700ms ease; }
        .ma-stage.blue .ma-sparkles { opacity: 0.55; }
        .ma-sparkles svg { width: 100%; height: 100%; display: block; }

        .ma-feather {
          position: absolute; pointer-events: none; z-index: 2; opacity: 0.95;
          filter: drop-shadow(0 0 38px var(--ma-feather-glow)) drop-shadow(0 12px 26px rgba(0,0,0,0.22));
          transition: filter 700ms ease, opacity 700ms ease;
        }
        .ma-feather img { width: 100%; height: auto; display: block; -webkit-user-drag: none; }
        .ma-feather::after {
          content: ""; position: absolute; inset: 0;
          background: var(--ma-feather-tint);
          -webkit-mask: url(/images/momanion/feather-ref.webp) center / 100% 100% no-repeat;
                  mask: url(/images/momanion/feather-ref.webp) center / 100% 100% no-repeat;
          mix-blend-mode: multiply; opacity: 0.35;
          transition: background 700ms ease;
        }
        .ma-feather.f1 { width: 320px; left: 70px;   top: 220px; transform: rotate(-10deg); }
        .ma-feather.f2 { width: 340px; left: 1330px; top: 130px; transform: rotate(168deg); }
        .ma-feather.f4 { width: 430px; left: 1170px; top: 480px; transform: rotate(22deg); }
        .ma-feather.f3 { width: 280px; left: 580px;  top: 530px; transform: rotate(-22deg); opacity: 0.55;
                        filter: blur(3px) drop-shadow(0 0 30px var(--ma-feather-glow)) drop-shadow(0 6px 18px rgba(0,0,0,0.15)); }
        .ma-feather.f5 { width: 230px; left: -30px;  top: 620px; transform: rotate(14deg);  opacity: 0.45;
                        filter: blur(4px) drop-shadow(0 0 30px var(--ma-feather-glow)) drop-shadow(0 6px 18px rgba(0,0,0,0.15)); }
        .ma-feather.f3::after, .ma-feather.f5::after { opacity: 0.5; }

        .ma-headline { position: absolute; left: 0; right: 0; bottom: 60px; text-align: center; z-index: 4; pointer-events: none; }
        .ma-feel {
          display: block;
          font-family: 'Badrock Regular', 'Bebas Neue', Impact, sans-serif;
          font-size: 96px; line-height: 1; letter-spacing: 0.02em;
          color: var(--ma-feel-c);
          transform: translateX(-560px) skewX(-10deg);
          text-shadow: 0 0 24px var(--ma-feel-shadow-c), 0 4px 0 rgba(0,0,0,0.18);
          margin-bottom: -32px;
          transition: color 700ms ease, text-shadow 700ms ease;
        }
        .ma-difference {
          display: block;
          font-family: 'Badrock Regular', 'Bebas Neue', Impact, sans-serif;
          font-size: 470px; line-height: 0.86; letter-spacing: 0.005em;
          color: #ffffff;
          text-shadow: 0 0 36px rgba(255,255,255,0.18), 0 8px 18px rgba(0,0,0,0.20);
        }
        .ma-mist {
          position: absolute; left: 0; right: 0; bottom: 30px; height: 240px;
          z-index: 3; pointer-events: none;
          background:
            radial-gradient(ellipse 60% 70% at 35% 100%, rgba(255,255,255,0.12), transparent 70%),
            radial-gradient(ellipse 60% 60% at 65% 100%, rgba(255,255,255,0.10), transparent 70%);
          mix-blend-mode: screen;
        }

        .ma-packWrap {
          position: absolute; left: 50%; top: 50px; transform: translateX(-50%);
          width: 640px; z-index: 5;
          filter: drop-shadow(0 30px 60px var(--ma-pack-shadow-c)) drop-shadow(0 0 80px rgba(255,255,255,0.18));
          transition: filter 700ms ease;
        }
        .ma-packStack { display: grid; }
        .ma-packImg {
          width: 100%; height: auto; display: block; grid-area: 1 / 1;
          transition: opacity 700ms ease, transform 900ms cubic-bezier(.6,.05,.2,1);
          will-change: opacity, transform;
        }
        .ma-stage.purple .ma-packImg.purple { opacity: 1; transform: scale(1); }
        .ma-stage.purple .ma-packImg.blue   { opacity: 0; transform: scale(0.985); }
        .ma-stage.blue   .ma-packImg.purple { opacity: 0; transform: scale(0.985); }
        .ma-stage.blue   .ma-packImg.blue   { opacity: 1; transform: scale(1); }
        .ma-stage.no-anim .ma-packImg { transition: none !important; }
        .ma-packGlow {
          position: absolute; left: 50%; top: 30px; transform: translateX(-50%);
          width: 1200px; height: 700px; z-index: 4; pointer-events: none;
          background: radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,255,255,0.35), transparent 65%);
          mix-blend-mode: screen; filter: blur(20px);
        }

        .ma-features {
          position: absolute; left: 60px; right: 60px; bottom: 14px;
          z-index: 6; display: grid; grid-template-columns: repeat(4, 1fr);
          color: #ffffff;
        }
        .ma-feature { display: flex; align-items: center; gap: 14px; padding: 0 20px; min-height: 46px; }
        .ma-featureIcon { width: 32px; height: 32px; flex: 0 0 auto; display: grid; place-items: center; }
        .ma-featureIcon svg { width: 100%; height: 100%; }
        .ma-featureLabel { font-weight: 700; font-size: 16px; letter-spacing: 0.06em; line-height: 1.15; }
        .ma-featureSub   { font-weight: 400; font-size: 14px; line-height: 1.2; color: rgba(255,255,255,0.78); margin-top: 3px; }

        .ma-navBtn {
          position: absolute; top: 50%; transform: translateY(-50%); z-index: 20;
          width: 52px; height: 52px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.35); background: rgba(0,0,0,0.25);
          backdrop-filter: blur(6px); color: #fff; display: grid; place-items: center;
          cursor: pointer; transition: background 200ms ease, transform 200ms ease;
        }
        .ma-navBtn:hover  { background: rgba(0,0,0,0.45); transform: translateY(-50%) scale(1.06); }
        .ma-navBtn:active { transform: translateY(-50%) scale(0.96); }
        .ma-navBtn svg { width: 22px; height: 22px; }
        .ma-navPrev { left: 24px; }
        .ma-navNext { right: 24px; }

        .ma-dots { position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%); z-index: 20; display: flex; gap: 10px; }
        .ma-dot  { width: 36px; height: 4px; border-radius: 2px; background: rgba(255,255,255,0.4); border: 0; padding: 0; cursor: pointer; transition: background 300ms ease, width 300ms ease; }
        .ma-dot.active { background: #fff; width: 56px; }

        @keyframes ma-pack-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        .ma-packFloat { animation: ma-pack-float 5.5s ease-in-out infinite; will-change: transform; }

        @keyframes ma-feather-a { 0%,100% { transform: translate(0,0); } 50% { transform: translate(8px,-10px); } }
        @keyframes ma-feather-b { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-10px,8px); } }
        @keyframes ma-feather-c { 0%,100% { transform: translate(0,0); } 50% { transform: translate(6px,-8px); } }
        .ma-feather.f1 img { animation: ma-feather-a  9s ease-in-out  0s   infinite; }
        .ma-feather.f2 img { animation: ma-feather-b 11s ease-in-out -2s   infinite; }
        .ma-feather.f3 img { animation: ma-feather-c  8s ease-in-out -1s   infinite; }
        .ma-feather.f4 img { animation: ma-feather-a 12s ease-in-out -3s   infinite; }
        .ma-feather.f5 img { animation: ma-feather-b 10s ease-in-out -1.5s infinite; }
        .ma-feather::after { animation: inherit; }
        @media (prefers-reduced-motion: reduce) { .ma-packFloat, .ma-feather img, .ma-feather::after { animation: none; } }
      `}</style>

      <section ref={sectionRef} className={`ma-hero${isBlue ? " is-blue" : ""}`}>
        <svg width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }} aria-hidden="true">
          <defs>
            <filter id="ma-bg-blur" x="-5%" y="-5%" width="110%" height="110%">
              <feGaussianBlur stdDeviation="18 0" />
            </filter>
          </defs>
        </svg>

        <div className={bgStackClass}>
          <div className="ma-bgLayer purple" ref={(el) => { bgLayerRefs.current.purple = el; }} />
          <div className="ma-bgLayer blue"   ref={(el) => { bgLayerRefs.current.blue = el; }} />
        </div>

        <div className={stageClass} onMouseDown={onDown} onTouchStart={onDown}>
          <div className="ma-sparkles" aria-hidden="true">
            <svg viewBox="0 0 1728 864" preserveAspectRatio="none">
              <defs>
                <g id="ma-sp">
                  <path d="M0,-10 L1.2,-1.2 L10,0 L1.2,1.2 L0,10 L-1.2,1.2 L-10,0 L-1.2,-1.2 Z" fill="white" />
                </g>
              </defs>
              <use href="#ma-sp" transform="translate(240 220) scale(1.0)" opacity="0.85" />
              <use href="#ma-sp" transform="translate(1480 160) scale(1.2)" opacity="0.9" />
              <use href="#ma-sp" transform="translate(1560 380) scale(0.8)" opacity="0.8" />
              <use href="#ma-sp" transform="translate(320 520) scale(0.7)" opacity="0.7" />
              <use href="#ma-sp" transform="translate(1180 80) scale(0.6)" opacity="0.7" />
              <use href="#ma-sp" transform="translate(870 60) scale(0.7)" opacity="0.6" />
              <use href="#ma-sp" transform="translate(140 460) scale(0.6)" opacity="0.6" />
              <use href="#ma-sp" transform="translate(1620 540) scale(0.7)" opacity="0.7" />
            </svg>
          </div>

          <div className="ma-feather f1" aria-hidden="true"><img src="/images/momanion/feather-ref.webp" alt="" /></div>
          <div className="ma-feather f2" aria-hidden="true"><img src="/images/momanion/feather-ref.webp" alt="" /></div>
          <div className="ma-feather f3" aria-hidden="true"><img src="/images/momanion/feather-ref.webp" alt="" /></div>
          <div className="ma-feather f4" aria-hidden="true"><img src="/images/momanion/feather-ref.webp" alt="" /></div>
          <div className="ma-feather f5" aria-hidden="true"><img src="/images/momanion/feather-ref.webp" alt="" /></div>

          <div className="ma-mist" aria-hidden="true" />

          <div className="ma-headline">
            <span className="ma-feel">FEEL THE</span>
            <span className="ma-difference">DIFFERENCE</span>
          </div>

          <div className="ma-packGlow" aria-hidden="true" />
          <div className="ma-packWrap">
            <div className="ma-packFloat">
              <div className="ma-packStack">
                <img className="ma-packImg purple" src="/images/momanion/pack-purple.webp" alt="MOM anion XL"
                  ref={(el) => { packRefs.current.purple = el; }} />
                <img className="ma-packImg blue" src="/images/momanion/pack-blue.webp" alt="MOM anion XXL"
                  ref={(el) => { packRefs.current.blue = el; }} />
              </div>
            </div>
          </div>

          <div className="ma-features">
            <div className="ma-feature">
              <div className="ma-featureIcon" aria-hidden="true">
                <svg viewBox="0 0 64 64" fill="none">
                  <path d="M32 18c-4-8-14-12-22-8-3 1.5-4 6-2 10 1.7 3.5 6 6 10 6-2 3-3 7 0 10 3.5 3.5 10 3 14-2-4 5-10.5 5.5-14 2 3-3 2-7 0-10 4 0 8.3-2.5 10-6 2-4 1-8.5-2-10-8-4-18 0-22 8z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="ma-featureLabel">NATURAL ULTRA SOFT</div>
                <div className="ma-featureSub">Breathable Napkins</div>
              </div>
            </div>
            <div className="ma-feature">
              <div className="ma-featureIcon" aria-hidden="true">
                <svg viewBox="0 0 64 64" fill="none">
                  <path d="M32 6 L54 14 V32 C54 46 44 56 32 60 C20 56 10 46 10 32 V14 Z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="ma-featureLabel">FIVE ADVANCED TECHNOLOGY</div>
                <div className="ma-featureSub">Superior Protection</div>
              </div>
            </div>
            <div className="ma-feature">
              <div className="ma-featureIcon" aria-hidden="true">
                <svg viewBox="0 0 64 64" fill="none">
                  <path d="M52 8 C 30 10, 14 22, 12 42 C 11 52, 16 58, 22 58 C 38 58, 54 38, 54 12 C 54 10, 53 8, 52 8 Z" fill="currentColor" />
                  <path d="M50 12 C 36 28, 24 42, 18 56" stroke="rgba(0,0,0,0.18)" strokeWidth="1.4" fill="none" />
                </svg>
              </div>
              <div>
                <div className="ma-featureLabel">ECO-FRIENDLY</div>
                <div className="ma-featureSub">Next Generation Pads</div>
              </div>
            </div>
            <div className="ma-feature">
              <div className="ma-featureIcon" aria-hidden="true">
                <svg viewBox="0 0 64 64" fill="none">
                  <path d="M44 10 C 30 12, 20 24, 20 38 C 20 50, 30 58, 42 58 C 50 58, 56 54, 60 48 C 50 48, 40 40, 40 28 C 40 20, 42 14, 44 10 Z" fill="currentColor" />
                  <path d="M14 14 L16 18 L20 20 L16 22 L14 26 L12 22 L8 20 L12 18 Z" fill="currentColor" />
                  <path d="M10 38 L11 40 L13 41 L11 42 L10 44 L9 42 L7 41 L9 40 Z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="ma-featureLabel">LONG LASTING</div>
                <div className="ma-featureSub">Day &amp; Night Protection</div>
              </div>
            </div>
          </div>
        </div>

        <button className="ma-navBtn ma-navPrev" onClick={() => setActive(currentRef.current - 1)} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 5 L8 12 L15 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="ma-navBtn ma-navNext" onClick={() => setActive(currentRef.current + 1)} aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 5 L16 12 L9 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="ma-dots" role="tablist" aria-label="Hero slides">
          {THEMES.map((t, i) => (
            <button
              key={t}
              className={`ma-dot${theme === t ? " active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              aria-selected={theme === t}
              role="tab"
            />
          ))}
        </div>

        {/* Gradient fade at bottom — blends bg image into solid #1a0540 matching the Products scallop */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "120px", zIndex: 16, pointerEvents: "none",
          background: "linear-gradient(to bottom, transparent, #1a0540)",
        }} />
      </section>
    </>
  );
}
