import { Component, Vue } from "vue-property-decorator";
import Profile from "../LicenseProfile/LicenseProfile.vue";

@Component({
    components: {
        Profile,
      }
})

export default class Headless extends Vue {

protected bikeScore = this.$store.state.perfectBike;
protected pickedBikes = this.$store.state.pickedBikes;


protected bike1details = this.$store.state.bikeCats.find(obj => obj.name === this.pickedBikes.bike1);
protected bike2details = this.$store.state.bikeCats.find(obj => obj.name === this.pickedBikes.bike2);
protected bike3details = this.$store.state.bikeCats.find(obj => obj.name === this.pickedBikes.bike3);


  
}