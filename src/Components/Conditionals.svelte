<script>
  // Counter
  let counter = 0;
  const increment = () => {
    counter = counter+10;
  };
  const reset = () => {
    counter = 0;
  };
</script>

<h2>Conditionals</h2>
<button on:click={increment}>Increment</button>
<button on:click={reset}>Reset</button>
<div class="counter">{counter}</div>

{#if counter<30}
  <p>Counter is smaller than 30</p>
{:else if counter >= 30 && counter <=50 }
  <p>Counter is between 30 and 50</p>
{:else}
  <p>Counter is bigger than 50</p>
{/if}

<style>
    .counter{
    font-size: 25px;
  }
</style>