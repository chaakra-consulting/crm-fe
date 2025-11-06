<template>
  <!-- Add proposals -->
  <div class="offcanvas offcanvas-end offcanvas-large" tabindex="-1" id="offcanvas_add">
    <div class="offcanvas-header border-bottom">
      <h5 class="mb-0">Add New Estimation</h5>
      <button
        type="button"
        class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <form>
        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="mb-3">
                <div class="d-flex align-items-center justify-content-between">
                  <label class="form-label">Client</label>
                  <a
                    href="#"
                    class="label-add link-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add_client"
                    ><i class="ti ti-plus"></i>Add New</a
                  >
                </div>
                <vue3-select
                  :options="Bluesky"
                  v-model="selectedClient"
                  placeholder="Select Client"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Bill To<span class="text-danger"> *</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Ship To<span class="text-danger"> *</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <div class="d-flex align-items-center justify-content-between">
                  <label class="form-label"
                    >Project<span class="text-danger">*</span></label
                  >
                  <a
                    href="#"
                    class="label-add link-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add_project"
                    ><i class="ti ti-plus me-1"></i>Add New</a
                  >
                </div>
                <vue3-select
                  :options="Servbook"
                  v-model="selectedProject"
                  placeholder="Select Project"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Estimate By <span class="text-danger">*</span></label
                >
                <vue3-select
                  :options="VaughanOne"
                  v-model="selectedEstimateBy"
                  placeholder="Select Estimate By"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Amount<span class="text-danger"> *</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Currency <span class="text-danger">*</span></label
                >
                <vue3-select
                  :options="Currency"
                  v-model="selectedCurrency"
                  placeholder="Select Currency"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Estimate Date<span class="text-danger"> *</span></label
                >
                <div class="input-group w-auto input-group-flat">
                  <a-date-picker
                    v-model:value="value"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                  <span class="input-group-text">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Expiry Date <span class="text-danger">*</span></label
                >
                <div class="input-group w-auto input-group-flat">
                  <a-date-picker
                    v-model:value="valueOne"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                  <span class="input-group-text">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Status <span class="text-danger">*</span></label
                >
                <vue3-select
                  :options="Status"
                  v-model="selectedStatus"
                  placeholder="Select Status"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Tags </label>

                <vue3-tags-input
                  class="input-tags form-control"
                  placeholder=""
                  type="text"
                  data-role="tagsinput"
                  name="Label"
                  value="Tag1"
                  :tags="tags2"
                />
                <span class="fs-13 mb-0">Enter value separated by comma</span>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Attachment <span class="text-danger">*</span></label
                >
                <div
                  class="file-upload drag-file w-100 d-flex bg-light border shadow align-items-center justify-content-center flex-column"
                >
                  <span class="upload-img d-block mb-1"
                    ><i class="ti ti-folder-open text-primary fs-16"></i
                  ></span>
                  <p class="mb-0 fs-14 text-dark">
                    Drop your files here or
                    <a
                      href="javascript:void(0);"
                      class="text-decoration-underline text-primary"
                      >browse</a
                    >
                  </p>
                  <input type="file" accept="video/image" />
                  <p class="fs-13 mb-0">Maximum size : 50 MB</p>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Description <span class="text-danger">*</span></label
                >
                <div class="editor pages-editor">
                  <div class="editor three-line">
                    <div class="editor-container">
                      <div ref="editorRef" class="quill-editor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-end">
          <button type="button" data-bs-dismiss="offcanvas" class="btn btn-light me-2">
            Cancel
          </button>
          <button type="button" class="btn btn-primary">Create New</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Add proposals -->

  <!-- edit proposals -->
  <div class="offcanvas offcanvas-end offcanvas-large" tabindex="-1" id="offcanvas_edit">
    <div class="offcanvas-header border-bottom">
      <h5 class="mb-0">Edit Estimation</h5>
      <button
        type="button"
        class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <form>
        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="mb-3">
                <div class="d-flex align-items-center justify-content-between">
                  <label class="form-label">Client</label>
                  <a
                    href="#"
                    class="label-add link-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add_client"
                    ><i class="ti ti-plus"></i>Add New</a
                  >
                </div>
                <vue3-select
                  :options="Bluesky"
                  v-model="selectedClient"
                  placeholder="Select Client"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Bill To<span class="text-danger"> *</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Ship To<span class="text-danger"> *</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <div class="d-flex align-items-center justify-content-between">
                  <label class="form-label"
                    >Project<span class="text-danger">*</span></label
                  >
                  <a
                    href="#"
                    class="label-add link-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add_project"
                    ><i class="ti ti-plus me-1"></i>Add New</a
                  >
                </div>
                <vue3-select
                  :options="Servbook"
                  v-model="selectedProject"
                  placeholder="Select Project"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Estimate By <span class="text-danger">*</span></label
                >
                <vue3-select
                  :options="VaughanOne"
                  v-model="selectedEstimateBy"
                  placeholder="Select Estimate By"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Amount<span class="text-danger"> *</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Currency <span class="text-danger">*</span></label
                >
                <vue3-select
                  :options="Currency"
                  v-model="selectedCurrency"
                  placeholder="Select Currency"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Estimate Date<span class="text-danger"> *</span></label
                >
                <div class="input-group w-auto input-group-flat">
                  <a-date-picker
                    v-model:value="valueTwo"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                  <span class="input-group-text">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Expiry Date <span class="text-danger">*</span></label
                >
                <div class="input-group w-auto input-group-flat">
                  <a-date-picker
                    v-model:value="valueThree"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                  <span class="input-group-text">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label"
                  >Status <span class="text-danger">*</span></label
                >
                <vue3-select
                  :options="StatusOne"
                  v-model="selectedStatus"
                  placeholder="Select Status"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Tags </label>
                <vue3-tags-input
                  class="input-tags form-control"
                  placeholder=""
                  type="text"
                  data-role="tagsinput"
                  name="Label"
                  value="Tag1"
                  :tags="tags2"
                />
                <span class="fs-13 mb-0">Enter value separated by comma</span>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Attachment <span class="text-danger">*</span></label
                >
                <div
                  class="file-upload drag-file w-100 d-flex bg-light border shadow align-items-center justify-content-center flex-column"
                >
                  <span class="upload-img d-block mb-1"
                    ><i class="ti ti-folder-open text-primary fs-16"></i
                  ></span>
                  <p class="mb-0 fs-14 text-dark">
                    Drop your files here or
                    <a
                      href="javascript:void(0);"
                      class="text-decoration-underline text-primary"
                      >browse</a
                    >
                  </p>
                  <input type="file" accept="video/image" />
                  <p class="fs-13 mb-0">Maximum size : 50 MB</p>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label"
                  >Description <span class="text-danger">*</span></label
                >
                <div class="editor pages-editor">
                  <div class="editor three-line">
                    <div class="editor-container">
                      <div ref="editorRefOne" class="quill-editor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-end">
          <button type="button" data-bs-dismiss="offcanvas" class="btn btn-light me-2">
            Cancel
          </button>
          <button type="button" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /edit proposals -->

  <!-- Add New View -->
  <div class="modal custom-modal fade" id="add_client" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Add Client</h5>
          <button
            class="btn-close me-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form action="#">
          <div class="modal-body">
            <div class="mb-0">
              <label class="form-label">Client Name</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-btn text-end border-top p-3">
            <a href="#" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-danger">Create New</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add New View -->

  <!-- Add New View -->
  <div class="modal custom-modal fade" id="add_project" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mb-0">Add New Project</h5>
          <button
            class="btn-close me-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form action="#">
          <div class="modal-body">
            <div class="mb-0">
              <label class="form-label">Project Name</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-btn text-end border-top p-3">
            <a href="#" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-danger">Create New</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add New View -->

  <!-- delete modal -->
  <div class="modal fade" id="delete_estimations">
    <div class="modal-dialog modal-dialog-centered modal-sm rounded-0">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center position-relative">
          <div class="mb-3 position-relative z-1">
            <span
              class="avatar avatar-xl badge-soft-danger border-0 text-danger rounded-circle"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h5 class="mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure you want to remove estimations you selected.</p>
          <div class="d-flex justify-content-center">
            <a
              href="#"
              class="btn btn-light position-relative z-1 me-2 w-100"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="#"
              class="btn btn-primary position-relative z-1 w-100"
              data-bs-dismiss="modal"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->
