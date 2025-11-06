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
            Payments
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Payments</li>
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
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Invoice ID</span>
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
                              #274729
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
                          <a-date-picker v-model:value="value" class="form-control" placeholder="dd/mm/yyyy" />
                          <span class="input-group-text">
                            <i class="ti ti-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-6">
                        <button type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-6" aria-expanded="true"
                          aria-controls="accordion-body-6">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Amount</span>
                        </button>
                      </h2>
                      <div id="accordion-body-6" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-6" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              $500
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              $450
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              $1230
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              $3500
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
                      <span class="text-sm font-medium">Amount</span>
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
                      <span class="text-sm font-medium">Payment</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Transaction ID</span>
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
            <div id="payments-list_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
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
                        <div class="set-star rating-select">
                          <i class="ti ti-star-filled fs-16"></i>
                        </div>
                      </template>
                      <template v-if="column.key === 'Name'">
                        <h6 class="flex items-center text-[14px] font-medium mb-0">
                          <router-link :to="'/crm/company-details'" class="w-10 h-10 rounded-full me-2">
                            <img class="img-fluid rounded-full" :src="getImageUrl(record.Image)" alt="Company Image">
                          </router-link>
                          <router-link :to="'/crm/company-details'" class="flex flex-col">
                            {{ record.Name }}
                            <span class="text-default text-[13px] font-normal mt-1">{{ record.Role }}</span>
                          </router-link>
                        </h6>
                      </template>
                      <template v-if="column.key === 'Phone'">
                        {{ record.Phone }}
                      </template>
                      <template v-if="column.key === 'Tags'">
                        <span class="badge badge-tag px-1.5 py-0.5 rounded text-[12px]" :class="{
                          'bg-primary-100 text-primary border-primary': record.Tags === 'Cash',
                          'bg-info-100 text-info border-info': record.Tags === 'Credit',
                          'bg-success-100 text-success border-success': record.Tags !== 'Cash' && record.Tags !== 'Credit'
                        }">{{
                          record.Tags }}</span>
                      </template>
                      <template v-if="column.key === 'Location'">
                        <div class="flex items-center mb-0">
                          {{ record.Location }}
                        </div>
                      </template>
                      <template v-if="column.key === 'Rating'">
                        <div class="set-star">
                          <span><i class="ti ti-star-filled text-warning"></i> {{ record.Rating }}</span>
                        </div>
                      </template>
                      <template v-if="column.key === 'Contact'">
                        <div class="text-gray-600">
                          {{ record.Contact }}
                        </div>
                      </template>
                      <template v-if="column.key === 'Status'">
                        <span class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex" :class="{
                          'bg-success': record.Status === 'Active',
                          'bg-danger': record.Status === 'Inactive',
                          'bg-warning': record.Status === 'pending'
                        }">
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
                            :class="{ 'hidden': openDropdown !== record.key, 'block': openDropdown === record.key }"
                            style="top: 100%; right: 0;">
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-drawer-target="offcanvas_view"
                              data-drawer-show="offcanvas_view" aria-controls="offcanvas_view"
                              data-drawer-placement="right">
                              <i class="ti ti-eye text-blue-light me-1"></i> Preview
                            </a>
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal">
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
  <!-- Payment View -->
  <div id="offcanvas_view"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor flex items-center justify-between">
      <h5 class="inline-flex items-center">Payment for Invoice<span class="text-danger ms-2">#274738</span></h5>
      <!-- Dropdown -->
      <div class="flex items-center">
        <div class="me-3">
          <a href="javascript:void(0);"
            class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
            data-dropdown-toggle="download-dropdown">
            Download<i class="ti ti-chevron-down ml-1"></i>
          </a>
          <ul id="download-dropdown"
            class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[150px]">
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Download</a>
            </li>
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Download
                PDF</a>
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
      <div class="card border border-borderColor rounded shadow">
        <div class="card-body p-4">
          <div class="details-propsal">
            <h6 class="mb-3">Proposal From & To</h6>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-6">
                <div class="proposal-to">
                  <h6 class="mb-2 font-semibold text-[14px]">CRMS</h6>
                  <p class="mb-1">3338 Marcus Street Birmingham, AL 35211</p>
                  <p class="mb-1">Phone : <span class="text-dark">+1 98789 78788</span> </p>
                  <p class="mb-1">Email : <span class="text-dark">info@example.com</span></p>
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="proposal-to">
                  <h6 class="mb-2 font-semibold text-[14px]">NovaWave LLC </h6>
                  <p class="mb-1">994 Martine Ranch Suite 900 Candacefort New Hampshire</p>
                  <p class="mb-1">Phone : <span class="text-dark">+1 58478 74646</span></p>
                  <p class="mb-1">Email : <span class="text-dark">info@example.net</span></p>
                </div>
              </div>
            </div>
          </div>
          <hr class="border-borderColor my-4">
          <div class="details-propsal details-propsals border-b border-borderColor pb-4 mb-4">
            <h6 class="mb-3">Payment Details</h6>
            <ul class="flex items-centers justify-between gap-2 flex-wrap">
              <li>
                <p class="text-[13px] font-medium mb-1">Payment Date</p>
                <h6 class="text-[14px] font-normal">13 May 2024</h6>
              </li>
              <li>
                <p class="text-[13px] font-medium mb-1">Payment Method</p>
                <h6 class="text-[14px] font-normal">Cash</h6>
              </li>
              <li>
                <p class="text-[13px] font-medium mb-1">Total Amount</p>
                <h6 class="text-[14px] font-normal">$96</h6>
              </li>
            </ul>
          </div>
          <div class="details-propsal">
            <div class="flex items-center justify-between">
              <h6 class="mb-3">Invoice Details</h6>
              <h6 class="d-flex text-[14px] font-normal"><span class="text-danger"> Amount Due : </span> $100</h6>
            </div>
            <ul class="m-0 border-0 flex items-centers justify-between gap-2 flex-wrap">
              <li>
                <p class="text-[13px] font-medium mb-1">Invoice Number</p>
                <h6 class="mb-0"><span
                    class="text-xs bg-danger-100  text-danger rounded border-b border-danger px-2 py-0.5 me-2">#1254057</span>
                </h6>
              </li>
              <li>
                <p class="text-[13px] font-medium mb-1">Invoice Date</p>
                <h6 class="text-[14px] font-normal">13 May 2024</h6>
              </li>
              <li>
                <p class="text-[13px] font-medium mb-1">Invoice Amount</p>
                <h6 class="text-[14px] font-normal">$196</h6>
              </li>
              <li>
                <p class="text-[13px] font-medium mb-1">Payment Amount</p>
                <h6 class="text-[14px] font-normal">$96</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Payment View -->

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
          <p class="mb-3">Are you sure you want to remove payment you selected.</p>
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
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
    sorter: {
      compare: (a, b) => (a.Amount.toLowerCase() > b.Amount.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "DueDate",
    dataIndex: "DueDate",
    key: "DueDate",
    sorter: {
      compare: (a, b) => (a.DueDate.toLowerCase() > b.DueDate.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Payment Method",
    dataIndex: "PaymentMethod",
    key: "PaymentMethod",
    sorter: {
      compare: (a, b) =>
        a.PaymentMethod.toLowerCase() > b.PaymentMethod.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Transaction ID",
    dataIndex: "TransactionID",
    key: "TransactionID",
    sorter: {
      compare: (a, b) =>
        a.TransactionID.toLowerCase() > b.TransactionID.toLowerCase() ? -1 : 1,
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
    InvoiceID: "#1254058",
    Image: "company-icon-01.svg",
    Client: "NovaWave LLC",
    Amount: "$2500",
    DueDate: "15 Oct 2025",
    PaymentMethod: "Cash",
    TransactionID: "TXNID1234567890",
  },
  {
    key: "2",
    InvoiceID: "#1254057",
    Image: "company-icon-02.svg",
    Client: "BlueSky Industries",
    Amount: "$1450",
    DueDate: "19 Oct 2025",
    PaymentMethod: "Credit",
    TransactionID: "TXNID9876543210",
  },
  {
    key: "3",
    InvoiceID: "#1254056",
    Image: "company-icon-03.svg",
    Client: "Silver Hawk",
    Amount: "$2100",
    DueDate: "24 Oct 2025",
    PaymentMethod: "Cash",
    TransactionID: "TXNID2468135790",
  },
  {
    key: "4",
    InvoiceID: "#1254055",
    Image: "company-icon-04.svg",
    Client: "Summit Peak",
    Amount: "$4000",
    DueDate: "10 Nov 2025",
    PaymentMethod: "Credit",
    TransactionID: "TXNID1357924680",
  },
  {
    key: "5",
    InvoiceID: "#1254054",
    Image: "company-icon-05.svg",
    Client: "RiverStone Ventur",
    Amount: "$2120",
    DueDate: "18 Nov 2025",
    PaymentMethod: "Cash",
    TransactionID: "TXNID0123456789",
  },
  {
    key: "6",
    InvoiceID: "#1254053",
    Image: "company-icon-06.svg",
    Client: "CoastalStar Co.",
    Amount: "$3500",
    DueDate: "20 Nov 2025",
    PaymentMethod: "Credit",
    TransactionID: "TXNIDABCDE12345",
  },
  {
    key: "7",
    InvoiceID: "#1254052",
    Image: "company-icon-07.svg",
    Client: "HarborView",
    Amount: "$1230",
    DueDate: "07 Dec 2025",
    PaymentMethod: "Cash",
    TransactionID: "TXNID54321XYZ789",
  },
  {
    key: "8",
    InvoiceID: "#1254051",
    Image: "company-icon-08.svg",
    Client: "Golden Gate Ltd",
    Amount: "$3125",
    DueDate: "14 Dec 2025",
    PaymentMethod: "Credit",
    TransactionID: "TXNIDQWERTY0987",
  },
  {
    key: "9",
    InvoiceID: "#1254050",
    Image: "company-icon-09.svg",
    Client: "Redwood Inc",
    Amount: "$4180",
    DueDate: "22 Dec 2025",
    PaymentMethod: "Cash",
    TransactionID: "TXNID98765ASDF43",
  },
  {
    key: "10",
    InvoiceID: "#1254049",
    Image: "company-icon-10.svg",
    Client: "NovaWave LLC",
    Amount: "$5000",
    DueDate: "28 Dec 2025",
    PaymentMethod: "Cash",
    TransactionID: "TXNID1A2B3C4D5E6",
  },
];
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
      return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href;
    },
  },
  mounted() {
    initFlowbite();
  },
};
</script>
