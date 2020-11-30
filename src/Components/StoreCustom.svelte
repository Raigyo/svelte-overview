<script>
  import storeData from '../store/store4.js'

  let data;

  // Suscribe to the store to use its data
  storeData.subscribe(value => {
    data = value;
  });

  storeData.addBox({id: 4,txt: 'Lorem4'})

</script>

<h3>Store: "custom store"</h3>

{#each data as box (box.id)}
  <div>
    <div>{box.txt}</div>
    <div>{box.id}</div>
  </div>
{/each}

<style>
  h3 {
    padding: 10px 0px;
  }
</style>

