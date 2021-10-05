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
            <img class="bannerImg" :src="`${apexImg}`" />
          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="ja"  name="apex" value="ja" v-model.trim="answers.apex">
            <p class="labelText">Ja</p>
            <label for="ja"></label>
          </div>
          <div class="option">
            <input type="radio" id="nee" name="apex" value="nee" v-model.trim="answers.apex">
                   <p class="labelText">Nee</p>
            <label for="nee"></label>
          </div>
        </div>

        <button  class="ctaNext ctaButton"
        :disabled='answers.height == 0'
          @click="next4">
          Volgende stap
        </button>



      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Quiz/quiz.scss"></style>
<script src="@/components/Quiz/quiz.ts"></script>



<!-- https://stackoverflow.com/questions/54928111/should-we-use-v-model.trim-to-modify-vuex-store -->