<template>

  <div class="container relative h-full">
    <div class="contentcontainer pt-64">
      <div class="content">
        <h1 class="text-white text-6xl"> Biker buddy </h1>
        <p class="subtitle text-white "> Your virtual riding buddy </p>
      </div>
      <div class="blur"></div>
    </div>
    <router-link style="width: 100px;" class="z-10 fixed ctaButton bottom-0 mb-64 left-0 right-0 mx-auto" to="/Details">Begin</router-link>
    <div class="bg"> </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Intro/intro.scss"></style>
<script src="@/components/Intro/intro.ts"></script>

