<template>
<div>

    <!-- TOP NAVBAR -->

    <div class="navbar-filter" ref="filterNav" style="transition: 0.4s">
      <i class="fas fa-bars menuSideDrop" @click.prevent="openLeftSideNav" style="transition: 0.4s;"></i>
      <p class="logo" ref="logo" style="transition: 0.4s">UncleBob</p>
     <!-- <input type="text" ref="searchBox" class="filterInput" placeholder="Search Item Name" style="transition: 0.4s"> -->
      <i class='bx bx-user-detail accountIcon' style="transition: 0.4s;"></i>
      <i class='bx bx-filter filterIcon' style="transition: 0.4s; cursor: pointer;"></i>
      <i class='bx bx-cart cartIcon' ref="cartIcon" @click="openRightSideNav" style="transition: 0.4s;cursor: pointer;"></i>
      <i class='bx bx-user-x logoutIcon' style="transition: 0.4s;" @click="logout"></i>
    </div>

        <!-- TOP NAVBAR END -->


        <!-- LEFT SIDENAV -->

    <div ref="leftSidenav" class="leftSidenav">
        <a href="javascript:void(0)" class="closebtn" ref="leftCloseBtn" @click.prevent="closeLeftSideNav">&times;</a>
        <a style="margin-top: 10vh;" @click.prevent="$router.push( '/home' )">Home</a>
        <a  @click.prevent="$router.push( '/list' )">List</a>
        <a  @click.prevent="$router.push( '/profile' )">Profile</a>
        <a  @click.prevent="$router.push( '/how' )">How</a>
        <a  @click.prevent="$router.push( '/about' )">About</a>
    </div>

        <!-- LEFT SIDENAV END -->

        <!-- RIGHT SIDEBAR -->

    <div ref="rightSidenav" class="rightSidenav">
        <a href="javascript:void(0)" class="closebtn" ref="rightCloseBtn" @click.prevent="closeRightSideNav">&times;</a>
    </div>

        <!-- RIGHT SIDEBAR END -->
</div>
</template>

<script>
import * as firebase from 'firebase'
export default {
  name: 'nav-side',
  data () {
    return {
    }
  },
  methods: {
    closeRightSideNav () {
      this.$refs.rightSidenav.style.width = '0'
      this.$refs.rightCloseBtn.style.right = '-50px'
    },
    openRightSideNav () {
      this.$refs.rightSidenav.style.width = '20vw'
      this.$refs.rightCloseBtn.style.right = '25px'
    },
    openLeftSideNav () {
      this.$refs.leftSidenav.style.width = '25vw'
      this.$refs.leftCloseBtn.style.left = '20vw'
    },
    closeLeftSideNav () {
      this.$refs.leftSidenav.style.width = '0'
      this.$refs.leftCloseBtn.style.left = '-10vw'
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
  top: 3.5vh;
  font-weight:900;
}

.menuSideDrop {
  position: absolute; 
  left: 1.5vw;
  font-size:1.8rem;
  color:white;
  top: 5.3vh;
  font-weight:900;
  cursor: pointer;
}

.navbar-filter {
  position: fixed;
  background: linear-gradient(to right, #03568e , #10e7dc) ;
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
  top: 4vh;
  height: 4vh;
  border-radius: 30px;
  text-align: center;
  width: 70vh;
}

.accountIcon {
  position: absolute;
  right: 35vw;
  color: white;
  font-size: 2.7rem;
  cursor: pointer;
  top: 4.75vh;
}

.filterIcon {
  position: absolute;
  right: 25vw;
  color: white;
  top: 5vh;
  font-size: 2.5rem;
}

.cartIcon {
  position: absolute;
  right: 15vw;
  color: white;
  top: 5vh;
  font-size: 2.3rem;
}

.logoutIcon {
  position: absolute;
  right: 5vw;
  color: white;
  top: 4.75vh;
  font-size: 2.7rem;
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
}
.rightSidenav :hover {
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
</style>

