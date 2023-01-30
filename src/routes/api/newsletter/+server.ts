import type { RequestHandler } from '@sveltejs/kit';

//api/newsletter GET
// export const GET: RequestHandler = async (event) => {
// 	const options: ResponseInit = {
// 		status: 418,
// 		headers: {
// 			B: 'SooS'
// 		}
// 	};
// 	return new Response('Hello', options);
// };

export const POST: RequestHandler = async (event) => {
	const data = await event.request.formData();

	//get the post data
	const email = data.get('email');

	//subscribe
	console.log(email);

	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
