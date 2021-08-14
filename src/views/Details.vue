<template>
  <div class="">
    <!-- <Navigation></Navigation> -->
    <div class="bg-main" style="height: 100vh">
      <Details></Details>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
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
