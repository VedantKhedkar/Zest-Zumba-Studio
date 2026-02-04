import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zest Zumba Studio",
    template: "%s | Zest Zumba Studio",
  },
  description: "Move · Breathe · Dance · Transform",

  keywords: [
    "zumba",
    "dance fitness",
    "zumba studio",
    "fitness classes",
    "dance workouts",
  ],

  openGraph: {
    title: "Zest Zumba Studio",
    description: "Move · Breathe · Dance · Transform",
    url: "https://zestzumba.com",
    siteName: "Zest Zumba Studio",
    type: "website",
  },

  metadataBase: new URL("https://zestzumba.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${montserrat.variable} 
          ${openSans.variable} 
          font-sans 
          antialiased 
          bg-white 
          text-slate-900
        `}
      >
        <Navbar />

        {/* Page Content */}
        <main className="min-h-screen">
          {children}
        </main>

     
      </body>
    </html>
  );
}
