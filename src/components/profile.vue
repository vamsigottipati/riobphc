<template>
	<div>
		<navSide></navSide>
		<!-- 
      Get friends list
      Get rentals if any
      Get listed if any
      Show otp if any
      Show current Orders if any
    -->
		<main id="content">
			<vuestic-widget style="width: 100%;min-height: 70vh;" headerText='Current Orders'>
				<vuestic-tabs :names="['Rentals', 'Listings']" >
						<div slot="Rentals" class="" style="min-height: 20vh;text-align: center;">
							<h4 v-if="!this.orderedRentals" style="margin-top: 15vh;">No Rental Orders ...</h4>
							<div v-if="this.orderedRentals">
								<div class="row" :key="singleOrderedRental.itemId" v-for="singleOrderedRental in this.orderedRentals">
									<div class="col-md-1"></div>	
									<div class="col-md-10">
										<p> If You have completed the rental period of your order please tell the otp below to the owner</p>
										<p>Your Otp to end the rental period of the order of a {{ singleOrderedRental.itemName }} from {{ singleOrderedRental.itemOwner }} is <br> <strong style="font-size: 2rem;"> {{ singleOrderedRental.otpR }} </strong> </p>
										<p> Befor You take the Item Please enter The Otp from the owner. </p> <br>
										<input v-model="otpL" class="otpInput" type="number">
										<button @click="rentalPeriodStart(singleOrderedRental.itemId)" style="font-size: 12px;" class="btn btn-micro btn-secondary"> Submit </button>
									</div>
								</div>
							</div>
						</div>
						<div slot="Listings" class="" style="min-height: 20vh;text-align: center;">
							<h4 v-if="!this.orderedListings" style="padding-top: 15vh">No Listing Orders ...</h4>
							<div v-if="this.orderedListings">
								<div class="row" :key="singleOrderedListings.itemId" v-for="singleOrderedListings in this.orderedListings">
									<div class="col-md-1"></div>	
									<div class="col-md-10">
										<p>To start the rental period of the item tell the below otp to the renter.</p>
										<p>Your OTP for the order of a {{ singleOrderedListings.itemName }} is <br> <strong style="font-size: 2rem;"> {{ singleOrderedListings.otpL }} </strong> </p><br>
										<p> Befor You take the Item Please enter The Otp from the renter to complete the rental period. </p>
										<input v-model="otpR" class="otpInput" type="number">
										<button @click="rentalPeriodEnd(singleOrderedListings.itemId)" style="font-size: 12px;" class="btn btn-micro btn-secondary"> Submit </button>
									</div>
								</div>
							</div>
						</div>
				</vuestic-tabs>
			</vuestic-widget>
			<vuestic-widget style="width: 100%;" headerText='Profile Details'>
				<vuestic-tabs :names="['Profile','Update']" ref="tabs">
					<div slot="Profile" class="well">
						<div class="row" style="margin-top: 30px;margin-bottom: 30px;">
              <div class="col-md-2"></div>
							<div class="col-md-8">
                <div class="row"  style="text-align: center;">
                  <div class="col-md-4"></div>
                  <div class="col-md-4" ><img src="https://firebasestorage.googleapis.com/v0/b/rio-travels.appspot.com/o/profile_pic.svg?alt=media&token=b5686843-6473-4849-999b-da06feefd5fb" class="profilepic" style="margin-right: 30px;" />	<b style="font-size: 1.6rem;">{{this.userDetails.username}}</b></div>
                </div>
								<hr style="margin-top: 50px;">
								<div class="row" style="margin-top: 40px;">
                  <div class="col-md-2"></div>
									<div class="col-md-4">	<i class='bx bxs-map' style="margin-right: 30px;"></i> &nbsp;	<span>Hyderabad</span></div>
									<div class="col-md-4">	<i class="bx bxs-phone-call" style="margin-right: 30px;"></i>
										&nbsp;	<span>{{this.userDetails.phoneNum}}</span>
									</div>
								</div>
								<div class="row" style="margin-top: 20px;margin-bottom: 40px;">
                  <div class="col-md-2"></div>
									<div class="col-md-4">	<i class='bx bxl-google-plus' style="margin-right: 30px;"></i> &nbsp;	<span>{{this.userDetails.email}}</span></div>
									<div class="col-md-4">	<i class="bx bx-info-circle" style="margin-right: 30px;"></i>
										&nbsp;	<span>{{this.userDetails.accStatus}}</span>
									</div>
								</div>
								<hr>
								<div class="row" style="text-align: center;margin-top: 40px;">
                  <div class="col-md-4"></div>
									<div class="col-md-4">	
                    <b>About</b>
									</div>
								</div>
                <div class="row" style="text-align: center;margin-bottom: 10px;margin-top: 10px;">
                  <div class="col-md-1"></div>
                  <div class="col-md-10">
                    <p>{{this.userDetails.description}}</p>
                  </div>
                </div>
							</div>
						</div>
					</div>
					<div slot="Update" style="text-align: center;" class="well">
            <div class="row" style="text-align: center;padding: 30px;">
              <div class="col-md-4"></div>
              <div class="col-md-4"> 
                <h4> Update Your Details </h4>
              </div>
            </div>
						<div class="row" style="margin-top: 40px;">
              <div class="col-md-1"></div>
							<div class="col-md-10">
								<div class="row">
                  <div class="col-md-1"></div>
									<div class="col-md-4">
										<div class="form-group">
											<div class="input-group">
												<input type="text" value="John Doe" v-model="curName" required="required" />	<i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
												<i class="fa fa-check valid-icon icon-right input-icon"></i>
												<label class="control-label">Name</label>	<i class="bar"></i>
												<br>
											</div>
										</div>
									</div>
                  <div class="col-md-2"></div>
									<div class="col-md-4">
										<div class="form-group">
											<div class="input-group">
												<input type="text" v-model="curAdd" value="Room VK250, BITS Pilani Hyderabad Campus, Hyderabad, Telangana" required="required" />	<i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
												<i class="fa fa-check valid-icon icon-right input-icon"></i>
												<label class="control-label">Address</label>	<i class="bar"></i>
												<br>
											</div>
										</div>
									</div>
								</div>
								<div class="row">
                  <div class="col-md-1"></div>
									<div class="col-md-4">
										<div class="form-group">
											<div class="input-group">
												<select>
													<option>Male</option>
													<option>Female</option>
													<option>Other</option>
													<option>Hidden</option>
												</select>	<i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
												<i class="fa fa-check valid-icon icon-right input-icon"></i>
												<label class="control-label">Gender</label>	<i class="bar"></i>
												<br>
											</div>
										</div>
									</div>
                  <div class="col-md-2"></div>
									<div class="col-md-4">
										<div class="form-group">
											<div class="input-group">
												<textarea type="text" v-model="curDescription" required="required">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>	<i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
												<i class="fa fa-check valid-icon icon-right input-icon"></i>
												<label class="control-label">About You ( Bio )</label>	<i class="bar"></i>
												<br>
											</div>
										</div>
									</div>
								</div>
								<div class="row">
                  <div class="col-md-1"></div>
									<div class="col-md-4">
										<div class="form-group">
											<div class="input-group">
												<input type="number" v-model="curPhNum" max="9999999999" required="required" />	<i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
												<i class="fa fa-check valid-icon icon-right input-icon"></i>
												<label class="control-label">Contact Number</label>	<i class="bar"></i>
												<br>
											</div>
										</div>
									</div>
                  <div class="col-md-2"></div>
									<div class="col-md-4">
										<div class="form-group">
											<div class="input-group">
												<input type="email" v-model="curEmail" value="john.doe@example.com" required="required" />	<i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
												<i class="fa fa-check valid-icon icon-right input-icon"></i>
												<label class="control-label">Email Address</label>	<i class="bar"></i>
												<br>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<br>
						<h5 v-if="this.updatedDetails"> Details Are Updated . </h5>
						<br>
						<!-- <hr style="width: 80%;margin-bottom: 40px;">	-->
            <button class="btn submitBtn" @click="updateUserDetails" style="margin-top: 50px;">Save Changes</button>
					</div>
					<!-- 
					<div slot="People" class="well">
            <div class="row" style="margin-top: 30px; margin-bottom: 40px;text-align: center;">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                <h4>People You Contacted</h4>
               <span class="alert alert-info" style="padding: 30px;text-align:center;background: linear-gradient(90deg , #642B73, #C6426E);color: white;border-radius: 5px;">This area contains the list of all the people you have interacted with over time.</span>
              </div>
            </div>
						<div class="row person" style="margin-top:50px;">
              <div class="col-md-2"></div>
							<div class="col-md-2" style="text-align: right;">
								<img src="../assets/iman.jpg" />
							</div>
              <div class="col-md-1"></div>
							<div class="col-md-5" style="text-align: left;">	
                <b>Vamsi Krishna</b>
								<br>
								<p>	<i class="bx bx-info-circle"></i> &nbsp;You borrowed	<b>World History Textbook...</b> from them on 20-12-2018</p>
								<p>
									<div class="row">
										<div class="col-md-6">
											<a class="special-button" href="#" style="margin-top: 50px;">	<i class='bx bx-message' style=""></i> Contact</a>
										</div>
									</div>
								</p>
							</div>
						</div>
						<hr style="margin-top: 30px;margin-bottom: 30px;width: 75%;">
					</div>
					-->
				</vuestic-tabs>
			</vuestic-widget>
			<div class="row">
				<div ref="rentals" class="col-md-6">
					<vuestic-widget style="height: 80vh;overflow: none;" headerText='Rentals'>
						<div style="margin-top: 35%;" class="row" v-if="!this.rentalDetails">
							<div class="col-md-3"></div>
							<div class="col-md-6" style="text-align: center;">
								<h4>You Have No Rentals Done</h4>
								<router-link to="/rent">View All The Available Items </router-link>
							</div>
						</div>
						<div v-if="this.rentalDetails">
							<div :key="singleItem.itemId" v-for="singleItem in rentalDetails">
								<div class="row" style="margin-top: 50px;margin-bottom: 50px;">
									<div class="col-md-4">
										<img class="preview-lr" :src="singleItem.itemImg" />
									</div>
									<div class="col-md-8">	<p class="lr-link">{{singleItem.itemName}}</p>
										<div class="row">
											<div class="col-md-6">	<p> ₹ {{singleItem.price}}</p>
											</div>
											<div class="col-md-6">	<p> <i class="bx bxs-map" style="margin-right: 20px;"></i> {{singleItem.city}} </p>
											</div>
										</div>
										<br>
										<div class="row" style="margin-top: 10px;">
											<div class="col-md-5"><a class="special-button" href="#">Remove Listing</a></div>
										</div>
									</div>
								</div>
								<hr>
							</div>
						</div>
					</vuestic-widget>
				</div>
				<div ref="listings" class="col-md-6">
					<vuestic-widget style="height: 80vh;overflow: none;" headerText='Listings'>
						<div class="row" v-if="!this.listingDetails">
							<div class="col-md-3"></div>
							<div class="col-md-6" style="text-align: center;">
								<h4>You Have No Listing Done</h4>
								<router-link to="/list"> Add a Listing Of Yours </router-link>
							</div>
						</div>
						<div v-if="this.listingDetails">
							<div :key="singleItem.itemId" v-for="singleItem in listingDetails">
								<div class="row" style="margin-top: 50px;margin-bottom: 50px;">
									<div class="col-md-4">
										<img class="preview-lr" :src="singleItem.itemImg" />
									</div>
									<div class="col-md-8">	<p class="lr-link">{{singleItem.itemName}}</p>
										<div class="row">
											<div class="col-md-6">	<p> ₹ {{singleItem.price}}</p>
											</div>
											<div class="col-md-6">	<p> <i class="bx bxs-map" style="margin-right: 20px;"></i> {{singleItem.city}}</p>
											</div>
										</div>
										<br>
										<div class="row" style="margin-top: 10px;">
											<div class="col-md-5"><a class="special-button" href="#">Remove Listing</a></div>
										</div>
									</div>
								</div>
								<hr>
							</div>
						</div>
					</vuestic-widget>
				</div>
			</div>
		</main>
	</div>
