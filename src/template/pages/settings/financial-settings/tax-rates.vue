<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { initFlowbite } from 'flowbite';
const tagsOne = ref(["Tag 1", "Tag 2", "Tag 3"]);
// Dropdown functionality
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
  if (!dropdownRefs.value.some(ref => ref && ref.contains(event.target))) {
    closeAllDropdowns();
  }
};

onMounted(() => {
  initFlowbite();
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <layouts-header></layouts-header>
    <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">
    <div class="content p-5">
      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">Settings</h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
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
            title="Refresh"
          >
            <i class="ti ti-refresh"></i>
          </button>
          <!-- Collapse Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Collapse"
            id="collapse-header"
          >
            <i class="ti ti-transition-top"></i>
          </button>
        </div>
      </div>
      <!-- End Page Header -->

      <settings-tabs></settings-tabs>
      <!-- end card -->

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
        <financial-sidebar></financial-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div
              class="border-b border-borderColor flex items-center justify-between mb-3 pb-3"
            >
              <h5 class="mb-0 text-[17px]">Tax Rate</h5>
              <a
                href="javascript:void(0);"
                class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
                data-modal-target="add_modal"
                data-modal-toggle="add_modal"
              >
                <i class="ti ti-square-rounded-plus-filled me-1"></i>
                Add New Tax Rate
              </a>
            </div>
            <div class="table-responsive custom-table mb-7">
              <table class="table table-nowrap w-full">
                <thead class="table-light">
                  <tr>
                    <th class="p-3 text-dark text-left">Name</th>
                    <th class="p-3 text-dark text-left">Tax Rate</th>
                    <th class="p-3 text-dark text-left">Created On</th>
                    <th class="p-3 text-dark text-left">Status</th>
                    <th class="p-3 text-dark text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-3">VAT</td>
                    <td class="p-3">10%</td>
                    <td class="p-3">22 Feb 2025</td>
                    <td class="p-3">
                      <span
                        class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success"
                        >Active</span
                      >
                    </td>
                    <td class="p-3">
                      <div class="dropdown relative table-action" ref="el => dropdownRefs[0] = el">
                        <a
                          href="javascript:void(0);"
                          class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                          @click="toggleDropdown(0, $event)"
                          ><i class="ti ti-dots-vertical"></i
                        ></a>
                        <div
                          class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                          :class="{ 'hidden': openDropdown !== 0 }"
                        >
                          <a
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                            href="javascript:void(0);"
                            data-modal-target="edit_modal"
                            data-modal-toggle="edit_modal"
                            ><i class="ti ti-edit me-1"></i> Edit</a
                          >
                          <a
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                            href="javascript:void(0);"
                            data-modal-target="delete_modal"
                            data-modal-toggle="delete_modal"
                            ><i class="ti ti-trash me-1"></i> Delete</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">CGST</td>
                    <td class="p-3">08%</td>
                    <td class="p-3">17 Jan 2025</td>
                    <td class="p-3">
                      <span
                        class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success"
                        >Active</span
                      >
                    </td>
                    <td class="p-3">
                      <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el">
                        <a
                          href="javascript:void(0);"
                          class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                          @click="toggleDropdown(1, $event)"
                          ><i class="ti ti-dots-vertical"></i
                        ></a>
                        <div
                          class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                          :class="{ 'hidden': openDropdown !== 1 }"
                        >
                          <a
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                            href="javascript:void(0);"
                            data-modal-target="edit_modal"
                            data-modal-toggle="edit_modal"
                            ><i class="ti ti-edit me-1"></i> Edit</a
                          >
                          <a
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                            href="javascript:void(0);"
                            data-modal-target="delete_modal"
                            data-modal-toggle="delete_modal"
                            ><i class="ti ti-trash me-1"></i> Delete</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">SGST</td>
                    <td class="p-3">10%</td>
                    <td class="p-3">07 Jan 2025</td>
                    <td class="p-3">
                      <span
                        class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success"
                        >Active</span
                      >
                    </td>
                    <td class="p-3">
                      <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el">
                        <a
                          href="javascript:void(0);"
                          class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                          @click="toggleDropdown(2, $event)"
                          ><i class="ti ti-dots-vertical"></i
                        ></a>
                        <div
                          class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                          :class="{ 'hidden': openDropdown !== 2 }"
                        >
                          <a
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                            href="javascript:void(0);"
                            data-modal-target="edit_modal"
                            data-modal-toggle="edit_modal"
                            ><i class="ti ti-edit me-1"></i> Edit</a
                          >
                          <a
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                            href="javascript:void(0);"
                            data-modal-target="delete_modal"
                            data-modal-toggle="delete_modal"
                            ><i class="ti ti-trash me-1"></i> Delete</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="border-b border-borderColor flex items-center justify-between mb-3 pb-3"
            >
              <h5 class="mb-0 text-[17px]">Tax Group</h5>
              <a
                href="javascript:void(0);"
                class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
                data-modal-target="add_modal_2"
                data-modal-toggle="add_modal_2"
              >
                <i class="ti ti-square-rounded-plus-filled me-1"></i>
                Add New Group
              </a>
            </div>
            <div class="table-responsive custom-table">
              <table class="table table-nowrap w-full">
                <thead class="table-light">
                  <tr>
                    <th class="p-3 text-dark text-left">Name</th>
                    <th class="p-3 text-dark text-left">Tax Rate</th>
                    <th class="p-3 text-dark text-left">Created On</th>
                    <th class="p-3 text-dark text-left">Status</th>
                    <th class="p-3 text-dark text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-3">GST</td>
                    <td class="p-3">18%</td>
                    <td class="p-3">18 Jan 2025</td>
                    <td class="p-3">
                      <span
                        class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success"
                        >Active</span
                      >
                    </td>
                    <td class="p-3">
                      <div class="dropdown relative table-action" ref="el => dropdownRefs[3] = el">
                        <a
                          href="javascript:void(0);"
                          class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                          @click="toggleDropdown(3, $event)"
                          ><i class="ti ti-dots-vertical"></i
                        ></a>
                        <div
                          class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                          :class="{ 'hidden': openDropdown !== 3 }"
                        >
                          <a
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                            href="javascript:void(0);"
                            data-modal-target="edit_modal_2"
                            data-modal-toggle="edit_modal_2"
                            ><i class="ti ti-edit me-1"></i> Edit</a
                          >
                          <a
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                            href="javascript:void(0);"
                            data-modal-target="delete_modal"
                            data-modal-toggle="delete_modal"
                            ><i class="ti ti-trash me-1"></i> Delete</a
                          >
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

  <!-- Add Tax Rate -->
  <div
    id="add_modal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
  >
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add Tax Rate</h5>
          <button
            type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_modal"
          >
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label"
                  >Tax Name <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
              <div class="md:col-span-12">
                <label class="form-label"
                  >Tax Rate(%) <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button
              data-modal-hide="add_modal"
              type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
            >
              Add New
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Tax Rate -->

  <!-- Edit Tax Rate -->
  <div
    id="edit_modal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
  >
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Edit Tax Rate</h5>
          <button
            type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="edit_modal"
          >
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label"
                  >Tax Name <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" value="VAT" />
              </div>
              <div class="md:col-span-12">
                <label class="form-label"
                  >Tax Rate(%) <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" value="10%" />
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button
              data-modal-hide="edit_modal"
              type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Tax Rate -->

  <!-- Add Tax Rate -->
  <div
    id="add_modal_2"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
  >
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add Tax Group</h5>
          <button
            type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_modal_2"
          >
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label"
                  >Tax Name <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
              <div class="md:col-span-12">
                <label class="form-label"
                  >Sub Taxes <span class="text-danger">*</span></label
                >
                <vue3-tags-input class="input-tags form-control border-0 h-100" type="text" id="inputBox2"
                data-role="tagsinput" name="specialist" value="Tag1" :tags="tagsOne" />
                <p class="mb-0 text-[12px] mt-1">Enter value separated by comma</p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button
              data-modal-hide="add_modal_2"
              type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
            >
              Add New
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Tax Rate -->

  <!-- Edit Tax Rate -->
  <div
    id="edit_modal_2"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
  >
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Edit Tax Group</h5>
          <button
            type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="edit_modal_2"
          >
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label"
                  >Tax Name <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" value="VAT" />
              </div>
              <div class="md:col-span-12">
                <label class="form-label"
                  >Sub Taxes <span class="text-danger">*</span></label
                >
                <vue3-tags-input class="input-tags form-control border-0 h-100" type="text" id="inputBox2"
                data-role="tagsinput" name="specialist" value="Tag1" :tags="tagsOne" />
                <p class="mb-0 text-[12px] mt-1">Enter value separated by comma</p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button
              data-modal-hide="edit_modal_2"
              type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Tax Rate -->

  <!-- delete modal -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out modal p-4"
    id="delete_modal"
  >
    <div class="relative bg-white rounded-defaultradius p-5">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center">
          <div class="mb-3 relative z-[1]">
            <span
              class="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center"
              ><i class="ti ti-trash text-[24px]"></i
            ></span>
          </div>
          <h5 class="mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure you want to remove tax rate you selected.</p>
          <div class="flex justify-center items-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal"
              >Cancel</a
            >
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->

  <!-- delete modal -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out modal p-4"
    id="delete_modal"
  >
    <div class="relative bg-white rounded-defaultradius p-5">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center">
          <div class="mb-3 relative z-[1]">
            <span
              class="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center"
              ><i class="ti ti-trash text-[24px]"></i
            ></span>
          </div>
          <h5 class="mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure you want to remove tax group you selected.</p>
          <div class="flex justify-center items-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal"
              >Cancel</a
            >
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->
</template>

