<script>
  // Import components
  import Counter from './Components/Counter.svelte'
  import Lists from './Components/Lists.svelte'
  import Toggle from './Components/Toggle.svelte'
  import Conditionnals from './Components/Conditionals.svelte'
  import Loops from './Components/Loops.svelte'
  import Binding from './Components/Binding.svelte'
  import Forms from './Components/Forms.svelte'
  import Inputs from './Components/Inputs.svelte'
  import Reactivity from './Components/Reactivity.svelte'
  import ReactivityArray from './Components/ReactivityArray.svelte'
  import Components from './Components/Components.svelte'
  import CardUIParent from './Components/CardUIParent.svelte'
  import TabUi from './Components/TabUi.svelte';
  import Navbar from './Components/Navbar.svelte';

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

<!-- UI: Modal -->
<CardUIParent />

<!-- UI: Tabs -->
<TabUi />

<!-- UI: Navbar -->
<Navbar />
<div class="separator"></div>

<style>
  .separator {
    border-top: 8px solid #bbb;
    border-radius: 5px;
    padding: 5px;
    margin-top: 5px;
  }
</style>