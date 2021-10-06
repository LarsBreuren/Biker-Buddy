<template>
  <div class="container pt-16">
    <div class="stepWrapper" v-if="!answersDone">
              <!-- <v-icon @click="resetSteps" size="35" class="
          backButton
          ">mdi-menu-left</v-icon> -->
      <div v-if="step1active" class="step1 p-8">
        <h1> Motorquiz </h1>
        <p> Korte wekelijkse quiz om jouw motorkennis te testen</p>
        <button button  class="mt-32 ctaNext ctaButton"
          @click="next1">
          begin!
        </button>
      </div>

      <div class="step step2 text-center" v-if="step2active">
        <h2> Is dit een goede apex?</h2>
            <img class="mb-16" src="../../assets/images/quiz/apex.jpg" />
          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="ja"  name="apex" value="ja" v-model.trim="answers.question1">
            <p class="labelText">Ja</p>
              <v-icon size="25" class="labelIcon">mdi-check</v-icon>
            <label for="ja"></label>
          </div>
          <div class="option">
            <input type="radio" id="nee" name="apex" value="nee" v-model.trim="answers.question1">
                   <p class="labelText">Nee</p>
                <v-icon size="25" class="labelIcon">mdi-close</v-icon>
            <label for="nee"></label>
          </div>
        </div>

        <button  class="ctaNext ctaButton"
        :disabled="answers.question1 == ''"
          @click="next2">
         <span v-if="answers.question1 == ''"> Vul een antwoord in </span>
         <span v-else>  Volgende stap </span>
        </button>

      </div>
      <div class="step step3 text-center" v-if="step3active">
        <h2 class="text-xl"> Welk bedrijf is sinds 1959 de grootste motorfietsfabrikant ter wereld, met eind 2019 ongeveer 400 miljoen modellen in productie? </h2>
            <img class="mb-16" src="../../assets/images/quiz/bike.jpg" />
          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="yamaha"  name="apex" value="yamaha" v-model.trim="answers.question2">
            <p class="labelText">Yamaha</p>
            <label for="yamaha"></label>
          </div>
          <div class="option">
            <input type="radio" id="honda"  name="apex" value="honda" v-model.trim="answers.question2">
            <p class="labelText">Honda</p>
            <label for="honda"></label>
          </div>
          <div class="option">
            <input type="radio" id="suzuki"  name="apex" value="suzuki" v-model.trim="answers.question2">
            <p class="labelText">Suzuki</p>
            <label for="suzuki"></label>
          </div>
          <div class="option">
            <input type="radio" id="kawasaki"  name="apex" value="kawasaki" v-model.trim="answers.question2">
            <p class="labelText">Kawasaki</p>
            <label for="kawasaki"></label>
          </div>


        </div>

        <button  class="ctaNext ctaButton"
        :disabled="answers.question2 == ''"
          @click="next3">
         <span v-if="answers.question2 == ''"> Vul een antwoord in </span>
         <span v-else>  Volgende stap </span>
        </button>

      </div>


    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Quiz/quiz.scss"></style>
<script src="@/components/Quiz/quiz.ts"></script>



<!-- https://stackoverflow.com/questions/54928111/should-we-use-v-model.trim-to-modify-vuex-store -->