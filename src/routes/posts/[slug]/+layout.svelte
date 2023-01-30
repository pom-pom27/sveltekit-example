<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>{$page.data.post?.title}</title>
</svelte:head>

<pre>
	{JSON.stringify($page, null, 4)}
</pre>

<div class="layout">
	<aside>
		<nav>
			<h4>Posts</h4>
			<ul>
				{#each data.posts as post}
					<li><a href="/posts/{post.slug}">{post.title}</a></li>
				{/each}
			</ul>
		</nav>
	</aside>
	<main>
		<slot />
	</main>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		gap: 4rem;
		margin-top: 1rem;
	}
</style>
