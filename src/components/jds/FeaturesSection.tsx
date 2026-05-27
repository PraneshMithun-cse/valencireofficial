const S = "#4C1D95";
const W = 1.8;

const TargetIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <circle cx="24" cy="30" r="18" stroke={S} strokeWidth={W}/>
    <circle cx="24" cy="30" r="11" stroke={S} strokeWidth={W}/>
    <circle cx="24" cy="30" r="4.5" stroke={S} strokeWidth={W}/>
    {/* Arrow */}
    <line x1="44" y1="10" x2="24" y2="30" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    {/* Arrowhead */}
    <path d="M44 10 L37 10 L44 17 Z" stroke={S} strokeWidth={W} strokeLinejoin="round" fill="none"/>
  </svg>
);

const TruckIcon = () => (
  <svg width="64" height="52" viewBox="0 0 64 52" fill="none">
    {/* Cargo box body */}
    <rect x="2" y="10" width="34" height="26" rx="2" stroke={S} strokeWidth={W}/>
    {/* Cab */}
    <path d="M36 20 L36 36 L56 36 L56 28 L50 20 Z" stroke={S} strokeWidth={W} strokeLinejoin="round"/>
    {/* Cab window */}
    <path d="M40 22 L40 29 L52 29 L52 22 L50 22 Z" stroke={S} strokeWidth={W} strokeLinejoin="round"/>
    {/* Door line on cab */}
    <line x1="44" y1="29" x2="44" y2="36" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    {/* Cargo partition lines */}
    <line x1="14" y1="10" x2="14" y2="36" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    {/* Rear wheel */}
    <circle cx="13" cy="40" r="5" stroke={S} strokeWidth={W}/>
    <circle cx="13" cy="40" r="2" stroke={S} strokeWidth={W}/>
    {/* Front wheel */}
    <circle cx="46" cy="40" r="5" stroke={S} strokeWidth={W}/>
    <circle cx="46" cy="40" r="2" stroke={S} strokeWidth={W}/>
    {/* Axle line */}
    <line x1="18" y1="36" x2="40" y2="36" stroke={S} strokeWidth={W}/>
    {/* Speed lines */}
    <line x1="0" y1="20" x2="-7" y2="20" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    <line x1="0" y1="27" x2="-10" y2="27" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    <line x1="0" y1="34" x2="-5" y2="34" stroke={S} strokeWidth={W} strokeLinecap="round"/>
  </svg>
);

const MoneyBagIcon = () => (
  <svg width="52" height="60" viewBox="0 0 52 60" fill="none">
    {/* Bag body */}
    <path d="M8 32 C6 20 12 10 26 10 C40 10 46 20 44 32 C42 46 34 56 26 56 C18 56 10 46 8 32 Z"
      stroke={S} strokeWidth={W} strokeLinejoin="round"/>
    {/* Neck */}
    <path d="M18 10 C18 6 22 4 26 4 C30 4 34 6 34 10" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    {/* Knot bow left */}
    <path d="M18 7 C14 5 13 9 17 9" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    {/* Knot bow right */}
    <path d="M34 7 C38 5 39 9 35 9" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    {/* Dollar sign */}
    <text x="26" y="40" textAnchor="middle" fontFamily="Onest,sans-serif" fontSize="16"
      fontWeight="700" fill={S} stroke="none">$</text>
  </svg>
);

const HandshakeIcon = () => (
  <svg width="64" height="52" viewBox="0 0 64 52" fill="none">
    {/* Left wrist + arm */}
    <path d="M2 40 L2 30 L12 22" stroke={S} strokeWidth={W} strokeLinecap="round" strokeLinejoin="round"/>
    {/* Left sleeve cuff */}
    <line x1="2" y1="34" x2="12" y2="34" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    {/* Right wrist + arm */}
    <path d="M62 40 L62 30 L52 22" stroke={S} strokeWidth={W} strokeLinecap="round" strokeLinejoin="round"/>
    {/* Right sleeve cuff */}
    <line x1="62" y1="34" x2="52" y2="34" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    {/* Left hand — 4 fingers pointing right */}
    <path d="M12 22 L12 16 C12 14.9 12.9 14 14 14 C15.1 14 16 14.9 16 16 L16 22" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    <path d="M16 22 L16 13 C16 11.9 16.9 11 18 11 C19.1 11 20 11.9 20 13 L20 22" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    <path d="M20 22 L20 13 C20 11.9 20.9 11 22 11 C23.1 11 24 11.9 24 13 L24 22" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    <path d="M24 22 L24 16 C24 14.9 24.9 14 26 14 C27.1 14 28 14.9 28 16 L28 22" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    {/* Right hand — 4 fingers pointing left */}
    <path d="M52 22 L52 16 C52 14.9 51.1 14 50 14 C48.9 14 48 14.9 48 16 L48 22" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    <path d="M48 22 L48 13 C48 11.9 47.1 11 46 11 C44.9 11 44 11.9 44 13 L44 22" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    <path d="M44 22 L44 13 C44 11.9 43.1 11 42 11 C40.9 11 40 11.9 40 13 L40 22" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    <path d="M40 22 L40 16 C40 14.9 39.1 14 38 14 C36.9 14 36 14.9 36 16 L36 22" stroke={S} strokeWidth={W} strokeLinecap="round"/>
    {/* Clasped palm area */}
    <path d="M12 22 L28 22 L28 32 C28 36 24 38 20 38 L16 38 C12 38 12 34 12 32 Z" stroke={S} strokeWidth={W} strokeLinejoin="round"/>
    <path d="M52 22 L36 22 L36 32 C36 36 40 38 44 38 L48 38 C52 38 52 34 52 32 Z" stroke={S} strokeWidth={W} strokeLinejoin="round"/>
  </svg>
);

const features = [
  {
    Icon: TargetIcon,
    title: "Premium Quality",
    description: "Every product undergoes rigorous quality checks to ensure you receive only the best materials for your daily needs.",
  },
  {
    Icon: TruckIcon,
    title: "Fast Delivery",
    description: "Quick and reliable delivery service to ensure your orders reach you on time, every time.",
  },
  {
    Icon: MoneyBagIcon,
    title: "Best Prices",
    description: "Competitive pricing without compromising on quality. Get the best value for your money.",
  },
  {
    Icon: HandshakeIcon,
    title: "Trusted Service",
    description: "Built on years of trust and customer satisfaction. Your satisfaction is our priority.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="w-full relative"
      style={{ backgroundColor: "#FDF4FF", paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <div className="px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{
                backgroundColor: "#ffffff",
                border: "1.5px solid #EDE9FE",
                boxShadow: "0 4px 24px rgba(107,33,168,0.07)",
              }}
            >
              <div style={{ height: "64px", display: "flex", alignItems: "center" }}>
                <Icon />
              </div>
              <div
                style={{
                  fontFamily: '"Badrock Regular", sans-serif',
                  fontSize: "clamp(22px, 2.5vw, 30px)",
                  color: "#6B21A8",
                  lineHeight: 1,
                }}
              >
                {title}
              </div>
              <p
                style={{
                  fontFamily: "Onest, sans-serif",
                  fontSize: "15px",
                  color: "#4C1D95",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
