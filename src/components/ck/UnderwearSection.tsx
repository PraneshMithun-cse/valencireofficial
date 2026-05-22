import Image from "next/image";

export default function UnderwearSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      <Image
        src="/images/BLACKSHIRT.JPG"
        alt="Valenciré night collection"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute bottom-14 left-10 text-white max-w-[320px]">
        <h2
          className="font-light leading-[0.95] mb-4"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.01em" }}
        >
          After Dark
        </h2>
        <p className="text-[14px] font-light mb-6 leading-relaxed opacity-95">
          Precision tailoring for the evening. Bold silhouettes refined for every occasion.
        </p>
        <div className="flex items-center gap-6">
          <a href="/en/shirts" className="text-[13px] underline underline-offset-4 hover:opacity-70 transition-opacity">
            Shop Shirts
          </a>
          <a href="/en/trouser-pants" className="text-[13px] underline underline-offset-4 hover:opacity-70 transition-opacity">
            Shop Trousers
          </a>
        </div>
      </div>
    </section>
  );
}
