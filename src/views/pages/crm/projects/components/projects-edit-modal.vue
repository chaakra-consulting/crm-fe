<template>
  <!-- BACKDROP -->
  <div
    v-show="isOpen"
    class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-[9999] transition-opacity duration-300"
    :class="isOpen ? 'opacity-100' : 'opacity-0'"
    @click="close"
  ></div>

  <!-- MODAL -->
  <div
    v-show="isOpenVisible"
    class="fixed right-0 top-0 bg-white z-[9999] transition-transform duration-300 overflow-y-auto w-full sm:w-[480px] md:w-1/2 lg:w-[800px] h-full"
    :class="isOpening ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center font-bold">Edit Perusahaan</h5>
      <button
        type="button"
        @click="close"
        class="text-title bg-transparent hover:text-primary text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
      >
        <i class="ti ti-x"></i>
      </button>
    </div>
    <form @submit.prevent="editData">
      <div id="accordion-collapse-2" class="p-6" data-accordion="collapse">
        <div class="accordion-body text-[12px]">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">PIC Perusahaan </label>
                <div
                  v-if="isReadonly"
                  class="form-control bg-gray-100 text-gray-700 cursor-not-allowed"
                >
                  Chaakra Consulting
                </div>

                <vue3-select
                  v-else
                  v-model="form.fid_custt"
                  :options="workerCompanies"
                  placeholder="Select"
                />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">No. SPK </label>
                <input type="text" class="form-control" name="spk_code" v-model="form.spk_code" />
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Nama Projek <span class="text-danger">*</span></label>
                </div>
                <input type="text" class="form-control" v-model="form.invoice_item_title" />
              </div>
            </div>
            <div :class="form.fid_cust ? 'md:col-span-6' : 'md:col-span-12'">
              <div class="mb-3 mb-md-0">
                <label class="form-label">Nama Perusahaan <span class="text-danger">*</span></label>
                <vue3-select
                  v-model="form.fid_cust"
                  :options="companies"
                  placeholder="Pilih/Cari"
                  @update:modelValue="fetchPICCompany"
                />
              </div>
            </div>
            <div v-if="form.fid_cust" class="md:col-span-6 transition-all duration-300">
              <div class="mb-3 mb-md-0">
                <label class="form-label">PIC Perusahaan <span class="text-danger">*</span></label>
                <vue3-select
                  v-model="form.pic_company_user_id"
                  :options="picCompany"
                  placeholder="Pilih/Cari"
                />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label for="input-date" class="form-label"
                  >Tanggal SPK (Mulai) <span class="text-danger">*</span></label
                >
                <input
                  type="date"
                  class="form-control custom-date"
                  v-model="form.inv_date"
                  id="input-date"
                />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label for="input-date" class="form-label"
                  >Tanggal Kontrak Selesai (Target) <span class="text-danger">*</span></label
                >
                <input
                  type="date"
                  class="form-control custom-date"
                  v-model="form.inv_contract_date"
                  id="input-date"
                />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3 mb-md-0">
                <label class="form-label">PIC Projek <span class="text-danger">*</span></label>
                <vue3-select
                  v-model="form.pic_project_user_id"
                  :options="employees"
                  placeholder="Pilih/Cari"
                />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Jumlah Termin <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control phone"
                  name="termin"
                  v-model="form.termin"
                  @input="form.termin = form.termin.replace(/[^0-9]/g, '')"
                />
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <label class="form-label">Harga (DPP) <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  v-model="rateDisplay"
                  @input="handleRateInput"
                  placeholder="0"
                  inputmode="numeric"
                />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3 mb-md-0">
                <label class="form-label">Pajak</label>
                <vue3-select v-model="form.fid_tax" :options="taxes" placeholder="Pilih/Cari" />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">PPH</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.potongan"
                  placeholder="Contoh: 2.5"
                  @input="onPotonganInput"
                  inputmode="decimal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end p-4 pt-0">
        <button type="button" @click="close" class="btn btn-light me-2">Batal</button>
        <button type="submit" class="btn btn-primary">Ubah</button>
      </div>
    </form>
  </div>
  <!-- /Edit Contact -->
</template>
<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import Vue3TagsInput from 'vue3-tags-input'
import Multiselect from 'vue-multiselect'
import { initFlowbite } from 'flowbite'
import { ref } from 'vue'
import { DatePicker } from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import api from '../../../../../api/api'
import dayjs from 'dayjs'

