import type { SeaPortalOptions } from '$lib/seaportal';
import { TestPlugin } from './plugin';

const Options: SeaPortalOptions = {
	baseUrl: '/portal',
	pages: [],
	plugins: [TestPlugin]
};

export default Options;
