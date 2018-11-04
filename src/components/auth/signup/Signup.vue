<template>
  <div class="signup">
    <h2 ><small> Welcome to </small> <br><strong style="color: #10e7dc;font-size: 3rem;">UncleBob </strong></h2>
    <form  name="signup" @submit.prevent="onSignUp">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="Username" v-model="Username" required="required"/>
          <label class="control-label" for="Username">Your Name</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="number" v-model="phNum" id="phNum" required="required"/>
          <label class="control-label" for="phNum">Your Mobile Number</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="text" v-model="email" id="email" required="required"/>
          <label class="control-label" for="email">Email</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" v-model="password" id="password" required="required"/>
          <label class="control-label" for="password">password</label><i class="bar"></i>
        </div>
      </div>
      </vuestic-checkbox>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit">
          SignUp
        </button>
        <router-link class='link' :to="{name: 'login'}">Already a Member</router-link>
      </div>
    </form>
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
      curUserId: ''
    }
  },
  mounted () {
  },
  methods: {
    onSignUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (response) {
          alert('Account Created')
          console.log(response.user)
          localStorage.setItem('userId', response.user.uid)
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

<style lang="scss">
  .signup {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }
    h2 {
      text-align: center;
      margin-top: -20vh;
      margin-bottom: 10vh;
    }
    width: 21.375rem;
    .down-container {
      margin-top: 2.6875rem;
    }
  }
</style>