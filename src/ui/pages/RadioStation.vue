<template>
  <div>
    <v-card>
      <v-responsive :aspect-ratio="16 / 9">
        <div>
          <a href="#" @click="goBack()">{{ "Back" }}</a>
          <p>{{ $route.params.name }}</p>
        </div>
        <div>
          <audio
            id="radio"
            tabindex="0"
            controls
            :src="currentRadioStation.link2"
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
          <p>Name: {{ currentRadioStation.name }}</p>
          <p>Tags: {{ currentRadioStation.tags }}</p>
        </div>
      </v-responsive>
    </v-card>
  </div>
</template>

<script>
import RadioStationsData from "@/ui/assets/radioStationsData.json";

export default {
  name: "RadioStation",
  data() {
    return {
      radioStationsData: RadioStationsData,
      currentRadioStation: {}
    };
  },
  created() {
    this.currentRadioStation = this.radioStationsData[
      this.getRadioStationIdParam()
    ];
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
      return this.currentRadioStation.link1 | this.currentRadioStation.link2;
    }
  }
};
</script>

<style scoped></style>
