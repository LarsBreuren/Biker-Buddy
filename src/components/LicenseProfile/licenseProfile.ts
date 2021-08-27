import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Headless extends Vue {
    protected checkLicense(license){
        if (license == 'A1' || license == 'A2' || license == 'A'){
            return true;
        } else{
            return false;
        }
    }

    protected Onderhoud = this.$store.state.driverScore.Onderhoud;
    protected Rijvaardigheid = this.$store.state.driverScore.Rijvaardigheid;
    protected Advies = this.$store.state.driverScore.Advies;
    protected Coaching = this.$store.state.driverScore.Coaching;

}

