import { Component, Vue } from "vue-property-decorator";
import ArticleOverview from "../ArticleOverview/ArticleOverview.vue";

@Component({
    components: {
        ArticleOverview,
      }
})
export default class Headless extends Vue {
protected driverInfo = this.$store.state.driverInfo;
}