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
                    <div>
                        <div class="mb-5">
                            <h3 class="mb-2 text-[23px]">Login With Your Email Address</h3>
                            <p class="mb-0">We sent a verification code to your email. Enter the code from the email in
                                the field below</p>
                        </div>
                        <div class="flex items-center justify-center gap-3 mb-4">
                            <input type="text"
                                class="text-center text-[26px] font-bold rounded w-14 h-14 focus:outline-none border border-borderColor"
                                id="digit-1" name="digit-1" data-next="digit-2" maxlength="1">

                            <input type="text"
                                class="text-center text-[26px] font-bold rounded w-14 h-14 focus:outline-none border border-borderColor"
                                id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" maxlength="1">

                            <input type="text"
                                class="text-center text-[26px] font-bold rounded w-14 h-14 focus:outline-none border border-borderColor"
                                id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" maxlength="1">

                            <input type="text"
                                class="text-center text-[26px] font-bold rounded w-14 h-14 focus:outline-none border border-borderColor"
                                id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" maxlength="1">
                        </div>
                        <form method="post">
                            <div class="mb-5 text-center">
                                <p class="mb-0">Otp will expire in 09 :10</p>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary w-full">Verify My Account</button>
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
                    <img src="@/assets/img/authentication/verification-bg.jpg" alt="login"
                        class="img-fluid rounded-lg w-full h-full object-cover">
                </div>
            </div>
        </div>
    </div>
    <!-- /Page Wrapper -->
</template>