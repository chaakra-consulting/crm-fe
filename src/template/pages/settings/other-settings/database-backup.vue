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
            <div class="border-b border-borderColor flex items-center justify-between mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">Database Backup</h5>
              <a href="javascript:void(0);"
                class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
                data-modal-target="add_modal" data-modal-toggle="add_modal">
                <i class="ti ti-folder-open me-1"></i>
                Generate Backup
              </a>
            </div>
            <div class="table-responsive custom-table">
              <table class="table table-nowrap w-full">
                <thead class="table-light">
                  <tr>
                    <th class="p-3 text-dark text-left">Name</th>
                    <th class="p-3 text-dark text-left">Created On</th>
                    <th class="p-3 text-dark text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-3">contacts_db_backup_20250312.sql</td>
                    <td class="p-3">22 Feb 2025</td>
                    <td class="p-3">
                      <div class="dropdown relative table-action" ref="el => dropdownRefs[0] = el">
                        <a href="javascript:void(0);"
                          class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                          @click="toggleDropdown(0, $event)"><i
                            class="ti ti-dots-vertical"></i></a>
                        <div
                          class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu" 
                          :class="{ 'hidden': openDropdown !== 0 }">
                          <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                            href="javascript:void(0);" data-modal-target="delete_modal"
                            data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">customers_db_backup_20250312.sql</td>
                    <td class="p-3">10 Feb 2025</td>
                    <td class="p-3">
                      <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el">
                        <a href="javascript:void(0);"
                          class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                          @click="toggleDropdown(1, $event)"><i
                            class="ti ti-dots-vertical"></i></a>
                        <div
                          class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu" 
                          :class="{ 'hidden': openDropdown !== 1 }">
                          <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                            href="javascript:void(0);" data-modal-target="delete_modal"
                            data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">companies_db_backup_20250312.sql</td>
                    <td class="p-3">17 Jan 2025</td>
                    <td class="p-3">
                      <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el">
                        <a href="javascript:void(0);"
                          class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                          @click="toggleDropdown(2, $event)"><i
                            class="ti ti-dots-vertical"></i></a>
                        <div
                          class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu" 
                          :class="{ 'hidden': openDropdown !== 2 }">
                          <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                            href="javascript:void(0);" data-modal-target="delete_modal"
                            data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">payments_db_backup_20250312.sql</td>
                    <td class="p-3">07 Jan 2025</td>
                    <td class="p-3">
                      <div class="dropdown relative table-action" ref="el => dropdownRefs[3] = el">
                        <a href="javascript:void(0);"
                          class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                          @click="toggleDropdown(3, $event)"><i
                            class="ti ti-dots-vertical"></i></a>
                        <div
                          class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu" 
                          :class="{ 'hidden': openDropdown !== 3 }">
                          <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                            href="javascript:void(0);" data-modal-target="delete_modal"
                            data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
          <p class="mb-3">Are you sure you want to remove backup file you selected.</p>
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

  <!-- Generate Backup -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="add_modal">
    <div class="relative bg-white rounded-defaultradius p-5">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center">
          <div class="mb-3 relative z-[1]">
            <span
              class="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center"><i
                class="ti ti-folder-open text-[24px]"></i></span>
          </div>
          <h5 class="mb-1">Generate Backup</h5>
          <p class="mb-3">Are you sure you want to generate Database backup?</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full">Generate</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Generate Backup -->
</template>
<script>
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';
export default {
  data() {
    return {};
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
};
</script>
