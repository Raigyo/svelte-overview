<script>
  import {onMount, onDestroy, beforeUpdate, afterUpdate} from 'svelte';

  onMount (() => {
    console.log("onMount / Create");
  })
  onDestroy (() => {
    console.log("onDestroy / Delete");
  })
  beforeUpdate (() => {
    console.log("beforeUpdate / Update");
  })
  afterUpdate (() => {
    console.log("afterUpdate / Updated");
  })
</script>

<div class="iamChildren">
  <h5>Child component</h5>
  <slot />
  <div class="slots">
    <slot name="content"></slot>
  </div>
</div>


<style>
  .iamChildren{
    border: 1px solid #333;
    padding: 15px;
  }
  h5 {
    padding: 10px 0px;
  }
  .slots{
    padding-left: 20px;
  }
</style>