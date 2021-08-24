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
      <router-link to="/" title="home" class="logo">
        <p class="logo"> BB </p>
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
          <li><router-link @click.native="toggle()" to="/details">
            <v-icon
            size="30"
            class="
              text-white
              cursor-pointer
            "
            >mdi-pencil</v-icon>
            Gegevens veranderen</router-link> </li>
          <li><router-link @click.native="toggle()" to="/">
            <v-icon
            size="30"
            class="
              text-white
              cursor-pointer
            "
            >mdi-reload</v-icon>
            Intro scherm</router-link> </li>
        </ul>

  </div>
</transition>
  </nav>
</template>

<script src="@/components/Website/Navigation/navigation.ts"></script>
<style lang="scss" src="@/components/Website/Navigation/navigation.scss"></style>
