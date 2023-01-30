import db from '$lib/database';
import type { Prisma } from '@prisma/client';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const limit = Number(url.searchParams.get('limit') ?? 30);
	const orderBy = url.searchParams.get('sort') ?? 'asc';

	const posts = await db.post.findMany({
		orderBy: { id: orderBy as Prisma.SortOrder },
		take: limit
	});

	return json(posts);
};
