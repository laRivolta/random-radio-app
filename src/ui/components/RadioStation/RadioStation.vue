<template>
  <div>
    <v-container>
      <v-row class="mt-10 mb-6" align="center" no-gutters justify-start>
        <player
          :link1="link1"
          :link2="link2"
          :autoplay="true"
          :categorySlug="categorySlug"
          :radioIdInCategory="radioIdInCategory"
        >
        </player>
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
        <tags :rawTags="tags"></tags>
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
  computed: {
    tags: {
      get() {
        return this.radioStation.tags;
      }
    },
    link1: {
      get() {
        return this.radioStation.link1;
      }
    },
    link2: {
      get() {
        return this.radioStation.link2;
      }
    }
  }
};
</script>
