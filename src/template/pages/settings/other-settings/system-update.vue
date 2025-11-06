<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">

      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Settings
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Settings</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Refresh Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Refresh">
            <i class="ti ti-refresh"></i>
          </button>
          <!-- Collapse Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Collapse" id="collapse-header" @click="toggleHeader">
            <i class="ti ti-transition-top"></i>
          </button>
        </div>
      </div>
      <!-- End Page Header -->

      <settings-tabs></settings-tabs>

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
        <other-sidebar></other-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">System Update</h5>
            </div>
            <div class="mb-4">
              <div class="flex items-center flex-wrap gap-2">
                <div class="relative z-[1]">
                  <span class="w-10 h-10 bg-success-100 text-success flex items-center justify-center rounded-full"><i
                      class="ti ti-circle-check-filled text-[24px]"></i></span>
                </div>
                <div>
                  <h6 class="text-[14px] mb-1 font-semibold"> You are up to date <span
                      class="text-xs bg-info-100 text-info rounded border-b border-info px-2 py-0.5 inline-flex ms-2">Default</span>
                  </h6>
                  <p class="text-[13px] mb-0">Last Checked : Today 10:30AM</p>
                </div>
              </div>
            </div>

            <div class="mb-4">
              <div class="w-100">
                <label class="form-label">Purchase Key<span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>

            <div class="bg-light border border-borderColor rounded p-2 d-flex align-items-center">
              <p class="mb-0"> <i class="ti ti-info-circle me-2 text-info"></i> Before updating, it's best to back up
                your files and database and review the changelog.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
