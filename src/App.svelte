<script>
  // Import components
  import Counter from './Counter.svelte'
  import Lists from './Lists.svelte'
  import Toggle from './Toggle.svelte'
  import Conditionnals from './Conditionals.svelte'
  import Loops from './Loops.svelte'
  import Binding from './Binding.svelte'
  import Forms from './Forms.svelte'
  import Inputs from './Inputs.svelte'
  import Reactivity from './Reactivity.svelte'
  import ReactivityArray from './ReactivityArray.svelte'
  import Components from './Components.svelte'
 
</script>

<!-- Function counter -->
<Counter />
<div class="separator"></div>

<!-- Lists and props -->
<Lists />
<div class="separator"></div>

<!-- Toggle with conditionnal rendering for css -->
<Toggle />
<div class="separator"></div>

<!-- Conditionnals -->
<Conditionnals />
<div class="separator"></div>

<!-- Loops -->
<Loops/>
<div class="separator"></div>

<!-- Forms -->
<Binding />
<div class="separator"></div>

<!-- Forms -->
<Forms />
<div class="separator"></div>

<!-- Inputs -->
<Inputs />
<div class="separator"></div>

<!-- Reactivity -->
<Reactivity />
<div class="separator"></div>

<!-- ReactivityArray -->
<ReactivityArray />
<div class="separator"></div>

<!-- Components -->
<Components />
<div class="separator"></div>



<style>
  .separator {
    border-top: 8px solid #bbb;
    border-radius: 5px;
    padding: 5px;
    margin-top: 5px;
  }
</style>