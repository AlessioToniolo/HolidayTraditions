<script>
	import { page } from '$app/stores';

	const params = $page.params.slug;

	function formattedImageLocation(str) {
		const formatted = str.split(' ');
		console.log(8989);
		let finalStr;
		if (formatted[0] == 'Arcade') {
			finalStr = formatted[0].toLowerCase() + formatted[1].toLowerCase();
			console.log(finalStr);
		} else {
			finalStr = formatted[0];
		}

		console.log(finalStr);
		return finalStr.toLowerCase();
	}

	const imageLocation = `/locations/${formattedImageLocation(params)}.png`;
</script>

<div class="modal modal-open">
	<div class="modal-box ">
		<h3 class="font-bold text-lg mb-4">Campus location of {params}</h3>
		<img class="rounded-lg" src={imageLocation} alt={params} />
		<div class="modal-action">
			<a href="/vendor/vendors">
				<button class="btn btn-primary">Back to Vendors</button>
			</a>
		</div>
	</div>
</div>
