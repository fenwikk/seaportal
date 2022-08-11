import type { SeaPortalOptions } from '$lib/seaportal';
import Options from '$lib/test/Options';
import { ProcessPlugins } from '$lib/utils/Plugins';
import { writable } from 'svelte/store';

const options = writable<SeaPortalOptions>(ProcessPlugins(Options));

export default options;
