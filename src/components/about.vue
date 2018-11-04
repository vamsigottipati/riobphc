
<template>

    <div class="body">
        <h1 class="site-heading text-center text-white d-none d-lg-block">
          <span class="site-heading-upper text-primary mb-3">Get To Know About</span>
          <span class="site-heading-lower">RIO Services</span>
        </h1>

        <section class="page-section clearfix">
          <div class="container">
            <div class="intro">
              <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="../assets/capAm.jpg" alt="">
              <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                <h2 class="section-heading mb-4">
                  <span class="section-heading-upper">Support Head</span>
                  <span class="section-heading-lower">Main Heading</span>
                </h2>
                <p class="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori
                </p>
                <div class="intro-button mx-auto">
                  <a class="btn btn-primary btn-xl" href="./auth/signup">SignUp Today</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="page-section cta">

        <div class="row">
          <div class="col-md-5"></div>
          <div class="col-md-3"> 
            <h2>Our Dedicated Team</h2>
          </div>
        </div>

          <div class="grid">
            <figure class="effect-lily">
              <img src="../assets/bpanther.jpg" alt="img01"/>
              <figcaption>
                <h2>Person 1</h2>
                <p>Some description</p>
              </figcaption>			
            </figure>

            <figure class="effect-lily">
              <img src="../assets/bpanther.jpg" alt="img02"/>
              <figcaption>
                <h2>Person 2</h2>
                <p>Some description about 2</p>
              </figcaption>			
            </figure>

            <figure class="effect-lily">
              <img src="../assets/bpanther.jpg" alt="img03"/>
              <figcaption>
                <h2> Person 3</h2>
                <p>Some other description</p>
              </figcaption>			
            </figure>

            <figure class="effect-lily">
              <img src="../assets/bpanther.jpg" alt="img04"/>
              <figcaption>
                <h2>Person 4</h2>
                <p>Some description 4</p>
              </figcaption>			
            </figure>

          </div>
        </section>

  <section class="page-section">
        <div class="container">
          <div class="product-item">
            <div class="product-item-title d-flex">
              <div class="bg-faded p-5 d-flex ml-auto rounded">
                <h2 class="section-heading mb-0">
                  <span class="section-heading-upper">Supportinh head</span>
                  <span class="section-heading-lower">Main Header</span>
                </h2>
              </div>
            </div>
            <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="../assets/dstrange.jpg" alt="">
            <div class="product-item-description d-flex mr-auto">
              <div class="bg-faded p-5 rounded">
                <p class="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore modi quae fuga fugiat eum omnis optio asperiores placeat beatae blanditiis, voluptatibus, quas facilis? Consectetur cumque atque autem aspernatur sed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section">
        <div class="container">
          <div class="product-item">
            <div class="product-item-title d-flex">
              <div class="bg-faded p-5 d-flex mr-auto rounded">
                <h2 class="section-heading mb-0">
                  <span class="section-heading-upper">Support Header</span>
                  <span class="section-heading-lower">Image &amp; Text</span>
                </h2>
              </div>
            </div>
            <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="../assets/bpanther2.jpg" alt="">
            <div class="product-item-description d-flex ml-auto">
              <div class="bg-faded p-5 rounded">
                <p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus magni quod, placeat saepe corrupti amet qui quae nihil culpa harum perferendis obcaecati fuga tempore nemo vero quam, dicta quibusdam sint?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section class="page-section cta">
          <div class="container">
            <div class="row">
              <div class="col-xl-9 mx-auto">
                <div class="cta-inner text-center rounded">
                  <h2 class="section-heading mb-4">
                    <span class="section-heading-upper">Our Promise</span>
                    <span class="section-heading-lower">To You</span>
                  </h2>
                  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
</template>

<script>

