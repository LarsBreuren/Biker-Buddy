<template>
  <div class="container">
    <div class="articles">

      <div class="mainArticle mx-8" :class="{ centered: showArtikel1 }">
        <div class="bannerContainer">
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
          <div class="bannerContainer"  style="height: 180px;">
            <img class="bannerImg" :src="artikel2.banner" />
            <div class="bannerOverlay"></div>
            <div v-if="showWeekly" class="articleIcon">
              <v-icon size="50" class="
                  bannerIcon
                    text-white
                  ">mdi-{{ artikel2.icon}}</v-icon>
            </div>
            <div v-if="showWeekly" class="bannerContent">
              <div class="bannerTitle " style="bottom: 0px">{{ artikel2.title }}</div>
            </div>
          </div>
        </div>
        <div  class="thirdArticle" :class="{ centered: showArtikel3 }">
          <div class="bannerContainer" style="height: 180px;">
            <img class="bannerImg" :src="artikel3.banner" />
            <div class="bannerOverlay"></div>
            <div class="articleIcon">
              <v-icon v-if="showWeekly" size="50" class="
                  bannerIcon
                    text-white
                  ">mdi-{{ artikel3.icon}}</v-icon>
            </div>
            <div v-if="showWeekly" class="bannerContent">
              <div class="bannerTitle " style="bottom: 0px">{{ artikel3.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainArticle weekly mx-8" :class="{ centered: showWeekly }">
        <div class="bannerContainer">
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
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/ArticleOverview/articleOverview.scss"></style>
<script src="@/components/ArticleOverview/articleOverview.ts"></script>

<!-- <ul id="example-1 ">
          <li v-for="prio in this.$store.state.prio" :key="prio">
            Artikel: {{ prio }} coming soon..
          </li>
        </ul>
        -->