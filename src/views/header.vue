<template>
  <div>
    <!-- <nav class="navbar navbar-expand-lg navbar-dark">
    

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
        <ul class="navbar-nav mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">
              <div class="navbar-brand" href="#">
                <img
                  src="../assets/Untitled design (2).png"
                  width="40"
                  height="40"
                  class="d-inline-block align-top"
                  alt
                >
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#whatwedo">What We Do</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact Us</a>
          </li>
          <li class="nav-item">
            <router-link to="/stayupdated" class="nav-link">Stay Updated</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimonial">Testimonials</a>
          </li>
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">Profile</router-link>
          </li>
          <li class="nav-item">
            <login></login>
          </li>
          <li class="nav-item">
            <signup></signup>
          </li>
        </ul>
      </div>
    </nav> -->
    
<nav id="navbar-example2" class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#game">The Game</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#goals">Our Goals</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#us">About Us</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">PLay Game</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#one">Login</a>
        <a class="dropdown-item" href="#two">Register</a>
        <!-- <div role="separator" class="dropdown-divider"></div>
        <a class="dropdown-item" href="#three">three</a> -->
      </div>
    </li>
  </ul>
</nav>
<div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
  <div id="game">
    <div class="full_page row">
      <div class='col-md-6 sider' >
          <h3>
            Teach kids
          </h3>
          <h2>
            LAW!!!!
          </h2>
          <button type="button" class="btn btn-primary" > Try now?</button>
      </div>

      <div class="col-md-6">
        <img 
        src="../assets/landing1.png"
        
        class="mainim"
        alt
      >

      <!-- <img  
      src="../assets/landing3.png"
      
      class="mainim"
      alt
    > -->
      </div>

    </div>
  </div>

  <div id="goals"  class="row page70">
    <div class="col-md-6" >
      <img 
      src="../assets/kid.jpg"
      
      class="mainim"
      alt
    >
    </div>
    <div class="col-md-6 word">
      <h3>
        Our Goals
      </h3>
      <p>
        lorem * 20
      </p>
    </div>
  </div>
  <div id="us">
    <div class="container">
      <div class="at-section">
        <div class="at-section__title">The Team</div>
      </div>
      <div class="at-grid" data-column="3">
        <div class="at-column">
          <div class="at-user">
            <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"></div>
            <div class="at-user__name">Aaron Rossi</div>
            <div class="at-user__title">CEO &amp; Co-Founder</div>
            <ul class="at-social">
              <li class="at-social__item"><a href="">
                  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
                  </svg></a></li>
              <li class="at-social__item"><a href="">
                  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
                  </svg></a></li>
              <li class="at-social__item"><a href="">
                  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>
                  </svg></a></li>
            </ul>
          </div>
        </div>
      
       
        
        <div class="at-column">
          <div class="at-user">
            <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"></div>
            <div class="at-user__name">Philip Satemburgo</div>
            <div class="at-user__title">Community Manager</div>
            <ul class="at-social">
              <li class="at-social__item"><a href="">
                  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
                  </svg></a></li>
              <li class="at-social__item"><a href="">
                  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
                  </svg></a></li>
              <li class="at-social__item"><a href="">
                  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>
                  </svg></a></li>
            </ul>
          </div>
        </div>
        <div class="at-column">
          <div class="at-user">
            <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/marcogomes/128.jpg"></div>
            <div class="at-user__name">George Petty</div>
            <div class="at-user__title">Lead Designer</div>
            <ul class="at-social">
              <li class="at-social__item"><a href="">
                  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
                  </svg></a></li>
              <li class="at-social__item"><a href="">
                  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
                  </svg></a></li>
              <li class="at-social__item"><a href="">
                  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>
                  </svg></a></li>
            </ul>
          </div>
        </div>
  
   
      </div>
    </div>
  </div>
 
</div>
  </div>
</template>

<script>
import login from "./login.vue";
import signup from "./signup.vue";

