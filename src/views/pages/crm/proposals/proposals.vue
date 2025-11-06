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
            Proposals
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Proposals</li>
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
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Subjects</span>
                    </button>
                  </h2>
                  <div id="accordion-body-1" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-1" data-accordion-body>
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
                          SEO Proposals
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Web Design
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Logo & Branding
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Development
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Logo
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="mb-4">
                  <h2 id="accordion-heading-2">
                    <button type="button"
                      class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#accordion-body-2" aria-expanded="true" aria-controls="accordion-body-2">
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Sent to</span>
                    </button>
                  </h2>
                  <div id="accordion-body-2" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-2" data-accordion-body>
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
                          NovaWave LLC
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Redwood Inc
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          HarborVie w
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          CoastalStar Co.
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          RiverStone Ventur
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
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Date of Proposals</span>
                    </button>
                  </h2>
                  <div id="accordion-body-3" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-3" data-accordion-body>
                    <div class="input-group w-auto input-group-flat">
                      <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="20/09/2025" />
                      <span class="input-group-text">
                        <i class="ti ti-calendar"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mb-4">
                  <h2 id="accordion-heading-7">
                    <button type="button"
                      class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#accordion-body-7" aria-expanded="true" aria-controls="accordion-body-7">
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Create Date</span>
                    </button>
                  </h2>
                  <div id="accordion-body-7" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-7" data-accordion-body>
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
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Project</span>
                    </button>
                  </h2>
                  <div id="accordion-body-5" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-5" data-accordion-body>
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
                          Truelysell
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Dreamsports
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Best@laundry
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Doccure
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
            <router-link to="/crm/proposals-list" class="w-7 h-7 flex items-center justify-center rounded text-default me-1"><i
                class="ti ti-list-tree"></i></router-link>
            <router-link to="/crm/proposals" class="w-7 h-7 flex items-center justify-center rounded text-white bg-teal"><i
                class="ti ti-layout-grid"></i></router-link>
          </div>
          <!-- Add New Button -->
          <a href="javascript:void(0);"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
            data-drawer-target="offcanvas_add" data-drawer-show="offcanvas_add" aria-controls="offcanvas_add"
            data-drawer-placement="right">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add New Proposal
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1493016</span>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[0] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(0, $event)"><i class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 0 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i> View Proposal</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Accpeted</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Draft</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark as Declined</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Convert to estimate</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file-invoice me-1"></i> Convert to Invoice</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div>
                <h4 class="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                <p class="text-[13px] mb-0">Project : Truelysell</p>
              </div>
              <div>
                <span class="text-xs bg-success text-white rounded px-2 py-0.5 inline-flex me-2">Accepted</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-moneybag text-gray-800 me-1"></i> Total Value : $2,04,214
              </p>
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-calendar-event text-gray-800 me-1"></i> Date : 25 May 2024
              </p>
              <p class="text-default flex items-center text-sm">
                <i class="ti ti-calendar-stats text-gray-800 me-1"></i> Open till : 31 Jun 2024
              </p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-01.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <span>Sent to</span>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">NovaWave LLC</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1493016</span>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(1, $event)"><i class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 1 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i> View Proposal</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Accpeted</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Draft</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark as Declined</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Convert to estimate</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file-invoice me-1"></i> Convert to Invoice</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div>
                <h4 class="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                <p class="text-[13px] mb-0">Project : Truelysell</p>
              </div>
              <div>
                <span class="text-xs bg-danger text-white rounded px-2 py-0.5 inline-flex me-2">Deleted</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-moneybag text-gray-800 me-1"></i> Total Value : $2,04,214
              </p>
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-calendar-event text-gray-800 me-1"></i> Date : 25 May 2024
              </p>
              <p class="text-default flex items-center text-sm">
                <i class="ti ti-calendar-stats text-gray-800 me-1"></i> Open till : 31 Jun 2024
              </p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-02.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <span>Sent to</span>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">Redwood Inc</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1493016</span>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(2, $event)"><i class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 2 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i> View Proposal</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Accpeted</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Draft</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark as Declined</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Convert to estimate</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file-invoice me-1"></i> Convert to Invoice</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div>
                <h4 class="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                <p class="text-[13px] mb-0">Project : Truelysell</p>
              </div>
              <div>
                <span class="text-xs bg-info text-white rounded px-2 py-0.5 inline-flex me-2">Draft</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-moneybag text-gray-800 me-1"></i> Total Value : $2,04,214
              </p>
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-calendar-event text-gray-800 me-1"></i> Date : 25 May 2024
              </p>
              <p class="text-default flex items-center text-sm">
                <i class="ti ti-calendar-stats text-gray-800 me-1"></i> Open till : 31 Jun 2024
              </p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-03.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <span>Sent to</span>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">HarborView</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1493016</span>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[3] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(3, $event)"><i class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 3 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i> View Proposal</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Accpeted</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Draft</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark as Declined</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Convert to estimate</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file-invoice me-1"></i> Convert to Invoice</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div>
                <h4 class="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                <p class="text-[13px] mb-0">Project : Truelysell</p>
              </div>
              <div>
                <span class="text-xs bg-warning text-white rounded px-2 py-0.5 inline-flex me-2">Declined</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-moneybag text-gray-800 me-1"></i> Total Value : $2,04,214
              </p>
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-calendar-event text-gray-800 me-1"></i> Date : 25 May 2024
              </p>
              <p class="text-default flex items-center text-sm">
                <i class="ti ti-calendar-stats text-gray-800 me-1"></i> Open till : 31 Jun 2024
              </p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-04.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <span>Sent to</span>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">CoastalStar Co.</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1493016</span>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[4] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(4, $event)"><i class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 4 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i> View Proposal</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Accpeted</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Draft</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark as Declined</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Convert to estimate</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file-invoice me-1"></i> Convert to Invoice</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div>
                <h4 class="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                <p class="text-[13px] mb-0">Project : Truelysell</p>
              </div>
              <div>
                <span class="text-xs bg-warning text-white rounded px-2 py-0.5 inline-flex me-2">Declined</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-moneybag text-gray-800 me-1"></i> Total Value : $2,04,214
              </p>
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-calendar-event text-gray-800 me-1"></i> Date : 25 May 2024
              </p>
              <p class="text-default flex items-center text-sm">
                <i class="ti ti-calendar-stats text-gray-800 me-1"></i> Open till : 31 Jun 2024
              </p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-05.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <span>Sent to</span>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">Summit Peak</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1493016</span>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[5] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(5, $event)"><i class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 5 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i> View Proposal</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Accpeted</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Draft</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark as Declined</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Convert to estimate</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file-invoice me-1"></i> Convert to Invoice</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div>
                <h4 class="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                <p class="text-[13px] mb-0">Project : Truelysell</p>
              </div>
              <div>
                <span class="text-xs bg-teal text-white rounded px-2 py-0.5 inline-flex me-2">Sent</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-moneybag text-gray-800 me-1"></i> Total Value : $2,04,214
              </p>
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-calendar-event text-gray-800 me-1"></i> Date : 25 May 2024
              </p>
              <p class="text-default flex items-center text-sm">
                <i class="ti ti-calendar-stats text-gray-800 me-1"></i> Open till : 31 Jun 2024
              </p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-06.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <span>Sent to</span>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">Silver Hawk</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1493016</span>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[6] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(6, $event)"><i class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 6 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i> View Proposal</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Accpeted</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Draft</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark as Declined</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Convert to estimate</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file-invoice me-1"></i> Convert to Invoice</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div>
                <h4 class="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                <p class="text-[13px] mb-0">Project : Truelysell</p>
              </div>
              <div>
                <span class="text-xs bg-danger text-white rounded px-2 py-0.5 inline-flex me-2">Deleted</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-moneybag text-gray-800 me-1"></i> Total Value : $2,04,214
              </p>
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-calendar-event text-gray-800 me-1"></i> Date : 25 May 2024
              </p>
              <p class="text-default flex items-center text-sm">
                <i class="ti ti-calendar-stats text-gray-800 me-1"></i> Open till : 31 Jun 2024
              </p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-07.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <span>Sent to</span>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">BlueSky Industries</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1493016</span>
              <div class="dropdown relative table-action" ref="el => dropdownRefs[7] = el">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  @click="toggleDropdown(7, $event)"><i class="ti ti-dots-vertical"></i></a>
                <div
                  class="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                  :class="{ 'hidden': openDropdown !== 7 }">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-clipboard-copy me-1"></i> View Proposal</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Accpeted</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Draft</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark as Declined</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-subtask me-1"></i> Convert to estimate</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file-invoice me-1"></i> Convert to Invoice</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div>
                <h4 class="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                <p class="text-[13px] mb-0">Project : Truelysell</p>
              </div>
              <div>
                <span class="text-xs bg-info text-white rounded px-2 py-0.5 inline-flex me-2">Draft</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-moneybag text-gray-800 me-1"></i> Total Value : $2,04,214
              </p>
              <p class="text-default flex items-center mb-2 text-sm">
                <i class="ti ti-calendar-event text-gray-800 me-1"></i> Date : 25 May 2024
              </p>
              <p class="text-default flex items-center text-sm">
                <i class="ti ti-calendar-stats text-gray-800 me-1"></i> Open till : 31 Jun 2024
              </p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-08.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <span>Sent to</span>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">NovaWave LLC</a>
                </h6>
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
  <!-- Add Proposal -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Proposal</h5>
      <button type="button" data-drawer-hide="offcanvas_add" aria-controls="offcanvas_add"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Subject <span class="text-danger">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueThree" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Open Till <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueFour" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Client <span class="text-danger">*</span></label>
              <vue3-select v-model="selected" :options="ClientSele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Project<span class="text-danger">*</span></label>
                <a href="#" class="mb-2 text-primary" data-modal-target="add_project" data-modal-toggle="add_project"><i
                    class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <vue3-select v-model="selectedOne" :options="ProjectSele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Related to <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedTwo" :options="RelatedSele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Deals<span class="text-danger">*</span></label>
                <a href="#" class="text-primary mb-2" data-modal-target="add_deal" data-modal-toggle="add_deal"><i
                    class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <vue3-select v-model="selectedThree" :options="ContactSele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Currency <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedFour" :options="CurrencySele" placeholder="Choose" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedFive" :options="StatusSele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Assigned to <span class="text-danger">*</span></label>
              <vue3-select v-model="selectOne" :options="Responsible" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Attachment <span class="text-danger">*</span></label>
              <div
                class="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
                <span class="block mb-1"><i class="ti ti-folder-open text-primary fs-16"></i></span>
                <p class="mb-0 tet-[14px] text-dark">Drop your files here or <a href="javascript:void(0);"
                    class="underline text-primary">browse</a></p>
                <input type="file" accept="video/image"
                  class="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer">
                <p class="text-[13px] mb-0">Maximum size : 50 MB</p>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Tags</label>
              <vue3-tags-input class="input-tags form-control border-0 h-100" type="text" id="inputBox2"
                data-role="tagsinput" name="specialist" value="Tag1" :tags="tagsOne" />
              <span class="fs-13 mt-2">Enter value separated by comma</span>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description </label>
              <div class="editor pages-editor ql-container ql-snow">
                <div ref="editorRef" class="quill-editor"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button type="button" data-drawer-hide="offcanvas_add" class="btn btn-light me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Create New</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Add Proposal -->

  <!-- Add Project -->
  <div id="add_project"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add New Project</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_project">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">Project Name</label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_project" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Create New
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Project -->

  <!-- Add Deal -->
  <div id="add_deal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add New Deal</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_deal">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">Deal Name</label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_deal" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Create New
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Deal -->

  <!-- Edit Proposal -->
  <div id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Edit Proposal</h5>
      <button type="button" data-drawer-hide="offcanvas_edit" aria-controls="offcanvas_edit"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Subject <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="SEO Proposals">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueFive" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Open Till <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueSix" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Client <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedSix" :options="ClientSele" placeholder="NovaWave LLC" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Project<span class="text-danger">*</span></label>
                <a href="#" class="mb-2 text-primary" data-modal-target="add_project" data-modal-toggle="add_project"><i
                    class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <vue3-select v-model="selectedSeven" :options="ProjectSele" placeholder="Truelysell" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Related to <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedEight" :options="RelatedSele" placeholder="Deals" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Deals<span class="text-danger">*</span></label>
                <a href="#" class="text-primary mb-2" data-modal-target="add_deal" data-modal-toggle="add_deal"><i
                    class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <vue3-select v-model="selectedNine" :options="ContactSeleOne" placeholder="Collins" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Currency <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedEight" :options="CurrencySeleOne" placeholder="Dollar" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedNine" :options="StatusSele" placeholder="Accepted" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Assigned to <span class="text-danger">*</span></label>
              <vue3-select v-model="selectTwo" :options="ResponsibleOne" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Attachment <span class="text-danger">*</span></label>
              <div
                class="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
                <span class="block mb-1"><i class="ti ti-folder-open text-primary fs-16"></i></span>
                <p class="mb-0 tet-[14px] text-dark">Drop your files here or <a href="javascript:void(0);"
                    class="underline text-primary">browse</a></p>
                <input type="file" accept="video/image"
                  class="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer">
                <p class="text-[13px] mb-0">Maximum size : 50 MB</p>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Tags</label>
              <vue3-tags-input class="input-tags form-control border-0 h-100" type="text" id="inputBox2"
                data-role="tagsinput" name="specialist" value="Tag1" :tags="tagsOne" />
              <span class="fs-13 mt-2">Enter value separated by comma</span>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description </label>
              <div class="editor pages-editor"></div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button type="button" data-drawer-hide="offcanvas_edit" class="btn btn-light me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Edit Proposal -->

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
          <p class="mb-3">Are you sure you want to remove company you selected.</p>
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
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { initFlowbite } from "flowbite";
import { onMounted, onUnmounted, ref } from 'vue';
import moment from "moment";
import DateRangePicker from "daterangepicker";
import Vue3TagsInput from "vue3-tags-input";
const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();
const valueFour = ref();
const valueFive = ref();
const valueSix = ref();
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      tagsOne: ["Tag 1", "Tag 2", "Tag 3"],
      valueOne,
      valueTwo,
      valueThree,
      valueFour,
      valueFive,
      valueSix,
      content: "",
      selectOne: [],
      selectTwo: [],
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      selectedEight: null,
      selectedNine: null,
      ClientSele: [
        { label: "Select", value: "Select" },
        { label: "NovaWave LLC", value: "NovaWave LLC" },
        { label: "Silver Hawk", value: "Silver Hawk" },
        { label: "Harbor View", value: "Harbor View" },
      ],
      ContactSele: [
        { label: "Select", value: "Select" },
        { label: "Collins", value: "Collins" },
        { label: "Konopelski", value: "Konopelski" },
        { label: "Adams", value: "Adams" },
      ],
      RelatedSele: [
        { label: "Select", value: "Select" },
        { label: "Deals", value: "Deals" },
        { label: "Leads", value: "Leads" },
        { label: "Pipeline", value: "Pipeline" },
      ],
      StatusSele: [
        { label: "Accepted", value: "Accepted" },
        { label: "Declined", value: "Declined" },
        { label: "Draft", value: "Draft" },
        { label: "Sent", value: "Sent" },
      ],
      CurrencySele: [
        { label: "Select", value: "Select" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      ProjectSele: [
        { label: "Select", value: "Select" },
        { label: "Truelysell", value: "Truelysell" },
        { label: "Dreamsports", value: "Dreamsports" },
        { label: "Best@laundry", value: "Best@laundry" },
        { label: "Doccure", value: "Doccure" },
        { label: "Kofejob", value: "Kofejob" },
      ],
      RelatedSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Deals", value: "Deals" },
        { label: "Leads", value: "Leads" },
        { label: "Pipeline", value: "Pipeline" },
      ],
      StatusSeleOne: [
        { label: "Accepted", value: "Accepted" },
        { label: "Declined", value: "Declined" },
        { label: "Draft", value: "Draft" },
        { label: "Sent", value: "Sent" },
      ],
      CurrencySeleOne: [
        { label: "Select", value: "Select" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      ProjectSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Truelysell", value: "Truelysell" },
        { label: "Dreamsports", value: "Dreamsports" },
        { label: "Best@laundry", value: "Best@laundry" },
        { label: "Doccure", value: "Doccure" },
        { label: "Kofejob", value: "Kofejob" },
      ],
      ContactSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Collins", value: "Collins" },
        { label: "Konopelski", value: "Konopelski" },
        { label: "Adams", value: "Adams" },
      ],
      ClientSeleOne: [
        { label: "Select", value: "Select" },
        { label: "NovaWave LLC", value: "NovaWave LLC" },
        { label: "Silver Hawk", value: "Silver Hawk" },
        { label: "Harbor View", value: "Harbor View" },
      ],
      ResponsibleOne: [
        { label: "Darlee Robertson", label: "Darlee Robertson" },
        { label: "Sharon Roy", label: "Sharon Roy" },
        { label: "Vaughan Lewis", label: "Vaughan Lewis" },
        { label: "Jessica Louise", label: "Jessica Louise" },
        { label: "Carol Thomas", label: "Carol Thomas" },
      ],
      Responsible: [
        { label: "Darlee Robertson", label: "Darlee Robertson" },
        { label: "Sharon Roy", label: "Sharon Roy" },
        { label: "Vaughan Lewis", label: "Vaughan Lewis" },
        { label: "Jessica Louise", label: "Jessica Louise" },
        { label: "Carol Thomas", label: "Carol Thomas" },
      ],
    };
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
      closeAllDropdowns
    };
  },
  mounted() {
    initFlowbite();
    this.$nextTick(() => {
      this.initQuill();
    });
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
    initQuill() {
      if (this.$refs.editorRef) {
        const quill = new Quill(this.$refs.editorRef, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          },
        });

        quill.on("text-change", () => {
          this.content = quill.root.innerHTML;
        });
      }
    },
  },
};
</script>
