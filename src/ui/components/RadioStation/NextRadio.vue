<template>
  <div class="player-button-wrapper">
    <v-btn class="player-button" :to="nextRadioStation">¡Otra radio!</v-btn>
  </div>
</template>

<script>
export default {
  name: "NextRadio",
  props: {
    categorySlug: String,
    radioIdInCategory: Number
  },
  computed: {
    nextRadioStation: {
      get() {
        return `/category/${this.categorySlug}/${this.radioIdInCategory + 1}`;
      }
    }
  }
};
</script>

<style lang="scss">
.player-button-wrapper {
  margin: auto;
  width: 50%;
}
.player-button {
  background-color: transparent !important;
  box-shadow: none;
}
</style>
