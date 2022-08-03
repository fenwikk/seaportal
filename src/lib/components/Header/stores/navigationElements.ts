import { get, writable } from 'svelte/store';
import type { NavigationElement } from '..';
import currentIndex from './currentIndex';

const navigationElements = writable<NavigationElement[]>([]);

export default navigationElements;

export const getCurrentElement = () => get(navigationElements)[get(currentIndex)];
