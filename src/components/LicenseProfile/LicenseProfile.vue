<template>
  <div class="container">
        <ul>
        <li class=" w-full p-8 " v-for="(value, detail) in driverInfo" :key="value.id">
          {{ detail }} : {{ value }}
          </li>
      </ul>
  </div>
</template>

<style scoped lang="scss" src="./licenseProfile.scss"></style>
<script src="./licenseProfile.ts"></script>