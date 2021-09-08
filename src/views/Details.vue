<template>
  <div class="">
    <!-- <Navigation></Navigation> -->
    <div class="bg-main backgroundDetails">
    <div class="bgOverlay"></div>
      <Details style="z-index: 10; position: relative;"></Details>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "vue-property-decorator";
  import Details from "@/components/Details/Details.vue";

  import Footer from "@/components/Website/Footer/Footer.vue";
  import Navigation from "@/components/Website/Navigation/Navigation.vue";

  @Component({
    components: {
      Details,
      Footer,
      Navigation
    }
  })
  export default class Home extends Vue {}
</script>

<style scoped>
.backgroundDetails{
    height: 100vh;
    background-image: url('https://wallpaperaccess.com/full/1315789.jpg');
    background-size: cover;
}
.bgOverlay{
  position: absolute;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border-radius: 0.5rem;
}
</style>