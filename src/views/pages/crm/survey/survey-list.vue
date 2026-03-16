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
            Survey List
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">{{
                survey_data.length }}</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Survey List</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Dropdown -->
          <!-- <div>
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
                    class="ti ti-file-type-xls me-1"></i>Export as Excel
                </a>
              </li>
            </ul>
          </div> -->
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
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
              <i class="ti ti-search"></i>
            </span>
            <input type="text" placeholder="Search" v-model="searchQuery"
              class="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm" />
          </div>

          <!-- Add New Button -->
          <a v-if="this.roleSlug == 'admin'" href="javascript:void(0);" @click="openCreateModal"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
            data-drawer-placement="right">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add Survey
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
            <div v-else id="leads_list_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start"></div>
                <div class="col-start-2 justify-self-end"></div>
              </div>
              <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="col-span-2 table-responsive">
                  <a-table
                    class="table table-nowrap border border-borderColor dataTable min-w-full text-sm align-middle whitespace-nowrap"
                    :columns="columns" :data-source="paginatedData" :row-selection="rowSelection" :pagination="false">
                    <template #bodyCell="{ column, record, index }">
                      <template v-if="column.key === 'index'">
                        {{ (currentPage - 1) * pageSize + index + 1 }}
                      </template>

                      <template v-if="column.key === 'survey_number'">
                        <h6 class="flex items-center text-[14px] font-medium mb-0">
                          {{ record.survey_number }}
                        </h6>
                      </template>
                      <template v-if="column.key === 'title'">
                        {{ record.title }}
                      </template>
                      <template v-if="column.key === 'status'">
                        <div v-if="record.status == 'not_answered'"><span
                            class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-danger-100 text-danger">Belum
                            Terisi</span>
                        </div>
                        <div v-else><span
                            class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-success-100 text-success">Sudah
                            Terisi</span></div>
                      </template>
                      <template v-if="column.key === 'project_title'">
                        {{ record.project_title }}
                      </template>

                      <template v-if="column.key === 'date_issued'">
                        {{
                          Intl.DateTimeFormat('id-ID', {
                            dateStyle: 'long',
                          }).format(new Date(record.date_issued))
                        }}
                      </template>
                      <template v-if="column.key === 'valid_until'">
                        {{
                          Intl.DateTimeFormat('id-ID', {
                            dateStyle: 'long',
                          }).format(new Date(record.valid_until))
                        }}
                      </template>
                      <template v-if="column.key === 'action'">
                        <div v-if="canAnswerQuestion && record.status == 'not_answered'">
                          <router-link
                            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white hover:text-white rounded-md transition"
                            :to="{ path: `answer/${record.id}` }">
                            Jawab Survey
                          </router-link>
                        </div>
                        <div v-else class="dropdown relative table-action">
                          <router-link href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(record.id, $event)" :class="{ active: openDropdown === record.id }">
                            <i class="ti ti-dots-vertical"></i>
                          </router-link>
                          <div
                            class="dropdown-menu absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg"
                            :class="{
                              hidden: openDropdown !== record.id,
                              block: openDropdown === record.id,
                            }" style="top: 100%; right: 0">

                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" @click.stop="openEditModal(record)"
                              data-drawer-placement="right">
                              <i class="ti ti-edit me-1"></i> Edit
                            </a>
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-danger-transparent hover:text-danger text-gray-900"
                              href="javascript:void(0);" @click="deleteAlert(record.id)">
                              <i class="ti ti-trash me-1"></i> Delete
                            </a>
                            <router-link
                              class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              :to="{ path: `details/${record.id}` }">
                              <i class="ti ti-eye text-blue-light me-1"></i> Pertanyaan Survey
                            </router-link>
                          </div>
                        </div>
                      </template>
                    </template>
                  </a-table>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start"></div>
                <div class="col-start-2 justify-self-end"></div>
              </div>
            </div>
          </div>
          <BasePagination :currentPage="currentPage" :pageSize="pageSize" :pageSizeOptions="pageSizeOptions"
            :totalItems="filteredPages.length" @page-change="onPageChange" @page-size-change="onPageSizeChange" />
          <!-- /Contact List -->
        </div>
      </div>
    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->
  </div>
  <component v-if="CreateModal && showCreateModal" :is="CreateModal" :isOpen="showCreateModal" @close="closeCreateModal"
    @refresh-list="fetchData" />
  <component v-if="EditModal && showEditModal" :is="EditModal" :survey="selectedSurvey" :isOpen="showEditModal"
    @close="closeEditModal" @refresh-list="fetchData" />
