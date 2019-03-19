<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="toggle">
        <i class="mdi mdi-menu" @click="sidebarShow"></i>
      </div>
      <a class="navbar-brand pl-5">
        <div class="image" :style="{backgroundImage: 'url('+img+')'}"></div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#whatwedo">What We Do</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#blog">Blog</a>
          </li>
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">Profile</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../assets/Untitleddesign(1).png")
    };
  },
  methods: {
    sidebarShow() {
      this.$store.commit("sidebarToggle");
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
  margin-left: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  display: inline-block;
  margin: 0 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
}
a:hover {
  text-decoration: none;
  color: white;
}
a:active {
  color: red !important;
}
.navbar {
  background-color: rgb(0, 0, 39);
}

.navbar-toggler-icon {
  color: black;
}
.image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 10px;
}
.mdi-menu {
  color: white;
}
.mdi-menu::before {
  font-size: 30px;
}
</style>
