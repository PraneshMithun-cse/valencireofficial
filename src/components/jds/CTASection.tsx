export default function CTASection() {
  return (
    <section
      id="contact"
      className="w-full relative"
      style={{ backgroundColor: "#6B21A8", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      {/* Dark navy scallop top */}
      <div className="absolute left-0 w-full" style={{ top: "-1px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" className="w-full" style={{ display: "block" }} fill="#1B47B8">
          <path d="M0,48 Q36,0 72,48 Q108,0 144,48 Q180,0 216,48 Q252,0 288,48 Q324,0 360,48 Q396,0 432,48 Q468,0 504,48 Q540,0 576,48 Q612,0 648,48 Q684,0 720,48 Q756,0 792,48 Q828,0 864,48 Q900,0 936,48 Q972,0 1008,48 Q1044,0 1080,48 Q1116,0 1152,48 Q1188,0 1224,48 Q1260,0 1296,48 Q1332,0 1368,48 Q1404,0 1440,48 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div
        className="px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        {/* Left: CTA text */}
        <div className="flex-1">
          <div
            style={{
              fontFamily: '"Badrock Regular", sans-serif',
              fontSize: "clamp(50px, 7vw, 110px)",
              color: "#ffffff",
              lineHeight: 0.9,
              marginBottom: "1.5rem",
            }}
          >
            Experience Next
            <br />
            <span style={{ color: "#EC4899" }}>Generation</span>
            <br />
            Feminine Care
          </div>

          <p
            style={{
              fontFamily: "Onest, sans-serif",
              fontSize: "16px",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6,
              maxWidth: "440px",
              marginBottom: "2rem",
            }}
          >
            Ready to make the switch? Order Mom Anion today and feel the difference that five breakthrough technologies can make in your everyday comfort and confidence.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+91-XXXXXXXXXX"
              style={{
                display: "inline-block",
                backgroundColor: "#EC4899",
                color: "#ffffff",
                fontFamily: "Onest, sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                padding: "12px 28px",
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
                fontSize: "15px",
                fontWeight: 500,
                padding: "12px 28px",
                borderRadius: "999px",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right: products stacked */}
        <div className="flex gap-6 items-end">
          <img
            src="/images/momanion/product-xl.webp"
            alt="Mom Anion XL"
            style={{ width: "160px", objectFit: "contain" }}
          />
          <img
            src="/images/momanion/product-xxl.webp"
            alt="Mom Anion XXL"
            style={{ width: "160px", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
