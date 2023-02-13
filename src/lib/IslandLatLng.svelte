<script lang="ts">
	import type { Island } from "../services/oileain-types";
	export let island: Island;
</script>

<div class="card">
	<header class="card-header">{@html island.name}</header>
	<div class="p-4">
		<table class="table-compact w-full">
			<tbody>
				<td>Latitude</td>
				<td>{island.coordinates.geo.lat}</td>
				<td>Longitude</td>
				<td>{island.coordinates.geo.long}</td>
			</tbody>
		</table>
	</div>
	<footer class="card-footer">GPS-compatible</footer>
</div>
