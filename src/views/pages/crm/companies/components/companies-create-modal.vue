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
      <h5 class="inline-flex items-center font-bold">Tambah Perusahaan Baru</h5>

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
                  <label class="form-label"
                    >Nama Perusahaan <span class="text-danger">*</span></label
                  >
                </div>
                <input type="text" class="form-control" v-model="form.name" />
              </div>
            </div>
            <div :class="jenisColSpan">
              <div class="mb-3">
                <label class="form-label"> Jenis <span class="text-danger">*</span> </label>
                <vue3-select v-model="form.jenis" :options="types" placeholder="Select" />
              </div>
            </div>
            <div class="md:col-span-6" v-if="showBentuk">
              <div class="mb-3">
                <label class="form-label"> Bentuk <span class="text-danger">*</span> </label>
                <vue3-select v-model="form.bentuk" :options="legalEntities" placeholder="Select" />
              </div>
            </div>
            <div class="md:col-span-12">
              <div class="mb-3">
                <label class="form-label"> Alamat <span class="text-danger">*</span> </label>
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
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label"> Deskripsi </label>
                <textarea class="form-control" rows="2" v-model="form.memo"></textarea>
              </div>
            </div>
            <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">No. NPWP </label>
                <input type="text" class="form-control" name="npwp" v-model="form.npwp" />
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">PIC Kontak </label>
              <vue3-select
                v-model="form.pic_contact_id"
                :options="picContactOptions"
                label="label"
                option-value="value"
                placeholder="Pilih / Cari"
              />
            </div>
          </div>
          <!-- FORM KONTAK BARU -->
          <div
            v-if="form.pic_contact_id === 'new'"
            class="mt-4 p-4 border border-dashed border-primary-300 rounded-lg bg-primary-50"
          >
            <h6 class="mb-3 text-primary font-semibold">Kontak Baru</h6>

            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12 md:col-span-6">
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
              <div class="col-span-12 md:col-span-12">
                <div class="mb-3">
                  <div class="flex justify-between items-center">
                    <label class="form-label"
                      >Nama Lengkap <span class="text-danger">*</span></label
                    >
                  </div>
                  <input type="text" class="form-control" v-model="form.new_contact.name" />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">No. Telepon 1 <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    class="form-control phone"
                    name="phone_number_1"
                    v-model="form.new_contact.phone_number_1"
                    @input="
                      form.new_contact.phone_number_1 = form.new_contact.phone_number_1.replace(
                        /[^0-9]/g,
                        ''
                      )
                    "
                  />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">No. Telepon 2</label>
                  <input
                    type="text"
                    class="form-control phone"
                    name="phone_number_2"
                    v-model="form.new_contact.phone_number_2"
                    @input="
                      form.new_contact.phone_number_2 = form.new_contact.phone_number_2.replace(
                        /[^0-9]/g,
                        ''
                      )
                    "
                  />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Email <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" v-model="form.new_contact.email" />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3">
                  <label for="input-date" class="form-label">Tanggal Lahir</label>
                  <input
                    type="date"
                    class="form-control custom-date"
                    v-model="form.new_contact.date_of_birth"
                    id="input-date"
                  />
                </div>
              </div>
              <div class="col-span-12 md:col-span-12 mb-3 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="toggleAddress"
                  v-model="form.new_contact.has_address"
                  class="w-5 h-5 rounded-md border border-gray-300 text-primary focus:ring-primary focus:ring-2 cursor-pointer"
                />
                <label for="toggleAddress" class="text-sm text-gray-700 cursor-pointer">
                  Alamat Kontak Sama dengan Perusahaan
                </label>
              </div>
              <div v-if="!form.new_contact.has_address" class="col-span-12 md:col-span-12">
                <h6 class="text-center font-semibold text-gray-700 mb-2">Alamat</h6>
                <div class="mb-3">
                  <label class="form-label">
                    Alamat Lengkap <span class="text-danger">*</span>
                  </label>
                  <textarea
                    class="form-control"
                    rows="3"
                    v-model="form.new_contact.address"
                  ></textarea>
                </div>

                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-12 md:col-span-6">
                    <label class="form-label">Provinsi</label>
                    <vue3-select
                      v-model="form.new_contact.province_id"
                      :options="provincesContact"
                      placeholder="Pilih/Cari"
                      @update:modelValue="fetchCitiesContact"
                    />
                  </div>

                  <div class="col-span-12 md:col-span-6">
                    <label class="form-label">Kota</label>
                    <vue3-select
                      v-model="form.new_contact.city_id"
                      :options="citiesContact"
                      placeholder="Pilih/Cari"
                      :disabled="!selectedProvince"
                    />
                  </div>
                </div>
              </div>
              <h6 class="text-center font-semibold text-gray-700 mb-2 col-span-12 md:col-span-12">
                Sosial Media
              </h6>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Facebook</label>
                  <input type="text" class="form-control" v-model="form.new_contact.facebook" />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Instagram </label>
                  <input type="text" class="form-control" v-model="form.new_contact.instagram" />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Whatsapp </label>
                  <input
                    type="text"
                    class="form-control phone"
                    v-model="form.new_contact.whatsapp"
                    @input="
                      form.new_contact.whatsapp = form.new_contact.whatsapp.replace(/[^0-9]/g, '')
                    "
                  />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Twitter / X</label>
                  <input type="text" class="form-control" v-model="form.new_contact.twitterx" />
                </div>
              </div>
              <h6 class="text-center font-semibold text-gray-700 mb-2 col-span-12 md:col-span-12">
                Lainnya
              </h6>
              <!-- <div class="md:col-span-6">
              <div class="mb-3">
                <label class="form-label">Asal Data <span class="text-danger">*</span></label>
                <vue3-select v-model="form.new_contact.source_id" :options="sources" placeholder="Select" />
              </div>
            </div> -->
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Tags </label>
                  <Multiselect
                    v-model="form.new_contact.tags"
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
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Jabatan</label>
                  <input type="text" class="form-control" v-model="form.new_contact.title_name" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end p-4 pt-0">
        <button type="button" @click="close" class="btn btn-light me-2">Batal</button>
        <button type="submit" class="btn btn-primary">Tambahkan</button>
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
  emits: ['close', 'refresh-list'],
  components: {
    Multiselect,
    Vue3TagsInput,
    'a-date-picker': DatePicker,
  },
  data() {
    return {
      isOpening: false,
      isOpenVisible: false,
      photoPreview: null,
      photoFile: null,
      mode: 'create',
      tagsData: [],
      internalTags: [],
      form: {
        name: '',
        jenis: '',
        bentuk: '',
        npwp: '',
        pic_contact_id: '',
        province_id: '',
        city_id: '',
        address: '',
        memo: '',
        new_contact: {
          full_name: '',
          phone_number_1: '',
          phone_number_2: '',
          email: '',
          date_of_birth: '',
          has_address: false,
          address: '',
          province_id: '',
          city_id: '',
          source_id: '',
          facebook: '',
          instagram: '',
          whatsapp: '',
          twitterx: '',
          tags: [],
        },
      },
      // picContacts: [],
      // companies: [],
      provinces: [],
      cities: [],
      citiesContact: [],
      legalEntities: [
        { label: 'PT', value: 'PT' },
        { label: 'CV', value: 'CV' },
        { label: 'FIRMA', value: 'FIRMA' },
        { label: 'UD', value: 'UD' },
        { label: 'KOPERASI', value: 'KOPERASI' },
      ],
      types: [
        { label: 'BUMN', value: 'BUMN' },
        { label: 'BUMD', value: 'BUMD' },
        { label: 'Dinas', value: 'DINAS' },
        { label: 'Swasta', value: 'SWASTA' },
        { label: 'Sekolah', value: 'SEKOLAH' },
        { label: 'Rumah Sakit', value: 'RUMAH SAKIT' },
      ],
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

      this.form.new_contact.tags.push(tag)
      this.internalTags.push(tag)
    },
    async fetchCities(provinceId) {
      try {
        if (!provinceId) {
          this.cities = []
          return
        }

        const response = await api.get('/cities', {
          params: { province_id: provinceId },
        })

        this.cities = (response.data || []).map((item) => ({
          label: item.name,
          value: item.id,
        }))
      } catch (error) {
        console.error('Gagal memuat data kota:', error)
      }
    },
    async fetchCitiesContact(provinceId) {
      try {
        if (!provinceId) {
          this.citiesContact = []
          return
        }

        const response = await api.get('/cities', {
          params: { province_id: provinceId },
        })

        this.citiesContact = (response.data || []).map((item) => ({
          label: item.name,
          value: item.id,
        }))
      } catch (error) {
        console.error('Gagal memuat data kota:', error)
      }
    },
    async fetchTags() {
      try {
        const response = await api.get('/tags')
        const tag = Array.isArray(response.data) ? response.data : response.data.data || []
        console.log(tag)
        this.tagsData = tag
          // .filter((item) => item.deleted === 0)
          .map((item) => ({
            id: item.id,
            name: item.name,
            slug: item.slug,
            color: item.color,
          }))
      } catch (error) {
        console.error('Gagal memuat data tags:', error)
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
      this.createData()
    },
    createData() {
      if (
        !this.form.name ||
        !this.form.jenis ||
        // !this.form.pic_contact_id ||
        !this.form.address ||
        (['BUMN', 'BUMD', 'SWASTA'].includes(this.form.jenis) && !this.form.bentuk)
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
        this.form.pic_contact_id === 'new' &&
        (
        !this.form.new_contact.name ||
        !this.form.new_contact.phone_number_1 ||
        !this.form.new_contact.email
        )
      ) {
        this.$swal({
          icon: 'warning',
          title: 'Kontak Belum Lengkap',
          text: 'Harap isi semua field yang wajib diisi!',
          timer: 2500,
        })
        return
      }

      const formData = new FormData()
      // field company
      formData.append('name', this.form.name)
      formData.append('jenis', this.form.jenis)
      formData.append('bentuk', this.form.bentuk ?? '')
      formData.append('npwp', this.form.npwp ?? '')
      formData.append('address', this.form.address ?? '')
      formData.append('memo', this.form.memo ?? '')
      formData.append('pic_contact_id', this.form.pic_contact_id)
      formData.append('province_id', this.form.province_id ?? '')
      formData.append('city_id', this.form.city_id ?? '')
      formData.append('source_id', this.form.source_id)

      // === JIKA BUAT KONTAK BARU ===
      if (this.form.pic_contact_id === 'new') {

        if (this.photoFile) {
          formData.append('photo', this.photoFile)
        }
        
        Object.entries(this.form.new_contact).forEach(([key, value]) => {
          // KHUSUS TAGS
          if (key === 'tags') {
            formData.append('new_contact[tags]', JSON.stringify(value))
            return
          }

          // FIELD LAIN
          formData.append(`new_contact[${key}]`, value ?? '')
        })
      }

      // === APPEND FIELD FORM UTAMA ===
      for (const key in this.form) {
        if (key === 'new_contact') continue
        if (key === 'tags') continue
        formData.append(key, this.form[key])
      }

      // POST ke backend
      api
        .post('/companies/store', formData, {
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
        })
    },
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    // companies: Array,
    provinces: Array,
    provincesContact: Array,
    picContacts: Array,
  },
  watch: {
    'form.jenis'(newValue) {
      // jika jenis berubah menjadi yang tidak membutuhkan bentuk → reset nilai bentuk
      if (!['BUMN', 'BUMD', 'SWASTA'].includes(newValue)) {
        this.form.bentuk = null
      }
    },
    'form.pic_contact_id'(val) {
      console.log('PIC selected:', val)
      if (val === 'new') {
        this.fetchTags()
      }
    },
    tagsData: {
      immediate: true,
      handler(newVal) {
        this.internalTags = Array.isArray(newVal) ? [...newVal] : []
      },
    },
    'form.new_contact.has_address'(val) {
      if (!val) {
        // reset field alamat saat checkbox dimatikan
        this.form.new_contact.address = ''
        this.form.new_contact.province_id = ''
        this.form.new_contact.city_id = ''
      }
    },
  },
  computed: {
    picContactOptions() {
      const raw = Array.isArray(this.picContacts) ? this.picContacts : []

      const contacts = raw.map((c) => ({
        label: c.label ?? c.name,
        value: String(c.value ?? c.id),
      }))

      return [
        {
          label: '— Pilih / Cari Kontak —',
          value: '',
          disabled: true,
        },
        {
          label: 'Buat Kontak Baru',
          value: 'new',
        },
        ...contacts,
      ]
    },
    showBentuk() {
      return ['BUMN', 'BUMD', 'SWASTA'].includes(this.form.jenis)
    },

    jenisColSpan() {
      return this.showBentuk ? 'md:col-span-6' : 'md:col-span-12'
    },
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
