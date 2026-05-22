"use client";
import { useState } from "react";
import { X } from "lucide-react";

const announcements = [
  {
    text: "Ends Today",
    highlight: "Up to 50% off Sitewide*",
    extra: "Extra 20% off orders of $100+*",
    links: [
      { label: "Women", href: "/en/women" },
      { label: "Men", href: "/en/men" },
      { label: "Details", href: "#" },
    ],
  },
  {
    text: "My Calvin Rewards Members",
    highlight: "Earn a $10 reward when you participate with Re-Calvin",
    links: [
      { label: "Explore Now", href: "#" },
      { label: "Details", href: "#" },
    ],
  },
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const ann = announcements[current];

  return (
    <div className="bg-black text-white text-[11px] font-medium tracking-wide relative flex items-center justify-center min-h-[30px] py-1.5 px-10">
      <div className="flex items-center gap-2 text-center flex-wrap justify-center">
        {ann.text && <span className="font-bold">{ann.text}</span>}
        {ann.highlight && <span>{ann.highlight}.</span>}
        {ann.extra && <span>{ann.extra}</span>}
        <span className="flex items-center gap-2">
          {ann.links.map((l) => (
            <a key={l.label} href={l.href} className="underline underline-offset-2 hover:opacity-70">
              {l.label}
            </a>
          ))}
        </span>
      </div>

      {announcements.length > 1 && (
        <div className="absolute left-4 flex gap-1">
          {announcements.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
              aria-label={`Announcement ${i + 1}`}
            />
          ))}
        </div>
      )}

      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 hover:opacity-70"
        aria-label="Close"
      >
        <X size={14} />
      </button>
    </div>
  );
}
