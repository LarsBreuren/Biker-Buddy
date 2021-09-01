<template>
  <div class="container">
    <div class="articles mt-8">

      <div class="mainArticle mx-8">
        <div class="bannerContainer">
          <img class="bannerImg" :src="artikel1.banner" />
          <div class="bannerTitle">{{ artikel1.title }}</div>
          <div class="bannerOverlay"></div>
          <div class="bannerIcon">
            <v-icon size="75" class="
                bannerIcon
                  text-white
                ">mdi-{{ artikel1.icon}}</v-icon>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="secondArticle">
          <div class="bannerContainer">
            <img class="bannerImg" :src="artikel2.banner" />
            <div class="bannerTitle">{{ artikel2.title }}</div>
            <div class="bannerOverlay"></div>
            <div class="articleIcon">
              <v-icon size="50" class="
                bannerIcon
                  text-white
                ">mdi-{{ artikel2.icon}}</v-icon>
            </div>
          </div>
        </div>
        <div class="thirdArticle">
          <div class="bannerContainer">
            <img class="bannerImg" :src="artikel3.banner" />
            <div class="bannerTitle">{{ artikel3.title }}</div>
            <div class="bannerOverlay"></div>
            <div class="articleIcon">
              <v-icon size="50" class="
                bannerIcon
                  text-white
                ">mdi-{{ artikel3.icon}}</v-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="mainArticle mx-8">
        <div class="bannerContainer">
          <img class="bannerImg" :src="weekly.banner" />
          <div class="bannerTitle text-xl">Artikel vd week: {{ weekly.title }}</div>
          <div class="bannerOverlay"></div>
          <div class="bannerIcon">
            <v-icon size="75" class="
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