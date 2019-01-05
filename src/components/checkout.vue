<template>
    <div class="checkout--page--body">
        <navSide />
        <div class="main--content">
            <vuestic-widget  headerText='Address And Details'>
                <div class="add--main" style="text-align: center;" v-for="itemDetail in itemDetails" :key="itemDetail.id">
                    <img class="img well" style="width: auto; height: 40vh; margin-left: auto;margin-right: auto;" :src="itemDetail.itemImg" alt=""> <br>
                    <div class="add--text" style="width: 40vw;color: #444;margin-top: 50px;text-align: left;margin-left:9.375vw;"><strong style="float: left;"> Address </strong>  <p style="float:right;text-align: center;">{{ itemDetail.address }}</p></div> <br>
                    <div class="add--text" style="width: 40vw;color: #444;margin-top: 20px;text-align: left;margin-left:9.375vw;margin-bottom: 60px;"><strong style="float: left;"> City </strong>  <p style="float:right;text-align: center;">{{ itemDetail.city }}</p></div> <br>
                    <div class="well" ref="google--map" style="height: 60vh;"></div>
                    <hr style="margin-top: 30px;">
                </div> 
            </vuestic-widget>   
            <vuestic-widget  headerText='Payment'>
                <button style="all: unset;background: #642B73;color: white;border-radius: 5px;padding: 15px;cursor: pointer;" @click.prevent="checkout"> Pay Now </button>
            </vuestic-widget>   
        </div>
        <div class="right--content">
            <vuestic-widget headerText='Order Details' style="height: 80vh;">
                <div class="scrollable" style="height: 55vh;overflow: auto;">
                    <div style="width: 30vw;" v-for="itemDetail in itemDetails" :key="itemDetail.id">
                        <div style="margin-top: 30px;margin-bottom:20px;"><strong style="float: left;"> Name </strong>  <p style="float:right;text-align: center;">{{ itemDetail.itemName }}</p></div> <br>
                        <div style="margin-top: 30px;margin-bottom:20px;"><strong style="float: left;"> Owner </strong>  <p style="float:right;text-align: center;">{{ itemDetail.itemOwner }}</p></div> <br>
                        <div style="margin-top: 30px;margin-bottom:20px;"><strong style="float: left;"> Price </strong>  <p style="float:right;text-align: center;">₹ {{ itemDetail.price }}</p></div> <br>
                        <div style="margin-top: 30px;"><label for="days" style="font-weight: 800;padding-top: 10px;">Days</label> <input class="day" :id="itemDetail.itemId" style="float: right;font-weight: 900;" type="number" name="days" placeholder="0 Days"></div>
                        <hr style="margin-top: 30px;">
                    </div>
                </div>
                <div style="text-align: center;"><input type="checkbox" v-model="check" name="agree" id="checkbox" style="margin-right: 30px;margin-top: 20px;"><label for="agree">I agree to the terms and conditions...</label></div>
                <p style="width: 30vw;padding-left: 5vw;padding-right: 5vw;margin-top: 20px;text-align: center;"><strong style="margin-right:30px;">Total Amount Payable : </strong> ₹ {{ totalAmount }}</p>
            </vuestic-widget>
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
      transactionId: '',
      currentUser: '',
      lister: [],
      check: '',
      totalAmount: 0,
    }
  },
  mounted: function () {
    this.getData()
    this.currentUser = firebase.auth().currentUser.uid
  },
  watch: {
    check (n, o) {
      if (n != null) {
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
      console.log(this.totalAmount)
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
        console.log(vm.cartItems)
      })
    },
    setData (a) {
      var vm = this
      for (let i = 0; i < a.length; i++) {
        firebase.database().ref('listedItems/' + a[i]).once('value').then(function (snapshot) {
          vm.itemDetails.push(snapshot.val())
          vm.lister.push(snapshot.val().itemOwner)
          console.log(vm.itemDetails)
        })
      }
    },
    checkout () {
      var vm = this
      if (document.getElementById('checkbox').checked) {
        for (let i = 0; i < vm.itemDetails.length; i++) {
          if (document.getElementById(vm.itemDetails[i].itemId).value) {
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            for (let i = 0; i < 15; i++) {
              this.transactionId += possible.charAt(Math.floor(Math.random() * possible.length))
            }
            console.log(this.transactionId)
            firebase.database().ref('transactions/' + vm.transactionId).set({
              transactionId: vm.transactionId,
              renter: vm.currentUser,
              lister: vm.lister[i],
              price: (document.getElementById(vm.itemDetails[i].itemId).value * vm.itemDetails[i].price),
              days: document.getElementById(vm.itemDetails[i].itemId).value,
            })
            firebase.database().ref('users/' + vm.userId + '/transactions/' + vm.transactionId).set({
              transactionId: vm.transactionId,
              renter: vm.currentUser,
              lister: vm.lister[i],
              price: (document.getElementById(vm.itemDetails[i].itemId).value * vm.itemDetails[i].price),
              days: document.getElementById(vm.itemDetails[i].itemId).value,
            })
            firebase.database().ref('users/' + vm.itemDetails[i].itemOwnerId + '/transactions/' + vm.transactionId).set({
              transactionId: vm.transactionId,
              renter: vm.currentUser,
              lister: vm.lister[i],
              price: (document.getElementById(vm.itemDetails[i].itemId).value * vm.itemDetails[i].price),
              days: document.getElementById(vm.itemDetails[i].itemId).value,
            })
            firebase.database().ref('users/' + vm.userId + '/ordersR/' + vm.itemDetails[i].itemId).set({
              transactionId: vm.transactionId,
              lister: vm.lister[i],
              price: (document.getElementById(vm.itemDetails[i].itemId).value * vm.itemDetails[i].price),
              days: document.getElementById(vm.itemDetails[i].itemId).value,
              itemDetails: vm.itemDetails[i],
            })
            firebase.database().ref('users/' + vm.itemDetails[i].itemOwnerId + '/ordersL/' + vm.itemDetails[i].itemId).set({
              transactionId: vm.transactionId,
              renter: vm.currentUser,
              price: (document.getElementById(vm.itemDetails[i].itemId).value * vm.itemDetails[i].price),
              days: document.getElementById(vm.itemDetails[i].itemId).value,
              itemDetails: vm.itemDetails[i],
            })
            firebase.database().ref('holdItems/' + vm.itemDetails[i].itemId).set({
              transactionId: vm.transactionId,
              renter: vm.currentUser,
              price: (document.getElementById(vm.itemDetails[i].itemId).value * vm.itemDetails[i].price),
              days: document.getElementById(vm.itemDetails[i].itemId).value,
              itemDetails: vm.itemDetails[i],
            })
            firebase.database().ref('listedItems/' + vm.itemDetails[i].itemId).remove()
            firebase.database().ref('users/' + vm.userId + '/cart').remove()
            // send a http request to get a otp that must be given to renter and lister
            // set field to get a messagable peoplpe list
            // init msg
            this.transactionId = ''
          } else {
            alert('Please Select The Number Of Days')
          }
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

</style>