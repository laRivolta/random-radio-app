<template>
  <v-col :cols="4">
    <v-btn :to="nextRadioStation" color="purple" class="white--text" x-large>
      <v-icon dark>
        mdi-cached
      </v-icon>
      ¡Otra!
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: "NextRadio",
  props: {
    categorySlug: String,
    radioIdInCategory: Number
  },
  data() {
    return {
      nextRadioStation: `/category/${this.categorySlug}/${this.radioIdInCategory + 1}`
    };
  }
};
</script>
