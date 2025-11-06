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
                                <h3 class="mb-2 text-[23px]">Register</h3>
                                <p class="mb-0">Create new CRMS account.</p>
                            </div>
                            <form @submit.prevent="submitForm">
                                <div class="mb-4">
                                    <label class="form-label">Name<span class="text-danger ms-1">*</span></label>
                                    <div class="w-auto input-group-flat rounded relative">
                                        <input type="text" class="form-control">
                                        <span class="absolute inset-y-0 right-3 flex items-center">
                                            <i class="ti ti-user"></i>
                                        </span>
                                    </div>						
                                </div>
                                <div class="mb-4">
                                    <label class="form-label">Email Address<span class="text-danger ms-1">*</span></label>
                                    <div class="w-auto input-group-flat rounded relative">
                                        <input type="text" class="form-control">
                                        <span class="absolute inset-y-0 right-3 flex items-center">
                                            <i class="ti ti-mail"></i>
                                        </span>
                                    </div>						
                                </div>
                                <div class="mb-4">
                                    <label class="form-label">Password<span class="text-danger ms-1">*</span></label>
                                    <div class="input-group-flat pass-group relative">
                                        <input
                                        :type="showPassword ? 'text' : 'password'"
                                        class="form-control pass-input"
                                        placeholder="Password"
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
                                    <label class="form-label">Confirm Password<span class="text-danger ms-1">*</span></label>
                                    <div class="input-group-flat pass-group relative">
                                        <input
                                            :type="showPasswordOne ? 'text' : 'password'"
                                            class="form-control pass-input"
                                            placeholder="Confirm Password"
                                            v-model="passwordOne"
                                        />
                                    <span
                                        class="absolute inset-y-0 right-3 flex items-center cursor-pointer toggle-password"
                                        @click="togglePasswordOne">
                                        <i :class="['ti', showPasswordOne ? 'ti-eye' : 'ti-eye-off']"></i>
                                    </span>
                                    </div>						
                                </div>
                                <div class="flex items-center mb-4">
                                    <div class="form-check flex items-center gap-1">
                                        <input type="checkbox" class="form-check-input rounded" id="rememberMe">
                                        <label class="form-check-label" for="rememberMe">I agree to the </label>    
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);" class="text-primary hover:text-dark font-medium">Terms & Privacy</a>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <button type="submit" class="btn btn-primary w-full">Sign Up</button>
                                </div>
                            </form>
                            <div class="mb-4">
                                <p class="mb-0">Already have an account? <router-link to="/" class="text-info font-bold">Sign In Instead</router-link></p>
                            </div>
                            <div class="flex items-center justify-center gap-2 mb-4">
                                <div class="w-10 border-2 border-t border-borderColor"></div>
                                <span class="text-gray-500 font-semibold">OR</span>
                                <div class="w-10 border-2 border-t border-borderColor"></div>
                            </div>
                            <div class="grid grid-cols-3 gap-4">
                                <a href="javascript:void(0);" class="p-2 btn btn-info flex items-center justify-center w-full">
                                    <img class="h-6 w-6" src="@/assets/img/icons/facebook-logo.svg" alt="Facebook">
                                </a>

                                <a href="javascript:void(0);" class="p-2 btn btn-outline-light flex items-center justify-center w-full">
                                    <img class="h-6 w-6" src="@/assets/img/icons/google-logo.svg" alt="Google">
                                </a>

                                <a href="javascript:void(0);" class="p-2 btn btn-dark flex items-center justify-center w-full">
                                    <img class="h-6 w-6" src="@/assets/img/icons/apple-logo.svg" alt="Apple">
                                </a>
                            </div>
                        </div>
                        <div class="text-center pb-4">
                            <p class="text-dark mb-0">Copyright &copy; {{ new Date().getFullYear() }} - CRMS</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 lg:col-span-6 mx-auto text-center h-full flex items-center">
                    <div class="w-full h-full  hidden lg:block min-h-screen">
                        <img src="@/assets/img/authentication/register-bg.jpg" alt="login" class="img-fluid rounded-lg w-full h-full object-cover">
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
    },
}
</script>