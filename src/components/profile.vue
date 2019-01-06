
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
      <vuestic-widget style="width: 100%;height: 80vh;" headerText='Profile Details'>
        <vuestic-tabs
          :names="['Profile','Update', 'People', 'Preferences']"
          ref="tabs">
          <div slot="Profile">
            <p>Profile</p>
          </div>
          <div slot="Update">
            <p>Update</p>
          </div>
          <div slot="People">
            <p>People</p>
          </div>
          <div slot="Preferences">
            <p>Preferences</p>
          </div>
        </vuestic-tabs>
      </vuestic-widget>     
      <vuestic-widget style="width: 48.75%;height: 80vh;float: left;" headerText='Rentals'>

      </vuestic-widget>   
      <vuestic-widget style="width: 48.75%;height: 80vh;float: right;" headerText='Listings'>

      </vuestic-widget>   
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
main {
  position: absolute;
  top: 17.5vh;
  left: 2.5vw;
  width: 95vw;
  min-height: 80vh;
}

</style>