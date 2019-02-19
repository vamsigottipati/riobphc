

<template>
    <div class="body">
      <div id="app" data-state="0">
        <div class="ui-big-images">    
          <div class="ui-big-image" data-key="0">
            <img src="https://picsum.photos/1200/1200/?image=1005" alt=""/>
          </div>
          <div class="ui-big-image" data-key="1">
            <img src="https://picsum.photos/1200/1200/?image=804" alt=""/>
          </div>
          <div class="ui-big-image" data-key="2">
            <img src="https://picsum.photos/1200/1200/?image=838" alt=""/>
          </div>
          <div class="ui-big-image" data-key="3">
            <img src="https://picsum.photos/1200/1200/?image=832" alt=""/>
          </div>
          <div class="ui-big-image" data-key="4">
            <img src="https://picsum.photos/1200/1200/?image=836" alt=""/>
          </div>
          <div class="ui-big-image" data-key="5">
            <img src="https://picsum.photos/1200/1200/?image=823" alt=""/>
          </div>
        </div>
        <div class="ui-thumbnails">
          <div class="ui-thumbnail" tabindex="-1" data-key="0">
            <img src="https://picsum.photos/1200/1200/?image=1005" alt="" />
            <div class="ui-cuticle" data-flip-key="cuticle"></div>
          </div>
          <div class="ui-thumbnail" tabindex="-1" data-key="1">
            <img src="https://picsum.photos/1200/1200/?image=804" alt="" />
            <div class="ui-cuticle" data-flip-key="cuticle"></div>
          </div>
          <div class="ui-thumbnail" tabindex="-1" data-key="2">
            <img src="https://picsum.photos/1200/1200/?image=838" alt="" />
            <div class="ui-cuticle" data-flip-key="cuticle"></div>
          </div>
          <div class="ui-thumbnail" tabindex="-1" data-key="3">
            <img src="https://picsum.photos/1200/1200/?image=832" alt=""/>
            <div class="ui-cuticle" data-flip-key="cuticle"></div>
          </div>
          <div class="ui-thumbnail" tabindex="-1" data-key="4">
            <img src="https://picsum.photos/1200/1200/?image=836" alt="" />
            <div class="ui-cuticle" data-flip-key="cuticle"></div>
          </div>
          <div class="ui-thumbnail" tabindex="-1" data-key="5">
            <img src="https://picsum.photos/1200/1200/?image=823" alt="" />
            <div class="ui-cuticle" data-flip-key="cuticle"></div>
          </div>
        </div>
        <div class="ui-content">
          
          <nav class="ui-nav">
            <button id="prev" ref="prev" tabindex="-1" title="Previous">&lt;</button>
            <button id="next" ref="next" tabindex="-1" title="Next">&gt;</button>
          </nav>
          
          <div class="ui-articles">
            <article class="ui-article" data-key="0">
              <h2 class="ui-heading">Step 1</h2>
              <p class="ui-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate assumenda nemo delectus totam atque quas suscipit dicta.</p>
            </article>
            <article class="ui-article" data-key="1">
              <h2 class="ui-heading">Step 2</h2>
              <p class="ui-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente soluta iusto molestias ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente soluta iusto molestias ullam.  </p>
            </article>
            <article class="ui-article" data-key="2">
              <h2 class="ui-heading">Step 3</h2>
              <p class="ui-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            </article>
            <article class="ui-article" data-key="3">
              <h2 class="ui-heading">Step 4</h2>
              <p class="ui-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </article>
            <article class="ui-article" data-key="4">
              <h2 class="ui-heading">Step 5</h2>
              <p class="ui-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias exercitationem voluptatibus</p>
            </article>
            <article class="ui-article" data-key="5">
              <h2 class="ui-heading">Step 6</h2>
              <p class="ui-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta reprehenderit, ut doloribus corrupti</p>
            </article>
          </div>
        </div>
      </div>
     
    </div>
</template>

<script>

import Flipping from 'flipping'

export default {
  name: 'How',
  props: {
  },
  components: {},
  directives: {
  },
  mounted: function () {
    const elPrevButton = this.$refs.prev
    const elNextButton = this.$refs.next
    const flipping = new Flipping()

    const elImages = Array.from(document.querySelectorAll('.ui-big-image'))
    const elThumbnails = Array.from(document.querySelectorAll('.ui-thumbnail'))

    let state = {
      photo: 0
    }

    function send (event) {
      // read cuticle positions
      flipping.read()
      const elActives = document.querySelectorAll('[data-active]')
      Array.from(elActives)
        .forEach(el => el.removeAttribute('data-active'))

      switch (event) {
        case 'PREV':
          state.photo--
          // Math.max(state.photo - 1, 0);
          break
        case 'NEXT':
          state.photo++
          // Math.min(state.photo + 1, elImages.length - 1);
          break
        default:
          state.photo = +event
          break
      }
      var len = elImages.length
      // Loop Around
      // state.photo = ( ( state.photo % len) + len ) % len;
      state.photo = Math.max(0, Math.min(state.photo, len - 1))

      Array.from(document.querySelectorAll(`[data-key="${state.photo}"]`))
        .forEach(el => {
          el.setAttribute('data-active', true)
        })
      // execute the FLIP animation
      flipping.flip()
    }

    elThumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        send(thumb.dataset.key)
      })
    })

    elPrevButton.addEventListener('click', () => {
      send('PREV')
    })

    elNextButton.addEventListener('click', () => {
      send('NEXT')
    })

    send(0)
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Raleway');

