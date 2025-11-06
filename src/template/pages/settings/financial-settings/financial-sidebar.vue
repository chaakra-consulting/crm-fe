<template>
  <div class="xl:col-span-3 theiaStickySidebar">
    <div class="bg-white border border-borderColor rounded p-4">
      <div class="settings-sidebar">
        <h5 class="mb-3 text-[17px]">Financial Settings</h5>
        <div class="flex flex-col">
          <router-link to="/financial-settings/payment-gateways"
            :class="{
              'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/financial-settings/payment-gateways'),
              'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/financial-settings/payment-gateways')
            }">Payment Gateways</router-link>
          <router-link to="/financial-settings/bank-accounts"
            :class="{
              'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/financial-settings/bank-accounts'),
              'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/financial-settings/bank-accounts')
            }">Bank Accounts</router-link>
          <router-link to="/financial-settings/tax-rates"
            :class="{
              'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/financial-settings/tax-rates'),
              'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/financial-settings/tax-rates')
            }">Tax Rates</router-link>
          <router-link to="/financial-settings/currencies"
            :class="{
              'd-block p-2 font-medium bg-rose-100 rounded text-primary border-l border-primary': isActive('/financial-settings/currencies'),
              'd-block p-2 font-medium hover:text-primary transition-all rounded': !isActive('/financial-settings/currencies')
            }">Currencies</router-link>
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