</template>
<script>
	import Layout from 'vuestic-theme/vuestic-directives/Layout'
	import navSide from './nav-side'
	import * as firebase from 'firebase'
	export default {
	  name: 'profile',
	  props: {
	  },
	  components: {
	    navSide,
	  },
	  directives: {
	    layout: Layout,
	  },
	  data () {
	    return {
				userId: '',
				curName: '',
				curPhNum: '',
				curDescription: '',
				curEmail: '',
				otpR: '',
				otpL: '',
				curAdd: 'Current Address Is Not Given',
				cartDetails: '',
				updatedDetails: false,
				userDetails: {
					username: '',
					phoneNum: '',
					email: '',
					gender: '',
					description: '',
					accStatus: ''
				},
				rentalDetails: [],
				listingDetails: [],
				orderedRentals: [],
				orderedListings: []
	    }
	  },
	  computed: {
	  },
	  mounted: function () {
			this.setData()
			this.getData()
	  },
	  methods: {
	    setData () {
	      this.userId = firebase.auth().currentUser.uid
	      console.log(this.userId)
			},
			getData () {
				var vm = this
				firebase.database().ref('users/' + vm.userId).once('value').then(snapshot => {
					console.log(snapshot.val())
					var resp = snapshot.val()
					vm.userDetails.username = resp.Username
					vm.userDetails.phoneNum = resp.phoneNumber
					vm.userDetails.email = resp.email
					vm.userDetails.description = resp.description
					vm.userDetails.gender = resp.gender
					vm.userDetails.accStatus = resp.accStatus
					// set address
					if (resp.address) {
						vm.curAdd = resp.address
					}
					// set listedItems
					if (resp.listedItems) {
						vm.listingDetails = Object.values(resp.listedItems)
					} else {
						vm.listingDetails = null
					}
					// successfulRentals
					if (resp.successfulRentals) {
						vm.rentalDetails = Object.values(resp.successfulRentals)
					} else {
						vm.rentalDetails = null
					}
					// set orderedRentals
					if (resp.orderedR) {
						vm.orderedRentals = Object.values(resp.orderedR)
						console.log(vm.orderedRentals)
					} else {
						vm.orderedRentals = null
					}
					// set orderedListings
					if (resp.orderedL) {
						vm.orderedListings = Object.values(resp.orderedL)
						console.log(vm.orderedListings)
					} else {
						vm.orderedListings = null
					}
					vm.curName = resp.Username
					vm.curPhNum = resp.phoneNumber
					vm.curDescription = resp.description
					vm.curEmail = resp.email
				})
			},
			updateUserDetails () {
				var vm = this
				this.updatedDetails = true
				setTimeout(() => {
					this.updatedDetails = false
				}, 10000)
				firebase.database().ref('users/' + vm.userId).set({
          Username: vm.curName,
          phoneNumber: vm.curPhNum,
          email: vm.curEmail,
          description: vm.curDescription,
					accStatus: 'Free Account',
					address: vm.curAdd
				})
			},
			rentalPeriodStart (s) {
				if (this.otpL) {
					console.log('check otp entered using firebase cloud functions', s)
					var otpLC = this.otpL
					firebase.database().ref('currentOrders/' + s).once('value').then(
						resp => {
							if (resp.val().otpL === otpLC) {
								alert('yo')
								firebase.database().ref('ongoingOrders/' + resp.val().itemId).set(resp.val())
								// add ongoing rentals ref in database
								// delete orderedR and push data to ongoingR
								firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/ongoingOrders/' + resp.val().itemId).set(resp.val())
								firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/orderedR/' + resp.val().itemId).remove()
								firebase.database().ref('currentOrders/' + s).remove()
							} else {
								alert('Naah')
							}
						}
					)
				} else {
					console.log('Enter The Otp')
				}
			},
			rentalPeriodEnd (e) {
				if (this.otpR) {
					console.log('check otp entered using firebase cloud functions', e)
					var otpRC = this.otpR
					firebase.database().ref('ongoingOrders/' + e).once('value').then(
						resp => {
							if (resp.val().otpR === otpRC) {
								alert('yo yo ')
								firebase.database().ref('successfulOrders/' + resp.val().itemId).set(resp.val())
								firebase.database().ref('ongoingOrders/' + resp.val().itemId).remove()
								// remove orderedL and add to succesful in curuser and renter
								firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/successfulListing/' + resp.val().itemId).set(resp.val())
								firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/orderedL/' + resp.val().itemId).remove()
								firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/successfulRentals/' + resp.val().itemId).set(resp.val())
								firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/ongoingOrders/' + resp.val().itemId).remove()
							} else {
								alert('no no no')
							}
						}
					)
				} else {
					console.log('Enter The Otp')
				}
			}
	  }
	}
