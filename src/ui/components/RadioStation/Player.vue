<template>
  <v-col :cols="8">
    <audio id="radio" tabindex="0" controls class="hidden" preload="none">
      <source :src="radioLink()" />
    </audio>
  </v-col>
</template>

<script>
export default {
  name: "Player",
  props: {
    link1: String,
    link2: String
  },
  mounted() {
    this.playRadio();
  },
  methods: {
    radioLink() {
      return this.link1 || this.link2;
    },
    playRadio() {
      var player = document.getElementById("radio");
      player.play();
      player.focus();
    }
  }
};
</script>
