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
            Manage Users
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">152</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Manage Users</li>
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
            Add User
          </a>
        </div>
        <div class="bg-white p-4 pb-0">
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
              <div
                class="daterangepick shadow flex items-center w-auto px-3 py-2 border border-borderColor rounded-md bg-white"
                ref="dateRangeInput">
                <i class="ti ti-calendar text-gray-900 mr-2"></i>
                <span class="reportrange-picker-field text-gray-900">23 May 2025 - 30 May 2025</span>
              </div>
            </div>
            <div class="flex items-center flex-wrap gap-y-3">
              <div class="me-3">
                <button
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="filter-dropdown">
                  <i class="ti ti-filter me-1"></i>Filter<i class="ti ti-chevron-down ml-1"></i>
                </button>
                <div id="filter-dropdown"
                  class="hidden border z-[1] border-borderColor rounded bg-white shadow-lg min-w-[320px] left-0">
                  <div class="filter-header flex items-center justify-between border-b border-borderColor p-3">
                    <h6 class="mb-0"><i class="ti ti-filter me-1"></i>Filter</h6>
                    <button data-dropdown-hide="filter-dropdown"
                    @click="closeFilterDropdown"
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
                                <img src="@/assets/img/users/user-06.jpg" alt="user-06" class="h-6 w-6 rounded-full">
                                <span>Elizabeth Morgan</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-40.jpg" alt="user-40" class="h-6 w-6 rounded-full">
                                <span>Katherine Brooks</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-05.jpg" alt="user-05" class="h-6 w-6 rounded-full">
                                <span>Sophia Lopez</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-10.jpg" alt="user-10" class="h-6 w-6 rounded-full">
                                <span>John Michael</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-15.jpg" alt="user-15" class="h-6 w-6 rounded-full">
                                <span>Natalie Brooks</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-01.jpg" alt="user-01" class="h-6 w-6 rounded-full">
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Phone</span>
                        </button>
                      </h2>
                      <div id="accordion-body-2" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-2" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              +1 87545 54503
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              +1 98975 17485
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              +1 54655 25455
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Email</span>
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
                              elizabeth@example.com
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              katherine@example.com
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              samantha@example.com
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
                      <span class="text-sm font-medium ">Name</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium ">Phone</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium ">Email</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium ">Created</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium ">Last Activity</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium ">Status</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-0 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium ">Action</span>
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
            <div id="manage-users-list_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
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
                        <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                      </template>
                      <template v-if="column.key === 'Name'">
                        <h6 class="flex items-center text-[14px] font-medium mb-0">
                          <router-link to="/crm/contact-details" class="w-10 h-10 rounded-full me-2">
                            <img class="img-fluid rounded-full" :src="getImageUrl(record.Image)" alt="User Image">
                          </router-link>
                          <router-link to="/crm/contact-details" class="flex flex-col">
                            {{ record.Name }}
                            <span class="text-default text-[13px] font-normal mt-1">{{ record.Role }}</span>
                          </router-link>
                        </h6>
                      </template>
                      <template v-if="column.key === 'Phone'">
                        {{ record.Phone }}
                      </template>
                      <template v-if="column.key === 'Email'">
                        {{ record.Email }}
                      </template>
                      <template v-if="column.key === 'Created'">
                        {{ record.Created }}
                      </template>
                      <template v-if="column.key === 'LastActivity'">
                        {{ record.LastActivity }}
                      </template>
                      <template v-if="column.key === 'Status'">
                        <span :class="record.Status === 'Active' ? 'bg-success text-white' : 'bg-danger text-white'"
                          class="px-1.5 py-0.5 rounded text-[12px]">
                          {{ record.Status }}
                        </span>
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
                            :class="{ 'hidden': openDropdown !== record.key, 'block': openDropdown === record.key }">
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                              data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                              data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
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
          <div class="flex flex-col md:flex-row items-center justify-between hidden">
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

  <!-- Add canvas -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New User</h5>
      <button type="button" data-drawer-hide="offcanvas_add" aria-controls="offcanvas_add"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 p-5 border border-borderColor rounded mb-5">
          <div class="md:col-span-12">
            <div class="flex items-center mb-3">
              <div
                class="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                <div class="relative flex items-center justify-center">
                  <i class="ti ti-photo text-dark fs-16"></i>
                </div>
              </div>
              <div class="inline-flex flex-col items-start">
                <div class="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                  <i class="ti ti-file-broken me-1"></i>Upload file
                  <input type="file" class="opacity-0 absolute start-0 top-0" multiple="">
                </div>
                <span>JPG, GIF or PNG. Max size of 800K</span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">User Name<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <div class="flex justify-between">
                <label class="form-label">Email <span class="text-danger">*</span></label>
                <label class="flex items-center gap-2 mb-1 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer">
                  <span class="ms-1 text-gray-900">Email Opt Out</span>
                  <span
                    class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                </label>
              </div>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Role<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Phone 1</label>
              <input type="text" class="form-control phone" name="phone">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Phone 2</label>
              <input type="text" class="form-control phone" name="phone">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Password<span class="text-danger ms-1">*</span></label>
              <div class="pass-group relative input-group-flat">
                <input :type="showPasswordOne ? 'text' : 'password'"
                  class="pass-input bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                  placeholder="*****" v-model="passwordOne" />
                <span class="toggle-password border-start-0 absolute top-[10px] right-[10px]"
                  @click="togglePasswordOne">
                  <i :class="['ti', showPasswordOne ? 'ti-eye' : 'ti-eye-off']"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Confirm Password<span class="text-danger ms-1">*</span></label>
              <div class="pass-group relative input-group-flat">
                <input :type="showPassword ? 'text' : 'password'"
                  class="pass-input bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                  placeholder="*****" v-model="password" />
                <span class="toggle-password border-start-0 absolute top-[10px] right-[10px]" @click="togglePassword">
                  <i :class="['ti', showPassword ? 'ti-eye' : 'ti-eye-off']"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-0">
              <label class="form-label">Location <span class="text-danger">*</span></label>
              <vue3-select v-model="selected" :options="LocationUse" placeholder="Select" />
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
  <!-- /Add canvas -->

  <!-- Edit canvas -->
  <div id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Edit User</h5>
      <button type="button" data-drawer-hide="offcanvas_edit" aria-controls="offcanvas_edit"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 p-5 border border-borderColor rounded mb-5">
          <div class="md:col-span-12">
            <div class="flex items-center mb-3">
              <div
                class="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                <div class="relative flex items-center justify-center">
                  <i class="ti ti-photo text-dark fs-16"></i>
                </div>
              </div>
              <div class="inline-flex flex-col items-start">
                <div class="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                  <i class="ti ti-file-broken me-1"></i>Upload file
                  <input type="file" class="opacity-0 absolute start-0 top-0" multiple="">
                </div>
                <span>JPG, GIF or PNG. Max size of 800K</span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control" value="Elizabeth Morgan">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">User Name<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control" value="Elizabeth@12">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <div class="flex justify-between">
                <label class="form-label">Email <span class="text-danger">*</span></label>
                <label class="flex items-center gap-2 mb-1 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer">
                  <span class="ms-1 text-gray-900">Email Opt Out</span>
                  <span
                    class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                </label>
              </div>
              <input type="text" class="form-control" value="elizabeth@gmail.com">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Role<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Phone 1</label>
              <input type="text" class="form-control phone" name="phone">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Phone 2</label>
              <input type="text" class="form-control phone" name="phone">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Password<span class="text-danger ms-1">*</span></label>
              <div class="pass-group relative input-group-flat">
                <input :type="showPasswordOne ? 'text' : 'password'"
                  class="pass-input bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                  placeholder="*****" v-model="passwordOne" />
                <span class="toggle-password border-start-0 absolute top-[10px] right-[10px]"
                  @click="togglePasswordOne">
                  <i :class="['ti', showPasswordOne ? 'ti-eye' : 'ti-eye-off']"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Confirm Password<span class="text-danger ms-1">*</span></label>
              <div class="pass-group relative input-group-flat">
                <input :type="showPassword ? 'text' : 'password'"
                  class="pass-input bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                  placeholder="*****" v-model="password" />
                <span class="toggle-password border-start-0 absolute top-[10px] right-[10px]" @click="togglePassword">
                  <i :class="['ti', showPassword ? 'ti-eye' : 'ti-eye-off']"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-0">
              <label class="form-label">Location <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedOne" :options="LocationUseOne" placeholder="USA" />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button type="button" data-drawer-hide="offcanvas_add" class="btn btn-light me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Edit canvas -->

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
          <p class="mb-3">Are you sure you want to remove user you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" data-modal-hide="delete_modal" class="btn btn-primary z-1 w-full">Yes,
              Delete</a>
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
    title: "",
    dataIndex: "",
    sorter: false,
  },
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
    sorter: {
      compare: (a, b) => (a.Phone.toLowerCase() > b.Phone.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => (a.Email.toLowerCase() > b.Email.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Created",
    dataIndex: "Created",
    sorter: {
      compare: (a, b) => (a.Created.toLowerCase() > b.Created.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Last Activity",
    dataIndex: "LastActivity",
    sorter: {
      compare: (a, b) =>
        a.LastActivity.toLowerCase() > b.LastActivity.toLowerCase() ? -1 : 1,
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
    sorter: true,
  },
];
const data = [
  {
    key: "1",
    Name: "Darlee Robertson",
    Role: "Facility Manager",
    Image: "avatar-19.jpg",
    Phone: "1234567890",
    Email: "robertson@example.com",
    LastActivity: "2 mins ago",
    Created: "25 Sep 2025, 12:12 pm",
    Status: "Active",
  },
  {
    key: "2",
    Name: "Sharon Roy",
    Role: "Installer",
    Image: "avatar-20.jpg",
    Phone: "+1 989757485",
    Email: "sharon@example.com",
    LastActivity: "5 mins ago",
    Created: "27 Sep 2025, 07:40 am",
    Status: "Inactive",
  },
  {
    key: "3",
    Name: "Vaughan Lewis",
    Role: "Senior Manager",
    Image: "avatar-21.jpg",
    Phone: "+1 546555455",
    Email: "vaughan12@example.com",
    LastActivity: "2 days ago",
    Created: "29 Sep 2025, 08:20 am",
    Status: "Active",
  },
  {
    key: "4",
    Name: "Jessica Louise",
    Role: "Test Engineer",
    Image: "avatar-23.jpg",
    Phone: "+1 454478787",
    Email: "jessica13@example.com",
    LastActivity: "2 mins ago",
    Created: "25 Sep 2025, 12:12 pm",
    Status: "Active",
  },
  {
    key: "5",
    Name: "Carol Thomas",
    Role: "UI /UX Designer",
    Image: "avatar-16.jpg",
    Phone: "+1 124547845",
    Email: "caroltho3@example.com",
    LastActivity: "Online",
    Created: "02 Oct 2025, 10:10 am",
    Status: "Active",
  },
  {
    key: "6",
    Name: "Dawn Mercha",
    Role: "Technician",
    Image: "avatar-22.jpg",
    Phone: "+1 478845447",
    Email: "dawnmercha@example.com",
    LastActivity: "3 days ago",
    Created: "17 Oct 2025, 04:25 pm",
    Status: "Active",
  },
  {
    key: "7",
    Name: "Rachel Hampton",
    Role: "Software Developer",
    Image: "avatar-24.jpg",
    Phone: "+1 215544845",
    Email: "rachel@example.com",
    LastActivity: "10 days ago",
    Created: "28 Oct 2025, 07:16 am",
    Status: "Active",
  },
  {
    key: "8",
    Name: "Jonelle Curtiss",
    Role: "Supervisor",
    Image: "avatar-25.jpg",
    Phone: "+1 121145471",
    Email: "jonelle@example.com",
    LastActivity: "1 week go",
    Created: "08 Nov 2025, 06:10 am",
    Status: "Active",
  },
  {
    key: "9",
    Name: "Jonathan Smith",
    Role: "Team Lead Dev",
    Image: "avatar-16.jpg",
    Phone: "+1 321454789",
    Email: "jonathan@example.com",
    LastActivity: "1 day ago",
    Created: "15 Nov 2025, 11:50 am",
    Status: "Active",
  },
  {
    key: "10",
    Name: "Brook Carter",
    Role: "Team Lead Dev",
    Image: "avatar-01.jpg",
    Phone: "+1 278907145",
    Email: "brook@example.com",
    LastActivity: "8 mins ago",
    Created: "25 Nov 2025, 06:34 pm",
    Status: "Active",
  },
];
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
import BasePagination from '@/components/BasePagination.vue';
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref, onMounted, onUnmounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      password: "",
      showPassword: false,
      passwordOne: "",
      showPasswordOne: false,
      selected: null,
      selectedOne: null,
      LocationUse: [
        { label: "Choose", value: "Choose" },
        { label: "Germany", value: "Germany" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "India", value: "India" },
        { label: "China", value: "China" },
      ],
      LocationUseOne: [
        { label: "Choose", value: "Choose" },
        { label: "Germany", value: "Germany" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "India", value: "India" },
        { label: "China", value: "China" },
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
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.Name.toLowerCase().includes(query) ||
          record.Role.toLowerCase().includes(query) ||
          record.Phone.toLowerCase().includes(query) ||
          record.Email.toLowerCase().includes(query) ||
          record.Created.toLowerCase().includes(query) ||
          record.LastActivity.toLowerCase().includes(query) ||
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
    closeFilterDropdown() {
      const dropdown = document.getElementById('filter-dropdown');
      if (dropdown) {
        dropdown.classList.add('hidden');
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    togglePasswordOne() {
      this.showPasswordOne = !this.showPasswordOne;
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
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
  },
  setup() {
    const openDropdown = ref(null);
    const dropdownRefs = ref([]);
    const dateRangeInput = ref(null);

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
      dropdownRefs,
      toggleDropdown,
      closeAllDropdowns,
      dateRangeInput,
    };
  },
};
</script>
