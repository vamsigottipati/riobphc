<template>

  <vuestic-navbar style="background-color:#10d7dc;" class="navbar">
    <header-selector slot="selector" class="headerSelector" :isOpen.sync="valueProxy"/>
    <span slot="logo" class="logo" style="color:white;font-size:1.5rem;font-varient:small-caps;font-weight:900 ;letter-spacing:0.2rem; "> UncleBob </span>
   <!-- <span slot="nav-icon" style="">
      <i style="cursor:pointer;color:#34495e;"
        class="fas faa-pulse animated"
        v-bind:class="{ 'fa-angle-double-left': openSlider, 'fa-angle-double-right': closeSlider }"
        @click="openSlider = !openSlider; closeSlider = !closeSlider;toggleDisplay()">
      </i>
    </span> -->
   
   <!-- <transition name="fadeIn" slot="center">
      <span slot="center" ref="homeRef" v-if="!openSlider"
        class="navLinks"
        style="margin-right:5vw;">
        Home
      </span>
    </transition>
    <transition name="fadeIn" slot="center">
      <span slot="center" ref="rentRef"  v-if="!openSlider"
        class="navLinks"
        style="margin-right:5vw;">
        Rent
      </span>
    </transition>
    <transition name="fadeIn" slot="center">
      <span slot="center" ref="listRef"  v-if="!openSlider"
        class="navLinks"
        style="margin-right:2vw;">
        List
      </span>
    </transition> -->
  </vuestic-navbar>

</template>

<script>
  import VuesticNavbar from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
  import HeaderSelector from './components/HeaderSelector'

  export default {
    name: 'app-navbar',

    components: {
      VuesticNavbar,
      HeaderSelector,
    },
    data () {
      return {
        openSlider: true,
        closeSlider: false,
      }
    },
    methods: {
      toggleDisplay () {
      }
    },
    props: {
      isOpen: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      valueProxy: {
        get () {
          return this.isOpen
        },
        set (opened) {
          this.$emit('toggle-menu', opened)
        },
      },
    },
  }
</script>

<style scoped>
  .navLinks {
    cursor: pointer;
  }

  .fadeIn-enter-active {
    animation: bounceIn 1s;
  }

  .fadeIn-leave-active {
    animation: bounceIn 1s reverse;
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    60% {
      transform: scale(1.2);
    }
    100% {
      transform: 1;
      opacity: 1;
    }
  }

   @media (max-width: 700px) {
    .headerSelector{
      position: absolute;
      left: 5vw;
      top: -3.5vh;
    }
    .logo{
      position: absolute;
      right: 5vw;
      margin: 0px;
      top: -0.5vh;
    }
    .navbar {
      height: 8vh;
    }
  }
</style>
