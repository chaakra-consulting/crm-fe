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
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">Notification Settings</h5>
            </div>
            <div>
              <div class="mb-3">
                <h6 class="mb-1">General Notifications</h6>
                <p class="mb-0">Select notifications</p>
              </div>
              <div class="border-b border-borderColor mb-3 pb-3">
                <div class="flex items-center justify-between mb-3">
                  <label class="form-check-label text-dark font-medium" for="checkebox-sm">
                    Mobile Push Notifications
                  </label>
                  <input class="text-primary rounded border-borderColor me-1" type="checkbox" value="" id="checkebox-sm"
                    checked="">
                </div>
                <div class="flex items-center justify-between mb-3">
                  <label class="form-check-label text-dark font-medium" for="checkebox-sm-2">
                    Desktop Notifications
                  </label>
                  <input class="text-primary rounded border-borderColor me-1" type="checkbox" value=""
                    id="checkebox-sm-2" checked="">
                </div>
                <div class="flex items-center justify-between mb-3">
                  <label class="form-check-label text-dark font-medium" for="checkebox-sm-3">
                    Email Notifications
                  </label>
                  <input class="text-primary rounded border-borderColor me-1" type="checkbox" value=""
                    id="checkebox-sm-3" checked="">
                </div>
                <div class="flex items-center justify-between">
                  <label class="form-check-label text-dark font-medium" for="checkebox-sm-4">
                    SMS Notifications
                  </label>
                  <input class="text-primary rounded border-borderColor me-1" type="checkbox" value=""
                    id="checkebox-sm-4" checked="">
                </div>
              </div>
              <div class="mb-3">
                <h6 class="mb-1">Custom Notifications</h6>
                <p class="mb-0">Select when you will be notified when the following changes occur
                </p>
              </div>
              <div class="table-responsive">
                <table class="table table-borderless notification-table w-full border-0">
                  <thead class="bg-white">
                    <tr>
                      <th class="bg-white p-3 text-left"></th>
                      <th class="bg-white p-3 text-left">Push</th>
                      <th class="bg-white p-3 text-left">SMS</th>
                      <th class="bg-white p-3 text-left">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fw-medium text-dark py-2 border-0">Payment</td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td class="fw-medium text-dark py-2 border-0">
                        Transaction
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td class="fw-medium text-dark py-2 border-0">
                        Email Verification
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td class="fw-medium text-dark py-2 border-0">
                        OTP
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td class="fw-medium text-dark py-2 border-0">
                        Activity
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td class="fw-medium text-dark py-2 border-0">
                        Account
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                      <td class="py-2 border-0">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> <!-- end table responsive -->
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
    return {
      title: "Settings",
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
