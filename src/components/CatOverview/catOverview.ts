import { Component, Vue } from "vue-property-decorator";
import Profile from "../LicenseProfile/LicenseProfile.vue";

@Component({
    components: {
        Profile,
      }
})

export default class Headless extends Vue {


  protected link = "";
  protected title = "";

  protected changeCat(cat){
     this.title = cat;
     this.link = "this.$store.state.articles." + cat;

    this.currentCats = eval(this.link)
  }

  protected currentCats = [{

  }];

  protected cats = [
    {
      catName : "Onderhoud",
      catIcon : "hammer-screwdriver",
      catColor : "#2196F3",
      catLink : "#",
      storeName : "onderhoudArtikelen"
    },
    {
      catName : "Rijvaardigheid",
      catIcon : "road-variant",
      catColor : "rgba(36, 37, 42, 1)",
      catLink : "#",
      storeName : "rijvaardigheidArtikelen"
    },
    {
      catName : "Aankoopadvies",
      catIcon : "currency-usd",
      catColor : "#019641",
      catLink : "#",
      storeName : "adviesArtikelen"
    },
    {
      catName : "Rijbewijscoaching",
      catIcon : "poll",
      catColor : "#f4743b",
      catLink : "#",
      storeName : "coachingArtikelen"
    },
  ]
}