<template>
  <div class="body" ref="body">

    <aside class="rightSection"></aside>
    <aside class="leftSection"></aside>
    <aside class="rightSection"></aside>
    <aside class="leftSection"></aside>

    <div class="section one">
      <h2 class="section-heading">Step 1</h2>
      <p class="description-text"> Do the following things Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quidem rem accusamus perspiciatis magnam, fuga obcaecati quisquam nihil illum aperiam temporibus magni ipsum voluptates placeat, blanditiis vitae ab in ipsam. </p>
    </div>
    
    <div class="section two">
      <h2 class="section-heading">Step 2</h2>
      <p class="description-text"> Do the following things Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quidem rem accusamus perspiciatis magnam, fuga obcaecati quisquam nihil illum aperiam temporibus magni ipsum voluptates placeat, blanditiis vitae ab in ipsam. </p>
    </div>

    <div class="section three">
      <h2 class="section-heading">Step 3</h2>
      <p class="description-text"> Do the following things Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quidem rem accusamus perspiciatis magnam, fuga obcaecati quisquam nihil illum aperiam temporibus magni ipsum voluptates placeat, blanditiis vitae ab in ipsam. </p>
    </div>

    <div class="section four">
      <h2 class="section-heading">Step 4</h2>
      <p class="description-text"> Do the following things Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quidem rem accusamus perspiciatis magnam, fuga obcaecati quisquam nihil illum aperiam temporibus magni ipsum voluptates placeat, blanditiis vitae ab in ipsam. </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'how',
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>


.section {
  position: relative;
  height: 100vh;
  width: 50vw;
  z-index: 999;
}

.one {
  background: linear-gradient(#642B73, #C6426E);
}
.two {
  background:linear-gradient(#C6426E, #642B73);
  margin-left: 50vw;
}
.three {
  background:linear-gradient(#642B73, #C6426E);
}
.four {
  background:linear-gradient(#C6426E, #642B73);
    margin-left: 50vw;
}

.rightSection{
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100vh;
  width: 50vw;
  background: #eee;
  z-index: 99;
}

.leftSection{
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 50vw;
  background: #eee;
  z-index: 99;
}


.section-heading {
  color: white; 
  position: absolute;
  width: 20vw;
  top: 20vh;
  left: 15vw;
  text-align: left;
  font-size: 4.5rem;
}

.description-text {
  color: white; 
  position: absolute;
  width: 40vw;
  top: 50vh;
  left: 5vw;
  text-align: left;
  font-size: 1.5rem;
}

</style>
