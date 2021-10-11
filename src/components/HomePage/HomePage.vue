<template>

  <div class="container relative" style="min-height: 100vh;">
        <div class="popUpOverlay" v-if="this.$store.state.firstTime"></div>
    <ArticleOverview></ArticleOverview>
  </div>
</template>

<style scoped lang="scss" src="@/components/HomePage/homePage.scss"></style>
<script src="@/components/HomePage/homePage.ts"></script>

<style scoped>
  .popUpOverlay{
    background-color: rgba(20, 20, 20,0.6);
    @apply w-full;
    @apply h-full;
    z-index: 15;
    @apply absolute;
  }
</style>