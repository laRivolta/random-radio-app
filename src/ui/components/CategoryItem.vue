<template>
  <v-btn
    color="ambar"
    :to="{
      name: 'ChannelPage',
      params: { categorySlug: category.slug, radioIdInCategory: 0 }
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
