<script lang="ts">
  import Sidebar from "$lib/ui/components/Sidebar.svelte";
  import Icon from "$lib/ui/components/Icon.svelte";
</script>

{#snippet menuSelector()}
  <div class="hover:preset-tonal-secondary dark:hover:preset-tonal-tertiary flex items-center rounded-lg p-2">
    <Icon type="coursetree" tip="Open course tree" height="40" />
  </div>
{/snippet}

{#snippet sidebarContent()}
  <header class="text-center">
    <h3 class="text-surface-500 text-lg">Oileain: islands of Ireland</h3>
  </header>
  <article></article>
{/snippet}

<Sidebar position="right" {menuSelector} {sidebarContent} />
