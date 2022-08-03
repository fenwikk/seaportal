import { writable } from 'svelte/store';

const currentIndex = writable(0);

export default currentIndex;
