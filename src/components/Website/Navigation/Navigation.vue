<template>
  <nav class="topnav">
    <transition name="fade"> <div @click="toggle()" v-if="hamburger" class="pageOverlay"></div></transition>
    <div class="desktop">
      <router-link to="/" title="home" class="logo">
        <img :src="logo" />
      </router-link>
    <div class="links">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cases">Cases</router-link> </li>
        <li><router-link to="/website-maken">Website laten maken</router-link> </li>
        <li><a href="https://website-fabriek.online/wp-login.php" target="_blank">Login</a></li>
      </ul>
    </div>
  </div>
  
    <div class="mobile" >
      <router-link to="/" title="home" class="logo">
        <img :src="logo" />
      </router-link>
      <button v-on:click="toggle()" class="navToggle"> 
        <v-icon
        v-if="hamburger"
        size="30"
        class="
          text-black
          cursor-pointer
        "
        >mdi-close</v-icon
      >
      <v-icon
      v-else
      size="30"
      class="
        text-black
        cursor-pointer
      "
      >mdi-menu</v-icon
    ></button>
    </div>
    <transition name="fade">
    <div v-if="hamburger" class="hamburgerLinks">
        <ul>
          <li><router-link @click.native="toggle()" to="/"> 
            <v-icon
            size="30"
            class="
              text-black
              cursor-pointer
            "
            >mdi-home</v-icon>
          Home
        </router-link></li>
          <li><router-link @click.native="toggle()" to="/cases">
            <v-icon
            size="30"
            class="
              text-black
              cursor-pointer
            "
            >mdi-briefcase-check-outline</v-icon>
            Cases</router-link> </li>
          <li><router-link @click.native="toggle()" to="/website-maken">
            <v-icon
            size="30"
            class="
              text-black
              cursor-pointer
            "
            >mdi-code-braces</v-icon>
            Website laten maken</router-link> </li>
          <li><a href="https://website-fabriek.online/wp-login.php" target="_blank">
            <v-icon
            size="30"
            class="
              text-black
              cursor-pointer
            "
            >mdi-login</v-icon>
            Login</a></li>
        </ul>

  </div>
</transition>
  </nav>
</template>

<script src="@/components/Website/Navigation/navigation.ts"></script>
<style lang="scss" src="@/components/Website/Navigation/navigation.scss"></style>
