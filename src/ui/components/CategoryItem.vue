<template>
  <v-btn
    color="ambar"
    :to="{
      name: 'RadioStation',
      params: { category: category.slug, radioStationId: 1 }
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
