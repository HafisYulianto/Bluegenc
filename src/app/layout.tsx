import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Bluegenc | Enterprise Software Agency",
  description: "Mitra strategis Anda dalam transformasi digital. Merancang, mengembangkan, dan mengelola ekosistem teknologi masa depan.",
  openGraph: {
    title: 'Bluegenc | B2B Software Agency',
    description: 'Membangun Solusi Digital & IoT Terukur untuk Transformasi Bisnis Anda.',
    siteName: 'Bluegenc',
    locale: 'id_ID',
    type: 'website',
  },
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
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/6282279485813" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 group"
          aria-label="Chat WhatsApp"
        >
          {/* Pulsing rings */}
          <span className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-75"></span>
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 relative z-10">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.61 3.38 17.14L2 22L6.98 20.64C8.48 21.49 10.19 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.15 16.5C16.92 17.15 15.77 17.68 15.06 17.8C14.54 17.89 13.8 18 10.97 16.83C7.54 15.41 5.34 11.91 5.17 11.68C5 11.45 3.75 9.79 3.75 8.07C3.75 6.35 4.62 5.51 4.96 5.16C5.23 4.88 5.67 4.75 6.08 4.75C6.21 4.75 6.33 4.75 6.44 4.8C6.73 4.93 6.87 5.28 7.02 5.65C7.23 6.16 7.64 7.16 7.69 7.27C7.74 7.38 7.82 7.55 7.74 7.72C7.65 7.89 7.55 7.97 7.42 8.12C7.29 8.27 7.14 8.44 7.02 8.56C6.88 8.7 6.73 8.86 6.89 9.13C7.05 9.4 7.61 10.31 8.43 11.04C9.5 12 10.37 12.3 10.66 12.43C10.95 12.56 11.13 12.54 11.3 12.35C11.47 12.16 11.96 11.59 12.16 11.33C12.36 11.07 12.56 11.11 12.83 11.21C13.1 11.31 14.53 12.02 14.83 12.17C15.13 12.32 15.33 12.39 15.4 12.5C15.47 12.61 15.47 13.14 15.24 13.79V16.5Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
