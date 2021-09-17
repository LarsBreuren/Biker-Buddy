<template>

  <div class="container relative h-full">
    <div class="contentcontainer pt-64">
      <div class="content">
        <h1 class="text-white text-6xl"> Biker buddy </h1>
        <p class="subtitle text-white "> Your virtual riding buddy </p>
      </div>
      <div class="blur"></div>
    </div>
    <div class="buttons">
      <div class="button ctaButton" @click="zeroFlow">Zero Flow</div>
      <div class="button ctaButton" @click="returnFlow" >Return flow</div>
    </div>
  <div class="headsUp">
   <p> Gebruik een smartphone voor de beste ervaring (niet geoptimaliseerd voor tablet/laptops/desktops/ VR brillen). </p>
   </div>
    <div class="bg"> </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Intro/intro.scss"></style>
<script src="@/components/Intro/intro.ts"></script>

