<script>
  let firstName = "";
  let age = "";
  let weight = "";
  let txtData = "";
  let objDataForm = {
    firstName: "",
    age: "",
    weight: "",
    txtData: ""
  }
  const handleData = (e) => {
    e.preventDefault(); // no refresh after submit
    firstName = objDataForm.firstName; // from obj to var
    age = objDataForm.age;
    weight = objDataForm.weight;
    txtData = objDataForm.txtData;
    objDataForm.firstName = ""; // reinit
    objDataForm.age = "";
    objDataForm.weight = "";
    objDataForm.txtData = "";
  }

</script>
<h2>Inputs</h2>
<div class="container">
  <form on:submit={handleData}>
    <div class="form-group">
      <label for="firstName">Your firstname</label>
      <input
        bind:value={objDataForm.firstName}
        id="firstName"
        class="form-control"
        type="text"
      >
      <label for="age">Your age</label>
      <input
        bind:value={objDataForm.age}
        id="age"
        class="form-control"
        type="number"
      >
      <label for="weight">Your weight</label>
      <input
        bind:value={objDataForm.weight}
        id="weight"
        class="form-control"
        type="range"
        min=30
        max=100
      >
      <span>Selection: {objDataForm.weight}</span>
      <label for="txt">Your message</label>
      <textarea
        bind:value={objDataForm.txtData}
        id="txt"
        class="form-control"
      />
    </div>
    <button class="btn btn-primary" type="submit">Send</button>
  </form>
  <div>Your firstName: {firstName}</div>
  <div>Your age: {age}</div>
  <div>Your weight: {weight}</div>
  <div>Your message: {txtData}</div>
</div>

<style>

</style>