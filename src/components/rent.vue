<template>
  <div>
  <div v-if="itemsLoaded">
    <navSide></navSide>
      <!-- CITY SELECTION OVERLAY --> 

          <div id="cityOverlay" class="overlay" v-if="citySelection == true">
            <a class="closebtn" @click.prevent="closeOverlay">&times;</a>
            <div class="overlay-content row">
              
              <h1 class="city1" @click.prevent="setCityHyd">Hyderabad</h1>
              <h1 class=" city2" @click.prevent="setCityChn">Chennai</h1>    
              <h1 class="city3" @click.prevent="setCityDelhi">Delhi</h1>
              <h1 class=" city4" @click.prevent="setCityKol">Kolkata</h1>
             
            </div>
          </div>


      <!-- CITY SELECTION OVERLAY END -->


      <!-- SIDEBAR -->

        <vuestic-widget class="sidebar">

          <div class="categoryFilter">
            <h4 >Category</h4> <br>
            <label class="container">Product1
              <input type="checkbox" value="product1" v-model="prodCategory">
              <span class="checkmark"></span>
            </label><br>
            <label class="container">Product2
              <input type="checkbox" value="product2" v-model="prodCategory">
              <span class="checkmark"></span>
            </label><br>
            <label class="container" >Product3
              <input type="checkbox" value="product3" v-model="prodCategory">
              <span class="checkmark"></span>
            </label><br>
            <label class="container" >Product4
              <input type="checkbox" value="product4" v-model="prodCategory">
              <span class="checkmark"></span>
            </label><br>
            <label class="container" >Product5
              <input type="checkbox" value="product5" v-model="prodCategory">
              <span class="checkmark"></span>
            </label><br>
            <label class="container">Product6
              <input type="checkbox" value="product6" v-model="prodCategory">
              <span class="checkmark"></span>
            </label><br>
            <label class="container" >Product7
              <input type="checkbox" value="product7" v-model="prodCategory">
              <span class="checkmark"></span>
            </label><br>
          </div><hr class="styledHr">
          <div class="locationFilter">
            <h4 >Location</h4> <br>
            <label class="container" >Hyderabad
              <input type="checkbox" >
              <span class="checkmark"></span>
            </label><br>
            <label class="container">Delhi
              <input type="checkbox">
              <span class="checkmark"></span>
            </label><br>
            <label class="container">Kolkata
              <input type="checkbox" >
              <span class="checkmark"></span>
            </label><br>
            <label class="container">Chennai
              <input type="checkbox">
              <span class="checkmark"></span>
            </label><br>
          </div><hr class="styledHr">
          <div class="distaceFilter">
            <h4 >Distance</h4> <br>
            <label class="container">0 - 5 Km
              <input type="checkbox" >
              <span class="checkmark"></span>
            </label><br>
            <label class="container">5 - 10 Km
              <input type="checkbox">
              <span class="checkmark"></span>
            </label><br>
            <label class="container">10 - 20 Km
              <input type="checkbox" >
              <span class="checkmark"></span>
            </label><br>
            <label class="container">20 -30 Km
              <input type="checkbox">
              <span class="checkmark"></span>
            </label><br> 
          </div><hr class="styledHr">
          <div class="priceFilter">
            <h4 >Price</h4> <br>
            <label class="container">0 - 100 ₹/day
              <input type="checkbox" >
              <span class="checkmark"></span>
            </label><br>
            <label class="container">100 - 200 ₹/day
              <input type="checkbox">
              <span class="checkmark"></span>
            </label><br>
            <label class="container">200 - 300 ₹/day
              <input type="checkbox" >
              <span class="checkmark"></span>
            </label><br>
            <label class="container">300 - 500 ₹/day
              <input type="checkbox">
              <span class="checkmark"></span>
            </label><br>  
            <label class="container">500 - 1000 ₹/day
              <input type="checkbox">
              <span class="checkmark"></span>
            </label><br>  
            <label class="container">1000 - 2000 ₹/day
              <input type="checkbox">
              <span class="checkmark"></span>
            </label><br>  
          </div><hr class="styledHr">
          <div class="typeFilter">
            <h4>Type</h4>
            <label class="container">Daily
              <input type="checkbox" >
              <span class="checkmark"></span>
            </label><br>
            <label class="container">Weekly
              <input type="checkbox">
              <span class="checkmark"></span>
            </label><br>
            <label class="container">Monthly
              <input type="checkbox" >
              <span class="checkmark"></span>
            </label><br>
          </div>

        </vuestic-widget>

      <!-- SIDEBAR END -->

    <main id="content" class="content" role="main">

      <!-- MAIN ITEM BOX -->

      <div class="box" ref="mainItem">
        <article v-for="listedItem in listedItems" :key="listedItem.id in listedItems" >
          <div :ref="listedItem.category.toLowerCase()">
            <img class="img" :src=' listedItem.itemImg '/>
            <div class="txt">
              <p>{{ listedItem.itemName }}</p>
              <span @click.prevent="rentalRoute(listedItem)" style="cursor:pointer;" class="main-link">Rent</span>
              <span class="main-link" style="margin-left:10px;cursor:pointer;" @click.prevent="showdetailsModal(listedItem)">More</span>
              <i class="fas fa-map-marker-alt animated "
                @mouseover="animationStatus = !animationStatus"
                @mouseleave="animationStatus = !animationStatus"
                @click.prevent="showLocation(listedItem)"
                style="float:right;font-size:1.7rem;color:#642B73;cursor:pointer"
              ></i>
            </div>
          </div>
        </article>
      </div>

      <!-- MAIN ITEM BOX END -->

      <!-- Models -->

        <!-- More Model -->

        <vuestic-modal :show.sync="show" v-bind:small="true" v-bind:force="true" ref="detailsModal" :cancelClass="'none'"
                      okText="Okay">
          <div slot="title">More Details</div>
          <div ref="detailsBody"></div>
        </vuestic-modal>

        <!-- More Model End-->

        <!-- Rent Modal -->

        <rentalModal :show.sync="show" v-bind:large="true" :display="'noDisplay'" v-bind:force="true" ref="rentModal">
          <div slot="title" ref="rentHead"></div>
          <div class="row">
            <div class="col-md-1"></div>
            <img ref="rentImage" class="col-md-10" style="max-height: 70vh;margin-bottom: 5vh;"  />
            <div class="moreDetails col-md-10" ref="rentDetails"></div>
          </div>
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10 well">
              <div class="row">
                <div class="col-md-3"></div>
                <p class="col-sm-3" style="margin-top:1vh;font-size:1.5rem;font-weight: 600"> Cost </p>
                <button class="btn btn-secondary btn-micro col-md-3" ref="priceBtn" style="cursor:default;color:#05386b;" disabled></button>
                <div class="col-md-2"></div>
              </div>
            </div>
          </div>

          <div class="row " style="margin-top:3vh;height:50vh;">
            <div class="col-md-1"></div>
            <div class="col-md-10 well">
              <div class="row">
                <div class="col-md-4"></div>
                <h3 class="col-md-4" style="margin-top:1vh;font-weight: 600"> Item Details </h3>
              </div>
            </div>
          </div>
          <div slot="footer">
            <button @click.prevent='rentService()' class="btn btn-primary">Add {{ currentItemName }} to Cart</button>
          </div>
        </rentalModal>

        <!-- RENT MODAL END -->

        <!-- LOCATION MODAL -->

        <vuestic-modal :show.sync="show" v-bind:large="true" v-bind:force="true" ref="locationModal" :cancelClass="'none'"
                      okText="Close">
          <div slot="title"> Location Of Your Item </div>
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10 well"  style="height:80vh;">
            </div>
          </div>
          <div class="moreDetails" ref="locationDetails"></div>
        </vuestic-modal>

        <!-- LOCATION MODAL END -->
        <!-- <li v-for="list in prodCategory">{{ list }}</li> -->
    </main>
  </div>
  <div v-if="!itemsLoaded">
    <div class="loader--div">
      <div class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <br>
      <h2 style="position: absolute;bottom: 20%;left: 10%;width: 80%;text-align: center;color: white;">Please Wait ...</h2>
      <br>
      <p style="position: absolute;bottom: 15%;left: 10%;width: 80%;text-align: center;color: white;">The Items are Loading</p>
    </div>
  </div>
  </div>
