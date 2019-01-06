<template>
    <div class="checkout--page--body">
        <navSide />
        <vuestic-widget id="order--widget" headerText='Order And Request'>
            <div class="order-main">
              <img src="https://firebasestorage.googleapis.com/v0/b/rio-travels.appspot.com/o/listemItemPhotos%2F0jbNT15467945068924.jpg?alt=media&token=1468ef1d-dc78-473f-9bdd-7d67eef71a83" style="max-height: 50vh;width: auto;margin: 30px;float: left;padding-right: 10vw;" alt="">  
              <div style="transform: translateY(50%);">
                <p style="float:left;width: 10vw;text-align:left;"> <strong> Item Name </strong> </p><p style="font-family: Montserrat;"> Some Name </p> <br>
                <p style="float:left;width: 10vw;text-align:left;"> <strong> Item ID </strong> </p><p style="font-family: Montserrat;">Some Name</p> <br>
                <p style="float:left;width: 10vw;text-align:left;"> <strong> Item Owner </strong> </p><p style="font-family: Montserrat;">Some Name</p> <br>
                <p style="float:left;width: 10vw;text-align:left;"> <strong> Item Status </strong> </p><p style="font-family: Montserrat;">Some Name</p> <br>
              </div>
            </div>          
        </vuestic-widget>
        <div class="main--content">
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
        <div class="right--content">
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
    }
  },
  mounted: function () {
    this.getData()
    // this.checkStat()
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
    // checkStat () {},
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
            console.log(this.requestId)
            // requests & Accepts
            /* firebase.database().ref('users/' + vm.userId + '/requestsR/' + vm.itemDetails[i].itemId).set({
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
            }) */
            this.requestId = ''
            counter = counter + 1
          } else {
            alert('Please Select The Number Of Days')
          }
        }
        if (counter >= vm.itemDetails.length) {
          document.getElementById('address--widget').style.display = 'none'
          document.getElementById('request--widget').style.display = 'none'
          document.getElementById('details--widget').style.display = 'none'
          document.getElementById('order--widget').style.display = 'block'
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

#order--widget {
  display: none;
  width: 95vw;
  margin-left: 2.5vw;
  min-height: 80vh;
  margin-top: 17.5vh;
}

</style>