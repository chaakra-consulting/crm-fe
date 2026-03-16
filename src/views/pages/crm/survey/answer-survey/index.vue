<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <div class="page-wrapper pt-[50px] ml-[240px]">
    <div class="content p-5">
      <div class="mb-4">
        <h4 class="mb-1 text-xl font-bold flex items-center">Jawab Survey</h4>
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <router-link to="/dashboard/" class="hover:underline text-gray-700">Survey</router-link>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li class="text-dark font-medium" aria-current="page">Jawab Survey</li>
          </ol>
        </nav>
      </div>

      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-10 lg:col-start-2">
          <div class="mb-1">
            <router-link to="/survey/list"
              class="inline-flex items-center font-medium text-gray-900 hover:text-primary"><i
                class="ti ti-arrow-left me-1"></i>Kembali</router-link>
          </div>

          <div v-if="!loading" class="card bg-white rounded-default radius mb-0">
            <div class="p-3 sm:p-4">
              <div class="border border-borderColor rounded-lg br-5 mb-3 bg-white">
                <div class="p-3 bg-light flex items-center justify-between flex-wrap gap-3 rounded-lg">
                  <h6>{{ survey?.title }}</h6>
                </div>
                <div class="p-3">
                  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">No. Survey</h6>
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="text-truncate text-gray-900 hover:text-primary">
                          {{ survey?.survey_number }}
                        </a>
                      </div>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">PIC</h6>
                      <div class="flex items-center">
                        <p class="text-[13px] text-gray-900">
                          {{ survey?.pic_project.name }}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">Nama Projek</h6>
                      <p class="text-[13px] text-gray-900">
                        {{ survey?.project.bukukas.item.title }}
                      </p>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">Tanggal Berlaku</h6>
                      <p class="text-[13px] text-gray-900">{{ survey?.date_issued }}</p>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1"></h6>
                      <p class="text-[13px] text-gray-900"></p>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">Sampai Tanggal</h6>
                      <p class="text-[13px] text-gray-900">{{ survey?.valid_until }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="card bg-white rounded-defaultradius mb-0 animate-pulse">
            <div class="p-4">
              <div class="border border-borderColor br-5 mb-3">
                <div class="p-3 bg-light flex items-center justify-between gap-3">
                  <div class="h-4 w-64 bg-gray-300 rounded"></div>
                  <div class="h-8 w-28 bg-gray-300 rounded"></div>
                </div>

                <div class="p-3">
                  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div v-for="i in 6" :key="i">
                      <div class="h-3 w-24 bg-gray-200 rounded mb-2"></div>
                      <div class="h-4 w-32 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6" v-if="!questionLoading">
            <div class="flex space-between">
              <h5 class="text-lg font-bold mb-4">
                Pertanyaan Survey
              </h5>
            </div>

            <div class="space-y-4">
              <div v-for="(element, index) in questions" :key="element.id"
                class="p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 transition-colors">

                <div class="flex items-start gap-3 mb-4">
                  <h3 class="font-bold text-lg text-gray-800">{{ index + 1 }}.</h3>
                  <div>
                    <h6 class="font-semibold text-base text-gray-800">{{ element.question }} <span
                        class="text-danger">*</span></h6>
                    <p class="text-sm text-gray-500 mt-1" v-if="element.description">
                      {{ element.description }}
                    </p>
                  </div>
                </div>

                <div class="ml-7">
                  <textarea v-model="answers[element.id]" rows="3" class="form-control block w-full p-2.5"
                    placeholder="Tulis jawaban Anda di sini..."></textarea>
                </div>
              </div>
              <p style="margin-top: 5px;"><span class="text-danger">*</span> Ditandai wajib diisi</p>

              <div class="flex justify-end mt-6">
                <button @click="submitAnswers" :disabled="isSubmitting"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed">
                  {{ isSubmitting ? 'Menyimpan...' : survey?.status == 'not_answered' ? 'Kirim Jawaban' : 'Ubah Jawaban'
                  }}
                </button>
              </div>

            </div>

          </div>
          <div v-else>
            <div class="card bg-white rounded-defaultradius mb-0 animate-pulse" v-for="i in 2" :key="i">
              <div class="p-4">
                <div class="mb-3">
                  <div class="h-4 w-32 bg-gray-300 rounded mb-3"></div>
                  <div class="space-y-2">
                    <div class="h-10 w-full bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <layouts-footer></layouts-footer>
  </div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { initFlowbite } from 'flowbite'
import { onMounted, onUnmounted, ref, markRaw } from 'vue'
import api from '../../../../../api/api'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  components: {
    QuillEditor,
    // Removed draggable
  },
  data() {
    return {
      showEditModal: false,
      showCreateModal: false,
      loading: true,
      questionLoading: true,
      isSubmitting: false, // For submit button loading state
      content: '',
      EditModal: null,
      CreateModal: null,
      ticketClosed: false,
      btnText: '',
      showFormCreateMessage: false,
      form: {
        messages: [],
        attachments: [],
      },
      survey: null,
      questions: [],
      answers: {}, // Stores the user's answers keyed by question ID
    }
  },
  methods: {
    async fetchSurveyDetails() {
      try {
        const { id } = this.$route.params
        const response = await api.get(`/survey/${id}/edit`)
        this.survey = response.data.data
      } catch (error) {
        console.error('Error fetching survey details:', error)
      } finally {
        this.loading = false
      }
    },
    async fetchSurveyQuestion() {
      try {
        const { id } = this.$route.params
        const response = await api.get(`/survey-question/${id}`)

        this.questions = response.data.data || []

        // Sort them initially
        this.questions.sort((a, b) => a.order_number - b.order_number)

        // Initialize empty answers for each question
        this.questions.forEach(q => {
          this.answers[q.id] = ''
        })

      } catch (error) {
        console.error('Error fetching survey details:', error)
      } finally {
        this.questionLoading = false
      }
    },
    async submitAnswers() {
      if (this.questions.length != this.answers.size) {
        this.$swal({
          icon: 'warning',
          title: 'Field Wajib Belum Terisi',
          text: 'Harap isi semua field yang wajib diisi!',
          timer: 2500,
        })
        return
      }
      try {
        this.isSubmitting = true
        const { id } = this.$route.params

        const payload = {
          answers: this.answers
        }

        await api.post(`survey-questions/answer/${id}`, payload)

        this.$swal({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data berhasil dibuat!',
          timer: 2500,
        })

      } catch (error) {
        console.error('Error submitting answers:', error)
      } finally {
        this.isSubmitting = false
      }
    }
  },
  setup() {
    const openDropdown = ref(null)

    const toggleDropdown = (id, event) => {
      event.stopPropagation()
      if (openDropdown.value === id) {
        openDropdown.value = null
      } else {
        openDropdown.value = id
      }
    }

    const closeAllDropdowns = () => {
      openDropdown.value = null
    }

    const handleClickOutside = (event) => {
      closeAllDropdowns()
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })

    return {
      openDropdown,
      toggleDropdown,
      closeAllDropdowns,
    }
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    this.roleSlug = (user.role_slug || '').toLowerCase()
    this.userId = user.id
  },
  computed: {
    canApproveTickets() {
      return ['marketing'].includes(this.roleSlug)
    },
  },
  mounted() {
    initFlowbite()
    this.fetchSurveyQuestion()
    this.fetchSurveyDetails()
  },
}
</script>