img {
  max-width: 100%;
}

#app {
  position: absolute;
  top: 17.5vh;
  left: 2.5vw;
  width: 95%;
  height: 80%;
  overflow: hidden;
  z-index: 9;
}

.ui-big-images {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
}

.ui-big-image {
  width: 100%;
  margin-right: -100%;
}
.ui-big-image img {
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center 20%;
     object-position: center 20%;
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-height: 600px) {
  .ui-big-image img {
    -o-object-position: center center;
       object-position: center center;
  }
}

.ui-thumbnails {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  padding-top: .5rem;
  padding-right: 45%;
  padding-right: calc( 45% + .5rem );
}

.ui-thumbnail {
  display: block;
  margin-right: .5rem;
  padding: .5rem 0;
  cursor: pointer;
}

.ui-cuticle {
  background-color: #C6426E;
  position: absolute;
  bottom: 0;
  height: .25rem;
  width: 100%;
}

.ui-thumbnail > img {
  width: auto;
}

.ui-content {
  position: absolute;
  width: 40%;
  right: 5%;
  bottom: 0;
}

.ui-articles {
  background: #642B73;
  color: white;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  min-height: 25vh;
}

.ui-article {
  padding: 1.5rem;
  width: 100%;
  margin-right: -100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ui-paragraph {
  margin: 0;
  font-size: .7rem;
  line-height: 1.7;
}

.ui-nav {
  position: absolute;
  right: 0;
  bottom: 100%;
  background: inherit;
}
.ui-nav button {
  background: #642B73;
  border: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: .5em;
  width: 4vw;
  height: 5vh;
  color: #FFF;
  font-family: monospace;
  transition: inherit;
  transition-duration: 300ms;
}
.ui-nav button:hover, .ui-nav button:focus {
  background: #C6426E;
  outline: none;
}
.ui-nav button:active {
  outline: none;
  -webkit-transform: translateY(0.25em);
          transform: translateY(0.25em);
  transition-duration: 100ms;
}

.ui-heading {
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: normal;
}
.ui-heading:before {
  content: '';
  font-size: .5rem;
  text-transform: uppercase;
  display: block;
  margin-bottom: .5rem;
  letter-spacing: 1px;
}

/* ---------------------------------- */
.ui-big-image {
  opacity: 0;
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
}
.ui-big-image img {
  -webkit-transform: scale(0.85);
          transform: scale(0.85);
}

.ui-big-image[data-active] ~ .ui-big-image {
  -webkit-transform: translateX(100%);
          transform: translateX(100%);
}

.ui-big-image[data-active] {
  opacity: 1;
  -webkit-transform: translateX(0%);
          transform: translateX(0%);
}
.ui-big-image[data-active] img {
  -webkit-transform: scale(1);
          transform: scale(1);
}

/* ---------------------------------- */
.ui-article {
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
}
.ui-article:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #C6426E;
  opacity: 1;
  transition-duration: 0.35s;
  z-index: 1;
}

.ui-article[data-active] ~ .ui-article {
  -webkit-transform: translateX(100%);
          transform: translateX(100%);
}

.ui-article[data-active] {
  -webkit-transform: translateX(0%);
          transform: translateX(0%);
}
.ui-article[data-active]:before {
  opacity: 0;
}

/* ---------------------------------- */
.ui-thumbnail > img {
  -webkit-filter: grayscale(100%);
          filter: grayscale(100%);
  transition-duration: 0.35s;
}
.ui-thumbnail:active > img {
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
  transition-duration: 100ms;
}
.ui-thumbnail:focus {
  outline: none;
}

.ui-cuticle {
  display: none;
}

.ui-thumbnail[data-active] > img, .ui-thumbnail:hover > img {
  -webkit-filter: grayscale(0%);
          filter: grayscale(0%);
}
.ui-thumbnail[data-active] .ui-cuticle {
  display: block;
}

/* ---------------------------------- */
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  // background: linear-gradient(90deg , #642B73, #C6426E);
  background: #eee;
}

*, *:before, *:after {
  box-sizing: border-box;
  position: relative;
  transition-property: opacity, -webkit-transform, -webkit-filter;
  transition-property: transform, opacity, filter;
  transition-property: transform, opacity, filter, -webkit-transform, -webkit-filter;
  transition-duration: 0.7s, 0.7s, 0.7s;
  transition-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
}
</style>
