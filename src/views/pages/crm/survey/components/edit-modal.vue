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
      <h5 class="inline-flex items-center font-bold">Edit Survey</h5>

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
    submitForm() {
      this.updateData()
    },
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    survey: {
      type: Object,
      default: () => ({}),
    },
    companies: Array,
  },
  watch: {},
  computed: {},

  mounted() {
    this.loadProject()
    this.form = this.survey
    this.isOpenVisible = true

    requestAnimationFrame(() => {
      this.isOpening = true
    })

    initFlowbite()
  },
}
</script>
