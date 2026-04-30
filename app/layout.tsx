import type { Metadata } from "next";
import { Roboto_Mono , Bitcount_Grid_Double} from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Zone99Logo from "@/public/logo.jpeg";
import Link from "next/link";
import { LayoutProps } from "./types";
import NavBar from "./components/NavBar";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const bitcount_grid_double = Bitcount_Grid_Double({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bitcount-grid-double",
});

export const metadata: Metadata = {
  title: "Zone 99 - Innovative Software Solutions",
  description: "Zone 99 is a software development company specializing in custom web and mobile applications. We deliver innovative solutions tailored to your business needs.",
};

export default function RootLayout({children}: LayoutProps) {
  return (
    <html lang="en">
      {/* Header */}
      <NavBar />

      {/* Main Content */}
      <body className={`${roboto_mono.className} min-h-full flex flex-col `}>{children}</body>

       {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p>&copy; 2026 Zone 99. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-6">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition">Contact Us</Link>
          </div>
        </div>
      </footer>
    </html>
  );
}
