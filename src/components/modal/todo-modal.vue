<template>
  <!-- Add Todo -->
  <div class="modal fade" id="add_todo">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Add New Todo</h6>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Todo Title</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Tag</label>
                  <vue3-select
                    v-model="selected"
                    :options="TodoTag"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Priority</label>
                  <vue3-select
                    v-model="selectedOne"
                    :options="Priority"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Descriptions</label>
                  <div class="snow-editor">
                    <div class="quill-editor">
                      <div class="editor pages-editor ql-container ql-snow">
                          <div ref="editorRefone" class="quill-editor"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Add Assignee</label>
                  <vue3-select
                    v-model="selectedTwo"
                    :options="Assignee"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-0">
                  <label class="form-label">Status</label>
                  <vue3-select
                    v-model="selectedThree"
                    :options="Status"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add New Todo</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Todo end -->

  <!-- Edit Todo -->
  <div class="modal fade" id="edit_todo">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Edit Todo</h6>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Todo Title</label>
                  <input
                    type="text"
                    class="form-control"
                    value="Update calendar and schedule"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Tag</label>
                  <vue3-select
                    v-model="selectedFour"
                    :options="TodoTag"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Priority</label>
                  <vue3-select
                    v-model="selectedFive"
                    :options="Priority"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Descriptions</label>
                  <div class="snow-editor">
                    <div class="quill-editor">
                      <div class="editor pages-editor ql-container ql-snow">
                          <div ref="editorRef" class="quill-editor"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Add Assignee</label>
                  <vue3-select
                    v-model="selectedSix"
                    :options="Assignee"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-0">
                  <label class="form-label">Status</label>
                  <vue3-select
                    v-model="selectedSeven"
                    :options="Status"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Edit Todo end -->

  <!-- Todo Details -->
  <div class="modal fade" id="view_todo">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title me-1">Plan tasks for the next day</h4>
          <span
            class="badge bg-danger d-inline-flex align-items-center p-1 me-1"
            ><i class="ti ti-square me-1"></i>Urgent</span
          >
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <h5 class="mb-2">Task Details</h5>
          <div class="border rounded mb-3 p-2">
            <div class="row row-gap-3">
              <div class="col-md-4">
                <div class="text-center">
                  <span class="d-block mb-1">Created On</span>
                  <p class="text-dark mb-0">22 July 2025</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="text-center">
                  <span class="d-block mb-1">Due Date</span>
                  <p class="text-dark mb-0">22 July 2025</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="text-center">
                  <span class="d-block mb-1">Status</span>
                  <span
                    class="badge badge-soft-success d-inline-flex align-items-center"
                  >
                    <i class="fas fa-circle fs-6 me-1"></i>Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <h5 class="mb-2">Description</h5>
            <p>
              Hiking is a long, vigorous walk, usually on trails or footpaths in
              the countryside. Walking for pleasure developed in Europe during
              the eighteenth century. Religious pilgrimages have existed much
              longer but they involve walking long distances for a spiritual
              purpose associated with specific religions and also we achieve
              inner peace while we hike at a local park.
            </p>
          </div>
          <div class="mb-3">
            <h5 class="mb-2">Tags</h5>
            <div class="d-flex align-items-center">
              <span class="badge bg-danger me-2">Internal</span>
              <span class="badge bg-success me-2">Projects</span>
              <span class="badge bg-secondary">Reminder</span>
            </div>
          </div>
          <div>
            <h5 class="mb-2">Assignee</h5>
            <div class="avatar-list-stacked avatar-group-sm">
              <span class="avatar avatar-rounded">
                <img
                  class="border border-white"
                  src="@/assets/img/profiles/avatar-01.jpg"
                  alt="img"
                />
              </span>
              <span class="avatar avatar-rounded">
                <img
                  class="border border-white"
                  src="@/assets/img/profiles/avatar-02.jpg"
                  alt="img"
                />
              </span>
              <span class="avatar avatar-rounded">
                <img
                  class="border border-white"
                  src="@/assets/img/profiles/avatar-03.jpg"
                  alt="img"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Todo Details end -->

  <!-- Start Modal  -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <div class="mb-3">
            <span class="avatar bg-danger"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h6 class="fs-16 mb-1">Delete Confirmation</h6>
          <p class="mb-3">Are you sure want to delete?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal  -->
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
  data() {
    return {
      content: "",
      content: "",
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: "Internal",
      selectedFive: "Medium",
      selectedSix: "Sophie",
      selectedSeven: "Completed",
      TodoTag: [
        { label: "Select", value: "Select" },
        { label: "Internal", value: "Internal" },
        { label: "Projects", value: "Projects" },
        { label: "Meetings", value: "Meetings" },
        { label: "Reminder", value: "Reminder" },
      ],
      Priority: [
        { label: "Select", value: "Select" },
        { label: "Medium", value: "Medium" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
      ],
      Assignee: [
        { label: "Select", value: "Select" },
        { label: "Sophie", value: "Sophie" },
        { label: "Cameron", value: "Cameron" },
        { label: "Doris", value: "Doris" },
        { label: "Rufana", value: "Rufana" },
      ],
      Status: [
        { label: "Select", value: "Select" },
        { label: "Completed", value: "Completed" },
        { label: "Pending", value: "Pending" },
        { label: "Onhold", value: "Onhold" },
        { label: "Inprogress", value: "Inprogress" },
      ],
    };
  },
  mounted() {
    this.initQuill();
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
      if (this.$refs.editorRefone) {
        const quillone = new Quill(this.$refs.editorRefone, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          },
        });

        quillone.on("text-change", () => {
          this.content = quillone.root.innerHTML;
        });
      }
    },
  },
};
</script>
