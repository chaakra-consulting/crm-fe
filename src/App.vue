<template>
  <div id="app">
    <div class="main-wrapper">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();

  document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
    dropdownToggle.addEventListener("click", function (e) {
      e.preventDefault();
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle("hidden");
    });
  });
});
</script>
