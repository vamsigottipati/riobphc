<template>
	<div class="body" >
	<!--	<div class="popup" v-if="this.showPopUp">
			<div class="half-circle1"></div>
      <div class="half-circle2"></div>
			<p class="exit" @click="popupCloser">&times;</p>
		</div>
	-->
		<!-- <p class="bd-spread">Uncle Bob</p> -->
		<div class="container" :v-model="container" v-bind:class="[{ 'hover-left' : left } , { 'hover-right' : right } , {'lessOpacity' : showPopUp}]" >
  			<div class="split left"
  				:v-model="left"
  				@mouseover="left = true"
  				@mouseleave="left = false"
  			>
    			<h1>List</h1>
    			<router-link to="list" class="button btn"> Proceed </router-link>
  			</div>
  			<div class="split right"
  				:v-model="right"
  				@mouseover="right = true"
  				@mouseleave="right = false"
  			>
    			<h1>Rent</h1>
    			<router-link to="rent" class="button btn"> Proceed </router-link>
  			</div>
		</div>
	</div>
</template>

<style>

	:root {
  		--container-bg-color: #333;
  		--left-bg-color: #10e7dc;
  		--left-button-hover-color: #f79e02;
  		--right-bg-color: #f79e02;
  		--right-button-hover-color: #10e7dc;
  		--hover-width: 75%;
  		--other-width: 25%;
  		--speed: 500ms;
	}

     /* Popup */
.popup {
	z-index: 999;
	position: absolute;
	top: calc(50% - 350px);
	left: calc(50% - 350px);
}
.half-circle1 {
    width: 350px;
    height: 700px;
    display: inline-block;
    background-color: #8a3f3f;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 200px;
    border: 10px solid #f79e02;
    border-right: 0;
    
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.half-circle2 {
    width: 350px;
    height: 700px;
		margin-left: -3px;
    display: inline-block;
    background-color: #8a3f3f;
    border-bottom-right-radius: 200px;
    border-top-right-radius: 0px;
    border: 10px solid #10e7dc;
    border-left: 0;
    
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.exit {
	position: absolute;
	top: -2vh;
	left: 50vw;
	color: #f0c5c5;
	font-size: 5rem;
	cursor: pointer;
}

.popup p:hover {
	color: white;
}


.lessOpacity {
	opacity: 0.15;
}

	.body{
		width:100vw;
		background-color:#333;
		height:100vh;
		background
		padding:0;
  		margin:0;
  		overflow-x: hidden;
	}
	h1 {
  		font-size: 4rem;
  		color: #fff;
  		position: absolute;
  		left: 50%;
  		top: 30%;
  		transform: translateX(-50%);
  		white-space: nowrap;
	}
	.button {
  		display: block;
  		position: relative;
  		left: 50%;
  		top: 60%;
  		width: 15rem;
  		text-align: center;
  		color: #fff;
  		border: #fff solid 0.2rem;
  		font-size: 1.3rem;
  		font-weight: bold;
  		text-transform: uppercase;
  		text-decoration: none;
    	transform: translateX(-50%);
	}
	.split.left .button:hover {
 		background-color: var(--left-button-hover-color);
 		border-color: var(--left-button-hover-color);
 		text-decoration: none;
 		text-align: center;
  		color: #fff;
  		font-size: 1.3rem;
  		font-weight: bold;
  		text-transform: uppercase;
	}
	.split.right .button:hover {
  background-color: var(--right-button-hover-color);
  border-color: var(--right-button-hover-color);
  text-decoration: none;
  text-align: center;
  		color: #fff;
  		font-size: 1.3rem;
  		font-weight: bold;
  		text-transform: uppercase;
}

.container {
  width: 100vw;
  max-height: 100vh;
  background: var(--container-bg-color);
}

.split {
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.split.left {
  left:0;
  /* background: url('') center center no-repeat; */
  background-size: cover;
}

.split.left:before {
  position:absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: var(--left-bg-color);
}

.split.right {
  right:0;
  /* background: url('') center center no-repeat; */
  background-size: cover;
}

.split.right:before {
  position:absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: var(--right-bg-color);
}

.split.left, .split.right, .split.right:before, .split.left:before {
  transition: var(--speed) all ease-in-out;
}

.hover-left .left {
  width: var(--hover-width);
}

.hover-left .right {
  width: var(--other-width);
}

.hover-left .right:before {
  z-index: 2;
}


.hover-right .right {
  width: var(--hover-width);
}

.hover-right .left {
  width: var(--other-width);
}

.hover-right .left:before {
  z-index: 2;
}

@media (max-width: 700px) {


.split {
  position: absolute;
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.split.left {
  top:0;
  /* background: url('') center center no-repeat; */
  background-size: cover;
}

.split.left:before {
  position:absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: var(--left-bg-color);
}

.split.right {
  bottom:0;
  /* background: url('') center center no-repeat; */
  background-size: cover;
}

.split.right:before {
  position:absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: var(--right-bg-color);
}

.split.left, .split.right, .split.right:before, .split.left:before {
  transition: var(--speed) all ease-in-out;
}

.hover-left .left {
  height: var(--hover-width);
	width: 100%;
}

.hover-left .right {
  height: var(--other-width);
	width: 100%;
}

.hover-left .right:before {
  z-index: 2;
}


.hover-right .right {
  height: var(--hover-width);
	width: 100%;
}

.hover-right .left {
  height: var(--other-width);
	width: 100%;
}

.hover-right .left:before {
  z-index: 2;
}
}
</style>

<script>
export default {
  data () {
    return {
      left: false,
      right: false,
      container: false,
      showPopUp: false,
    }
  },
  mounted () {
  //  setTimeout(() => {
  //    this.showPopUp = true
  //  }, 2000)
  },
  methods: {
  //  popupCloser () {
  //    this.showPopUp = false
  //  }
  }
}
</script>