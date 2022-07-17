<template>
  <div>
    <b-button-toolbar>
      <b-button-group class="mr-1">
        <b-button title="Save file">
          <b-icon icon="cloud-upload" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Load file">
          <b-icon icon="cloud-download" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="New document">
          <b-icon icon="file-earmark" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
      <b-button-group class="mr-1">
        <b-button title="Align left">
          <b-icon icon="text-left" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Align center">
          <b-icon icon="text-center" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Align right">
          <b-icon icon="text-right" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
      <b-button-group>
        <b-button title="Bold">
          <b-icon icon="type-bold" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Italic">
          <b-icon icon="type-italic" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Underline">
          <b-icon icon="type-underline" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Strikethrough">
          <b-icon icon="type-strikethrough" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
    </b-button-toolbar>


     <div style="font-size: 4rem;">
    <b-icon icon="camera"></b-icon>
    <b-icon icon="camera" rotate="45"></b-icon>
    <b-icon icon="camera" rotate="90"></b-icon>
    <b-icon icon="camera" rotate="180"></b-icon>
    <b-icon icon="camera" rotate="270"></b-icon>
    <b-icon icon="camera" rotate="-45"></b-icon>
  </div>
  <div style="font-size: 4rem;">
    <b-icon icon="bell-fill" class="border rounded p-2"></b-icon>
    <b-icon icon="bell-fill" class="border border-info rounded p-2" variant="info"></b-icon>
    <b-icon icon="bell-fill" class="rounded-circle bg-danger p-2" variant="light"></b-icon>
    <b-icon icon="unlock-fill" class="rounded bg-primary p-1" variant="light"></b-icon>
  </div>
   <div>
    <b-icon icon="camera" font-scale="0.5"></b-icon>
    <b-icon icon="camera" font-scale="1"></b-icon>
    <b-icon icon="camera" font-scale="2"></b-icon>
    <b-icon icon="camera" font-scale="3"></b-icon>
    <b-icon icon="camera" font-scale="4"></b-icon>
    <b-icon icon="camera" font-scale="5"></b-icon>
    <b-icon icon="camera" font-scale="7.5"></b-icon>
  </div>
<div>
    <p class="h1 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
    <p class="h2 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
    <p class="h3 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
    <p class="h4 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
    <p class="h5 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
  </div>
  <div class="h2 mb-0">
    <b-icon icon="exclamation-circle-fill" variant="success"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="warning"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="info"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="primary"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="secondary"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="dark"></b-icon>
  </div>    
  </div>
</template>



<script>
  export default {
    name:'BootStrapViewFive'    
  }
</script>