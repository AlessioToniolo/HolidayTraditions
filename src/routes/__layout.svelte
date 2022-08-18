<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';

	let showing = 'hidden';

	onMount(() => {
		showing = 'hidden';
	});

	function toggleNav() {
		if (showing == 'contents') {
			setTimeout(() => {
				showing = 'hidden';
			}, 500);
		} else {
			showing = 'contents';
		}
	}
</script>

<div class="container max-w-screen-2xl mx-auto flex flex-col h-screen justify-between">
	<div class="navbar bg-base-100 drop-shadow">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">
				<img
					class="mr-3"
					src="/color-logo-transparent.png"
					alt="Site Logo to Homepage"
					width="48"
				/>
				<span class="hidden sm:contents marist-font">Marist Holiday Traditions</span>
			</a>
		</div>

		<div on:click={toggleNav} class="contents lg:hidden">
			<div class="btn btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-5 h-5 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/></svg
				>
			</div>
		</div>

		<div class="hidden lg:contents flex-none">
			<ul class="menu menu-horizontal p-0">
				<li><a href="/">Home</a></li>

				<li><a href="/vendor/vendors">Vendors</a></li>
				<li tabindex="0">
					<span>
						Info
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</span>
					<ul class="p-2 bg-base-100">
						<li><a href="/info/directions">Directions</a></li>
						<li><a href="/info/maps">Maps</a></li>
					</ul>
				</li>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact Us</a></li>
			</ul>
		</div>
	</div>

	<div class="menu bg-accent text-white">
		<ul class={showing}>
			<a href="/"><li on:click={toggleNav}><b>Home</b></li></a>
			<a href="/vendors"
				><li on:click={toggleNav}>
					<b>Vendors</b>
				</li></a
			>
			<a href="/info/directions"><li on:click={toggleNav}><b>Directions</b></li></a>
			<a href="/info/maps"><li on:click={toggleNav}><b>Maps</b></li></a>
			<a href="/about"><li on:click={toggleNav}><b>About</b></li></a>
			<a href="/contact"><li on:click={toggleNav}><b>Contact Us</b></li></a>
		</ul>
	</div>

	<div class="mb-auto">
		<slot />
	</div>

	<footer class="footer p-10 bg-accent text-neutral-content">
		<div>
			<img src="/gray-logo-transparent.png" alt="Black and White Logo" width="100" />
			<p>
				<span class="text-lg font-semibold">Holiday Traditions</span><br /><span class="font-medium"
					>Website created by
					<a href="https://github.com/AlessioToniolo" class="underline hover:text-neutral"
						>Alessio Toniolo</a
					></span
				>
			</p>
		</div>
		<div>
			<span class="footer-title">Social</span>
			<div class="grid grid-flow-col gap-4">
				<a href="mailto:holidaytraditions@marist.com"
					><svg
						width="24"
						class="fill-neutral-content hover:fill-neutral active:fill-neutral"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"
						/></svg
					></a
				>
				<a href="https://www.instagram.com/maristholidaytraditions/"
					><svg
						width="24"
						class="fill-neutral-content hover:fill-neutral active:fill-neutral"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
						/></svg
					></a
				>
				<a href="https://www.facebook.com/MaristHolidayTraditionsShow"
					><svg
						width="24"
						class="fill-neutral-content hover:fill-neutral active:fill-neutral"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
						/></svg
					></a
				>
			</div>
		</div>
	</footer>
</div>

<style>
	.marist-font {
		font-family: 'Rokkitt', serif;
	}
</style>
