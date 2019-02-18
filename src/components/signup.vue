<template >
  <div>
    <div class="background">
    <div class="signup" v-if="!displayOff">
      <h2 class="heading"><small style="font-size: 1rem;"> Welcome to </small> <br><strong style="color: #03568e;font-size: 3rem;">UncleBob </strong></h2>
      <div class="all--input--fields">
        <input type="text" id="Username" class="single--input" placeholder="Your Name" v-model="Username" required="required"/><br>
        <span class="inline--display">
          <input type="number" v-model="phNum" class="single--inline--input" placeholder="Phone Number" id="phNum" required="required"/>
          <input type="text" v-model="email" class="single--inline--input" placeholder="Email" id="email" required="required"/><br>
        </span><br>
        <input type="password" v-model="password" class="single--input" placeholder="Password" id="password" required="required"/><br>
      </div>
      <div class="row" style="margin-top: 15px;">
        <div class="col-md-2"></div>
        <div class="col-md-8" style="text-align: center;">
          <h5>Upload an Image Of Your ID Card</h5>
          <label  class="file" style="text-align: left;margin-top: 20px;">
            <input type="file" name="uploadContent" ref="uploadContent" id="uploadContent" v-on:change="signalChange">
            <span class="file-custom" ref="uploadContentValue">Upload Your Id</span>
          </label>
        </div>
      </div>
      <button class="btn submitBtn" style="" @click="onSignUp" type="submit">
        SignUp
      </button><br>
      <router-link class='link' :to="{name: 'login'}"><h6>Already a Member</h6></router-link>
    </div>
    <div class="alt" v-if="displayOff">
      <p>Account Verification Link Sent To Your Email</p>
      <p>We will redirect you to Home page withina few seconds........</p>
    </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase'
export default {
  name: 'signup',
  data () {
    return {
      Username: '',
      phNum: '',
      email: '',
      password: '',
      curUserId: '',
      displayOff: false
    }
  },
  mounted () {
  },
  methods: {
    signalChange () {
      this.$refs.uploadContentValue.innerText = this.$refs.uploadContent.files[0].name
    },
    onSignUp () {
      var userName = this.Username
      var phoneNum = this.phNum
      var vm = this
      var emailId
      var uid
      var uploadContent = this.$refs.uploadContent.files[0]
      console.log(userName)
      console.log(phoneNum)
      var randomString = ''
      var d = new Date()
      var t = d.getTime()
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < 5; i++) {
        randomString += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      randomString = randomString + t
      if (this.email && this.Username && this.password && this.phNum && uploadContent) {
        firebase.storage().ref('authIdPic/' + randomString + uploadContent.name).put(uploadContent).then(
          response => {
            response.ref.getDownloadURL().then(
              resp => {
                var authImgDownloadUrl = resp
                firebase.auth().createUserWithEmailAndPassword(vm.email, vm.password).then(
                  response => {
                    alert('Account Created')
                    vm.displayOff = true
                    emailId = response.user.email
                    uid = response.user.uid
                    console.log(emailId)
                    firebase.auth().currentUser.updateProfile({
                      displayName: userName,
                      phoneNumber: phoneNum
                    })
                    firebase.database().ref('users/' + uid).set({
                      Username: userName,
                      phoneNumber: phoneNum,
                      email: emailId,
                      description: 'No Description',
                      accStatus: 'Not Verified',
                      authIdImg: authImgDownloadUrl
                    })
                    firebase.auth().currentUser.sendEmailVerification().then(
                      rsp => {
                        alert('sent')
                      }
                    ).catch(
                      err1 => {
                        alert(err1)
                      }
                    )
                    localStorage.setItem('userId', uid)
                    setTimeout(() => {
                      this.$router.push('home')
                    }, 1500)
                  }
                ).catch(
                  error => {
                    alert(error)
                  }
                )
              }
            )
          }
        )
      } else {
        alert('Please Fill All the details')
      }
    }
  }
}
</script>

<style scoped>
  .background {
    position: fixed;
    z-index: 9;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(45deg , #642B73, #C6426E);
  }
  .signup {
    position: relative;
    width: 60vw;
    height: 80vh;
    margin-top: 10vh;
    margin-left: 20vw;
    background: white;
    padding: 60px;
    border-radius: 30px;
    overflow: auto;
    -webkit-animation: shadow-anim 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-anim 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  .heading {
    position: relative;
    margin-top: 0vh;
    margin-left: 20%;
    width: 60%;
    text-align: center;
  }
  .all--input--fields {
    position: relative;
    margin-top: 50px;
    margin-left: 5%;
    width: 90%;
    text-align: center;
  }
  .single--input {
    all: unset;
    background: whitesmoke;
    width: 80%;
    min-height: 7vh;
    margin-bottom:3vh;
    text-align: center;
    border-radius: 50px;
  }
  .inline--display {
    display: inline-block;
    width: 100%;
  }
  .single--inline--input {
    all: unset;
    background: whitesmoke;
    width: 48%;
    min-height: 7vh;
    margin-bottom:3vh;
    margin-left: 1%;
    text-align: center;
    border-radius: 50px;
  }
  .submitBtn {
    position: relative;
    padding: 0px;
    padding-top: 20px; 
    padding-bottom: 20px;
    padding-left: 20px; 
    padding-right: 20px; 
    margin-top: 50px;
    margin-bottom: 30px;
    width: 30%;
    margin-left: 35%;
    background:  linear-gradient(45deg , #642B73, #C6426E);
    color: white;
  }

  .link {
    position: absolute;
    left: 40%;
    width: 20%;
    text-align: center;
    color: #642B73
  }

  ::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}
  /*  Fade inanimation  */
    .alt {
      position: absolute;
      top: 40vh;
      left: 30vw;
      width: 40vw;
      text-align: center;
      font-size: 2rem;
      color: white;
    }
  @-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
/*  Shadow  */
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
@media only screen and (max-width: 800px) {
  .signup {
    width: 80vw;
    margin-left: 10vw;
  }
}

@media only screen and (max-width: 600px) {
  .signup {
    width: 90vw;
    margin-left: 5vw;
  }
  .all--input--fields {
    width: 100%;
    margin-left: 0px;
  }
  .single--inline--input {
    width: 80%;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .single--input {
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .submitBtn {
    width: 40vw;
    margin-left: 15vw;
  }
}

@media only screen and (max-width: 450px) {
  .signup {
    width: 90vw;
    margin-left: 5vw;
    height: 90vh;
    margin-top: 5vh;
  }

  .heading {
    width: 100%;
    margin-left: 0px;
    margin-top: -20px;
  }
  .all--input--fields {
    width: 100%;
    margin-left: 0px;
  }
  .single--inline--input {
    width: 120%;
    margin-top: 5px;
    margin-bottom: 10px;
    margin-left: -10%;
  }
  .single--input {
    margin-top: 5px;
    margin-bottom: 10px;
    width: 120%;
    margin-left: -10%;
  }
  .submitBtn {
    width: 50vw;
    margin-top: 10px;
    padding: 15px;
    font-size: 12px;
    margin-left: 8%;
  }
  .link {
    width: 100%;
    left: 5%;
  }
}
/* Background animation */
</style>