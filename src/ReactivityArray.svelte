<script>

let array = [1,2,3,4];
let myObj = {
    a: 1,
    b: 2,
    c: 3
  }

const spendSup = () => {
  // reactive array
  /* rerendering in svelte is based on "equal" sign */
  // array.puch(5);
  array = [...array, array.length+1];
  myObj.a = 500;
}

</script>

<h2>Reactive arrays and objects</h2>
<p>{array}</p>
<p>{myObj.a}</p>
<button on:click={spendSup}>Change values</button>


<style>

</style>