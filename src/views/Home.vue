<template>
  <div>
    <infinite-slide-bar :barStyle="{ background: 'turquoise', padding: '5px 0' }">
      <span style="color: black;" class="text">| Know Your Rights as a Child Today!</span>
    </infinite-slide-bar>
    <v-parallax height="350" src="https://ak1.picdn.net/shutterstock/videos/33005371/thumb/1.jpg"></v-parallax>
<br>
<br>
    <button class="btn btn-block px-3">Play The Know Your Rights Game</button>

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
  }, 
  
  computed: {
  
  }
};
</script>

<style scoped>
a {
  color: white;
  font-weight: bold;
  font-size: 20px;
}
a:hover {
  color: turquoise;
  text-decoration: none;
}

.text{
  font-family: cursive;
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
.btn{
  background: #eb94d0;
/* to create the gradients */

  background-image: -webkit-linear-gradient(top, #eb94d0, #2079b0);
  background-image: -moz-linear-gradient(top, #eb94d0, #2079b0);
  background-image: -ms-linear-gradient(top, #eb94d0, #2079b0);
  background-image: -o-linear-gradient(top, #eb94d0, #2079b0);
  background-image: linear-gradient(to bottom, #eb94d0, #2079b0);

/* to give the curved edge for the btn */

-webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius:15px;

text-shadow: 3px 2px 1px #9daef5;
  -webkit-box-shadow: 6px 5px 24px #666666;
  -moz-box-shadow: 6px 5px 24px #666666;
  box-shadow: 6px 5px 24px #666666;

font-family: Arial;
  color: #fafafa;
  font-size: 18px;
  padding: 10px;
  text-decoration: none;
}

/*button on hover*/

.btn:hover {

  background: #2079b0;

  background-image: -webkit-linear-gradient(top, #2079b0, #eb94d0);
  background-image: -moz-linear-gradient(top, #2079b0, #eb94d0);
  background-image: -ms-linear-gradient(top, #2079b0, #eb94d0);
  background-image: -o-linear-gradient(top, #2079b0, #eb94d0);
  background-image: linear-gradient(to bottom, #2079b0, #eb94d0);

  text-decoration: none;
}
</style>
