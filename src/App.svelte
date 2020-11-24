<script>
  // Import components
  import Counter from './Counter.svelte'
  import Lists from './Lists.svelte'
  import Toggle from './Toggle.svelte'
  import Conditionnals from './Conditionnals.svelte'
  import Loops from './Loops.svelte'
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
<Loops />
<div class="separator"></div>

<style>
  .separator {
    border-top: 8px solid #bbb;
    border-radius: 5px;
    padding: 5px;
    margin-top: 5px;
  }
</style>