<template>
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
      <h5 class="inline-flex items-center font-bold">Tambah Penawaran Baru</h5>

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
                  <label class="form-label">Judul Penawaran</label>
                </div>
                <input type="text" class="form-control" name="title" v-model="form.title" />
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Pesan</label>
                </div>
                <QuillEditor
                  v-model:content="form.message"
                  content-type="html"
                  theme="snow"
                  class="quill-editor-custom"
                  :toolbar="[
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ header: [1, 2, 3, false] }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ align: [] }],
                    ['link'],
                    ['clean'],
                  ]"
                />
              </div>
            </div>

            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Lampiran</label>
                </div>
                <file-pond
                  name="file"
                  ref="pond"
                  class-name="my-pond"
                  label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
                  :allow-multiple="true"
                  :files="myFiles"
                  :server="serverOptions"
                  :credits="false"
                  @updatefiles="handleFileUpdate"
                />
              </div>
            </div>

            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Leads</label>
                </div>
                <vue3-select v-model="form.lead_id" :options="leads" placeholder="Pilih/Cari" />
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
          <span v-else>Kirim Penawaran</span>
        </button>
      </div>
    </form>
  </div>
</template>



<script>
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import Vue3TagsInput from 'vue3-tags-input'
import Multiselect from 'vue-multiselect'
import { initFlowbite } from 'flowbite'
import { DatePicker, message } from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import api from '../../../../../api/api'

const FilePond = vueFilePond()

export default {
  emits: ['close', 'refresh-list'],
  components: {
    Vue3TagsInput,
    Multiselect,
    DatePicker,
    QuillEditor,
    FilePond,
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
      myFiles: [],
      form: {
        title: '',
        message: '',
        name: '',
        type: '',
        isDisabled: false,
        project: null,
        lead_id: null,
      },
      leads: [],
      picCompany: [],
      adSource: [],
      project_list: [],

      // FilePond Server Options linked to your Axios API instance
      serverOptions: {
        process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
          const formData = new FormData()
          formData.append('file', file, file.name)

          api
            .post('/attachments/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
              onUploadProgress: (e) => {
                progress(e.lengthComputable, e.loaded, e.total)
              },
            })
            .then((response) => {
              // Pass the folder ID response back to FilePond
              load(response.data)
            })
            .catch((err) => {
              console.log(err.message)
            })

          return {
            abort: () => {
              abort()
            },
          }
        },
        revert: (uniqueFileId, load, error) => {
          api
            .delete('/attachments/revert', {
              // Send the uniqueFileId in the body as raw text
              data: uniqueFileId,
              headers: { 'Content-Type': 'text/plain' },
            })
            .then(() => {
              load()
            })
            .catch((err) => {
              error(err.message)
            })
        },
      },
    }
  },
  methods: {
    handleFileUpdate(fileItems) {
      this.myFiles = fileItems.map((fileItem) => fileItem.file)
    },

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

    async loadLeads() {
      try {
        const response = await api.get('/leads')
        const leadsData = Array.isArray(response.data) ? response.data : response.data.data || []

        this.leads = leadsData.map((item) => ({
          label: item.name,
          value: item.id,
        }))
      } catch (error) {
        console.error('Gagal memuat data leads:', error)
      }
    },

    close() {
      this.isOpening = false
      this.isOpenVisible = false

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
        this.submittedLoading = false
        return
      }

      const formData = new FormData()

      formData.append('title', this.form.title)
      formData.append('message', this.form.message)
      formData.append('leads_id', this.form.lead_id)

      const pondFiles = this.$refs.pond.getFiles()
      pondFiles.forEach((fileItem) => {
        // Only append files that have successfully uploaded and received a server ID
        if (fileItem.serverId) {
          // Use array syntax [] so Laravel processes it as an array
          formData.append('attachment[]', fileItem.serverId)
        }
      })
      // console.log(formData.getAll('attachment[]'))

      api
        .post('/offers', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Axios usually handles this if passing FormData, but explicit is fine
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
      const targetValue = newVal?.value || newVal
      var selected_pic =
        this.project_list.find((item) => item.value === targetValue)?.pic_company_id || null
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

      if (this.form.valid_until && this.form.valid_until < newVal) {
        this.form.valid_until = null
      }
    },
  },
  computed: {},

  mounted() {
    this.loadLeads()
    this.isOpenVisible = true
    requestAnimationFrame(() => {
      this.isOpening = true
    })

    initFlowbite()
  },
}
</script>
