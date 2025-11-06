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
            Projects
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">123</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Projects</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Dropdown -->
          <div>
            <a href="javascript:void(0);"
              class="border border-borderColor rounded p-2 bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
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
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
            data-drawer-target="offcanvas_add" data-drawer-show="offcanvas_add" aria-controls="offcanvas_add"
            data-drawer-placement="right">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add New Project
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
              <div class="me-3">
                <button
                  class="border border-borderColor rounded p-2 shadow bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="filter-dropdown">
                  <i class="ti ti-filter me-1"></i>Filter<i class="ti ti-chevron-down ml-1"></i>
                </button>
                <div id="filter-dropdown"
                  class="hidden border z-[1] border-borderColor rounded bg-white shadow-lg min-w-[320px]">
                  <div class="filter-header flex items-center justify-between border-b border-borderColor p-3">
                    <h6 class="mb-0"><i class="ti ti-filter me-1"></i>Filter</h6>
                    <button data-dropdown-hide="filter-dropdown" @click="closeFilterDropdown"
                      class="text-dark filter-close w-6 h-6 border border-borderColor rounded-full focus:outline-none focus:ring-0"><i
                        class="ti ti-x"></i></button>
                  </div>
                  <div id="accordionExample" data-accordion="collapse" class="p-4">
                    <div class="mb-4">
                      <h2 id="accordion-heading-1">
                        <button type="button"
                          class="flex items-center justify-between w-full text-dark text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-1" aria-expanded="true"
                          aria-controls="accordion-body-1">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Project Name</span>
                        </button>
                      </h2>
                      <div id="accordion-body-1" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-1" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Turelysell
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Dreamschat
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Servbook
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              DreamsPOS
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Kofejob
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Doccure
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Best@laundry
                            </label>
                          </li>
                        </ul>
                        <!-- Load More -->
                        <div class="mt-4">
                          <button class="text-primary hover:underline">Load More</button>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-2">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-2" aria-expanded="true"
                          aria-controls="accordion-body-2">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Client Name</span>
                        </button>
                      </h2>
                      <div id="accordion-body-2" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-2" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              NovaWave LLC
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              BlueSky Industries
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Silver Hawk
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Summit Peak
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              RiverStone Ltd
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Bright Bridge Grp
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              CoastalStar Co.
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-3">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-3" aria-expanded="true"
                          aria-controls="accordion-body-3">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Type</span>
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
                              Web App
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Client Meeting
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Mobile App
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              UI/UX Design
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Product Lanuch
                            </label>
                          </li>
                        </ul>
                        <!-- Load More -->
                        <div class="mt-4">
                          <button class="text-primary hover:underline">Load More</button>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-7">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-7" aria-expanded="true"
                          aria-controls="accordion-body-7">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Start Date</span>
                        </button>
                      </h2>
                      <div id="accordion-body-7" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-7" data-accordion-body>
                        <div class="input-group w-auto input-group-flat">
                          <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="20/09/2025" />
                          <span class="input-group-text">
                            <i class="ti ti-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-4">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-4" aria-expanded="true"
                          aria-controls="accordion-body-4">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>End Date</span>
                        </button>
                      </h2>
                      <div id="accordion-body-4" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-4" data-accordion-body>
                        <div class="input-group w-auto input-group-flat">
                          <a-date-picker v-model="valueTwo" class="form-control datetimepicker" placeholder="20/09/2025" />
                          <span class="input-group-text">
                            <i class="ti ti-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-5">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-5" aria-expanded="true"
                          aria-controls="accordion-body-5">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Status</span>
                        </button>
                      </h2>
                      <div id="accordion-body-5" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-5" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Active
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Inactive
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Pipeline Stage</span>
                        </button>
                      </h2>
                      <div id="accordion-body-6" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-6" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Develop
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Meeting
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Design
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Launch
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Fix
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Write
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Demo
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
              <div class="me-3">
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
                      <span class="text-sm font-medium">Client</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Priority</span>
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
                      <span class="text-sm font-medium">Type</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Pipeline Stage</span>
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
                      <span class="text-sm font-medium">Action</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="flex items-center border border-borderColor shadow bg-white rounded p-1 icon-list">
                <router-link to="/crm/projects-list"
                  class="w-7 h-7 flex items-center justify-center rounded text-white bg-teal me-1"><i
                    class="ti ti-list-tree"></i></router-link>
                <router-link to="/crm/projects" class="w-7 h-7 flex items-center justify-center rounded   text-default"><i
                    class="ti ti-layout-grid"></i></router-link>
              </div>
            </div>

          </div>
          <!-- Contact List -->
          <div class="table-responsive custom-table">
            <div id="project-list_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start "></div>
                <div class="col-start-2 justify-self-end "></div>
              </div>
              <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="col-span-2 table-responsive">
                  <a-table
                    class="table table-nowrap border border-borderColor dataTable min-w-full text-sm align-middle whitespace-nowrap"
                    :columns="columns" :data-source="paginatedData" :row-selection="rowSelection" :pagination="false">
                    <template #bodyCell="{ column, record }">
                      <template v-if="column.key === 'Star'">
                        <div class="set-star rating-select">
                          <i class="ti ti-star-filled fs-16"></i>
                        </div>
                      </template>
                      <template v-if="column.key === 'Name'">
                        <h6 class="flex items-center text-[14px] font-medium"><router-link to="/crm/project-details"
                            class="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center">
                            <img class="img-fluid rounded-full" :src="getImageUrl(record.Image)"
                              alt="Project Image"></router-link><router-link
                            to="/crm/project-details">Truelysell</router-link></h6>
                      </template>
                      <template v-if="column.key === 'Client'">
                        <h6 class="flex items-center text-[14px] font-medium mb-0">
                          <router-link :to="'/crm/company-details'"
                            class="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center">
                            <img class="img-fluid rounded-full" :src="getImageUrlOne(record.ClientImage)"
                              alt="Client Image">
                          </router-link>
                          <router-link :to="'/crm/company-details'" class="flex flex-col">
                            {{ record.Client }}
                          </router-link>
                        </h6>
                      </template>
                      <template v-if="column.key === 'Priority'">
                        <span class="px-1.5 py-0.5 rounded text-[12px] border-b" :class="{
                          'bg-danger-100 text-danger border-danger': record.Priority === 'High',
                          'bg-warning-100 text-warning border-warning': record.Priority === 'Medium',
                          'bg-info-100 text-info border-info': record.Priority === 'Low'
                        }">
                          <i class="ti ti-square-rounded-filled me-1"></i>{{ record.Priority }}
                        </span>
                      </template>
                      <template v-if="column.key === 'StartDate'">
                        {{ record.StartDate }}
                      </template>
                      <template v-if="column.key === 'EndDate'">
                        {{ record.EndDate }}
                      </template>
                      <template v-if="column.key === 'PipelineStage'">
                        <div class="pipeline-progress flex items-center">
                          <div class="h-1 rounded-[50px] w-[63px] flex-shrink-0 me-3 bg-light">
                            <div class="h-1 rounded-[50px]" :class="{
                              'bg-success': record.PipelineStage === 'Completed',
                              'bg-info': record.PipelineStage === 'Develop',
                              'bg-warning': record.PipelineStage === 'Design',
                              'bg-danger': record.PipelineStage === 'Plan'
                            }" role="progressbar"></div>
                          </div>
                          <span class="font-medium text-dark">{{ record.PipelineStage }}</span>
                        </div>
                      </template>

                      <template v-if="column.key === 'Status'">
                        <span class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex" :class="{
                          'bg-success': record.Status === 'Active',
                          'bg-danger': record.Status === 'Inactive'
                        }">
                          {{ record.Status }}
                        </span>
                      </template>
                      <template v-if="column.key === 'action'">
                        <div class="dropdown relative table-action">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(record.id, $event)"
                            :class="{ 'active': openDropdown === record.id }">
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div
                            class="dropdown-menu absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg"
                            :class="{ 'hidden': openDropdown !== record.id, 'block': openDropdown === record.id }"
                            style="top: 100%; right: 0;">
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                              data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                              data-drawer-placement="right">
                              <i class="ti ti-edit me-1"></i> Edit
                            </a>
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal">
                              <i class="ti ti-trash me-1"></i> Delete
                            </a>
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);">
                              <i class="ti ti-clipboard-copy text-green me-1"></i> Clone Project
                            </a>
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);">
                              <i class="ti ti-printer me-1"></i> Print
                            </a>
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);">
                              <i class="ti ti-subtask me-1"></i> Add New Task
                            </a>
                          </div>
                        </div>
                      </template>
                    </template>
                  </a-table>
                </div>
              </div>
              <BasePagination :currentPage="currentPage" :pageSize="pageSize" :pageSizeOptions="pageSizeOptions"
                :totalItems="filteredPages.length" @page-change="onPageChange" @page-size-change="onPageSizeChange" />
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start "></div>
                <div class="col-start-2 justify-self-end "></div>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="w-full md:w-1/2">
              <div class="datatable-length"></div>
            </div>
            <div class="w-full md:w-1/2 mt-4 md:mt-0 text-end">
              <div class="datatable-paginate"></div>
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
  <projects-modal></projects-modal>
