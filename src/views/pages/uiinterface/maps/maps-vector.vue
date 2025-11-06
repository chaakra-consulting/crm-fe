<template>
  <div>
    <layouts-header />
    <layouts-sidebar />
    <!-- Page Wrapper -->
    <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
      <div class="content p-5 pb-0">
        <!-- Page Header -->
        <div class="mb-7">
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Vector Maps
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right" /></span>
              </li>
              <li>
                <a href="javascript:void(0);" class="hover:underline text-gray-700">Icons</a>
                <span><i class="ti ti-chevron-right" /></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Vector Maps</li>
            </ol>
          </nav>
        </div>
        <!-- End Page Header -->

        <!-- Map Container -->
        <div class="grid grid-cols-1 gap-6">
          <div class="card custom-card border-borderColor rounded-[5px] shadow-sm bg-white">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Basic Vector Map</h4>
            </div>
            <div class="card-body p-5">
              <div ref="mapContainer" class="h-[500px] w-full"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <layouts-footer />
    </div>
  </div>
</template>
<script>
import { onMounted, onBeforeUnmount, ref, onBeforeUpdate } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default {
  name: 'VectorMaps',
  setup() {
    const mapContainer = ref(null);
    let map = null;

    const initMap = () => {
      if (!mapContainer.value || map) return;
      
      // Initialize the map
      map = L.map(mapContainer.value, {
        zoomControl: false,
        attributionControl: false
      }).setView([20, 0], 2);

      // Add a tile layer (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Add some sample markers
      const cities = [
        { name: 'London', lat: 51.5074, lng: -0.1278 },
        { name: 'New York', lat: 40.7128, lng: -74.0060 },
        { name: 'Tokyo', lat: 35.6762, lng: 139.6503 },
        { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
        { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 }
      ];

      // Add markers with custom popups
      cities.forEach(city => {
        L.marker([city.lat, city.lng], { icon: defaultIcon })
          .addTo(map)
          .bindPopup(`<b>${city.name}</b><br>Lat: ${city.lat.toFixed(4)}<br>Lng: ${city.lng.toFixed(4)}`);
      });

      // Add zoom controls
      L.control.zoom({
        position: 'topright'
      }).addTo(map);

      // Add scale control
      L.control.scale({
        imperial: false,
        metric: true
      }).addTo(map);
    };

    onMounted(() => {
      // Initialize map after a small delay to ensure the container is rendered
      const timer = setTimeout(() => {
        initMap();
      }, 100);

      // Handle window resize
      const handleResize = () => {
        if (map) {
          setTimeout(() => {
            map.invalidateSize();
          }, 100);
        }
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', handleResize);
        if (map) {
          map.remove();
          map = null;
        }
      };
    });

    onBeforeUnmount(() => {
      if (map) {
        map.remove();
        map = null;
      }
    });

    return {
      mapContainer,
      title: 'Vector Maps',
      text: 'Interactive Vector Maps',
      text1: 'Maps',
    };
  }
};
</script>

<style scoped>
/* Ensure the map container has a defined height */
:deep(.leaflet-container) {
  min-height: 500px;
  width: 100%;
  border-radius: 0.375rem;
  z-index: 1;
}

/* Customize zoom controls */
:deep(.leaflet-control-zoom) {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-right: 10px;
  margin-top: 10px;
}

:deep(.leaflet-control-zoom a) {
  background-color: #fff;
  color: #333;
  transition: all 0.2s;
  width: 30px;
  height: 30px;
  line-height: 30px;
}

:deep(.leaflet-control-zoom a:hover) {
  background-color: #f8f9fa;
}

/* Customize popup */
:deep(.leaflet-popup-content-wrapper) {
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

:deep(.leaflet-popup-content) {
  margin: 8px 12px;
  font-size: 14px;
  line-height: 1.4;
}

:deep(.leaflet-popup-content b) {
  color: #5e72e4;
  display: block;
  margin-bottom: 4px;
}
</style>
