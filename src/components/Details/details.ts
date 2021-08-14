import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Headless extends Vue {
    protected voorNaam = "Voornaam"
    protected leefTijd = "leeftijd"
    protected rijbewijs = "rijbewijs"

    protected step1Done = false;
    protected step2Done = false;
    protected step3Done = false;
}