<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">

      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Settings
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Settings</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Refresh Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Refresh">
            <i class="ti ti-refresh"></i>
          </button>
          <!-- Collapse Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Collapse" id="collapse-header" @click="toggleHeader">
            <i class="ti ti-transition-top"></i>
          </button>
        </div>
      </div>
      <!-- End Page Header -->

      <settings-tabs></settings-tabs>

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
        <other-sidebar></other-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">Cronjob</h5>
            </div>

            <!-- start row -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-4 gap-x-4 items-center mb-4">
              <div class="lg:col-span-6">
                <h6 class="mb-1 text-[14px]">Cronjob Link</h6>
                <p class="text-[13px] mb-0">You can configure the Link</p>
              </div>
              <div class="lg:col-span-6">
                <div class="mb-0">
                  <input type="text" class="form-control" value="https://example.com/cronjob">
                </div>
              </div>
            </div>
            <!-- end row -->

            <!-- start row -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-4 gap-x-4 items-center mb-4">
              <div class="lg:col-span-6">
                <h6 class="mb-1 text-[14px]">Execution Interval</h6>
                <p class="text-[13px] mb-0">You can configure the intervals</p>
              </div>
              <div class="lg:col-span-6">
                <div class="mb-0">
                  <vue3-tags-input class="input-tags form-control border-0 h-100" placeholder="" type="text"
                    data-role="tagsinput" name="Label" value="Tag1" :tags="tags2" />
                </div>
              </div>
            </div>
            <!-- end row -->
            <div class="flex items-center justify-end gap-2 border-t border-borderColor pt-4">
              <a href="javascript:void(0);" class="btn btn-sm btn-light">Cancel</a>
              <a href="javascript:void(0);" class="btn btn-sm bg-primary text-white hover:bg-secondary">Save Changes</a>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      tags2: ["1 day", "1 hour"],
      title: "Settings",
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
