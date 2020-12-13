<template>
  <v-row>
    <v-col v-for="tag in splittedTags" :key="tag" cols="4" sm="s">
      <v-btn class="font-weight-bold" icon disabled color="purple">
        {{ tag }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Tags",
  props: {
    rawTags: String
  },
  computed: {
    splittedTags: {
      get: () => this.rawTags.split(",")
    }
  }
};
</script>
