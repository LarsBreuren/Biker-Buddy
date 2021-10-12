<template>
  <div class="container" style="padding-bottom: 75px;">
  <h1 class="pt-16"> Dit is wat voor jou! </h1>

    <div class="bike">
      <h2> 1) {{bike1details.name}} </h2>
        <img class="bannerImg" :src="bike1details.imgLink" />
        <p> {{bike1details.description}} </p>
    </div>
    <div class="bike">
      <h2> 2) {{bike2details.name}} </h2>
        <img class="bannerImg" :src="bike2details.imgLink" />
        <p> {{bike2details.description}} </p>
    </div>
    <div class="bike">
      <h2> 3) {{bike3details.name}} </h2>
        <img class="bannerImg" :src="bike3details.imgLink" />
        <p> {{bike3details.description}} </p>
    </div>

  </div>
</template>

<style scoped lang="scss" src="@/components/PerfectBike/perfectBike.scss"></style>
<script src="@/components/PerfectBike/perfectBike.ts"></script>
