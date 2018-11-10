<template>
  <div class="login">
    <h2>Welcome Back</h2>
    <form  name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" v-model="email" id="email" required="required"/>
          <label class="control-label" for="email">Email</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" v-model="password" id="password" required="required"/>
          <label class="control-label" for="password">Password</label><i class="bar"></i>
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" @click.prevent="login" type="submit">
          login
        </button>
        <router-link class='link' :to="{name: 'signup'}">Create Account</router-link>
      </div>
    </form>
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
          sessionStorage.setItem('status', 'logged')
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

<style lang="scss">
  .login {
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
    }
    width: 21.375rem;
    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>