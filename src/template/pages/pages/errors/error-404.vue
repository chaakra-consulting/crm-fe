<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative">
    <div class="content p-5">
      <!-- start row -->
      <div class="flex justify-center items-center h-screen">
        <div class="w-full max-w-3xl flex justify-center items-center mx-auto">
          <div>
            <div class="mb-6">
              <img src="@/assets/img/authentication/error-404.png" class="w-full mx-auto max-w-md" alt="maintenance">
            </div>
            <div class="text-center">
              <h2 class="mb-4 font-bold text-gray-800">Oops, something went wrong</h2>
              <p class="mb-4 text-gray-600">Error 404 Page not found. Sorry the page you looking for <br> doesn’t exist
                or has been moved</p>
              <div class="pb-4">
                <router-link to="/dashboard/"
                  class="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition">
                  <i class="ti ti-chevron-left mr-2"></i>Back to Dashboard
              </router-link>
              </div>
            </div>
          </div>
        </div> <!-- end col -->
      </div>
      <!-- end row -->
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
