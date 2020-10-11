<template>
  <div>
    <div>
      <a href="#" @click="this.$router.back()">{{ "Back" }}</a>
      <p>{{ $route.params.name }}</p>
    </div>
    <div>
      The radio
    </div>
    <button>Next random radio station</button>
    <div>
      <p>Name: Chocolate FM</p>
      <p>Tags: HD, CHR, pop, latino reggaeton, latin pop, dance, trap</p>
    </div>
    {{ radioStations }}
  </div>
</template>

<script>
export default {
  name: "CategoryDetail"
};
</script>

<style scoped></style>
