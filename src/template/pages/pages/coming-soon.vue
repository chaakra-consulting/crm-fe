<template>
  <div class="comming-soon">
    <!-- Page Wrapper -->
    <div class="page-wrapper relative">
      <div class="content">
        <div class="w-full flex justify-center items-center mx-auto text-center min-h-screen">
          <div class="bg-white rounded-lg shadow-lg p-6  max-w-[500px] w-full">
            <!-- Logo -->
            <div class="mb-6 text-center">
              <router-link to="/dashboard/">
                <img src="@/assets/img/logo.svg" alt="logo" class="mx-auto w-[150px]">
              </router-link>
            </div>
            <!-- Heading -->
            <div>
              <h4 class="text-gray-600 font-semibold mb-2">Our Website is</h4>
              <h2 class="mb-4 text-[48px] md:text-[52px] font-bold"><span class="text-primary">COMING </span>SOON</h2>
              <p class="text-gray-700 mb-4">Please check back later, We are working hard to get <br> everything just
                right.</p>
            </div>
            <div class="flex justify-center items-center mb-6 gap-2 sm:gap-3">
              <!-- Day -->
              <div
                class="border border-borderColor rounded py-2 px-2 w-14 h-14 min-w-14 flex flex-col justify-center items-center sm:py-3 sm:px-4 sm:w-[80px] sm:h-20 sm:min-w-[80px]">
                <h2 class="font-bold mb-1 days text-lg sm:text-[28px]">54</h2>
                <h6 class="text-gray-600 text-xs sm:text-base">Days</h6>
              </div>
              <span class="text-lg sm:text-2xl font-bold">:</span>
              <!-- Hour -->
              <div
                class="border border-borderColor rounded py-2 px-2 w-14 h-14 min-w-14 flex flex-col justify-center items-center sm:py-3 sm:px-4 sm:w-[80px] sm:h-20 sm:min-w-[80px]">
                <h2 class="font-bold mb-1 hours text-lg sm:text-[28px]">15</h2>
                <h6 class="text-gray-600 text-xs sm:text-base">Hrs</h6>
              </div>
              <span class="text-lg sm:text-2xl font-bold">:</span>
              <!-- Minute -->
              <div
                class="border border-borderColor rounded py-2 px-2 w-14 h-14 min-w-14 flex flex-col justify-center items-center sm:py-3 sm:px-4 sm:w-[80px] sm:h-20 sm:min-w-[80px]">
                <h2 class="font-bold mb-1 minutes text-lg sm:text-[28px]">9</h2>
                <h6 class="text-gray-600 text-xs sm:text-base">Min</h6>
              </div>
              <span class="text-lg sm:text-2xl font-bold">:</span>
              <!-- Second -->
              <div
                class="border border-borderColor rounded py-2 px-2 w-14 h-14 min-w-14 flex flex-col justify-center items-center sm:py-3 sm:px-4 sm:w-[80px] sm:h-20 sm:min-w-[80px]">
                <h2 class="font-bold mb-1 seconds text-lg sm:text-[28px]">23</h2>
                <h6 class="text-gray-600 text-xs sm:text-base">Sec</h6>
              </div>
            </div>
            <div class="mb-6">
              <!-- Subscription Section -->
              <h6 class="text-center mb-3 font-semibold">Subscribe to get notified!</h6>
              <div class="bg-white border border-borderColor p-1 flex items-center rounded">
                <input type="email"
                  class="w-full border-0 px-3 py-2 text-[14px] focus:outline-none border-none focus:ring-0"
                  placeholder="Enter Your Email">
                <a href="javascript:void(0);"
                  class="bg-dark text-white px-4 py-2 rounded hover:bg-primary transition">Subscribe</a>
              </div>
            </div>
            <!-- Social Icons -->
            <div class="flex flex-wrap justify-center items-center gap-2">
              <a href="#"
                class="bg-dark text-white p-2 w-8 h-8 flex items-center justify-center  rounded hover:bg-gray-800 transition">
                <i class="ti ti-brand-facebook text-lg"></i>
              </a>
              <a href="#"
                class="bg-dark text-white p-2 w-8 h-8 flex items-center justify-center  rounded hover:bg-gray-800 transition">
                <i class="ti ti-brand-instagram text-lg"></i>
              </a>
              <a href="#"
                class="bg-dark text-white p-2 w-8 h-8 flex items-center justify-center rounded hover:bg-gray-800 transition">
                <i class="ti ti-brand-twitter text-lg"></i>
              </a>
              <a href="#"
                class="bg-dark text-white p-2 w-8 h-8 flex items-center justify-center  rounded hover:bg-gray-800 transition">
                <i class="ti ti-brand-pinterest text-lg"></i>
              </a>
              <a href="#"
                class="bg-dark text-white p-2 w-8 h-8 flex items-center justify-center  rounded hover:bg-gray-800 transition">
                <i class="ti ti-brand-linkedin text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
