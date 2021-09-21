<template>
  <div class="container pt-16">
    <div class="stepWrapper" v-if="!answersDone">
              <!-- <v-icon @click="resetSteps" size="35" class="
          backButton
          ">mdi-menu-left</v-icon> -->
      <div v-if="step1active" class="step1 p-8">
        <h1> Motor keuzehulp </h1>
        <p> Om jou aan de perfect motor te helpen volgen een paar vragen of jou (toekomstige) rijstijl.</p>
        <button button  class="mt-32 ctaNext ctaButton"
          @click="next1">
          begin!
        </button>
      </div>

      <div class="step2 text-center" v-if="step2active">
        <h2> Kies 3 motoren</h2>
         <div class="optionContainer">

          <div class="bike" v-for="category in bikeCats" :key="category.id" @click="e => e.target.classList.toggle('picked')">
              <label :for="category.name"></label> 
              <input type="checkbox" :id="category.name" :value="category.name" v-model.trim="answers.picks">
            <img class="bannerImg" :src="category.imgLink" />
          </div>
          
        </div>

        <button :disabled='answers.picks.length != 3' class="ctaNext ctaButton"
          @click="next2">
          <span v-if="answers.picks.length != 3">
           kies er 3
          </span>
          <span v-else>
          Volgende stap
          </span>
        </button>
      </div>

      <div class="step3 text-center w-full" v-if="step3active">
        <h2> Wat is jouw rijstijl</h2>
        <div class="rangeContainer mb-32">
          <div class="rangeLabel"><p> Rustig </p></div>
          <input v-model="answers.sporty" type="range" id="volume" name="volume"
          min="0" max="100">
          <div class="rangeLabel"><p> Sportief </p></div>
        </div>
        <button class="ctaNext ctaButton"
          @click="next3">
          Volgende stap
        </button>

      </div>
      <div class="step4 text-center w-full" v-if="step4active">
        <h2> Maximaal bedrag</h2>
          <div class="priceContainer">
            <input v-model="answers.price" type="range" id="volume" name="volume"
            min="0" max="50000">
            <input v-model="answers.price" type="number">
          </div>
        <button class="ctaNext ctaButton"
          @click="next4">
          Volgende stap
        </button>

      </div>
      <div class="step5 text-center" v-if="step5active">
        <h2> Hoe groot ben je?</h2>

          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="small" name="height" value="small" v-model.trim="answers.height">
            <p class="labelText">150-169cm</p>
                  <v-icon size="25" class="labelIcon">mdi-human</v-icon>
            <label for="small"></label>
          </div>
          <div class="option">
            <input type="radio" id="medium"  name="height" value="medium" v-model.trim="answers.height">
            <p class="labelText">170-185cm</p>
                  <v-icon size="35" class="labelIcon">mdi-human</v-icon>
            <label for="medium"></label>
          </div>
          <div class="option">
            <input type="radio" id="large" name="height" value="large" v-model.trim="answers.height">
                   <p class="labelText">185+ cm</p>
                  <v-icon size="40" class="labelIcon">mdi-human</v-icon>
            <label for="large"></label>
          </div>
        </div>

        <button  class="ctaNext ctaButton"
        :disabled='answers.height == 0'
          @click="next5">
          Volgende stap
        </button>

      </div>
    </div>

  </div>
</template>

<style scoped lang="scss" src="@/components/BikePicker/bikePicker.scss"></style>
<script src="@/components/BikePicker/bikePicker.ts"></script>



<!-- https://stackoverflow.com/questions/54928111/should-we-use-v-model.trim-to-modify-vuex-store -->