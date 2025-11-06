<template>
    <!-- Sidebar -->
    <div class="sidebar fixed top-0 right-0 bottom-0 w-sidebar bg-white border-l border-borderColor" id="sidebar"
    :class="{ open: isSidebarOpen }">
        <!-- Logo -->
        <div class="sidebar-logo fixed h-[56px] w-sidebar pt-[19px] px-4 border-b border-borderColor">
            <div>
                <router-link to="/dashboard/" class="logo logo-normal">
                    <img src="@/assets/img/logo.svg" alt="Logo">
                </router-link>
                <router-link to="/dashboard/" class="logo-small hidden">
                    <img src="@/assets/img/logo-small.svg" alt="Logo">
                </router-link>
                <router-link to="/dashboard/" class="dark-logo hidden">
                    <img src="@/assets/img/logo-white.svg" alt="Logo">
                </router-link>
            </div>
            <button id="toggle_btn" @click="toggleSidebar"
                class="sidenav-toggle-btn btn p-0 active absolute top-1/2 -translate-y-1/2 left-2 w-[22px] h-[22px] rounded-full text-dark text-[16px]">
                <i class="ti ti-arrow-bar-to-left"></i>
            </button>
            <!-- Sidebar Menu Close -->
            <button class="sidebar-close text-[20px] absolute top-1/2 -translate-y-1/2 right-[20px] rounded-full" @click="closeSidebar">
                <i class="ti ti-x align-middle"></i>
            </button>
        </div>
        <!-- /Logo -->

        <div class="sidebar-inner" data-simplebar>
          <simplebar id="scrollbar" class="h-100" ref="scrollbar">
        <vertical-sidebar></vertical-sidebar>
      </simplebar>
    </div>
    </div>
    <!-- /Sidebar -->
</template>
<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

export default {
  components: {
    simplebar,
  },
  data() {
    return {
      isSidebarOpen: true, // Default to open if needed
    };
  },
  mounted() {
    this.initMouseoverListener();
    document.body.classList.remove("slide-nav"); // Ensure it's added on mount if needed
  },
  methods: {
    toggleSidebar() {
      const body = document.body;
      body.classList.toggle("mini-sidebar");
    },
    closeSidebar() {
      const wrapper = document.querySelector(".main-wrapper");
      if (wrapper && wrapper.classList.contains("slide-nav")) {
        wrapper.classList.remove("slide-nav");
        console.log("");
      } else {
        console.log("");
      }
    },

    initMouseoverListener() {
      document.addEventListener("mouseover", this.handleMouseover);
    },
    handleMouseover(e) {
      e.stopPropagation();

      const body = document.body;

      if (body.classList.contains("mini-sidebar")) {
        const target = e.target.closest(".sidebar, .header-left");

        if (target) {
          body.classList.add("expand-menu");
        } else if (body.classList.contains("expand-menu")) {
          body.classList.remove("expand-menu");
        }

        e.preventDefault();
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener("mouseover", this.handleMouseover);
  },
};
</script>