<template>
  <div class="google-map">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as GoogleMapsLoader from 'google-maps'

  export default {
    name: 'google-map',
    props: ['lat', 'long'],
    data () {
      return {
      }
    },

    computed: mapGetters({
      config: 'config'
    }),

    mounted () {
      GoogleMapsLoader.KEY = this.config.googleMaps.apiKey

      GoogleMapsLoader.load((google) => {
        /* eslint-disable no-new */
        new google.maps.Map(this.$el, {
          center: new google.maps.LatLng(this.lat, this.long),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        })
      })
    }
  }
</script>

<style lang="scss">
  .google-map {
    height: 100%;
  }
</style>
