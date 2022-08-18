<script>
	import { page } from '$app/stores';

	const params = $page.params.slug;
	const imageLocation = `/locations/${params}.jpg`;
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
