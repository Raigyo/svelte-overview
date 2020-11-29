<script>
  // Counter
  let counter = 0;
  const increment = () => {
    counter++;
  };
  const decrement = () => {
    counter--;
  };
  const reset = () => {
    counter = 0;
  };
</script>

<h2>Function counter</h2>
<div class="counter">{counter}</div>
<button on:click={increment}>+1</button>
<button on:click={decrement}>-1</button>
<button on:click={reset}>Reset</button>


<style>
  .counter{
    font-size: 25px;
  }
</style>