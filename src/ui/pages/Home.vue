<template>
  <v-container fluid>
    <v-sheet color="grey lighten-4" class="pa-4">
      <span class="title">Welcome to Random Radio!</span>
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
      <span class="title">Choose your mood:</span>
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
  }
};
</script>
