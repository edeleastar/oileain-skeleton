<script lang="ts">
	import LeafletMap from "$lib/LeafletMap.svelte";
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<LeafletMap markerLayers={data.markerLayers} />

<!-- <div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<h2 class="font-bold">Welcome to Skeleton.</h2>
	</div>
</div> -->