</script>
<style scoped>
	.person .special-button{
	  max-width:200px;
	}
	main {
	  position: absolute;
	  top: 17.5vh;
	  left: 2.5vw;
	  width: 95vw;
	  min-height: 80vh;
	}
	.profilepic{
	  width:100px;
	  height:100px;
	  background:rgb(200,200,200);
	  margin:10px;
	  border-radius:50%;
	}
	.recently{
	  width:100%;
	  height:200px;
	  object-fit: cover;
	}
	.preview-lr{
	  width:100%;
	  height:150px;
	  object-fit: cover;
	}
	.lr-link{
	  color:grey;
	  font-size:120%;
	  margin-bottom:10px;
	  display: block;
	}
	.special-button{
	  width: 100%;
	  display: block;
	  background: linear-gradient(90deg , #642B73, #C6426E);;
	  text-align: center;
	  padding: 10px;
	  color: white;
	  border-radius: 5px;
	  margin-bottom: 2px;
	}
	.edit-profile{
	  width:100%;
	  background: grey;
	}
	.privacy select{
	  float: right;
	  background: linear-gradient(90deg , #642B73, #C6426E);
	  padding:15px;
	  outline:none;
	  color:white;
	  clear: both;
	  border:0px;
	  border-radius:5px;
	  margin-bottom:3px;
	}
	.privacy select option{
	  color:black;
	}
	.sb-alt{
	  background:#bc38ff;
	  display: inline;
	  padding:10px 40px 10px 40px;
	}
	.special-button:hover{
	  background: grey !important;
	}
	.account-type{
	  padding:40px;
	  background:linear-gradient(90deg , #642B73, #C6426E);
	  color:white;
	  border-radius:10px;
	  text-align:center;
	  font-size:120%;
	}
	.free-acc{
	  font-size: 200%;
	  font-weight: bold;
	}
	.person img{
	  max-width:80%;
    max-height: 150px;
	  transition: 1s all;
    border: 10px solid #C6426E;
	  border-radius:5000px;
	}
	.person:hover{
	  background: rgb(240,240,240);
	}
	.prefs .spcl{
	  padding:20px;
	}
  .submitBtn {
    border-radius: 5px;
    background: linear-gradient(90deg , #642B73, #C6426E);
    color: white;
    padding: 15px 50px 15px 50px;
		font-size: 12px;
  }
	.otpInput {
		all: unset;
		height: 40px;
		width: 50%;
		background: #eeeeee;
		color: #555555;
		font-size: 12px;
		border-radius: 200px;
	}

</style>