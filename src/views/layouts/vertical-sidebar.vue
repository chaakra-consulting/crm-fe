<template>
  <div id="sidebar-menu" class="sidebar-menu">
    <ul class="pb-[20px]">
      <template v-for="item in sideBarData" :key="item.tittle">
        <li class="menu-title uppercase text-[13px] font-medium text-gray-500 mb-3 mt-2">
          <span>{{ item.tittle }}</span>
        </li>
        <li>
          <ul class="mb-[25px]">
            <template v-for="menu in item.menu" :key="menu.menuValue">
              <li
                v-if="!menu.hasSubRoute"
                :class="{ active: isMenuActive(menu) }"
                class="mb-[5px]"
              >
                <router-link
                  v-if="menu.route"
                  :to="menu.route"
                  class="p-1 flex items-center text-gray-900 font-medium relative rounded-[0.3125rem]"
                >
                  <i
                    :class="
                      'ti ti-' +
                      menu.icon +
                      ' w-[28px] h-[28px] inline-flex text-[16px] items-center justify-center rounded-[0.3125rem] shrink-0'
                    "
                  ></i>
                  <span>{{ menu.menuValue }}</span>
                </router-link>
              </li>
              <li v-else class="submenu mb-[5px]">
                <a
                  href="javascript:void(0);"
                  @click="expandSubMenus(menu)"
                  :class="{
                    subdrop: menu.showSubRoute && !openMenuItem,
                    active: isActive(menu),
                    'p-1 flex items-center text-gray-900 font-medium relative rounded-[0.3125rem]': true,
                  }"
                >
                  <i
                    :class="
                      'ti ti-' +
                      menu.icon +
                      ' w-[28px] h-[28px] inline-flex text-[16px] items-center justify-center rounded-[0.3125rem] shrink-0'
                    "
                  ></i>
                  <span>{{ menu.menuValue }}</span>
                  <span class="menu-arrow"></span>
                </a>
                <ul
                  :style="{
                    display: menu.showSubRoute || isActive(menu) ? 'block' : 'none',
                  }"
                >
                  <li v-for="(subMenu, index) in menu.subMenus" :key="index">
                    <router-link
                      :to="subMenu.route"
                      class="pl-[36px] pr-[4px] py-[8px] text-[13px] relative font-normal block"
                    >
                      {{ subMenu.menuValue }}
                    </router-link>
                  </li>
                </ul>
              </li>
              <li v-if="menu.hasSubRouteTwo" class="submenu mb-[5px]">
                <a
                  href="javascript:void(0);"
                  @click="OpenMenu(menu)"
                  :class="{
                    subdrop: openMenuItem === menu || isActive(menu),
                    active: isActive(menu),
                    'p-1 flex items-center text-gray-900 font-medium relative rounded-[0.3125rem]': true,
                  }"
                >
                  <i
                    :class="
                      'ti ti-' +
                      menu.icon +
                      ' w-[28px] h-[28px] inline-flex text-[16px] items-center justify-center rounded-[0.3125rem] shrink-0'
                    "
                  ></i>
                  <span>{{ menu.menuValue }}</span>
                  <span class="menu-arrow"></span>
                </a>
                <ul :style="{ display: openMenuItem === menu ? 'block' : 'none' }">
                  <li v-for="subMenus in menu.subMenus" :key="subMenus.menuValue">
                    <template v-if="!subMenus.customSubmenuTwo">
                      <router-link
                        :to="subMenus.route"
                        router-link-active="active"
                        class="pl-[36px] pr-[4px] py-[8px] text-[13px] relative font-normal block"
                      >
                        {{ subMenus.menuValue }}
                      </router-link>
                    </template>
                    <template v-else-if="subMenus.customSubmenuTwo">
                      <li class="submenu submenu-two">
                        <a
                          href="javascript:void(0);"
                          @click="openSubmenuOne(subMenus)"
                          :class="{
                            subdrop:
                              openSubmenuOneItem === subMenus || isSubActive(subMenus),
                            active: openSubmenuOneItem === subMenus || isSubActive(subMenus),
                            'pl-[36px] pr-[4px] py-[8px] text-[13px] relative font-normal block': true,
                          }"
                        >
                          {{ subMenus.menuValue }}
                          <span class="menu-arrow inside-submenu"></span>
                        </a>
                        <ul
                          :style="{
                            display: openSubmenuOneItem === subMenus || isSubActive(subMenus) ? 'block' : 'none',
                          }"
                        >
                          <li
                            v-for="subMenuTwo in subMenus.subMenusTwo"
                            :key="subMenuTwo.menuValue"
                          >
                            <router-link
                              :to="subMenuTwo.route"
                              class="pl-[36px] pr-[4px] py-[8px] text-[13px] relative font-normal block"
                            >
                              {{ subMenuTwo.menuValue }}
                            </router-link>
                          </li>
                        </ul>
                      </li>
                    </template>
                  </li>
                </ul>
              </li>
            </template>
          </ul>
        </li>
      </template>
      <li class="menu-title uppercase text-[13px] font-medium text-gray-500 mb-3 mt-2">
        <span>Help</span>
      </li>
      <li>
        <ul class="mb-0">
          <li class="mb-[5px]">
            <a
              href="javascript:void(0);"
              class="p-1 flex items-center text-gray-900 font-medium relative rounded-[0.3125rem]"
              ><i
                class="ti ti-file-stack w-[28px] h-[28px] inline-flex text-[16px] items-center justify-center rounded-[0.3125rem] shrink-0"
              ></i
              ><span>Documentation</span></a
            >
          </li>
          <li class="mb-[5px]">
            <a
              href="javascript:void(0);"
              class="p-1 flex items-center text-gray-900 font-medium relative rounded-[0.3125rem]"
              ><i
                class="ti ti-arrow-capsule w-[28px] h-[28px] inline-flex text-[16px] items-center justify-center rounded-[0.3125rem] shrink-0"
              ></i
              ><span>Changelog v2.2.8</span></a
            >
          </li>
          <li class="submenu mb-[5px]">
            <a
              href="javascript:void(0);"
              class="p-1 flex items-center text-gray-900 font-medium relative rounded-[0.3125rem]"
              ><i
                class="ti ti-menu-deep w-[28px] h-[28px] inline-flex text-[16px] items-center justify-center rounded-[0.3125rem] shrink-0"
              ></i
              ><span>Multi Level</span><span class="menu-arrow"></span
            ></a>
            <ul>
              <li>
                <a
                  href="javascript:void(0);"
                  class="pl-[36px] pr-[4px] py-[8px] text-[13px] relative font-normal block"
                  >Level 1.1</a
                >
              </li>
              <li class="submenu submenu-two">
                <a
                  href="javascript:void(0);"
                  class="pl-[36px] pr-[4px] py-[8px] text-[13px] relative font-normal block"
                  >Level 1.2<span class="menu-arrow inside-submenu"></span
                ></a>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="pl-[36px] pr-[4px] py-[8px] text-[13px] relative font-normal block"
                      >Level 2.1</a
                    >
                  </li>
                  <li class="submenu submenu-two submenu-three">
                    <a
                      href="javascript:void(0);"
                      class="pl-[36px] pr-[4px] py-[8px] text-[13px] relative font-normal block"
                      >Level 2.2<span
                        class="menu-arrow inside-submenu inside-submenu-two"
                      ></span
                    ></a>
                    <ul>
                      <li>
                        <a
                          href="javascript:void(0);"
                          class="pl-[36px] pr-[4px] py-[8px] text-[13px] relative font-normal block"
                          >Level 3.1</a
                        >
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          class="pl-[36px] pr-[4px] py-[8px] text-[13px] relative font-normal block"
                          >Level 3.2</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import sideBarData from "@/assets/json/sidebar-data.json";
