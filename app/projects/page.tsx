'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../types';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        console.log('Fetching projects from API...');

        const res = await fetch('/api/projects');
        if (!res.ok) {
          throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        if (!Array.isArray(data)) {
          throw new Error('Unexpected API response format');
        }

        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return <main className='mx-6 my-6'>Loading projects…</main>;
  }

  if (error) {
    return <main className='mx-6 my-6'>Error loading projects: {error}</main>;
  }

  return (
    <main className='mx-6 my-6'>
      <h1>Our Projects</h1>
      <p>Explore the innovative solutions we have developed for our clients.</p>

      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h2>{project.project_name}</h2>
              {/* <p>{project.description}</p> */}
            </li>
          ))}
        </ul>
      )}

      <Link href='/projects/projectDetails' className='text-blue-600 hover:underline'>
        <Image
          src='/happy-texting.webp'
          alt='Project 1'
          width={600}
          height={400}
        />
      </Link>
    </main>
  );
}
