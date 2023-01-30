import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

interface Post {
	title: string;
	body: string;
}

async function getPosts() {
	const response = await fetch('https://dummyjson.com/posts');
	const { posts } = await response.json();

	return posts as Post[];
}

function slugify(text: string) {
	return text
		.replace(/\s/g, '-')
		.replace(/[^a-zA-Z0-9-]/g, '')
		.toLocaleLowerCase();
}

async function savePostToDb() {
	const posts = await getPosts();

	for (const { title, body } of posts) {
		await db.post.create({
			data: {
				title: title,
				content: body,
				slug: slugify(title)
			}
		});
	}
}

savePostToDb();
