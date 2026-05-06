"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Form from 'next/form';

export default async function Projects() {

  return (
    <main className='mx-6 my-6'>
      <h1>Our Projects</h1>
      <p>Explore the innovative solutions we've developed for our clients.</p>
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
