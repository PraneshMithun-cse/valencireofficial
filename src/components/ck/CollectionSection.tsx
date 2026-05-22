"use client";
import Image from "next/image";

export default function CollectionSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
      }}
    >
      <Image
        src="/images/collection-hero.png"
        alt="Valenciré Collection"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
        priority
      />

      {/* CTA — underline style matching other sections */}
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 5,
        }}
      >
        <a
          href="/en/collections"
          className="text-[13px] underline underline-offset-4 hover:opacity-70 transition-opacity"
          style={{
            color: "#fff",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Shop The Collection
        </a>
      </div>
    </section>
  );
}
