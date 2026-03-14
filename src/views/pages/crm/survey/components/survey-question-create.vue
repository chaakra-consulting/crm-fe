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
      <h5 class="inline-flex items-center font-bold">Tambah Pertanyaan</h5>

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
                  <label class="form-label">Pertanyaan</label>
                </div>
                <input type="text" v-model="form.question" class="form-control" name="question" />
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Deskripsi</label>
                </div>
                <textarea
                  name="description"
                  class="form-control"
                  v-model="form.description"
                  id=""
                ></textarea>
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
        question: null,
        description: null,
        date_issued: null,
        project_pic: null,
        valid_until: null,
        adSourceInput: null,

        isDisabled: false,

        company_id: null,
      },
      picCompany: [],
      adSource: [],
      company_list: [],
      project_list: [],
    }
  },
  methods: {
    close() {
      this.isOpening = false // slide-out
      this.isOpenVisible = false // fade-out

      this.$emit('close')
    },
    async updateData() {
      this.submittedLoading = true
      if (!this.form.question) {
        this.$swal({
          icon: 'warning',
          title: 'Field Wajib Belum Terisi',
          text: 'Harap isi semua field yang wajib diisi!',
          timer: 2500,
        })
        return
      }

      const formData = new FormData()

      const { id } = this.$route.params
      formData.append('question', this.form.question)
      formData.append('description', this.form.description)
      formData.append('survey_id', id)

      // POST ke backend
      api
        .post(`/survey-question`, formData, {
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
    submitForm() {
      this.updateData()
    },
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  watch: {},
  computed: {},

  mounted() {
    this.isOpenVisible = true

    requestAnimationFrame(() => {
      this.isOpening = true
    })

    initFlowbite()
  },
}
</script>
