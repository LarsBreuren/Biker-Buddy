<template>
  <nav class="topnav">
    <transition name="fade"> <div @click="toggle()" v-if="hamburger" class="pageOverlay"></div></transition>
    <div class="desktop">
      <router-link to="/homepagina" title="home" class="logo">
        <img :src="logo" />
      </router-link>
    <div class="links">
      <ul>
        <li><router-link to="/homepagina">Home</router-link></li>
        <li><router-link to="/details">Gegevens veranderen</router-link> </li>
        <li><router-link to="/">Introscherm</router-link> </li>
      </ul>
    </div>
  </div>
  
    <div class="mobile" >
      <router-link to="/homepagina" title="home" class="logo">
        <img class="logo" :src="logo" />
      </router-link>
      <button v-on:click="toggle()" class="navToggle"> 
        <v-icon
        v-if="hamburger"
        size="30"
        class="
          text-white
          cursor-pointer
        "
        >mdi-close</v-icon
      >
      <v-icon
      v-else
      size="30"
      class="
        text-white
        cursor-pointer
      "
      >mdi-menu</v-icon
    ></button>
    </div>
    <transition name="fade">
    <div v-if="hamburger" class="hamburgerLinks">
        <ul>
          <li><router-link @click.native="toggle()" to="/homepagina"> 
            <v-icon
            size="30"
            class="
              text-white
              cursor-pointer
            "
            >mdi-home</v-icon>
          Home
        </router-link></li>
          <li><router-link @click.native="toggle()" to="/Profile">
            <v-icon
            size="30"
            class="
              text-white
              cursor-pointer
            "
            >mdi-account</v-icon>
            Mijn profiel</router-link> </li>
          <li><router-link @click.native="toggle()" to="/Categories">
            <v-icon
            size="30"
            class="
              text-white
              cursor-pointer
            "
            >mdi-format-list-checkbox</v-icon>
            Categorieën</router-link> </li>
          <li><router-link @click.native="toggle()" to="/bikepicker">
            <v-icon
            size="30"
            class="
              text-white
              cursor-pointer
            "
            >mdi-motorbike</v-icon>
            Keuzehulp</router-link> </li>
          <li><router-link @click.native="toggle()" to="/quiz">
            <v-icon
            size="30"
            class="
              text-white
              cursor-pointer
            "
            >mdi-message-question</v-icon>
            Quiz</router-link> </li>
                      <li><a @click.native="toggle()" href="https://bikerbuddy.nl">
            <v-icon
            size="30"
            class="
              text-white
              cursor-pointer
            "
            >mdi-reload</v-icon>
            Intro scherm</a> </li>
        </ul>

  </div>
</transition>
  </nav>
</template>

<script src="@/components/Website/Navigation/navigation.ts"></script>
<style lang="scss" src="@/components/Website/Navigation/navigation.scss"></style>
