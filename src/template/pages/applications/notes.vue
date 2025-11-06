<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[56px] ml-[240px] lg:ml-[240px] md:ml-0">

    <div class="content p-5 lg:p-6">

      <!-- start page header -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h4 class="mb-2 text-2xl font-bold flex items-center text-gray-900">
            Notes
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap items-center space-x-2 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard" class="hover:underline text-gray-700 transition-colors">Home</router-link>
              </li>
              <li class="flex items-center">
                <i class="ti ti-chevron-right text-xs mx-1"></i>
                <a href="#" class="hover:underline text-gray-700 transition-colors">Applications</a>
              </li>
              <li class="flex items-center">
                <i class="ti ti-chevron-right text-xs mx-1"></i>
                <span class="text-gray-900 font-medium">Notes</span>
              </li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <!-- Refresh Button -->
          <button
            class="border border-borderColor w-10 h-10 rounded-lg shadow-sm bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
            title="Refresh">
            <i class="ti ti-refresh text-gray-600"></i>
          </button>
          <!-- Collapse Button -->
          <button
            class="border border-borderColor w-10 h-10 rounded-lg shadow-sm bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
            title="Collapse" id="collapse-header" @click="toggleHeader">
            <i class="ti ti-transition-top text-gray-600"></i>
          </button>
        </div>
      </div>
      <!-- end page header -->

      <div class="grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-1 gap-6">
        <!-- Sidebar -->
        <div class="xl:col-span-3 lg:col-span-4 md:col-span-1">
          <div class="w-full bg-white border border-borderColor rounded-lg p-4 shadow-sm">
            <div class="mb-6 pb-4 border-b border-borderColor">
              <h6 class="flex items-center text-lg font-semibold text-gray-900"><i
                  class="ti ti-file-text mr-3 text-primary"></i>Notes List</h6>
            </div>
            <div class="border-b border-borderColor mb-2 pb-2">
              <div class="flex flex-col space-y-1" data-tabs-toggle="#default-styled-tab-content"
                data-tabs-active-classes="text-white bg-primary hover:text-white"
                data-tabs-inactive-classes="text-gray-600 hover:text-primary hover:bg-gray-50" role="tablist">
                <button
                  class="flex items-center text-left font-medium py-3 px-4 rounded-lg transition-all duration-200 active hover:text-white"
                  id="basic-tab" data-tabs-target="#basic" type="button" role="tab">
                  <i class="ti ti-inbox mr-3"></i>All Notes
                </button>
                <button
                  class="flex items-center text-left font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:text-white"
                  data-tabs-target="#styled-dashboard" type="button" role="tab" aria-selected="false">
                  <i class="ti ti-star mr-3"></i>Important
                </button>
                <button
                  class="flex items-center text-left font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:text-white"
                  data-tabs-target="#styled-settings" type="button" role="tab" aria-selected="false">
                  <i class="ti ti-trash mr-3"></i>Trash
                </button>
              </div>
            </div>
            <div class="space-y-2">
              <div class="px-2">
                <h6 class="mb-3 text-sm font-semibold text-gray-900">Tags</h6>
                <div class="flex flex-col space-y-1">
                  <a href="javascript:void(0);"
                    class="text-info flex items-center py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <span class="text-info mr-3"><i class="ti ti-square-filled text-xs"></i></span>Pending
                  </a>
                  <a href="javascript:void(0);"
                    class="text-danger flex items-center py-2 px-3 rounded-lg hover:bg-red-50 transition-colors">
                    <span class="text-danger mr-3"><i class="ti ti-square-filled text-xs"></i></span>Onhold
                  </a>
                  <a href="javascript:void(0);"
                    class="text-warning flex items-center py-2 px-3 rounded-lg hover:bg-yellow-50 transition-colors">
                    <span class="text-warning mr-3"><i class="ti ti-square-filled text-xs"></i></span>Inprogress
                  </a>
                  <a href="javascript:void(0);"
                    class="text-success flex items-center py-2 px-3 rounded-lg hover:bg-green-50 transition-colors">
                    <span class="text-success mr-3"><i class="ti ti-square-filled text-xs"></i></span>Done
                  </a>
                </div>
              </div>
              <div class="px-2">
                <h6 class="mb-3 text-sm font-semibold text-gray-900">Priority</h6>
                <div class="flex flex-col space-y-1">
                  <a href="javascript:void(0);"
                    class="text-warning flex items-center py-2 px-3 rounded-lg hover:bg-yellow-50 transition-colors">
                    <span class="text-warning mr-3"><i class="ti ti-square-filled text-xs"></i></span>Medium
                  </a>
                  <a href="javascript:void(0);"
                    class="text-success flex items-center py-2 px-3 rounded-lg hover:bg-green-50 transition-colors">
                    <span class="text-success mr-3"><i class="ti ti-square-filled text-xs"></i></span>High
                  </a>
                  <a href="javascript:void(0);"
                    class="text-danger flex items-center py-2 px-3 rounded-lg hover:bg-red-50 transition-colors">
                    <span class="text-danger mr-3"><i class="ti ti-square-filled text-xs"></i></span>Low
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="xl:col-span-9 lg:col-span-8 md:col-span-1">
          <!-- Action Bar -->
          <div
            class="bg-white flex flex-wrap gap-4 items-center justify-between mb-6 p-6 rounded-lg border border-borderColor shadow-sm">
            <div>
              <select
                class="select border border-borderColor rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary">
                <option>Bulk Actions</option>
                <option>Delete Marked</option>
                <option>Unmark All</option>
                <option>Mark All</option>
              </select>
            </div>
            <div class="flex items-center flex-wrap gap-3">
              <!-- Drop Down Button -->
              <div class="relative">
                <a href="javascript:void(0);"
                  class="border border-borderColor rounded-lg px-4 py-2 bg-white shadow-sm inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900 hover:bg-gray-50 transition-colors"
                  data-dropdown-toggle="export-dropdown">
                  <i class="ti ti-package-export mr-2"></i>Export<i class="ti ti-chevron-down ml-2"></i>
                </a>
                <ul id="export-dropdown"
                  class="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[200px]">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"><i
                        class="ti ti-file-type-pdf mr-3"></i>Export as PDF</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"><i
                        class="ti ti-file-type-xls mr-3"></i>Export as Excel </a>
                  </li>
                </ul>
              </div>
              <a href="javascript:void(0);"
                class="inline-flex items-center gap-2 px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors font-medium"
                data-modal-target="add_new_notes" data-modal-toggle="add_new_notes">
                <i class="ti ti-circle-plus"></i>Add Notes
              </a>
            </div>
          </div>

          <!-- Tab Content -->
          <div id="default-styled-tab-content">
            <!-- first tab Item -->
            <div class="hidden" id="basic" role="tabpanel">
              <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6">
                <!-- Item 1 -->
                <div class="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <span
                        class="py-1 px-3 text-xs font-semibold rounded text-warning border border-warning flex items-center bg-yellow-50"><i
                          class="ti ti-circle-filled text-[6px] mr-2"></i>Medium</span>
                      <div class="relative">
                        <a href="javascript:void(0);"
                          class="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown7">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="grid-dropdown7"
                          class="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit mr-3"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash mr-3"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"><i
                                class="ti ti-star mr-3"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye mr-3"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h6 class="text-lg font-semibold mb-2 text-gray-900 truncate"><a href="javascript:void(0);"
                          class="hover:text-primary transition-colors">Plan a trip to another country</a></h6>
                      <p class="mb-3 flex items-center text-gray-600 text-sm"><i class="ti ti-calendar mr-2"></i>20 Jan
                        2024</p>
                      <p class="text-gray-600 text-sm leading-relaxed">Space, the final frontier. of the Starship
                        Enterprise.</p>
                    </div>
                    <div class="flex items-center justify-between border-t border-borderColor pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-3">
                          <img src="@/assets/img/profiles/avatar-05.jpg" alt="Profile"
                            class="w-8 h-8 rounded-full object-cover">
                        </a>
                        <span class="text-info flex items-center text-sm"><i
                            class="ti ti-square-filled text-[10px] mr-2"></i>Personal</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-star text-warning"></i>
                        </a>
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-trash text-danger"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item 2 -->
                <div class="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <span
                        class="py-1 px-3 text-xs font-semibold rounded text-danger border border-danger flex items-center bg-red-50"><i
                          class="ti ti-circle-filled text-[6px] mr-2"></i>Low</span>
                      <div class="relative">
                        <a href="javascript:void(0);"
                          class="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="notesone-dropdown">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="notesone-dropdown"
                          class="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit mr-3"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash mr-3"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"><i
                                class="ti ti-star mr-3"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye mr-3"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h6 class="text-lg font-semibold mb-2 text-gray-900 truncate"><a href="javascript:void(0);"
                          class="hover:text-primary transition-colors">Improve touch typing</a></h6>
                      <p class="mb-3 flex items-center text-gray-600 text-sm"><i class="ti ti-calendar mr-2"></i>22 Jan
                        2024</p>
                      <p class="text-gray-600 text-sm leading-relaxed">Well, the way they make shows is, they make one
                        show.</p>
                    </div>
                    <div class="flex items-center justify-between border-t border-borderColor pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-3">
                          <img src="@/assets/img/profiles/avatar-06.jpg" alt="Profile"
                            class="w-8 h-8 rounded-full object-cover">
                        </a>
                        <span class="text-danger flex items-center text-sm"><i
                            class="ti ti-square-filled text-[10px] mr-2"></i>Work</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-star text-warning"></i>
                        </a>
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-trash text-danger"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item 3 -->
                <div class="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <span
                        class="py-1 px-3 text-xs font-semibold rounded text-danger border border-danger flex items-center bg-red-50"><i
                          class="ti ti-circle-filled text-[6px] mr-2"></i>Low</span>
                      <div class="relative">
                        <a href="javascript:void(0);"
                          class="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="notestwo-dropdown">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="notestwo-dropdown"
                          class="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit mr-3"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash mr-3"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"><i
                                class="ti ti-star mr-3"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye mr-3"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h6 class="text-lg font-semibold mb-2 text-gray-900 truncate"><a href="javascript:void(0);"
                          class="hover:text-primary transition-colors">Learn calligraphy</a></h6>
                      <p class="mb-3 flex items-center text-gray-600 text-sm"><i class="ti ti-calendar mr-2"></i>22 Jan
                        2024</p>
                      <p class="text-gray-600 text-sm leading-relaxed">Calligraphy, the art of beautiful handwriting. It
                        derive from Greek.</p>
                    </div>
                    <div class="flex items-center justify-between border-t border-borderColor pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-3">
                          <img src="@/assets/img/profiles/avatar-03.jpg" alt="Profile"
                            class="w-8 h-8 rounded-full object-cover">
                        </a>
                        <span class="text-info flex items-center text-sm"><i
                            class="ti ti-square-filled text-[10px] mr-2"></i>Social</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-star text-warning"></i>
                        </a>
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-trash text-danger"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item 4 -->
                <div class="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <span
                        class="py-1 px-3 text-xs font-semibold rounded text-success border border-success flex items-center bg-green-50"><i
                          class="ti ti-circle-filled text-[6px] mr-2"></i>High</span>
                      <div class="relative">
                        <a href="javascript:void(0);"
                          class="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="notesthree-dropdown">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="notesthree-dropdown"
                          class="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit mr-3"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash mr-3"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"><i
                                class="ti ti-star mr-3"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye mr-3"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h6 class="text-lg font-semibold mb-2 text-gray-900 truncate"><a href="javascript:void(0);"
                          class="hover:text-primary transition-colors">Backup Files EOD</a></h6>
                      <p class="mb-3 flex items-center text-gray-600 text-sm"><i class="ti ti-calendar mr-2"></i>22 Jan
                        2024</p>
                      <p class="text-gray-600 text-sm leading-relaxed">Project files should be took backup before end of
                        the day.</p>
                    </div>
                    <div class="flex items-center justify-between border-t border-borderColor pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-3">
                          <img src="@/assets/img/profiles/avatar-05.jpg" alt="Profile"
                            class="w-8 h-8 rounded-full object-cover">
                        </a>
                        <span class="text-info flex items-center text-sm"><i
                            class="ti ti-square-filled text-[10px] mr-2"></i>Personal</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-star text-warning"></i>
                        </a>
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-trash text-danger"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item 5 -->
                <div class="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <span
                        class="py-1 px-3 text-xs font-semibold rounded text-danger border border-danger flex items-center bg-red-50"><i
                          class="ti ti-circle-filled text-[6px] mr-2"></i>Low</span>
                      <div class="relative">
                        <a href="javascript:void(0);"
                          class="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="notesfour-dropdown">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="notesfour-dropdown"
                          class="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit mr-3"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash mr-3"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"><i
                                class="ti ti-star mr-3"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye mr-3"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h6 class="text-lg font-semibold mb-2 text-gray-900 truncate"><a href="javascript:void(0);"
                          class="hover:text-primary transition-colors">Download Server Logs</a></h6>
                      <p class="mb-3 flex items-center text-gray-600 text-sm"><i class="ti ti-calendar mr-2"></i>22 Jan
                        2024</p>
                      <p class="text-gray-600 text-sm leading-relaxed">Server log is a text document that contains a
                        record of all activity.</p>
                    </div>
                    <div class="flex items-center justify-between border-t border-borderColor pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-3">
                          <img src="@/assets/img/profiles/avatar-06.jpg" alt="Profile"
                            class="w-8 h-8 rounded-full object-cover">
                        </a>
                        <span class="text-danger flex items-center text-sm"><i
                            class="ti ti-square-filled text-[10px] mr-2"></i>Work</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-star text-warning"></i>
                        </a>
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-trash text-danger"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item 6 -->
                <div class="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <span
                        class="py-1 px-3 text-xs font-semibold rounded text-warning border border-warning flex items-center bg-yellow-50"><i
                          class="ti ti-circle-filled text-[6px] mr-2"></i>Medium</span>
                      <div class="relative">
                        <a href="javascript:void(0);"
                          class="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="notesfive-dropdown">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="notesfive-dropdown"
                          class="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit mr-3"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash mr-3"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"><i
                                class="ti ti-star mr-3"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye mr-3"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h6 class="text-lg font-semibold mb-2 text-gray-900 truncate"><a href="javascript:void(0);"
                          class="hover:text-primary transition-colors">Team meet at Starbucks</a></h6>
                      <p class="mb-3 flex items-center text-gray-600 text-sm"><i class="ti ti-calendar mr-2"></i>26 Jan
                        2024</p>
                      <p class="text-gray-600 text-sm leading-relaxed">Meeting all teamets at Starbucks for identifying
                        them all.</p>
                    </div>
                    <div class="flex items-center justify-between border-t border-borderColor pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-3">
                          <img src="@/assets/img/profiles/avatar-07.jpg" alt="Profile"
                            class="w-8 h-8 rounded-full object-cover">
                        </a>
                        <span class="text-warning flex items-center text-sm"><i
                            class="ti ti-square-filled text-[10px] mr-2"></i>Social</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-star text-warning"></i>
                        </a>
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-trash text-danger"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item 7 -->
                <div class="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <span
                        class="py-1 px-3 text-xs font-semibold rounded text-success border border-success flex items-center bg-green-50"><i
                          class="ti ti-circle-filled text-[6px] mr-2"></i>High</span>
                      <div class="relative">
                        <a href="javascript:void(0);"
                          class="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="notessix-dropdown">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="notessix-dropdown"
                          class="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit mr-3"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash mr-3"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"><i
                                class="ti ti-star mr-3"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye mr-3"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h6 class="text-lg font-semibold mb-2 text-gray-900 truncate"><a href="javascript:void(0);"
                          class="hover:text-primary transition-colors">Create a compost pile</a></h6>
                      <p class="mb-3 flex items-center text-gray-600 text-sm"><i class="ti ti-calendar mr-2"></i>27 Jan
                        2024</p>
                      <p class="text-gray-600 text-sm leading-relaxed">Compost pile refers to fruit and vegetable
                        scraps, used tea etc.</p>
                    </div>
                    <div class="flex items-center justify-between border-t border-borderColor pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-3">
                          <img src="@/assets/img/profiles/avatar-08.jpg" alt="Profile"
                            class="w-8 h-8 rounded-full object-cover">
                        </a>
                        <span class="text-warning flex items-center text-sm"><i
                            class="ti ti-square-filled text-[10px] mr-2"></i>Social</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-star text-warning"></i>
                        </a>
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-trash text-danger"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item 8 -->
                <div class="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <span
                        class="py-1 px-3 text-xs font-semibold rounded text-danger border border-danger flex items-center bg-red-50"><i
                          class="ti ti-circle-filled text-[6px] mr-2"></i>Low</span>
                      <div class="relative">
                        <a href="javascript:void(0);"
                          class="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="notesseven-dropdown">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="notesseven-dropdown"
                          class="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit mr-3"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash mr-3"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"><i
                                class="ti ti-star mr-3"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye mr-3"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h6 class="text-lg font-semibold mb-2 text-gray-900 truncate"><a href="javascript:void(0);"
                          class="hover:text-primary transition-colors">Take a hike at a local park</a></h6>
                      <p class="mb-3 flex items-center text-gray-600 text-sm"><i class="ti ti-calendar mr-2"></i>26 Jan
                        2024</p>
                      <p class="text-gray-600 text-sm leading-relaxed">Hiking involves a long energetic walk in a
                        natural environment.</p>
                    </div>
                    <div class="flex items-center justify-between border-t border-borderColor pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-3">
                          <img src="@/assets/img/profiles/avatar-08.jpg" alt="Profile"
                            class="w-8 h-8 rounded-full object-cover">
                        </a>
                        <span class="text-info flex items-center text-sm"><i
                            class="ti ti-square-filled text-[10px] mr-2"></i>Personal</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-star text-warning"></i>
                        </a>
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-trash text-danger"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item 9 -->
                <div class="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <span
                        class="py-1 px-3 text-xs font-semibold rounded text-info border border-info flex items-center bg-blue-50"><i
                          class="ti ti-circle-filled text-[6px] mr-2"></i>Medium</span>
                      <div class="relative">
                        <a href="javascript:void(0);"
                          class="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="noteseight-dropdown">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="noteseight-dropdown"
                          class="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit mr-3"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash mr-3"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"><i
                                class="ti ti-star mr-3"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye mr-3"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h6 class="text-lg font-semibold mb-2 text-gray-900 truncate"><a href="javascript:void(0);"
                          class="hover:text-primary transition-colors">Research a topic interested</a></h6>
                      <p class="mb-3 flex items-center text-gray-600 text-sm"><i class="ti ti-calendar mr-2"></i>28 Jan
                        2024</p>
                      <p class="text-gray-600 text-sm leading-relaxed">Research a topic interested by listen actively
                        and attentively.</p>
                    </div>
                    <div class="flex items-center justify-between border-t border-borderColor pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-3">
                          <img src="@/assets/img/profiles/avatar-07.jpg" alt="Profile"
                            class="w-8 h-8 rounded-full object-cover">
                        </a>
                        <span class="text-success flex items-center text-sm"><i
                            class="ti ti-square-filled text-[10px] mr-2"></i>Work</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-star text-warning"></i>
                        </a>
                        <a href="javascript:void(0);" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                          <i class="ti ti-trash text-danger"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- second tab Item -->
            <div class="hidden" id="styled-dashboard" role="tabpanel">
              <div class="grid xl:grid-cols-12 md:grid-cols-12 gap-6 mb-6">
                <div
                  class="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                  <div class="p-5">
                    <div class="flex items-center justify-between">
                      <span
                        class="py-1 px-2 text-xs leading-none font-semibold rounded text-success border border-success flex items-center"><i
                          class="ti ti-circle-filled text-[6px] me-1"></i>High</span>
                      <div>
                        <a href="javascript:void(0);"
                          class="size-1 rounded-full bg-white inline-flex items-center justify-center"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown13">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="grid-dropdown13" class="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                          style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-664.8px, 296px, 0px);"
                          data-popper-placement="bottom-end">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit me-1"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash me-1"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                class="ti ti-star me-1"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye me-1"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="my-4">
                      <h6 class="truncate mb-1"><a href="javascript:void(0);">Backup Files EOD</a></h6>
                      <p class="mb-4 flex items-center text-gray-700"><i class="ti ti-calendar mr-1"></i>20 Jan 2024</p>
                      <p class="text-gray-600">Project files should be took backup before end of the day.</p>
                    </div>
                    <div class="flex items-center justify-between border-t pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-md mr-2">
                          <img src="@/assets/img/profiles/avatar-05.jpg" alt="Profile" class="w-8 h-8 rounded-full">
                        </a>
                        <span class="text-info flex items-center"><i
                            class="ti ti-square-filled text-[10px] mr-1"></i>Personal</span>
                      </div>
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-2">
                          <span><i class="ti ti-star text-warning"></i></span>
                        </a>
                        <a href="javascript:void(0);">
                          <span><i class="ti ti-trash text-danger"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                  <div class="p-5">
                    <div class="flex items-center justify-between">
                      <span
                        class="py-1 px-2 text-xs leading-none font-semibold rounded text-danger border border-danger flex items-center"><i
                          class="ti ti-circle-filled text-[6px] me-1"></i>Medium</span>
                      <div>
                        <a href="javascript:void(0);"
                          class="size-1 rounded-full bg-white inline-flex items-center justify-center"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown14">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="grid-dropdown14" class="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                          style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-664.8px, 296px, 0px);"
                          data-popper-placement="bottom-end">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit me-1"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash me-1"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                class="ti ti-star me-1"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye me-1"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="my-4">
                      <h6 class="truncate mb-1"><a href="javascript:void(0);">Download Server Logs</a></h6>
                      <p class="mb-4 flex items-center text-gray-700"><i class="ti ti-calendar mr-1"></i>25 Jan 2024</p>
                      <p class="text-gray-600">Server log is a text document that contains a record of all activity.</p>
                    </div>
                    <div class="flex items-center justify-between border-t pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-md mr-2">
                          <img src="@/assets/img/profiles/avatar-06.jpg" alt="Profile" class="w-8 h-8 rounded-full">
                        </a>
                        <span class="text-danger flex items-center"><i
                            class="ti ti-square-filled text-[10px] mr-1"></i>Work</span>
                      </div>
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-2">
                          <span><i class="ti ti-star text-warning"></i></span>
                        </a>
                        <a href="javascript:void(0);">
                          <span><i class="ti ti-trash text-danger"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                  <div class="p-5">
                    <div class="flex items-center justify-between">
                      <span
                        class="py-1 px-2 text-xs leading-none font-semibold rounded text-warning border border-warning flex items-center"><i
                          class="ti ti-circle-filled text-[6px] me-1"></i>Medium</span>
                      <div>
                        <a href="javascript:void(0);"
                          class="size-1 rounded-full bg-white inline-flex items-center justify-center"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown15">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="grid-dropdown15" class="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                          style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-664.8px, 296px, 0px);"
                          data-popper-placement="bottom-end">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit me-1"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash me-1"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                class="ti ti-star me-1"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye me-1"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="my-4">
                      <h6 class="truncate mb-1"><a href="javascript:void(0);">Team meet at Starbucks</a></h6>
                      <p class="mb-4 flex items-center text-gray-700"><i class="ti ti-calendar mr-1"></i>26 Jan 2024</p>
                      <p class="text-gray-600">Meeting all teamets at Starbucks for identifying them all.</p>
                    </div>
                    <div class="flex items-center justify-between border-t pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-md mr-2">
                          <img src="@/assets/img/profiles/avatar-07.jpg" alt="Profile" class="w-8 h-8 rounded-full">
                        </a>
                        <span class="text-warning flex items-center"><i
                            class="ti ti-square-filled text-[10px] mr-1"></i>Social</span>
                      </div>
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-2">
                          <span><i class="ti ti-star text-warning"></i></span>
                        </a>
                        <a href="javascript:void(0);">
                          <span><i class="ti ti-trash text-danger"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                  <div class="p-5">
                    <div class="flex items-center justify-between">
                      <span
                        class="py-1 px-2 text-xs leading-none font-semibold rounded text-success border border-success flex items-center"><i
                          class="ti ti-circle-filled text-[6px] me-1"></i>High</span>
                      <div>
                        <a href="javascript:void(0);"
                          class="size-1 rounded-full bg-white inline-flex items-center justify-center"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown16">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="grid-dropdown16" class="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                          style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-664.8px, 296px, 0px);"
                          data-popper-placement="bottom-end">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit me-1"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash me-1"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                class="ti ti-star me-1"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye me-1"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="my-4">
                      <h6 class="truncate mb-1"><a href="javascript:void(0);">Create a compost pile</a></h6>
                      <p class="mb-4 flex items-center text-gray-700"><i class="ti ti-calendar mr-1"></i>27 Jan 2024</p>
                      <p class="text-gray-600">Compost pile refers to fruit and vegetable scraps, used tea, coffee..</p>
                    </div>
                    <div class="flex items-center justify-between border-t pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-md mr-2">
                          <img src="@/assets/img/profiles/avatar-08.jpg" alt="Profile" class="w-8 h-8 rounded-full">
                        </a>
                        <span class="text-warning flex items-center"><i
                            class="ti ti-square-filled text-[10px] mr-1"></i>Social</span>
                      </div>
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-2">
                          <span><i class="ti ti-star text-warning"></i></span>
                        </a>
                        <a href="javascript:void(0);">
                          <span><i class="ti ti-trash text-danger"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                  <div class="p-5">
                    <div class="flex items-center justify-between">
                      <span
                        class="py-1 px-2 text-xs leading-none font-semibold rounded text-danger border border-danger flex items-center"><i
                          class="ti ti-circle-filled text-[6px] me-1"></i>Low</span>
                      <div>
                        <a href="javascript:void(0);"
                          class="size-1 rounded-full bg-white inline-flex items-center justify-center"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown17">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="grid-dropdown17" class="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                          style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-664.8px, 296px, 0px);"
                          data-popper-placement="bottom-end">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit me-1"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash me-1"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                class="ti ti-star me-1"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye me-1"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="my-4">
                      <h6 class="truncate mb-1"><a href="javascript:void(0);">Take a hike at a local park</a></h6>
                      <p class="mb-4 flex items-center text-gray-700"><i class="ti ti-calendar mr-1"></i>28 Jan 2024</p>
                      <p class="text-gray-600">Hiking involves a long energetic walk in a natural environment.</p>
                    </div>
                    <div class="flex items-center justify-between border-t pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-md mr-2">
                          <img src="@/assets/img/profiles/avatar-09.jpg" alt="Profile" class="w-8 h-8 rounded-full">
                        </a>
                        <span class="text-info flex items-center"><i
                            class="ti ti-square-filled text-[10px] mr-1"></i>Personal</span>
                      </div>
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-2">
                          <span><i class="ti ti-star text-warning"></i></span>
                        </a>
                        <a href="javascript:void(0);">
                          <span><i class="ti ti-trash text-danger"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                  <div class="p-5">
                    <div class="flex items-center justify-between">
                      <span
                        class="py-1 px-2 text-xs leading-none font-semibold rounded text-info border border-info flex items-center"><i
                          class="ti ti-circle-filled text-[6px] me-1"></i>Medium</span>
                      <div>
                        <a href="javascript:void(0);"
                          class="size-1 rounded-full bg-white inline-flex items-center justify-center"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown18">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="grid-dropdown18" class="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                          style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-664.8px, 296px, 0px);"
                          data-popper-placement="bottom-end">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit me-1"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash me-1"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                class="ti ti-star me-1"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye me-1"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="my-4">
                      <h6 class="truncate mb-1"><a href="javascript:void(0);">Research a topic interested</a></h6>
                      <p class="mb-4 flex items-center text-gray-700"><i class="ti ti-calendar mr-1"></i>28 Jan 2024</p>
                      <p class="text-gray-600">Research a topic interested by listen actively and attentively.</p>
                    </div>
                    <div class="flex items-center justify-between border-t pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-md mr-2">
                          <img src="@/assets/img/profiles/avatar-10.jpg" alt="Profile" class="w-8 h-8 rounded-full">
                        </a>
                        <span class="text-success flex items-center"><i
                            class="ti ti-square-filled text-[10px] mr-1"></i>Work</span>
                      </div>
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-2">
                          <span><i class="ti ti-star text-warning"></i></span>
                        </a>
                        <a href="javascript:void(0);">
                          <span><i class="ti ti-trash text-danger"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- third tab Item -->
            <div class="hidden" id="styled-settings" role="tabpanel">
              <div class="grid xl:grid-cols-12 md:grid-cols-12 gap-6 mb-3">
                <div class="xl:col-span-12 md:col-span-12 w-full flex items-center justify-end">
                  <a href="#" class="bg-danger text-white py-2 px-4 rounded-md flex items-center font-medium">
                    <span class="mr-2">
                      <i class="ti ti-trash text-md"></i>
                    </span>
                    Restore all
                  </a>
                </div>
              </div>
              <div class="grid xl:grid-cols-12 md:grid-cols-12 gap-6 mb-6">
                <div
                  class="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                  <div class="p-5">
                    <div class="flex items-center justify-between">
                      <span
                        class="py-1 px-2 text-xs leading-none font-semibold rounded text-success border border-success flex items-center"><i
                          class="ti ti-circle-filled text-[6px] me-1"></i>High</span>
                      <div>
                        <a href="javascript:void(0);"
                          class="size-1 rounded-full bg-white inline-flex items-center justify-center"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown19">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="grid-dropdown19" class="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                          style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-664.8px, 296px, 0px);"
                          data-popper-placement="bottom-end">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit me-1"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash me-1"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                class="ti ti-star me-1"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye me-1"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="my-4">
                      <h6 class="truncate mb-1"><a href="javascript:void(0);">Create a compost pile</a></h6>
                      <p class="mb-4 flex items-center text-gray-700"><i class="ti ti-calendar mr-1"></i>27 Jan 2024</p>
                      <p class="text-gray-600">Compost pile refers to fruit and vegetable scraps, used tea, coffee..</p>
                    </div>
                    <div class="flex items-center justify-between border-t pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-md mr-2">
                          <img src="@/assets/img/profiles/avatar-08.jpg" alt="Profile" class="w-8 h-8 rounded-full">
                        </a>
                        <span class="text-warning flex items-center"><i
                            class="ti ti-square-filled text-[10px] mr-1"></i>Social</span>
                      </div>
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-2">
                          <span><i class="ti ti-star text-warning"></i></span>
                        </a>
                        <a href="javascript:void(0);">
                          <span><i class="ti ti-trash text-danger"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                  <div class="p-5">
                    <div class="flex items-center justify-between">
                      <span
                        class="py-1 px-2 text-xs leading-none font-semibold rounded text-danger border border-danger flex items-center"><i
                          class="ti ti-circle-filled text-[6px] me-1"></i>Low</span>
                      <div>
                        <a href="javascript:void(0);"
                          class="size-1 rounded-full bg-white inline-flex items-center justify-center"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown20">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="grid-dropdown20" class="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                          style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-664.8px, 296px, 0px);"
                          data-popper-placement="bottom-end">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit me-1"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash me-1"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                class="ti ti-star me-1"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye me-1"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="my-4">
                      <h5 class="truncate mb-1"><a href="javascript:void(0);">Take a hike at a local park</a></h5>
                      <p class="mb-4 flex items-center text-gray-700"><i class="ti ti-calendar mr-1"></i>28 Jan 2024</p>
                      <p class="text-gray-600">Hiking involves a long energetic walk in a natural environment.</p>
                    </div>
                    <div class="flex items-center justify-between border-t pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-md mr-2">
                          <img src="@/assets/img/profiles/avatar-09.jpg" alt="Profile" class="w-8 h-8 rounded-full">
                        </a>
                        <span class="text-info flex items-center"><i
                            class="ti ti-square-filled text-[10px] mr-1"></i>Personal</span>
                      </div>
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-2">
                          <span><i class="ti ti-star text-warning"></i></span>
                        </a>
                        <a href="javascript:void(0);">
                          <span><i class="ti ti-trash text-danger"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                  <div class="p-5">
                    <div class="flex items-center justify-between">
                      <span
                        class="py-1 px-2 text-xs leading-none font-semibold rounded text-info border border-info flex items-center"><i
                          class="ti ti-circle-filled text-[6px] me-1"></i>Medium</span>
                      <div>
                        <a href="javascript:void(0);"
                          class="size-1 rounded-full bg-white inline-flex items-center justify-center"
                          data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown21">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul id="grid-dropdown21" class="hidden p-4 border rounded bg-white shadow-lg w-40 z-[1]">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-target="edit_notes" data-modal-toggle="edit_notes"><i
                                class="ti ti-edit me-1"></i>Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="delete_modal" data-modal-target="delete_modal"><i
                                class="ti ti-trash me-1"></i>Delete </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                class="ti ti-star me-1"></i>Not Important </a>
                          </li>
                          <li>
                            <a href="#"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-toggle="view_notes" data-modal-target="view_notes"><i
                                class="ti ti-eye me-1"></i>View </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="my-4">
                      <h5 class="truncate mb-1"><a href="javascript:void(0);">Research a topic interested</a></h5>
                      <p class="mb-4 flex items-center text-gray-700"><i class="ti ti-calendar mr-1"></i>28 Jan 2024</p>
                      <p class="text-gray-600">Research a topic interested by listen actively and attentively.</p>
                    </div>
                    <div class="flex items-center justify-between border-t pt-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-md mr-2">
                          <img src="@/assets/img/profiles/avatar-10.jpg" alt="Profile" class="w-8 h-8 rounded-full">
                        </a>
                        <span class="text-success flex items-center"><i
                            class="ti ti-square-filled text-[10px] mr-1"></i>Work</span>
                      </div>
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="mr-2">
                          <span><i class="ti ti-star text-warning"></i></span>
                        </a>
                        <a href="javascript:void(0);">
                          <span><i class="ti ti-trash text-danger"></i></span>
                        </a>
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

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->
  </div>
  <!-- /Page Wrapper -->

  <!-- start add notes  modal -->
  <div id="add_new_notes"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Add New Notes</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="add_new_notes">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Note Title</label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <div class="flex items-center justify-between">
                    <label class="form-label">Assignee</label>
                  </div>
                  <vue3-select
                    v-model="selected"
                    :options="AssigSele"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Tag</label>
                  <input
                    class="form-control"
                    placeholder="Add new"
                    type="text"
                    data-choices
                    data-choices-limit="3"
                    data-choices-removeItem
                    name="Label"
                  />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Priority</label>
                  <vue3-select
                    v-model="selectedOne"
                    :options="PrioritySele"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Due Date</label>
                  <div class="input-group w-auto input-group-flat">
                    <a-date-picker
                      v-model="valueOne"
                      class="form-control datetimepicker"
                      placeholder="20/09/2025"
                    />
                    <span class="input-group-text">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue3-select
                    v-model="selectedTwo"
                    :options="StatuSele"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Descriptions</label>
                  <div class="editor pages-editor ql-container ql-snow">
                    <div ref="editorRefone" class="quill-editor"></div>
                  </div>
                  <p class="text-[12px]">Maximum 60 Characters</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="add_new_notes" class="btn btn-light">Cancel</button>
          <button type="button" class="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end add new modal -->

  <!-- start edit notes  modal -->
  <div id="edit_notes"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Edit Notes</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="edit_notes">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Note Title</label>
                  <input type="text" class="form-control" placeholder="Team meet at Starbucks">
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <div class="flex items-center justify-between">
                    <label class="form-label">Assignee</label>
                  </div>
                  <vue3-select
                    v-model="selectedThree"
                    :options="AssigSeleEdit"
                    placeholder="Kathleen"
                  />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Tag</label>
                  <vue3-tags-input
                    class="input-tags form-control"
                    placeholder=""
                    type="text"
                    data-role="tagsinput"
                    name="Label"
                    value="Tag1"
                    :tags="tags2"
                  />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Priority</label>
                  <vue3-select
                    v-model="selectedFour"
                    :options="PrioritySeleEdit"
                    placeholder="Medium"
                  />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Due Date<span class="text-danger">*</span></label>
                  <div class="input-group w-auto input-group-flat">
                    <a-date-picker
                      v-model="valueOne"
                      class="form-control datetimepicker"
                      placeholder="20/09/2025"
                    />
                    <span class="input-group-text">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Status<span class="text-danger">*</span></label>
                  <vue3-select
                    v-model="selectedFive"
                    :options="StatuSeleEdit"
                    placeholder="Active"
                  />
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Descriptions</label>
                  <div class="editor pages-editor ql-container ql-snow">
                    <div ref="editorRefEdit" class="quill-editor"></div>
                  </div>
                  <p class="text-[12px]">Maximum 60 Characters</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="edit_notes" class="btn btn-light">Cancel</button>
          <button type="button" class="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end edit new modal -->

  <!-- start view notes  modal -->
  <div id="view_notes"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h6 class="font-bold">Notes</h6>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="view_notes">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <h4 class="mb-2">Meet Lisa to discuss project details</h4>
            <p class="mb-3">Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking
              for pleasure developed in Europe during the eighteenth century. Religious pilgrimages have existed much
              longer but they involve walking long distances for a spiritual purpose associated with specific religions
              and also we achieve inner peace while we hike at a local park.</p>
            <span
              class="py-1 px-2 text-xs leading-none font-semibold rounded text-danger border border-danger inline-flex items-center"><i
                class="ti ti-circle-filled text-[6px] me-1"></i>High</span>
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="view_notes" class="btn btn-primary">Close</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end view new modal -->

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
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full" data-modal-hide="delete_modal">Yes, Delete</a>
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
import { ref } from "vue";
const valueOne = ref(new Date());
export default {
  data() {
    return {
      tags2: ["Tags"],
      valueOne,
      content: "",
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      StatuSele: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      PrioritySele: [
        { label: "Select", value: "Select" },
        { label: "Medium", value: "Medium" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
      ],
      AssigSele: [
        { label: "Choose", value: "Choose" },
        { label: "Kathleen", value: "Kathleen" },
        { label: "Gifford", value: "Gifford" },
      ],
      StatuSeleEdit: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      PrioritySeleEdit: [
        { label: "Select", value: "Select" },
        { label: "Medium", value: "Medium" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
      ],
      AssigSeleEdit: [
        { label: "Choose", value: "Choose" },
        { label: "Kathleen", value: "Kathleen" },
        { label: "Gifford", value: "Gifford" },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initQuill();
    });
    initFlowbite();
  },
  methods: {
    initQuill() {
      // Check if refs are available before initializing Quill
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
      if (this.$refs.editorRefEdit) {
        const quillEdit = new Quill(this.$refs.editorRefEdit, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          },
        });

        quillEdit.on("text-change", () => {
          this.content = quillEdit.root.innerHTML;
        });
      }
    },
    toggleHeader() {
      // Toggle the active class on the button
      this.$el.querySelector('#collapse-header').classList.toggle('active');
      // Toggle the header-collapse class on body
      document.body.classList.toggle('header-collapse');
    },
  },
};
</script>
