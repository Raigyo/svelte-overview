<script>
  let toggleTabs = 1;
  const functToggle = (index) => {
    toggleTabs = index;
  }
</script>

<h4>Tabs</h4>
<div class="box-tabs">
  <div class="selectors">
    <div on:click="{() => functToggle(1)}" class="selector s1">Content 1</div>
    <div on:click="{() => functToggle(2)}" class="selector s2">Content 2</div>
    <!-- div on:click="{() => functToggle(3)}" class="selector s2">Formule $$$$$$</div-->
  </div>

  <div class={toggleTabs === 1 ? "content visible" : "content"}>
    <div class="title">Content 1</div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos consequatur neque,
      non molestiae et nesciunt, explicabo ex, magni expedita eveniet totam accusamus
      voluptatibus ipsum similique.
    </p>
  </div>
  <div class={toggleTabs === 2 ? "content visible" : "content"}>
    <div class="title">Content 2</div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos consequatur neque,
      non molestiae et nesciunt, explicabo ex, magni expedita eveniet totam accusamus
      voluptatibus ipsum similique.
    </p>
  </div>
</div>

<style>
  .title{
    font-size: large;
    font-weight: bold;
  }
  h4 {
    padding: 10px 0px;
  }
  .box-tabs{
    border: 1px solid #333;
    max-width: 500px;
    margin: 100px auto;
  }
  .selectors{
    display: flex;
  }
  .selector{
    cursor: pointer;
    width: 50%;
    height: 70px;
    line-height: center;
    text-align: center;
    font-size: 20px;
    color: #fff;
    background: crimson;
  }
  .selector:hover{
    background: rgb(241,58,95);
  }
  .s1 {
    border-right: 1px solid #000;
  }
  .s2 {
    border-left: 1px solid #000;
  }
  .content{
    display: none;
    min-height: 230px;
    height: auto;
    padding: 25px;
  }
  .visible{
    display: block;
  }
</style>