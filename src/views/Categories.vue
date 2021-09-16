<template>
  <div class="">
    <div class="background">
      <Navigation></Navigation>
      <CatOverview></CatOverview>
      <!-- <Footer></Footer> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CatOverview from "@/components/CatOverview/CatOverview.vue";

import Footer from "@/components/Website/Footer/Footer.vue";
import Navigation from "@/components/Website/Navigation/Navigation.vue";


@Component({
  components: {
    Footer,
    Navigation,
    CatOverview
  }
})
export default class Home extends Vue {

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