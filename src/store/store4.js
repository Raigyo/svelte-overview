import {writable} from 'svelte/store'

function customStoreBox(){
  const boxStore = writable([
    {
      id: 1,
      txt: 'Lorem1'
    },
    {
      id: 2,
      txt: 'Lorem2'
    },
    {
      id: 3,
      txt: 'Lorem3'
    }
  ]);

  return {
    // suscribe to store
    subscribe: boxStore.subscribe,
    // custom method
    addBox: (box) => {
      boxStore.update(boxes => {
        return [...boxes, box]
      })
    }
  }
}

// export and execute
export default customStoreBox();