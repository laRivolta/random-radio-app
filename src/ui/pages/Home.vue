<template>
  <v-container fluid>
    <v-sheet color="grey lighten-4" class="pa-4">
      <span class="title">¡Has llegado a Random Radio!</span>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" text v-bind="attrs" v-on="on">
            ¿Qué es esto?
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline grey lighten-2">
            ¿Qué es esto?
          </v-card-title>

          <v-card-text>
            Random Radio es un proyecto personal. Permite escuchar y descubrir
            radios que ofrecen el tipo de música que nos apetece escuchar en
            cada momento. De momento solo tiene radios de música españolas.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              Entendido!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-sheet>
    <v-sheet class="pa-4">
      <img
        alt="random radio"
        height="300"
        width="400"
        src="../assets/main_radio.jpg"
      />
    </v-sheet>
    <v-sheet color="grey lighten-4" class="pa-4">
      <span class="title">¿Qué te apetece?</span>
      <category-list />
    </v-sheet>
  </v-container>
</template>

<script>
import CategoryList from "@/ui/components/CategoryList.vue";

export default {
  name: "Home",
  components: {
    CategoryList
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>
