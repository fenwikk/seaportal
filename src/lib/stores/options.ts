import type { SeaPortalOptions } from '$lib/seaportal';
import Options from '$lib/test/Options';
import { writable } from 'svelte/store';

const options = writable<SeaPortalOptions>(Options);

export default options;
