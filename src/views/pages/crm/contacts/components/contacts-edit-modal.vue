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
      <h5 class="inline-flex items-center font-bold">Edit Kontak</h5>
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
              <div class="flex items-center mb-3">
                <div
                  class="relative flex items-center justify-center w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0"
                >
                  <img
                    v-if="photoPreview"
                    :src="photoPreview"
                    alt="Preview"
                    class="w-full h-full object-cover rounded"
                  />
                  <i v-else class="ti ti-photo text-dark fs-16"></i>
                </div>
                <div class="inline-flex flex-col items-start">
                  <div class="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                    <i class="ti ti-file-broken me-1"></i>Unggah Foto
                    <input
                      type="file"
                      class="opacity-0 absolute start-0 top-0"
                      multiple
                      @change="onPhotoChange"
                    />
                  </div>
                  <span>JPG, GIF or PNG. Maksimal Ukuran 5MB</span>
                </div>
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <div class="flex justify-between items-center">
                  <label class="form-label">Nama Lengkap <span class="text-danger">*</span></label>
                </div>
                <input type="text" class="form-control" v-model="form.full_name" />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">No. Telepon 1 <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control phone"
                  name="phone_number_1"
                  v-model="form.phone_number_1"
                  @input="form.phone_number_1 = form.phone_number_1.replace(/[^0-9]/g, '')"
                />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">No. Telepon 2</label>
                <input
                  type="text"
                  class="form-control phone"
                  name="phone_number_2"
                  v-model="form.phone_number_2"
                  @input="form.phone_number_2 = form.phone_number_2.replace(/[^0-9]/g, '')"
                />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Email <span class="text-danger">*</span></label>
                <input type="text" class="form-control" v-model="form.email" />
              </div>
            </div>
            <!-- <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Tanggal Lahir</label>
                <div class="input-group w-auto input-group-flat">
                  <a-date-picker
                    v-model="form.date_of_birth"
                    class="form-control datetimepicker"
                    placeholder="20/09/2025"
                  />
                  <span class="input-group-text">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
            </div> -->
            <div class="md:col-span-6">
              <div class="mb-3">
                <label for="input-date" class="form-label">Tanggal Lahir</label>
                <input
                  type="date"
                  class="form-control custom-date"
                  v-model="form.date_of_birth"
                  id="input-date"
                />
              </div>
            </div>
            <h6 class="text-center font-semibold text-gray-700 mb-2 md:col-span-12">Alamat</h6>
            <div class="md:col-span-12">
              <div class="mb-3">
                <label class="form-label">
                  Alamat Lengkap <span class="text-danger">*</span>
                </label>
                <textarea class="form-control" rows="3" v-model="form.address"></textarea>
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Provinsi</label>
                <vue3-select
                  v-model="form.province_id"
                  :options="provinces"
                  placeholder="Pilih/Cari"
                  @update:modelValue="fetchCities"
                />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3 mb-md-0">
                <label class="form-label">Kota</label>
                <vue3-select
                  v-model="form.city_id"
                  :options="cities"
                  placeholder="Pilih/Cari"
                  :disabled="!selectedProvince"
                />
              </div>
            </div>
            <h6 class="text-center font-semibold text-gray-700 mb-2 md:col-span-12">
              Sosial Media
            </h6>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Facebook</label>
                <input type="text" class="form-control" v-model="form.facebook" />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Instagram </label>
                <input type="text" class="form-control" v-model="form.instagram" />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Whatsapp </label>
                <input
                  type="text"
                  class="form-control phone"
                  v-model="form.whatsapp"
                  @input="form.whatsapp = form.whatsapp.replace(/[^0-9]/g, '')"
                />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Twitter / X</label>
                <input type="text" class="form-control" v-model="form.twitterx" />
              </div>
            </div>
            <h6 class="text-center font-semibold text-gray-700 mb-2 md:col-span-12">Lainnya</h6>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label"
                  >Nama Perusahaan<span class="text-danger ms-1">*</span></label
                >
                <vue3-select
                  v-model="form.company_id"
                  :options="companies"
                  placeholder="Pilih/Cari"
                />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Jabatan</label>
                <input type="text" class="form-control" v-model="form.title_name" />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Asal Data </label>
                <vue3-select v-model="form.source_id" :options="sources" placeholder="Select" />
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Tags </label>
                <Multiselect
                  v-model="form.tags"
                  :options="internalTags"
                  :multiple="true"
                  track-by="name"
                  label="name"
                  :taggable="true"
                  @tag="addTag"
                  placeholder="Pilih atau ketik tag"
                />
                <span class="fs-13 mt-2">Masukkan atau Cari Tag</span>
              </div>
            </div>
            <!-- <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Pemilik Kontak</label>
                <vue3-select v-model="form.owner" :options="owners" placeholder="Pilih/Cari" />
              </div>
            </div> -->
            <input type="text" class="hidden" v-model="form.user_id" />
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
      photoPreview: null,
      photoFile: null,
      form: {
        full_name: '',
        phone_number_1: '',
        phone_number_2: '',
        email: '',
        date_of_birth: null,
        address: '',
        province: '',
        city: '',
        facebook: '',
        instagram: '',
        whatsapp: '',
        twitter: '',
        source: '',
        tags: [],
        company: '',
        position: '',
        owner: '',
      },
      companies: [],
      sources: [],
      provinces: [],
      cities: [],
      owners: [],
    }
  },
  methods: {
    close() {
      this.isOpening = false // slide-out
      this.isOpenVisible = false // fade-out

      this.$emit('close')
    },
    onPhotoChange(e) {
      const file = e.target.files[0]
      if (!file) return

      this.photoFile = file

      if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran maksimal 5MB')
        return
      }

      this.photoPreview = URL.createObjectURL(file)
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        slug: newTag.toLowerCase().replace(/\s+/g, '-'),
      }

      this.form.tags.push(tag)
      this.internalTags.push(tag)
    },
    async fetchCities(provinceId) {
      try {
        if (!provinceId) {
          this.City = []
          this.selectedCity = null
          return
        }

        console.log('Memuat kota untuk province_id:', provinceId)

        const response = await api.get('/cities', {
          params: { province_id: provinceId },
        })

        this.cities = (response.data || []).map((item) => ({
          label: item.name,
          value: item.id,
        }))

        console.log('Berhasil memuat kota:', this.cities)
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
        !this.form.full_name ||
        !this.form.phone_number_1 ||
        !this.form.email ||
        !this.form.address
        // ||
        // !this.form.source_id
        // || !this.form.company_id
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
      if (!this.contact || !this.contact.id) {
        this.$swal({
          icon: 'error',
          title: 'Gagal!',
          text: 'ID Contact tidak ditemukan!',
        })
        return
      }

      const formData = new FormData()

      // foto (jika ada)
      if (this.photoFile) {
        formData.append('photo', this.photoFile)
      }

      // field lainnya
      for (const key in this.form) {
        if (key === 'tags') {
          formData.append('tags', JSON.stringify(this.form.tags))
        } else {
          formData.append(key, this.form[key])
        }
      }

      // === API CALL DENGAN ID ===
      formData.append('_method', 'PUT')
      api
        .post(`/contacts/update/${this.contact.id}`, formData, {
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
    contact: {
      type: Object,
      default: () => ({}),
    },
    companies: Array,
    sources: Array,
    provinces: Array,
    // owners: Array,
    tagsData: Array,
  },
  watch: {
    contact: {
      handler(newVal) {
        if (newVal) {
          this.form.full_name = newVal.name ?? ''
          this.form.phone_number_1 = newVal.phone_number_1 ?? ''
          this.form.phone_number_2 = newVal.phone_number_2 ?? ''
          this.form.email = newVal.email ?? ''
          this.form.date_of_birth = newVal.date_of_birth ? newVal.date_of_birth : ''
          this.form.address = newVal.address ?? ''
          this.form.province_id = newVal.province_id ?? ''
          this.form.city_id = newVal.city_id ?? ''
          this.form.facebook = newVal.facebook ?? ''
          this.form.instagram = newVal.instagram ?? ''
          this.form.whatsapp = newVal.whatsapp ?? ''
          this.form.twitterx = newVal.twitterx ?? ''
          this.form.source_id = newVal.source_id ?? ''
          this.form.user_id = newVal.user_id ?? ''
          this.form.photo_url = newVal.photo_url ?? ''
          this.form.tags = newVal.tags
            ? newVal.tags.map((t) => ({
                name: t.name,
                slug: t.slug,
              }))
            : []
          this.form.company_id = newVal.company_id ?? ''
          this.form.owner = newVal.owner ?? ''
          this.form.title_name = newVal.title_name ?? ''
          if (newVal.province_id) {
            this.fetchCities(newVal.province_id)
          }
        }
      },
      immediate: true,
      deep: true,
    },
    tagsData: {
      immediate: true,
      handler(newVal) {
        this.internalTags = Array.isArray(newVal) ? [...newVal] : []
      },
    },
  },
  mounted() {
    this.isOpenVisible = true

    if (this.form.photo_url) {
      this.photoPreview = this.form.photo_url
    }

    // 2. Tunggu 1 frame → baru jalankan animasi
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
