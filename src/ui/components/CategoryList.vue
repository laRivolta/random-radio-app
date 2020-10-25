<template>
  <div class="category-list">
    <category-item
      class="mx-2"
      v-for="category in $store.state.categories"
      :category="category"
      :key="category.id"
    >
      <v-spacer></v-spacer>
    </category-item>
  </div>
</template>

<script>
import CategoryItem from "@/ui/components/CategoryItem.vue";

export default {
  name: "CategoryList",
  components: {
    CategoryItem
  }
};
</script>
