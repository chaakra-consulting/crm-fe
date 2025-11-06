<template>
  <div class="xl:col-span-3 theiaStickySidebar">
    <div class="bg-white border border-borderColor rounded p-4">
      <div class="settings-sidebar">
        <h5 class="mb-3 text-[17px]">Other Settings</h5>
        <div class="flex flex-col">
          <router-link to="/other-settings/sitemap" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/other-settings/sitemap'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/other-settings/sitemap')
          }">Sitemap</router-link>
          <router-link to="/other-settings/clear-cache" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/other-settings/clear-cache'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/other-settings/clear-cache')
          }">Clear Cache</router-link>
          <router-link to="/other-settings/storage" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/other-settings/storage'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/other-settings/storage')
          }">Storage</router-link>
          <router-link to="/other-settings/cronjob" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/other-settings/cronjob'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/other-settings/cronjob')
          }">Cronjob</router-link>
          <router-link to="/other-settings/ban-ip-address" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/other-settings/ban-ip-address'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/other-settings/ban-ip-address')
          }">Ban IP Address</router-link>
          <router-link to="/other-settings/system-backup" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/other-settings/system-backup'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/other-settings/system-backup')
          }">System Backup</router-link>
          <router-link to="/other-settings/database-backup" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/other-settings/database-backup'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/other-settings/database-backup')
          }">Database Backup</router-link>
          <router-link to="/other-settings/system-update" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/other-settings/system-update'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/other-settings/system-update')
          }">System Update</router-link>
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