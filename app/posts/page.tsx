import {Post} from "@/app/types";
import Form from "next/form";
import Link from "next/link";

export default async function Posts({ searchParams }: {
  searchParams: { search: string };
}){
    const posts = await getAllPosts();
      const searchQuery = (await searchParams).search;
  console.log('Search Query:', searchQuery);

   const filteredPosts = searchQuery
        ? posts.filter((post: Post) =>
            post.title.toLowerCase().includes(searchQuery) ||
            post.body.toLowerCase().includes(searchQuery)
        )
        : posts;
        
    return (
        <main className="container mx-auto px-4 py-8">
              <Form action={'/posts'}>
        <input
          className="mb-6 mt-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs "
          type="text"
          name="search"
          placeholder="Search projects..."
          defaultValue={searchQuery}
        />
      </Form>
            <h1 className="text-3xl font-bold text-center mb-8">Test Fetching From Server</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post: Post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
                        <Link href={`/posts/${post.id}`} className="text-blue-500 hover:text-blue-700">
                            Read more
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}

async function getAllPosts() {
    const res = await fetch("https://dummyjson.com/posts")
    const data = await res.json()
    return data.posts;
}