<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper pt-[50px] ml-[240px]">
    <div class="content p-5">
      <div class="mb-4">
        <h4 class="mb-1 text-xl font-bold flex items-center">Detail</h4>
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <router-link to="/dashboard/" class="hover:underline text-gray-700"
                >Tiket</router-link
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
              to="/support/tickets"
              class="inline-flex items-center font-medium text-gray-900 hover:text-primary"
              ><i class="ti ti-arrow-left me-1"></i>Kembali</router-link
            >
          </div>

          <!-- Ticket Details -->
          <div v-if="ticket && !loading" class="card bg-white rounded-defaultradius mb-0">
            <div class="p-3 sm:p-4">
              <!-- <div class="border border-borderColor br-5 mb-3"> -->
              <div class="border border-borderColor rounded-lg br-5 mb-3 bg-white">
                <div
                  class="p-3 bg-light flex items-center justify-between flex-wrap gap-3 rounded-lg"
                >
                  <h6>{{ ticket.ticket_number }}</h6>
                  <!-- <div v-if="canApproveTickets">
                    <button
                      type="button"
                      class="btn btn-info disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <i class="ti ti-check"></i>
                      Approve?
                    </button>
                  </div>
                  <div v-if="canCloseTickets && record.status_slug === 'waiting-approval'">
                    <button
                      type="button"
                      class="btn btn-danger disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <i class="ti ti-x"></i>
                      Selesaikan?
                    </button>
                  </div> -->
                </div>
                <div class="p-3">
                  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">Dibuat Oleh</h6>
                      <div class="flex items-center">
                        <!-- <a href="javascript:void(0);" class="avatar avatar-xs rounded-full me-1"
                          ><img
                            src="@/assets/img/users/user-03.jpg"
                            class="flex-shrink-0 rounded-full"
                            alt="img"
                        /></a> -->
                        <a
                          href="javascript:void(0);"
                          class="text-truncate text-gray-900 hover:text-primary"
                          >{{ ticket.reporter_name }}</a
                        >
                      </div>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">PIC</h6>
                      <div class="flex items-center">
                        <!-- <a href="javascript:void(0);" class="avatar avatar-xs rounded-full me-1"
                          ><img
                            src="@/assets/img/users/user-07.jpg"
                            class="flex-shrink-0 rounded-full"
                            alt="img"
                        /></a> -->
                        <a
                          href="javascript:void(0);"
                          class="text-truncate text-gray-900 hover:text-primary"
                          >{{ ticket.assigned_name }}</a
                        >
                      </div>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">Waktu Dibuat</h6>
                      <p class="text-[13px] text-gray-900">{{ ticket.created_at_format }}</p>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">Jenis</h6>
                      <p class="text-[13px] text-gray-900">{{ ticket.type }}</p>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">Status</h6>
                      <span
                        :class="{
                          'bg-orange': ticket.status_slug == 'waiting-approval',
                          'bg-blue-700': ticket.status_slug == 'on-progress',
                          'bg-warning': ticket.status_slug == 'customer-reply',
                          'bg-danger': ticket.status_slug == 'rejected',
                          'bg-success': ticket.status_slug == 'closed',
                        }"
                        class="badge badge-pill badge-status text-[11px]"
                      >
                        {{ ticket.status }}
                      </span>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">Prioritas</h6>
                      <span
                        :class="{
                          'bg-success-100 text-success border-success':
                            ticket.priority_slug == 'low',
                          'bg-warning-100 text-warning border-warning':
                            ticket.priority_slug == 'medium',
                          'bg-danger-100 text-danger border-danger': ticket.priority_slug == 'high',
                        }"
                        class="badge badge-tag badge px-1.5 py-0.5 rounded text-[11px]"
                      >
                        {{ ticket.priority }}
                      </span>
                    </div>
                    <!-- <div>
                      <h6 class="text-[13px] font-medium mb-1">Last Updated</h6>
                      <p class="text-[13px]">18 Feb 2025</p>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="mb-3">
                  <h6 class="mb-2">Projek</h6>
                  <p v-if="ticket.project_name" class="text-gray-800 mb-2">{{ ticket.project_name }}</p>
                  <p v-else class="text-gray-800 mb-2">Non-Projek</p>
                  <h6 class="mb-2">Subjek</h6>
                <p class="text-gray-800 mb-2">{{ ticket.title }}</p>
                <h6 class="mb-2">Deskripsi</h6>
                <div class="quill-content text-gray-800" v-html="ticket.description"></div>
              </div>
              <div class="mb-3">
                <h6 class="mb-2">
                  <i class="ti ti-paperclip"></i>
                  Attachments
                </h6>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                  <div
                    v-for="(file, index) in ticket.attachments"
                    :key="index"
                    class="border border-borderColor rounded p-3 relative bg-white h-[110px] flex items-center"
                  >
                    <!-- ICON -->
                    <div
                      class="flex items-center justify-center w-10 h-10 rounded shrink-0"
                      :class="fileIconBg(file.attachment)"
                    >
                      <img
                        v-if="isPdf(file.attachment)"
                        src="@/assets/img/icons/pdf-1.svg"
                        class="w-6 h-6"
                      />
                      <img
                        v-else-if="isImage(file.attachment)"
                        src="@/assets/img/icons/jpg-1.svg"
                        class="w-6 h-6"
                      />
                      <i v-else class="ti ti-file-spreadsheet text-[18px] text-white"></i>
                    </div>

                    <!-- TEXT -->
                    <div class="ml-3 flex-1 pr-10 overflow-hidden">
                      <h6
                        class="font-medium text-[12px] truncate"
                        :title="getFileName(file.attachment)"
                      >
                        {{ getFileName(file.attachment) }}
                      </h6>
                      <p class="text-[12px] text-gray-500">
                        {{ file.size ?? '-' }}
                      </p>
                    </div>
                    <a
                      href="#"
                      @click.prevent="downloadFile(file.attachment)"
                      class="w-7 h-7 rounded-full absolute right-3 bg-light text-dark flex items-center justify-center hover:bg-gray-200"
                    >
                      <i class="ti ti-arrow-down text-[14px]"></i>
                    </a>
                  </div>
                </div>
              </div>
              <button
                v-if="!showFormCreateMessage"
                type="button"
                class="btn btn-primary mb-3"
                @click="showFormCreateMessage = true"
              >
                <i class="ti ti-edit"></i>
                Jawab
              </button>
              <form v-if="showFormCreateMessage" @submit.prevent="createMessage">
                <div class="border border-borderColor rounded-lg p-4 bg-white mb-3">
                  <div class="mb-2">
                    <h6 class="mb-2">Jawaban</h6>
                    <QuillEditor
                      v-model:content="form.message"
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
                      <label class="form-label">Attachments (Opsional)</label>

                      <div
                        class="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative"
                      >
                        <span class="block mb-1">
                          <i class="ti ti-folder-open text-primary fs-16"></i>
                        </span>

                        <p class="mb-0 text-[14px] text-dark">Drop atau cari file nya</p>

                        <input
                          type="file"
                          multiple
                          class="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                          @change="handleAttachments"
                        />

                        <p class="text-[13px] mb-0">Maximum size : 5 MB</p>
                      </div>

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

                  <div class="flex items-center justify-end">
                    <button
                      type="button"
                      class="btn btn-light me-3"
                      @click="showFormCreateMessage = false"
                    >
                      Batal
                    </button>
                    <button type="submit" class="btn btn-primary">Kirim</button>
                  </div>
                </div>
              </form>
              <div
                  v-if="ticketClosed"
                  class="bg-secondary/10 border border-secondary text-[13px] text-gray-700 rounded py-2.5 px-3.5 mb-3"
                  role="alert"
                >
                <i class="ti ti-alert-triangle-filled text-[16px] me-2 text-yellow-500"></i>
                Tiket sudah diselesaikan. Anda dapat menjawab ke tiket ini jika ingin membuka lagi.
              </div>
              <div class="border border-borderColor rounded-lg p-4 bg-white">
                <div class="mb-3">
                  <h6 class="mb-2">Pesan</h6>
                </div>

                <!-- LIST MESSAGE -->
                <div v-if="ticket.messages && ticket.messages.length">
                  <div
                    v-for="(message, index) in ticket.messages"
                    :key="message.id"
                    class="pb-2 mt-3 mb-4"
                    :class="
                      index !== ticket.messages.length - 1 ? 'border-b border-borderColor' : ''
                    "
                  >
                    <!-- HEADER MESSAGE -->
                    <div class="bg-light mb-2 text-[13px] text-gray-500 px-3 py-2 rounded">
                      <span class="text-gray-400 text-[12px] font-normal"> Dikirim oleh </span>
                      <span class="font-medium text-gray-900">
                        {{ message.user_name }}
                      </span>
                      <span class="text-gray-400 text-[12px] font-normal"> pada </span>
                      <span>
                        {{ message.created_at_format }}
                      </span>
                    </div>

                    <!-- CONTENT MESSAGE -->
                    <div
                      class="quill-content text-[14px] text-gray-800 mb-2 px-3"
                      v-html="message.message"
                    ></div>

                    <!-- ATTACHMENTS MESSAGE -->
                    <div
                      v-if="message.attachments && message.attachments.length"
                      class="mt-2 mb-3 px-3"
                    >
                      <h6 class="mb-2 text-[13px] font-medium">
                        <i class="ti ti-paperclip"></i>
                        Attachments
                      </h6>

                      <div
                        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3"
                      >
                        <div
                          v-for="(file, fIndex) in message.attachments"
                          :key="fIndex"
                          class="border border-borderColor rounded p-3 relative bg-white h-[110px] flex items-center"
                        >
                          <!-- ICON -->
                          <div
                            class="flex items-center justify-center w-10 h-10 rounded shrink-0"
                            :class="fileIconBg(file.attachment)"
                          >
                            <img
                              v-if="isPdf(file.attachment)"
                              src="@/assets/img/icons/pdf-1.svg"
                              class="w-6 h-6"
                            />
                            <img
                              v-else-if="isImage(file.attachment)"
                              src="@/assets/img/icons/jpg-1.svg"
                              class="w-6 h-6"
                            />
                            <i v-else class="ti ti-file-spreadsheet text-[18px] text-white"></i>
                          </div>

                          <!-- TEXT -->
                          <div class="ml-3 flex-1 pr-10 overflow-hidden">
                            <h6
                              class="font-medium text-[12px] truncate"
                              :title="getFileName(file.attachment)"
                            >
                              {{ getFileName(file.attachment) }}
                            </h6>
                            <p class="text-[12px] text-gray-500">
                              {{ file.size ?? '-' }}
                            </p>
                          </div>

                          <!-- DOWNLOAD -->
                          <a
                            href="#"
                            @click.prevent="downloadFile(file.attachment)"
                            class="w-7 h-7 rounded-full absolute right-3 bg-light text-dark flex items-center justify-center hover:bg-gray-200"
                          >
                            <i class="ti ti-arrow-down text-[14px]"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- EMPTY STATE -->
                <div v-else class="text-[13px] text-gray-500">Belum ada pesan.</div>
              </div>
            </div>
          </div>
          <!-- SKELETON LOADING -->
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

              <!-- Description skeleton -->
              <div class="mb-3">
                <div class="h-4 w-32 bg-gray-300 rounded mb-3"></div>
                <div class="space-y-2">
                  <div class="h-3 w-full bg-gray-200 rounded"></div>
                  <div class="h-3 w-full bg-gray-200 rounded"></div>
                  <div class="h-3 w-3/4 bg-gray-200 rounded"></div>
                </div>
              </div>

              <!-- Button -->
              <div class="mb-3">
                <div class="h-9 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
          <!-- /Ticket Details -->
        </div>
      </div>
    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { initFlowbite } from 'flowbite'
