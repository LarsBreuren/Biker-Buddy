<template>

  <div class="container">

    <h1 class="text-3xl text-white"> Hi {{driverInfo.Voornaam}}, welkom op de homepagina! </h1>
    <p> De onderstaanda artikelen matchen met jouw scores! </p>

  <div class="artikelen mt-16">
      <h2> Artikelen </h2>
      <ul id="example-1 ">
        <li v-for="prio in this.$store.state.prio" :key="prio">
          Artikel: {{ prio }} coming soon..
        </li>
      </ul>
  </div>

  </div>
</template>

<style scoped lang="scss" src="@/components/HomePage/homePage.scss"></style>
<script src="@/components/HomePage/homePage.ts"></script>