export default {
  components: {
    login: login,
    signup: signup
  },
  data: {
    bkClass: 'bk',
    shower:false,
  },
  methods: {
    sidebarShow() {
      this.$store.commit("sidebarToggle");
    }
  },
  mounted:function () {
    this.$nextTick(function () {

    

})

  },
  computed: {
    image() {
      return this.$store.state.picture;
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page70{
  height: 70vh;
}

.page70 .word{
  padding-top: 155px
}

.full_page{
  height: 100vh;
}

.sider{
  /* text-align: -webkit-center; */
  line-height: 65px;
  padding: 124px;
  font-weight: 200 !important;
}

.bk {
  transition: all 0.1s ease-out;
}

.sider h3{
  font-size: 50px;
}

.row{
  display: flex
}

.at-section__title {
  margin: 0 0 70px;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 2.625rem;
  text-align: center;
}
.at-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #fff;
  border: 1px solid #e2e9ed;
}
.at-grid[data-column="1"] .at-column {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  flex-basis: 100%;
}
.at-grid[data-column="2"] .at-column {
  width: 50%;
  max-width: 50%;
  min-width: 50%;
  flex-basis: 50%;
}
.at-grid[data-column="3"] .at-column {
  width: 33.33333%;
  max-width: 33.33333%;
  min-width: 33.33333%;
  flex-basis: 33.33333%;
}
.at-grid[data-column="4"] .at-column {
  width: 25%;
  max-width: 25%;
  min-width: 25%;
  flex-basis: 25%;
}
.at-grid[data-column="5"] .at-column {
  width: 20%;
  max-width: 20%;
  min-width: 20%;
  flex-basis: 20%;
}
.at-grid[data-column="6"] .at-column {
  width: 16.66667%;
  max-width: 16.66667%;
  min-width: 16.66667%;
  flex-basis: 16.66667%;
}
.at-grid[data-column="7"] .at-column {
  width: 14.28571%;
  max-width: 14.28571%;
  min-width: 14.28571%;
  flex-basis: 14.28571%;
}
.at-grid[data-column="8"] .at-column {
  width: 12.5%;
  max-width: 12.5%;
  min-width: 12.5%;
  flex-basis: 12.5%;
}
.at-grid[data-column="9"] .at-column {
  width: 11.11111%;
  max-width: 11.11111%;
  min-width: 11.11111%;
  flex-basis: 11.11111%;
}
.at-column {
  z-index: 0;
  position: relative;
  background: #fff;
  box-shadow: 0 0 0 1px #e2e9ed;
  padding: 10px;
  box-sizing: border-box;
  transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0.2s ease;
}
.at-column:before {
  content: "";
  display: block;
  padding-top: 100%;
}
.at-column:hover {
  z-index: 1;
  box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
  transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0s ease;
}
.at-column:hover .at-social {
  margin: 16px 0 0;
  opacity: 1;
}
@media (max-width: 800px) {
  .at-column {
    width: 50% !important;
    max-width: 50% !important;
    min-width: 50% !important;
    flex-basis: 50% !important;
  }
}
@media (max-width: 600px) {
  .at-column {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    flex-basis: 100% !important;
  }
}

.mainim{
  width: 493px;
    position: absolute;
    height: 500px;
    right: 24%;
    top: 100px;
}
.at-user {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}
.at-user__avatar {
  width: 98px;
  height: 98px;
  border-radius: 100%;
  margin: 0 auto 20px;
  overflow: hidden;
}
.at-user__avatar img {
  display: block;
  width: 100%;
  max-width: 100%;
}
.at-user__name {
  color: #313435;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.625rem;
}
.at-user__title {
  color: #6f808a;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 2.375rem;
}
.at-social {
  margin: 0 0 -18px;
  opacity: 0;
  transition: margin 0.2s ease, opacity 0.2s ease;
}
.at-social__item {
  display: inline-block;
  margin: 0 10px;
}
.at-social__item a {
  display: block;
}
.at-social__item svg {
  fill: #515f65;
  display: block;
  height: 18px;
  transition: fill 0.2s ease;
}
.at-social__item svg:hover {
  fill: #788d96;
}
body {
  background: #fff;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  max-width: 1170px;
  width: 100%;
  margin: 100px auto;
  padding: 0 20px;
  box-sizing: border-box;
  transform-origin: top center;
  transform: scale(0.8);
}



li {
  display: inline-block;
  margin: 0 20px;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
a {
  text-decoration: none;
  padding: 6px 8px;
  position: relative;
}
a:hover {
  text-decoration: none;
  /* background-color: rgba(223, 209, 13, 0.699); */
  border-bottom: 1px solid lightskyblue;
  border-radius: 0;
  min-width: 5vh;
}
a:active {
  color: red !important;
}
.navbar {
  background-color: orangered;
}

.navbar-toggler-icon {
  color: black;
}
.image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 10px;
  /* background-color: red; */
  position: absolute;
}
.navbar-brand {
  border-radius: 50%;
}
</style>
