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
            Testimonials
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Testimonials</li>
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
            data-modal-target="add_modal" data-modal-toggle="add_modal">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add Testimonials
          </a>
        </div>
        <div class="bg-white p-4">
          <!-- Contact List -->
          <div class="table-responsive custom-table">
            <div id="testimonials_list_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start "></div>
                <div class="col-start-2 justify-self-end "></div>
              </div>
              <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="col-span-2 table-responsive">
                  <table
                    class="table table-nowrap border border-borderColor dataTable min-w-full text-sm align-middle whitespace-nowrap"
                    id="testimonials_list">
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
                          rowspan="1" colspan="1" aria-label="Estimation By: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Estimation By</span><span
                            class="dt-column-order"></span></th>
                        <th data-dt-column="3"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Rating: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Rating</span><span class="dt-column-order"></span>
                        </th>
                        <th data-dt-column="4"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Content: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Content</span><span class="dt-column-order"></span>
                        </th>
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
                        <th
                          class="text-end no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          data-dt-column="7" rowspan="1" colspan="1" aria-label="Action: Activate to sort" tabindex="0">
                          <span class="dt-column-title text-gray-900" role="button">Action</span><span class="dt-column-order"></span>
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
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><a href="javascript:void(0);"
                              class="w-10 h-10 me-2"><img src="@/assets/img/profiles/avatar-19.jpg" alt="User Image"
                                class="rounded-full"></a><a href="javascript:void(0);" class="flex flex-col">Darlee
                              Robertson<span class="text-default font-normal text-[13px] inline-block mt-1">Facility
                                Manager </span></a></h6>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select filled"><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i>
                          </div>
                        </td>
                        <td class="p-3">Our team cut customer onboarding time by 60% after </td>
                        <td class="p-3">25 Sep 2025, 01:22pm</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-danger">Inactive</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[0] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(0, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 0 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_modal"
                                data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
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
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><a href="javascript:void(0);"
                              class="w-10 h-10 me-2"><img src="@/assets/img/profiles/avatar-20.jpg" alt="User Image"
                                class="rounded-full"></a><a href="javascript:void(0);" class="flex flex-col">Sharon
                              Roy<span class="text-default font-normal text-[13px] inline-block mt-1">Installer
                              </span></a></h6>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select filled"><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i>
                          </div>
                        </td>
                        <td class="p-3">Incredibly intuitive, and their support is top-notch.</td>
                        <td class="p-3">29 Sep 2025, 08:12 am</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-danger">Inactive</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(1, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 1 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_modal"
                                data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
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
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><a href="javascript:void(0);"
                              class="w-10 h-10 me-2"><img src="@/assets/img/profiles/avatar-21.jpg" alt="User Image"
                                class="rounded-full"></a><a href="javascript:void(0);" class="flex flex-col">Vaughan
                              Lewis<span class="text-default font-normal text-[13px] inline-block mt-1">Senior Manager
                              </span></a></h6>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select filled"><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i>
                          </div>
                        </td>
                        <td class="p-3">Everything arrived on time, and I’ve already placed.</td>
                        <td class="p-3">02 Oct 2025, 10:15 am</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(2, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 2 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_modal"
                                data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
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
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><a href="javascript:void(0);"
                              class="w-10 h-10 me-2"><img src="@/assets/img/profiles/avatar-23.jpg" alt="User Image"
                                class="rounded-full"></a><a href="javascript:void(0);" class="flex flex-col">Jessica
                              Louise<span class="text-default font-normal text-[13px] inline-block mt-1">Test Engineer
                              </span></a></h6>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select filled"><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i>
                          </div>
                        </td>
                        <td class="p-3">The product quality and customer service blew.</td>
                        <td class="p-3">11 Oct 2025, 02:32 pm</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[3] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(3, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 3 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_modal"
                                data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
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
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><a href="javascript:void(0);"
                              class="w-10 h-10 me-2"><img src="@/assets/img/profiles/avatar-16.jpg" alt="User Image"
                                class="rounded-full"></a><a href="javascript:void(0);" class="flex flex-col">Carol
                              Thomas<span class="text-default font-normal text-[13px] inline-block mt-1">UI /UX Designer
                              </span></a></h6>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select filled"><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i>
                          </div>
                        </td>
                        <td class="p-3">I was hesitant to shop online, but the product quality</td>
                        <td class="p-3">4 Nov 2025, 04:22 pm</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-danger">Inactive</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[4] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(4, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 4 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_modal"
                                data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
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
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><a href="javascript:void(0);"
                              class="w-10 h-10 me-2"><img src="@/assets/img/profiles/avatar-22.jpg" alt="User Image"
                                class="rounded-full"></a><a href="javascript:void(0);" class="flex flex-col">Dawn
                              Mercha<span class="text-default font-normal text-[13px] inline-block mt-1">Technician
                              </span></a></h6>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select filled"><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i>
                          </div>
                        </td>
                        <td class="p-3">Strategic advice we got from Apex Consulting</td>
                        <td class="p-3">16 Nov 2025, 10:51 pm</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[5] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(5, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 5 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_modal"
                                data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
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
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><a href="javascript:void(0);"
                              class="w-10 h-10 me-2"><img src="@/assets/img/profiles/avatar-24.jpg" alt="User Image"
                                class="rounded-full"></a><a href="javascript:void(0);" class="flex flex-col">Rachel
                              Hampton<span class="text-default font-normal text-[13px] inline-block mt-1">Software
                                Developer </span></a></h6>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select filled"><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i>
                          </div>
                        </td>
                        <td class="p-3">The confidence and skills to land my first tech job</td>
                        <td class="p-3">25 Nov 2025, 3:43 pm</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[6] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(6, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 6 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_modal"
                                data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
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
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><a href="javascript:void(0);"
                              class="w-10 h-10 me-2"><img src="@/assets/img/profiles/avatar-25.jpg" alt="User Image"
                                class="rounded-full"></a><a href="javascript:void(0);" class="flex flex-col">Jonelle
                              Curtiss<span class="text-default font-normal text-[13px] inline-block mt-1">Supervisor
                              </span></a></h6>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select filled"><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i>
                          </div>
                        </td>
                        <td class="p-3">They're now a core part of our growth team.</td>
                        <td class="p-3">07 Dec 2025, 11:22 am</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[7] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(7, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 7 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_modal"
                                data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
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
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><a href="javascript:void(0);"
                              class="w-10 h-10 me-2"><img src="@/assets/img/profiles/avatar-26.jpg" alt="User Image"
                                class="rounded-full"></a><a href="javascript:void(0);" class="flex flex-col">Jonathan
                              Smith<span class="text-default font-normal text-[13px] inline-block mt-1">Team Lead Dev
                              </span></a></h6>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select filled"><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i>
                          </div>
                        </td>
                        <td class="p-3">The instructors genuinely care, and the real-world</td>
                        <td class="p-3">15 Dec 2025, 8:17 am</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[8] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(8, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 8 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_modal"
                                data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
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
                          <h6 class="flex items-center text-[14px] font-medium mb-0"><a href="javascript:void(0);"
                              class="w-10 h-10 me-2"><img src="@/assets/img/profiles/avatar-06.jpg" alt="User Image"
                                class="rounded-full"></a><a href="javascript:void(0);" class="flex flex-col">Eric
                              Adams<span class="text-default font-normal text-[13px] inline-block mt-1">HR Manager
                              </span></a></h6>
                        </td>
                        <td class="p-3">
                          <div class="set-star rating-select filled"><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i><i
                              class="ti ti-star-filled fs-16 me-1"></i><i class="ti ti-star-filled fs-16 me-1"></i>
                          </div>
                        </td>
                        <td class="p-3">This course gave me the confidence and skills to land.</td>
                        <td class="p-3">29 Dec 2025, 1:22 pm</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[9] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(9, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 9 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_modal"
                                data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a><a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
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
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="w-full md:w-1/2">
              <div class="datatable-length">
                <div class="dt-length"><label for="dt-length-0">Show <select name="testimonials_list_length"
                      aria-controls="testimonials_list"
                      class="border px-3 py-2 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500"
                      id="dt-length-0">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select> entries</label></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 mt-4 md:mt-0 text-end">
              <div class="datatable-paginate">
                <div class="dt-paging">
                  <nav aria-label="pagination">
                    <ul class="pagination"><a
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 bg-white dark:bg-gray-800 text-gray-300 dark:text-gray-600 first rounded-l-lg"
                        aria-controls="testimonials_list" aria-disabled="true" aria-label="First" data-dt-idx="first"
                        tabindex="-1">«</a><a
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 bg-white dark:bg-gray-800 text-gray-300 dark:text-gray-600 previous"
                        aria-controls="testimonials_list" aria-disabled="true" aria-label="Previous"
                        data-dt-idx="previous" tabindex="-1"><i class="ti ti-chevron-left"></i> </a><a href="#"
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 font-semibold bg-gray-100 dark:bg-gray-700/75 text-gray-800 hover:text-gray-900 hover:border-gray-300 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40"
                        aria-controls="testimonials_list" aria-current="page" data-dt-idx="0">1</a><a
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 bg-white dark:bg-gray-800 text-gray-300 dark:text-gray-600 next"
                        aria-controls="testimonials_list" aria-disabled="true" aria-label="Next" data-dt-idx="next"
                        tabindex="-1"><i class="ti ti-chevron-right"></i> </a><a
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 bg-white dark:bg-gray-800 text-gray-300 dark:text-gray-600 last rounded-r-lg"
                        aria-controls="testimonials_list" aria-disabled="true" aria-label="Last" data-dt-idx="last"
                        tabindex="-1">»</a></ul>
                  </nav>
                </div>
              </div>
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

  <!-- Add Testimonial -->
  <div id="add_modal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add Testimonial</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_modal">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <div class="flex items-center mb-3">
                  <div
                    class="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                    <div class="relative flex items-center justify-center">
                      <i class="ti ti-photo text-dark fs-16"></i>
                    </div>
                  </div>
                  <div class="inline-flex flex-col items-start">
                    <div class="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                      <i class="ti ti-file-broken me-1"></i>Upload file
                      <input type="file" class="opacity-0 absolute start-0 top-0" multiple="">
                    </div>
                    <span>JPG, GIF or PNG. Max size of 800K</span>
                  </div>
                </div>
              </div>
              <div class="md:col-span-12">
                <label class="form-label">User Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Designation <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Ratings <span class="text-danger">*</span></label>
                <vue3-select v-model="selected" :options="RatSele" placeholder="Select" />
              </div>
              <div class="md:col-span-6">
                <div>
                  <label class="form-label">Status <span class="text-danger">*</span></label>
                  <div class="flex items-center gap-4">
                    <div class="form-check">
                      <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault"
                        id="flexRadioDefault1" checked>
                      <label class="form-check-label" for="flexRadioDefault1">
                        Active
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault"
                        id="flexRadioDefault2">
                      <label class="form-check-label" for="flexRadioDefault2">
                        Inactive
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_modal" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Testimonial -->

  <!-- Edit Testimonial -->
  <div id="edit_modal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Edit Testimonial</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="edit_modal">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <div class="flex items-center mb-3">
                  <div
                    class="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                    <div class="relative flex items-center justify-center">
                      <i class="ti ti-photo text-dark fs-16"></i>
                    </div>
                  </div>
                  <div class="inline-flex flex-col items-start">
                    <div class="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                      <i class="ti ti-file-broken me-1"></i>Upload file
                      <input type="file" class="opacity-0 absolute start-0 top-0" multiple="">
                    </div>
                    <span>JPG, GIF or PNG. Max size of 800K</span>
                  </div>
                </div>
              </div>
              <div class="md:col-span-12">
                <label class="form-label">User Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="Darlee Robertson">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Designation <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="Facility Manager">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Ratings <span class="text-danger">*</span></label>
                <vue3-select v-model="selectedOne" :options="RatSeleOne" placeholder="5" />
              </div>
              <div class="md:col-span-6">
                <div>
                  <label class="form-label">Status <span class="text-danger">*</span></label>
                  <div class="flex items-center gap-4">
                    <div class="form-check">
                      <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault2"
                        id="flexRadioDefault3" checked>
                      <label class="form-check-label" for="flexRadioDefault3">
                        Active
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault2"
                        id="flexRadioDefault4">
                      <label class="form-check-label" for="flexRadioDefault4">
                        Inactive
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="edit_modal" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Testimonial -->

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
          <p class="mb-3">Are you sure you want to remove testimonial you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full" data-modal-hide="delete_modal">Yes,
              Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->
</template>
<script>
import { initFlowbite } from 'flowbite';
import { onMounted, onUnmounted, ref } from 'vue';
export default {
  data() {
    return {
      selected: null,
      selectedOne: "5",
      RatSele: [
        { label: "Choose(1-5)", value: "Choose(1-5)" },
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
      ],
      RatSeleOne: [
        { label: "Choose(1-5)", value: "Choose(1-5)" },
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
      ],
    };
  },
  setup() {
    const openDropdown = ref(null);
    const dropdownRefs = ref([]);
    const toggleDropdown = (index, event) => {
      event.stopPropagation();
      openDropdown.value = index;
    };
    onMounted(() => {
      document.addEventListener("click", () => {
        openDropdown.value = null;
      });
    });
    onUnmounted(() => {
      document.removeEventListener("click", () => {
        openDropdown.value = null;
      });
    });
    return {
      openDropdown,
      dropdownRefs,
      toggleDropdown,
    };
  },
  mounted() {
    initFlowbite();
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
