<script>
  import CardUI from './CardUI.svelte'
  // var
  let toggle = false;
  // toggle

  const toggleFunc = () => {
    toggle =!toggle;
  }
</script>
<h2>UI</h2>
<h4>Modal</h4>
<h5>Parent component</h5>
<button on:click={toggleFunc}>Toggle children</button>
{#if toggle}
<CardUI on:close-modal={toggleFunc}/>
{/if}





<style>
  h5 {
      padding: 10px 0px;
  }
</style>