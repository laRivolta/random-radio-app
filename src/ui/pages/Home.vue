<template>
  <div class="home">
    <h1>Welcome to Random Radio!</h1>
    <img
      alt="random radio"
      height="300"
      width="400"
      src="../assets/main_radio.jpg"
    />
    <h3>Choose your mood:</h3>
    <div id="list-rendering">
      <category-list />
    </div>
  </div>
</template>

<script>
import { RadioStationsLocal } from "@/application/services/radioStations-local";

import CategoryList from "@/ui/components/CategoryList.vue";

export default {
  name: "Main",
  components: {
    CategoryList
  },
  computed: {
    radioStations() {
      return RadioStationsLocal.loadRadioStations();
    }
  }
};
</script>
