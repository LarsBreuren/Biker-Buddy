<template>
  <div class="">
    <Navigation></Navigation>
    <div class="background">
      <PerfectBike></PerfectBike>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PerfectBike from "@/components/PerfectBike/PerfectBike.vue";

import Footer from "@/components/Website/Footer/Footer.vue";
import Navigation from "@/components/Website/Navigation/Navigation.vue";

@Component({
  components: {
    PerfectBike,
    Footer,
    Navigation,
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
  min-height: calc(100vh - 60px);
}
</style>
