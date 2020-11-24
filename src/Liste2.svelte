<script>
  export let titleA = "default value";
  export let name;
  export let age;
  export let weight;
  export let color;
  export let race;
</script>

<h3>{titleA}</h3>
<ul>
  <li>Name: {name}</li>
  <li>Race: {race}</li>
  <li>Age: {age} years</li>
  <li>Weight: {weight} kg</li>
  <li>Color: {color}</li>
</ul>

<style>
  h3 {
    color: rgb(67, 65, 99);
  }
</style>