export default {
  name: 'rent',
  props: {
  },
  components: {
  },
  directives: {
  },
  data () {
    return {
      opened: true,
    }
  },
  computed: {
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Raleway');



.body {
/*  font-family: 'Raleway';
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(47, 23, 15, 0.65))), url("../assets/bgImg5.jpg");
  background: linear-gradient(rgba(47, 23, 15, 0.65)), url("../assets/bgImg5.jpg"); 
  background-attachment: fixed;
  background-position: center;
  background-size: cover; */

}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Raleway';
}

p {
  line-height: 1.75;
}

.text-faded {
  color: rgba(255, 255, 255, 0.3);
}

.site-heading {
  margin-top: 5rem;
  margin-bottom: 5rem;
  text-transform: uppercase;
  line-height: 1;
  font-family: 'Raleway';
}

.site-heading .site-heading-upper {
  display: block;
  font-size: 2rem;
  font-weight: 800;
}

.site-heading .site-heading-lower {
  font-size: 5rem;
  font-weight: 100;
  line-height: 4rem;
  color: #34495e
}

.page-section {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.section-heading {
  text-transform: uppercase;
}

.section-heading .section-heading-upper {
  display: block;
  font-size: 1rem;
  font-weight: 800;
}

.section-heading .section-heading-lower {
  display: block;
  font-size: 3rem;
  font-weight: 100;
}

.bg-faded {
  background-color: rgba(255, 255, 255, 0.85);
}

#mainNav {
  background-color: rgba(47, 23, 15, 0.9);
  font-family: 'Raleway';
  height: 10vh;
}

#mainNav .navbar-brand {
  color: #e6a756;
}

#mainNav .navbar-nav .nav-item .nav-link {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 800;
  font-size: 1.4rem;
}

#mainNav .navbar-nav .nav-item.active .nav-link {
  color: #e6a756;
}

@media (min-width: 992px) {
  #mainNav .navbar-nav .nav-item .nav-link {
    font-size: 1.4rem;
  }
  #mainNav .navbar-nav .nav-item .nav-link:hover {
    color: rgba(255, 255, 255, 0.4);
  }
  #mainNav .navbar-nav .nav-item.active .nav-link:hover {
    color: #e6a756;
  }
}

