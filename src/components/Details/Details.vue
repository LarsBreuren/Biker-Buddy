<template>
  <div class="container ">
    <h1 class="text-white pt-64 mb-32"> Details </h1>
    <div class="stepWrapper">

      <div class="step1">
        <label for="voorNaam">Voornaam:</label><br>
        <input id="voorNaam" v-model="voorNaam" placeholder="Voornaam">
        
        <label for="leeftijd">Leeftijd:</label><br>
        <input id="leeftijd" type="number" v-model="leefTijd" placeholder="20">
      </div>

    </div>

    <div class="profile mt-64 w-1/2 mx-auto py-32" style="border: 2px solid white;">
      <h2 class="mb-32">Jouw biker profiel:</h2>
        <p><b>Voornaam:</b> {{ voorNaam }}</p>
        <p><b>Leeftijd:</b> {{ leefTijd }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Details/details.scss"></style>
<script src="@/components/Details/details.ts"></script>



<!-- https://stackoverflow.com/questions/54928111/should-we-use-v-model-to-modify-vuex-store -->