<template>
  <div class="background">
    <div class="login">
      <h2 class="heading"> Welcome Back</h2>
      <div class="all--input--fields">
        <input type="text" class="single--input" placeholder="Your Email Id" v-model="email" id="email" required="required"/>
         <input type="password" class="single--input" placeholder="Your Password" v-model="password" id="password" required="required"/>
      </div>
      <button class="btn btn-primary submitBtn" @click.prevent="login" type="submit">
        login
      </button>
      <router-link class='link' :to="{name: 'signup'}"> Create Account</router-link>
    </div>
  </div>
</template>

<script>

import * as firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login () {
      console.log('yo')
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function (response) {
          sessionStorage.setItem('status', true)
          window.location.pathname = '/home'
        }
      ).catch(
        function (error) {
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

  .login {
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
    margin-bottom:6vh;
    text-align: center;
    border-radius: 50px;
  }

  .inline--display {
    display: inline-block;
    width: 100%;
  }

  .submitBtn {
    position: absolute;
    top: 70%;
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
@media only screen and (max-width: 600px) {
  .login {
    width:90vw;
    left:5vw;
  }
  .btn{
    padding:5px;
    margin: 0 auto;
    display: block;
    width:80vw;
    left: 5vw;

  }
  .single--input{
    width:80vw;
    left:5vw;
  }
  .link{
    width:80vw;
    left:5vw;
    margin: 0px;
    padding: 0px;
  }
}
</style>