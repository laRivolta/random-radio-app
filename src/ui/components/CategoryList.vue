<template>
  <div class="category-list">
    <category-item
      class="mx-2"
      v-for="category in getAllCategories"
      :category="category"
      :key="category.id"
    >
      <v-spacer></v-spacer>
    </category-item>
  </div>
</template>

<script>
import CategoryItem from "@/ui/components/CategoryItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "CategoryList",
  components: {
    CategoryItem
  },
  computed: {
    ...mapGetters("categories", ["getAllCategories"])
  }
};
</script>
