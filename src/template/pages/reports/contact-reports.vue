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
            Contact Report
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Contact Reports</li>
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
              <h6 class="m-0">Contacts By Year</h6>
              <!-- Dropdown -->
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="contacts-by-year">
                  <i class="ti ti-calendar mr-1"></i>2025<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="contacts-by-year"
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
              <div id="contact-report">
                <apexchart
                  type="area"
                  height="400"
                  :options="contactReport.contact"
                  :series="contactReport.series"
                ></apexchart>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-5/12 flex mb-5">
          <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
            <div class="flex items-center justify-between gap-3 py-3 px-4 border-b border-borderColor">
              <h6 class="m-0">Contacts By Source</h6>
              <!-- Dropdown -->
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="contacts-by-source">
                  <i class="ti ti-calendar mr-1"></i>2025<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="contacts-by-source"
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
                <apexchart
                  type="donut"
                  :options="leadsAnalysis.leads"
                  :series="leadsAnalysis.series"
                ></apexchart>
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
            <input type="text" placeholder="Search" v-model="searchQuery"
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
                        <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Name</span>
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
                              <img src="@/assets/img/users/user-06.jpg" alt="Elizabeth" class="h-6 w-6 rounded-full">
                              <span>Elizabeth Morgan</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/users/user-40.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                              <span>Katherine Brooks</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/users/user-05.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                              <span>Sophia Lopez</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/users/user-10.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                              <span>John Michael</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/users/user-15.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                              <span>Natalie Brooks</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/users/user-01.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                              <span>William Turner</span>
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
                        <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Tags</span>
                      </button>
                    </h2>
                    <div id="accordion-body-2" class="hidden p-4 bg-light  border border-borderColor rounded"
                      aria-labelledby="accordion-heading-2" data-accordion-body>
                      <ul class="space-y-3 max-h-64 overflow-y-auto">
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                            Collab
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                            Promotion
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                            VIP
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="mb-4">
                    <h2 id="accordion-heading-3">
                      <button type="button"
                        class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                        data-accordion-target="#accordion-body-3" aria-expanded="true" aria-controls="accordion-body-3">
                        <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Owner</span>
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
                            Hendry Milner
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                            Guilory Berggren
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                            Jami Carlile
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                            Theresa Nelson
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                            Smith Cooper
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
                    <h2 id="accordion-heading-4">
                      <button type="button"
                        class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                        data-accordion-target="#accordion-body-4" aria-expanded="true" aria-controls="accordion-body-4">
                        <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Location</span>
                      </button>
                    </h2>
                    <div id="accordion-body-4" class="hidden p-4 bg-light  border border-borderColor rounded"
                      aria-labelledby="accordion-heading-4" data-accordion-body>
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
                              <img src="@/assets/img/flags/us.svg" alt="Elizabeth" class="h-6 w-6 rounded-full">
                              <span>USA</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/flags/ae.svg" alt="Elizabeth" class="h-6 w-6 rounded-full">
                              <span>UAE</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/flags/de.svg" alt="Elizabeth" class="h-6 w-6 rounded-full">
                              <span>Germany</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="flex items-center space-x-2">
                              <img src="@/assets/img/flags/fr.svg" alt="Elizabeth" class="h-6 w-6 rounded-full">
                              <span>France</span>
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
                    <h2 id="accordion-heading-5">
                      <button type="button"
                        class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                        data-accordion-target="#accordion-body-5" aria-expanded="true" aria-controls="accordion-body-5">
                        <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Rating</span>
                      </button>
                    </h2>
                    <div id="accordion-body-5" class="hidden p-4 bg-light  border border-borderColor rounded"
                      aria-labelledby="accordion-heading-5" data-accordion-body>
                      <ul class="space-y-3 max-h-64 overflow-y-auto">
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="rating">
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-warning"></i>
                              <span class="ms-1">5.0</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="rating">
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-default"></i>
                              <span class="ms-1">4.0</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="rating">
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-default"></i>
                              <i class="ti ti-star-filled text-default"></i>
                              <span class="ms-1">3.0</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="rating">
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-default"></i>
                              <i class="ti ti-star-filled text-default"></i>
                              <i class="ti ti-star-filled text-default"></i>
                              <span class="ms-1">2.0</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                            <span class="rating">
                              <i class="ti ti-star-filled text-warning"></i>
                              <i class="ti ti-star-filled text-default"></i>
                              <i class="ti ti-star-filled text-default"></i>
                              <i class="ti ti-star-filled text-default"></i>
                              <i class="ti ti-star-filled text-default"></i>
                              <span class="ms-1">1.0</span>
                            </span>
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
                      <span class="text-sm font-medium">Phone</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Tags</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Location</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Rating</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Contact</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- start tabel-list -->
          <div class="table-responsive custom-table">
            <div id="contact_reports_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
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
                      <template v-if="column.key === 'Name'">
                        <h6 class="flex items-center text-[14px] font-medium mb-0">
                          <router-link :to="`/crm/contact-details`"
                            class="avatar me-2">
                            <img :src="getImageUrl(record.Image)" class="img-fluid rounded-full" alt="Contact Image">
                          </router-link>
                          <router-link :to="`/crm/contact-details`" class="flex flex-col">{{ record.Name }}
                            <span class="text-default text-[13px] font-normal mt-1">{{ record.Role }}</span>
                          </router-link>
                        </h6>
                      </template>
                      <template v-if="column.key === 'Phone'">
                        {{ record.Phone }}
                      </template>
                      <template v-if="column.key === 'Tags'">
                        <span
                          :class="record.Tags === 'Collab' ? 'bg-success-100 text-success' : record.Tags === 'Promotion' ? 'bg-primary-100 text-primary' : 'bg-warning-100 text-warning'"
                          class="badge badge-tag px-1.5 py-0.5 rounded text-[12px] border-b">
                          {{ record.Tags }}
                        </span>
                      </template>
                      <template v-if="column.key === 'Location'">
                        <div class="flex items-center mb-0">
                          <router-link :to="`/crm/contact-details`" class="w-5 h-5 flex me-2">
                            <img :src="getImageUrlOne(record.FlagImage)" class="img-fluid rounded-full"
                              alt="Flag Image">
                          </router-link>
                          {{ record.Location }}
                        </div>
                      </template>
                      <template v-if="column.key === 'Rating'">
                        <div class="set-star">
                          <span><i class="ti ti-star-filled text-warning"></i> {{ record.Rating }}</span>
                        </div>
                      </template>
                      <template v-if="column.key === 'Contact'">
                        <ul class="social-links flex items-center">
                          <li><a href="javascript:void(0);"
                              class="w-7 h-7 rounded-full inline-flex items-center justify-center hover:bg-light text-gray-700">
                              <i class="ti ti-mail text-base"></i></a></li>
                          <li><a href="javascript:void(0);"
                              class="w-7 h-7 rounded-full inline-flex items-center justify-center hover:bg-light text-gray-700">
                              <i class="ti ti-phone-check text-base"></i></a></li>
                          <li><a href="javascript:void(0);"
                              class="w-7 h-7 rounded-full inline-flex items-center justify-center hover:bg-light text-gray-700">
                              <i class="ti ti-message-circle-share text-base"></i></a></li>
                          <li><a href="javascript:void(0);"
                              class="w-7 h-7 rounded-full inline-flex items-center justify-center hover:bg-light text-gray-700">
                              <i class="ti ti-brand-facebook text-base"></i></a></li>
                        </ul>
                      </template>
                      <template v-if="column.key === 'Status'">
                        <span :class="record.Status === 'Active' ? 'bg-success text-white' : 'bg-danger text-white'"
                          class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] inline-flex items-center">
                          {{ record.Status }}
                        </span>
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
            <div class="w-full sm:w-1/2">
              <div class="datatable-length"></div>
            </div>
            <div class="w-full sm:w-1/2 mt-4 md:mt-0 text-end">
              <div class="datatable-paginate"></div>
            </div>
          </div>
          <!-- end table List -->
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
const columns = [
  {
    title: "",
    dataIndex: "",
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
    title: "Phone",
    dataIndex: "Phone",
    key: "Phone",
    sorter: {
      compare: (a, b) => (a.Phone.toLowerCase() > b.Phone.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Tags",
    dataIndex: "Tags",
    key: "Tags",
    sorter: {
      compare: (a, b) => (a.Tags.toLowerCase() > b.Tags.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Location",
    dataIndex: "Location",
    key: "Location",
    sorter: {
      compare: (a, b) => (a.Location.toLowerCase() > b.Location.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Rating",
    dataIndex: "Rating",
    key: "Rating",
    sorter: {
      compare: (a, b) => (a.Rating.toLowerCase() > b.Rating.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Contact",
    dataIndex: "Contact",
    key: "Contact",
    sorter: {
      compare: (a, b) => (a.Contact.toLowerCase() > b.Contact.toLowerCase() ? -1 : 1),
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
];
const data = [
  {
    key: "1",
    Name: "Darlee Robertson",
    Role: "Facility Manager",
    Image: "avatar-19.jpg",
    Phone: "1234567890",
    Tags: "Collab",
    FlagImage: "us.svg",
    Location: "USA",
    Rating: "4.2",
    Status: "Active",
  },
  {
    key: "2",
    Name: "Sharon Roy",
    Role: "Installer",
    Image: "avatar-20.jpg",
    Phone: "+1 989757485",
    Tags: "Promotion",
    FlagImage: "ae.svg",
    Location: "UAE",
    Rating: "5",
    Status: "Inactive",
  },
  {
    key: "3",
    Name: "Vaughan Lewis Senior",
    Role: "Manager",
    Image: "avatar-21.jpg",
    Phone: "+1 546555455",
    Tags: "Collab",
    FlagImage: "de.svg",
    Location: "Germany",
    Rating: "3.5",
    Status: "Active",
  },
  {
    key: "4",
    Name: "Jessica Louise",
    Role: "Test Engineer",
    Image: "avatar-23.jpg",
    Phone: "+1 454478787",
    Tags: "VIP",
    FlagImage: "fr.svg",
    Location: "France",
    Rating: "4.5",
    Status: "Active",
  },
  {
    key: "5",
    Name: "Carol Thomas",
    Role: "UI /UX Designer",
    Image: "avatar-16.jpg",
    Phone: "+1 124547845",
    Tags: "Collab",
    FlagImage: "india.svg",
    Location: "India",
    Rating: "4.7",
    Status: "Active",
  },
  {
    key: "6",
    Name: "Dawn Mercha",
    Role: "Technician",
    Image: "avatar-22.jpg",
    Phone: "+1 478845447",
    Tags: "VIP",
    FlagImage: "brazil.svg",
    Location: "Brazil",
    Rating: "5",
    Status: "Active",
  },
  {
    key: "7",
    Name: "Rachel Hampton",
    Role: "Software Developer",
    Image: "avatar-24.jpg",
    Phone: "+1 215544845",
    Tags: "Promotion",
    FlagImage: "mexico.svg",
    Location: "Mexico",
    Rating: "3.1",
    Status: "Active",
  },
  {
    key: "8",
    Name: "Jonelle Curtiss",
    Role: "Supervisor",
    Image: "avatar-25.jpg",
    Phone: "+1 121145471",
    Tags: "VIP",
    FlagImage: "china.svg",
    Location: "China",
    Rating: "5",
    Status: "Active",
  },
  {
    key: "9",
    Name: "Jonathan Smith",
    Role: "Team Lead Dev",
    Image: "avatar-26.jpg",
    Phone: "+1 321454789",
    Tags: "Collab",
    FlagImage: "russia.svg",
    Location: "Russia",
    Rating: "2.7",
    Status: "Active",
  },
  {
    key: "10",
    Name: "Brook Carter",
    Role: "Team Lead Dev",
    Image: "avatar-01.jpg",
    Phone: "+1 278907145",
    Tags: "Promotion",
    FlagImage: "us.svg",
    Location: "France",
    Rating: "3",
    Status: "Active",
  },
];
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { leadsAnalysis, contactReport } from "./data";
import BasePagination from '@/components/BasePagination.vue';
export default {
  components: {
    BasePagination,
  },
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
      searchQuery: "",
      data,
      columns,
      rowSelection,
      leadsAnalysis: leadsAnalysis,
      contactReport: contactReport,
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
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
    },
    getImageUrlOne(imageName) {
      return new URL(`/src/assets/img/flags/${imageName}`, import.meta.url).href;
    },
    onPageChange(page) {
      this.currentPage = page;
    },
    onPageSizeChange(size) {
      this.pageSize = Number(size);
      this.currentPage = 1;
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
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.Name.toLowerCase().includes(query) ||
          record.Phone.toLowerCase().includes(query) ||
          record.Tags.toLowerCase().includes(query) ||
          record.Location.toLowerCase().includes(query) ||
          record.Rating.toLowerCase().includes(query) ||
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
