<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">

      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Todo
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
              <li class="text-dark font-medium" aria-current="page">Todo</li>
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
            title="Collapse" id="collapse-header"
            @click="toggleHeader">
            <i class="ti ti-transition-top"></i>
          </button>
        </div>
      </div>
      <!-- End Page Header -->

      <div class="flex items-center justify-between mb-5">
        <button class="btn bg-primary border-primary text-white text-start" data-modal-toggle="add_new_todo"
          data-modal-target="add_new_todo">
          <i class="ti ti-circle-plus me-1"></i>Create New
        </button>
        <div class="flex items-center rounded gap-2 icon-list">
          <router-link to="/application/todo"
            class="w-7 h-7 flex items-center justify-center rounded bg-primary text-white border border-borderColor me-1"><i
              class="ti ti-layout-grid"></i></router-link>
          <router-link to="/application/todo-list"
            class="w-7 h-7 flex items-center justify-center rounded border border-borderColor text-dark"><i
              class="ti ti-list-tree"></i></router-link>
        </div>
      </div>

      <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white">
        <div class="p-4">
          <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6 gy-3 gap-2 mb-4">
            <div class="sm:col-span-4">
              <div class="flex items-center">
                <h6>Total Todo</h6>
              </div>
            </div>
            <div class="sm:col-span-8">
              <div class="flex items-center justify-end">
                <p class="mb-0 me-3 pe-3 border-r text-14">Total Task : <span class="text-dark"> 55 </span></p>
                <p class="mb-0 me-3 pe-3 border-r text-14">Pending : <span class="text-dark"> 15 </span></p>
                <p class="mb-0 text-14">Completed : <span class="text-dark"> 40 </span></p>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between flex-wrap gap-y-3 mb-4 pb-4 border-borderColor border-b">
            <div class="me-2">
              <div class="relative">
                <div class="absolute inset-y-0 end-2 flex items-center pointer-events-none">
                  <i class="ti ti-calendar text-gray-600 text-base leading-normal"></i>
                </div>
                <a-date-picker v-model:value="valueOne"
                  class="flatpickr-input flat-datepickr bg-white border-borderColor text-gray-900 text-sm rounded-input block w-[125px] py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                  placeholder="Due Date"
                  format="DD MMM YYYY"
                  :allowClear="true" />
                <!-- <input type="text" placeholder="Due Date"
                  class="flatpickr-input flat-datepickr bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-[125px] py-2 px-2.5 h-[38px] placeholder:text-gray-400"> -->
              </div>
            </div>
            <div class="flex items-center justify-between flex-wrap gap-y-3">
              <div class="me-2">
                <a href="javascript:void(0);"
                  class="border border-borderColor rounded p-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="todo-dropdown">
                  All Tags<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="todo-dropdown" class="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary">All Tags</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary">Internal</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary">Projects</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary">Meetings</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary">Reminder</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary">Research</a>
                  </li>
                </ul>
              </div>
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor rounded p-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="todo-dropdownone">
                  <span class="text-gray-500 mr-1 focus:text-white">Sort By : </span> Recent <i
                    class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="todo-dropdownone" class="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary">Recently
                      Adding</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary">Ascending</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary">Desending</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary">Last
                      Month</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary">Last 7
                      days</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion accordions-items-seperate" id="accordionExample" data-accordion="collapse">
            <div class="accordion-item mb-3">
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 items-center mb-3 gap-y-3">
                <div class="lg:col-span-4 sm:col-span-6">
                  <div class="accordion-header" id="headingTwo">
                    <div class="accordion-button">
                      <div class="flex items-center w-full">
                        <div class="me-2">
                          <a href="javascript:void(0);" class="collapsearrow bg-transparent"
                            data-accordion-toggle="todoBorderOne" data-accordion-target="#todoBorderOne"
                            aria-expanded="true" aria-controls="todoBorderOne">
                            <span><i class="fas fa-chevron-down arrow-rotate"></i></span>
                          </a>
                        </div>
                        <div class="flex items-center">
                          <span><i class="ti ti-square-rounded text-purple me-2"></i></span>
                          <h5 class="fw-semibold">High</h5>
                          <span class="badge bg-light rounded-pill text-dark ms-2">15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:col-span-8 sm:col-span-6">
                  <div class="flex items-center justify-end">
                    <a href="#" class="btn btn-light me-2" data-modal-toggle="add_new_todo"
                      data-modal-target="add_new_todo"><i class="ti ti-circle-plus me-2"></i>Add New</a>
                    <a href="#" class="btn btn-outline-light border">See All <i class="ti ti-arrow-right ms-2"></i></a>
                  </div>
                </div>
              </div>
              <div id="todoBorderOne" class="hidden text-dark" aria-labelledby="headingTwo">
                <div class="accordion-body">
                  <div class="list-group rounded-none border-b pb-2">
                    <div
                      class="list-group-item border border-white transition-all duration-500 shadow-sm rounded mb-2 p-3">
                      <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6 items-center gap-y-3">
                        <div class="lg:col-span-6 md:col-span-7">
                          <div class="todo-inbox-check flex items-center flex-wrap">
                            <span class="me-2 flex items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                            <div class="form-check form-check-md me-2">
                              <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox">
                            </div>
                            <span class="me-2 flex items-center rating-select"><i
                                class="ti ti-star-filled filled"></i></span>
                            <div class="strike-info">
                              <h4 class="text-[14px] truncate">Finalize project proposal</h4>
                            </div>
                            <span
                              class="bg-dark-transparent text-dark rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs ms-2"><i
                                class="ti ti-calendar me-1"></i>15 Jan 2025</span>
                          </div>
                        </div>
                        <div class="lg:col-span-6 md:col-span-5">
                          <div class="flex items-center justify-end flex-wrap gap-y-3">
                            <span
                              class="py-1 px-2 rounded text-xs leading-none font-semibold bg-success text-white me-1">Projects</span>
                            <span
                              class="bg-danger-100 text-pink rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2"><i
                                class="fas fa-circle text-[6px] me-1"></i>Onhold</span>
                            <div class="flex items-center">
                              <div class="flex -space-x-2">
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-13.jpg" alt="img">
                                </span>
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-14.jpg" alt="img">
                                </span>
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-15.jpg" alt="img">
                                </span>
                              </div>
                              <div>
                                <a href="javascript:void(0);"
                                  class="p-1 bg-white inline-flex items-center focus:text-primary hover:text-primary text-gray-900"
                                  data-dropdown-toggle="office-dropdown13">
                                  <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul id="office-dropdown13"
                                  class="hidden z-[9] p-2 w-[150px] border border-borderColor rounded bg-white shadow-lg">
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                      data-modal-toggle="edit_todo" data-modal-target="edit_todo"><i
                                        class="ti ti-edit me-2"></i>Edit</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                      data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                        class="ti ti-trash me-2"></i>Delete </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                        class="ti ti-eye me-2"></i>View </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="list-group-item border border-white transition-all duration-500 shadow-sm rounded mb-2 p-3">
                      <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6 items-center gap-y-3">
                        <div class="lg:col-span-6 md:col-span-7">
                          <div class="todo-inbox-check flex items-center flex-wrap">
                            <span class="me-2 flex items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                            <div class="form-check form-check-md me-2">
                              <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox">
                            </div>
                            <span class="me-2 rating-select d-flex items-center"><i class="ti ti-star"></i></span>
                            <div class="strike-info">
                              <h4 class="text-[14px] truncate">Submit to supervisor by EOD</h4>
                            </div>
                            <span
                              class="bg-dark-transparent text-dark rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs ms-2"><i
                                class="ti ti-calendar me-1"></i>25 May 2024</span>
                          </div>
                        </div>
                        <div class="lg:col-span-6 md:col-span-5">
                          <div class="flex items-center justify-end flex-wrap gap-y-3">
                            <span
                              class="py-1 px-2 rounded text-xs leading-none font-semibold bg-danger text-white me-1">Internal</span>
                            <span
                              class="bg-secondary-100 text-purple rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2"><i
                                class="fas fa-circle text-[6px] me-1"></i>Inprogress</span>
                            <div class="flex items-center">
                              <div class="flex -space-x-2">
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-20.jpg" alt="img">
                                </span>
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-21.jpg" alt="img">
                                </span>
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-22.jpg" alt="img">
                                </span>
                              </div>
                              <div>
                                <a href="javascript:void(0);"
                                  class="p-1 bg-white inline-flex items-center focus:text-primary hover:text-primary text-gray-900"
                                  data-dropdown-toggle="office-dropdown2">
                                  <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul id="office-dropdown2"
                                  class="hidden z-[9] p-2 w-[150px] border border-borderColor rounded bg-white shadow-lg">
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                      data-modal-toggle="edit_todo" data-modal-target="edit_todo"><i
                                        class="ti ti-edit me-2"></i>Edit</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                      data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                        class="ti ti-trash me-2"></i>Delete </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                        class="ti ti-eye me-2"></i>View </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="list-group-item border border-white transition-all duration-500 shadow-sm rounded mb-2 p-3">
                      <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6 items-center gap-y-3">
                        <div class="lg:col-span-6 md:col-span-7">
                          <div class="todo-inbox-check flex items-center flex-wrap todo-strike-content">
                            <span class="me-2 flex items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                            <div class="form-check form-check-md me-2">
                              <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox" checked>
                            </div>
                            <span class="me-2 rating-select flex items-center"><i class="ti ti-star"></i></span>
                            <div class="strike-info">
                              <h4 class="text-[14px] truncate">Prepare presentation slides</h4>
                            </div>
                            <span
                              class="bg-dark-transparent text-dark rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs ms-2"><i
                                class="ti ti-calendar me-1"></i>15 Jan 2025</span>
                          </div>
                        </div>
                        <div class="lg:col-span-6 md:col-span-5">
                          <div class="flex items-center justify-end flex-wrap gap-y-3">
                            <span
                              class="py-1 px-2 rounded text-xs leading-none font-semibold bg-secondary text-white me-1">Reminder</span>
                            <span
                              class="bg-info-100 text-info rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2"><i
                                class="fas fa-circle text-[6px] me-1"></i>Pending</span>
                            <div class="flex items-center">
                              <div class="flex -space-x-2">
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-23.jpg" alt="img">
                                </span>
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-24.jpg" alt="img">
                                </span>
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-25.jpg" alt="img">
                                </span>
                              </div>
                              <div>
                                <a href="javascript:void(0);"
                                  class="p-1 bg-white inline-flex items-center focus:text-primary hover:text-primary text-gray-900"
                                  data-dropdown-toggle="office-dropdown3">
                                  <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul id="office-dropdown3"
                                  class="hidden z-[9] p-2 w-[150px] border border-borderColor rounded bg-white shadow-lg">
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                      data-modal-toggle="edit_todo" data-modal-target="edit_todo"><i
                                        class="ti ti-edit me-2"></i>Edit</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                      data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                        class="ti ti-trash me-2"></i>Delete </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                        class="ti ti-eye me-2"></i>View </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item mb-3">
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 items-center mb-3 gap-y-3">
                <div class="lg:col-span-4 sm:col-span-6">
                  <div class="accordion-header" id="headingThree">
                    <div class="accordion-button">
                      <div class="flex items-center w-full">
                        <div class="me-2">
                          <a href="javascript:void(0);" class="collapsearrow bg-transparent"
                            data-accordion-toggle="todoBorderTwo" data-accordion-target="#todoBorderTwo"
                            aria-expanded="true" aria-controls="todoBorderTwo">
                            <span><i class="fas fa-chevron-down arrow-rotate"></i></span>
                          </a>
                        </div>
                        <div class="flex items-center">
                          <span><i class="ti ti-square-rounded text-warning me-2"></i></span>
                          <h5 class="fw-semibold">Medium</h5>
                          <span class="badge bg-light rounded-pill text-dark ms-2">05</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:col-span-8 sm:col-span-6">
                  <div class="flex items-center justify-end">
                    <a href="#" class="btn btn-light me-2" data-modal-toggle="add_new_todo"
                      data-modal-target="add_new_todo"><i class="ti ti-circle-plus me-2"></i>Add New</a>
                    <a href="#" class="btn btn-outline-light border">See All <i class="ti ti-arrow-right ms-2"></i></a>
                  </div>
                </div>
              </div>
              <div id="todoBorderTwo" class="hidden text-dark" aria-labelledby="headingThree">
                <div class="accordion-body">
                  <div class="list-group rounded-none border-b pb-2">
                    <div
                      class="list-group-item border border-white transition-all duration-500 shadow-sm rounded mb-2 p-3">
                      <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6 items-center gap-y-3">
                        <div class="lg:col-span-6 md:col-span-7">
                          <div class="todo-inbox-check flex items-center flex-wrap">
                            <span class="me-2 flex items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                            <div class="form-check form-check-md me-2">
                              <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox">
                            </div>
                            <span class="me-2 rating-select flex items-center"><i class="ti ti-star"></i></span>
                            <div class="strike-info">
                              <h4 class="text-[14px] truncate">Check and respond to emails</h4>
                            </div>
                            <span
                              class="badge bg-dark-transparent text-dark rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs ms-2"><i
                                class="ti ti-calendar me-1"></i>Tomorrow</span>
                          </div>
                        </div>
                        <div class="lg:col-span-6 md:col-span-5">
                          <div class="flex items-center justify-end flex-wrap gap-y-3">
                            <div
                              class="py-1 px-2 rounded text-xs leading-none font-semibold bg-secondary text-white me-1">
                              Reminder</div>
                            <span
                              class="bg-success-100 text-success rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2"><i
                                class="fas fa-circle text-[6px] me-1"></i>Completed</span>
                            <div class="flex items-center">
                              <div class="flex -space-x-2">
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-12.jpg" alt="img">
                                </span>
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-14.jpg" alt="img">
                                </span>
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-24.jpg" alt="img">
                                </span>
                              </div>
                              <div>
                                <a href="javascript:void(0);"
                                  class="p-1 bg-white inline-flex items-center focus:text-primary hover:text-primary text-gray-900"
                                  data-dropdown-toggle="office-dropdown4">
                                  <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul id="office-dropdown4"
                                  class="hidden z-[9] p-2 w-[150px] border border-borderColor rounded bg-white shadow-lg">
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                      data-modal-toggle="edit_todo" data-modal-target="edit_todo"><i
                                        class="ti ti-edit me-2"></i>Edit</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                      data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                        class="ti ti-trash me-2"></i>Delete </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                        class="ti ti-eye me-2"></i>View </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="list-group-item border border-white transition-all duration-500 shadow-sm rounded mb-2 p-3">
                      <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6 items-center gap-y-3">
                        <div class="lg:col-span-6 md:col-span-7">
                          <div class="todo-inbox-check flex items-center flex-wrap">
                            <span class="me-2 flex items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                            <div class="form-check form-check-md me-2">
                              <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox">
                            </div>
                            <span class="me-2 rating-select flex items-center"><i class="ti ti-star"></i></span>
                            <div class="strike-info">
                              <h4 class="text-[14px] truncate">Coordinate with department head on progress</h4>
                            </div>
                            <span
                              class="badge bg-dark-transparent text-dark rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs ms-2"><i
                                class="ti ti-calendar me-1"></i>25 May 2024</span>
                          </div>
                        </div>
                        <div class="lg:col-span-6 md:col-span-5">
                          <div class="flex items-center justify-end flex-wrap gap-y-3">
                            <span
                              class="py-1 px-2 rounded text-xs leading-none font-semibold bg-danger text-white me-1">Internal</span>
                            <span
                              class="bg-secondary-100 text-secondary rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2"><i
                                class="fas fa-circle text-[6px] me-1"></i>Inprogress</span>
                            <div class="flex items-center">
                              <div class="flex -space-x-2">
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-06.jpg" alt="img">
                                </span>
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-09.jpg" alt="img">
                                </span>
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-14.jpg" alt="img">
                                </span>
                              </div>
                              <div>
                                <a href="javascript:void(0);"
                                  class="p-1 bg-white inline-flex items-center focus:text-primary hover:text-primary text-gray-900"
                                  data-dropdown-toggle="office-dropdown5">
                                  <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul id="office-dropdown5"
                                  class="hidden z-[9] p-2 w-[150px] border border-borderColor rounded bg-white shadow-lg">
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                      data-modal-toggle="edit_todo" data-modal-target="edit_todo"><i
                                        class="ti ti-edit me-2"></i>Edit</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                      data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                        class="ti ti-trash me-2"></i>Delete </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                        class="ti ti-eye me-2"></i>View </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item mb-3">
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 items-center mb-3 gap-y-3">
                <div class="lg:col-span-4 sm:col-span-6">
                  <div class="accordion-header" id="headingFour">
                    <div class="accordion-button">
                      <div class="flex items-center w-full">
                        <div class="me-2">
                          <a href="javascript:void(0);" class="collapsearrow bg-transparent"
                            data-accordion-toggle="todoBorderThree" data-accordion-target="#todoBorderThree"
                            aria-expanded="true" aria-controls="todoBorderThree">
                            <span><i class="fas fa-chevron-down arrow-rotate"></i></span>
                          </a>
                        </div>
                        <div class="flex items-center">
                          <span><i class="ti ti-square-rounded text-success me-2"></i></span>
                          <h5 class="fw-semibold">Low</h5>
                          <span class="badge bg-light rounded-pill text-dark ms-2">24</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:col-span-8 sm:col-span-6">
                  <div class="flex items-center justify-end">
                    <a href="#" class="btn btn-light me-2" data-modal-toggle="add_new_todo"
                      data-modal-target="add_new_todo"><i class="ti ti-circle-plus me-2"></i>Add New</a>
                    <a href="#" class="btn btn-outline-light border">See All <i class="ti ti-arrow-right ms-2"></i></a>
                  </div>
                </div>
              </div>
              <div id="todoBorderThree" class="hidden text-dark" aria-labelledby="headingFour">
                <div class="accordion-body">
                  <div class="list-group rounded-none border-b pb-2">
                    <div
                      class="list-group-item border border-white transition-all duration-500 shadow-sm rounded mb-2 p-3">
                      <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6 items-center gap-y-3">
                        <div class="lg:col-span-6 md:col-span-7">
                          <div class="todo-inbox-check flex items-center flex-wrap">
                            <span class="me-2 flex items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                            <div class="form-check form-check-md me-2">
                              <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox">
                            </div>
                            <span class="me-2 rating-select flex items-center"><i class="ti ti-star"></i></span>
                            <div class="strike-info">
                              <h4 class="text-[14px] truncate">Plan tasks for the next day</h4>
                            </div>
                            <span class="badge bg-transparent-dark text-dark rounded-pill ms-2"><i
                                class="ti ti-calendar me-1"></i>Today</span>
                          </div>
                        </div>
                        <div class="lg:col-span-6 md:col-span-5">
                          <div class="flex items-center justify-end flex-wrap gap-y-3">
                            <span
                              class="py-1 px-2 rounded text-xs leading-none font-semibold bg-info text-white me-1">Social</span>
                            <span
                              class="bg-info-100 text-info rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2"><i
                                class="fas fa-circle text-[6px] me-1"></i>Pending</span>
                            <div class="flex items-center">
                              <div class="flex -space-x-2">
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-12.jpg" alt="img">
                                </span>
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-14.jpg" alt="img">
                                </span>
                                <span class="size-6 flex items-center justify-center rounded-full mx-1">
                                  <img
                                    class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                    src="@/assets/img/profiles/avatar-24.jpg" alt="img">
                                </span>
                              </div>
                              <div>
                                <a href="javascript:void(0);"
                                  class="p-1 bg-white inline-flex items-center focus:text-primary hover:text-primary text-gray-900"
                                  data-dropdown-toggle="office-dropdown6">
                                  <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul id="office-dropdown6"
                                  class="hidden z-[9] p-2 w-[150px] border border-borderColor rounded bg-white shadow-lg">
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                      data-modal-toggle="edit_todo" data-modal-target="edit_todo"><i
                                        class="ti ti-edit me-2"></i>Edit</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                      data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                        class="ti ti-trash me-2"></i>Delete </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                        class="ti ti-eye me-2"></i>View </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a href="#" class="btn btn-primary"><i class="ti ti-loader me-2"></i>Load More</a>
          </div>
        </div>
      </div>


    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->

  <!-- start add notes  modal -->
  <div id="add_new_todo"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Add New Todo</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="add_new_todo">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Todo Title</label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <div class="flex items-center justify-between">
                    <label class="form-label">Tag</label>
                  </div>
                  <vue3-select v-model="selected" :options="TodoTag" placeholder="Select" />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Priority</label>
                  <vue3-select v-model="selectedOne" :options="Priority" placeholder="Select" />
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Descriptions</label>
                  <div class="quill-editor">
                    <div class="editor pages-editor ql-container ql-snow">
                        <div ref="editorRefone" class="quill-editor"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Add Assignee</label>
                  <vue3-select v-model="selectedTwo" :options="Assignee" placeholder="Select" />
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue3-select v-model="selectedThree" :options="Status" placeholder="Select" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="add_new_todo" class="btn btn-light">Cancel</button>
          <button type="button" class="btn btn-primary">Add New Todo</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end add new modal -->

  <!-- start edit notes  modal -->
  <div id="edit_todo"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Edit Todo</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="edit_todo">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Todo Title</label>
                  <input type="text" class="form-control" value="Update calendar and schedule">
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <div class="flex items-center justify-between">
                    <label class="form-label">Tag</label>
                  </div>
                  <vue3-select v-model="selectedFour" :options="TodoTag" placeholder="Internal" />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Priority</label>
                  <vue3-select v-model="selectedFive" :options="Priority" placeholder="Medium" />
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Descriptions</label>
                  <div class="editor pages-editor ql-container ql-snow">
                    <div ref="editorRef" class="quill-editor"></div>
                </div>
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Add Assignee</label>
                  <vue3-select v-model="selectedSix" :options="Assignee" placeholder="Sophie" />
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue3-select v-model="selectedSeven" :options="Status" placeholder="Completed" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="add_new_todo" class="btn btn-light">Cancel</button>
          <button type="button" class="btn btn-primary">Add New Todo</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end add new modal -->

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
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { initFlowbite } from 'flowbite';
import { DatePicker } from 'ant-design-vue';
import Vue3Select from 'vue3-select-component';
import 'ant-design-vue/dist/reset.css';

