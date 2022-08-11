import type { SeaPortalOptions } from '$lib/seaportal';

export const ProcessPlugins = (options: SeaPortalOptions): SeaPortalOptions => {
	if (options.plugins) {
		options.plugins.map((value) => {
			const tempOptions = value();

			if (tempOptions.pages) options.pages = [...options.pages, ...tempOptions.pages];
		});
	}

	return options;
};
