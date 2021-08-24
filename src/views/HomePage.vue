<template>
  <div class="">
    <Navigation></Navigation>
    <div class="bg-main" style="margin-top: 60px; height: 100vh">
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

@Component({
  components: {
    Home,
    Footer,
    Navigation
  }
})
export default class  extends Vue {}
</script>
