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
        <general-sidebar></general-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4 pb-2">
            <div class="border-b border-borderColor mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">Connected Apps</h5>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-6">
              <div class="lg:col-span-4 md:col-span-6">
                <div class="card border border-borderColor bg-white rounded mb-3">
                  <div class="card-body p-4">
                    <div class="flex items-center justify-between mb-3">
                      <span class="avatar rounded bg-light p-2">
                        <img src="@/assets/img/icons/integration-01.svg" alt="Icon">
                      </span>
                      <div class="connect-btn">
                        <a href="javascript:void(0);"
                          class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex">Connected</a>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <p class="font-medium text-dark  mb-0">Google Calendar</p>
                      <label class="flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-4 md:col-span-6">
                <div class="card border border-borderColor bg-white rounded mb-3">
                  <div class="card-body p-4">
                    <div class="flex items-center justify-between mb-3">
                      <span class="avatar rounded bg-light p-2">
                        <img src="@/assets/img/icons/integration-03.svg" alt="Icon">
                      </span>
                      <div class="connect-btn">
                        <a href="javascript:void(0);"
                          class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex">Connected</a>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <p class="font-medium text-dark  mb-0">Dropbox</p>
                      <label class="flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-4 md:col-span-6">
                <div class="card border border-borderColor bg-white rounded mb-3">
                  <div class="card-body p-4">
                    <div class="flex items-center justify-between mb-3">
                      <span class="avatar rounded bg-light p-2">
                        <img src="@/assets/img/icons/integration-04.svg" alt="Icon">
                      </span>
                      <div class="connect-btn">
                        <a href="javascript:void(0);"
                          class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex">Connected</a>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <p class="font-medium text-dark  mb-0">Slack</p>
                      <label class="flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-4 md:col-span-6">
                <div class="card border border-borderColor bg-white rounded mb-3">
                  <div class="card-body p-4">
                    <div class="flex items-center justify-between mb-3">
                      <span class="avatar rounded bg-light p-2">
                        <img src="@/assets/img/icons/integration-05.svg" alt="Icon">
                      </span>
                      <div class="connect-btn">
                        <a href="javascript:void(0);"
                          class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex">Connected</a>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <p class="font-medium text-dark  mb-0">Gmail</p>
                      <label class="flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-4 md:col-span-6">
                <div class="card border border-borderColor bg-white rounded mb-3">
                  <div class="card-body p-4">
                    <div class="flex items-center justify-between mb-3">
                      <span class="avatar rounded bg-light p-2">
                        <img src="@/assets/img/icons/integration-06.svg" alt="Icon">
                      </span>
                      <div class="connect-btn">
                        <a href="javascript:void(0);"
                          class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex">Connected</a>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <p class="font-medium text-dark  mb-0">Github</p>
                      <label class="flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
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
