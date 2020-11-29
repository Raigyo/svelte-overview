<script>
let val1 = 100;
let val2 = 300;
let val3 = 50;

let totalNonreactive = val1 + val2 + val3;
let warning = "";

let array = [1,2,3,4];

const spendSup = () => {
  val3 = 1000;
}

// reactive vars
$: total = val1 + val2 + val3;
$: newVal3 = val3;

// reactive function

$: if(total >1000){
  warning = " | Warning: Expenses are greater than 1000";
}



</script>

<h2>Reactive variables and methods</h2>
<p>Reactive: {val1} + {val2} + {newVal3} = {total} {warning}</p>
<p>Non reactive: {val1} + {val2} + {newVal3} = {totalNonreactive}</p>
<p>Change val3 from 50 to 800: {val3}</p>
<button on:click={spendSup}>Change spending</button>


<style>

</style>