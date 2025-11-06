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
            Deals
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Deals</li>
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
            <input type="text" placeholder="Search" v-model="searchQuery"
              class="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
          </div>
          <div class="relative">
            <button
              class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
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
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Deals Name</span>
                    </button>
                  </h2>
                  <div id="accordion-body-1" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-1" data-accordion-body>
                    <ul class="space-y-3 max-h-64 overflow-y-auto">
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Konopelski
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Adams
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Gutkowski
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Walter
                        </label>
                      </li>
                    </ul>

                    <!-- Load More -->
                    <div class="mt-4">
                      <button class="text-primary hover:underline">Load More</button>
                    </div>
                  </div>
                </div>
                <div class="mb-4">
                  <h2 id="accordion-heading-3">
                    <button type="button"
                      class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#accordion-body-3" aria-expanded="true" aria-controls="accordion-body-3">
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Owner</span>
                    </button>
                  </h2>
                  <div id="accordion-body-3" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-3" data-accordion-body>
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
                          Hendry Milner
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Guilory Berggren
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Jami Carlile
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Theresa Nelson
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Smith Cooper
                        </label>
                      </li>
                    </ul>
                    <!-- Load More -->
                    <div class="mt-4">
                      <button class="text-primary hover:underline">Load More</button>
                    </div>
                  </div>
                </div>
                <div class="mb-4">
                  <h2 id="accordion-heading-6">
                    <button type="button"
                      class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#accordion-body-6" aria-expanded="true" aria-controls="accordion-body-6">
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Status</span>
                    </button>
                  </h2>
                  <div id="accordion-body-6" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-6" data-accordion-body>
                    <ul class="space-y-3 max-h-64 overflow-y-auto">
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Won
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Lost
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          open
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
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Rating</span>
                    </button>
                  </h2>
                  <div id="accordion-body-5" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-5" data-accordion-body>
                    <ul class="space-y-3 max-h-64 overflow-y-auto">
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                          <span class="rating">
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-warning"></i>
                            <span class="ms-1">5.0</span>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                          <span class="rating">
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-default"></i>
                            <span class="ms-1">4.0</span>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                          <span class="rating">
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-default"></i>
                            <i class="ti ti-star-filled text-default"></i>
                            <span class="ms-1">3.0</span>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                          <span class="rating">
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-default"></i>
                            <i class="ti ti-star-filled text-default"></i>
                            <i class="ti ti-star-filled text-default"></i>
                            <span class="ms-1">2.0</span>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                          <span class="rating">
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-default"></i>
                            <i class="ti ti-star-filled text-default"></i>
                            <i class="ti ti-star-filled text-default"></i>
                            <i class="ti ti-star-filled text-default"></i>
                            <span class="ms-1">1.0</span>
                          </span>
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
                      <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Tags</span>
                    </button>
                  </h2>
                  <div id="accordion-body-2" class="hidden p-4 bg-light  border border-borderColor rounded"
                    aria-labelledby="accordion-heading-2" data-accordion-body>
                    <ul class="space-y-3 max-h-64 overflow-y-auto">
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Collab
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          Promotion
                        </label>
                      </li>
                      <li>
                        <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                          <input type="checkbox"
                            class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                          VIP
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
            <router-link to="/crm/deals-list" class="w-7 h-7 flex items-center justify-center rounded text-default me-1"><i
                class="ti ti-list-tree"></i></router-link>
            <router-link to="/crm/deals" class="w-7 h-7 flex items-center justify-center rounded text-white bg-teal"><i
                class="ti ti-layout-grid"></i></router-link>
          </div>
          <!-- Add New Button -->
          <a href="javascript:void(0);"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
            data-drawer-target="offcanvas_add" data-drawer-show="offcanvas_add" aria-controls="offcanvas_add"
            data-drawer-placement="right">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add Deal
          </a>
        </div>
      </div>

      <deals-kanban></deals-kanban>

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
  <deals-list-modal></deals-list-modal>
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
