import type { Metadata } from "next";
import { Allura, Cormorant_Garamond, Lora } from "next/font/google";

import "./globals.css";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Mes Boucles et Moi",
  description: "Bijoux faits main et personnalisables avec amour.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          //backgroundAttachment: "fixed",
        }}
        className="min-h-screen bg-[#fffaf7]"
      >
        {children}
      </body>
    </html>
  );
}
