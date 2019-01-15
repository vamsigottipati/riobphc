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
    }
  },
  mounted: function () {
    this.setOrderDet()
  },
  methods: {
    setOrderDet () {
      var vm = this
      firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then(function (snapshot) {
        console.log(snapshot.val().requestsR)
        vm.requestDetails = snapshot.val().requestsR
        vm.cartNumber = Object.values(snapshot.val().requestsR).length
        vm.loading = false
      })
    },
    payment (e) {
      console.log(e)
      var vm = this
      // perform payment logic
      this.$http.get('https://us-central1-rio-travels.cloudfunctions.net/hello?name=' + vm.requestDetails[e].price).then(
        resp => {
          console.log(resp.body)
          if (resp.body) {
            console.log('yo ! perform cart deletion and event bus')
          // change EventBus
          // EventBus.$emit('cartUpdate', this.cartNumber)
          } else {
            alert('Payment Is Not Done')
          }
        }
      )
      // remove items from the cart
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

