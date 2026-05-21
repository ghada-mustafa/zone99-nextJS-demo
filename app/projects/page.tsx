import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../types';
import { getProjects } from './getProjects.server';

export default async function Projects() {
  const projects: Project[] = await getProjects();

  return (
    <main className="min-h-screen py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Projects</h1>
          <p className="text-lg text-gray-600">
            Explore the innovative solutions we have developed for our clients.
          </p>
        </header>

        {!projects || projects.length === 0 ? (
          <p className="text-center text-gray-500">No projects found.</p>
        ) : (
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/projects/${project.id}`}
                  className="group block h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <div className="relative w-full h-48 bg-gray-100">
                    <Image
                      src={project.images[0]}
                      alt={project.project_name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.project_name}
                    </h2>
                    {project.description && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    )}
                    {project.technologies?.length > 0 && (
                      <ul className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <li
                            key={tech}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="text-blue-600 font-semibold group-hover:underline">
                      View details →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
