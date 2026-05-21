import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById } from '../getProjects.server';

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) notFound();

  return (
    <main className="min-h-screen py-16 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/projects"
          className="text-blue-600 font-semibold hover:underline"
        >
          ← Back to projects
        </Link>

        {project.images?.length > 0 && (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {project.images.map((src, index) => (
              <li
                key={src}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 ring-1 ring-gray-200 shadow-md hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={src}
                  alt={`${project.project_name} screenshot ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                  priority={index === 0}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium text-white">
                    {project.project_name} · {index + 1}/{project.images.length}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}

        <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">
          {project.project_name}
        </h1>
        {project.description ? (
          <p className="text-lg text-gray-700 mb-8">{project.description}</p>
        ) : (
          <p className="text-lg text-gray-500 italic mb-8">
            No description available for this project.
          </p>
        )}

        {project.technologies?.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Technologies
            </h2>
            <ul className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}
