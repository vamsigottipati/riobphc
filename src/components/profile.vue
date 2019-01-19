
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
    <main id="content" >
      <vuestic-widget style="width: 100%;" headerText='Profile Details'>
        <vuestic-tabs
          :names="['Profile','Update', 'People', 'Preferences']"
          ref="tabs">
          <div slot="Profile">
              <div class="row">


                <div class="col-md-6">
                    <img src="../assets/profile.jpg" class="profilepic">
                    &nbsp;<b>John Doe</b>
                    <hr>
                    <div class="row">
                      <div class="col-md-6">
                        <i class='bx bx-map-pin'></i> &nbsp; <span>Hyderabad</span>
                      </div>
                      <div class="col-md-6"><i class="bx bx-dollar-circle"></i>
                        &nbsp; <span>Free Account</span>
                      </div>
                    </div>
                                        <div class="row">
                      <div class="col-md-6">
                        <i class='bx bx-newsletter'></i> &nbsp; <span>johndoe@example.com</span>
                      </div>
                      <div class="col-md-6"><i class="bx bx-message"></i>
                        &nbsp; <span>Personal Messaging is allowed</span>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-md-12">
                        <b>About</b>
                        <p>I'm a student from BITS Pilani, Hyderabad Campus. Adipisicing elit, sed do eiumdod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris.</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <b>Privacy</b>
                    <div class="row">
                      <div class="col-md-6">
                        <i class='bx bx-info-circle'></i> &nbsp; <span>Peole can see your About</span>
                      </div>
                      <div class="col-md-6"><i class="bx bx-phone"></i>
                        &nbsp; <span>Phone no. is visible</span>
                      </div>
                    </div> 
                    <div class="row">
                      <div class="col-md-6">
                        <i class='bx bx-newsletter'></i> &nbsp; <span>Email is hidden</span>
                      </div>
                      <div class="col-md-6"><i class="bx bx-map-alt"></i>
                        &nbsp; <span>Address is hidden</span>
                      </div>
                    </div>                                            
                      </div>
                    </div>                    

                    


              </div>
                <div class="col-md-6">
                  
                <h5>Account Statistics</h5>
                <hr>
                <b>Total Rentings</b> <span>32</span><br>
                <b>Total Lendings</b> <span>2</span><br>
                <b>Total Earnings</b> <span>₹ 3200.00</span><br>
                <b>Total Spendings</b> <span>₹ 1200.00</span><br>
                <hr>
                <h5>You recently visited</h5>
                <div class="row">
                  <div class="col-md-4">

                    <a href="#"><img class="recently" src="../assets/sample1.jpg"></a>
                                  </div>
                    <div class="col-md-4">
                      <a href="#"><img class="recently" src="../assets/sample2.jpg"></a>
                                  </div>
                      <div class="col-md-4">
                        <a href="#"><img class="recently" src="../assets/sample3.jpg"></a>
                                  </div>
                      </div>




                                </div>
                              </div>
                          </div>
                          <div slot="Update">
                            <div class="row">
                              <div class="col-md-2">
                                <img class="edit-profile" src="../assets/profile.jpg"></img>
                                <br><br>
                                <a class="btn btn-primary" href="#">Change</a>
                              </div>
                              <div class="col-md-10">
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <input type="text" value="John Doe" required="required" />
                                        <i
                                                  class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                                        <i class="fa fa-check valid-icon icon-right input-icon"></i>
                                        <label class="control-label">Name </label><i class="bar"></i>
                                        <br>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <input type="text" value="Room VK250, BITS Pilani Hyderabad Campus, Hyderabad, Telangana" required="required" />
                                        <i
                                                  class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                                        <i class="fa fa-check valid-icon icon-right input-icon"></i>
                                        <label class="control-label">Address </label><i class="bar"></i>
                                        <br>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <select>
                                          <option>Male</option>
                                          <option>Female</option>
                                          <option>Other</option>
                                          <option>Hidden</option>
                                        </select>
                                        <i
                                                  class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                                        <i class="fa fa-check valid-icon icon-right input-icon"></i>
                                        <label class="control-label">Sex </label><i class="bar"></i>
                                        <br>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <textarea type="text" required="required">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </textarea>
                                        <i
                                                  class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                                        <i class="fa fa-check valid-icon icon-right input-icon"></i>
                                        <label class="control-label">About You ( Bio ) </label><i class="bar"></i>
                                        <br>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <input type="tel" value="94382728378" required="required" />
                                        <i
                                                  class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                                        <i class="fa fa-check valid-icon icon-right input-icon"></i>
                                        <label class="control-label">Contact Number </label><i class="bar"></i>
                                        <br>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <input type="email" value="john.doe@example.com" required="required" />
                                        <i
                                                  class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                                        <i class="fa fa-check valid-icon icon-right input-icon"></i>
                                        <label class="control-label">Email Address </label><i class="bar"></i>
                                        <br>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr>
                            <a class="btn btn-warning" href="#">Save Changes</a>

                                                      </div>
                                                      <div slot="People">
