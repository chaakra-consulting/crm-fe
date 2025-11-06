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
        <app-sidebar></app-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">Invoice Settings</h5>
            </div>
            <form>
              <div class="border-b border-borderColor pb-2 mb-4">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-6">
                  <div class="md:col-span-6">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Invoice Logo</h6>
                      <p class="text-[13px] mb-0">Upload logo of your company to display in invoice</p>
                    </div>
                  </div>
                  <div class="md:col-span-6">
                    <div class="mb-3">
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
                          <span>Upload Logo of your company to display in website. Recommended size is 250 px*100
                            px</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-6">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Invoice Prefix</h6>
                      <p class="text-[13px] mb-0">Add prefix to your invoice</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <input type="text" class="form-control" value="INV-">
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-6">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Invoice Due</h6>
                      <p class="text-[13px] mb-0">Select due date to display in invoice</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <div class="flex items-center inv-days">
                        <div class="me-2">
                          <vue3-select v-model="selected" :options="NumSel" placeholder="5" />
                        </div>
                        <p class="text-[13px] mb-0">Days</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-6 items-center">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Invoice Round Off</h6>
                      <p class="text-[13px] mb-0">Value roundoff in invoice</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <div class="flex items-center gap-3">
                        <label class="flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                        <div class="w-100">
                          <vue3-select v-model="selectedOne" :options="DueSeleUp" placeholder="Roundoff Up" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-6 items-center">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Show Company Details</h6>
                      <p class="text-[13px] mb-0">Show/hide company details in invoice</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <label class="flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-6">
                  <div class="md:col-span-6">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Invoice Footer Terms</h6>
                      <p class="text-[13px] mb-0">Enter terms that will appear on All Proposals by default.</p>
                    </div>
                  </div>
                  <div class="md:col-span-6">
                    <div class="mb-3">
                    <div class="editor pages-editor ql-container ql-snow">
                      <div ref="editorRef" class="quill-editor"></div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-end flex-wrap gap-2">
                <a href="javascript:void(0);" class="btn btn-sm btn-light">Cancel</a>
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
import Quill from "quill";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      content: "",
      selected: "5",
      selectedOne: "Roundoff Up",
      NumSel: [
        { label: "5", value: "5" },
        { label: "7", value: "7" },
      ],
      DueSeleUp: [
        { label: "Roundoff Up", value: "Roundoff Up" },
        { label: "Roundoff Down", value: "Roundoff Down" },
      ],
    };
  },

  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    initQuill() {
      if (this.$refs.editorRef) {
        const quill = new Quill(this.$refs.editorRef, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          },
        });

        quill.on("text-change", () => {
          this.content = quill.root.innerHTML;
        });
      }
    },
  },
  mounted() {
    this.initQuill();
  },
};
</script>
