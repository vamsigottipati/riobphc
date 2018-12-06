
<template>
  <vuestic-layout>
    <main id="content" >
   
      <vuestic-widget style="height:60vh;" class="no-padding no-v-padding">
        <vuestic-tabs :names="['Profile Details', 'Update Profile', 'Friends']" ref="tabs">
        <div slot="Profile Details">
          <p>Profile Details here</p>
        </div>
        <div slot="Update Profile">
          <p>Update Profile</p>
        </div>
        <div slot="Friends">
          <p>
            Friends List Here
          </p>

                <!-- FILTERS -->
      <div class="row">
        <div class="col-md-3 col-xs-1"></div>
        <div class="filterContainer col-md-8">
          <div class="row filterItemsBar">
            <div class="col-md-2">Category</div>
            <div class="col-md-2">Location</div>
            <div class="col-md-2">Distancce</div>
            <div class="col-md-2">Price</div>
          </div>
          <div class="filterItemsList">
      
          </div>
        </div>
      </div>

      <!-- FILTERS END -->
        </div>
      </vuestic-tabs>
      </vuestic-widget>
      <vuestic-widget headerText="Your Messsages" style="height:60vh;">
        <div class="row">
          <div class="col-md-3 d-flex justify-content-center align-items-center">
           
          </div>
          <viestic-widget  class="col-md-8 d-flex" >
            <vuestic-chat v-model="chatMsgs"></vuestic-chat>
          </viestic-widget>
        </div>
      </vuestic-widget> 
    </main>
  </vuestic-layout>
</template>

<script>

import Layout from 'vuestic-theme/vuestic-directives/Layout'
import VuesticLayout from '../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'

export default {
  name: 'rent',
  props: {
  },
  components: {
    VuesticLayout,
  },
  directives: {
    layout: Layout,
  },
  data () {
    return {
      currentFriend: 'friend1',
      chatMsgs: [
        {
          text: 'Hello! So glad you liked my work. Do you want me to shoot you?',
          yours: false
        },
        {
          text: 'Yeah, that would be cool. Maybe this Sunday at 3 pm?',
          yours: true
        },
        {
          text: 'Sounds great! See you later!',
          yours: false
        },
        {
          text: 'Should I bring a lightbox with me?',
          yours: true
        },
        {
          text: 'No, thanks. There is no need. Can we set up a meeting earlier?',
          yours: false
        },
        {
          text: 'I\'m working on Vuestic, so let\'s meet at 3pm. Thanks!',
          yours: true
        }
      ],
      friends: [
        {
          name: 'friend1',
          lastMsg: 'some message',
          photoURL: 'http://i.imgur.com/VuTDC8u.png'
        },
        {
          name: 'friend2',
          lastMsg: 'some message',
          photoURL: 'http://i.imgur.com/W3mGrmW.png'
        },
        {
          name: 'friend3',
          lastMsg: 'some message',
          photoURL: 'http://i.imgur.com/D7DOGBH.jpg'
        },
        {
          name: 'friend4',
          lastMsg: 'some message',
          photoURL: 'http://i.imgur.com/VuTDC8u.png'
        },
        {
          name: 'friend5',
          lastMsg: 'some message',
          photoURL: 'http://i.imgur.com/W3mGrmW.png'
        },
      ],
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
.frndProfileImg {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.friendList {
  display: flex;
  width: 100%;
  height: 50vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
}
</style>
