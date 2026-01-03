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
          <h5 class="font-bold text-[18px]">Tindak Lanjut</h5>
          <button
            type="button"
            class="text-title bg-transparent hover:text-primary text-sm w-6 h-6 border border-borderColor bg-primary-100 rounded-full"
            @click="close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>

        <form @submit.prevent="updateData">
          <!-- Body (SCROLL) -->
          <div id="accordion-collapse-2" class="p-6" data-accordion="collapse">
            <!-- <div class="p-4 overflow-y-auto"> -->
            <!-- start row -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-6">
              <div class="lg:col-span-12">
                <div class="mb-2 p-3 rounded-md bg-gray-50 border border-gray-100 shadow-sm">
                  <h6 class="text-sm text-gray-800 mb-1">Subjek</h6>
                  <p class="font-medium text-gray-800 mb-1">
                    {{ form.title }}
                  </p>

                  <h6 class="text-sm text-gray-800 mb-1">Deskripsi</h6>

                  <!-- RENDER HTML DARI QUILL -->
                  <div
                    class="prose max-w-none quill-content text-gray-800"
                    v-html="form.description"
                  ></div>
                </div>
              </div>

              <div class="lg:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Approval <span class="text-danger">*</span></label>
                  <vue3-select v-model="form.approval" :options="approvals" placeholder="Select" />
                </div>
              </div>

              <!-- TAMPIL JIKA APPROVED -->
              <template v-if="form.approval === 'approved'">
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

                <div class="lg:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Tipe <span class="text-danger">*</span></label>
                    <vue3-select v-model="form.type" :options="types" placeholder="Select" />
                  </div>
                </div>

                <div class="lg:col-span-12">
                  <div class="mb-3">
                    <label class="form-label">PIC <span class="text-danger">*</span></label>
                    <vue3-select
                      v-model="form.assigned_user_id"
                      :options="employees"
                      placeholder="Select"
                    />
                  </div>
                </div>

                <!-- JAWABAN (hanya jika type = question) -->
                <!-- <div class="lg:col-span-12" v-if="form.type === 'question'">
                  <div>
                    <label class="form-label">Jawaban <span class="text-danger">*</span></label>
                    <QuillEditor
                      v-model:content="form.answer"
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
                </div> -->
              </template>
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
      projects: [],
      ticketPriority: null,
      ticketType: null,
      form: {
        priority: null,
        type: null,
        approval: 'approved',
        assigned_user_id: null,
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
      approvals: [
        { label: 'Approve', value: 'approved' },
        { label: 'Tolak', value: 'rejected' },
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
      this.updateData()
    },
    updateData() {
      if (
        !this.form.approval ||
        // (this.form.approval === 'approved' &&
        !this.form.priority ||
        !this.form.type ||
        !this.form.assigned_user_id
        // (this.form.type !== 'question' && !this.form.assigned_user_id) ||
        // (this.form.type === 'question' && !this.form.message)))
      ) {
        this.$swal({
          icon: 'warning',
          title: 'Field Wajib Belum Terisi',
          text: 'Harap isi semua field yang wajib diisi!',
        })
        return
      }

      const formData = new FormData()

      for (const key in this.form) {
        if (this.form[key] !== null && this.form[key] !== undefined && this.form[key] !== '') {
          formData.append(key, this.form[key])
        }
      }
      formData.append('_method', 'PUT')

      api
        .post(`/tickets/update-approval/${this.ticket.id}`, formData, {
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
    },
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    ticket: {
      type: Object,
      default: null,
    },
    employees: Array,
  },
  watch: {
    ticket: {
      immediate: true,
      handler(newVal) {
        if (!newVal) return

        this.form.id = newVal.id ?? ''
        this.form.title = newVal.title ?? null
        this.form.description = newVal.description ?? null
        // simpan nilai awal dari ticket
        this.ticketPriority = newVal.priority_slug ?? null
        this.ticketType = newVal.type_slug ?? null

        // isi ke form hanya jika approval = approved
        if (this.form.approval === 'approved') {
          this.form.priority = this.ticketPriority
          this.form.type = this.ticketType
        }
      },
    },
    'form.approval'(val) {
      if (val === 'approved') {
        // restore dari ticket
        this.form.priority = this.ticketPriority
        this.form.type = this.ticketType
      } else {
        // reset jika rejected / lainnya
        this.form.priority = null
        this.form.type = null
        this.form.assigned_user_id = null
      }
    },
    // 'form.type'(val) {
    //   if (val === 'question') {
    //     // jika question, kosongkan PIC
    //     this.form.assigned_user_id = null
    //   } else {
    //     // jika bukan question, kosongkan jawaban
    //     this.form.answer = ''
    //   }
    // },
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
