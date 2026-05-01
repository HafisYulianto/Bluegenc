import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Bluegenc | B2B Software Agency",
  description: "Membangun Solusi Digital & IoT Terukur untuk Transformasi Bisnis Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${jakarta.className} antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
