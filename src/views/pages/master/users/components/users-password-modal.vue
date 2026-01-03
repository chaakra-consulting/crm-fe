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
      <h5 class="inline-flex items-center font-bold">Ubah Password User</h5>

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
                <label class="form-label"
                  >Password Baru<span class="text-danger ms-1">*</span></label
                >
                <div class="input-group-flat pass-group relative">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control pass-input"
                    placeholder="Password"
                    v-model="form.password"
                  />
                  <span
                    class="absolute inset-y-0 right-3 flex items-center cursor-pointer toggle-password"
                    @click="togglePassword"
                  >
                    <i :class="['ti', showPassword ? 'ti-eye' : 'ti-eye-off']"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <label class="form-label"
                  >Konfirmasi Password Baru<span class="text-danger ms-1">*</span></label
                >
                <div class="input-group-flat pass-group relative">
                  <input
                    :type="showPasswordOne ? 'text' : 'password'"
                    class="form-control pass-input"
                    placeholder="Confirm Password"
                    v-model="form.password_confirmation"
                  />
                  <span
                    class="absolute inset-y-0 right-3 flex items-center cursor-pointer toggle-password"
                    @click="togglePasswordOne"
                  >
                    <i :class="['ti', showPasswordOne ? 'ti-eye' : 'ti-eye-off']"></i>
                  </span>
                </div>
              </div>
            </div>
            <!-- <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Pemilik Kontak</label>
                <vue3-select v-model="form.owner" :options="Owner" placeholder="Pilih/Cari" />
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end p-4 pt-0">
        <button type="button" @click="close" class="btn btn-light me-2">Batal</button>
        <button type="submit" class="btn btn-primary">Ubah</button>
      </div>
    </form>
  </div>
  <!-- /Add Contact -->
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

const value = ref(new Date())
const valueOne = ref(new Date())
const valueTwo = ref(new Date())
const valueThree = ref(new Date())
const valueFour = ref(new Date())

export default {
  emits: ['close'],
  components: {
    Multiselect,
    Vue3TagsInput,
    'a-date-picker': DatePicker,
  },
  data() {
    return {
      isOpening: false,
      isOpenVisible: false,
      mode: 'create',
      internalTags: [],
      form: {
        password: '',
        password_confirmation: '',
      },
      showPassword: false,
      passwordOne: '',
      showPasswordOne: false,
    }
  },
  methods: {
    close() {
      this.isOpening = false // slide-out
      this.isOpenVisible = false // fade-out

      this.$emit('close')
    },
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    togglePasswordOne() {
      this.showPasswordOne = !this.showPasswordOne
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
      this.updateData()
    },
    updateData() {
      // Validasi field wajib
      if (!this.form.password) {
        this.$swal({
          icon: 'warning',
          title: 'Field Wajib Belum Terisi',
          text: 'Harap isi semua field yang wajib diisi!',
          timer: 2500,
        })
        return
      }

      if (!this.user || !this.user.id) {
        this.$swal({
          icon: 'error',
          title: 'Gagal!',
          text: 'ID Contact tidak ditemukan!',
        })
        return
      }

      // === FORM DATA UNTUK FOTO + DATA LAIN ===
      const formData = new FormData()

      // append foto (jika ada)
      if (this.photoFile) {
        formData.append('photo', this.photoFile)
      }

      // append field biasa
      for (const key in this.form) {
        formData.append(key, this.form[key])
      }

      // POST ke backend
      formData.append('_method', 'PUT')
      api
        .post(`/users/change-password/${this.user.id}`, formData, {
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
    },
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    user: {
      handler(newVal) {
        if (newVal) {
          this.form.id = newVal.id ?? ''
        }
      },
      immediate: true,
      deep: true,
    },
  },
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
