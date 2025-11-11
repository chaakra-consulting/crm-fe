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
        <financial-sidebar></financial-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor flex items-center justify-between mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">Bank Accounts</h5>
              <a href="javascript:void(0);"
                class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
                data-modal-target="add_modal" data-modal-toggle="add_modal">
                <i class="ti ti-square-rounded-plus-filled me-1"></i>
                Add New Account
              </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-4">
              <!-- Card 1 -->
              <div class="xxl:col-span-4 md:col-span-6">
                <input type="radio" id="option-1" value="" name="status-2" class="hidden peer" checked>
                <div class="bank-info bg-light flex flex-col justify-between p-5 text-dark relative border-2 border-borderColor rounded-lg cursor-pointer
                  peer-checked:border-success peer-checked:bg-white"
                  onclick="document.getElementById('option-1').checked = true">
                  <div
                    class="check-icon text-success absolute top-[-5px] left-[-5px] opacity-0 peer-checked:opacity-100">
                    <i class="ti ti-circle-check-filled"></i>
                  </div>
                  <div class="mb-4">
                    <h5 class="font-bold mb-1 text-[16px]">HDFC</h5>
                    <p class="mb-0 fs-14">**** **** 4872</p>
                  </div>
                  <div class="flex items-center justify-between">
                    <div>
                      <h6 class="font-semibold mb-1 text-[14px]">Holder Name</h6>
                      <p class="text-[13px]">Darlee Robertson</p>
                    </div>
                    <div class="dropdown relative table-action" ref="el => dropdownRefs[0] = el">
                      <a href="javascript:void(0);"
                        class="dropdown-toggle bg-white w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        @click="toggleDropdown(0, $event)">
                        <i class="ti ti-dots-vertical"></i>
                      </a>
                      <div
                        class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                        :class="{ 'hidden': openDropdown !== 0 }">
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="edit_modal" data-modal-toggle="edit_modal"><i
                            class="ti ti-edit me-1"></i> Edit</a>
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="xxl:col-span-4 md:col-span-6">
                <input type="radio" id="option-2" value="" name="status-2" class="hidden peer">
                <div class="bank-info bg-light flex flex-col justify-between p-5 text-dark relative border-2 border-borderColor rounded-lg cursor-pointer
                  peer-checked:border-success peer-checked:bg-white"
                  onclick="document.getElementById('option-2').checked = true">
                  <div
                    class="check-icon text-success absolute top-[-5px] left-[-5px] opacity-0 peer-checked:opacity-100">
                    <i class="ti ti-circle-check-filled"></i>
                  </div>
                  <div class="mb-4">
                    <h5 class="font-bold mb-1 text-[16px]">SBI</h5>
                    <p class="mb-0 fs-14">**** **** 2495</p>
                  </div>
                  <div class="flex items-center justify-between">
                    <div>
                      <h6 class="font-semibold mb-1 text-[14px]">Holder Name</h6>
                      <p class="text-[13px]">Sharon Roy</p>
                    </div>
                    <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el">
                      <a href="javascript:void(0);"
                        class="dropdown-toggle bg-white w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        @click="toggleDropdown(1, $event)">
                        <i class="ti ti-dots-vertical"></i>
                      </a>
                      <div
                        class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                        :class="{ 'hidden': openDropdown !== 1 }">
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="edit_modal" data-modal-toggle="edit_modal"><i
                            class="ti ti-edit me-1"></i> Edit</a>
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="xxl:col-span-4 md:col-span-6">
                <input type="radio" id="option-3" value="" name="status-2" class="hidden peer">
                <div class="bank-info bg-light flex flex-col justify-between p-5 text-dark relative border-2 border-borderColor rounded-lg cursor-pointer
                    peer-checked:border-success peer-checked:bg-white"
                  onclick="document.getElementById('option-3').checked = true">
                  <div
                    class="check-icon text-success absolute top-[-5px] left-[-5px] opacity-0 peer-checked:opacity-100">
                    <i class="ti ti-circle-check-filled"></i>
                  </div>
                  <div class="mb-4">
                    <h5 class="font-bold mb-1 text-[16px]">KVB</h5>
                    <p class="mb-0 fs-14">**** **** 3948</p>
                  </div>
                  <div class="flex items-center justify-between">
                    <div>
                      <h6 class="font-semibold mb-1 text-[14px]">Holder Name</h6>
                      <p class="text-[13px]">Vaughan Lewis</p>
                    </div>
                    <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el">
                      <a href="javascript:void(0);"
                        class="dropdown-toggle bg-white w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        @click="toggleDropdown(2, $event)">
                        <i class="ti ti-dots-vertical"></i>
                      </a>
                      <div
                        class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                        :class="{ 'hidden': openDropdown !== 2 }">
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="edit_modal" data-modal-toggle="edit_modal"><i
                            class="ti ti-edit me-1"></i> Edit</a>
                        <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="javascript:void(0);" data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

  <!-- Add Account -->
  <div id="add_modal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add Bank Account</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_modal">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">Bank Name <span class="text-danger">*</span></label>
                <vue3-select v-model="selected" :options="BanNam" placeholder="Select" />
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Account Holder Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Account Number <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Branch Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">ABA Number <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_modal" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Add New
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Account -->

  <!-- Edit Account -->
  <div id="edit_modal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Edit Bank Account</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="edit_modal">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">Bank Name <span class="text-danger">*</span></label>
                <vue3-select
                v-model="selectedOne"
                :options="BanNamOne"
                placeholder="Select"
              />
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Account Holder Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="Darlee Robertson">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Account Number <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="**** **** 4872">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Branch Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="HDFC">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">ABA Number <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="1234567">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="edit_modal" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Account -->

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
          <p class="mb-3">Are you sure you want to remove account you selected.</p>
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
<script>
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';
import { initFlowbite } from 'flowbite';

export default {

  data() {
    return {
      selected: null,
      selectedOne: "HDFC",
      BanNam: [
        { label: "Select", value: "Select" },
        { label: "HDFC", value: "HDFC" },
        { label: "SBI", value: "SBI" },
        { label: "KVB", value: "KVB" },
      ],
      BanNamOne: [
        { label: "Select", value: "Select" },
        { label: "HDFC", value: "HDFC" },
        { label: "SBI", value: "SBI" },
        { label: "KVB", value: "KVB" },
      ],
    };
  },

  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
  setup() {
      const openDropdown = ref(null);
      const dropdownRefs = ref([]);
  
      const toggleDropdown = (index, event) => {
        event.stopPropagation();
        if (openDropdown.value === index) {
          openDropdown.value = null;
        } else {
          openDropdown.value = index;
        }
      };
  
      const closeAllDropdowns = () => {
        openDropdown.value = null;
      };
  
      const handleClickOutside = (event) => {
        if (dropdownRefs.value && dropdownRefs.value.some(ref => ref && ref.contains(event.target))) {
          return;
        }
        closeAllDropdowns();
      };
  
      onMounted(() => {
        initFlowbite();
        document.addEventListener('click', handleClickOutside);
      });
  
      onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside);
      });
  
      return {
        openDropdown,
        dropdownRefs,
        toggleDropdown,
        closeAllDropdowns
      };
    },
    mounted() {
        initFlowbite();
    },
};
</script>
