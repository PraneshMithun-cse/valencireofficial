"use client";

import { useState } from "react";

interface ColorOption {
  name: string;
  hex: string;
}

interface ProductInfoPanelProps {
  name: string;
  price: number;
  description: string;
  colors: ColorOption[];
  sizes: string[];
}

export default function ProductInfoPanel({
  name,
  price,
  description,
  colors,
  sizes,
}: ProductInfoPanelProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name ?? "");
  const [selectedSize, setSelectedSize] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!selectedSize) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="md:absolute md:bottom-7 md:right-8 z-40 w-full md:w-[394px]">
      {/* Wishlist button — top right of panel */}
      <div className="hidden md:flex justify-end mb-2">
        <button
          aria-label="Add to wishlist"
          className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm grid place-items-center hover:bg-white transition-colors shadow-sm"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      <div className="bg-white/70 md:bg-white/70 backdrop-blur-[10px] rounded-[14px] px-[14px] pt-4 pb-[14px] flex flex-col gap-4">
        {/* Title + price */}
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-[15px] font-semibold text-[#222] leading-tight tracking-[-0.01em]">
            {name}
          </h1>
          <span className="text-[15px] font-semibold text-[#222] shrink-0">${price}</span>
        </div>

        {/* Description */}
        <div className="text-[12px] text-[#555] leading-[1.5] -mt-2">
          <span>{expanded ? description : description.slice(0, 80) + (description.length > 80 ? "..." : "")}</span>
          {description.length > 80 && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="ml-1 text-[#222] underline text-[12px] hover:no-underline"
            >
              {expanded ? "Less" : "Read more"}
            </button>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e5e5e5]" />

        {/* Color */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[12px] text-[#888]">Color</span>
            <span className="text-[12px] font-medium text-[#222]">{selectedColor}</span>
          </div>
          <div className="flex gap-2">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c.name)}
                aria-label={c.name}
                className={`w-5 h-5 rounded-full transition-all ${selectedColor === c.name ? "ring-2 ring-offset-1 ring-[#222]" : "hover:ring-2 hover:ring-offset-1 hover:ring-[#888]"}`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="flex flex-col gap-2">
          <p className="text-[11px] text-[#888]">Out of stock? Get notified when it&apos;s back.</p>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`w-10 h-10 rounded-full text-[13px] font-medium transition-all ${
                  selectedSize === s
                    ? "bg-[#222] text-white"
                    : "bg-transparent border border-[#d0d0d0] text-[#222] hover:border-[#222]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Bag */}
        <button
          onClick={handleAdd}
          disabled={!selectedSize}
          className={`w-full h-[42px] rounded-md text-[14px] font-medium transition-all ${
            added
              ? "bg-[#4caf50] text-white"
              : selectedSize
              ? "bg-[#343434] text-white hover:bg-[#1a1a1a]"
              : "bg-[#d8d8d8] text-[#888] cursor-not-allowed"
          }`}
        >
          {added ? "Added!" : "Add to Bag"}
        </button>

        <p className="text-center text-[11px] text-[#888] -mt-2">Free Returns</p>
      </div>
    </div>
  );
}
