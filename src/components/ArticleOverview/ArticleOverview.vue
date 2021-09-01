<template>
  <div class="container">
    <div class="artikelen my-16">
        <h2> Artikelen </h2>

        <br><br>

       prio1 {{ artikel1.category }}<br>
       prio2 {{ artikel2.category }}<br>
       prio3 {{ artikel3.category }}
        
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/ArticleOverview/articleOverview.scss"></style>
<script src="@/components/ArticleOverview/articleOverview.ts"></script>

        <!-- <ul id="example-1 ">
          <li v-for="prio in this.$store.state.prio" :key="prio">
            Artikel: {{ prio }} coming soon..
          </li>
        </ul>
        -->