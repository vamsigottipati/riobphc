<template>
<div>

    <!-- TOP NAVBAR -->

    <div class="navbar-filter" ref="filterNav" style="transition: 0.4s;vertical-align: center;">
      <i class="fas fa-bars menuSideDrop" @click.prevent="openLeftSideNav" style="transition: 0.4s;"></i>
      <p class="logo" ref="logo" style="transition: 0.4s;font-family: Montserrat;">Uncle Bob</p>
     <!-- <input type="text" ref="searchBox" class="filterInput" placeholder="Search Item Name" style="transition: 0.4s"> -->
     <div class="nav-bar">
      <i class="bx bx-menu-alt-right shower" id="shower" ref="shower" @click="showfy()"></i>
      <div class="nav-inner" id="nav-inner" ref="navbar">
                     <i class='bx bx-user-detail accountIcon' @click="route('profile')" style="transition: 0.4s;"></i>
      <i class='bx bx-filter filterIcon' ref="sortButton" @slick="showCard" style="transition: 0.4s; cursor: pointer;"></i>
      <span> <i class='bx bx-cart cartIcon' ref="cartIcon" @click="openRightSideNav" style="transition: 0.4s;cursor: pointer;"></i>
        <p style="" class="cart-number"> 
            {{cartNumber}}
        </p> </span> 
      <i class='bx bx-user-x logoutIcon' style="transition: 0.4s;" @click="logout"></i>
      </div>

     </div>

    </div>

        <!-- TOP NAVBAR END -->


        <!-- LEFT SIDENAV -->

    <div ref="leftSidenav" class="leftSidenav">
        <a href="javascript:void(0)" class="closebtn" ref="leftCloseBtn" @click.prevent="closeLeftSideNav">&times;</a>
        <a style="margin-top: 10vh;" @click.prevent="$router.push( '/home' )">Home</a>
        <a  @click.prevent="$router.push( '/list' )">List</a>
        <a  @click.prevent="$router.push( '/rent' )">Rent</a>
        <a  @click.prevent="$router.push( '/profile' )">Profile</a>
        <a  @click.prevent="$router.push( '/how' )">How</a>
        <a  @click.prevent="$router.push( '/about' )">About</a>
    </div>

        <!-- LEFT SIDENAV END -->

        <!-- RIGHT SIDEBAR -->

    <div ref="rightSidenav" class="rightSidenav" style="text-align: center;" >
        <a href="javascript:void(0)" class="closebtn" ref="rightCloseBtn" style="position: fixed;" @click.prevent="closeRightSideNav">&times;</a>
        <div class="heading"> <h2 style="position: absolute;top: 15vh;left: 30vw;width: 40vw;text-align: center;color: white;font-size:2.8rem;letter-spacing: 0px;word-spacing: 20px;font-family: montserrat;">Cart Details</h2> </div>
        <h3 v-if="!this.cartNumber" style="position: absolute;color: whitesmoke; top: 50vh; width: 80vw; left: 10vw ;left: 0px;font-family: Montserrat;text-align: center;"> <i style="font-size: 75px;margin-right: 50px;transform: translateY(25%);color: orange;" class='bx bx-error'></i> No Items In Your Cart </h3>
        <div class="main--content" :key="ItemDetail.itemId" v-for="ItemDetail in ItemDetails">
          <div class="main--img" >
            <img :src="ItemDetail.itemImg" style="width: auto; height: 30vh;margin-top: 10vh;" alt="">
          </div>
          <div class="main--list">
            <ul style="color: #bbb;font-size: 25px;text-align: center;">
              <p style="word-spacing: 30px;"> <span style="color: #ddd;"> Name </span> :  {{ ItemDetail.itemName }}</p>
              <p style="word-spacing: 30px;"> <span style="color: #ddd;">Categoty</span> :  {{ ItemDetail.category }}</p>
              <p style="word-spacing: 30px;"> <span style="color: #ddd;">Owner</span> : {{ ItemDetail.itemOwner }}</p>
              <p style="word-spacing: 30px;"> <span style="color: #ddd;">Price</span> : {{ ItemDetail.price }}</p>
            </ul>
          </div>
        </div>
        <button v-if="this.cartNumber" @click.prevent="$router.push( '/checkout' )" class="btn btn-submit">Proceed To CheckOut</button>
    </div>

        <!-- RIGHT SIDEBAR END -->
</div>
</template>
<script type="text/javascript">


function showCard () {
  alert('LOL')
}

document.getElementById('showCard').addEventListener('click', showCard)
</script>
<script>
import * as firebase from 'firebase'
import { EventBus } from 'src/main.js'

