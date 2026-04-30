import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/app/data/services";

export default async function ServiceDetails({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) notFound();

    return (
        <main className="min-h-screen py-16 px-6 bg-gray-50">
            <div className="max-w-3xl mx-auto">
                <Link href="/services" className="text-blue-600 font-semibold hover:underline">
                    ← Back to services
                </Link>
                <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">{service.displayName}</h1>
                <p className="text-lg text-gray-700 mb-8">{service.description}</p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technologies</h2>
                <ul className="flex flex-wrap gap-3">
                    {service.technologies.map((tech) => (
                        <li
                            key={tech}
                            className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-sm"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