import { initFlowbite } from "flowbite";
export default {
  data() {
    return {
      sideBarData: sideBarData,
      openMenuItem: null,
      openSubmenuOneItem: null,
      route_array: [],
      multilevel: [false, false, false],
    };
  },
  computed: {
    isMenuActive() {
      return (menu) => {
        return (
          this.$route.path === menu.route ||
          this.$route.path === menu.active_link ||
          this.$route.path === menu.active_link1 ||
          this.$route.path === menu.active_link2 ||
          this.$route.path === menu.active_link3 ||
          this.$route.path === menu.active_link4 ||
          this.$route.path === menu.active_link5
        );
      };
    },
    isActive() {
      return (menu) => {
        const currentPath = this.$route.path;

        // Check if current path matches menu route exactly or starts with menu route + '/'
        if (menu.route && (currentPath === menu.route || currentPath.startsWith(menu.route + '/'))) {
          return true;
        }

        // Check active_link properties with more specific matching
        const activeLinks = [
          menu.active_link,
          menu.active_link1,
          menu.active_link2,
          menu.active_link3,
          menu.active_link4,
          menu.active_link5
        ].filter(link => link);

        return activeLinks.some(link =>
          currentPath === link ||
          currentPath.startsWith(link + '/') ||
          link === currentPath.split('/')[1] // Check second level for nested matches
        );
      };
    },
    isSubActive() {
      return (subMenu) => {
        const currentPath = this.$route.path;

        // Check if current path matches submenu route exactly or starts with submenu route + '/'
        if (subMenu.route && (currentPath === subMenu.route || currentPath.startsWith(subMenu.route + '/'))) {
          return true;
        }

        // Check active_link property with more specific matching
        if (subMenu.active_link) {
          return currentPath === subMenu.active_link ||
                 currentPath.startsWith(subMenu.active_link + '/') ||
                 subMenu.active_link === currentPath.split('/')[1] || // Check second level for nested matches
                 subMenu.active_link === currentPath.split('/').slice(0, 2).join('/'); // Check first two levels
        }

        // For third level submenus (submenu-two), check if any child routes match
        if (subMenu.subMenusTwo && subMenu.subMenusTwo.length > 0) {
          return subMenu.subMenusTwo.some(childSubMenu => {
            // Check if current path matches child submenu route
            if (childSubMenu.route && (currentPath === childSubMenu.route || currentPath.startsWith(childSubMenu.route + '/'))) {
              return true;
            }

            // Check if child submenu has active_link that matches
            if (childSubMenu.active_link) {
              return currentPath === childSubMenu.active_link ||
                     currentPath.startsWith(childSubMenu.active_link + '/') ||
                     childSubMenu.active_link === currentPath.split('/')[1] || // Check second level
                     childSubMenu.active_link === currentPath.split('/').slice(0, 2).join('/'); // Check first two levels
            }

            return false;
          });
        }

        return false;
      };
    },
  },
  methods: {
    expandSubMenus(menu) {
      this.sideBarData.forEach((item) => {
        item.menu.forEach((subMenu) => {
          if (subMenu !== menu) {
            subMenu.showSubRoute = false;
          }
        });
      });
      menu.showSubRoute = !menu.showSubRoute;
    },
    OpenMenu(menu) {
      this.sideBarData.forEach((item) => {
        item.menu.forEach((subMenu) => {
          subMenu.showSubRoute = false;
        });
      });
      this.openMenuItem = this.openMenuItem === menu ? null : menu;
    },
    openSubmenuOne(subMenus) {
      this.openSubmenuOneItem = this.openSubmenuOneItem === subMenus ? null : subMenus;
    },
  },
  mounted() {
    initFlowbite();
  },
};
</script>
