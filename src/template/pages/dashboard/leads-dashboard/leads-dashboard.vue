<template>
  <!-- <index-loader></index-loader> -->
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[56px] ml-[240px]">
    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-5">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">Leads Dashboard</h4>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Date -->
          <div
            class="daterangepick shadow flex items-center w-auto px-3 py-2 border border-borderColor rounded-md bg-white"
            ref="dateRangeInput">
            <i class="ti ti-calendar text-gray-900 mr-2"></i>
            <span class="reportrange-picker-field text-gray-900">23 May 2025 - 30 May 2025</span>
          </div>
          <!-- Refresh Button -->
          <button
            class="border text-gray-900 border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Refresh">
            <i class="ti ti-refresh"></i>
          </button>
          <!-- Collapse Button -->
          <button
            class="border text-gray-900 border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Collapse" id="collapse-header" @click="toggleHeader">
            <i class="ti ti-transition-top"></i>
          </button>
        </div>
      </div>
      <!-- End Page Header -->

      <div class="flex flex-col md:flex-row md:gap-6">

        <!-- Recently Created Deals -->
        <div class="w-full md:w-1/2 flex mb-5">
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
            <div class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
              <h6 class="m-0">Recently Created Leads</h6>

              <!-- Dropdown -->
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="last-days-dropdown">
                  Last 30 days<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="last-days-dropdown"
                  class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                  data-popper-placement="bottom"
                  style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(665.333px, 195.333px, 0px);">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                      15 days</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                      30 days</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="table-responsive custom-table px-4">
              <div id="lead-project_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div class="justify-self-start "></div>
                  <div class="col-start-2 justify-self-end "></div>
                </div>
                <div class="grid grid-cols-1 gap-4 mb-4">
                  <div class="col-span-2 table-responsive">
                    <table class="table table-nowrap dataTable min-w-full text-sm align-middle whitespace-nowrap"
                      id="lead-project">
                      <thead class="table-light">
                        <tr class="border-b border-gray-100 dark:border-gray-700/50">
                          <th data-dt-column="0"
                            class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                            rowspan="1" colspan="1"><span class="dt-column-title text-gray-900">Lead Name</span><span
                              class="dt-column-order"></span></th>
                          <th data-dt-column="1"
                            class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                            rowspan="1" colspan="1"><span class="dt-column-title text-gray-900">Company Name</span><span
                              class="dt-column-order"></span></th>
                          <th data-dt-column="2"
                            class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                            rowspan="1" colspan="1"><span class="dt-column-title text-gray-900">Phone</span><span
                              class="dt-column-order"></span></th>
                          <th data-dt-column="3"
                            class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                            rowspan="1" colspan="1"><span class="dt-column-title text-gray-900">Status</span><span
                              class="dt-column-order"></span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3"><router-link to="/crm/leads-details" class="text-gray-900">Collins</router-link></td>
                          <td class="p-3">
                            <div class="flex items-center"><router-link to="company-details"
                                class="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"><img
                                  class="w-auto h-auto" src="@/assets/img/icons/company-icon-01.svg" alt="User Image"></router-link>
                              <div class="ml-2">
                                <h6 class="text-[14px] font-medium mb-0"><router-link to="company-details"
                                    class="flex flex-col">NovaWave LLC</router-link></h6>
                              </div>
                            </div>
                          </td>
                          <td class="p-3">+1 875455453</td>
                          <td class="p-3"><span
                              class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex  bg-success">
                              Closed</span></td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3"><router-link to="/crm/leads-details" class="text-gray-900">Konopelski</router-link></td>
                          <td class="p-3">
                            <div class="flex items-center"><router-link to="company-details"
                                class="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"><img
                                  class="w-auto h-auto" src="@/assets/img/icons/company-icon-02.svg" alt="User Image"></router-link>
                              <div class="ml-2">
                                <h6 class="text-[14px] font-medium mb-0"><router-link to="company-details"
                                    class="flex flex-col">BlueSky Industries</router-link></h6>
                              </div>
                            </div>
                          </td>
                          <td class="p-3">+1 989757485</td>
                          <td class="p-3"><span
                              class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex  bg-success">
                              Closed</span></td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3"><router-link to="/crm/leads-details" class="text-gray-900">Adams</router-link></td>
                          <td class="p-3">
                            <div class="flex items-center"><router-link to="company-details"
                                class="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"><img
                                  class="w-auto h-auto" src="@/assets/img/icons/company-icon-03.svg" alt="User Image"></router-link>
                              <div class="ml-2">
                                <h6 class="text-[14px] font-medium mb-0"><router-link to="company-details"
                                    class="flex flex-col">Silver Hawk</router-link></h6>
                              </div>
                            </div>
                          </td>
                          <td class="p-3">+1 546555455</td>
                          <td class="p-3"><span
                              class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex  bg-success">
                              Closed</span></td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3"><router-link to="/crm/leads-details" class="text-gray-900">Schumm</router-link></td>
                          <td class="p-3">
                            <div class="flex items-center"><router-link to="company-details"
                                class="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"><img
                                  class="w-auto h-auto" src="@/assets/img/icons/company-icon-04.svg" alt="User Image"></router-link>
                              <div class="ml-2">
                                <h6 class="text-[14px] font-medium mb-0"><router-link to="company-details"
                                    class="flex flex-col">Summit Peak</router-link></h6>
                              </div>
                            </div>
                          </td>
                          <td class="p-3">+1 454478787</td>
                          <td class="p-3"><span
                              class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex  bg-warning">
                              Contacted</span></td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3"><router-link to="/crm/leads-details" class="text-gray-900">Wisozk</router-link></td>
                          <td class="p-3">
                            <div class="flex items-center"><router-link to="company-details"
                                class="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"><img
                                  class="w-auto h-auto" src="@/assets/img/icons/company-icon-05.svg" alt="User Image"></router-link>
                              <div class="ml-2">
                                <h6 class="text-[14px] font-medium mb-0"><router-link to="company-details"
                                    class="flex flex-col">RiverStone Ltd</router-link></h6>
                              </div>
                            </div>
                          </td>
                          <td class="p-3">+1 1245427875</td>
                          <td class="p-3"><span
                              class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex  bg-success">
                              Closed</span></td>
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
          </div>
        </div>

        <!-- Deals by Stage -->
        <div class="w-full md:w-1/2 flex mb-5">
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
            <div class="border-b border-borderColor px-4 py-3">
              <div class="flex flex-wrap justify-between items-center gap-y-3">
                <h6 class="text-base font-semibold m-0">Projects By Stage</h6>
                <!-- Time Filter Dropdown -->
                <div>
                  <a href="javascript:void(0);"
                    class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="last-days-dropdown2">
                    Last 30 days<i class="ti ti-chevron-down ml-1"></i>
                  </a>
                  <ul id="last-days-dropdown2"
                    class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                        30 days</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                        15 days</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                        7 days</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="px-4">
              <div id="leadpiechart" class="text-center">
                <apexchart type="pie" height="440" :options="leadpieChart.pieCharts" :series="leadpieChart.series">
                </apexchart>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Projects By Stage -->
      <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
        <div class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
          <h6 class="m-0">Projects By Stage</h6>
          <div class="flex flex-wrap items-center gap-2">
            <!-- Pipeline Dropdown -->
            <div>
              <a href="javascript:void(0);"
                class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                data-dropdown-toggle="pipeline-dropdown4">
                Sales Pipeline<i class="ti ti-chevron-down ml-1"></i>
              </a>
              <ul id="pipeline-dropdown4" class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                <li>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Marketing
                    Pipeline</a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Sales
                    Pipeline</a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Email</a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Chats</a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Operational</a>
                </li>
              </ul>
            </div>
            <!-- Time Filter Dropdown -->
            <div>
              <a href="javascript:void(0);"
                class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                data-dropdown-toggle="last-days-dropdown5">
                Last 30 days<i class="ti ti-chevron-down ml-1"></i>
              </a>
              <ul id="last-days-dropdown5"
                class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                <li>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                    3 months</a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                    6 months</a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                    12 months</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="px-4">
          <div id="contact-report">
            <apexchart type="area" height="273" :options="contactReportChart.reportCharts"
              :series="contactReportChart.series"></apexchart>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:gap-6">

        <!-- Lost Deals Stage -->
        <div class="w-full md:w-1/2 flex mb-5">
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
            <div class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
              <h6 class="m-0">Lost Deals Stage</h6>
              <div class="flex flex-wrap items-center gap-2">
                <!-- Pipeline Dropdown -->
                <div>
                  <a href="javascript:void(0);"
                    class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="pipeline-dropdown2">
                    Marketing Pipeline<i class="ti ti-chevron-down ml-1"></i>
                  </a>
                  <ul id="pipeline-dropdown2"
                    class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Marketing
                        Pipeline</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Sales
                        Pipeline</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Email</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Chats</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Operational</a>
                    </li>
                  </ul>
                </div>
                <!-- Time Filter Dropdown -->
                <div>
                  <a href="javascript:void(0);"
                    class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="last-days-dropdown3">
                    Last 3 months<i class="ti ti-chevron-down ml-1"></i>
                  </a>
                  <ul id="last-days-dropdown3"
                    class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                        3 months</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                        6 months</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                        12 months</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="px-4">
              <div id="last-chart">
                <apexchart type="bar" height="180" :options="leadLastChart.lastCharts" :series="leadLastChart.series">
                </apexchart>
              </div>
            </div>
          </div>
        </div>

        <!-- Won Deals Stage -->
        <div class="w-full md:w-1/2 flex mb-5">
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
            <div class="border-b border-borderColor px-4 py-3">
              <div class="flex flex-wrap justify-between items-center gap-y-3">
                <h6 class="text-base font-semibold m-0">Won Deals Stage</h6>
                <div class="flex flex-wrap items-center gap-2">
                  <!-- Pipeline Dropdown -->
                  <div>
                    <a href="javascript:void(0);"
                      class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="pipeline-dropdown3">
                      Marketing Pipeline<i class="ti ti-chevron-down ml-1"></i>
                    </a>
                    <ul id="pipeline-dropdown3"
                      class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Marketing
                          Pipeline</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Sales
                          Pipeline</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Email</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Chats</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Operational</a>
                      </li>
                    </ul>
                  </div>
                  <!-- Time Filter Dropdown -->
                  <div>
                    <a href="javascript:void(0);"
                      class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="last-days-dropdown4">
                      Last 3 months<i class="ti ti-chevron-down ml-1"></i>
                    </a>
                    <ul id="last-days-dropdown4"
                      class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                          3 months</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                          6 months</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                          12 months</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4">
              <div id="won-chart">
                <apexchart type="bar" height="180" :options="leadWonCharts.wonCharts" :series="leadWonCharts.series">
                </apexchart>
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
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { onMounted, onUnmounted, ref } from 'vue';
import { initFlowbite } from 'flowbite';
import { leadpieChart, contactReportChart, leadLastChart, leadWonCharts } from "./data";
export default {
  data() {
    return {
      leadpieChart: leadpieChart,
      contactReportChart: contactReportChart,
      leadLastChart: leadLastChart,
      leadWonCharts: leadWonCharts,
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
  setup() {


    // Dropdown functionality
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
      if (!dropdownRefs.value.some(ref => ref && ref.contains(event.target))) {
        closeAllDropdowns();
      }
    };

    onMounted(() => {
      // Initialize Flowbite to enable drawer functionality
      initFlowbite();

      // Add click outside handler for dropdowns
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
    };
  },
};
</script>