</template>

<script>

import Layout from 'vuestic-theme/vuestic-directives/Layout'
import VuesticLayout from '../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
import rentalModal from './rentalModal'
import navSide from './nav-side'
import * as firebase from 'firebase'
import { EventBus } from 'src/main.js'

export default {
  name: 'rent',
  props: {
  },
  components: {
    VuesticLayout,
    rentalModal,
    navSide
  },
  directives: {
    layout: Layout,
  },
  data () {
    return {
      opened: true,
      currentCity: '',
      citySelection: true,
      show: true,
      searchItem: '',
      currentItemName: '',
      currentItemId: '',
      visiblefilters: true,
      animationStatus: true,
      itemLat: '',
      itemLng: '',
      cartNumber: 0,
      itemsLoaded: false,
      rangeValue: 10,
      prodCategory: [],
      listedItems: [
      ]
    }
  },
  computed: {
    curItemLat: function () {
      return this.itemLat
    },
    curItemLng: function () {
      return this.itemLng
    },
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
   // this.prodFilter()
    if (localStorage.getItem('currentCity') != null) {
      this.currentCity = localStorage.getItem('currentCity')
      this.citySelection = false
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      alert('We Donot Have Your Location')
    }
    function showPosition (position) {
      var lat = position.coords.latitude
      var long = position.coords.longitude
      localStorage.setItem('curLat', lat)
      localStorage.setItem('curLong', long)
    }
    this.$http.get('https://rio-travels.firebaseio.com/listedItems.json').then(
      function (data) {
        this.listedItems = data.body
        this.itemsLoaded = true
      }
    )
  },
  methods: {
    /* CITY SELECTION OVERLAY AND FILTER */
    closeOverlay () {
      this.citySelection = false
    },
    handleScroll () {
     // adsome shite here if you want some scrolltop based logic
    },
    setCityHyd () {
      this.currentCity = 'hyderabad'
      localStorage.setItem('currentCity', 'hyderabad')
      this.citySelection = false
    },
    setCityChn () {
      this.currentCity = 'chennai'
      localStorage.setItem('currentCity', 'chennai')
      this.citySelection = false
    },
    setCityDelhi () {
      this.currentCity = 'delhi'
      localStorage.setItem('currentCity', 'delhi')
      this.citySelection = false
    },
    setCityKol () {
      this.currentCity = 'kolkata'
      localStorage.setItem('currentCity', 'kolkata')
      this.citySelection = false
    },
    /* CITY SELECTION OVERLAY AND FILTER END */
    rentalRoute (itemDetails) {
      this.$refs.rentModal.open()
      this.currentItemName = itemDetails.itemName
      this.currentItemId = itemDetails.itemId
      this.$refs.rentHead.innerHTML = itemDetails.itemName
      this.$refs.rentImage.src = itemDetails.itemImg
      this.$refs.priceBtn.innerHTML = itemDetails.price + '₹'
    },
    showdetailsModal (itemDetails) {
      this.$refs.detailsModal.open()
      this.$refs.detailsBody.innerHTML = itemDetails.location
    },
    showLocation (itemDetails) {
      this.$refs.locationModal.open()
      this.itemLat = itemDetails.lat
      this.itemLng = itemDetails.long
    },
    rentService () {
      this.$refs.rentModal.cancel()
      this.cartNumber = this.cartNumber + 1
      EventBus.$emit('cartUpdate', this.cartNumber)
      var itemId = this.currentItemId
      var x = firebase.auth().currentUser.uid
      sessionStorage.setItem('cartItems', x)
      firebase.database().ref('users/' + x + '/cart').push(itemId).then(
        resp => {
          console.log(resp)
          // location.reload()
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    },
  }
}
</script>

<style scoped>
/* Global */
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.no--display {
  display: none;
}

/* loader */

  .loader--div {
    position: absolute;
    top: 15vh;
    left: 20vw;
    width: 60vw;
    height: 70vh;
    background: white;
    padding: 60px;
    border-radius: 30px;
    background: linear-gradient(45deg , #642B73, #C6426E);
    overflow: auto;
    -webkit-animation: shadow-anim 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-anim 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

.loader {
  position: absolute;
  top: 50%;
  left: 40%;
  margin-left: 10%;
  transform: translate3d(-50%, -50%, 0);
}
.dot {
  width: 24px;
  height: 24px;
  background: rgb(198, 83, 119);
  border-radius: 100%;
  display: inline-block;
  animation: slide 1s infinite;
}
.dot:nth-child(1) {
  animation-delay: 0.1s;
  background: #91c8deec;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
  background: #c7d6da;
}
.dot:nth-child(3) {
  animation-delay: 0.3s;
  background: #ffffff;
}
.dot:nth-child(4) {
  animation-delay: 0.4s;
  background: #c7aab4;
}
.dot:nth-child(5) {
  animation-delay: 0.5s;
  background: #e4d0b2;
}
@-moz-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@-o-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

/* Loader End */

.sidebar {
  position: absolute;
  top: 25vh;
  left: 1vw;
  width: 21vw;
  min-height: 90vh;
}

main {
  position: absolute;
  top: 20vh;
  left: 23vw;
  width: 75vw;
}

/* NAVBAR */

/* NAVBAR END */

/* CITY SELECTION OVERLAY OVERLAY */

.overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 999  ;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    background-color: rgba(0, 0, 0, 0.95);
    overflow-y: hidden;
    transition: 0.5s;
}

.overlay-content {
    position: absolute;
    top: 25%;
    left: 0%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
    margin-left: 0px;
}

.overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
    color: #f1f1f1;
}

.overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
}

.city1{
  position: absolute;
  top: 0vh;
  left: 20vw;
  width: 20vw;
  font-size: 5rem;
  margin-bottom: 20vh;
  margin-left: 0px;
  font-weight: 900;
  color: #10e7dc;
  cursor: pointer;
}
.city1:hover{
  color: white;
}

.city2{
    position: absolute;
  top: 0vh;
  left: 70vw;
  width: 20vw;
  font-size: 5rem;
  margin-bottom: 20vh;
  margin-left: 0px;
  font-weight: 900;
  color: #10e7dc;
  cursor: pointer;
}
.city2:hover{
  color: white;
}

.city3 {
    position: absolute;
  top: 35vh;
  left: 20vw;
  width: 20vw;
  font-size: 5rem;
  margin-bottom: 20vh;
  margin-left: 0px;
  font-weight: 900;
  color: #10e7dc;
  cursor: pointer;
}
.city3:hover{
  color: white;
}

.city4 {
    position: absolute;
  top: 35vh;
  left: 70vw;
  width: 20vw;
  font-size: 5rem;
  margin-bottom: 20vh;
  margin-left: 0px;
  font-weight: 900;
  color: #10e7dc;
  cursor: pointer;
}
.city4:hover{
  color: white;
}

@media screen and (max-height: 450px) {
  .overlay {overflow-y: auto;}
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

/* CITY SELECTION OVERLAY END */



/* SIDENAV END */

/* FILTER BAR */

.container {
    display: block;
    position: relative;
    background: transparent;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 300;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 25px;
    background-color: #eee;
}
.container:hover input ~ .checkmark {
    background-color: #ccc;
}
.container input:checked ~ .checkmark {
    background-color: #2196F3;
}
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
.container input:checked ~ .checkmark:after {
    display: block;
}
.container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

hr.styledHr {
    margin: 40px 10px 40px 10px;
   overflow: visible; /* For IE */
    padding: 0;
    border: none;
    border-top: medium double #333;
    color: #333;
    text-align: center
}
hr.styledHr::before { 
    content: "§";
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;
    background: white;
}

/* FILTER BAR END */ 



/* Cards */


article {
  display: inline-block;
  position: relative;
  width: 230px;
  margin: 20px;
  text-align: left;
  vertical-align: top;
  background: #FFFFFF;
  -webkit-box-shadow: 3px 3px 6px -2px rgba(0,0,0,0.2);
  -moz-box-shadow: 3px 3px 6px -2px rgba(0,0,0,0.2);
  box-shadow: 3px 3px 6px -2px rgba(0,0,0,0.2);
  -webkit-animation: shadow-drop-2-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-drop-2-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  
}

@-webkit-keyframes shadow-drop-2-center {
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: translateZ(50px);
            transform: translateZ(50px);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}
@keyframes shadow-drop-2-center {
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: translateZ(50px);
            transform: translateZ(50px);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}


@media (max-width: 400px) {
  article {
      margin-left: 12.5%;
    width: 75%;
  }  
}

.img {
  position: relative;
  width: 100%;
  height: 180px;
  background: #333;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.txt {
  padding: 10%;
}

p {
  font-size: .9em;
  margin: 0 0 .5em 0;
}

.main-link {
  padding-bottom: .3em;
  text-decoration: none;
  font-weight: 100;
  color: #10e7dc;
  border-bottom: 3px solid #C6426E;
  transition: ease .5s;
}

.main-link:hover {
  border-bottom: 3px solid #642B73;
}

.search-bar{
  width:20vw;
  margin-left:18vw;
}

/*  Shadow  */

@-webkit-keyframes shadow-anim {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.15);
  }
}
@keyframes shadow-anim {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.15);
  }
}

</style>
