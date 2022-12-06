<script>
	import '../../app.css';
	import * as prismicH from '@prismicio/helpers';
	import { page } from '$app/stores';

//	export let data;

	//const { navigation } = data;
</script>

<main class="">
	<h4 class="text-center font-bold">Prismic and sveltekit project</h4>
	<nav class="text-center">
		<a href="/">My Site</a>
	</nav>
	<slot />
	<footer class="bg-[#3D4451] text-white py-2 text-center">© Md Imran Hossain 2022</footer>
</main>
