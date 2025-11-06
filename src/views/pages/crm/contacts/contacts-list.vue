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
            Contacts
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Contacts</li>
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
            Add Contacts
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
                    <button data-dropdown-hide="filter-dropdown"
                      class="text-dark filter-close w-6 h-6 border border-borderColor rounded-full focus:outline-none"
                      @click="closeFilterDropdown"><i
                        class="ti ti-x"></i></button>
                  </div>
                  <div id="accordionExample" data-accordion="collapse" class="p-4">
                    <div class="mb-4">
                      <h2 id="accordion-heading-1">
                        <button type="button"
                          class="flex items-center justify-between w-full text-dark text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-1" aria-expanded="true"
                          aria-controls="accordion-body-1">
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
                            class="pl-9 pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none placeholder:text-sm">
                        </div>

                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-06.jpg" alt="Elizabeth" class="h-6 w-6 rounded-full">
                                <span>Elizabeth Morgan</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-40.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                                <span>Katherine Brooks</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-05.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                                <span>Sophia Lopez</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-10.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                                <span>John Michael</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-15.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                                <span>Natalie Brooks</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary">
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
                          data-accordion-target="#accordion-body-2" aria-expanded="true"
                          aria-controls="accordion-body-2">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Tags</span>
                        </button>
                      </h2>
                      <div id="accordion-body-2" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-2" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
                              Collab
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
                              Promotion
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
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
                          data-accordion-target="#accordion-body-3" aria-expanded="true"
                          aria-controls="accordion-body-3">
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
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
                              Hendry Milner
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
                              Guilory Berggren
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
                              Jami Carlile
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
                              Theresa Nelson
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
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
                          data-accordion-target="#accordion-body-4" aria-expanded="true"
                          aria-controls="accordion-body-4">
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
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/flags/us.svg" alt="Elizabeth" class="h-6 w-6 rounded-full">
                                <span>USA</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/flags/ae.svg" alt="Elizabeth" class="h-6 w-6 rounded-full">
                                <span>UAE</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/flags/de.svg" alt="Elizabeth" class="h-6 w-6 rounded-full">
                                <span>Germany</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
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
                          data-accordion-target="#accordion-body-5" aria-expanded="true"
                          aria-controls="accordion-body-5">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Rating</span>
                        </button>
                      </h2>
                      <div id="accordion-body-5" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-5" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
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
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
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
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
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
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
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
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
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
                          data-accordion-target="#accordion-body-6" aria-expanded="true"
                          aria-controls="accordion-body-6">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Status</span>
                        </button>
                      </h2>
                      <div id="accordion-body-6" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-6" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
                              Active
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary me-2">
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
                <router-link to="/crm/contacts-list"
                  class="w-7 h-7 flex items-center justify-center rounded text-white bg-teal me-1"><i
                    class="ti ti-list-tree"></i></router-link>
                <router-link to="/crm/contacts-grid"
                  class="w-7 h-7 flex items-center justify-center rounded   text-default"><i
                    class="ti ti-layout-grid"></i></router-link>
              </div>
            </div>

          </div>
          <!-- Contact List -->
          <div class="table-responsive custom-table">
            <div id="contactslist_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start "></div>
                <div class="col-start-2 justify-self-end "></div>
              </div>
              <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="col-span-2 table-responsive">
                  <a-table class="table table-nowrap border border-borderColor dataTable min-w-full text-sm align-middle whitespace-nowrap" :columns="columns" :data-source="paginatedData"
                      :row-selection="rowSelection" :pagination="false">
                      <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'Star'">
                          <div class="set-star rating-select">
                            <i class="ti ti-star-filled fs-16"></i>
                          </div>
                        </template>
                        <template v-if="column.key === 'Name'">
                          <h6 class="flex items-center text-[14px] font-medium mb-0">
                            <router-link :to="'/crm/contact-details'" class="w-10 h-10 rounded-full me-2">
                              <img class="img-fluid rounded-full" :src="getImageUrl(record.Image)" alt="User Image">
                            </router-link>
                            <router-link :to="'/crm/contact-details'" class="flex flex-col">
                              {{ record.Name }}
                              <span class="text-default text-[13px] font-normal mt-1">{{ record.Role }}</span>
                            </router-link>
                          </h6>
                        </template>
                        <template v-if="column.key === 'Phone'">
                          {{ record.Phone }}
                        </template>
                        <template v-if="column.key === 'Tags'">
                          <span
                            class="badge badge-tag px-1.5 py-0.5 rounded text-[12px]"
                            :class="{
                              'bg-primary-100 text-primary border-primary': record.Tags === 'Promotion',
                              'bg-warning-100 text-warning border-warning': record.Tags === 'VIP',
                              'bg-info-100 text-info border-info': record.Tags === 'Premium',
                              'bg-success-100 text-success border-success': record.Tags !== 'Promotion' && record.Tags !== 'VIP' && record.Tags !== 'Premium'
                            }"
                            >{{
                              record.Tags }}</span>
                        </template>
                        <template v-if="column.key === 'Location'">
                          <div class="flex items-center mb-0">
                            <router-link :to="'/crm/contact-details'" class="w-5 h-5 rounded-full me-2">
                              <img class="img-fluid rounded-full" :src="getImageUrlOne(record.Flags)" alt="User Image">
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
                                class="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"><i
                                  class="ti ti-mail"></i></a></li>
                            <li><a href="javascript:void(0);"
                                class="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"><i
                                  class="ti ti-phone-check"></i></a></li>
                            <li><a href="javascript:void(0);"
                                class="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"><i
                                  class="ti ti-message-circle-share"></i></a></li>
                            <li><a href="javascript:void(0);"
                                class="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"><i
                                  class="ti ti-brand-facebook"></i></a></li>
                          </ul>
                        </template>
                        <template v-if="column.key === 'Status'">
                          <span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex"
                            :class="{
                              'bg-success': record.Status === 'Active',
                              'bg-danger': record.Status === 'Inactive',
                              'bg-warning': record.Status === 'pending'
                            }"
                          >
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
                              <router-link
                                class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                to="/crm/contact-details">
                                <i class="ti ti-eye text-blue-light me-1"></i> Preview
                              </router-link>
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

          <!-- /Contact List -->
        </div>
      </div>
    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->

  <contacts-modal></contacts-modal>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