</template>

<script>
import { ref } from "vue";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Vue3TagsInput from "vue3-tags-input";
const value = ref();
const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      tags2: ["Collab"],
      value,
      valueOne,
      valueTwo,
      valueThree,
      Bluesky: ["Choose", "NovaWave LLC", "BlueSky Industries", "ASilver Hawkdams"],
      Servbook: ["Choose", "Truelysell", "Dreamschat", "Servbook"],
      VaughanOne: ["Choose", "Darlee Robertson", "Sharon Roy", "Vaughan"],
      EditVaughan: ["Choose", "Darlee Robertson", "Sharon Roy", "Vaughan"],
      Currency: ["Choose", "Dollar", "Euro", "Pound", "Rupee"],
      Status: ["Select", "Active", "Inactive"],
      StatusOne: ["Select", "Active", "Inactive"],
      selectedClient: null,
      selectedProject: null,
      selectedEstimateBy: null,
      selectedCurrency: null,
      selectedStatus: null,
      Bluesky: [
        { label: "Choose", value: "Choose" },
        { label: "NovaWave LLC", value: "NovaWave LLC" },
        { label: "BlueSky Industries", value: "BlueSky Industries" },
        { label: "ASilver Hawkdams", value: "ASilver Hawkdams" },
      ],
      Servbook: [
        { label: "Choose", value: "Choose" },
        { label: "Truelysell", value: "Truelysell" },
        { label: "Dreamsports", value: "Dreamsports" },
        { label: "Best@laundry", value: "Best@laundry" },
        { label: "Doccure", value: "Doccure" },
        { label: "Kofejob", value: "Kofejob" },
      ],
      VaughanOne: [
        { label: "Choose", value: "Choose" },
        { label: "Darlee Robertson", value: "Darlee Robertson" },
        { label: "Sharon Roy", value: "Sharon Roy" },
        { label: "Vaughan", value: "Vaughan" },
      ],
      Currency: [
        { label: "Choose", value: "Choose" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      Status: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      value: null,
      valueOne: null,
      valueTwo: null,
      valueThree: null,
    };
  },
  mounted() {
    this.initQuill();
    this.initQuillOne();
  },
  methods: {
    initQuill() {
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
    },
    initQuillOne() {
      const quill = new Quill(this.$refs.editorRefOne, {
        theme: "snow",
      });
    },
  },
};
</script>
