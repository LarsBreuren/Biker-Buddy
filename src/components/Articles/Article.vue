<template>
  <div class="container">
    <a @click="$router.go(-1)" class="back">
      <v-icon size="30" class="text-white">mdi-arrow-left-circle</v-icon>
    </a>
    <FullWidthImage v-bind:image-link="article.banner" :text="article.title" :overlay="true"
      :blackWhite="false" />
    <div class="articleContainer">
      <p>{{ article.text1}} </p>
      <!-- <FullWidthImage style="height: 200px;" class="mb-16" v-bind:image-link="imagelink3"
        text="Je ketting heeft wat te voorduren!" :overlay="true" :blackWhite="false" />

      <p>text3</p>

      <FullWidthImage style="height: 200px;" class="mb-16" v-bind:image-link="imagelink2" text="" :overlay="false"
        :blackWhite="false" /> -->

      <p class="text-m"> Teksten afkomstig van <a class="text-m text-yellow"
          href="https://www.louis.nl/magazin/rund-ums-bike/schraubertipps/kettenpflege">louis</a> </p>

    </div>
  </div>
</template>

<style scoped lang="scss" src="./article.scss"></style>
<script src="./article.ts"></script>


// <div class="articleContainer">
//       <p> </p>

//       <p>Zij moet elke dag de enorme koppels aankunnen waarmee de motor aan haar trekt en zij wordt voortdurend
//         blootgesteld aan vocht en vuil. Zij wrijft zich letterlijk stuk voor ons. Bovendien is de kettingaandrijving nog
//         steeds de meest eenvoudige manier om een motor aan te drijven.</p>
//       <FullWidthImage style="height: 200px;" class="mb-16" v-bind:image-link="imagelink3"
//         text="Je ketting heeft wat te voorduren!" :overlay="true" :blackWhite="false" />

//       <p>De kettingaandrijving is lichter en biedt een effectievere krachtoverbrenging dan de cardanaandrijving, is
//         ongevoeliger dan de tandriem en dus technisch nog altijd bij de tijd. Daar moeten we dan maar wat onderhoudswerk
//         voor over hebben. Goed onderhouden gaat een ketting dubbel zo lang mee dan een verwaarloosd exemplaar en zal ook
//         meer motorvermogen op het achterwiel overbrengen.</p>
//       <FullWidthImage style="height: 200px;" class="mb-16" v-bind:image-link="imagelink2" text="" :overlay="false"
//         :blackWhite="false" />

//       <p class="text-m"> Teksten afkomstig van <a class="text-m text-yellow"
//           href="https://www.louis.nl/magazin/rund-ums-bike/schraubertipps/kettenpflege">louis</a> </p>

//     </div>

// bron gif: http://4.bp.blogspot.com/-rPfumWgjLMg/Uo1xk-uP8uI/AAAAAAAABw4/NbfZXUi19Ig/s1600/aQqXpx8_460sa.gif