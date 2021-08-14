<template>
  <div id="app">
    <div
      v-if="isLoading"
      class=" w-1/2 lg:w-1/5 tw-h-screen mx-auto mt-32 tw-items-center tw-bg-primary-100"
    >
      <h1 class="text-main">AAN HET LADEN...</h1>
      <img
        alt="WebsiteFabriek"
        class="w-full mx-auto"
        :src="require('@/assets/images/site/loader.gif')"
      />
    </div>
    <div v-if="!isLoading">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" src="@/App.ts"></script>
