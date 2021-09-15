import { Component, Vue } from "vue-property-decorator";
import FullWidthImage from "@/components/FullWidthImage/FullWidthImage.vue";

@Component({
    components: {
        FullWidthImage
      }
})
export default class Headless extends Vue {
protected driverInfo = this.$store.state.driverInfo;

public imagelink1 = "articles/ketting.jpg";
public imagelink2 = "articles/ketting2.jpg";
}