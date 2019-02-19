<template>
<div>

    <!-- TOP NAVBAR -->

    <div class="navbar-filter" ref="filterNav" style="transition: 0.4s;vertical-align: center;">
      <div style="flex: 1;"></div>
      <i class="bx bx-menu menuSideDrop" @click.prevent="openLeftSideNav" style="transition: 0.4s;"></i>
      <p class="logo" ref="logo" style="transition: 0.4s;font-family: Montserrat;">Uncle Bob</p>
      <i class='bx bx-filter filterIcon' @click="showCard" v-if="this.rentalRoute" style="transition: 0.4s;"></i>
      <i class='bx bx-user-detail accountIcon' @click="route('profile')" style="transition: 0.4s;"></i>
      <span class="bellIconCont"> <i class='bx bxs-bell-ring bellIcon' @click="getNotifications" ref="cartIcon" style="transition: 0.4s;cursor: pointer;"></i>
        <p style="color: white; background: #222222;text-align: center;border-radius: 50%;opacity: 0.7;
              font-weight: 900;"> 
            {{notificationsNum}}
        </p> </span> 
      <span class="cartIconCont"> <i class='bx bx-cart cartIcon' ref="cartIcon" @click="openRightSideNav" style="transition: 0.4s;cursor: pointer;"></i>
        <p style="color: white; background: #222222;width: 30px; 
              height: 30px;text-align: center;border-radius: 50%;opacity: 0.7;;
              font-weight: 900;font-size: 20px;"> 
            {{cartNumber}}
        </p> </span> 
      <i class='bx bx-user-x logoutIcon' style="transition: 0.4s;" @click="logout"></i>
    </div>

        <!-- TOP NAVBAR END -->


        <!-- LEFT SIDENAV -->

    <div ref="leftSidenav" class="leftSidenav">
        <a href="javascript:void(0)" class="closebtn" ref="leftCloseBtn" @click.prevent="closeLeftSideNav">&times;</a>
        <a style="margin-top: 15vh;text-align: left;margin-left: 40px;padding-bottom: 20px" @click.prevent="$router.push( '/home' )" > <i class='bx bx-home routerIcons' style=""></i> Home</a>
        <a  @click.prevent="$router.push( '/list' )" style="text-align: left;margin-left: 40px;padding-bottom: 20px"> <i class='bx bx-list-check routerIcons' style=""></i> List</a>
        <a  @click.prevent="$router.push( '/rent' )" style="text-align: left;margin-left: 40px;padding-bottom: 20px"> <i class='bx bx-dollar routerIcons' style=""></i> Rent</a>
        <a  @click.prevent="$router.push( '/profile' )" style="text-align: left;margin-left: 40px;padding-bottom: 20px"> <i class='bx bx-user-detail routerIcons' style=""></i> Profile</a>
        <a  @click.prevent="$router.push( '/how' )" style="text-align: left;margin-left: 40px;padding-bottom: 20px"> <i class='bx bx-info-circle routerIcons' style=""></i> How</a>
        <a  @click.prevent="$router.push( '/about' )" style="text-align: left;margin-left: 40px;padding-bottom: 20px;"> <i class='fas fa-users smallerRouterIcons' style=""></i> About</a>
        <a  @click.prevent="openRightSideNav" style="text-align: left;margin-left: 40px;padding-bottom: 20px"> <i class='bx bx-cart routerIcons' style=""></i> Cart </a>
        <a  @click.prevent="logout" style="text-align: left;margin-left: 40px;padding-bottom: 20px;"> <i class='bx bx-user-x routerIcons' style=""></i> Logout </a>
    </div>

        <!-- LEFT SIDENAV END -->

        <!-- RIGHT SIDEBAR -->

    <div ref="rightSidenav" class="rightSidenav" style="text-align: center;" >
        <a href="javascript:void(0)" class="closebtn" ref="rightCloseBtn" style="position: fixed;" @click.prevent="closeRightSideNav">&times;</a>
        <div class="heading"> <h2 style="position: absolute;top: 15vh;left: 30vw;width: 40vw;text-align: center;color: white;font-size:2.8rem;letter-spacing: 0px;word-spacing: 20px;font-family: montserrat;">Cart Details</h2> </div>
        <div v-if="!this.cartNumber" style="position: absolute;color: whitesmoke; top: 50vh; width: 100vw; height: 50vh ; left: 0vw ;font-family: Montserrat;text-align: center;display: inline-block"> <i style="font-size: 150px;color: orange;margin-bottom: 5vh;" class='bx bx-error'></i> <h3> No Items In Your Cart </h3> </div>
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
        <button v-if="this.cartNumber" @click.prevent="$router.push( '/checkout' )" class="btn btn-submit">Request The Lender</button>
    </div>

        <!-- RIGHT SIDEBAR END -->


    <vuestic-modal v-bind:large="true" v-bind:force="true" ref="notificationsModal" :cancelClass="'none'"
            okText="Ignore">
        <div slot="title">Notifications</div>
        <div ref="notificationsBody" style="text-align: center;" v-if='this.notificationsNum'>
          <div v-for="notifItems in this.notifications" :key="notifItems.itemDetails.itemId">
            <p> You have a request About about a listing ' {{ notifItems.itemDetails.itemName }} ' that you have done. </p>
            <br>
            <p> Click the Accept Button if you want to accept the request or reject of you donot want to accept the request.</p><br>
            <ul style="text-align: left;">
              <li>Item Name : {{ notifItems.itemDetails.itemName }}</li>
              <li>Renter Id : {{ notifItems.renter }}</li>
              <li>Number Of Days  : {{ notifItems.days }}</li>
              <li>Item Price : ₹{{ notifItems.itemDetails.price }} per Day</li>
            </ul>

            <img :src="notifItems.itemDetails.itemImg" class="well" style="width: 100%;height: auto;" alt="">
            <br><br>
            <button @click="accept(notifItems)" class="btn btn-secondary btn-micro"> Accept </button>
            <!-- <button @click="reject(notifItems)"> Reject </button> -->
          </div>
        </div>
        <div v-if="!this.notificationsNum"> You have no new notifications </div>
    </vuestic-modal>

