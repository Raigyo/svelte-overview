<script>
  
</script>

<div class="iamChildren">
  <h5>Child component</h5>
  <slot />
  <div class="slots">
    <slot name="slot1"></slot>
    <slot name="slot2"></slot>
    <div>I'm from children</div>
    <slot name="slot3"></slot>
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