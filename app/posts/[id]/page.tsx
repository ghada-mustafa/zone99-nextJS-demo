import { Post } from "@/app/types";

export default async function PostDetails({ params }: { params: Promise<{ id: string }> }) {
    console.log(await params);
    const post: Post = await getPostById(params);
    return (
        <main className="post-item">
            <h1 className="text-3xl font-bold text-center mb-8">{post.title}</h1>
            <h3>{post.body}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                    <span className="text-green-500">👍</span>
                    {post.reactions.likes} likes
                </span>
                <span className="flex items-center gap-1">
                    <span className="text-red-500">👎</span>
                    {post.reactions.dislikes} dislikes
                </span>
            </div>
        </main>
    )
}

async function getPostById(params: any) {
    const { id } = await params;
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const post: Post = await res.json();
    return post;
}
