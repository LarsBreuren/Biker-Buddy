<template>
  <div class="container relative pt-4">
    <div class="popUpWrapper" v-if="showWeekly">
      <div class="firstTime" v-if="this.$store.state.firstTime" @click="delPopUp">
        <div class="content relative">
           <v-icon size="30" class="
                  closePopUp
                    text-white
                  ">mdi-close-circle</v-icon>
          <h2 class="text-2xl"> Hi {{this.$store.state.driverInfo.Voornaam}}!</h2>
          <p> Deze homepagina is speciaal voor jou samengesteld en biedt dynamisch de beste biker content!</p>
        </div>
      </div>
    </div>

    <div class="articles">
      <div class="mainArticle mx-8" :class="{ centered: showArtikel1 }">
      <div @click="setArticle(artikel1.title, artikel1.category)" class="bannerContainer"> 
          <img class="bannerImg" :src="artikel1.banner" />
          <div class="bannerOverlay"></div>
          <div v-if="showArtikel2" class="bannerIcon">
                        <v-icon size="75" class="
                  bannerIcon
                    text-white
                  ">mdi-{{ artikel1.icon}}</v-icon>
          </div>
          <div v-if="showArtikel2" class="bannerContent">
            <div class="bannerTitle">{{ artikel1.title }}</div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="secondArticle" :class="{ centered: showArtikel2 }">
        <div @click="setArticle(artikel2.title, artikel2.category)" class="bannerContainer">
            <img class="bannerImg" :src="artikel2.banner" />
            <div class="bannerOverlay"></div>
            <div v-if="showWeekly" class="articleIcon">
              <v-icon size="50" class="
                  bannerIcon
                    text-white
                  ">mdi-{{ artikel2.icon}}</v-icon>
            </div>
              <div v-if="showWeekly"  class="bannerTitle">{{ artikel2.title }}</div>
          </div>
        </div>
        <div  class="thirdArticle" :class="{ centered: showArtikel3 }">
        <div @click="setArticle(artikel3.title, artikel3.category)" class="bannerContainer">
            <img class="bannerImg" :src="artikel3.banner" />
            <div class="bannerOverlay"></div>
            <div class="articleIcon">
              <v-icon v-if="showWeekly" size="50" class="
                  bannerIcon
                    text-white
                  ">mdi-{{ artikel3.icon}}</v-icon>
            </div>
      <div v-if="showWeekly"  class="bannerTitle">{{ artikel3.title }}</div>
          </div>
        </div>
      </div>
      <div class="weekly mx-8" :class="{ centered: showWeekly }">
      <router-link :to="weekly.link" class="bannerContainer">
          <img class="bannerImg" :src="weekly.banner" />
          <div class="bannerOverlay"></div>
          <div v-if="showWeeklyText" class="bannerContent">
            <div class="bannerTitle text-xl">Artikel vd week: {{ weekly.title }}</div>
          </div>
          <div class="bannerIcon">
            <v-icon v-if="showWeeklyText" size="75" class="
                bannerIcon
                  text-white
                ">mdi-{{ weekly.icon}}</v-icon>
          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/ArticleOverview/articleOverview.scss"></style>
<script src="@/components/ArticleOverview/articleOverview.ts"></script>