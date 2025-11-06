<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted, onUnmounted, ref } from 'vue';
import { initFlowbite } from 'flowbite';
import moment from "moment";
import DateRangePicker from "daterangepicker";

export default {
  data() {
    return {
      title: "Packages",
      text: "Superadmin",
      text1: "Packages List",
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
  mounted() {
    this.$nextTick(() => {
      initFlowbite();
    });
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
            Packages
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">198</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Packages</li>
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
            Add New Plan
          </a>
        </div>
        <div class="bg-white p-4 pb-0">
          <div class="flex items-center justify-between flex-wrap gap-y-3 mb-5">

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
                          class="flex items-center justify-between w-full text-dark text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-3" aria-expanded="true"
                          aria-controls="accordion-body-3">
                          <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Plan Type</span>
                        </button>
                      </h2>
                      <div id="accordion-body-3" class="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-3" data-accordion-body>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Monthly
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                              Yearly
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
          <!-- /Package List -->
          <div class="overflow-x-auto custom-table table-responsive">
            <table class="table min-w-full table-auto whitespace-nowrap">
              <thead class="table-light text-left text-gray-900 font-semibold">
                <tr>
                  <th class="no-sort px-4 py-2">
                    <div class="form-check form-check-md">
                      <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox" id="select-all">
                    </div>
                  </th>
                  <th class="font-semibold"></th>
                  <th class="px-4 py-2 font-semibold">Plan Name</th>
                  <th class="px-4 py-2 font-semibold">Plan Type</th>
                  <th class="px-4 py-2 font-semibold">Total Subscribers</th>
                  <th class="px-4 py-2 font-semibold">Price</th>
                  <th class="px-4 py-2 font-semibold">Created Date</th>
                  <th class="px-4 py-2 font-semibold">Status</th>
                  <th class="px-4 py-2 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody class="text-sm text-gray-800">

                <!-- Row 1 -->
                <tr class="border-b">
                  <td class="px-4 py-2">
                    <div class="form-check form-check-md"><input
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox"></div>
                  </td>
                  <td class="px-4 py-2">
                    <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                  </td>
                  <td class="px-4 py-2">Basic</td>
                  <td class="px-4 py-2">Monthly</td>
                  <td class="px-4 py-2">56</td>
                  <td class="px-4 py-2">$50</td>
                  <td class="px-4 py-2">14 Jan 2024</td>
                  <td class="px-4 py-2">
                    <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
                  </td>
                  <td class="px-4 py-2">
                    <div class="dropdown relative table-action" ref="el => dropdownRefs[6] = el">
                      <a href="javascript:void(0);"
                        class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        @click="toggleDropdown(6, $event)"><i
                          class="ti ti-dots-vertical"></i></a>
                      <div
                        class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                        :class="{ 'hidden': openDropdown !== 6 }">
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit" data-drawer-placement="right"><i
                            class="ti ti-edit me-1"></i> Edit</a>
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Row 2 -->
                <tr class="border-b">
                  <td class="px-4 py-2">
                    <div class="form-check form-check-md"><input
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox"></div>
                  </td>
                  <td class="px-4 py-2">
                    <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                  </td>
                  <td class="px-4 py-2">Advanced</td>
                  <td class="px-4 py-2">Monthly</td>
                  <td class="px-4 py-2">99</td>
                  <td class="px-4 py-2">$200</td>
                  <td class="px-4 py-2">21 Jan 2024</td>
                  <td class="px-4 py-2">
                    <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
                  </td>
                  <td class="px-4 py-2">
                    <div class="dropdown relative table-action" ref="el => dropdownRefs[7] = el">
                      <a href="javascript:void(0);"
                        class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        @click="toggleDropdown(7, $event)"><i
                          class="ti ti-dots-vertical"></i></a>
                      <div
                        class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                        :class="{ 'hidden': openDropdown !== 7 }">
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit" data-drawer-placement="right"><i
                            class="ti ti-edit me-1"></i> Edit</a>
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Row 3 -->
                <tr class="border-b">
                  <td class="px-4 py-2">
                    <div class="form-check form-check-md"><input
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox"></div>
                  </td>
                  <td class="px-4 py-2">
                    <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                  </td>
                  <td class="px-4 py-2">Premium</td>
                  <td class="px-4 py-2">Monthly</td>
                  <td class="px-4 py-2">58</td>
                  <td class="px-4 py-2">$300</td>
                  <td class="px-4 py-2">10 Feb 2024</td>
                  <td class="px-4 py-2">
                    <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
                  </td>
                  <td class="px-4 py-2">
                    <div class="dropdown relative table-action" ref="el => dropdownRefs[0] = el">
                      <a href="javascript:void(0);"
                        class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        @click="toggleDropdown(0, $event)"><i
                          class="ti ti-dots-vertical"></i></a>
                      <div
                        class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                        :class="{ 'hidden': openDropdown !== 0 }">
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit" data-drawer-placement="right"><i
                            class="ti ti-edit me-1"></i> Edit</a>
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Row 4 -->
                <tr class="border-b">
                  <td class="px-4 py-2">
                    <div class="form-check form-check-md"><input
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox"></div>
                  </td>
                  <td class="px-4 py-2">
                    <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                  </td>
                  <td class="px-4 py-2">Enterprise</td>
                  <td class="px-4 py-2">Monthly</td>
                  <td class="px-4 py-2">67</td>
                  <td class="px-4 py-2">$400</td>
                  <td class="px-4 py-2">18 Feb 2024</td>
                  <td class="px-4 py-2">
                    <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
                  </td>
                  <td class="px-4 py-2">
                    <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el">
                      <a href="javascript:void(0);"
                        class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        @click="toggleDropdown(1, $event)"><i
                          class="ti ti-dots-vertical"></i></a>
                      <div
                        class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                        :class="{ 'hidden': openDropdown !== 1 }">
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit" data-drawer-placement="right"><i
                            class="ti ti-edit me-1"></i> Edit</a>
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Row 5 -->
                <tr class="border-b">
                  <td class="px-4 py-2">
                    <div class="form-check form-check-md"><input
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox"></div>
                  </td>
                  <td class="px-4 py-2">
                    <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                  </td>
                  <td class="px-4 py-2">Basic</td>
                  <td class="px-4 py-2">Yearly</td>
                  <td class="px-4 py-2">78</td>
                  <td class="px-4 py-2">$600</td>
                  <td class="px-4 py-2">15 Mar 2024</td>
                  <td class="px-4 py-2">
                    <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
                  </td>
                  <td class="px-4 py-2">
                    <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el">
                      <a href="javascript:void(0);"
                        class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        @click="toggleDropdown(2, $event)"><i
                          class="ti ti-dots-vertical"></i></a>
                      <div
                        class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                        :class="{ 'hidden': openDropdown !== 2 }">
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit" data-drawer-placement="right"><i
                            class="ti ti-edit me-1"></i> Edit</a>
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Row 6 -->
                <tr class="border-b">
                  <td class="px-4 py-2">
                    <div class="form-check form-check-md"><input
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox"></div>
                  </td>
                  <td class="px-4 py-2">
                    <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                  </td>
                  <td class="px-4 py-2">Advanced</td>
                  <td class="px-4 py-2">Yearly</td>
                  <td class="px-4 py-2">99</td>
                  <td class="px-4 py-2">$2400</td>
                  <td class="px-4 py-2">26 Mar 2024</td>
                  <td class="px-4 py-2">
                    <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
                  </td>
                  <td class="px-4 py-2">
                    <div class="dropdown relative table-action" ref="el => dropdownRefs[3] = el">
                      <a href="javascript:void(0);"
                        class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        @click="toggleDropdown(3, $event)"><i
                          class="ti ti-dots-vertical"></i></a>
                      <div
                        class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                        :class="{ 'hidden': openDropdown !== 3 }">
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit" data-drawer-placement="right"><i
                            class="ti ti-edit me-1"></i> Edit</a>
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Row 7 -->
                <tr class="border-b">
                  <td class="px-4 py-2">
                    <div class="form-check form-check-md"><input
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox"></div>
                  </td>
                  <td class="px-4 py-2">
                    <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                  </td>
                  <td class="px-4 py-2">Premium</td>
                  <td class="px-4 py-2">Yearly</td>
                  <td class="px-4 py-2">48</td>
                  <td class="px-4 py-2">$3600</td>
                  <td class="px-4 py-2">05 Apr 2024</td>
                  <td class="px-4 py-2">
                    <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
                  </td>
                  <td class="px-4 py-2">
                    <div class="dropdown relative table-action" ref="el => dropdownRefs[4] = el">
                      <a href="javascript:void(0);"
                        class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        @click="toggleDropdown(4, $event)"><i
                          class="ti ti-dots-vertical"></i></a>
                      <div
                        class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                        :class="{ 'hidden': openDropdown !== 4 }">
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit" data-drawer-placement="right"><i
                            class="ti ti-edit me-1"></i> Edit</a>
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Row 8 -->
                <tr class="border-b">
                  <td class="px-4 py-2">
                    <div class="form-check form-check-md"><input
                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox"></div>
                  </td>
                  <td class="px-4 py-2">
                    <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                  </td>
                  <td class="px-4 py-2">Enterprise</td>
                  <td class="px-4 py-2">Yearly</td>
                  <td class="px-4 py-2">17</td>
                  <td class="px-4 py-2">$4800</td>
                  <td class="px-4 py-2">16 Apr 2024</td>
                  <td class="px-4 py-2">
                    <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
                  </td>
                  <td class="px-4 py-2">
                    <div class="dropdown relative table-action" ref="el => dropdownRefs[5] = el">
                      <a href="javascript:void(0);"
                        class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        @click="toggleDropdown(5, $event)"><i
                          class="ti ti-dots-vertical"></i></a>
                      <div
                        class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg block dropdown-menu"
                        :class="{ 'hidden': openDropdown !== 5 }">
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit" data-drawer-placement="right"><i
                            class="ti ti-edit me-1"></i> Edit</a>
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div class="flex flex-col md:flex-row items-center justify-between hidden">
            <div class="w-full md:w-1/2">
              <div class="datatable-length"></div>
            </div>
            <div class="w-full md:w-1/2 mt-4 md:mt-0 text-end">
              <div class="datatable-paginate"></div>
            </div>
          </div>
          <!-- /Package List -->
        </div>
      </div>
    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
  <packages-modal></packages-modal>
</template>