export default {
  name: 'nav-side',
  data () {
    return {
      cartNumber: 0,
      cartImgs: [],
      ItemDetails: [],
      cartItems: [],
      locationPathName: ''
    }
  },
  mounted: function () {
    this.setData()
    this.checkSortIcon()
    var z = this
    EventBus.$on('cartUpdate', cartNumber => {
      console.log(cartNumber)
      z.setData()
      z.cartNumber = cartNumber
    })
  },
  methods: {
    closeRightSideNav () {
      this.$refs.rightSidenav.style.width = '0'
      this.$refs.rightCloseBtn.style.right = '-50px'
      this.$refs.rightCloseBtn.style.display = 'none'
    },
    openRightSideNav () {
      this.$refs.rightSidenav.style.width = '100vw'
      this.$refs.rightCloseBtn.style.right = '25px'
      this.$refs.rightCloseBtn.style.display = 'block'
    },
    checkSortIcon () {
      this.locationPathName = window.location.pathname
      console.log(this.locationPathName)
      if (this.locationPathName === '/rent') {
        this.$refs.sortButton.style.display = 'block'
      } else {
        this.$refs.sortButton.style.display = 'none'
      }
    },
    showCard () {
      this.$refs.sb.style.top = '5vh'
    },
    showfy () {
      if (this.$refs.navbar.style.display === 'block') {
        this.$refs.navbar.style.display = 'none'
      } else {
        this.$refs.navbar.style.display = 'block'
      }
    },
    openLeftSideNav () {
      this.$refs.leftSidenav.style.left = '0vw'
      this.$refs.leftCloseBtn.style.left = '20vw'
    },
    closeLeftSideNav () {
      this.$refs.leftSidenav.style.left = '-100vw'
      this.$refs.leftCloseBtn.style.left = '-55vw'
    },
    route (e) {
      this.$router.push(e)
    },
    setData () {
      var x = firebase.auth().currentUser.uid
      var vm = this
      firebase.database().ref('users/' + x + '/cart').once('value').then(function (snapshot) {
        // use if statement
        vm.cartNumber = Object.values(snapshot.val()).length
        vm.cartItems = Object.values(snapshot.val())
        vm.cartData(vm.cartItems)
      })
    },
    cartData (a) {
      var vm = this
      for (let i = 0; i < a.length; i++) {
        firebase.database().ref('listedItems/' + a[i]).once('value').then(function (snapshot) {
          vm.ItemDetails.push(snapshot.val())
          // console.log(vm.ItemDetails)
        })
      }
    },
    logout () {
      firebase.auth().signOut().then(
        response => {
          alert('Signout Successful')
          sessionStorage.removeItem('status')
          localStorage.removeItem('currentCity')
          this.$router.push('home')
        }
      )
    }
  }
}
</script>

<style scoped>
/* Navbar start  */

.logo {
  position: absolute; 
  left: 8vw;
  font-size:2.2rem;
  color:white;
  top: 4vh;
  font-weight:780;
  padding: 0px;
  letter-spacing: 0.5px;
}

.menuSideDrop {
  position: absolute; 
  left: 1.5vw;
  font-size:30px;
  color:white;
  top: 5vh;
  cursor: pointer;
}

.navbar-filter {
  position: fixed;
  background: linear-gradient(90deg , #642B73, #C6426E);
  top:0vh;
  width: 100vw;
  left:0vw;
  height: 15vh;
  z-index: 990;
}

.filterInput {
  all: unset;
  background: white;
  position:absolute;
  left: 20vw;
  top: 5vh;
  height: 4vh;
  border-radius: 30px;
  text-align: center;
  width: 70vh;
}

.accountIcon {
  position: absolute;
  right: 25vw;
  color: white;
  font-size: 30px;
  cursor: pointer;
  top: 5vh;
}

.filterIcon {
  position: absolute;
  right: 35vw;
  color: white;
  top: 5vh;
  font-size: 30px;
}

.cartIcon {
  position: absolute;
  right: 15vw;
  color: white;
  top: 5vh;
  font-size: 30px;
}

.logoutIcon {
  position: absolute;
  right: 5vw;
  color: white;
  top: 5vh;
  font-size: 30px;
  cursor: pointer;
}

/* Navbar end */

/* SIDENAV */

.rightSidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    background-color: #03568e;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.rightSidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 3rem;
    margin-left: 50px;
    color: #10e7dc;
    transition: 0.3s;
    display: none;
}

.closebtn:hover{
  color: white;
}

@media screen and (max-height: 450px) {
  .rightSidenav {padding-top: 15px;}
}



.leftSidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 999;
    top: 0;
    left: -100vw;
    display: block;
    width:25vw;
    background-color: #03568e;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.leftSidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 3rem;
    margin-left: 0px;
    color: #10e7dc;
    transition: 0.6s;
}
.leftSidenav :hover {
  color: white;
}

.leftSidenav a {
    padding: 8px 8px 8px 8px;
    text-decoration: none;
    font-size: 2.2rem;
    color: #10d7dc;
    display: block;
    transition: 0.3s;
    text-align: center;
}


@media screen and (max-width: 850px) {
  .leftSidenav {
  padding-top: 15px;
  width:70vw !important;
  }
}
@media screen and (max-width: 600px) {
  .leftSidenav {
  padding-top: 15px;
  width:90vw !important;
  }
}

.main--content {
  margin-top: 25vh;
  margin-left: 5vw;
  width: 90vw;
  min-height: 40vh;
}

.main--img {
  width: 40%;
  margin-left: 10vw;
  float: left;
}

.main--list {
  transform: translateY(50%)
}

.btn {
  all: unset;
  color: white;
  background: #C6426E;
  padding-top: 20px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 20px;
  border-radius: 5px;
  margin-top: 20vh;
  margin-bottom: 10vh;
  min-width: 10vw;
  font-size: 1.2rem;
  font-family: Montserrat; 
  font-weight: 500;
  word-spacing: 20px;
}

::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}

.shower{
  display: none;
}
.cart-number{
  position: absolute;color: white; background: #222222;top: 3vh; right: 13.5vw;width: 30px; 
              height: 30px;text-align: center;border-radius: 50%;opacity: 0.7;vertical-align: center;
              font-weight: 900;font-size: 20px;
}
@media only screen and (max-width: 400px) {
  .shower{
    display: block;
    position: absolute;
    right:10px;
    color: white;
    top:30px;
    font-size: 30px;
  }
  .nav-inner{
    //display: none;
  }
  .nav-inner{
    background: white;
    padding:20px;
    display: none;
    margin-top:80px;
    box-shadow: 0px 0px 10px 0px rgba(200,200,200,1);

  }
  .nav-inner i{
    position: static !important;
    display: block;
    color: grey;
    text-align: center;
    padding-top:10px;


  }
  .cart-number{
    display: none;
  }
  .nav-bar:hover .nav-inner{
    display:block;
  }
}


</style>