<span class="alert alert-info">This area contains the list of all the people you have interacted with over time.</span>
<hr>
<div class="row person">
  <div class="col-md-2"><img src="../assets/profile.jpg"></div>
  <div class="col-md-10">
    <b>Vamsi Krishna</b>
    <br>
    <p><i class="bx bx-info-circle"></i> &nbsp;You borrowed <b>World History Textbook...</b> from them on 20-12-2018</p>
    <p><div class="row">
      <div class="col-md-6"><a class="special-button" href="#"><i class='bx bx-message'></i> Contact</a></div>
      <div class="col-md-6"><a class="special-button" href="#"><i class='bx bx-list'></i> View their listings</a></div>
    </div></p>
  </div>
</div>     
<hr>
<div class="row person">
  <div class="col-md-2"><img src="../assets/person.jpg"></div>
  <div class="col-md-10">
    <b>Shreya Thakur</b>
    <br>
    <p><i class="bx bx-info-circle"></i> &nbsp;You borrowed <b>Lipsticks 20x...</b> from them on 10-10-2018</p>
    <p><div class="row">
      <div class="col-md-6"><a class="special-button" href="#"><i class='bx bx-message'></i> Contact</a></div>
      <div class="col-md-6"><a class="special-button" href="#"><i class='bx bx-list'></i> View their listings</a></div>
    </div></p>
  </div>
</div>                                     


                                      </div>

                                      <div slot="Preferences">







<div class="row prefs">
  <div class="col-md-6 spcl">
    <b>General</b>
    <div class="row">
      <div class="col-md-12 account-type">
        <span>Your account type is</span><br>
        <span class="free-acc">FREE</span>
        <br>
        <a class="btn btn-primary" href="#">Upgrade Now</a>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-6">Receive emails  for products you may like</div>
      <div class="col-md-6"><input type="radio" name="" value=Yes>Yes&nbsp;&nbsp;<input type="radio" name="">No</div>
    </div>
    <div class="row">
      <div class="col-md-6">Receive emails  for promotions by us</div>
      <div class="col-md-6"><input type="radio" name="" checked value=Yes>Yes&nbsp;&nbsp;<input type="radio" name="">No</div>
    </div>
    <div class="row">
      <div class="col-md-6">Receive emails  for other content</div>
      <div class="col-md-6"><input type="radio" name="" value=Yes checked>Yes&nbsp;&nbsp;<input type="radio" name="">No</div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-12">Legal stuff. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
  </div>
  <div class="col-md-6 privacy spcl">
  <b>Privacy</b>
  <hr>

  <div class="row">
    <div class="col-md-6">Email Address</div>
    <div class="col-md-6">
      <select>
        <option>Visible</option>
        <option>Hidden</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">Mobile Number</div>
    <div class="col-md-6">
      <select>
        <option>Visible</option>
        <option>Hidden</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">Complete Address</div>
    <div class="col-md-6">
      <select>
        <option>Visible</option>
        <option>Hidden</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">Private Messaging</div>
    <div class="col-md-6">
      <select>
        <option>Allowed</option>
        <option>Disabled</option>
      </select>
    </div>
  </div>  
  </div>
