<script>
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      selectedEight: null,
      selectedNine: null,
      selectedTen: null,
      selectedEleven: null,
      selectedTwelve: null,
      selectedThirteen: null,
      selectedFourteen: null,
      TrialDays : [
        { lable:"Select", value:"Select" },
        { lable:"Monthly", value:"Monthly" },
        { lable:"Yearly", value:"Yearly" },
      ],
      PlanName: [
        { label: "Select", value: "Select" },
        { label: "Advanced", value: "Advanced" },
        { label: "Basic", value: "Basic" },
        { label: "Enterprise", value: "Enterprise" },
      ],
      PlanType: [
        { label: "Select", value: "Select" },
        { label: "Monthly", value: "Monthly" },
        { label: "Yearly", value: "Yearly" },
      ],
      PlanPosition: [
        { label: "Select", value: "Select" },
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
      ],
      PlanCurrency: [
        { label: "Select", value: "Select" },
        { label: "USD", value: "USD" },
        { label: "EURO", value: "EURO" },
      ],
      PlanFree: [
        { label: "Select", value: "Select" },
        { label: "Fixed", value: "Fixed" },
        { label: "Percentage", value: "Percentage" },
        { label: "Enterprise", value: "Enterprise" },
      ],
      DiscountType: [
        { label: "Select", value: "Select" },
        { label: "Fixed", value: "Fixed" },
        { label: "Percentage", value: "Percentage" },
      ],
      PackStatus: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/super-admin/packages");
    },
  },
};
</script>

<template>
  <!-- Add company -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Package</h5>
      <button type="button" data-drawer-hide="offcanvas_add" aria-controls="offcanvas_add"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 p-5 border border-borderColor rounded mb-5">
          <div class="md:col-span-12">
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
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Plan Name<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Plan Type <span class="text-danger">*</span></label>
              <vue3-select
                    v-model="selectedFourteen"
                    :options="PlanType"
                    placeholder="Select"
                  />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Plan Position <span class="text-danger">*</span></label>
              <vue3-select
                    v-model="selectedThirteen"
                    :options="PlanPosition"
                    placeholder="Select"
                  />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Plan Currency <span class="text-danger">*</span></label>
              <vue3-select
                    v-model="selectedTwelve"
                    :options="PlanCurrency"
                    placeholder="Select"
                  />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <div class="flex justify-between">
                <label class="form-label">Plan Currency <span class="text-danger">*</span></label>
                <span class="text-primary md:flex items-center"><i
                    class="ti ti-info-circle-filled text-danger me-1"></i>Set 0 for free</span>
              </div>
              <vue3-select
                    v-model="selectedEleven"
                    :options="PlanFree"
                    placeholder="Select"
                  />
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="form-label">Discount Type <span class="text-danger">*</span></label>
              <vue3-select
                    v-model="selectedTen"
                    :options="DiscountType"
                    placeholder="Select"
                  />
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="form-label">Discount<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="form-label">Limitations Invoices<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="form-label">Max Customers<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="form-label">Product<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="form-label">Supplier<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Plan Modules<span class="text-danger ms-1">*</span></label>
                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                  Select All
                </label>
              </div>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Contacts
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Companies
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Deals
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Leads
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Pipelines
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Projects
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Tasks
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Campaigns
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Contracts
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Estimations
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Proposals
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Invoices
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Payments
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Activities
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Analytics
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Reports
              </label>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="flex items-center gap-2 w-full cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <span class="ms-1 text-gray-900">Access Trial</span>
                <span
                  class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
              </label>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Trial Days <span class="text-danger">*</span></label>
              <vue3-select
                    v-model="selectedNine"
                    :options="TrialDays"
                    placeholder="Select"
                  />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status <span class="text-danger">*</span></label>
              <vue3-select
                      v-model="selectedEight"
                      :options="PackStatus"
                      placeholder="Select"
                    />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-0">
              <label class="flex items-center gap-2 w-full cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <span class="ms-1 text-gray-900">Access Trial</span>
                <span
                  class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button type="button" data-drawer-hide="offcanvas_add" class="btn btn-light me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Create New</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Add company -->

  <!-- Edit company -->
  <div id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Edit Package</h5>
      <button type="button" data-drawer-hide="offcanvas_edit" aria-controls="offcanvas_edit"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 p-5 border border-borderColor rounded mb-5">
          <div class="md:col-span-12">
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
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Plan Name<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Plan Type <span class="text-danger">*</span></label>
              <vue3-select
                    v-model="selectedOne"
                    :options="PlanType"
                    placeholder="Select"
                  />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Plan Position <span class="text-danger">*</span></label>
              <vue3-select
                    v-model="selectedTwo"
                    :options="PlanPosition"
                    placeholder="Select"
                  />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Plan Currency <span class="text-danger">*</span></label>
              <vue3-select
                    v-model="selectedThree"
                    :options="PlanCurrency"
                    placeholder="Select"
                  />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <div class="flex justify-between">
                <label class="form-label">Plan Currency <span class="text-danger">*</span></label>
                <span class="text-primary md:flex items-center"><i
                    class="ti ti-info-circle-filled text-danger me-1"></i>Set 0 for free</span>
              </div>
              <vue3-select
                    v-model="selectedFour"
                    :options="PlanFree"
                    placeholder="Select"
                  />
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="form-label">Discount Type <span class="text-danger">*</span></label>
              <vue3-select
                    v-model="selectedFive"
                    :options="DiscountType"
                    placeholder="Select"
                  />
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="form-label">Discount<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="form-label">Limitations Invoices<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="form-label">Max Customers<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="form-label">Product<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="form-label">Supplier<span class="text-danger ms-1">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Plan Modules<span class="text-danger ms-1">*</span></label>
                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                  Select All
                </label>
              </div>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Contacts
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Companies
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Deals
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Leads
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Pipelines
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Projects
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Tasks
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Campaigns
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Contracts
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Estimations
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Proposals
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Invoices
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Payments
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Activities
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Analytics
              </label>
            </div>
          </div>
          <div class="md:col-span-3">
            <div class="mb-3">
              <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input type="checkbox"
                  class="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                Reports
              </label>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="flex items-center gap-2 w-full cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <span class="ms-1 text-gray-900">Access Trial</span>
                <span
                  class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
              </label>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Trial Days <span class="text-danger">*</span></label>
              <vue3-select
                      v-model="selectedSeven"
                      :options="TrialDays"
                      placeholder="Select"
                    />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status <span class="text-danger">*</span></label>
              <vue3-select
                      v-model="selectedSix"
                      :options="PackStatus"
                      placeholder="Select"
                    />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-0">
              <label class="flex items-center gap-2 w-full cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <span class="ms-1 text-gray-900">Access Trial</span>
                <span
                  class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button type="button" data-drawer-hide="offcanvas_add" class="btn btn-light me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Edit company -->

  <!-- delete modal -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="delete_modal">
    <div class="relative bg-white rounded-defaultradius p-5">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center">
          <div class="mb-3 relative z-[1]">
            <span
              class="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center"><i
                class="ti ti-trash text-[24px]"></i></span>
          </div>
          <h5 class="mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure you want to remove packages you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->
</template>
