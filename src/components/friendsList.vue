<template>
  <div class="friendsList">
    <div v-if="friends.length == 0" class="empty">Your Friend List Is Empty.</div>
    <div class="friend" v-for="friend in friends" :class="{last: friends.indexOf(friend) === friends.length - 1}">
      <div class="photo-container"><div class="photo" :style="`background: url(${friend.photoURL})`"></div></div>
      <div class="underscored">
        <span class="text"><span class="name">{{friend.name}}</span><br> {{friend.text}}.</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'friendsList',
    props: ['initialFriends'],
    methods: {
    },
    data () {
      return {
        friends: this.initialFriends
      }
    }
  }
</script>

<style lang="scss">
  .friendsList {
    padding-bottom: 1.5rem;
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .empty {
      text-align: center;
    }
    .friend {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .photo-container {
        margin-right: 1rem;
        border-radius: 50%;
        border: 2px solid $lighter-gray;
        .photo {
          background-size: cover !important;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
        }
      }
      .underscored {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: $light-gray2 2px solid;
        overflow: hidden;
        padding-right: 0.7rem;
        height: 3.5rem;
        .text {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin: 2vh;
          .name {
            font-weight: $font-weight-bold;
            font-size: 1.2rem;
          }
        }
        .close-btn {
          margin-left: 1rem;
          i {
            left: 10.5px;
          }
        }
      }
      &.last {
        .underscored {
          border-bottom: none;
        }
      }
    }
  }
</style>
