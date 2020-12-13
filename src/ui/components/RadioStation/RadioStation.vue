<template>
  <div>
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
          <b>{{ radioStation.name }}</b>
          con las siguientes etiquetas
        </p>
        <tags :rawTags="radioStation.tags"></tags>
      </v-container>
    </div>
  </div>
</template>

<script>
import Tags from "@/ui/components/RadioStation/Tags.vue";

export default {
  name: "RadioStation",
  components: {
    Tags
  },
  props: {
    radioStation: Object,
    categorySlug: String,
    radioIdInCategory: Number
  },
  mounted() {
    this.playRadio();
  },
  methods: {
    generateRadioLink() {
      return this.radioStation.link1;
    },
    nextRadioStation() {
      const nextRadioId = this.radioIdInCategory + 1;
      return `/category/${this.categorySlug}/${nextRadioId}`;
    },
    playRadio() {
      var player = document.getElementById("radio");
      player.play();
      player.focus();
    }
  }
};
</script>
