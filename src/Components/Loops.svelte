<script>
  let tabCountries = ['Denmark', 'Canada', 'Belgium', 'USA', 'China']
  let tabCountryID = [
    {
      id: Math.random(),
      country: 'Denmark'
    },
    {
      id: Math.random(),
      country: 'Canada'
    },
    {
      id: Math.random(),
      country: 'Belgium'
    },
    {
      id: Math.random(),
      country: 'USA'
    },
    {
      id: Math.random(),
      country: 'China'
    },
  ]
</script>

<h2>Loops</h2>
<!-- ul>
  {#each tabCountries as country, index}
    <li>{index+1} : {country}</li>
  {/each}
</ul -->

<ul>
  {#each tabCountryID as obj, index (obj.id)}
    <li>{index+1} : {obj.country}</li>
  {/each}
</ul>

<style>

</style>