<template>

  <div class="container">

    <h1 class="text-3xl text-white"> Hi {{driverInfo.Voornaam}}, welkom op de homepagina! </h1>
    <p> De onderstaanda artikelen matchen met jouw scores! </p>
    <ArticleOverview></ArticleOverview>

  </div>
</template>

<style scoped lang="scss" src="@/components/HomePage/homePage.scss"></style>
<script src="@/components/HomePage/homePage.ts"></script>