const value = ref(new Date())
const valueOne = ref(new Date())
const valueTwo = ref(new Date())
const valueThree = ref(new Date())
const valueFour = ref(new Date())

export default {
  name: 'ContactsEditModal',
  emits: ['close', 'refresh-list'],
  components: {
    Multiselect,
    Vue3TagsInput,
    'a-date-picker': DatePicker,
  },
  data() {
    return {
      isOpening: false,
      isOpenVisible: false,
      isReadonly: true,
      rateDisplay: '',
      mode: 'create',
      internalTags: [],
      form: {
        /** Invoice */
        spk_code: null,
        potongan: null,

        termin: null,
        inv_date: null,
        inv_contract_date: null,

        fid_tax: 1,
        fid_cust: null,
        fid_custt: 1,

        /** Item Invoice */
        invoice_item_title: '',
        // invoice_item_rate: '',

        /** Project CRM */
        pic_project_user_id: null,
        pic_company_user_id: null,
      },
      picCompany: [],
      companies: [],
      employees: [],
      workerCompanies: [{ label: 'Chaakra Consulting', value: 1 }],
      taxes: [
        { label: '0%', value: 1 },
        { label: '11%', value: 0 },
      ],
    }
  },
  methods: {
    close() {
      this.isOpening = false // slide-out
      this.isOpenVisible = false // fade-out

      this.$emit('close')
    },
    onPotonganInput(e) {
      let val = e.target.value

      // hanya angka & titik
      val = val.replace(/[^0-9.]/g, '')

      // hanya 1 titik desimal
      const parts = val.split('.')
      if (parts.length > 2) {
        val = parts[0] + '.' + parts.slice(1).join('')
      }

      this.form.potongan = val
    },
    async fetchContacts(companyId) {
      try {
        const response = await api.get('/contacts', {
          params: { company_bukukas_id: companyId },
        })

        this.picContacts = (response.data || []).map((item) => ({
          label: item.name,
          value: item.id,
        }))
      } catch (error) {
        console.error('Gagal memuat data Kontak:', error)
      }
    },
    async fetchPICCompany(companyId) {
      try {
        if (!companyId) {
          this.picCompany = []
          return
        }

        const response = await api.get('/contacts', {
          params: { company_bukukas_id: companyId },
        })

        this.picCompany = (response.data || []).map((item) => ({
          label: item.name,
          value: item.user_id,
        }))
      } catch (error) {
        console.error('Gagal memuat data kota:', error)
      }
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
      if (this.$refs.editorRefone) {
        const quillone = new Quill(this.$refs.editorRefone, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline'],
              ['image', 'code-block'],
            ],
          },
        })

        quillone.on('text-change', () => {
          this.content = quillone.root.innerHTML
        })
      }
    },
    submitForm() {
      this.editData()
    },
    editData() {
      // Validasi field wajib
      if (
        !this.form.invoice_item_title ||
        !this.form.fid_cust ||
        !this.form.pic_company_user_id ||
        !this.form.inv_date ||
        !this.form.inv_contract_date ||
        !this.form.pic_project_user_id ||
        !this.form.termin
        // !this.form.invoice_item_rate ||
        // !this.form.fid_tax ||
        // !this.form.potongan
      ) {
        this.$swal({
          icon: 'warning',
          title: 'Field Wajib Belum Terisi',
          text: 'Harap isi semua field yang wajib diisi!',
          timer: 2500,
        })
        return
      }

      // Pastikan selectedContact tersedia
      if (!this.project || !this.project.id) {
        this.$swal({
          icon: 'error',
          title: 'Gagal!',
          text: 'ID project tidak ditemukan!',
        })
        return
      }

      const formData = new FormData()

      // field lainnya
      for (const key in this.form) {
        formData.append(key, this.form[key])
      }

      // === API CALL DENGAN ID ===
      formData.append('_method', 'PUT')
      api
        .post(`/projects/update/${this.project.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          this.$swal({
            icon: 'success',
            title: 'Berhasil!',
            text: 'Data berhasil diubah!',
            timer: 2500,
          }).then(() => {
            this.$emit('refresh-list')
            this.$emit('close')
          })
        })
        .catch((error) => {
          const backendMessage = error.response?.data?.message
          const backendErrors = error.response?.data?.errors

          const errorMessage = backendErrors
            ? Object.values(backendErrors).flat().join(', ')
            : backendMessage || 'Terjadi kesalahan!'

          this.$swal({
            icon: 'error',
            title: 'Gagal!',
            text: errorMessage,
            timer: 2500,
          })
        })
    },
    handleRateInput(e) {
      const raw = e.target.value.replace(/[^\d]/g, '')
      this.form.invoice_item_rate = raw ? Number(raw) : 0
      this.rateDisplay = raw ? new Intl.NumberFormat('id-ID').format(raw) : ''
    },
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    project: {
      type: Object,
      default: () => ({}),
    },
    companies: Array,
    employees: Array,
  },
  computed: {
    selectedPIC() {
      const id = Number(this.form.fid_custt)
      if (!id) return '-'

      return this.workerCompanies.find((i) => i.value === id)?.label || '-'
    },
  },
  watch: {
    project: {
      handler(newVal) {
        if (newVal) {
          this.form.fid_custt = newVal.fid_custt ? Number(newVal.fid_custt) : null
          this.form.id = newVal.id ?? ''
          this.form.invoice_item_title = newVal.title ?? ''
          this.form.code = newVal.code ?? ''
          this.form.spk_code = newVal.spk_code ?? ''

          // customer
          this.form.fid_cust = newVal.fid_cust ?? ''
          this.form.company_name = newVal.company_name ?? ''

          // invoice
          this.form.no_inv = newVal.no_inv ?? ''
          this.form.coa_sales = newVal.coa_sales ?? ''
          this.form.inv_address = newVal.inv_address ?? ''
          this.form.status = newVal.status ?? ''
          this.form.paid = newVal.paid ?? ''
          this.form.fid_tax =
            newVal.fid_tax !== null && newVal.fid_tax !== undefined ? Number(newVal.fid_tax) : null
          this.form.termin = newVal.termin ?? ''
          this.form.currency = newVal.currency ?? ''
          this.form.sub_total = newVal.sub_total ?? ''
          this.form.penjualan = newVal.penjualan ?? ''
          this.form.potongan = newVal.potongan ?? ''
          this.form.amount = newVal.amount ?? ''
          this.form.residual = newVal.residual ?? ''
          this.form.invoice_item_rate = newVal.total ? Number(newVal.total) : 0
          // tanggal
          this.form.inv_date = newVal.inv_date ?? ''
          this.form.inv_date_format = newVal.inv_date_format ?? ''
          this.form.inv_contract_date = newVal.inv_contract_date ?? ''
          this.form.inv_contract_date_format = newVal.inv_contract_date_format ?? ''
          this.form.created_at = newVal.created_at ?? ''
          this.form.created_at_format = newVal.created_at_format ?? ''

          this.form.is_verified = newVal.is_verified ?? ''
          this.form.dikirim = newVal.dikirim ?? ''
          this.form.tgl_dikirim = newVal.tgl_dikirim ?? ''
          this.form.keterangan = newVal.keterangan ?? ''
          this.form.deleted = newVal.deleted ?? ''

          // project extension
          this.form.pic_project_user_id = newVal.pic_project_user_id ?? ''
          this.form.pic_company_user_id = newVal.pic_company_user_id ?? ''
          this.form.rewards = newVal.rewards ?? ''
          this.form.feedback_point = newVal.feedback_point ?? ''
          this.form.feedback_text = newVal.feedback_text ?? ''
          this.form.is_active = newVal.is_active ?? ''

          if (newVal.fid_cust) {
            this.fetchPICCompany(newVal.fid_cust)
          }
        }
      },
      immediate: true,
      deep: true,
    },
    'form.invoice_item_rate': {
      immediate: true,
      handler(val) {
        if (val === null || val === undefined || val === 0) {
          this.rateDisplay = ''
        } else {
          this.rateDisplay = new Intl.NumberFormat('id-ID').format(val)
        }
      },
    },
    'form.fid_cust'(newVal, oldVal) {
      // reset PIC saat perusahaan berubah
      this.form.pic_company_user_id = null

      // kalau perlu fetch PIC di sini juga
      if (newVal) {
        this.fetchPICCompany(newVal)
      }
    },
    isReadonly(val) {
      if (val) {
        this.form.fid_custt = 1
      }
    },
  },
  computed: {},
  mounted() {
    this.isOpenVisible = true

    requestAnimationFrame(() => {
      this.isOpening = true
    })
    // this.fetchCompany()
    // this.fetchProvince()
    // this.fetchTags()
    // this.fetchSources()
    initFlowbite()
  },
}
</script>
