import { Component, Vue } from "vue-property-decorator";
import Profile from "../LicenseProfile/LicenseProfile.vue";
import driverInfo from "../../interfaces/driverInfo";

@Component({
    components: {
        Profile,
      }
})
export default class Headless extends Vue {

    protected driverInfo: driverInfo = {
        Voornaam: this.$store.state.driverInfo.Voornaam,
        Leeftijd: "",
        Rijbewijs: this.$store.state.driverInfo.Rijbewijs,
        Ervaring: "",
        Info: this.$store.state.driverInfo.Info
    }
    protected driverScore = {
        Onderhoud: 10,
        Rijvaardigheid: 0,
        Advies: 15,
        Coaching: 0,
    }

    protected prios = {
        prio1: "",
        prio2: "",
        prio3: "",
    }


    protected driverScoreSorted= [] as any; //array
    protected driverScoreSortedReverse = [] as any; //array
    protected driverScoreSortedObject = {} as any; //obj


    protected sortScore(){
        for (const item in this.driverScore) {
            this.driverScoreSorted.push([item, this.driverScore[item]]);
        }
        this.driverScoreSorted.sort(function(a, b) {
            return a[1] - b[1];
        });

        this.reverseScore()

        this.driverScoreSorted.forEach((item) =>{
            this.driverScoreSortedObject[item[0]]=item[1]
        })

        this.prios.prio1 = Object.keys(this.driverScoreSortedObject)[0]; 
        this.prios.prio2 = Object.keys(this.driverScoreSortedObject)[1]; 
        this.prios.prio3 = Object.keys(this.driverScoreSortedObject)[2]; 
     }

    protected reverseScore(){
        this.driverScoreSortedReverse = this.driverScoreSorted.reverse();
    }


    protected updateStore(){
        this.calculateScores();
        this.sortScore();

        this.$store.commit('updatedriverInfo', this.driverInfo)
        this.$store.commit('updatedriverScore', this.driverScoreSortedObject)
        this.$store.commit('updatePrios', this.prios)
        this.next3();
    }

    protected checkLicense(license){
        if (license == 'A1' || license == 'A2' || license == 'A'){
            return true;
        } else{
            return false;
        }
    }

    protected calculateScores(){
        this.calculateAge();
        this.calculateLicense();
        this.calculateExperience();
        this.caculatePreferences();
    }

    calculateAge(){ 
        if (  parseInt(this.driverInfo.Leeftijd, 10) < 20){  //Jonger dan 20 -> +33 rijvaardigheid
            this.driverScore.Rijvaardigheid += 33.333;
        }
    }
    calculateLicense(){
                // Geen rijbewijs -> + 50 op coaching en 33 rijvaardigheid
                if (this.driverInfo.Rijbewijs == 'Nog geen rijbewijs' || this.driverInfo.Rijbewijs == 'Bezig met rijbewijs'){
                    this.driverScore.Coaching += 50;
                    this.driverScore.Rijvaardigheid += 33.333;
                    this.driverScore.Advies += 33.333;
                }
                //a1 -> + 30 op onderhoud & op rijvaardigheid
                else if (this.driverInfo.Rijbewijs == 'A1'){
                    this.driverScore.Rijvaardigheid += 33.333;
                    this.driverScore.Onderhoud += 30;
                }
                //Wel rijbewijs -> + 30 op onderhoud op rijvaardigheid
                else if (this.driverInfo.Rijbewijs == 'A2' || this.driverInfo.Rijbewijs == 'A'){
                    this.driverScore.Rijvaardigheid += 30;
                    this.driverScore.Onderhoud +=30;
                }
    }

    calculateExperience(){
        console.log('Ervaring: ' + this.driverInfo.Ervaring)
        if(  parseInt(this.driverInfo.Ervaring, 10) <= 0){
            console.log( 'no experience');
        }
        else if(  parseInt(this.driverInfo.Ervaring, 10) <= 1){
            this.driverScore.Rijvaardigheid -= 10;
        }
        else if(  parseInt(this.driverInfo.Ervaring, 10)  <= 3){
            this.driverScore.Rijvaardigheid -= 15;
        }
        else if(  parseInt(this.driverInfo.Ervaring, 10)  > 3){
            this.driverScore.Onderhoud +=25;
            this.driverScore.Rijvaardigheid -= 20;
        }
    }
    caculatePreferences(){

        if (this.driverInfo.Info.includes("Onderhoud")){
            this.driverScore.Onderhoud += 33.333;
        }
        if (this.driverInfo.Info.includes("Rijvaardigheid")){
            this.driverScore.Rijvaardigheid += 33.333;
        }
        if (this.driverInfo.Info.includes("Aankoop")){
            this.driverScore.Advies += 33.333;
        }
        if (this.driverInfo.Info.includes("Rijbewijs")){
            this.driverScore.Coaching += 33.333;
        }
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