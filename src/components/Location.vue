<template>
  <div>
    <div class="container" id="map"></div>
    <br>
    <div class="location">
      We are located at: 
    </div>
    <div>
      7370 N Lincoln Ave Unit B
      <br>
      Lincolnwood, IL 60712
    </div>
  </div>
</template>

<style scoped>
  #map {
    height: 80vh;
  }

  .location {
    font-weight: bold;
  }
</style>

<script>
  import mapboxgl from "mapbox-gl";
  import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
  import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

  export default {
    name: "Location",
    data() {
      return {
        accessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN
      }
    },
    mounted() {
      mapboxgl.accessToken = this.accessToken;

      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-87.74340414650513, 42.01429086172376],
        zoom: 15
      });

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav, "top-right");


      map.on('load', () => {
        let directions = new MapboxDirections({
          accessToken: this.accessToken
        });
        map.addControl(directions, 'top-left')

        directions.setOrigin('')
        directions.setDestination('7370 North Lincoln Avenue, Lincolnwood, Illinois 60712, United States')
      });


      new mapboxgl.Marker()
      .setLngLat([-87.74340414650513, 42.01429086172376])
      .addTo(map);
    },
  };
</script>
