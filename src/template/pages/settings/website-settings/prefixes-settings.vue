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
        <website-sidebar></website-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">Prefixes</h5>
            </div>
            <form>
              <div class="border-b border-borderColor pb-2 mb-4">

                <!-- start row -->
                <div class="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Products</label>
                      <input type="text" class="form-control" value="SKU - ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Supplier</label>
                      <input type="text" class="form-control" value="SUP - ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Purchase</label>
                      <input type="text" class="form-control" value="PU - ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Purchase Return</label>
                      <input type="text" class="form-control" value="PR - ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Sales</label>
                      <input type="text" class="form-control" value="SA - ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Sales Return</label>
                      <input type="text" class="form-control" value="SR -  ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Customer</label>
                      <input type="text" class="form-control" value="CT - ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Expense</label>
                      <input type="text" class="form-control" value="EX - ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Stock Transfer</label>
                      <input type="text" class="form-control" value="ST -  ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Stock Adjustment</label>
                      <input type="text" class="form-control" value="SA -  ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Sales Order</label>
                      <input type="text" class="form-control" value="SO - ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Invoice</label>
                      <input type="text" class="form-control" value="INV -  ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Estimation</label>
                      <input type="text" class="form-control" value="EST - ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Transaction</label>
                      <input type="text" class="form-control" value="TRN - ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Employee</label>
                      <input type="text" class="form-control" value="EMP -  ">
                    </div>
                  </div> <!-- end col -->

                  <div class="md:col-span-3 sm:col-span-6">
                    <div class="mb-3">
                      <label class="form-label">Purchase Return</label>
                      <input type="text" class="form-control" value="PR -  ">
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
      title: "Settings",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/website-settings/prefixes");
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
