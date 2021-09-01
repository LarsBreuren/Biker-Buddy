import { Component, Vue } from "vue-property-decorator";
import Profile from "../LicenseProfile/LicenseProfile.vue";
import Remmen from "@/components/Articles/Rijvaardigheid/Rijvaardigheid-Remmen/Remmen.vue";

@Component({
    components: {
        Profile,
        Remmen,
      }
})

export default class Headless extends Vue {
protected prios = this.$store.state.prio;

protected artikel1 = this.checkArticle(this.prios.prio1);
protected artikel2 = this.checkArticle(this.prios.prio2);
protected artikel3 = this.checkArticle(this.prios.prio3);

  protected checkArticle(prio){
    if (prio == 'Onderhoud'){
      return this.getRandomArticle('onderhoudArtikelen');
    }
    else if (prio == 'Rijvaardigheid'){
      return this.getRandomArticle('rijvaardigheidArtikelen');
    }
    else if (prio == 'Advies'){
      return this.getRandomArticle('adviesArtikelen');
    }
    else if (prio == 'Coaching'){
      return this.getRandomArticle('coachingArtikelen');
    }
  }

  protected getRandomArticle(categoryName){
    return this.$store.state.articles[categoryName][Math.floor(Math.random()*this.$store.state.articles[categoryName].length)];
  }

}