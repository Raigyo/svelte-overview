import {writable} from 'svelte/store'

const text = writable('Store value: Hello from store');

export default text;