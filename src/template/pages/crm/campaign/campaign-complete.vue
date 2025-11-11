<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">

      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-5">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Campaign
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Campaign</li>
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

      <div class="grid grid-cols-1 sm:grid-cols-12 gap-y-4 gap-x-4 mb-6">
        <div class="xl:col-span-3 sm:col-span-6 mt-3">
          <div class="border border-borderColor rounded bg-white shadow">
            <div class="p-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span
                    class="w-12 h-12 rounded-full flex items-center justify-center bg-secondary text-[24px] text-white flex-shrink-0"><i
                      class="ti ti-brand-campaignmonitor"></i></span>
                  <div>
                    <p class="mb-1 text-truncate">Campaign</p>
                    <h6 class="mb-0">474</h6>
                  </div>
                </div>
                <span
                  class="badge badge-tag px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success">+5.62%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:col-span-3 sm:col-span-6 mt-3">
          <div class="border border-borderColor rounded bg-white shadow">
            <div class="p-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span
                    class="w-12 h-12 rounded-full flex items-center justify-center bg-info text-[24px] text-white flex-shrink-0"><i
                      class="ti ti-send"></i></span>
                  <div>
                    <p class="mb-1 text-truncate">Sent</p>
                    <h6 class="mb-0">454</h6>
                  </div>
                </div>
                <span
                  class="badge badge-tag px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success">+4.12%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:col-span-3 sm:col-span-6 mt-3">
          <div class="border border-borderColor rounded bg-white shadow">
            <div class="p-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span
                    class="w-12 h-12 rounded-full flex items-center justify-center bg-danger text-[24px] text-white flex-shrink-0"><i
                      class="ti ti-brand-feedly"></i></span>
                  <div>
                    <p class="mb-1 text-truncate">Opened</p>
                    <h6 class="mb-0">650</h6>
                  </div>
                </div>
                <span
                  class="badge badge-tag px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success">+3.14%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:col-span-3 sm:col-span-6 mt-3">
          <div class="border border-borderColor rounded bg-white shadow">
            <div class="p-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span
                    class="w-12 h-12 rounded-full flex items-center justify-center bg-success text-[24px] text-white flex-shrink-0"><i
                      class="ti ti-checks"></i></span>
                  <div>
                    <p class="mb-1 text-truncate">Completed</p>
                    <h6 class="mb-0">650</h6>
                  </div>
                </div>
                <span
                  class="badge badge-tag px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success">+6.27%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul class="flex flex-wrap gap-y-3 items-center border-b border-borderColor mb-7">
        <li>
          <router-link to="/crm/campaign"
            class="inline-block py-2 px-4 border-b-2  border-transparent font-medium hover:text-primary">Active
            Campaign</router-link>
        </li>
        <li>
          <router-link to="/crm/campaign-complete"
            class="inline-block py-2 px-4 border-b-2 border-primary text-primary font-medium hover:text-primary">Completed
            Campaign</router-link>
        </li>
        <li>
          <router-link to="/crm/campaign-archieve"
            class="inline-block py-2 px-4 border-b-2 border-transparent font-medium hover:text-primary">Archived
            Campaign</router-link>
        </li>
      </ul>

      <div class="card">
        <div
          class="flex flex-wrap items-center justify-between gap-2 p-4 border-b border-borderColor bg-white rounded-t">

          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
              <i class="ti ti-search"></i>
            </span>
            <input type="text" placeholder="Search" v-model="searchQuery"
              class="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
          </div>

          <!-- Add New Button -->
          <a href="javascript:void(0);"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
            data-drawer-target="offcanvas_add" data-drawer-show="offcanvas_add" aria-controls="offcanvas_add"
            data-drawer-placement="right">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add New Campaign
          </a>
        </div>
        <div class="bg-white p-4">
          <div class="flex items-center justify-between flex-wrap gap-y-3">

            <div class="flex items-center flex-wrap gap-y-3">
              <!-- Dropdown -->
              <div class="me-3">
                <a href="javascript:void(0);"
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="sort-dropdown">
                  <i class="ti ti-sort-ascending-2 me-2"></i>Sort By<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="sort-dropdown"
                  class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[150px]">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Newest</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Oldest</a>
                  </li>
                </ul>
              </div>
              <!-- Search Input with Icon -->
              <div class="relative">
                <input type="text"
                  class="block flex-1 border border-borderColor shadow bg-white rounded-[5px] py-1.5 pr-2.5 pl-8 text-gray-900 focus:ring-0 focus:border-borderColor h-[38px] placeholder:text-gray-400 text-sm date-range bookingrange"
                  placeholder="dd/mm/yyyy - dd/mm/yyyy" ref="dateRangeInput">
                <span class="absolute inset-y-1/2 start-[10px] flex items-center me-2.5 pointer-events-none">
                  <i class="ti ti-calendar-due text-dark fs-14 me-1"></i>
                </span>
              </div>
            </div>
            <div class="flex items-center flex-wrap gap-y-3">
              <div class="relative me-3">
                <button
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="filter-dropdown">
                  <i class="ti ti-filter me-1"></i>Filter<i class="ti ti-chevron-down ml-1"></i>
                </button>
                <div id="filter-dropdown"
                  class="hidden border z-[1] border-borderColor rounded bg-white shadow-lg min-w-[320px]">
                  <div class="filter-header flex items-center justify-between border-b  border-borderColor p-3">
                    <h6 class="mb-0"><i class="ti ti-filter me-1"></i>Filter</h6>
                    <button data-dropdown-hide="filter-dropdown" @click="closeFilterDropdown"
                      class="text-dark filter-close w-6 h-6 border border-borderColor rounded-full focus:outline-none focus:ring-0"><i
                        class="ti ti-x"></i></button>
                  </div>
                  <div id="accordionExample" data-accordion="collapse" class="p-4">
                    <div class="mb-4">
                      <h2 id="accordion-heading-3">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-3" aria-expanded="true"
                          aria-controls="accordion-body-3">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Name</span>
                        </button>
                      </h2>
                      <div id="accordion-body-3" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-3" data-accordion-body>
                        <div class="relative mb-4">
                          <span
                            class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                            <i class="ti ti-search"></i>
                          </span>
                          <input type="text" placeholder="Search"
                            class="pl-9 pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
                        </div>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Distribution
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Menchandising
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Pricing
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Increased Sales
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-6">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-6" aria-expanded="true"
                          aria-controls="accordion-body-6">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Type</span>
                        </button>
                      </h2>
                      <div id="accordion-body-6" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-6" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Public Relations
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Content Marketing
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Social Marketing
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Brand
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-5">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-5" aria-expanded="true"
                          aria-controls="accordion-body-5">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Start Date</span>
                        </button>
                      </h2>
                      <div id="accordion-body-5" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-5" data-accordion-body>
                        <div class="input-group w-auto input-group-flat">
                          <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="20/09/2025" />
                          <span class="input-group-text">
                            <i class="ti ti-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-8">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-8" aria-expanded="true"
                          aria-controls="accordion-body-8">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>End Date</span>
                        </button>
                      </h2>
                      <div id="accordion-body-8" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-8" data-accordion-body>
                        <div class="input-group w-auto input-group-flat">
                          <a-date-picker v-model="valueTwo" class="form-control datetimepicker" placeholder="20/09/2025" />
                          <span class="input-group-text">
                            <i class="ti ti-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-9">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-9" aria-expanded="true"
                          aria-controls="accordion-body-9">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Status</span>
                        </button>
                      </h2>
                      <div id="accordion-body-9" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-9" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Success
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Pending
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Bounced
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Paused
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <a href="javascript:void(0);" class="btn border border-borderColor text-center w-full">Reset</a>
                      <a href="javascript:void(0);" class="btn btn-primary w-full">Filter</a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="javascript:void(0);"
                  class="rounded p-2 bg-[#EBEBFA] inline-flex items-center text-[#3538CD] border-info-200"
                  data-dropdown-toggle="column-dropdown">
                  <i class="ti ti-columns-3 me-2"></i>Manage Columns
                </a>
                <ul id="column-dropdown"
                  class="hidden p-3 z-[1] border border-borderColor rounded bg-white shadow-lg w-[250px]">
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Name</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Type</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Progress</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Members</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Start Date</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">End Date</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Status</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Created</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Action</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <!-- Contact List -->
          <div class="table-responsive custom-table">
            <div id="campaign-complete_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start "></div>
                <div class="col-start-2 justify-self-end "></div>
              </div>
              <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="col-span-2 table-responsive">
                  <table
                    class="table table-nowrap border border-borderColor dataTable min-w-full text-sm align-middle whitespace-nowrap"
                    id="campaign-complete">
                    <thead class="table-light">
                      <tr class="border-b border-gray-100 dark:border-gray-700/50">
                        <th
                          class="no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc dt-ordering-asc"
                          data-dt-column="0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="
									: Activate to invert sorting" tabindex="0"><span class="dt-column-title" role="button">
                            <div class="form-check form-check-md">
                              <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox" id="select-all">
                            </div>
                          </span><span class="dt-column-order"></span></th>
                        <th
                          class="no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          data-dt-column="1" rowspan="1" colspan="1" aria-label=": Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button"></span><span
                            class="dt-column-order"></span></th>
                        <th data-dt-column="2"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Name: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Name</span><span
                            class="dt-column-order"></span></th>
                        <th data-dt-column="3"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Type: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Type</span><span
                            class="dt-column-order"></span></th>
                        <th data-dt-column="4"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Progress: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Progress</span><span
                            class="dt-column-order"></span>
                        </th>
                        <th data-dt-column="5"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Members: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Members</span><span
                            class="dt-column-order"></span>
                        </th>
                        <th data-dt-column="6"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Status: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Status</span><span
                            class="dt-column-order"></span>
                        </th>
                        <th
                          class="text-end no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          data-dt-column="7" rowspan="1" colspan="1" aria-label="Action: Activate to sort" tabindex="0">
                          <span class="dt-column-title text-gray-900" role="button">Action</span><span
                            class="dt-column-order"></span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled"></i></div>
                        </td>
                        <td class="p-3">Distribution</td>
                        <td class="p-3">Public Relations</td>
                        <td class="p-3">
                          <ul class="list-progress flex gap-4">
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">40.5%</h6>
                              <p class="text-[13px] mb-0">Opened</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">20.5%</h6>
                              <p class="text-[13px] mb-0">Closed</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">30.5%</h6>
                              <p class="text-[13px] mb-0">Unsubscribe</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">70.5%</h6>
                              <p class="text-[13px] mb-0">Delivered</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">35.0%</h6>
                              <p class="text-[13px] mb-0">Conversation</p>
                            </li>
                          </ul>
                        </td>
                        <td class="p-3">
                          <ul class="avatar-list-stacked avatar-group-sm">
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-14.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-15.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-16.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0 bg-light fs-10"><a href="javascript:void(0);"
                                class="text-dark">3+</a></li>
                          </ul>
                        </td>
                        <td class="p-3"><span
                            class="px-1.5 py-1 rounded text-[12px] text-white bg-success">Success</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[0] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(0, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 0 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled"></i></div>
                        </td>
                        <td class="p-3">Merchandising</td>
                        <td class="p-3">Content Marketing</td>
                        <td class="p-3">
                          <ul class="list-progress flex gap-4">
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">65.5%</h6>
                              <p class="text-[13px] mb-0">Opened</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">83.5%</h6>
                              <p class="text-[13px] mb-0">Closed</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">67.5%</h6>
                              <p class="text-[13px] mb-0">Unsubscribe</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">32.0%</h6>
                              <p class="text-[13px] mb-0">Delivered</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">22.5%</h6>
                              <p class="text-[13px] mb-0">Conversation</p>
                            </li>
                          </ul>
                        </td>
                        <td class="p-3">
                          <ul class="avatar-list-stacked avatar-group-sm">
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-03.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-05.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-06.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0 bg-light fs-10"><a href="javascript:void(0);"
                                class="text-dark">3+</a></li>
                          </ul>
                        </td>
                        <td class="p-3"><span
                            class="px-1.5 py-1 rounded text-[12px] text-white bg-success">Success</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(1, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 1 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled"></i></div>
                        </td>
                        <td class="p-3">Pricing</td>
                        <td class="p-3">Social Marketing</td>
                        <td class="p-3">
                          <ul class="list-progress flex gap-4">
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">64.0%</h6>
                              <p class="text-[13px] mb-0">Opened</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">97.0%</h6>
                              <p class="text-[13px] mb-0">Closed</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">14.5%</h6>
                              <p class="text-[13px] mb-0">Unsubscribe</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">38.5%</h6>
                              <p class="text-[13px] mb-0">Delivered</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">53.0%</h6>
                              <p class="text-[13px] mb-0">Conversation</p>
                            </li>
                          </ul>
                        </td>
                        <td class="p-3">
                          <ul class="avatar-list-stacked avatar-group-sm">
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-04.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-01.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-16.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0 bg-light fs-10"><a href="javascript:void(0);"
                                class="text-dark">3+</a></li>
                          </ul>
                        </td>
                        <td class="p-3"><span
                            class="px-1.5 py-1 rounded text-[12px] text-white bg-success">Success</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(2, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 2 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled"></i></div>
                        </td>
                        <td class="p-3">Increased sales</td>
                        <td class="p-3">Brand</td>
                        <td class="p-3">
                          <ul class="list-progress flex gap-4">
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">32.5%</h6>
                              <p class="text-[13px] mb-0">Opened</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">57.0%</h6>
                              <p class="text-[13px] mb-0">Closed</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">26.3%</h6>
                              <p class="text-[13px] mb-0">Unsubscribe</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">65.8%</h6>
                              <p class="text-[13px] mb-0">Delivered</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">17.4%</h6>
                              <p class="text-[13px] mb-0">Conversation</p>
                            </li>
                          </ul>
                        </td>
                        <td class="p-3">
                          <ul class="avatar-list-stacked avatar-group-sm">
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-12.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-15.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-13.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0 bg-light fs-10"><a href="javascript:void(0);"
                                class="text-dark">3+</a></li>
                          </ul>
                        </td>
                        <td class="p-3"><span
                            class="px-1.5 py-1 rounded text-[12px] text-white bg-success">Success</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[3] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(3, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 3 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled"></i></div>
                        </td>
                        <td class="p-3">Brand recognition</td>
                        <td class="p-3">Sales</td>
                        <td class="p-3">
                          <ul class="list-progress flex gap-4">
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">72.6%</h6>
                              <p class="text-[13px] mb-0">Opened</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">53.5%</h6>
                              <p class="text-[13px] mb-0">Closed</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">16.5%</h6>
                              <p class="text-[13px] mb-0">Unsubscribe</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">83.0%</h6>
                              <p class="text-[13px] mb-0">Delivered</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">29.3%</h6>
                              <p class="text-[13px] mb-0">Conversation</p>
                            </li>
                          </ul>
                        </td>
                        <td class="p-3">
                          <ul class="avatar-list-stacked avatar-group-sm">
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-10.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-11.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-16.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0 bg-light fs-10"><a href="javascript:void(0);"
                                class="text-dark">3+</a></li>
                          </ul>
                        </td>
                        <td class="p-3"><span
                            class="px-1.5 py-1 rounded text-[12px] text-white bg-success">Success</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[4] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(4, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 4 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled"></i></div>
                        </td>
                        <td class="p-3">Enhanced brand</td>
                        <td class="p-3">Media</td>
                        <td class="p-3">
                          <ul class="list-progress flex gap-4">
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">56.3%</h6>
                              <p class="text-[13px] mb-0">Opened</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">20.5%</h6>
                              <p class="text-[13px] mb-0">Closed</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">30.5%</h6>
                              <p class="text-[13px] mb-0">Unsubscribe</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">70.5%</h6>
                              <p class="text-[13px] mb-0">Delivered</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">35.0%</h6>
                              <p class="text-[13px] mb-0">Conversation</p>
                            </li>
                          </ul>
                        </td>
                        <td class="p-3">
                          <ul class="avatar-list-stacked avatar-group-sm">
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-14.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-09.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-08.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0 bg-light fs-10"><a href="javascript:void(0);"
                                class="text-dark">3+</a></li>
                          </ul>
                        </td>
                        <td class="p-3"><span
                            class="px-1.5 py-1 rounded text-[12px] text-white bg-success">Success</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[5] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(5, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 5 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled"></i></div>
                        </td>
                        <td class="p-3">Repeat customers</td>
                        <td class="p-3">Rebranding</td>
                        <td class="p-3">
                          <ul class="list-progress flex gap-4">
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">63.2%</h6>
                              <p class="text-[13px] mb-0">Opened</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">20.5%</h6>
                              <p class="text-[13px] mb-0">Closed</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">30.5%</h6>
                              <p class="text-[13px] mb-0">Unsubscribe</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">70.5%</h6>
                              <p class="text-[13px] mb-0">Delivered</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">87.8%</h6>
                              <p class="text-[13px] mb-0">Conversation</p>
                            </li>
                          </ul>
                        </td>
                        <td class="p-3">
                          <ul class="avatar-list-stacked avatar-group-sm">
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-06.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-07.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-16.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0 bg-light fs-10"><a href="javascript:void(0);"
                                class="text-dark">3+</a></li>
                          </ul>
                        </td>
                        <td class="p-3"><span
                            class="px-1.5 py-1 rounded text-[12px] text-white bg-success">Success</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[6] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(6, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 6 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled"></i></div>
                        </td>
                        <td class="p-3">Competitor </td>
                        <td class="p-3">Product launch</td>
                        <td class="p-3">
                          <ul class="list-progress flex gap-4">
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">40.5%</h6>
                              <p class="text-[13px] mb-0">Opened</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">52.7%</h6>
                              <p class="text-[13px] mb-0">Closed</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">13.5%</h6>
                              <p class="text-[13px] mb-0">Unsubscribe</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">70.5%</h6>
                              <p class="text-[13px] mb-0">Delivered</p>
                            </li>
                            <li>
                              <h6 class="text-[14px] font-semibold mb-1">35.0%</h6>
                              <p class="text-[13px] mb-0">Conversation</p>
                            </li>
                          </ul>
                        </td>
                        <td class="p-3">
                          <ul class="avatar-list-stacked avatar-group-sm">
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-04.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-15.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                                  src="@/assets/img/profiles/avatar-05.jpg" alt="img"></a></li>
                            <li class="avatar avatar-rounded flex-shrink-0 bg-light fs-10"><a href="javascript:void(0);"
                                class="text-dark">3+</a></li>
                          </ul>
                        </td>
                        <td class="p-3"><span
                            class="px-1.5 py-1 rounded text-[12px] text-white bg-success">Success</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[7] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(7, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 7 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot></tfoot>
                  </table>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start "></div>
                <div class="col-start-2 justify-self-end "></div>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="w-full md:w-1/2">
              <div class="datatable-length">
                <div class="dt-length"><label for="dt-length-0">Show <select name="campaign-list_length"
                      aria-controls="campaign-list"
                      class="border px-3 py-2 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500"
                      id="dt-length-0">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select> entries</label></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 mt-4 md:mt-0 text-end">
              <div class="datatable-paginate">
                <div class="dt-paging">
                  <nav aria-label="pagination">
                    <ul class="pagination"><a
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 bg-white dark:bg-gray-800 text-gray-300 dark:text-gray-600 first rounded-l-lg"
                        aria-controls="campaign-list" aria-disabled="true" aria-label="First" data-dt-idx="first"
                        tabindex="-1" style="">«</a><a
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 bg-white dark:bg-gray-800 text-gray-300 dark:text-gray-600 previous"
                        aria-controls="campaign-list" aria-disabled="true" aria-label="Previous" data-dt-idx="previous"
                        tabindex="-1"><i class="ti ti-chevron-left"></i> </a><a href="#"
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 font-semibold bg-gray-100 dark:bg-gray-700/75 text-gray-800 hover:text-gray-900 hover:border-gray-300 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40"
                        aria-controls="campaign-list" aria-current="page" data-dt-idx="0">1</a><a
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 bg-white dark:bg-gray-800 text-gray-300 dark:text-gray-600 next"
                        aria-controls="campaign-list" aria-disabled="true" aria-label="Next" data-dt-idx="next"
                        tabindex="-1"><i class="ti ti-chevron-right"></i> </a><a
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 bg-white dark:bg-gray-800 text-gray-300 dark:text-gray-600 last rounded-r-lg"
                        aria-controls="campaign-list" aria-disabled="true" aria-label="Last" data-dt-idx="last"
                        tabindex="-1">»</a></ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <!-- /Contact List -->
        </div>
      </div>

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
  <compaign-modal></compaign-modal>
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted, onUnmounted, ref } from 'vue';
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { initFlowbite } from "flowbite";
const valueOne = ref();
const valueTwo = ref();
export default {
  data() {
    return {
      valueOne,
      valueTwo,
    };
  },
  methods: {
    closeFilterDropdown() {
      const dropdown = document.getElementById('filter-dropdown');
      if (dropdown) {
        dropdown.classList.add('hidden');
      }
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
  setup() {
    const openDropdown = ref(null);
    const dropdownRefs = ref([]);

    const toggleDropdown = (index, event) => {
      event.stopPropagation();
      if (openDropdown.value === index) {
        openDropdown.value = null;
      } else {
        openDropdown.value = index;
      }
    };

    const closeAllDropdowns = () => {
      openDropdown.value = null;
    };

    const handleClickOutside = (event) => {
      if (dropdownRefs.value && dropdownRefs.value.some(ref => ref && ref.contains(event.target))) {
        return;
      }
      closeAllDropdowns();
    };

    onMounted(() => {
      initFlowbite();
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInput,
      openDropdown,
      dropdownRefs,
      toggleDropdown,
      closeAllDropdowns
    };
  },
  mounted() {
    initFlowbite();
  },
};
</script>
