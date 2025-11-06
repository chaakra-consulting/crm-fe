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
            Task Report
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Task Reports</li>
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

      <!-- start row -->
      <div class="flex flex-col md:flex-row md:gap-6">
        <div class="w-full md:w-7/12 flex mb-5">
          <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
            <div class="flex items-center justify-between gap-3 py-3 px-4 border-b border-borderColor">
              <h6 class="m-0">Tasks By Year</h6>
              <!-- Dropdown -->
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="project-by-year">
                  <i class="ti ti-calendar mr-1"></i>2025<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="project-by-year"
                  class="hidden absolute left-1/2 mt-2 w-[150px] p-2 z-[1055] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">2024</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">2023</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">2022</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="px-4 pt-4">
              <div id="task-year">
                <apexchart type="line" height="400" :options="taskYear.task" :series="taskYear.series"></apexchart>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-5/12 flex mb-5">
          <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
            <div class="flex items-center justify-between gap-3 py-3 px-4 border-b border-borderColor">
              <h6 class="m-0">Tasks By Source</h6>
              <!-- Dropdown -->
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="project-by-source">
                  <i class="ti ti-calendar mr-1"></i>2025<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="project-by-source"
                  class="hidden absolute left-1/2 mt-2 w-[150px] p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">2024</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">2023</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">2022</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="px-4 pt-4">
              <div id="leads-analysis">
                <apexchart type="donut" :options="leadsAnalysis.leads" :series="leadsAnalysis.series"></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->

      <div class="card">
        <div
          class="flex items-center justify-between flex-wrap gap-2 p-4 border-b border-borderColor bg-white rounded-t">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
              <i class="ti ti-search"></i>
            </span>
            <input type="text" placeholder="Search"
              class="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
          </div>
          <!-- Add New Button -->
          <a href="javascript:void(0);"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
            data-modal-target="download_report" data-modal-toggle="download_report">
            <i class="ti ti-file-download mr-1"></i>Download Report
          </a>
        </div>
        <div class="bg-white p-4">
          <div class="flex items-center justify-between flex-wrap gap-3">
            <!-- Item 1 -->
            <div class="flex items-center flex-wrap gap-3">
              <div class="relative">
                <input type="text"
                  class="block flex-1 border border-borderColor shadow bg-white rounded-[5px] py-1.5 pr-2.5 pl-8 text-gray-900 focus:ring-0 focus:border-borderColor h-[38px] placeholder:text-gray-400 text-sm date-range bookingrange"
                  ref="dateRangeInput" placeholder="dd/mm/yyyy - dd/mm/yyyy">
                <span class="absolute inset-y-1/2 start-[10px] flex items-center me-2.5 pointer-events-none">
                  <i class="ti ti-calendar-due text-dark fs-14 me-1"></i>
                </span>
              </div>
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
                        data-accordion-target="#accordion-body-1" aria-expanded="true" aria-controls="accordion-body-1">
                        <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Client</span>
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
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/company/company-01.svg" alt="Elizabeth"
                                class="h-6 w-6 rounded-full">
                              <span>NovaWave LLC</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/company/company-02.svg" alt="Katherine"
                                class="h-6 w-6 rounded-full">
                              <span>BlueSky Industries</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/company/company-03.svg" alt="Katherine"
                                class="h-6 w-6 rounded-full">
                              <span>SilverHawk</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/company/company-04.svg" alt="Katherine"
                                class="h-6 w-6 rounded-full">
                              <span>SummitPeak</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/company/company-05.svg" alt="Katherine"
                                class="h-6 w-6 rounded-full">
                              <span>RiverStone Ventur</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/company/company-06.svg" alt="Katherine"
                                class="h-6 w-6 rounded-full">
                              <span>Bright Bridge Grp</span>
                            </span>
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
                        data-accordion-target="#accordion-body-2" aria-expanded="true" aria-controls="accordion-body-2">
                        <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Priority</span>
                      </button>
                    </h2>
                    <div id="accordion-body-2" class="hidden p-4 bg-light  border border-borderColor rounded"
                      aria-labelledby="accordion-heading-2" data-accordion-body>
                      <ul class="space-y-3 max-h-64 overflow-y-auto">
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                            High
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                            Medium
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                            Low
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="mb-4">
                    <h2 id="accordion-heading-6">
                      <button type="button"
                        class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                        data-accordion-target="#accordion-body-6" aria-expanded="true" aria-controls="accordion-body-6">
                        <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Status</span>
                      </button>
                    </h2>
                    <div id="accordion-body-6" class="hidden p-4 bg-light  border border-borderColor rounded"
                      aria-labelledby="accordion-heading-6" data-accordion-body>
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
                  <div class="flex items-center gap-2">
                    <a href="javascript:void(0);" class="btn border border-borderColor text-center w-full">Reset</a>
                    <a href="javascript:void(0);" class="btn btn-primary w-full">Filter</a>
                  </div>
                </div>
              </div>
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="task-dropdown">
                  All Tasks<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="task-dropdown"
                  class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[150px]">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">All
                      Tasks</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Important</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Completed</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Item 2 -->
            <div class="flex items-center flex-wrap gap-3">
              <div>
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
                </ul>
              </div>
            </div>
          </div>

          <!-- start list -->
          <div class="task-wrap mt-5">
            <div data-accordion="collapse">
              <div id="accordion-heading-7">
                <button type="button"
                  class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-4"
                  data-accordion-target="#accordion-body-7" aria-expanded="true" aria-controls="accordion-body-7">
                  <span class="mb-0 text-[16px] text-dark font-bold flex items-center">Recent<small
                      class="bg-success-100 rounded-full flex items-center justify-center w-5 h-5 text-[12px] font-medium ms-3">24</small></span><i
                    class="ti ti-chevron-down arrow-rotate me-2"></i>
                </button>
              </div>
              <div id="accordion-body-7" aria-labelledby="accordion-heading-7" data-accordion-body="accordionExample">
                <!-- start task item -->
                <div
                  class="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-info">
                  <div class="flex items-center gap-5 flex-wrap">
                    <span><i class="ti ti-grip-vertical"></i></span>
                    <div class="form-check form-check-md">
                      <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="set-star rating-select">
                      <i class="ti ti-star-filled text-[16]"></i>
                    </div>
                    <p class="text-[14] font-medium text-gray-900">Add a form to Update Task</p>
                    <div class="flex items-center gap-3">
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-success inline-flex items-center">
                        <i class="ti ti-phone mr-1"></i>Calls
                      </p>
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-b border-info inline-flex items-center">
                        Pending</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-5 flex-wrap">
                    <p
                      class="px-1.5 py-0.5 rounded text-[12px] bg-primary-100 text-primary border-b border-primary inline-flex items-center">
                      Promotion</p>
                    <p class="flex items-center mb-0 "><i class="ti ti-calendar-exclamation mr-1"></i>25 Apr 2025</p>
                    <div class="w-6 h-6 rounded-full">
                      <img src="@/assets/img/users/avatar-1.jpg" alt="avatar-1" class="img-fluid rounded-full">
                    </div>
                  </div>
                </div>
                <!-- end task item -->
                <!-- start task item -->
                <div
                  class="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-info">
                  <div class="flex items-center gap-5 flex-wrap">
                    <span><i class="ti ti-grip-vertical"></i></span>
                    <div class="form-check form-check-md">
                      <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="set-star rating-select">
                      <i class="ti ti-star-filled text-[16]"></i>
                    </div>
                    <p class="text-[14] font-medium text-gray-900">Make all strokes thinner</p>
                    <div class="flex items-center gap-3">
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-warning-100 text-warning border-warning inline-flex items-center">
                        <i class="ti ti-mail mr-1"></i>Email
                      </p>
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-b border-info inline-flex items-center">
                        Pending</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-5 flex-wrap">
                    <p
                      class="px-1.5 py-0.5 rounded text-[12px] bg-danger-100 text-danger border-b border-danger inline-flex items-center">
                      <i class="ti ti-phone mr-1"></i>Rejected
                    </p>
                    <p
                      class="px-1.5 py-0.5 rounded text-[12px] bg-danger-100 text-danger border-b border-danger inline-flex items-center">
                      Collab</p>
                    <p class="flex items-center mb-0 "><i class="ti ti-calendar-exclamation mr-1"></i>25 Apr 2025</p>
                    <div class="w-6 h-6 rounded-full">
                      <img src="@/assets/img/users/avatar-2.jpg" alt="avatar-2" class="img-fluid rounded-full">
                    </div>
                  </div>
                </div>
                <!-- end task item -->
                <!-- start task item -->
                <div
                  class="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-warning">
                  <div class="flex items-center gap-5 flex-wrap">
                    <span><i class="ti ti-grip-vertical"></i></span>
                    <div class="form-check form-check-md">
                      <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="set-star rating-select">
                      <i class="ti ti-star-filled text-[16]"></i>
                    </div>
                    <p class="text-[14] font-medium text-gray-900">Update original content</p>
                    <div class="flex items-center gap-3">
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-success inline-flex items-center">
                        <i class="ti ti-phone mr-1"></i>Calls
                      </p>
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-warning-100 text-warning border-b border-warning inline-flex items-center">
                        Inprogress</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-5 flex-wrap">
                    <p
                      class="px-1.5 py-0.5 rounded text-[12px] bg-primary-100 text-primary border-b border-primary inline-flex items-center">
                      Promotion</p>
                    <p class="flex items-center mb-0 "><i class="ti ti-calendar-exclamation mr-1"></i>25 Apr 2025</p>
                    <div class="w-6 h-6 rounded-full">
                      <img src="@/assets/img/users/avatar-3.jpg" alt="avatar-1" class="img-fluid rounded-full">
                    </div>
                  </div>
                </div>
                <!-- end task item -->
                <!-- start task item -->
                <div
                  class="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-warning">
                  <div class="flex items-center gap-5 flex-wrap">
                    <span><i class="ti ti-grip-vertical"></i></span>
                    <div class="form-check form-check-md">
                      <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="set-star rating-select">
                      <i class="ti ti-star-filled text-[16]"></i>
                    </div>
                    <p class="text-[14] font-medium text-gray-900">Use only component colours</p>
                    <div class="flex items-center gap-3">
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-info inline-flex items-center">
                        <i class="ti ti-subtask me-1"></i>Task
                      </p>
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-warning-100 text-warning border-b border-warning inline-flex items-center">
                        Inprogress</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-5 flex-wrap">
                    <p
                      class="px-1.5 py-0.5 rounded text-[12px] bg-primary-100 text-primary border-b border-primary inline-flex items-center">
                      Promotion</p>
                    <p class="flex items-center mb-0 "><i class="ti ti-calendar-exclamation mr-1"></i>25 Apr 2025</p>
                    <div class="w-6 h-6 rounded-full">
                      <img src="@/assets/img/users/avatar-4.jpg" alt="avatar-1" class="img-fluid rounded-full">
                    </div>
                  </div>
                </div>
                <!-- end task item -->
              </div>
            </div>
          </div>
          <hr class="my-5 border border-borderColor">

          <!-- yesterday list -->
          <div class="task-wrap">
            <div data-accordion="collapse">
              <div id="accordion-heading-8">
                <button type="button"
                  class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-4"
                  data-accordion-target="#accordion-body-8" aria-expanded="true" aria-controls="accordion-body-8">
                  <span class="mb-0 text-[16px] text-dark font-bold font-bold flex items-center">Yesterday</span><i
                    class="ti ti-chevron-down arrow-rotate me-2"></i>
                </button>
              </div>
              <div id="accordion-body-8" aria-labelledby="accordion-heading-8" data-accordion-body>
                <!-- start task item -->
                <div
                  class="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-warning">
                  <div class="flex items-center gap-5 flex-wrap">
                    <span><i class="ti ti-grip-vertical"></i></span>
                    <div class="form-check form-check-md">
                      <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="set-star rating-select">
                      <i class="ti ti-star-filled text-[16]"></i>
                    </div>
                    <p class="text-[14] font-medium text-gray-900">Add images to the cards section</p>
                    <div class="flex items-center gap-3">
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-success inline-flex items-center">
                        <i class="ti ti-phone mr-1"></i>Calls
                      </p>
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-warning-100 text-warning border-b border-warning inline-flex items-center">
                        Inprogress</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-5 flex-wrap">
                    <p
                      class="px-1.5 py-0.5 rounded text-[12px] bg-primary-100 text-primary border-b border-primary inline-flex items-center">
                      Promotion</p>
                    <p class="flex items-center mb-0 "><i class="ti ti-calendar-exclamation mr-1"></i>24 Apr 2025</p>
                    <div class="w-6 h-6 rounded-full">
                      <img src="@/assets/img/users/avatar-5.jpg" alt="avatar-1" class="img-fluid rounded-full">
                    </div>
                  </div>
                </div>
                <!-- end task item -->
                <!-- start task item -->
                <div
                  class="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-danger">
                  <div class="flex items-center gap-5 flex-wrap">
                    <span><i class="ti ti-grip-vertical"></i></span>
                    <div class="form-check form-check-md">
                      <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="set-star rating-select">
                      <i class="ti ti-star-filled text-[16]"></i>
                    </div>
                    <p class="text-[14] font-medium text-gray-900">Add images to the cards section</p>
                    <div class="flex items-center gap-3">
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-success inline-flex items-center">
                        <i class="ti ti-mail mr-1"></i>Email
                      </p>
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-danger-100 text-danger border-b border-danger inline-flex items-center">
                        Rejected</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-5 flex-wrap">
                    <p
                      class="px-1.5 py-0.5 rounded text-[12px] bg-primary-100 text-primary border-b border-primary inline-flex items-center">
                      Promotion</p>
                    <p class="flex items-center mb-0 "><i class="ti ti-calendar-exclamation mr-1"></i>24 Apr 2025</p>
                    <div class="w-6 h-6 rounded-full">
                      <img src="@/assets/img/users/avatar-7.jpg" alt="avatar-2" class="img-fluid rounded-full">
                    </div>
                  </div>
                </div>
                <!-- end task item -->
              </div>
            </div>
          </div>
          <hr class="my-5 border border-borderColor">

          <!-- date list -->
          <div class="task-wrap">
            <div data-accordion="collapse">
              <div id="accordion-heading-9">
                <button type="button"
                  class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-4"
                  data-accordion-target="#accordion-body-9" aria-expanded="true" aria-controls="accordion-body-9">
                  <span class="mb-0 text-[16px] text-dark font-bold flex items-center">23 Apr 2025</span><i
                    class="ti ti-chevron-down arrow-rotate me-2"></i>
                </button>
              </div>
              <div id="accordion-body-9" aria-labelledby="accordion-heading-9" data-accordion-body="accordionExample">
                <!-- start task item -->
                <div
                  class="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-warning">
                  <div class="flex items-center gap-5 flex-wrap">
                    <span><i class="ti ti-grip-vertical"></i></span>
                    <div class="form-check form-check-md">
                      <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="set-star rating-select">
                      <i class="ti ti-star-filled text-[16]"></i>
                    </div>
                    <p class="text-[14] font-medium text-gray-900">Design description banner & landing page</p>
                    <div class="flex items-center gap-3">
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-info inline-flex items-center">
                        <i class="ti ti-subtask mr-1"></i>Task
                      </p>
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-warning-100 text-warning border-b border-warning inline-flex items-center">
                        Inprogress</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-5 flex-wrap">
                    <p
                      class="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success inline-flex items-center">
                      Collab</p>
                    <p
                      class="px-1.5 py-0.5 rounded text-[12px] bg-warning-100 text-warning border-b border-warning inline-flex items-center">
                      Rated</p>
                    <p class="flex items-center mb-0 "><i class="ti ti-calendar-exclamation mr-1"></i>24 Apr 2025</p>
                    <div class="w-6 h-6 rounded-full">
                      <img src="@/assets/img/users/avatar-8.jpg" alt="avatar-1" class="img-fluid rounded-full">
                    </div>
                  </div>
                </div>
                <!-- end task item -->
                <!-- start task item -->
                <div
                  class="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between border-l-4 border-l-success">
                  <div class="flex items-center gap-5 flex-wrap">
                    <span><i class="ti ti-grip-vertical"></i></span>
                    <div class="form-check form-check-md">
                      <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="set-star rating-select">
                      <i class="ti ti-star-filled text-[16]"></i>
                    </div>
                    <p class="text-[14] font-medium text-gray-900">Make all strokes thinner</p>
                    <div class="flex items-center gap-3">
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-success inline-flex items-center">
                        <i class="ti ti-mail mr-1"></i>Email
                      </p>
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success inline-flex items-center">
                        Completed</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-5 flex-wrap">
                    <p
                      class="px-1.5 py-0.5 rounded text-[12px] bg-primary-100 text-primary border-b border-primary inline-flex items-center">
                      Promotion</p>
                    <p class="flex items-center mb-0 "><i class="ti ti-calendar-exclamation mr-1"></i>23 Apr 2025</p>
                    <div class="w-6 h-6 rounded-full">
                      <img src="@/assets/img/users/avatar-9.jpg" alt="avatar-2" class="img-fluid rounded-full">
                    </div>
                  </div>
                </div>
                <!-- end task item -->
              </div>
            </div>
          </div>
          <hr class="my-5 border border-borderColor">

          <!-- date list -->
          <div class="task-wrap">
            <div data-accordion="collapse">
              <div id="accordion-heading-10">
                <button type="button"
                  class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-4"
                  data-accordion-target="#accordion-body-10" aria-expanded="true" aria-controls="accordion-body-10">
                  <span class="mb-0 text-[16px] text-dark font-bold flex items-center">23 Apr 2025</span><i
                    class="ti ti-chevron-down arrow-rotate me-2"></i>
                </button>
              </div>
              <div id="accordion-body-10" aria-labelledby="accordion-heading-10" data-accordion-body>
                <!-- start task item -->
                <div
                  class="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between border-l-4 border-l-success">
                  <div class="flex items-center gap-5 flex-wrap">
                    <span><i class="ti ti-grip-vertical"></i></span>
                    <div class="form-check form-check-md">
                      <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="set-star rating-select">
                      <i class="ti ti-star-filled text-[16]"></i>
                    </div>
                    <p class="text-[14] font-medium text-gray-900">Make all strokes thinner</p>
                    <div class="flex items-center gap-3">
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-info inline-flex items-center">
                        <i class="ti ti-user-share mr-1"></i>Meeting
                      </p>
                      <p
                        class="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success inline-flex items-center">
                        Completed</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-5 flex-wrap">
                    <p
                      class="px-1.5 py-0.5 rounded text-[12px] bg-danger-100 text-danger border-b border-danger inline-flex items-center">
                      Rejected</p>
                    <p
                      class="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success inline-flex items-center">
                      Collab</p>
                    <p class="flex items-center mb-0 "><i class="ti ti-calendar-exclamation mr-1"></i>23 Apr 2025</p>
                    <div class="w-6 h-6 rounded-full">
                      <img src="@/assets/img/users/avatar-10.jpg" alt="avatar-2" class="img-fluid rounded-full">
                    </div>
                  </div>
                </div>
                <!-- end task item -->
              </div>
            </div>
          </div>
          <!-- end  List -->
        </div>
      </div>
      <!-- end card -->
    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->

  <!-- Start Download Modal -->
  <div id="download_report"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Download Report</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="download_report">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-3">
              <div class="md:col-span-12">
                <div>
                  <label class="form-label">File Type<span class="text-danger ms-1">*</span></label>
                  <vue3-select v-model="selected" :options="FileSele" placeholder="Select" />
                </div>
              </div>
              <h5 class="my-2">Filters</h5>
              <div class="md:col-span-12">
                <div>
                  <label class="form-label">File Type<span class="text-danger ms-1">*</span></label>
                  <vue3-select v-model="selectedOne" :options="FileSeleOne" placeholder="Select" />
                </div>
              </div>
              <div class="md:col-span-12">
                <div>
                  <label class="form-label">Position <span class="text-danger ms-1">*</span></label>
                  <vue3-select v-model="selectedTwo" :options="PositionSel" placeholder="Select" />
                </div>
              </div>
              <div class="md:col-span-12">
                <div>
                  <label class="form-label">Source <span class="text-danger ms-1">*</span></label>
                  <vue3-select v-model="selectedThree" :options="SourceSel" placeholder="Select" />
                </div>
              </div>
              <div class="md:col-span-12">
                <div>
                  <label class="form-label">Select Year <span class="text-danger ms-1">*</span></label>
                  <vue3-select v-model="selectedFour" :options="YearSele" placeholder="Select" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="download_report" class="btn btn-sm btn-light">Cancel</button>
          <button type="button" class="btn btn-sm btn-primary">Download Now</button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Download Modal -->
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { taskYear, leadsAnalysis } from "./data";
export default {
  data() {
    return {
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
      taskYear: taskYear,
      leadsAnalysis: leadsAnalysis,
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
    };
  },
};
</script>
