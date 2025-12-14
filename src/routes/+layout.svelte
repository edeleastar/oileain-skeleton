<script lang="ts">
  import "../app.css";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import OileainShell from "$lib/ui/OileainShell.svelte";
  import { themeService } from "$lib/ui/themes/themes.svelte";

  interface Props {
    data: PageData;
    children: import("svelte").Snippet;
  }
  let { data, children }: Props = $props();

  onMount(() => {
    themeService.initDisplay();
  });
</script>

<OileainShell>
  <div class="bg-surface-100-800-token dark:bg-surface-950 border-surface-200-700-token mx-2 mb-2 w-auto overflow-hidden rounded-xl border-[1px] p-4 sm:mx-4">
    {@render children()}
  </div>
</OileainShell>
