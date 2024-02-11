<template>
  <div id="map" class="map"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'LeafletMap',
  mounted() {
    const map = L.map('map').setView([35.2401, 24.8093], 10); // Crete's coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Custom points can be added here
  },
};
</script>

<style>
.map {
  height: 700px;
  width: 100%;
  border: 2px solid black;
}
</style>
