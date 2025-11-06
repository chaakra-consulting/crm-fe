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
            Invoices
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">123</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Invoices</li>
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
            Add New Invoice
          </a>
        </div>
        <div class="bg-white p-4">
          <div class="flex items-center justify-between flex-wrap gap-y-3">

            <div class="flex items-center flex-wrap gap-y-3">
              <!-- Dropdown -->
              <div class="me-3">
                <a href="javascript:void(0);"
                  class="font-bold text-[16px] rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="proposal-dropdown">
                  All Invoices<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="proposal-dropdown"
                  class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[150px]">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                        class="ti ti-dots-vertical me-1"></i>All Invoices</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                        class="ti ti-dots-vertical me-1"></i>Paid</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                        class="ti ti-dots-vertical me-1"></i>Partially Paid</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                        class="ti ti-dots-vertical me-1"></i>Overdue</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                        class="ti ti-dots-vertical me-1"></i>Unpaid</a>
                  </li>
                </ul>
              </div>
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
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              NovaWave LLC
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Redwood Inc
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Harborview
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Project</span>
                        </button>
                      </h2>
                      <div id="accordion-body-2" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-2" data-accordion-body>
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
                              DreamGigs
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Servbook
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Amount</span>
                        </button>
                      </h2>
                      <div id="accordion-body-5" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-5" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              $2,15,000
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              $1,45,000
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              $2,12,000
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              $4,80,380
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
                      <span class="text-sm font-medium">Invoice ID</span>
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
                      <span class="text-sm font-medium">Project</span>
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
                      <span class="text-sm font-medium">Amount</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Paid AMount</span>
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
                <router-link to="/crm/invoice-list"
                  class="w-7 h-7 flex items-center justify-center rounded text-white bg-teal me-1"><i
                    class="ti ti-list-tree"></i></router-link>
                <router-link to="/crm/invoices"
                  class="w-7 h-7 flex items-center justify-center rounded   text-default"><i
                    class="ti ti-layout-grid"></i></router-link>
              </div>
            </div>

          </div>
          <!-- Contact List -->
          <div class="table-responsive custom-table">
            <div id="invoices-list_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
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
                      <template v-if="column.key === 'InvoiceID'">
                        <router-link to="/crm/invoices-details" class="title-name hover:text-primary">{{
                          record.InvoiceID }}</router-link>
                      </template>
                      <template v-if="column.key === 'Client'">
                        <h6 class="flex items-center text-[14px] mb-0 font-medium">
                          <router-link :to="'/crm/company-details'"
                            class="w-10 h-10 rounded-full flex items-center justify-center border border-borderColor me-2">
                            <img class="w-auto h-auto" :src="getImageUrl(record.ClientImage)" alt="Company Image">
                          </router-link>
                          <router-link :to="'/crm/company-details'" class="flex flex-col">{{ record.Client
                          }}</router-link>
                        </h6>
                      </template>
                      <template v-if="column.key === 'Project'">
                        <h6 class="flex items-center text-[14px] mb-0 font-medium">
                          <router-link :to="'/crm/project-details'"
                            class="w-10 h-10 rounded-full flex items-center justify-center border border-borderColor me-2">
                            <img class="w-auto h-auto" :src="getProjectImageUrl(record.ProjectImage)" alt="Project Image">
                          </router-link>
                          <router-link :to="'/crm/project-details'" class="flex flex-col">{{ record.Project
                          }}</router-link>
                        </h6>
                      </template>
                      <template v-if="column.key === 'Status'">
                        <span class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex"
                          :class="getStatusClass(record.Status)">{{ record.Status }}</span>
                      </template>
                      <template v-if="column.key === 'action'">
                        <div class="dropdown relative table-action">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(record.id, $event)"
                            :class="{ 'active': openDropdown === record.id }">
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div
                            class="dropdown-menu absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg"
                            :class="{ 'hidden': openDropdown !== record.id, 'block': openDropdown === record.id }"
                            v-if="openDropdown === record.id">
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                              data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                              data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            <router-link
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              to="/crm/invoices-details"><i class="ti ti-clipboard-copy me-1"></i> View
                              Invoices</router-link>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Paid</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Partially Paid</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark as Unpaid</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                          </div>
                        </div>
                      </template>
                    </template>
                  </a-table>
                </div>
              </div>
              <BasePagination :currentPage="currentPage" :pageSize="pageSize" :pageSizeOptions="pageSizeOptions"
                :totalItems="filteredPages.length" @page-change="onPageChange" @page-size-change="onPageSizeChange" />
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
  <invoices-modal></invoices-modal>
