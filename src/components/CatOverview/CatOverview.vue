<template>
  <div class="container">
      <div class="catContainer pt-32">
      <h1 class="text-white "> Categorieën </h1>
        <router-link class="category" v-for="category in cats" :key="category.message" :to="category.catLink"
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
        </router-link>
      </div>

  </div>
</template>

<style scoped lang="scss" src="@/components/CatOverview/catOverview.scss"></style>
<script src="@/components/CatOverview/catOverview.ts"></script>

<!-- <ul id="example-1 ">
          <li v-for="prio in this.$store.state.prio" :key="prio">
            Artikel: {{ prio }} coming soon..
          </li>
        </ul>
        -->