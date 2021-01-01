<template>
  <div>
    <div class="location" id="map"></div>
    <br>
    <div>
      7370 N Lincoln Ave Unit B
      <br>
      Lincolnwood, IL 60712
    </div>
  </div>
</template>

<script>
  import mapboxgl from "mapbox-gl";

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

      new mapboxgl.Marker()
      .setLngLat([-87.74340414650513, 42.01429086172376])
      .addTo(map);
    },
  };
</script>

<style>
#map {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  width: 600px;
  height: 400px;
}
</style>