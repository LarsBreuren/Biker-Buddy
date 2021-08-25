import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Headless extends Vue {
    protected driverInfo = {
        Voornaam: this.$store.state.driverInfo.Voornaam,
        Leeftijd: "",
        Rijbewijs: this.$store.state.driverInfo.Rijbewijs,
        Info: this.$store.state.driverInfo.Info
    }

    protected updateStore(){
        this.$store.commit('updatedriverInfo', this.driverInfo)
        this.$router.push({ name: 'Homepagina' })
    }

    protected detailsDone = false;
    protected step1Done = false;
    protected step2Done = false;
    protected step3Done = false;

    protected step1active = true;
    protected step2active = false;
    protected step3active = false;

    protected next1(){
        this.step1Done = true;
        this.step1active = false;
        this.step2active = true;
    }
    protected next2(){
        this.step2Done = true;
        this.step2active = false;
        this.step3active = true;
    }
    protected next3(){
        this.step3Done = true;
        this.step3active = false;
        this.detailsDone = true;
    }
    protected resetSteps(){
        this.step1Done = false;
        this.step2Done = false;
        this.step3Done = false;
        this.detailsDone = false;
    
        this.step1active = true;
        this.step2active = false;
        this.step3active = false;
    }
}