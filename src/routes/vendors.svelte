<script>
	import { onMount } from 'svelte';
	import algoliasearch from 'algoliasearch/lite';
	import instantsearch from 'instantsearch.js';

	import {
		searchBox,
		hits,
		configure,
		dynamicWidgets,
		pagination
	} from 'instantsearch.js/es/widgets';

	let searchClient;
	let index;

	let query = '';
	let results = [];

	onMount(() => {
		// Connecting to algolia
		const searchClient = algoliasearch('TZFAP4YLUO', '0d10e45c3a470d91d19b399e26cc9603');

		const search = instantsearch({
			indexName: 'vendors',
			searchClient
		});

		index = searchClient.initIndex('vendors');

		search.addWidgets([
			searchBox({
				container: '#searchbox'
			}),
			hits({
				container: '#hits',
				templates: {
					item: `<div>{{ name }}</div>
<div class="ml-auto">
	<span class="badge badge-primary">{{ categoryOne }}</span>
	<span class="badge badge-secondary">{{ categoryTwo }}</span>
	<span class="badge badge-accent">{{ categoryThree }}</span>
</div>`
				}
			}),
			configure({
				hitsPerPage: 8
			}),
			dynamicWidgets({
				container: '#dynamic-widgets',
				fallbackWidget({ container, attribute }) {
					return instantsearch.widgets.panel({ templates: { header: attribute } })(
						instantsearch.widgets.refinementList
					)({
						container,
						attribute
					});
				},
				widgets: []
			}),
			pagination({
				container: '#pagination'
			})
		]);

		search.start();
	});

	// Fires on each keyup in form
	async function filter() {
		const result = await index.search({ query });
		results = result.results;
	}
</script>

<div class="max-w-screen-lg mx-auto flex flex-col justify-center px-5 py-7">
	<p class="text-4xl font-bold text-primary mb-7">Search the list of 2022 Vendors!</p>
	<div class="container" id="contain">
		<div class="search-panel">
			<div class="search-panel__filters">
				<div id="dynamic-widgets" />
			</div>

			<div class="search-panel__results">
				<div id="searchbox" class="mb-5" />
				<div id="hits" class="mb-5" />
				<div id="pagination" />
			</div>
		</div>
	</div>
</div>

<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/satellite-min.css"
/>
