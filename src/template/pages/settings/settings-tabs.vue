<template>
  <div class="bg-white rounded">
    <div class="px-2">
      <ul class="flex flex-wrap gap-y-3 items-center border-b border-borderColor mb-7">
        <li class="nav-item me-3">
          <router-link to="/settings/profile-settings" :class="[
            'inline-block py-2 px-4 font-medium hover:text-primary',
            currentPath.includes('profile-settings') ||
              currentPath.includes('security-settings') ||
              currentPath.includes('notifications-settings') ||
              currentPath.includes('connected-apps')
              ? 'border-b-2 border-primary text-primary'
              : 'border-b-2 border-transparent text-default'
          ]">
            <i class="ti ti-settings-cog me-2"></i> General Settings
          </router-link>
        </li>

        <li class="nav-item me-3">
          <router-link to="/website-settings/company-settings" :class="[
            'inline-block py-2 px-4 font-medium hover:text-primary',
            currentPath.includes('company-settings') ||
              currentPath.includes('localization-settings') ||
              currentPath.includes('prefixes-settings') ||
              currentPath.includes('preference-settings') ||
              currentPath.includes('appearance-settings') ||
              currentPath.includes('language-settings') ||
              currentPath.includes('language-web') ||
              currentPath.includes('language-web-edit')
              ? 'border-b-2 border-primary text-primary'
              : 'border-b-2 border-transparent text-default'
          ]">
            <i class="ti ti-world-cog me-2"></i> Website Settings
          </router-link>
        </li>

        <li class="nav-item me-3">
          <router-link to="/app-settings/invoice-settings" :class="[
            'inline-block py-2 px-4 font-medium hover:text-primary',
            currentPath.includes('invoice-settings') ||
              currentPath.includes('custom-fields-setting') ||
              currentPath.includes('printers-settings')
              ? 'border-b-2 border-primary text-primary'
              : 'border-b-2 border-transparent text-default'
          ]">
            <i class="ti ti-apps me-2"></i> App Settings
          </router-link>
        </li>
        <li class="nav-item me-3">
          <router-link to="/system-settings/email-settings" :class="[
            'inline-block py-2 px-4 font-medium hover:text-primary',
            currentPath.includes('email-settings') ||
              currentPath.includes('sms-gateways') ||
              currentPath.includes('gdpr-cookies')
              ? 'border-b-2 border-primary text-primary'
              : 'border-b-2 border-transparent text-default'
          ]">
            <i class="ti ti-device-laptop me-2"></i>System Settings
          </router-link>
        </li>
        <li class="nav-item me-3">
          <router-link to="/financial-settings/payment-gateways" :class="[
            'inline-block py-2 px-4 font-medium hover:text-primary',
            currentPath.includes('payment-gateways') ||
              currentPath.includes('bank-accounts') ||
              currentPath.includes('tax-rates') ||
              currentPath.includes('currencies')
              ? 'border-b-2 border-primary text-primary'
              : 'border-b-2 border-transparent text-default'
          ]">
            <i class="ti ti-moneybag me-2"></i>Financial Settings
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/other-settings/sitemap" :class="[
            'inline-block py-2 px-4 font-medium hover:text-primary',
            currentPath.includes('sitemap') ||
            currentPath.includes('clear-cache') ||
            currentPath.includes('storage') ||
            currentPath.includes('cronjob') ||
            currentPath.includes('ban-ip-address') ||
            currentPath.includes('system-backup') ||
            currentPath.includes('database-backup') ||
            currentPath.includes('system-update')
              ?'border-b-2 border-primary text-primary'
              : 'border-b-2 border-transparent text-default'
          ]">
            <i class="ti ti-flag-cog me-2"></i>Other Settings
          </router-link>
        </li>
      </ul>
    </div> <!-- end card body -->
  </div> <!-- end card -->
</template>
<script>
export default {
  data() {
    return {
      currentPath: this.$route.path,
    };
  },
};
</script>
