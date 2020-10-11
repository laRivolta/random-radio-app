<template>
  <ul class="category-list">
    <category-item
      v-for="item in categories"
      :category="item"
      :key="item.id"
    ></category-item>
  </ul>
</template>

<script>
import CategoryItem from "@/ui/components/CategoryItem.vue";

export default {
  name: "CategoryList",
  components: {
    CategoryItem
  },
  data() {
    return {
      categories: [
        { id: 0, name: "Electronica" },
        { id: 1, name: "Hits" },
        { id: 2, name: "Past decades" },
        { id: 3, name: "Rock & friends" },
        { id: 4, name: "Relax" }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
