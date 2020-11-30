<script>
  import storeData from '../store/storeDark.js'
  import BtnToggleMode from './BtnToggleMode.svelte'

  let data;

  // Suscribe to the store to use its data
  storeData.subscribe(value => {
    data = value;
  });

</script>

<h3>Store: Dark Mode</h3>

<div class={data ? "containerNew go-light" : "containerNew go-dark"}>
  <BtnToggleMode />
  <div class="title">Lorem ipsum dolor sit amet.</div>
  <p class="content">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus repellat vero
     vel, libero deserunt cumque exercitationem, earum corporis ducimus accusantium quam,
     laboriosam sed maiores.
  </p>
  <p class="content">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus repellat vero
     vel, libero deserunt cumque exercitationem, earum corporis ducimus accusantium quam,
     laboriosam sed maiores.
  </p>
</div>


<style>
  h3 {
    padding: 10px 0px;
  }
  .title{
    text-align: center;
    padding: 25px 80px;
    font-size: 22px;
  }
  .containerNew{
    width: 100%;
		height: auto;
		min-height: 50vh;
    transition: color 0.2s ease-in, background-color 0.2s ease-in;
  }
  .content{
    padding: 10px 5vw;
  }
</style>

