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
            Kontak
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
              <li class="text-dark font-medium" aria-current="page">Kontak</li>
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

          <!-- Add New Button -->
          <!-- <a
            href="javascript:void(0);"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
            data-drawer-target="offcanvas_add"
            data-drawer-show="offcanvas_add"
            aria-controls="offcanvas_add"
            data-drawer-placement="right"
          > -->
          <a
            href="javascript:void(0);"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
            @click="openCreateModal"
          >
            <i class="ti ti-square-rounded-plus-filled"></i>
            Tambah Kontak
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
                  <div id="accordionExample" data-accordion="collapse" class="p-4">
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
                            ><i class="ti ti-chevron-right me-2"></i>Pemilik Data</span
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
                  </div>
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
              id="contactslist_wrapper"
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
                    row-key="id"
                    :pagination="false"
                    :scroll="{ x: tableScrollX, y: 500 }"
                  >
                    <template #bodyCell="{ column, record, index }">
                      <!-- Index -->
                      <template v-if="column.key === 'index'">
                        {{ (currentPage - 1) * pageSize + index + 1 }}
                      </template>
                      <!-- Name -->
                      <template v-if="column.key === 'name'">
                        <span class="font-medium">{{ record.name }}</span>
                      </template>

                      <!-- Title -->
                      <template v-if="column.key === 'title_name'">
                        <span>{{ record.title_name }}</span>
                      </template>

                      <!-- Phone -->
                      <template v-if="column.key === 'phone_number_1'">
                        <span>{{ record.phone_number_1 }}</span>
                      </template>

                      <!-- Tags -->
                      <template v-if="column.key === 'tags'">
                        <div class="flex flex-wrap gap-1">
                          <span
                            v-for="tag in record.tags"
                            :key="tag.id"
                            class="inline-flex items-center"
                            :class="tag.color"
                          >
                            {{ tag.name }}
                          </span>
                        </div>
                      </template>

                      <!-- Source -->
                      <template v-if="column.key === 'source_name'">
                        <span>{{ record.source_name }}</span>
                      </template>

                      <!-- Source -->
                      <template v-if="column.key === 'created_at_format'">
                        <span>{{ record.created_at_format }}</span>
                      </template>

                      <template v-if="column.key === 'action'">
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
                            <!-- ✅ BUTTON KIRIM EMAIL -->
                            <a
                              class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                              href="javascript:void(0);"
                              @click.stop="sendActivateEmail(record)"
                            >
                              <i class="ti ti-user-check me-1"></i> Aktivasi Akun
                            </a>
                            <!-- <router-link
                              class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              to="/crm/contact-details"
                            >
                              <i class="ti ti-eye text-blue-light me-1"></i> Lihat
                            </router-link> -->
                          </div>
                        </div>
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
    v-if="ContactsCreateModal && showCreateModal"
    :is="ContactsCreateModal"
    :isOpen="showCreateModal"
    :companies="companies"
    :sources="sources"
    :provinces="provinces"
    :tagsData="tagsData"
    @close="closeCreateModal"
    @refresh-list="fetchContacts"
    @refresh-tags="fetchTags"
  />

  <component
    v-if="ContactsEditModal && showEditModal"
    :is="ContactsEditModal"
    :isOpen="showEditModal"
    :contact="selectedContact"
    :companies="companies"
    :sources="sources"
    :provinces="provinces"
    :tagsData="tagsData"
    @close="closeEditModal"
    @refresh-list="fetchContacts"
    @refresh-tags="fetchTags"
  />
</template>

<script>
import BasePagination from '@/components/BasePagination.vue'
import { defineAsyncComponent } from 'vue'

