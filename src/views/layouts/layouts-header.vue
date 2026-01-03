<template>
  <!-- Topbar Start -->
  <header
    class="navbar-header header px-5 py-2 fixed top-0 left-0 right-0 bg-white h-[56px] border-b border-borderColor lg:left-vertical-w">
    <div class="w-full flex flex-wrap justify-between items-center gap-4">
      <!-- Left: Logo & Toggle -->
      <div class="flex items-center gap-3">
        <!-- Logo -->
        <router-link to="/dashboard/" class="items-center hidden">
          <span class="block dark:hidden">
            <img src="@/assets/img/logo.svg" alt="logo" class="h-8">
          </span>
          <span class="hidden dark:block">
            <img src="@/assets/img/logo-white.svg" alt="logo-white" class="h-8">
          </span>
        </router-link>
        <!-- Mobile Sidebar Toggle -->
        <a href="#sidebar" id="mobile_btn" class="block lg:hidden text-gray-600 dark:text-gray-300 mobile_btn"
          @click="toggleMobileBtn">
          <i class="ti ti-menu-deep text-xl"></i>
        </a>
        <!-- Desktop Sidebar Toggle -->
        <button id="toggle_btn2" @click="toggleMobileBtnOne" class="text-gray-600 dark:text-gray-300">
          <i class="ti ti-arrow-bar-to-right"></i>
        </button>
        <!-- Search (Desktop only) -->
        <div class="hidden lg:flex items-center">
          <div class="relative">
            <input type="text"
              class="form-input pl-4 pr-10 py-2 rounded-md border-borderColor text-sm shadow placeholder-gray-100"
              placeholder="Search Keyword">
            <span class="absolute right-3 top-2 text-gray-900">
              <i class="ti ti-command"></i>
            </span>
          </div>
        </div>
      </div>
      <!-- Right: Icons & User -->
      <div class="flex items-center gap-3">
        <!-- Mobile Search -->
        <button
          class="lg:hidden z-[1] flex items-center justify-center cursor-pointer w-[38px] h-[38px] rounded-[0.3125rem] text-gray-900 border border-borderColor shadow hover:bg-light hover:border-light p-[5px] relative"
          data-dropdown-toggle="searchModal">
          <i class="ti ti-search text-lg"></i>
        </button>
        <!-- Fullscreen -->
        <button
          class="btnFullscreen z-[1] flex items-center justify-center cursor-pointer w-[38px] h-[38px] rounded-[0.3125rem] text-gray-900 border border-borderColor shadow hover:bg-light hover:border-light p-[5px] relative"
          @click="handleFullscreen">
          <i class="ti ti-maximize"></i>
        </button>
        <div class="w-[1px] h-[20px] bg-gray-100"></div>
        <!-- Notifications (simplified) -->
        <div class="relative">
          <button
            class="relative z-[1] flex items-center justify-center cursor-pointer w-[38px] h-[38px] rounded-[0.3125rem] text-gray-900 border border-borderColor shadow hover:bg-light hover:border-light p-[5px] relative"
            data-dropdown-toggle="notification-dropdown">
            <i class="ti ti-bell-check animate-ring"></i>
            <span
              class="absolute top-[6px] right-[6px] bg-danger text-white font-normal w-[12px] h-[12px] text-[6px] p-0 flex items-center justify-center rounded-full">10</span>
          </button>
          <div id="notification-dropdown"
            class="hidden p-0 dropdown-menu-end w-[300px] bg-white border border-borderColor rounded">
            <div class="p-2 border-b border-borderColor">
              <div class="flex items-center">
                <div class="flex-1">
                  <h6 class="m-0 text-[16px] font-semibold">Notifications</h6>
                </div>
              </div>
            </div>

            <!-- Notification Body -->
            <div class="relative z-[2] rounded-none overflow-y-auto scroll-smooth h-[270px] max-h-[300px]">
              <!-- Item -->
              <div class="py-4 border-b px-4 border-borderColor" id="notification-1">
                <div class="flex">
                  <div class="mr-2 relative shrink-0">
                    <img src="@/assets/img/users/user-01.jpg" class="w-10 h-10 rounded-full object-cover" alt="Img">
                  </div>
                  <div class="flex-1">
                    <p class="m-0 font-medium text-gray-800">John Doe</p>
                    <p class="mb-1">
                      left 6 comments on <span class="font-medium text-gray-800">Isla Nublar SOC2 compliance
                        report</span></p>
                    <div class="flex justify-between items-center text-xs text-gray-500">
                      <span><i class="ti ti-clock mr-1"></i>4 min ago</span>
                      <div class="flex items-center gap-2">
                        <a href="#" class="w-2 h-2 rounded-full bg-red-600" title="Make as Read"></a>
                        <button class="p-0 w-4 h-4"><i class="ti ti-x"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item -->
              <div class="py-4 border-b px-4 border-borderColor">
                <div class="flex">
                  <div class="mr-2 relative shrink-0">
                    <img src="@/assets/img/users/user-12.jpg" class="w-10 h-10 rounded-full object-cover" alt="Img">
                  </div>
                  <div class="flex-1">
                    <p class="m-0 font-medium text-gray-800">Thomas William</p>
                    <p class="mb-1">“Oh, I finished de-bugging the phones, but the system's compiling for eighteen
                      minutes, or twenty...”</p>
                    <div class="flex justify-between items-center text-xs text-gray-500">
                      <span><i class="ti ti-clock mr-1"></i>8 min ago</span>
                      <div class="flex items-center gap-2">
                        <a href="#" class="w-2 h-2 rounded-full bg-red-600" title="Make as Read"></a>
                        <button class="p-0 w-4 h-4"><i class="ti ti-x"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item -->
              <div class="py-4 border-b px-4 border-borderColor">
                <div class="flex">
                  <div class="mr-2 relative shrink-0">
                    <img src="@/assets/img/profiles/avatar-12.jpg" class="w-10 h-10 rounded-full object-cover"
                      alt="Img">
                  </div>
                  <div class="flex-1">
                    <p class="m-0 font-medium text-gray-800">Sarah Anderson</p>
                    <p class="mb-1">attached a file to <span class="font-medium text-gray-900">Isla Nublar SOC2
                        compliance report</span></p>
                    <div class="flex justify-between items-center text-xs text-gray-500">
                      <span><i class="ti ti-clock mr-1"></i>15 min ago</span>
                      <div class="flex items-center gap-2">
                        <a href="#" class="w-2 h-2 rounded-full bg-red-600" title="Make as Read"></a>
                        <button class="p-0 w-4 h-4"><i class="ti ti-x"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item -->
              <div class="py-4 border-b px-4 border-borderColor">
                <div class="flex">
                  <div class="mr-2 relative shrink-0">
                    <img src="@/assets/img/profiles/avatar-08.jpg" class="w-10 h-10 rounded-full object-cover"
                      alt="Img">
                  </div>
                  <div class="flex-1">
                    <p class="m-0 font-medium text-gray-800">Ann McClure</p>
                    <p class="mb-1">mentioned you in <span class="font-medium text-gray-900">Bug Fix Review - Task
                        #432</span></p>
                    <div class="flex justify-between items-center text-xs text-gray-500">
                      <span><i class="ti ti-clock mr-1"></i>20 min ago</span>
                      <div class="flex items-center gap-2">
                        <a href="#" class="w-2 h-2 rounded-full bg-red-600" title="Make as Read"></a>
                        <button class="p-0 w-4 h-4"><i class="ti ti-x"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- View All -->
            <div class="p-2 rounded-b border-t border-borderColor text-center">
              <router-link to="/notifications" class="text-center underline text-sm text-gray-900 hover:text-primary">
                View All Notifications
              </router-link>
            </div>
          </div>
        </div>
        <!-- User Profile -->
        <div>
          <button data-dropdown-toggle="profile-dropdown" class="flex items-center justify-center" type="button">
            <span class="relative">
              <img
                :src="user.photo"
                alt="Img"
                class="w-[38px] h-[38px] rounded object-cover object-center"
              >
              <span class="right-0 bottom-0 absolute w-3 h-3 bg-success border-2 border-white rounded-full"></span>
            </span>
          </button>
          <div id="profile-dropdown" class="z-10 hidden bg-white rounded-[5px] shadow w-[250px] p-2 pb-0">
            <div class="flex items-center bg-primary-600 p-2 rounded">
              <img
                v-if="user.photo"
                :src="user.photo"
                alt="User"
                class="w-[42px] h-[42px] rounded-full object-cover"
              >
              <img
                v-else
                src="@/assets/img/users/user-40.jpg"
                alt="Default"
                class="w-[42px] h-[42px] rounded-full object-cover"
              >

              <div class="ml-2">
                <p class="font-medium text-gray-800 dark:text-white mb-0">
                  {{ user.name }}
                </p>
                <span class="block text-xs text-gray-600 dark:text-white">
                  {{ user.title }}
                </span>
              </div>
            </div>
            <div class="py-2 border-t border-borderColor">
              <router-link
                class="flex items-center p-2 px-3 rounded text-primary hover:bg-light"
                to="/"
                @click.prevent="handleLogout"
              >
                <i class="ti ti-logout me-1 fs-17 align-middle"></i>Sign Out
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Topbar End -->

  <!-- Search Modal -->
  <div id="searchModal" class="hidden lg:flex items-center">
    <div class="relative">
      <input type="text"
        class="form-input pl-4 pr-10 py-2 rounded-md border-borderColor text-sm shadow placeholder-gray-100"
        placeholder="Search Keyword">
      <span class="absolute right-3 top-2 text-gray-900">
        <i class="ti ti-command"></i>
      </span>
    </div>
  </div>

  <theme-settings></theme-settings>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import { initFlowbite } from "flowbite";
