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
            Permission
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">152</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Permission</li>
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

          <h6>Role Name : <span class="text-danger">Admin</span></h6>

          <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
            <input type="checkbox"
              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2" id="select-all2" v-model="selectAll"
              @change="toggleAllModules">
            Allow All Modules
          </label>
        </div>
        <div class="bg-white p-4 pt-0">
          <!-- Contact List -->
          <div class="table-responsive custom-table">
            <div id="permission_list_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start "></div>
                <div class="col-start-2 justify-self-end "></div>
              </div>
              <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="col-span-2 table-responsive">
                  <table
                    class="table table-nowrap border border-borderColor dataTable min-w-full text-sm align-middle whitespace-nowrap"
                    id="permission_list">
                    <thead class="table-light">
                      <tr class="border-b border-gray-100 dark:border-gray-700/50">
                        <th
                          class="no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc dt-ordering-asc"
                          data-dt-column="0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="
                       : Activate to invert sorting" tabindex="0"><span class="dt-column-title" role="button">
                            <div class="form-check form-check-md">
                              <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox" id="select-all" v-model="selectAll"
                                @change="toggleAllModules">
                            </div>
                          </span><span class="dt-column-order"></span></th>
                        <th
                          class="no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          data-dt-column="1" rowspan="1" colspan="1" aria-label="Modules: Activate to sort"
                          tabindex="0"><span class="dt-column-title text-gray-900" role="button">Modules</span><span
                            class="dt-column-order"></span></th>
                        <th
                          class="no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          data-dt-column="2" rowspan="1" colspan="1" aria-label="Sub Modules: Activate to sort"
                          tabindex="0"><span class="dt-column-title text-gray-900" role="button">Sub Modules</span><span
                            class="dt-column-order"></span></th>
                        <th
                          class="no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          data-dt-column="3" rowspan="1" colspan="1" aria-label="Create: Activate to sort" tabindex="0">
                          <span class="dt-column-title text-gray-900" role="button">Create</span><span
                            class="dt-column-order"></span>
                        </th>
                        <th
                          class="no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          data-dt-column="4" rowspan="1" colspan="1" aria-label="Edit: Activate to sort" tabindex="0">
                          <span class="dt-column-title text-gray-900" role="button">Edit</span><span
                            class="dt-column-order"></span>
                        </th>
                        <th
                          class="no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          data-dt-column="5" rowspan="1" colspan="1" aria-label="View: Activate to sort" tabindex="0">
                          <span class="dt-column-title text-gray-900" role="button">View</span><span
                            class="dt-column-order"></span>
                        </th>
                        <th
                          class="no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          data-dt-column="6" rowspan="1" colspan="1" aria-label="Delete: Activate to sort" tabindex="0">
                          <span class="dt-column-title text-gray-900" role="button">Delete</span><span
                            class="dt-column-order"></span>
                        </th>
                        <th
                          class="no-sort px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-asc dt-orderable-desc"
                          data-dt-column="7" rowspan="1" colspan="1" aria-label="Allow All: Activate to sort"
                          tabindex="0"><span class="dt-column-title text-gray-900" role="button">Allow All</span><span
                            class="dt-column-order"></span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(module, idx) in modules" :key="module.name">
                        <td class="p-3 sorting_1">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox" v-model="module.checked" @change="syncSelectAll"></div>
                        </td>
                        <td class="p-3">{{ module.name }}</td>
                        <td class="p-3">{{ module.sub }}</td>
                        <td class="p-3">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox" v-model="module.create"></div>
                        </td>
                        <td class="p-3">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox" v-model="module.edit"></div>
                        </td>
                        <td class="p-3">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox" v-model="module.view"></div>
                        </td>
                        <td class="p-3">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox" v-model="module.delete"></div>
                        </td>
                        <td class="p-3">
                          <div class="form-check form-check-md"><input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              type="checkbox" v-model="module.allowAll"></div>
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
                <div class="dt-length"><label for="dt-length-0">Show <select name="permission_list_length"
                      aria-controls="permission_list"
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
                        aria-controls="permission_list" aria-disabled="true" aria-label="First" data-dt-idx="first"
                        tabindex="-1">«</a><a
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 bg-white dark:bg-gray-800 text-gray-300 dark:text-gray-600 previous"
                        aria-controls="permission_list" aria-disabled="true" aria-label="Previous"
                        data-dt-idx="previous" tabindex="-1"><i class="ti ti-chevron-left"></i> </a><a href="#"
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 font-semibold bg-gray-100 dark:bg-gray-700/75 text-gray-800 hover:text-gray-900 hover:border-gray-300 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40"
                        aria-controls="permission_list" aria-current="page" data-dt-idx="0">1</a><a
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 bg-white dark:bg-gray-800 text-gray-300 dark:text-gray-600 next"
                        aria-controls="permission_list" aria-disabled="true" aria-label="Next" data-dt-idx="next"
                        tabindex="-1"><i class="ti ti-chevron-right"></i> </a><a
                        class="relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 border-gray-200 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:active:border-gray-700 bg-white dark:bg-gray-800 text-gray-300 dark:text-gray-600 last rounded-r-lg"
                        aria-controls="permission_list" aria-disabled="true" aria-label="Last" data-dt-idx="last"
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
</template>
<script>
export default {
  data() {
    return {
      selectAll: false,
      modules: [
        {
          name: "Dashboard",
          sub: "Dashboard",
          checked: false,
          create: false,
          edit: false,
          view: false,
          delete: false,
          allowAll: false,
        },
        {
          name: "Contacts",
          sub: "Contacts",
          checked: false,
          create: false,
          edit: false,
          view: false,
          delete: false,
          allowAll: false,
        },
        {
          name: "Companies",
          sub: "Companies",
          checked: false,
          create: false,
          edit: false,
          view: false,
          delete: false,
          allowAll: false,
        },
        {
          name: "Leads",
          sub: "Leads",
          checked: false,
          create: false,
          edit: false,
          view: false,
          delete: false,
          allowAll: false,
        },
        {
          name: "Deals",
          sub: "Deals",
          checked: false,
          create: false,
          edit: false,
          view: false,
          delete: false,
          allowAll: false,
        },
        {
          name: "Pipelines",
          sub: "Pipelines",
          checked: false,
          create: false,
          edit: false,
          view: false,
          delete: false,
          allowAll: false,
        },
        {
          name: "Compaign",
          sub: "Compaign",
          checked: false,
          create: false,
          edit: false,
          view: false,
          delete: false,
          allowAll: false,
        },
        {
          name: "Projects",
          sub: "Projects",
          checked: false,
          create: false,
          edit: false,
          view: false,
          delete: false,
          allowAll: false,
        },
        {
          name: "Tasks",
          sub: "Tasks",
          checked: false,
          create: false,
          edit: false,
          view: false,
          delete: false,
          allowAll: false,
        },
        {
          name: "Activity",
          sub: "Activity",
          checked: false,
          create: false,
          edit: false,
          view: false,
          delete: false,
          allowAll: false,
        },
      ],
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    toggleAllModules() {
      this.modules.forEach((m) => {
        m.checked = this.selectAll;
        m.create = this.selectAll;
        m.edit = this.selectAll;
        m.view = this.selectAll;
        m.delete = this.selectAll;
        m.allowAll = this.selectAll;
      });
    },
    syncSelectAll() {
      this.selectAll = this.modules.every(
        (m) => m.checked && m.create && m.edit && m.view && m.delete && m.allowAll
      );
    },
  },
};
</script>
