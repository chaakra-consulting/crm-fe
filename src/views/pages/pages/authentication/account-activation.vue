<template>
  <!-- BLOCKED / MAINTENANCE PAGE -->
  <div v-if="showBlockedPage" class="page-wrapper relative">
    <div class="content p-5">
      <div class="flex justify-center items-center h-screen">
        <div class="w-full max-w-3xl mx-auto text-center">
          <img
            src="@/assets/img/authentication/maintenance-img.png"
            class="mx-auto max-w-lg mb-6"
            alt="maintenance"
          />

          <h2 class="mb-4 font-bold text-gray-800">
            Akun Sudah Aktif
          </h2>

          <p class="mb-4 text-gray-600">
            Akun ini sudah diaktivasi atau link aktivasi sudah tidak berlaku.
          </p>

          <router-link
            to="/"
            class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md"
          >
            <i class="ti ti-chevron-left mr-2"></i>
            Kembali ke Login
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- ACTIVATION FORM -->
  <div v-else class="page-wrapper relative">
    <div class="content">
      <div
        class="w-full flex flex-col justify-around items-center mx-auto text-center min-h-screen"
      >
        <div class="text-center">
          <img
            src="@/assets/img/props/chaakra.png"
            alt="logo"
            class="mx-auto w-[150px]"
          />
        </div>

        <!-- SKELETON LOADING -->
        <div
          v-if="isLoading"
          class="bg-white rounded border border-borderColor p-6 max-w-[500px] w-full animate-pulse"
        >
          <!-- Title -->
          <div class="h-4 bg-gray-200 rounded w-1/2 mb-4 mx-auto"></div>

          <!-- User Name -->
          <div class="h-5 bg-gray-200 rounded w-1/3 mb-6 mx-auto"></div>

          <!-- Password -->
          <div class="mb-4">
            <div class="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div class="h-10 bg-gray-200 rounded"></div>
          </div>

          <!-- Confirm Password -->
          <div class="mb-6">
            <div class="h-3 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div class="h-10 bg-gray-200 rounded"></div>
          </div>

          <!-- Button -->
          <div class="h-10 bg-gray-300 rounded"></div>
        </div>

        <div
          v-else
          class="bg-white rounded border border-borderColor p-6 max-w-[500px] w-full"
        >
          <p class="mb-2">Silahkan Aktivasi Akun!</p>

          <div class="mb-4 text-center">
            <h5 class="font-bold mb-0">{{ user?.name }}</h5>
          </div>

          <!-- PASSWORD -->
          <div class="mb-3">
            <label class="form-label text-start">
              Password<span class="text-danger ms-1">*</span>
            </label>
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                class="form-control"
                v-model="form.password"
              />
              <span
                class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                @click="togglePassword"
              >
                <i :class="['ti', showPassword ? 'ti-eye' : 'ti-eye-off']"></i>
              </span>
            </div>
          </div>

          <!-- CONFIRM PASSWORD -->
          <div class="mb-4">
            <label class="form-label text-start">
              Konfirmasi Password<span class="text-danger ms-1">*</span>
            </label>
            <div class="relative">
              <input
                :type="showPasswordOne ? 'text' : 'password'"
                class="form-control"
                v-model="form.password_confirmation"
              />
              <span
                class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                @click="togglePasswordOne"
              >
                <i :class="['ti', showPasswordOne ? 'ti-eye' : 'ti-eye-off']"></i>
              </span>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-primary w-full"
            @click="submitActivation"
          >
            Aktivasi Akun
          </button>
        </div>

        <p class="text-dark mt-4">
          Copyright &copy; {{ new Date().getFullYear() }} - CRM Chaakra
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { initFlowbite } from 'flowbite'
import { onMounted, onUnmounted, ref } from 'vue'
import api from '../../../../api/api'
export default {
  data() {
    return {
      form: {
        password: '',
        password_confirmation: '',
      },
      isLoading: true,
      showPassword: false,
      passwordOne: '',
      showPasswordOne: false,
      showBlockedPage: false,
      user: {
        id: null,
        name: '',
        email: '',
        is_active: '',
      },
    }
  },
  methods: {
    async fetchUser() {
      this.isLoading = true
      try {
        const response = await api.get('/users/show', {
          params: {
            show_type: 'activation',
            email_token: this.$route.params.token,
          },
        })

        this.user = response.data.data

        if (this.user.is_active == 1 || !this.user.email_token) {
          this.showBlockedPage = true
        }

      } catch (error) {
        this.showBlockedPage = true
      } finally {
        this.isLoading = false
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    togglePasswordOne() {
      this.showPasswordOne = !this.showPasswordOne
    },
    async submitActivation() {
      if (this.form.password !== this.form.password_confirmation) {
        return this.$swal({
          icon: 'warning',
          title: 'Password tidak sama',
        })
      }

      try {
        await api.put(`/users/activate-account/${this.user.id}`, {
          password: this.form.password,
          password_confirmation: this.form.password_confirmation,
        })

        this.$swal({
          icon: 'success',
          title: 'Akun berhasil diaktivasi',
        }).then(() => {
          this.$router.push('/')
        })
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: 'Aktivasi gagal',
          text: err.response?.data?.message || 'Terjadi kesalahan',
        })
      }
    },
  },
  mounted() {
    this.fetchUser()
  },
}
</script>
