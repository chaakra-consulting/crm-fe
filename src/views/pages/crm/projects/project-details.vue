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
              class="border border-borderColor rounded p-2 bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
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

      <div class="mb-4">
        <router-link to="/crm/projects" class="inline-flex items-center text-dark"><i
            class="ti ti-arrow-narrow-left mr-1"></i>Back to Projects</router-link>
      </div>

      <!-- start user -->
      <div class="bg-white border border-borderColor rounded mb-4">
        <div class="card-body p-4">
          <div class="flex items-center justify-between flex-wrap">
            <div class="flex items-center mb-2">
              <div class="w-[80px] h-[80px] rounded-full p-2 border border-borderColor me-4 flex-shrink-0">
                <img src="@/assets/img/priority/truellysel.svg" class="rounded-full w-full" alt="company-icon-01">
              </div>
              <div>
                <h5 class="mb-1">Trulysell</h5>
                <p class="mb-2"> Project Id : <span class="text-dark font-medium">154454887</span> </p>
                <div class="flex items-center">
                  <span
                    class="px-1.5 py-0.5 rounded text-[12px] text-danger inline-flex bg-danger-100 items-center me-2"><i
                      class="ti ti-arrow-up-right me-1"></i>High</span>
                  <span
                    class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success items-center me-2">Active</span>
                </div>
              </div>
            </div>
            <div class="flex items-center flex-wrap gap-2">
              <span class="py-1.5 px-2.5 text-xs bg-danger-100 rounded text-danger font-medium flex items-center">
                <i class="ti ti-lock me-1"></i>Private
              </span>
              <div class="relative">
                <button type="button"
                  class="text-xs py-1.5 px-2.5 text-xs bg-success rounded text-white font-medium flex items-center outline-none"
                  data-dropdown-toggle="statusDropdown">
                  <i class="ti ti-thumb-up me-1"></i>completed<i class="ti ti-chevron-down ms-1"></i>
                </button>
                <div id="statusDropdown"
                  class="hidden absolute right-0 w-[150px] bg-white border border-borderColor rounded shadow z-10">
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">completed</a>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Development</a>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Design</a>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">plan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end user -->
      <!-- start grid -->
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
        <div class="xl:col-span-4">
          <div class="bg-white border border-borderColor rounded">
            <div class="p-4">
              <h6 class="mb-4 font-semibold">Project Information</h6>
              <div class="border-b border-borderColor pb-5 mb-5">
                <div class="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <p>Start Date</p>
                  <p class="text-dark">27 Sep 2025, 11:45 PM</p>
                </div>
                <div class="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <p>Due Date</p>
                  <p class="text-dark">80%</p>
                </div>
                <div class="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <p>Deal Value</p>
                  <p class="text-dark">$25,11,145</p>
                </div>
                <div class="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <p>Project Type</p>
                  <p class="text-dark">27 Sep 2025, 11:45 PM</p>
                </div>
                <div class="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <p>Project Timing</p>
                  <p class="text-dark">27 Sep 2025</p>
                </div>
              </div>
              <div class="border-b border-borderColor pb-5 mb-5">
                <h6 class="mb-4 font-semibold flex items-center justify-between">Client
                  <button class="text-primary text-sm font-normal"><i class="ti ti-plus me-1"></i>Add New</button>
                </h6>
                <div class="flex items-center mb-4">
                  <span class="w-6 h-6 rounded-full overflow-hidden mr-2 flex-shrink-0">
                    <img src="@/assets/img/priority/truellysel.svg" alt="Img" class="w-full h-full object-cover">
                  </span>
                  <div>
                    <p class="mb-0 text-sm text-gray-800">Trulysell</p>
                  </div>
                </div>
                <h6 class="mb-4 font-semibold flex items-center justify-between">Responsible Persons
                  <button class="text-primary text-sm font-normal" data-modal-target="add_new"
                    data-modal-toggle="add_new"><i class="ti ti-plus me-1"></i>Add New</button>
                </h6>
                <div class="flex items-center mb-4">
                  <ul class="avatar-list-stacked avatar-group-sm">
                    <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                          src="@/assets/img/profiles/avatar-14.jpg" alt="img"></a></li>
                    <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                          src="@/assets/img/profiles/avatar-15.jpg" alt="img"></a></li>
                    <li class="avatar avatar-rounded flex-shrink-0"><a href="javascript:void(0);"><img
                          src="@/assets/img/profiles/avatar-16.jpg" alt="img"></a></li>
                    <li class="avatar avatar-rounded flex-shrink-0 bg-light fs-10"><a href="javascript:void(0);"
                        class="text-dark">3+</a></li>
                  </ul>
                </div>
                <h6 class="mb-4 font-semibold flex items-center justify-between">Team Leader
                  <button class="text-primary text-sm font-normal"><i class="ti ti-plus me-1"></i>Add New</button>
                </h6>
                <div class="flex items-center">
                  <span class="w-6 h-6 rounded-full overflow-hidden mr-2 flex-shrink-0">
                    <img src="@/assets/img/users/avatar-7.jpg" alt="Img" class="w-full h-full object-cover">
                  </span>
                  <div>
                    <p class="mb-0 text-sm text-gray-800">Jessica Sen</p>
                  </div>
                </div>
              </div>

              <div class="border-b border-borderColor pb-5 mb-5">
                <h6 class="mb-4 font-semibold flex items-center justify-between">Pipeline
                  <span class="font-medium text-dark text-[14px] flex items-center"><i
                      class="ti ti-timeline-event-text me-1"></i>Marketing Pipeline</span>
                </h6>
                <div class="flex items-center justify-between gap-2 flex-wrap">
                  <p>Last Modified</p>
                  <p class="text-dark">27 Sep 2025, 11:45 PM</p>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between gap-2 flex-wrap">
                  <p>Last Modified</p>
                  <div class="flex items-center">
                    <span class="w-6 h-6 rounded-full overflow-hidden mr-2 flex-shrink-0">
                      <img src="@/assets/img/users/avatar-3.jpg" alt="Img" class="w-full h-full object-cover">
                    </span>
                    <div>
                      <p class="mb-0 text-sm text-gray-800">Steve Vaughan</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!-- Start right column -->
        <div class="lg:col-span-8">
          <div class="w-full">
            <!-- start tab -->
            <ul class="flex-wrap flex bg-white rounded border border-borderColor gap-x-2 px-3 py-4 mb-4"
              id="default-styled-tab3" data-tabs-toggle="#company-tab-content3"
              data-tabs-active-classes="text-primary hover:text-primary border-primary"
              data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary"
              role="tablist">
              <li class="me-3" role="presentation">
                <button class="inline-block py-2 px-4 border-b-2 font-medium" data-tabs-target="#activities"
                  type="button" role="tab" aria-selected="false"><i
                    class="ti ti-alarm-minus me-1"></i>Activities</button>
              </li>
              <li role="presentation">
                <button class="inline-block py-2 px-4 border-b-2 font-medium" data-tabs-target="#notes-list"
                  type="button" role="tab" aria-selected="false"><i class="ti ti-notes me-1"></i>Notes</button>
              </li>
              <li role="presentation">
                <button class="inline-block py-2 px-4 border-b-2 font-medium" data-tabs-target="#calls" type="button"
                  role="tab" aria-selected="false"><i class="ti ti-phone me-1"></i>Calls</button>
              </li>
              <li role="presentation">
                <button class="inline-block py-2 px-4 border-b-2 font-medium" data-tabs-target="#files" type="button"
                  role="tab" aria-selected="false"><i class="ti ti-file me-1"></i>Files</button>
              </li>
              <li role="presentation">
                <button class="inline-block py-2 px-4 border-b-2 font-medium" data-tabs-target="#email" type="button"
                  role="tab" aria-selected="false"><i class="ti ti-mail me-1"></i>Email</button>
              </li>
            </ul>

            <!-- start tab content -->
            <div id="company-tab-content3">
              <!-- Item 1 -->
              <div class="hidden" id="activities" role="tabpanel">
                <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                  <div class="flex items-center justify-between gap-3 p-4 border-b border-borderColor">
                    <h5 class="m-0 font-semibold">Activities</h5>
                    <!-- Dropdown -->
                    <div>
                      <a href="javascript:void(0);"
                        class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                        data-dropdown-toggle="sort-dropdown">
                        <i class="ti ti-sort-ascending-2 me-2"></i>Sort By<i class="ti ti-chevron-down ml-1"></i>
                      </a>
                      <ul id="sort-dropdown"
                        class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[150px]">
                        <li>
                          <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Newest</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Oldest</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="p-4">
                    <!-- Item 1 -->
                    <p
                      class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-info mb-4">
                      <i class="ti ti-calendar me-1 inline-flex items-center"></i> 28 May 2025
                    </p>
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                        <div class="flex items-center justify-center w-10 h-10 rounded bg-info shrink-0">
                          <i class="ti ti-mail-code text-[18px] text-white"></i>
                        </div>
                        <div>
                          <h6 class="font-medium text-[14px] mb-1">You sent 1 Message to
                            the contact.</h6>
                          <p class="mb-0">10:25 pm</p>
                        </div>
                      </div>
                    </div>
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                        <div class="flex items-center justify-center w-10 h-10 rounded bg-dark shrink-0">
                          <i class="ti ti-phone text-[18px] text-white"></i>
                        </div>
                        <div>
                          <h6 class="font-medium text-[14px] mb-1">Denwar responded to
                            your appointment schedule by call at 09:30pm.</h6>
                          <p class="mb-0">9:25 pm</p>
                        </div>
                      </div>
                    </div>
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                        <div class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                          <i class="ti ti-notes text-[18px] text-white"></i>
                        </div>
                        <div>
                          <h6 class="font-medium text-[14px] mb-1">Notes added by Antony.
                          </h6>
                          <p class="mb-1">Please accept my apologies for the inconvenience
                            caused. It would be much appreciated if it's possible to
                            reschedule to 6:00 PM, or any other day that week.</p>
                          <p class="mb-0">10:25 pm</p>
                        </div>
                      </div>
                    </div>

                    <!-- Item 2 -->
                    <p
                      class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-info mb-4">
                      <i class="ti ti-calendar me-1 inline-flex items-center"></i> 27 May 2025
                    </p>
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                        <div class="flex items-center justify-center w-10 h-10 rounded bg-warning shrink-0">
                          <i class="ti ti-user-pin text-[18px] text-white"></i>
                        </div>
                        <div>
                          <h6 class="font-medium text-[14px] mb-1 flex items-center gap-3">
                            Meeting With
                            <span class="flex items-center justify-center w-5 h-5 shrink-0 ms-8">
                              <img src="@/assets/img/users/avatar-1.jpg" alt="avatar-1" class="img-fluid me-2 rounded">
                              Abraham
                            </span>
                          </h6>
                          <p class="mb-0">Schedueled on 05:00 pm</p>
                        </div>
                      </div>
                    </div>
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                        <div class="flex items-center justify-center w-10 h-10 rounded bg-dark shrink-0">
                          <i class="ti ti-notes text-[18px] text-white"></i>
                        </div>
                        <div>
                          <h6 class="font-medium text-[14px] mb-1">Drain responded to your
                            appointment schedule question.</h6>
                          <p class="mb-0">9:25 pm</p>
                        </div>
                      </div>
                    </div>

                    <!-- Item 3 -->
                    <p
                      class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-info mb-4">
                      <i class="ti ti-calendar me-1 inline-flex items-center"></i> Upcoming
                      Activity
                    </p>
                    <div class="border border-borderColor rounded p-4">
                      <div class="flex items-start gap-3 lg:flex-nowrap flex-wrap">
                        <div class="flex items-center justify-center w-10 h-10 rounded bg-warning shrink-0">
                          <i class="ti ti-user-pin text-[18px] text-white"></i>
                        </div>
                        <div>
                          <h6 class="font-medium text-[14px] mb-1">Product Meeting</h6>
                          <p class="mb-1"> A product team meeting is a gathering of the
                            cross-functional product team — ideally including team
                            members from product, engineering, marketing, and customer
                            support.</p>
                          <p class="mb-4">Schedueled on 05:00 pm</p>

                          <!-- start row -->
                          <div
                            class="grid grid-cols-1 lg:grid-cols-12 p-4 border border-borderColor rounded flex items-center gap-4 flex-wrap">
                            <div class="xl:col-span-4 lg:col-span-4">
                              <div>
                                <label class="form-label">Reminder <span class="text-danger">*</span></label>
                                <vue3-select v-model="selected" :options="Reminder" placeholder="Select" />
                              </div>
                            </div>
                            <div class="xl:col-span-4 lg:col-span-4">
                              <div>
                                <label class="form-label">Task Priority <span class="text-danger">*</span></label>
                                <vue3-select v-model="selectedOne" :options="Task" placeholder="Select" />
                              </div>
                            </div>
                            <div class="xl:col-span-4 lg:col-span-4">
                              <div>
                                <label class="form-label">Assigned To <span class="text-danger">*</span></label>
                                <vue3-select v-model="selectedTwo" :options="Assigned" placeholder="Select" />
                              </div>
                            </div>
                          </div>
                          <!-- end row -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="hidden" id="notes-list" role="tabpanel">
                <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                  <div class="flex items-center justify-between gap-3 p-4 border-b border-borderColor">
                    <h5 class="m-0 font-semibold">Notes</h5>
                    <!-- Dropdown -->
                    <div class="flex items-center gap-3 flex-wrap">
                      <div>
                        <a href="javascript:void(0);"
                          class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                          data-dropdown-toggle="notes-dropdown">
                          <i class="ti ti-sort-ascending-2 me-2"></i>Sort By<i class="ti ti-chevron-down ms-2"></i>
                        </a>
                        <ul id="notes-dropdown"
                          class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Newest</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Oldest</a>
                          </li>
                        </ul>
                      </div>
                      <button class="inline-flex items-center font-medium text-danger hover:text-dark"
                        data-modal-target="add_new_notes" data-modal-toggle="add_new_notes">
                        <i class="ti ti-circle-plus me-1"></i>Add New
                      </button>
                    </div>
                  </div>
                  <div class="p-4">
                    <!-- Item 1 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center justify-between gap-3 lg:flex-nowrap flex-wrap mb-4">
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                            <img src="@/assets/img/users/avatar-1.jpg" alt="avatar-1" class="img-fluid rounded">
                          </div>
                          <h6 class="font-medium text-[14px] mb-0 flex flex-col gap-1">
                            Darlee Robertson <span class="text-[14px] font-normal text-body">15 Sep 2023,
                              12:10 pm</span></h6>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el">
                            <a href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(1, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 1 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_notes"
                                data-modal-toggle="edit_notes"><i class="ti ti-edit me-1"></i> Edit</a>
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6 class="font-medium text-[14px] mb-1">Notes added by Antony</h6>
                      <p>A project review evaluates the success of an initiative and
                        identifies areas for improvement. It can also evaluate a current
                        project to determine whether it's on the right track. Or, it can
                        determine the success of a completed project.</p>

                      <!-- start row -->
                      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
                        <div class="lg:col-span-5">
                          <div class="border border-borderColor rounded p-4 rounded relative">
                            <div class="flex items-center gap-3 flex-wrap">
                              <div class="flex items-center justify-center w-10 h-10 rounded bg-success shrink-0">
                                <i class="ti ti-file-spreadsheet  text-[18px] text-white"></i>
                              </div>
                              <div>
                                <h6 class="font-medium text-[14px] mb-1">Project
                                  Specs.xls.</h6>
                                <p class="mb-0">365 KB</p>
                              </div>
                            </div>
                            <button
                              class="w-6 h-6 rounded-full absolute right-2 top-5 bg-light text-dark flex items-center justify-center hover:bg-gray-200">
                              <i class="ti ti-arrow-down"></i>
                            </button>
                          </div>
                        </div>
                        <div class="lg:col-span-5">
                          <div class="border border-borderColor rounded p-4 rounded relative">
                            <div class="flex items-center gap-3 flex-wrap">
                              <div class="flex items-center justify-center w-10 h-10 rounded bg-info shrink-0">
                                <img src="@/assets/img/users/avatar-10.jpg" alt="avatar-10" class="img-fluid rounded">
                              </div>
                              <div>
                                <h6 class="font-medium text-[14px] mb-1">637.jpg
                                </h6>
                                <p class="mb-0">365 KB</p>
                              </div>
                            </div>
                            <button
                              class="w-6 h-6 rounded-full absolute right-2 top-5 bg-light text-dark flex items-center justify-center hover:bg-gray-200">
                              <i class="ti ti-arrow-down"></i>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="mt-4 notes-editor">
                        <div class="mb-4 note-edit-wrap" :style="{ display: isEditorVisible ? 'block' : 'none' }">
                          <div class="editor pages-editor">
                            <div class="editor pages-editor ql-container ql-snow">
                              <div ref="editorRef" class="quill-editor"></div>
                            </div>
                          </div>
                          <div class="flex items-center justify-end mt-3">
                            <a href="javascript:void(0);"
                              class="btn btn-sm btn-light me-3 hover:bg-primary add-cancel">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-sm btn-primary hover:bg-danger">Save</a>
                          </div>
                        </div>
                        <div>
                          <a href="javascript:void(0);"
                            class="flex items-center justify-end text-primary font-medium hover:text-dark add-comment"
                            @click="toggleEditor">
                            <i class="ti ti-circle-plus me-1"></i>
                            Add Comment
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center justify-between gap-3 lg:flex-nowrap flex-wrap mb-4">
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                            <img src="@/assets/img/users/avatar-1.jpg" alt="avatar-1" class="img-fluid rounded">
                          </div>
                          <h6 class="font-medium text-[14px] mb-0 flex flex-col gap-1">
                            Sharon Roy<span class="text-[14px] font-normal text-body">18
                              Sep 2023, 12:10 pm</span></h6>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el">
                            <a href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(2, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 2 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_notes"
                                data-modal-toggle="edit_notes"><i class="ti ti-edit me-1"></i> Edit</a>
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6 class="font-medium text-[14px] mb-1">Notes added by Antony</h6>
                      <p>A project plan typically contains a list of the essential elements of
                        a project, such as stakeholders, scope, timelines, estimated cost
                        and communication methods. The project manager typically lists the
                        information based on the assignment.</p>

                      <!-- start row -->
                      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
                        <div class="lg:col-span-5">
                          <div class="border border-borderColor rounded p-4 rounded relative">
                            <div class="flex items-center gap-3 flex-wrap">
                              <div class="flex items-center justify-center w-10 h-10 rounded bg-dark shrink-0">
                                <i class="ti ti-file-spreadsheet  text-[18px] text-white"></i>
                              </div>
                              <div>
                                <h6 class="font-medium text-[14px] mb-1">
                                  Andewpass.txt</h6>
                                <p class="mb-0">365 KB</p>
                              </div>
                            </div>
                            <button
                              class="w-6 h-6 rounded-full absolute right-2 top-5 bg-light text-dark flex items-center justify-center hover:bg-gray-200">
                              <i class="ti ti-arrow-down"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="p-4 bg-light rounded mt-4">
                        <p class="mb-2">The best way to get a project done faster is to
                          start sooner. A goal without a timeline is just a dream.The goal
                          you set must be challenging. At the same time, it should be
                          realistic and attainable, not impossible to reach.</p>
                        <p class="mb-4">Commented by <a href="javascript:void(0);" class="text-info">Aeron</a> on 15 Sep
                          2024, 11:15 pm</p>
                        <a href="#" class="btn border border-borderColor bg-white btn-sm"><i
                            class="ti ti-arrow-back-up-double me-1"></i>Reply</a>
                      </div>
                    </div>

                    <!-- Item 3 -->
                    <div class="border border-borderColor rounded p-4">
                      <div class="flex items-center justify-between gap-3 lg:flex-nowrap flex-wrap mb-4">
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                            <img src="@/assets/img/users/avatar-1.jpg" alt="avatar-1" class="img-fluid rounded">
                          </div>
                          <h6 class="font-medium text-[14px] mb-0 flex flex-col gap-1">
                            Vaughan Lewis <span class="text-[14px] font-normal text-body">20
                              Sep 2023,
                              10:26 pm</span></h6>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[3] = el">
                            <a href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(3, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 3 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_notes"
                                data-modal-toggle="edit_notes"><i class="ti ti-edit me-1"></i> Edit</a>
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>Projects play a crucial role in the success of organizations, and
                        their importance cannot be overstated. Whether it's launching a new
                        product, improving an existing</p>
                    </div>

                  </div>
                </div>
              </div>

              <!-- Item 3 -->
              <div class="hidden " id="calls" role="tabpanel">
                <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                  <div class="flex items-center justify-between gap-3 p-4 border-b border-borderColor">
                    <h5 class="m-0 font-semibold">Calls</h5>
                    <!-- Dropdown -->
                    <a href="javascript:void(0);"
                      class="inline-flex items-center font-medium text-danger hover:text-dark transition"
                      data-modal-target="add_call" data-modal-toggle="add_call">
                      <i class="ti ti-circle-plus me-1"></i>Add New
                    </a>
                  </div>
                  <div class="p-4">
                    <!-- Item 1 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap mb-4">
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                            <img src="@/assets/img/users/avatar-1.jpg" alt="avatar-1" class="img-fluid rounded">
                          </div>
                          <h6 class="font-medium text-[14px] mb-0">Darlee Robertson <span
                              class="text-[14px] font-normal text-body">logged a call
                              on 23 Jul 2023, 10:00 pm</span></h6>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div>
                            <a href="javascript:void(0);"
                              class="border border-borderColor shadow rounded p-2 h-8 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                              data-dropdown-toggle="call-dropdown">
                              Busy<i class="ti ti-chevron-down ms-2"></i>
                            </a>
                            <ul id="call-dropdown"
                              class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]">
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Busy</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">No
                                  Answer</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Unavailable</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Wrong
                                  Number</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Left
                                  Voice Message</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Moving
                                  Forward</a>
                              </li>
                            </ul>
                          </div>
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[4] = el">
                            <a href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(4, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 4 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_call"
                                data-modal-toggle="edit_call"><i class="ti ti-edit me-1"></i> Edit</a>
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>A project review evaluates the success of an initiative and
                        identifies areas for improvement. It can also evaluate a current
                        project to determine whether it's on the right track. Or, it can
                        determine the success of a completed project.</p>
                    </div>

                    <!-- Item 2 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap mb-4">
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                            <img src="@/assets/img/users/avatar-2.jpg" alt="avatar-1" class="img-fluid rounded">
                          </div>
                          <h6 class="font-medium text-[14px] mb-0">Sharon Roy <span
                              class="text-[14px] font-normal text-body">logged a call
                              on 18 Sep 2025, 09:52AM</span></h6>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div>
                            <a href="javascript:void(0);"
                              class="border border-borderColor shadow rounded p-2 h-8 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                              data-dropdown-toggle="call-dropdown2">
                              No Answer<i class="ti ti-chevron-down ms-2"></i>
                            </a>
                            <ul id="call-dropdown2"
                              class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]">
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">No
                                  Answer</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Unavailable</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Wrong
                                  Number</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Left
                                  Voice Message</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Moving
                                  Forward</a>
                              </li>
                            </ul>
                          </div>
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[5] = el">
                            <a href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(5, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 5 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_call"
                                data-modal-toggle="edit_call"><i class="ti ti-edit me-1"></i> Edit</a>
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>A project plan typically contains a list of the essential elements of
                        a project, such as stakeholders, scope, timelines, estimated cost
                        and communication methods. The project manager typically lists the
                        information based on the assignment.</p>
                    </div>

                    <!-- Item 3 -->
                    <div class="border border-borderColor rounded p-4">
                      <div class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap mb-4">
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                            <img src="@/assets/img/users/avatar-3.jpg" alt="avatar-1" class="img-fluid rounded">
                          </div>
                          <h6 class="font-medium text-[14px] mb-0">Vaughan <span
                              class="text-[14px] font-normal text-body">logged a call
                              on 20 Sep 2025, 10:26 PM</span></h6>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div>
                            <a href="javascript:void(0);"
                              class="border border-borderColor shadow rounded p-2 h-8 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                              data-dropdown-toggle="call-dropdown3">
                              No Answer<i class="ti ti-chevron-down ms-2"></i>
                            </a>
                            <ul id="call-dropdown3"
                              class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]">
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">No
                                  Answer</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Unavailable</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Wrong
                                  Number</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Left
                                  Voice Message</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Moving
                                  Forward</a>
                              </li>
                            </ul>
                          </div>
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[6] = el">
                            <a href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(6, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 6 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="edit_call"
                                data-modal-toggle="edit_call"><i class="ti ti-edit me-1"></i> Edit</a>
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>Projects play a crucial role in the success of organizations, and
                        their importance cannot be overstated. Whether it's launching a new
                        product, improving an existing.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 4 -->
              <div class="hidden " id="files" role="tabpanel">
                <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                  <div class="flex items-center justify-between gap-3 p-4 border-b border-borderColor">
                    <h5 class="m-0 font-semibold">Files</h5>
                  </div>
                  <div class="p-4">
                    <!-- Item 1 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                        <div>
                          <h6 class="mb-1">Manage Documents</h6>
                          <p>Send customizable quotes, proposals and contracts to close
                            deals faster</p>
                        </div>
                        <a class="btn btn-primary rounded" href="javascript:void(0);" data-modal-target="create_account"
                          data-modal-toggle="create_account">Create Documents</a>
                      </div>
                    </div>

                    <!-- Item 2 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                        <div class="flex items-center gap-3 xl:flex-nowrap flex-wrap">
                          <div>
                            <h6 class="mb-1 text-[14px] font-semibold">Collier-Turner
                              Proposal</h6>
                            <p class="mb-3">Send customizable quotes, proposals and
                              contracts to close deals faster.</p>
                            <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                              <div class="flex items-center justify-center w-10 h-10 rounded-full shrink-0">
                                <img src="@/assets/img/users/avatar-2.jpg" alt="avatar-1"
                                  class="img-fluid rounded-full">
                              </div>
                              <h6 class="font-medium text-[14px] mb-0">Sharon Roy
                                <span
                                  class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-light text-body">Owner</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap ">
                          <div class="flex items-center gap-2 flex-wrap">
                            <span
                              class="badge badge-pill badge-status  px-1.5 py-0.5 rounded text-[12px] bg-danger-100 border-b text-danger">Proposal</span>
                            <span
                              class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-info text-white">Draft</span>
                          </div>
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[7] = el">
                            <a href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(7, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 7 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                href="javascript:void(0);"><i class="ti ti-download me-1"></i> Download</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Item 3 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div>
                            <h6 class="mb-1 text-[14px] font-semibold">Collier-Turner
                              Proposal</h6>
                            <p class="mb-3">Send customizable quotes, proposals and
                              contracts to close deals faster.</p>
                            <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                              <div class="flex items-center justify-center w-10 h-10 rounded-full shrink-0">
                                <img src="@/assets/img/users/avatar-4.jpg" alt="avatar-1"
                                  class="img-fluid rounded-full">
                              </div>
                              <h6 class="font-medium text-[14px] mb-0">Jessica Louise
                                <span
                                  class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-light text-body">Owner</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div>
                            <span
                              class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-success text-white">sent</span>
                          </div>
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[8] = el">
                            <a href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(8, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 8 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                href="javascript:void(0);"><i class="ti ti-download me-1"></i> Download</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Item 4 -->
                    <div class="border border-borderColor rounded p-4">
                      <div class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div>
                            <h6 class="mb-1 text-[14px] font-semibold">Collier-Turner
                              Proposal</h6>
                            <p class="mb-3">Send customizable quotes, proposals and
                              contracts to close deals faster.</p>
                            <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                              <div class="flex items-center justify-center w-10 h-10 rounded-full shrink-0">
                                <img src="@/assets/img/users/avatar-5.jpg" alt="avatar-1"
                                  class="img-fluid rounded-full">
                              </div>
                              <h6 class="font-medium text-[14px] mb-0">Dawn
                                Merhca<span
                                  class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-light text-body ms-2">Owner</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div class="dropdown relative table-action" ref="el => dropdownRefs[9] = el">
                            <a href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(9, $event)"><i class="ti ti-dots-vertical"></i></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ 'hidden': openDropdown !== 9 }">
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                href="javascript:void(0);" data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                              <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                href="javascript:void(0);"><i class="ti ti-download me-1"></i> Download</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 5 -->
              <div class="hidden " id="email" role="tabpanel">
                <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                  <div class="flex items-center justify-between gap-3 p-4 border-b border-borderColor">
                    <h5 class="m-0 font-semibold">Email</h5>
                    <a href="javascript:void(0);"
                      class="inline-flex items-center font-medium text-danger hover:text-dark transition">
                      <i class="ti ti-circle-plus me-1"></i>Add New
                    </a>
                  </div>
                  <div class="p-4">
                    <!-- Item 1 -->
                    <div class="border border-borderColor rounded p-4">
                      <div class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                        <div>
                          <h6 class="mb-1">Manage Email</h6>
                          <p>You can send and reply to emails directly via this section.
                          </p>
                        </div>
                        <a class="btn btn-primary rounded" href="javascript:void(0);" data-modal-target="manage_email"
                          data-modal-toggle="manage_email">Connect Account</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <!-- end tab content -->
          </div>
        </div>
      </div>
      <!-- end grid -->
      <!-- Start Footer -->
      <layouts-footer></layouts-footer>
      <!-- End Footer -->
    </div>
  </div>
  <!-- /Page Wrapper -->
  <contact-details-modal></contact-details-modal>
  	<!-- start add new  modal -->
	<div id="add_new" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
		<div class="relative p-4 w-full max-w-[500px] max-h-full">
			<div class="relative bg-white rounded-defaultradius">
				<div class="flex items-center justify-between p-4 border-b border-borderColor">
					<div class="flex item-center gap-2">
						<h5 class="font-bold text-[18px]">Add Leads Owner</h5>	
					</div>
					<button type="button" class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center" data-modal-hide="add_new">
						<i class="ti ti-x"></i>
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<div class="p-4">
					<form>
						<div class="mb-4">
							<label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
							<input type="checkbox" class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
							<span class="flex items-center space-x-2">
								<img src="@/assets/img/users/user-40.jpg" alt="user-40" class="h-8 w-8 rounded-full">
								<span class="text-dark font-medium">Katherine Brooks</span>
							</span>
							</label>
						</div>
						<div class="mb-4">
							<label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
							<input type="checkbox" class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
							<span class="flex items-center space-x-2">
								<img src="@/assets/img/users/user-15.jpg" alt="user-15" class="h-8 w-8 rounded-full">
								<span class="text-dark font-medium"> Sharon Roy</span>
							</span>
							</label>
						</div>
						<div class="mb-4">
							<label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
							<input type="checkbox" class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
							<span class="flex items-center space-x-2">
								<img src="@/assets/img/users/user-21.jpg" alt="user-12" class="h-8 w-8 rounded-full">
								<span class="text-dark font-medium">Vaughan Lewis</span>
							</span>
							</label>
						</div>
						<div class="mb-4">
							<label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
							<input type="checkbox" class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
							<span class="flex items-center space-x-2">
								<img src="@/assets/img/users/user-22.jpg" alt="user-22" class="h-8 w-8 rounded-full">
								<span class="text-dark font-medium"> Jessica Louise</span>
							</span>
							</label>
						</div>
						<div>
							<label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
							<input type="checkbox" class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
							<span class="flex items-center space-x-2">
								<img src="@/assets/img/users/user-23.jpg" alt="user-23" class="h-8 w-8 rounded-full">
								<span class="text-dark font-medium"> Carol Thomas</span>
							</span>
							</label>
						</div>
					</form>
				</div>
				<div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
					<button type="button" data-modal-hide="add_new" class="btn btn-light">Cancel</button>
					<button type="submit" class="btn btn-primary">Confirm</button>
				</div>
			</div>
		</div>
	</div>
	<!-- end add new modal -->

	<!-- start add notes  modal -->
	<div id="add_new_notes" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
		<div class="relative p-4 w-full max-w-[500px] max-h-full">
			<div class="relative bg-white rounded-defaultradius">
				<div class="flex items-center justify-between p-4 border-b border-borderColor">
					<div class="flex item-center gap-2">
						<h5 class="font-bold text-[18px]">Add New Notes</h5>	
					</div>
					<button type="button" class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center" data-modal-hide="add_new_notes">
						<i class="ti ti-x"></i>
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<div class="p-4">
					<form>
						<div class="mb-4">
							<label class="form-label">Title<span class="text-danger ms-1">*</span></label>
							<input class="form-control" type="text">						
						</div>
						<div class="mb-4">
							<label class="form-label">Notes<span class="text-danger ms-1">*</span></label>
							<textarea rows="4" class="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-900"></textarea>
						</div>
						<div class="mb-4">
							<label class="form-label">Attachment<span class="text-danger ms-1">*</span></label>
							<div class="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
								<span class="block mb-1"><i class="ti ti-folder-open text-primary fs-16"></i></span>
								<p class="mb-0 tet-[14px] text-dark">Drop your files here or <a href="javascript:void(0);" class="underline text-primary">browse</a></p>
								<input type="file" accept="video/image" class="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer">
								<p class="text-[13px] mb-0">Maximum size : 50 MB</p>
							</div>
						</div> 
						<!-- start row -->
						<div class="grid grid-cols-1 lg:grid-cols-12">
							<div class="lg:col-span-7">
								<div class="border border-borderColor rounded p-4 rounded relative">
									<div class="flex items-center gap-3 flex-wrap">
										<div class="flex items-center justify-center w-10 h-10 rounded bg-success shrink-0">
											<i class="ti ti-file-spreadsheet  text-[18px] text-white"></i>
										</div>	
										<div>
											<h6 class="font-medium text-[14px] mb-1">Project Specs.xls.</h6>
											<p class="mb-0">365 KB</p>
										</div>
									</div>
									<button class="w-6 h-6 rounded-full absolute right-2 top-5 bg-light text-dark flex items-center justify-center hover:bg-gray-200">
										<i class="ti ti-arrow-down"></i>
									</button>
								</div>
							</div>
						</div>
						<!-- end row -->
					</form>
				</div>
				<div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
					<button type="button" data-modal-hide="add_new_notes" class="btn btn-light">Cancel</button>
					<button type="button" class="btn btn-primary">Confirm</button>
				</div>
			</div>
		</div>
	</div>
	<!-- end add new modal -->

	<!-- start edit notes  modal -->
	<div id="edit_notes" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
		<div class="relative p-4 w-full max-w-[500px] max-h-full">
			<div class="relative bg-white rounded-defaultradius">
				<div class="flex items-center justify-between p-4 border-b border-borderColor">
					<div class="flex item-center gap-2">
						<h5 class="font-bold text-[18px]">Edit Notes</h5>	
					</div>
					<button type="button" class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center" data-modal-hide="edit_notes">
						<i class="ti ti-x"></i>
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<div class="p-4">
					<form>
						<div class="mb-4">
							<label class="form-label">Title<span class="text-danger ms-1">*</span></label>
							<input class="form-control" type="text" placeholder="Team meet at Starbucks">						
						</div>
						<div class="mb-4">
							<label class="form-label">Notes<span class="text-danger ms-1">*</span></label>
							<textarea rows="4" class="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-900" placeholder="A project review evaluates the success of an initiative and identifies areas for improvement. "></textarea>
						</div>
						<div class="mb-4">
							<label class="form-label">Attachment<span class="text-danger ms-1">*</span></label>
							<div class="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
								<span class="block mb-1"><i class="ti ti-folder-open text-primary fs-16"></i></span>
								<p class="mb-0 tet-[14px] text-dark">Drop your files here or <a href="javascript:void(0);" class="underline text-primary">browse</a></p>
								<input type="file" accept="video/image" class="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer">
								<p class="text-[13px] mb-0">Maximum size : 50 MB</p>
							</div>
						</div> 
						<!-- start row -->
						<div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
							<div class="lg:col-span-7">
								<div class="border border-borderColor rounded p-4 rounded relative">
									<div class="flex items-center gap-3 flex-wrap">
										<div class="flex items-center justify-center w-10 h-10 rounded bg-success shrink-0">
											<i class="ti ti-file-spreadsheet  text-[18px] text-white"></i>
										</div>	
										<div>
											<h6 class="font-medium text-[14px] mb-1">Project Specs.xls.</h6>
											<p class="mb-0">365 KB</p>
										</div>
									</div>
									<button class="w-6 h-6 rounded-full absolute right-2 top-5 bg-light text-dark flex items-center justify-center hover:bg-gray-200">
										<i class="ti ti-arrow-down"></i>
									</button>
								</div>
							</div>
						</div>
						<!-- end row -->
					</form>
				</div>
				<div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
					<button type="button" data-modal-hide="edit_notes" class="btn btn-light">Cancel</button>
					<button type="submit" class="btn btn-primary">Save Changes</button>
				</div>
			</div>
		</div>
	</div>
	<!-- end edit new modal -->
</template>
<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { initFlowbite } from "flowbite";
import { onMounted, onUnmounted, ref } from 'vue';
export default {
  data() {
    return {
      isEditorVisible: false,
      selected: "1 hr",
      selectedOne: "High",
      selectedTwo: "Jerald Sen",
      Reminder: [
        { label: "Select", value: "Select" },
        { label: "1 hr", value: "1 hr" },
        { label: "Reminder", value: "Reminder" },
        { label: "10hr", value: "10hr" },
      ],
      Task: [
        { label: "Select", value: "Select" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
      ],
      Assigned: [
        { label: "Select", value: "Select" },
        { label: "Jerald Sen", value: "Jerald Sen" },
        { label: "Jackson Daniel", value: "Jackson Daniel" },
      ],
    }
  },
  methods: {
    toggleEditor() {
      this.isEditorVisible = !this.isEditorVisible;
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
  mounted() {
    initFlowbite();
    this.initQuill();
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
}
</script>
