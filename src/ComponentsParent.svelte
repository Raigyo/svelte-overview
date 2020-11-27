<script>
  import ComponentsChild from './ComponentsChild.svelte'
  import ComponentsChildDispatcher from './ComponentsChildDispatcher.svelte'
  import ComponentsChildSlots from './ComponentsChildSlots.svelte'
  import ComponentsLifecycle from './ComponentsLifecycle.svelte'
  // var
  let clickButton = "";
  let eventDispatched = "";
  let toggle = false;
  // on event
  const helloWorld = () => {
    console.log("Helloworld")
    clickButton = ": button from children clicked";
  }

  //dispatch
  const fctDispatch = (event) => {
    console.log(event.detail.txt);
    eventDispatched = " - " + event.detail.txt;
  }

  // toggle

  const toggleFunc = () => {
    toggle =!toggle;
  }
</script>

<h4>Events</h4>
<h5>Parent component{clickButton}</h5>
<!-- Components events -->
<ComponentsChild on:click="{helloWorld}"/>

<h4>Personalised events</h4>
<h5>Parent component{eventDispatched}</h5>
<!-- Components dispatchers -->
<ComponentsChildDispatcher on:info-child="{fctDispatch}" />

<h4>Slots</h4>
<h5>Parent component</h5>
<!-- Components slots -->
<ComponentsChildSlots>
 <div>Hello from parent</div>
 <div slot="slot1">Slot 1 from parent</div>
 <div slot="slot2">Slot 2 from parent</div>
 <div slot="slot3">Slot 3 from parent</div>
</ComponentsChildSlots>

<!-- Components Lifecycle -->
<h4>Components Lifecycle</h4>
<h5>Parent component</h5>
<button on:click={toggleFunc}>Toggle children</button>
{#if toggle}
<ComponentsLifecycle>
  <div slot="content">See console for lifecycles</div>
</ComponentsLifecycle>
{/if}



<style>
  h5 {
      padding: 10px 0px;
  }
</style>