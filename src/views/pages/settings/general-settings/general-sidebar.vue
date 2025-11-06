<template>
  <div class="xl:col-span-3 theiaStickySidebar">
    <div class="bg-white border border-borderColor rounded p-4">
      <div class="settings-sidebar">
        <h5 class="mb-3 text-[17px]">General Settings</h5>
        <div class="flex flex-col">
          <router-link to="/settings/profile-settings"
            :class="{
              'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/settings/profile-settings'),
              'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/settings/profile-settings')
            }">Profile</router-link>
          <router-link to="/settings/security-settings"
            :class="{
              'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/settings/security-settings'),
              'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/settings/security-settings')
            }">Security</router-link>
          <router-link to="/settings/notifications-settings"
            :class="{
              'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/settings/notifications-settings'),
              'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/settings/notifications-settings')
            }">Notifications</router-link>
          <router-link to="/settings/connected-apps"
            :class="{
              'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/settings/connected-apps'),
              'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/settings/connected-apps')
            }">Connected Apps</router-link>
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
