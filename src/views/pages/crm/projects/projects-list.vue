<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">
    <div class="content p-5">
      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Projek
            <span
              class="ml-2 text-primary bg-primary-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-primary text-[12px]"
            >
              {{ data.length }}</span
            >
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700"
                  >Beranda</router-link
                >
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Projek</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Dropdown -->
          <div>
            <a
              href="javascript:void(0);"
              class="border border-borderColor rounded p-2 bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
              data-dropdown-toggle="export-dropdown"
            >
              <i class="ti ti-package-export me-2"></i>Export<i class="ti ti-chevron-down ml-1"></i>
            </a>
            <ul
              id="export-dropdown"
              class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
            >
              <li>
                <a
                  href="javascript:void(0);"
                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                  ><i class="ti ti-file-type-pdf me-1"></i>Export as PDF</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                  ><i class="ti ti-file-type-xls me-1"></i>Export as Excel
                </a>
              </li>
            </ul>
          </div>
          <!-- Refresh Button -->
          <button
            type="button"
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Refresh"
            @click="handleRefresh"
          >
            <i class="ti ti-refresh"></i>
          </button>
          <!-- Collapse Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Collapse"
            id="collapse-header"
            @click="toggleHeader"
          >
            <i class="ti ti-transition-top"></i>
          </button>
        </div>
      </div>
      <!-- End Page Header -->

      <div class="card">
        <div
          class="flex flex-wrap items-center justify-between gap-2 p-4 border-b border-borderColor bg-white rounded-t"
        >
          <div class="relative">
            <span
              class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none"
            >
              <i class="ti ti-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search"
              v-model="searchQuery"
              class="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
            />
          </div>
          <a
            href="javascript:void(0);"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
            @click="openCreateModal"
          >
            <i class="ti ti-square-rounded-plus-filled"></i>
            Tambah Projek
          </a>
        </div>
        <div class="bg-white p-4">
          <div class="flex items-center justify-between flex-wrap gap-y-3">
            <div class="flex items-center flex-wrap gap-y-3">
              <!-- Search Input with Icon -->
              <div class="relative">
                <input
                  type="text"
                  class="block flex-1 border border-borderColor shadow bg-white rounded-[5px] py-1.5 pr-2.5 pl-8 text-gray-900 focus:ring-0 focus:border-borderColor h-[38px] placeholder:text-gray-400 text-sm date-range bookingrange"
                  placeholder="dd/mm/yyyy - dd/mm/yyyy"
                  ref="dateRangeInput"
                />
                <span
                  class="absolute inset-y-1/2 start-[10px] flex items-center me-2.5 pointer-events-none"
                >
                  <i class="ti ti-calendar-due text-dark fs-14 me-1"></i>
                </span>
              </div>
            </div>
            <div class="flex items-center flex-wrap gap-y-3">
              <div class="me-3">
                <button
                  class="border border-borderColor rounded p-2 shadow bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="filter-dropdown"
                  data-popper="false"
                  data-dropdown-placement="bottom-start"
                >
                  <i class="ti ti-filter me-1"></i>Filter<i class="ti ti-chevron-down ml-1"></i>
                </button>
                <div
                  id="filter-dropdown"
                  class="absolute hidden border z-[1] border-borderColor rounded bg-white shadow-lg min-w-[320px] translate-x-[40px] translate-y-[10px]"
                  data-popper-placement="bottom-end"
                >
                  <div
                    class="filter-header flex items-center justify-between border-b border-borderColor p-3"
                  >
                    <h6 class="mb-0"><i class="ti ti-filter me-1"></i>Filter</h6>
                    <button
                      data-dropdown-hide="filter-dropdown"
                      class="text-dark filter-close w-6 h-6 border border-borderColor rounded-full focus:outline-none"
                      @click="closeFilterDropdown"
                    >
                      <i class="ti ti-x"></i>
                    </button>
                  </div>
                  <!-- <div id="accordionExample" data-accordion="collapse" class="p-4">
                    <div class="mb-4">
                      <h2 id="accordion-heading-1">
                        <button
                          type="button"
                          class="flex items-center justify-between w-full text-dark text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-body-1"
                        >
                          <span class="text-dark"
                            ><i class="ti ti-chevron-right me-2"></i>Name</span
                          >
                        </button>
                      </h2>
                      <div
                        id="accordion-body-1"
                        class="hidden p-4 bg-light border border-borderColor rounded"
                        aria-labelledby="accordion-heading-1"
                        data-accordion-body
                      >
                        <div class="relative mb-4">
                          <span
                            class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none"
                          >
                            <i class="ti ti-search"></i>
                          </span>
                          <input
                            type="text"
                            placeholder="Search"
                            class="pl-9 pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none placeholder:text-sm"
                            v-model="filters.ownersSearch"
                          />
                        </div>

                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li v-for="owner in visibleOwners" :key="owner.id">
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary"
                                v-model="selectedFilterOwners"
                                :value="owner.id"
                              />
                              <span>{{ owner.name }}</span>
                            </label>
                          </li>
                        </ul>

                        <div class="mt-4" v-if="visible.owners < owners.length">
                          <button class="text-primary hover:underline" @click="loadMore('owners')">
                            Load More
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h2 id="accordion-heading-2">
                        <button
                          type="button"
                          class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-2"
                          aria-expanded="true"
                          aria-controls="accordion-body-2"
                        >
                          <span class="text-dark"
                            ><i class="ti ti-chevron-right me-2"></i>Tags</span
                          >
                        </button>
                      </h2>
                      <div
                        id="accordion-body-2"
                        class="hidden p-4 bg-light border border-borderColor rounded"
                        aria-labelledby="accordion-heading-2"
                        data-accordion-body
                      >
                        <div class="relative mb-4">
                          <span
                            class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none"
                          >
                            <i class="ti ti-search"></i>
                          </span>
                          <input
                            type="text"
                            placeholder="Search"
                            class="pl-9 pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none placeholder:text-sm"
                            v-model="filters.tagsSearch"
                          />
                        </div>
                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li v-for="tag in visibleTags" :key="tag.id">
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary"
                                v-model="selectedFilterTags"
                                :value="tag.id"
                              />
                              <span class="inline-flex items-center" :class="tag.color">
                                {{ tag.name }}
                              </span>
                            </label>
                          </li>
                        </ul>

                        <div class="mt-4" v-if="visible.tags < tagsData.length">
                          <button class="text-primary hover:underline" @click="loadMore('tags')">
                            Load More
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <a
                        href="javascript:void(0);"
                        class="btn border border-borderColor text-center w-full"
                        >Reset</a
                      >
                      <a
                        href="javascript:void(0);"
                        class="btn btn-primary w-full"
                        @click="applyFilter"
                        >Filter</a
                      >
                    </div>
                  </div> -->
                </div>
              </div>
              <!-- <div
                class="flex items-center border border-borderColor shadow bg-white rounded p-1 icon-list"
              >
                <router-link
                  to="/crm/contacts-list"
                  class="w-7 h-7 flex items-center justify-center rounded text-white bg-teal me-1"
                  ><i class="ti ti-list-tree"></i
                ></router-link>
                <router-link
                  to="/crm/contacts-grid"
                  class="w-7 h-7 flex items-center justify-center rounded text-default"
                  ><i class="ti ti-layout-grid"></i
                ></router-link>
              </div> -->
            </div>
          </div>
          <!-- Contact List -->
          <div class="table-responsive custom-table">
            <div v-if="isLoading" class="flex justify-center items-center py-10 mt-20">
              <div class="spinner-grow bg-primary me-3" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <span>Memuat data...</span>
            </div>
            <div
              v-else
              id="projectslist_wrapper"
              class="dt-container dt-tailwindcss dt-empty-footer"
            >
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start"></div>
                <div class="col-start-2 justify-self-end"></div>
              </div>
              <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="col-span-2 table-responsive">
                  <a-table
                    class="table table-nowrap border border-borderColor dataTable text-sm align-middle whitespace-nowrap"
                    :columns="columns"
                    :data-source="paginatedData"
                    @change="handleTableChange"
                    row-key="id"
                    :pagination="false"
                    :scroll="{ x: tableScrollX, y: 500 }"
                    table-layout="fixed"
                  >
                    <template #bodyCell="{ column, record, index }">
                      <!-- Index -->
                      <template v-if="column.key === 'index'">
                        {{ (currentPage - 1) * pageSize + index + 1 }}
                      </template>

                      <!-- title -->
                      <template v-if="column.key === 'title'">
                        <div class="relative">
                          <!-- Text yang ter-truncate -->
                          <span
                            class="font-medium block truncate cursor-pointer"
                            style="max-width: 250px"
                            :data-popover-target="'popover-title-' + record.id"
                            data-popover-placement="top"
                          >
                            {{ record.title }}
                          </span>

                          <!-- POPOVER -->
                          <div
                            data-popover
                            :id="'popover-title-' + record.id"
                            role="tooltip"
                            class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-100 rounded-lg shadow-sm opacity-0"
                          >
                            <div class="px-3 py-2">
                              <p class="whitespace-normal text-black break-words max-w-[230px]">
                                {{ record.title }}
                              </p>
                            </div>

                            <div data-popper-arrow></div>
                          </div>
                        </div>
                      </template>

                      <!-- Kode -->
                      <template v-if="column.key === 'spk_code'">
                        <span>{{ record.spk_code }}</span>
                      </template>

                      <!-- progress -->
                      <template v-if="column.key === 'progress'">
                        <div>
                          <div class="flex items-center gap-2">
                            <div class="w-full bg-gray-200 rounded h-3 overflow-hidden">
                              <div
                                class="bg-primary h-3"
                                :style="{ width: record.progress + '%' }"
                              ></div>
                            </div>
                            <span class="text-dark font-medium text-sm">
                              {{ record.progress }}%
                            </span>
                          </div>
                        </div>
                      </template>
                      <!-- company_name -->
                      <template v-if="column.key === 'company_name'">
                        <div class="relative">
                          <span
                            class="font-medium block truncate cursor-pointer"
                            style="max-width: 200px"
                            :data-popover-target="'popover-company_name-' + record.id"
                            data-popover-placement="top"
                          >
                            {{ record.company_name }}
                          </span>
                          <!-- POPOVER -->
                          <div
                            data-popover
                            :id="'popover-company_name-' + record.id"
                            role="tooltip"
                            class="absolute z-[2000] invisible inline-block w-32 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0"
                          >
                            <div class="px-3 py-2">
                              <p class="whitespace-normal text-black break-words max-w-[230px]">
                                {{ record.company_name }}
                              </p>
                            </div>

                            <div data-popper-arrow></div>
                          </div>
                        </div>
                      </template>

                      <!-- inv_date_format -->
                      <template v-if="column.key === 'inv_date_format'">
                        <span>{{ record.inv_date_format }}</span>
                      </template>

                      <!-- inv_contract_date_format -->
                      <template v-if="column.key === 'inv_contract_date_format'">
                        <span>{{ record.inv_contract_date_format }}</span>
                      </template>

                      <template v-if="column.key === 'status'">
                        <span
                          class="inline-flex items-center py-1 px-2 rounded"
                          :class="{
                            'bg-danger text-white text-xs leading-none font-semibold':
                              record.status === 'belum',
                            'bg-warning text-white text-xs leading-none font-semibold':
                              record.status === 'proses',
                            'bg-success text-white text-xs leading-none font-semibold':
                              record.status === 'selesai',
                          }"
                        >
                          {{ record.status.charAt(0).toUpperCase() + record.status.slice(1) }}
                        </span>
                      </template>

                      <template v-if="column.key === 'action'">
                        <!-- MANAGER & MARKETING -->
                        <template v-if="canManageProject">
                          <div class="dropdown relative table-action">
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(record.id, $event)"
                              :class="{ active: openDropdown === record.id }"
                            >
                              <i class="ti ti-dots-vertical"></i>
                            </a>

                            <div
                              class="dropdown-menu absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg"
                              :class="{
                                hidden: openDropdown !== record.id,
                                block: openDropdown === record.id,
                              }"
                              style="top: 100%; right: 0"
                            >
                              <a
                                class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                @click.stop="openEditModal(record)"
                              >
                                <i class="ti ti-edit me-1"></i> Edit
                              </a>

                              <a
                                class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                @click="deleteModal(record)"
                              >
                                <i class="ti ti-trash me-1"></i> Hapus
                              </a>
                              <router-link
                                class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                :to="{ path: `/crm/projects-details/${record.id}` }"
                              >
                              <i class="ti ti-eye text-blue-light me-1"></i> Lihat
                            </router-link>
                            </div>
                          </div>
                        </template>

                        <!-- ROLE LAIN -->
                        <template v-else>
                          <router-link
                          class="dropdown-item inline-flex items-center justify-center
                                  border border-primary bg-skyblue-transparent
                                  rounded-md px-2 py-1
                                  text-primary hover:bg-primary hover:text-white
                                  transition text-xs"
                          :to="{ path: `/crm/projects-details/${record.id}` }"
                          >
                          <i class="ti ti-eye text-sm"></i>
                          </router-link>
                        </template>
                      </template>
                    </template>
                  </a-table>
                </div>
              </div>
              <BasePagination
                :currentPage="currentPage"
                :pageSize="pageSize"
                :pageSizeOptions="pageSizeOptions"
                :totalItems="filteredPages.length"
                @page-change="onPageChange"
                @page-size-change="onPageSizeChange"
              />
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start"></div>
                <div class="col-start-2 justify-self-end"></div>
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

  <component
    v-if="ProjectsCreateModal && showCreateModal"
    :is="ProjectsCreateModal"
    :isOpen="showCreateModal"
    :companies="companies"
    :employees="employees"
    @close="closeCreateModal"
    @refresh-list="fetchProjects"
  />
  <component
    v-if="ProjectsEditModal && showEditModal"
    :is="ProjectsEditModal"
    :project="selectedProject"
    :companies="companies"
    :employees="employees"
    :isOpen="showEditModal"
    @close="closeEditModal"
    @refresh-list="fetchProjects"
  />
