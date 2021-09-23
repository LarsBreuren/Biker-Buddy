import { Component, Vue } from "vue-property-decorator";
import Profile from "../LicenseProfile/LicenseProfile.vue";
import answers from "../../interfaces/answers";

@Component({
    components: {
        Profile,
      }
})
export default class Headless extends Vue {

    protected answers: answers = {
        picks : this.$store.state.driverPrefs.picks,
        sporty : 50, //out of 100
        price : 3500, 
        height : this.$store.state.driverPrefs.height,
        commute : this.$store.state.driverPrefs.commute,
        comfort : "",
        fun : 50, //out of 100
    }

    protected bikeScores = {
        Sportbike : 0,
        Tourbike : 0,
        Scrambler : 0,
        Naked : 0,
        Supermoto : 0,
        Adventure : 0,
    }
    protected calculatePerfectBike(){

        this.calculatePreferences();

        this.calculateSporty();

        this.calculateSize();

        this.calculateCommute();

        this.calculateComfort();

        this.calculateFun();

    }

    protected calculatePreferences(){
        if (this.answers.picks.includes("Sport")){
            this.bikeScores.Sportbike += 30
        }
        if (this.answers.picks.includes("Tour")){
            this.bikeScores.Tourbike += 30
        }
        if (this.answers.picks.includes("Scrambler")){
            this.bikeScores.Scrambler += 30
        }
        if (this.answers.picks.includes("Naked")){
            this.bikeScores.Naked += 30
        }
        if (this.answers.picks.includes("SuperMoto")){
            this.bikeScores.Supermoto += 30
        }
        if (this.answers.picks.includes("Adventure")){
            this.bikeScores.Adventure += 30
        }
    }

    protected calculateSporty(){
        if ( this.answers.sporty < 20){
            this.bikeScores.Tourbike += 30;
        }
        else if ( this.answers.sporty < 30){
            this.bikeScores.Scrambler += 30;
            this.bikeScores.Adventure += 30;
        }
        else if ( this.answers.sporty < 70){
            this.bikeScores.Naked += 30;
            this.bikeScores.Supermoto += 20;
        }
        else if ( this.answers.sporty < 90){
            this.bikeScores.Supermoto += 30;
            this.bikeScores.Sportbike += 20;
        }
        else if ( this.answers.sporty >= 90){
            this.bikeScores.Sportbike += 40;
        }
    }

    protected calculateSize(){
        if (this.answers.height as any == 'small'){
            this.bikeScores.Naked += 15;
            this.bikeScores.Scrambler += 15;
        }
        else if (this.answers.height as any == 'medium'){
            this.bikeScores.Sportbike+= 15;
            this.bikeScores.Naked += 15;
            this.bikeScores.Scrambler += 15;

        }
        else if (this.answers.height as any == 'large'){
            this.bikeScores.Supermoto+= 15;
            this.bikeScores.Adventure += 15;
            this.bikeScores.Tourbike += 15;
        }
    }
    
    protected calculateCommute(){
        if (this.answers.commute.includes("commute")){
            this.bikeScores.Adventure += 30;
            this.bikeScores.Naked += 20;
            this.bikeScores.Scrambler += 15;
        }
        if (this.answers.commute.includes("hobby")){
            this.bikeScores.Supermoto+= 30;
            this.bikeScores.Sportbike+= 25;
            this.bikeScores.Tourbike += 25;
            this.bikeScores.Naked += 20;
            this.bikeScores.Scrambler += 15;
            this.bikeScores.Adventure += 10;
        }
    }

    protected calculateComfort(){
        if (this.answers.comfort as any == 'ja'){
            this.bikeScores.Tourbike += 25;
            this.bikeScores.Naked += 20;
            this.bikeScores.Adventure += 20;
            this.bikeScores.Scrambler += 15;
        }
        else if (this.answers.comfort as any == 'nee'){
            this.bikeScores.Supermoto+= 30;
            this.bikeScores.Sportbike+= 25;
        }
    }

    protected calculateFun(){
            if ( this.answers.fun < 40){
                console.log('funfactor 1')
                this.bikeScores.Scrambler += 30;
                this.bikeScores.Tourbike += 20;
                this.bikeScores.Naked += 15;
                this.bikeScores.Adventure += 15;
            }
            else if ( this.answers.fun < 80){
                console.log('funfactor 2')
                this.bikeScores.Naked += 30;
                this.bikeScores.Adventure += 20;
                this.bikeScores.Sportbike += 15;
                this.bikeScores.Supermoto += 15;
            }
            else if ( this.answers.fun < 90){
                console.log('funfactor 3')
                this.bikeScores.Sportbike += 30;
                this.bikeScores.Supermoto += 20;
            }
            else if ( this.answers.fun >= 90){
                console.log('funfactor 4')
                this.bikeScores.Supermoto += 50;
                this.bikeScores.Sportbike += 25;
        }
    }


 

    protected bikeCats = [
        {
            id: 0,
            name: "Sport",
            imgLink: require('../../assets/images/bikes/sportBike.jpg'),
            description: "Snelle sportieve motoren",
        },
        {
            id: 1,
            name: "Tour",
            imgLink: require('../../assets/images/bikes/touring.jpg'),
            description: "Rustig rijden & genieten",
        },
        {
            id: 2,
            name: "Scrambler",
            imgLink: require('../../assets/images/bikes/scrambler.jpg'),
            description: "Off and on road fun",
        },
        {
            id: 3,
            name: "Naked",
            imgLink: require('../../assets/images/bikes/naked.jpg'),
            description: "Één met de elementen",
        },
        {
            id: 4,
            name: "SuperMoto",
            imgLink: require('../../assets/images/bikes/superMoto.jpg'),
            description: "BRAAAAAP",
        },
        {
            id: 5,
            name: "Adventure",
            imgLink: require('../../assets/images/bikes/adventure.jpg'),
            description: "Op avontuur met de motor!",
        },
    ]


    
    protected pickedBikes = [];

    // protected calculateScores(){
    // }

    protected answersDone = false;
    protected step1Done = false;
    protected step2Done = false;
    protected step3Done = false;
    protected step4Done = false;
    protected step5Done = false;
    protected step6Done = false;
    protected step7Done = false;
    protected step8Done = false;

    protected step1active = true;
    protected step2active = false;
    protected step3active = false;
    protected step4active = false;
    protected step5active = false;
    protected step6active = false;
    protected step7active = false;
    protected step8active = false;

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
        this.step4active = true;
    }
    protected next4(){
        this.step4Done = true;
        this.step4active = false;
        this.step5active = true;
    }
    protected next5(){
        this.step5Done = true;
        this.step5active = false;
        this.step6active = true;
    }
    protected next6(){
        this.step6Done = true;
        this.step6active = false;
        this.step7active = true;
    }
    protected next7(){
        this.step7Done = true;
        this.step7active = false;
        this.step8active = true;
    }
    protected next8(){

        this.$store.commit('updatedriverBikePref', this.answers)
        this.calculatePerfectBike();

        this.step7Done = true;
        this.step7active = false;
        this.answersDone = true;
    }

    protected resetSteps(){
        this.step1Done = false;
        this.step2Done = false;
        this.step3Done = false;
        this.step4Done = false;
        this.step5Done = false;
        this.step6Done = false;
        this.step7Done = false;
        this.step8Done = false;
        this.answersDone = false;
    
        this.step1active = true;
        this.step2active = false;
        this.step3active = false;
        this.step4active = false;
        this.step5active = false;
        this.step6active = false;
        this.step7active = false;
        this.step8active = false;

        this.next1();
    }
}