<template>
  <!-- Add Project -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Project</h5>
      <button type="button" data-drawer-hide="offcanvas_add" aria-controls="offcanvas_add"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
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
              <vue3-select
                v-model="selected"
                :options="ProjectSele"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Client <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedOne"
                :options="ClientSele"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Category <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedTwo"
                :options="CategorySele"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Project Timing <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedThree"
                :options="TimingSele"
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
              <vue3-select
                v-model="selectOne"
                :options="Responsible"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Team Leader <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectTwo"
                :options="ResponsibleOne"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Start Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker
                  v-model="valueFour"
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
              <label class="form-label">Priority</label>
              <vue3-select
                v-model="selectedFour"
                :options="PrioritySele"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status</label>
              <vue3-select
                v-model="selectedFive"
                :options="StatusSele"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
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

  <!-- Edit Project -->
  <div id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Edit Project</h5>
      <button type="button" data-drawer-hide="offcanvas_edit" aria-controls="offcanvas_edit"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="Truelysell">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Project ID <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="#274729">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Project Type <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedSix"
                :options="ProjectSeleOne"
                placeholder="Mobile App"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Client <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedSeven"
                :options="ClientSeleOne"
                placeholder="NovaWave LLC"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Category <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedEight"
                :options="CategorySeleOne"
                placeholder="Harbor View"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Project Timing <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedNine"
                :options="TimingSeleOne"
                placeholder="Hourly"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Price <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="2,15,000">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Responsible Persons <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectOne"
                :options="Responsible"
                placeholder="Robert Johnson"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Team Leader <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectTwo"
                :options="ResponsibleOne"
                placeholder="Robert Johnson"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Start Date <span class="text-danger">*</span></label>
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
              <label class="form-label">Due Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker
                  v-model="valueThree"
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
                v-model="selectedTen"
                :options="PrioritySeleOne"
                placeholder="High"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status</label>
              <vue3-select
                v-model="selectedTenOne"
                :options="StatusSeleOne"
                placeholder="Active"
              />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description </label>
              <textarea class="form-control" rows="3">Provides a multiple ondemand service marketplace</textarea>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button type="button" data-drawer-hide="offcanvas_edit" class="btn btn-light me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Edit Project -->

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
          <p class="mb-3">Are you sure you want to remove project you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full" data-modal-hide="delete_modal">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->
</template>
<script>
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();
const valueFour = ref();
export default {
  data() {
    return {
      valueOne,
      valueTwo,
      valueThree,
      valueFour,
      selectOne: [],
      selectTwo: [],
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      selectedEight: null,
      selectedNine: null,
      selectedTen: null,
      selectedTenOne: null,
      Responsible: [
        { lable: "Darlee Robertson", value: "Darlee Robertson" },
        { lable: "Sharon Roy", value: "Sharon Roy" },
        { lable: "Vaughan Lewis", value: "Vaughan Lewis" },
        { lable: "Jessica Louise", value: "Jessica Louise" },
        { lable: "Carol Thomas", value: "Carol Thomas" },
      ],
      ResponsibleOne: [
      { lable: "Darlee Robertson", value: "Darlee Robertson" },
        { lable: "Sharon Roy", value: "Sharon Roy" },
        { lable: "Vaughan Lewis", value: "Vaughan Lewis" },
        { lable: "Jessica Louise", value: "Jessica Louise" },
        { lable: "Carol Thomas", value: "Carol Thomas" },
      ],
      ProjectSele: [
        { label: "Choose", value: "Choose" },
        { label: "Mobile App", value: "Mobile App" },
        { label: "Meeting", value: "Meeting" },
      ],
      ClientSele: [
        { label: "Select", value: "Select" },
        { label: "NovoWave LLC", value: "NovoWave LLC" },
        { label: "Silver Hawk", value: "Silver Hawk" },
        { label: "Harbor View", value: "Harbor View" },
      ],
      CategorySele: [
        { label: "Select", value: "Select" },
        { label: "Harbor View", value: "Harbor View" },
        { label: "LLC", value: "LLC" },
      ],
      PrioritySele: [
        { label: "Select", value: "Select" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
        { label: "Medium", value: "Medium" },
      ],
      TimingSele: [
        { label: "Select", value: "Select" },
        { label: "Hourly", value: "Hourly" },
        { label: "Weekly", value: "Weekly" },
        { label: "Monthly", value: "Monthly" },
        { label: "Less than 1 Month", value: "Less than 1 Month" },
        { label: "Less than 3 Month", value: "Less than 3 Month" },
        { label: "INC00020", value: "INC00020" },
        { label: "INC00019", value: "INC00019" },
      ],
      StatusSele: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      ProjectSeleOne: [
        { label: "Choose", value: "Choose" },
        { label: "Mobile App", value: "Mobile App" },
        { label: "Meeting", value: "Meeting" },
      ],
      ClientSeleOne: [
        { label: "Select", value: "Select" },
        { label: "NovoWave LLC", value: "NovoWave LLC" },
        { label: "Silver Hawk", value: "Silver Hawk" },
        { label: "Harbor View", value: "Harbor View" },
      ],
      CategorySeleOne: [
        { label: "Select", value: "Select" },
        { label: "Harbor View", value: "Harbor View" },
        { label: "LLC", value: "LLC" },
      ],
      PrioritySeleOne: [
        { label: "Select", value: "Select" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
        { label: "Medium", value: "Medium" },
      ],
      TimingSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Hourly", value: "Hourly" },
        { label: "Weekly", value: "Weekly" },
        { label: "Monthly", value: "Monthly" },
        { label: "Less than 1 Month", value: "Less than 1 Month" },
        { label: "Less than 3 Month", value: "Less than 3 Month" },
        { label: "INC00020", value: "INC00020" },
        { label: "INC00019", value: "INC00019" },
      ],
      StatusSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
    };
  },
};
</script>