</div>
</template>

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
      notificationsNum: 0,
      notifications: [],
      showFilterCard: true,
      rentalRoute: false
    }
  },
  mounted: function () {
    this.setData()
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
    openLeftSideNav () {
      if (window.innerWidth < 600) {
        this.$refs.leftSidenav.style.width = '80vw'
        this.$refs.leftCloseBtn.style.left = '50vw'
      } else {
        if (window.innerWidth < 900) {
          this.$refs.leftSidenav.style.width = '40vw'
          this.$refs.leftCloseBtn.style.left = '35vw'
        } else {
          this.$refs.leftSidenav.style.width = '22vw'
          this.$refs.leftCloseBtn.style.left = '16vw'
        }
      }
    },
    closeLeftSideNav () {
      this.$refs.leftSidenav.style.width = '0'
      this.$refs.leftCloseBtn.style.left = '-10vw'
    },
    route (e) {
      this.$router.push(e)
    },
    setData () {
      var vm = this
      if (window.location.pathname === '/rent') {
        vm.rentalRoute = true
      } else {
        vm.rentalRoute = false
      }
      var x = firebase.auth().currentUser.uid
      firebase.database().ref('users/' + x + '/cart').once('value').then(function (snapshot) {
        if (snapshot.val()) {
          vm.cartNumber = Object.values(snapshot.val()).length
          vm.cartItems = Object.values(snapshot.val())
          vm.cartData(vm.cartItems)
        }
      })
      firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/requestsL').once('value').then(function (snapshot) {
        if (snapshot.val()) {
          vm.notificationsNum = Object.values(snapshot.val()).length
          vm.notifications = Object.values(snapshot.val())
          console.log(vm.notifications)
        } else {
          vm.notificationsNum = 0
          vm.notifications = null
        }
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
    showCard () {
      var vm = this
      EventBus.$emit('showFilterCard', vm.showFilterCard)
    },
    getNotifications () {
      console.log('Yo')
      this.$refs.notificationsModal.open()
    },
    accept (e) {
     // var vm = this
      console.log(e)
      var otpPoss = '1234567890'
      var otpL = ''
      for (let i = 0; i < 8; i++) {
        otpL += otpPoss.charAt(Math.floor(Math.random() * otpPoss.length))
      }
      this.$refs.notificationsModal.cancel()
      firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/requestsL/' + e.itemDetails.itemId + '/status').set(true)
      firebase.database().ref('users/' + e.renter + '/requestsR/' + e.itemDetails.itemId + '/status').set(true)
      firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/requestsL/' + e.itemDetails.itemId).remove()
      firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/acceptedL/' + e.itemDetails.itemId).set({
        renter: e.renter,
        lister: firebase.auth().currentUser.uid,
        itemDetails: e.itemDetails,
        price: e.price,
        days: e.days,
        otpL: otpL,
      })
      this.notificationsNum = 0
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

.navbar-filter {
  position: fixed;
  background: linear-gradient(90deg , #642B73, #C6426E);
  top:0vh;
  width: 100vw;
  left:0vw;
  height: 120px;
  z-index: 990;
  display: flex;
  cursor: pointer;
}

.logo {
  font-size:40px;
  color:white;
  font-weight:780;
  letter-spacing: 0.5px;
  flex: 20;
  text-align: left;
  align-self: center;
  cursor: pointer;
}
.menuSideDrop {
  flex: 3;
  color: white;
  font-size: 30px;
  text-align:center;
  padding-right: 30px;
  align-self: center;
  transform: translateY(-5px);
  cursor: pointer;
}
.accountIcon {
  flex: 3;
  color: white;
  font-size: 30px;
  text-align:left;
  padding-right: 30px;
  align-self: center;
  cursor: pointer;
}
.filterIcon {
  flex: 3;
  color: white;
  font-size: 30px;
  text-align:left;
  padding-right: 30px;
  align-self: center;
  cursor: pointer;
  display: none;
}
.bellIconCont {
  flex: 4;
  align-self: center;
}
.bellIconCont i{
  color: white;
  font-size: 30px;
  transform: translateY(25px);
  cursor: pointer;
}
.bellIconCont p{
  transform: translate(20px, -25px);
  width: 30px; 
  height: 30px;
  font-size: 20px;
}
.cartIconCont {
  flex: 4;
  align-self: center;
}
.cartIconCont i{
  color: white;
  font-size: 30px;
  transform: translateY(25px);
  cursor: pointer;
}
.cartIconCont p {
  transform: translate(20px, -25px);
}
.logoutIcon {
  flex: 3;
  color: white;
  font-size: 30px;
  text-align:left;
  padding-right: 30px;
  align-self: center;
  cursor: pointer;
}

/* Navbar end */

/* SIDENAV */

.rightSidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 998;
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

.routerIcons{
  margin-right: 30px;
  font-size: 30px;
  color:rgb(218, 204, 46);
}

.smallerRouterIcons{
  margin-right: 30px;
  color:rgb(218, 204, 46);
  font-size: 22px;
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
    left: 0;
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


@media screen and (max-height: 450px) {
  .leftSidenav {padding-top: 15px;}
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
  font-weight: 400;
  word-spacing: 20px;
}

::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}

@media only screen and (max-width: 978px) { 
  .logo {
    font-size:20px;
    color:white;
    font-weight:700;
    letter-spacing: 0.1px;
    word-spacing: 10px;
    flex: 20;
    text-align: left;
    margin-left: -25px; 
    align-self: center;
    cursor: pointer;
  }
  .menuSideDrop {
    flex: 3;
    color: white;
    font-size: 20px;
    text-align:center;
    align-self: center;
    transform: translateY(-8px);
    cursor: pointer;
  }
  .accountIcon {
    /* display: none; */
    transform: translateY(-8px);
    font-size: 25px;
  }
  .filterIcon {
    flex: 1;
    color: white;
    font-size: 25px;
    text-align:left;
    padding-right: 40px;
    align-self: center;
    cursor: pointer;
    transform: translateY(-8px);
    display: block;
  }
  .bellIconCont {
    flex: 3;
    align-self: center;
    margin-right: 20px;
    transform: translateY(-8px);
  }
  .bellIconCont i{
    color: white;
    font-size: 20px;
    transform: translateY(20px);
    cursor: pointer;
  }
  .bellIconCont p{
    transform: translate(10px, -18px);
    width: 20px; 
    height: 20px;
    font-size: 15px;
    text-align: center;

  }
  .routerIcons{
    color: rgb(218, 204, 46);
  }
  .smallerRouterIcons {
    color: rgb(218, 204, 46);
  }
  .cartIconCont {
    flex: 4;
    align-self: center;
    display: none;
  }
  .cartIconCont i{
    color: white;
    font-size: 30px;
    transform: translateY(25px);
    cursor: pointer;
    display: none;
  }
  .cartIconCont p {
    transform: translate(20px, -25px);
  }
  .logoutIcon {
    flex: 3;
    color: white;
    font-size: 30px;
    text-align:left;
    padding-right: 30px;
    align-self: center;
    cursor: pointer;
    display: none;
  }
  .leftSidenav {
    width: 80vw;
  }
  .leftSidenav a{
    font-size: 15px;
  }

  .routerIcons{
    margin-right: 30px;
    font-size: 25px;
    color: white;
  }

  .smallerRouterIcons{
    margin-right: 30px;
    color: white;
    font-size: 20px;
  }
}

</style>

