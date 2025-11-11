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
            Contracts
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Contracts</li>
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
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Contracts Id</span>
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
                          274729
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
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          #274733
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          #274734
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          #274735
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="mb-4">
                  <h2 id="accordion-heading-7">
                    <button type="button"
                      class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#accordion-body-7" aria-expanded="true" aria-controls="accordion-body-7">
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Subject</span>
                    </button>
                  </h2>
                  <div id="accordion-body-7" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-7" data-accordion-body>
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
                          SEO Proposal
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
                          Business Card Design
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Technical SEO
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Portfolio Site
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
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Customer</span>
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
                  <h2 id="accordion-heading-5">
                    <button type="button"
                      class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#accordion-body-5" aria-expanded="true" aria-controls="accordion-body-5">
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Contract Type</span>
                    </button>
                  </h2>
                  <div id="accordion-body-5" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-5" data-accordion-body>
                    <ul class="space-y-3 max-h-64 overflow-y-auto">
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Contract Under Seal
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Executory Contracts
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Express Contracts
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Implied Contracts
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
            <router-link to="/crm/contracts-list"
              class="w-7 h-7 flex items-center justify-center rounded text-default me-1"><i
                class="ti ti-list-tree"></i></router-link>
            <router-link to="/crm/contracts"
              class="w-7 h-7 flex items-center justify-center rounded text-white bg-teal"><i
                class="ti ti-layout-grid"></i></router-link>
          </div>
          <!-- Add New Button -->
          <a href="javascript:void(0);"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
            data-drawer-target="offcanvas_add" data-drawer-show="offcanvas_add" aria-controls="offcanvas_add"
            data-drawer-placement="right">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add New Contract
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
        <div class="block">
          <div class="border border-borderColor rounded shadow bg-white">
            <div class="p-5">
              <div class="flex items-center justify-between mb-4">
                <span
                  class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">#1465781</span>
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
                      href="#"><i class="ti ti-copy me-1"></i> Clone</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#" data-drawer-target="offcanvas_view" data-drawer-show="offcanvas_view"
                      aria-controls="offcanvas_view" data-drawer-placement="right"><i
                        class="ti ti-clipboard-copy me-1"></i> View Contract</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-checks me-1"></i> Mark as Signed</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-printer me-1"></i> Print</a>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <h6 class="text-[14px] mb-1 font-semibold">SEO Contracts</h6>
                <p>Category : Contracts under Seal</p>
              </div>
              <div class="mb-4">
                <p class="flex items-center mb-2"><span class="text-dark me-1"><i
                      class="ti ti-calendar-event fs-16"></i></span>Date : <span class="text-dark ms-1">23 Nov
                    2025</span></p>
                <p class="flex items-center"><span class="text-dark me-1"><i
                      class="ti ti-calendar-stats fs-16"></i></span>Open till : <span class="text-dark ms-1">17 Dec
                    2025</span></p>
              </div>
              <div class="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                <a href="javascript:void(0);"
                  class="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2">
                  <img src="@/assets/img/company/company-01.svg" class="w-auto h-auto" alt="img">
                </a>
                <div class="flex flex-col">
                  <a href="javascript:void(0);" class="text-dark font-medium">NovaWave LLC</a>
                  <span class="block">Customer</span>
                </div>
              </div>
              <div class="flex justify-between pt-4 border-t border-borderColor">
                <div>
                  <span class="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center"> <i
                      class="ti ti-moneybag me-1"></i>Value : $2,04,214</span>
                </div>
                <a href="javascript:void(0);"
                  class="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"> <i
                    class="ti ti-file-dots fs-12"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="border border-borderColor rounded shadow bg-white">
            <div class="p-5">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <span
                    class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">274730</span>
                </div>
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
                      href="#"><i class="ti ti-copy me-1"></i> Clone</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#" data-drawer-target="offcanvas_view" data-drawer-show="offcanvas_view"
                      aria-controls="offcanvas_view" data-drawer-placement="right"><i
                        class="ti ti-clipboard-copy me-1"></i> View Contract</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-checks me-1"></i> Mark as Signed</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-printer me-1"></i> Print</a>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="mb-3">
                  <h6 class="text-[14px] mb-1 font-semibold">Web Design</h6>
                  <p>Category : Executory Contracts</p>
                </div>
                <div class="mb-4">
                  <p class="flex items-center mb-2"><span class="text-dark me-1"><i
                        class="ti ti-calendar-event fs-16"></i></span>Date : <span class="text-dark ms-1">07 Nov
                      2025</span></p>
                  <p class="flex items-center"><span class="text-dark me-1"><i
                        class="ti ti-calendar-stats fs-16"></i></span>Open till : <span class="text-dark ms-1">11 Dec
                      2025</span></p>
                </div>
                <div class="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2">
                    <img src="@/assets/img/company/company-02.svg" class="w-auto h-auto" alt="img">
                  </a>
                  <div class="flex flex-col">
                    <a href="javascript:void(0);" class="text-dark font-medium">BlueSky Industries</a>
                    <span class="block">Customer</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between pt-4 border-t border-borderColor">
                <div>
                  <span class="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center"> <i
                      class="ti ti-moneybag me-1"></i>Value: $1,45,000</span>
                </div>
                <a href="javascript:void(0);"
                  class="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"> <i
                    class="ti ti-file-dots fs-12"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="border border-borderColor rounded shadow bg-white">
            <div class="p-5">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <span
                    class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">274731</span>
                </div>
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
                      href="#"><i class="ti ti-copy me-1"></i> Clone</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#" data-drawer-target="offcanvas_view" data-drawer-show="offcanvas_view"
                      aria-controls="offcanvas_view" data-drawer-placement="right"><i
                        class="ti ti-clipboard-copy me-1"></i> View Contract</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-checks me-1"></i> Mark as Signed</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-printer me-1"></i> Print</a>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="mb-3">
                  <h6 class="text-[14px] mb-1 font-semibold">Logo & Branding</h6>
                  <p>Category : Express Contracts</p>
                </div>
                <div class="mb-4">
                  <p class="flex items-center mb-2"><span class="text-dark me-1"><i
                        class="ti ti-calendar-event fs-16"></i></span>Date : <span class="text-dark ms-1">15 Oct
                      2025</span></p>
                  <p class="flex items-center"><span class="text-dark me-1"><i
                        class="ti ti-calendar-stats fs-16"></i></span>Open till : <span class="text-dark ms-1">23 Nov
                      2025</span></p>
                </div>
                <div class="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2">
                    <img src="@/assets/img/company/company-03.svg" class="w-auto h-auto" alt="img">
                  </a>
                  <div class="flex flex-col">
                    <a href="javascript:void(0);" class="text-dark font-medium">Sliver Hawk</a>
                    <span class="block">Customer</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between pt-4 border-t border-borderColor">
                <div>
                  <span class="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center"> <i
                      class="ti ti-moneybag me-1"></i>Value: $2,15,000</span>
                </div>
                <a href="javascript:void(0);"
                  class="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"> <i
                    class="ti ti-file-dots fs-12"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="border border-borderColor rounded shadow bg-white">
            <div class="p-5">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <span
                    class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">274732</span>
                </div>
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
                      href="#"><i class="ti ti-copy me-1"></i> Clone</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#" data-drawer-target="offcanvas_view" data-drawer-show="offcanvas_view"
                      aria-controls="offcanvas_view" data-drawer-placement="right"><i
                        class="ti ti-clipboard-copy me-1"></i> View Contract</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-checks me-1"></i> Mark as Signed</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-printer me-1"></i> Print</a>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="mb-3">
                  <h6 class="text-[14px] mb-1 font-semibold">Development</h6>
                  <p>Category : Implied Contracts</p>
                </div>
                <div class="mb-4">
                  <p class="flex items-center mb-2"><span class="text-dark me-1"><i
                        class="ti ti-calendar-event fs-16"></i></span>Date : <span class="text-dark ms-1">28 Sep
                      2025</span></p>
                  <p class="flex items-center"><span class="text-dark me-1"><i
                        class="ti ti-calendar-stats fs-16"></i></span>Open till : <span class="text-dark ms-1">12 Nov
                      2025</span></p>
                </div>
                <div class="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2">
                    <img src="@/assets/img/company/company-04.svg" class="w-auto h-auto" alt="img">
                  </a>
                  <div class="flex flex-col">
                    <a href="javascript:void(0);" class="text-dark font-medium">Summit Peak</a>
                    <span class="block">Customer</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between pt-4 border-t border-borderColor">
                <div>
                  <span class="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center"> <i
                      class="ti ti-moneybag me-1"></i>Value: $4,80,380</span>
                </div>
                <a href="javascript:void(0);"
                  class="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"> <i
                    class="ti ti-file-dots fs-12"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="border border-borderColor rounded shadow bg-white">
            <div class="p-5">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <span
                    class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">274733</span>
                </div>
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
                      href="#"><i class="ti ti-copy me-1"></i> Clone</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#" data-drawer-target="offcanvas_view" data-drawer-show="offcanvas_view"
                      aria-controls="offcanvas_view" data-drawer-placement="right"><i
                        class="ti ti-clipboard-copy me-1"></i> View Contract</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-checks me-1"></i> Mark as Signed</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-printer me-1"></i> Print</a>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="mb-3">
                  <h6 class="text-[14px] mb-1 font-semibold">Business Card Design</h6>
                  <p>Category : Unconscionable </p>
                </div>
                <div class="mb-4">
                  <p class="flex items-center mb-2"><span class="text-dark me-1"><i
                        class="ti ti-calendar-event fs-16"></i></span>Date : <span class="text-dark ms-1">25 Sep
                      2025</span></p>
                  <p class="flex items-center"><span class="text-dark me-1"><i
                        class="ti ti-calendar-stats fs-16"></i></span>Open till : <span class="text-dark ms-1">07 Nov
                      2025</span></p>
                </div>
                <div class="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2">
                    <img src="@/assets/img/company/company-05.svg" class="w-auto h-auto" alt="img">
                  </a>
                  <div class="flex flex-col">
                    <a href="javascript:void(0);" class="text-dark font-medium">RiverStone Ltd</a>
                    <span class="block">Customer</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between pt-4 border-t border-borderColor">
                <div>
                  <span class="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center"> <i
                      class="ti ti-moneybag me-1"></i>Value: $4,80,380</span>
                </div>
                <a href="javascript:void(0);"
                  class="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"> <i
                    class="ti ti-file-dots fs-12"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="border border-borderColor rounded shadow bg-white">
            <div class="p-5">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <span
                    class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">274734</span>
                </div>
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
                      href="#"><i class="ti ti-copy me-1"></i> Clone</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#" data-drawer-target="offcanvas_view" data-drawer-show="offcanvas_view"
                      aria-controls="offcanvas_view" data-drawer-placement="right"><i
                        class="ti ti-clipboard-copy me-1"></i> View Contract</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-checks me-1"></i> Mark as Signed</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-printer me-1"></i> Print</a>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="mb-3">
                  <h6 class="text-[14px] mb-1 font-semibold">Technical SEO</h6>
                  <p>Category : Fixed Price Contract </p>
                </div>
                <div class="mb-4">
                  <p class="flex items-center mb-2"><span class="text-dark me-1"><i
                        class="ti ti-calendar-event fs-16"></i></span>Date : <span class="text-dark ms-1">12 Sep
                      2025</span></p>
                  <p class="flex items-center"><span class="text-dark me-1"><i
                        class="ti ti-calendar-stats fs-16"></i></span>Open till : <span class="text-dark ms-1">27 Oct
                      2025</span></p>
                </div>
                <div class="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2">
                    <img src="@/assets/img/company/company-06.svg" class="w-auto h-auto" alt="img">
                  </a>
                  <div class="flex flex-col">
                    <a href="javascript:void(0);" class="text-dark font-medium">Bright Bridge Grp</a>
                    <span class="block">Customer</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between pt-4 border-t border-borderColor">
                <div>
                  <span class="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center"> <i
                      class="ti ti-moneybag me-1"></i>Value: $3,50,000</span>
                </div>
                <a href="javascript:void(0);"
                  class="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"> <i
                    class="ti ti-file-dots fs-12"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="border border-borderColor rounded shadow bg-white">
            <div class="p-5">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <span
                    class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">274735</span>
                </div>
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
                      href="#"><i class="ti ti-copy me-1"></i> Clone</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#" data-drawer-target="offcanvas_view" data-drawer-show="offcanvas_view"
                      aria-controls="offcanvas_view" data-drawer-placement="right"><i
                        class="ti ti-clipboard-copy me-1"></i> View Contract</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-checks me-1"></i> Mark as Signed</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-printer me-1"></i> Print</a>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="mb-3">
                  <h6 class="text-[14px] mb-1 font-semibold">Social Media profile Branding</h6>
                  <p>Category : Cost Plus Contract </p>
                </div>
                <div class="mb-4">
                  <p class="flex items-center mb-2"><span class="text-dark me-1"><i
                        class="ti ti-calendar-event fs-16"></i></span>Date : <span class="text-dark ms-1">17 Aug
                      2025</span></p>
                  <p class="flex items-center"><span class="text-dark me-1"><i
                        class="ti ti-calendar-stats fs-16"></i></span>Open till : <span class="text-dark ms-1">15 Oct
                      2025</span></p>
                </div>
                <div class="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2">
                    <img src="@/assets/img/company/company-07.svg" class="w-auto h-auto" alt="img">
                  </a>
                  <div class="flex flex-col">
                    <a href="javascript:void(0);" class="text-dark font-medium">CoastalStar.Co.</a>
                    <span class="block">Customer</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between pt-4 border-t border-borderColor">
                <div>
                  <span class="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center"> <i
                      class="ti ti-moneybag me-1"></i>Value: $1,23,000</span>
                </div>
                <a href="javascript:void(0);"
                  class="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"> <i
                    class="ti ti-file-dots fs-12"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="border border-borderColor rounded shadow bg-white">
            <div class="p-5">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <span
                    class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">274736</span>
                </div>
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
                      href="#"><i class="ti ti-copy me-1"></i> Clone</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#" data-drawer-target="offcanvas_view" data-drawer-show="offcanvas_view"
                      aria-controls="offcanvas_view" data-drawer-placement="right"><i
                        class="ti ti-clipboard-copy me-1"></i> View Contract</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-checks me-1"></i> Mark as Signed</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-printer me-1"></i> Print</a>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="mb-3">
                  <h6 class="text-[14px] mb-1 font-semibold">Portfolio Site</h6>
                  <p>Category : Service Level Agreement </p>
                </div>
                <div class="mb-4">
                  <p class="flex items-center mb-2"><span class="text-dark me-1"><i
                        class="ti ti-calendar-event fs-16"></i></span>Date : <span class="text-dark ms-1">11 Jun
                      2025</span></p>
                  <p class="flex items-center"><span class="text-dark me-1"><i
                        class="ti ti-calendar-stats fs-16"></i></span>Open till : <span class="text-dark ms-1">04 Oct
                      2025</span></p>
                </div>
                <div class="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2">
                    <img src="@/assets/img/company/company-08.svg" class="w-auto h-auto" alt="img">
                  </a>
                  <div class="flex flex-col">
                    <a href="javascript:void(0);" class="text-dark font-medium">HarborView</a>
                    <span class="block">Customer</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between pt-4 border-t border-borderColor">
                <div>
                  <span class="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center"> <i
                      class="ti ti-moneybag me-1"></i>Value: $3,12,500</span>
                </div>
                <a href="javascript:void(0);"
                  class="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"> <i
                    class="ti ti-file-dots fs-12"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="border border-borderColor rounded shadow bg-white">
            <div class="p-5">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <span
                    class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">274737</span>
                </div>
                <div class="dropdown relative table-action" ref="el => dropdownRefs[8] = el">
                  <a href="javascript:void(0);"
                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                    @click="toggleDropdown(8, $event)"><i class="ti ti-dots-vertical"></i></a>
                  <div
                    class="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                    :class="{ 'hidden': openDropdown !== 8 }">
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                      aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                      Edit</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                        class="ti ti-trash me-1"></i> Delete</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-copy me-1"></i> Clone</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#" data-drawer-target="offcanvas_view" data-drawer-show="offcanvas_view"
                      aria-controls="offcanvas_view" data-drawer-placement="right"><i
                        class="ti ti-clipboard-copy me-1"></i> View Contract</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-checks me-1"></i> Mark as Signed</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-printer me-1"></i> Print</a>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="mb-3">
                  <h6 class="text-[14px] mb-1 font-semibold">Logo Design</h6>
                  <p>Category : Partnership Contract </p>
                </div>
                <div class="mb-4">
                  <p class="flex items-center mb-2"><span class="text-dark me-1"><i
                        class="ti ti-calendar-event fs-16"></i></span>Date : <span class="text-dark ms-1">11 Mar
                      2025</span></p>
                  <p class="flex items-center"><span class="text-dark me-1"><i
                        class="ti ti-calendar-stats fs-16"></i></span>Open till : <span class="text-dark ms-1">29 Sep
                      2025</span></p>
                </div>
                <div class="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2">
                    <img src="@/assets/img/company/company-09.svg" class="w-auto h-auto" alt="img">
                  </a>
                  <div class="flex flex-col">
                    <a href="javascript:void(0);" class="text-dark font-medium">Golden Gate Ltd</a>
                    <span class="block">Customer</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between pt-4 border-t border-borderColor">
                <div>
                  <span class="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center"> <i
                      class="ti ti-moneybag me-1"></i>Value: $4,18,000</span>
                </div>
                <a href="javascript:void(0);"
                  class="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"> <i
                    class="ti ti-file-dots fs-12"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="border border-borderColor rounded shadow bg-white">
            <div class="p-5">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <span
                    class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">274738</span>
                </div>
                <div class="dropdown relative table-action" ref="el => dropdownRefs[9] = el">
                  <a href="javascript:void(0);"
                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                    @click="toggleDropdown(9, $event)"><i class="ti ti-dots-vertical"></i></a>
                  <div
                    class="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                    :class="{ 'hidden': openDropdown !== 9 }">
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                      aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                      Edit</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                        class="ti ti-trash me-1"></i> Delete</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-copy me-1"></i> Clone</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#" data-drawer-target="offcanvas_view" data-drawer-show="offcanvas_view"
                      aria-controls="offcanvas_view" data-drawer-placement="right"><i
                        class="ti ti-clipboard-copy me-1"></i> View Contract</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-checks me-1"></i> Mark as Signed</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-printer me-1"></i> Print</a>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="mb-3">
                  <h6 class="text-[14px] mb-1 font-semibold">Web Design</h6>
                  <p>Category : Executory Contracts</p>
                </div>
                <div class="mb-4">
                  <p class="flex items-center mb-2"><span class="text-dark me-1"><i
                        class="ti ti-calendar-event fs-16"></i></span>Date : <span class="text-dark ms-1">27 Jan
                      2025</span></p>
                  <p class="flex items-center"><span class="text-dark me-1"><i
                        class="ti ti-calendar-stats fs-16"></i></span>Open till : <span class="text-dark ms-1">25 Sep
                      2025</span></p>
                </div>
                <div class="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2">
                    <img src="@/assets/img/company/company-10.svg" class="w-auto h-auto" alt="img">
                  </a>
                  <div class="flex flex-col">
                    <a href="javascript:void(0);" class="text-dark font-medium">BlueSky Industries</a>
                    <span class="block">Customer</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between pt-4 border-t border-borderColor">
                <div>
                  <span class="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center"> <i
                      class="ti ti-moneybag me-1"></i>Value: $1,45,000</span>
                </div>
                <a href="javascript:void(0);"
                  class="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"> <i
                    class="ti ti-file-dots fs-12"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="border border-borderColor rounded shadow bg-white">
            <div class="p-5">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <span
                    class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">274739</span>
                </div>
                <div class="dropdown relative table-action" ref="el => dropdownRefs[10] = el">
                  <a href="javascript:void(0);"
                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                    @click="toggleDropdown(10, $event)"><i class="ti ti-dots-vertical"></i></a>
                  <div
                    class="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                    :class="{ 'hidden': openDropdown !== 10 }">
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                      aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                      Edit</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                        class="ti ti-trash me-1"></i> Delete</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-copy me-1"></i> Clone</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#" data-drawer-target="offcanvas_view" data-drawer-show="offcanvas_view"
                      aria-controls="offcanvas_view" data-drawer-placement="right"><i
                        class="ti ti-clipboard-copy me-1"></i> View Contract</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-checks me-1"></i> Mark as Signed</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-printer me-1"></i> Print</a>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="mb-3">
                  <h6 class="text-[14px] mb-1 font-semibold">HarborView</h6>
                  <p>Category : Implied Contracts </p>
                </div>
                <div class="mb-4">
                  <p class="flex items-center mb-2"><span class="text-dark me-1"><i
                        class="ti ti-calendar-event fs-16"></i></span>Date : <span class="text-dark ms-1">17 Dec
                      2025</span></p>
                  <p class="flex items-center"><span class="text-dark me-1"><i
                        class="ti ti-calendar-stats fs-16"></i></span>Open till : <span class="text-dark ms-1">18 Oct
                      2026</span></p>
                </div>
                <div class="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2">
                    <img src="@/assets/img/company/company-07.svg" class="w-auto h-auto" alt="img">
                  </a>
                  <div class="flex flex-col">
                    <a href="javascript:void(0);" class="text-dark font-medium">RiverStone Ltd</a>
                    <span class="block">Customer</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between pt-4 border-t border-borderColor">
                <div>
                  <span class="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center"> <i
                      class="ti ti-moneybag me-1"></i>Value: $4,18,000</span>
                </div>
                <a href="javascript:void(0);"
                  class="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"> <i
                    class="ti ti-file-dots fs-12"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="border border-borderColor rounded shadow bg-white">
            <div class="p-5">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <span
                    class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">274740</span>
                </div>
                <div class="dropdown relative table-action" ref="el => dropdownRefs[11] = el">
                  <a href="javascript:void(0);"
                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                    @click="toggleDropdown(11, $event)"><i class="ti ti-dots-vertical"></i></a>
                  <div
                    class="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                    :class="{ 'hidden': openDropdown !== 11 }">
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                      aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                      Edit</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                        class="ti ti-trash me-1"></i> Delete</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-copy me-1"></i> Clone</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#" data-drawer-target="offcanvas_view" data-drawer-show="offcanvas_view"
                      aria-controls="offcanvas_view" data-drawer-placement="right"><i
                        class="ti ti-clipboard-copy me-1"></i> View Contract</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-checks me-1"></i> Mark as Signed</a>
                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#"><i class="ti ti-printer me-1"></i> Print</a>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="mb-3">
                  <h6 class="text-[14px] mb-1 font-semibold">Business Card Design</h6>
                  <p>Category : Partnership Contract </p>
                </div>
                <div class="mb-4">
                  <p class="flex items-center mb-2"><span class="text-dark me-1"><i
                        class="ti ti-calendar-event fs-16"></i></span>Date : <span class="text-dark ms-1">18 Dec
                      2025</span></p>
                  <p class="flex items-center"><span class="text-dark me-1"><i
                        class="ti ti-calendar-stats fs-16"></i></span>Open till : <span class="text-dark ms-1">19 Oct
                      2026</span></p>
                </div>
                <div class="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2">
                    <img src="@/assets/img/company/company-08.svg" class="w-auto h-auto" alt="img">
                  </a>
                  <div class="flex flex-col">
                    <a href="javascript:void(0);" class="text-dark font-medium">RiverStone Ltd</a>
                    <span class="block">Customer</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between pt-4 border-t border-borderColor">
                <div>
                  <span class="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center"> <i
                      class="ti ti-moneybag me-1"></i>Value: $4,80,380</span>
                </div>
                <a href="javascript:void(0);"
                  class="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"> <i
                    class="ti ti-file-dots fs-12"></i> </a>
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
  <!-- Add Contract -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Contract</h5>
      <button type="button" data-drawer-hide="offcanvas_add" aria-controls="offcanvas_add"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Subject <span class="text-danger"> *</span></label>
              <input class="form-control" type="text">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Start Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker
                    v-model="valueOne"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">End Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker
                    v-model="valueTwo"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Client <span class="text-danger"> *</span></label>
              <vue3-select
                  v-model="selected"
                  :options="ClientSele"
                  placeholder="Select"
                />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Contract Type <span class="text-danger"> *</span></label>
              <vue3-select
                  v-model="selectedOne"
                  :options="ContractSele"
                  placeholder="Select"
                />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Contract Value <span class="text-danger"> *</span></label>
              <input class="form-control" type="text">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-5">
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
              <label class="form-label">Description <span class="text-danger">*</span></label>
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
  <!-- /Add Contract -->

  <!-- Edit Contract -->
  <div id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Edit Contract</h5>
      <button type="button" data-drawer-hide="offcanvas_edit" aria-controls="offcanvas_edit"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Subject <span class="text-danger"> *</span></label>
              <input class="form-control" type="text" value="SEO Proposal">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Start Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker
                    v-model="valueOne"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">End Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker
                    v-model="valueTwo"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Client <span class="text-danger"> *</span></label>
              <vue3-select
                  v-model="selectedTwo"
                  :options="ClientSele"
                  placeholder="NovaWave LLC"
                />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Contract Type <span class="text-danger"> *</span></label>
              <vue3-select
                  v-model="selectedThree"
                  :options="ContractSele"
                  placeholder="Contracts under Seal"
                />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Contract Value <span class="text-danger"> *</span></label>
              <input class="form-control" type="text" value="$2,15,000">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-5">
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
              <label class="form-label">Description <span class="text-danger">*</span></label>
              <div class="editor pages-editor ql-container ql-snow">
                <div ref="editorRefOne" class="quill-editor"></div>
              </div>
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
  <!-- /Edit Contract -->

  <!-- View Contract -->
  <div id="offcanvas_view"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor flex items-center justify-between">
      <h5 class="inline-flex items-center">Contract<span
          class="text-danger border-b border-danger text-xs font-medium px-2 py-1 rounded bg-danger-100 ms-2">#1254057</span>
      </h5>
      <!-- Dropdown -->
      <div class="flex items-center">
        <div class="me-3">
          <a href="javascript:void(0);"
            class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
            data-dropdown-toggle="download-dropdown">
            Mark as Signed<i class="ti ti-chevron-down ml-1"></i>
          </a>
          <ul id="download-dropdown"
            class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]">
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                  class="ti ti-file-type-pdf me-1"></i>View PDF</a>
            </li>
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                  class="ti ti-checks me-1"></i>Mark as Signed</a>
            </li>
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                  class="ti ti-file-download me-1"></i>Download</a>
            </li>
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                  class="ti ti-copy me-1"></i>Clone</a>
            </li>
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                  class="ti ti-printer me-1"></i>Print</a>
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
      <ul class="flex flex-wrap text-sm font-medium text-center mb-3" id="default-styled-tab3"
        data-tabs-toggle="#company-tab-content3"
        data-tabs-active-classes="text-primary hover:text-primary border-primary"
        data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary"
        role="tablist">
        <li class="me-3" role="presentation">
          <button class="inline-block py-2 px-4 border-b-2" data-tabs-target="#company-basic3" type="button" role="tab"
            aria-selected="false">Contract Details</button>
        </li>
        <li role="presentation">
          <button class="inline-block py-2 px-4 border-b-2" data-tabs-target="#company-address3" type="button"
            role="tab" aria-selected="false">Renewal History</button>
        </li>
      </ul>
      <div id="company-tab-content3">
        <div class="hidden " id="company-basic3" role="tabpanel">
          <div class="flex items-center justify-end mb-3">
            <a href="#" class="btn btn-light me-3">Download</a>
            <a href="#" class="btn btn-primary" data-drawer-target="offcanvas_signup"
              data-drawer-show="offcanvas_signup" aria-controls="offcanvas_signup" data-drawer-placement="right">Sign
              Now</a>
          </div>
          <h6 class="mb-2">Web Design Contract</h6>
          <p class="mb-3">Where's the other side. The further off from England the nearer is to find my way into a tree.
            By the use of a well--' 'What did they draw?' said Alice, in a sorrowful tone, 'I'm afraid I've offended it
            again</p>
          <div class="card border border-borderColor rounded mb-4">
            <div class="card-body p-4">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
                <div class="md:col-span-6">
                  <div>
                    <h6 class="font-medium text-[14px] mb-2">Contract Value : $25,25,000</h6>
                    <p class="mb-1">Type : <span>Contracts under Seal</span></p>
                    <p class="mb-1">Start Date : <span>24 Apr 2025</span></p>
                    <p class="mb-1">End Date : <span>30 Apr 2025</span></p>
                    <p class="mb-0">Client : <span>Harbor View</span></p>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div>
                    <h6 class="font-semibold text-[14px] mb-2">CRMS</h6>
                    <p class="mb-1">3338 Marcus Street Birmingham, AL 35211</p>
                    <p class="mb-1">Phone : <span>+1 98789 78788</span></p>
                    <p class="mb-0">Email : <span> info@example.com</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h6 class="mb-3">Attachment</h6>
          <div class="card border border-borderColor rounded">
            <div class="card-body p-2 flex items-center justify-between">
              <div class="flex items-center">
                <span class="w-10 h-10 text-white rounded flex items-center justify-center bg-danger me-2"><i
                    class="ti ti-file-type-pdf"></i></span>
                <div>
                  <h6 class="font-medium text-[14px] mb-1">Proposal_webdesign.pdf</h6>
                  <span class="text-[13px]">15.2 MB</span>
                </div>
              </div>
              <a href="#" class="w-10 h-10 rounded-full bg-light flex items-center justify-center text-dark"><i
                  class="ti ti-download fs-16"></i></a>
            </div>
          </div>
        </div>
        <div class="hidden" id="company-address3" role="tabpanel">
          <h6 class="mb-3">Renewal History</h6>
          <div class="card border border-borderColor rounded mb-4">
            <div class="card-body flex items-center justify-between p-4">
              <div>
                <h6 class="font-medium fs-14 mb-2">Contract Value : $25,25,000</h6>
                <div class="flex items-center gap-3">
                  <p class="mb-0">Start Date : <span class="text-dark">24 Apr 2025</span></p>
                  <p class="mb-0">End Date : <span class="text-dark">30 Apr 2025</span></p>
                </div>
              </div>
              <a href="#" class="btn btn-primary" data-drawer-target="offcanvas_signup"
                data-drawer-show="offcanvas_signup" aria-controls="offcanvas_signup" data-drawer-placement="right">Sign
                Now</a>
            </div>
          </div>
          <div class="card border border-borderColor rounded">
            <div class="card-body flex items-center justify-between p-4">
              <div>
                <h6 class="font-medium fs-14 mb-2">Contract Value : $25,25,000</h6>
                <div class="flex items-center gap-3">
                  <p class="mb-0">Start Date : <span class="text-dark">24 Apr 2025</span></p>
                  <p class="mb-0">End Date : <span class="text-dark">30 Apr 2025</span></p>
                </div>
              </div>
              <span class="text-xs bg-success-100 text-success rounded border-b border-success px-2 py-0.5 me-2">Renewed
                On : 24 Apr 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /View Contract -->

  <!-- Signup -->
  <div id="offcanvas_signup"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor flex items-center justify-between">
      <h5>Signature & Confirmation of Identity</h5>
      <div class="flex items-center">
        <button type="button" data-drawer-hide="offcanvas_signup" aria-controls="offcanvas_signup"
          class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full flex items-center justify-center"><i
            class="ti ti-x"></i> <span class="sr-only">Close menu</span>
        </button>
      </div>
    </div>
    <div class="p-4">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
        <div class="md:col-span-6">
          <div class="mb-3">
            <label class="form-label">First Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="md:col-span-6">
          <div class="mb-3">
            <label class="form-label">Last Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="md:col-span-12">
          <div class="mb-3">
            <label class="form-label">Email <span class="text-danger">*</span></label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="md:col-span-12">
          <div>
            <label class="form-label">Signature <span class="text-danger">*</span></label>
            <div
              class="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
              <span class="block mb-1"><i class="ti ti-folder-open text-primary fs-16"></i></span>
              <p class="mb-0 tet-[14px] text-dark">Drop your files here or <a href="javascript:void(0);"
                  class="underline text-primary">browse</a></p>
              <input type="file" accept="video/image"
                class="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer">
              <p class="text-[13px] mb-0">Maximum size : 50 MB</p>
            </div>
            <div class="flex items-center my-5 pb-5 border-b border-borderColor">
              <a href="#"
                class="text-xs bg-danger-100 text-danger rounded border-b border-danger px-2 py-0.5 me-2">Clear</a>
              <a href="#" class="text-xs bg-info-100 text-info rounded border-b border-info px-2 py-0.5">Undo</a>
            </div>
            <p class="mb-0">By Clicking on “Sign”, I consent to be legally bound by this electronic representation of my
              signature</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Signup -->

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
          <p class="mb-3">Are you sure you want to remove contract you selected.</p>
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
const valueOne = ref();
const valueTwo = ref();
export default {
  data() {
    return {
      valueOne,
      valueTwo,
      content: "",
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      ContractSele: [
        { label: "Select", value: "Select" },
        { label: "Contracts under Seal", value: "Contracts under Seal" },
        { label: "Implied Contracts", value: "Implied Contracts" },
        { label: "Executory Contracts", value: "Executory Contracts" },
        { label: "Voidable Contracts", value: "Voidable Contracts" },
      ],
      ClientSele: [
        { label: "Select", value: "Select" },
        { label: "NovaWave LLC", value: "NovaWave LLC" },
        { label: "Silver Hawk", value: "Silver Hawk" },
        { label: "Harbor View", value: "Harbor View" },
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
      if (this.$refs.editorRefOne) {
        const quillOne = new Quill(this.$refs.editorRefOne, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          },
        });

        quillOne.on("text-change", () => {
          this.content = quillOne.root.innerHTML;
        });
      }
    },
  },
};
</script>
