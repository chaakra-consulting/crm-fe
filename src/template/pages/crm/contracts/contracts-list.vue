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
            Contracts
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">123</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Contracts</li>
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
            Add New Contract
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
                  <i class="ti ti-calendar-due text-dark text-[14px] me-1"></i>
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Contracts Id</span>
                        </button>
                      </h2>
                      <div id="accordion-body-1" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-1" data-accordion-body>
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
                              274729
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              #274730
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              #274731
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              #274732
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              #274733
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              #274734
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              #274735
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-7">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-7" aria-expanded="true"
                          aria-controls="accordion-body-7">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Subject</span>
                        </button>
                      </h2>
                      <div id="accordion-body-7" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-7" data-accordion-body>
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
                              SEO Proposal
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Web Design
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Logo & Branding
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Development
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Business Card Design
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Technical SEO
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Portfolio Site
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-2">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-2" aria-expanded="true"
                          aria-controls="accordion-body-2">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Customer</span>
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
                      <h2 id="accordion-heading-5">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-5" aria-expanded="true"
                          aria-controls="accordion-body-5">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Contract Type</span>
                        </button>
                      </h2>
                      <div id="accordion-body-5" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-5" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Contract Under Seal
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Executory Contracts
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Express Contracts
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Implied Contracts
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
                      <span class="text-sm font-medium">Contracts ID</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Subject</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Customer</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Customer Value</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Customer Type</span>
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
                      <span class="text-sm font-medium">Action</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="flex items-center border border-borderColor shadow bg-white rounded p-1 icon-list">
                <router-link to="/crm/contacts-list"
                  class="w-7 h-7 flex items-center justify-center rounded text-white bg-teal me-1"><i
                    class="ti ti-list-tree"></i></router-link>
                <router-link to="/crm/contracts"
                  class="w-7 h-7 flex items-center justify-center rounded   text-default"><i
                    class="ti ti-layout-grid"></i></router-link>
              </div>
            </div>

          </div>
          <!-- Contact List -->
          <div class="table-responsive custom-table">
            <div id="contracts-list_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start "></div>
                <div class="col-start-2 justify-self-end "></div>
              </div>
              <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="col-span-2 table-responsive">
                  <a-table class="table table-nowrap border border-borderColor dataTable min-w-full text-sm align-middle whitespace-nowrap" :columns="columns" :data-source="paginatedData"
                      :row-selection="rowSelection" :pagination="false">
                      <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'ContractID'">
                          <a href="javascript:void(0);" class="title-name">{{ record.ContractID }}</a>
                        </template>
                        <template v-if="column.key === 'Subject'">
                          <a href="javascript:void(0);" class="title-name">{{ record.Subject }}</a>
                        </template>
                        <template v-if="column.key === 'Customer'">
                          <h6 class="flex items-center font-medium text-[14px]">
                            <router-link :to="'/crm/company-details'" class="w-10 h-10 border rounded p-1 me-2 rounded-full flex items-center justify-center">
                              <img class="w-auto h-auto" :src="getImageUrl(record.Image)" alt="Company Image">
                            </router-link>
                            <router-link :to="'/crm/company-details'" class="flex flex-col">
                              {{ record.Customer }}
                            </router-link>
                          </h6>
                        </template>
                        <template v-if="column.key === 'ContractType'">
                          {{ record.ContractType }}
                        </template>
                        <template v-if="column.key === 'StartDate'">
                          {{ record.StartDate }}
                        </template>
                        <template v-if="column.key === 'EndDate'">
                          {{ record.EndDate }}
                        </template>
                        <template v-if="column.key === 'action'">
                          <div class="dropdown relative table-action">
                            <a href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(record.key, $event)"
                              :class="{ 'active': openDropdown === record.key }">
                              <i class="ti ti-dots-vertical"></i>
                            </a>
                            <div
                              class="dropdown-menu absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg"
                              :class="{ 'hidden': openDropdown !== record.key, 'block': openDropdown === record.key }"
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
                                href="#" data-drawer-target="offcanvas_view" data-drawer-show="offcanvas_view"
                                aria-controls="offcanvas_view" data-drawer-placement="right">
                                <i class="ti ti-clipboard-copy me-1"></i> View Contract
                              </a>
                              <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="#"><i class="ti ti-copy me-1"></i> Clone</a>
                              <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="#"><i class="ti ti-checks me-1"></i> Mark as Signed</a>
                              <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="#"><i class="ti ti-printer me-1"></i> Print</a>
                            </div>
                          </div>
                        </template>
                      </template>
                    </a-table>
                </div>
              </div>
              <BasePagination :current-page="currentPage" :total-items="filteredPages.length" :page-size="pageSize" :page-size-options="pageSizeOptions" @page-change="onPageChange" @page-size-change="onPageSizeChange" />
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
  <!-- Add Contract -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Contract</h5>
      <button type="button" data-drawer-hide="offcanvas_add" aria-controls="offcanvas_add"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Subject <span class="text-danger"> *</span></label>
              <input class="form-control" type="text">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Start Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueOne" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">End Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueTwo" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Client <span class="text-danger"> *</span></label>
              <vue3-select v-model="selected" :options="ClientSele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Contract Type <span class="text-danger"> *</span></label>
              <vue3-select v-model="selectedOne" :options="ContractSele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Contract Value <span class="text-danger"> *</span></label>
              <input class="form-control" type="text">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-5">
              <label class="form-label">Attachment <span class="text-danger">*</span></label>
              <div
                class="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
                <span class="block mb-1"><i class="ti ti-folder-open text-primary fs-16"></i></span>
                <p class="mb-0 tet-[14px] text-dark">Drop your files here or <a href="javascript:void(0);"
                    class="underline text-primary">browse</a></p>
                <input type="file" accept="video/image"
                  class="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer">
                <p class="text-[13px] mb-0">Maximum size : 50 MB</p>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description <span class="text-danger">*</span></label>
              <div class="editor pages-editor ql-container ql-snow">
                <div ref="editorRef" class="quill-editor"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button type="button" data-drawer-hide="offcanvas_add" class="btn btn-light me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Create New</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Add Contract -->

  <!-- Edit Contract -->
  <div id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Edit Contract</h5>
      <button type="button" data-drawer-hide="offcanvas_edit" aria-controls="offcanvas_edit"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Subject <span class="text-danger"> *</span></label>
              <input class="form-control" type="text" value="SEO Proposal">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Start Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueOne" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">End Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueTwo" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Client <span class="text-danger"> *</span></label>
              <vue3-select v-model="selectedTwo" :options="ClientSele" placeholder="NovaWave LLC" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Contract Type <span class="text-danger"> *</span></label>
              <vue3-select v-model="selectedThree" :options="ContractSele" placeholder="Contracts under Seal" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Contract Value <span class="text-danger"> *</span></label>
              <input class="form-control" type="text" value="$2,15,000">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-5">
              <label class="form-label">Attachment <span class="text-danger">*</span></label>
              <div
                class="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
                <span class="block mb-1"><i class="ti ti-folder-open text-primary fs-16"></i></span>
                <p class="mb-0 tet-[14px] text-dark">Drop your files here or <a href="javascript:void(0);"
                    class="underline text-primary">browse</a></p>
                <input type="file" accept="video/image"
                  class="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer">
                <p class="text-[13px] mb-0">Maximum size : 50 MB</p>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description <span class="text-danger">*</span></label>
              <div class="editor pages-editor ql-container ql-snow">
                <div ref="editorRefOne" class="quill-editor"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button type="button" data-drawer-hide="offcanvas_edit" class="btn btn-light me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Edit Contract -->

  <!-- View Contract -->
  <div id="offcanvas_view"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor flex items-center justify-between">
      <h5 class="inline-flex items-center">Contract<span
          class="text-danger border-b border-danger text-xs font-medium px-2 py-1 rounded bg-danger-100 ms-2">#1254057</span>
      </h5>
      <!-- Dropdown -->
      <div class="flex items-center">
        <div class="me-3">
          <a href="javascript:void(0);"
            class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
            data-dropdown-toggle="download-dropdown">
            Mark as Signed<i class="ti ti-chevron-down ml-1"></i>
          </a>
          <ul id="download-dropdown"
            class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]">
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                  class="ti ti-file-type-pdf me-1"></i>View PDF</a>
            </li>
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                  class="ti ti-checks me-1"></i>Mark as Signed</a>
            </li>
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                  class="ti ti-file-download me-1"></i>Download</a>
            </li>
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                  class="ti ti-copy me-1"></i>Clone</a>
            </li>
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                  class="ti ti-printer me-1"></i>Print</a>
            </li>
          </ul>
        </div>
        <button type="button" data-drawer-hide="offcanvas_view" aria-controls="offcanvas_view"
          class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full flex items-center justify-center"><i
            class="ti ti-x"></i> <span class="sr-only">Close menu</span>
        </button>
      </div>
    </div>
    <div class="p-4">
      <ul class="flex flex-wrap text-sm font-medium text-center mb-3" id="default-styled-tab3"
        data-tabs-toggle="#company-tab-content3"
        data-tabs-active-classes="text-primary hover:text-primary border-primary"
        data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary"
        role="tablist">
        <li class="me-3" role="presentation">
          <button class="inline-block py-2 px-4 border-b-2" data-tabs-target="#company-basic3" type="button" role="tab"
            aria-selected="false">Contract Details</button>
        </li>
        <li role="presentation">
          <button class="inline-block py-2 px-4 border-b-2" data-tabs-target="#company-address3" type="button"
            role="tab" aria-selected="false">Renewal History</button>
        </li>
      </ul>
      <div id="company-tab-content3">
        <div class="hidden " id="company-basic3" role="tabpanel">
          <div class="flex items-center justify-end mb-3">
            <a href="#" class="btn btn-light me-3">Download</a>
            <a href="#" class="btn btn-primary" data-drawer-target="offcanvas_signup"
              data-drawer-show="offcanvas_signup" aria-controls="offcanvas_signup" data-drawer-placement="right">Sign
              Now</a>
          </div>
          <h6 class="mb-2">Web Design Contract</h6>
          <p class="mb-3">Where's the other side. The further off from England the nearer is to find my way into a tree.
            By the use of a well--' 'What did they draw?' said Alice, in a sorrowful tone, 'I'm afraid I've offended it
            again</p>
          <div class="card border border-borderColor rounded mb-4">
            <div class="card-body p-4">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
                <div class="md:col-span-6">
                  <div>
                    <h6 class="font-medium text-[14px] mb-2">Contract Value : $25,25,000</h6>
                    <p class="mb-1">Type : <span>Contracts under Seal</span></p>
                    <p class="mb-1">Start Date : <span>24 Apr 2025</span></p>
                    <p class="mb-1">End Date : <span>30 Apr 2025</span></p>
                    <p class="mb-0">Client : <span>Harbor View</span></p>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div>
                    <h6 class="font-semibold text-[14px] mb-2">CRMS</h6>
                    <p class="mb-1">3338 Marcus Street Birmingham, AL 35211</p>
                    <p class="mb-1">Phone : <span>+1 98789 78788</span></p>
                    <p class="mb-0">Email : <span> info@example.com</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h6 class="mb-3">Attachment</h6>
          <div class="card border border-borderColor rounded">
            <div class="card-body p-2 flex items-center justify-between">
              <div class="flex items-center">
                <span class="w-10 h-10 text-white rounded flex items-center justify-center bg-danger me-2"><i
                    class="ti ti-file-type-pdf"></i></span>
                <div>
                  <h6 class="font-medium text-[14px] mb-1">Proposal_webdesign.pdf</h6>
                  <span class="text-[13px]">15.2 MB</span>
                </div>
              </div>
              <a href="#" class="w-10 h-10 rounded-full bg-light flex items-center justify-center text-dark"><i
                  class="ti ti-download fs-16"></i></a>
            </div>
          </div>
        </div>
        <div class="hidden" id="company-address3" role="tabpanel">
          <h6 class="mb-3">Renewal History</h6>
          <div class="card border border-borderColor rounded mb-4">
            <div class="card-body flex items-center justify-between p-4">
              <div>
                <h6 class="font-medium fs-14 mb-2">Contract Value : $25,25,000</h6>
                <div class="flex items-center gap-3">
                  <p class="mb-0">Start Date : <span class="text-dark">24 Apr 2025</span></p>
                  <p class="mb-0">End Date : <span class="text-dark">30 Apr 2025</span></p>
                </div>
              </div>
              <a href="#" class="btn btn-primary" data-drawer-target="offcanvas_signup"
                data-drawer-show="offcanvas_signup" aria-controls="offcanvas_signup" data-drawer-placement="right">Sign
                Now</a>
            </div>
          </div>
          <div class="card border border-borderColor rounded">
            <div class="card-body flex items-center justify-between p-4">
              <div>
                <h6 class="font-medium fs-14 mb-2">Contract Value : $25,25,000</h6>
                <div class="flex items-center gap-3">
                  <p class="mb-0">Start Date : <span class="text-dark">24 Apr 2025</span></p>
                  <p class="mb-0">End Date : <span class="text-dark">30 Apr 2025</span></p>
                </div>
              </div>
              <span class="text-xs bg-success-100 text-success rounded border-b border-success px-2 py-0.5 me-2">Renewed
                On : 24 Apr 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /View Contract -->

  <!-- Signup -->
  <div id="offcanvas_signup"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor flex items-center justify-between">
      <h5>Signature & Confirmation of Identity</h5>
      <div class="flex items-center">
        <button type="button" data-drawer-hide="offcanvas_signup" aria-controls="offcanvas_signup"
          class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full flex items-center justify-center"><i
            class="ti ti-x"></i> <span class="sr-only">Close menu</span>
        </button>
      </div>
    </div>
    <div class="p-4">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
        <div class="md:col-span-6">
          <div class="mb-3">
            <label class="form-label">First Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="md:col-span-6">
          <div class="mb-3">
            <label class="form-label">Last Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="md:col-span-12">
          <div class="mb-3">
            <label class="form-label">Email <span class="text-danger">*</span></label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="md:col-span-12">
          <div>
            <label class="form-label">Signature <span class="text-danger">*</span></label>
            <div
              class="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
              <span class="block mb-1"><i class="ti ti-folder-open text-primary fs-16"></i></span>
              <p class="mb-0 tet-[14px] text-dark">Drop your files here or <a href="javascript:void(0);"
                  class="underline text-primary">browse</a></p>
              <input type="file" accept="video/image"
                class="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer">
              <p class="text-[13px] mb-0">Maximum size : 50 MB</p>
            </div>
            <div class="flex items-center my-5 pb-5 border-b border-borderColor">
              <a href="#"
                class="text-xs bg-danger-100 text-danger rounded border-b border-danger px-2 py-0.5 me-2">Clear</a>
              <a href="#" class="text-xs bg-info-100 text-info rounded border-b border-info px-2 py-0.5">Undo</a>
            </div>
            <p class="mb-0">By Clicking on “Sign”, I consent to be legally bound by this electronic representation of my
              signature</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Signup -->

  <!-- delete modal -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="delete_modal">
    <div class="relative bg-white rounded-defaultradius p-5">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center">
          <div class="mb-3 relative z-[1]">
            <span
              class="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center"><i
                class="ti ti-trash text-[24px]"></i></span>
          </div>
          <h5 class="mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure you want to remove contract you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->