</div>
<hr>
<a class="btn btn-warning" href="#">Save Changes</a> 
<a class="btn btn-success">Reset Complete Account</a> 
<a class="btn btn-danger">Delete Account</a>
                                      







                                      </div>
                                    </vuestic-tabs>
                                  </vuestic-widget>     
                                  <div class="row">
                                    <div class="col-md-6">
                                            <vuestic-widget headerText='Rentals'>
                            <div class="row">
                                      <div class="col-md-4">
                                        <img class="preview-lr" src="../assets/sample4.jpg"></img>
                                      </div>
                                      <div class="col-md-8">
                                        <a href="#" class="lr-link">World History Textbook New conditio...</a>
                                       <div class="row">
                                          <div class="col"><i class="bx bx-calendar"></i> <span>Till 20th Nov 2019</span></div>
                                       </div>
                                       <br>
                                       <div class="row">
                                        <div class="col-md-6">
                                          <a class="special-button" href="#">Ask for extension</a>
                                        </div>
                                          <div class="col-md-6">
                                          <a class="special-button" href="#">Details</a>
                                        </div>
                                         
                                       </div>            
                                        
                                      </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                      <div class="col-md-4">
                                        <img class="preview-lr" src="../assets/sample5.jpg"></img>
                                      </div>
                                      <div class="col-md-8">
                                        <a href="#" class="lr-link">HP Laptop i7 7th gen 16gb...</a>
                                       <div class="row">
                            <div class="col"><i class="bx bx-calendar"></i> <span>Till 1st Oct 2019</span></div>
                                       </div>
                                       <br>
                                       <div class="row">
                                        <div class="col-md-6">
                                          <a class="special-button" href="#">Ask for extension</a>
                                        </div>
                                          <div class="col-md-6">
                                          <a class="special-button" href="#">Details</a>
                                        </div>
                                         
                                       </div>          
                                        
                                      </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                      <div class="col-md-4">
                                        <img class="preview-lr" src="../assets/sample6.jpg"></img>
                                      </div>
                                      <div class="col-md-8">
                                        <a href="#" class="lr-link">1l water bottle filled...</a>
                                       <div class="row">
<div class="col"><i class="bx bx-calendar"></i> <span>Till 10th Nov 2019</span></div>
           </div>
           <br>
           <div class="row">
            <div class="col-md-6">
              <a class="special-button" href="#">Ask for extension</a>
            </div>
              <div class="col-md-6">
              <a class="special-button" href="#">Details</a>
            </div>
             
           </div>           
            
          </div>
        </div>   
        <hr>
        <a class="special-button sb-alt">View All</a>        
      </vuestic-widget>   
        </div>
        <div class="col-md-6">
          <vuestic-widget  headerText='Listings'>
<div class="row">
          <div class="col-md-4">
            <img class="preview-lr" src="../assets/sample3.jpg"></img>
          </div>
          <div class="col-md-8">
            <a href="#" class="lr-link">Queen sized mattress</a>
           <div class="row">
             <div class="col-md-6"><i class="bx bx-dollar-circle"> ₹2450</i></div>
             <div class="col-md-6"><i class="bx bx-map-alt">Kachiguda</i></div>
           </div>
           <br>
           <div class="row">
            <div class="col-md-6">
              <a class="special-button" href="#">Remove Listing</a>
            </div>
              <div class="col-md-6">
              <a class="special-button" href="#">Modify</a>
            </div>
             
           </div>            
            
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-4">
            <img class="preview-lr" src="../assets/sample2.jpg"></img>
          </div>
          <div class="col-md-8">
            <a href="#" class="lr-link">Beer Cooler</a>
           <div class="row">
             <div class="col-md-6"><i class="bx bx-dollar-circle"> ₹450</i></div>
             <div class="col-md-6"><i class="bx bx-map-alt">Pilani</i></div>
           </div>
           <br>
           <div class="row">
            <div class="col-md-6">
              <a class="special-button" href="#">Remove Listing</a>
            </div>
              <div class="col-md-6">
              <a class="special-button" href="#">Modify</a>
            </div>
             
           </div>            
            
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-4">
            <img class="preview-lr" src="../assets/sample1.jpg"></img>
          </div>
          <div class="col-md-8">
            <a href="#" class="lr-link">Galaxy S8</a>
           <div class="row">
             <div class="col-md-6"><i class="bx bx-dollar-circle"> ₹50,000</i></div>
             <div class="col-md-6"><i class="bx bx-map-alt">Secunderabad</i></div>
           </div>
           <br>
           <div class="row">
            <div class="col-md-6">
              <a class="special-button" href="#">Remove Listing</a>
            </div>
              <div class="col-md-6">
              <a class="special-button" href="#">Modify</a>
            </div>
             
           </div>            
            
          </div>
        </div>   
        <hr>
        <a class="special-button sb-alt">View All</a>     
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
  width:64px;
  height:64px;
  background:rgb(200,200,200);
  margin:10px;
  border-radius:1000px;
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
  padding: 5px 10px 5px 10px;
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
  width:50%;
  transition: 1s all;
  padding:10px;
  border-radius:5000px;
}
.person:hover{
  background: rgb(240,240,240);
}
.prefs .spcl{
  padding:20px;
}
</style>