"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#000", color: "#fff" }}>
      {/* Main body */}
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "80px 60px 60px",
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          gap: "40px 80px",
          alignItems: "start",
        }}
      >
        {/* Left: Brand name */}
        <div>
          <img
            src="/valencire-logo-text.png"
            alt="Valenciré"
            style={{
              height: 36,
              width: "auto",
              filter: "invert(1)",
              opacity: 0.85,
            }}
          />
        </div>

        {/* Center: Two location / department blocks */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px 60px",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 8px",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              Women&apos;s Collection
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.9,
              }}
            >
              Ready to wear
              <br />
              Underwear &amp; Denim
              <br />
              Accessories
            </p>
          </div>
          <div>
            <p
              style={{
                margin: "0 0 8px",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              Men&apos;s Collection
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.9,
              }}
            >
              Ready to wear
              <br />
              Underwear &amp; Denim
              <br />
              Accessories
            </p>
          </div>
        </div>

        {/* Right: Contact */}
        <div style={{ textAlign: "right" }}>
          <p
            style={{
              margin: "0 0 6px",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            1-800-293-5592
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            support@calvinklein.com
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          maxWidth: 1440,
          margin: "0 auto",
          padding: "20px 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 4px",
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © 2025 Valenciré. All Rights Reserved.
          </p>
          <a
            href="#"
            style={{
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)")}
          >
            Privacy Policy
          </a>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          {["Terms of Use", "CA Privacy Rights"].map((label) => (
            <a
              key={label}
              href="#"
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
