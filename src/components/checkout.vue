<template>

  <div>
    <div class="loader--div" v-if="this.loading">  
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

    <div class="checkout--page--body" v-if="!this.loading">
        <navSide />
        <div class="main--content" >
            <vuestic-widget id="address--widget"  headerText='Address And Details'>
                <div class="add--main" style="text-align: center;" v-for="itemDetail in itemDetails" :key="itemDetail.id">
                    <img class="img well" style="width: auto; height: 40vh; margin-left: auto;margin-right: auto;" :src="itemDetail.itemImg" alt=""> <br>
                    <div class="add--text" style="width: 40vw;color: #444;margin-top: 50px;text-align: left;margin-left:9.375vw;"><strong style="float: left;font-family: Montserrat;"> Address </strong>  <p style="float:right;text-align: center;">{{ itemDetail.address }}</p></div> <br>
                    <div class="add--text" style="width: 40vw;color: #444;margin-top: 20px;text-align: left;margin-left:9.375vw;margin-bottom: 60px;"><strong style="float: left;font-family: Montserrat;"> City </strong>  <p style="float:right;text-align: center;">{{ itemDetail.city }}</p></div> <br>
                    <div class="well" ref="google--map" style="height: 60vh;"></div>
                    <hr style="margin-top: 30px;">
                </div> 
            </vuestic-widget>   
            <vuestic-widget  id="request--widget" headerText='Request Item' style="text-align: center;">
                <p class="request--text" style="padding: 30px;font-family: Montserrat;"> Some Description about How Request and Other Things work. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum? Incidunt, perspiciatis laborum? Ea iusto laudantium, quaerat perferendis in quae assumenda neque laborum magnam qui fugiat quo animi labore hic! <br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, officiis error impedit vitae aspernatur, sed aut tempora inventore, repellendus in laborum. Nemo quam tenetur ducimus voluptate at numquam sequi explicabo! </p>
                <button style="all: unset;background: #642B73;color: white;border-radius: 5px;padding: 15px;cursor: pointer;" @click.prevent="checkout"> Request Item (s) </button>
            </vuestic-widget>
        </div>
        <div class="right--content" >
            <vuestic-widget id="details--widget" headerText='Order Details' style="height: 80vh;">
                <div class="scrollable" style="height: 55vh;overflow: auto;">
                    <div style="width: 30vw;" v-for="itemDetail in itemDetails" :key="itemDetail.id">
                        <div style="margin-top: 30px;margin-bottom:20px;"><strong style="float: left;font-family: Montserrat;"> Name </strong>  <p style="float:right;text-align: center;">{{ itemDetail.itemName }}</p></div> <br>
                        <div style="margin-top: 30px;margin-bottom:20px;"><strong style="float: left;font-family: Montserrat;"> Owner </strong>  <p style="float:right;text-align: center;">{{ itemDetail.itemOwner }}</p></div> <br>
                        <div style="margin-top: 30px;margin-bottom:20px;"><strong style="float: left;font-family: Montserrat;"> Price </strong>  <p style="float:right;text-align: center;">₹ {{ itemDetail.price }}</p></div> <br>
                        <div style="margin-top: 30px;"><label for="days" style="font-weight: 800;padding-top: 10px;">Days</label> <input class="day" :id="itemDetail.itemId" min="0" style="float: right;font-weight: 900;" type="number" name="days" placeholder="0 Days"></div>
                        <hr style="margin-top: 30px;">
                    </div>
                </div>
                <div style="text-align: center;">
                  <label class="check-container">I agree to the terms and conditions...
                    <input type="checkbox"  v-model="check" name="agree" id="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <p style="width: 30vw;padding-left: 5vw;padding-right: 5vw;margin-top: 20px;text-align: center;"><strong style="margin-right:30px;">Total Amount Payable : </strong> ₹ {{ totalAmount }}</p>
            </vuestic-widget>
        </div>
    </div>

  </div>
</template>

<script>
import * as firebase from 'firebase'
import navSide from './nav-side'

