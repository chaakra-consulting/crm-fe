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
            Analytics
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Analytics</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
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

      <div class="grid grid-cols-1 md:grid-cols-12 gap-y-5 gap-x-5">
        <div class="md:col-span-6">
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
            <div class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
              <h6 class="m-0">Recently Created Contacts</h6>

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
                      30 days</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                      3 Months</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                      6 Months</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="table-responsive custom-table px-4">
              <div id="analytic-contact_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div class="justify-self-start "></div>
                  <div class="col-start-2 justify-self-end "></div>
                </div>
                <div class="grid grid-cols-1 gap-4 mb-4">
                  <div class="col-span-2 table-responsive">
                    <table class="table table-nowrap dataTable min-w-full text-sm align-middle whitespace-nowrap"
                      id="analytic-contact">
                      <thead class="table-light">
                        <tr class="border-b border-gray-100 dark:border-gray-700/50">
                          <th data-dt-column="0"
                            class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                            rowspan="1" colspan="1"><span class="dt-column-title text-gray-900">Deal Name</span><span
                              class="dt-column-order"></span></th>
                          <th data-dt-column="1"
                            class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                            rowspan="1" colspan="1"><span class="dt-column-title text-gray-900">Stage</span><span
                              class="dt-column-order"></span></th>
                          <th data-dt-column="2"
                            class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                            rowspan="1" colspan="1"><span class="dt-column-title text-gray-900">Deal Value</span><span
                              class="dt-column-order"></span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3">
                            <div class="flex items-center"><router-link to="contact-details" class="avatar"><img
                                  class="img-fluid rounded-full" src="@/assets/img/profiles/avatar-09.jpg"
                                  alt="User Image"></router-link>
                              <div class="ms-2">
                                <h6 class="text-[14px] font-medium mb-1"><router-link to="contact-details"
                                    class="flex flex-col font-medium">Elizabeth Morgan</router-link></h6><span
                                  class="text-default text-[13px] inline-block">Product Manager </span>
                              </div>
                            </div>
                          </td>
                          <td class="p-3">+1 87545 54503</td>
                          <td class="p-3">10 May 2025</td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3">
                            <div class="flex items-center"><router-link to="contact-details" class="avatar"><img
                                  class="img-fluid rounded-full" src="@/assets/img/profiles/avatar-22.jpg"
                                  alt="User Image"></router-link>
                              <div class="ms-2">
                                <h6 class="text-[14px] font-medium mb-1"><router-link to="contact-details"
                                    class="flex flex-col font-medium">Katherine Brooks</router-link></h6><span
                                  class="text-default text-[13px] inline-block">Installer </span>
                              </div>
                            </div>
                          </td>
                          <td class="p-3">+1 98975 17485</td>
                          <td class="p-3">02 May 2025</td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3">
                            <div class="flex items-center"><router-link to="contact-details" class="avatar"><img
                                  class="img-fluid rounded-full" src="@/assets/img/profiles/avatar-08.jpg"
                                  alt="User Image"></router-link>
                              <div class="ms-2">
                                <h6 class="text-[14px] font-medium mb-1"><router-link to="contact-details"
                                    class="flex flex-col font-medium">Samantha Reed</router-link></h6><span
                                  class="text-default text-[13px] inline-block">Human Resources </span>
                              </div>
                            </div>
                          </td>
                          <td class="p-3">+1 54655 25455</td>
                          <td class="p-3">28 Apr 2025</td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3">
                            <div class="flex items-center"><router-link to="contact-details" class="avatar"><img
                                  class="img-fluid rounded-full" src="@/assets/img/profiles/avatar-24.jpg"
                                  alt="User Image"></router-link>
                              <div class="ms-2">
                                <h6 class="text-[14px] font-medium mb-1"><router-link to="contact-details"
                                    class="flex flex-col font-medium">William Anderson</router-link></h6><span
                                  class="text-default text-[13px] inline-block">Data Analytics </span>
                              </div>
                            </div>
                          </td>
                          <td class="p-3">+1 45447 58787</td>
                          <td class="p-3">16 Apr 2025</td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3">
                            <div class="flex items-center"><router-link to="contact-details" class="avatar"><img
                                  class="img-fluid rounded-full" src="@/assets/img/profiles/avatar-23.jpg"
                                  alt="User Image"></router-link>
                              <div class="ms-2">
                                <h6 class="text-[14px] font-medium mb-1"><router-link to="contact-details"
                                    class="flex flex-col font-medium">Jonathan Mitchell</router-link></h6><span
                                  class="text-default text-[13px] inline-block">Facility Manager </span>
                              </div>
                            </div>
                          </td>
                          <td class="p-3">+1 12454 27845</td>
                          <td class="p-3">05 Apr 2025</td>
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
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
            <div class="border-b border-borderColor px-4 py-3">
              <div class="flex flex-wrap justify-between items-center gap-y-3">
                <h6 class="text-base font-semibold m-0">Won Deals Stage</h6>
                <div class="flex flex-wrap items-center gap-3">
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
                          3 Months</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                          6 Months</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4">
              <div id="won-chart">
                <apexchart
                  type="bar"
                  height="180"
                  :options="wonChart.chart"
                  :series="wonChart.series"
                ></apexchart>
              </div>
            </div>
          </div>
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
            <div class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
              <h6 class="m-0">Recently Created Deals</h6>

              <!-- Dropdown -->
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="days-dropdown">
                  Last 30 days<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="days-dropdown" class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                      30 days</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                      3 Months</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                      6 Months</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="table-responsive custom-table px-4">
              <div id="analytic-deal_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div class="justify-self-start "></div>
                  <div class="col-start-2 justify-self-end "></div>
                </div>
                <div class="grid grid-cols-1 gap-4 mb-4">
                  <div class="col-span-2 table-responsive">
                    <table class="table table-nowrap dataTable min-w-full text-sm align-middle whitespace-nowrap"
                      id="analytic-deal">
                      <thead class="table-light">
                        <tr class="border-b border-gray-100 dark:border-gray-700/50">
                          <th data-dt-column="0"
                            class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                            rowspan="1" colspan="1"><span class="dt-column-title text-gray-900">Deal Name</span><span
                              class="dt-column-order"></span></th>
                          <th data-dt-column="1"
                            class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                            rowspan="1" colspan="1"><span class="dt-column-title text-gray-900">Stage</span><span
                              class="dt-column-order"></span></th>
                          <th data-dt-column="2"
                            class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none dt-type-numeric"
                            rowspan="1" colspan="1"><span class="dt-column-title text-gray-900">Deal Value</span><span
                              class="dt-column-order"></span></th>
                          <th data-dt-column="3"
                            class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none dt-type-numeric"
                            rowspan="1" colspan="1"><span class="dt-column-title text-gray-900"></span><span
                              class="dt-column-order"></span></th>
                          <th data-dt-column="4"
                            class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                            rowspan="1" colspan="1"><span class="dt-column-title text-gray-900"></span><span
                              class="dt-column-order"></span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3"><router-link to="/crm/deals-details" class="hover:text-primary">
                              Collins</router-link></td>
                          <td class="p-3">Conversation</td>
                          <td class="dt-type-numeric p-3">$04,51,000</td>
                          <td class="dt-type-numeric p-3">85%</td>
                          <td class="p-3"><span
                              class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-info">
                              Open</span></td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3"><router-link to="/crm/deals-details" class="hover:text-primary">
                              Konopelski</router-link></td>
                          <td class="p-3">Pipeline</td>
                          <td class="dt-type-numeric p-3">$04,14,800</td>
                          <td class="dt-type-numeric p-3">15%</td>
                          <td class="p-3"><span
                              class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-danger">
                              Lost</span></td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3"><router-link to="/crm/deals-details" class="hover:text-primary">
                              Adams</router-link></td>
                          <td class="p-3">Won</td>
                          <td class="dt-type-numeric p-3">$04,14,800</td>
                          <td class="dt-type-numeric p-3">95%</td>
                          <td class="p-3"><span
                              class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">
                              Won</span></td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3"><router-link to="/crm/deals-details" class="hover:text-primary">
                              Schumm</router-link></td>
                          <td class="p-3">Lost</td>
                          <td class="dt-type-numeric p-3">$9,14,400</td>
                          <td class="dt-type-numeric p-3">47%</td>
                          <td class="p-3"><span
                              class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">
                              Won</span></td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3"><router-link to="/crm/deals-details" class="hover:text-primary">
                              Wisozk</router-link></td>
                          <td class="p-3">Follow Up</td>
                          <td class="dt-type-numeric p-3">$11,14,400</td>
                          <td class="dt-type-numeric p-3">98%</td>
                          <td class="p-3"><span
                              class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">
                              Won</span></td>
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
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
            <div class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
              <h6 class="m-0">Lost Leads Stage</h6>
              <div class="flex flex-wrap items-center gap-3">
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
                <apexchart
                  type="bar"
                  height="180"
                  :options="lastChart.chart"
                  :series="lastChart.series"
                ></apexchart>
              </div>
            </div>
          </div>
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
            <div class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
              <h6 class="m-0">Leads By Stage</h6>
              <div class="flex flex-wrap items-center gap-3">
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
                    data-dropdown-toggle="last-days-dropdown13">
                    Last 3 months<i class="ti ti-chevron-down ml-1"></i>
                  </a>
                  <ul id="last-days-dropdown13"
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
              <div id="leads-chart">
                <apexchart
                  type="bar"
                  height="310"
                  :options="leadsChart.leads"
                  :series="leadsChart.series"
                ></apexchart>
              </div>
            </div>
          </div>
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
            <div class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
              <h6 class="m-0">Recently Added Companies</h6>
              <div class="flex flex-wrap items-center gap-3">
                <!-- Time Filter Dropdown -->
                <div>
                  <a href="javascript:void(0);"
                    class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="last-days-dropdown8">
                    Last 3 months<i class="ti ti-chevron-down ml-1"></i>
                  </a>
                  <ul id="last-days-dropdown8"
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
            <div>
              <div class="table-responsive custom-table px-4">
                <div id="analytic-company_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
                  <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="justify-self-start "></div>
                    <div class="col-start-2 justify-self-end "></div>
                  </div>
                  <div class="grid grid-cols-1 gap-4 mb-4">
                    <div class="col-span-2 table-responsive">
                      <table class="table table-nowrap dataTable min-w-full text-sm align-middle whitespace-nowrap"
                        id="analytic-company">
                        <thead class="table-light">
                          <tr class="border-b border-gray-100 dark:border-gray-700/50">
                            <th data-dt-column="0"
                              class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                              rowspan="1" colspan="1"><span class="dt-column-title text-gray-900">Company
                                Name</span><span class="dt-column-order"></span></th>
                            <th data-dt-column="1"
                              class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                              rowspan="1" colspan="1"><span class="dt-column-title text-gray-900">Phone</span><span
                                class="dt-column-order"></span></th>
                            <th data-dt-column="2"
                              class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                              rowspan="1" colspan="1"><span class="dt-column-title text-gray-900">Created at</span><span
                                class="dt-column-order"></span></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                            <td class="p-3">
                              <div class="flex items-center"><router-link to="/crm/company-details"
                                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center"><img
                                    class="w-auto h-auto" src="@/assets/img/icons/company-icon-01.svg"
                                    alt="User Image"></router-link>
                                <div class="ms-2">
                                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                                      class="hover:text-primary">NovaWaveLLC</router-link></h6>
                                </div>
                              </div>
                            </td>
                            <td class="p-3">+1 87545 54503</td>
                            <td class="p-3">10 May 2025</td>
                          </tr>
                          <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                            <td class="p-3">
                              <div class="flex items-center"><router-link to="/crm/company-details"
                                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center"><img
                                    class="w-auto h-auto" src="@/assets/img/icons/company-icon-02.svg"
                                    alt="User Image"></router-link>
                                <div class="ms-2">
                                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                                      class="hover:text-primary">BlueSky Industries</router-link></h6>
                                </div>
                              </div>
                            </td>
                            <td class="p-3">+1 98975 17485</td>
                            <td class="p-3">02 May 2025</td>
                          </tr>
                          <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                            <td class="p-3">
                              <div class="flex items-center"><router-link to="/crm/company-details"
                                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center"><img
                                    class="w-auto h-auto" src="@/assets/img/icons/company-icon-03.svg"
                                    alt="User Image"></router-link>
                                <div class="ms-2">
                                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                                      class="hover:text-primary">Silver Hawk</router-link></h6>
                                </div>
                              </div>
                            </td>
                            <td class="p-3">+1 54655 25455</td>
                            <td class="p-3">28 Apr 2025</td>
                          </tr>
                          <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                            <td class="p-3">
                              <div class="flex items-center"><router-link to="/crm/company-details"
                                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center"><img
                                    class="w-auto h-auto" src="@/assets/img/icons/company-icon-04.svg"
                                    alt="User Image"></router-link>
                                <div class="ms-2">
                                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                                      class="hover:text-primary">Summit Peak</router-link></h6>
                                </div>
                              </div>
                            </td>
                            <td class="p-3">+1 45447 58787</td>
                            <td class="p-3">16 Apr 2025</td>
                          </tr>
                          <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                            <td class="p-3">
                              <div class="flex items-center"><router-link to="/crm/company-details"
                                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center"><img
                                    class="w-auto h-auto" src="@/assets/img/icons/company-icon-05.svg"
                                    alt="User Image"></router-link>
                                <div class="ms-2">
                                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                                      class="hover:text-primary">RiverStone Ltd</router-link></h6>
                                </div>
                              </div>
                            </td>
                            <td class="p-3">+1 12454 27845</td>
                            <td class="p-3">05 Apr 2025</td>
                          </tr>
                          <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                            <td class="p-3">
                              <div class="flex items-center"><router-link to="/crm/company-details"
                                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center"><img
                                    class="w-auto h-auto" src="@/assets/img/icons/company-icon-06.svg"
                                    alt="User Image"></router-link>
                                <div class="ms-2">
                                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
                                      class="hover:text-primary">Redwood Inc</router-link></h6>
                                </div>
                              </div>
                            </td>
                            <td class="p-3">+1 46789 27845</td>
                            <td class="p-3">15 Nov 2025</td>
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
        </div>
        <div class="md:col-span-6">
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
            <div class="border-b border-borderColor px-4 py-3">
              <div class="flex flex-wrap justify-between items-center gap-y-3">
                <h6 class="text-base font-semibold m-0">Deals By Stage</h6>
                <div class="flex flex-wrap items-center gap-3">
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
                          3 Months</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                          6 Months</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4">
              <div id="deals-chart">
              <apexchart
                  type="bar"
                  height="385"
                  :options="dealsChart.chart"
                  :series="dealsChart.series"
                ></apexchart></div>
            </div>
          </div>
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
            <div class="border-b border-borderColor px-4 py-3">
              <div class="flex flex-wrap justify-between items-center gap-y-3">
                <h6 class="mb-0">Activities</h6>
                <div class="flex items-center flex-wrap gap-3">
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
                          30 days</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                          3 Months</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Last
                          6 Months</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4">
              <div class="bg-white border border-borderColor rounded mb-4">
                <div class="card-body p-4">
                  <!-- start row -->
                  <div class="grid grid-cols-1 md:grid-cols-12 gap-y-3 gap-x-3">
                    <div class="md:col-span-4">
                      <div class="activity-name">
                        <h6 class="text-[14px] font-medium mb-1">We scheduled a meeting</h6>
                        <p class="text-[13px] mb-1">25 sep 2025, 12:12 PM</p>
                        <span class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-info">Meeting</span>
                      </div>
                    </div> <!-- end col -->

                    <div class="md:col-span-4">
                      <div class="flex items-center">
                        <span class="w-10 h-10 rounded-full flex-shrink-0">
                          <img src="@/assets/img/profiles/avatar-12.jpg" class="rounded-full" alt="Img">
                        </span>
                        <div class="ms-2">
                          <h6 class="text-[14px] font-medium mb-1">Elizabeth Morgan</h6>
                          <p class="text-[13px] mb-0">Product Manager</p>
                        </div>
                      </div>
                    </div> <!-- end col -->

                    <div class="md:col-span-4">
                      <div class="md:text-right">
                        <div>
                          <a href="javascript:void(0);"
                            class="border border-borderColor shadow rounded py-1 px-2 text-[13px] bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                            data-dropdown-toggle="small-dropdown1">
                            Inprogress<i class="ti ti-chevron-down ml-1"></i>
                          </a>
                          <ul id="small-dropdown1"
                            class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Inprogress</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Completed</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Cancelled</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> <!-- end col -->
                  </div>
                  <!-- end row -->
                </div> <!-- end card body -->
              </div> <!-- end card -->

              <div class="bg-white border border-borderColor rounded mb-4">
                <div class="card-body p-4">
                  <!-- start row -->
                  <div class="grid grid-cols-1 md:grid-cols-12 gap-y-3 gap-x-3">

                    <div class="md:col-span-4">
                      <div class="activity-name">
                        <h6 class="text-[14px] font-medium mb-1">We scheduled a meeting</h6>
                        <p class="text-[13px] mb-1">28 sep 2025, 12:12 PM</p>
                        <span class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-secondary">Email</span>
                      </div>
                    </div> <!-- end col -->

                    <div class="md:col-span-4">
                      <div class="flex items-center">
                        <span class="w-10 h-10 rounded-full flex-shrink-0">
                          <img src="@/assets/img/profiles/avatar-13.jpg" class="rounded-full" alt="Img">
                        </span>
                        <div class="ms-2">
                          <h6 class="text-[14px] font-medium mb-1">Katherine Brooks</h6>
                          <p class="text-[13px] mb-0">Installer</p>
                        </div>
                      </div>
                    </div> <!-- end col -->

                    <div class="md:col-span-4">
                      <div class="md:text-right">
                        <div>
                          <a href="javascript:void(0);"
                            class="border border-borderColor shadow rounded py-1 px-2 text-[13px] bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                            data-dropdown-toggle="small-dropdown2">
                            Inprogress<i class="ti ti-chevron-down ml-1"></i>
                          </a>
                          <ul id="small-dropdown2"
                            class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Inprogress</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Completed</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Cancelled</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> <!-- end col -->

                  </div>
                  <!-- end row -->

                </div> <!-- end card body -->
              </div> <!-- end card -->

              <div class="bg-white border border-borderColor rounded mb-4">
                <div class="card-body p-4">
                  <!-- start row -->
                  <div class="grid grid-cols-1 md:grid-cols-12 gap-y-3 gap-x-3">
                    <div class="md:col-span-4">
                      <div class="activity-name">
                        <h6 class="text-[14px] font-medium mb-1">We scheduled a meeting</h6>
                        <p class="text-[13px] mb-1">25 jun 2025, 12:12 PM</p>
                        <span class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-info">Task</span>
                      </div>
                    </div> <!-- end col -->

                    <div class="md:col-span-4">
                      <div class="flex items-center">
                        <span class="w-10 h-10 rounded-full flex-shrink-0">
                          <img src="@/assets/img/profiles/avatar-18.jpg" class="rounded-full" alt="Img">
                        </span>
                        <div class="ms-2">
                          <h6 class="text-[14px] font-medium mb-1">Samantha Reed</h6>
                          <p class="text-[13px] mb-0">Human Resources</p>
                        </div>
                      </div>
                    </div> <!-- end col -->

                    <div class="md:col-span-4">
                      <div class="md:text-right">
                        <div>
                          <a href="javascript:void(0);"
                            class="border border-borderColor shadow rounded py-1 px-2 text-[13px] bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                            data-dropdown-toggle="small-dropdown3">
                            Inprogress<i class="ti ti-chevron-down ml-1"></i>
                          </a>
                          <ul id="small-dropdown3"
                            class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Inprogress</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Completed</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Cancelled</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> <!-- end col -->

                  </div>
                  <!-- end row -->
                </div> <!-- end card body -->
              </div> <!-- end card -->

              <div class="bg-white border border-borderColor rounded mb-0">
                <div class="card-body p-4">

                  <!-- start row -->
                  <div class="grid grid-cols-1 md:grid-cols-12 gap-y-3 gap-x-3">

                    <div class="md:col-span-4">
                      <div class="activity-name">
                        <h6 class="text-[14px] font-medium mb-1">We scheduled a meeting</h6>
                        <p class="text-[13px] mb-1">20 sep 2025, 12:00 PM</p>
                        <span class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-teal-500">Calls</span>
                      </div>
                    </div> <!-- end col -->

                    <div class="md:col-span-4">
                      <div class="flex items-center">
                        <span class="w-10 h-10 rounded-full">
                          <img src="@/assets/img/profiles/avatar-20.jpg" class="rounded-full" alt="Img">
                        </span>
                        <div class="ms-2">
                          <h6 class="text-[14px] font-medium mb-1">William Anderson</h6>
                          <p class="text-[13px] mb-0">Data Analytics</p>
                        </div>
                      </div>
                    </div> <!-- end col -->

                    <div class="md:col-span-4">
                      <div class="md:text-right">
                        <div>
                          <a href="javascript:void(0);"
                            class="border border-borderColor shadow rounded py-1 px-2 text-[13px] bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                            data-dropdown-toggle="small-dropdown4">
                            Inprogress<i class="ti ti-chevron-down ml-1"></i>
                          </a>
                          <ul id="small-dropdown4"
                            class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Inprogress</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Completed</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Cancelled</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> <!-- end col -->

                  </div>
                  <!-- end row -->

                </div>
              </div>
            </div> <!-- end card body -->
          </div>
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
            <div class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
              <h6 class="m-0">Lost Leads Stage</h6>
              <div class="flex flex-wrap items-center gap-3">
                <!-- Pipeline Dropdown -->
                <div>
                  <a href="javascript:void(0);"
                    class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="pipeline-dropdown5">
                    Marketing Pipeline<i class="ti ti-chevron-down ml-1"></i>
                  </a>
                  <ul id="pipeline-dropdown5"
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
                    data-dropdown-toggle="last-days-dropdown14">
                    Last 3 months<i class="ti ti-chevron-down ml-1"></i>
                  </a>
                  <ul id="last-days-dropdown14"
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
              <div id="last-chart-2">
                <apexchart
                  type="bar"
                  height="150"
                  :options="lastChart2.last"
                  :series="lastChart2.series"
                ></apexchart>
              </div>
            </div>
          </div>
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
            <div class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
              <h6 class="m-0">Recently Created Leads</h6>

              <!-- Dropdown -->
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="last-days-dropdown11">
                  Last 30 days<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="last-days-dropdown11"
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
                            <div class="flex items-center"><router-link to="/crm/company-details"
                                class="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"><img
                                  class="w-auto h-auto" src="@/assets/img/icons/company-icon-01.svg" alt="User Image"></router-link>
                              <div class="ml-2">
                                <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
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
                            <div class="flex items-center"><router-link to="/crm/company-details"
                                class="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"><img
                                  class="w-auto h-auto" src="@/assets/img/icons/company-icon-02.svg" alt="User Image"></router-link>
                              <div class="ml-2">
                                <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
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
                            <div class="flex items-center"><router-link to="/crm/company-details"
                                class="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"><img
                                  class="w-auto h-auto" src="@/assets/img/icons/company-icon-03.svg" alt="User Image"></router-link>
                              <div class="ml-2">
                                <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
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
                            <div class="flex items-center"><router-link to="/crm/company-details"
                                class="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"><img
                                  class="w-auto h-auto" src="@/assets/img/icons/company-icon-04.svg" alt="User Image"></router-link>
                              <div class="ml-2">
                                <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
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
                            <div class="flex items-center"><router-link to="/crm/company-details"
                                class="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"><img
                                  class="w-auto h-auto" src="@/assets/img/icons/company-icon-05.svg" alt="User Image"></router-link>
                              <div class="ml-2">
                                <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/company-details"
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
          <div class="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
            <div class="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
              <h6 class="m-0">Recently Created Campaign</h6>
              <div class="flex flex-wrap items-center gap-3">
                <!-- Time Filter Dropdown -->
                <div>
                  <a href="javascript:void(0);"
                    class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="last-days-dropdown9">
                    Last 3 months<i class="ti ti-chevron-down ml-1"></i>
                  </a>
                  <ul id="last-days-dropdown9"
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
            <div class="p-4">
              <div class="overflow-x-auto">
                <div class="card bg-white border border-borderColor rounded min-w-[max-content] mb-3">
                  <div class="card-body p-4">
                    <div class="border-b border-borderColor mb-3 pb-3">
                      <div class="flex items-center gap-3">
                        <div class="w-25">
                          <h6 class="text-[14px] font-medium mb-1">Distribution</h6>
                          <p class="text-[13px] mb-0">Public Relations</p>
                        </div>
                        <div class="w-auto">
                          <div class="flex items-center gap-2">
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">40.5%</h6>
                              <p class="text-[13px] mb-0">Opened</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">20.5%</h6>
                              <p class="text-[13px] mb-0">Closed</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">30.5%</h6>
                              <p class="text-[13px] mb-0">Unsubscribe</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">70.5%</h6>
                              <p class="text-[13px] mb-0">Delivered</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">35.0%</h6>
                              <p class="text-[13px] mb-0">Conversation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <span class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-danger">Bounced</span>
                        <p class="text-[13px] mb-0">Due Date : 25 Sep 2025</p>
                      </div>
                      <div class="avatar-list-stacked avatar-group-sm">
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-14.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-15.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-16.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-17.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded bg-light font-medium"><span
                            class="text-dark text-[10px]">+8</span></a>
                      </div>
                    </div>
                  </div> <!-- end card body -->
                </div> <!-- end card -->

                <div class="card bg-white border border-borderColor rounded min-w-[max-content] mb-3">
                  <div class="card-body p-4">
                    <div class="border-b border-borderColor mb-3 pb-3">
                      <div class="flex items-center gap-3">
                        <div class="w-25">
                          <h6 class="text-[14px] font-medium mb-1">Pricing</h6>
                          <p class="text-[13px] mb-0">Social Marketing</p>
                        </div>
                        <div class="w-auto">
                          <div class="flex items-center gap-2">
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">70.5%</h6>
                              <p class="text-[13px] mb-0">Opened</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">90.5%</h6>
                              <p class="text-[13px] mb-0">Closed</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">20.5%</h6>
                              <p class="text-[13px] mb-0">Unsubscribe</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">90.5%</h6>
                              <p class="text-[13px] mb-0">Delivered</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">98.0%</h6>
                              <p class="text-[13px] mb-0">Conversation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <span
                          class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-teal-500">Running</span>
                        <p class="text-[13px] mb-0">Due Date : 28 Sep 2025</p>
                      </div>
                      <div class="avatar-list-stacked avatar-group-sm">
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-11.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-12.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-13.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-14.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded bg-light font-medium"><span
                            class="text-dark text-[10px]">+2</span></a>
                      </div>
                    </div>
                  </div> <!-- end card body -->
                </div> <!-- end card -->

                <div class="card bg-white border border-borderColor rounded min-w-[max-content] mb-3">
                  <div class="card-body p-4">
                    <div class="border-b border-borderColor mb-3 pb-3">
                      <div class="flex items-center gap-3">
                        <div class="w-25">
                          <h6 class="text-[14px] font-medium mb-1">Merchandising</h6>
                          <p class="text-[13px] mb-0">Content Marketing</p>
                        </div>
                        <div class="w-auto">
                          <div class="flex items-center gap-2">
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">30.5%</h6>
                              <p class="text-[13px] mb-0">Opened</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">10.5%</h6>
                              <p class="text-[13px] mb-0">Closed</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">70.5%</h6>
                              <p class="text-[13px] mb-0">Unsubscribe</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">90.5%</h6>
                              <p class="text-[13px] mb-0">Delivered</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">45.0%</h6>
                              <p class="text-[13px] mb-0">Conversation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <span class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-info">Paused</span>
                        <p class="text-[13px] mb-0">Due Date : 14 Sep 2025</p>
                      </div>
                      <div class="avatar-list-stacked avatar-group-sm">
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-02.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-04.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-06.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-08.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded bg-light font-medium"><span
                            class="text-dark text-[10px]">+4</span></a>
                      </div>
                    </div>
                  </div> <!-- end card body -->
                </div> <!-- end card -->

                <div class="card bg-white border border-borderColor rounded min-w-[max-content] mb-0">
                  <div class="card-body p-4">
                    <div class="border-b border-borderColor mb-3 pb-3">
                      <div class="flex items-center gap-3">
                        <div class="w-25">
                          <h6 class="text-[14px] font-medium mb-1">Repeat Customer</h6>
                          <p class="text-[13px] mb-0">Rebranding</p>
                        </div>
                        <div class="w-auto">
                          <div class="flex items-center gap-2">
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">80.5%</h6>
                              <p class="text-[13px] mb-0">Opened</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">20.5%</h6>
                              <p class="text-[13px] mb-0">Closed</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">70.5%</h6>
                              <p class="text-[13px] mb-0">Unsubscribe</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">60.5%</h6>
                              <p class="text-[13px] mb-0">Delivered</p>
                            </div>
                            <div>
                              <h6 class="text-[14px] font-semibold mb-1">75.0%</h6>
                              <p class="text-[13px] mb-0">Conversation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <span class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-danger">Bounced</span>
                        <p class="text-[13px] mb-0">Due Date : 25 Sep 2023</p>
                      </div>
                      <div class="avatar-list-stacked avatar-group-sm">
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-01.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-03.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-05.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded"><img src="@/assets/img/profiles/avatar-07.jpg"
                            class="border border-white" alt="img"></a>
                        <a href="#" class="avatar avatar-rounded bg-light font-medium"><span
                            class="text-dark text-[10px]">+5</span></a>
                      </div>
                    </div>
                  </div> <!-- end card body -->
                </div> <!-- end card -->

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
import { dealsChart, wonChart, lastChart, lastChart2, leadsChart } from "./data";
export default {
  data() {
    return {
      dealsChart: dealsChart,
      wonChart: wonChart,
      lastChart: lastChart,
      lastChart2: lastChart2,
      leadsChart: leadsChart,
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
