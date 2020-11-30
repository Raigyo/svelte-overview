import {writable} from 'svelte/store'

const text = writable([
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
]);

export default text;