import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Usp extends Vue {

  protected hamburger = false; 

  protected logo = require('../../../assets/images/buddy.png')

  protected toggle() {
    this.hamburger = !this.hamburger
  }
  }
