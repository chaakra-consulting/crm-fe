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
                    <div class="mb-8 text-center">
                        <span class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success mb-4">
                            <i class="ti ti-check text-[26px] text-white"></i>
                        </span>
                        <div class="mb-4">
                            <h3 class="mb-2 text-[23px]">Verify Your Email</h3>
                            <p class="mb-0">We've sent a link to your email ter4@example.com. Please <br> follow the
                                link inside to continue.</p>
                        </div>
                        <form @submit.prevent="submitForm">
                            <div class="mb-4 text-center">
                                <p class="mb-0">Didn't receive an email? <a href="javascript:void(0);"
                                        class="text-info font-bold"> Resend Link</a></p>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary w-full">Skip Now</button>
                            </div>
                        </form>
                    </div>
                    <div class="text-center pb-4">
                        <p class="text-dark mb-0">Copyright &copy;
                            {{ new Date().getFullYear() }} - CRMS
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-span-1 lg:col-span-6 mx-auto text-center h-full flex items-center">
                <div class="w-full h-full hidden lg:block min-h-screen">
                    <img src="@/assets/img/authentication/email-bg.jpg" alt="login"
                        class="img-fluid rounded-lg w-full h-full object-cover">
                </div>
            </div>
        </div>
    </div>
    <!-- /Page Wrapper -->
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        submitForm() {
            this.$router.push("/");
        },
    },
}
</script>
