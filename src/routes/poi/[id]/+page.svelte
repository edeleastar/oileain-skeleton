<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";
	export let data: PageData;
	import LeafletMap from "$lib/LeafletMap.svelte";
	// import IslandCoordinates from "$lib/IslandCoordinates.svelte";
	// import IslandDescription from "$lib/IslandDescription.svelte";
	import { generateMarkerSpec } from "../../../services/oileaiin-markers";
	import IslandLatLng from "$lib/IslandLatLng.svelte";
	import IslandDescription from "$lib/IslandDescription.svelte";

	let navigator: LeafletMap;

	page.subscribe((path) => {
		if (navigator) {
			navigator.addPopupMarkerAndZoom("selected", generateMarkerSpec(data.island));
		}
	});
</script>

<div class="grid grid-cols-2 gap-4 h-full p-2">
	<div>
		<LeafletMap id="map-main" height={"h-1/3"} marker={data.marker} zoom={7} bind:this={navigator} />
		<IslandLatLng island={data.island} />
	</div>
	<div><IslandDescription island={data.island} /></div>
</div>