</template>
<script>
const columns = [
  {
    title: "Contract ID",
    dataIndex: "ContractID",
    key: "ContractID",
    sorter: {
      compare: (a, b) =>
        a.ContractID.toLowerCase() > b.ContractID.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Subject",
    dataIndex: "Subject",
    key: "Subject",
    sorter: {
      compare: (a, b) => (a.Subject.toLowerCase() > b.Subject.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Customer",
    dataIndex: "Customer",
    key: "Customer",
    sorter: {
      compare: (a, b) => (a.Customer.toLowerCase() > b.Customer.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Contract Type",
    dataIndex: "ContractType",
    key: "ContractType",
    sorter: {
      compare: (a, b) =>
        a.ContractType.toLowerCase() > b.ContractType.toLowerCase() ? -1 : 1,
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
    title: "Action",
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    key: "1",
    ContractID: "#1493024",
    Subject: "SEO Proposal",
    Customer: "NovaWave LLC",
    Image: "company-icon-01.svg",
    ContractType: "Contracts under Seal",
    StartDate: "15 Aug 2024",
    EndDate: "15 May 2024",
  },
  {
    key: "2",
    ContractID: "#1493023",
    Subject: "Web Design",
    Customer: "Redwood Inc",
    Image: "company-icon-02.svg",
    ContractType: "Implied Contracts",
    StartDate: "15 Sep 2024",
    EndDate: "15 Apr 2024",
  },
  {
    key: "3",
    ContractID: "#1493022",
    Subject: "Logo & Branding",
    Customer: "HarborView",
    Image: "company-icon-03.svg",
    ContractType: "Implied Contracts",
    StartDate: "15 Nov 2024",
    EndDate: "15 Mar 2024",
  },
  {
    key: "4",
    ContractID: "#1493021",
    Subject: "Development",
    Customer: "CoastalStar Co.",
    Image: "company-icon-04.svg",
    ContractType: "Executory Contracts",
    StartDate: "15 Jun 2024",
    EndDate: "15 Feb 2024",
  },
  {
    key: "5",
    ContractID: "#1493020",
    Subject: "SEO Proposal",
    Customer: "RiverStone Ventur",
    Image: "company-icon-05.svg",
    ContractType: "Voidable Contracts",
    StartDate: "15 Oct 2024",
    EndDate: "15 Jan 2024",
  },
  {
    key: "6",
    ContractID: "#1493019",
    Subject: "Web Design",
    Customer: "Summit  Peak",
    Image: "company-icon-06.svg",
    ContractType: "Unilateral Contracts",
    StartDate: "08 Aug 2024",
    EndDate: "15 Dec 2025",
  },
  {
    key: "7",
    ContractID: "#1493018",
    Subject: "Logo",
    Customer: "Silver Hawk",
    Image: "company-icon-07.svg",
    ContractType: "Unconscionable",
    StartDate: "25 Jan 2025",
    EndDate: "15 Nov 2025",
  },
  {
    key: "8",
    ContractID: "#1493017",
    Subject: "Branding",
    Customer: "BlueSky Industries",
    Image: "company-icon-08.svg",
    ContractType: "Express Contracts",
    StartDate: "12 Aug 2024",
    EndDate: "15 Sep 2025",
  },
  {
    key: "9",
    ContractID: "#1493018",
    Subject: "Development",
    Customer: "Golden Gate Ltd",
    Image: "company-icon-09.svg",
    ContractType: "Contracts under Seal",
    StartDate: "07 Dec 2024",
    EndDate: "15 Aug 2025",
  },
];
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { initFlowbite } from "flowbite";
import { onMounted, onUnmounted, ref } from 'vue';
import moment from "moment";
import DateRangePicker from "daterangepicker";
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
      content: "",
      searchQuery: "",
      data,
      columns,
      rowSelection,
      currentPage: 1,
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 50],
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      ContractSele: [
        { label: "Select", value: "Select" },
        { label: "Contracts under Seal", value: "Contracts under Seal" },
        { label: "Implied Contracts", value: "Implied Contracts" },
        { label: "Executory Contracts", value: "Executory Contracts" },
        { label: "Voidable Contracts", value: "Voidable Contracts" },
      ],
      ClientSele: [
        { label: "Select", value: "Select" },
        { label: "NovaWave LLC", value: "NovaWave LLC" },
        { label: "Silver Hawk", value: "Silver Hawk" },
        { label: "Harbor View", value: "Harbor View" },
      ],
      ContractSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Contracts under Seal", value: "Contracts under Seal" },
        { label: "Implied Contracts", value: "Implied Contracts" },
        { label: "Executory Contracts", value: "Executory Contracts" },
        { label: "Voidable Contracts", value: "Voidable Contracts" },
      ],
      ClientSeleOne: [
        { label: "Select", value: "Select" },
        { label: "NovaWave LLC", value: "NovaWave LLC" },
        { label: "Silver Hawk", value: "Silver Hawk" },
        { label: "Harbor View", value: "Harbor View" },
      ],
    };
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
    this.$nextTick(() => {
      this.initQuill();
    });
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.ContractID.toLowerCase().includes(query) ||
          record.Subject.toLowerCase().includes(query) ||
          record.Customer.toLowerCase().includes(query) ||
          record.ContractType.toLowerCase().includes(query) ||
          record.StartDate.toLowerCase().includes(query) ||
          record.EndDate.toLowerCase().includes(query)
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
    onPageChange(page) {
      this.currentPage = page;
    },
    onPageSizeChange(size) {
      this.pageSize = Number(size);
      this.currentPage = 1;
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href;
    },
    initQuill() {
      if (this.$refs.editorRef) {
        const quill = new Quill(this.$refs.editorRef, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          },
        });

        quill.on("text-change", () => {
          this.content = quill.root.innerHTML;
        });
      }
    },
  },
};
</script>
