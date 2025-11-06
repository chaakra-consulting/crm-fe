<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted, onUnmounted, ref } from 'vue';
import moment from "moment";
import DateRangePicker from "daterangepicker";

export default {
  data() {
    return {
      title: "Domain",
      text: "Superadmin",
      text1: "Domain List",
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
            Domains
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">198</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Domains</li>
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
                              Approved
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Pending
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Rejected
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
                      <span class="text-sm font-medium ">Domain Url</span>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </li>
                  <li class="flex items-center gap-2 mb-2 p-1">
                    <i class="ti ti-columns text-gray-600"></i>
                    <label class="flex items-center justify-between w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <span class="text-sm font-medium ">Plan</span>
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
            <div id="domain_list_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start "></div>
                <div class="col-start-2 justify-self-end "></div>
              </div>
              <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="col-span-2 table-responsive">
                  <table
                    class="table table-nowrap border border-borderColor dataTable min-w-full text-sm align-middle whitespace-nowrap"
                    id="domain_list">
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
                            class="dt-column-title text-gray-900" role="button"></span><span class="dt-column-order"></span></th>
                        <th data-dt-column="2"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Name: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Name</span><span class="dt-column-order"></span></th>
                        <th data-dt-column="3"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Domain URL: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Domain URL</span><span class="dt-column-order"></span>
                        </th>
                        <th data-dt-column="4"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Plan: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Plan</span><span class="dt-column-order"></span></th>
                        <th data-dt-column="5"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Created Date: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Created Date</span><span
                            class="dt-column-order"></span></th>
                        <th data-dt-column="6"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Status: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Status</span><span class="dt-column-order"></span>
                        </th>
                        <th data-dt-column="7"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Action: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Action</span><span class="dt-column-order"></span>
                        </th>
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
                        <td class="p-3">nw.nova.com</td>
                        <td class="p-3">Advanced (Monthly)</td>
                        <td class="p-3">25 Feb 2025</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-success">Approved</span></td>
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
                                Preview</a>
                            </div>
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
                        <td class="p-3">bl.blue.com</td>
                        <td class="p-3">Enterprise (Monthly)</td>
                        <td class="p-3">29 Sep 2025</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-info">Pending</span></td>
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
                                Preview</a>
                            </div>
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
                        <td class="p-3">sh.silver.com</td>
                        <td class="p-3">Advanced (Monthly)</td>
                        <td class="p-3">04 Oct 2025</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-danger">Rejected</span></td>
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
                                Preview</a>
                            </div>
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
                        <td class="p-3">sp.summer.com</td>
                        <td class="p-3">Advanced (Monthly)</td>
                        <td class="p-3">17 Oct 2025</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-success">Approved</span></td>
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
                                Preview</a>
                            </div>
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
                        <td class="p-3">ro.stone.com</td>
                        <td class="p-3">Basic (Monthly)</td>
                        <td class="p-3">24 Oct 2025</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-success">Approved</span></td>
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
                                Preview</a>
                            </div>
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
                        <td class="p-3">bb.bright.com</td>
                        <td class="p-3">Enterprise (Monthly)</td>
                        <td class="p-3">08 Nov 2025</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-info">Pending</span></td>
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
                                Preview</a>
                            </div>
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
                        <td class="p-3">cs.coastal.com</td>
                        <td class="p-3">Advanced (Monthly)</td>
                        <td class="p-3">14 Nov 2025</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-success">Approved</span></td>
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
                                Preview</a>
                            </div>
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
                        <td class="p-3">hv.harbor.com</td>
                        <td class="p-3">Advanced (Monthly)</td>
                        <td class="p-3">23 Nov 2025</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-danger">Rejected</span></td>
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
                                Preview</a>
                            </div>
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
                        <td class="p-3">ggt.golden.com</td>
                        <td class="p-3">Enterprise (Monthly)</td>
                        <td class="p-3">10 Dec 2025</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-success">Approved</span></td>
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
                                Preview</a>
                            </div>
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
                        <td class="p-3">ri.redwood.com</td>
                        <td class="p-3">Basic (Monthly)</td>
                        <td class="p-3">25 Dec 2025</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white bg-success">Approved</span></td>
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
                                Preview</a>
                            </div>
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
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Domain Detail</h5>
            <span class="px-1.5 py-0.7 rounded text-[12px] text-white bg-success">Approved</span>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="view_modal">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4 pb-0">
            <div class="p-2 rounded border border-borderColor bg-light">
              <div class="flex items-center">
                <a href="#" class="w-8 h-8 border rounded-full p-1 inline-block">
                  <img src="@/assets/img/icons/company-icon-01.svg" class="w-full h-full object-contain" alt="img">
                </a>
                <div class="ml-2">
                  <h6 class="font-medium text-sm mb-0">
                    <a href="#" class="text-gray-900">NovaWave LLC</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div id="accordion-collapse" class="p-4" data-accordion="collapse">
            <div class="accordion-item border border-borderColor rounded">
              <h2 class="accordion-header" id="heading-17">
                <button
                  class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
                  type="button" data-accordion-target="#collapse-17" aria-expanded="false" aria-controls="collapse-17">
                  <span class="flex items-center"><span class="w-8 h-8 rounded flex items-center justify-center me-1"><i
                        class="ti ti-chart-circles"></i></span>Plan Details</span>
                  <span><i class="ti ti-chevron-down"></i></span>
                </button>
              </h2>
              <div id="collapse-17" class="hidden p-4  border-t border-borderColor" aria-labelledby="heading-17">
                <div class="accordion-body text-[12px]">
                  <div class="flex flex-wrap items-center gap-y-3 mb-3">
                    <div class="w-full md:w-1/3">
                      <div>
                        <p class="text-sm mb-1">Plan Name</p>
                        <p class="text-sm font-semibold text-gray-900 mb-0">Advanced</p>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3">
                      <div>
                        <p class="text-sm mb-1">Plan Type</p>
                        <p class="text-sm font-semibold text-gray-900 mb-0">Monthly</p>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3">
                      <div>
                        <p class="text-sm mb-1">Account URL</p>
                        <p class="text-sm font-semibold text-gray-900 mb-0">nw.example.com</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-wrap items-center gap-y-3">
                    <div class="w-full md:w-1/3">
                      <div>
                        <p class="text-sm mb-1">Price</p>
                        <p class="text-sm font-semibold text-gray-900 mb-0">$200</p>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3">
                      <div>
                        <p class="text-sm mb-1">Register Date</p>
                        <p class="text-sm font-semibold text-gray-900 mb-0">25 Sep 2025</p>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3">
                      <div>
                        <p class="text-sm mb-1">Expiring On</p>
                        <p class="text-sm font-semibold text-gray-900 mb-0">25 Oct 2025</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </form>
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
          <p class="mb-3">Are you sure you want to remove domain you selected.</p>
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