</template>
<script>
const columns = [
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
    title: 'ID Survey',
    dataIndex: 'survey_number',
    key: 'survey_number',
    sorter: {
      compare: (a, b) => (a.survey_number.toLowerCase() > b.survey_number.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: 'Nama Projek',
    dataIndex: 'project_title',
    key: 'project_title',
    sorter: {
      compare: (a, b) => (a.project_title.toLowerCase() > b.project_title.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: 'Judul Survey',
    dataIndex: 'title',
    key: 'title',
    sorter: {
      compare: (a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Tanggal Dibuat',
    dataIndex: 'date_issued',
    key: 'date_issued',
    sorter: {
      compare: (a, b) => (a.date_issued.toLowerCase() > b.date_issued.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: 'Tanggal Berlaku',
    dataIndex: 'valid_until',
    key: 'valid_until',
    sorter: {
      compare: (a, b) => (a.valid_until.toLowerCase() > b.valid_until.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: 'Aksi',
    key: 'action',
    sorter: false,
  },
]
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
}

import 'daterangepicker/daterangepicker.css'
import 'daterangepicker/daterangepicker.js'
import { onMounted, onUnmounted, ref } from 'vue'
import moment from 'moment'
import DateRangePicker from 'daterangepicker'
import BasePagination from '@/components/BasePagination.vue'
import api from '../../../../api/api'
import dayjs from 'dayjs'
import { markRaw } from 'vue'
const valueOne = ref()
var isLoading
export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      valueOne,
      searchQuery: '',
      survey_data: [],
      columns,
      isLoading,
      rowSelection,
      currentPage: 1,
      pageSize: 10,
      selectedSurvey: null,
      showCreateModal: false,
      CreateModal: null,
      showEditModal: false,
      EditModal: null,
      pageSizeOptions: [5, 10, 20, 50],
      openDropdown: null,
      dateFormat: 'dd-MM-yyyy',
      sort: {
        key: null,
        order: null,
      },
    }
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase()
      return this.survey_data.filter((record) => {
        return (
          (record.title && record.title.toLowerCase().includes(query)) ||
          (record.survey_number && record.survey_number.toLowerCase().includes(query)) ||
          (record.created_at && record.created_at.toLowerCase().includes(query))
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
    canAnswerQuestion() {
      return this.roleSlug == "pic-customer"
    }
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    this.roleSlug = (user.role_slug || '').toLowerCase()
    this.userId = user.id
  },
  methods: {
    async openCreateModal() {
      if (!this.CreateModal) {
        const module = await import('./components/create-modal.vue')
        this.CreateModal = markRaw(module.default)
      }

      document.body.classList.add('overflow-hidden')
      this.showCreateModal = true
    },
    closeCreateModal() {
      document.body.classList.remove('overflow-hidden')
      this.showCreateModal = false
    },

    async openEditModal(record) {
      this.selectedSurvey = record
      console.log(record)

      if (!this.EditModal) {
        const module = await import('./components/edit-modal.vue')
        this.EditModal = markRaw(module.default)
      }

      document.body.classList.add('overflow-hidden')
      this.showEditModal = true
    },
    closeEditModal() {
      document.body.classList.remove('overflow-hidden')
      this.showEditModal = false
    },

    async fetchData() {
      this.isLoading = true
      try {
        const response = await api.get('/survey')
        const projects = response.data.data
        console.log(projects)

        this.survey_data = projects.map((item) => {
          return {
            id: item.id,
            title: item.title,
            status: item.status,
            project_title: item.project.bukukas.item.title,
            survey_number: item.survey_number,
            date_issued: item.date_issued,
            valid_until: item.valid_until,
          }
        })
      } catch (error) {
        console.error('Gagal memuat data projects:', error)
      } finally {
        this.isLoading = false
      }
    },

    deleteAlert(id) {
      this.$swal({
        title: 'Anda yakin?',
        text: 'Apakah anda yakin untuk menghapus data ini?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Iya',
        cancelButtonText: 'Batal',
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteLead(id)
          this.$swal('Deleted!', 'Your file has been deleted.', 'success')
        }
      })
    },
    async deleteLead(id) {
      try {
        await api.delete(`/leads/${id}`)
        this.fetchData()
      } catch (error) {
        console.error('Gagal menghapus data lead:', error)
      }
    },
    toggleDropdown(id, event) {
      event.stopPropagation()
      this.openDropdown = this.openDropdown === id ? null : id
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
    toggleHeader() {
      document.getElementById('collapse-header').classList.toggle('active')
      document.body.classList.toggle('header-collapse')
    },
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

    const dateRangeInput = ref(null)

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY')
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
      if (dateRangeInput.value) {
        const start = moment().subtract(6, 'days')
        const end = moment()

        new DateRangePicker(
          dateRangeInput.value,
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
          booking_range,
        )

        booking_range(start, end)
      }
    })

    return {
      dateRangeInput,
      openDropdown,
      toggleDropdown,
      closeAllDropdowns,
    }
  },

  mounted() {
    this.fetchData()
  },
}
</script>
