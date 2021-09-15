<template>
  <div class="">
    <Navigation></Navigation>
    <div class="background">
      <Home></Home>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "@/components/HomePage/HomePage.vue";

import Footer from "@/components/Website/Footer/Footer.vue";
import Navigation from "@/components/Website/Navigation/Navigation.vue";
import FullWidthImage from "@/components/FullWidthImage/FullWidthImage.vue";

@Component({
  components: {
    Home,
    Footer,
    Navigation,
    FullWidthImage
  }
})
export default class  extends Vue {
    public imagelink1 = "features/bikerbuddy.jpg";
}
</script>

<style scoped>
.background{
  @apply bg-main;
  margin-top: 60px;
  height: 100%;
  min-height: calc(100vh + 60px);
}
</style>
