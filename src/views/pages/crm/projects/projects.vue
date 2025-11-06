<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-6">

      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Projects
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Projects</li>
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

      <div class="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div class="flex flex-wrap items-center gap-y-3">
          <!-- Search Input with Icon -->
          <div class="relative me-3">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
              <i class="ti ti-search"></i>
            </span>
            <input type="text" placeholder="Search"
              class="pl-9 pr-4 py-1.5 border border-borderColor shadow rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
          </div>
          <div class="relative">
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
                      data-accordion-target="#accordion-body-1" aria-expanded="true" aria-controls="accordion-body-1">
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Project Name</span>
                    </button>
                  </h2>
                  <div id="accordion-body-1" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-1" data-accordion-body>
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
                          Servbook
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          DreamsPOS
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Kofejob
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Doccure
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Best@laundry
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
                  <h2 id="accordion-heading-2">
                    <button type="button"
                      class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#accordion-body-2" aria-expanded="true" aria-controls="accordion-body-2">
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Client Name</span>
                    </button>
                  </h2>
                  <div id="accordion-body-2" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-2" data-accordion-body>
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
                          BlueSky Industries
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Silver Hawk
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Summit Peak
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          RiverStone Ltd
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Bright Bridge Grp
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          CoastalStar Co.
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="mb-4">
                  <h2 id="accordion-heading-3">
                    <button type="button"
                      class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#accordion-body-3" aria-expanded="true" aria-controls="accordion-body-3">
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Type</span>
                    </button>
                  </h2>
                  <div id="accordion-body-3" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-3" data-accordion-body>
                    <div class="relative mb-4">
                      <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
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
                          Web App
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Client Meeting
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Mobile App
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          UI/UX Design
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Product Lanuch
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
                  <h2 id="accordion-heading-7">
                    <button type="button"
                      class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#accordion-body-7" aria-expanded="true" aria-controls="accordion-body-7">
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Start Date</span>
                    </button>
                  </h2>
                  <div id="accordion-body-7" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-7" data-accordion-body>
                    <div class="input-group w-auto input-group-flat">
                      <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="20/09/2025" />
                      <span class="input-group-text">
                        <i class="ti ti-calendar"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mb-4">
                  <h2 id="accordion-heading-4">
                    <button type="button"
                      class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#accordion-body-4" aria-expanded="true" aria-controls="accordion-body-4">
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>End Date</span>
                    </button>
                  </h2>
                  <div id="accordion-body-4" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-4" data-accordion-body>
                    <div class="input-group w-auto input-group-flat">
                      <a-date-picker v-model="valueTwo" class="form-control datetimepicker" placeholder="20/09/2025" />
                      <span class="input-group-text">
                        <i class="ti ti-calendar"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mb-4">
                  <h2 id="accordion-heading-5">
                    <button type="button"
                      class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#accordion-body-5" aria-expanded="true" aria-controls="accordion-body-5">
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Status</span>
                    </button>
                  </h2>
                  <div id="accordion-body-5" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-5" data-accordion-body>
                    <ul class="space-y-3 max-h-64 overflow-y-auto">
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Active
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Inactive
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="mb-4">
                  <h2 id="accordion-heading-6">
                    <button type="button"
                      class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#accordion-body-6" aria-expanded="true" aria-controls="accordion-body-6">
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Pipeline Stage</span>
                    </button>
                  </h2>
                  <div id="accordion-body-6" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-6" data-accordion-body>
                    <ul class="space-y-3 max-h-64 overflow-y-auto">
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Develop
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Meeting
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Design
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Launch
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Fix
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Write
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Demo
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

        </div>
        <div class="flex items-center flex-wrap gap-3">
          <div class="flex items-center border border-borderColor shadow bg-white rounded p-1 icon-list">
            <router-link to="/crm/projects-list" class="w-7 h-7 flex items-center justify-center rounded text-default me-1"><i
                class="ti ti-list-tree"></i></router-link>
            <router-link to="/crm/projects" class="w-7 h-7 flex items-center justify-center rounded text-white bg-teal"><i
                class="ti ti-layout-grid"></i></router-link>
          </div>
          <!-- Add New Button -->
          <a href="javascript:void(0);"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
            data-drawer-target="offcanvas_add" data-drawer-show="offcanvas_add" aria-controls="offcanvas_add"
            data-drawer-placement="right">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add New Project
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
        <div class="border rounded shadow bg-white border-borderColor">
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <span
                  class="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                  <i class="ti ti-square-rounded-filled text-danger text-xs me-1"></i> High
                </span>
                <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
              </div>
              <span class="text-warning">
                <i class="ti ti-star-filled"></i>
              </span>
            </div>
            <div class="flex items-center justify-between bg-light rounded p-3 mb-4">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center">
                  <img src="@/assets/img/priority/truellysel.svg" alt="img">
              </router-link>
                <div>
                  <h5 class="text-sm font-medium mb-1">
                    <router-link to="/crm/project-details" class="hover:text-primary">Truelysell</router-link>
                  </h5>
                  <p class="text-xs text-gray-600">Web App</p>
                </div>
              </div>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[0] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border bg-white border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(0, $event)"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 0 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i>Clone Project</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Add New Task</a>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p class="mb-4 text-sm text-gray-700">Kofejob is a freelancers marketplace where you can post projects &
                get instant help.</p>
              <div class="text-sm text-gray-600 space-y-2">
                <p class="flex items-center"><i class="ti ti-forbid-2 me-2"></i>Project ID: #12145</p>
                <p class="flex items-center"><i class="ti ti-report-money me-2"></i>Value: $03,50,000</p>
                <p class="flex items-center"><i class="ti ti-calendar-exclamation me-2"></i>Due Date: 15 Oct 2023</p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-14.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-15.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-16.jpg" alt="img">
                </span>
                <a class="avatar text-dark bg-light border avatar-rounded" href="javascript:void(0);">
                  <span class="text-dark text-[10px]">+05</span>
                </a>
              </div>
              <div class="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                <img src="@/assets/img/icons/company-icon-01.svg" alt="img">
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
              <span class="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                <i class="ti ti-clock-stop me-1"></i>Total Hours: 100
              </span>
              <div class="flex items-center space-x-3">
                <span class="flex items-center"><i class="ti ti-brand-wechat me-1"></i>02</span>
                <span class="flex items-center"><i class="ti ti-subtask me-1"></i>04</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border rounded shadow bg-white border-borderColor">
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <span
                  class="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                  <i class="ti ti-square-rounded-filled text-danger text-xs me-1"></i> High
                </span>
                <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
              </div>
              <span class="text-warning">
                <i class="ti ti-star-filled"></i>
              </span>
            </div>
            <div class="flex items-center justify-between bg-light rounded p-3 mb-4">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center">
                  <img src="@/assets/img/priority/dreamchat.svg" alt="img">
              </router-link>
                <div>
                  <h5 class="text-sm font-medium mb-1">
                    <router-link to="/crm/project-details" class="hover:text-primary">Dreamschat</router-link>
                  </h5>
                  <p class="text-xs text-gray-600">Web App</p>
                </div>
              </div>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(1, $event)"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 1 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i>Clone Project</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Add New Task</a>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p class="mb-4 text-sm text-gray-700">Kofejob is a freelancers marketplace where you can post projects &
                get instant help.</p>
              <div class="text-sm text-gray-600 space-y-2">
                <p class="flex items-center"><i class="ti ti-forbid-2 me-2"></i>Project ID: #12146</p>
                <p class="flex items-center"><i class="ti ti-report-money me-2"></i>Value : $02,15,000</p>
                <p class="flex items-center"><i class="ti ti-calendar-exclamation me-2"></i>Due Date : 19 Oct 2023</p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-14.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-15.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-16.jpg" alt="img">
                </span>
                <a class="avatar text-dark bg-light border avatar-rounded" href="javascript:void(0);">
                  <span class="text-dark text-[10px]">+05</span>
                </a>
              </div>
              <div class="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                <img src="@/assets/img/icons/company-icon-02.svg" alt="img">
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
              <span class="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                <i class="ti ti-clock-stop me-1"></i>Total Hours: 80
              </span>
              <div class="flex items-center space-x-3">
                <span class="flex items-center"><i class="ti ti-brand-wechat me-1"></i>02</span>
                <span class="flex items-center"><i class="ti ti-subtask me-1"></i>04</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border rounded shadow bg-white border-borderColor">
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <span
                  class="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                  <i class="ti ti-square-rounded-filled text-danger text-xs me-1"></i> High
                </span>
                <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
              </div>
              <span class="text-warning">
                <i class="ti ti-star-filled"></i>
              </span>
            </div>
            <div class="flex items-center justify-between bg-light rounded p-3 mb-4">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center">
                  <img src="@/assets/img/priority/truellysell.svg" alt="img">
              </router-link>
                <div>
                  <h5 class="text-sm font-medium mb-1">
                    <router-link to="/crm/project-details" class="hover:text-primary">Truelysell</router-link>
                  </h5>
                  <p class="text-xs text-gray-600">Web App</p>
                </div>
              </div>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(2, $event)"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 2 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i>Clone Project</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Add New Task</a>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p class="mb-4 text-sm text-gray-700">Kofejob is a freelancers marketplace where you can post projects &
                get instant help.</p>
              <div class="text-sm text-gray-600 space-y-2">
                <p class="flex items-center"><i class="ti ti-forbid-2 me-2"></i>Project ID: #12147</p>
                <p class="flex items-center"><i class="ti ti-report-money me-2"></i>Value : $01,45,000</p>
                <p class="flex items-center"><i class="ti ti-calendar-exclamation me-2"></i>Due Date : 12 Oct 2023</p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-18.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-19.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-20.jpg" alt="img">
                </span>
                <a class="avatar text-dark bg-light border avatar-rounded" href="javascript:void(0);">
                  <span class="text-dark text-[10px]">+05</span>
                </a>
              </div>
              <div class="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                <img src="@/assets/img/icons/company-icon-03.svg" alt="img">
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
              <span class="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                <i class="ti ti-clock-stop me-1"></i>Total Hours: 75
              </span>
              <div class="flex items-center space-x-3">
                <span class="flex items-center"><i class="ti ti-brand-wechat me-1"></i>02</span>
                <span class="flex items-center"><i class="ti ti-subtask me-1"></i>04</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border rounded shadow bg-white border-borderColor">
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <span
                  class="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                  <i class="ti ti-square-rounded-filled text-danger text-xs me-1"></i> High
                </span>
                <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
              </div>
              <span class="text-warning">
                <i class="ti ti-star-filled"></i>
              </span>
            </div>
            <div class="flex items-center justify-between bg-light rounded p-3 mb-4">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center">
                  <img src="@/assets/img/priority/servbook.svg" alt="img">
              </router-link>
                <div>
                  <h5 class="text-sm font-medium mb-1">
                    <router-link to="/crm/project-details" class="hover:text-primary">Servbook</router-link>
                  </h5>
                  <p class="text-xs text-gray-600">Web App</p>
                </div>
              </div>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[3] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(3, $event)"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 3 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i>Clone Project</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Add New Task</a>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p class="mb-4 text-sm text-gray-700">Kofejob is a freelancers marketplace where you can post projects &
                get instant help.</p>
              <div class="text-sm text-gray-600 space-y-2">
                <p class="flex items-center"><i class="ti ti-forbid-2 me-2"></i>Project ID: #12148</p>
                <p class="flex items-center"><i class="ti ti-report-money me-2"></i>Value : $02,15,000</p>
                <p class="flex items-center"><i class="ti ti-calendar-exclamation me-2"></i>Due Date : 24 Oct 2023</p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-21.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-22.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-23.jpg" alt="img">
                </span>
                <a class="avatar text-dark bg-light border avatar-rounded" href="javascript:void(0);">
                  <span class="text-dark text-[10px]">+04</span>
                </a>
              </div>
              <div class="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                <img src="@/assets/img/icons/company-icon-04.svg" alt="img">
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
              <span class="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                <i class="ti ti-clock-stop me-1"></i>Total Hours: 75
              </span>
              <div class="flex items-center space-x-3">
                <span class="flex items-center"><i class="ti ti-brand-wechat me-1"></i>02</span>
                <span class="flex items-center"><i class="ti ti-subtask me-1"></i>04</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border rounded shadow bg-white border-borderColor">
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <span
                  class="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                  <i class="ti ti-square-rounded-filled text-danger text-xs me-1"></i> High
                </span>
                <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
              </div>
              <span class="text-warning">
                <i class="ti ti-star-filled"></i>
              </span>
            </div>
            <div class="flex items-center justify-between bg-light rounded p-3 mb-4">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center">
                  <img src="@/assets/img/priority/dream-pos.svg" alt="img">
              </router-link>
                <div>
                  <h5 class="text-sm font-medium mb-1">
                    <router-link to="/crm/project-details" class="hover:text-primary">DreamPOS</router-link>
                  </h5>
                  <p class="text-xs text-gray-600">Web App</p>
                </div>
              </div>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[4] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(4, $event)"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 4 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i>Clone Project</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Add New Task</a>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p class="mb-4 text-sm text-gray-700">Kofejob is a freelancers marketplace where you can post projects &
                get instant help.</p>
              <div class="text-sm text-gray-600 space-y-2">
                <p class="flex items-center"><i class="ti ti-forbid-2 me-2"></i>Project ID: #12149</p>
                <p class="flex items-center"><i class="ti ti-report-money me-2"></i>Value : $03,64,000</p>
                <p class="flex items-center"><i class="ti ti-calendar-exclamation me-2"></i>Due Date : 11 Jan 2024</p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-21.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-22.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-23.jpg" alt="img">
                </span>
                <a class="avatar text-dark bg-light border avatar-rounded" href="javascript:void(0);">
                  <span class="text-dark text-[10px]">+04</span>
                </a>
              </div>
              <div class="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                <img src="@/assets/img/icons/company-icon-05.svg" alt="img">
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
              <span class="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                <i class="ti ti-clock-stop me-1"></i>Total Hours: 65
              </span>
              <div class="flex items-center space-x-3">
                <span class="flex items-center"><i class="ti ti-brand-wechat me-1"></i>02</span>
                <span class="flex items-center"><i class="ti ti-subtask me-1"></i>04</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border rounded shadow bg-white border-borderColor">
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <span
                  class="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                  <i class="ti ti-square-rounded-filled text-danger text-xs me-1"></i> High
                </span>
                <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
              </div>
              <span class="text-warning">
                <i class="ti ti-star-filled"></i>
              </span>
            </div>
            <div class="flex items-center justify-between bg-light rounded p-3 mb-4">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center">
                  <img src="@/assets/img/priority/dream-pos.svg" alt="img">
              </router-link>
                <div>
                  <h5 class="text-sm font-medium mb-1">
                    <router-link to="/crm/project-details" class="hover:text-primary">Kofejob</router-link>
                  </h5>
                  <p class="text-xs text-gray-600">Web App</p>
                </div>
              </div>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[5] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(5, $event)"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 5 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i>Clone Project</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Add New Task</a>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p class="mb-4 text-sm text-gray-700">Kofejob is a freelancers marketplace where you can post projects &
                get instant help.</p>
              <div class="text-sm text-gray-600 space-y-2">
                <p class="flex items-center"><i class="ti ti-forbid-2 me-2"></i>Project ID: #12150</p>
                <p class="flex items-center"><i class="ti ti-report-money me-2"></i>Value : $02,12,000</p>
                <p class="flex items-center"><i class="ti ti-calendar-exclamation me-2"></i>Due Date : 09 Dec 2023</p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-23.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-24.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-25.jpg" alt="img">
                </span>
                <a class="avatar text-dark bg-light border avatar-rounded" href="javascript:void(0);">
                  <span class="text-dark text-[10px]">+04</span>
                </a>
              </div>
              <div class="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                <img src="@/assets/img/icons/company-icon-06.svg" alt="img">
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
              <span class="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                <i class="ti ti-clock-stop me-1"></i>Total Hours: 96
              </span>
              <div class="flex items-center space-x-3">
                <span class="flex items-center"><i class="ti ti-brand-wechat me-1"></i>02</span>
                <span class="flex items-center"><i class="ti ti-subtask me-1"></i>04</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border rounded shadow bg-white border-borderColor">
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <span
                  class="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                  <i class="ti ti-square-rounded-filled text-danger text-xs me-1"></i> High
                </span>
                <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
              </div>
              <span class="text-warning">
                <i class="ti ti-star-filled"></i>
              </span>
            </div>
            <div class="flex items-center justify-between bg-light rounded p-3 mb-4">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center">
                  <img src="@/assets/img/priority/project-01.svg" alt="img">
              </router-link>
                <div>
                  <h5 class="text-sm font-medium mb-1">
                    <router-link to="/crm/project-details" class="hover:text-primary">Doccure</router-link>
                  </h5>
                  <p class="text-xs text-gray-600">Web App</p>
                </div>
              </div>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[6] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(6, $event)"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 6 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i>Clone Project</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Add New Task</a>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p class="mb-4 text-sm text-gray-700">Kofejob is a freelancers marketplace where you can post projects &
                get instant help.</p>
              <div class="text-sm text-gray-600 space-y-2">
                <p class="flex items-center"><i class="ti ti-forbid-2 me-2"></i>Project ID: #12151</p>
                <p class="flex items-center"><i class="ti ti-report-money me-2"></i>Value : $04,18,000</p>
                <p class="flex items-center"><i class="ti ti-calendar-exclamation me-2"></i>Due Date : 16 Dec 2023</p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-23.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-24.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-25.jpg" alt="img">
                </span>
                <a class="avatar text-dark bg-light border avatar-rounded" href="javascript:void(0);">
                  <span class="text-dark text-[10px]">+04</span>
                </a>
              </div>
              <div class="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                <img src="@/assets/img/icons/company-icon-07.svg" alt="img">
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
              <span class="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                <i class="ti ti-clock-stop me-1"></i>Total Hours: 96
              </span>
              <div class="flex items-center space-x-3">
                <span class="flex items-center"><i class="ti ti-brand-wechat me-1"></i>02</span>
                <span class="flex items-center"><i class="ti ti-subtask me-1"></i>04</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border rounded shadow bg-white border-borderColor">
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <span
                  class="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                  <i class="ti ti-square-rounded-filled text-danger text-xs me-1"></i> High
                </span>
                <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
              </div>
              <span class="text-warning">
                <i class="ti ti-star-filled"></i>
              </span>
            </div>
            <div class="flex items-center justify-between bg-light rounded p-3 mb-4">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center">
                  <img src="@/assets/img/priority/best.svg" alt="img">
              </router-link>
                <div>
                  <h5 class="text-sm font-medium mb-1">
                    <router-link to="/crm/project-details" class="hover:text-primary">Best@laundry</router-link>
                  </h5>
                  <p class="text-xs text-gray-600">Web App</p>
                </div>
              </div>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[7] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(7, $event)"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 7 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i>Clone Project</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Add New Task</a>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p class="mb-4 text-sm text-gray-700">Kofejob is a freelancers marketplace where you can post projects &
                get instant help.</p>
              <div class="text-sm text-gray-600 space-y-2">
                <p class="flex items-center"><i class="ti ti-forbid-2 me-2"></i>Project ID: #12152</p>
                <p class="flex items-center"><i class="ti ti-report-money me-2"></i>Value : $01,23,000</p>
                <p class="flex items-center"><i class="ti ti-calendar-exclamation me-2"></i>Due Date : 13 Jan 2024</p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-27.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-13.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-15.jpg" alt="img">
                </span>
                <a class="avatar text-dark bg-light border avatar-rounded" href="javascript:void(0);">
                  <span class="text-dark text-[10px]">+04</span>
                </a>
              </div>
              <div class="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                <img src="@/assets/img/icons/company-icon-08.svg" alt="img">
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
              <span class="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                <i class="ti ti-clock-stop me-1"></i>Total Hours: 65
              </span>
              <div class="flex items-center space-x-3">
                <span class="flex items-center"><i class="ti ti-brand-wechat me-1"></i>02</span>
                <span class="flex items-center"><i class="ti ti-subtask me-1"></i>04</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border rounded shadow bg-white border-borderColor">
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <span
                  class="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                  <i class="ti ti-square-rounded-filled text-danger text-xs me-1"></i> High
                </span>
                <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
              </div>
              <span class="text-warning">
                <i class="ti ti-star-filled"></i>
              </span>
            </div>
            <div class="flex items-center justify-between bg-light rounded p-3 mb-4">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center">
                  <img src="@/assets/img/priority/dream-pos.svg" alt="img">
              </router-link>
                <div>
                  <h5 class="text-sm font-medium mb-1">
                    <router-link to="/crm/project-details" class="hover:text-primary">POS</router-link>
                  </h5>
                  <p class="text-xs text-gray-600">Web App</p>
                </div>
              </div>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[8] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(8, $event)"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 8 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i>Clone Project</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Add New Task</a>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p class="mb-4 text-sm text-gray-700">Kofejob is a freelancers marketplace where you can post projects &
                get instant help.</p>
              <div class="text-sm text-gray-600 space-y-2">
                <p class="flex items-center"><i class="ti ti-forbid-2 me-2"></i>Project ID: #12153</p>
                <p class="flex items-center"><i class="ti ti-report-money me-2"></i>Value : $03,64,000</p>
                <p class="flex items-center"><i class="ti ti-calendar-exclamation me-2"></i>Due Date : 11 Jan 2024</p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-27.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-13.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-15.jpg" alt="img">
                </span>
                <a class="avatar text-dark bg-light border avatar-rounded" href="javascript:void(0);">
                  <span class="text-dark text-[10px]">+04</span>
                </a>
              </div>
              <div class="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                <img src="@/assets/img/icons/company-icon-09.svg" alt="img">
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
              <span class="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                <i class="ti ti-clock-stop me-1"></i>Total Hours: 65
              </span>
              <div class="flex items-center space-x-3">
                <span class="flex items-center"><i class="ti ti-brand-wechat me-1"></i>02</span>
                <span class="flex items-center"><i class="ti ti-subtask me-1"></i>04</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border rounded shadow bg-white border-borderColor">
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <span
                  class="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                  <i class="ti ti-square-rounded-filled text-danger text-xs me-1"></i> High
                </span>
                <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
              </div>
              <span class="text-warning">
                <i class="ti ti-star-filled"></i>
              </span>
            </div>
            <div class="flex items-center justify-between bg-light rounded p-3 mb-4">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center">
                  <img src="@/assets/img/priority/servbook.svg" alt="img">
              </router-link>
                <div>
                  <h5 class="text-sm font-medium mb-1">
                    <router-link to="/crm/project-details" class="hover:text-primary">Servbook</router-link>
                  </h5>
                  <p class="text-xs text-gray-600">Meeting</p>
                </div>
              </div>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[9] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(9, $event)"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 9 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i>Clone Project</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Add New Task</a>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p class="mb-4 text-sm text-gray-700">Kofejob is a freelancers marketplace where you can post projects &
                get instant help.</p>
              <div class="text-sm text-gray-600 space-y-2">
                <p class="flex items-center"><i class="ti ti-forbid-2 me-2"></i>Project ID: #12154</p>
                <p class="flex items-center"><i class="ti ti-report-money me-2"></i>Value : $04,10,000</p>
                <p class="flex items-center"><i class="ti ti-calendar-exclamation me-2"></i>Due Date : 29 Jan 2024</p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-16.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-18.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-03.jpg" alt="img">
                </span>
                <a class="avatar text-dark bg-light border avatar-rounded" href="javascript:void(0);">
                  <span class="text-dark text-[10px]">+04</span>
                </a>
              </div>
              <div class="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                <img src="@/assets/img/icons/company-icon-10.svg" alt="img">
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
              <span class="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                <i class="ti ti-clock-stop me-1"></i>Total Hours: 56
              </span>
              <div class="flex items-center space-x-3">
                <span class="flex items-center"><i class="ti ti-brand-wechat me-1"></i>02</span>
                <span class="flex items-center"><i class="ti ti-subtask me-1"></i>04</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border rounded shadow bg-white border-borderColor">
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <span
                  class="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                  <i class="ti ti-square-rounded-filled text-danger text-xs me-1"></i> High
                </span>
                <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
              </div>
              <span class="text-warning">
                <i class="ti ti-star-filled"></i>
              </span>
            </div>
            <div class="flex items-center justify-between bg-light rounded p-3 mb-4">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center">
                  <img src="@/assets/img/priority/dreamchat.svg" alt="img">
              </router-link>
                <div>
                  <h5 class="text-sm font-medium mb-1">
                    <router-link to="/crm/project-details" class="hover:text-primary">Dreamchat</router-link>
                  </h5>
                  <p class="text-xs text-gray-600">Meeting</p>
                </div>
              </div>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[10] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(10, $event)"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 10 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i>Clone Project</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Add New Task</a>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p class="mb-4 text-sm text-gray-700">Kofejob is a freelancers marketplace where you can post projects &
                get instant help.</p>
              <div class="text-sm text-gray-600 space-y-2">
                <p class="flex items-center"><i class="ti ti-forbid-2 me-2"></i>Project ID: #12155</p>
                <p class="flex items-center"><i class="ti ti-report-money me-2"></i>Value : $04,10,000</p>
                <p class="flex items-center"><i class="ti ti-calendar-exclamation me-2"></i>Due Date : 30 Jan 2024</p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-01.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-02.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-03.jpg" alt="img">
                </span>
                <a class="avatar text-dark bg-light border avatar-rounded" href="javascript:void(0);">
                  <span class="text-dark text-[10px]">+04</span>
                </a>
              </div>
              <div class="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                <img src="@/assets/img/icons/company-icon-01.svg" alt="img">
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
              <span class="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                <i class="ti ti-clock-stop me-1"></i>Total Hours: 60
              </span>
              <div class="flex items-center space-x-3">
                <span class="flex items-center"><i class="ti ti-brand-wechat me-1"></i>02</span>
                <span class="flex items-center"><i class="ti ti-subtask me-1"></i>04</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border rounded shadow bg-white border-borderColor">
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <span
                  class="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                  <i class="ti ti-square-rounded-filled text-danger text-xs me-1"></i> High
                </span>
                <span class="bg-success text-white text-xs font-medium px-2 py-1 rounded">Active</span>
              </div>
              <span class="text-warning">
                <i class="ti ti-star-filled"></i>
              </span>
            </div>
            <div class="flex items-center justify-between bg-light rounded p-3 mb-4">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center">
                  <img src="@/assets/img/priority/sports.svg" alt="img">
              </router-link>
                <div>
                  <h5 class="text-sm font-medium mb-1">
                    <router-link to="/crm/project-details" class="hover:text-primary">Sports</router-link>
                  </h5>
                  <p class="text-xs text-gray-600">Web App</p>
                </div>
              </div>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[11] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(11, $event)"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 11 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i>Clone Project</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Add New Task</a>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p class="mb-4 text-sm text-gray-700">Kofejob is a freelancers marketplace where you can post projects &
                get instant help.</p>
              <div class="text-sm text-gray-600 space-y-2">
                <p class="flex items-center"><i class="ti ti-forbid-2 me-2"></i>Project ID: #12156</p>
                <p class="flex items-center"><i class="ti ti-report-money me-2"></i>Value : $04,10,000</p>
                <p class="flex items-center"><i class="ti ti-calendar-exclamation me-2"></i>Due Date : 31 Jan 2024</p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-05.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="@/assets/img/profiles/avatar-06.jpg" alt="img">
                </span>
                <span class="avatar avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-07.jpg" alt="img">
                </span>
                <a class="avatar text-dark bg-light border avatar-rounded" href="javascript:void(0);">
                  <span class="text-dark text-[10px]">+04</span>
                </a>
              </div>
              <div class="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                <img src="@/assets/img/icons/company-icon-02.svg" alt="img">
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
              <span class="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                <i class="ti ti-clock-stop me-1"></i>Total Hours: 60
              </span>
              <div class="flex items-center space-x-3">
                <span class="flex items-center"><i class="ti ti-brand-wechat me-1"></i>02</span>
                <span class="flex items-center"><i class="ti ti-subtask me-1"></i>04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-5">
        <a href="javascript:void(0);" class="btn bg-primary text-white hover:bg-secondary"><i
            class="ti ti-loader me-1"></i> Load More</a>
      </div>
    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
  <projects-modal></projects-modal>
</template>
<script>
const valueOne = ref();
const ValueTwo = ref();
import { initFlowbite } from 'flowbite';
import { onMounted, onUnmounted, ref } from 'vue';
export default {
  data() {
    return {
      valueOne,
      ValueTwo,
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

        return {
            openDropdown,
            dropdownRefs,
            toggleDropdown,
            closeAllDropdowns
        };
    }
};
</script>
