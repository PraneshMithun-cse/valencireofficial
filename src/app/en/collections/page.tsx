"use client";
import Header from "@/components/ck/Header";
import Footer from "@/components/ck/Footer";
import Image from "next/image";
import { useState } from "react";

interface Product {
  name: string;
  price: string;
  image: string;
  hoverImage?: string;
  href: string;
}

const shirts: Product[] = [
  { name: "Sky Blue Linen Shirt",   price: "₹2,999", image: "/images/skyblue1.JPG",       hoverImage: "/images/skyblue2.JPG",       href: "/en/products/sky-blue-linen-shirt" },
  { name: "Black Oxford Shirt",     price: "₹3,499", image: "/images/BLACKSHIRT.JPG",                                                href: "/en/products/black-oxford-shirt" },
  { name: "Old Money Glow Shirt",   price: "₹3,299", image: "/images/oldmoney-glow1.JPG",  hoverImage: "/images/oldmoney-glow2.JPG", href: "/en/products/old-money-glow-shirt" },
  { name: "Old Money Linen Shirt",  price: "₹3,199", image: "/images/oldmoney-glow3.JPG",  hoverImage: "/images/oldmoney-glow4.JPG", href: "/en/products/old-money-linen-shirt" },
];

const trousers: Product[] = [
  { name: "Burgundy Pleated Trousers", price: "₹3,999", image: "/images/burgundy-trousers1.JPG", hoverImage: "/images/burgundy-trousers2.JPG", href: "/en/products/burgundy-pleated-trousers" },
  { name: "Burgundy Trousers II",      price: "₹3,799", image: "/images/burgundy-trousers3.JPG", hoverImage: "/images/burgundy-trousers4.JPG", href: "/en/products/burgundy-trousers-ii" },
  { name: "Gray Pleated Trousers",     price: "₹3,499", image: "/images/gray-trousers1.JPG",     hoverImage: "/images/gray-trousers2.JPG",     href: "/en/products/gray-pleated-trousers" },
  { name: "Gray Trousers II",          price: "₹3,299", image: "/images/gray-trousers2.JPG",                                                    href: "/en/products/gray-trousers-ii" },
];

function ProductCard({ product, isLast }: { product: Product; isLast?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={product.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        borderRight: isLast ? "none" : "1px solid #e8e8e8",
        padding: "0 0 24px",
      }}
    >
      {/* Image — fills card width, 3:4 aspect */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "2/3", overflow: "hidden", background: "#f5f5f3" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-top"
          sizes="25vw"
          style={{ opacity: hovered && product.hoverImage ? 0 : 1, transition: "opacity 0.4s ease" }}
        />
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt={product.name}
            fill
            className="object-cover object-top"
            sizes="25vw"
            style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.4s ease" }}
          />
        )}
      </div>
      {/* Name + price */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "10px 20px 0" }}>
        <span style={{ fontSize: 11, fontWeight: 400, color: "#111" }}>{product.name}</span>
        <span style={{ fontSize: 11, fontWeight: 400, color: "#111", whiteSpace: "nowrap", marginLeft: 8 }}>{product.price}</span>
      </div>
    </a>
  );
}

const LABEL: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 400,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#111",
};

export default function CollectionsPage() {
  return (
    <>
      <Header />

      {/* ── Section 1: DoubleEditoCover — hero, full bleed from y=0 ── */}
      <div data-nav-theme="light" style={{ display: "flex", width: "100%", height: "100vh" }}>

        {/* Left 50%: full-bleed editorial image */}
        <div style={{ position: "relative", width: "50%", height: "100%", overflow: "hidden" }}>
          <Image
            src="/images/model1.JPG"
            alt="Valenciré"
            fill
            className="object-cover object-top"
            sizes="50vw"
            priority
          />
          {/* Bottom-left label overlaid on image */}
          <div style={{ position: "absolute", bottom: 24, left: 20 }}>
            <span style={{ ...LABEL, color: "#fff" }}>Spring / Summer 2025</span>
          </div>
        </div>

        {/* Right 50%: white bg + offset product image */}
        <div style={{ position: "relative", width: "50%", height: "100%", background: "#fff" }}>
          {/* Product image — centered in panel, ~55% width, ~56% height, vertically centered */}
          <div style={{ position: "absolute", top: "22%", bottom: "22%", left: "21%", right: "24%" }}>
            <Image
              src="/images/skyblue3.JPG"
              alt="Sky Blue Shirt"
              fill
              className="object-cover object-top"
              sizes="28vw"
            />
          </div>
          {/* Bottom-right label */}
          <div style={{ position: "absolute", bottom: 24, left: 20 }}>
            <span style={LABEL}>New Arrivals</span>
          </div>
        </div>
      </div>

      {/* ── Section 2: Shirts ProductGrid — no header, 4 columns ── */}
      <div data-nav-theme="light" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "#fff" }}>
        {shirts.map((p, i) => (
          <ProductCard key={p.name} product={p} isLast={i === shirts.length - 1} />
        ))}
      </div>

      {/* ── Section 3: DoubleEditoCover — trousers break ── */}
      <div data-nav-theme="light" style={{ display: "flex", width: "100%", height: "100vh" }}>

        {/* Left 50%: white bg + labels at top + centered product */}
        <div style={{ position: "relative", width: "50%", height: "100%", background: "#fff" }}>
          {/* Top labels */}
          <div style={{ position: "absolute", top: 20, left: 20, right: 20, display: "flex", justifyContent: "space-between" }}>
            <span style={LABEL}>Trousers &amp; Pants</span>
            <span style={LABEL}>SS 2025</span>
          </div>
          {/* Product image — same proportions as hero right */}
          <div style={{ position: "absolute", top: "22%", bottom: "22%", left: "21%", right: "24%" }}>
            <Image
              src="/images/burgundy-trousers1.JPG"
              alt="Burgundy Pleated Trousers"
              fill
              className="object-cover object-top"
              sizes="28vw"
            />
          </div>
        </div>

        {/* Right 50%: large editorial, full bleed */}
        <div style={{ position: "relative", width: "50%", height: "100%", overflow: "hidden" }}>
          <Image
            src="/images/oldmoney-glow1.JPG"
            alt="Old Money Editorial"
            fill
            className="object-cover object-top"
            sizes="50vw"
          />
        </div>
      </div>

      {/* ── Section 4: Trousers ProductGrid ── */}
      <div data-nav-theme="light" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "#fff" }}>
        {trousers.map((p, i) => (
          <ProductCard key={p.name} product={p} isLast={i === trousers.length - 1} />
        ))}
      </div>

      {/* ── Section 5: Final editorial image — full width ── */}
      <div data-nav-theme="dark" style={{ position: "relative", width: "100%", height: "90vh", overflow: "hidden" }}>
        <Image
          src="/images/gray-trousers1.JPG"
          alt="Valenciré — Old Money"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)",
        }} />
        <div style={{ position: "absolute", bottom: 48, left: 48 }}>
          <h2 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(40px, 5vw, 80px)",
            fontWeight: 300, letterSpacing: "-0.02em",
            color: "#fff", margin: 0, lineHeight: 1,
          }}>Old Money</h2>
          <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginTop: 14 }}>
            Classic silhouettes, modern gentleman
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <div data-nav-theme="dark">
        <Footer />
      </div>
    </>
  );
}
