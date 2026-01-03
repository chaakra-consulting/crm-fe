<template>
    <!-- Page Wrapper -->
    <div class="page-wrapper relative">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 p-5 items-center min-h-screen">

        <!-- LEFT SIDE (GAMBAR) -->
        <div class="col-span-1 lg:col-span-6 mx-auto text-center h-full hidden lg:flex items-center justify-center bg-[#9DEAFF] min-h-screen">
          <img
            src="@/assets/img/props/chaakra-blue.png"
            alt="login"
            class="rounded-lg object-contain max-h-[80vh]"
          />
        </div>

        <!-- RIGHT SIDE (FORM LOGIN) -->
        <div class="col-span-1 lg:col-span-6 w-full mx-auto max-h-[900px] overflow-y-auto">
          <div class="max-w-[500px] mx-auto flex flex-col justify-around gap-5 min-h-screen">

            <div class="text-center">
              <router-link to="/dashboard/">
                <img src="@/assets/img/props/chaakra.png" alt="logo" class="mx-auto w-[150px]" />
              </router-link>
            </div>

            <div class="mb-8">
              <div class="mb-4">
                <h2 class="mb-2 text-[25px] font-bold">Sign In</h2>
                <p class="mb-0">Silahkan Login dengan Akun CRM Chaakra.</p>
              </div>

              <form @submit.prevent="handleLogin">
                <div class="mb-4 text-left">
                  <label class="form-label">Email<span class="text-danger ms-1">*</span></label>
                  <div class="relative">
                    <input
                      type="email"
                      v-model="email"
                      class="form-control w-full border rounded px-3 py-2"
                      placeholder="Masukkan email"
                      required
                    />
                    <span class="absolute inset-y-0 right-3 flex items-center">
                      <i class="ti ti-mail"></i>
                    </span>
                  </div>
                </div>

                <div class="mb-4 text-left">
                  <label class="form-label">Password<span class="text-danger ms-1">*</span></label>
                  <div class="relative">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      v-model="password"
                      class="form-control w-full border rounded px-3 py-2"
                      placeholder="Masukkan password"
                      required
                    />
                    <span
                      class="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                      @click="togglePassword"
                    >
                      <i :class="['ti', showPassword ? 'ti-eye' : 'ti-eye-off']"></i>
                    </span>
                  </div>
                </div>

                <div class="flex justify-between items-center mb-4">
                  <!-- <div class="flex items-center gap-1">
                    <input type="checkbox" class="rounded" id="rememberMe" />
                    <label for="rememberMe">Remember Me</label>
                  </div> -->
                </div>

                <div class="mb-4">
                  <button
                    type="submit"
                    class="btn bg-primary hover:bg-primary-900 w-full bg-blue-600 text-white py-2 rounded flex items-center justify-center gap-2"
                    :disabled="isLoading"
                  >
                    <div
                      v-if="isLoading"
                      class="spinner-grow spinner-grow-sm bg-light mr-2"
                      role="status"
                    ></div>
                    <span>{{ isLoading ? "Signing In..." : "Sign In" }}</span>
                  </button>
                </div>
              </form>

              <div v-if="error" class="text-red-600 text-center mb-4">
                {{ error }}
              </div>

              <!-- <div class="mb-4">
                <p class="mb-0">
                  New on our platform?
                  <router-link to="/register" class="text-info font-bold">Create an account</router-link>
                </p>
              </div> -->
            </div>

            <div class="text-center pb-4">
              <p class="text-dark mb-0">
                Copyright &copy; {{ new Date().getFullYear() }} - Chaakra Consulting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Wrapper -->
  </template>

  <script setup>
    import { ref } from "vue";
    import api from "../../../../api/api";

    const email = ref("");
    const password = ref("");
    const showPassword = ref(false);
    const error = ref("");
    const isLoading = ref(false);

    // Toggle visibility password
    const togglePassword = () => {
        showPassword.value = !showPassword.value;
    };

    const handleLogin = async () => {
      error.value = "";
      isLoading.value = true;

      try {
        const response = await api.post("/login", {
          email: email.value,
          password: password.value,
        });

        const { token, user, expires_at } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token_expired_at", expires_at);

        window.location.href = "/dashboard";
      } catch (err) {
        error.value = err.response?.data?.message || "Email atau password salah.";
      } finally {
        isLoading.value = false;
      }
    };
  </script>

