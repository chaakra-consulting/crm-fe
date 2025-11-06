<template>
  <!-- Add Tax Rate -->
  <div class="modal fade" id="add_currency" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Currency</h5>
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
              <label class="form-label"
                >Currency Name<span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Exchange Rate<span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div
              class="d-flex flex-lg-row flex-column align-items-center justify-content-between gap-3 mb-3"
            >
              <div class="w-100">
                <label class="form-label">Code<span class="text-danger">*</span></label>
                <input type="text" class="form-control" />
              </div>
              <div class="w-100">
                <label class="form-label">Symbol<span class="text-danger">*</span></label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <label class="form-label mb-0">Make as Default</label>
              <div class="form-check form-switch p-0">
                <label class="form-check-label d-flex align-items-center gap-2 w-100">
                  <input
                    class="form-check-input switchCheckDefault ms-auto"
                    type="checkbox"
                    role="switch"
                  />
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a href="javascript:void(0);" class="btn btn-sm btn-light me-2" data-bs-dismiss="modal"
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
  <div class="modal fade" id="edit_currency" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Currency</h5>
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
              <label class="form-label"
                >Currency Name<span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" value="Rupee" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Exchange Rate<span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" value="86.62" />
            </div>
            <div
              class="d-flex flex-lg-row flex-column align-items-center justify-content-between gap-3 mb-3"
            >
              <div class="w-100">
                <label class="form-label">Code<span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="INR" />
              </div>
              <div class="w-100">
                <label class="form-label">Symbol<span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="₹" />
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <label class="form-label mb-0">Make as Default</label>
              <div class="form-check form-switch p-0">
                <label class="form-check-label d-flex align-items-center gap-2 w-100">
                  <input
                    class="form-check-input switchCheckDefault ms-auto"
                    type="checkbox"
                    role="switch"
                    checked
                  />
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a href="javascript:void(0);" class="btn btn-sm btn-light me-2" data-bs-dismiss="modal"
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
  <div class="modal fade" id="delete_currency">
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
          <p class="mb-3">Are you sure you want to remove currency you selected.</p>
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
export default {
  data() {
    return {};
  },
};
</script>
