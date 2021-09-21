<template>
  <div class="container pt-16">
    <div class="stepWrapper" v-if="!detailsDone">
              <!-- <v-icon @click="resetSteps" size="35" class="
          backButton
          ">mdi-menu-left</v-icon> -->
      <div v-if="step1active" class="step1">
        <h1> Motor keuzehulp </h1>
        <p> Om jou aan de perfect motor te helpen volgen een paar vragen of jou (toekomstige) rijstijl.</p>
        <button button  class="mt-32 ctaNext ctaButton"
          @click="next1">
          begin!
        </button>
      </div>

      <div class="step2 text-center" v-if="step2active">
        <h2 class="text-3xl mb-8"> Rijbewijs en papieren graag </h2>
        <label for="voorNaam">Voornaam:</label><br>
        <input type="text" id="voorNaam" v-model.trim="driverInfo.Voornaam" placeholder="Voornaam">

        <label for="leeftijd">Leeftijd:</label><br>
        <input id="leeftijd" type="number" v-model.trim="driverInfo.Leeftijd" placeholder="20">

        <button button :disabled='!driverInfo.Voornaam || driverInfo.Leeftijd < 17' class="ctaNext ctaButton"
          @click="next2">
          Volgende stap
        </button>
      </div>

      <div class="step3" v-if="step3active">
        <label for="info">Waar wil je graag meer over weten {{ driverInfo.Voornaam }}?</label><br>
        <div class="optionContainer">
          <div class="option">
            <input type="checkbox" id="Onderhoud" value="Onderhoud" v-model.trim="driverInfo.Info">
            <p class="labelText">Onderhoud</p>
                  <v-icon @click="resetSteps" size="35" class="labelIcon">mdi-hammer-screwdriver</v-icon>
            <label  for="Onderhoud"></label>
          </div>
          <div class="option">
            <input type="checkbox" id="Rijvaardigheid" value="Rijvaardigheid" v-model.trim="driverInfo.Info">
            <p class="labelText">Rijvaardigheid</p>
                  <v-icon @click="resetSteps" size="35" class="labelIcon">mdi-road-variant</v-icon>
            <label  for="Rijvaardigheid"></label>
          </div>
          <div class="option">
            <input type="checkbox" id="Aankoop" value="Aankoop" v-model.trim="driverInfo.Info">
                   <p class="labelText">Aankoop advies</p>
                  <v-icon @click="resetSteps" size="35" class="labelIcon">mdi-currency-usd</v-icon>
            <label  for="Aankoop"></label>
          </div>
          <div class="option">
            <input type="checkbox" id="Rijbewijs" value="Rijbewijs" v-model.trim="driverInfo.Info">
                   <p class="labelText">Rijbewijs coaching</p>
                  <v-icon @click="resetSteps" size="35" class="labelIcon">mdi-poll</v-icon>
            <label  for="Rijbewijs"></label>
          </div>
        </div>
        <br>
        <button button :disabled='driverInfo.Info == ""' class="ctaNext ctaButton"
          @click="updateStore">
          <span v-if="driverInfo.Info == ''">Kies er minimaal één </span>
          <span v-else>Afronden</span>
        </button>
      </div>
    </div>

    <div class="detailProgress">
      <div v-if="detailsDone" >
          <Profile></Profile>
        <router-link to="Homepagina" class="ctaButton my-16">
            Ok, doorgaan 
          </router-link>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss" src="@/components/BikePicker/bikePicker.scss"></style>
<script src="@/components/BikePicker/bikePicker.ts"></script>



<!-- https://stackoverflow.com/questions/54928111/should-we-use-v-model.trim-to-modify-vuex-store -->