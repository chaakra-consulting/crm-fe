<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">
    <div class="content p-5">
      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">Projek Detail</h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/crm/projects-list/" class="hover:underline text-gray-700"
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
          <!-- <div>
                  <a href="javascript:void(0);"
                    class="border border-borderColor rounded p-2 bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="export-dropdown">
                    <i class="ti ti-package-export me-2"></i>Export<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="export-dropdown"
                    class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
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
            </div> -->
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
      <div class="mb-4">
        <router-link to="/crm/projects-list" class="inline-flex items-center text-dark"
          ><i class="ti ti-arrow-narrow-left mr-1"></i>Kembali</router-link
        >
      </div>

      <!-- start user -->
      <div class="bg-white border border-borderColor rounded mb-4">
        <div class="p-4 pb-3">
          <div class="flex items-start justify-between flex-wrap">
            <!-- SKELETON LOADING -->
            <div class="w-full animate-pulse" v-if="loading">
              <!-- Judul & Reward -->
              <div class="flex items-center mb-3">
                <div class="h-6 w-52 bg-gray-200 rounded mr-3"></div>
                <div class="h-5 w-10 bg-gray-200 rounded"></div>
              </div>

              <!-- Progress -->
              <div class="mb-4 flex items-center gap-2">
                <div class="w-full bg-gray-200 h-3 rounded"></div>
                <div class="h-4 w-10 bg-gray-200 rounded"></div>
              </div>

              <!-- Detail Informasi -->
              <ul class="border-b border-borderColor mb-5 pb-5 space-y-3">
                <!-- 7 items skeleton -->
                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>

                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>

                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>

                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>

                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>

                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>

                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>
              </ul>
            </div>

            <div class="w-full" v-else>
              <!-- Judul & Reward -->
              <div class="flex items-center mb-2">
                <h5 class="mb-1 me-2 text-primary-700">
                  {{ project.title }}
                </h5>

                <p class="inline-flex items-center mb-0">
                  <i class="ti ti-award-filled text-warning me-1"></i>
                  {{ project.rewards ?? 0 }}
                </p>
              </div>

              <!-- Progress Bar -->
              <div class="mb-3">
                <div class="flex items-center gap-2">
                  <div class="w-full bg-gray-200 rounded h-3 overflow-hidden">
                    <div
                      class="bg-primary h-3"
                      :style="{ width: project.progress == 0 ? '0' : project.progress + '%' }"
                    ></div>
                  </div>
                  <span class="text-dark font-medium text-sm"
                    >{{ project.progress == 0 ? '0' : project.progress }}%</span
                  >
                </div>
              </div>

              <!-- Detail Informasi -->
              <!-- <ul class="border-b border-borderColor mb-5 pb-5"> -->
              <ul class="border-borderColor pb-5">
                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">Status</span>
                  <span class="col-span-6 flex justify-start">
                    <span
                      class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold text-white"
                      :class="{
                        'bg-success': project.status == 'selesai',
                        'bg-warning': project.status == 'proses',
                        'bg-danger': project.status == 'belum',
                      }"
                    >
                      {{ project.status.charAt(0).toUpperCase() + project.status.slice(1) }}
                    </span>
                  </span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">Kode SPK</span>
                  <span class="col-span-6 text-dark">{{ project.spk_code }}</span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">PIC Projek</span>
                  <span class="col-span-6 text-dark">{{ project.pic_project_user_id }}</span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">Nama Perusahaan</span>
                  <span class="col-span-6 text-dark">{{ project.company_name }}</span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">PIC Perusahaan</span>
                  <span class="col-span-6 text-dark">{{ project.pic_company_user_id }}</span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">Tanggal SPK</span>
                  <span class="col-span-6 text-dark">
                    {{ project.inv_date_format }}
                  </span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">Tanggal Kontrak Selesai</span>
                  <span class="col-span-6 text-dark">
                    {{ project.inv_contract_date_format }}
                  </span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">Pembayaran</span>
                  <span class="col-span-6 flex justify-start">
                    <span
                      class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold text-white"
                      :class="paymentStatusClass"
                    >
                      {{ paymentStatusText }}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- end user -->

      <!-- start grid -->
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
        <!-- Start right column -->
        <div class="xl:col-span-12">
          <div class="w-full">
            <!-- start tab -->
            <ul
              class="flex-wrap flex bg-white rounded border border-borderColor gap-x-2 px-3 py-4 mb-4"
              id="default-styled-tab3"
              data-tabs-toggle="#company-tab-content3"
              data-tabs-active-classes="text-primary hover:text-primary border-primary"
              data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary"
              role="tablist"
            >
              <li class="me-3" role="presentation">
                <button
                  class="inline-block py-2 px-4 border-b-2 font-medium"
                  data-tabs-target="#pembayaran"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i class="ti ti-wallet me-1"></i>Pembayaran
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block py-2 px-4 border-b-2 font-medium"
                  data-tabs-target="#notes-list"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i class="ti ti-notes me-1"></i>Helpdesk
                </button>
              </li>
              <!-- <li role="presentation">
                <button
                  class="inline-block py-2 px-4 border-b-2 font-medium"
                  data-tabs-target="#calls"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i class="ti ti-phone me-1"></i>Calls
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block py-2 px-4 border-b-2 font-medium"
                  data-tabs-target="#files"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i class="ti ti-file me-1"></i>Files
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block py-2 px-4 border-b-2 font-medium"
                  data-tabs-target="#email"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i class="ti ti-mail me-1"></i>Email
                </button>
              </li> -->
            </ul>

            <!-- start tab content -->
            <div id="company-tab-content3">
              <!-- Item 1 -->
              <div class="hidden" id="pembayaran" role="tabpanel">
                <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                  <div
                    class="flex items-center justify-between gap-3 p-4 border-b border-borderColor"
                  >
                    <h5 class="m-0 font-semibold">Riwayat Pembayaran</h5>
                  </div>
                  <div class="col-span-6">
                    <div class="card-body p-5">
                      <div class="table-responsive">
                        <table class="table-auto table-borderless mb-0">
                          <thead class="table-head">
                            <tr>
                              <!-- <th class="w-[50px]">No</th> -->
                              <th class="w-[50px]">Termin</th>
                              <th class="w-[100px]">No. Invoices</th>
                              <th class="w-[100px]">Tanggal Pembayaran</th>
                              <th class="w-[100px]">Status</th>
                              <th class="w-[100px]">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-if="project.payments.length === 0">
                              <td colspan="5" class="py-6">
                                <div class="flex justify-center items-center text-dark">
                                  Tidak ada data pembayaran
                                </div>
                              </td>
                            </tr>
                            <tr v-else v-for="(pay, index) in project.payments" :key="pay.id">
                              <td class="border border-dark-100 text-dark">{{ index + 1 }}.</td>
                              <td class="border border-dark-100 text-dark">
                                {{ pay.invoice_code }}
                              </td>
                              <td class="border border-dark-100 text-dark">
                                {{ pay.payment_date }}
                              </td>

                              <td class="border border-dark-100">
                                <span class="flex justify-start">
                                  <span
                                    v-if="pay.status === 'terbayar'"
                                    class="inline-flex items-center py-1 px-2 rounded text-xs font-semibold bg-success text-white"
                                  >
                                    Terbayar
                                  </span>
                                  <span
                                    v-else
                                    class="inline-flex items-center py-1 px-2 rounded text-xs font-semibold bg-danger text-white"
                                  >
                                    Belum Terbayar
                                  </span>
                                </span>
                              </td>

                              <td class="border border-dark-100 text-dark">
                                Rp {{ formatNumber(pay.total) }}
                              </td>
                            </tr>
                            <!-- SUBTOTAL -->
                            <tr
                              v-if="
                                project.invoice_total_summary.tax > 1 ||
                                project.invoice_total_summary.diskon > 0
                              "
                              class="font-semibold text-gray-800 bg-gray-50"
                            >
                              <td class="text-left pr-2 border border-dark-100" colspan="4">DPP</td>
                              <td>
                                Rp.
                                {{ formatNumber(project.invoice_total_summary.invoice_subtotal) }}
                              </td>
                            </tr>

                            <!-- TAX / PPN -->
                            <tr
                              v-if="project.invoice_total_summary.tax > 1"
                              class="font-semibold text-gray-800 bg-gray-50"
                            >
                              <td class="text-right pr-2 border border-dark-100" colspan="4">
                                {{ project.invoice_total_summary.tax_name }} (11%)
                              </td>
                              <td>Rp. {{ formatNumber(project.invoice_total_summary.tax) }}</td>
                            </tr>

                            <!-- PPH -->
                            <tr
                              v-if="project.invoice_total_summary.diskon > 0"
                              class="font-semibold text-gray-800 bg-gray-50"
                            >
                              <td class="text-right pr-2 border border-dark-100" colspan="4">
                                PPH
                              </td>
                              <td>
                                Rp. {{ formatNumber(project.invoice_total_summary.potongan) }}
                              </td>
                            </tr>

                            <!-- GRAND TOTAL -->
                            <tr class="font-bold text-gray-800 bg-gray-100">
                              <td class="text-right pr-2 border border-dark-100" colspan="4">
                                Grand Total
                              </td>
                              <td>
                                Rp. {{ formatNumber(project.invoice_total_summary.grand_total) }}
                              </td>
                            </tr>

                            <!-- TOTAL TERBAYAR -->
                            <tr class="font-bold text-gray-800 bg-gray-100">
                              <td class="text-right pr-2 border border-dark-100" colspan="4">
                                Total Terbayar
                              </td>
                              <td>
                                Rp.
                                {{ formatNumber(project.invoice_total_summary.payment_subtotal) }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="hidden" id="notes-list" role="tabpanel">
                <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                  <div
                    class="flex items-center justify-between gap-3 p-4 border-b border-borderColor"
                  >
                    <h5 class="m-0 font-semibold">Notes</h5>
                    <!-- Dropdown -->
                    <div class="flex items-center gap-3 flex-wrap">
                      <div>
                        <a
                          href="javascript:void(0);"
                          class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                          data-dropdown-toggle="notes-dropdown"
                        >
                          <i class="ti ti-sort-ascending-2 me-2"></i>Sort By<i
                            class="ti ti-chevron-down ms-2"
                          ></i>
                        </a>
                        <ul
                          id="notes-dropdown"
                          class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                        >
                          <li>
                            <a
                              href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              >Newest</a
                            >
                          </li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              >Oldest</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="p-4">
                    <template v-for="ticket in ticketList">
                      <div class="border border-borderColor rounded p-4 mb-4">
                        <div
                          class="flex items-center justify-between gap-3 lg:flex-nowrap flex-wrap mb-4"
                        >
                          <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                            <div
                              class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0"
                            >
                              <img
                                src="@/assets/img/users/avatar-1.jpg"
                                alt="avatar-1"
                                class="img-fluid rounded"
                              />
                            </div>
                            <h6 class="font-medium text-[14px] mb-0 flex flex-col gap-1">
                              {{ ticket.reporter_user.name }}
                              <span class="text-[14px] font-normal text-body">{{
                                Intl.DateTimeFormat('id-ID', {
                                  timeStyle: 'short',
                                  dateStyle: 'long',
                                }).format(new Date(ticket.created_at))
                              }}</span>
                            </h6>
                          </div>
                        </div>
                        <h6 class="font-medium text-[14px] mb-1">Keterangan</h6>
                        <div v-html="ticket.description"></div>

                        <!-- start row -->
                        <div
                          class="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4"
                          v-if="ticket.attachments.length > 0"
                        >
                          <template v-for="attachment in ticket.attachments">
                            <div class="lg:col-span-5">
                              <div class="border border-borderColor rounded p-4 rounded relative">
                                <div class="flex items-center gap-3 flex-wrap">
                                  <div
                                    :class="changeFileIconColor(attachment.attachment)"
                                    class="flex items-center justify-center w-10 h-10 rounded shrink-0"
                                  >
                                    <i
                                      :class="changeFileIcon(attachment.attachment)"
                                      class="text-[18px] text-white"
                                    ></i>
                                  </div>
                                  <div>
                                    <h6 class="font-medium text-[14px] mb-1">
                                      {{ attachment.attachment }}
                                    </h6>
                                    <p class="mb-0">365 KB</p>
                                  </div>
                                </div>
                                <button
                                  class="w-6 h-6 rounded-full absolute right-2 top-5 bg-light text-dark flex items-center justify-center hover:bg-gray-200"
                                >
                                  <i class="ti ti-arrow-down"></i>
                                </button>
                              </div>
                            </div>
                          </template>
                        </div>
                      </div>
                    </template>
                    <!-- Item 1 -->
                  </div>
                </div>
              </div>
            </div>
            <!-- end tab content -->
          </div>
        </div>
      </div>
      <!-- end grid -->
    </div>
    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->
  </div>
  <!-- /Page Wrapper -->

  <!-- <contact-details-modal></contact-details-modal> -->
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import BasePagination from '@/components/BasePagination.vue'
import { initFlowbite } from 'flowbite'
import { onMounted, onUnmounted, ref } from 'vue'
import api from '../../../../api/api'

export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      project: {
        payments: [],
        invoice_total_summary: [],
      },
      ticketList: [],
      fileIcon: {
        spreadsheet: 'ti ti-file-spreadsheet text-[18px] text-white',
        word: 'ti ti-file-type-docx text-[18px] text-white',
        pdf: 'ti ti-file-type-pdf text-[18px] text-white',
        image: 'ti ti-polaroid text-[18px] text-white',
        default: 'ti ti-file text-[18px] text-white',
      },
      fileIconColor: {
        spreadsheet: 'bg-green-500',
        word: 'bg-blue-500',
        pdf: 'bg-red-500',
        image: 'bg-yellow-500',
        default: 'bg-gray-500',
      },
      loading: true,
      isEditorVisible: false,
      selected: '1 hr',
      selectedOne: 'High',
      selectedTwo: 'Jerald Sen',
      Reminder: [
        { label: 'Select', value: 'Select' },
        { label: '1 hr', value: '1 hr' },
        { label: 'Reminder', value: 'Reminder' },
        { label: '10hr', value: '10hr' },
      ],
      Task: [
        { label: 'Select', value: 'Select' },
        { label: 'High', value: 'High' },
        { label: 'Low', value: 'Low' },
      ],
      Assigned: [
        { label: 'Select', value: 'Select' },
        { label: 'Jerald Sen', value: 'Jerald Sen' },
        { label: 'Jackson Daniel', value: 'Jackson Daniel' },
      ],
    }
  },
  computed: {
    paidCount() {
      if (!this.project?.payments) return 0

      return this.project.payments.filter((p) => p.status === 'terbayar').length
    },

    paymentStatusText() {
      const totalTermin = parseInt(this.project?.termin) || 0
      const paid = this.paidCount

      if (totalTermin === 0) return '-'
      if (paid >= totalTermin) return 'Lunas'

      return `${paid} / ${totalTermin}`
    },

    paymentStatusClass() {
      const totalTermin = parseInt(this.project?.termin) || 0
      const paid = this.paidCount

      // "-" case
      if (totalTermin === 0) return 'bg-gray-400'

      // LUNAS
      if (paid >= totalTermin) return 'bg-success'

      // BELUM LUNAS (1 / 2, 0 / 2, 2 / 3 etc)
      return 'bg-danger'
    },
  },
  methods: {
    formatNumber(value) {
      return Number(value || 0).toLocaleString('id-ID')
    },
    toggleEditor() {
      this.isEditorVisible = !this.isEditorVisible
    },
    toggleHeader() {
      document.getElementById('collapse-header').classList.toggle('active')
      document.body.classList.toggle('header-collapse')
    },
    initQuill() {
      if (this.$refs.editorRef) {
        const quill = new Quill(this.$refs.editorRef, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline'],
              ['image', 'code-block'],
            ],
          },
        })

        quill.on('text-change', () => {
          this.content = quill.root.innerHTML
        })
      }
    },
    async fetchProject() {
      this.loading = true

      try {
        const id = this.$route.params.id

        const response = await api.get(`/projects/detail/${id}`)

        const item = response.data.data || response.data.project || response.data

        if (!item) {
          console.error('Data project tidak ditemukan')
          return
        }

        // mapping sesuai kebutuhan kamu
        this.project = {
          id: item.id || '-',
          title: item.title || '-',
          code: item.code || '-',
          spk_code: item.spk_code || '-',

          // customer
          fid_cust: item.fid_cust || '-',
          company_name: item.company_name || '-',

          // invoice
          no_inv: item.no_inv || '-',
          coa_sales: item.coa_sales || '-',
          inv_address: item.inv_address || '-',
          status: item.status || '-',
          paid: item.paid || '-',
          fid_tax: item.fid_tax || '-',
          termin: item.termin || '-',
          currency: item.currency || '-',
          sub_total: item.sub_total || '-',
          penjualan: item.penjualan || '-',
          potongan: item.potongan || '-',
          amount: item.amount || '-',
          residual: item.residual || '-',

          // tanggal
          inv_date: item.inv_date || '-',
          inv_date_format: item.inv_date_format || '-',
          inv_contract_date: item.inv_contract_date || '-',
          inv_contract_date_format: item.inv_contract_date_format || '-',
          created_at: item.created_at || '-',
          created_at_format: item.created_at_format || '-',

          is_verified: item.is_verified || '-',
          dikirim: item.dikirim || '-',
          tgl_dikirim: item.tgl_dikirim || '-',
          keterangan: item.keterangan || '-',
          deleted: item.deleted || '-',

          // project extension
          pic_project_user_id: item.pic_project_user_id || '-',
          pic_project_name: item.pic_project_name || '-',
          pic_company_user_id: item.pic_company_user_id || '-',
          pic_company_name: item.pic_company_name || '-',
          rewards: item.rewards || 0,
          feedback_point: item.feedback_point || '-',
          feedback_text: item.feedback_text || '-',
          is_active: item.is_active ?? '-',

          // tambahan lama (untuk Company Bukukas jika masih perlu)
          jenis: item.jenis || '-',
          bentuk: item.bentuk || '-',
          npwp: item.npwp || '-',
          address: item.address || '-',
          email: item.email || '-',
          memo: item.memo || '-',
          pic_contact_id: item.pic_contact_id || '-',

          progress: item.progress || 0,
          payments: item.payments || [],
          invoice_total_summary: item.invoice_total_summary || [],
        }
      } catch (error) {
        console.error('Gagal:', error)
      } finally {
        this.loading = false
      }
    },

    async fetchTicket() {
      try {
        const projectId = this.$route.params.id
        const response = await api.get(`/ticket/project/${projectId}`)
        this.ticketList = response.data.data || []
        console.log(this.ticketList)
      } catch (error) {
        console.error('Gagal mengambil tiket:', error)
      }
    },

    changeFileIcon(fileType) {
      if (!fileType) return this.fileIcon.default
      if (/^.*\.(xlsx|xls|csv)$/i.test(fileType)) {
        return this.fileIcon.spreadsheet
      }
      if (/^.*\.(docx|doc|docm|odt)$/i.test(fileType)) {
        return this.fileIcon.word
      }
      if (/^.*\.pdf$/i.test(fileType)) {
        return this.fileIcon.pdf
      }
      if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(fileType)) {
        return this.fileIcon.image
      }
      return this.fileIcon.default
    },
    changeFileIconColor(fileType) {
      if (!fileType) return this.fileIconColor.default
      if (/^.*\.(xlsx|xls|csv)$/i.test(fileType)) {
        return this.fileIconColor.spreadsheet
      }
      if (/^.*\.(docx|doc|docm|odt)$/i.test(fileType)) {
        return this.fileIconColor.word
      }
      if (/^.*\.pdf$/i.test(fileType)) {
        return this.fileIconColor.pdf
      }
      if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(fileType)) {
        return this.fileIconColor.image
      }
      return this.fileIconColor.default
    },
  },
  mounted() {
    initFlowbite()
    this.fetchProject()
    this.fetchTicket()
    this.initQuill()
  },
  setup() {
    const openDropdown = ref(null)
    const dropdownRefs = ref([])

    const toggleDropdown = (index, event) => {
      event.stopPropagation()
      if (openDropdown.value === index) {
        openDropdown.value = null
      } else {
        openDropdown.value = index
      }
    }

    const closeAllDropdowns = () => {
      openDropdown.value = null
    }

    const handleClickOutside = (event) => {
      if (
        dropdownRefs.value &&
        dropdownRefs.value.some((ref) => ref && ref.contains(event.target))
      ) {
        return
      }
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
      dropdownRefs,
      toggleDropdown,
      closeAllDropdowns,
    }
  },
}
</script>
