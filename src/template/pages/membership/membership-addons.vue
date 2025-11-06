<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">
      <!-- start card item -->

      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div class="md:col-start-2 md:col-span-12 w-full">
          <div class="card">
            <div
              class="flex items-center justify-between flex-wrap gap-2 p-4 border-b border-borderColor bg-white rounded-t">
              <h6 class="text-[18px] mb-0">Membership Addons</h6>
              <!-- Add New Button -->
              <router-link to="/membership/membership-plans"
                class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition">
                Back <i class="ti ti-chevron-right ms-1"></i>
              </router-link>
            </div>
            <div class="bg-white p-4">
              <!-- start grid -->
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-4">
                <div class="md:col-span-6">
                  <div class="mx-2">
                    <div class=" mb-2">
                      <label class="form-label">Contacts<span class="text-danger ms-1">*</span></label>
                      <div class="flex items-center justify-between gap-3">
                        <input type="text" class="form-control">
                        <label class="flex items-center gap-3 justify-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer">
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </div>
                    </div>
                    <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input type="checkbox"
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mx-2">
                    <div class="mb-2">
                      <label class="form-label">Leads<span class="text-danger ms-1">*</span></label>
                      <div class="flex items-center justify-between gap-3">
                        <input type="text" class="form-control">
                        <label class="flex items-center gap-3 justify-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer">
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </div>
                    </div>
                    <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input type="checkbox"
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mx-2">
                    <div class="mb-2">
                      <label class="form-label">Companies<span class="text-danger ms-1">*</span></label>
                      <div class="flex items-center justify-between gap-3">
                        <input type="text" class="form-control">
                        <label class="flex items-center gap-3 justify-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer">
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </div>
                    </div>
                    <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input type="checkbox"
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mx-2">
                    <div class="mb-2">
                      <label class="form-label">Compaigns<span class="text-danger ms-1">*</span></label>
                      <div class="flex items-center justify-between gap-3">
                        <input type="text" class="form-control">
                        <label class="flex items-center gap-3 justify-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer">
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </div>
                    </div>
                    <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input type="checkbox"
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mx-2">
                    <div class="mb-2">
                      <label class="form-label">Projects<span class="text-danger ms-1">*</span></label>
                      <div class="flex items-center justify-between gap-3">
                        <input type="text" class="form-control">
                        <label class="flex items-center gap-3 justify-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer">
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </div>
                    </div>
                    <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input type="checkbox"
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mx-2">
                    <div class="mb-2">
                      <label class="form-label">Deals<span class="text-danger ms-1">*</span></label>
                      <div class="flex items-center justify-between gap-3">
                        <input type="text" class="form-control">
                        <label class="flex items-center gap-3 justify-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer">
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </div>
                    </div>
                    <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input type="checkbox"
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mx-2">
                    <div class="mb-2">
                      <label class="form-label">Tasks<span class="text-danger ms-1">*</span></label>
                      <div class="flex items-center justify-between gap-3">
                        <input type="text" class="form-control">
                        <label class="flex items-center gap-3 justify-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer">
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </div>
                    </div>
                    <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input type="checkbox"
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mx-2">
                    <div class="mb-2">
                      <label class="form-label">Pipelines<span class="text-danger ms-1">*</span></label>
                      <div class="flex items-center justify-between gap-3">
                        <input type="text" class="form-control">
                        <label class="flex items-center gap-3 justify-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer">
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </div>
                    </div>
                    <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input type="checkbox"
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
              </div>
              <!-- end grid -->
            </div>
            <div class="flex items-center justify-end bg-white p-4 border-t border-borderColor">
              <button type="button" class="btn btn-light me-2">Cancel</button>
              <button type="submit" class="btn btn-primary">Create New</button>
            </div>
          </div>
        </div>
      </div>
      <!-- end card item -->
    </div>
    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->
  </div>
  <!-- /Page Wrapper -->
</template>