import api from '../../../../api/api'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  components: {
    QuillEditor,
  },
  data() {
    return {
      content: '',
      showFormCreateMessage: false,
      form: {
        messages: [],
        attachments: [],
      },
      ticket: null,
    }
  },
  methods: {
    handleAttachments(e) {
      const files = Array.from(e.target.files)

      this.form.attachments.push(...files)

      e.target.value = ''
    },
    removeAttachment(index) {
      this.form.attachments.splice(index, 1)
    },
    createMessage() {
      if (!this.form.message) {
        this.$swal({
          icon: 'warning',
          title: 'Isi Field Jawaban Terlebih dahulu!',
          timer: 2500,
        })
        return
      }

      if (!this.ticket || !this.ticket.id) {
        this.$swal({
          icon: 'error',
          title: 'Gagal!',
          text: 'ID Tiket tidak ditemukan!',
        })
        return
      }

      // ==========================
      // VALIDASI ATTACHMENT (MAX 5 MB / FILE)
      // ==========================
      const MAX_SIZE = 5 * 1024 * 1024 // 5 MB

      if (Array.isArray(this.form.attachments)) {
        const oversizedFile = this.form.attachments.find((file) => file.size > MAX_SIZE)

        if (oversizedFile) {
          this.$swal({
            icon: 'warning',
            title: 'Ukuran File Terlalu Besar!',
            text: `File "${oversizedFile.name}" melebihi 5 MB`,
            timer: 3000,
          })
          return
        }
      }

      const formData = new FormData()

      // ==========================
      // APPEND FIELD BIASA
      // ==========================
      Object.keys(this.form).forEach((key) => {
        if (key !== 'attachments') {
          formData.append(key, this.form[key] ?? '')
        }
      })

      // ==========================
      // APPEND ATTACHMENTS
      // ==========================
      if (Array.isArray(this.form.attachments)) {
        this.form.attachments.forEach((file) => {
          formData.append('attachments[]', file)
        })
      }

      api
        .post(`/tickets/store-message/${this.ticket.id}`, formData, {
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
            // this.$emit('refresh-list')
            // this.$emit('refresh-tags')
            // this.$emit('close')
            this.fetchTicket()
            this.form.message = ''
            this.form.attachments = []
            this.showFormCreateMessage = false
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
    async fetchTicket() {
      this.loading = true

      try {
        const id = this.$route.params.id

        const response = await api.get(`/tickets/detail/${id}`)

        const item = response.data.data || response.data.ticket || response.data

        if (!item) {
          console.error('Data ticket tidak ditemukan')
          return
        }

        // mapping sesuai kebutuhan kamu
        this.ticket = {
          id: item.id,
          ticket_number: item.ticket_number || '',
          title: item.title || '',
          description: item.description || '',
          priority: item.priority || '',
          priority_slug: item.priority_slug || '',
          status: item.status || '',
          status_slug: item.status_slug || '',
          type: item.type || '',
          type_slug: item.type_slug || '',
          project_id: item.project_id || '',
          project_name: item.project_name || '',
          reporter_user_id: item.reporter_user_id || '',
          reporter_name: item.reporter_name || '',
          assigned_user_id: item.assigned_user_id || '',
          assigned_name: item.assigned_name || '-',
          created_at: item.created_at || '',
          created_at_format: item.created_at_format || '',
          attachments: item.attachments || [],
          messages: item.messages || [],
        }
      } catch (error) {
        console.error('Gagal:', error)
      } finally {
        this.loading = false
      }
    },
    closeTicket(ticket) {
      this.$swal({
        title: 'Selesaikan Tiket?',
        text: 'Status tiket akan diubah menjadi Selesai.',
        iconHtml: '<i class="ti ti-check text-success" style="font-size: 70px"></i>',
        showCancelButton: true,
        confirmButtonColor: '#03C95A',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Selesaikan',
        cancelButtonText: 'Batal',
        reverseButtons: true,
      }).then((result) => {
        if (!result.isConfirmed) return

        api
          .put(`/tickets/update-status/${ticket.id}`, {
            status: 'closed',
          })
          .then(() => {
            this.$swal('Berhasil!', 'Tiket berhasil diselesaikan.', 'success')

            // update local state (tanpa reload)
            ticket.status = 'Closed'
            ticket.status_slug = 'closed'

            // optional emit
            this.$emit('refresh-list')
          })
          .catch(() => {
            this.$swal('Gagal!', 'Gagal mengubah status tiket.', 'error')
          })
      })
    },
    getFileName(path) {
      return path.split('/').pop()
    },
    getFileExt(path) {
      return path.split('.').pop().toLowerCase()
    },
    isImage(path) {
      return ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(this.getFileExt(path))
    },
    isPdf(path) {
      return this.getFileExt(path) === 'pdf'
    },
    fileIconBg(path) {
      if (this.isPdf(path)) return 'bg-danger'
      if (this.isImage(path)) return 'bg-success'
      return 'bg-dark'
    },
    async downloadFile(path) {
      const response = await api.get(`/download/${encodeURIComponent(path)}`, {
        responseType: 'blob',
      })

      const blob = new Blob([response.data])
      const url = window.URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = url
      a.download = path.split('/').pop()
      document.body.appendChild(a)
      a.click()

      a.remove()
      window.URL.revokeObjectURL(url)
    },
  },
  created() {
    // <-- aman di sini
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    this.roleSlug = (user.role_slug || '').toLowerCase()
    this.userId = user.id
  },
  computed: {
    canApproveTickets() {
      return ['marketing'].includes(this.roleSlug)
    },
    // canCloseTickets() {
    //   if (!this.ticket) return false

    //   const isAllowedUser =
    //     this.ticket.reporter_user_id === this.userId || this.ticket.assigned_user_id === this.userId

    //   return isAllowedUser && this.ticket.status_slug != 'closed'
    // },
  },
  mounted() {
    initFlowbite()
    this.fetchTicket()
  },
}
</script>
