import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../types';
import { getProjects } from './getProjects.server';

export default async function Projects() {
  const projects: Project[] = await getProjects();

  return (
    <main className="mx-6 my-6">
      <h1>Our Projects</h1>
      <p>Explore the innovative solutions we have developed for our clients.</p>

      {!projects || projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h2>{project.project_name}</h2>
            </li>
          ))}
        </ul>
      )}

      <Link href="/projects/projectDetails" className="text-blue-600 hover:underline">
        <Image src="/happy-texting.webp" alt="Project 1" width={600} height={400} />
      </Link>
    </main>
  );
}
