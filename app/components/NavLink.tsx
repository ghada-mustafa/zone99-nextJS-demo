"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import { ReactNode } from "react"

export default function NavLink({ href, children }: { href: string; children: ReactNode }) {
    const pathName = usePathname();
  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={`px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer hover:text-blue-600 ${pathName === href ? "is-active" : ""}`}
      >
        {children}
      </Link>
    </li>
  )
}