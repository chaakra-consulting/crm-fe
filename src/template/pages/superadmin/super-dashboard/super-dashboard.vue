<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[56px] ml-[240px]">
    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-5">
        <div>
          <h4>Dashboard</h4>
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

      <!-- Start Welcome Wrap -->
      <div class="mb-5">
        <div class="flex items-center justify-between flex-wrap gap-3 bg-gray-900 rounded p-[24px]">
          <div>
            <h2 class="mb-1 text-white text-2xl">Welcome Back, Adrian</h2>
            <p class="text-light text-sm mb-0">14 New Companies Subscribed Today !!!</p>
          </div>
          <div class="flex items-center flex-wrap gap-2">
            <router-link to="/super-admin/company"
              class="bg-red-600 hover:bg-red-700 text-white text-sm py-1.5 px-3 rounded">Companies</router-link>
            <router-link to="/super-admin/packages"
              class="bg-white hover:bg-gray-100 text-gray-900 text-sm py-1.5 px-3 rounded border border-gray-300">All
              Packages</router-link>
          </div>
        </div>
      </div>
      <!-- End Welcome Wrap -->

      <!-- Start Row -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5">
        <!-- Card Template -->
        <div class="flex mb-5">
          <div class="relative flex-1 bg-white rounded overflow-hidden border border-borderColor">
            <div class="relative z-10 p-4">
              <div class="flex items-start justify-between">
                <div>
                  <p class="text-sm mb-1">Total Companies</p>
                  <h2 class="text-base font-semibold mb-1">5468</h2>
                  <p class="text-green-600 text-xs mb-0 flex items-center">
                    <i class="ti ti-arrow-bar-up mr-1"></i>5.62%
                    <span class="ml-1 text-[13px] text-gray-500">from last month</span>
                  </p>
                </div>
                <div>
                  <span
                    class="w-10 h-10 flex items-center justify-center rounded-full bg-danger-100 border border-danger">
                    <i class="ti ti-building text-danger text-base"></i>
                  </span>
                </div>
              </div>
            </div>
            <img src="@/assets/img/icons/elemnt-01.svg" alt="elemnt-01" class="absolute top-0 left-0 w-auto h-auto z-0">
          </div>
        </div>

        <!-- Repeat this block for each card with different content -->
        <div class="flex mb-5">
          <div class="relative flex-1 bg-white rounded border border-borderColor overflow-hidden">
            <div class="relative z-10 p-4">
              <div class="flex items-start justify-between">
                <div>
                  <p class="text-sm mb-1">Active Companies</p>
                  <h2 class="text-base font-semibold mb-1">4598</h2>
                  <p class="text-red-600 text-xs mb-0 flex items-center">
                    <i class="ti ti-arrow-bar-down mr-1"></i>12%
                    <span class="ml-1 text-[13px] text-gray-500">from last month</span>
                  </p>
                </div>
                <div>
                  <span
                    class="w-10 h-10 flex items-center justify-center rounded-full bg-success-100 border border-success">
                    <i class="ti ti-carousel-vertical text-success text-base"></i>
                  </span>
                </div>
              </div>
            </div>
            <img src="@/assets/img/icons/elemnt-02.svg" alt="elemnt-02" class="absolute top-0 left-0 w-auto h-auto z-0">
          </div>
        </div>

        <div class="flex mb-5">
          <div class="relative flex-1 bg-white rounded border border-borderColor overflow-hidden">
            <div class="relative z-10 p-4">
              <div class="flex items-start justify-between">
                <div>
                  <p class="text-sm mb-1">Total Subscribers</p>
                  <h2 class="text-base font-semibold mb-1">5468</h2>
                  <p class="text-green-600 text-xs mb-0 flex items-center">
                    <i class="ti ti-arrow-bar-up mr-1"></i>6%
                    <span class="text-[13px] text-gray-500 ml-1">from last month</span>
                  </p>
                </div>
                <div>
                  <span
                    class="w-10 h-10 flex items-center justify-center rounded-full bg-warning-100 border border-warning">
                    <i class="ti ti-chalkboard-off text-warning text-base"></i>
                  </span>
                </div>
              </div>
            </div>
            <img src="@/assets/img/icons/elemnt-03.svg" alt="elemnt-03" class="absolute top-0 left-0 w-auto h-auto z-0">
          </div>
        </div>

        <div class="flex mb-5">
          <div class="relative flex-1 bg-white rounded border border-borderColor overflow-hidden">
            <div class="relative z-10 p-4">
              <div class="flex items-start justify-between">
                <div>
                  <p class="text-sm mb-1">Total Earnings</p>
                  <h2 class="text-base font-semibold mb-1">$89,878,58</h2>
                  <p class="text-red-600 text-xs mb-0 flex items-center">
                    <i class="ti ti-arrow-bar-down mr-1"></i>16%
                    <span class="text-[13px] text-gray-500 ml-1">from last month</span>
                  </p>
                </div>
                <div>
                  <span
                    class="w-10 h-10 flex items-center justify-center rounded-full bg-danger-100 border border-danger mb-3">
                    <i class="ti ti-businessplan text-danger text-base"></i>
                  </span>
                </div>
              </div>
            </div>
            <img src="@/assets/img/icons/elemnt-04.svg" alt="elemnt-04" class="absolute top-0 left-0 w-auto h-auto z-0">
          </div>
        </div>
      </div>
      <!-- End Row -->

      <!-- Start Row -->
      <div class="xxl:grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 lg:gap-5">
        <!-- Companies -->
        <div class="flex mb-5">
          <div class="bg-white border border-borderColor rounded w-full">
            <div class="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-borderColor">
              <h6 class="m-0">Companies</h6>
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="last-days-dropdown3">
                  <i class="ti ti-calendar mr-1"></i>This Week<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="last-days-dropdown3"
                  class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">This
                      Month</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">This
                      Week</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Today</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="p-4">
              <div id="company-chart">
                <apexchart
                  type="bar"
                  height="350"
                  :options="companyChart.company"
                  :series="companyChart.series"
                >
                </apexchart>
              </div>
              <p class="text-green-600 text-center text-xs mt-4">
                <i class="ti ti-arrow-bar-up mr-1"></i>12.5%
                <span class="text-gray-500 ml-1">from last month</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Revenue -->
        <div class="flex mb-5">
          <div class="bg-white border border-borderColor rounded w-full">
            <div class="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-borderColor">
              <h6 class="m-0">Revenue</h6>
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="years-dropdown">
                  <i class="ti ti-calendar mr-1"></i>2025<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="years-dropdown" class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">2025</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">2024</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">2023</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="p-4 pb-0">
              <div class="flex items-center justify-between flex-wrap mb-3">
                <div>
                  <h6 class="mb-2">$89,878,58</h6>
                  <p class="text-[13px] text-gray-500 mb-0">
                    <span class="text-green-600 font-normal mr-1">
                      <i class="ti ti-arrow-bar-up mr-1"></i>40%</span>increased from last year
                  </p>
                </div>
                <p class="text-sm text-gray-800 flex items-center mb-0">
                  <i class="ti ti-circle-filled text-gray-900 text-[6px] mr-1"></i>Revenue
                </p>
              </div>
              <div id="revenue-income">
                <apexchart
                  type="bar"
                  height="350"
                  :options="revenueCharts.income"
                  :series="revenueCharts.series"
                >
                </apexchart>
              </div>
            </div>
          </div>
        </div>

        <!-- Top Plans -->
        <div class="mb-5">
          <div class="bg-white border border-borderColor rounded w-full">
            <div class="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-borderColor">
              <h6 class="m-0">Top Plans</h6>
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="last-days-dropdown5">
                  Last 30 Days<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="last-days-dropdown5"
                  class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                      30 Days</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                      10 Days</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Today</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="p-4">
              <div id="plan-overview">
                <apexchart
                  type="donut"
                  height="240"
                  :options="donutChart.donut"
                  :series="donutChart.series"
                >
                </apexchart>
              </div>
              <div class="flex justify-between items-center mb-3">
                <p class="text-sm font-medium text-gray-800 flex items-center">
                  <i class="ti ti-circle-filled text-info mr-1"></i>Basic
                </p>
                <p class="text-sm font-medium text-gray-800">60%</p>
              </div>
              <div class="flex justify-between items-center mb-3">
                <p class="text-sm font-medium text-gray-800 flex items-center">
                  <i class="ti ti-circle-filled text-yellow-500 mr-1"></i>Premium
                </p>
                <p class="text-sm font-medium text-gray-800">20%</p>
              </div>
              <div class="flex justify-between items-center">
                <p class="text-sm font-medium text-gray-800 flex items-center">
                  <i class="ti ti-circle-filled text-blue-600 mr-1"></i>Enterprise
                </p>
                <p class="text-sm font-medium text-gray-800">20%</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- End Row -->

      <div class="xxl:grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 lg:gap-5">

        <!-- Recent Transactions -->
        <div class="mb-5">
          <div class="bg-white border border-borderColor rounded w-full">
            <div class="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-borderColor">
              <h6 class="m-0">Recent Transactions</h6>
              <router-link to="/super-admin/purchase-transaction"
                class="bg-primary text-white px-2 text-[12px] py-1 font-medium rounded hover:bg-primary/90">View All</router-link>
            </div>
            <div class="p-4 space-y-5">
              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="#"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-01.svg" class="w-auto h-auto object-contain"
                      alt="NovaWave LLC">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="#">NovaWave LLC</a></h6>
                    <p class="text-[13px] text-gray-500">14 Sep 2025</p>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm font-medium mb-1">+$245</h6>
                  <p class="text-[13px] text-gray-500">Basic (Monthly)</p>
                </div>
              </div>

              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="#"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-02.svg" class="w-full h-full object-contain" alt="BlueSky">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate"><a href="#">BlueSky</a></h6>
                    <p class="text-[13px] text-gray-500">20 Mar 2025</p>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm font-medium mb-1">+$395</h6>
                  <p class="text-[13px] text-gray-500">Enterprise (Yearly)</p>
                </div>
              </div>

              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="#"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-03.svg" class="w-full h-full object-contain"
                      alt="Silver Hawk">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="#">Silver Hawk</a></h6>
                    <p class="text-[13px] text-gray-500">26 Mar 2025</p>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm font-medium mb-1">+$145</h6>
                  <p class="text-[13px] text-gray-500">Advanced (Monthly)</p>
                </div>
              </div>

              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="#"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-04.svg" class="w-full h-full object-contain"
                      alt="Summit Peak">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="#">Summit Peak</a></h6>
                    <p class="text-[13px] text-gray-500">10 Feb 2025</p>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm font-medium mb-1">+$758</h6>
                  <p class="text-[13px] text-gray-500">Enterprise (Monthly)</p>
                </div>
              </div>

              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="#"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-05.svg" class="w-full h-full object-contain"
                      alt="RiverStone Ltd">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="#">RiverStone Ltd</a></h6>
                    <p class="text-[13px] text-gray-500">10 Jan 2025</p>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm font-medium mb-1">+$977</h6>
                  <p class="text-[13px] text-gray-500">Premium (Yearly)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recently Registered -->
        <div class="flex mb-5">
          <div class="bg-white border border-borderColor rounded w-full">
            <div class="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-borderColor">
              <h6 class="m-0">Recently Registered</h6>
              <router-link to="/super-admin/purchase-transaction"
                class="bg-primary text-white px-2 text-[12px] py-1 font-medium rounded hover:bg-primary/90">View All</router-link>
            </div>
            <div class="p-4 space-y-5">
              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="javscript:void(0);"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-07.svg" class="w-auto h-auto object-contain"
                      alt="Bright Bridge Grp">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="javscript:void(0);">Bright Bridge Grp</a>
                    </h6>
                    <p class="text-[13px] text-gray-500">Basic (Monthly)</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-sm mb-1">150 Users</p>
                  <h6 class="text-sm font-normal text-gray-900 truncate">bbg@example.com</h6>
                </div>
              </div>
              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="javscript:void(0);"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-08.svg" class="w-auto h-auto object-contain"
                      alt="Bright Bridge Grp">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="javscript:void(0);">CoastalStar Co.</a></h6>
                    <p class="text-[13px] text-gray-500">2Enterprise (Yearly)</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-sm mb-1">200 Users</p>
                  <h6 class="text-sm font-normal text-gray-900 truncate">csc@example.com</h6>
                </div>
              </div>
              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="javscript:void(0);"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-09.svg" class="w-auto h-auto object-contain"
                      alt="Bright Bridge Grp">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="javscript:void(0);">HarborView</a></h6>
                    <p class="text-[13px] text-gray-500">Advanced (Monthly)</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-sm mb-1">129 Users</p>
                  <h6 class="text-sm font-normal text-gray-900 truncate">hv@example.com</h6>
                </div>
              </div>
              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="javscript:void(0);"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-10.svg" class="w-auto h-auto object-contain"
                      alt="Bright Bridge Grp">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="javscript:void(0);">Golden Gate Ltd</a></h6>
                    <p class="text-[13px] text-gray-500">Enterprise (Monthly)</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-sm mb-1">103 Users</p>
                  <h6 class="text-sm font-normal text-gray-900 truncate">ggl@example.com</h6>
                </div>
              </div>
              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="javscript:void(0);"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-11.svg" class="w-auto h-auto object-contain"
                      alt="Bright Bridge Grp">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="javscript:void(0);">Redwood Inc</a></h6>
                    <p class="text-[13px] text-gray-500">Premium (Yearly)</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-sm mb-1">109 Users</p>
                  <h6 class="text-sm font-normal text-gray-900 truncate">rw@example.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recently Plan Expired -->
        <div class="flex mb-5">
          <div class="bg-white border border-borderColor rounded w-full">
            <div class="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-borderColor">
              <h5 class="text-base font-bold m-0">Recently Plan Expired</h5>
              <router-link to="/super-admin/purchase-transaction"
                class="bg-primary text-white px-2 text-[12px] py-1 font-medium rounded hover:bg-primary/90">View All</router-link>
            </div>
            <div class="p-4 space-y-5">
              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="javscript:void(0);"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-12.svg" class="w-auto h-auto object-contain"
                      alt="VK Pvt Ltd">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="javscript:void(0);">VK Pvt Ltd</a></h6>
                    <p class="text-[13px] text-gray-500">14 Sep 2025</p>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm text-info underline font-medium truncate mb-1"><a href="javscript:void(0);">Send
                      Reminder</a></h6>
                  <p class="text-[13px] text-gray-500">Basic (Monthly)</p>
                </div>
              </div>
              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="javscript:void(0);"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-13.svg" class="w-auto h-auto object-contain"
                      alt="VK Pvt Ltd">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="javscript:void(0);">RiverStone Ltd</a></h6>
                    <p class="text-[13px] text-gray-500">20 Mar 2025</p>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm text-info underline font-medium truncate mb-1"><a href="javscript:void(0);">Send
                      Reminder</a></h6>
                  <p class="text-[13px] text-gray-500">Enterprise (Yearly)</p>
                </div>
              </div>
              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="javscript:void(0);"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-14.svg" class="w-auto h-auto object-contain"
                      alt="VK Pvt Ltd">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="javscript:void(0);">Summit Peak</a></h6>
                    <p class="text-[13px] text-gray-500">26 Mar 2025</p>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm text-info underline font-medium truncate mb-1"><a href="javscript:void(0);">Send
                      Reminder</a></h6>
                  <p class="text-[13px] text-gray-500">Advanced (Monthly)</p>
                </div>
              </div>
              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="javscript:void(0);"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-15.svg" class="w-auto h-auto object-contain"
                      alt="VK Pvt Ltd">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="javscript:void(0);">Redwood Inc</a></h6>
                    <p class="text-[13px] text-gray-500">10 Feb 2025</p>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm text-info underline font-medium truncate mb-1"><a href="javscript:void(0);">Send
                      Reminder</a></h6>
                  <p class="text-[13px] text-gray-500">Enterprise (Monthly)</p>
                </div>
              </div>
              <div class="flex flex-wrap justify-between items-start">
                <div class="flex items-center gap-3">
                  <a href="javscript:void(0);"
                    class="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor">
                    <img src="@/assets/img/icons/company-icon-16.svg" class="w-auto h-auto object-contain"
                      alt="VK Pvt Ltd">
                  </a>
                  <div>
                    <h6 class="font-medium text-sm truncate mb-1"><a href="javscript:void(0);">NovaWave LLC</a></h6>
                    <p class="text-[13px] text-gray-500">10 Jan 2025</p>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm text-info underline font-medium truncate mb-1"><a href="javscript:void(0);">Send
                      Reminder</a></h6>
                  <p class="text-[13px] text-gray-500">Premium (Yearly)</p>
                </div>
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
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import { initFlowbite } from "flowbite";
import DateRangePicker from "daterangepicker";
import {
  companyChart,
  revenueCharts,
  donutChart,
  totalChart,
  activeChart,
  inactiveChart,
  locationChart,
} from "./data";
export default {
  data() {
    return {
      totalChart: totalChart,
      activeChart: activeChart,
      inactiveChart: inactiveChart,
      locationChart: locationChart,
      companyChart: companyChart,
      revenueCharts: revenueCharts,
      donutChart: donutChart,
      title: "Dashboard",
      text: "Superadmin",
      text1: "Dashboard",
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
  setup() {
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      initFlowbite();
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
