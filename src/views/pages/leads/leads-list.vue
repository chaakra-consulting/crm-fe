<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">
    <div class="content p-5">
      <div>
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Leads
          <span
            class="ml-2 text-primary bg-primary-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-primary text-[12px]"
          >
            -</span
          >
        </h4>
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li class="text-dark font-medium" aria-current="page">Leads</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->
  </div>
</template>

<script>
import { initFlowbite } from 'flowbite'

export default {
  components: {},
  data() {
    return {}
  },
  created() {
    // <-- aman di sini
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    this.roleSlug = (user.role_slug || '').toLowerCase()
    this.userId = user.id || ''
  },
  computed: {},
  methods: {},
  setup() {},
  mounted() {},
  updated() {
    initFlowbite()
  },
}
</script>
