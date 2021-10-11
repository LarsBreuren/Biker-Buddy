import router from "@/router";
import { Component, Vue } from "vue-property-decorator";
import Profile from "../LicenseProfile/LicenseProfile.vue";

@Component({
    components: {
        Profile,
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

protected delPopUp(){
  this.$store.commit('delPopUp');
}

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
      return this.getRandomArticle('weekly');
    }
  }

  protected getRandomArticle(categoryName){
    const matchingCategory = this.$store.state.articles.filter(article => article.category === categoryName);
    return matchingCategory[Math.floor(Math.random()*matchingCategory.length)];
  }

  protected setArticle(article, category){
    this.$store.commit('updateCurrentArticle', article);
    this.$store.commit('updatecurrentCategory', category);
    router.push({ path: '/article' })
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