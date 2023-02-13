import type { PageLoad } from "./$types";
import { oileain } from "../services/oileain-api";
export const ssr = false;

export const load: PageLoad = async ({ params }) => {
	await oileain.getCoasts();
	return {
		markerLayers: oileain.markerLayers,
		coasts: oileain.coasts
	};
};
