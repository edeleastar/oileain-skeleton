import { oileainService } from "$lib/services/oileain-service";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  await oileainService.getCoasts();
  return {
    markerLayers: oileainService.markerLayers
  };
};
