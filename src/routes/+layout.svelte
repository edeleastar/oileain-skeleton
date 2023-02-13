<script>
	import "../tutors.css";
	import "@skeletonlabs/skeleton/styles/all.css";
	import "../app.postcss";
	import { AppShell, AppBar } from "@skeletonlabs/skeleton";
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Oileain</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-ghost-surface" href="/"> Home </a>
				<a class="btn btn-sm variant-ghost-surface" href="/explorer"> Explorer </a>
				<a class="btn btn-sm variant-ghost-surface" href="/navigator"> Navigator</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
