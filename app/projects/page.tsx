"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default async function Projects({ searchParams }: {
  searchParams: { search: string };
}) {
  const searchQuery = (await searchParams).search;
  console.log('Search Query:', searchQuery);
  return (
    <main className='mx-6 my-6'>
      <h1>Our Projects</h1>
      <form >
        <input
          className="mb-6 mt-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs "
          type="text"
          name="search"
          placeholder="Search projects..."
          defaultValue={searchQuery}
        />
      </form>
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
