import { Component, Vue } from "vue-property-decorator";
import Profile from "../LicenseProfile/LicenseProfile.vue";
import quiz from "../../interfaces/quiz";

@Component({
    components: {
        Profile,
      }
})
export default class Headless extends Vue {

    protected apexImg = ('./assets/images/quiz/quiz.jpg');

    protected answers: quiz = {
        picks : this.$store.state.driverPrefs.picks,
        sporty : 50, //out of 100
        price : 3500, 
        apex : "",
        commute : this.$store.state.driverPrefs.commute,
        comfort : "",
        fun : 50, //out of 100
        offroad: "",
    }

    protected pickedBikes = {
        bike1: "",
        bike2: "",
        bike3: "",
    }

    protected bikeScores = {
        Sportbike : 0,
        Tourbike : 0,
        Scrambler : 0,
        Naked : 0,
        Supermoto : 0,
        Adventure : 0,
    }

    protected bikeScoresSorted= [] as any; //array
    protected bikeScoresSortedReverse = [] as any; //array
    protected bikeScoresSortedObject = {} as any; //obj

    protected sortScore(){
        for (const item in this.bikeScores) {
            this.bikeScoresSorted.push([item, this.bikeScores[item]]);
        }
        this.bikeScoresSorted.sort(function(a, b) {
            return a[1] - b[1];
        });

        this.reverseScore()

        this.bikeScoresSorted.forEach((item) =>{
            this.bikeScoresSortedObject[item[0]]=item[1]
        })

        this.pickedBikes.bike1 = Object.keys(this.bikeScoresSortedObject)[0]; 
        this.pickedBikes.bike2 = Object.keys(this.bikeScoresSortedObject)[1]; 
        this.pickedBikes.bike3 = Object.keys(this.bikeScoresSortedObject)[2]; 

     }

     protected reverseScore(){
        this.bikeScoresSortedReverse = this.bikeScoresSorted.reverse();
    }

   protected bikeCats = this.$store.state.bikeCats;

    protected calculatePerfectBike(){

        this.sortScore();

        this.$store.commit('updatePerfectBike', this.bikeScoresSortedObject);
        this.$store.commit('updatePickedBike', this.pickedBikes);
    }


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

        this.step8Done = true;
        this.step8active = false;
        this.answersDone = true;
    }

    protected resetSteps(){
        window.location.reload()
    }
}