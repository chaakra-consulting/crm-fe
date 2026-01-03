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
            User
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
              <li class="text-dark font-medium" aria-current="page">User</li>
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
            Tambah User
          </a>
        </div>
        <div class="bg-white p-4">
          <div class="flex items-center justify-between flex-wrap gap-y-3">
            <div class="flex items-center flex-wrap gap-y-3">
              <!-- Search Input with Icon -->
              <!-- <div class="relative">
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
            <div v-else id="userslist_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
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
                        <h6 class="flex items-center text-[14px] font-medium mb-0">
                          <!-- <div class="w-10 h-10 rounded-full me-2 mx-2 overflow-hidden flex items-center justify-center">
                            <img
                              class="w-full h-full object-cover"
                              :src="record.photo_path"
                              alt="User Image"
                              loading="lazy"
                            />
                          </div> -->
                          <router-link to="#" class="flex flex-col">
                            {{ record.name }}
                            <span class="text-default text-[13px] font-normal mt-1">
                              {{ record.role_name }}
                            </span>
                          </router-link>
                        </h6>
                      </template>

                      <!-- Username -->
                      <template v-if="column.key === 'username'">
                        <span>{{ record.username }}</span>
                      </template>

                      <!-- Email -->
                      <template v-if="column.key === 'email'">
                        <span>{{ record.email }}</span>
                      </template>

                      <!-- Status -->
                      <template v-if="column.key === 'is_active_text'">
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

                      <!-- Created At -->
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
                              @click="openPasswordModal(record)"
                            >
                              <i class="ti ti-key me-1"></i> Ubah Password
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
    v-if="UsersCreateModal && showCreateModal"
    :is="UsersCreateModal"
    :isOpen="showCreateModal"
    :roles="roles"
    @close="closeCreateModal"
    @refresh-list="fetchUsers"
  />

  <component
    v-if="UsersEditModal && showEditModal"
    :is="UsersEditModal"
    :isOpen="showEditModal"
    :user="selectedUser"
    :roles="roles"
    @close="closeEditModal"
    @refresh-list="fetchUsers"
  />

  <component
    v-if="UsersPasswordModal && showPasswordModal"
    :is="UsersPasswordModal"
    :isOpen="showPasswordModal"
    :user="selectedUser"
    :roles="roles"
    @close="closePasswordModal"
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
    title: 'Username',
    key: 'username',
    dataIndex: 'username',
    width: 150,
    sorter: {
      compare: (a, b) => (a.username.toLowerCase() > b.username.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
    width: 120,
    sorter: {
      compare: (a, b) => (a.email.toLowerCase() > b.email.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: 'Tanggal Dibuat',
    key: 'created_at_format',
    dataIndex: 'created_at_format',
    width: 120,
    sorter: {
      compare: (a, b) =>
        a.created_at_format.toLowerCase() > b.created_at_format.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: 'Status',
    key: 'is_active_text',
    dataIndex: 'is_active_text',
    width: 70,
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
      roles: [],
      searchQuery: '',
      data: [],
      isLoading: false,
      columns,
      rowSelection,
      currentPage: 1,
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 50],
      showEditModal: false,
      selectedUser: null,
      UsersEditModal: null,
      showCreateModal: false,
      UsersCreateModal: null,
      showPasswordModal: false,
      UsersPasswordModal: null,
      filters: {
        dateRange: '',
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
    filteredPages() {
      const query = this.searchQuery.toLowerCase()

      return this.data.filter((record) => {
        return (
          (record.name && record.name.toLowerCase().includes(query)) ||
          (record.username && record.username.toLowerCase().includes(query)) ||
          (record.email && record.email.toLowerCase().includes(query)) ||
          (record.role_name && record.role_name.toLowerCase().includes(query))
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
      this.fetchUsers()
    },
    async fetchUsers() {
      this.isLoading = true // mulai loading
      try {
        // const params = {
        //   daterange: this.filters.dateRange || '',
        // }
        const response = await api.get('/users', {
          params: {
            roles: ['superadmin', 'direktur', 'manager', 'admin', 'marketing', 'pic-project'],
            daterange: this.filters.dateRange || '',
          },
        })
        const users = response.data

        this.data = users.map((item) => ({
          id: item.id,
          name: item.name || '',
          role_id: item.role_id || '',
          role_slug: item.role_slug || '',
          role_name: item.role_name || '',
          username: item.username || '',
          email: item.email || '',
          is_active: item.is_active || false,
          is_active_text: item.is_active_text || false,
          photo_path: item.photo_path || '',
          photo_url: item.photo_url || '',
          created_at: item.created_at || '',
          created_at_format: item.created_at_format || '',
        }))
      } catch (error) {
        console.error('Gagal memuat data users:', error)
      } finally {
        this.isLoading = false
      }
    },
    async fetchRoles() {
      try {
        const response = await api.get('/roles')
        const role = Array.isArray(response.data) ? response.data : response.data.data || []

        this.roles = role
          .filter((item) => item.slug != 'pic-customer')
          .map((item) => ({
            label: item.name,
            value: item.id,
          }))
      } catch (error) {
        console.error('Gagal memuat data roles:', error)
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
      if (!this.UsersCreateModal) {
        const module = await import('./components/users-create-modal.vue')
        this.UsersCreateModal = module.default
      }

      document.body.classList.add('overflow-hidden')
      this.showCreateModal = true
    },
    closeCreateModal() {
      document.body.classList.remove('overflow-hidden')
      this.showCreateModal = false
    },
    async openEditModal(record) {
      this.selectedUser = record

      if (!this.UsersEditModal) {
        const module = await import('./components/users-edit-modal.vue')
        this.UsersEditModal = module.default
      }

      document.body.classList.add('overflow-hidden')
      this.showEditModal = true
    },
    closeEditModal() {
      document.body.classList.remove('overflow-hidden')
      this.showEditModal = false
    },
    async openPasswordModal(record) {
      this.selectedUser = record

      if (!this.UsersPasswordModal) {
        const module = await import('./components/users-password-modal.vue')
        this.UsersPasswordModal = module.default
      }

      document.body.classList.add('overflow-hidden')
      this.showPasswordModal = true
    },
    closePasswordModal() {
      document.body.classList.remove('overflow-hidden')
      this.showPasswordModal = false
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
          .delete(`/users/delete/${record.id}`)
          .then(() => {
            this.$swal('Terhapus!', 'User Berhasil Terhapus.', 'success')

            if (Array.isArray(this.data)) {
              this.data = this.data.filter((item) => item.id !== record.id)
              return
            }

            if (this.$props && this.$props.users) {
              this.$emit('remove-users', record.id)
              return
            }

            if (Array.isArray(this.users)) {
              const idx = this.users.findIndex((i) => i.id === record.id)
              if (idx !== -1) this.users.splice(idx, 1)
            }
          })
          .catch(() => {
            this.$swal('Error', 'Gagal Menghapus User', 'error')
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
        this.fetchUsers()
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

    this.fetchUsers()
    this.fetchRoles()
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
