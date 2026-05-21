'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Form from 'next/form';
import { Project } from '../types';
import {useState, useEffect} from "react";

async function getProjects() {
  const res = await fetch(
    "/api/projects"
  );


  return res.json();
}

export default async function Projects() {
  const [projects, setProjects] = useState([]);
  // const projects = await getProjects();
  // setProjects(projects);
  useEffect( ()=> {
    const fetchProjects = async ()=> {
      setProjects(await getProjects());
    };
    fetchProjects();
  },[]);
  console.log("projects:  " + JSON.stringify(projects));

  return (
    <main className='mx-6 my-6'>
      <h1>Our Projects</h1>
      <p>Explore the innovative solutions we've developed for our clients.</p>
      <ul>
        {projects.map((project: Project) => (
          <li key={project.id}>
            <h2>{project.project_name}</h2>
            {/* <p>{project.description}</p> */}
          </li>
        ))}
      </ul>
      <Link href="/projects/projectDetails" className="text-blue-600 hover:underline">
        <Image
          src="/happy-texting.webp"
          alt="Project 1"
          width={600}
          height={400}
        />
      </Link>
    </main>
  );
}
