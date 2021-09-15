<template>
  <div class="container">
     <router-link to="/homepagina" class="back">
       <v-icon  size="30" class="text-white">mdi-arrow-left-circle</v-icon>
      </router-link>
    <FullWidthImage v-bind:image-link="imagelink1"  text="Ketting smeren als een baas" :overlay="true" :blackWhite="false"/>
    <div class="articleContainer">
         <p> Het onderhoud van de aandrijfketting wordt veelal beschouwd als een vervelende klus. Maar de ketting verdient juist een liefdevolle verzorging. </p>
           
         <p>Zij moet elke dag de enorme koppels aankunnen waarmee de motor aan haar trekt en zij wordt voortdurend blootgesteld aan vocht en vuil. Zij wrijft zich letterlijk stuk voor ons. Bovendien is de kettingaandrijving nog steeds de meest eenvoudige manier om een motor aan te drijven.</p>
           
          <FullWidthImage style="height: 200px;" class="mb-16" v-bind:image-link="imagelink2"  text="" :overlay="false" :blackWhite="false"/>
          <p>De kettingaandrijving is lichter en biedt een effectievere krachtoverbrenging dan de cardanaandrijving, is ongevoeliger dan de tandriem en dus technisch nog altijd bij de tijd. Daar moeten we dan maar wat onderhoudswerk voor over hebben. Goed onderhouden gaat een ketting dubbel zo lang mee dan een verwaarloosd exemplaar en zal ook meer motorvermogen op het achterwiel overbrengen.</p>
          <p class="text-m"> Teksten afkomstig van <a class="text-m text-yellow" href="https://www.louis.nl/magazin/rund-ums-bike/schraubertipps/kettenpflege">louis</a> </p>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./ketting.scss"></style>
<script src="./ketting.ts"></script>