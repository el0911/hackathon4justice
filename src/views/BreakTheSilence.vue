<template>
  <div>
    <div>
      <infinite-slide-bar :barStyle="{ background: 'teal', padding: '5px 0' }">
        <span style="color: #fff;" class="text">| Sign Up as A Survivor Lawyer Today!</span>
        
        <span style="color: #fff;" class="text">| Connect With A Reputable Firm |</span>
      </infinite-slide-bar>
    </div>
    <div class="row">
      <div class="col-2" v-if="sidebarVisible">
        <sidebar/>
      </div>
      <div class="col">
        <!-- <div class="bring-down">    . -->
        <router-view></router-view>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./sidebar.vue";
export default {
  components: {
    sidebar
  },
  computed: {
    sidebarVisible() {
      return this.$store.getters.getSidebarVisibility;
    }
  }
};
</script>

<style scoped>
.bring-down {
  margin-top: 90px;
}
.text {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  padding: 250px;
}
</style>