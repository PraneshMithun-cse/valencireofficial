import Image from "next/image";

export default function HeritageSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      <div className="grid grid-cols-2 h-full w-full absolute inset-0">
        <div className="relative overflow-hidden">
          <Image
            src="/images/gray-pleated-trousers1.JPG"
            alt="Valenciré gray pleated trousers"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="/images/gray-pleated-trousers2.JPG"
            alt="Valenciré gray pleated trousers street"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
      </div>

      {/* Valenciré signature — center-upper area between the two panels */}
      <img
        src="/images/valencire-sign.png"
        alt="Valenciré"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(200px, 24vw, 360px)",
          opacity: 0.9,
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      <div className="absolute bottom-14 left-10 text-white max-w-[380px] z-10">
        <h2
          className="font-light leading-[0.9] mb-4"
          style={{ fontSize: "clamp(56px, 7vw, 100px)", letterSpacing: "-0.015em" }}
        >
          Old Money
        </h2>
        <p className="text-[14px] font-light mb-6 leading-relaxed opacity-90">
          Quiet luxury in motion. Classic silhouettes reimagined for the modern gentleman.
        </p>
        <div className="flex items-center gap-6">
          <a href="/en/trouser-pants" className="text-[13px] underline underline-offset-4 hover:opacity-70 transition-opacity">
            Shop Trousers
          </a>
          <a href="/en/shirts" className="text-[13px] underline underline-offset-4 hover:opacity-70 transition-opacity">
            Shop Shirts
          </a>
        </div>
      </div>
    </section>
  );
}
