import Image from "next/image";

export default function SwimShopSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      <div className="grid grid-cols-2 h-full w-full absolute inset-0">
        <div className="relative overflow-hidden">
          <Image
            src="/images/skyblue1.JPG"
            alt="Valenciré skyblue collection"
            fill
            className="object-cover object-top"
            sizes="50vw"
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="/images/burgundy-trousers1.JPG"
            alt="Valenciré burgundy collection"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-6">
        <h2
          className="font-light leading-[0.9] mb-4"
          style={{ fontSize: "clamp(56px, 9vw, 130px)", letterSpacing: "-0.01em" }}
        >
          The Shirt Edit
        </h2>
        <p className="text-[14px] font-light mb-2 opacity-95 max-w-xs leading-relaxed">
          Effortless cuts in refined fabrics.
          <br />
          Dressed down. Always intentional.
        </p>
        <div className="flex items-center gap-6 mt-5">
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
