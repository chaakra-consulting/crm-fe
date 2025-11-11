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
            Activities
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Activities</li>
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
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
            data-drawer-target="offcanvas_add" data-drawer-show="offcanvas_add" aria-controls="offcanvas_add"
            data-drawer-placement="right">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add New Activity
          </a>
        </div>
        <div class="bg-white p-4">
          <div class="flex items-center justify-between flex-wrap gap-y-3">
            <div class="flex items-center flex-wrap gap-y-3">
              <div class="flex items-center gap-3 flex-wrap">
                <h6 class="mb-0">All Activities</h6>
                <router-link to="/crm/activity-calls" class="btn border border-borderColor btn-icon btn-outline-light shadow"
                  data-tooltip-target="tooltip-top" data-tooltip-placement="top"><i class="ti ti-phone"></i></router-link>
                <div id="tooltip-top" role="tooltip"
                  class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                  Calls
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <router-link to="/crm/activity-mail" class="btn border border-borderColor btn-icon btn-outline-light shadow"
                  data-tooltip-target="tooltip-top-2" data-tooltip-placement="top"><i class="ti ti-mail"></i></router-link>
                <div id="tooltip-top-2" role="tooltip"
                  class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                  Mail
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <router-link to="/crm/activity-task" class="btn border border-borderColor  btn-icon btn-outline-light shadow"
                  data-tooltip-target="tooltip-top-3" data-tooltip-placement="top"><i class="ti ti-subtask"></i></router-link>
                <div id="tooltip-top-3" role="tooltip"
                  class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                  Task
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <router-link to="/crm/activity-meeting"
                  class="btn border border-primary btn-icon btn-outline-light shadow bg-primary text-white"
                  data-tooltip-target="tooltip-top-4" data-tooltip-placement="top"><i class="ti ti-user-share"></i></router-link>
                <div id="tooltip-top-4" role="tooltip"
                  class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                  Meeting
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <!-- Dropdown -->
              <div class="mx-3">
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Project Name</span>
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
                              We scheduled a meeting for next week
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Will have a meeting before project start
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Call John and discuss about project
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Store and manage contact data
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Activity Type</span>
                        </button>
                      </h2>
                      <div id="accordion-body-6" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-6" data-accordion-body>
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
                      <h2 id="accordion-heading-5">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-5" aria-expanded="true"
                          aria-controls="accordion-body-5">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Due Date</span>
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
                      <h2 id="accordion-heading-7">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-7" aria-expanded="true"
                          aria-controls="accordion-body-7">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Owner</span>
                        </button>
                      </h2>
                      <div id="accordion-body-7" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-7" data-accordion-body>
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
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-8">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-8" aria-expanded="true"
                          aria-controls="accordion-body-8">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Created Date</span>
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
                      <span class="text-sm font-medium">Title</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Activity Type</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Due Date</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Owner</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Created at</span>
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
            <div id="activity-list_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
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
                      <template v-if="column.key === 'Title'">
                        {{ record.Title }}
                      </template>
                      <template v-if="column.key === 'ActivityType'">
                        <span class="px-1.5 py-0.5 rounded text-[12px] inline-flex items-center" :class="[
                          record.ActivityType === 'Meeting' ? 'bg-info-100 text-info' :
                            record.ActivityType === 'Calls' ? 'bg-success-100 text-success' :
                              record.ActivityType === 'Email' ? 'bg-warning-100 text-warning' :
                                record.ActivityType === 'Task' ? 'bg-danger-100 text-danger' :
                                  'bg-gray-100 text-gray-500'
                        ]">
                          <i class="me-1" :class="[
                            record.ActivityType === 'Meeting' ? 'ti ti-user-share' :
                              record.ActivityType === 'Calls' ? 'ti ti-phone' :
                                record.ActivityType === 'Email' ? 'ti ti-mail' :
                                  record.ActivityType === 'Task' ? 'ti ti-subtask' :
                                    'ti ti-help'
                          ]"></i>
                          {{ record.ActivityType }}
                        </span>
                      </template>

                      <template v-if="column.key === 'DueDate'">
                        {{ record.DueDate }}
                      </template>
                      <template v-if="column.key === 'Owner'">
                        <div class="flex items-center mb-0">
                          <router-link :to="'/crm/user-profile'" class="w-7 h-7 flex rounded-full me-2">
                            <img class="img-fluid rounded-full" :src="getImageUrl(record.Image)" alt="User Image">
                          </router-link>
                          {{ record.Owner }}
                        </div>
                      </template>
                      <template v-if="column.key === 'CreatedAt'">
                        {{ record.CreatedAt }}
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
                              href="javascript:void(0);" data-modal-target="delete_activity"
                              data-modal-toggle="delete_activity">
                              <i class="ti ti-trash me-1"></i> Delete
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
  <!-- Add Activity -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Activity</h5>
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
              <label class="form-label">Activity Type <span class="text-danger">*</span></label>
              <div class="flex items-center gap-3 flex-wrap">
                <div>
                  <input type="radio" id="option-1" value="" name="status" class="hidden peer" checked>
                  <label for="option-1"
                    class="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50">
                    <i class="ti ti-phone me-2"></i>Calls
                  </label>
                </div>
                <div>
                  <input type="radio" id="option-2" value="" name="status" class="hidden peer">
                  <label for="option-2"
                    class="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50">
                    <i class="ti ti-mail me-2"></i>Email
                  </label>
                </div>
                <div>
                  <input type="radio" id="option-3" value="" name="status" class="hidden peer">
                  <label for="option-3"
                    class="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50">
                    <i class="ti ti-subtask me-2"></i>Task
                  </label>
                </div>
                <div>
                  <input type="radio" id="option-4" value="" name="status" class="hidden peer">
                  <label for="option-4"
                    class="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50">
                    <i class="ti ti-user-share me-2"></i>Meeting
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Due Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueThree" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Time</label>
              <div class="input-group w-auto input-group-flat">
                <a-time-picker class="form-control timepicker" placeholder="Choose" use12-hours format="h:mm a"
                  type="text" />
                <span class="input-group-text">
                  <i class="ti ti-clock-hour-10 text-dark"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Reminder <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <input type="text" class="form-control">
                <span class="input-group-text"><i class="ti ti-bell-ringing"></i></span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="flex items-center">
              <div class="mb-3 w-full flex-1">
                <label class="form-label min-h-[20px]">&nbsp;</label>
                <vue3-select v-model="selected" :options="Remind" placeholder="Select" />
              </div>
              <div class="mb-3 time-text flex-shrink-0 ms-2">
                <label class="form-label">&nbsp;</label>
                <p class="mb-0">Before Due</p>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Owner <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedOne" :options="OwnerSele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Guests <span class="text-danger">*</span></label>
              <vue3-select v-model="selectOne" :options="Responsible" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description <span class="text-danger">*</span></label>
              <div class="editor pages-editor ql-container ql-snow">
                <div ref="editorRefOne" class="quill-editor"></div>
              </div>
            </div>
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Deals</label>
                <a href="#" class="label-add text-primary" data-modal-target="add_deal" data-modal-toggle="add_deal"><i
                    class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <vue3-select v-model="selectedTwo" :options="DealSele" placeholder="Select" />
            </div>
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Contacts</label>
                <a href="#" class="label-add text-primary" data-modal-target="add_contacts"
                  data-modal-toggle="add_contacts"><i class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <vue3-select v-model="selectedThree" :options="ContactSele" placeholder="Select" />
            </div>
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Companies</label>
                <a href="#" class="label-add text-primary" data-modal-target="add_company"
                  data-modal-toggle="add_company"><i class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <vue3-select v-model="selectedFour" :options="CompanieSele" placeholder="Select" />
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
  <!-- /Add Activity -->

  <!-- Edit Activity -->
  <div id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">We scheduled a meeting for next week</h5>
      <p>Commented by Aeron on 15 Sep 2025, 11:15 PM</p>
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
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-12">
            <ul class="flex flex-wrap text-sm font-medium text-center mb-3 border-b border-borderColor"
              id="default-styled-tab3" data-tabs-toggle="#company-tab-content3"
              data-tabs-active-classes="text-primary hover:text-primary border-primary"
              data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary"
              role="tablist">
              <li class="me-3" role="presentation">
                <button class="inline-block py-2 px-4 border-b-2" data-tabs-target="#company-basic3" type="button"
                  role="tab" aria-selected="false">Activity</button>
              </li>
              <li role="presentation">
                <button class="inline-block py-2 px-4 border-b-2" data-tabs-target="#company-address3" type="button"
                  role="tab" aria-selected="false">Comments</button>
              </li>
            </ul>
            <div id="company-tab-content3">
              <div class="hidden " id="company-basic3" role="tabpanel">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Activity Type <span class="text-danger">*</span></label>
                      <div class="flex items-center gap-3 flex-wrap">
                        <div>
                          <input type="radio" id="option-5" value="" name="status-2" class="hidden peer" checked>
                          <label for="option-5"
                            class="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50">
                            <i class="ti ti-phone me-2"></i>Calls
                          </label>
                        </div>
                        <div>
                          <input type="radio" id="option-6" value="" name="status-2" class="hidden peer">
                          <label for="option-6"
                            class="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50">
                            <i class="ti ti-mail me-2"></i>Email
                          </label>
                        </div>
                        <div>
                          <input type="radio" id="option-7" value="" name="status-2" class="hidden peer">
                          <label for="option-7"
                            class="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50">
                            <i class="ti ti-subtask me-2"></i>Task
                          </label>
                        </div>
                        <div>
                          <input type="radio" id="option-8" value="" name="status-2" class="hidden peer">
                          <label for="option-8"
                            class="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50">
                            <i class="ti ti-user-share me-2"></i>Meeting
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="md:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Due Date <span class="text-danger">*</span></label>
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
                      <label class="form-label">Time</label>
                      <div class="input-group w-auto input-group-flat">
                        <a-time-picker class="form-control timepicker" placeholder="Choose" use12-hours format="h:mm a"
                          type="text" />
                        <span class="input-group-text">
                          <i class="ti ti-clock-hour-10 text-dark"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="md:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Reminder <span class="text-danger">*</span></label>
                      <div class="input-group w-auto input-group-flat">
                        <input type="text" class="form-control">
                        <span class="input-group-text"><i class="ti ti-bell-ringing"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="md:col-span-6">
                    <div class="flex items-center">
                      <div class="mb-3 w-full flex-1">
                        <label class="form-label min-h-[20px]">&nbsp;</label>
                        <vue3-select v-model="selectedFive" :options="RemindOne" placeholder="Minutes" />
                      </div>
                      <div class="mb-3 time-text flex-shrink-0 ms-2">
                        <label class="form-label">&nbsp;</label>
                        <p class="mb-0">Before Due</p>
                      </div>
                    </div>
                  </div>
                  <div class="md:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Owner <span class="text-danger">*</span></label>
                      <vue3-select v-model="selectedSix" :options="OwnerSeleOne" placeholder="Select" />
                    </div>
                  </div>
                  <div class="md:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Guests <span class="text-danger">*</span></label>
                      <vue3-select v-model="selectTwo" :options="ResponsibleOne" placeholder="Sharon Roy" />
                    </div>
                  </div>
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Description <span class="text-danger">*</span></label>
                      <div class="editor pages-editor ql-container ql-snow">
                        <div ref="editorRef" class="quill-editor"></div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="flex items-center justify-between">
                        <label class="form-label">Deals</label>
                        <a href="#" class="label-add text-primary" data-modal-target="add_deal"
                          data-modal-toggle="add_deal"><i class="ti ti-plus me-1"></i>Add New</a>
                      </div>
                      <vue3-select v-model="selectedSeven" :options="DealSeleOne" placeholder="Select" />
                    </div>
                    <div class="mb-3">
                      <div class="flex items-center justify-between">
                        <label class="form-label">Contacts</label>
                        <a href="#" class="label-add text-primary" data-modal-target="add_contacts"
                          data-modal-toggle="add_contacts"><i class="ti ti-plus me-1"></i>Add New</a>
                      </div>
                      <vue3-select v-model="selectedEight" :options="ContactSeleOne" placeholder="Select" />
                    </div>
                    <div class="mb-3">
                      <div class="flex items-center justify-between">
                        <label class="form-label">Companies</label>
                        <a href="#" class="label-add text-primary" data-modal-target="add_company"
                          data-modal-toggle="add_company"><i class="ti ti-plus me-1"></i>Add New</a>
                      </div>
                      <vue3-select v-model="selectedNine" :options="CompanieSeleOne" placeholder="Select" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden" id="company-address3" role="tabpanel">
              <div class="border border-borderColor p-3 rounded shadow mb-5">
                <p class="mb-3">The best way to get a project done faster is to start sooner. A goal without a timeline
                  is
                  just a dream.The goal you set must be challenging. At the same time, it should be realistic and
                  attainable, not impossible to reach.</p>
                <p>Commented by <span class="text-primary">Aeron</span> on 15 Sep 2023, 11:15 pm</p>
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
  <!-- /Edit Activity -->

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
          <p class="mb-3">Are you sure you want to remove activity you selected.</p>
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

  <!-- Add Deal -->
  <div id="add_deal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add Deals</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_deal">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-6">
            <div class="relative mb-4">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                <i class="ti ti-search"></i>
              </span>
              <input type="text" placeholder="Search"
                class="pl-9 pr-4 py-1.5 border w-full border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
            </div>
            <ul class="space-y-3 max-h-64 overflow-y-auto">
              <li>
                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                  Collins
                </label>
              </li>
              <li>
                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                  Konopelski
                </label>
              </li>
              <li>
                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                  Adams
                </label>
              </li>
              <li>
                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                  Schumm
                </label>
              </li>
              <li>
                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                  Wisozk
                </label>
              </li>
              <li>
                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                  Dawn Mercha
                </label>
              </li>
            </ul>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_deal" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Deal -->

  <!-- Add Contacts -->
  <div id="add_contacts"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add Contacts</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_contacts">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-6">
            <div class="relative mb-4">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                <i class="ti ti-search"></i>
              </span>
              <input type="text" placeholder="Search"
                class="pl-9 pr-4 py-1.5 border w-full border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
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
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_contacts" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Contacts -->

  <!-- Add Company -->
  <div id="add_company"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add Company</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_company">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-6">
            <div class="relative mb-4">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                <i class="ti ti-search"></i>
              </span>
              <input type="text" placeholder="Search"
                class="pl-9 pr-4 py-1.5 border w-full border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
            </div>
            <ul class="space-y-3 max-h-64 overflow-y-auto">
              <li>
                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                  <span class="flex items-center space-x-2">
                    <img src="@/assets/img/icons/company-icon-01.svg" alt="company-icon-01"
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
                    <img src="@/assets/img/icons/company-icon-02.svg" alt="company-icon-02"
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
                    <img src="@/assets/img/icons/company-icon-03.svg" alt="company-icon-03"
                      class="h-6 w-6 rounded-full">
                    <span>Silver Hawk</span>
                  </span>
                </label>
              </li>
              <li>
                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                  <span class="flex items-center space-x-2">
                    <img src="@/assets/img/icons/company-icon-04.svg" alt="company-icon-04"
                      class="h-6 w-6 rounded-full">
                    <span>Summit Peak</span>
                  </span>
                </label>
              </li>
              <li>
                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                  <span class="flex items-center space-x-2">
                    <img src="@/assets/img/icons/company-icon-05.svg" alt="company-icon-05"
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
                    <img src="@/assets/img/icons/company-icon-06.svg" alt="company-icon-06"
                      class="h-6 w-6 rounded-full">
                    <span>Bright Bridge Grp</span>
                  </span>
                </label>
              </li>
            </ul>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_company" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Company -->
