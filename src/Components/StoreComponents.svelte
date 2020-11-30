<script>
  import storeData from '../store/store2.js'
  import storeCounter from '../store/store3.js'
  import {onDestroy} from 'svelte'
  import Liste1 from './Liste1.svelte'

  let txtFromStore;
  let counterFromStore;
  let titleA = "List title";

  // Suscribe to the store to use its data
  const cleanStore = storeData.subscribe(storeValue => {
    txtFromStore = storeValue;
  })

  // Suscribe to the store to use its data
  const cleanStoreCounter = storeCounter.subscribe(storeValue => {
    counterFromStore = storeValue;
  })


  // To destroy subscribe
  onDestroy(() => {
    if(cleanStore){
      cleanStore();
    }
    if(cleanStoreCounter){
      cleanStoreCounter();
    }
  })

</script>

<h3>Store: subscribe several components</h3>
{#each $storeData as item (item.id)}
  <Liste1 {titleA} />
{/each}

<h3>Store: readable store</h3>
<div>Counter from store: {counterFromStore}</div>

<style>
  h3 {
    padding: 10px 0px;
  }
</style>

