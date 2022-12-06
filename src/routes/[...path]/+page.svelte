<script>
	import * as prismicH from '@prismicio/helpers';
	import { SliceZone } from '@prismicio/svelte';
	import CodeSlice from '../../slices/CodeSlice.svelte';
	import { htmlSerializer, linkResolver } from '../../lib/htmlSerializer';
	export let data;
	const components = {
		code: CodeSlice
	};
</script>

<div class="grid grid-cols-2 p-4 m-4">
	{#each data.data.results as result}
		<div class="p-3 border">
			<!-- {@html prismicH.asHTML(result.data.content)} -->
			{@html prismicH.asHTML(result.data.content, linkResolver, htmlSerializer)}
			<!-- {@html result.data.content.html} -->
			<SliceZone slices={result.data.body} {components} />
			<img
				src={prismicH.asImageSrc(result.data.page_image)}
				alt={result.data.page_image.alt}
				width="500"
			/>
			{@html prismicH.asHTML(result.data.title)}
			<!-- {result.data.title} -->
		</div>
	{/each}
</div>