</template>

<script>
import BasePagination from '@/components/BasePagination.vue'
import { defineAsyncComponent } from 'vue'
import { useAuthStore } from '@/stores/auth'

const allColumns = [
  {
    title: 'No',
    key: 'index',
    dataIndex: 'index',
    width: 15,
    sorter: {
      compare: (a, b) => a.index - b.index,
    },
  },
  {
    title: 'Kode SPK',
    dataIndex: 'spk_code',
    key: 'spk_code',
    width: 100,
    sorter: {
      compare: (a, b) =>
        (a.spk_code || '').toLowerCase().localeCompare((b.spk_code || '').toLowerCase()),
    },
  },
  {
    title: 'Nama',
    dataIndex: 'title',
    key: 'title',
    width: 50,
    customCell: () => ({
      style: {
        width: '250px',
        maxWidth: '250px',
      },
    }),
    sorter: {
      compare: (a, b) => (a.title || '').toLowerCase().localeCompare((b.title || '').toLowerCase()),
    },
  },
  {
    title: 'Nama Perusahaan',
    dataIndex: 'company_name',
    key: 'company_name',
    width: 70,
    customCell: () => ({
      style: {
        width: '200px',
        maxWidth: '200px',
      },
    }),
    sorter: {
      compare: (a, b) =>
        (a.company_name || '').toLowerCase().localeCompare((b.company_name || '').toLowerCase()),
    },
  },
  {
    title: 'Tanggal SPK',
    key: 'inv_date_format',
    dataIndex: 'inv_date_format',
    width: 100,
    sorter: {
      compare: (a, b) =>
        (a.inv_date_format || '')
          .toLowerCase()
          .localeCompare((b.inv_date_format || '').toLowerCase()),
    },
  },
  {
    title: 'Tanggal Kontrak Selesai',
    key: 'inv_contract_date_format',
    dataIndex: 'inv_contract_date_format',
    width: 100,
    sorter: {
      compare: (a, b) =>
        (a.inv_contract_date_format || '')
          .toLowerCase()
          .localeCompare((b.inv_contract_date_format || '').toLowerCase()),
    },
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
    width: 50,
    customCell: () => ({
      style: {
        width: '200px',
        maxWidth: '200px',
      },
    }),
    sorter: {
      compare: (a, b) => (a.progress.toLowerCase() > b.progress.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 75,
    sorter: {
      compare: (a, b) => (a.status.toLowerCase() > b.status.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: 'Aksi',
    key: 'action',
    sorter: false,
    width: 80,
  },
]

const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
}
import 'daterangepicker/daterangepicker.css'
import 'daterangepicker/daterangepicker.js'
import moment from 'moment'
import DateRangePicker from 'daterangepicker'
import { initFlowbite } from 'flowbite'
import { onMounted, onUnmounted, ref } from 'vue'
import api from '../../../../api/api'
export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      projects: [],
      companies: [],
      picContacts: [],
      employees: [],
      // owners: [],
      userRole: null,
      columns: [],
      allColumns,
      searchQuery: '',
      data: [],
      isLoading: false,
      rowSelection,
      currentPage: 1,
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 50],
      showEditModal: false,
      selectedProject: null,
      ProjectsEditModal: null,
      showCreateModal: false,
      ProjectsCreateModal: null,
      filters: {
        dateRange: '',
        ownersSearch: '',
        tagsSearch: '',
      },
      selectedFilterOwners: [],
      selectedFilterTags: [],
      visible: {
        owners: 10,
        tags: 10,
      },
      sort: {
        key: null,
        order: null,
      },
      roleSlug: '',
    }
  },
  created() {
    // <-- aman di sini
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    this.roleSlug = (user.role_slug || '').toLowerCase()

    this.applyColumnFilter()
  },
  computed: {
    canManageProject() {
      return ['admin', 'superadmin'].includes(this.roleSlug)
    },
    filteredPages() {
      const query = this.searchQuery.toLowerCase()
      return this.data.filter((record) => {
        return (
          (record.title && record.title.toLowerCase().includes(query)) ||
          (record.spk_code && record.spk_code.toLowerCase().includes(query)) ||
          (record.inv_date_format && record.inv_date_format.toLowerCase().includes(query)) ||
          (record.inv_contract_date_format &&
            record.inv_contract_date_format.toLowerCase().includes(query)) ||
          (record.status && record.status.toLowerCase().includes(query))
        )
      })
    },
    // sorted version of filteredPages
    sortedFiltered() {
      const list = [...this.filteredPages] // clone

      if (!this.sort.key || !this.sort.order) return list

      const key = this.sort.key
      const order = this.sort.order // 'ascend' or 'descend'

      list.sort((a, b) => {
        const va = (a[key] ?? '').toString().toLowerCase()
        const vb = (b[key] ?? '').toString().toLowerCase()

        if (va === vb) return 0
        if (va > vb) return order === 'ascend' ? 1 : -1
        return order === 'ascend' ? -1 : 1
      })

      return list
    },

    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize
      return this.sortedFiltered.slice(start, start + this.pageSize)
    },

    totalPages() {
      return Math.ceil(this.filteredPages.length / this.pageSize) || 1
    },

    tableScrollX() {
      return this.data.length === 0 ? false : 'max-content'
    },
  },
  methods: {
    handleRefresh() {
      this.fetchProjects()
    },
    applyColumnFilter() {
      if (this.userRole === 'pic-customer') {
        this.columns = this.allColumns.filter((col) => col.key !== 'company_name')
      } else {
        this.columns = this.allColumns
      }
    },
    updateUrlParams() {
      const params = new URLSearchParams()

      if (this.filters.dateRange) params.set('daterange', this.filters.dateRange)
      if (this.selectedFilterOwners.length)
        params.set('owners', this.selectedFilterOwners.join(','))
      if (this.selectedFilterTags.length) params.set('tags', this.selectedFilterTags.join(','))

      // Update URL tanpa reload halaman
      const newUrl = `${window.location.pathname}?${params.toString()}`
      window.history.replaceState({}, '', newUrl)
    },
    applyFilter() {
      this.updateUrlParams()
      this.fetchProjects()
    },
    async fetchProjects() {
      this.isLoading = true
      try {
        const params = {
          daterange: this.filters.dateRange || '',
          // owners: this.selectedFilterOwners.join(',') || '',
          // tags: this.selectedFilterTags.join(',') || '',
        }

        const response = await api.get('/projects', { params })
        const projects = response.data

        this.data = projects.map((item) => ({
          id: item.id || '',
          title: item.title || '',
          code: item.code || '',
          spk_code: item.spk_code || '',

          // customer
          fid_cust: item.fid_cust || '',
          fid_custt: item.fid_custt || '',
          company_name: item.company_name || '',

          // invoice
          no_inv: item.no_inv || '',
          coa_sales: item.coa_sales || '',
          inv_address: item.inv_address || '',
          status: item.status || '',
          paid: item.paid || '',
          fid_tax: item.fid_tax || '',
          termin: item.termin || '',
          currency: item.currency || '',
          sub_total: item.sub_total || '',
          penjualan: item.penjualan || '',
          potongan: item.potongan || '',
          amount: item.amount || '',
          residual: item.residual || '',
          total: item.total || '',

          // tanggal
          inv_date: item.inv_date || '',
          inv_date_format: item.inv_date_format || '',
          inv_contract_date: item.inv_contract_date || '',
          inv_contract_date_format: item.inv_contract_date_format || '',
          created_at: item.created_at || '',
          created_at_format: item.created_at_format || '',

          is_verified: item.is_verified || '',
          dikirim: item.dikirim || '',
          tgl_dikirim: item.tgl_dikirim || '',
          keterangan: item.keterangan || '',
          deleted: item.deleted || '',

          // project extension
          pic_project_user_id: item.pic_project_user_id || '',
          pic_company_user_id: item.pic_company_user_id || '',
          rewards: item.rewards || '',
          feedback_point: item.feedback_point || '',
          feedback_text: item.feedback_text || '',
          is_active: item.is_active ?? '',

          // tambahan lama (untuk Company Bukukas jika masih perlu)
          jenis: item.jenis || '',
          bentuk: item.bentuk || '',
          npwp: item.npwp || '',
          address: item.address || '',
          email: item.email || '',
          memo: item.memo || '',
          pic_contact_id: item.pic_contact_id || '',

          progress: item.progress || '',
        }))
      } catch (error) {
        console.error('Gagal memuat data projects:', error)
      } finally {
        this.isLoading = false
      }
    },
    async fetchCompany() {
      try {
        const response = await api.get('/companies')
        const companyData = Array.isArray(response.data) ? response.data : response.data.data || []

        this.companies = companyData
          .filter((item) => item.deleted === 0)
          .map((item) => ({
            label: item.name,
            value: item.id,
          }))

        // this.companies.unshift({
        //   label: 'Tanpa Perusahaan',
        //   value: '',
        // })
      } catch (error) {
        console.error('Gagal memuat data Company:', error)
      }
    },
    async fetchEmployees() {
      try {

        const response = await api.get('/users', {
          params: { roles: ['direktur','manager','admin','pic-project','marketing'] },
        })

        this.employees = (response.data || []).map((item) => ({
          label: item.name,
          value: item.id,
        }))
      } catch (error) {
        console.error('Gagal memuat data karyawan:', error)
      }
    },
    handleTableChange(pagination, filters, sorter) {
      // sorter bisa object atau array (multiSort). Kita tangani single-sort.
      if (sorter && sorter.columnKey) {
        this.sort.key = sorter.columnKey
        this.sort.order = sorter.order || null // 'ascend' / 'descend' / undefined
      } else {
        this.sort.key = null
        this.sort.order = null
      }
      // reset ke halaman 1 agar UX bagus
      this.currentPage = 1
    },
    toggleHeader() {
      document.getElementById('collapse-header').classList.toggle('active')
      document.body.classList.toggle('header-collapse')
    },
    onPageChange(page) {
      this.currentPage = page
    },
    onPageSizeChange(size) {
      this.pageSize = Number(size)
      this.currentPage = 1
    },
    closeFilterDropdown() {
      const dropdown = document.getElementById('filter-dropdown')
      if (dropdown) {
        dropdown.classList.add('hidden')
      }
    },
    async openCreateModal() {
      if (!this.ProjectsCreateModal) {
        const module = await import('./components/projects-create-modal.vue')
        this.ProjectsCreateModal = module.default
      }

      document.body.classList.add('overflow-hidden')
      this.showCreateModal = true
    },
    closeCreateModal() {
      document.body.classList.remove('overflow-hidden')
      this.showCreateModal = false
    },
    async openEditModal(record) {
      this.selectedProject = record

      if (!this.ProjectsEditModal) {
        const module = await import('./components/projects-edit-modal.vue')
        this.ProjectsEditModal = module.default
      }

      document.body.classList.add('overflow-hidden')
      this.showEditModal = true
    },
    closeEditModal() {
      document.body.classList.remove('overflow-hidden')
      this.showEditModal = false
    },
    deleteModal(record) {
      this.$swal({
        title: 'Apakah anda yakin?',
        text: 'Setelah dihapus data tidak bisa dikembalikan!',
        iconHtml: '<i class="ti ti-trash text-primary" style="font-size: 80px"></i>',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#03C95A',
        cancelButtonText: 'Batal',
        confirmButtonText: 'Ya, hapus!',
        reverseButtons: true,
      }).then((result) => {
        if (!result.isConfirmed) return

        api
          .delete(`/projects/delete/${record.id}`)
          .then(() => {
            this.$swal('Terhapus!', 'Kontak Berhasil Terhapus.', 'success')

            if (Array.isArray(this.data)) {
              this.data = this.data.filter((item) => item.id !== record.id)
              return
            }

            if (this.$props && this.$props.projects) {
              this.$emit('remove-contact', record.id)
              return
            }

            if (Array.isArray(this.projects)) {
              const idx = this.projects.findIndex((i) => i.id === record.id)
              if (idx !== -1) this.projects.splice(idx, 1)
            }
          })
          .catch(() => {
            this.$swal('Error', 'Gagal Menghapus Kontak', 'error')
          })
      })
    },
    loadMore(key) {
      this.visible[key] += 10
    },
  },
  mounted() {
    const dateRangeInput = this.$refs.dateRangeInput

    if (dateRangeInput) {
      const start = moment().subtract(29, 'days')
      const end = moment()

      const booking_range = (start, end) => {
        const rangeText = start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY')

        dateRangeInput.value = rangeText
        this.filters.dateRange = rangeText

        this.updateUrlParams()
        this.fetchProjects()
      }

      const picker = new DateRangePicker(
        dateRangeInput,
        {
          startDate: start,
          endDate: end,
          ranges: {
            Today: [moment(), moment()],
            Yesterday: [moment().subtract(1, 'day'), moment().subtract(1, 'day')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [
              moment().subtract(1, 'month').startOf('month'),
              moment().subtract(1, 'month').endOf('month'),
            ],
          },
        },
        booking_range
      )

      if (this.$route.query.daterange) {
        dateRangeInput.value = this.$route.query.daterange
        this.filters.dateRange = this.$route.query.daterange

        const [s, e] = this.$route.query.daterange.split(' - ')
        picker.setStartDate(moment(s, 'M/D/YYYY'))
        picker.setEndDate(moment(e, 'M/D/YYYY'))
      } else {
        const defaultText = start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY')
        dateRangeInput.value = defaultText
        this.filters.dateRange = defaultText

        picker.setStartDate(start)
        picker.setEndDate(end)
      }
    }

    this.fetchProjects()
    this.fetchCompany()
    this.fetchEmployees()
  },
  setup() {
    const openDropdown = ref(null)

    const toggleDropdown = (id, event) => {
      event.stopPropagation()
      if (openDropdown.value === id) {
        openDropdown.value = null
      } else {
        openDropdown.value = id
      }
    }

    const closeAllDropdowns = () => {
      openDropdown.value = null
    }

    const handleClickOutside = (event) => {
      // Close dropdown when clicking outside
      closeAllDropdowns()
    }

    onMounted(() => {
      initFlowbite()
      document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    const auth = useAuthStore()
    const userRole = auth.role_slug // <= ambil role dengan benar

    return {
      openDropdown,
      toggleDropdown,
      closeAllDropdowns,
      userRole,
    }
  },
  updated() {
    initFlowbite()
  },
}
</script>
