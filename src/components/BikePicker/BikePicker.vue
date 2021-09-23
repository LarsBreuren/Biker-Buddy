<template>
  <div class="container pt-16">
    <div class="stepWrapper" v-if="!answersDone">
              <!-- <v-icon @click="resetSteps" size="35" class="
          backButton
          ">mdi-menu-left</v-icon> -->
      <div v-if="step1active" class="step1 p-8">
        <h1> Motor keuzehulp </h1>
        <p> Om jou aan de perfect motor te helpen volgen een paar vragen over jou (toekomstige) rijstijl.</p>
        <button button  class="mt-32 ctaNext ctaButton"
          @click="next1">
          begin!
        </button>
      </div>

      <div class="step2 text-center" v-if="step2active">
        <h2> Kies de 3 mooiste motoren</h2> 
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
            min="1000" max="50000">
            <input v-model="answers.price" type="number" min="1000">
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
      <div class="step6 text-center" v-if="step6active">
        <h2> Waarvoor ga je de motor gebruiken?</h2>
        <p class="subtitle"> Meerdere opties mogelijk </p>
          <div class="optionContainer">
          <div class="option">
            <input type="checkbox" id="commute" name="commute" value="commute" v-model.trim="answers.commute">
            <p class="labelText">Woon-werkverker</p>
                  <v-icon size="25" class="labelIcon">mdi-account-hard-hat</v-icon>
            <label for="commute"></label>
          </div>
          <div class="option">
            <input type="checkbox" id="hobby"  name="commute" value="hobby" v-model.trim="answers.commute">
            <p class="labelText">Hobby</p>
                  <v-icon size="35" class="labelIcon">mdi-road-variant</v-icon>
            <label for="hobby"></label>
          </div>
        </div>
        <button  class="ctaNext ctaButton"
        :disabled='answers.commute == ""'
          @click="next6">
          <span v-if="answers.commute == ''"> Kies er minimaal één</span>
          <span v-else> Volgende stap</span>
        </button>
      </div>
      
      <div class="step7 text-center" v-if="step7active">
        <h2> Hecht je waarde aan comfort?</h2>
          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="yes" name="comfort" value="ja" v-model.trim="answers.comfort">
            <p class="labelText">Ja</p>
                  <v-icon size="25" class="labelIcon">mdi-account-hard-hat</v-icon>
            <label for="yes"></label>
          </div>
          <div class="option">
            <input type="radio" id="no"  name="comfort" value="nee" v-model.trim="answers.comfort">
            <p class="labelText">Nee</p>
                  <v-icon size="35" class="labelIcon">mdi-road-variant</v-icon>
            <label for="no"></label>
          </div>
        </div>
        <button  class="ctaNext ctaButton"
        :disabled='answers.comfort == ""'
          @click="next7">
          <span v-if="answers.commute == ''"> Maak een keuze</span>
          <span v-else> Volgende stap</span>
        </button>
      </div>

      <div class="step8 text-center w-full" v-if="step8active">
        <h2> Speelse of serieuze motor?</h2>
        <div class="rangeContainer mb-32">
          <div class="rangeLabel"><p> Serieuze </p></div>
          <input v-model="answers.fun" type="range" id="volume" name="volume"
          min="0" max="100">
          <div class="rangeLabel"><p> Speelse </p></div>
        </div>
        <button class="ctaNext ctaButton"
          @click="next8">
          Volgende stap
        </button>
      </div>

      <div class="step9 text-center" v-if="step9active">
        <h2> Wil je ook offroad rijden?</h2>
          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="yes" name="offroad" value="ja" v-model.trim="answers.offroad">
            <p class="labelText">Jazeker!</p>
                  <v-icon size="25" class="labelIcon">mdi-image-filter-hdr</v-icon>
            <label for="yes"></label>
          </div>
          <div class="option">
            <input type="radio" id="no"  name="offroad" value="nee" v-model.trim="answers.offroad">
            <p class="labelText">Zeker niet</p>
                  <v-icon size="35" class="labelIcon">mdi-road-variant</v-icon>
            <label for="no"></label>
          </div>
        </div>
        <button  class="ctaNext ctaButton"
        :disabled='answers.offroad == ""'
          @click="next9">
          <span v-if="answers.commute == ''"> Maak een keuze</span>
          <span v-else> Afronden</span>
        </button>
      </div>

    </div>



    <div class="preferences" v-if="answersDone">
      <h2>Dit heb jij allemaal gekozen!</h2>

            <div class="profileContainer">
        <div class="details">

          <div class="line">
            <div class="child">
              Motortype:
            </div>
            <ul class="child infoList">
              <li class="" v-for="(value) in answers.picks" :key="value.id">
                {{ value }} <span class="plus">+</span></li>
            </ul>
          </div>

          <div class="line">
            <div class="child">
              Sportief
            </div>
            <div class="child">
              {{answers.sporty}}%
            </div>
          </div>

          <div class="line">
            <div class="child">
              Prijs:
            </div>
            <div class="child">
              {{answers.price}},-
            </div>
          </div>

          <div class="line">
            <div class="child">
              lengte:
            </div>
            <div class="child">
              {{answers.height}}
            </div>
          </div>

          <div class="line">
            <div class="child">
              Gebruik:
            </div>
            <ul class="child infoList">
              <li class="" v-for="(value) in answers.commute" :key="value.id">
                {{ value }} <span class="plus">+</span></li>
            </ul>
          </div>

          <div class="line">
            <div class="child">
              Comfort:
            </div>
            <div class="child">
              {{answers.comfort}}
            </div>
          </div>

          <div class="line">
            <div class="child">
                 Speelsheid: 
            </div>
            <div class="child">
             {{answers.fun}}%
            </div>
          </div>

          <div class="line">
            <div class="child">
                 Offroad
            </div>
            <div class="child">
             {{answers.offroad}}
            </div>
          </div>

        </div>
      </div>
          <div class="ctaButton my-16" @click="resetSteps">
          Opnieuw
        </div>
    </div>

  </div>
</template>

<style scoped lang="scss" src="@/components/BikePicker/bikePicker.scss"></style>
<script src="@/components/BikePicker/bikePicker.ts"></script>



<!-- https://stackoverflow.com/questions/54928111/should-we-use-v-model.trim-to-modify-vuex-store -->