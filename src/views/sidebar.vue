<template>
  <div class="sidebar" v-if="sidebarVisible">
    <hr>
    <div class="row">
      <div class="col">
        <router-link :to="{name: 'coach'}" exact>
          <div class="one">
            <span>Coaches/Mentors</span>
          </div>
        </router-link>
      </div>
    </div>
    <hr>

    <div class="row">
      <div class="col">
        <router-link :to="{name: 'finance'}" exact>
          <div class="one">Connect To A Financial Institutuion</div>
        </router-link>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col">
        <router-link to="/deletedContacts" exact>
          <div class="one">Find A Job</div>
        </router-link>
      </div>
    </div>
    <hr>
  </div>
</template>



<script>
export default {
  computed: {
    sidebarVisible() {
      return this.$store.getters.getSidebarVisibility;
    }
  }
};
</script>

<style scoped>
.one:hover {
  background-color: rgb(236, 230, 230);
  border-radius: 0 25px 25px 0;
  text-decoration: none;
}
a.router-link-exact-active {
  color: red;
  max-height: 3px;
  width: 200px;
}
a:hover {
  text-decoration: none;
}
a {
  color: rgb(61, 58, 58);
}
.one {
  padding: 10px;
}
.sidebar {
  max-width: 250px;
  font-weight: bold;
  font-size: 15px;
  font-family: sans-serif;
  padding: 7px;
  transition: 0.5s;
}
.create {
  padding: 7px;
}
.btn {
  background-color: white;
  border: white;
  border-radius: 25px;
  font-family: sans-serif;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  color: rgb(109, 102, 102);
  margin: 20px;
}
.btn:hover {
  color: rgb(109, 102, 102);
}
.mdi {
  color: grey;
}
.mdi::before {
  font-size: 20px;
}
.fans {
  left: 50px;
  position: relative;
}
</style>