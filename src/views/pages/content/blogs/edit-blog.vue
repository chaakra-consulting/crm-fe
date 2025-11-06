<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">
      <h4 class="mb-4">Edit Blog</h4>
      <div class="flex justify-center">
        <div class="w-full lg:w-10/12 mx-auto">
          <div class="mb-3">
            <router-link to="/blog/blogs" class="d-inline-flex align-items-center fw-medium hover:text-primary"><i
                class="ti ti-arrow-left me-1"></i>All Blogs</router-link>
          </div>
          <div class="bg-white">

            <form>
              <div class="p-4 pb-2">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Title <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" value="Improve Efficiency for Sales">
                    </div>
                  </div>
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Category <span class="text-danger">*</span></label>
                      <vue3-select v-model="selectedOne" :options="CateSeleOne" placeholder="Sales Optimization" />
                    </div>
                  </div>
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Tags <span class="text-danger">*</span></label>
                      <vue3-tags-input
                        class="input-tags bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        type="text" id="inputBox2" data-role="tagsinput" name="specialist" value="Tag1"
                        :tags="tagsTwo" />
                      <span class="fs-13 mt-2">Enter value separated by comma</span>
                    </div>
                  </div>
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Content</label>
                      <div class="editor pages-editor ql-container ql-snow">
                        <div ref="editorRef" class="quill-editor"></div>
                      </div>
                    </div>
                  </div>
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Featured Image</label>
                      <div
                        class="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
                        <span class="block mb-1"><i class="ti ti-folder-open text-primary fs-16"></i></span>
                        <p class="mb-0 tet-[14px] text-dark">Drop your files here or <a href="javascript:void(0);"
                            class="underline text-primary">browse</a></p>
                        <input type="file" accept="video/image"
                          class="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer">
                        <p class="text-[13px] mb-0">Maximum size : 50 MB</p>
                      </div>
                    </div>
                  </div>
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Status</label>
                      <div class="flex items-center gap-4">
                        <div class="form-check">
                          <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault"
                            id="flexRadioDefault1" checked>
                          <label class="form-check-label" for="flexRadioDefault1">
                            Active
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault"
                            id="flexRadioDefault2">
                          <label class="form-check-label" for="flexRadioDefault2">
                            Inactive
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-end p-4 border-t border-borderColor">
                <button type="button" class="btn btn-light me-2">Cancel</button>
                <button type="submit" class="btn btn-primary">Save Changes</button>
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
import { initFlowbite } from "flowbite";
import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      tagsTwo: ["Productivity"],
      content: "",
      selectedOne: null,
      CateSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Sales Optimization", value: "Sales Optimization" },
        { label: "Automation", value: "Automation" },
        { label: "Marketing", value: "Marketing" },
        { label: "Implementation", value: "Implementation" },
        { label: "Product Features", value: "Product Features" },
        { label: "Data & Analytics", value: "Data & Analytics" },
        { label: "Customization", value: "Customization" },
        { label: "Training & Adoption", value: "Training & Adoption" },
      ],
    };
  },
  mounted() {
    initFlowbite();
    this.$nextTick(() => {
      this.initQuill();
    });
  },

  methods: {
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
};
</script>
