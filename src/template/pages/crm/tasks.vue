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
            Tasks
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">123</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Tasks</li>
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
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
            data-drawer-target="offcanvas_add" data-drawer-show="offcanvas_add" aria-controls="offcanvas_add"
            data-drawer-placement="right">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add New Task
          </a>
        </div>
        <div class="bg-white p-4">
          <div class="flex items-center justify-between flex-wrap gap-y-3 mb-5">

            <div class="flex items-center flex-wrap gap-y-3">
              <!-- Dropdown -->
              <div class="me-3">
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Task Name</span>
                        </button>
                      </h2>
                      <div id="accordion-body-1" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-1" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Add a form to Update Task
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Make all strokes thinner
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Update original content
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Use only component colours
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Add images to the cards section
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Add images to the cards section
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Task Type</span>
                        </button>
                      </h2>
                      <div id="accordion-body-2" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-2" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
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
                              Calls
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Task
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Email
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Tags</span>
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
                              Promotion
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Rated
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Rejected
                            </label>
                          </li>
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
                              Calls
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Created By</span>
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
                      <h2 id="accordion-heading-4">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-4" aria-expanded="true"
                          aria-controls="accordion-body-4">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Create Date</span>
                        </button>
                      </h2>
                      <div id="accordion-body-4" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-4" data-accordion-body>
                        <div class="input-group w-auto input-group-flat">
                          <a-date-picker v-model="value" class="form-control datetimepicker" placeholder="20/09/2025" />
                          <span class="input-group-text">
                            <i class="ti ti-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <a href="javascript:void(0);" class="btn border border-borderColor text-center w-full">Reset</a>
                      <a href="javascript:void(0);" class="btn btn-primary w-full">Filter</a>
                    </div>
                  </div>
                </div>
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
              <div class="form-check me-4">
                <input class="text-primary rounded border-borderColor me-1" type="checkbox" value=""
                  id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Mark all as read
                </label>
              </div>
              <!-- Dropdown -->
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
            </div>

          </div>
          <div data-accordion="collapse task-accordion">
            <div class="mb-4 border-b border-borderColor">
              <h2 id="task-accordion-heading-1">
                <button type="button"
                  class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                  data-accordion-target="#task-accordion-body-1" aria-expanded="true"
                  aria-controls="task-accordion-body-1">
                  <span class="text-dark flex items-center text-[16px]">Recent <span
                      class="w-8 h-8 rounded-full bg-light flex items-center justify-center text-[14px] text-dark bg-soft-dark rounded-circle ms-2 fw-medium">24</span></span>
                  <i class="ti ti-chevron-up arrow-rotate me-2"></i>
                </button>
              </h2>
              <div id="task-accordion-body-1" class="hidden" aria-labelledby="task-accordion-heading-1"
                data-accordion-body>
                <div class="rounded-none mb-5 border border-borderColor bg-white">
                  <div class="p-5 border-l-4 border-info">
                    <div class="flex flex-wrap items-center justify-between gap-y-3">
                      <div class="flex flex-wrap items-center gap-y-3">
                        <span class="me-3 text-gray-600">
                          <i class="ti ti-grip-vertical"></i>
                        </span>
                        <div class="form-check form-check-md me-3"><input
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"></div>
                        <div class="me-3 set-star rating-select">
                          <i class="ti ti-star-filled text-base"></i>
                        </div>
                        <h6 class="font-semibold text-sm mb-0 me-3">Add a form to Update Task</h6>
                        <span
                          class="bg-success-100 text-success text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                          <i class="ti ti-phone me-1"></i> Calls
                        </span>
                        <span
                          class="bg-info-100 text-info border-b border-info text-xs font-medium px-2.5 py-1 rounded">Pending</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-y-3">
                        <div class="me-2">
                          <span
                            class="bg-primary-100 text-primary border-b border-primary text-xs font-medium px-2.5 py-1 rounded">Promotion</span>
                        </div>
                        <div class="me-2 text-gray-600 text-sm flex items-center">
                          <i class="ti ti-calendar-exclamation me-1"></i>25 Apr 2025
                        </div>
                        <div class="w-6 h-6 me-2">
                          <img src="@/assets/img/profiles/avatar-14.jpg" alt="img"
                            class="rounded-full w-full h-full object-cover">
                        </div>
                        <div class="dropdown relative table-action" ref="el => dropdownRefs[0] = el">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(0, $event)"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div
                            class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                            :class="{ 'hidden': openDropdown !== 0 }">
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                              data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                              data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="rounded-none mb-5 border border-borderColor bg-white">
                  <div class="p-5 border-l-4 border-info">
                    <div class="flex flex-wrap items-center justify-between gap-y-3">
                      <div class="flex flex-wrap items-center gap-y-3">
                        <span class="me-3 text-gray-600">
                          <i class="ti ti-grip-vertical"></i>
                        </span>
                        <div class="form-check form-check-md me-3"><input
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"></div>
                        <div class="me-3 set-star rating-select">
                          <i class="ti ti-star-filled text-base"></i>
                        </div>
                        <h6 class="font-semibold text-sm mb-0 me-3">Make all strokes thinner</h6>
                        <span
                          class="bg-warning-100 text-warning text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                          <i class="ti ti-mail me-1"></i> Email
                        </span>
                        <span
                          class="bg-info-100 text-info border-b border-info text-xs font-medium px-2.5 py-1 rounded">Pending</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-y-3">
                        <div class="me-2">
                          <span
                            class="bg-danger-100 text-danger border-b border-danger text-xs font-medium px-2.5 py-1 rounded">Rejected</span>
                        </div>
                        <div class="me-2">
                          <span
                            class="bg-success-100 text-success border-b border-success text-xs font-medium px-2.5 py-1 rounded">Collab</span>
                        </div>
                        <div class="me-2 text-gray-600 text-sm flex items-center">
                          <i class="ti ti-calendar-exclamation me-1"></i>25 Apr 2025
                        </div>
                        <div class="w-6 h-6 me-2">
                          <img src="@/assets/img/profiles/avatar-15.jpg" alt="img"
                            class="rounded-full w-full h-full object-cover">
                        </div>
                        <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(1, $event)"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div
                            class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                            :class="{ 'hidden': openDropdown !== 1 }">
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                              data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                              data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="rounded-none mb-5 border border-borderColor bg-white">
                  <div class="p-5 border-l-4 border-warning">
                    <div class="flex flex-wrap items-center justify-between gap-y-3">
                      <div class="flex flex-wrap items-center gap-y-3">
                        <span class="me-3 text-gray-600">
                          <i class="ti ti-grip-vertical"></i>
                        </span>
                        <div class="form-check form-check-md me-3"><input
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"></div>
                        <div class="me-3 set-star rating-select">
                          <i class="ti ti-star-filled text-base"></i>
                        </div>
                        <h6 class="font-semibold text-sm mb-0 me-3">Update original content</h6>
                        <span
                          class="bg-success-100 text-success text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                          <i class="ti ti-phone me-1"></i> Calls
                        </span>
                        <span
                          class="bg-warning-100 text-warning border-b border-warning text-xs font-medium px-2.5 py-1 rounded">Inprogress</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-y-3">
                        <div class="me-2">
                          <span
                            class="bg-primary-100 text-primary border-b border-primary text-xs font-medium px-2.5 py-1 rounded">Promotion</span>
                        </div>
                        <div class="me-2 text-gray-600 text-sm flex items-center">
                          <i class="ti ti-calendar-exclamation me-1"></i>25 Apr 2025
                        </div>
                        <div class="w-6 h-6 me-2">
                          <img src="@/assets/img/profiles/avatar-16.jpg" alt="img"
                            class="rounded-full w-full h-full object-cover">
                        </div>
                        <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(2, $event)"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div
                            class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                            :class="{ 'hidden': openDropdown !== 2 }">
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                              data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                              data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="rounded-none mb-5 border border-borderColor bg-white">
                  <div class="p-5 border-l-4 border-warning">
                    <div class="flex flex-wrap items-center justify-between gap-y-3">
                      <div class="flex flex-wrap items-center gap-y-3">
                        <span class="me-3 text-gray-600">
                          <i class="ti ti-grip-vertical"></i>
                        </span>
                        <div class="form-check form-check-md me-3"><input
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"></div>
                        <div class="me-3 set-star rating-select">
                          <i class="ti ti-star-filled text-base"></i>
                        </div>
                        <h6 class="font-semibold text-sm mb-0 me-3">Use only component colours</h6>
                        <span
                          class="bg-info-100 text-info text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                          <i class="ti ti-subtask me-1"></i> Task
                        </span>
                        <span
                          class="bg-warning-100 text-warning border-b border-warning text-xs font-medium px-2.5 py-1 rounded">Inprogress</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-y-3">
                        <div class="me-2">
                          <span
                            class="bg-success-100 text-success border-b border-success text-xs font-medium px-2.5 py-1 rounded">Collab</span>
                        </div>
                        <div class="me-2">
                          <span
                            class="bg-warning-100 text-warning border-b border-warning text-xs font-medium px-2.5 py-1 rounded">Rated</span>
                        </div>
                        <div class="me-2 text-gray-600 text-sm flex items-center">
                          <i class="ti ti-calendar-exclamation me-1"></i>25 Apr 2025
                        </div>
                        <div class="w-6 h-6 me-2">
                          <img src="@/assets/img/profiles/avatar-17.jpg" alt="img"
                            class="rounded-full w-full h-full object-cover">
                        </div>
                        <div class="dropdown relative table-action" ref="el => dropdownRefs[3] = el">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(3, $event)"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div
                            class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                            :class="{ 'hidden': openDropdown !== 3 }">
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                              data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                              data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-4 border-b border-borderColor">
              <h2 id="task-accordion-heading-2">
                <button type="button"
                  class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                  data-accordion-target="#task-accordion-body-2" aria-expanded="true"
                  aria-controls="task-accordion-body-2">
                  <span class="text-dark text-[16px]">Yesterday</span>
                  <i class="ti ti-chevron-up arrow-rotate me-2"></i>
                </button>
              </h2>
              <div id="task-accordion-body-2" class="hidden" aria-labelledby="task-accordion-heading-2"
                data-accordion-body>
                <div class="rounded-none mb-5 border border-borderColor bg-white">
                  <div class="p-5 border-l-4 border-warning">
                    <div class="flex flex-wrap items-center justify-between gap-y-3">
                      <div class="flex flex-wrap items-center gap-y-3">
                        <span class="me-3 text-gray-600">
                          <i class="ti ti-grip-vertical"></i>
                        </span>
                        <div class="form-check form-check-md me-3"><input
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"></div>
                        <div class="me-3 set-star rating-select">
                          <i class="ti ti-star-filled text-base"></i>
                        </div>
                        <h6 class="font-semibold text-sm mb-0 me-3">Add images to the cards section</h6>
                        <span
                          class="bg-success-100 text-success text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                          <i class="ti ti-phone me-1"></i> Calls
                        </span>
                        <span
                          class="bg-warning-100 text-warning border-b border-warning text-xs font-medium px-2.5 py-1 rounded">Inprogress</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-y-3">
                        <div class="me-2">
                          <span
                            class="bg-primary-100 text-primary border-b border-primary text-xs font-medium px-2.5 py-1 rounded">Promotion</span>
                        </div>
                        <div class="me-2 text-gray-600 text-sm flex items-center">
                          <i class="ti ti-calendar-exclamation me-1"></i>24 Apr 2025
                        </div>
                        <div class="w-6 h-6 me-2">
                          <img src="@/assets/img/profiles/avatar-18.jpg" alt="img"
                            class="rounded-full w-full h-full object-cover">
                        </div>
                        <div class="dropdown relative table-action" ref="el => dropdownRefs[4] = el">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(4, $event)"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div
                            class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                            :class="{ 'hidden': openDropdown !== 4 }">
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                              data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                              data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="rounded-none mb-5 border border-borderColor bg-white">
                  <div class="p-5 border-l-4 border-danger">
                    <div class="flex flex-wrap items-center justify-between gap-y-3">
                      <div class="flex flex-wrap items-center gap-y-3">
                        <span class="me-3 text-gray-600">
                          <i class="ti ti-grip-vertical"></i>
                        </span>
                        <div class="form-check form-check-md me-3"><input
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"></div>
                        <div class="me-3 set-star rating-select">
                          <i class="ti ti-star-filled text-base"></i>
                        </div>
                        <h6 class="font-semibold text-sm mb-0 me-3">Add images to the cards section</h6>
                        <span
                          class="bg-success-100 text-success text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                          <i class="ti ti-phone me-1"></i> Calls
                        </span>
                        <span
                          class="bg-danger-100 text-danger border-b border-danger text-xs font-medium px-2.5 py-1 rounded">Rejected</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-y-3">
                        <div class="me-2">
                          <span
                            class="bg-primary-100 text-primary border-b border-primary text-xs font-medium px-2.5 py-1 rounded">Promotion</span>
                        </div>
                        <div class="me-2 text-gray-600 text-sm flex items-center">
                          <i class="ti ti-calendar-exclamation me-1"></i>25 Apr 2025
                        </div>
                        <div class="w-6 h-6 me-2">
                          <img src="@/assets/img/profiles/avatar-19.jpg" alt="img"
                            class="rounded-full w-full h-full object-cover">
                        </div>
                        <div class="dropdown relative table-action" ref="el => dropdownRefs[5] = el">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(5, $event)"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div
                            class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                            :class="{ 'hidden': openDropdown !== 5 }">
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                              data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                              data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-4 border-b border-borderColor">
              <h2 id="task-accordion-heading-3">
                <button type="button"
                  class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                  data-accordion-target="#task-accordion-body-3" aria-expanded="true"
                  aria-controls="task-accordion-body-3">
                  <span class="text-dark text-[16px]">23 Apr 2025</span>
                  <i class="ti ti-chevron-up arrow-rotate me-2"></i>
                </button>
              </h2>
              <div id="task-accordion-body-3" class="hidden" aria-labelledby="task-accordion-heading-3"
                data-accordion-body>
                <div class="rounded-none mb-5 border border-borderColor bg-white">
                  <div class="p-5 border-l-4 border-warning">
                    <div class="flex flex-wrap items-center justify-between gap-y-3">
                      <div class="flex flex-wrap items-center gap-y-3">
                        <span class="me-3 text-gray-600">
                          <i class="ti ti-grip-vertical"></i>
                        </span>
                        <div class="form-check form-check-md me-3"><input
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"></div>
                        <div class="me-3 set-star rating-select">
                          <i class="ti ti-star-filled text-base"></i>
                        </div>
                        <h6 class="font-semibold text-sm mb-0 me-3">Design description banner & landing page</h6>
                        <span
                          class="bg-info-100 text-info text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                          <i class="ti ti-subtask me-1"></i> Task
                        </span>
                        <span
                          class="bg-warning-100 text-warning border-b border-warning text-xs font-medium px-2.5 py-1 rounded">Inprogress</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-y-3">
                        <div class="me-2">
                          <span
                            class="bg-success-100 text-success border-b border-success text-xs font-medium px-2.5 py-1 rounded">Collab</span>
                        </div>
                        <div class="me-2">
                          <span
                            class="bg-warning-100 text-warning border-b border-warning text-xs font-medium px-2.5 py-1 rounded">Rated</span>
                        </div>
                        <div class="me-2 text-gray-600 text-sm flex items-center">
                          <i class="ti ti-calendar-exclamation me-1"></i>23 Apr 2025
                        </div>
                        <div class="w-6 h-6 me-2">
                          <img src="@/assets/img/profiles/avatar-20.jpg" alt="img"
                            class="rounded-full w-full h-full object-cover">
                        </div>
                        <div class="dropdown relative table-action" ref="el => dropdownRefs[6] = el">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(6, $event)"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div
                            class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                            :class="{ 'hidden': openDropdown !== 6 }" ><a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                              data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                              data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="rounded-none mb-5 border border-borderColor bg-white">
                  <div class="p-5 border-l-4 border-success">
                    <div class="flex flex-wrap items-center justify-between gap-y-3">
                      <div class="flex flex-wrap items-center gap-y-3">
                        <span class="me-3 text-gray-600">
                          <i class="ti ti-grip-vertical"></i>
                        </span>
                        <div class="form-check form-check-md me-3"><input
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"></div>
                        <div class="me-3 set-star rating-select">
                          <i class="ti ti-star-filled text-base"></i>
                        </div>
                        <h6 class="font-semibold text-sm mb-0 line-through me-3">Make all strokes thinner</h6>
                        <span
                          class="bg-warning-100 text-warning text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                          <i class="ti ti-mail me-1"></i> Email
                        </span>
                        <span
                          class="bg-success-100 text-success border-b border-success text-xs font-medium px-2.5 py-1 rounded">Completed</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-y-3">
                        <div class="me-2">
                          <span
                            class="bg-primary-100 text-primary border-b border-primary text-xs font-medium px-2.5 py-1 rounded">Promotion</span>
                        </div>
                        <div class="me-2 text-gray-600 text-sm flex items-center">
                          <i class="ti ti-calendar-exclamation me-1"></i>25 Apr 2025
                        </div>
                        <div class="w-6 h-6 me-2">
                          <img src="@/assets/img/profiles/avatar-19.jpg" alt="img"
                            class="rounded-full w-full h-full object-cover">
                        </div>
                        <div class="dropdown relative table-action" ref="el => dropdownRefs[7] = el">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(7, $event)"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div
                            class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                            :class="{ 'hidden': openDropdown !== 7 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                              data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                              data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-4 border-b border-borderColor">
              <h2 id="task-accordion-heading-4">
                <button type="button"
                  class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                  data-accordion-target="#task-accordion-body-4" aria-expanded="true"
                  aria-controls="task-accordion-body-4">
                  <span class="text-dark text-[16px]">22 Apr 2025</span>
                  <i class="ti ti-chevron-up arrow-rotate me-2"></i>
                </button>
              </h2>
              <div id="task-accordion-body-4" class="hidden" aria-labelledby="task-accordion-heading-4"
                data-accordion-body>
                <div class="rounded-none mb-5 border border-borderColor bg-white">
                  <div class="p-5 border-l-4 border-success">
                    <div class="flex flex-wrap items-center justify-between gap-y-3">
                      <div class="flex flex-wrap items-center gap-y-3">
                        <span class="me-3 text-gray-600">
                          <i class="ti ti-grip-vertical"></i>
                        </span>
                        <div class="form-check form-check-md me-3"><input
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"></div>
                        <div class="me-3 set-star rating-select">
                          <i class="ti ti-star-filled text-base"></i>
                        </div>
                        <h6 class="font-semibold text-sm mb-0 line-through me-3">Make all strokes thinner</h6>
                        <span
                          class="bg-info-100 text-info text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                          <i class="ti ti-user-share me-1"></i> Meeting
                        </span>
                        <span
                          class="bg-success-100 text-success border-b border-success text-xs font-medium px-2.5 py-1 rounded">Completed</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-y-3">
                        <div class="me-2">
                          <span
                            class="bg-danger-100 text-danger border-b border-danger text-xs font-medium px-2.5 py-1 rounded">Rejected</span>
                        </div>
                        <div class="me-2">
                          <span
                            class="bg-success-100 text-success border-b border-success text-xs font-medium px-2.5 py-1 rounded">Collab</span>
                        </div>
                        <div class="me-2 text-gray-600 text-sm flex items-center">
                          <i class="ti ti-calendar-exclamation me-1"></i>22 Apr 2025
                        </div>
                        <div class="w-6 h-6 me-2">
                          <img src="@/assets/img/profiles/avatar-21.jpg" alt="img"
                            class="rounded-full w-full h-full object-cover">
                        </div>
                        <div class="dropdown relative table-action" ref="el => dropdownRefs[8] = el">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(8, $event)"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div
                            class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                            :class="{ 'hidden': openDropdown !== 8 }">
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                              data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                              data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
  <!-- Add Project -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Task</h5>
      <button type="button" data-drawer-hide="offcanvas_add" aria-controls="offcanvas_add"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Title <span class="text-danger">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Category </label>
              <vue3-select v-model="selected" :options="CategorySele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Responsible Persons <span class="text-danger">*</span></label>
              <vue3-select v-model="selectOne" :options="Responsible" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Start Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="20/09/2025" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Due Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueTwo" class="form-control datetimepicker" placeholder="20/09/2025" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Tags</label>
              <vue3-tags-input class="input-tags form-control border-0 h-100" type="text" id="inputBox2"
                data-role="tagsinput" name="specialist" value="Tag1" :tags="tagsOne" />
              <span class="fs-13 mt-2">Enter value separated by comma</span>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Priority <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedTwo" :options="PrioritySele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedThree" :options="StatusSele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description </label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button type="button" data-drawer-hide="offcanvas_add" class="btn btn-light me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Add Project -->

  <!-- Edit Project -->
  <div id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Edit Task</h5>
      <button type="button" data-drawer-hide="offcanvas_edit" aria-controls="offcanvas_edit"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Title <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="Add images to the cards section">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Category </label>
              <vue3-select v-model="selectedFour" :options="CategorySeleOne" placeholder="Calls" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Responsible Persons <span class="text-danger">*</span></label>
              <vue3-select v-model="selectTwo" :options="ResponsibleOne" placeholder="Calls" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Start Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueFour" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Due Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueFive" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Tags</label>
              <vue3-tags-input class="input-tags form-control border-0 h-100" type="text" id="inputBox2"
                data-role="tagsinput" name="specialist" value="Tag1" :tags="tagsOne" />
              <span class="fs-13 mt-2">Enter value separated by comma</span>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Priority <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedFive" :options="PrioritySeleOne" placeholder="High" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedSix" :options="StatusSeleOne" placeholder="Active" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description </label>
              <textarea class="form-control"
                rows="3">Coordinate a product demo session with the client to walk them through key CRM features</textarea>
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
  <!-- /Edit Project -->

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
          <p class="mb-3">Are you sure you want to remove task you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full" data-modal-hide="delete_modal">Yes,
              Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted, onUnmounted, ref } from 'vue';
