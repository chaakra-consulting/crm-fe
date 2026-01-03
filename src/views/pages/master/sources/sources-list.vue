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
            Asal Data
            <span
              class="ml-2 text-primary bg-primary-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-primary text-[12px]"
              >{{ data.length }}</span
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
              <li class="text-dark font-medium" aria-current="page">Asal Data</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Refresh Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Refresh"
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
            Tambah Asal Data
          </a>
        </div>
        <div class="bg-white p-4">
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
                    :scroll="{ x: 'max-content', y: 500 }"
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

                      <template v-if="column.key === 'Status'">
                        <span
                          class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex"
                          :class="{
                            'bg-success text-primary border-primary text-sm font-medium':
                              record.is_active_text === 'Aktif',
                            'bg-danger text-primary border-primary text-sm font-medium':
                              record.is_active_text === 'Tidak Aktif',
                          }"
                        >
                          {{ record.is_active_text }}
                        </span>
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
                              class="dropdown-menu absolute left-0 mt-1 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg"
                              :class="{
                                hidden: openDropdown !== record.id,
                                block: openDropdown === record.id,
                              }"
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
    v-if="SourcesCreateModal && showCreateModal"
    :is="SourcesCreateModal"
    :isOpen="showCreateModal"
    @close="closeCreateModal"
    @refresh-list="fetchSources"
  />

  <component
    v-if="SourcesEditModal && showEditModal"
    :is="SourcesEditModal"
    :isOpen="showEditModal"
    :source="selectedSource"
    @close="closeEditModal"
    @refresh-list="fetchSources"
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
      compare: (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: 'Status',
    key: 'Status',
    dataIndex: 'is_active_text',
    width: 100,
    sorter: {
      compare: (a, b) => (a.is_active_text.toLowerCase() > b.is_active_text.toLowerCase() ? -1 : 1),
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
      sources: [],
      searchQuery: '',
      data: [],
      isLoading: false,
      columns,
      rowSelection,
      currentPage: 1,
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 50],
      showEditModal: false,
      selectedSource: null,
      SourcesEditModal: null,
      showCreateModal: false,
      SourcesCreateModal: null,
    }
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase()

      return this.data.filter((record) => {
        return (
          (record.name && record.name.toLowerCase().includes(query)) ||
          (record.is_active_text && record.is_active_text.toLowerCase().includes(query))
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
  },
  methods: {
    async fetchSources() {
      this.isLoading = true // mulai loading
      try {
        const response = await api.get('/sources')
        const sources = response.data

        this.data = sources
          // .filter((item) => item.is_active === 1)
          .map((item) => ({
            id: item.id,
            name: item.name || '',
            slug: item.slug || '',
            is_active: item.is_active || '',
            is_active_text: item.is_active_text || '',
            created_at: item.created_at || '',
          }))
      } catch (error) {
        console.error('Gagal memuat data sources:', error)
      } finally {
        this.isLoading = false
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
      if (!this.SourcesCreateModal) {
        const module = await import('./components/sources-create-modal.vue')
        this.SourcesCreateModal = module.default
      }

      document.body.classList.add('overflow-hidden')
      this.showCreateModal = true
    },
    closeCreateModal() {
      document.body.classList.remove('overflow-hidden')
      this.showCreateModal = false
    },
    async openEditModal(record) {
      this.selectedSource = record
      if (!this.SourcesEditModal) {
        const module = await import('./components/sources-edit-modal.vue')
        this.SourcesEditModal = module.default
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
          .delete(`/sources/delete/${record.id}`)
          .then(() => {
            this.$swal('Terhapus!', 'Asal Data Berhasil Terhapus.', 'success')

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
  },
  mounted() {
    const dateRangeInput = this.$refs.dateRangeInput
    if (dateRangeInput) {
      const start = moment().subtract(6, 'days')
      const end = moment()
      function booking_range(start, end) {
        return start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY')
      }
      new DateRangePicker(
        dateRangeInput,
        {
          startDate: start,
          endDate: end,
          ranges: {
            Today: [moment(), moment()],
            Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
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
      booking_range(start, end)
    }
    this.fetchSources()
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
