<template>
  <div class="">
    <!-- <Navigation></Navigation> -->
    <div class="bg-main" style="height: 100vh">
      <Intro></Intro>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Intro from "@/components/Intro/Intro.vue";

import Footer from "@/components/Website/Footer/Footer.vue";
import Navigation from "@/components/Website/Navigation/Navigation.vue";

@Component({
  components: {
    Intro,
    Footer,
    Navigation
  }
})
export default class Home extends Vue {}
</script>
