<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const closeModal = () => {
    dispatch('close-modal')
  }
</script>


<div on:click={closeModal} class="overlay"></div>
<div class="iamChildren">
  <h5>Children component</h5>
  <div class="title">Lorem ipsum dolor sit amet.</div>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos consequatur neque,
    non molestiae et nesciunt, explicabo ex, magni expedita eveniet totam accusamus
    voluptatibus ipsum similique.
  </p>
  <button on:click={closeModal} class="btn btn-danger">X</button>
</div>


<style>
  .overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .iamChildren{
    width: 500px;
    border: 1px solid #333;
    padding: 15px;
    background: cornsilk;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /* h5 {
    padding: 10px 0px;
  }
  .slots{
    padding-left: 20px;
  } */
  .title{
    font-size: large;
    font-weight: bold;
  }
</style>