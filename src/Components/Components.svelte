<script>
  import ComponentsParent from './ComponentsParent.svelte'
  let hello = "";
  let hello2 = "";

  const myFunct = () => {
    hello2 = ": Helloworld"
  }
  const helloWorld = () => {
    console.log("Helloworld")
  }
</script>

<h2>Components</h2>
<!-- Inline method -->
<h3>Inline method</h3>
<div
  on:mouseenter="{() => hello = ": Helloworld" }"
  on:mouseleave="{ () => hello = "" }"
>
  Hover me {hello}
</div>
<!-- Modifiers (with pipe) -->
<h3>Modifiers (with pipe)</h3>
<h4>Exemple 1</h4>
<span on:mouseleave="{ () => hello2 = "" }">
  <button on:click|once={myFunct}>Click me once</button>{hello2}
</span>
<h4>Exemple 2</h4>
<form on:submit|preventDefault={helloWorld}>
  <input type="submit" value="Envoyer le formulaire">
</form>
<h4>Exemple 3</h4>
<div class="box" on:click={helloWorld}>
  <p on:click|stopPropagation={helloWorld}>Lorem ipsum dolor sit amet.</p>
</div>
<!-- Control events with parent -->
<h3>Control events with parent</h3>
<ComponentsParent />

<style>
.box {
  width: 250px;
  height: 250px;
  background: chocolate;
}
p {
  background: cyan;
}

h3, h4 {
  padding: 10px 0px;
}
</style>

