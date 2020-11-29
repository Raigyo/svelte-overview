<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const info = () => {
    dispatch('info-child', {txt: 'event dispatched'})
  }
</script>

<div class="iamChildren">
  <h5>Child component</h5>
  <button on:click={info}>Click</button>
</div>


<style>
  .iamChildren{
    border: 1px solid #333;
    padding: 15px;
  }
  h5 {
    padding: 10px 0px;
  }
</style>