<template>
  <div class="xl:col-span-3 theiaStickySidebar">
    <div class="bg-white border border-borderColor rounded p-4">
      <div class="settings-sidebar">
        <h5 class="mb-3 text-[17px]">Website Settings</h5>
        <div class="flex flex-col">
          <router-link to="/website-settings/company-settings" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/website-settings/company-settings'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/website-settings/company-settings')
          }">Company Settings</router-link>
          <router-link to="/website-settings/localization-settings" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/website-settings/localization-settings'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/website-settings/localization-settings')
          }">Localization</router-link>
          <router-link to="/website-settings/prefixes-settings" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/website-settings/prefixes-settings'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/website-settings/prefixes-settings')
          }">Prefixes</router-link>
          <router-link to="/website-settings/preference-settings" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/website-settings/preference-settings'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/website-settings/preference-settings')
          }">Preference</router-link>
          <router-link to="/website-settings/appearance-settings" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/website-settings/appearance-settings'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/website-settings/appearance-settings')
          }">Appearance</router-link>
          <router-link to="/website-settings/language-settings" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary':
              $route.path.includes('language-settings') ||
              $route.path.includes('language-web') ||
              $route.path.includes('language-web-edit'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded':
              !$route.path.includes('language-settings') &&
              !$route.path.includes('language-web') &&
              !$route.path.includes('language-web-edit')
          }">
            Language
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  }
}
</script>