</template>
<script>
const columns = [
  {
    title: "Invoice ID",
    dataIndex: "InvoiceID",
    key: "InvoiceID",
    sorter: {
      compare: (a, b) => (a.InvoiceID.toLowerCase() > b.InvoiceID.toLowerCase() ? -1 : 1),
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
    title: "Project",
    dataIndex: "Project",
    key: "Project",
    sorter: {
      compare: (a, b) => (a.Project.toLowerCase() > b.Project.toLowerCase() ? -1 : 1),
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
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
    sorter: {
      compare: (a, b) => (a.Amount.toLowerCase() > b.Amount.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Paid Amount",
    dataIndex: "PaidAmount",
    key: "PaidAmount",
    sorter: {
      compare: (a, b) => (a.PaidAmount.toLowerCase() > b.PaidAmount.toLowerCase() ? -1 : 1),
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
    id: "1",
    InvoiceID: "#1265781",
    Client: "NovaWave LLC",
    ClientImage: "company-01.svg",
    Project: "Truelysell",
    ProjectImage: "project-01.svg",
    DueDate: "22 Jun 2025",
    Amount: "$2,15,000",
    PaidAmount: "$2,15,000",
    Status: "Partially Paid",
  },
  {
    id: "2",
    InvoiceID: "#1265782",
    Client: "BlueSky Industries",
    ClientImage: "company-02.svg",
    Project: "Dreamschat",
    ProjectImage: "project-02.svg",
    DueDate: "20 May 2025",
    Amount: "$1,45,000",
    PaidAmount: "$1,45,000",
    Status: "Paid",
  },
  {
    id: "3",
    InvoiceID: "#1265783",
    Client: "Silver Hawk",
    ClientImage: "company-03.svg",
    Project: "DreamGigs",
    ProjectImage: "project-03.svg",
    DueDate: "30 Apr 2025",
    Amount: "$2,15,000",
    PaidAmount: "$1,00,000",
    Status: "Partially Paid",
  },
  {
    id: "4",
    InvoiceID: "#1265784",
    Client: "Summit Peak",
    ClientImage: "company-04.svg",
    Project: "Servbook",
    ProjectImage: "project-04.svg",
    DueDate: "21 Apr 2025",
    Amount: "$4,80,380",
    PaidAmount: "$4,80,380",
    Status: "Paid",
  },
  {
    id: "5",
    InvoiceID: "#1265786",
    Client: "RiverStone Ltd",
    ClientImage: "company-05.svg",
    Project: "DreamPOS",
    ProjectImage: "project-05.svg",
    DueDate: "19 Mar 2025",
    Amount: "$2,12,000",
    PaidAmount: "$0",
    Status: "Unpaid",
  },
  {
    id: "6",
    InvoiceID: "#1265787",
    Client: "Bright Bridge Grp",
    ClientImage: "company-06.svg",
    Project: "Kofejob",
    ProjectImage: "project-06.svg",
    DueDate: "11 Mar 2025",
    Amount: "$3,50,000",
    PaidAmount: "$1,50,000",
    Status: "Partially Paid",
  },
  {
    id: "7",
    InvoiceID: "#1265788",
    Client: "CoastalStar Co.",
    ClientImage: "company-07.svg",
    Project: "SmartHR",
    ProjectImage: "project-07.svg",
    DueDate: "17 Feb 2025",
    Amount: "$1,23,000",
    PaidAmount: "$1,23,000",
    Status: "Overdue",
  },
  {
    id: "8",
    InvoiceID: "#1265789",
    Client: "HarborView",
    ClientImage: "company-08.svg",
    Project: "Doccure",
    ProjectImage: "project-08.svg",
    DueDate: "07 Feb 2025",
    Amount: "$3,12,500",
    PaidAmount: "$3,12,500",
    Status: "Paid",
  },
  {
    id: "9",
    InvoiceID: "#1265790",
    Client: "Golden Gate Ltd",
    ClientImage: "company-09.svg",
    Project: "Best@laundry",
    ProjectImage: "project-09.svg",
    DueDate: "20 Jan 2025",
    Amount: "$4,18,000",
    PaidAmount: "$0",
    Status: "Unpaid",
  },
  {
    id: "10",
    InvoiceID: "#1265792",
    Client: "Redwood Inc",
    ClientImage: "company-10.svg",
    Project: "Dreamsports",
    ProjectImage: "project-10.svg",
    DueDate: "18 Jan 2025",
    Amount: "$5,00,000",
    PaidAmount: "$5,00,000",
    Status: "Paid",
  }
]
  ;
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted, onUnmounted, ref } from 'vue';
import moment from "moment";
import DateRangePicker from "daterangepicker";
import BasePagination from '@/components/BasePagination.vue';
import { initFlowbite } from "flowbite";
const valueOne = ref();
export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      valueOne,
      content: "",
      searchQuery: "",
      data,
      columns,
      rowSelection,
      currentPage: 1,
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 50],
    };
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

    return {
      openDropdown,
      dropdownRefs,
      toggleDropdown,
      closeAllDropdowns,
      dateRangeInput,
    };
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.InvoiceID.toLowerCase().includes(query) ||
          record.Client.toLowerCase().includes(query) ||
          record.Amount.toLowerCase().includes(query) ||
          record.DueDate.toLowerCase().includes(query) ||
          record.PaymentMethod.toLowerCase().includes(query) ||
          record.TransactionID.toLowerCase().includes(query)
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
      return new URL(`/src/assets/img/company/${imageName}`, import.meta.url).href;
    },
    getProjectImageUrl(imageName) {
      return new URL(`/src/assets/img/projects/${imageName}`, import.meta.url).href;
    },
    getStatusClass(status) {
      switch (status) {
        case "Paid":
          return "bg-success";
        case "Partially Paid":
          return "bg-warning";
        case "Unpaid":
          return "bg-danger";
        case "Overdue":
          return "bg-info";
        default:
          return "bg-secondary";
      }
    },
  },
  mounted() {
    initFlowbite();
  },
};
</script>
