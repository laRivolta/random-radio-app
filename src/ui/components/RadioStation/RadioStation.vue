<template>
  <div>
    <v-container>
      <v-row align="center" no-gutters justify-start>
        <player
          :link1="radioStation.link1"
          :link2="radioStation.link2"
        ></player>

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
import Player from "@/ui/components/RadioStation/Player.vue";

export default {
  name: "RadioStation",
  components: {
    Tags,
    Player
  },
  props: {
    radioStation: Object,
    categorySlug: String,
    radioIdInCategory: Number
  },
  methods: {
    nextRadioStation() {
      const nextRadioId = this.radioIdInCategory + 1;
      return `/category/${this.categorySlug}/${nextRadioId}`;
    }
  }
};
</script>
