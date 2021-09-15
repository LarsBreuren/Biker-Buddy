<template>
  <div class="">

    <Navigation></Navigation>
    <div class="bg-main" style="margin-top: 60px; height: 100%">
      <Article></Article>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/Website/Navigation/Navigation.vue";
import Footer from "@/components/Website/Footer/Footer.vue";
import Article from "@/components/Articles/Onderhoud/Ketting/Ketting.vue";

@Component({
  components: {
    Footer,
    Article,
    Navigation,
  }
})
export default class Home extends Vue {

}
</script>
