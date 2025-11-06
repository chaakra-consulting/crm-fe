<template>
  <div class="xl:col-span-3 theiaStickySidebar">
    <div class="bg-white border border-borderColor rounded p-4">
      <div class="settings-sidebar">
        <h5 class="mb-3 text-[17px]">App Settings</h5>
        <div class="flex flex-col">
          <router-link to="/app-settings/invoice-settings" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/app-settings/invoice-settings'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/app-settings/invoice-settings')
          }">Invoice Settings</router-link>
          <router-link to="/app-settings/printers-settings" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/app-settings/printers-settings'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/app-settings/printers-settings')
          }">Printer</router-link>
          <router-link to="/app-settings/custom-fields-setting" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/app-settings/custom-fields-setting'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/app-settings/custom-fields-setting')
          }">Custom Fields</router-link>
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