<template>
  <div class="page-wrapper relative">
    <div class="content p-5">
      <!-- start row -->
      <div class="flex justify-center items-center h-screen">
        <div class="w-full max-w-3xl flex justify-center items-center mx-auto">
          <div>
            <div class="mb-6">
              <img src="@/assets/img/authentication/maintenance-img.png" class="w-full mx-auto max-w-lg"
                alt="maintenance-img">
            </div>
            <div class="text-center">
              <h2 class="mb-4 font-bold text-gray-800">We are Under Maintenance</h2>
              <p class="mb-4 text-gray-600">Sorry for any inconvenience caused, we have almost <br> done. Will get back
                soon!</p>
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
<script>
export default {
  watch: {
    $route(to) {
      this.updateBodyClass(to);
    },
  },
  mounted() {
    this.updateBodyClass(this.$route);
  },
  methods: {
    updateBodyClass(route) {
      const isTargetRoute = route.path === "/coming-soon";
      const body = document.body;

      if (isTargetRoute) {
        body.classList.add("error-page");
      } else {
        body.classList.remove("error-page");
      }
    },
  },
};
</script>
