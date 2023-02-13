import type { MarkerSpec } from "./markers";
import { writable } from "svelte/store";
import type { IslandGroup } from "./oileain-types";

export const markerSelected = writable<MarkerSpec>();
export const allCoasts = writable<Array<IslandGroup>>();
