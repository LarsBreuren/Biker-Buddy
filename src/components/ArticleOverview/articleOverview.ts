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
protected weekly = this.checkArticle('weekly');

protected showArtikel1 = false;
protected showArtikel2 = false;
protected showArtikel3 = false;
protected showWeekly = false;
protected showWeeklyText = false;

  protected checkArticle(prio){
    this.delay1();
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
    else if (prio == 'weekly'){
      return this.getRandomArticle('weeklyArtikelen');
    }
  }

  protected getRandomArticle(categoryName){
    return this.$store.state.articles[categoryName][Math.floor(Math.random()*this.$store.state.articles[categoryName].length)];
  }

  protected delay1() {
    setTimeout( () => {
        this.showArtikel1 = true;
        this.delay2();
    }, 400);
  }
  protected delay2() {
    setTimeout( () => {
        this.showArtikel2 = true;
        this.showArtikel3 = true;
        this.delay3();
    }, 300);
  }
  protected delay3() {
    setTimeout( () => {
        this.showWeekly = true;
        this.delay4();
    }, 500);
  }
  protected delay4() {
    setTimeout( () => {
        this.showWeeklyText = true;
    }, 500);
  }

}