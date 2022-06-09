<script>
import { onMount } from 'svelte';
import algoliasearch from 'algoliasearch/lite';

let searchClient;
let index;

let query = '';
let hits = [];

onMount(() => {

    searchClient = algoliasearch(
        'TZFAP4YLUO',
        '0d10e45c3a470d91d19b399e26cc9603'
    );

    index = searchClient.initIndex('vendors');

    // Warm up search
    index.search({ query }).then(console.log)

});

// Fires on each keyup in form
async function search() {
    const result = await index.search({ query });
    hits = result.hits;
    console.log(hits)
}
</script>

<!-- TODO que??-->
<style>
	:global(em) {
		color: red;
		font-weight: bold;
		background: black;
	}
</style>

<h1>Svelte InstantSearch</h1>

<div>
	<input type="text" bind:value={query} on:keyup={search}>
</div>


{#each hits as hit}
	<img src={hit.avatar} alt={hit.username}>
	<section>
		<h3>{hit.username} {hit.objectID}</h3>
		<!-- <p>{hit.bio}</p> -->

		<p contenteditable bind:innerHTML={hit._highlightResult.bio.value}></p>
	</section>
{/each}
