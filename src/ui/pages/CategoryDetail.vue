<template>
  <div>
    <div>
      <a href="#" @click="$router.back()">{{ "Back" }}</a>
      <p>{{ $route.params.name }}</p>
    </div>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        :src="randomRadio.link2"
        allowfullscreen
      ></iframe>
    </div>
    <button>Next random radio station</button>
    <div>
      <p>Name: {{ randomRadio.name }}</p>
      <p>Tags: {{ randomRadio.tags }}</p>
    </div>
  </div>
</template>

<script>
import RadioStationsData from "@/ui/assets/radioStationsData.json";

export default {
  name: "CategoryDetail",
  data() {
    return {
      radioStationsData: RadioStationsData
    };
  },
  computed: {
    randomRadio() {
      return this.radioStationsData[1];
    }
  },
  mounted() {
    var audio = new Audio(this.randomRadio.link2); // path to file
    audio.play();
  }
};
</script>

<style scoped></style>
