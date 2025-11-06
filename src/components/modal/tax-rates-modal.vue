<template>
  <!-- Add Tax Rate -->
  <div class="modal fade" id="add_tax" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Tax Rate</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Tax Name<span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Tax Rate(%)<span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a
                href="javascript:void(0);"
                class="btn btn-sm btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Create New
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Tax Rate -->

  <!-- Edit Tax Rate -->
  <div class="modal fade" id="edit_tax" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Tax Rate</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Tax Name<span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="VAT" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Tax Rate(%)<span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" value="10%" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a
                href="javascript:void(0);"
                class="btn btn-sm btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Tax Rate -->

  <!-- delete modal -->
  <div class="modal fade" id="delete_tax">
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
          <p class="mb-3">Are you sure you want to remove tax rate you selected.</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-2 w-100"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
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

  <!-- Add Tax Group -->
  <div class="modal fade" id="add_tax_group" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Tax Group</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Tax Name<span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Sub Taxes<span class="text-danger">*</span></label
              >
              <vue3-tags-input
                class="input-tags form-control border-0 h-100"
                placeholder=""
                type="text"
                data-role="tagsinput"
                name="Label"
                value="Tag1"
                :tags="tags2"
              />
              <p class="mb-0 fs-12 mt-1">Enter value separated by comma</p>
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a
                href="javascript:void(0);"
                class="btn btn-sm btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Create New
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Tax Group -->

  <!-- Edit Tax Group -->
  <div class="modal fade" id="edit_tax_group" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Tax Group</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Tax Name<span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="GST" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Sub Taxes<span class="text-danger">*</span></label
              >
              <vue3-tags-input
                class="input-tags form-control border-0 h-100"
                placeholder=""
                type="text"
                data-role="tagsinput"
                name="Label"
                value="Tag1"
                :tags="tags3"
              />
              <p class="mb-0 fs-12 mt-1">Enter value separated by comma</p>
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a
                href="javascript:void(0);"
                class="btn btn-sm btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Tax Group -->

  <!-- delete modal -->
  <div class="modal fade" id="delete_tax_group">
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
          <p class="mb-3">Are you sure you want to remove rate group you selected..</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-sm btn-light position-relative z-1 me-2 w-100"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
              class="btn btn-sm btn-primary position-relative z-1 w-100"
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
import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      tags2: ["Collab"],
    };
  },
  methods: {},
};
</script>
