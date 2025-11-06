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
                <router-link to="/website-settings/language-settings"
                  class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition">
                  <i class="ti ti-circle-arrow-left me-1"></i>Back to Translations
                </router-link>
                <!-- Dropdown -->
                <div>
                  <a href="javascript:void(0);"
                    class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="lang-dropdown">
                    <img src="@/assets/img/flags/us.svg" class="me-2" alt="Img" width="16" height="16">English<i
                      class="ti ti-chevron-down ml-1"></i>
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
                <div>
                  <span class="block mb-1">Progress</span>
                  <div class="pipeline-progress flex items-center">
                    <div class="h-1 rounded-[50px] w-[63px] bg-light flex-shrink-0 me-3">
                      <div class="h-1 rounded-[50px] w-[50px] bg-warning"></div>
                    </div>
                    <span class="font-medium text-dark">80%</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Contact List -->
            <div class="table-responsive custom-table mb-4">
              <div id="language-web_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div class="justify-self-start "></div>
                  <div class="col-start-2 justify-self-end "></div>
                </div>
                <div class="grid grid-cols-1 gap-4 mb-4">
                  <div class="col-span-2 table-responsive">
                    <table
                      class="table table-nowrap border border-borderColor dataTable min-w-full text-sm align-middle whitespace-nowrap"
                      id="language-web">
                      <thead class="table-light">
                        <tr class="border-b border-gray-100 dark:border-gray-700/50">
                          <th
                            class="p-3 text-dark text-left px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc dt-ordering-desc"
                            data-dt-column="0" rowspan="1" colspan="1" aria-sort="descending"
                            aria-label="Medium: Activate to remove sorting" tabindex="0"><span class="dt-column-title text-gray-900"
                              role="button">Medium</span><span class="dt-column-order"></span></th>
                          <th
                            class="p-3 text-dark text-left px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                            data-dt-column="1" rowspan="1" colspan="1" aria-label="File: Activate to sort" tabindex="0">
                            <span class="dt-column-title text-gray-900" role="button">File</span><span class="dt-column-order"></span>
                          </th>
                          <th
                            class="p-3 text-dark text-left px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold dark:text-gray-50 dark:bg-gray-700/25 dt-type-numeric dt-orderable-asc dt-orderable-desc"
                            data-dt-column="2" rowspan="1" colspan="1" aria-label="Total: Activate to sort"
                            tabindex="0"><span class="dt-column-title text-gray-900" role="button">Total</span><span
                              class="dt-column-order"></span></th>
                          <th
                            class="p-3 text-dark text-left px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold dark:text-gray-50 dark:bg-gray-700/25 dt-type-numeric dt-orderable-asc dt-orderable-desc"
                            data-dt-column="3" rowspan="1" colspan="1" aria-label="Done: Activate to sort" tabindex="0">
                            <span class="dt-column-title text-gray-900" role="button">Done</span><span class="dt-column-order"></span>
                          </th>
                          <th
                            class="p-3 text-dark text-left px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold dark:text-gray-50 dark:bg-gray-700/25 dt-type-numeric dt-orderable-asc dt-orderable-desc"
                            data-dt-column="4" rowspan="1" colspan="1" aria-label="Progress: Activate to sort"
                            tabindex="0"><span class="dt-column-title text-gray-900" role="button">Progress</span><span
                              class="dt-column-order"></span></th>
                          <th
                            class="p-3 text-dark text-left px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                            data-dt-column="5" rowspan="1" colspan="1" aria-label="Action: Activate to sort"
                            tabindex="0"><span class="dt-column-title text-gray-900" role="button">Action</span><span
                              class="dt-column-order"></span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3 sorting_1">Web</td>
                          <td class="p-3"><span class="black-text">Projects</span></td>
                          <td class="dt-type-numeric p-3">1892</td>
                          <td class="dt-type-numeric p-3">387</td>
                          <td class="dt-type-numeric p-3">
                            <div class="pipeline-progress flex items-center">
                              <div class="h-1 rounded-[50px] w-[63px] flex-shrink-0 me-3">
                                <div class="h-1 rounded-[50px] bg-info"></div>
                              </div><span class="font-normal text-default">40%</span>
                            </div>
                          </td>
                          <td class="p-3"><router-link to="/website-settings/language-web-edit"
                              class="w-6 h-6 border border-borderColor rounded flex items-center justify-center text-[12px] hover:bg-primary-100 hover:text-primary transition-all"><i
                                class="ti ti-edit text-black"></i></router-link></td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3 sorting_1">Web</td>
                          <td class="p-3"><span class="black-text">Companies</span></td>
                          <td class="dt-type-numeric p-3">2590</td>
                          <td class="dt-type-numeric p-3">250</td>
                          <td class="dt-type-numeric p-3">
                            <div class="pipeline-progress flex items-center">
                              <div class="h-1 rounded-[50px] w-[63px] flex-shrink-0 me-3">
                                <div class="h-1 rounded-[50px] bg-danger"></div>
                              </div><span class="font-normal text-default">5%</span>
                            </div>
                          </td>
                          <td class="p-3"><router-link to="/website-settings/language-web-edit"
                              class="w-6 h-6 border border-borderColor rounded flex items-center justify-center text-[12px] hover:bg-primary-100 hover:text-primary transition-all"><i
                                class="ti ti-edit text-black"></i></router-link></td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3 sorting_1">Web</td>
                          <td class="p-3"><span class="black-text">Customers</span></td>
                          <td class="dt-type-numeric p-3">4815</td>
                          <td class="dt-type-numeric p-3">4815</td>
                          <td class="dt-type-numeric p-3">
                            <div class="pipeline-progress flex items-center">
                              <div class="h-1 rounded-[50px] w-[63px] flex-shrink-0 me-3">
                                <div class="h-1 rounded-[50px] bg-success"></div>
                              </div><span class="font-normal text-default">100%</span>
                            </div>
                          </td>
                          <td class="p-3"><router-link to="/website-settings/language-web-edit"
                              class="w-6 h-6 border border-borderColor rounded flex items-center justify-center text-[12px] hover:bg-primary-100 hover:text-primary transition-all"><i
                                class="ti ti-edit text-black"></i></router-link></td>
                        </tr>
                        <tr class="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td class="p-3 sorting_1">Web</td>
                          <td class="p-3"><span class="black-text">Contacts</span></td>
                          <td class="dt-type-numeric p-3">3481</td>
                          <td class="dt-type-numeric p-3">2861</td>
                          <td class="dt-type-numeric p-3">
                            <div class="pipeline-progress flex items-center">
                              <div class="h-1 rounded-[50px] w-[63px] flex-shrink-0 me-3">
                                <div class="h-1 rounded-[50px] bg-warning"></div>
                              </div><span class="font-normal text-default">80%</span>
                            </div>
                          </td>
                          <td class="p-3"><router-link to="/website-settings/language-web-edit"
                              class="w-6 h-6 border border-borderColor rounded flex items-center justify-center text-[12px] hover:bg-primary-100 hover:text-primary transition-all"><i
                                class="ti ti-edit text-black"></i></router-link></td>
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
                <div class="datatable-length"></div>
              </div>
              <div class="w-full md:w-1/2 mt-4 md:mt-0 text-end">
                <div class="datatable-paginate"></div>
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
</template>
<script>
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
};
</script>
