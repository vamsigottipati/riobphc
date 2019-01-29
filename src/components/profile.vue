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
			<vuestic-widget style="width: 100%;" headerText='Profile Details'>
				<vuestic-tabs :names="['Profile','Update', 'People']" ref="tabs">
					<div slot="Profile" class="well">
						<div class="row" style="margin-top: 30px;margin-bottom: 30px;">
              <div class="col-md-2"></div>
							<div class="col-md-8">
                <div class="row"  style="text-align: center;">
                  <div class="col-md-4"></div>
                  <div class="col-md-4" ><img src="../assets/iman.jpg" class="profilepic" style="margin-right: 30px;" />	<b style="font-size: 1.6rem;">John Doe</b></div>
                </div>
								<hr style="margin-top: 50px;">
								<div class="row" style="margin-top: 40px;">
                  <div class="col-md-2"></div>
									<div class="col-md-4">	<i class='bx bx-map-pin' style="margin-right: 30px;"></i> &nbsp;	<span>Hyderabad</span></div>
									<div class="col-md-4">	<i class="bx bx-dollar-circle" style="margin-right: 30px;"></i>
										&nbsp;	<span>Free Account</span>
									</div>
								</div>
								<div class="row" style="margin-top: 20px;margin-bottom: 40px;">
                  <div class="col-md-2"></div>
									<div class="col-md-4">	<i class='bx bx-newsletter' style="margin-right: 30px;"></i> &nbsp;	<span>johndoe@example.com</span></div>
									<div class="col-md-4">	<i class="bx bx-message" style="margin-right: 30px;"></i>
										&nbsp;	<span>Personal Messaging is allowed</span>
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
                    <p>I'm a student from BITS Pilani, Hyderabad Campus. Adipisicing elit, sed do eiumdod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                  </div>
                </div>
							</div>
						</div>
					</div>
					<div slot="Update" style="text-align: center;" class="well">
            <div class="row" style="text-align: center;padding: 30px;">
              <div class="col-md-4"></div>
              <div class="col-md-4"> 
                <h5> Upadte Your Details </h5>
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
												<input type="text" value="John Doe" required="required" />	<i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
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
												<input type="text" value="Room VK250, BITS Pilani Hyderabad Campus, Hyderabad, Telangana" required="required" />	<i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
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
												<label class="control-label">Sex</label>	<i class="bar"></i>
												<br>
											</div>
										</div>
									</div>
                  <div class="col-md-2"></div>
									<div class="col-md-4">
										<div class="form-group">
											<div class="input-group">
												<textarea type="text" required="required">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>	<i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
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
												<input type="tel" value="94382728378" required="required" />	<i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
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
												<input type="email" value="john.doe@example.com" required="required" />	<i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
												<i class="fa fa-check valid-icon icon-right input-icon"></i>
												<label class="control-label">Email Address</label>	<i class="bar"></i>
												<br>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- <hr style="width: 80%;margin-bottom: 40px;">	-->
            <a class="btn submitBtn" style="margin-top: 50px;" href="#">Save Changes</a>
					</div>
					<div slot="People" class="well">
            <div class="row" style="margin-top: 30px; margin-bottom: 40px;text-align: center;">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                <h4>People You Contacted</h4>
               <!-- <span class="alert alert-info" style="padding: 30px;text-align:center;background: linear-gradient(90deg , #642B73, #C6426E);color: white;border-radius: 5px;">This area contains the list of all the people you have interacted with over time.</span> -->
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
				</vuestic-tabs>
			</vuestic-widget>
			<div class="row">
				<div class="col-md-6">
					<vuestic-widget headerText='Rentals'>
						<div class="row">
							<div class="col-md-4">
								<img class="preview-lr" src="../assets/bpanther2.jpg" />
							</div>
							<div class="col-md-8">	<a href="#" class="lr-link">World History Textbook New conditio...</a>
								<div class="row">
									<div class="col">	<i class="bx bx-calendar" style="margin-right: 20px;"></i>
										<span>Till 20th Nov 2019</span>
									</div>
								</div>
								<br>
								<div class="row">
									<div class="col-md-6">	<a class="special-button" href="#">Ask for extension</a>
									</div>
									<div class="col-md-6">	<a class="special-button" href="#">Details</a>
									</div>
								</div>
							</div>
						</div>
						<hr>
						<div class="row">
							<div class="col-md-4">
								<img class="preview-lr" src="../assets/bpanther2.jpg" />
							</div>
							<div class="col-md-8">	<a href="#" class="lr-link">HP Laptop i7 7th gen 16gb...</a>
								<div class="row">
									<div class="col">	<i class="bx bx-calendar" style="margin-right: 20px;"></i>
										<span>Till 1st Oct 2019</span>
									</div>
								</div>
								<br>
								<div class="row">
									<div class="col-md-6">	<a class="special-button" href="#">Ask for extension</a>
									</div>
									<div class="col-md-6">	<a class="special-button" href="#">Details</a>
									</div>
								</div>
							</div>
						</div>
						<hr>
						<div class="row">
							<div class="col-md-4">
								<img class="preview-lr" src="../assets/bpanther2.jpg" />
							</div>
							<div class="col-md-8">	<a href="#" class="lr-link">1l water bottle filled...</a>
								<div class="row">
									<div class="col">	<i class="bx bx-calendar" style="margin-right: 20px;"></i>
										<span>Till 10th Nov 2019</span>
									</div>
								</div>
								<br>
								<div class="row">
									<div class="col-md-6">	<a class="special-button" href="#">Ask for extension</a>
									</div>
									<div class="col-md-6">	<a class="special-button" href="#">Details</a>
									</div>
								</div>
							</div>
						</div>
						<hr>	<a class="special-button sb-alt">View All</a>
					</vuestic-widget>
				</div>
				<div class="col-md-6">
					<vuestic-widget headerText='Listings'>
						<div class="row">
							<div class="col-md-4">
								<img class="preview-lr" src="../assets/iman.jpg" />
							</div>
							<div class="col-md-8">	<a href="#" class="lr-link">Queen sized mattress</a>
								<div class="row">
									<div class="col-md-6">	<p>  ₹50,000</p>
									</div>
									<div class="col-md-6">	<p> <i class="bx bxs-map" style="margin-right: 20px;"></i> Kachiguda</p>
									</div>
								</div>
								<br>
								<div class="row">
									<div class="col-md-6">	<a class="special-button" href="#">Remove Listing</a>
									</div>
									<div class="col-md-6">	<a class="special-button" href="#">Modify</a>
									</div>
								</div>
							</div>
						</div>
						<hr>
						<div class="row">
							<div class="col-md-4">
								<img class="preview-lr" src="../assets/iman.jpg" />
							</div>
							<div class="col-md-8">	<a href="#" class="lr-link">Beer Cooler</a>
								<div class="row">
									<div class="col-md-6">	<p>₹50,000</p>
									</div>
									<div class="col-md-6">	<p> <i class="bx bxs-map" style="margin-right: 20px;"></i> Kachiguda</p>
									</div>
								</div>
								<br>
								<div class="row">
									<div class="col-md-6">	<a class="special-button" href="#">Remove Listing</a>
									</div>
									<div class="col-md-6">	<a class="special-button" href="#">Modify</a>
									</div>
								</div>
							</div>
						</div>
						<hr>
						<div class="row">
							<div class="col-md-4">
								<img class="preview-lr" src="../assets/iman.jpg" />
							</div>
							<div class="col-md-8">	<a href="#" class="lr-link">Galaxy S8</a>
								<div class="row">
									<div class="col-md-6">	 <p>₹50,000</p>
									</div>
									<div class="col-md-6">	<p> <i class="bx bxs-map" style="margin-right: 20px;"></i> Kachiguda</p>
									</div>
								</div>
								<br>
								<div class="row">
									<div class="col-md-6">	<a class="special-button" href="#">Remove Listing</a>
									</div>
									<div class="col-md-6">	<a class="special-button" href="#">Modify</a>
									</div>
								</div>
							</div>
						</div>
						<hr>	<a class="special-button sb-alt">View All</a>
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
	      cartDetails: '',
	    }
	  },
	  computed: {
	  },
	  mounted: function () {
	    this.setData()
	  },
	  methods: {
	    setData () {
	      this.userId = firebase.auth().currentUser.uid
	      console.log(this.userId)
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
    padding: 25px 50px 25px 50px;
  }


</style>