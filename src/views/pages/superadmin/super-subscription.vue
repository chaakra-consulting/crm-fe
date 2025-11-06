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
            Subscription
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">178</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Subscription</li>
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Plan</span>
                        </button>
                      </h2>
                      <div id="accordion-body-1" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-1" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Basic
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Advanced
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Enterprise
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Payment</span>
                        </button>
                      </h2>
                      <div id="accordion-body-3" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-3" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Paypal
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Credit Card
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Debit Card
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Status</span>
                        </button>
                      </h2>
                      <div id="accordion-body-2" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-2" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Paid
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Unpaid
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
                      <span class="text-sm font-medium ">Plan Name</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium ">Plan Type</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium ">Total Subscribers</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium ">Price</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium ">Created Date</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-0 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium ">Status</span>
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
            <div id="subscription_list_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start "></div>
                <div class="col-start-2 justify-self-end "></div>
              </div>
              <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="col-span-2 table-responsive">
                  <table
                    class="table table-nowrap border border-borderColor dataTable min-w-full text-sm align-middle whitespace-nowrap"
                    id="subscription_list">
                    <thead class="table-light">
                      <tr class="border-b border-gray-100 dark:border-gray-700/50">
                        <th
                          class="no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc dt-ordering-asc"
                          data-dt-column="0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="
											: Activate to invert sorting" tabindex="0"><span class="dt-column-title" role="button">
                            <div class="form-check form-check-md">
                              <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox" id="select-all">
                            </div>
                          </span><span class="dt-column-order"></span></th>
                        <th
                          class="no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          data-dt-column="1" rowspan="1" colspan="1" aria-label=": Activate to sort" tabindex="0"><span
                            class="dt-column-title" role="button"></span><span class="dt-column-order"></span></th>
                        <th data-dt-column="2"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Subscriber: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Subscriber</span><span class="dt-column-order"></span>
                        </th>
                        <th data-dt-column="3"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Plan: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Plan</span><span class="dt-column-order"></span></th>
                        <th data-dt-column="4"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Billing Cycle: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Billing Cycle</span><span
                            class="dt-column-order"></span></th>
                        <th data-dt-column="5"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Payment Method: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Payment Method</span><span
                            class="dt-column-order"></span></th>
                        <th data-dt-column="6"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-type-numeric dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Amount: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Amount</span><span class="dt-column-order"></span>
                        </th>
                        <th data-dt-column="7"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Created Date: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Created Date</span><span
                            class="dt-column-order"></span></th>
                        <th data-dt-column="8"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Expiring On: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Expiring On</span><span
                            class="dt-column-order"></span></th>
                        <th data-dt-column="9"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Status: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Status</span><span class="dt-column-order"></span>
                        </th>
                        <th
                          class="text-end px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          data-dt-column="10" rowspan="1" colspan="1" aria-label="Action: Activate to sort"
                          tabindex="0"><span class="dt-column-title text-gray-900" role="button">Action</span><span
                            class="dt-column-order"></span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                        </td>
                        <td class="p-3">
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                              class="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center"><img
                                class="w-auto h-auto" src="@/assets/img/icons/company-icon-01.svg" alt="User Image"></router-link><router-link
                              to="/crm/company-details" class="hover:text-primary font-medium">NovaWave LLC</router-link></h6>
                        </td>
                        <td class="p-3">Advanced (Monthly)</td>
                        <td class="p-3">30 Days</td>
                        <td class="p-3">Credit Card</td>
                        <td class="dt-type-numeric p-3">$200</td>
                        <td class="p-3">25 Feb 2025</td>
                        <td class="p-3">25 Sep 2026</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-success">Paid</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[0] = el"><a href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(0, $event)"><i
                                class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 0 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"><i class="ti ti-download me-1"></i> Download</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="view_modal"
                                data-modal-toggle="view_modal"><i class="ti ti-eye text-blue-light me-1"></i>
                                Preview</a></div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                        </td>
                        <td class="p-3">
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                              class="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center"><img
                                class="w-auto h-auto" src="@/assets/img/icons/company-icon-02.svg" alt="User Image"></router-link><router-link
                              to="/crm/company-details" class="hover:text-primary font-medium">BlueSky Industries</router-link>
                          </h6>
                        </td>
                        <td class="p-3">Basic (Yearly)</td>
                        <td class="p-3">365 Days</td>
                        <td class="p-3">Paypal</td>
                        <td class="dt-type-numeric p-3">$200</td>
                        <td class="p-3">29 Sep 2025</td>
                        <td class="p-3">29 Sep 2026</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-danger">Unpaid</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el"><a href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(1, $event)"><i
                                class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 1 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"><i class="ti ti-download me-1"></i> Download</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="view_modal"
                                data-modal-toggle="view_modal"><i class="ti ti-eye text-blue-light me-1"></i>
                                Preview</a></div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                        </td>
                        <td class="p-3">
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                              class="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center"><img
                                class="w-auto h-auto" src="@/assets/img/icons/company-icon-03.svg" alt="User Image"></router-link><router-link
                              to="/crm/company-details" class="hover:text-primary font-medium">SilverHawk</router-link></h6>
                        </td>
                        <td class="p-3">Advanced (Monthly)</td>
                        <td class="p-3">30 Days</td>
                        <td class="p-3">Debit Card</td>
                        <td class="dt-type-numeric p-3">$200</td>
                        <td class="p-3">04 Oct 2025</td>
                        <td class="p-3">04 Oct 2026</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-success">Paid</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el"><a href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(2, $event)"><i
                                class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 2 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"><i class="ti ti-download me-1"></i> Download</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="view_modal"
                                data-modal-toggle="view_modal"><i class="ti ti-eye text-blue-light me-1"></i>
                                Preview</a></div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                        </td>
                        <td class="p-3">
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                              class="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center"><img
                                class="w-auto h-auto" src="@/assets/img/icons/company-icon-04.svg" alt="User Image"></router-link><router-link
                              to="/crm/company-details" class="hover:text-primary font-medium">SummitPeak</router-link></h6>
                        </td>
                        <td class="p-3">Advanced (Monthly)</td>
                        <td class="p-3">30 Days</td>
                        <td class="p-3">Paypal</td>
                        <td class="dt-type-numeric p-3">$200</td>
                        <td class="p-3">17 Oct 2025</td>
                        <td class="p-3">15 Oct 2026</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-success">Paid</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[3] = el"><a href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(3, $event)"><i
                                class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 3 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"><i class="ti ti-download me-1"></i> Download</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="view_modal"
                                data-modal-toggle="view_modal"><i class="ti ti-eye text-blue-light me-1"></i>
                                Preview</a></div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                        </td>
                        <td class="p-3">
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                              class="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center"><img
                                class="w-auto h-auto" src="@/assets/img/icons/company-icon-05.svg" alt="User Image"></router-link><router-link
                              to="/crm/company-details" class="hover:text-primary font-medium">RiverStone Ventur</router-link>
                          </h6>
                        </td>
                        <td class="p-3">Enterprise (Monthly)</td>
                        <td class="p-3">30 Days</td>
                        <td class="p-3">Credit Card</td>
                        <td class="dt-type-numeric p-3">$200</td>
                        <td class="p-3">24 Oct 2025</td>
                        <td class="p-3">27 Oct 2026</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-success">Paid</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[4] = el"><a href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(4, $event)"><i
                                class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 4 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"><i class="ti ti-download me-1"></i> Download</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="view_modal"
                                data-modal-toggle="view_modal"><i class="ti ti-eye text-blue-light me-1"></i>
                                Preview</a></div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                        </td>
                        <td class="p-3">
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                              class="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center"><img
                                class="w-auto h-auto" src="@/assets/img/icons/company-icon-06.svg" alt="User Image"></router-link><router-link
                              to="/crm/company-details" class="hover:text-primary font-medium">Bright Bridge Grp</router-link>
                          </h6>
                        </td>
                        <td class="p-3">Advanced (Monthly)</td>
                        <td class="p-3">30 Days</td>
                        <td class="p-3">Paypal</td>
                        <td class="dt-type-numeric p-3">$200</td>
                        <td class="p-3">08 Nov 2025</td>
                        <td class="p-3">07 Nov 2026</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-danger">Unpaid</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[5] = el"><a href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(5, $event)"><i
                                class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 5 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"><i class="ti ti-download me-1"></i> Download</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="view_modal"
                                data-modal-toggle="view_modal"><i class="ti ti-eye text-blue-light me-1"></i>
                                Preview</a></div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                        </td>
                        <td class="p-3">
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                              class="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center"><img
                                class="w-auto h-auto" src="@/assets/img/icons/company-icon-07.svg" alt="User Image"></router-link><router-link
                              to="/crm/company-details" class="hover:text-primary font-medium">CoastalStar Co.</router-link>
                          </h6>
                        </td>
                        <td class="p-3">Enterprise (Yearly)</td>
                        <td class="p-3">365 Days</td>
                        <td class="p-3">Credit Card</td>
                        <td class="dt-type-numeric p-3">$200</td>
                        <td class="p-3">14 Nov 2025</td>
                        <td class="p-3">12 Nov 2026</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-success">Paid</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[6] = el"><a href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(6, $event)"><i
                                class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 6 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"><i class="ti ti-download me-1"></i> Download</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="view_modal"
                                data-modal-toggle="view_modal"><i class="ti ti-eye text-blue-light me-1"></i>
                                Preview</a></div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                        </td>
                        <td class="p-3">
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                              class="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center"><img
                                class="w-auto h-auto" src="@/assets/img/icons/company-icon-08.svg" alt="User Image"></router-link><router-link
                              to="/crm/company-details" class="hover:text-primary font-medium">HarborView</router-link></h6>
                        </td>
                        <td class="p-3">Basic (Monthly)</td>
                        <td class="p-3">30 Days</td>
                        <td class="p-3">Credit Card</td>
                        <td class="dt-type-numeric p-3">$200</td>
                        <td class="p-3">23 Nov 2025</td>
                        <td class="p-3">23 Nov 2026</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-success">Paid</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[7] = el"><a href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(7, $event)"><i
                                class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 7 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"><i class="ti ti-download me-1"></i> Download</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="view_modal"
                                data-modal-toggle="view_modal"><i class="ti ti-eye text-blue-light me-1"></i>
                                Preview</a></div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                        </td>
                        <td class="p-3">
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                              class="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center"><img
                                class="w-auto h-auto" src="@/assets/img/icons/company-icon-09.svg" alt="User Image"></router-link><router-link
                              to="/crm/company-details" class="hover:text-primary font-medium">Golden Gate Ltd</router-link>
                          </h6>
                        </td>
                        <td class="p-3">Basic (Yearly)</td>
                        <td class="p-3">365 Days</td>
                        <td class="p-3">Paypal</td>
                        <td class="dt-type-numeric p-3">$200</td>
                        <td class="p-3">10 Dec 2025</td>
                        <td class="p-3">11 Dec 2026</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-danger">Unpaid</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[8] = el"><a href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(8, $event)"><i
                                class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 8 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"><i class="ti ti-download me-1"></i> Download</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="view_modal"
                                data-modal-toggle="view_modal"><i class="ti ti-eye text-blue-light me-1"></i>
                                Preview</a></div>
                          </div>
                        </td>
                      </tr>
                      <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox"></div>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                        </td>
                        <td class="p-3">
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                              class="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center"><img
                                class="w-auto h-auto" src="@/assets/img/icons/company-icon-10.svg" alt="User Image"></router-link><router-link
                              to="/crm/company-details" class="hover:text-primary font-medium">Redwood Inc</router-link></h6>
                        </td>
                        <td class="p-3">Advanced (Monthly)</td>
                        <td class="p-3">30 Days</td>
                        <td class="p-3">Credit Card</td>
                        <td class="dt-type-numeric p-3">$200</td>
                        <td class="p-3">25 Dec 2025</td>
                        <td class="p-3">17 Dec 2026</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-success">Paid</span></td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[9] = el"><a href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(9, $event)"><i
                                class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 9 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"><i class="ti ti-download me-1"></i> Download</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="view_modal"
                                data-modal-toggle="view_modal"><i class="ti ti-eye text-blue-light me-1"></i>
                                Preview</a></div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot></tfoot>
                  </table>
                </div>
              </div>
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


  <div id="view_modal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[800px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="p-5">
          <div class="flex flex-wrap justify-between items-center mb-3">
            <div class="w-full md:w-1/2 mb-4 md:mb-0">
              <img src="@/assets/img/logo.svg" class="max-w-full h-auto" alt="logo">
            </div>
            <div class="w-full md:w-1/2 text-right mb-3">
              <h5 class="text-gray-900 mb-1 text-lg">Invoice</h5>
              <p class="mb-1 font-normal text-sm"><i class="ti ti-file-invoice mr-1"></i>INV0287</p>
              <p class="mb-1 font-normal text-sm"><i class="ti ti-calendar mr-1"></i>Issue date: 12 Sep 2024</p>
              <p class="font-normal text-sm"><i class="ti ti-calendar mr-1"></i>Due date: 12 Oct 2024</p>
            </div>
          </div>

          <div class="flex flex-wrap justify-between mb-6">
            <div class="w-full md:w-7/12 mb-4 md:mb-0">
              <p class="text-gray-900 mb-2 font-semibold text-sm">Invoice From:</p>
              <p class="mb-1">Crms</p>
              <p class="mb-1">797 Hilltop Street, Springfield<br>New York, United States</p>
              <p class="mb-1">crms@example.com</p>
            </div>
            <div class="w-full md:w-5/12">
              <p class="text-gray-900 mb-2 font-semibold text-sm">Invoice To:</p>
              <p class="mb-1">NovaWave LLC</p>
              <p class="mb-1">367 Hillcrest Lane, Irvine, California,<br>United States</p>
              <p class="mb-1">michael@example.com</p>
            </div>
          </div>

          <div class="mb-6 overflow-x-auto table-responsive">
            <table class="table min-w-full table-nowrap table-auto text-left border-collapse">
              <thead class="table-light text-gray-900">
                <tr>
                  <th class="p-2 font-medium">Plan</th>
                  <th class="p-2 font-medium">Billing Cycle</th>
                  <th class="p-2 font-medium">Created Date</th>
                  <th class="p-2 font-medium">Expiring On</th>
                  <th class="p-2 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody class="text-sm text-gray-800">
                <tr class="border-t">
                  <td class="p-2">Advanced (Monthly)</td>
                  <td class="p-2">30 Days</td>
                  <td class="p-2">12 Sep 2024</td>
                  <td class="p-2">12 Oct 2024</td>
                  <td class="p-2">$200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="flex flex-wrap justify-between mb-6">
            <div class="w-full md:w-1/3 mb-4 md:mb-0">
              <h6 class="mb-4 font-medium text-base">Payment info:</h6>
              <p class="mb-0 text-sm">Credit Card - 123***********789</p>
              <div class="flex justify-between items-center mb-2 pr-3">
                <p class="mb-0 text-sm">Amount</p>
                <p class="text-gray-900 text-sm">$200.00</p>
              </div>
            </div>
            <div class="w-full md:w-1/3">
              <div class="flex justify-between items-center pr-3 mb-2">
                <p class="text-gray-900 mb-2 text-sm">Sub Total</p>
                <p class="mb-2 text-sm">$200.00</p>
              </div>
              <div class="flex justify-between items-center pr-3 mb-2">
                <p class="text-gray-900 mb-2 text-sm">Tax</p>
                <p class="mb-2 text-sm">$0.00</p>
              </div>
              <div class="flex justify-between items-center pr-3">
                <p class="text-gray-900 mb-0 text-sm">Total</p>
                <p class="text-gray-900 font-medium mb-0 text-sm">$200.00</p>
              </div>
            </div>
          </div>

          <div class="border border-borderColor rounded bg-white">
            <div class="p-4">
              <p class="text-gray-900 font-medium mb-2">Terms & Conditions:</p>
              <p class="text-sm font-normal flex items-start mb-2">
                <i class="ti ti-point-filled text-primary text-xs mr-2 mt-1"></i>
                All payments must be made according to the agreed schedule. Late payments may incur additional fees.
              </p>
              <p class="text-sm font-normal flex items-start mb-0">
                <i class="ti ti-point-filled text-primary text-xs mr-2 mt-1"></i>
                We are not liable for any indirect, incidental, or consequential damages, including loss of profits,
                revenue, or data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

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
          <p class="mb-3">Are you sure you want to remove subscription you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" data-modal-hide="delete_modal" class="btn btn-primary z-1 w-full">Yes, Delete</a>
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
import { totalChart, activeChart, inactiveChart, locationChart } from "./data";
export default {
  data() {
    return {
      totalChart: totalChart,
      activeChart: activeChart,
      inactiveChart: inactiveChart,
      locationChart: locationChart,
      title: "Subscription",
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
    toggleSelectAllCheckboxes(event) {
      const checked = event.target.checked;
      const checkboxes = document.querySelectorAll(".row-checkbox");
      checkboxes.forEach((cb) => {
        cb.checked = checked;
      });
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
      closeAllDropdowns,
    };
  },
};
</script>
