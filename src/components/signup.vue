<template >
  <div>
    <div class="background">
    <div class="signup" v-if="!displayOff">
      <h2 class="heading"><small> Welcome to </small> <br><strong style="color: #03568e;font-size: 3rem;">rio </strong></h2>
      <div class="all--input--fields">
        <input type="text" id="Username" class="single--input" placeholder="Your Name" v-model="Username" required="required"/><br>
        <span class="inline--display">
          <input type="number" v-model="phNum" class="single--inline--input" placeholder="Phone Number" id="phNum" required="required"/>
          <input type="text" v-model="email" class="single--inline--input" placeholder="Email" id="email" required="required"/><br>
        </span><br>
        <input type="password" v-model="password" class="single--input" placeholder="Password" id="password" required="required"/><br>
      </div>
      <button class="btn btn-primary submitBtn" style="" @click="onSignUp" type="submit">
        SignUp
      </button><br>
      <router-link class='link' :to="{name: 'login'}">Already a Member</router-link>
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
    onSignUp () {
      var userName = this.Username
      var phoneNum = this.phNum
      this.displayOff = true
      var emailId
      var uid
      console.log(userName)
      console.log(phoneNum)
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        response => {
          alert('Account Created')
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
            email: emailId
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
  }
}
</script>

<style scoped>

  .background {
    position: fixed;
    z-index: 9;
    height: 100vh;
    width: 100vw;
   // background-image: linear-gradient(45deg , #74ebd5, #ACB6E5);
    background-image: linear-gradient(45deg , #642B73, #C6426E);
   // background-image: linear-gradient(45deg , #1c92d2, #f2fcfe);
   // background-image: linear-gradient(45deg , #CB356B , #BD3F32);
   // background-image: linear-gradient(45deg , #159957 , #155799)
   
  }

  .signup {
    position: absolute;
    top: 15vh;
    left: 20vw;
    width: 60vw;
    height: 70vh;
    background: white;
    padding: 60px;
    border-radius: 30px;
    overflow: auto;
    -webkit-animation: shadow-anim 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-anim 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  .heading {
    position: absolute;
    top: 5vh;
    left: 20%;
    width: 60%;
    text-align: center;
  }

  .all--input--fields {
    position: absolute;
    top: 30%;
    left: 00%;
    width: 100%;
    text-align: center;
  }

  .single--input {
    all: unset;
    background: whitesmoke;
    width: 60%;
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
    width: 30%;
    min-height: 7vh;
    margin-bottom:3vh;
    margin-left:1vw;
    text-align: center;
    border-radius: 50px;
  }

  .submitBtn {
    position: absolute;
    top: 75%;
    left: 40%;
    width: 20%;
    text-align: center;
  }

  .link {
    position: absolute;
    top: 90%;
    left: 40%;
    width: 20%;
    text-align: center;
    font-size: 1.1rem;
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


/* Background animation */

</style>