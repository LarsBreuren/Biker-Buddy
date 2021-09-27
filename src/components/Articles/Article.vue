<template>
  <div class="container">
    <a @click="$router.go(-1)" class="back">
      <v-icon size="30" class="text-white">mdi-arrow-left-circle</v-icon>
    </a>
    <FullWidthImage v-bind:image-link="article.banner" :text="article.title" :overlay="true"
      :blackWhite="false" />
    <div class="articleContainer">
      <p>{{ article.text1}} </p>
      <FullWidthImage style="height: 200px;" class="mb-16" v-bind:image-link="article.img1"
        :text="article.imgText" :overlay="true" :blackWhite="false" />

       <p>{{ article.text2}} </p>

      <FullWidthImage style="height: 200px;" class="mb-16" v-bind:image-link="article.img2" text="" :overlay="false"
        :blackWhite="false" /> 

      <p class="text-m "> Teksten afkomstig van <a class="text-yellow" target="_blank"
          :href="article.sourceLink">{{source}} {{ article.source }}</a></p>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./article.scss"></style>
<script src="./article.ts"></script>


//  Louis bron: https://www.louis.nl/magazin/rund-ums-bike/schraubertipps
