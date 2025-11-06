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
            Membership Plans
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">152</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Membership Plans</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Dropdown -->
          <div>
            <a href="javascript:void(0);"
              class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
              data-dropdown-toggle="export-dropdown">
              <i class="ti ti-package-export me-2"></i>Export<i class="ti ti-chevron-down ml-1"></i>
            </a>
            <ul id="export-dropdown" class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
              <li>
                <a href="javascript:void(0);"
                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                    class="ti ti-file-type-pdf me-1"></i>Export as PDF</a>
              </li>
              <li>
                <a href="javascript:void(0);"
                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                    class="ti ti-file-type-xls me-1"></i>Export as Excel </a>
              </li>
            </ul>
          </div>
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

      <!-- start card item -->
      <div class="card">
        <div
          class="flex items-center justify-between flex-wrap gap-2 p-4 border-b border-borderColor bg-white rounded-t">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
              <i class="ti ti-search"></i>
            </span>
            <input type="text" placeholder="Search" v-model="searchQuery"
              class="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
          </div>
          <!-- Add New Button -->
          <a href="javascript:void(0);"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
            data-drawer-target="offcanvas_add" data-drawer-show="offcanvas_add" aria-controls="offcanvas_add"
            data-drawer-placement="right">
            <i class="ti ti-square-rounded-plus-filled me-1"></i>Add Membership
          </a>
        </div>
        <div class="bg-white p-4">
          <div class="mb-6">
            <label class="flex items-center gap-3 justify-center w-full cursor-pointer">
              <span class="text-sm text-dark">Yearly</span>
              <input type="checkbox" value="" class="sr-only peer">
              <span
                class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
              <span class="text-sm text-dark">Monthly</span>
            </label>
          </div>
          <div class="flex justify-center gap-4 lg:flex-nowrap flex-wrap">
            <div class="w-full max-w-md md:w-1/2 lg:w-1/3">
              <div class="border border-borderColor rounded">
                <div class="p-6">
                  <div class="text-center border-b border-borderColor pb-4 mb-4">
                    <span class="text-sm font-normal mb-1">Basic</span>
                    <h5 class="flex items-center justify-center">
                      $50
                      <span class="text-sm font-medium ms-1">/ month</span>
                    </h5>
                  </div>
                  <div>
                    <div>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>10 Contacts
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>10 Leads
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>20 Companies
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>50 Campaigns
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>100 Projects
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-xbox-x-filled text-gray-500"></i></span><del>Deals</del>
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-xbox-x-filled text-gray-500"></i></span><del>Tasks</del>
                      </p>
                      <p class="flex items-center text-base font-medium text-dark">
                        <span class="me-1"><i class="ti ti-xbox-x-filled text-gray-500"></i></span><del>Pipelines</del>
                      </p>
                    </div>
                    <div class="text-center mt-4">
                      <a href="#" class="btn btn-primary w-full rounded">Choose</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full max-w-md md:w-1/2 lg:w-1/3">
              <div class="border border-borderColor rounded">
                <div class="p-6">
                  <div class="text-center border-b border-borderColor pb-4 mb-4">
                    <span class="text-sm font-normal mb-1">Business</span>
                    <h5 class="flex items-center justify-center">
                      $200
                      <span class="text-sm font-medium ms-1">/ month</span>
                    </h5>
                  </div>
                  <div>
                    <div>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>20 Contacts
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>20 Leads
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>50 Companies
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>Unlimited
                        Compaigns
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>Unlimited
                        Projects
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-xbox-x-filled text-gray-500"></i></span><del>Deals</del>
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-xbox-x-filled text-gray-500"></i></span><del>Tasks</del>
                      </p>
                      <p class="flex items-center text-base font-medium text-dark">
                        <span class="me-1"><i class="ti ti-xbox-x-filled text-gray-500"></i></span><del>Pipelines</del>
                      </p>
                    </div>
                    <div class="text-center mt-4">
                      <a href="#" class="btn btn-primary w-full rounded">Choose</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full max-w-md md:w-1/2 lg:w-1/3">
              <div class="border border-borderColor rounded">
                <div class="p-6">
                  <div class="text-center border-b border-borderColor pb-4 mb-4">
                    <span class="text-sm font-normal mb-1">Enterprise</span>
                    <h5 class="flex items-center justify-center">
                      $400
                      <span class="text-sm font-medium ms-1">/ month</span>
                    </h5>
                  </div>
                  <div>
                    <div>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>Unlimited
                        Contacts
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>Unlimited
                        Leads
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>Unlimited
                        Companies
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>Unlimited
                        Compaigns
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>Unlimited
                        Projects
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>Deals
                      </p>
                      <p class="flex items-center text-base font-medium text-dark mb-2">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>Tasks
                      </p>
                      <p class="flex items-center text-base font-medium text-dark">
                        <span class="me-1"><i class="ti ti-circle-check-filled text-green-500"></i></span>Pipelines
                      </p>
                    </div>
                    <div class="text-center mt-4">
                      <a href="#" class="btn btn-primary w-full rounded">Choose</a>
                    </div>
                  </div>
                </div>
              </div>
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

  <!-- Add Contact -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Contact</h5>
      <button type="button" data-drawer-hide="offcanvas_add" aria-controls="offcanvas_add"
        class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <form>
      <div id="accordion-collapse-2" class="p-4" data-accordion="collapse">
        <div class="accordion-item border border-borderColor rounded mb-3">
          <h2 class="accordion-header" id="heading-7">
            <button
              class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
              type="button" data-accordion-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
              <span class="flex items-center"><span class="w-8 h-8 rounded flex items-center justify-center me-1"><i
                    class="ti ti-file-description"></i></span>Plan Info</span>
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div id="collapse-7" class="hidden p-4  border-t border-borderColor" aria-labelledby="heading-7">
            <div class="accordion-body text-[12px]">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-4">
                <div class="md:col-span-12">
                  <div>
                    <label class="form-label">Street Address<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Plan Type<span class="text-danger ms-1">*</span></label>
                    <vue3-select
                        v-model="selected"
                        :options="PlanSele"
                        placeholder="Select"
                      />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Plan Price<span class="text-danger ms-1">*</span></label>
                    <vue3-select
                        v-model="selectedOne"
                        :options="PriceSele"
                        placeholder="Select"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item border border-borderColor rounded mb-3">
          <h2 class="accordion-header" id="heading-5">
            <button
              class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
              type="button" data-accordion-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
              <span class="flex items-center"><span class="w-8 h-8 rounded flex items-center justify-center me-1"><i
                    class="ti ti-settings"></i></span>Plan Settings</span>
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div id="collapse-5" class="hidden p-4  border-t border-borderColor" aria-labelledby="heading-5">
            <div class="accordion-body text-[12px]">
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
          </div>
        </div>

      </div>
      <div class="flex items-center justify-end p-4 pt-0">
        <button type="button" data-drawer-hide="offcanvas_add" class="btn btn-light me-2">Cancel</button>
        <button type="submit" class="btn btn-primary">Create New</button>
      </div>
    </form>
  </div>
  <!-- /Add Contact -->
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      PriceSele: [
        { label: "Select", value: "Select" },
        { label: "$50", value: "$50" },
        { label: "$200", value: "$200" },
        { label: "$400", value: "$400" },
      ],
      PlanSele: [
        { label: "Select", value: "Select" },
        { label: "Basic", value: "Basic" },
        { label: "Business", value: "Business" },
        { label: "Enterprise", value: "Enterprise" },
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
