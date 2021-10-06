import { Component, Vue } from "vue-property-decorator";
import Profile from "../LicenseProfile/LicenseProfile.vue";
import quiz from "../../interfaces/quiz";

@Component({
    components: {
        Profile,
      }
})
export default class Headless extends Vue {

    protected answers = {
       question1: "",
       question2: "",
       question3: "",
       question4: "",
       question5: "",
       question6: "",
       question7: "",
       question8: "",
    }

        protected correct = 0;
        protected wrong = 0;
        protected precent = 0;
  
    protected calcedAnswers = {
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
        question6: false,
        question7: false,
        question8: false,
    }

    protected calculateQuiz(){

        // this.$store.commit('updatePerfectBike', this.bikeScoresSortedObject);
        // this.$store.commit('updatePickedBike', this.pickedBikes);
        this.question1();
        this.question2();
        this.question3();
        this.question4();
        this.question5();
        this.question6();
        this.question7();
        this.question8();
        this.precent = this.percentage(this.correct, 8);

    }

    protected percentage(good, total) {
        return (100 * good) / total;
     } 


    protected question1(){
        if (this.answers.question1 as any == 'Ja'){
            this.correct += 1
            this.calcedAnswers.question1 = true;
        }
        else{
            this.wrong += 1
        }
    }
    protected question2(){
        if (this.answers.question2 as any == 'Honda'){
            this.correct += 1
            this.calcedAnswers.question2 = true;
        }
        else{
            this.wrong += 1
        }
    }
    protected question3(){
        if (this.answers.question3 as any == 'Triumph'){
            this.correct += 1
            this.calcedAnswers.question3 = true;
        }
        else{
            this.wrong += 1
        }
    }
    protected question4(){
        if (this.answers.question4 as any == 'Paddock'){
            this.correct += 1
            this.calcedAnswers.question4 = true;
        }
        else{
            this.wrong += 1
        }
    }
    protected question5(){
        if (this.answers.question5 as any == 'Banden'){
            this.correct += 1
            this.calcedAnswers.question5 = true;
        }
        else{
            this.wrong += 1
        }
    }
    protected question6(){
        if (this.answers.question6 as any == 'Elke 7000km of elk jaar'){
            this.correct += 1
            this.calcedAnswers.question6 = true;
        }
        else{
            this.wrong += 1
        }
    }
    protected question7(){
        if (this.answers.question7 as any == 'Integraal'){
            this.correct += 1
            this.calcedAnswers.question7 = true;
        }
        else{
            this.wrong += 1
        }
    }
    protected question8(){
        if (this.answers.question8 as any == 'Automobilist'){
            this.correct += 1
            this.calcedAnswers.question8 = true;
        }
        else{
            this.wrong += 1
        }
    }





    protected answersDone = false;
    protected step1Done = false;
    protected step2Done = false;
    protected step3Done = false;
    protected step4Done = false;
    protected step5Done = false;
    protected step6Done = false;
    protected step7Done = false;
    protected step8Done = false;
    protected step9Done = false;

    protected step1active = true;
    protected step2active = false;
    protected step3active = false;
    protected step4active = false;
    protected step5active = false;
    protected step6active = false;
    protected step7active = false;
    protected step8active = false;
    protected step9active = false;

    protected next1(){
        this.step1Done = true;

        this.step1active = false;
        this.step3active = false;
        this.step4active = false;
        this.step5active = false;
        this.step6active = false;
        this.step7active = false;
        this.step8active = false;
        this.step9active = false;

        this.step2active = true;
    }
    protected next2(){
        this.step2Done = true;

        this.step1active = false;
        this.step2active = false;
        this.step4active = false;
        this.step5active = false;
        this.step6active = false;
        this.step7active = false;
        this.step8active = false;
        this.step9active = false;

        this.step3active = true;
    }
    protected next3(){
        this.step3Done = true;

        this.step1active = false;
        this.step2active = false;
        this.step3active = false;
        this.step5active = false;
        this.step6active = false;
        this.step7active = false;
        this.step8active = false;
        this.step9active = false;

        this.step4active = true;
    }
    protected next4(){
        this.step4Done = true;

        this.step1active = false;
        this.step2active = false;
        this.step3active = false;
        this.step4active = false;
        this.step6active = false;
        this.step7active = false;
        this.step8active = false;
        this.step9active = false;

        this.step5active = true;
    }
    protected next5(){
        this.step5Done = true;

        this.step1active = false;
        this.step2active = false;
        this.step3active = false;
        this.step4active = false;
        this.step5active = false;
        this.step7active = false;
        this.step8active = false;
        this.step9active = false;

        this.step6active = true;
    }
    protected next6(){
        this.step6Done = true;

        this.step1active = false;
        this.step2active = false;
        this.step3active = false;
        this.step4active = false;
        this.step5active = false;
        this.step6active = false;
        this.step8active = false;
        this.step9active = false;

        this.step7active = true;
    }
    protected next7(){
        this.step7Done = true;

        this.step1active = false;
        this.step2active = false;
        this.step3active = false;
        this.step4active = false;
        this.step5active = false;
        this.step6active = false;
        this.step7active = false;
        this.step9active = false;

        this.step8active = true;
    }
    protected next8(){
        this.step7Done = true;

        this.step1active = false;
        this.step2active = false;
        this.step3active = false;
        this.step4active = false;
        this.step5active = false;
        this.step6active = false;
        this.step8active = false;

        this.step9active = true;
    }
    protected next9(){
        this.calculateQuiz();

        this.step9Done = true;
        this.step9active = false;
        this.answersDone = true;
    }

    protected resetSteps(){
        window.location.reload()
    }
}