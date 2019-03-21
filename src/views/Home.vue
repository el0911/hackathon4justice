<template>
  <div>
    <div id="about" class="p-5">
      <div class="heading">Who Are We?</div>
      <div
        class="body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</div>
      <br>
      <br>
    </div>
    <div id="whatwedo">
      <div class="bd-example">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.lebmash.org/wp-content/uploads/2017/05/BTS-Mug-design.jpg"
                class="d-block w-100"
              >
              <div
                class="carousel-caption d-none d-md-block"
              >We're shattering all chains, mending all the pain.</div>
            </div>
            <div class="carousel-item">
              <img
                src="http://www.uucheyenne.org/wp-content/uploads/2017/10/breaking-the-silence.jpg"
                class="d-block w-100"
              >
              <div class="carousel-caption d-none d-md-block">Fight... It's time to be free.</div>
            </div>
            <div class="carousel-item">
              <img
                src="https://anxietyunited.com/wp-content/uploads/2018/02/TimeToTalk-768x406.jpg"
                class="d-block w-100"
              >
              <div
                class="carousel-caption d-none d-md-block"
              >Speak Up! You have no right to silence.</div>
            </div>
            <div class="carousel-item">
              <img
                src="https://i.cbc.ca/1.4358398.1520560871!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/me-too.jpg"
                class="d-block w-100"
              >
              <div
                class="carousel-caption d-none d-md-block"
              >You're not alone. We're here to help and support you.</div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="sign-up">
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <v-btn outline round color="teal" to="/breakthesilence">Sign Up</v-btn>
        </v-flex>
      </v-layout>
    </div>
    <hr>
    <div id="testimonial">
      <div class="body1">
        <v-layout row wrap>
          <v-flex xs12 class="text-xs-center">
            <div class="container">
              <div class="row">
                <div class="col-md-8 col-sm-8 col-center m-auto">
                  <h2>Testimonials</h2>
                  <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <!-- Carousel indicators -->
                    <ol class="carousel-indicators">
                      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                      <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <!-- Wrapper for carousel items -->
                    <div class="carousel-inner">
                      <div class="item carousel-item active">
                        <div class="img-box">
                          <img
                            src="https://cdn.pixabay.com/photo/2014/04/09/17/47/girl-320262_960_720.png"
                            alt
                          >
                        </div>
                        <p
                          class="testimonial"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                        <p class="overview">
                          <b>Paula Wilson</b>, Media Analyst
                        </p>
                      </div>
                      <div class="item carousel-item">
                        <div class="img-box">
                          <img
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                            alt
                          >
                        </div>
                        <p
                          class="testimonial"
                        >Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
                        <p class="overview">
                          <b>Antonio Moreno</b>, Survivor
                        </p>
                      </div>
                      <div class="item carousel-item">
                        <div class="img-box">
                          <img
                            src="https://media.istockphoto.com/photos/robots-beauty-picture-id691407116?k=6&m=691407116&s=612x612&w=0&h=MQcYyk9qtFrPLJMXzfffnpmf67d4dWNJ_sqrcRPaU_U="
                            alt
                          >
                        </div>
                        <p
                          class="testimonial"
                        >Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                        <p class="overview">
                          <b>Michaela Holz</b>, Survivor
                        </p>
                      </div>
                    </div>
                    <!-- Carousel controls -->
                    <a
                      class="carousel-control left carousel-control-prev"
                      href="#myCarousel"
                      data-slide="prev"
                    >
                      <i class="fa fa-angle-left"></i>
                    </a>
                    <a
                      class="carousel-control right carousel-control-next"
                      href="#myCarousel"
                      data-slide="next"
                    >
                      <i class="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </div>
    <back-to-top text="Back to top" visibleoffset="500"></back-to-top>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.heading {
  font-size: 48px;
  text-align: center;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: whitesmoke;
}

.body {
  font-size: 25px;
  text-align: center;
  font-family: sans-serif;
  font-weight: 400;
  color: whitesmoke;
}
img {
  height: 50rem;
}

.carousel-caption {
  background-color: rgba(3, 3, 3, 0.705);
  color: white;
  font-size: 24px;
  font-weight: bold;
  opacity: 0.9;
  border-radius: 45px;
  font-family: cursive;
}
.btn {
  background-color: black;
  border-radius: 50px;
  border: black;
  opacity: 1 !important;
}
.btn:hover {
  background-color: black;
  opacity: 1 !important;
}
a {
  color: white;
  font-weight: bold;
  font-size: 20px;
}
a:hover {
  color: turquoise;
  text-decoration: none;
}
#about {
  background-color: teal;
}

h2 {
  color: #333;
  text-align: center;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  position: relative;
  margin: 30px 0 60px;
}
h2::after {
  content: "";
  width: 100px;
  position: absolute;
  margin: 0 auto;
  height: 3px;
  background: teal;
  left: 0;
  right: 0;
  bottom: -10px;
}
.col-center {
  margin: 0 auto;
  float: none !important;
}
.carousel {
  margin: 50px auto;
  padding: 0 70px;
}
.carousel .item {
  color: #999;
  font-size: 20px;
  text-align: center;
  overflow: hidden;
  min-height: 290px;
}
.carousel .item .img-box {
  width: 135px;
  height: 135px;
  margin: 0 auto;
  padding: 5px;
  border: 3px solid gold;
  border-radius: 50%;
}
.carousel .img-box img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}
.carousel .testimonial {
  padding: 30px 0 10px;
}
.carousel .overview {
  font-style: italic;
}
.carousel .overview b {
  text-transform: uppercase;
  color: #7aa641;
}
.carousel .carousel-control {
  width: 40px;
  height: 40px;
  margin-top: -20px;
  top: 50%;
  background: none;
}
.carousel-control i {
  font-size: 68px;
  line-height: 42px;
  position: absolute;
  display: inline-block;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 0 3px 3px black, 0 0 0 #000;
}
.carousel .carousel-indicators {
  bottom: -40px;
}
.carousel-indicators li,
.carousel-indicators li.active {
  width: 20px;
  height: 5px;
  margin: 1px 3px;
  border-radius: 50%;
}
.carousel-indicators li {
  background: #999;
  border-color: transparent;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.2);
}
.carousel-indicators li.active {
  background: #555;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.2);
}
</style>
