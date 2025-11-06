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
        <general-sidebar></general-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">Profile</h5>
            </div>
            <form>
              <div class="mb-3">
                <h6 class="mb-1">Employee Information</h6>
                <p class="mb-0">Provide the information below</p>
              </div>
              <div class="flex items-center mb-3">
                <div
                  class="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                  <div class="relative flex items-center justify-center">
                    <i class="ti ti-photo text-dark fs-16"></i>
                  </div>
                </div>
                <div class="inline-flex flex-col items-start">
                  <div class="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                    <i class="ti ti-file-broken me-1"></i>Upload file
                    <input type="file" class="opacity-0 absolute start-0 top-0" multiple="">
                  </div>
                  <span>JPG, GIF or PNG. Max size of 800K</span>
                </div>
              </div>
              <div class="border-b border-borderColor mb-4 pb-1">

                <!-- start row -->
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-6">

                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <label class="form-label">
                        First Name <span class="text-danger">*</span>
                      </label>
                      <input type="text" class="form-control">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <label class="form-label">
                        Last Name <span class="text-danger">*</span>
                      </label>
                      <input type="text" class="form-control">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <label class="form-label">
                        User Name <span class="text-danger">*</span>
                      </label>
                      <input type="text" class="form-control">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <label class="form-label">
                        Phone Number <span class="text-danger">*</span>
                      </label>
                      <input type="text" class="form-control">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <label class="form-label">
                        Email <span class="text-danger">*</span>
                      </label>
                      <input type="text" class="form-control">
                    </div>
                  </div> <!-- end col -->

                </div>
                <!-- end row -->

              </div>
              <div class="border-b border-borderColor mb-4 pb-1">
                <div class="mb-3">
                  <h6 class="mb-1">Address</h6>
                  <p class="mb-0">Please enter the address details</p>
                </div>

                <!-- start row -->
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-6">

                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">
                        Address
                      </label>
                      <input type="text" class="form-control">
                    </div>
                  </div> <!-- end col -->
                  <div class="md:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">
                        Country
                      </label>
                      <vue3-select
                              v-model="selected"
                              :options="CountPro"
                              placeholder="Select"
                            />
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">
                        State / Province
                      </label>
                      <vue3-select
                              v-model="selectedOne"
                              :options="StatPro"
                              placeholder="Select"
                            />
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">
                        City
                      </label>
                      <vue3-select
                              v-model="selectedTwo"
                              :options="CityPro"
                              placeholder="Select"
                            />
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">
                        Postal Code
                      </label>
                      <input type="text" class="form-control">
                    </div>
                  </div> <!-- end col -->

                </div>
                <!-- end row -->

              </div>
              <div class="flex items-center justify-end flex-wrap gap-2">
                <a href="#" class="btn btn-sm btn-light">Cancel</a>
                <button type="submit" class="btn btn-sm btn-primary">Save Changes</button>
              </div>
            </form>
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
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      CityPro: [
        { label: "Select", value: "Select" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "Toronto", value: "Toronto" },
        { label: "London", value: "London" },
        { label: "Munich", value: "Munich" },
      ],
      StatPro: [
        { label: "Select", value: "Select" },
        { label: "California", value: "California" },
        { label: "Onatario", value: "Onatario" },
        { label: "England", value: "England" },
        { label: "Bavaria", value: "Bavaria" },
      ],
      CountPro: [
        { label: "Select", value: "Select" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "UK", value: "UK" },
        { label: "Germany", value: "Germany" },
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/profile");
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
