import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mahadev M | Digital Specialist & Analyst",
  description:
    "Personal website for Mahadev M, a digital marketing specialist, data analyst, and vibe coder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body className={`font-sans antialiased ${inter.variable}`}>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
