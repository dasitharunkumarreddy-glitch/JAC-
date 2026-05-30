import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "JAC Grand Kitchen | Premium Veg & Non-Veg Restaurant",
  description:
    "JAC Grand Kitchen is a premium modern Indian restaurant serving veg and non-veg breakfast, biryani, tandoori, tea, coffee, juices and Thati Bellam Tea.",
  keywords: [
    "JAC Grand Kitchen",
    "premium restaurant",
    "veg restaurant",
    "non veg restaurant",
    "biryani",
    "tandoori",
    "Thati Bellam Tea"
  ],
  openGraph: {
    title: "JAC Grand Kitchen | Premium Veg & Non-Veg Restaurant",
    description: "Just Awesome Cuisine - Veg & Non-Veg",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85",
        width: 1600,
        height: 1000,
        alt: "Premium Indian restaurant dining spread"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
