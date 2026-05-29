const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/srivenkateshwaraorganicnapkins/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918807755804",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full relative"
      style={{ backgroundColor: "#EC4899" }}
    >
      {/* About-purple scallop top edge */}
      <div
        className="absolute left-0 w-full"
        style={{ top: "-1px", lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 60"
          className="w-full"
          style={{ display: "block" }}
          fill="#9333EA"
        >
          <path d="M0,60 Q60,0 120,60 Q180,0 240,60 Q300,0 360,60 Q420,0 480,60 Q540,0 600,60 Q660,0 720,60 Q780,0 840,60 Q900,0 960,60 Q1020,0 1080,60 Q1140,0 1200,60 Q1260,0 1320,60 Q1380,0 1440,60 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="px-6 lg:px-16" style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Nav links */}
          <div className="flex flex-col gap-4">
            <div
              style={{
                fontFamily: '"Badrock Regular", sans-serif',
                fontSize: "clamp(28px, 3vw, 42px)",
                color: "#4C1D95",
                lineHeight: 1,
                marginBottom: "4px",
              }}
            >
              Navigate
            </div>
            {["Products", "About Us", "Benefits", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                style={{
                  fontFamily: "Onest, sans-serif",
                  fontSize: "20px",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Center: logo + contact */}
          <div className="flex flex-col items-center text-center gap-5">
            <img
              src="/images/momanion/logo.webp"
              alt="Mom Anion"
              style={{ height: "80px", objectFit: "contain" }}
            />
            <a
              href="tel:+918807755804"
              style={{
                fontFamily: "Onest, sans-serif",
                fontSize: "20px",
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              +91 88077 55804
            </a>
            <a
              href="mailto:hello@momanion.com"
              style={{
                fontFamily: "Onest, sans-serif",
                fontSize: "20px",
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              hello@momanion.com
            </a>

            {/* Social links */}
            <div className="flex gap-5 mt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{ color: "#4C1D95" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: tagline */}
          <div className="flex flex-col gap-4">
            <div
              style={{
                fontFamily: '"Badrock Regular", sans-serif',
                fontSize: "clamp(34px, 3.5vw, 54px)",
                color: "#4C1D95",
                lineHeight: 0.95,
              }}
            >
              Care That Feels Like A Mom&apos;s Gift
            </div>
            <p
              style={{
                fontFamily: "Onest, sans-serif",
                fontSize: "20px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.65,
              }}
            >
              Next generation sanitary napkins with advanced anion technology. Designed for every woman.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          className="mt-12 pt-6 text-center"
          style={{
            borderTop: "1px solid rgba(76,29,149,0.3)",
            fontFamily: "Onest, sans-serif",
            fontSize: "18px",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          © {new Date().getFullYear()} Mom Anion. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
