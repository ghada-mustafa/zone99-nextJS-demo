import { createClient } from "@/app/api/server";
import { cookies } from "next/headers";



export async function GET() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase
        .from("projects")
        .select("*");

    if (error) {
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }

    return Response.json(data);
}