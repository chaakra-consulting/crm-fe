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
            FAQ
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">FAQ</li>
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
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
            data-modal-target="add_modal" data-modal-toggle="add_modal">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add FAQ
          </a>
        </div>
        <div class="bg-white p-4">
          <!-- Contact List -->
          <div class="table-responsive custom-table">
            <div id="faqlist_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start "></div>
                <div class="col-start-2 justify-self-end "></div>
              </div>
              <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="col-span-2 table-responsive">
                  <table
                    class="table table-nowrap border border-borderColor dataTable min-w-full text-sm align-middle whitespace-nowrap"
                    id="faqlist">
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
                            class="dt-column-title" role="button"></span><span class="dt-column-order"></span></th>
                        <th data-dt-column="2"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Questions: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Questions</span><span
                            class="dt-column-order"></span>
                        </th>
                        <th data-dt-column="3"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Category: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Category</span><span
                            class="dt-column-order"></span>
                        </th>
                        <th data-dt-column="4"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Answers: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Answers</span><span
                            class="dt-column-order"></span>
                        </th>
                        <th data-dt-column="5"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Created at: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Created at</span><span
                            class="dt-column-order"></span>
                        </th>
                        <th data-dt-column="6"
                          class="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          rowspan="1" colspan="1" aria-label="Status: Activate to sort" tabindex="0"><span
                            class="dt-column-title text-gray-900" role="button">Status</span><span
                            class="dt-column-order"></span>
                        </th>
                        <th
                          class="text-end no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          data-dt-column="7" rowspan="1" colspan="1" aria-label="Action: Activate to sort" tabindex="0">
                          <span class="dt-column-title text-gray-900" role="button">Action</span><span
                            class="dt-column-order"></span>
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
                        <td class="p-3">What is a CRM and why should I use it?</td>
                        <td class="p-3">Services</td>
                        <td class="p-3">organize contacts, manage sales pipelines, track communication,</td>
                        <td class="p-3">25 Sep 2025, 01:22 pm</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[0] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(0)"><i class="ti ti-dots-vertical"></i></a>
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
                        <td class="p-3">How do I add a new contact or company?</td>
                        <td class="p-3">Advertising</td>
                        <td class="p-3">Go to the Contacts or Companies tab, click “Add New”, and fill in the form</td>
                        <td class="p-3">29 Sep 2025, 08:12 am</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(1)"><i class="ti ti-dots-vertical"></i></a>
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
                        <td class="p-3">What’s the difference between a Lead, Contact, and Deal?</td>
                        <td class="p-3">Services</td>
                        <td class="p-3">A potential customer who hasn't been qualified yet.</td>
                        <td class="p-3">02 Oct 2025, 02:32 pm</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(2)"><i class="ti ti-dots-vertical"></i></a>
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
                        <td class="p-3">How do I track my calls, emails, and meetings?</td>
                        <td class="p-3">Services</td>
                        <td class="p-3">You can log activities manually under the contact or deal record</td>
                        <td class="p-3">11 Oct 2025, 02:32 pm</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[3] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(3)"><i class="ti ti-dots-vertical"></i></a>
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
                        <td class="p-3">What is the sales pipeline and how do I use it?</td>
                        <td class="p-3">Media</td>
                        <td class="p-3">The pipeline shows your deals in different stages</td>
                        <td class="p-3">04 Nov 2025, 04:22 pm</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[4] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(4)"><i class="ti ti-dots-vertical"></i></a>
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
                        <td class="p-3">How can I set reminders or follow-up tasks?</td>
                        <td class="p-3">Content Marketing</td>
                        <td class="p-3">You can create a task under a contact or deal, and set a due date and reminder.
                        </td>
                        <td class="p-3">16 Nov 2025, 10:51 pm</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[5] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(5)"><i class="ti ti-dots-vertical"></i></a>
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
                        <td class="p-3">Can I collaborate with my team in the CRM?</td>
                        <td class="p-3">Health Care</td>
                        <td class="p-3">Yes! You can assign deals, tag teammates in notes.</td>
                        <td class="p-3">25 Nov 2025, 03:43 pm</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[6] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(6)"><i class="ti ti-dots-vertical"></i></a>
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
                        <td class="p-3">How do I use the CRM on my phone?</td>
                        <td class="p-3">Services</td>
                        <td class="p-3">Most CRMs offer a mobile app for iOS and Android.</td>
                        <td class="p-3">07 Dec 2025, 11:22 am</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[7] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(7)"><i class="ti ti-dots-vertical"></i></a>
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
                        <td class="p-3">Is my data automatically saved and synced?</td>
                        <td class="p-3">Social Marketing</td>
                        <td class="p-3">Yes. All updates are saved automatically and synced across devices and users in
                          real time.</td>
                        <td class="p-3">15 Dec 2025, 08:17 am</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[8] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(8)"><i class="ti ti-dots-vertical"></i></a>
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
                        <td class="p-3">Who do I contact if I need help?</td>
                        <td class="p-3">Media</td>
                        <td class="p-3">You can reach out to your CRM admin, use the Help Center.</td>
                        <td class="p-3">29 Dec 2025, 01:22 pm</td>
                        <td class="p-3"><span
                            class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Active</span>
                        </td>
                        <td class="p-3">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[9] = el"><a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(9)"><i class="ti ti-dots-vertical"></i></a>
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

  <!-- Add FAQ -->
  <div id="add_modal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add FAQ</h5>
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
                <label class="form-label">Category <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Question <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Answer <span class="text-danger">*</span></label>
                <textarea class="form-control" rows="3"></textarea>
              </div>
              <div class="md:col-span-12">
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
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_modal" type="button"
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
  <!-- /Add FAQ -->

  <!-- Edit FAQ -->
  <div id="edit_modal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Edit FAQ</h5>
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
                <label class="form-label">Category <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="Service">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Question <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="How can I book a service">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Answer <span class="text-danger">*</span></label>
                <textarea class="form-control"
                  rows="3">Log in to your account. Go to the "Services" or "Bookings" page.</textarea>
              </div>
              <div class="md:col-span-12">
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
  <!-- /Edit FAQ -->

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
          <p class="mb-3">Are you sure you want to remove faq you selected.</p>
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
    };
  },
  setup() {
    const openDropdown = ref(null);
    const dropdownRefs = ref([]);

    const toggleDropdown = (index, event) => {
      if (event && event.stopPropagation) {
        event.stopPropagation();
      }
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

    const toggleHeader = () => {
      const headerElement = document.getElementById("collapse-header");
      if (headerElement) {
        headerElement.classList.toggle("active");
        document.body.classList.toggle("header-collapse");
      }
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
      closeAllDropdowns,
      toggleHeader
    };
  },
  mounted() {
    // initFlowbite(); // Already called in setup() onMounted hook
  },
};
</script>
