import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Headless extends Vue {
protected driverInfo = this.$store.state.driverInfo;
}