<template>
  <!-- Overlay -->
  <div
    v-show="isOpen"
    class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-[9999] transition-opacity duration-300"
    :class="isOpen ? 'opacity-100' : 'opacity-0'"
    @click="close"
  ></div>

  <!-- Modal Wrapper -->
  <div
    v-show="isOpen"
    class="fixed inset-0 z-[10000] flex justify-center items-start overflow-y-auto"
  >
    <div class="w-full max-w-[500px] my-10 px-4">
      <div class="bg-white rounded-defaultradius max-h-[90vh] flex flex-col">

        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Masukkan Data</h5>
          <button type="button" class="text-title bg-transparent hover:text-primary text-sm w-6 h-6 border border-borderColor bg-primary-100 rounded-full"
            @click="close">
            <i class="ti ti-x"></i>
          </button>
        </div>

        <form @submit.prevent="createData">
          <!-- Body (SCROLL) -->
          <div class="p-4 overflow-y-auto">
            <div class="mb-3">
              <label class="form-label">Subjek <span class="text-danger">*</span></label>
              <input v-model="form.title" type="text" class="form-control" />
            </div>
            <!-- start row -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-6">
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Prioritas <span class="text-danger">*</span></label>
                  <vue3-select
                    v-model="form.priority"
                    :options="priorities"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Tipe <span class="text-danger">*</span></label>
                  <vue3-select  v-model="form.type"  :options="types" placeholder="Select" />
                </div>
              </div>
            </div>
            <div class="lg:col-span-12">
              <div class="mb-3">
                <label class="form-label">Projek <span class="text-danger">*</span></label>
                <vue3-select
                  v-model="form.project_id"
                  :options="filteredProjects"
                  placeholder="Select"
                />
              </div>
            </div>
            <!-- end row -->
            <div class="mb-3">
              <label class="form-label">Deskripsi <span class="text-danger">*</span></label>
              <QuillEditor
                v-model:content="form.description"
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
            <div class="md:col-span-12">
              <div class="mb-3">
                <label class="form-label">
                  Attachments
                </label>

                <div
                  class="w-100 flex bg-light border border-borderColor rounded p-6 shadow
                        items-center justify-center flex-col relative"
                >
                  <span class="block mb-1">
                    <i class="ti ti-folder-open text-primary fs-16"></i>
                  </span>

                  <p class="mb-0 text-[14px] text-dark">
                    Drop atau cari file nya
                  </p>

                  <!-- INPUT FILE -->
                  <input
                    type="file"
                    multiple
                    class="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                    @change="handleAttachments"
                  />

                  <p class="text-[13px] mb-0">Maximum size : 5 MB</p>
                </div>

                <!-- PREVIEW FILE -->
                <ul v-if="form.attachments.length" class="mt-3 text-sm">
                  <li
                    v-for="(file, index) in form.attachments"
                    :key="index"
                    class="flex justify-between items-center mb-1"
                  >
                    <span>{{ file.name }}</span>
                    <button
                      type="button"
                      class="text-danger text-xs"
                      @click="removeAttachment(index)"
                    >
                      Hapus
                    </button>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <!-- Footer -->
          <div class="p-4 border-t border-borderColor flex justify-end">
            <button type="button" @click="close" class="btn btn-light me-2">Batal</button>
            <button class="btn bg-primary text-white">Submit</button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import 'daterangepicker/daterangepicker.css'
import 'daterangepicker/daterangepicker.js'
import Vue3TagsInput from 'vue3-tags-input'
import { ref } from 'vue'
import { onMounted } from 'vue'
import moment from 'moment'
import { DatePicker } from 'ant-design-vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import api from '../../../../../api/api'


export default {
  emits: ['close', 'refresh-list'],
  components: {
    Vue3TagsInput,
    QuillEditor,
    'a-date-picker': DatePicker,
  },
  data() {
    return {
      // projects: [],
      form: {
        title: '',
        project_id: '',
        priority: 'medium',
        type: 'support',
        description: '',
        attachments: [],
      },
      PriorSta: [
        { label: 'Select', value: 'Select' },
        { label: 'Resolved', value: 'Resolved' },
        { label: 'Open', value: 'Open' },
        { label: 'Pending', value: 'Pending' },
        { label: 'Closed', value: 'Closed' },
      ],
      priorities: [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' },
      ],
      types: [
        { label: 'Bantuan', value: 'support' },
        { label: 'Komplain', value: 'complaint' },
        { label: 'Pertanyaan', value: 'question' },
      ],
    }
  },
  methods: {
    close() {
      this.isOpening = false
      this.isOpenVisible = false

      this.$emit('close')
    },
    handleAttachments(e) {
      const files = Array.from(e.target.files)

      this.form.attachments.push(...files)

      e.target.value = ''
    },
    removeAttachment(index) {
      this.form.attachments.splice(index, 1)
    },
    submitForm() {
      this.createData()
    },
    createData() {
      // Validasi field wajib
      if (
        !this.form.title ||
        !this.form.priority ||
        !this.form.type ||
        !this.form.description
      ) {
        this.$swal({
          icon: 'warning',
          title: 'Field Wajib Belum Terisi',
          text: 'Harap isi semua field yang wajib diisi!',
          timer: 2500,
        })
        return
      }

      if (
        this.form.type === 'complaint' &&
        (this.form.project_id === null || this.form.project_id === '')
      ) {
        this.$swal({
          icon: 'warning',
          title: 'Project Wajib Dipilih',
          text: 'Tipe complaint wajib memilih project!',
          timer: 2500,
        })
        return
      }

      const formData = new FormData()

      // ==========================
      // APPEND FIELD BIASA (KECUALI ATTACHMENTS)
      // ==========================
      Object.keys(this.form).forEach((key) => {
        if (key === 'attachments') return

        const value = this.form[key]

        if (value !== null && value !== undefined) {
          formData.append(key, value)
        }
      })

      // ==========================
      // APPEND ATTACHMENTS (MULTIPLE FILE)
      // ==========================
      if (Array.isArray(this.form.attachments)) {
        this.form.attachments.forEach((file, index) => {
          formData.append(`attachments[]`, file)
          // jika mau index: attachments[0], attachments[1], dst
          // formData.append(`attachments[${index}]`, file)
        })
      }

      // ==========================
      // POST KE BACKEND
      // ==========================
      api
        .post('/tickets/store', formData, {
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
            this.$emit('refresh-tags')
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
    }
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    projects: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    filteredProjects() {
      if (this.form.type === 'complaint') {
        return this.projects.filter(p => p.value !== null)
      }

      return this.projects
    },
  },
  watch: {
    'form.type'(newVal) {
      if (newVal === 'complaint') {
        this.form.project_id = null
      }
    },
  },
  setup() {
    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY')
    }

    onMounted(() => {})

    return {}
  },
  mounted() {
    this.isOpenVisible = true

    requestAnimationFrame(() => {
      this.isOpening = true
    })

    initFlowbite()
  },
}
</script>
