<script lang="ts">
	import type { Island } from "../services/oileain-types";

	export let island: Island;
</script>

<section class="section">
	{@html island.description}
</section>
