<template>
    <div class="body">

      <section class="intro-section">
        <h1 class="intro-heading"> rio Services</h1>

        <p>Some Tag line to support the title</p>
      </section>

      <!-- Photos via Unsplash Source https://source.unsplash.com/ -->
      <section class="content-section" data-scroll>
        <figure class="figure"><img src="https://source.unsplash.com/C59a_dcxpvQ/800x800" /></figure>
        <div class="content">
          <header class="header">
            <div class="subheading">Lorem ipsum dolor sit.</div>
            <h2 class="heading">Lorem Ipsum<br />Lorem ipsum dolor sit amet . </h2>
          </header>
          <p class="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
          </p>
        </div>
      </section>

      <section class="content-section" data-scroll>
        <figure class="figure"><img src="https://picsum.photos/1200/1200/?image=804" /></figure>
        <div class="content">
          <header class="header">
            <div class="subheading">Lorem ipsum dolor sit.</div>
            <h2 class="heading">Lorem Ipsum<br />Lorem ipsum dolor sit amet .</h2>
          </header>
          <p class="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
          </p>
        </div>
      </section>

      <section class="content-section" data-scroll>
        <figure class="figure"><img src="https://picsum.photos/1200/1200/?image=838" /></figure>
        <div class="content">
          <header class="header">
            <div class="subheading">Lorem ipsum dolor sit.</div>
            <h2 class="heading">Lorem Ipsum<br />Lorem ipsum dolor sit amet .</h2>
          </header>
          <p class="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
          </p>
        </div>
      </section>

      <section class="content-section" data-scroll>
        <figure class="figure"><img src="https://picsum.photos/1200/1200/?image=839" /></figure>
        <div class="content">
          <header class="header">
            <div class="subheading">Lorem ipsum dolor sit.</div>
            <h2 class="heading">Lorem Ipsum<br />Lorem ipsum dolor sit amet .</h2>
          </header>
          <p class="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
          </p>
        </div>
      </section>

      <section class="content-section" data-scroll>
        <figure class="figure"><img src="https://picsum.photos/1200/1200/?image=841" /></figure>
        <div class="content">
          <header class="header">
            <div class="subheading">Lorem ipsum dolor sit.</div>
            <h2 class="heading">Lorem Ipsum<br />Lorem ipsum dolor sit amet .</h2>
          </header>
          <p class="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
          </p>
        </div>
      </section>

      <section class="content-section" data-scroll>
        <figure class="figure"><img src="https://picsum.photos/1200/1200/?image=439" /></figure>
        <div class="content">
          <header class="header">
            <div class="subheading">Lorem ipsum dolor sit.</div>
            <h2 class="heading">Lorem Ipsum<br />Lorem ipsum dolor sit amet .</h2>
          </header>
          <p class="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
          </p>
        </div>
      </section>

      <section class="content-section" data-scroll>
        <figure class="figure"><img src="https://picsum.photos/1200/1200/?image=143" /></figure>
        <div class="content">
          <header class="header">
            <div class="subheading">Lorem ipsum dolor sit.</div>
            <h2 class="heading">Lorem Ipsum<br />Lorem ipsum dolor sit amet .</h2>
          </header>
          <p class="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
          </p>
        </div>
      </section>

      <section class="content-section" data-scroll>
        <figure class="figure"><img src="https://picsum.photos/1200/1200/?image=278" /></figure>
        <div class="content">
          <header class="header">
            <div class="subheading">Lorem ipsum dolor sit.</div>
            <h2 class="heading">Lorem Ipsum<br />Lorem ipsum dolor sit amet .</h2>
          </header>
          <p class="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
          </p>
        </div>
      </section>

      <section class="content-section" data-scroll>
        <figure class="figure"><img src="https://picsum.photos/1200/1200/?image=545" /></figure>
        <div class="content">
          <header class="header">
            <div class="subheading">Lorem ipsum dolor sit.</div>
            <h2 class="heading">Lorem Ipsum<br />Lorem ipsum dolor sit amet .</h2>
          </header>
          <p class="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
          </p>
        </div>
      </section>
    </div>
</template>

<script>

import Splitting from 'splitting'
import ScrollOut from 'scroll-out'

export default {
  name: 'About',
  props: {
  },
  components: {
  },
  directives: {
  },
  mounted: function () {
    ScrollOut({
      cssProps: {
        visibleY: true,
        viewportY: true
      }
    })

    Splitting({ target: '.heading' })
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

@import url('https://fonts.googleapis.com/css?family=Raleway');

.intro-section {
  text-align: center;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content-section {
  --scroll-length: 1.5;
  height: calc( var(--scroll-length) * 100vh );
  width: 100%;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.content-section .content .subheading,
.content-section .content .paragraph {
  opacity: 1;
  opacity: calc( 1 + var(--viewport-y) );
}

.figure {
  width: 100%;
  height: 100vh;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
}
.figure > img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center center;
     object-position: center center;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 35em;
  display: grid;
  grid-template-rows: 1fr 1fr;
  color: white;
  padding: 2em;
  font-size: 2.5vmin;
}
.content * {
  text-shadow: 0 0 4vmin rgba(0, 0, 0, 0.25);
}
.content > .header {
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.content > .paragraph {
  grid-row: 2 / 3;
  line-height: 1.5;
}

.heading {
  font-size: 2.75em;
  margin: 0;
}

.subheading {
  font-size: 1.25em;
  font-weight: 600;
  margin-bottom: .5em;
}

/* ---------------------------------- */
.figure {
  --scale: calc(.8 +
    (.2 * var(--scroll-length) * var(--visible-y))
  );
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  margin: 0;
  display: block;
  overflow: hidden;
  will-change: transform;
  -webkit-transform: scale(var(--scale));
          transform: scale(var(--scale));
}
.figure:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: black;
  opacity: calc( var(--visible-y) );
}
.figure > img {
  display: block;
  will-change: transform;
  -webkit-transform: scale(calc(1 / var(--scale)));
          transform: scale(calc(1 / var(--scale)));
}

/* ---------------------------------- */
.char {
  display: inline-block;
  opacity: calc(  1 + (  ( var(--viewport-y) * 1.5 ) - var(--char-percent) ) );
}

*,
*:before,
*:after {
  position: relative;
  box-sizing: border-box;
}

.heading,
.intro-heading {
  font-weight: 700;
}

body, html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 1.05;
  font-weight: 400;
  letter-spacing: -.015em;
  font-family: "SF Pro Display","Helvetica Neue","Helvetica","Arial",sans-serif;
}


</style>
