<template>
  <v-app>
    <Header />

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

.link {
  color: white !important;
  text-decoration: none;
  font-weight: bold;
}
</style>

<script>
import Header from "@/ui/components/_layout/Header.vue";
import Footer from "@/ui/components/_layout/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
