<template>
  <div
    class="flex items-center containerFull relative w-full bannerContainer z-10"
  >
    <img
      v-if="blackWhite"
      class="imgBlackWhite absolute h-full w-full object-cover z-0"
      :src="require(`../../assets/images/${imageLink}`)"
      alt="Banner background image"
    />
    <img
      v-else
      class="absolute h-full w-full object-cover z-0"
      :src="require(`../../assets/images/${imageLink}`)"
      alt="Banner background image"
    />
    <div class="container md:text-left text-center; relative z-20">
      <div class="px-32">
        <h2 class="bannerTitle text-center ">{{ text }}</h2>
      </div>
    </div>
    <div
    v-if="overlay"
    class="overlay absolute top-0 bottom-0 right-0 left-0 object-cover w-full h-full"
  ></div>
  </div>
</template>

<style
  scoped
  lang="scss"
  src="@/components/FullWidthImage/full-width-image.scss"
></style>

<script>
export default {
  props: ["imageLink", "overlay", "blackWhite", "text"]
};
</script>