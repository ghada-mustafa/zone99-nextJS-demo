"use client"

import Image from "next/image";
import Link from "next/link";
import Zone99Logo from "@/public/logo.jpeg";
import { Roboto_Mono , Bitcount_Grid_Double} from "next/font/google";
import { usePathname } from "next/navigation";


const bitcount_grid_double = Bitcount_Grid_Double({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bitcount-grid-double",
});

export default function NavBar() {
    const pathName = usePathname();
    console.log(`This it the current path name: ${pathName}`);
    return (
      <header className={`${bitcount_grid_double.variable} bg-white shadow-md sticky top-0 z-50`}>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <Image 
            src={Zone99Logo} 
            alt="Zone 99 logo" 
            className="h-12 w-auto" />
            <span className="text-xl font-bold text-gray-900">Zone 99</span>
          </div>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className={`text-gray-700 hover:text-blue-600 transition ${pathName === "/" ? "is-active" : null }`}>Home</Link>
            <Link href="/projects" className={`text-gray-700 hover:text-blue-600 transition ${pathName === "/projects" ? "is-active" : null}`}>Projects</Link>
            <Link href="/posts" className={`text-gray-700 hover:text-blue-600 transition ${pathName === "/posts" ? "is-active" : null}`}>Posts</Link>
            <Link href="/services" className={`text-gray-700 hover:text-blue-600 transition ${pathName==="/services" ? "is-active": null}`}>Our Services</Link>
            <Link href="/contact" className= {`text-gray-700 hover:text-blue-600 transition ${pathName === "/contact" ? "is-active" : null}`}>Contact</Link>
          </div>
        </nav>
      </header>
    )
}