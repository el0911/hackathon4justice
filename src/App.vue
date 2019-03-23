<template>
  <div>
    <app-header></app-header>
    <div class="row content">
      <div class="col">
        <router-view/>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./views/header.vue";
// import footer from "./views/footer.vue";

export default {
  components: {
    "app-header": header,
    // "app-footer": footer
  }
};
</script>

<style scoped>
@import url("//cdn.materialdesignicons.com/3.5.95/css/materialdesignicons.min.css");

.content {
  min-height: 82vh;
}
</style>
