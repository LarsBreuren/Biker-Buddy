import { Component, Vue } from "vue-property-decorator";
import FullWidthImage from "@/components/FullWidthImage/FullWidthImage.vue";


@Component({
    components: {
        FullWidthImage
      }
})
export default class Headless extends Vue {
protected driverInfo = this.$store.state.driverInfo;

protected articleId = this.$store.state.currentArticle;
protected articleCategory = this.$store.state.currentCategory;

protected articlePath = "this.$store.state.articles." + this.articleCategory;

protected grabArray = this.$store.state.articles.find(x => x.id === this.articleCategory);

// protected article = eval(this.articlePath).find(obj => obj.id === this.articleId);
// protected article = this.$store.state.articles.adviesArtikelen.find(obj => obj.id === this.articleId);

public imagelink1 = "articles/ketting.jpg";
public imagelink2 = "articles/ketting2.jpg";
public imagelink3 = "articles/ketting-gif.gif";
}