<template>
  <div class="container ">
    <h1 class="text-white pt-64 mb-32"> Details </h1>
    <div class="stepWrapper">

      <div class="step1" v-if="!step1Done">
        <label for="voorNaam">Voornaam:</label><br>
        <input id="voorNaam" v-model="voorNaam" placeholder="Voornaam">

        <label for="leeftijd">Leeftijd:</label><br>
        <input id="leeftijd" type="number" v-model="leefTijd" placeholder="20">

        <div class="ctaNext ctaButton" @click="step1Done = !step1Done">
          Volgende stap
        </div>
      </div>

      <div class="step2" v-if="step1Done">
        <label for="rijbewijs">Rijbewijs:</label><br>

        <select v-model="rijbewijs" id="rijbewijs" class="select">
          <option disabled value="">Kies een optie</option>
          <option>Nog geen rijbewijs</option>
          <option>Aan het lessen</option>
          <option>A1</option>
          <option>A2</option>
          <option>A</option>
        </select>



        <div class="ctaNext ctaButton" @click="step1Done = !step1Done">
          Volgende stap
        </div>
      </div>
    </div>

    <div class="detailProgress">
      <h2> Stap </h2>
      <div class="progressWrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>

    </div>





    <div class="profile mt-64 w-1/2 mx-auto py-32" style="border: 2px solid white;">
      <h2 class="mb-32">Jouw biker profiel:</h2>
      <p><b>Voornaam:</b> {{ voorNaam }}</p>
      <p><b>Leeftijd:</b> {{ leefTijd }}</p>
      <p><b>Rijbewijs:</b> {{ rijbewijs }}</p>


      step 1 = {{ step1Done }}
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Details/details.scss"></style>
<script src="@/components/Details/details.ts"></script>



<!-- https://stackoverflow.com/questions/54928111/should-we-use-v-model-to-modify-vuex-store -->