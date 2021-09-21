import { Component, Vue } from "vue-property-decorator";
import Profile from "../LicenseProfile/LicenseProfile.vue";

@Component({
    components: {
        Profile,
      }
})
export default class Headless extends Vue {

    protected bikeCats = [
        {
            id: 0,
            name: "Sport",
            imgLink: require('../../assets/images/bikes/sportBike.jpg'),
            score: 0,
            description: "Snelle sportieve motoren",
        },
        {
            id: 1,
            name: "Tour",
            imgLink: require('../../assets/images/bikes/touring.jpg'),
            score: 0,
            description: "Rustig rijden & genieten",
        },
        {
            id: 2,
            name: "Scrambler",
            imgLink: require('../../assets/images/bikes/scrambler.jpg'),
            score: 0,
            description: "Off and on road fun",
        },
        {
            id: 3,
            name: "Naked",
            imgLink: require('../../assets/images/bikes/naked.jpg'),
            score: 0,
            description: "Één met de elementen",
        },
        {
            id: 4,
            name: "SuperMoto",
            imgLink: require('../../assets/images/bikes/superMoto.jpg'),
            score: 0,
            description: "BRAAAAAP",
        },
        {
            id: 5,
            name: "Adventure",
            imgLink: require('../../assets/images/bikes/adventure.jpg'),
            score: 0,
            description: "Op avontuur met de motor!",
        },
    ]

    protected answers = {
        picks : [],
        sporty : 50,
        price : 3500,
        height : 0,
        commute : [],
        comfort : "",
        fun : 0,
    }
    
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

    protected step1active = true;
    protected step2active = false;
    protected step3active = false;
    protected step4active = false;
    protected step5active = false;
    protected step6active = false;
    protected step7active = false;

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
        this.answersDone = false;
    
        this.step1active = true;
        this.step2active = false;
        this.step3active = false;
        this.step4active = false;
        this.step5active = false;
        this.step6active = false;
        this.step7active = false;
    }
}