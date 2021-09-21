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
            name: "Sport motor",
            imgLink: require('../../assets/images/bikes/sportBike.jpg'),
            score: 0,
            description: "Snelle sportieve motoren",
        },
        {
            id: 1,
            name: "Tour motoren",
            imgLink: require('../../assets/images/bikes/touring.jpg'),
            score: 0,
            description: "Rustig rijden & genieten",
        },
        {
            id: 2,
            name: "Sport Touring",
            imgLink: require('../../assets/images/bikes/sportTouring.jpg'),
            score: 0,
            description: "Snel rijden & genieten",
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
            name: "Adventure bikes",
            imgLink: require('../../assets/images/bikes/adventure.jpg'),
            score: 0,
            description: "Op avontuur met de motor!",
        },
    ]

    protected answers = {
        picks : [""],
        price : 0,
        height : 0,
        sporty : 0,
        commute : [""],
        comfort : 0,
        fun : 0,
    }

    // protected calculateScores(){
    // }

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