<template>
    <!-- Page Wrapper -->
    <div class="page-wrapper relative">
        <div class="content">
            <div class="w-full flex flex-col justify-around items-center mx-auto text-center min-h-screen">
                <div class="text-center">
                    <img src="@/assets/img/logo.svg" alt="logo" class="mx-auto w-[150px]">
                </div>
                <div class="bg-white rounded border border-borderColor p-6  max-w-[500px] w-full">
                    <!-- Logo -->
                    <p class="mb-4">Welcome back!</p>
                    <!-- Heading -->
                    <div class="mb-4">
                        <div class="text-center">
                            <span class="inline-block w-20 h-20 rounded-full overflow-hidden mb-2">
                                <img src="@/assets/img/profiles/avatar-14.jpg" class="w-full h-full object-cover"
                                    alt="Profile">
                            </span>
                            <h5 class="font-bold mb-0">Adrian Davies</h5>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="form-label text-start">Password<span class="text-danger ms-1">*</span></label>
                        <div class="input-group-flat pass-group relative">
                            <input
                                :type="showPassword ? 'text' : 'password'"
                                class="form-control pass-input"
                                placeholder="*****"
                                v-model="password"
                                />
                            <span
                                class="absolute inset-y-0 right-3 flex items-center cursor-pointer toggle-password"
                                @click="togglePassword">
                                <i :class="['ti', showPassword ? 'ti-eye' : 'ti-eye-off']"></i>
                            </span>
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary w-full">Login</button>
                    </div>
                </div>
                <div class="text-center">
                    <div class="flex items-center justify-center flex-wrap gap-4 mb-4">
                        <a href="javascript:void(0);" class="text-dark">Terms & Condition</a>
                        <a href="javascript:void(0);" class="text-dark">Privacy</a>
                        <a href="javascript:void(0);" class="text-dark">Help</a>
                        <div>
                            <a href="javascript:void(0);" class="text-dark" data-dropdown-toggle="lang-dropdown">
                                English<i class="ti ti-chevron-down ml-1"></i>
                            </a>
                            <ul id="lang-dropdown"
                                class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                                <li>
                                    <a href="javascript:void(0);"
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">French</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);"
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Spanish</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p class="text-dark mb-0">Copyright &copy;
                        {{new Date().getFullYear()}} - CRMS
                    </p>
                </div>
            </div>
        </div>
        <!-- /Page Wrapper -->
    </div>
    <!-- /Page Wrapper -->
</template>

<script>
export default {
    data() {
        return {
            showPassword: false,
            password: "",
        }
    },
    methods: {
        togglePassword() {
          this.showPassword = !this.showPassword;
        },
    },
}
</script>