export default {
  components: {
    'a-date-picker': DatePicker,
    'vue3-select': Vue3Select
  },
  data() {
    return {
      valueOne: null,
      content: "",
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      TodoTag: [
        { label: "Select", value: "Select" },
        { label: "Internal", value: "Internal" },
        { label: "Projects", value: "Projects" },
        { label: "Meetings", value: "Meetings" },
        { label: "Reminder", value: "Reminder" },
      ],
      Priority: [
        { label: "Select", value: "Select" },
        { label: "Medium", value: "Medium" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
      ],
      Assignee: [
        { label: "Select", value: "Select" },
        { label: "Sophie", value: "Sophie" },
        { label: "Cameron", value: "Cameron" },
        { label: "Doris", value: "Doris" },
        { label: "Rufana", value: "Rufana" },
      ],
      Status: [
        { label: "Select", value: "Select" },
        { label: "Completed", value: "Completed" },
        { label: "Pending", value: "Pending" },
        { label: "Onhold", value: "Onhold" },
        { label: "Inprogress", value: "Inprogress" },
      ],
      isClicked: false,
      isClickedOne: false,
      isClickedTwo: true,
      isClickedThree: false,
      isClickedFour: false,
      isClickedFive: false,
    };
  },
  mounted() {
    this.initQuill();
    initFlowbite();
  },
  methods: {
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
      if (this.$refs.editorRefone) {
        const quillone = new Quill(this.$refs.editorRefone, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          },
        });

        quillone.on("text-change", () => {
          this.content = quillone.root.innerHTML;
        });
      }
    },
    toggleHeader() {
      const button = document.getElementById("collapse-header");
      if (button) {
        button.classList.toggle("active");
        document.body.classList.toggle("header-collapse");
      }
    },
    toggleClicked() {
      this.isClicked = !this.isClicked;
    },
    toggleClickedOne() {
      this.isClickedOne = !this.isClickedOne;
    },
    toggleClickedTwo() {
      this.isClickedTwo = !this.isClickedTwo;
    },
    toggleClickedThree() {
      this.isClickedThree = !this.isClickedThree;
    },
    toggleClickedFour() {
      this.isClickedFour = !this.isClickedFour;
    },
    toggleClickedFive() {
      this.isClickedFive = !this.isClickedFive;
    },
  },
};
</script>