.btn-xl {
  font-weight: 700;
  font-size: 0.8rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

.intro {
  position: relative;
}

@media (min-width: 992px) {
  .intro .intro-img {
    width: 75%;
    float: right;
  }
  .intro .intro-text {
    left: 0;
    width: 60%;
    margin-top: 3rem;
    position: absolute;
  }
  .intro .intro-text .intro-button {
    width: 100%;
    left: 0;
    position: absolute;
    bottom: -2rem;
  }
}

@media (min-width: 1200px) {
  .intro .intro-text {
    width: 45%;
  }
}

.cta {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: rgba(230, 167, 86, 0.9);
 /* margin-bottom: -10vh; */
}

.cta .cta-inner {
  position: relative;
  padding: 3rem;
  margin: 0.5rem;
  background-color: rgba(255, 255, 255, 0.85);
}

.cta .cta-inner:before {
  border-radius: 0.5rem;
  content: '';
  position: absolute;
  top: -0.5rem;
  bottom: -0.5rem;
  left: -0.5rem;
  right: -0.5rem;
  border: 0.25rem solid rgba(255, 255, 255, 0.85);
}

@media (min-width: 992px) {
  .about-heading .about-heading-img {
    position: relative;
    z-index: 0;
  }
  .about-heading .about-heading-content {
    margin-top: -5rem;
    position: relative;
    z-index: 1;
  }
}

@media (min-width: 992px) {
  .product-item .product-item-title {
    position: relative;
    z-index: 1;
    margin-bottom: -3rem;
  }
  .product-item .product-item-img {
    position: relative;
    z-index: 0;
    max-width: 60vw;
  }
  .product-item .product-item-description {
    position: relative;
    z-index: 1;
    margin-top: -3rem;
    max-width: 50vw;
  }
}

.list-hours {
  font-size: 0.9rem;
}

.list-hours .list-hours-item {
  border-bottom: 1px solid rgba(230, 167, 86, 0.5);
  padding-bottom: .25rem;
  margin-bottom: 1rem;
  font-style: italic;
}

.list-hours .list-hours-item.today {
  font-weight: bold;
  color: #e6a756;
}

@media (min-width: 992px) {
  .list-hours {
    width: 50%;
    font-size: 1.1rem;
  }
}

.address strong {
  font-size: 1.2rem;
}

.footer {
  background-color: rgba(47, 23, 15, 0.9);
}

.text-primary {
  color: #e6a756 !important;
}

.bg-primary {
  background-color: #e6a756 !important;
}

.btn {
  -webkit-box-shadow: 0px 3px 3px 0px rgba(33, 37, 41, 0.1);
  box-shadow: 0px 3px 3px 0px rgba(33, 37, 41, 0.1);
}

.btn-primary {
  background-color: #e6a756;
  border-color: #e6a756;
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active {
  background-color: #df902a;
  border-color: #df902a;
}

.font-weight-light {
  font-weight: 100 !important;
}



/*  Card Effects -- Menbers */

.grid {
	overflow: hidden;
	margin: 0;
	padding: 0 0 0 0;
	width: 100%;
	list-style: none;
	text-align: center;
}

.grid figure {
	position: relative;
	z-index: 1;
	display: inline-block;
	overflow: hidden;
	margin: 1vh;
	width: 20%;
	height: 400px;
	background: #3085a3;
	text-align: center;
	cursor: pointer;
}

@media (max-width: 1200px) {
  .grid figure {
	position: relative;
	z-index: 1;
	display: inline-block;
	overflow: hidden;
	margin: 1vh;
	width: 35%;
	height: 400px;
	background: #3085a3;
	text-align: center;
	cursor: pointer;
}
}

@media (max-width: 1000px) {
  .grid figure {
	position: relative;
	z-index: 1;
	display: inline-block;
	overflow: hidden;
	margin: 1vh;
	width: 45%;
	height: 400px;
	background: #3085a3;
	text-align: center;
	cursor: pointer;
}
}

@media (max-width: 600px) {
  .grid figure {
	position: relative;
	z-index: 1;
	display: inline-block;
	overflow: hidden;
	margin: 1vh;
	width: 80%;
	height: 400px;
	background: #3085a3;
	text-align: center;
	cursor: pointer;
}
}

@media (max-width: 350px) {
  .grid figure {
	position: relative;
	z-index: 1;
	display: inline-block;
	overflow: hidden;
	margin: 1vh;
	width: 90%;
	height: 400px;
	background: #3085a3;
	text-align: center;
	cursor: pointer;
}
}


.grid figure img {
	position: relative;
	display: block;
	min-height: 100%;
	opacity: 0.8;
}

.grid figure figcaption {
	padding: 2em;
	color: #fff;
	text-transform: uppercase;
	font-size: 1.25em;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
	pointer-events: none;
}

.grid figure figcaption,
.grid figure a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure a {
	z-index: 1000;
	text-indent: 200%;
	white-space: nowrap;
	font-size: 0;
	opacity: 0;
}

.grid figure h2 {
	word-spacing: -0.15em;
	
	font-weight: 300;
}

.grid figure h2 span {
	font-weight: 800;
}

.grid figure h2,
.grid figure p {
	margin: 0;
}

.grid figure p {
	letter-spacing: 1px;
	font-size: 68.5%;
}

figure.effect-lily img {
	width: -webkit-calc(100% + 50px);
	width: calc(100% + 50px);
	opacity: 0.7;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: translate3d(-40px,0, 0);
	transform: translate3d(-40px,0,0);
}

figure.effect-lily figcaption {
	top: auto;
	bottom: 0;
	height: 50%;
	text-align: left;
}

figure.effect-lily h2,
figure.effect-lily p {
	-webkit-transform: translate3d(0,40px,0);
	transform: translate3d(0,40px,0);
}

figure.effect-lily h2 {
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
}

figure.effect-lily p {
	color: rgba(255,255,255,0.6);
	opacity: 0;
	-webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
	transition: opacity 0.2s, transform 0.35s;
}

figure.effect-lily:hover img,
figure.effect-lily:hover p {
	opacity: 1;
}

figure.effect-lily:hover img,
figure.effect-lily:hover h2,
figure.effect-lily:hover p {
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

figure.effect-lily:hover p {
	-webkit-transition-delay: 0.05s;
	transition-delay: 0.05s;
	-webkit-transition-duration: 0.35s;
	transition-duration: 0.35s;
}


</style>
