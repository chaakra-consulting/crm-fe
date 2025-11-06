<template>
  <div class="xl:col-span-3 theiaStickySidebar">
    <div class="bg-white border border-borderColor rounded p-4">
      <div class="settings-sidebar">
        <h5 class="mb-3 text-[17px]">System Settings</h5>
        <div class="flex flex-col">
          <router-link to="/system-settings/email-settings"
            :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/system-settings/email-settings'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/system-settings/email-settings')
          }">Email
            Settings</router-link>
          <router-link to="/system-settings/sms-gateways" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/system-settings/sms-gateways'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/system-settings/sms-gateways')
          }">SMS
            Gateways</router-link>
          <router-link to="/system-settings/gdpr-cookies" :class="{
            'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/system-settings/gdpr-cookies'),
            'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/system-settings/gdpr-cookies')
          }">GDPR
            Cookies</router-link>
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
