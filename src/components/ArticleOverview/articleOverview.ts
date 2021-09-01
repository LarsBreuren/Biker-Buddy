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
protected driverInfo = this.$store.state.driverInfo;


}