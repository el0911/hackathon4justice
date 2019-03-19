<template>
  <div>
    <div id="about" class="p-5">
      <div class="heading">Who Are We?</div>
      <div
        class="body"
      >We are an organisation located in Western Africa, partnering with CSOs and other federal security agencies to help fight crime. We make use of technology for this purpose bacause why not? Everyone is gaining more knowledge daily.</div>
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
            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="http://media1.santabanta.com/full1/SantaBanta%20Special/Terrorism/terrorism-5v.jpg"
                class="d-block w-100"
              >
              <div class="carousel-caption d-none d-md-block">
                <button class="btn btn-primary">
                  <router-link to="/bringbacktheconvicts">
                    Bring Back
                    The Convicts
                  </router-link>
                </button>
                <p>
                  Think of a solution
                  that could change the future of former terrorist offenders and violent
                  extremist prisoners by reintegrating them into their communities.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="http://mediad.publicbroadcasting.net/p/wvxu/files/styles/x_large/public/201701/hands-in-chains.jpeg"
                class="d-block w-100"
              >
              <div class="carousel-caption d-none d-md-block">
                <button class="btn btn-primary">
                  <router-link to>Think of the Blue Heart</router-link>
                </button>
                <p>
                  Think of a tech solution that enables relatives, family, friends or any other
                  person who is/was in touch with the victim to help them recognize and
                  escape their plight.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://themobileassociation.in/img/E-Waste-Mandatory-Compliance-The_Mobile_Association.jpg"
                class="d-block w-100"
              >
              <div class="carousel-caption d-none d-md-block">
                <button class="btn btn-default">
                  <router-link to>
                    Catch the E-Waste
                    Octopus
                  </router-link>
                </button>
                <p>
                  Think of a solution that will enable e-waste to be recycled or disposed of in
                  accordance with international and national laws – without endangering
                  communities and the environment or even in a way that is beneficial to society.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://blogs.iadb.org/ideas-matter/wp-content/uploads/sites/12/2016/11/Corruption-1.jpg"
                class="d-block w-100"
              >
              <div class="carousel-caption d-none d-md-block">
                <button class="btn btn-primary">
                  <router-link to>
                    Blow the Whistle on
                    Dirty Players
                  </router-link>
                </button>
                <p>
                  Think of ways and approaches that can help in dealing with
                  cases of match-fixing and illegal betting.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="http://davidsonlawtx.com/wp-content/uploads/2018/03/Thad-Davidson-Criminal-Defense-Attorney-Tyler-TX.jpg"
                class="d-block w-100"
              >
              <div class="carousel-caption d-none d-md-block">
                <button class="btn btn-primary">
                  <router-link to>
                    Break the Silence,
                    Prevent Violence
                  </router-link>
                </button>
                <p>
                  Think of a tech solution to improve justice for children and to ensure
                  that children are better served and protected by the justice system,
                  including the security and social welfare sector.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://ak6.picdn.net/shutterstock/videos/9918656/thumb/1.jpg"
                class="d-block w-100"
              >
              <div class="carousel-caption d-none d-md-block">
                <button class="btn btn-primary">
                  <router-link to>Inscribe the Bribe</router-link>
                </button>
                <p>
                  Think of a solution could act as a sort of i-report that allows people
                  from different parts of the country to contribute/lay complains on their
                  corruption experience
                </p>
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
}
.body {
  font-size: 28px;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

img {
  height: 600px;
}
.carousel-caption {
  background-color: rgb(202, 201, 201);
  color: black;
  font-size: 18px;
  font-weight: 300;
  opacity: 0.9;
  border-radius: 45px;
}
.btn {
  background-color: rgb(0, 0, 39);
  border-radius: 50px;
  border: black;
  opacity: 1 !important;
}
.btn:hover {
  background-color: rgb(0, 0, 39);
  opacity: 1 !important;
}
a {
  color: white;
  font-weight: bold;
  font-size: 20px;
}
a:hover {
  color: white;
  text-decoration: none;
}
#about {
  background-color: whitesmoke;
}
</style>
