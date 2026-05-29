"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const technologies = [
  {
    id: 1,
    name: "Anion Layer",
    summary: "Negative Ion Technology",
    description: "Our exclusive anion strip releases negative ions that neutralize harmful bacteria, reduce odor, and support a healthy vaginal environment naturally.",
    bg: "#EC4899",
    accent: "#FCD34D",
  },
  {
    id: 2,
    name: "Far Infrared",
    summary: "Thermal Wellness",
    description: "Far infrared energy gently warms the lower abdomen, improving microcirculation and helping relieve menstrual cramps and discomfort.",
    bg: "#7C3AED",
    accent: "#F9A8D4",
  },
  {
    id: 3,
    name: "Magnetic Therapy",
    summary: "Energy Balance",
    description: "Embedded micro-magnets promote blood flow and lymphatic drainage, reducing bloating and supporting overall pelvic health.",
    bg: "#1E1B4B",
    accent: "#EC4899",
  },
  {
    id: 4,
    name: "Nano Silver",
    summary: "Anti-Bacterial Shield",
    description: "Silver nanoparticles woven into the top layer provide powerful anti-bacterial protection, keeping you fresh and protected all day long.",
    bg: "#4C1D95",
    accent: "#FCD34D",
  },
  {
    id: 5,
    name: "Chitin",
    summary: "Natural Defense",
    description: "Derived from natural sources, chitin fibers create a breathable, hypoallergenic barrier that prevents irritation and supports skin health.",
    bg: "#831843",
    accent: "#F9A8D4",
  },
];

const benefits = [
  { label: "Odor Control", value: "24hr" },
  { label: "Absorption", value: "5x" },
  { label: "Softer Feel", value: "100%" },
  { label: "Leak Proof", value: "360°" },
];

export default function BenefitsSection() {
  const [active, setActive] = useState(0);
  const tech = technologies[active];

  return (
    <section
      id="benefits"
      className="w-full relative"
      style={{ backgroundColor: "#FCD34D", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      {/* Cream scallop top */}
      <div className="absolute left-0 w-full" style={{ top: "-1px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" className="w-full" style={{ display: "block" }} fill="#FDF4FF">
          <path d="M0,48 Q36,0 72,48 Q108,0 144,48 Q180,0 216,48 Q252,0 288,48 Q324,0 360,48 Q396,0 432,48 Q468,0 504,48 Q540,0 576,48 Q612,0 648,48 Q684,0 720,48 Q756,0 792,48 Q828,0 864,48 Q900,0 936,48 Q972,0 1008,48 Q1044,0 1080,48 Q1116,0 1152,48 Q1188,0 1224,48 Q1260,0 1296,48 Q1332,0 1368,48 Q1404,0 1440,48 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="px-6 lg:px-16">
        {/* Heading */}
        <div
          style={{
            fontFamily: '"Badrock Regular", sans-serif',
            fontSize: "clamp(60px, 8vw, 110px)",
            color: "#4C1D95",
            lineHeight: 0.9,
            marginBottom: "1rem",
          }}
        >
          5 Technologies
        </div>
        <p
          style={{
            fontFamily: "Onest, sans-serif",
            fontSize: "20px",
            color: "#4C1D95",
            marginBottom: "3rem",
            maxWidth: "500px",
          }}
        >
          One napkin. Five breakthrough technologies working together for your health and comfort.
        </p>

        {/* Tech tabs + detail */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab list */}
          <div className="flex flex-col gap-3 lg:w-[280px]">
            {technologies.map((t, i) => {
              const isActive = active === i;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className="relative group outline-none"
                  style={{
                    fontFamily: "Onest, sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    textAlign: "left",
                    padding: "16px 24px",
                    borderRadius: "16px",
                    border: isActive ? "none" : "2px solid rgba(76,29,149,0.35)",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    color: isActive ? "#FCD34D" : "#4C1D95",
                    zIndex: 1,
                    transition: "color 0.3s ease",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 rounded-2xl"
                      style={{ backgroundColor: t.bg, zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: "rgba(76,29,149,0.06)", zIndex: -1 }}
                    />
                  )}
                  {t.name}
                </button>
              );
            })}
          </div>

          {/* Detail card */}
          <div
            className="flex-1 rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative"
            style={{
              backgroundColor: tech.bg,
              minHeight: "340px",
              transition: "background-color 0.4s ease",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div
                  style={{
                    fontFamily: "Onest, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: tech.accent,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "12px",
                  }}
                >
                  {tech.summary}
                </div>
                <div
                  style={{
                    fontFamily: '"Badrock Regular", sans-serif',
                    fontSize: "clamp(48px, 7vw, 96px)",
                    color: "#ffffff",
                    lineHeight: 0.95,
                    marginBottom: "20px",
                  }}
                >
                  {tech.name}
                </div>
                <p
                  style={{
                    fontFamily: "Onest, sans-serif",
                    fontSize: "20px",
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: 1.7,
                    maxWidth: "520px",
                  }}
                >
                  {tech.description}
                </p>
              </motion.div>
            </AnimatePresence>
            <div
              style={{
                fontFamily: '"Badrock Regular", sans-serif',
                fontSize: "clamp(80px, 10vw, 160px)",
                color: "rgba(255,255,255,0.08)",
                lineHeight: 1,
                position: "absolute",
                bottom: "-10px",
                right: "10px",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              0{tech.id}
            </div>
          </div>
        </div>

        {/* Benefits stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {benefits.map((b) => (
            <motion.div
              key={b.label}
              whileHover={{ y: -5 }}
              className="rounded-2xl p-6 text-center"
              style={{ backgroundColor: "rgba(76,29,149,0.08)", border: "1px solid rgba(76,29,149,0.1)" }}
            >
              <div
                style={{
                  fontFamily: '"Badrock Regular", sans-serif',
                  fontSize: "clamp(42px, 6vw, 72px)",
                  color: "#4C1D95",
                  lineHeight: 1,
                }}
              >
                {b.value}
              </div>
              <div
                style={{
                  fontFamily: "Onest, sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#6B21A8",
                  marginTop: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {b.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
