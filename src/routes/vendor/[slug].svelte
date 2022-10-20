<script>
	import { page } from '$app/stores';

	const params = $page.params.slug;

	function formattedImageLocation(str) {
		const formatted = str.split(' ');
		let finalStr;
		if (formatted == 'Arcade') {
			finalStr = formatted[0] + '%20' + formatted[1];
		} else {
			finalStr = formatted[0];
		}

		console.log(finalStr);
		return finalStr.toLowerCase();
	}

	const imageLocation = `/locations/${formattedImageLocation(params)}.jpg`;
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
