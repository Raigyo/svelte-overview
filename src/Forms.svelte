<script>
  let country = "";
  let objDataForm = {
    country: ""
  }
  const handleData = (e) => {
    e.preventDefault(); // no refresh after submit
    country = objDataForm.country; // from obj to var
    objDataForm.country = ""; // reinit
  }

</script>
<h2>Forms</h2>
<div class="container">
  <form on:submit={handleData}>
    <div class="form-group">
      <label for="country">Your country</label>
      <input
        bind:value={objDataForm.country}
        id="country"
        class="form-control"
        type="text"
      >
    </div>
    <button class="btn btn-primary" type="submit">Send</button>
  </form>
  <div>Your country: {country}</div>
</div>


<style>

</style>