import moment from "moment";
import DateRangePicker from "daterangepicker";
const value = ref();
const valueOne = ref();
const ValueTwo = ref();
const valueThree = ref();
const valueFour = ref();
const valueFive = ref();
import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      tagsOne: ["Collab", "VIP"],
      value,
      valueOne,
      ValueTwo,
      valueThree,
      valueFour,
      valueFive,
      selectOne: [],
      selectTwo: [],
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      StatusSele: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      PrioritySele: [
        { label: "Select", value: "Select" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
        { label: "Medium", value: "Medium" },
      ],
      CategorySele: [
        { label: "Select", value: "Select" },
        { label: "Calls", value: "Calls" },
        { label: "Email", value: "Email" },
        { label: "Meeting", value: "Meeting" },
      ],
      StatusSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      PrioritySeleOne: [
        { label: "Select", value: "Select" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
        { label: "Medium", value: "Medium" },
      ],
      CategorySeleOne: [
        { label: "Select", value: "Select" },
        { label: "Calls", value: "Calls" },
        { label: "Email", value: "Email" },
        { label: "Meeting", value: "Meeting" },
      ],
      ResponsibleOne: [
        { label: "Darlee Robertson", label: "Darlee Robertson" },
        { label: "Sharon Roy", label: "Sharon Roy" },
        { label: "Vaughan Lewis", label: "Vaughan Lewis" },
        { label: "Jessica Louise", label: "Jessica Louise" },
        { label: "Carol Thomas", label: "Carol Thomas" },
      ],
      Responsible: [
        { label: "Darlee Robertson", label: "Darlee Robertson" },
        { label: "Sharon Roy", label: "Sharon Roy" },
        { label: "Vaughan Lewis", label: "Vaughan Lewis" },
        { label: "Jessica Louise", label: "Jessica Louise" },
        { label: "Carol Thomas", label: "Carol Thomas" },
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
};
</script>