</template>
<script>
const columns = [
  {
    key: "Star",
    sorter: false,
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Client",
    dataIndex: "Client",
    key: "Client",
    sorter: {
      compare: (a, b) => (a.Client.toLowerCase() > b.Client.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Priority",
    dataIndex: "Priority",
    key: "Priority",
    sorter: {
      compare: (a, b) => (a.Priority.toLowerCase() > b.Priority.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Start Date",
    dataIndex: "StartDate",
    key: "StartDate",
    sorter: {
      compare: (a, b) => (a.StartDate.toLowerCase() > b.StartDate.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "End Date",
    dataIndex: "EndDate",
    key: "EndDate",
    sorter: {
      compare: (a, b) => (a.EndDate.toLowerCase() > b.EndDate.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Pipeline Stage",
    dataIndex: "PipelineStage",
    key: "PipelineStage",
    sorter: {
      compare: (a, b) =>
        a.PipelineStage.toLowerCase() > b.PipelineStage.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => (a.Status.toLowerCase() > b.Status.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Action",
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    key: "1",
    id: "1",
    Name: "Truelysell",
    Image: "truellysel.svg",
    Client: "NovaWave LLC",
    ClientImage: "company-icon-01.svg",
    Priority: "High",
    StartDate: "25 Sep 2025",
    EndDate: "15 Oct 2025",
    PipelineStage: "Plan",
    Status: "Active",
  },
  {
    key: "2",
    id: "2",
    Name: "Dreamschat",
    Image: "dreamchat.svg",
    Client: "BlueSky Industries",
    ClientImage: "company-icon-02.svg",
    Priority: "Medium",
    StartDate: "29 Sep 2025",
    EndDate: "19 Oct 2025",
    PipelineStage: "Develop",
    Status: "Inactive",
  },
  {
    key: "3",
    id: "3",
    Name: "Truelysell",
    Image: "truellysell.svg",
    Client: "SilverHawk",
    ClientImage: "company-icon-03.svg",
    Priority: "Low",
    StartDate: "05 Oct 2025",
    EndDate: "12 Oct 2025",
    PipelineStage: "Completed",
    Status: "Active",
  },
  {
    key: "4",
    id: "4",
    Name: "Servbook",
    Image: "servbook.svg",
    Client: "SummitPeak",
    ClientImage: "company-icon-04.svg",
    Priority: "High",
    StartDate: "14 Oct 2025",
    EndDate: "24 Oct 2025",
    PipelineStage: "Design",
    Status: "Inactive",
  },
  {
    key: "5",
    id: "5",
    Name: "DreamPOS",
    Image: "dream-pos.svg",
    Client: "RiverStone Ventur",
    ClientImage: "company-icon-05.svg",
    Priority: "Medium",
    StartDate: "15 Nov 2025",
    EndDate: "22 Nov 2025",
    PipelineStage: "Design",
    Status: "Inactive",
  },
  {
    key: "6",
    id: "6",
    Name: "Kofejob",
    Image: "project-01.svg",
    Client: "CoastalStar Co.",
    ClientImage: "company-icon-06.svg",
    Priority: "Low",
    StartDate: "25 Nov 2025",
    EndDate: "09 Dec 2025",
    PipelineStage: "Develop",
    Status: "Active",
  },
  {
    key: "7",
    id: "7",
    Name: "Doccure",
    Image: "project-02.svg",
    Client: "HarborView",
    ClientImage: "company-icon-07.svg",
    Priority: "High",
    StartDate: "08 Dec 2025",
    EndDate: "16 Dec 2025",
    PipelineStage: "Completed",
    Status: "Inactive",
  },
  {
    key: "8",
    id: "8",
    Name: "Best@laundry",
    Image: "best.svg",
    Client: "Golden Gate Ltd",
    ClientImage: "company-icon-08.svg",
    Priority: "Medium",
    StartDate: "21 Dec 2025",
    EndDate: "13 Jan 2024",
    PipelineStage: "Completed",
    Status: "Inactive",
  },
  {
    key: "9",
    id: "9",
    Name: "POS",
    Image: "dream-pos.svg",
    Client: "CoastalStar Inc",
    ClientImage: "company-icon-09.svg",
    Priority: "Low",
    StartDate: "01 Jan 2024",
    EndDate: "11 Jan 2024",
    PipelineStage: "Develop",
    Status: "Inactive",
  },
  {
    key: "10",
    id: "10",
    Name: "Bookserv",
    Image: "servbook.svg",
    Client: "Redwood Inc",
    ClientImage: "company-icon-10.svg",
    Priority: "High",
    StartDate: "12 Jan 2024",
    EndDate: "29 Jan 2024",
    PipelineStage: "Develop",
    Status: "Inactive",
  },
  {
    key: "11",
    id: "10",
    Name: "Dreamchat",
    Client: "Redwood Inc",
    Image: "sports.svg",
    ClientImage: "company-icon-09.svg",
    Priority: "Medium",
    StartDate: "16 Jan 2024",
    EndDate: "25 Jan 2024",
    PipelineStage: "Medium",
    Status: "Inactive",
  },
  {
    Key: "12",
    id: "12",
    Name: "Sports",
    Client: "Ventur",
    Image: "best.svg",
    ClientImage: "company-icon-08.svg",
    Priority: "Medium",
    StartDate: "12 Jan 2024",
    EndDate: "29 Jan 2024",
    PipelineStage: "Medium",
    Status: "Inactive",
  }
];
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted, onUnmounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { initFlowbite } from 'flowbite';
import BasePagination from '@/components/BasePagination.vue';
const valueOne = ref();
const ValueTwo = ref();
export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      valueOne,
      ValueTwo,
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      SourceSel: [
        { label: "All Source", value: "All Source" },
        { label: "Google", value: "Google" },
        { label: "Campaigns", value: "Campaigns" },
        { label: "Referrals", value: "Referrals" },
        { label: "Paid Social", value: "Paid Social" },
      ],
      PositionSel: [
        { label: "All Position", value: "All Position" },
        { label: "Installer", value: "Installer" },
        { label: "Senior Manager", value: "Senior Manager" },
        { label: "Test Engineer", value: "Test Engineer" },
        { label: "UI /UX Designer", value: "UI /UX Designer" },
      ],
      FileSeleOne: [
        { label: "All Fields", value: "All Fields" },
        { label: "Deal Name", value: "Deal Name" },
        { label: "Stage", value: "Stage" },
        { label: "Owner", value: "Owner" },
        { label: "Status", value: "Status" },
        { label: "Deal Value", value: "Deal Value" },
        { label: "Date Created", value: "Date Created" },
      ],
      FileSele: [
        { label: "Download as PDF", value: "Download as PDF" },
        { label: "Download as Excel", value: "Download as Excel" },
      ],
      YearSele: [
        { label: "Select", value: "Select" },
        { label: "2023", value: "2023" },
        { label: "2022", value: "2022" },
        { label: "2021", value: "2021" },
      ],
      searchQuery: "",
      data,
      columns,
      rowSelection,
      currentPage: 1,
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 50],
    };
  },
  methods: { 
    closeFilterDropdown() {
      const dropdown = document.getElementById('filter-dropdown');
      if (dropdown) {
        dropdown.classList.add('hidden');
      }
    },
    handleTableChange() {
      // Optional: implement sorting/filtering if needed, or leave empty to suppress warning
    },
    onPageChange(page) {
      this.currentPage = page;
    },
    onPageSizeChange(size) {
      this.pageSize = Number(size);
      this.currentPage = 1;
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/priority/${imageName}`, import.meta.url).href;
    },
    getImageUrlOne(imageName) {
      return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href;
    },
  },
  setup() {
    const openDropdown = ref(null);
    const dateRangeInput = ref(null);

    const toggleDropdown = (id, event) => {
      event.stopPropagation();
      if (openDropdown.value === id) {
        openDropdown.value = null;
      } else {
        openDropdown.value = id;
      }
    };

    const closeAllDropdowns = () => {
      openDropdown.value = null;
    };

    const handleClickOutside = (event) => {
      // Close dropdown when clicking outside
      closeAllDropdowns();
    };

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
      initFlowbite();
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      openDropdown,
      toggleDropdown,
      closeAllDropdowns,
      dateRangeInput
    };
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.Name.toLowerCase().includes(query) ||
          record.Client.toLowerCase().includes(query) ||
          record.Priority.toLowerCase().includes(query) ||
          record.StartDate.toLowerCase().includes(query) ||
          record.EndDate.toLowerCase().includes(query) ||
          record.PipelineStage.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.filteredPages.slice(start, start + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.filteredPages.length / this.pageSize) || 1;
    },
  },
};
</script>
