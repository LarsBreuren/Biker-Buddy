<template>
  <div class="container pt-16">
    <div class="stepWrapper" v-if="!detailsDone">
              <!-- <v-icon @click="resetSteps" size="35" class="
          backButton
          ">mdi-menu-left</v-icon> -->
      <div v-if="step1active" class="step1">
        <h1> Who are you? </h1>
        <label for="voorNaam">Voornaam:</label><br>
        <input type="text" id="voorNaam" v-model.trim="driverInfo.Voornaam" placeholder="Voornaam">
        <label for="leeftijd">Leeftijd:</label><br>
        <input id="leeftijd" type="number" v-model.trim="driverInfo.Leeftijd" placeholder="20">
        <button button :disabled='!driverInfo.Voornaam || driverInfo.Leeftijd < 16' class="ctaNext ctaButton"
          @click="next1">
          Volgende stap
        </button>
      </div>

      <div v-if="zeroIntro" class="step1">
        <h1> Welkom! </h1>
        <p> Om jou de beste content te bieden worden er zo een paar
          vragen gesteld om erachter te komen wat voor biker jij bent. 
          <br><br> Na het invullen van deze vragen krijg je motorartikelen die speciaal voor jou gekozen zijn, gaaf toch!
        </p>

        <button class="mt-16 ctaNext ctaButton"
          @click="introDone()">
          Kom maar door!
        </button>
      </div>

      <div class="step2 text-center" v-if="step2active">
        <h2 class="text-3xl mb-8"> Rijbewijs en papieren graag </h2>
        <label for="rijbewijs">Welk rijbewijs heb je, {{ driverInfo.Voornaam }}?</label><br>
        <select v-model.trim="driverInfo.Rijbewijs" id="rijbewijs" class="select">
          <option disabled value="">Kies een optie</option>
          <option>Nog geen rijbewijs</option>
          <option>Bezig met rijbewijs</option>
          <option>A1</option>
          <option>A2</option>
          <option>A</option>
        </select>

          <div class="ervaring" v-if="checkLicense(driverInfo.Rijbewijs)">
            <label for="Ervaring">Aantal jaar rijbewijs in bezit:</label><br>
            <input id="Ervaring" type="number" v-model.trim="driverInfo.Ervaring" placeholder="1">
          </div>

        <button v-if="!checkLicense(driverInfo.Rijbewijs)"  button :disabled='!driverInfo.Rijbewijs' class="ctaNext ctaButton"
          @click="next2">
          Volgende stap 
        </button>

          <button v-if="checkLicense(driverInfo.Rijbewijs)" button :disabled='!driverInfo.Rijbewijs || !driverInfo.Ervaring' class="ctaNext ctaButton"
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

    <div v-if="!detailsDone && !zeroIntro" class="progressWrapper">
      <div class="step" :class="{ done: step1Done }"></div>
      <div class="step" :class="{ done: step2Done }"></div>
      <div class="step" :class="{ done: step3Done }"></div>
    </div>

    <div class="detailProgress">

    <div v-if="detailsDone" >
     
      <!-- <v-icon @click="resetSteps" size="35" class="
          backButton
          ">mdi-menu-left</v-icon> -->

        <Profile></Profile>
       <router-link to="Homepagina" class="ctaButton my-16">
          Ok, doorgaan 
        </router-link>
    </div>
    </div>

  </div>
</template>

<style scoped lang="scss" src="@/components/Details/details.scss"></style>
<script src="@/components/Details/details.ts"></script>



<!-- https://stackoverflow.com/questions/54928111/should-we-use-v-model.trim-to-modify-vuex-store -->