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
            Tickets
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Tickets</li>
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
            data-modal-target="add_ticket" data-modal-toggle="add_ticket">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add Ticket
          </a>
        </div>
        <div class="bg-white p-4">
          <div class="flex items-center justify-between flex-wrap gap-y-3">

            <div class="flex items-center flex-wrap gap-y-3">
              <div class="me-3">
                <button
                  class="border border-borderColor rounded p-2 shadow bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="filter-dropdown" data-dropdown-placement="bottom-start">
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
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-13.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                                <span>Ava Martinez</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-12.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                                <span>Nathan Reed</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-03.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                                <span>Lily Anderson</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                              <span class="flex items-center space-x-2">
                                <img src="@/assets/img/users/user-18.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                                <span>Ryan Coleman</span>
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
                  ref="dateRangeInput" placeholder="dd/mm/yyyy - dd/mm/yyyy">
                <span class="absolute inset-y-1/2 start-[10px] flex items-center me-2.5 pointer-events-none">
                  <i class="ti ti-calendar-due text-dark text-[14px] me-1"></i>
                </span>
              </div>
            </div>
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
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span class="text-sm font-medium">Ticket Id</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span class="text-sm font-medium">Subject</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span class="text-sm font-medium">Assigned</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span class="text-sm font-medium">Assigned Date</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span class="text-sm font-medium">Created On</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span class="text-sm font-medium">Due Date</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span class="text-sm font-medium">Assignee</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Last Reply</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span class="text-sm font-medium">Priority</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-0 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span class="text-sm font-medium">Status</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <!-- Table List -->
          <div class="table-responsive custom-table">
            <div id="tickets-list_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
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
                        <div class="set-star rating-select"><i class="ti ti-star-filled"></i></div>
                      </template>
                      <template v-if="column.key === 'TicketID'">
                        <router-link to="/support/ticket-details" class="text-gray-900 hover:text-primary">{{ record.TicketID }}</router-link>
                      </template>
                      <template v-if="column.key === 'Subject'">
                        {{ record.Subject }}
                      </template>
                      <template v-if="column.key === 'Assigned'">
                        <h6 class="flex items-center text-[14px] font-medium mb-0">
                          <a href="javascript:void(0);" class="avatar avatar-xs me-2">
                            <img class="img-fluid rounded-full" :src="getImageUrl(record.AssignedImage)" alt="User Image">
                          </a>
                          <a href="javascript:void(0);" class="flex flex-col hover:text-primary">{{ record.Assigned }}</a>
                        </h6>
                      </template>
                      <template v-if="column.key === 'CreatedOn'">
                        {{ record.CreatedOn }}
                      </template>
                      <template v-if="column.key === 'Assignee'">
                        <h6 class="flex items-center text-[14px] font-medium mb-0">
                          <a href="javascript:void(0);" class="avatar me-2">
                            <img class="img-fluid rounded-full" :src="getImageUrlOne(record.AssigneeImage)" alt="User Image">
                          </a>
                          <a href="javascript:void(0);" class="flex flex-col hover:text-primary">{{ record.Assignee }}
                            <span class="text-default text-[13px] font-normal mt-1">{{ record.Role }}</span>
                          </a>
                        </h6>
                      </template>
                      <template v-if="column.key === 'Priority'">
                        <span :class="{
                          'bg-success-100 text-success border-success': record.Priority === 'Low',
                          'bg-warning-100 text-warning border-warning': record.Priority === 'Medium',
                          'bg-danger-100 text-danger border-danger': record.Priority === 'High'
                        }" class="badge badge-tag badge px-1.5 py-0.5 rounded text-[12px]">
                          {{ record.Priority }}
                        </span>
                      </template>
                      <template v-if="column.key === 'Status'">
                        <span :class="{
                          'bg-success': record.Status === 'Resolved',
                          'bg-info': record.Status === 'Open',
                          'bg-warning': record.Status === 'Pending',
                          'bg-danger': record.Status === 'Closed'
                        }" class="badge badge-pill badge-status">
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
                          <div class="dropdown-menu absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg"
                            :class="{ 'hidden': openDropdown !== record.key, 'block': openDropdown === record.key }">
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="edit_ticket" data-modal-toggle="edit_ticket">
                              <i class="ti ti-edit text-blue me-1"></i> Edit
                            </a>
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal">
                              <i class="ti ti-trash me-1"></i> Delete
                            </a>
                          </div>
                        </div>
                      </template>
                    </template>
                  </a-table>
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
              <div class="datatable-length"></div>
            </div>
            <div class="w-full md:w-1/2 mt-4 md:mt-0 text-end">
              <div class="datatable-paginate"></div>
            </div>
          </div>
          <!-- /Table List -->
        </div>
      </div>
    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
  <ticket-modal></ticket-modal>
