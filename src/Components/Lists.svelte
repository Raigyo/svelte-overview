<script>
  import Liste1 from './Liste1.svelte'
  import Liste2 from './Liste2.svelte'

  // Var used as props
  let title = "List title A";
  let titleA = "List title A";

  // Obj
  const myObj = {
  name: "Suu Kyi",
  race: "European blue tabby",
  weight:3.5,
  age: 12,
  color: "grey"
}
</script>

<h2>Lists and props</h2>
<!-- Components -->
<!-- props -->
<!--Liste1 titleA={"List title A"} /-->

<!-- props using var -->
<!-- Liste1 titleA={title} / -->

<!-- if var name = props name -->
<Liste1 {titleA} />

<!-- use default value from component if no props -->
<!-- Liste1 / -->

<!-- Obj as props -->
<!-- Liste2 titleA={"My cat"}
  name = {myObj.name}
  race = {myObj.race}
  weight = {myObj.weight}
  age = {myObj.age}
  color = {myObj.color}
/ -->

<!-- Obj as props using spread operator -->
<Liste2 titleA={"My cat"} {...myObj} />


<style>
</style>