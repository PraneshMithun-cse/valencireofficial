import ProductImageGallery from "@/components/osklen/ProductImageGallery";
import ProductInfoPanel from "@/components/osklen/ProductInfoPanel";

const images = [
  { src: "/images/osklen/tshirt-1.jpg", alt: "Short-sleeved Rustic Backside T-shirt — back view" },
  { src: "/images/osklen/tshirt-2.jpg", alt: "Short-sleeved Rustic Backside T-shirt — side view" },
  { src: "/images/osklen/tshirt-3.jpg", alt: "Short-sleeved Rustic Backside T-shirt — front view" },
  { src: "/images/osklen/tshirt-4.jpg", alt: "Short-sleeved Rustic Backside T-shirt — detail view" },
];

const productData = {
  name: "Short-sleeved Rustic Backside T-shirt",
  price: 120,
  description:
    "Men's regular-fit T-shirt featuring a rustic fabric panel on the back. Made from 98% cotton and 2% elastane for a comfortable, breathable feel.",
  colors: [{ name: "Beige", hex: "#c5a882" }],
  sizes: ["S", "M", "L", "XL"],
};

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#f0efed]">
      {/* Full-screen image gallery with floating product panel */}
      <ProductImageGallery images={images}>
        <ProductInfoPanel {...productData} />
      </ProductImageGallery>

      {/* Below-fold: product details */}
      <section className="max-w-screen-lg mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">
        {/* Featured image */}
        <div className="md:w-[400px] shrink-0">
          <div className="relative aspect-[2/2.3] rounded-[20px] overflow-hidden bg-[#e8e6e1]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/osklen/tshirt-3.jpg"
              alt="Product detail"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product details accordion */}
        <div className="flex-1 flex flex-col gap-0 self-start mt-4">
          {[
            {
              title: "Product Info",
              content:
                "Men's regular-fit T-shirt featuring a rustic fabric panel on the back. Made from 98% cotton and 2% elastane. Crewneck. Short sleeves. Regular fit. Item number: 7450617.",
            },
            {
              title: "Shipping and returns",
              content:
                "Free standard shipping on all orders. Free returns within 30 days of delivery. Items must be unworn and in original condition.",
            },
            {
              title: "Composition",
              content: "98% Cotton, 2% Elastane. Machine wash at 30°C. Do not bleach. Tumble dry low. Iron on low heat. Do not dry clean.",
            },
            {
              title: "Gift Packing",
              content:
                "Gift packaging available at checkout. Each item is carefully wrapped and placed in a branded Osklen box with tissue paper.",
            },
          ].map((item) => (
            <AccordionItem key={item.title} title={item.title} content={item.content} />
          ))}
        </div>
      </section>
    </main>
  );
}

function AccordionItem({ title, content }: { title: string; content: string }) {
  return (
    <details className="group border-b border-[#d8d5d0] py-4 cursor-pointer">
      <summary className="flex items-center justify-between text-[14px] font-medium text-[#222] select-none list-none">
        {title}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="transition-transform group-open:rotate-180"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <p className="mt-3 text-[13px] text-[#666] leading-relaxed">{content}</p>
    </details>
  );
}
