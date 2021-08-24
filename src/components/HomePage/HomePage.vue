<template>

  <div class="container">

    <h1 class="text-3xl"> Hi {{driverInfo.Voornaam}}, welkom op de homepagina! </h1>

    <ul>
      <li class=" w-full p-8 " v-for="(value, detail) in driverInfo" :key="value.id">
        {{ detail }} : {{ value }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss" src="@/components/HomePage/homePage.scss"></style>
<script src="@/components/HomePage/homePage.ts"></script>