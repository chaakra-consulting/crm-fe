<template>
    <!-- <index-loader></index-loader> -->
    <layouts-header></layouts-header>
    <layouts-sidebar></layouts-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper relative pt-[56px] ml-[240px]">
        <div class="content p-5">

            <!-- Page Header -->
            <div class="flex flex-wrap items-center justify-between gap-2 mb-5">
                <div>
                    <h4>Deals Dashboard</h4>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <!-- Date -->
                    <div class="daterangepick shadow flex items-center w-auto px-3 py-2 border border-borderColor rounded-md bg-white"
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
                        <div
                            class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                            <h6 class="m-0">Recently Created Deals</h6>

                            <!-- Dropdown -->
                            <div>
                                <a href="javascript:void(0);"
                                    class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                    data-dropdown-toggle="last-days-dropdown">
                                    Last 30 days<i class="ti ti-chevron-down ml-1"></i>
                                </a>
                                <ul id="last-days-dropdown"
                                    class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
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
                            <div id="deals-project_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
                                <div class="grid grid-cols-2 gap-4 mb-4">
                                    <div class="justify-self-start "></div>
                                    <div class="col-start-2 justify-self-end "></div>
                                </div>
                                <div class="grid grid-cols-1 gap-4 mb-4">
                                    <div class="table-responsive custom-table">
                                        <table
                                            class="table table-nowrap dataTable min-w-full text-sm align-middle whitespace-nowrap"
                                            id="deals-project">
                                            <thead class="table-light">
                                                <tr class="border-b border-gray-100 dark:border-gray-700/50">
                                                    <th class="text-left py-2 px-3 font-medium text-gray-700 py-4 text-gray-900 bg-gray-100/75 font-semibold dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                                                        data-dt-column="0" rowspan="1" colspan="1"><span
                                                            class="dt-column-title text-gray-900">Deal
                                                            Name</span><span class="dt-column-order"></span></th>
                                                    <th class="text-left py-2 px-3 font-medium text-gray-700 py-4 text-gray-900 bg-gray-100/75 font-semibold dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                                                        data-dt-column="1" rowspan="1" colspan="1"><span
                                                            class="dt-column-title text-gray-900">Stage</span><span
                                                            class="dt-column-order"></span></th>
                                                    <th class="text-left py-2 px-3 font-medium text-gray-700 py-4 text-gray-900 bg-gray-100/75 font-semibold dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none dt-type-numeric"
                                                        data-dt-column="2" rowspan="1" colspan="1"><span
                                                            class="dt-column-title text-gray-900">Deal
                                                            Value</span><span class="dt-column-order"></span></th>
                                                    <th class="text-left py-2 px-3 font-medium text-gray-700 py-4 text-gray-900 bg-gray-100/75 font-semibold dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                                                        data-dt-column="3" rowspan="1" colspan="1"><span
                                                            class="dt-column-title text-gray-900">Status</span><span
                                                            class="dt-column-order"></span></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                                                <td class="p-3"><router-link to="/crm/deals-details"
                                                    class="font-medium text-gray-900 hover:text-primary">SkyHigh Annual Booking</router-link></td>
                                                <td class="p-3">Appointment</td>
                                                <td class="dt-type-numeric p-3">$04,51,000</td>
                                                <td class="p-3"><span
                                                    class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">Won</span>
                                                </td>
                                                </tr>
                                                <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                                                <td class="p-3"><router-link to="/crm/deals-details"
                                                    class="font-medium text-gray-900 hover:text-primary">CRM Onboarding Package</router-link></td>
                                                <td class="p-3">Contact Made</td>
                                                <td class="dt-type-numeric p-3">$72,14,078</td>
                                                <td class="p-3"><span
                                                    class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-danger">Lost</span>
                                                </td>
                                                </tr>
                                                <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                                                <td class="p-3"><router-link to="/crm/deals-details"
                                                    class="font-medium text-gray-900 hover:text-primary">Enterprise Plan Upgrade</router-link></td>
                                                <td class="p-3">Presentation</td>
                                                <td class="dt-type-numeric p-3">$04,14,800</td>
                                                <td class="p-3"><span
                                                    class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">Won</span>
                                                </td>
                                                </tr>
                                                <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                                                <td class="p-3"><router-link to="/crm/deals-details"
                                                    class="font-medium text-gray-900 hover:text-primary">CRM Migration Project</router-link></td>
                                                <td class="p-3">Proposal Made</td>
                                                <td class="dt-type-numeric p-3">$16,11,400</td>
                                                <td class="p-3"><span
                                                    class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">Won</span>
                                                </td>
                                                </tr>
                                                <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                                                <td class="p-3"><router-link to="/crm/deals-details"
                                                    class="font-medium text-gray-900 hover:text-primary">Sales Pipeline Optimization</router-link></td>
                                                <td class="p-3">Qualify To Buy</td>
                                                <td class="dt-type-numeric p-3">$09,05,947</td>
                                                <td class="p-3"><span
                                                    class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">Won</span>
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
                    </div>
                </div>

                <!-- Deals by Stage -->
                <div class="w-full md:w-1/2 flex mb-5">
                    <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                        <div class="border-b border-borderColor px-4 py-3">
                            <div class="flex flex-wrap justify-between items-center gap-y-3">
                                <h6 class="text-base font-semibold m-0">Deals By Stage</h6>
                                <div class="flex flex-wrap items-center gap-2">
                                    <!-- Pipeline Dropdown -->
                                    <div>
                                        <a href="javascript:void(0);"
                                            class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                            data-dropdown-toggle="pipeline-dropdown">
                                            Sales Pipeline<i class="ti ti-chevron-down ml-1"></i>
                                        </a>
                                        <ul id="pipeline-dropdown"
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
                        </div>
                        <div class="px-4">
                            <div id="deals-chart">
                                <apexchart type="bar" height="385" :options="dealsChart.chart"
                                    :series="dealsChart.series"></apexchart>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex flex-col md:flex-row md:gap-6">

                <!-- Lost Deals Stage -->
                <div class="w-full md:w-1/2 flex mb-5">
                    <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                        <div
                            class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
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
                                        Last 30 days<i class="ti ti-chevron-down ml-1"></i>
                                    </a>
                                    <ul id="last-days-dropdown3"
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
                            <div id="last-chart">
                                <apexchart type="bar" height="180" :options="lastChart.chart"
                                    :series="lastChart.series"></apexchart>
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
                                            Last 30 days<i class="ti ti-chevron-down ml-1"></i>
                                        </a>
                                        <ul id="last-days-dropdown4"
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
                        </div>
                        <div class="px-4">
                            <div id="won-chart">
                                <apexchart type="bar" height="180" :options="wonChart.chart" :series="wonChart.series">
                                </apexchart>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Deals by Year -->
            <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                <div class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                    <h6 class="m-0">Deals by Year</h6>
                    <div class="flex flex-wrap items-center gap-2">
                        <!-- Pipeline Dropdown -->
                        <div>
                            <a href="javascript:void(0);"
                                class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                data-dropdown-toggle="pipeline-dropdown4">
                                Sales Pipeline<i class="ti ti-chevron-down ml-1"></i>
                            </a>
                            <ul id="pipeline-dropdown4"
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
                    <div id="deals-year">
                        <apexchart type="area" height="273" :options="dealsYear.chart" :series="dealsYear.series">
                        </apexchart>
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
import { onMounted, onUnmounted, ref } from 'vue';
import { initFlowbite } from 'flowbite';
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { dealsChart, lastChart, wonChart, dealsYear } from "./data";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { computed, onBeforeUnmount, watchEffect, } from "vue";
export default {
    data() {
        return {
            dealsChart: dealsChart,
            lastChart: lastChart,
            wonChart: wonChart,
            dealsYear: dealsYear,
        };
    },
    methods: {
        toggleHeader() {
            document.getElementById("collapse-header").classList.toggle("active");
            document.body.classList.toggle("header-collapse");
        },
    },
    setup() {
        const route = useRoute(); // Get the current route

        onMounted(() => {
            updateHtmlAndBody();
        });

        // Compute the layout type (data-layout attribute)
        const layoutType = computed(() => {
            return route.path === "/layouts/layout-mini" ? "mini" : "";
        });

        // Function to update the <html> and <body> tags based on the route
        const updateHtmlAndBody = () => {
        // Get the computed layout type
            const layout = layoutType.value;

            // Update the <html> element's data-layout attribute
            if (layout) {
                document.documentElement.setAttribute("data-layout", layout);
            } else {
                document.documentElement.removeAttribute("data-layout");
            }

            // Update <body> class based on route
            if (route.path === "/layouts/layout-mini") {
                document.body.classList.add("mini-sidebar");
            } else {
                document.body.classList.remove("mini-sidebar");
            }
        };

        // Watch for route changes and apply the necessary updates
        watchEffect(() => {
            updateHtmlAndBody();
        });

        // Clean up on component unmount
        onBeforeUnmount(() => {
            document.documentElement.removeAttribute("data-layout");
            document.body.classList.remove("mini-sidebar");
        });

        // Cleanup when the route changes
        onBeforeRouteUpdate(() => {
            document.documentElement.removeAttribute("data-layout");
            document.body.classList.remove("mini-sidebar");
        });

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
            layoutType,
        };
    },
};
</script>