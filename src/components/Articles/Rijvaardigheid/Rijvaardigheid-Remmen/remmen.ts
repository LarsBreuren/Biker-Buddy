import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {
      }
})
export default class Headless extends Vue {
  protected driverInfo = this.$store.state.driverInfo;

  protected metaData = {
    title: "Remmen zijn belangrijk",
    banner:  require('../../../../assets/images//articles/remmen.jpg'),
    catogory: "Rijvaardigheid",
    link: '/articles/remmen'
  }

}