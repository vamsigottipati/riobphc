<template>
<div class="body">
  <section class="container">
    <div class="content">
      <h1>Scroll To Begin</h1>
      <p>
        Start
      </p>
    </div>
  </section>
  <section class="container">
    <div class="content">
     
      <p>
        Step 1
      </p>
    </div>
  </section>
  <section class="container">
    <div class="content">
     
      <p>
        Step 2
      </p>
    </div>
  </section>
  <section class="container">
    <div class="content">
    
      <p>
        Step 3
      </p>
    </div>
  </section>
    <section class="container">
    <div class="content">
  
      <p>
        Step 4
      </p>
    </div>
  </section>

  <div id="set-height"></div>

  <video id="v0" tabindex="0" autobuffer preload>
     <source type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' src="../assets/fingers.mp4"></source>
  </video>

</div>
</template>

<script>

export default {
  name: 'How',
  props: {
  },
  mounted () {
    var frameNumber = 0
    var playbackConst = 1000
    var setHeight = document.getElementById('set-height')
    var vid = document.getElementById('v0')

    vid.addEventListener('loadedmetadata', function () {
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + 'px'
    })

    function scrollPlay () {
      frameNumber = window.pageYOffset / playbackConst
      vid.currentTime = frameNumber
      window.requestAnimationFrame(scrollPlay)
    }

    window.requestAnimationFrame(scrollPlay)
  },
  data () {
    return {
      opened: true,
    }
  },
  computed: {
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    }
  }
}
</script>

<style scoped>

.body{
  background-color: #c6d7de;
  padding: 3rm;
}

#v0 {
  position: fixed;
  bottom: 0px;
  right: opx;
  width: 100%;
}

#set-height {
  display: block;
}

section {
  z-index: 1;
  position: relative;
}

.content {
  position: sticky;
  position: -webkit-sticky;
  width: 100%;
  top: 33.3%;
}

h1 {
  background-color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 1.5rem; 
}

section:nth-of-type(0) {
  height: 20vh;
}

section:nth-of-type(1) {
  height: 150vh;
}

section:nth-of-type(2) {
  height: 150vh;
}

section:nth-of-type(3) {
  height: 150vh;
}

section:nth-of-type(4) {
  height: 150vh;
}

section:nth-of-type(5) {
  height: 100vh;
}

.enter {

}

</style>
