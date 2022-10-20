<script>
	import { onMount } from 'svelte';
	import algoliasearch from 'algoliasearch';
	import instantsearch from 'instantsearch.js';

	import { searchBox, hits, configure, pagination } from 'instantsearch.js/es/widgets/index.js';

	/*
	// TODO: connecting hits
	import { connectHits } from 'instantsearch.js/es/connectors';
	let hitsArray = [];
	const renderHits = (renderOptions, isFirstRender) => {
		const { hits, widgetParams } = renderOptions;

		hitsArray = hits;
	};
	const customHits = connectHits(renderHits);
	*/

	let index;
	let query = '';

	onMount(() => {
		// Connecting to algolia
		const searchClient = algoliasearch('TZFAP4YLUO', '0d10e45c3a470d91d19b399e26cc9603');

		const search = instantsearch({
			indexName: 'vendors',
			searchClient
		});

		index = searchClient.initIndex('vendors');

		// Adding widgets to the search
		search.addWidgets([
			searchBox({
				container: '#searchbox'
			}) /*
			customHits({
				container: document.querySelector('#hits')
			}),*/,
			/*
			hits({
				container: '#hits',
				templates: {
					item(item) {}
				}
			}),
			*/
			hits({
				container: '#hits',
				templates: {
					item(item) {
						return `
						<div>${item.name}</div>
						<div class="ml-auto">
							<a href="/vendor/${item.location}">
								<button class="btn btn-sm mr-1 btn-primary btn-outline">${item.location}</button>
							</a>
							<div class="sm:contents hidden">
								<span class="badge badge-primary">${
									item.category.substring(0, 1).toUpperCase() + item.category.substring(1)
								}</span>
							</div>
						</div>
						`;
					}
				}
			}),
			configure({
				hitsPerPage: 8
			}),
			/*
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
			*/
			pagination({
				container: '#pagination'
			})
		]);

		search.start();
	});

	/*
	// Fires on each keyup in form
	async function filter() {
		const result = await index.search({ query });
		results = result.results;
	}
	*/

	function generateModal(location) {
		console.log('test');
	}

	//console.log(hitsArray);
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

<!--
{#each hitsArray as result}
	<div>result.name</div>
	<div class="ml-auto">
		<button class="btn btn-xs btn-outline btn-primary mr-1">result.location</button>
		<div class="sm:contents hidden">
			<span class="badge badge-primary">result.categoryOne</span>
			<span class="badge badge-secondary">result.categoryTwo</span>
			<span class="badge badge-accent">result.categoryThree</span>
		</div>
	</div>
{/each}
-->
<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/satellite-min.css"
/>
