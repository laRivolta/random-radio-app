<template>
  <div>
    <div>
      <v-btn class="mx-2" fab dark small color="purple" @click="goBack()">
        <v-icon dark>
          mdi-arrow-left
        </v-icon>
      </v-btn>
      Atrás
      <p>
        Estás en el mood <b>{{ $route.params.name }}</b> escuchando
        <b> {{ currentRadioStation.name || "" }}</b>
      </p>
    </div>
    <div>
      <audio id="radio" tabindex="0" controls class="hidden" preload="none">
        <source :src="generateRadioLink" />
      </audio>
      <p>
        ⚠️ Algunas radios pueden tardar hasta 5 segundos en empezar a sonar ⚠️
      </p>
    </div>
    <div>
      <v-container>
        <v-row>
          <v-col v-for="tag in tags" :key="tag" cols="4" sm="s">
            <v-card class="font-weight-bold">
              {{ tag }}
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    Siguiente radio!
    <v-btn :to="nextRadioStation()" class="mx-2" fab dark small color="purple">
      <v-icon dark>
        mdi-arrow-right
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import RadioStationsData from "@/ui/assets/radioStationsData.json";

export default {
  name: "RadioStation",
  data() {
    return {
      radioStationsData: RadioStationsData,
      currentRadioStation: {},
      tags: []
    };
  },
  created() {
    this.currentRadioStation = this.radioStationsData[
      this.getRadioStationIdParam()
    ];
    this.tags = this.splitTags();
  },
  computed: {
    generateRadioLink() {
      return this.currentRadioStation.link1;
    }
  },
  mounted() {
    var player = document.getElementById("radio");
    console.log(player.src);
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
    getRadioStationIdParam() {
      return this.$route.params.radioStationId;
    },
    nextRadioStation() {
      let nextIndex = parseInt(this.getRadioStationIdParam()) + 1;
      return `/category/${this.$route.params.name}/${nextIndex}`;
    },
    getRadioSrc() {
      return this.currentRadioStation.link1 | this.currentRadioStation.link2;
    },
    splitTags() {
      let tags;
      if (this.currentRadioStation.tags) {
        tags = this.currentRadioStation.tags.split(",");
      }
      return tags;
    }
  }
};
</script>

<style scoped></style>
