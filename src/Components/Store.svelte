<script>
  import storeData from '../store/store.js'
  import {onDestroy} from 'svelte'

  let txtFromStore;
  let setValue = '';

  // Suscribe to the store to use its data
  const cleanStore = storeData.subscribe(storeValue => {
    txtFromStore = storeValue;
  })

  // To destroy subscribe
  onDestroy(() => {
    if(cleanStore){
      cleanStore();
    }
  })

  const setNewData = (e) => {
    // Seter: set new value to the store
    storeData.set(e);
    // Update: use the data of to create new datas
    storeData.update(val => "New store value: " + val );
  }

</script>

<h2>Store</h2>
<h3>Store: store writable - subscribe - set - update - destroy</h3>

<div>{txtFromStore}</div>
<div>Set new value: <input bind:value={setValue} on:input={setNewData(setValue)} type="text" /></div>

<style>
  h2, h3 {
    padding: 10px 0px;
  }
</style>