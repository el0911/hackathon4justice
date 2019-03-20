<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 —
        <strong>Vuetify</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "mdi mdi-facebook",
      "mdi mdi-twitter",
      "mdi mdi-google-plus",
      "mdi mdi-linkedin",
      "mdi mdi-instagram"
    ]
  })
};
</script>

<style scoped>
.app-footer {
  font-size: 16px;
  color: rgb(0, 0, 0);
  font-weight: 200;
  background-color: rgba(255, 217, 0, 0.52);
  padding: 4rem;
  position: fixed;
  min-width: 100vw;
  /* min-height: 50px; */
}
.mdi {
  color: rgb(0, 0, 39);
  padding: 5px;
}
.mdi::before {
  font-size: 30px;
}
.mdi:hover {
  color: rgba(255, 0, 0, 0.438);
}
.web {
  padding-top: 25px;
}
.yellow {
  opacity: 0;
}
</style>
