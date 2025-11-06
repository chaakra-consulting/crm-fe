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
            Membership Transactions
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">152</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Membership Transactions</li>
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
          class="flex items-center justify-between flex-wrap gap-2 p-4 border-b border-borderColor bg-white rounded-t">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
              <i class="ti ti-search"></i>
            </span>
            <input type="text" placeholder="Search" v-model="searchQuery"
              class="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
          </div>
        </div>
        <div class="bg-white p-4">
          <div class="flex items-center justify-between flex-wrap gap-3">
            <!-- Item 1 -->
            <div class="flex items-center flex-wrap gap-3">
              <div class="relative">
                <input type="text"
                  class="block flex-1 border border-borderColor shadow bg-white rounded-[5px] py-1.5 pr-2.5 pl-8 text-gray-900 focus:ring-0 focus:border-borderColor h-[38px] placeholder:text-gray-400 text-sm date-range bookingrange"
                  ref="dateRangeInput"
                  placeholder="dd/mm/yyyy - dd/mm/yyyy">
                <span class="absolute inset-y-1/2 start-[10px] flex items-center me-2.5 pointer-events-none">
                  <i class="ti ti-calendar-due text-dark fs-14 me-1"></i>
                </span>
              </div>
              <div class="relative">
                <button
                  class="border border-borderColor rounded p-2 shadow bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="filter-dropdown">
                  <i class="ti ti-filter me-1"></i>Filter<i class="ti ti-chevron-down ml-1"></i>
                </button>
              </div>
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
                        <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Lead Name</span>
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
                    <h2 id="accordion-heading-3">
                      <button type="button"
                        class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                        data-accordion-target="#accordion-body-3" aria-expanded="true" aria-controls="accordion-body-3">
                        <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Lead Owner</span>
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
                            Closed
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                            Not Closed
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                            Lost
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input type="checkbox"
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                            Contacted
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
                      <span class="text-sm font-medium">Type</span>
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
                      <span class="text-sm font-medium">Date</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium">Payment Type</span>
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
          <!-- start tabel-list -->
          <div class="table-responsive custom-table">
            <div id="transactions_list_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
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
                        <div class="set-star rating-select filled"><i class="ti ti-star-filled fs-16"></i></div>
                      </template>
                      <template v-if="column.key === 'Type'">
                        {{ record.Type }}
                      </template>
                      <template v-if="column.key === 'Amount'">
                        {{ record.Amount }}
                      </template>
                      <template v-if="column.key === 'Date'">
                        {{ record.Date }}
                      </template>
                      <template v-if="column.key === 'PaymentType'">
                        {{ record.PaymentType }}
                      </template>
                      <template v-if="column.key === 'Status'">
                        <span :class="record.Status === 'Completed' ? 'badge badge-pill badge-status bg-success' : 'badge badge-pill badge-status bg-danger'">
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
                              href="javascript:void(0);" data-modal-target="edit_modal" data-modal-toggle="edit_modal">
                              <i class="ti ti-edit me-1"></i> Edit
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

      <!-- Membership Transactions Table -->
    </div>
    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->
  </div>
  <!-- /Page Wrapper -->
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
    title: "Type",
    dataIndex: "Type",
    key: "Type",
    sorter: {
      compare: (a, b) => (a.Type.toLowerCase() > b.Type.toLowerCase() ? -1 : 1),
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
    title: "Date",
    dataIndex: "Date",
    key: "Date",
    sorter: {
      compare: (a, b) => (a.Date.toLowerCase() > b.Date.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Payment Type",
    dataIndex: "PaymentType",
    key: "PaymentType",
    sorter: {
      compare: (a, b) =>
        a.PaymentType.toLowerCase() > b.PaymentType.toLowerCase() ? -1 : 1,
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
    Type: "Wallet Topup",
    Amount: "+$650",
    Date: "25 Sep 2025, 01:22 PM",
    PaymentType: "Paypal",
    Status: "Completed",
  },
  {
    Type: "Purchase",
    Amount: "-350",
    Date: "27 Sep 2025, 04:18 PM",
    PaymentType: "Cash",
    Status: "Cancel",
  },
  {
    Type: "Refund",
    Amount: "+$100",
    Date: "29 Sep 2025, 10:08 AM",
    PaymentType: "Paypal",
    Status: "Completed",
  },
  {
    Type: "Wallet Topup",
    Amount: "+$650",
    Date: "05 Oct 2025, 09:43 AM",
    PaymentType: "Cash",
    Status: "Completed",
  },
  {
    Type: "Wallet Topup",
    Amount: "+$650",
    Date: "17 Oct 2025, 01:22 AM",
    PaymentType: "Paypal",
    Status: "Cancel",
  },
  {
    Type: "Wallet Topup",
    Amount: "+$650",
    Date: "22 Oct 2025, 06:32 PM",
    PaymentType: "Cash",
    Status: "Completed",
  },
  {
    Type: "Refund",
    Amount: "+$500",
    Date: "05 May 2025, 10:45 AM",
    PaymentType: "Cash",
    Status: "Completed",
  },
  {
    Type: "Wallet Topup",
    Amount: "+$380",
    Date: "03 May 2025, 09:45 AM",
    PaymentType: "Cash",
    Status: "Completed",
  },
  {
    Type: "Refund",
    Amount: "+$290",
    Date: "15 Feb 2025, 02:02 PM",
    PaymentType: "PayPal",
    Status: "Completed",
  },
  {
    Type: "Wallet Topup",
    Amount: "+$380",
    Date: "25 Feb 2025, 01:22 PM",
    PaymentType: "Cash",
    Status: "Completed",
  },
];
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref, onMounted, onUnmounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import BasePagination from '@/components/BasePagination.vue';
import { initFlowbite } from "flowbite";
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
  },
  setup() {
    const dateRangeInput = ref(null);
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
          record.Type.toLowerCase().includes(query) ||
          record.Amount.toLowerCase().includes(query) ||
          record.Date.toLowerCase().includes(query) ||
          record.PaymentType.toLowerCase().includes(query) ||
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
