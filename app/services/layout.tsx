import { ReactNode } from "react";
import { getAllServices } from "../data/services";

import { Service } from "../types";
import NavLink from "../components/NavLink";
import CategoriesNav from "../components/CategoriesNav";

export default function ServicesLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex flex-col min-h-screen md:flex-row">
            <CategoriesNav />
            {/* Main Content Area */}
            <main className="flex-1 p-4 md:ml-64">{children}</main>
        </div>
    );
}