export default {
  name: 'checkout',
  components: {
    navSide
  },
  data () {
    return {
      userId: '',
      cartItems: [],
      itemDetails: [],
      price: [],
      cartNumber: '',
      requestId: '',
      currentUser: '',
      lister: [],
      check: '',
      totalAmount: 0,
      loading: true,
    }
  },
  mounted: function () {
    this.getData()
    this.checkOrder()
    // this.checkStat()
    this.currentUser = firebase.auth().currentUser.uid
  },
  watch: {
    check (n, o) {
      if (n || 0 != null) {
        var temp = 0
        for (let i = 0; i < this.itemDetails.length; i++) {
          if (document.getElementById(this.itemDetails[i].itemId).value != null) {
            temp = temp + (parseInt(this.itemDetails[i].price) * document.getElementById(this.itemDetails[i].itemId).value)
          }
          if (document.getElementById(this.itemDetails[i].itemId).value === null) {
            alert('Please Fill The Number Of Days You Want To Rent The Item')
          }
        }
        this.totalAmount = temp
      }
      // console.log(this.totalAmount)
    }
  },
  methods: {
    getData () {
      this.userId = firebase.auth().currentUser.uid
      var vm = this
      firebase.database().ref('users/' + vm.userId + '/cart').once('value').then(function (snapshot) {
        vm.cartNumber = Object.values(snapshot.val()).length
        vm.cartItems = Object.values(snapshot.val())
        vm.setData(vm.cartItems)
        // console.log(vm.cartItems)
      })
    },
    // checkStat () {},
    setData (a) {
      var vm = this
      for (let i = 0; i < a.length; i++) {
        firebase.database().ref('listedItems/' + a[i]).once('value').then(function (snapshot) {
          vm.itemDetails.push(snapshot.val())
          vm.lister.push(snapshot.val().itemOwner)
          // console.log(vm.itemDetails)
          vm.loading = false
        })
      }
    },
    checkOrder () {
      var vm = this
      firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then(function (snapshot) {
        if (snapshot.val().requestsR) {
          vm.$router.push('order')
        } else {
          console.log('No order Requests')
        }
      })
    },
    getOrderDetails () {
      var vm = this
      firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then(function (snapshot) {
        vm.requestDetails = snapshot.val().requestsR
        console.log(Object.values(vm.requestDetails))
        for (var i = 0; i < Object.values(vm.requestDetails).length; i++) {
          if (Object.values(vm.requestDetails)[i].status) {
            console.log('yo')
          } else {
            console.log('no yo')
          }
        }
      })
    },
    checkout () {
      var vm = this
      var counter = 0
      if (document.getElementById('checkbox').checked) {
        for (let i = 0; i < vm.itemDetails.length; i++) {
          if (document.getElementById(vm.itemDetails[i].itemId).value) {
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            for (let i = 0; i < 15; i++) {
              this.requestId += possible.charAt(Math.floor(Math.random() * possible.length))
            }
            /* var otpR = ''
            var otpPoss = '1234567890'
            for (let i = 0; i < 8; i++) {
              otpR += otpPoss.charAt(Math.floor(Math.random() * otpPoss.length))
            }
            var otpL = ''
            for (let i = 0; i < 8; i++) {
              otpL += otpPoss.charAt(Math.floor(Math.random() * otpPoss.length))
            } */
            // (this.requestId)
            // requests & Accepts
            firebase.database().ref('users/' + vm.userId + '/requestsR/' + vm.itemDetails[i].itemId).set({
              requestId: vm.requestId,
              lister: vm.lister[i],
              price: (document.getElementById(vm.itemDetails[i].itemId).value * vm.itemDetails[i].price),
              days: document.getElementById(vm.itemDetails[i].itemId).value,
              itemDetails: vm.itemDetails[i],
              status: false,
            })
            firebase.database().ref('users/' + vm.itemDetails[i].itemOwnerId + '/requestsL/' + vm.itemDetails[i].itemId).set({
              requestId: vm.requestId,
              renter: vm.currentUser,
              price: (document.getElementById(vm.itemDetails[i].itemId).value * vm.itemDetails[i].price),
              days: document.getElementById(vm.itemDetails[i].itemId).value,
              itemDetails: vm.itemDetails[i],
              status: false,
            })
            this.requestId = ''
            counter = counter + 1
          } else {
            alert('Please Select The Number Of Days')
          }
        }
        if (counter >= vm.itemDetails.length) {
          vm.showRequest = true
        }
      } else {
        alert('Please Check The terms and Conditions')
      }
    }
  }
}
</script>

<style scoped>

.main--content {
  position: absolute;
  left: 2.5vw;
  top: 17.5vh;
  width: 58.75vw;
  min-height: 60vh;
}

.right--content {
  position: fixed;
  right: 2.5vw;
  top: 17.5vh;
  width: 33.75vw;
  height: 80vh;
}
.day {
  all: unset;
  color: #444;
  background: #eee;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}
::-webkit-scrollbar {
  width: 0px;  /* remove scrollbar space */
  background: transparent;  /* optional: just make scrollbar invisible */
}
.check-container {
  position: absolute;
  left: 2vw;
  bottom: 10% ;
  display: block;
  position: relative;
  background: transparent;
  cursor: pointer;
  font-size: 18px;
  font-weight: 300;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.check-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}
.checkmark {
    position: absolute;
    bottom: 10% ;
    left: 0%;
    height: 20px;
    width: 25px;
    background-color: #eee;
}
.check-container:hover input ~ .checkmark {
    background-color: #ccc;
}
.check-container input:checked ~ .checkmark {
    background-color: #2196F3;
}
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
.check-container input:checked ~ .checkmark:after {
    display: block;
}
.check-container .checkmark:after {
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

.loader--div {
  position: absolute;
  top: 15vh;
  left: 20vw;
  width: 60vw;
  height: 70vh;
  background: white;
  padding: 60px;
  border-radius: 10px;
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
</style>