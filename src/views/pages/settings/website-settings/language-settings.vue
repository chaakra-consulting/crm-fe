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
            Settings
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Settings</li>
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
            title="Collapse" id="collapse-header" @click="toggleHeader">
            <i class="ti ti-transition-top"></i>
          </button>
        </div>
      </div>
      <!-- End Page Header -->

      <settings-tabs></settings-tabs>

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
        <website-sidebar></website-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor mb-3 pb-3 flex items-center justify-between flex-wrap gap-y-3">
              <h5 class="mb-0 text-[17px]">Language</h5>
              <div class="flex items-center flex-wrap gap-3">
                <!-- Dropdown -->
                <div>
                  <a href="javascript:void(0);"
                    class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="lang-dropdown">
                    <i class="ti ti-language me-2"></i>Language<i class="ti ti-chevron-down ml-1"></i>
                  </a>
                  <ul id="lang-dropdown"
                    class="hidden p-2 z-[1] w-[150px] border border-borderColor rounded bg-white shadow-lg">
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><img
                          src="@/assets/img/flags/us.svg" class="me-2" alt="Img" width="16" height="16">English</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><img
                          src="@/assets/img/flags/de.svg" class="me-2" alt="Img" width="16" height="16">German</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><img
                          src="@/assets/img/flags/ae.svg" alt="Img" class="me-2" width="16" height="16">Arabic</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><img
                          src="@/assets/img/flags/fr.svg" alt="Img" class="me-2" width="16" height="16">French</a>
                    </li>
                  </ul>
                </div>
                <a href="javascript:void(0);"
                  class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
                  data-modal-target="add_lang" data-modal-toggle="add_lang">
                  <i class="ti ti-square-rounded-plus-filled"></i>
                  Add Language
                </a>
              </div>
            </div>
            <!-- Contact List -->
            <div class="table-responsive custom-table mb-4">
              <table class="table table-nowrap w-full">
                <thead class="table-light">
                  <tr>
                    <th class="p-3 text-dark text-left">Language</th>
                    <th class="p-3 text-dark text-left">Code</th>
                    <th class="p-3 text-dark text-left">RTL</th>
                    <th class="p-3 text-dark text-left">Total</th>
                    <th class="p-3 text-dark text-left">Done</th>
                    <th class="p-3 text-dark text-left">Progress</th>
                    <th class="p-3 text-dark text-left">Status</th>
                    <th class="p-3 text-dark text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-3">
                      <a href="javascript:void(0);" class="flex items-center gap-2"><img src="@/assets/img/flags/us.svg"
                          alt="Img" width="16" height="16">English</a>
                    </td>
                    <td class="p-3">en</td>
                    <td class="p-3">
                      <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked="">
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </td>
                    <td class="p-3">3481</td>
                    <td class="p-3">2861</td>
                    <td class="p-3">
                      <div class="pipeline-progress flex items-center">
                        <div class="h-1 rounded-[50px] w-[63px] bg-light flex-shrink-0 me-3">
                          <div class="h-1 rounded-[50px] w-[50px] bg-warning"></div>
                        </div>
                        <span class="font-medium text-dark">80%</span>
                      </div>
                    </td>
                    <td class="p-3">
                      <a href="javascript:void(0);"
                        class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Connected</a>
                    </td>
                    <td class="p-3">
                      <div class="flex items-center gap-2 ">
                        <div>
                          <router-link to="/website-settings/language-web"
                            class="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2">Web</router-link>
                          <a href="javascript:void(0);"
                            class="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2">App</a>
                          <a href="javascript:void(0);"
                            class="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2">Admin</a>
                        </div>
                        <div class="dropdown relative table-action" ref="el => dropdownRefs[0] = el">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(0, $event)"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div
                            class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                            :class="{ 'hidden': openDropdown !== 0 }">
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="edit_modal"
                              data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">
                      <a href="javascript:void(0);" class="flex items-center gap-2"><img src="@/assets/img/flags/de.svg"
                          alt="Img" width="16" height="16">German</a>
                    </td>
                    <td class="p-3">de</td>
                    <td class="p-3">
                      <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked="">
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </td>
                    <td class="p-3">4815</td>
                    <td class="p-3">4815</td>
                    <td class="p-3">
                      <div class="pipeline-progress flex items-center">
                        <div class="h-1 rounded-[50px] w-[63px] flex-shrink-0 me-3">
                          <div class="h-1 rounded-[50px] bg-success"></div>
                        </div>
                        <span class="font-medium text-dark">100%</span>
                      </div>
                    </td>
                    <td class="p-3">
                      <a href="javascript:void(0);"
                        class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Connected</a>
                    </td>
                    <td class="p-3">
                      <div class="flex items-center gap-2 ">
                        <div>
                          <router-link to="/website-settings/language-web"
                            class="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2">Web</router-link>
                          <a href="javascript:void(0);"
                            class="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2">App</a>
                          <a href="javascript:void(0);"
                            class="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2">Admin</a>
                        </div>
                        <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(1, $event)"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div
                            class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                            :class="{ 'hidden': openDropdown !== 1 }">
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="edit_modal"
                              data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">
                      <a href="javascript:void(0);" class="flex items-center gap-2"><img src="@/assets/img/flags/ae.svg"
                          alt="Img" width="16" height="16">Arabic</a>
                    </td>
                    <td class="p-3">ar</td>
                    <td class="p-3">
                      <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked="">
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </td>
                    <td class="p-3">2590</td>
                    <td class="p-3">20</td>
                    <td class="p-3">
                      <div class="pipeline-progress flex items-center">
                        <div class="h-1 rounded-[50px] w-[63px] bg-light flex-shrink-0 me-3">
                          <div class="h-1 rounded-[50px] w-[30px] bg-danger"></div>
                        </div>
                        <span class="font-medium text-dark">50%</span>
                      </div>
                    </td>
                    <td class="p-3">
                      <a href="javascript:void(0);"
                        class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Connected</a>
                    </td>
                    <td class="p-3">
                      <div class="flex items-center gap-2 ">
                        <div>
                          <router-link to="/website-settings/language-web"
                            class="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2">Web</router-link>
                          <a href="javascript:void(0);"
                            class="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2">App</a>
                          <a href="javascript:void(0);"
                            class="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2">Admin</a>
                        </div>
                        <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(2, $event)"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div
                            class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                            :class="{ 'hidden': openDropdown !== 2 }">
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="edit_modal"
                              data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">
                      <a href="javascript:void(0);" class="flex items-center gap-2"><img src="@/assets/img/flags/fr.svg"
                          alt="Img" width="16" height="16">English</a>
                    </td>
                    <td class="p-3">fr</td>
                    <td class="p-3">
                      <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked="">
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </td>
                    <td class="p-3">1892</td>
                    <td class="p-3">387</td>
                    <td class="p-3">
                      <div class="pipeline-progress flex items-center">
                        <div class="h-1 rounded-[50px] w-[63px] bg-light flex-shrink-0 me-3">
                          <div class="h-1 rounded-[50px] w-[28px] bg-info"></div>
                        </div>
                        <span class="font-medium text-dark">40%</span>
                      </div>
                    </td>
                    <td class="p-3">
                      <a href="javascript:void(0);"
                        class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success">Connected</a>
                    </td>
                    <td class="p-3">
                      <div class="flex items-center gap-2 ">
                        <div>
                          <router-link to="/website-settings/language-web"
                            class="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2">Web</router-link>
                          <a href="javascript:void(0);"
                            class="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2">App</a>
                          <a href="javascript:void(0);"
                            class="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2">Admin</a>
                        </div>
                        <div class="dropdown relative table-action" ref="el => dropdownRefs[3] = el">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(3, $event)"><i
                              class="ti ti-dots-vertical"></i></a>
                          <div
                            class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                            :class="{ 'hidden': openDropdown !== 3 }">
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="edit_modal"
                              data-modal-toggle="edit_modal"><i class="ti ti-edit me-1"></i> Edit</a>
                            <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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

  <!-- Add Language -->
  <div id="add_lang"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add Translation</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_lang">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">Language <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Code <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-6">
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
            <button data-modal-hide="add_lang" type="button"
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
  <!-- /Add Language -->

  <!-- Edit Language -->
  <div id="edit_modal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Edit Translation</h5>
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
                <label class="form-label">Language <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="English">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Code <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="en">
              </div>
              <div class="md:col-span-6">
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
  <!-- /Edit Language -->

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
          <p class="mb-3">Are you sure you want to remove language you selected.</p>
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
import { onMounted, onUnmounted, ref } from 'vue';
import { initFlowbite } from 'flowbite';
export default {
  data() {
    return {
    };
  },
  methods: {
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
  },
  mounted() {
    initFlowbite();
  },
};
</script>

