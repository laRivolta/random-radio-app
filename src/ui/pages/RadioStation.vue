<template>
  <div>
    <div>
      <v-toolbar color="amber" flat dense>
        <v-btn color="grey" icon @click="goBack()">
          <v-icon dark>
            mdi-arrow-left
          </v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <category-list />
      </v-toolbar>
    </div>

    <v-container>
      <v-row align="center" no-gutters justify-start>
        <v-col :cols="8">
          <audio id="radio" tabindex="0" controls class="hidden" preload="none">
            <source :src="generateRadioLink" />
          </audio>
        </v-col>

        <v-col :cols="4">
          <v-btn
            :to="nextRadioStation()"
            color="purple"
            class="white--text"
            x-large
          >
            <v-icon dark>
              mdi-cached
            </v-icon>
            ¡Otra!
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <p>
            Ten paciencia, algunas radios pueden tardar hasta 5 segundos en
            empezar a sonar :)
          </p>
        </v-col>
        <v-col cols="1">
          <v-card></v-card>
        </v-col>
      </v-row>
    </v-container>

    <div>
      <v-container>
        <p>
          Estás escuchando
          <b> {{ currentRadioStation.name || "" }}</b>
          con las siguientes etiquetas
        </p>

        <v-row>
          <v-col v-for="tag in tags" :key="tag" cols="4" sm="s">
            <v-btn class="font-weight-bold" icon disabled color="purple">
              {{ tag }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategoryList from "@/ui/components/CategoryList.vue";

export default {
  name: "RadioStation",
  components: {
    CategoryList
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      radioStationList: {},
      currentRadioStation: {},
      tags: []
    };
  },
  created() {
    this.init();
  },
  computed: {
    ...mapGetters("radioStationLists", ["getRadioStationListByCategoryName"]),
    generateRadioLink() {
      return this.currentRadioStation.link1;
    }
  },
  mounted() {
    this.playRadio();
  },
  methods: {
    async init() {
      this.radioStationList = this.getRadioStationListByCategoryName(
        this.getCategorySlugParam()
      ).list;
      this.currentRadioStation = this.radioStationList[
        this.getRadioStationListIndex()
      ];
      this.tags = this.splitTags();
    },
    splitTags() {
      let tags;
      if (this.currentRadioStation.tags) {
        tags = this.currentRadioStation.tags.split(",");
      }
      return tags;
    },
    nextRadioStation() {
      let nextIndex = parseInt(this.getRadioStationListIndex()) + 1;
      return `/category/${this.getCategorySlugParam()}/${nextIndex}`;
    },
    playRadio() {
      var player = document.getElementById("radio");
      player.play();
      player.focus();
    },
    getRadioStationListIndex() {
      return this.$route.params.radioStationId;
    },
    getCategorySlugParam() {
      return this.$route.params.category;
    },
    goBack() {
      var player = document.getElementById("radio");
      player.pause();
      player.currentTime = 0;
      player.src = "";
      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>
