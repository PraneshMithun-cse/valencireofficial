export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full relative"
      style={{ backgroundColor: "#9333EA" }}
      className="pt-10 pb-10 px-5 lg:pt-20 lg:pb-20 lg:px-16"
    >
      {/* Dark scallop top edge */}
      <div
        className="absolute left-0 w-full"
        style={{ top: "-1px", lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 48"
          className="w-full"
          style={{ display: "block" }}
          fill="#1B47B8"
        >
          <path d="M0,48 Q36,0 72,48 Q108,0 144,48 Q180,0 216,48 Q252,0 288,48 Q324,0 360,48 Q396,0 432,48 Q468,0 504,48 Q540,0 576,48 Q612,0 648,48 Q684,0 720,48 Q756,0 792,48 Q828,0 864,48 Q900,0 936,48 Q972,0 1008,48 Q1044,0 1080,48 Q1116,0 1152,48 Q1188,0 1224,48 Q1260,0 1296,48 Q1332,0 1368,48 Q1404,0 1440,48 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start">
        {/* Left col */}
        <div className="flex-1">
          <div
            style={{
              fontFamily: '"Badrock Regular", sans-serif',
              fontSize: "clamp(44px, 8vw, 114px)",
              color: "#FCD34D",
              lineHeight: 0.87,
            }}
          >
            About Us
          </div>

          <p
            style={{
              fontFamily: "Onest, sans-serif",
              fontSize: "clamp(13px, 3.5vw, 20px)",
              color: "#ffffff",
              lineHeight: 1.65,
              marginTop: "0.75rem",
              maxWidth: "520px",
            }}
          >
            Mom Anion was born from a simple belief — every woman deserves the best care during her most vulnerable moments. We created a napkin that combines cutting-edge anion technology with the ultra-soft comfort of a mother&apos;s touch.
          </p>

          <p
            style={{
              fontFamily: "Onest, sans-serif",
              fontSize: "clamp(13px, 3.5vw, 20px)",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.65,
              marginTop: "0.6rem",
              maxWidth: "520px",
            }}
          >
            Our mission is to elevate feminine hygiene from a daily necessity into a daily comfort ritual. With five proprietary technologies — Anion, Far Infrared, Magnetic Therapy, Nano Silver, and Chitin — every pad delivers protection you can feel confident about.
          </p>

          <p
            style={{
              fontFamily: "Onest, sans-serif",
              fontSize: "clamp(13px, 3.5vw, 20px)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.65,
              marginTop: "0.6rem",
              maxWidth: "520px",
            }}
          >
            Because every woman deserves care that feels like a gift — from Mom.
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href="tel:+91-XXXXXXXXXX"
              style={{
                display: "inline-block",
                backgroundColor: "#EC4899",
                color: "#ffffff",
                fontFamily: "Onest, sans-serif",
                fontSize: "clamp(13px, 3.5vw, 18px)",
                fontWeight: 600,
                padding: "10px 22px",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              Order Now
            </a>
            <a
              href="mailto:hello@momanion.com"
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontFamily: "Onest, sans-serif",
                fontSize: "clamp(13px, 3.5vw, 18px)",
                fontWeight: 500,
                padding: "10px 22px",
                borderRadius: "999px",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right col: logo + product */}
        <div className="w-full lg:w-[42%] flex flex-col items-center gap-4 lg:gap-8">
          <img
            src="/images/momanion/logo.webp"
            alt="Mom Anion Logo"
            className="w-[45%] lg:w-[80%] object-contain"
          />
          <div className="flex gap-4 items-end">
            <img
              src="/images/momanion/product-xl.webp"
              alt="Mom Anion XL"
              className="w-[45%] object-contain"
            />
            <img
              src="/images/momanion/product-xxl.webp"
              alt="Mom Anion XXL"
              className="w-[45%] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
