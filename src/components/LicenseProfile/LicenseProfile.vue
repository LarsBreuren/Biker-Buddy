<template>
  <div class="container">
    <div class="profile">
      <h2 class="mb-16">Jouw biker profiel</h2>
      <!-- 
        <div class="line" v-for="(value, detail) in this.$store.state.driverInfo" :key="value.id">
          <div class="child"> {{ detail }} </div>
          <div class="child"> {{ value }} </div>
        </div> -->

      <div class="profileContainer">
        <div class="details">
          <div class="line">
            <div class="child">
              Voornaam:
            </div>
            <div class="child">
              {{ this.$store.state.driverInfo.Voornaam }}
            </div>
          </div>
          <div class="line">
            <div class="child">
              Leeftijd:
            </div>
            <div class="child">
              {{ this.$store.state.driverInfo.Leeftijd }}
            </div>
          </div>
          <div class="line">
            <div class="child">
              Rijbewijs:
            </div>
            <div class="child">
              {{ this.$store.state.driverInfo.Rijbewijs }}
            </div>
          </div>
          <div class="line" v-if="checkLicense(this.$store.state.driverInfo.Rijbewijs)">
            <div class="child">
              Rijervaring:
            </div>
            <div class="child">
              {{ this.$store.state.driverInfo.Ervaring }} jaar
            </div>
          </div>
          <div class="line">
            <div class="child">
              Wilt info over:
            </div>
            <ul class="child infoList">
              <li class="" v-for="(value) in this.$store.state.driverInfo.Info" :key="value.id">
                {{ value }} <span class="plus">+</span></li>
            </ul>
          </div>
        </div>
        <div class="scoreBars">

          <div class="barContainer w-full">
            <div class="bar" v-bind:style="{width: this.Onderhoud + '%' }"> <p class="barText"> Onderhoud</p> </div>
          </div>
          <div class="barContainer w-full">
            <div class="bar" v-bind:style="{width: this.Rijvaardigheid + '%' }"> <p class="barText"> Rijvaardigheid</p> </div>
          </div>
          <div class="barContainer w-full">
            <div class="bar" v-bind:style="{width: this.Advies + '%' }"> <p class="barText"> Advies</p> </div>
          </div>
          <div class="barContainer w-full">
            <div class="bar" v-bind:style="{width: this.Coaching + '%' }"> <p class="barText"> Coaching</p> </div>
          </div>

      
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped lang="scss" src="./licenseProfile.scss"></style>
<style scoped>



</style>

<script src="./licenseProfile.ts"></script>