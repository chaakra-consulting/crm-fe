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
            Invoices
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Invoices</li>
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
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Client</span>
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
                          Harborview
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
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Project</span>
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
                          DreamGigs
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Servbook
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
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Amount</span>
                    </button>
                  </h2>
                  <div id="accordion-body-5" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-5" data-accordion-body>
                    <ul class="space-y-3 max-h-64 overflow-y-auto">
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          $2,15,000
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          $1,45,000
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          $2,12,000
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          $4,80,380
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
            <router-link to="/crm/invoice-list" class="w-7 h-7 flex items-center justify-center rounded text-default me-1"><i
                class="ti ti-list-tree"></i></router-link>
            <router-link to="/crm/invoices" class="w-7 h-7 flex items-center justify-center rounded text-white bg-teal"><i
                class="ti ti-layout-grid"></i></router-link>
          </div>
          <!-- Add New Button -->
          <a href="javascript:void(0);"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
            data-drawer-target="offcanvas_add" data-drawer-show="offcanvas_add" aria-controls="offcanvas_add"
            data-drawer-placement="right">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add New Invoice
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1465781</span>
              <div class="dropdown relative table-action">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <router-link class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    to="/crm/invoices-details"><i class="ti ti-clipboard-copy me-1"></i> View Invoices</router-link>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Partially Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2">
                  <img src="@/assets/img/priority/truellysel.svg" class="w-auto h-auto rounded-0" alt="Truelysell">
              </router-link>
                <div>
                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/project-details"
                      class="hover:text-primary">Truelysell</router-link></h6>
                </div>
              </div>
              <div>
                <span class="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-secondary">Partially Paid</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span class="text-dark ms-1">22 Jun
                  2025</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-0"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount : <span
                  class="text-dark ms-1">$0</span></p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-01.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">NovaWave LLC</a>
                </h6>
                <span>Sent to</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1465782</span>
              <div class="dropdown relative table-action">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <router-link class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    to="/crm/invoices-details"><i class="ti ti-clipboard-copy me-1"></i> View Invoices</router-link>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Partially Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2">
                  <img src="@/assets/img/priority/dreamchat.svg" class="w-auto h-auto rounded-0" alt="Truelysell">
              </router-link>
                <div>
                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/project-details"
                      class="hover:text-primary">Dreamschat</router-link></h6>
                </div>
              </div>
              <div>
                <span class="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-success">Paid</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
                  class="text-dark ms-1">$1,45,000</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span class="text-dark ms-1">22 Jun
                  2025</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-0"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount : <span
                  class="text-dark ms-1">$0</span></p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-02.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">Redwood Inc</a>
                </h6>
                <span>Sent to</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1465783</span>
              <div class="dropdown relative table-action">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <router-link class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    to="/crm/invoices-details"><i class="ti ti-clipboard-copy me-1"></i> View Invoices</router-link>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Partially Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2">
                  <img src="@/assets/img/priority/truellysell.svg" class="w-auto h-auto rounded-0" alt="Truelysell">
              </router-link>
                <div>
                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/project-details"
                      class="hover:text-primary">DreamGigs</router-link></h6>
                </div>
              </div>
              <div>
                <span class="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-secondary">Partially Paid</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span class="text-dark ms-1">22 Jun
                  2025</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-0"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount : <span
                  class="text-dark ms-1">$0</span></p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-03.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">HarborView</a>
                </h6>
                <span>Sent to</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1465784</span>
              <div class="dropdown relative table-action">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <router-link class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    to="/crm/invoices-details"><i class="ti ti-clipboard-copy me-1"></i> View Invoices</router-link>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Partially Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2">
                  <img src="@/assets/img/priority/servbook.svg" class="w-auto h-auto rounded-0" alt="Truelysell">
              </router-link>
                <div>
                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/project-details"
                      class="hover:text-primary">Servbook</router-link></h6>
                </div>
              </div>
              <div>
                <span class="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-success">Paid</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span class="text-dark ms-1">22 Jun
                  2025</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-0"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount : <span
                  class="text-dark ms-1">$0</span></p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-04.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">CoastalStar Co.</a>
                </h6>
                <span>Sent to</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1465785</span>
              <div class="dropdown relative table-action">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <router-link class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    to="/crm/invoices-details"><i class="ti ti-clipboard-copy me-1"></i> View Invoices</router-link>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Partially Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2">
                  <img src="@/assets/img/priority/dream-pos.svg" class="w-auto h-auto rounded-0" alt="Truelysell">
              </router-link>
                <div>
                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/project-details"
                      class="hover:text-primary">DreamPOS</router-link></h6>
                </div>
              </div>
              <div>
                <span class="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-danger">Unpaid</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span class="text-dark ms-1">22 Jun
                  2025</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-0"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount : <span
                  class="text-dark ms-1">$0</span></p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-05.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">Summit Peak</a>
                </h6>
                <span>Sent to</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1465786</span>
              <div class="dropdown relative table-action">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <router-link class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    to="/crm/invoices-details"><i class="ti ti-clipboard-copy me-1"></i> View Invoices</router-link>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Partially Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2">
                  <img src="@/assets/img/priority/kofejob.svg" class="w-auto h-auto rounded-0" alt="Truelysell">
              </router-link>
                <div>
                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/project-details"
                      class="hover:text-primary">Kofejob</router-link></h6>
                </div>
              </div>
              <div>
                <span class="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-secondary">Partially Paid</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span class="text-dark ms-1">22 Jun
                  2025</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-0"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount : <span
                  class="text-dark ms-1">$0</span></p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-06.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">Silver Hawk</a>
                </h6>
                <span>Sent to</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1465787</span>
              <div class="dropdown relative table-action">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <router-link class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    to="/crm/invoices-details"><i class="ti ti-clipboard-copy me-1"></i> View Invoices</router-link>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Partially Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2">
                  <img src="@/assets/img/priority/smarthr.svg" class="w-auto h-auto rounded-0" alt="Truelysell">
              </router-link>
                <div>
                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/project-details"
                      class="hover:text-primary">SmartHR</router-link></h6>
                </div>
              </div>
              <div>
                <span class="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-info">Overdue</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span class="text-dark ms-1">22 Jun
                  2025</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-0"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount : <span
                  class="text-dark ms-1">$0</span></p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-07.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">BlueSky Industries</a>
                </h6>
                <span>Sent to</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1465788</span>
              <div class="dropdown relative table-action">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <router-link class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    to="/crm/invoices-details"><i class="ti ti-clipboard-copy me-1"></i> View Invoices</router-link>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Partially Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2">
                  <img src="@/assets/img/priority/doccure.svg" class="w-auto h-auto rounded-0" alt="Truelysell">
              </router-link>
                <div>
                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/project-details"
                      class="hover:text-primary">Doccure</router-link></h6>
                </div>
              </div>
              <div>
                <span class="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-success">Paid</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span class="text-dark ms-1">22 Jun
                  2025</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-0"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount : <span
                  class="text-dark ms-1">$0</span></p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-08.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">NovaWave LLC</a>
                </h6>
                <span>Sent to</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1465789</span>
              <div class="dropdown relative table-action">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <router-link class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    to="/crm/invoices-details"><i class="ti ti-clipboard-copy me-1"></i> View Invoices</router-link>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Partially Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2">
                  <img src="@/assets/img/priority/best.svg" class="w-auto h-auto rounded-0" alt="Truelysell">
              </router-link>
                <div>
                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/project-details"
                      class="hover:text-primary">Best@laundry</router-link></h6>
                </div>
              </div>
              <div>
                <span class="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-danger">Unpaid</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span class="text-dark ms-1">22 Jun
                  2025</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-0"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount : <span
                  class="text-dark ms-1">$0</span></p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-09.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">Redwood Inc</a>
                </h6>
                <span>Sent to</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1465790</span>
              <div class="dropdown relative table-action">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <router-link class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    to="/crm/invoices-details"><i class="ti ti-clipboard-copy me-1"></i> View Invoices</router-link>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Partially Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2">
                  <img src="@/assets/img/priority/sports.svg" class="w-auto h-auto rounded-0" alt="Truelysell">
              </router-link>
                <div>
                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/project-details"
                      class="hover:text-primary">Dreamsports</router-link></h6>
                </div>
              </div>
              <div>
                <span class="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-success">Paid</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span class="text-dark ms-1">22 Jun
                  2025</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-0"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount : <span
                  class="text-dark ms-1">$0</span></p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-10.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">Acme Corp.</a>
                </h6>
                <span>Sent to</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1465791</span>
              <div class="dropdown relative table-action">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <router-link class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    to="/crm/invoices-details"><i class="ti ti-clipboard-copy me-1"></i> View Invoices</router-link>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Partially Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2">
                  <img src="@/assets/img/priority/gig.svg" class="w-auto h-auto rounded-0" alt="Truelysell">
              </router-link>
                <div>
                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/project-details"
                      class="hover:text-primary">Dreamsgigs</router-link></h6>
                </div>
              </div>
              <div>
                <span class="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-warning">Partially Paid</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span class="text-dark ms-1">22 Jun
                  2025</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-0"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount : <span
                  class="text-dark ms-1">$0</span></p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-01.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">Acme Corp.</a>
                </h6>
                <span>Sent to</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-borderColor rounded shadow bg-white">
          <div class="p-5">
            <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
              <span
                class="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">#1465791</span>
              <div class="dropdown relative table-action">
                <a href="javascript:void(0);"
                  class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"><i
                    class="ti ti-dots-vertical"></i></a>
                <div
                  class="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit"
                    aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i>
                    Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                      class="ti ti-trash me-1"></i> Delete</a>
                  <router-link class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    to="/crm/invoices-details"><i class="ti ti-clipboard-copy me-1"></i> View Invoices</router-link>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-checks me-1"></i> Mark as Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-file me-1"></i> Mark as Partially Paid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                    href="javascript:void(0);"><i class="ti ti-printer me-1"></i> Print</a>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <router-link to="/crm/project-details"
                  class="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2">
                  <img src="@/assets/img/priority/smarthr.svg" class="w-auto h-auto rounded-0" alt="Truelysell">
              </router-link>
                <div>
                  <h6 class="text-[14px] font-medium mb-0"><router-link to="/crm/project-details"
                      class="hover:text-primary">SmartHR</router-link></h6>
                </div>
              </div>
              <div>
                <span class="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-info">Overdue</span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span class="text-dark ms-1">22 Jun
                  2025</span></p>
              <p class="text-default inline-flex items-center mb-1"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount : <span
                  class="text-dark ms-1">$2,15,000</span></p>
              <p class="text-default inline-flex items-center mb-0"><i
                  class="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount : <span
                  class="text-dark ms-1">$0</span></p>
            </div>
            <div class="flex items-center mt-4">
              <a href="javascript:void(0);"
                class="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2">
                <img src="@/assets/img/icons/company-icon-03.svg" class="w-auto h-auto" alt="img">
              </a>
              <div>
                <h6 class="text-sm font-medium">
                  <a href="javascript:void(0);" class="text-gray-900 hover:text-primary">CoastalStar Co.</a>
                </h6>
                <span>Sent to</span>
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
  <invoices-modal></invoices-modal>
</template>
<script>
export default {
  data() {
    return {};
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
};
</script>
