<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/about" >About</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!--
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        -->

        <b-nav-item-dropdown text="BootStrap" right>
          <b-dropdown-item href="/bs1">BootStrap1</b-dropdown-item>
          <b-dropdown-item href="/bs2">BootStrap2</b-dropdown-item>
          <b-dropdown-item href="/bs3">BootStrap3</b-dropdown-item>
          <b-dropdown-item href="/bs4">BootStrap4</b-dropdown-item>
          <b-dropdown-item href="/bs5">BootStrap5</b-dropdown-item>
          <b-dropdown-item href="/bs6">BootStrap6</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Input" right>
          <b-dropdown-item href="/in1">Input01</b-dropdown-item>
          <b-dropdown-item href="/in2">Input02</b-dropdown-item>
          <b-dropdown-item href="/in3">Input03</b-dropdown-item>
          <b-dropdown-item href="/in4">Input04</b-dropdown-item>
          <b-dropdown-item href="/in5">Input05</b-dropdown-item>
          <b-dropdown-item href="/in6">Input06</b-dropdown-item>
          <b-dropdown-item href="/in7">Input07</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Cal" right>
          <b-dropdown-item href="/ca1">Cal1</b-dropdown-item>
          <b-dropdown-item href="/ca2">Cal2</b-dropdown-item>
          <b-dropdown-item href="/ca3">Cal3</b-dropdown-item>
          <b-dropdown-item href="/ca4">Cal4</b-dropdown-item>
          <b-dropdown-item href="/ca5">Cal5</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Tag" right>
          <b-dropdown-item href="/ta1">Tag1</b-dropdown-item>
          <b-dropdown-item href="/ta2">Tag2</b-dropdown-item>
          <b-dropdown-item href="/ta3">Tag3</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Carousel" right>
          <b-dropdown-item href="/cr1">Carousel1</b-dropdown-item>
          <b-dropdown-item href="/cr2">Carousel2</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Embed" right>
          <b-dropdown-item href="/em1">Embed1</b-dropdown-item>
          <b-dropdown-item href="/em2">Embed2</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Sel" right>
          <b-dropdown-item href="/se1">Sel1</b-dropdown-item>
          <b-dropdown-item href="/se2">Sel2</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Text" right>
          <b-dropdown-item href="/te1">Text1</b-dropdown-item>
          <b-dropdown-item href="/te2">Text2</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Axios" right>
          <b-dropdown-item href="/ax1">Axios1</b-dropdown-item>
          <b-dropdown-item href="/ax2">Axios2</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="MiniPrj" right>
          <b-dropdown-item href="/crypto1">Crypto1</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Json" right>
          <b-dropdown-item href="/json1">Crypto1</b-dropdown-item>
        </b-nav-item-dropdown>
 
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
  export default {
    name:'Header'
  }
</script>
