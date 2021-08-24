<template>
  <div class="container pt-32">
    <div class="stepWrapper" v-if="!detailsDone">
      <v-icon @click="resetSteps" size="35" class="
          backButton
          ">mdi-menu-left</v-icon>

      <div v-if="step1active" class="step1">
        <label for="voorNaam">Voornaam:</label><br>
        <input type="text" id="voorNaam" v-model="driverInfo.Voornaam" placeholder="Voornaam">

        <label for="leeftijd">Leeftijd:</label><br>
        <input id="leeftijd" type="number" v-model="driverInfo.Leeftijd" placeholder="20">

        <button button :disabled='!driverInfo.Voornaam || !driverInfo.Leeftijd' class="ctaNext ctaButton"
          @click="next1">
          Volgende stap
        </button>
      </div>

      <div class="step2" v-if="step2active">
        <label for="rijbewijs">Welk rijbewijs heb je {{ driverInfo.Voornaam }}?</label><br>

        <select v-model="driverInfo.Rijbewijs" id="rijbewijs" class="select">
          <option disabled value="">Kies een optie</option>
          <option>Nog geen rijbewijs</option>
          <option>Aan het lessen</option>
          <option>A1</option>
          <option>A2</option>
          <option>A</option>
        </select>

        <div class="ctaNext ctaButton" @click="next2">
          Volgende stap
        </div>
      </div>

      <div class="step3" v-if="step3active">
        <label for="info">Waar wil je graag meer over weten {{ driverInfo.Voornaam }}?</label><br>
        <div class="optionContainer">
          <div class="option">
            <input type="checkbox" id="Onderhoud" value="Onderhoud" v-model="driverInfo.Info">
            <p class="labelText">Onderhoud</p>
                  <v-icon @click="resetSteps" size="35" class="labelIcon">mdi-hammer-screwdriver</v-icon>
            <label  for="Onderhoud"></label>
          </div>
          <div class="option">
            <input type="checkbox" id="Rijvaardigheid" value="Rijvaardigheid" v-model="driverInfo.Info">
            <p class="labelText">Rijvaardigheid</p>
                  <v-icon @click="resetSteps" size="35" class="labelIcon">mdi-road-variant</v-icon>
            <label  for="Rijvaardigheid"></label>
          </div>
          <div class="option">
            <input type="checkbox" id="Aankoop" value="Aankoop" v-model="driverInfo.Info">
                   <p class="labelText">Aankoop advies</p>
                  <v-icon @click="resetSteps" size="35" class="labelIcon">mdi-currency-usd</v-icon>
            <label  for="Aankoop"></label>
          </div>
          <div class="option">
            <input type="checkbox" id="Rijbewijs" value="Rijbewijs" v-model="driverInfo.Info">
                   <p class="labelText">Rijbewijs coaching</p>
                  <v-icon @click="resetSteps" size="35" class="labelIcon">mdi-poll</v-icon>
            <label  for="Rijbewijs"></label>
          </div>
        </div>
        <br>

        <!-- <span>Checked names: {{ driverInfo.Info }}</span> -->

        <div class="ctaNext ctaButton" @click="next3">
          Afronden
        </div>
      </div>

    </div>

    <div class="detailProgress">
      <h2> Stap </h2>
      <div class="progressWrapper">
        <div v-bind:class="(step1Done)?'greenCircle':'circle'">1</div>
        <div v-bind:class="(step2Done)?'greenCircle':'circle'">2</div>
        <div v-bind:class="(step3Done)?'greenCircle':'circle'">2</div>
      </div>

    </div>

    <div v-if="detailsDone" class="profile">
      <h2 class="mb-32">Jouw biker profiel</h2>
      <v-icon @click="resetSteps" size="35" class="
          backButton
          ">mdi-menu-left</v-icon>
      <ul>
        <li class=" w-full p-8 " v-for="(value, detail) in driverInfo" :key="value.id">
          {{ detail }} : {{ value }}
          </li>
      </ul>

      <button class="ctaButton" @click="updateStore"> Opslaan & doorgaan </button>


    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Details/details.scss"></style>
<script src="@/components/Details/details.ts"></script>



<!-- https://stackoverflow.com/questions/54928111/should-we-use-v-model-to-modify-vuex-store -->