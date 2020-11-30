<script>

  import{onMount} from 'svelte';

  let toggleMenu = false;

  const toggleMenuRes = () => {
    toggleMenu = !toggleMenu;
  }

  const resetMenu = () => {
    toggleMenu = false;
  }

  // when component is created it listens the media-query
  onMount(() => {
    const mediaListener = window.matchMedia("(max-width: 650px");
    // when the media-query matches, it activates 'resetMenu'
    // != MediaQueryList.addListener !!!
    mediaListener.addListener(resetMenu);
  })

</script>

<h4>Navbar - burger menu responsive</h4>
<nav>
  <div on:click={toggleMenuRes} class="logo">
    <div>&#9776</div>
  </div>
  <ul class={toggleMenu ? "list-nav visible" : "list-nav"}>
    <li class="item-nav">
      <a href="#test">Lorem</a>
    </li>
    <li class="item-nav">
      <a href="#test">Lorem</a>
    </li>
    <li class="item-nav">
      <a href="#test">Lorem</a>
    </li>
    <li class="item-nav">
      <a href="#test">Lorem</a>
    </li>
    <li class="item-nav">
      <a href="#test">Lorem</a>
    </li>
    <li class="item-nav">
      <a href="#test">Lorem</a>
    </li>
  </ul>
</nav>

<style>
  h4 {
    padding: 10px 0px;
  }
  nav {
    height: 70px;
    width: 100%;
    background: #333;
    position: relative;
  }
  .logo {
    color: #fff;
    font-size: 40px;
    position: absolute;
    left: 10px;
    top: 5px;
    display: none;
  }
  .list-nav {
    list-style-type: none;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
  }
  .list-nav li a {
    color: #f1f1f1;
    text-decoration: none;
    margin: 0 10px;
    font-size: 22px;
  }

  @media only screen and (max-width: 650px){
    .logo {
      display: block;
    }
    .list-nav {
      flex-direction: column;
      position: relative;
      top: 70px;
      display: none;
    }
    .list-nav.visible {
      display: block;
    }
    .item-nav {
      width: 100vw;
      background: #333;
      text-align: center;
      padding: 10px 0;
    }
  }
</style>