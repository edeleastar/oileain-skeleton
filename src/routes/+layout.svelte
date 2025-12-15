<script lang="ts">
  import "../app.css";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import AppShell from "$lib/ui/AppShell.svelte";
  import { themeService } from "$lib/ui/themes/themes.svelte";
  import { browser } from "$app/environment";

  interface Props {
    data: PageData;
    children: import("svelte").Snippet;
  }
  let { data, children }: Props = $props();

  if (browser) {
    themeService.initDisplay();
  }
</script>

<AppShell>
  <div class="bg-surface-100-800-token dark:bg-surface-950 border-surface-200-700-token mx-2 mb-2 w-auto overflow-hidden rounded-xl border-[1px] p-4 sm:mx-4">
    {@render children()}
  </div>
</AppShell>
