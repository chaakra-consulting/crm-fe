<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Leaflet Maps
        </h4>
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li>
              <a href="javascript:void(0);" class="hover:underline text-gray-700">Icons</a>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li class="text-dark font-medium" aria-current="page">Leaflet Maps</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <!-- Start::row-1 -->
      <div class="md:grid grid-cols-2 gap-x-6">
        <div class="col-span-1">
          <div class="card custom-card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h5 class="card-title">Leaflet Map</h5>
            </div>
            <div class="card-body p-5">
              <div class="h-72" id="basic-map"></div>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="card custom-card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h5 class="card-title">Map With Markers,circles and Polygons</h5>
            </div>
            <div class="card-body p-5">
              <div class="h-72" id="marker-map"></div>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="card custom-card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h5 class="card-title">Map With Popup</h5>
            </div>
            <div class="card-body p-5">
              <div class="h-72" id="shapes-map"></div>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="card custom-card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h5 class="card-title">Map With Custom Icon</h5>
            </div>
            <div class="card-body p-5">
              <div class="h-72" id="custom-icon-map"></div>
            </div>
          </div>
        </div>
      </div>
      <!--End:row-1 -->

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  data() {
    return {
      maps: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initMaps();
    });
  },
  methods: {
    initMaps() {
      // Fix for default marker icons in webpack
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
      });

      // 1. Basic Map
      this.initBasicMap();

      // 2. Map with Multiple Markers
      this.initMarkerMap();

      // 3. Map with Shapes
      this.initShapesMap();

      // 4. Map with Custom Icons
      this.initCustomIconMap();
    },

    initBasicMap() {
      const map = L.map('basic-map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      this.maps.basic = map;
    },

    initMarkerMap() {
      const map = L.map('marker-map').setView([51.51, -0.1], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Add some markers
      const markers = [
        {
          lat: 51.5,
          lng: -0.09,
          title: 'Marker 1',
          description: 'This is the first marker.'
        },
        {
          lat: 51.52,
          lng: -0.1,
          title: 'Marker 2',
          description: 'This is the second marker.'
        },
        {
          lat: 51.51,
          lng: -0.08,
          title: 'Marker 3',
          description: 'This is the third marker.'
        }
      ];

      markers.forEach(marker => {
        L.marker([marker.lat, marker.lng])
          .addTo(map)
          .bindPopup(`<b>${marker.title}</b><br>${marker.description}`);
      });

      this.maps.marker = map;
    },

    initShapesMap() {
      const map = L.map('shapes-map').setView([51.51, -0.1], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Add a circle
      L.circle([51.508, -0.11], {
        color: '#3b82f6',
        fillColor: '#3b82f6',
        fillOpacity: 0.3,
        radius: 300
      }).addTo(map).bindPopup("I am a circle!");

      // Add a polygon
      L.polygon([
        [51.515, -0.09],
        [51.52, -0.1],
        [51.52, -0.12],
        [51.51, -0.13]
      ], {
        color: '#10b981',
        fillColor: '#10b981',
        fillOpacity: 0.3
      }).addTo(map).bindPopup("I am a polygon!");

      // Add a polyline
      const polyline = L.polyline([
        [51.505, -0.09],
        [51.51, -0.1],
        [51.52, -0.12],
        [51.52, -0.13]
      ], {
        color: '#ef4444',
        weight: 5,
        opacity: 0.8,
        lineJoin: 'round'
      }).addTo(map);

      // Add a popup to the polyline
      polyline.bindPopup("I am a polyline!");

      this.maps.shapes = map;
    },

    initCustomIconMap() {
      const map = L.map('custom-icon-map').setView([51.5, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Create a custom icon
      const customIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Add a marker with custom icon
      L.marker([51.5, -0.09], { icon: customIcon })
        .addTo(map)
        .bindPopup("Custom icon marker")
        .openPopup();

      // Add a blue marker with a different icon
      const blueIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      L.marker([51.51, -0.1], { icon: blueIcon })
        .addTo(map)
        .bindPopup("Blue marker");

      this.maps.customIcon = map;
    }
  },
  beforeUnmount() {
    // Clean up maps when component is destroyed
    Object.values(this.maps).forEach(map => {
      if (map && typeof map.remove === 'function') {
        map.remove();
      }
    });
  }
};
</script>

<style>
/* Ensure map containers have a defined height */
#basic-map,
#marker-map,
#shapes-map,
#custom-icon-map {
  height: 100%;
  min-height: 250px;
  width: 100%;
  border-radius: 0.375rem;
}

/* Fix for Leaflet container sizing */
.leaflet-container {
  width: 100%;
  height: 100%;
}

/* Card styles for consistent look */
.card {
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
