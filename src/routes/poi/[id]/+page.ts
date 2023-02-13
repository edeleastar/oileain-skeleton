import { generateMarkerSpec } from "../../../services/oileaiin-markers";
import { oileain } from "../../../services/oileain-api";
import type { PageLoad } from "./$types";

export const ssr = false;

export const load: PageLoad = async ({ params }) => {
	const island = await oileain.getIslandById(encodeURI(params.id));
	const marker = generateMarkerSpec(island);
	return {
		island,
		marker
	};
};