</template>
<script>
import BasePagination from '@/components/BasePagination.vue';
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
const columns = [
  {
    title: "",
    dataIndex: "",
    key: "Star",
    sorter: false,
  },
  {
    title: "Ticket ID",
    dataIndex: "TicketID",
    key: "TicketID",
    sorter: {
      compare: (a, b) => (a.TicketID.toLowerCase() > b.TicketID.toLowerCase() ? -1 : 1),
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
    title: "Assigned",
    dataIndex: "Assigned",
    key: "Assigned",
    sorter: {
      compare: (a, b) => (a.Assigned.toLowerCase() > b.Assigned.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Created On",
    dataIndex: "CreatedOn",
    key: "CreatedOn",
    sorter: {
      compare: (a, b) => (a.CreatedOn.toLowerCase() > b.CreatedOn.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Assignee",
    dataIndex: "Assignee",
    key: "Assignee",
    sorter: {
      compare: (a, b) => (a.Assignee.toLowerCase() > b.Assignee.toLowerCase() ? -1 : 1),
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
    TicketID: "#TK0020",
    Subject: "Support for theme",
    AssignedImage: "avatar-02.jpg",
    Assigned: "Richard Bennett",
    CreatedOn: "25 Jan 2025, 01:22 PM",
    AssigneeImage: "avatar-19.jpg",
    Assignee: "Darlee Robertson",
    Role: "Facility Manager",
    Priority: "Low",
    Status: "Resolved",
  },
  {
    key: "2",
    TicketID: "#TK0019",
    Subject: "verify your email",
    AssignedImage: "avatar-01.jpg",
    Assigned: "Elizabeth Collins",
    CreatedOn: "03 Feb 2025, 09:45 AM",
    AssigneeImage: "avatar-20.jpg",
    Assignee: "Sharon Roy",
    Role: "Installer",
    Priority: "Medium",
    Status: "Open",
  },
  {
    key: "3",
    TicketID: "#TK0018",
    Subject: "Calling for help",
    AssignedImage: "avatar-04.jpg",
    Assigned: "Michel Dubois",
    CreatedOn: "14 Mar 2025, 06:10 PM",
    AssigneeImage: "avatar-21.jpg",
    Assignee: "Vaughan Lewis",
    Role: "Senior Manager",
    Priority: "High",
    Status: "Pending",
  },
  {
    key: "4",
    TicketID: "#TK0017",
    Subject: "Management",
    AssignedImage: "avatar-03.jpg",
    Assigned: "Esther Williams",
    CreatedOn: "29 Apr 2025, 11:00 AM",
    AssigneeImage: "avatar-23.jpg",
    Assignee: "Jessica Louise",
    Role: "Test Engineer",
    Priority: "Low",
    Status: "Resolved",
  },
  {
    key: "5",
    TicketID: "#TK0016",
    Subject: "Calling for help",
    AssignedImage: "avatar-05.jpg",
    Assigned: "Wilson Clarke",
    CreatedOn: "07 May 2025, 04:35 PM",
    AssigneeImage: "avatar-16.jpg",
    Assignee: "Carol Thomas",
    Role: "UI /UX Designer",
    Priority: "Medium",
    Status: "Open",
  },
  {
    key: "6",
    TicketID: "#TK0015",
    Subject: "Support for theme",
    AssignedImage: "avatar-06.jpg",
    Assigned: "Walter Thompson",
    CreatedOn: "18 Jun 2025, 08:20 AM",
    AssigneeImage: "avatar-22.jpg",
    Assignee: "Dawn Mercha Technician",
    Priority: "High",
    Status: "Pending",
  },
  {
    key: "7",
    TicketID: "#TK0014",
    Subject: "Password Reset",
    AssignedImage: "avatar-07.jpg",
    Assigned: "Noah Mitchell",
    CreatedOn: "18 Apr 2025, 08:00 AM",
    AssigneeImage: "avatar-27.jpg",
    Assignee: "Alexander Carter",
    Role: "Project Manager",
    Priority: "Low",
    Status: "Closed",
  },
  {
    key: "8",
    TicketID: "#TK0013",
    Subject: "Error 502 on Dashboard",
    AssignedImage: "avatar-24.jpg",
    Assigned: "Mason Hayes",
    CreatedOn: "05 Feb 2025, 10:45 AM",
    AssigneeImage: "avatar-16.jpg",
    Assignee: "Benjamin Harrison",
    Role: "Team Lead",
    Priority: "Medium",
    Status: "Resolved",
  },
  {
    key: "9",
    TicketID: "#TK0012",
    Subject: "Plan Upgrade Inquiry",
    AssignedImage: "avatar-25.jpg",
    Assigned: "Ron Thompson",
    CreatedOn: "15 Jan 2025, 02:02 PM",
    AssigneeImage: "avatar-20.jpg",
    Assignee: "Nicholas Wright",
    Role: "Supervisor",
    Priority: "High",
    Status: "Open",
  },
  {
    key: "10",
    TicketID: "#TK0011",
    Subject: "Event Collaboration Request",
    AssignedImage: "avatar-10.jpg",
    Assigned: "James Bennett",
    CreatedOn: "12 Mar 2025, 08:00 PM",
    AssigneeImage: "avatar-16.jpg",
    Assignee: "Alexandra Bennett",
    Role: "Marketing",
    Priority: "Low",
    Status: "Pending",
  },
];
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      searchQuery: "",
      title: "Tickets",
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
          record.TicketID.toLowerCase().includes(query) ||
          record.Subject.toLowerCase().includes(query) ||
          record.Assigned.toLowerCase().includes(query) ||
          record.CreatedOn.toLowerCase().includes(query) ||
          record.Assignee.toLowerCase().includes(query) ||
          record.Priority.toLowerCase().includes(query) ||
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
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
    },
    getImageUrlOne(imageName) {
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
    const dateRangeInput = ref(null);
    const dateRangeInputOne = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInputOne.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInputOne.value,
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
      dateRangeInputOne,
      openDropdown,
      dropdownRefs,
      toggleDropdown,
      closeAllDropdowns,
      handleClickOutside,
    };
  },
};
</script>