</template>
<script>
const columns = [
  {
    title: "Title",
    dataIndex: "Title",
    key: "Title",
    sorter: {
      compare: (a, b) => (a.Title.toLowerCase() > b.Title.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Activity Type",
    dataIndex: "ActivityType",
    key: "ActivityType",
    sorter: {
      compare: (a, b) =>
        a.ActivityType.toLowerCase() > b.ActivityType.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Due Date",
    dataIndex: "DueDate",
    key: "DueDate",
    sorter: {
      compare: (a, b) => (a.DueDate.toLowerCase() > b.DueDate.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Owner",
    dataIndex: "Owner",
    key: "Owner",
    sorter: {
      compare: (a, b) => (a.Owner.toLowerCase() > b.Owner.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Created At",
    dataIndex: "CreatedAt",
    key: "CreatedAt",
    sorter: {
      compare: (a, b) => (a.CreatedAt.toLowerCase() > b.CreatedAt.toLowerCase() ? -1 : 1),
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
    Title: "We scheduled a meeting for next week",
    ActivityType: "Meeting",
    DueDate: "25 Sep 2025, 12:12 pm",
    Owner: "Hendry Milner",
    CreatedAt: "22 Sep 2025, 10:14 am",
    Image: "avatar-17.jpg",
  },
  {
    key: "2",
    Title: "Will have a meeting before project start",
    ActivityType: "Meeting",
    DueDate: "27 Oct 2025, 12:30 pm",
    Owner: "Theresa Nelson",
    CreatedAt: "21 Oct 2025, 03:00 pm",
    Image: "avatar-14.jpg",
  },
];
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { onMounted, onUnmounted, ref } from "vue";
import BasePagination from '@/components/BasePagination.vue';
import { initFlowbite } from "flowbite";
const valueOne = ref();
const ValueTwo = ref();
const valueThree = ref();
const valueFour = ref();
export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      valueOne,
      ValueTwo,
      valueThree,
      valueFour,
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
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      selectedEight: null,
      selectedNine: null,
      selectOne: [],
      selectTwo: [],
      Remind: [
        { label: "Select", value: "Select" },
        { label: "Minutes", value: "Minutes" },
        { label: "Hours", value: "Hours" },
      ],
      CompanieSele: [
        { label: "Select", value: "Select" },
        { label: "NovaWave LLC", value: "NovaWave LLC" },
        { label: "Silver Hawk", value: "Silver Hawk" },
        { label: "Harbor View", value: "Harbor View" },
      ],
      ContactSele: [
        { label: "Select", value: "Select" },
        { label: "Collins", value: "Collins" },
        { label: "Konopelski", value: "Konopelski" },
        { label: "Adams", value: "Adams" },
      ],
      DealSele: [
        { label: "Select", value: "Select" },
        { label: "Collins", value: "Collins" },
        { label: "Konopelski", value: "Konopelski" },
        { label: "Adams", value: "Adams" },
        { label: "Schumm", value: "Schumm" },
        { label: "Wisozk", value: "Wisozk" },
      ],
      OwnerSele: [
        { label: "Select", value: "Select" },
        { label: "Hendry Milner", value: "Hendry Milner" },
        { label: "Bradtke", value: "Bradtke" },
        { label: "Sally", value: "Sally" },
      ],
      RemindOne: [
        { label: "Select", value: "Select" },
        { label: "Minutes", value: "Minutes" },
        { label: "Hours", value: "Hours" },
      ],
      CompanieSeleOne: [
        { label: "Select", value: "Select" },
        { label: "NovaWave LLC", value: "NovaWave LLC" },
        { label: "Silver Hawk", value: "Silver Hawk" },
        { label: "Harbor View", value: "Harbor View" },
      ],
      ContactSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Collins", value: "Collins" },
        { label: "Konopelski", value: "Konopelski" },
        { label: "Adams", value: "Adams" },
      ],
      DealSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Collins", value: "Collins" },
        { label: "Konopelski", value: "Konopelski" },
        { label: "Adams", value: "Adams" },
        { label: "Schumm", value: "Schumm" },
        { label: "Wisozk", value: "Wisozk" },
      ],
      OwnerSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Hendry Milner", value: "Hendry Milner" },
        { label: "Bradtke", value: "Bradtke" },
        { label: "Sally", value: "Sally" },
      ],
      ResponsibleOne: [
        { label: "Darlee Robertson", value: "Darlee Robertson" },
        { label: "Sharon Roy", value: "Sharon Roy" },
        { label: "Vaughan Lewis", value: "Vaughan Lewis" },
        { label: "Jessica Louise", value: "Jessica Louise" },
        { label: "Carol Thomas", value: "Carol Thomas" },
      ],
      Responsible: [
        { label: "Darlee Robertson", value: "Darlee Robertson" },
        { label: "Sharon Roy", value: "Sharon Roy" },
        { label: "Vaughan Lewis", value: "Vaughan Lewis" },
        { label: "Jessica Louise", value: "Jessica Louise" },
        { label: "Carol Thomas", value: "Carol Thomas" },
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
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.Title.toLowerCase().includes(query) ||
          record.ActivityType.toLowerCase().includes(query) ||
          record.DueDate.toLowerCase().includes(query) ||
          record.Owner.toLowerCase().includes(query) ||
          record.CreatedAt.toLowerCase().includes(query)
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
  mounted() {
    initFlowbite();
    this.$nextTick(() => {
      this.initQuill();
    });
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
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
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

      if (this.$refs.editorRefOne) {
        const quillOne = new Quill(this.$refs.editorRefOne, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          },
        });

        quillOne.on("text-change", () => {
          this.content = quillOne.root.innerHTML;
        });
      }
    },
  },
};
</script>
