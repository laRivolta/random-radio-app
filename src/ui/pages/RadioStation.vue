<template>
  <div>
    <div>
      <a href="#" @click="goBack()">{{ "Back" }}</a>
      <p>{{ $route.params.name }}</p>
    </div>
    <div class="embed-responsive embed-responsive-16by9">
      <audio
        tabindex="0"
        controls
        :src="randomRadio.link2"
        id="radio"
        class="hidden"
        preload="none"
      ></audio>
    </div>
    <router-link
      :to="
        `/category/${getNameParam()}/${nextRadioStation(
          getRadioStationIdParam()
        )}`
      "
    >
      Next radio!
    </router-link>
    <div>
      <p>Name: {{ randomRadio.name }}</p>
      <p>Tags: {{ randomRadio.tags }}</p>
    </div>
  </div>
</template>

<script>
import RadioStationsData from "@/ui/assets/radioStationsData.json";

export default {
  name: "RadioStation",
  data() {
    return {
      radioStationsData: RadioStationsData
    };
  },
  computed: {
    randomRadio() {
      return this.radioStationsData[this.getRadioStationIdParam()];
    }
  },
  mounted() {
    var player = document.getElementById("radio");
    player.play();
    player.focus();
  },
  methods: {
    goBack() {
      var player = document.getElementById("radio");
      player.pause();
      player.currentTime = 0;
      player.src = "";
      this.$router.push("/");
    },
    nextRadioStation(currentRadioStationIndex) {
      return parseInt(currentRadioStationIndex) + 1;
    },
    getNameParam() {
      return this.$route.params.name;
    },
    getRadioStationIdParam() {
      return this.$route.params.radioStationId;
    },
    getRadioSrc() {
      return this.randomRadio.link1 | this.randomRadio.link2;
    }
  }
};
</script>

<style scoped></style>
