<template>
    <div class="completeBody">
        <GmapMap
            :center="this.m"
            :zoom="7"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
            >
            <GmapMarker
                :position="this.m"
                :clickable="true"
                :draggable="false"
                @click="center=this.m"
            />
        </GmapMap><br>
        <div><p @click="changeMapPos">change</p> </div>
        
    </div>
</template>

<script>



export default {
  name: 'test3',
  data () {
    return {
      m: {lat: 17, lng: 78}
    }
  },
  mounted () {
  },
  computed: {
    m: function () {
      return this.m
    }
  },
  methods: {
    changeMapPos () {
      this.m = {lat: '17.542615899999998', lng: '78.5738136'}
      console.log(this.m)
    }
  }
}
</script>
