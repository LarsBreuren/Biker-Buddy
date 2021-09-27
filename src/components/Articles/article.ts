import { Component, Vue } from "vue-property-decorator";
import FullWidthImage from "@/components/FullWidthImage/FullWidthImage.vue";


@Component({
    components: {
        FullWidthImage
      }
})
export default class Headless extends Vue {
protected driverInfo = this.$store.state.driverInfo;

protected articleTitle = this.$store.state.currentArticle;
protected articleCategory = this.$store.state.currentCategory;

protected article = this.$store.state.articles.find(o => o.title === this.articleTitle);

public imagelink1 = "articles/ketting.jpg";
public imagelink2 = "articles/ketting2.jpg";
public imagelink3 = "articles/ketting-gif.gif";
}