<template>
  <div class="">
    <Navigation></Navigation>
    <div class="bg-main pt-8" style="margin-top: 60px; height: 100vh">
      <Profile></Profile>
      <router-link class="ctaButton m-16" @click.native="toggle()" to="/details">
        Edit <v-icon size="25" class="
              text-black
              cursor-pointer
            ">mdi-pencil</v-icon>
      </router-link>
      <router-link class="ctaButton m-16" @click.native="toggle()" to="/homepagina">
        Home <v-icon size="25" class="
              text-black
              cursor-pointer
            ">mdi-home</v-icon>
      </router-link>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "vue-property-decorator";
  import Profile from "@/components/LicenseProfile/LicenseProfile.vue";

  import Footer from "@/components/Website/Footer/Footer.vue";
  import Navigation from "@/components/Website/Navigation/Navigation.vue";

  @Component({
    components: {
      Profile,
      Footer,
      Navigation
    }
  })
  export default class extends Vue {}
</script>