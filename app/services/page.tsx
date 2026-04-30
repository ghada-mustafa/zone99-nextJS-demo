import Link from "next/link";
import { getAllServices } from "@/app/data/services";

export default function OurServices() {
    const services = getAllServices();

    return (
        <main className="min-h-screen py-16 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Services</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                        >
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">{service.displayName}</h2>
                            <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                            <span className="text-blue-600 font-semibold">Learn more →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
