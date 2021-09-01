import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Headless extends Vue {
    protected checkLicense(license){
        this.delay();
        if (license == 'A1' || license == 'A2' || license == 'A'){
            return true;
        } else{
            return false;
        }
    }

    protected Onderhoud = 0;
    protected Rijvaardigheid = 0;
    protected Advies = 0;
    protected Coaching = 0;

    protected delay() {
        setTimeout( () => {
            this.applyScores();
        }, 900);
    }

    protected applyScores(){
        this.Onderhoud = this.$store.state.driverScore.Onderhoud;
        this.Rijvaardigheid = this.$store.state.driverScore.Rijvaardigheid;
        this.Advies = this.$store.state.driverScore.Advies;
        this.Coaching = this.$store.state.driverScore.Coaching;
    }

}

