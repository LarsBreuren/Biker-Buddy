<template>
  <div class="container" style="padding-bottom: 75px;">
      <div class="catContainer pt-32">
      <h1 v-if="title" class="text-white "> {{ title }} </h1>
      <h1 v-else class="text-white "> Categorieën </h1>

      <div v-if="title">
        <div class="article" v-for="article in currentCats" :key="article.id">
        <router-link to="/articles/ketting" class="bannerContainer"> 
            <img class="bannerImg" :src="article.banner" />
            <div class="bannerOverlay"></div>
            <div class="bannerIcon">
                          <v-icon size="75" class="
                    bannerIcon
                      text-white
                    ">mdi-{{ article.icon}}</v-icon>
            </div>
            <div class="bannerContent">
              <div class="bannerTitle">{{ article.title }}</div>
            </div>
          </router-link>
        </div>
      </div>

        <div class="categoryMobileContainer" v-if="title">
          <div class="categoryMobile" v-for="category in cats" :key="category.message" @click="changeCat(category.storeName)"
            v-bind:style="{ 'background-color': category.catColor }">
            <div class="catIcon">
              <v-icon size="45" class="
                      text-white
                    ">mdi-{{ category.catIcon}}
              </v-icon>
            </div>
             <div class="catTitle">
               <p>{{ category.catName }}</p>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="category" v-for="category in cats" :key="category.message" @click="changeCat(category.storeName)"
            v-bind:style="{ 'background-color': category.catColor }">
            <div class="catTitle">
              <h2>{{ category.catName }}</h2>
            </div>
            <div class="catIcon">
              <v-icon size="60" class="
                      text-white
                    ">mdi-{{ category.catIcon}}
              </v-icon>
            </div>
          </div>
        </div>

      </div>

  </div>
</template>

<style scoped lang="scss" src="@/components/CatOverview/catOverview.scss"></style>
<script src="@/components/CatOverview/catOverview.ts"></script>
