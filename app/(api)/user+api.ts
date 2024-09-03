import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
    try {
        const sql = neon(`${process.env.DATABASE_URL}`);

        const { name, email, clerkId } = await request.json();

        if (!name || !email || !clerkId) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        const result = await sql`INSERT INTO users (name, email, "clerkId") VALUES (${name}, ${email}, ${clerkId}) RETURNING *`;

        return new Response(JSON.stringify({ data: result }), { status: 200 });

    } catch (error) {
        console.error('Database error:', error);

        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
