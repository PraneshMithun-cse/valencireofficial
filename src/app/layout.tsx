import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const optiRadiant = localFont({
  src: [
    { path: "../../public/fonts/OPTIRadiant-Medium.otf", weight: "500" },
    { path: "../../public/fonts/OPTIRadiant-Bold.otf", weight: "700" },
    { path: "../../public/fonts/OPTIRadiant-ExtraBold.otf", weight: "800" },
  ],
  variable: "--font-radiant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valenciré | Official Online Site and Store",
  description:
    "Shop the latest from Valenciré. Free shipping on orders over $75. Official Valenciré online store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${optiRadiant.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
