<template>
  <div class="container pt-16">
    <div class="stepWrapper" v-if="!answersDone">
              <!-- <v-icon @click="resetSteps" size="35" class="
          backButton
          ">mdi-menu-left</v-icon> -->
      <div v-if="step1active" class="step1 px-32">
        <h1> Motorquiz </h1>
        <p> Korte wekelijkse quiz om jouw motorkennis te testen</p>
        <button button  class="mt-32 ctaNext ctaButton"
          @click="next1">
          begin! <v-icon size="25" class="
              text-black
              cursor-pointer
            ">mdi-arrow-right-bold</v-icon>
        </button>
        <router-link class="ctaButton ctaNext mt-16 bg-gray-700" @click.native="toggle()" to="/homepagina">
        Home <v-icon size="25" class="
              text-black
              cursor-pointer
            ">mdi-home</v-icon>
      </router-link>
      </div>

      <div class="step step2 text-center" v-if="step2active">
        <div class="stepBack" @click="resetSteps">
            <v-icon size="25" class="labelIcon text-white">mdi-arrow-left-circle</v-icon>
        </div>
        <h2> Is dit een goede apex?</h2>
            <img class="mb-16" src="../../assets/images/quiz/apex.jpg" />
          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="ja"  name="apex" value="Ja" v-model.trim="answers.question1">
            <p class="labelText">Jazeker</p>
              <v-icon size="25" class="labelIcon">mdi-check</v-icon>
            <label for="ja"></label>
          </div>
          <div class="option">
            <input type="radio" id="nee" name="apex" value="Nee" v-model.trim="answers.question1">
                   <p class="labelText">Nee!</p>
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
        <div class="stepBack" @click="next1">
            <v-icon size="25" class="labelIcon text-white">mdi-arrow-left-circle</v-icon>
        </div>
        <h2 class="text-xl"> Welk bedrijf is sinds 1959 de grootste motorfietsfabrikant ter wereld, met eind 2019 ongeveer 400 miljoen modellen in productie? </h2>
            <img class="mb-16" src="../../assets/images/quiz/bike.jpg" />
          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="yamaha"  name="apex" value="Yamaha" v-model.trim="answers.question2">
            <p class="labelText">Yamaha</p>
            <label for="yamaha"></label>
          </div>
          <div class="option">
            <input type="radio" id="honda"  name="apex" value="Honda" v-model.trim="answers.question2">
            <p class="labelText">Honda</p>
            <label for="honda"></label>
          </div>
          <div class="option">
            <input type="radio" id="suzuki"  name="apex" value="Suzuki" v-model.trim="answers.question2">
            <p class="labelText">Suzuki</p>
            <label for="suzuki"></label>
          </div>
          <div class="option">
            <input type="radio" id="kawasaki"  name="apex" value="Kawasaki" v-model.trim="answers.question2">
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
      <div class="step step4 text-center" v-if="step4active">
        <div class="stepBack" @click="next2">
            <v-icon size="25" class="labelIcon text-white">mdi-arrow-left-circle</v-icon>
        </div>
        <h2 class="text-xl">Welke van de volgende merken is Brits? </h2>
            <img class="mb-16" src="../../assets/images/quiz/brits.jpg" />
          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="indian"  name="apex" value="Indian" v-model.trim="answers.question3">
            <p class="labelText">Indian</p>
            <label for="indian"></label>
          </div>
          <div class="option">
            <input type="radio" id="triumph"  name="apex" value="Triumph" v-model.trim="answers.question3">
            <p class="labelText">Triumph</p>
            <label for="triumph"></label>
          </div>
          <div class="option">
            <input type="radio" id="royalEnfield"  name="apex" value="Royal Enfield" v-model.trim="answers.question3">
            <p class="labelText">Royal Enfield</p>
            <label for="royalEnfield"></label>
          </div>
          <div class="option">
            <input type="radio" id="harleyDavidson"  name="apex" value="Harley Davidson" v-model.trim="answers.question3">
            <p class="labelText">Harley Davidson</p>
            <label for="harleyDavidson"></label>
          </div>
        </div>

        <button  class="ctaNext ctaButton"
        :disabled="answers.question3 == ''"
          @click="next4">
         <span v-if="answers.question3 == ''"> Vul een antwoord in </span>
         <span v-else>  Volgende stap </span>
        </button>

      </div>
      <div class="step step5 text-center" v-if="step5active">
        <div class="stepBack" @click="next3">
            <v-icon size="25" class="labelIcon text-white">mdi-arrow-left-circle</v-icon>
        </div>
        <h2 class="text-xl">Wat doen bobbins? </h2>
            <img class="mb-16" src="../../assets/images/articles/atgat.jpg" />
          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="ontsteking"  name="apex" value="Ontsteking" v-model.trim="answers.question4">
            <p class="labelText w-full">Zorgen voor ontsteking in de cilinder</p>
            <label for="ontsteking"></label>
          </div>
          <div class="option">
            <input type="radio" id="ketting"  name="apex" value="Ketting" v-model.trim="answers.question4">
            <p class="labelText w-full">Ankeren de ketting op het frame</p>
            <label for="ketting"></label>
          </div>
          <div class="option">
            <input type="radio" id="paddock"  name="apex" value="Paddock" v-model.trim="answers.question4">
            <p class="labelText w-full">Houden de achterband omhoog icm paddock</p>
            <label for="paddock"></label>
          </div>
        </div>

        <button  class="ctaNext ctaButton"
        :disabled="answers.question4 == ''"
          @click="next5">
         <span v-if="answers.question4 == ''"> Vul een antwoord in </span>
         <span v-else>  Volgende stap </span>
        </button>

      </div>
      <div class="step step6 text-center" v-if="step6active">
        <div class="stepBack" @click="next4">
            <v-icon size="25" class="labelIcon text-white">mdi-arrow-left-circle</v-icon>
        </div>
        <h2 class="text-xl">Wat is niet standaard in een kleine beurt? </h2>
            <img class="mb-16" src="../../assets/images/articles/olie.jpg" />
          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="banden"  name="apex" value="Banden" v-model.trim="answers.question5">
            <p class="labelText w-full">Nieuwe banden </p>
            <label for="banden"></label>
          </div>
          <div class="option">
            <input type="radio" id="olie"  name="apex" value="Olie" v-model.trim="answers.question5">
            <p class="labelText w-full">Olie verversen</p>
            <label for="olie"></label>
          </div>
          <div class="option">
            <input type="radio" id="filter"  name="apex" value="Filter" v-model.trim="answers.question5">
            <p class="labelText w-full">Oliefilter wisselen</p>
            <label for="filter"></label>
          </div>
        </div>

        <button  class="ctaNext ctaButton"
        :disabled="answers.question5 == ''"
          @click="next6">
         <span v-if="answers.question5 == ''"> Vul een antwoord in </span>
         <span v-else>  Volgende stap </span>
        </button>

      </div>
      <div class="step step7 text-center" v-if="step7active">
        <div class="stepBack" @click="next5">
            <v-icon size="25" class="labelIcon text-white">mdi-arrow-left-circle</v-icon>
        </div>
        <h2 class="text-xl">Hoe vaak moet je ongeveer de olie verversen </h2>
            <img class="mb-16" src="../../assets/images/articles/olie2.jpg" />
          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="7000"  name="apex" value="Elke 7000km" v-model.trim="answers.question6">
            <p class="labelText w-full">Elke ~7000km </p>
            <label for="7000"></label>
          </div>
          <div class="option">
            <input type="radio" id="7000ej"  name="apex" value="Elke 7000km of elk jaar" v-model.trim="answers.question6">
            <p class="labelText w-full">Elke 7000km of elk jaar </p>
            <label for="7000ej"></label>
          </div>
          <div class="option">
            <input type="radio" id="jaar"  name="apex" value="Elk Jaar" v-model.trim="answers.question6">
            <p class="labelText w-full">Elk jaar ongeacht de km stand</p>
            <label for="jaar"></label>
          </div>
        </div>

        <button  class="ctaNext ctaButton"
        :disabled="answers.question6 == ''"
          @click="next7">
         <span v-if="answers.question6 == ''"> Vul een antwoord in </span>
         <span v-else>  Volgende stap </span>
        </button>

      </div>
      <div class="step step8 text-center" v-if="step8active">
        <div class="stepBack" @click="next6">
            <v-icon size="25" class="labelIcon text-white">mdi-arrow-left-circle</v-icon>
        </div>
        <h2 class="text-xl">Welk type helm is het meest beschermend?  </h2>
            <img class="mb-16" src="../../assets/images/articles/helm.jpg" />
          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="integraal"  name="apex" value="Integraal" v-model.trim="answers.question7">
            <p class="labelText w-full">Integraal  </p>
            <label for="integraal"></label>
          </div>
          <div class="option">
            <input type="radio" id="systeemhelm"  name="apex" value="Systeemhelm" v-model.trim="answers.question7">
            <p class="labelText w-full">Systeemhelm </p>
            <label for="systeemhelm"></label>
          </div>
          <div class="option">
            <input type="radio" id="jet"  name="apex" value="Jet" v-model.trim="answers.question7">
            <p class="labelText w-full">Jet</p>
            <label for="jet"></label>
          </div>
        </div>

        <button  class="ctaNext ctaButton"
        :disabled="answers.question7 == ''"
          @click="next8">
         <span v-if="answers.question7 == ''"> Vul een antwoord in </span>
         <span v-else>  Volgende stap </span>
        </button>

      </div>
      <div class="step step9 text-center" v-if="step9active">
        <div class="stepBack" @click="next7">
            <v-icon size="25" class="labelIcon text-white">mdi-arrow-left-circle</v-icon>
        </div>
        <h2 class="text-xl">Wie veroorzaakt de meeste motorongelukken?  </h2>
            <img class="mb-16" src="../../assets/images/articles/preventie3.jpg" />
          <div class="optionContainer">
          <div class="option">
            <input type="radio" id="motorrijder"  name="apex" value="Motorrijder" v-model.trim="answers.question8">
            <p class="labelText w-full">Motorrijder  </p>
            <label for="motorrijder"></label>
          </div>
          <div class="option">
            <input type="radio" id="automobilist "  name="apex" value="Automobilist" v-model.trim="answers.question8">
            <p class="labelText w-full">Automobilist  </p>
            <label for="automobilist "></label> 
          </div>
        </div>

        <button  class="ctaNext ctaButton"
        :disabled="answers.question8 == ''"
          @click="next9">
         <span v-if="answers.question8 == ''"> Vul een antwoord in </span>
         <span v-else>  Volgende stap </span>
        </button>

      </div>

    </div>

    <div v-if="!answersDone && step1Done" class="progressWrapper">
      <div v-if="step2Done" @click="next1" class="step" :class="{ done: step2Done }"></div>
      <div v-else class="step" :class="{ done: step2Done }"></div>

      <div v-if="step3Done" @click="next2" class="step" :class="{ done: step3Done }"></div>
      <div v-else class="step" :class="{ done: step3Done }"></div>

      <div v-if="step4Done" @click="next3" class="step" :class="{ done: step4Done }"></div>
      <div v-else class="step" :class="{ done: step4Done }"></div>

      <div v-if="step5Done" @click="next4" class="step" :class="{ done: step5Done }"></div>
      <div v-else class="step" :class="{ done: step5Done }"></div>

      <div v-if="step6Done" @click="next5" class="step" :class="{ done: step6Done }"></div>
      <div v-else class="step" :class="{ done: step6Done }"></div>

      <div v-if="step7Done" @click="next6" class="step" :class="{ done: step7Done }"></div>
      <div v-else class="step" :class="{ done: step7Done }"></div>

      <div v-if="step8Done" @click="next7" class="step" :class="{ done: step8Done }"></div>
      <div v-else class="step" :class="{ done: step8Done }"></div>

      <div v-if="step9Done" @click="next8" class="step" :class="{ done: step9Done }"></div>
      <div v-else class="step" :class="{ done: step9Done }"></div>
    </div>


    <div v-if="answersDone" class="quizOverview">

          <div class="preferences" v-if="answersDone">
      <h2 v-if="precent >= 80">Goed gedaan!</h2>
      <h2 v-else>Overzicht</h2>

            <div class="profileContainer">
        <div class="details">

          <div class="line">
            <div class="child question text-left">
              <p><b>Percentage goed:</b></p>
            </div>
            <div class="child answer" :class="{ correct: precent >= 80 }">
               <p><b>{{precent}}%</b></p>
            </div>
          </div>
          <div class="line">
            <div class="child ">
                <p class="question">1 | Is dit een goede apex?</p>
            </div>
            <div class="child" >
             <p class="answer" :class="{ correct: calcedAnswers.question1 }"> {{answers.question1}}</p>
            </div>
          </div>
          <div class="line">
            <div class="child question">
                <p>2 | Grootste motorfietsfabrikant</p>
            </div>
            <div class="child" >
              <p class="answer" :class="{ correct: calcedAnswers.question2 }"> {{answers.question2}}</p>
            </div>
          </div>
          <div class="line">
            <div class="child question">
                <p>3 | Welk merk is brits?</p>
            </div>
            <div class="child" >
              <p class="answer" :class="{ correct: calcedAnswers.question3 }"> {{answers.question3}}</p>
            </div>
          </div>
          <div class="line">
            <div class="child question">
                <p>4 | Wat doen Bobbins?</p>
            </div>
            <div class="child" >
              <p class="answer" :class="{ correct: calcedAnswers.question4 }"> {{answers.question4}}</p>
            </div>
          </div>
          <div class="line">
            <div class="child question">
                <p>5 | Wat is niet standaard in een kleine beurt?</p>
            </div>
             <div class="child" >
              <p class="answer" :class="{ correct: calcedAnswers.question5 }"> {{answers.question5}}</p>
            </div>
          </div>
          <div class="line">
            <div class="child question">
                <p>6 | Hoe vaak moet ongeveer je olie verversen?</p>
            </div>
             <div class="child" >
              <p class="answer" :class="{ correct: calcedAnswers.question6 }"> {{answers.question6}}</p>
            </div>
          </div>
          <div class="line">
            <div class="child question">
                <p>7 | Welk type helm is het meest beschermend? </p>
            </div>
             <div class="child" >
              <p class="answer" :class="{ correct: calcedAnswers.question7 }"> {{answers.question7}}</p>
            </div>
          </div>
          <div class="line">
            <div class="child question">
                <p>8 | Wie veroorzaakt de meeste motorongelukken?</p>
            </div>
             <div class="child" >
              <p class="answer" :class="{ correct: calcedAnswers.question8 }"> {{answers.question8}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="ctaButton ctaNext mt-16 mr-16 bg-gray-700" @click="resetSteps" >
        Opnieuw <v-icon size="25" class="
              text-black
              cursor-pointer
            ">mdi-refresh-circle</v-icon>
      </div>
      <router-link class="ctaButton ctaNext mt-16 " to="/homepagina">
        Home <v-icon size="25" class="
              text-black
              cursor-pointer
            ">mdi-home</v-icon>
      </router-link>

    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Quiz/quiz.scss"></style>
<script src="@/components/Quiz/quiz.ts"></script>



<!-- https://stackoverflow.com/questions/54928111/should-we-use-v-model.trim-to-modify-vuex-store -->