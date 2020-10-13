<template>
  <li>
    <router-link
      :to="{
        name: 'RadioStation',
        params: { name: category.name, radioStationId: 1 }
      }"
    >
      {{ category.name }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    category: Object
  }
};
</script>

<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
