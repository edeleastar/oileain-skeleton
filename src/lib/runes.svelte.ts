import type { MarkerSpec } from "$lib/services/markers";
import type { Island } from "$lib/services/oileain-types";

export const rune = <T>(initialValue: T) => {
  let _rune = $state(initialValue);
  return {
    get value() {
      return _rune;
    },
    set value(v: T) {
      _rune = v;
    }
  };
};

export const markerSelected = $state({ value: null as MarkerSpec | null });
export const currentIsland = $state({ value: null as Island | null });
export const currentView = $state({ value: "Home: " });
