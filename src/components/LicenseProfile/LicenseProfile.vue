<template class="w-full">
    <div class="profile">
      <h2 class="header">Jouw biker profiel</h2>
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
              Wil info over:
            </div>
            <ul class="child infoList">
              <li class="" v-for="(value) in this.$store.state.driverInfo.Info" :key="value.id">
                {{ value }} <span class="plus">+</span></li>
            </ul>
          </div>
        </div>
        <div class="scoreBars">
          <p class="text-left pb-8"> Content wordt gebaseerd op:</p>
          <p class="barText"> Onderhoud</p>
          <div class="barContainer w-full">
            <div class="bar" v-bind:style="{width: this.Onderhoud + '%' }">  </div>
          </div>
          <p class="barText"> Rijvaardigheid</p>
          <div class="barContainer w-full">
            <div class="bar" v-bind:style="{width: this.Rijvaardigheid + '%' }">  </div>
          </div>
          <p class="barText"> Advies</p>
          <div class="barContainer w-full">
            <div class="bar" v-bind:style="{width: this.Advies + '%' }">  </div>
          </div>
          <p class="barText"> Coaching</p>
          <div class="barContainer w-full">
            <div class="bar" v-bind:style="{width: this.Coaching + '%' }">  </div>
          </div>

        </div>
      </div>
    </div>
</template>

<style scoped lang="scss" src="./licenseProfile.scss"></style>
<style scoped>



</style>

<script src="./licenseProfile.ts"></script>