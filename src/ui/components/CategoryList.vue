<template>
  <div class="category-list">
    <category-item
      class="mx-2"
      v-for="item in categories"
      :category="item"
      :key="item.id"
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
