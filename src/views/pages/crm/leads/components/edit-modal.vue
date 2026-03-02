<template>
  <!-- BACKDROP -->
  <div
    v-show="isOpen"
    class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-[9999] transition-opacity duration-300"
    :class="isOpen ? 'opacity-100' : 'opacity-0'"
    @click="close"
  ></div>

  <div
    v-show="isOpenVisible"
    class="fixed right-0 top-0 bg-white z-[9999] transition-transform duration-300 overflow-y-auto w-full sm:w-[480px] md:w-1/2 lg:w-[800px] h-full"
    :class="isOpening ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center font-bold">Edit Lead</h5>

      <button
        type="button"
        @click="close"
        class="text-title bg-transparent hover:text-primary text-sm w-6 h-6 border border-borderColor bg-primary-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
      >
        <i class="ti ti-x"></i>
      </button>
    </div>
    <form @submit.prevent="updateData">
      <div id="accordion-collapse-2" class="p-6" data-accordion="collapse">
        <div class="accordion-body text-[12px]">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Nama Lead <span class="text-danger">*</span></label>
                </div>
                <input type="text" class="form-control" name="name" v-model="form.name" />
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Kategori <span class="text-danger">*</span></label>
                </div>
                <select name="type" class="form-control" id="type" v-model="form.type">
                  <option value="">Pilih Kategori</option>
                  <option value="company">Perusahaan</option>
                  <option value="personal">Personal</option>
                </select>
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Status <span class="text-danger">*</span></label>
                </div>
                <select name="status" class="form-control" id="status" v-model="form.status">
                  <option value="">Pilih Status</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Unqualified">Unqualified</option>
                  <option value="Warm">Warm</option>
                  <option value="New">New</option>
                </select>
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label"
                    >Sumber Informasi <span class="text-danger">*</span></label
                  >
                </div>
                <vue3-select
                  v-model="form.adSourceInput"
                  :options="adSource"
                  placeholder="Pilih/Cari"
                />
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label"
                    >Nama Perusahaan
                    <span class="text-danger text-xs"
                      >*(Jika kategori leads adalah perusahaan)</span
                    ></label
                  >
                </div>
                <vue3-select
                  v-model="form.company_id"
                  :isDisabled="form.type != 'company'"
                  :options="company_list"
                  placeholder="Pilih/Cari"
                />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Email </label>
                <input type="text" class="form-control" name="email" v-model="form.email" />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Instagram </label>
                <input type="text" class="form-control" name="instagram" v-model="form.instagram" />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Facebook </label>
                <input type="text" class="form-control" name="facebook" v-model="form.facebook" />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Twitter </label>
                <input type="text" class="form-control" name="twitter" v-model="form.twitter" />
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">No. Telepon <span class="text-danger">*</span></label>
                </div>
                <input
                  type="text"
                  name="phone_number"
                  @input="handlePhoneNumberInput"
                  @keydown="handlePhoneNumberKeyDown"
                  class="form-control"
                  v-model="form.phoneNumber"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end p-4 pt-0">
        <button type="button" @click="close" class="btn btn-light me-2">Batal</button>
        <button type="submit" :disabled="submittedLoading" class="btn btn-primary">
          <div
            v-if="submittedLoading"
            class="spinner-border border-light spinner-border-sm"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
          <span v-else>Update Data</span>
        </button>
      </div>
    </form>
  </div>
  <!-- /Add Contact -->
</template>

<script>
import Vue3TagsInput from 'vue3-tags-input'
import Multiselect from 'vue-multiselect'
import { initFlowbite } from 'flowbite'
import { ref } from 'vue'
import { DatePicker } from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import api from '../../../../../api/api'

export default {
  emits: ['close', 'refresh-list'],
  components: {
    Vue3TagsInput,
    Multiselect,
    DatePicker,
  },

  data() {
    return {
      isOpening: false,
      isOpenVisible: false,
      isReadonly: true,
      submittedLoading: false,
      rateDisplay: '',
      mode: 'create',
      internalTags: [],
      form: {
        email: '-',
        instagram: '-',
        facebook: '-',
        twitter: '-',
        adSourceInput: null,
        status: this.lead.status || '',
        phoneNumber: this.lead.phone_number || '',

        name: this.lead.name || '',
        type: this.lead.type || '',
        isDisabled: false,

        company_id: null,
      },
      picCompany: [],
      adSource: [],
      company_list: [],
    }
  },
  methods: {
    handlePhoneNumberInput(e) {
      let val = e.target.value
      if (!val.startsWith('+62')) val = '+62' + val.replace(/^\+?6?2?/, '')
      const rest = val.substring(3).replace(/\D/g, '')
      this.phoneNumber = '+62' + rest
    },
    handlePhoneNumberKeyDown(e) {
      if (e.target.selectionStart <= 3 && (e.key === 'Backspace' || e.key === 'Delete')) {
        e.preventDefault()
      }
    },
    async loadAdSource() {
      try {
        const response = await api.get('/sources')
        const adSourceData = Array.isArray(response.data) ? response.data : response.data.data || []

        this.adSource = adSourceData.map((item) => ({
          label: item.name,
          value: item.id,
        }))

        this.form.adSourceInput = this.adSource.find(
          (source) => source.label == this.lead.ad_source,
        ).value
      } catch (error) {
        console.error('Gagal memuat data ad source:', error)
      }
    },
    async loadCompanies() {
      try {
        const response = await api.get('/companies')
        const companyData = Array.isArray(response.data) ? response.data : response.data.data || []

        this.company_list = companyData.map((item) => ({
          label: item.name,
          value: item.id,
        }))
      } catch (error) {
        console.error('Gagal memuat data company:', error)
      }
    },
    close() {
      this.isOpening = false // slide-out
      this.isOpenVisible = false // fade-out

      this.$emit('close')
    },
    submitForm() {
      this.updateData()
    },
    updateData() {
      this.submittedLoading = true
      if (!this.form.name || !this.form.type || !this.form.phoneNumber) {
        this.$swal({
          icon: 'warning',
          title: 'Field Wajib Belum Terisi',
          text: 'Harap isi semua field yang wajib diisi!',
          timer: 2500,
        })
        return
      }

      // === FORM DATA UNTUK FOTO + DATA LAIN ===
      const formData = new FormData()

      for (const key in this.form) {
        formData.append(key, this.form[key])
      }
      formData.append('_method', 'PUT')
      console.log(...formData)

      // POST ke backend
      api
        .put('/leads/' + this.lead.id, formData, {
          // headers: {
          //   'Content-Type': 'multipart/form-data',
          // },
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
            this.submittedLoading = false
          })
        })
        .catch((error) => {
          // ambil pesan error dari backend
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
          this.submittedLoading = false
        })
        .finally(() => {
          this.submittedLoading = false
        })
    },
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    lead: {
      type: Object,
      default: () => ({}),
    },
    companies: Array,
  },
  watch: {
    'form.type': function (newVal) {
      if (newVal == 1) {
        this.loadCompanies()
      } else {
        this.form.company_id = null
      }
    },
  },
  computed: {},

  mounted() {
    this.loadAdSource()
    this.form.type = this.lead.type
    console.log(this.lead.type)

    this.isOpenVisible = true

    requestAnimationFrame(() => {
      this.isOpening = true
    })

    initFlowbite()
  },
}
</script>