const columns = [
  {
    title: 'No',
    key: 'index',
    dataIndex: 'index',
    width: 60,
    sorter: {
      compare: (a, b) => a.index - b.index,
    },
  },
  {
    title: 'Nama',
    key: 'name',
    dataIndex: 'name',
    width: 100,
    sorter: {
      compare: (a, b) => (a.name || '').toLowerCase().localeCompare((b.name || '').toLowerCase())
    },
  },
  {
    title: 'Nomor Telepon',
    key: 'phone_number_1',
    dataIndex: 'phone_number_1',
    width: 150,
    sorter: {
      compare: (a, b) => (a.phone_number_1 || '').toLowerCase().localeCompare((b.phone_number_1 || '').toLowerCase())
    },
  },
  {
    title: 'Source',
    key: 'source_name',
    dataIndex: 'source_name',
    width: 120,
    sorter: {
      compare: (a, b) => (a.source_name || '').toLowerCase().localeCompare((b.source_name || '').toLowerCase())
    },
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    width: 200,
  },
  {
    title: 'Tanggal Dibuat',
    key: 'created_at_format',
    dataIndex: 'created_at_format',
    width: 120,
    sorter: {
      compare: (a, b) => (a.created_at_format || '').toLowerCase().localeCompare((b.created_at_format || '').toLowerCase())
    },
  },
  {
    title: 'Aksi',
    key: 'action',
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
      companies: [],
      sources: [],
      provinces: [],
      cities: [],
      owners: [],
      tagsData: [],
      searchQuery: '',
      data: [],
      isLoading: false,
      columns,
      rowSelection,
      currentPage: 1,
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 50],
      showEditModal: false,
      selectedContact: null,
      ContactsEditModal: null,
      showCreateModal: false,
      ContactsCreateModal: null,
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
    }
  },
  computed: {
    filteredOwners() {
      if (!this.filters.ownersSearch) {
        return this.owners
      }

      return this.owners.filter((o) =>
        o.name.toLowerCase().includes(this.filters.ownersSearch.toLowerCase())
      )
    },
    visibleOwners() {
      return this.filteredOwners.slice(0, this.visible.owners)
    },
    filteredTags() {
      if (!this.filters.tagsSearch) return this.tagsData

      return this.tagsData.filter((o) =>
        o.name.toLowerCase().includes(this.filters.tagsSearch.toLowerCase())
      )
    },
    visibleTags() {
      return this.filteredTags.slice(0, this.visible.tags)
    },
    filteredPages() {
      const query = this.searchQuery.toLowerCase()

      return this.data.filter((record) => {
        if (!Array.isArray(record.tags)) {
          console.log('Tags not array')
          return false
        }

        const tagsMatch = record.tags.some((tag) => {
          const tagName = (tag?.name || tag?.title || tag?.label || '').toString().toLowerCase()

          const match = tagName.includes(query)
          return match
        })
        return (
          (record.name && record.name.toLowerCase().includes(query)) ||
          (record.title_name && record.title_name.toLowerCase().includes(query)) ||
          (record.phone_number_1 && record.phone_number_1.toLowerCase().includes(query)) ||
          (record.source_name && record.source_name.toLowerCase().includes(query)) ||
          tagsMatch
        )
      })
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize
      return this.filteredPages.slice(start, start + this.pageSize)
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
      this.fetchCompany()
      this.fetchContacts()
      this.fetchProvince()
      this.fetchTags()
      this.fetchSources()
      this.fetchOwners()
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
      this.fetchContacts()
    },
    async fetchContacts() {
      this.isLoading = true // mulai loading
      try {
        const params = {
          daterange: this.filters.dateRange || '',
          owners: this.selectedFilterOwners.join(',') || '',
          tags: this.selectedFilterTags.join(',') || '',
        }

        const response = await api.get('/contacts', { params })
        const contacts = response.data

        this.data = contacts.map((item) => ({
          id: item.id,
          name: item.name || '',
          title_name: item.title_name || '',
          phone_number_1: item.phone_number_1 || '',
          phone_number_2: item.phone_number_2 || '',
          email: item.email || '',
          address: item.address || '',
          date_of_birth: item.date_of_birth || '',
          company_id: item.company_id || '',
          company_name: item.company_name || '',
          source_id: item.source_id || '',
          source_name: item.source_name || '',
          user_id: item.user_id || '',
          user_name: item.user_name || '',
          owner_user_id: item.owner_user_id || '',
          owner_user_name: item.owner_user_name || '',
          province_id: item.province_id || '',
          province_name: item.province_name || '',
          city_id: item.city_id || '',
          city_name: item.city_name || '',
          facebook: item.facebook || '',
          instagram: item.instagram || '',
          whatsapp: item.whatsapp || '',
          twitterx: item.twitterx || '',
          photo_path: item.photo_path || '',
          photo_url: item.photo_url || '',
          tags: Array.isArray(item.tags) ? item.tags : [],
          created_at: item.created_at || '',
          created_at_format: item.created_at_format || '',
        }))
      } catch (error) {
        console.error('Gagal memuat data contacts:', error)
      } finally {
        this.isLoading = false // selesai loading
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

        this.companies.unshift({
          label: 'Tanpa Perusahaan',
          value: '',
        })
      } catch (error) {
        console.error('Gagal memuat data Company:', error)
      }
    },
    async fetchProvince() {
      try {
        const response = await api.get('/provinces')
        const province = Array.isArray(response.data) ? response.data : response.data.data || []

        this.provinces = province
          // .filter((item) => item.deleted === 0)
          .map((item) => ({
            label: item.name,
            value: item.id,
          }))
      } catch (error) {
        console.error('Gagal memuat data provinsi:', error)
      }
    },
    async fetchTags() {
      try {
        const response = await api.get('/tags')
        const tag = Array.isArray(response.data) ? response.data : response.data.data || []

        this.tagsData = tag
          // .filter((item) => item.deleted === 0)
          .map((item) => ({
            id: item.id,
            name: item.name,
            slug: item.slug,
            color: item.color,
          }))
      } catch (error) {
        console.error('Gagal memuat data tags:', error)
      }
    },
    async fetchSources() {
      try {
        const response = await api.get('/sources')
        const source = Array.isArray(response.data) ? response.data : response.data.data || []

        this.sources = source
          .filter((item) => item.is_active == 1)
          .map((item) => ({
            label: item.name,
            value: item.id,
          }))
      } catch (error) {
        console.error('Gagal memuat data sources:', error)
      }
    },
    async fetchOwners() {
      try {
        const response = await api.get('/users', {
          params: {
            roles: ['marketing'], // <-- array
          },
        })
        const owner = Array.isArray(response.data) ? response.data : response.data.data || []

        this.owners = owner
          .filter((item) => item.is_active == 1)
          .map((item) => ({
            id: item.id,
            name: item.name || '',
          }))
      } catch (error) {
        console.error('Gagal memuat data owners:', error)
      }
    },
    handleTableChange() {
      // Optional: implement sorting/filtering if needed, or leave empty to suppress warning
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
      if (!this.ContactsCreateModal) {
        const module = await import('./components/contacts-create-modal.vue')
        this.ContactsCreateModal = module.default
      }

      document.body.classList.add('overflow-hidden')
      this.showCreateModal = true
    },
    closeCreateModal() {
      document.body.classList.remove('overflow-hidden')
      this.showCreateModal = false
    },
    async openEditModal(record) {
      this.selectedContact = record

      if (!this.ContactsEditModal) {
        const module = await import('./components/contacts-edit-modal.vue')
        this.ContactsEditModal = module.default
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
          .delete(`/contacts/delete/${record.id}`)
          .then(() => {
            this.$swal('Terhapus!', 'Kontak Berhasil Terhapus.', 'success')

            if (Array.isArray(this.data)) {
              this.data = this.data.filter((item) => item.id !== record.id)
              return
            }

            if (this.$props && this.$props.contacts) {
              this.$emit('remove-contact', record.id)
              return
            }

            if (Array.isArray(this.contacts)) {
              const idx = this.contacts.findIndex((i) => i.id === record.id)
              if (idx !== -1) this.contacts.splice(idx, 1)
            }
          })
          .catch(() => {
            this.$swal('Error', 'Gagal Menghapus Kontak', 'error')
          })
      })
    },
    sendActivateEmail(record) {
      this.$swal({
        title: 'Kirim Email Aktivasi Akun?',
        html: `
          <p class="text-sm text-gray-600 mt-2">
            Email akan dikirim ke:<br>
            <strong>${record.email}</strong>
          </p>
        `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#03C95A',
        cancelButtonText: 'Batal',
        confirmButtonText: 'Kirim Email!',
        reverseButtons: true,
      }).then((result) => {
        if (!result.isConfirmed) return

        api
          .post(`/contacts/activation-email/${record.user_id}`)
          // .post(``)
          .then(() => {
            this.$swal({
              icon: 'success',
              title: 'Email sedang diproses',
            })
          })
          .catch(() => {
            this.$swal({
              icon: 'error',
              title: 'Gagal mengirim email',
            })
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
      const start = moment().subtract(6, 'days')
      const end = moment()

      const booking_range = (start, end) => {
        const rangeText = start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY')

        dateRangeInput.value = rangeText
        this.filters.dateRange = rangeText

        this.updateUrlParams()
        this.fetchContacts()
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

    this.fetchContacts()
    this.fetchCompany()
    this.fetchProvince()
    this.fetchTags()
    this.fetchSources()
    this.fetchOwners()
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

    return {
      openDropdown,
      toggleDropdown,
      closeAllDropdowns,
    }
  },
}
</script>
