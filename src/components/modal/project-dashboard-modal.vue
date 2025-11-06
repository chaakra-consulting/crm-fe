<template>
  <!-- Add Project -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1" aria-modal="true" role="dialog">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Project</h5>
      <button type="button" data-drawer-hide="offcanvas_add" aria-controls="offcanvas_add"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center p-5 border border-borderColor rounded mb-5">
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Project ID <span class="text-danger">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Project Type <span class="text-danger">*</span></label>
              <vue3-select v-model="selected" :options="ProType" placeholder="Choose" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Client <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedOne"
                :options="ProClient"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Category <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedTwo"
                :options="ProCate"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Project Timing <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedThree"
                :options="ProTime"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Price <span class="text-danger">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Responsible Persons <span class="text-danger">*</span></label>
              <vue-multiselect
                v-model="selectOne"
                :options="Responsible"
                :multiple="true"
                label="name"
                class="multiple-img"
                track-by="id"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Team Leader <span class="text-danger">*</span></label>
              <vue-multiselect
                v-model="selectTwo"
                :options="ResponsibleOne"
                :multiple="true"
                label="name"
                class="multiple-img"
                track-by="id"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Start Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker
                  v-model="valueOne"
                  class="form-control"
                  placeholder="dd/mm/yyyy"
                />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Due Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker
                  v-model="valueTwo"
                  class="form-control"
                  placeholder="dd/mm/yyyy"
                />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Priority</label>
              <vue3-select
                v-model="selectedFour"
                :options="ProPri"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status</label>
              <vue3-select
                v-model="selectedFive"
                :options="ProStat"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-0">
              <label class="form-label">Description </label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button type="button" data-drawer-hide="offcanvas_add" class="btn btn-light me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Create New</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Add Project -->
</template>
<script>
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();
export default {
  data() {
    return {
      valueOne,
      valueTwo,
      selectOne: [],
      selectTwo: [],
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      Responsible: [
        { label: "Robert Johnson", label: "Robert Johnson" },
        { label: "Sharon Roy", label: "Sharon Roy" },
        { label: "Vaughan Lewis", label: "Vaughan Lewis" },
        { label: "Jessica Louise", label: "Jessica Louise" },
        { label: "Carol Thomas", label: "Carol Thomas" },
      ],
      ResponsibleOne: [
        { label: "Darlee Robertson", label: "Darlee Robertson" },
        { label: "Sharon Roy", label: "Sharon Roy" },
        { label: "Vaughan Lewis", label: "Vaughan Lewis" },
        { label: "Jessica Louise", label: "Jessica Louise" },
        { label: "Carol Thomas", label: "Carol Thomas" },
      ],
      ProStat: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      ProPri: [
        { label: "Select", value: "Select" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
        { label: "Medium", value: "Medium" },
      ],
      ProType: [
        { label: "Select", value: "Select" },
        { label: "Mobile App", value: "Mobile App" },
        { label: "Meeting", value: "Meeting" },
      ],
      ProCate: [
        { label: "Select", value: "Select" },
        { label: "Harbor View", value: "Harbor View" },
        { label: "LLC", value: "LLC" },
      ],
      ProClient: [
        { label: "Select", value: "Select" },
        { label: "NovaWave LLC", value: "NovaWave LLC" },
        { label: "Silver Hawk", value: "Silver Hawk" },
        { label: "Harbor View", value: "Harbor View" },
      ],
      ProTime: [
        { label: "Select", value: "Select" },
        { label: "Hourly", value: "Hourly" },
        { label: "Weekly", value: "Weekly" },
        { label: "Monthly", value: "Monthly" },
        { label: "Less than 1 Month", value: "Less than 1 Month" },
        { label: "Less than 3 Month", value: "Less than 3 Month" },
      ],
    };
  },
  methods: {},
};
</script>
