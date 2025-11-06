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
            Call History
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li>
                <a href="javascript:void(0);" class="hover:underline text-gray-700">Applications</a>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Call History</li>
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

      <div class="table-responsive custom-table">
        <table class="table table-nowrap border w-full border-borderColor">
          <thead class="thead-light">
            <tr>
              <th
                class="text-left no-sort text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor hover:outline-none">
                <div class="flex items-center">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox" id="select-all">
                </div>
              </th>
              <th class="text-left text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor">Name
              </th>
              <th class="text-left text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor">
                Phone</th>
              <th class="text-left text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor">Call
                Type</th>
              <th class="text-left text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor">
                Duration</th>
              <th class="text-left text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor">Date
                & Time</th>
              <th class="text-left text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor">
                Action</th>

            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-borderColor">
            <tr class="even:bg-white dark:even-bg-white">
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <a href="#" class="avatar avatar-md" data-bs-toggle="modal" data-bs-target="#view_details">
                    <img src="@/assets/img/users/user-32.jpg" class="rounded-full size-8 img-fluid" alt="img">
                  </a>
                  <div class="ms-2">
                    <p class="text-dark font-medium mb-0"><a class="hover:text-primary" href="#" data-bs-toggle="modal"
                        data-bs-target="#view_details">Anthony Lewis</a></p>
                    <span class="fs-12">anthony@example.com</span>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">(123) 4567 890</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <i class="ti ti-phone-incoming text-success me-2"></i>Incoming
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">00.25</td>
              <td class="px-5 py-2.5 text-gray-500">14 Jan 2024, 04:27 AM </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="action-icon inline-flex">
                  <a href="#"
                    class="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="call_history" data-modal-target="call_history"><i class="ti ti-eye"></i></a>
                  <a href="#"
                    class="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </td>
            </tr>
            <tr class="even:bg-white dark:even-bg-white">
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <a href="#" class="avatar avatar-md" data-bs-toggle="modal" data-bs-target="#view_details">
                    <img src="@/assets/img/users/user-09.jpg" class="rounded-full size-8 img-fluid" alt="img">
                  </a>
                  <div class="ms-2">
                    <p class="text-dark font-medium mb-0"><a class="hover:text-primary" href="#" data-bs-toggle="modal"
                        data-bs-target="#view_details">Brian Villalobos</a></p>
                    <span class="fs-12">brian@example.com</span>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">(179) 7382 829</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <i class="ti ti-phone-outgoing text-success me-2"></i>Outgoing
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">00.10</td>
              <td class="px-5 py-2.5 text-gray-500">21 Jan 2024, 03:19 AM</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="action-icon inline-flex">
                  <a href="#"
                    class="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="call_history" data-modal-target="call_history"><i class="ti ti-eye"></i></a>
                  <a href="#"
                    class="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </td>
            </tr>
            <tr class="even:bg-white dark:even-bg-white">
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <a href="#" class="avatar avatar-md" data-bs-toggle="modal" data-bs-target="#view_details">
                    <img src="@/assets/img/users/user-01.jpg" class="rounded-full size-8 img-fluid" alt="img">
                  </a>
                  <div class="ms-2">
                    <p class="text-dark font-medium mb-0"><a class="hover:text-primary" href="#" data-bs-toggle="modal"
                        data-bs-target="#view_details">Harvey Smith</a></p>
                    <span class="fs-12">harvey@example.com</span>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">(184) 2719 738</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <i class="ti ti-video text-success me-2"></i>Incoming
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">00.40</td>
              <td class="px-5 py-2.5 text-gray-500">20 Feb 2024, 12:15 PM</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="action-icon inline-flex">
                  <a href="#"
                    class="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="call_history" data-modal-target="call_history"><i class="ti ti-eye"></i></a>
                  <a href="#"
                    class="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </td>
            </tr>
            <tr class="even:bg-white dark:even-bg-white">
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <a href="#" class="avatar avatar-md" data-bs-toggle="modal" data-bs-target="#view_details">
                    <img src="@/assets/img/users/user-33.jpg" class="rounded-full size-8 img-fluid" alt="img">
                  </a>
                  <div class="ms-2">
                    <p class="text-dark font-medium mb-0"><a class="hover:text-primary" href="#" data-bs-toggle="modal"
                        data-bs-target="#view_details">peral@example.com</a></p>
                    <span class="fs-12">peral@example.com</span>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">(193) 7839 748</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <i class="ti ti-phone-x text-danger me-2"></i>Missed Call
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">00.00</td>
              <td class="px-5 py-2.5 text-gray-500">15 Mar 2024, 12:11 AM</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="action-icon inline-flex">
                  <a href="#"
                    class="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="call_history" data-modal-target="call_history"><i class="ti ti-eye"></i></a>
                  <a href="#"
                    class="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </td>
            </tr>
            <tr class="even:bg-white dark:even-bg-white">
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <a href="#" class="avatar avatar-md" data-bs-toggle="modal" data-bs-target="#view_details"><img
                      src="@/assets/img/users/user-33.jpg" class="rounded-full size-8 img-fluid" alt="img"></a>
                  <div class="ms-2">
                    <p class="text-dark font-medium mb-0"><a class="hover:text-primary" href="#" data-bs-toggle="modal"
                        data-bs-target="#view_details">Doglas Martini</a></p>
                    <span class="fs-12">martniwr@example.com</span>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">(183) 9302 890</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <i class="ti ti-video text-success me-2"></i>Outgoing
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">00.35</td>
              <td class="px-5 py-2.5 text-gray-500">12 Apr 2024, 05:48 PM</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="action-icon inline-flex">
                  <a href="#"
                    class="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="call_history" data-modal-target="call_history"><i class="ti ti-eye"></i></a>
                  <a href="#"
                    class="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </td>
            </tr>
            <tr class="even:bg-white dark:even-bg-white">
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <a href="#" class="avatar avatar-md" data-bs-toggle="modal" data-bs-target="#view_details">
                    <img src="@/assets/img/users/user-02.jpg" class="rounded-full size-8 img-fluid" alt="img">
                  </a>
                  <div class="ms-2">
                    <p class="text-dark font-medium mb-0"><a class="hover:text-primary" href="#" data-bs-toggle="modal"
                        data-bs-target="#view_details">Linda Ray</a></p>
                    <span class="fs-12">ray456@example.com</span>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">(120) 3728 039</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <i class="ti ti-phone-incoming text-success me-2"></i>Incomiing
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">01.40</td>
              <td class="px-5 py-2.5 text-gray-500">20 Apr 2024, 06:11 PM</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="action-icon inline-flex">
                  <a href="#"
                    class="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="call_history" data-modal-target="call_history"><i class="ti ti-eye"></i></a>
                  <a href="#"
                    class="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </td>
            </tr>
            <tr class="even:bg-white dark:even-bg-white">
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <a href="#" class="avatar avatar-md" data-bs-toggle="modal" data-bs-target="#view_details">
                    <img src="@/assets/img/users/user-35.jpg" class="rounded-full size-8 img-fluid" alt="img">
                  </a>
                  <div class="ms-2">
                    <p class="text-dark font-medium mb-0"><a class="hover:text-primary" href="#" data-bs-toggle="modal"
                        data-bs-target="#view_details">Elliot Murray</a></p>
                    <span class="fs-12">murray@example.com</span>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">(102) 8480 832</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <i class="ti ti-video text-danger me-2"></i>Missed call
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">00.00</td>
              <td class="px-5 py-2.5 text-gray-500">06 Jul 2024, 07:15 PM</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="action-icon inline-flex">
                  <a href="#"
                    class="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="call_history" data-modal-target="call_history"><i class="ti ti-eye"></i></a>
                  <a href="#"
                    class="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </td>
            </tr>
            <tr class="even:bg-white dark:even-bg-white">
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <a href="#" class="avatar avatar-md" data-bs-toggle="modal" data-bs-target="#view_details">
                    <img src="@/assets/img/users/user-36.jpg" class="rounded-full size-8 img-fluid" alt="img">
                  </a>
                  <div class="ms-2">
                    <p class="text-dark font-medium mb-0"><a class="hover:text-primary" href="#" data-bs-toggle="modal"
                        data-bs-target="#view_details">Rebecca Smtih</a></p>
                    <span class="fs-12">smtih@example.com</span>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">(162) 8920 713</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <i class="ti ti-phone-outgoing text-success me-2"></i>Outgoing
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">00.45</td>
              <td class="px-5 py-2.5 text-gray-500">02 Sep 2024, 09:21 PM</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="action-icon inline-flex">
                  <a href="#"
                    class="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="call_history" data-modal-target="call_history"><i class="ti ti-eye"></i></a>
                  <a href="#"
                    class="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </td>
            </tr>
            <tr class="even:bg-white dark:even-bg-white">
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <a href="#" class="avatar avatar-md" data-bs-toggle="modal" data-bs-target="#view_details"><img
                      src="@/assets/img/users/user-37.jpg" class="rounded-full size-8 img-fluid" alt="img"></a>
                  <div class="ms-2">
                    <p class="text-dark font-medium mb-0"><a class="hover:text-primary" href="#" data-bs-toggle="modal"
                        data-bs-target="#view_details">Connie Waters</a></p>
                    <span class="fs-12">connie@example.com</span>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">(189) 0920 723</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <i class="ti ti-phone-incoming text-success me-2"></i>Incoming
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">00.50</td>
              <td class="px-5 py-2.5 text-gray-500">15 Nov 2024, 12:44 PM</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="action-icon inline-flex">
                  <a href="#"
                    class="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="call_history" data-modal-target="call_history"><i class="ti ti-eye"></i></a>
                  <a href="#"
                    class="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </td>
            </tr>
            <tr class="even:bg-white dark:even-bg-white">
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="flex items-center">
                  <a href="#" class="avatar avatar-md" data-bs-toggle="modal" data-bs-target="#view_details">
                    <img src="@/assets/img/users/user-38.jpg" class="rounded-full size-8 img-fluid" alt="img">
                  </a>
                  <div class="ms-2">
                    <p class="text-dark font-medium mb-0"><a class="hover:text-primary" href="#" data-bs-toggle="modal"
                        data-bs-target="#view_details">Lori Broaddus</a></p>
                    <span class="fs-12">broaddus@example.com</span>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">(168) 8392 823</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <i class="ti ti-phone-x text-danger me-2"></i>Missed call
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">00.00</td>
              <td class="px-5 py-2.5 text-gray-500">10 Dec 2024, 11:23 PM</td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="action-icon inline-flex">
                  <a href="#"
                    class="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="call_history" data-modal-target="call_history"><i class="ti ti-eye"></i></a>
                  <a href="#"
                    class="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                    data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->

  <!-- Add Expenses -->
  <div id="call_history"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h4 class="font-semibold">Caller Details</h4>
          <button type="button"
            class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
            data-modal-hide="call_history">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="card border border-borderColor rounded-[5px] bg-white mb-4">
              <div class="card-body p-5 ">
                <div class="flex items-center justify-center">
                  <div class="avatar avatar-xxxl  mb-3">
                    <img src="@/assets/img/users/user-32.jpg" alt="img" class="rounded-full">
                  </div>
                </div>
                <div class="flex items-center justify-center">
                  <router-link to="/call/video-call"
                    class=" bg-borderColor rounded-full w-[40px] h-[40px] call-item p-0 flex items-center justify-center me-3 text-dark hover:text-white  hover:bg-primary"><i
                      class="ti ti-video text-[14px]"></i></router-link>
                  <router-link to="/call/chat"
                    class=" bg-borderColor rounded-full w-[40px] h-[40px] call-item p-0 flex items-center justify-center me-3 text-dark hover:text-white  hover:bg-primary"><i
                      class="ti ti-message text-[14px]"></i></router-link>
                  <router-link to="/call/voice-call"
                    class=" bg-borderColor rounded-full w-[40px] h-[40px] call-item p-0 flex items-center justify-center me-3 text-dark hover:text-white  hover:bg-primary"><i
                      class="ti ti-phone text-[14px]"></i></router-link>
                </div>
              </div>
            </div>
            <div class="grid md:grid-cols-12 gap-6">
              <div class="md:col-span-6">
                <div>
                  <p class="mb-1">Name</p>
                  <h6 class="font-medium">Anthony Lewis</h6>
                </div>
              </div>
              <div class="md:col-span-6">
                <div>
                  <p class="mb-1">Total Calls</p>
                  <h6 class="font-medium">20</h6>
                </div>
              </div>
              <div class="md:col-span-6">
                <div>
                  <p class="mb-1">Phone</p>
                  <h6 class="font-medium">(123) 4567 890</h6>
                </div>
              </div>
              <div class="md:col-span-6">
                <div>
                  <p class="mb-1">Average Call Timing</p>
                  <h6 class="font-medium">00:30</h6>
                </div>
              </div>
              <div class="md:col-span-6">
                <div>
                  <p class="mb-1">Email</p>
                  <h6 class="font-medium">anthony@example.com</h6>
                </div>
              </div>
              <div class="md:col-span-6">
                <div>
                  <p class="mb-1">Average Waiting Time</p>
                  <h6 class="font-medium">00:05</h6>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add expenses -->

  <!-- delete Stage -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="delete_modal">
    <div class="relative bg-white rounded-defaultradius p-5">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center">
          <div class="mb-3 relative z-[1]">
            <span
              class="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center"><i
                class="ti ti-trash text-[24px]"></i></span>
          </div>
          <h5 class="mb-1">Remove Stage</h5>
          <p class="mb-3">Are you sure you want to remove call you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete Stage -->
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { initFlowbite } from 'flowbite';
import { onMounted, onUnmounted, ref } from 'vue';
export default {
  data() {
    return {};
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
      initFlowbite();
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      dateRangeInput,
    };
  },

};
</script>
