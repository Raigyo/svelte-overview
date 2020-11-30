import {readable} from 'svelte/store'

let counter = 0;

const time = readable(counter, (recall) => {
  const interval = setInterval(() => {
    counter++;
    recall(counter);
  }, 1000)

  return () => {
    clearInterval(interval)
  }
})
export default time;