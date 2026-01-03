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
      <h5 class="inline-flex items-center font-bold">Edit Tags</h5>
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
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Nama <span class="text-danger">*</span></label>
                </div>
                <input type="text" class="form-control" v-model="form.name" />
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <label class="form-label">Warna </label>
                <vue3-select
                  v-model="form.color"
                  :options="colors"
                  placeholder="Select"
                >
                  <!-- Dropdown options -->
                  <template #option="{ option }">
                    <div :class="option.value">
                      {{ option.label }}
                    </div>
                  </template>

                  <!-- Selected item -->
                  <template #selected-option="{ option }">
                    <div :class="option.value">
                      {{ option.label }}
                    </div>
                  </template>
                </vue3-select>
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
  <!-- /Edit tag -->
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

export default {
  name: 'ContactsEditModal',
  emits: ['close'],
  components: {
    Vue3TagsInput,
    'a-date-picker': DatePicker,
  },
  data() {
    return {
      isOpening: false,
      isOpenVisible: false,
      mode: 'create',
      form: {
        name: '',
        is_active: '',
      },
      colors: [
        {
          label: 'Dasar',
          value: 'py-1 px-2 rounded text-xs leading-none font-semibold bg-primary-100 text-primary'
        },
        {
          label: 'Nila',
          value: 'py-1 px-2 rounded text-xs leading-none font-semibold bg-indigo-100 text-indigo-700'
        },
        {
          label: 'Teal',
          value: 'py-1 px-2 rounded text-xs leading-none font-semibold bg-teal-100 text-teal-600'
        },
        {
          label: 'Oranye',
          value: 'py-1 px-2 rounded text-xs leading-none font-semibold bg-orange-100 text-orange-600'
        },
        {
          label: 'Pink',
          value: 'py-1 px-2 rounded text-xs leading-none font-semibold bg-pink-100 text-pink'
        },
        {
          label: 'Ungu',
          value: 'py-1 px-2 rounded text-xs leading-none font-semibold bg-purple-100 text-purple'
        },
        {
          label: 'Hijau',
          value: 'py-1 px-2 rounded text-xs leading-none font-semibold bg-success-100 text-success'
        },
        {
          label: 'Merah',
          value: 'py-1 px-2 rounded text-xs leading-none font-semibold bg-danger-100 text-danger'
        },
        {
          label: 'Kuning',
          value: 'py-1 px-2 rounded text-xs leading-none font-semibold bg-warning-100 text-warning'
        },
        {
          label: 'Biru',
          value: 'py-1 px-2 rounded text-xs leading-none font-semibold bg-info-100 text-info'
        },
        {
          label: 'Gelap',
          value: 'py-1 px-2 rounded text-xs leading-none font-semibold bg-dark/30 text-dark'
        },
      ],
    }
  },
  methods: {
    close() {
      this.isOpening = false // slide-out
      this.isOpenVisible = false // fade-out

      this.$emit('close')
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
      if (!this.form.name) {
        this.$swal({
          icon: 'warning',
          title: 'Field Wajib Belum Terisi',
          text: 'Harap isi semua field yang wajib diisi!',
          timer: 2500,
        })
        return
      }

      if (!this.tag || !this.tag.id) {
        this.$swal({
          icon: 'error',
          title: 'Gagal!',
          text: 'ID tag tidak ditemukan!',
        })
        return
      }

      const formData = new FormData()
      for (const key in this.form) {
        formData.append(key, this.form[key])
      }

      // === API CALL DENGAN ID ===
      formData.append('_method', 'PUT')
      api
        .post(`/tags/update/${this.tag.id}`, formData, {
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
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    tag: {
      handler(newVal) {
        if (newVal) {
          this.form.name = newVal.name ?? ''
          this.form.color = newVal.color ?? ''
          this.form.slug = newVal.slug ?? ''
          this.form.is_active =
          newVal.is_active !== undefined ? Number(newVal.is_active) : ''
        }
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    this.isOpenVisible = true

    // 2. Tunggu 1 frame → baru jalankan animasi
    requestAnimationFrame(() => {
      this.isOpening = true
    })
    // this.fetchCompany()
    // this.fetchProvince()
    // this.fetchTags()
    // this.fetchtags()
    initFlowbite()
  },
}
</script>
