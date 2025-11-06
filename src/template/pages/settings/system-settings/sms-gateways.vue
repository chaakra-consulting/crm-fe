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

      <settings-tabs></settings-tabs  >

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
        <system-sidebar></system-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">SMS Gateways</h5>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">

              <!-- Gateway Wrap -->
              <div class="xxl:col-span-4 sm:col-span-6">
                <div class="border border-borderColor rounded flex items-center justify-between p-3 mb-3 shadow">
                  <div>
                    <img src="@/assets/img/icons/gateway-01.svg" alt="Img">
                  </div>
                  <div class="flex items-center">
                    <a href="javascript:void(0);" data-modal-target="add_nexmo" data-modal-toggle="add_nexmo"><i
                        class="ti ti-settings text-[24px] me-3"></i></a>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <!-- /Gateway Wrap -->

              <!-- Gateway Wrap -->
              <div class="xxl:col-span-4 sm:col-span-6">
                <div class="border border-borderColor rounded flex items-center justify-between p-3 mb-3 shadow">
                  <div>
                    <img src="@/assets/img/icons/gateway-02.svg" alt="Img">
                  </div>
                  <div class="flex items-center">
                    <a href="javascript:void(0);" data-modal-target="add_factor" data-modal-toggle="add_factor"><i
                        class="ti ti-settings text-[24px] me-3"></i></a>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <!-- /Gateway Wrap -->

              <!-- Gateway Wrap -->
              <div class="xxl:col-span-4 sm:col-span-6">
                <div class="border border-borderColor rounded flex items-center justify-between p-3 mb-3 shadow">
                  <div>
                    <img src="@/assets/img/icons/gateway-03.svg" alt="Img">
                  </div>
                  <div class="flex items-center">
                    <a href="javascript:void(0);" data-modal-target="add_twilio" data-modal-toggle="add_twilio"><i
                        class="ti ti-settings text-[24px] me-3"></i></a>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <!-- /Gateway Wrap -->

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

  <!-- Nexmo -->
  <div id="add_nexmo"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Nexmo</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_nexmo">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">API Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">API Secret Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Sender ID <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_nexmo" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Nexmo -->

  <!-- Factor -->
  <div id="add_factor"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">2Factor</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_factor">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">API Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">API Secret Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Sender ID <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_factor" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Factor -->

  <!-- Factor -->
  <div id="add_twilio"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Twilio</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_twilio">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">API Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">API Secret Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Sender ID <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_twilio" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Factor -->
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
