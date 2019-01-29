<template>
    <div>
      <navSide />
      <div class="order--main" v-if="!this.loading">
        <vuestic-widget id="order--widget" headerText='Order And Request'>
          <div style="text-align: center;" v-for="rDet in requestDetails" :key="rDet.itemDetails.itemId" :id="rDet.requestId">
            <div style="text-align: center;display: flex;">
              <div style="width: 50vw;margin: 50px;" class="well">
                <img :src="rDet.itemDetails.itemImg" style="max-width: 50vw; height: 40vh;" alt="">  
              </div>
              <div style="width: 50vw;margin: 50px;" class="well">
                <div style="float:left;background: white;height: 100%;width: 50%;font-family: Montserrat;font-weight: 400;"><p style="height: 10%;margin-bottom: 10%;margin-top: 10%;">Item Name</p> <br> <p style="height: 10%;margin-bottom: 10%"> Item Price </p> <br> <p style="height: 10%;margin-bottom: 10%"> Owner </p> <br> <p style="height: 10%;margin-bottom: 10%"> Status </p> <br> </div>
                <div style="float:right;background: white;height: 100%;width: 50%;font-family: Montserrat;font-weight: 600;"><p style="height: 10%;margin-bottom: 10%;margin-top: 10%;">{{ rDet.itemDetails.itemName.toUpperCase() }}</p> <br> <p style="height: 10%;margin-bottom: 10%">₹ {{ rDet.itemDetails.price.toUpperCase() }} </p> <br> <p style="height: 10%;margin-bottom: 10%"> {{ rDet.itemDetails.itemOwner.toUpperCase() }} </p> <br> <p style="height: 10%;margin-bottom: 10%"> {{ rDet.status }} </p> <br> </div>
              </div>
            </div>
            <button @click.prevent="payment(rDet.itemDetails.itemId)" class="pay-btn" v-if="rDet.status"><strong style="margin-right: 30px;font-weight:500;font-size: 1.2rem;font-family: Montserrat;">Pay</strong> ₹ {{rDet.itemDetails.price}}</button>
            <p v-if="!rDet.status" style="width: 60%;margin-left: 20%;margin-top: 30px;">Your Rental Item request is not accepted by the owner <strong style="margin-left: 10px;font-size: 20px;margin-right: 10px;"> {{ rDet.itemDetails.itemOwner }} </strong>yet . We will send a notification to the later and if he doesnot accept or reject your request we will automatically cancel the same within 24Hr. </p>
            <br><br>
            <hr style="width: 80%;height:2px;border:none;color:#666;background-color:#777;opacity: 0.5;">
          </div>
        </vuestic-widget>
        <vuestic-widget class="no_display" ref="paymentCont" id="renderer"> 

        </vuestic-widget>
      </div>
    </div>
</template>

<script>
import * as firebase from 'firebase'
import navSide from './nav-side'
// import { EventBus } from 'src/main.js'
export default {
  name: 'order',
  components: {
    navSide
  },
  data () {
    return {
      requestDetails: [],
      loading: true,
      cartNumber: '',
      options: {},
      curUserId: '',
      cartItemKeys: [],
      cartItemValues: [],
      is_script_loading: false
    }
  },
  mounted: function () {
    this.setOrderDet()
  },
  created () {
  },
  methods: {
    setOrderDet () {
      var vm = this
      this.curUserId = firebase.auth().currentUser.uid
      firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then(function (snapshot) {
        console.log(snapshot.val().requestsR)
        vm.requestDetails = snapshot.val().requestsR
        vm.cartItemKeys = Object.keys(snapshot.val().cart)
        vm.cartItemValues = Object.values(snapshot.val().cart)
        vm.cartNumber = Object.values(snapshot.val().requestsR).length
        vm.loading = false
      })
    },
    payment (e) {
      console.log(e)
      var vm = this
      var txnId = ''
      var txnPoss = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      for (let i = 0; i < 8; i++) {
        txnId += txnPoss.charAt(Math.floor(Math.random() * txnPoss.length))
      }
      firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/pendingPayments/' + vm.requestDetails[e].itemDetails.itemId).set({
        txnId: txnId,
        price: vm.requestDetails[e].itemDetails.price,
        itemName: vm.requestDetails[e].itemDetails.itemName,
      })
      window.location.href = 'http://localhost:3000'
      /* var otpPoss = '1234567890'
      var otpR = ''
      for (let i = 0; i < 8; i++) {
        otpR += otpPoss.charAt(Math.floor(Math.random() * otpPoss.length))
      }
      var temp = (Object.values(vm.cartItemValues).indexOf(e))
      // perform payment logic
      this.$http.post('https://us-central1-rio-travels.cloudfunctions.net/hello', vm.requestDetails[e].price).then(
        resp => {
          if (resp.body) {
            console.log(resp.body)
          // change EventBus
            EventBus.$emit('cartUpdate', this.cartNumber)
          // empty cart
            firebase.database().ref('users/' + vm.curUserId + '/requestsR/' + e).remove()
            firebase.database().ref('users/' + vm.curUserId + '/cart/' + Object.values(vm.cartItemKeys)[temp]).remove()
            // set successful database entry in renter and lister
            firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/acceptedR/' + vm.requestDetails[e].itemDetails.itemId).set({
              renter: firebase.auth().currentUser.uid,
              lister: vm.requestDetails[e].itemDetails.itemOwner,
              otpR: otpR,
              transactionId: 'tId',
              itemDetails: vm.requestDetails[e].itemDetails,
              days: vm.requestDetails[e].days,
              price: vm.requestDetails[e].price
            })
            // set waitingOrders
            firebase.database().ref('waitingOrders/' + vm.requestDetails[e].itemDetails.itemId).set({
              renter: firebase.auth().currentUser.uid,
              lister: vm.requestDetails[e].itemDetails.itemOwner,
              otpR: otpR,
              transactionId: 'tId',
              itemDetails: vm.requestDetails[e].itemDetails,
              days: vm.requestDetails[e].days,
              price: vm.requestDetails[e].price
            })
            firebase.database().ref('listedItems/' + e).remove()
            // start and stop button
            vm.$router.push('home')
          // remove items froms requests
          } else {
            alert('Payment Is Not Done')
          }
        }
      ) */
    }
  }
}
</script>

<style scoped>
  #order--widget {
    display: block;
    width: 95vw;
    margin-left: 2.5vw;
    min-height: 80vh;
    margin-top: 17.5vh;
  }
  .pay-btn {
    all: unset;
    background: linear-gradient(90deg , #642B73, #C6426E);
    padding: 20px 40px 20px 40px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
	  -webkit-animation: boxShadow 0.4s ease-in both;
	    animation: boxShadow 0.4s ease-in both;
  }

.no_display {
  display: none;
}


@-webkit-keyframes boxShadow {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 1), 0 12px 20px -12px rgba(0, 0, 0, 1);
  }
}
@keyframes boxShadow {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 1), 0 12px 20px -12px rgba(0, 0, 0, 1);
  }
}

</style>

