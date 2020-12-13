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
            <source :src="generateRadioLink()" />
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
          <b> <span v-bind="currentRadioStation.name"></span></b>
          con las siguientes etiquetas
        </p>

        <v-row>
          <v-col v-for="tag in currentRadioTags" :key="tag" cols="4" sm="s">
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
  name: "ChannelPage",
  components: {
    CategoryList
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      currentRadioStation: {},
      currentRadioTags: []
    };
  },
  created() {
    this.init();
  },
  computed: {
    ...mapGetters("categories", ["getRadioByCategorySlugAndRadioId"])
  },
  mounted() {
    this.playRadio();
  },
  methods: {
    init() {
      this.currentRadioStation = this.getRadioByCategorySlugAndRadioId(
        this.getCategorySlugRequestParam(),
        this.getRadioStationIndexRequestParam()
      );
      this.currentRadioTags = this.splitTags();
    },
    splitTags() {
      let tags;
      if (this.currentRadioStation.tags) {
        tags = this.currentRadioStation.tags.split(",");
      }
      return tags;
    },
    generateRadioLink() {
      return this.currentRadioStation.link1;
    },
    nextRadioStation() {
      let nextIndex = parseInt(this.getRadioStationIndexRequestParam()) + 1;
      return `/category/${this.getCategorySlugRequestParam()}/${nextIndex}`;
    },
    playRadio() {
      var player = document.getElementById("radio");
      player.play();
      player.focus();
    },
    getRadioStationIndexRequestParam() {
      return this.$route.params.radioStationId;
    },
    getCategorySlugRequestParam() {
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
