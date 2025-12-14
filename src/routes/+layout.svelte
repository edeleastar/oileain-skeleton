<script lang="ts">
  import "../app.css";
  import type { PageData } from "./$types";
  import { browser } from "$app/environment";
  import { themeService } from "$lib/services/themes/services/themes.svelte";
  import CourseShell from "$lib/ui/TutorsShell.svelte";

  interface Props {
    data: PageData;
    children: import("svelte").Snippet;
  }
  let { data, children }: Props = $props();

  if (browser) {
    themeService.initDisplay();
  }
</script>

<CourseShell>
  <div class=" bg-surface-100-800-token border-surface-200-700-token mx-2 mb-2 w-auto overflow-hidden rounded-xl border-[1px] p-4 sm:mx-4">
    {@render children()}
  </div>
</CourseShell>
