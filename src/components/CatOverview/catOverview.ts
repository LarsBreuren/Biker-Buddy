import { Component, Vue } from "vue-property-decorator";
import Profile from "../LicenseProfile/LicenseProfile.vue";

@Component({
    components: {
        Profile,
      }
})

export default class Headless extends Vue {

  protected cats = [
    {
      catName : "Onderhoud",
      catIcon : "hammer-screwdriver",
      catColor : "#2196F3",
      catLink : "#"
    },
    {
      catName : "Rijvaardigheid",
      catIcon : "road-variant",
      catColor : "rgba(36, 37, 42, 1)",
      catLink : "#"
    },
    {
      catName : "Aankoopadvies",
      catIcon : "currency-usd",
      catColor : "#019641",
      catLink : "#"
    },
    {
      catName : "Rijbewijscoaching",
      catIcon : "poll",
      catColor : "#f4743b",
      catLink : "#"
    },
  ]
}