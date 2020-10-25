<template>
  <v-btn
    color="ambar"
    :to="{
      name: 'RadioStation',
      params: { name: category.path, radioStationId: 1 }
    }"
  >
    {{ category.name }}
  </v-btn>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    category: Object
  }
};
</script>
