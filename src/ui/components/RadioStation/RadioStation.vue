<template>
  <div>
    <v-container>
      <v-row align="center" no-gutters justify-start>
        <player :link1="link1" :link2="link2"></player>
        <next-radio
          :categorySlug="categorySlug"
          :radioIdInCategory="radioIdInCategory"
        ></next-radio>
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
import NextRadio from "@/ui/components/RadioStation/NextRadio.vue";

export default {
  name: "RadioStation",
  components: {
    Tags,
    Player,
    NextRadio
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
