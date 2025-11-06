<template>
    <!-- Page Wrapper -->
    <div class="page-wrapper relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 p-5 items-center min-h-screen">
            <div class="col-span-1 lg:col-span-6 w-full mx-auto max-h-[900px] overflow-y-auto">
                <!-- left item -->
                <div class="max-w-[500px] mx-auto flex flex-col justify-around gap-5 min-h-screen">
                    <div class="text-center">
                        <router-link to="/dashboard/">
                            <img src="@/assets/img/logo.svg" alt="logo" class="mx-auto w-[150px]">
                        </router-link>
                    </div>
                    <div class="mb-8 ">
                        <div class="mb-4">
                            <h3 class="mb-2 text-[23px]">Reset Password?</h3>
                            <p class="mb-0">Enter New Password & Confirm Password to get inside.</p>
                        </div>
                        <form @submit.prevent="submitForm">
                            <div class="mb-4">
                                <label class="form-label">Password<span class="text-danger ms-1">*</span></label>
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
                            <div class="mb-4">
                                <label class="form-label">Confirm Password<span
                                        class="text-danger ms-1">*</span></label>
                                <div class="input-group-flat pass-group relative">
                                    <input
                                        :type="showPasswordOne ? 'text' : 'password'"
                                        class="form-control pass-input"
                                        placeholder="*****"
                                        v-model="passwordOne"
                                        />
                                    <span
                                        class="absolute inset-y-0 right-3 flex items-center cursor-pointer toggle-password"
                                        @click="togglePasswordOne">
                                        <i :class="['ti', showPasswordOne ? 'ti-eye' : 'ti-eye-off']"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="form-label">New Confirm Password<span
                                        class="text-danger ms-1">*</span></label>
                                <div class="input-group-flat pass-group relative">
                                    <input
                                        :type="showPasswordTwo ? 'text' : 'password'"
                                        class="form-control pass-input"
                                        placeholder="*****"
                                        v-model="passwordTwo"
                                        />
                                    <span
                                        class="absolute inset-y-0 right-3 flex items-center cursor-pointer toggle-password"
                                        @click="togglePasswordTwo">
                                        <i :class="['ti', showPasswordTwo ? 'ti-eye' : 'ti-eye-off']"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="mb-4">
                                <button type="submit" class="btn btn-primary w-full">Change Password</button>
                            </div>
                        </form>
                        <div class="mb-4 text-center">
                            <p class="mb-0">Return to<router-link to="/" class="text-info font-bold">Login</router-link></p>
                        </div>
                        <div class="flex items-center justify-center gap-2 mb-4">
                            <div class="w-10 border-2 border-t border-borderColor"></div>
                            <span class="text-gray-500 font-semibold">OR</span>
                            <div class="w-10 border-2 border-t border-borderColor"></div>
                        </div>
                        <div class="grid grid-cols-3 gap-4">
                            <a href="javascript:void(0);"
                                class="p-2 btn btn-info flex items-center justify-center w-full">
                                <img class="h-6 w-6" src="@/assets/img/icons/facebook-logo.svg" alt="Facebook">
                            </a>

                            <a href="javascript:void(0);"
                                class="p-2 btn btn-outline-light flex items-center justify-center w-full">
                                <img class="h-6 w-6" src="@/assets/img/icons/google-logo.svg" alt="Google">
                            </a>

                            <a href="javascript:void(0);"
                                class="p-2 btn btn-dark flex items-center justify-center w-full">
                                <img class="h-6 w-6" src="@/assets/img/icons/apple-logo.svg" alt="Apple">
                            </a>
                        </div>
                    </div>
                    <div class="text-center pb-4">
                        <p class="text-dark mb-0">Copyright &copy;
                            {{ new Date().getFullYear() }} - CRMS
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-span-1 lg:col-span-6 mx-auto text-center h-full flex items-center">
                <div class="w-full h-full  hidden lg:block min-h-screen">
                    <img src="@/assets/img/authentication/reset-bg.jpg" alt="login"
                        class="img-fluid rounded-lg w-full h-full object-cover">
                </div>
            </div>
        </div>
    </div>
    <!-- /Page Wrapper -->
</template>
<script>
export default {
    data(){
        return{
            password: "",
            showPassword: false,
            passwordOne: "",
            showPasswordOne: false,
            passwordTwo: "",
            showPasswordTwo: false,
        }
    },
    methods: {
        submitForm() {
            this.$router.push("/");
        },
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        togglePasswordOne() {
            this.showPasswordOne = !this.showPasswordOne;
        },
        togglePasswordTwo() {
            this.showPasswordTwo = !this.showPasswordTwo;
        },
    },
}
</script>