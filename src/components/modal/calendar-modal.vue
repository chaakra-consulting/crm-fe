<template>
  <!-- Add New Event Start -->
  <div class="modal fade" id="add_event">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="mb-0">Add New Event</h6>
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
            <!-- start row -->
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Event Name <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Event Date <span class="text-danger">*</span></label
                  >
                  <div class="input-group w-auto input-group-flat">
                    <a-date-picker
                      v-model="valueOne"
                      class="form-control"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div>
                  <label class="form-label"
                    >Event Category <span class="text-danger">*</span></label
                  >
                  <vue3-select
                    v-model="selected"
                    :options="Category"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-md btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-md btn-primary">Add Event</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add New Event End -->

  <div class="modal fade" id="add_category">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="mb-0">Add New Category</h6>
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
            <!-- start row -->
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Category Name <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-12">
                <div>
                  <label class="form-label"
                    >Category Color <span class="text-danger">*</span></label
                  >
                  <vue3-select
                    v-model="selectedOne"
                    :options="CategoryColor"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-md btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-md btn-primary">Add Category</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
const valueOne = ref();
export default {
  data() {
    return {
      valueOne,
      selected: null,
      selectedOne: null,
      Category: [
        { label: "Holiday", value: "Holiday" },
        { label: "Interview", value: "Interview" },
        { label: "Meeting", value: "Meeting" },
        { label: "Training", value: "Training" },
      ],
      CategoryColor: [
        { label: "Green", value: "Green" },
        { label: "Yellow", value: "Yellow" },
        { label: "Red", value: "Red" },
        { label: "Blue", value: "Blue" },
      ],
    };
  },
};
</script>
