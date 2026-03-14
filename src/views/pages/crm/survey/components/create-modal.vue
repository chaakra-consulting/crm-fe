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
      <h5 class="inline-flex items-center font-bold">Tambah Survey Baru</h5>

      <button
        type="button"
        @click="close"
        class="text-title bg-transparent hover:text-primary text-sm w-6 h-6 border border-borderColor bg-primary-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
      >
        <i class="ti ti-x"></i>
      </button>
    </div>
    <form @submit.prevent="createData">
      <div id="accordion-collapse-2" class="p-6" data-accordion="collapse">
        <div class="accordion-body text-[12px]">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Judul Survey </label>
                </div>
                <input type="text" class="form-control" name="title" v-model="form.title" />
              </div>
            </div>
            <input type="hidden" name="project_pic" v-model="form.project_pic" />
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Tanggal Survey</label>
                </div>
                <input
                  type="date"
                  class="form-control"
                  name="date_issued"
                  v-model="form.date_issued"
                />
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Berlaku Sampai</label>
                </div>
                <input
                  type="date"
                  :min="minimumDate"
                  class="form-control"
                  name="valid_until"
                  v-model="form.valid_until"
                />
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Nama Projek</label>
                </div>
                <vue3-select
                  v-model="form.project"
                  :options="project_list"
                  placeholder="Pilih/Cari"
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
          <span v-else>Tambah Data</span>
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
      minimumDate: '',
      isOpening: false,
      isOpenVisible: false,
      isReadonly: true,
      submittedLoading: false,
      rateDisplay: '',
      mode: 'create',
      internalTags: [],
      form: {
        title: '-',
        date_issued: null,
        project_pic: null,
        valid_until: null,
        phoneNumber: '+62',

        name: '',
        type: '',
        isDisabled: false,

        project: null,
      },
      picCompany: [],
      adSource: [],
      project_list: [],
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
      } catch (error) {
        console.error('Gagal memuat data ad source:', error)
      }
    },
    async loadProject() {
      this.isLoading = true
      try {
        const params = {
          daterange: '',
        }

        const response = await api.get('/projects', { params })
        const projects = Array.isArray(response.data) ? response.data : response.data.data || []

        this.project_list = projects.map((item) => ({
          pic_company_id: item.pic_company_user_id,
          label: item.title || '',
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
      this.createData()
    },
    createData() {
      this.submittedLoading = true
      if (!this.form.title) {
        this.$swal({
          icon: 'warning',
          title: 'Field Wajib Belum Terisi',
          text: 'Harap isi semua field yang wajib diisi!',
          timer: 2500,
        })
        return
      }

      const formData = new FormData()

      formData.append('title', this.form.title)
      formData.append('date_issued', this.form.date_issued)
      formData.append('project_pic', this.form.project_pic)
      formData.append('valid_until', this.form.valid_until)
      formData.append('project_id', this.form.project)
      console.log(formData.entries())

      // POST ke backend
      api
        .post('/survey', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          this.$swal({
            icon: 'success',
            title: 'Berhasil!',
            text: 'Data berhasil dibuat!',
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
          this.submittedLoading = false

          this.$swal({
            icon: 'error',
            title: 'Gagal!',
            text: errorMessage,
            timer: 2500,
          })
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
    companies: Array,
  },
  watch: {
    'form.project': function (newVal) {
      var selected_pic =
        this.project_list.find((item) => item.value === newVal)?.pic_company_id || null
      console.log(selected_pic)

      if (selected_pic === null) {
        this.$swal({
          icon: 'warning',
          title: 'PIC Tidak Ditemukan',
          text: 'Tidak dapat menemukan PIC untuk projek yang dipilih. Mohon tambahkan projek PIC di fitur projek',
          timer: 2500,
        })
      } else {
        this.form.project_pic = selected_pic
      }
    },
    'form.date_issued': function (newVal) {
      this.minimumDate = newVal

      // Optional: If valid_until is now before the new date_issued, clear it
      if (this.form.valid_until && this.form.valid_until < newVal) {
        this.form.valid_until = null
      }
    },
  },
  computed: {},

  mounted() {
    this.loadProject()
    this.loadAdSource()
    this.isOpenVisible = true
    requestAnimationFrame(() => {
      this.isOpening = true
    })

    initFlowbite()
  },
}
</script>