import api from "@/api/api";

const user = ref({
  name: '',
  title: '',
  photo: null,
})

// === Router ===
const router = useRouter();
const route = useRoute();

// === Logout Function ===
const handleLogout = async () => {
  try {
    await api.post('/logout'); // endpoint API logout kamu
  } catch (error) {
    console.error('Logout error:', error);
  } finally {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
  }
};

// === Dark Mode Logic ===
const isDarkMode = ref(false);

const setThemeAttribute = (enabled) => {
  // kalau pakai Tailwind darkMode: 'class'
  if (enabled) {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-bs-theme", "dark");
    document.documentElement.setAttribute("data-topbar", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-bs-theme", "light");
    document.documentElement.setAttribute("data-topbar", "white");
  }
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem("dark", isDarkMode.value ? "enabled" : "disabled");
  setThemeAttribute(isDarkMode.value);
};

const initializeDarkMode = () => {
  const darkMode = localStorage.getItem("dark");
  isDarkMode.value = darkMode === "enabled";
  setThemeAttribute(isDarkMode.value);
};

// === Sidebar Toggle ===
const toggleMobileBtn = () => {
  document.querySelector(".main-wrapper")?.classList.toggle("slide-nav");
  document.querySelector(".sidebar-overlay")?.classList.toggle("opened");
  document.querySelector("html")?.classList.toggle("menu-opened");
};

const toggleMobileBtnOne = () => {
  document.querySelector(".main-wrapper")?.classList.toggle("slide-nav");
  document.querySelector(".sidebar-overlay")?.classList.toggle("opened");
  document.querySelector("html")?.classList.toggle("menu-opened");
};

// === Fullscreen ===
const handleFullscreen = () => {
  toggleFullscreen();
};

const toggleFullscreen = () => {
  const elem = document.documentElement;
  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch((err) => {
      console.error(`Error trying to enable full-screen mode: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
};

// === Cleanup Sidebar Classes on Route Change ===
const removeSidebarClasses = () => {
  document.querySelector(".main-wrapper")?.classList.remove("slide-nav");
  document.querySelector(".sidebar-overlay")?.classList.remove("opened");
  document.querySelector("html")?.classList.remove("menu-opened");
};

// === Watch route for changes (cleanup sidebar) ===
watch(
  () => route.path,
  () => removeSidebarClasses()
);

// === Lifecycle ===
onMounted(() => {
  initializeDarkMode();
  removeSidebarClasses();
  initFlowbite();

  const storedUser = JSON.parse(localStorage.getItem('user') || '{}')

  user.value.name  = storedUser.name  || '-'
  user.value.title = storedUser.title || '-'
  user.value.photo = storedUser.photo ?? null
});
</script>
