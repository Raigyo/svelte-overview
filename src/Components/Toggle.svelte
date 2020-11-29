<script>
  // Toggle
  let toggle = false;
  const toggleClasses = () => {
    toggle = !toggle;
  }
</script>

<h2>Toggle with conditionnal rendering for css</h2>
<!-- Toggle with conditionnal rendering for css -->
<button on:click={toggleClasses}>Toggle content</button>
<div class={toggle ? 'visible' : 'invisible'}>
  <h2>Here is the content</h2>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, perferendis beatae! 
  Est quisquam provident quae laborum officia placeat alias eligendi.
</div>

<!-- Conditionnal  -->
{#if toggle}
  <div class="visible">
    <h2>Here is another content</h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis est temporibus amet hic, 
    rem molestias repudiandae reprehenderit. Nam, quasi.
  </div>
{/if}


<style>
  /* Toggle button */
  .visible {
    width: 250px;
    height: auto;
    padding: 10px;
    background: lightblue;
    text-align: center;
  }
  .invisible {
    display: none;
  }
</style>