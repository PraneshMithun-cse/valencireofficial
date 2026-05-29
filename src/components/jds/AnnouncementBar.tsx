"use client";

const TICKER_TEXT =
  "🗓️  OPEN NOW  🗓️  OPEN NOW  🗓️  OPEN NOW  🗓️  OPEN NOW  🗓️  OPEN NOW  🗓️  OPEN NOW  🗓️  OPEN NOW  🗓️  OPEN NOW";

export default function AnnouncementBar() {
  return (
    <div
      style={{
        width: "100%",
        height: "48px",
        backgroundColor: "#A8D832",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="jds-ticker"
        style={{
          display: "flex",
          width: "max-content",
          fontFamily: '"Badrock Regular", sans-serif',
          fontSize: "24px",
          fontWeight: 400,
          color: "#111111",
          letterSpacing: "0.05em",
          whiteSpace: "nowrap",
          paddingTop: "4px",
        }}
      >
        <span style={{ paddingRight: "80px" }}>{TICKER_TEXT}</span>
        <span style={{ paddingRight: "80px" }}>{TICKER_TEXT}</span>
      </div>
    </div>
  );
}
