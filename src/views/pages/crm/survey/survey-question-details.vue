<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <div class="page-wrapper pt-[50px] ml-[240px]">
    <div class="content p-5">
      <div class="mb-4">
        <h4 class="mb-1 text-xl font-bold flex items-center">Detail</h4>
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <router-link to="/dashboard/" class="hover:underline text-gray-700"
                >Survey</router-link
              >
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li class="text-dark font-medium" aria-current="page">Detail</li>
          </ol>
        </nav>
      </div>

      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-10 lg:col-start-2">
          <div class="mb-1">
            <router-link
              to="/survey/list"
              class="inline-flex items-center font-medium text-gray-900 hover:text-primary"
              ><i class="ti ti-arrow-left me-1"></i>Kembali</router-link
            >
          </div>

          <div v-if="!loading" class="card bg-white rounded-default radius mb-0">
            <div class="p-3 sm:p-4">
              <div class="border border-borderColor rounded-lg br-5 mb-3 bg-white">
                <div
                  class="p-3 bg-light flex items-center justify-between flex-wrap gap-3 rounded-lg"
                >
                  <h6>{{ survey?.title }}</h6>
                </div>
                <div class="p-3">
                  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">No. Survey</h6>
                      <div class="flex items-center">
                        <a
                          href="javascript:void(0);"
                          class="text-truncate text-gray-900 hover:text-primary"
                        >
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
              <!-- Header skeleton -->
              <div class="border border-borderColor br-5 mb-3">
                <div class="p-3 bg-light flex items-center justify-between gap-3">
                  <div class="h-4 w-64 bg-gray-300 rounded"></div>
                  <div class="h-8 w-28 bg-gray-300 rounded"></div>
                </div>

                <!-- Info grid skeleton -->
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
                Pertanyaan Survey (Seret komponen untuk mengubah urutan)
              </h5>
            </div>
            <div class="pb-6">
              <button
                href="javascript:void(0);"
                @click="openCreateModal"
                class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
              >
                <i class="ti ti-square-rounded-plus-filled"></i>
                Tambah Pertanyaan
              </button>
            </div>

            <draggable
              v-model="questions"
              item-key="id"
              @end="onOrderChange"
              class="space-y-3"
              ghost-class="opacity-50"
            >
              <template #item="{ element, index }">
                <div
                  class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm cursor-move hover:bg-gray-50 flex justify-between items-center transition-colors"
                >
                  <div class="flex items-center gap-3">
                    <h3 class="text-gray-400 text-lg">{{ index + 1 }}</h3>
                    <div>
                      <h6 class="font-semibold text-sm text-gray-800">{{ element.question }}</h6>
                      <p class="text-xs text-gray-500" v-if="element.description">
                        {{ element.description }}
                      </p>
                    </div>
                  </div>
                  <div class="dropdown relative table-action">
                    <a
                      href="javascript:void(0);"
                      class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      @click="toggleDropdown(element.id, $event)"
                      :class="{ active: openDropdown === element.id }"
                    >
                      <i class="ti ti-dots-vertical"></i>
                    </a>
                    <div
                      class="dropdown-menu absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg"
                      :class="{
                        hidden: openDropdown !== element.id,
                        block: openDropdown === element.id,
                      }"
                      style="top: 100%; right: 0"
                    >
                      <a
                        class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        href="javascript:void(0);"
                        @click.stop="openEditModal(element)"
                        data-drawer-placement="right"
                      >
                        <i class="ti ti-edit text-blue-light me-1"></i> Edit Pertanyaan
                      </a>
                    </div>
                  </div>
                  <!-- <div class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                    Order: {{ index + 1 }}
                  </div> -->
                </div>
              </template>
            </draggable>
          </div>
          <div v-else>
            <div class="card bg-white rounded-defaultradius mb-0 animate-pulse">
              <div class="p-4">
                <!-- Description skeleton -->
                <div class="mb-3">
                  <div class="h-4 w-32 bg-gray-300 rounded mb-3"></div>
                  <div class="space-y-2">
                    <div class="h-10 w-full bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bg-white rounded-defaultradius mb-0 animate-pulse">
              <div class="p-4">
                <!-- Description skeleton -->
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

  <component
    v-if="CreateModal && showCreateModal"
    :is="CreateModal"
    :isOpen="showCreateModal"
    @close="closeCreateModal"
    @refresh-list="fetchSurveyQuestion"
  />
  <component
    v-if="EditModal && showEditModal"
    :is="EditModal"
    :survey="selectedSurvey"
    :isOpen="showEditModal"
    @close="closeEditModal"
    @refresh-list="fetchSurveyQuestion"
  />
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { initFlowbite } from 'flowbite'
import { onMounted, onUnmounted, ref, markRaw } from 'vue'
import api from '../../../../api/api'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
// 1. Import draggable
import draggable from 'vuedraggable'

export default {
  components: {
    QuillEditor,
    draggable, // 2. Register component
  },
  data() {
    return {
      showEditModal: false,
      showCreateModal: false,
      loading: true,
      questionLoading: true,
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

      // 3. Add mock data for the sortable cards
      questions: [],
    }
  },
  methods: {
    async openEditModal(record) {
      this.selectedSurvey = record
      console.log(record)

      if (!this.EditModal) {
        const module = await import('./components/survey-question-update.vue')
        this.EditModal = markRaw(module.default)
      }

      document.body.classList.add('overflow-hidden')
      this.showEditModal = true
    },
    closeEditModal() {
      document.body.classList.remove('overflow-hidden')
      this.showEditModal = false
    },

    async openCreateModal() {
      if (!this.CreateModal) {
        const module = await import('./components/survey-question-create.vue')
        this.CreateModal = markRaw(module.default)
      }

      document.body.classList.add('overflow-hidden')
      this.showCreateModal = true
    },
    closeCreateModal() {
      document.body.classList.remove('overflow-hidden')
      this.showCreateModal = false
    },
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

        // Sort them initially just in case the backend sends them out of order
        this.questions.sort((a, b) => a.order_number - b.order_number)
      } catch (error) {
        console.error('Error fetching survey details:', error)
      } finally {
        this.questionLoading = false
      }
    },
    toggleDropdown(id, event) {
      event.stopPropagation()
      this.openDropdown = this.openDropdown === id ? null : id
    },

    async onOrderChange() {
      this.questionLoading = true
      const newOrderPayload = this.questions.map((q, index) => ({
        id: q.id,
        order_number: index + 1,
      }))

      this.questions.forEach((q, index) => {
        q.order_number = index + 1
      })

      try {
        await api.post('/survey-questions/reorder', {
          questions: newOrderPayload,
        })
      } catch (error) {
        console.error('Failed to update order:', error)
        this.fetchSurveyQuestion()
      } finally {
        this.fetchSurveyQuestion()
        this.questionLoading = false
      }
    },
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
      // Close dropdown when clicking outside
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
