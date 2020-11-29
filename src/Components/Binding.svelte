<script>
  let country = "";
  /* const inpFunct = (e) => {
    // console.log(e.target.value);
    country = e.target.value;
    // console.log(country);
  } */
</script>
<h2>Two way binding</h2>
<div class="container">
  <form>
    <div class="form-group">
      <label for="country">Your country</label>
      <!-- input
      value={country}
      on:input={inpFunct}
      id="country"
      class="form-control"
      type="text"
      -->
      <!-- 2 ways binding -->
      <input
        bind:value={country}
        id="country"
        class="form-control"
        type="text"
      >
    </div>
  </form>
  <div>Your country: {country}</div>
</div>


<style>

</style>