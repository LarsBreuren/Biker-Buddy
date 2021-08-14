import { Component, Vue } from "vue-property-decorator";

import axios from "axios";

@Component({
  components: {

  }
})
export default class App extends Vue {
  protected isLoading = true;

  async mounted() {
    this.initData();
  }

  protected async initData() {
    try {
      await axios
        .get("https://website-fabriek.online/wp-json/markers/v1/post")
        .then(response => {
          this.$store.dispatch("setPosts", response.data);
        });
    } catch (err) {
      console.log(err);
    }
    this.isLoading = false;
  }
}
