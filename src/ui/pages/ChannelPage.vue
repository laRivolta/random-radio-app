<template>
  <div>
    <div>
      <v-toolbar color="amber" flat dense>
        <v-btn color="grey" icon @click="goBack()">
          <v-icon dark>
            mdi-arrow-left
          </v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <category-list />
      </v-toolbar>
    </div>
    <radio-station
      :radioStation="currentRadioStation"
      :categorySlug="currentRadioCategorySlug"
      :radioIdInCategory="currentRadioIdInCategory"
    ></radio-station>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategoryList from "@/ui/components/CategoryList.vue";
import RadioStation from "@/ui/components/RadioStation/RadioStation.vue";

export default {
  name: "ChannelPage",
  components: {
    CategoryList,
    RadioStation
  },
  computed: {
    ...mapGetters("categories", ["getRadioByCategorySlugAndRadioId"]),
    currentRadioStation: {
      get() {
        return this.getRadioByCategorySlugAndRadioId(
          this.currentRadioCategorySlug,
          this.currentRadioIdInCategory
        );
      },
      set(otherRadioStation) {
        this.currentRadioStation = otherRadioStation;
      }
    },
    currentRadioIdInCategory: {
      get() {
        return this.$route.params.radioIdInCategory;
      }
    },
    currentRadioCategorySlug: {
      get() {
        return this.$route.params.categorySlug;
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>
