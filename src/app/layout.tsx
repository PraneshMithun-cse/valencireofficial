import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mom Anion — Next Generation Sanitary Napkins",
  description:
    "Ultra-soft, breathable sanitary napkins with advanced anion technology. Day & night protection designed for modern women. Because every woman deserves care that feels like a mom's gift.",
  icons: {
    icon: "/images/momanion/logo.webp",
    apple: "/images/momanion/logo.webp",
  },
  openGraph: {
    title: "Mom Anion — Next Generation Sanitary Napkins",
    description:
      "Ultra-soft, breathable sanitary napkins with advanced anion technology. Day & night protection designed for modern women.",
    type: "website",
    images: ["/images/momanion/logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased ${onest.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
