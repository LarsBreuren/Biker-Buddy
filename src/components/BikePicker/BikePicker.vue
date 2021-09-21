<template>
  <div class="container pt-16">
    <div class="stepWrapper" v-if="!detailsDone">
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
        <h2 class="text-3xl mb-8"> Pick any! </h2>

         <div class="optionContainer">

          <div class="option" v-for="category in bikeCats" :key="category.id">
              <label for="superMoto"></label> 
              <input type="checkbox" id="superMoto" value="superMoto" v-model.trim="answers.picks">
            <img class="bannerImg" :src="category.imgLink" />
          </div>
          
        </div>


        <button  class="ctaNext ctaButton"
          @click="next2">
          Volgende stap
        </button>
      </div>

      <div class="step3" v-if="step3active">

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