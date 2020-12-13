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
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      currentRadioStation: Object,
      currentRadioIdInCategory: parseInt(this.$route.params.radioIdInCategory),
      currentRadioCategorySlug: this.$route.params.categorySlug
    };
  },
  created() {
    this.currentRadioStation = this.getRadioByCategorySlugAndRadioId(
      this.currentRadioCategorySlug,
      this.currentRadioIdInCategory
    );
  },
  computed: {
    ...mapGetters("categories", ["getRadioByCategorySlugAndRadioId"])
  },
  methods: {
    goBack() {
      /*var player = document.getElementById("radio");
      player.pause();
      player.currentTime = 0;
      player.src = "";*/
      this.$router.push("/");
    }
  }
};
</script>
