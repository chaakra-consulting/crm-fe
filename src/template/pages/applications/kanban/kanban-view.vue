<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">
    <div class="content p-5">
      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Kanban View
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li>
                <a href="javascript:void(0);" class="hover:underline text-gray-700">Applications</a>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Kanban View</li>
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

      <!-- start kanban -->
      <div class="card">
        <div
          class="flex items-center justify-between flex-wrap gap-3 p-4 border-b border-borderColor bg-white rounded-t">
          <div class="sm:col-span-4">
            <div class="flex items-center">
              <h6 class="text-[16px]">Kanban View</h6>
            </div>
          </div>
          <div class="flex items-center flex-wrap gap-3 lg:justify-end justify-start">
            <div class="flex -space-x-3 rtl:space-x-reverse me-3">
              <img
                class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                src="@/assets/img/profiles/avatar-19.jpg" alt="avatar-19">
              <img
                class="size-6 border border-white rounded-full  hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                src="@/assets/img/profiles/avatar-12.jpg" alt="avatar-12">
              <img
                class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                src="@/assets/img/profiles/avatar-16.jpg" alt="avatar-16">
              <img
                class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                src="@/assets/img/profiles/avatar-01.jpg" alt="avatar-01">
              <img
                class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                src="@/assets/img/profiles/avatar-02.jpg" alt="avatar-02">
              <img
                class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                src="@/assets/img/profiles/avatar-03.jpg" alt="avatar-03">
              <a class="flex items-center justify-center size-6 text-xs font-medium text-white bg-primary border border-white rounded-full hover:bg-primary shrink-0 hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                href="#">+1</a>
            </div>
            <p class="mb-0 me-3 pe-3 border-r text-14">Total Task : <span class="text-dark"> 55 </span></p>
            <p class="mb-0 me-3 pe-3 border-r text-14">Pending : <span class="text-dark"> 15 </span></p>
            <p class="mb-0 text-14">Completed : <span class="text-dark"> 40 </span></p>
            <div class="relative ml-3">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                <i class="ti ti-search"></i>
              </span>
              <input type="text" placeholder="Search"
                class="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
            </div>
          </div>
        </div>
        <div class="bg-white p-4">
          <!-- start select item -->
          <div class="flex items-center justify-between flex-wrap gap-2 mb-4">
            <div>
              <a href="javascript:void(0);"
                class="border border-borderColor rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                data-dropdown-toggle="export-dropdown">
                Select Priority <i class="ti ti-chevron-down ms-1"></i>
              </a>
              <ul id="export-dropdown"
                class="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[150px] shadow-lg">
                <li>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">All</a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">High</a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Medium</a>
                </li>
                <li>
                  <a href="javascript:void(0);"
                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Completed</a>
                </li>
              </ul>
            </div>
            <div class="flex flex-wrap gap-2 items-center">
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor rounded p-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="clients-dropdown">
                  Clients <i class="ti ti-chevron-down ms-1"></i>
                </a>
                <ul id="clients-dropdown" class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Clients</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Sophie</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Cameron</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Doris</a>
                  </li>
                </ul>
              </div>
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor rounded p-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="status-dropdown">
                  Select Status <i class="ti ti-chevron-down ms-1"></i>
                </a>
                <ul id="status-dropdown" class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Inprogress</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">On-hold</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Completed</a>
                  </li>
                </ul>
              </div>
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor rounded p-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="sort-dropdown">
                  <span class=" me-1 focus:text-white"> Sort By : </span> Recent<i
                    class="ti ti-chevron-down align-middle ms-1"></i>
                </a>
                <ul id="sort-dropdown" class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Recently
                      Added</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Ascending</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Desending</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Last
                      Month</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Last
                      7 Days</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- end select item -->

          <!-- start drag item -->
          <all-kanban></all-kanban>
          <!-- end drag item -->
        </div>
      </div>
      <!-- end kanban -->
    </div>
    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->
  </div>
  <!-- /Page Wrapper -->

  <!-- start add notes  modal -->
  <div id="add_new_project"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Add Project</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="add_new_project">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Task Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <div class="flex items-center justify-between">
                    <label class="form-label">Select Employee <span class="text-danger">*</span></label>
                  </div>
                  <vue3-select v-model="selected" :options="Employee" placeholder="Select" />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Status <span class="text-danger">*</span></label>
                  <vue3-select v-model="selectedOne" :options="Status" placeholder="Select" />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Priority <span class="text-danger">*</span></label>
                  <vue3-select v-model="selectedTwo" :options="Priority" placeholder="Select" />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Start Date<span class="text-danger ms-1">*</span></label>
                  <div class="input-group w-auto input-group-flat">
                    <a-date-picker v-model:value="valueOne"
                      class="form-control"
                      placeholder="Due Date" format="DD MMM YYYY" />
                    <span class="input-group-text">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Due Date<span class="text-danger ms-1">*</span></label>
                  <div class="input-group w-auto input-group-flat">
                    <a-date-picker v-model:value="valueTwo"
                      class="form-control"
                      placeholder="Due Date" format="DD MMM YYYY" />
                    <span class="input-group-text">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="md:col-span-12">
                <div>
                  <label class="form-label">Descriptions</label>
                  <div class="editor pages-editor">
                    <div class="editor pages-editor ql-container ql-snow">
                        <div ref="editorRef" class="quill-editor"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="add_new_project" class="btn btn-light">Cancel</button>
          <button type="button" class="btn btn-primary">Add Project</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end add new modal -->

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
          <p class="mb-3">Are you sure you want to remove contract you selected.</p>
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
import { initFlowbite } from 'flowbite';
import { ref } from "vue";
import Quill from "quill";
import "quill/dist/quill.snow.css";
const valueOne = ref();
const valueTwo = ref();
export default {
  data() {
    return {
      valueOne,
      valueTwo,
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      Employee: [
        { label: "Select", value: "Select" },
        { label: "Internal", value: "Internal" },
        { label: "Projects", value: "Projects" },
        { label: "Meetings", value: "Meetings" },
        { label: "Reminder", value: "Reminder" },
      ],
      Status: [
        { label: "Select", value: "Select" },
        { label: "Medium", value: "Medium" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
      ],
      Priority: [
        { label: "Select", value: "Select" },
        { label: "High", value: "High" },
        { label: "Medium", value: "Medium" },
        { label: "Low", value: "Low" },
      ],
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    initQuill() {
      // Check if refs are available before initializing Quill
      if (!this.$refs.editorRefEdit) {
        console.warn();
        return;
      }

      try {

        const quillEdit = new Quill(this.$refs.editorRefEdit, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          },
        });

        quillEdit.on("text-change", () => {
          this.content = quillEdit.root.innerHTML;
        });

      } catch (error) {
        console.error();
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initQuill();
    });
    initFlowbite();
  },
};
</script>