const data = [
  {
    id: "1",
    Name: "Darlee Robertson",
    Role: "Facility Manager",
    Phone: "1234567890",
    Tags: "Collab",
    Location: "USA",
    Rating: "4.2",
    Image: "avatar-19.jpg",
    Flags: "us.svg",
    Status: "Active",
  },
  {
    id: "2",
    Name: "Sharon Roy",
    Role: "Installer",
    Phone: "+1 989757485",
    Tags: "Promotion",
    Location: "UAE",
    Rating: "5",
    Image: "avatar-20.jpg",
    Flags: "ae.svg",
    Status: "Inactive",
  },
  {
    id: "3",
    Name: "Vaughan Lewis",
    Role: "Senior Manager",
    Phone: "+1 546555455",
    Tags: "Collab",
    Location: "Germany",
    Rating: "3.5",
    Image: "avatar-21.jpg",
    Flags: "de.svg",
    Status: "Active",
  },
  {
    id: "4",
    Name: "Jessica Louise",
    Role: "Test Engineer",
    Phone: "+1 454478787",
    Tags: "VIP",
    Location: "France",
    Rating: "4.5",
    Image: "avatar-23.jpg",
    Flags: "fr.svg",
    Status: "Active",
  },
  {
    id: "5",
    Name: "Carol Thomas",
    Role: "UI /UX Designer",
    Phone: "+1 124547845",
    Tags: "Collab",
    Location: "India",
    Rating: "4.7",
    Image: "avatar-16.jpg",
    Flags: "india.svg",
    Status: "Active",
  },
  {
    id: "6",
    Name: "Dawn Mercha",
    Role: "Technician",
    Phone: "+1 478845447",
    Tags: "VIP",
    Location: "Brazil",
    Rating: "5",
    Image: "avatar-22.jpg",
    Flags: "brazil.svg",
    Status: "Active",
  },
  {
    id: "7",
    Name: "Rachel Hampton",
    Role: "Software Developer",
    Phone: "+1 215544845",
    Tags: "Promotion",
    Location: "Mexico",
    Rating: "3.1",
    Image: "avatar-24.jpg",
    Flags: "mexico.svg",
    Status: "Active",
  },
  {
    id: "8",
    Name: "Jonelle Curtiss",
    Role: "Supervisor",
    Phone: "+1 121145471",
    Tags: "VIP",
    Location: "China",
    Rating: "5",
    Image: "avatar-25.jpg",
    Flags: "china.svg",
    Status: "Active",
  },
  {
    id: "9",
    Name: "Jonathan Smith",
    Role: "Team Lead Dev",
    Phone: "+1 321454789",
    Tags: "Collab",
    Location: "Russia",
    Rating: "2.7",
    Image: "avatar-26.jpg",
    Flags: "russia.svg",
    Status: "Active",
  },
  {
    id: "10",
    Name: "Brook Carter",
    Role: "Team Lead Dev",
    Phone: "+1 278907145",
    Tags: "Promotion",
    Location: "France",
    Rating: "3",
    Image: "avatar-01.jpg",
    Flags: "fr.svg",
    Status: "Active",
  },
  {
    id: "11",
    Name: "Eric Adams",
    Role: "HR Manager",
    Phone: "+1 19023-78104",
    Tags: "Premium",
    Location: "Italy",
    Rating: "3.0",
    Image: "avatar-06.jpg",
    Flags: "italy.svg",
    Status: "Active",
  },
  {
    id: "12",
    Name: "Richard Cooper",
    Role: "Devops Engineer",
    Phone: "+1 18902-63904",
    Tags: "VIP",
    Location: "Canada",
    Rating: "3.0",
    Image: "avatar-05.jpg",
    Flags: "canada.svg",
    Status: "Active",
  },
];

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
    title: "Phone",
    dataIndex: "Phone",
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
  {
    title: "Action",
    key: "action",
    sorter: false,
  },
];

const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { initFlowbite } from 'flowbite';
import { onMounted, onUnmounted, ref } from 'vue';
export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      searchQuery: "",
      data,
      columns,
      rowSelection,
      currentPage: 1,
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 50],
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
  methods: {
    handleTableChange() {
      // Optional: implement sorting/filtering if needed, or leave empty to suppress warning
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
    closeFilterDropdown() {
      const dropdown = document.getElementById('filter-dropdown');
      if (dropdown) {
        dropdown.classList.add('hidden');
      }
    },
  },
  mounted() {
    const dateRangeInput = this.$refs.dateRangeInput;
    if (dateRangeInput) {
      const start = moment().subtract(6, "days");
      const end = moment();
      function booking_range(start, end) {
        return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
      }
      new DateRangePicker(
        dateRangeInput,
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
  },
  setup() {
    const openDropdown = ref(null);

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

    onMounted(() => {
      initFlowbite();
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      openDropdown,
      toggleDropdown,
      closeAllDropdowns
    };
  }
};
</script>
