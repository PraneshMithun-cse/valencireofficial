const categories = [
  {
    title: "New Arrivals",
    links: [
      { label: "Women", href: "/en/women/new-arrivals" },
      { label: "Men", href: "/en/men/new-arrivals" },
    ],
  },
  {
    title: "Tees",
    links: [
      { label: "Women", href: "/en/women/tees" },
      { label: "Men", href: "/en/men/tees" },
    ],
  },
  {
    title: "Shorts",
    links: [
      { label: "Women", href: "/en/women/shorts" },
      { label: "Men", href: "/en/men/shorts" },
    ],
  },
  {
    title: "Dresses",
    links: [{ label: "Shop Now", href: "/en/women/dresses" }],
  },
];

export default function CategoryLinks() {
  return (
    <section className="border-t border-gray-200">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
        {categories.map((cat, i) => (
          <div key={i} className="py-8 px-6 text-center">
            <p className="text-[15px] font-medium tracking-wide mb-3">{cat.title}</p>
            <div className="flex items-center justify-center gap-4">
              {cat.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[13px] underline underline-offset-2 hover:opacity-60 transition-opacity"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
