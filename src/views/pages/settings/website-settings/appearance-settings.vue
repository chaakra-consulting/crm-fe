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
        <website-sidebar></website-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">Appearance</h5>
            </div>
            <form>
              <div class="border-b border-borderColor mb-3">

                <!-- start row -->
                <div class="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">

                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Select Theme</h6>
                      <p class="text-[13px] mb-0">Select theme of the website</p>
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <div class="flex items-center gap-3 flex-wrap lg:flex-nowrap">
                        <div>
                          <input type="radio" id="option-5" value="" name="status-2" class="hidden peer" checked>
                          <label for="option-5"
                            class="inline-flex flex-col items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary">
                            <img src="@/assets/img/theme/theme-01.jpg" alt="Img">
                            <span class="font-medium">Light</span>
                          </label>
                        </div>
                        <div>
                          <input type="radio" id="option-6" value="" name="status-2" class="hidden peer">
                          <label for="option-6"
                            class="inline-flex flex-col items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary">
                            <img src="@/assets/img/theme/theme-02.jpg" alt="Img">
                            <span class="font-medium">Dark</span>
                          </label>
                        </div>
                        <div>
                          <input type="radio" id="option-7" value="" name="status-2" class="hidden peer">
                          <label for="option-7"
                            class="inline-flex flex-col items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary">
                            <img src="@/assets/img/theme/theme-03.jpg" alt="Img">
                            <span class="font-medium">Automatic</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div> <!-- end col -->

                </div>
                <!-- end row -->

                <!-- start col -->
                <div class="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">

                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Accent Color</h6>
                      <p class="text-[13px] mb-0">Select accent color of website</p>
                    </div>
                  </div><!-- end col -->

                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <div class="theme-colors">
                        <div class="flex items-center gap-2">
                          <div>
                            <input type="radio" id="option-1" value="" name="theme" class="hidden peer" checked>
                            <label for="option-1"
                              class="w-8 h-8 flex items-center justify-center border border-transparent rounded-full cursor-pointer peer-checked:bg-primary-100 peer-checked:p-0.5 peer-checked:text-primary">
                              <span class="bg-primary flex w-full h-full rounded-full"></span>
                            </label>
                          </div>
                          <div>
                            <input type="radio" id="option-2" value="" name="theme" class="hidden peer">
                            <label for="option-2"
                              class="w-8 h-8 flex items-center justify-center border border-transparent rounded-full cursor-pointer peer-checked:bg-secondary-100 peer-checked:p-0.5 peer-checked:text-primary">
                              <span class="bg-secondary flex w-full h-full rounded-full"></span>
                            </label>
                          </div>
                          <div>
                            <input type="radio" id="option-3" value="" name="theme" class="hidden peer">
                            <label for="option-3"
                              class="w-8 h-8 flex items-center justify-center border border-transparent rounded-full cursor-pointer peer-checked:bg-info-100 peer-checked:p-0.5 peer-checked:text-primary">
                              <span class="bg-info flex w-full h-full rounded-full"></span>
                            </label>
                          </div>
                          <div>
                            <input type="radio" id="option-4" value="" name="theme" class="hidden peer">
                            <label for="option-4"
                              class="w-8 h-8 flex items-center justify-center border border-transparent rounded-full cursor-pointer peer-checked:bg-teal-100 peer-checked:p-0.5 peer-checked:text-primary">
                              <span class="bg-teal flex w-full h-full rounded-full"></span>
                            </label>
                          </div>
                          <div>
                            <input type="radio" id="option-8" value="" name="theme" class="hidden peer">
                            <label for="option-8"
                              class="w-8 h-8 flex items-center justify-center border border-transparent rounded-full cursor-pointer peer-checked:bg-success-100 peer-checked:p-0.5 peer-checked:text-primary">
                              <span class="bg-success flex w-full h-full rounded-full"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> <!-- end col -->

                </div>
                <!-- end row -->

                <!-- start row -->
                <div class="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">

                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Expand Sidebar</h6>
                      <p class="text-[13px] mb-0">To display in all the pages</p>
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </div>
                  </div> <!-- end col -->

                </div>
                <!-- end row -->

                <!-- start row -->
                <div class="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">

                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Sidebar Size</h6>
                      <p class="text-[13px] mb-0">Select size of sidebar to display</p>
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selected" :options="SideApp" placeholder="Large - 250px" />
                    </div>
                  </div> <!-- end col -->

                </div>
                <!-- end row -->

                <!-- start row -->
                <div class="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">

                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Font Family</h6>
                      <p class="text-[13px] mb-0">Select font family of website</p>
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selectedOne" :options="SideAppOne" placeholder="Noto Sans" />
                    </div>
                  </div> <!-- end col -->

                </div>
                <!-- end row -->

              </div>
              <div class="flex items-center justify-end flex-wrap gap-2">
                <a href="#" class="btn btn-sm btn-light">Cancel</a>
                <button type="submit" class="btn btn-sm btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>


    </div>

    <!-- Start Footer -->
    <layoust-footer></layoust-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      selected: "Large - 250px",
      selectedOne: "Noto Sans",
      SideApp: [
        { label: "Large - 250px", value: "Large - 250px" },
        { label: "Small -85px", value: "Small -85px" },
      ],
      SideAppOne: [
        { label: "Noto Sans", value: "Noto Sans" },
        { label: "Nunito", value: "Nunito" },
      ],
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
