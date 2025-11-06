<template>
  <!-- Add Campaign -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Campaign</h5>
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
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Campaign Type <span class="text-danger">*</span></label>
              <vue3-select
                  v-model="selected"
                  :options="CampaignSele"
                  placeholder="Select"
                />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Deal Value <span class="text-danger">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Currency <span class="text-danger">*</span></label>
              <vue3-select
                  v-model="selectedOne"
                  :options="CurrencySele"
                  placeholder="Select"
                />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Period <span class="text-danger">*</span></label>
              <vue3-select
                  v-model="selectedTwo"
                  :options="PeriodSele"
                  placeholder="Select"
                />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Period Value <span class="text-danger">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Target Audience <span class="text-danger">*</span></label>
              <vue3-tags-input
                  class="input-tags form-control border-0 h-100"
                  type="text"
                  id="inputBox2"
                  data-role="tagsinput"
                  name="specialist"
                  value="Tag1"
                  :tags="tagsOne"
                />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description <span class="text-danger">*</span></label>
              <textarea rows="3" class="form-control" placeholder="Description"></textarea>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-5">
              <label class="form-label">Attachment <span class="text-danger">*</span></label>
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
          <div class="md:col-span-5">
            <div class="card border border-borderColor rounded  shadow mb-4">
              <div class="card-body p-5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span
                      class="w-10 h-10 flex items-center justify-center rounded bg-success text-[24px] text-white flex-shrink-0"><i
                        class="ti ti-file-spreadsheet"></i></span>
                    <div>
                      <h6 class="mb-1 text-[14px] font-medium">Project Specs.xls</h6>
                      <p class="mb-0">365 KB</p>
                    </div>
                  </div>
                  <a href="#"
                    class="w-5 h-5 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 hover:bg-danger-100 hover:text-danger"><i
                      class="ti ti-download"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-5">
            <div class="card border border-borderColor rounded  shadow bg-light mb-4">
              <div class="card-body p-5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span
                      class="w-10 h-10 flex items-center justify-center rounded bg-success text-[24px] text-white flex-shrink-0"><img
                        src="@/assets/img/blogs/blog-1.jpg" alt="img"></span>
                    <div>
                      <h6 class="mb-1 text-[14px] font-medium">637.jpg</h6>
                      <p class="mb-0">365 KB</p>
                    </div>
                  </div>
                  <a href="#"
                    class="w-5 h-5 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 hover:bg-danger-100 hover:text-danger"><i
                      class="ti ti-download"></i></a>
                </div>
              </div>
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
  <!-- /Add Campaign -->

  <!-- Edit Campaign -->
  <div id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Edit Campaign</h5>
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
              <input type="text" class="form-control" value="Distribution">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Campaign Type <span class="text-danger">*</span></label>
              <vue3-select
                  v-model="selectedThree"
                  :options="CampaignSeleOne"
                  placeholder="Brand"
                />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Deal Value <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="$04,51,000">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Currency <span class="text-danger">*</span></label>
              <vue3-select
                  v-model="selectedFour"
                  :options="CurrencySeleOne"
                  placeholder="Dollar"
                />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Period <span class="text-danger">*</span></label>
              <vue3-select
                  v-model="selectedFive"
                  :options="PeriodSeleOne"
                  placeholder="Days"
                />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Period Value <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="Collins">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Target Audience <span class="text-danger">*</span></label>
              <vue3-tags-input
                  class="input-tags form-control border-0 h-100"
                  type="text"
                  id="inputBox2"
                  data-role="tagsinput"
                  name="specialist"
                  value="Tag1"
                  :tags="tagsOne"
                />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description <span class="text-danger">*</span></label>
              <textarea rows="3" class="form-control" placeholder="Description"></textarea>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-5">
              <label class="form-label">Attachment <span class="text-danger">*</span></label>
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
          <div class="md:col-span-5">
            <div class="card border border-borderColor rounded  shadow mb-4">
              <div class="card-body p-5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span
                      class="w-10 h-10 flex items-center justify-center rounded bg-success text-[24px] text-white flex-shrink-0"><i
                        class="ti ti-file-spreadsheet"></i></span>
                    <div>
                      <h6 class="mb-1 text-[14px] font-medium">Project Specs.xls</h6>
                      <p class="mb-0">365 KB</p>
                    </div>
                  </div>
                  <a href="#"
                    class="w-5 h-5 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 hover:bg-danger-100 hover:text-danger"><i
                      class="ti ti-download"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-5">
            <div class="card border border-borderColor rounded  shadow bg-light mb-4">
              <div class="card-body p-5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span
                      class="w-10 h-10 flex items-center justify-center rounded bg-success text-[24px] text-white flex-shrink-0"><img
                        src="@/assets/img/blogs/blog-1.jpg" alt="img"></span>
                    <div>
                      <h6 class="mb-1 text-[14px] font-medium">637.jpg</h6>
                      <p class="mb-0">365 KB</p>
                    </div>
                  </div>
                  <a href="#"
                    class="w-5 h-5 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 hover:bg-danger-100 hover:text-danger"><i
                      class="ti ti-download"></i></a>
                </div>
              </div>
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
  <!-- /Edit Campaign -->

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
          <p class="mb-3">Are you sure you want to remove campaign you selected.</p>
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
import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      tagsOne: ["Small Business", "Corporate Companies", "Urban Apartment"],
      PeriodSele: [
        { label: "Choose", value: "Choose" },
        { label: "Days", value: "Days" },
        { label: "Weekly", value: "Weekly" },
        { label: "Monthly", value: "Monthly" },
      ],
      CurrencySele: [
        { label: "Choose", value: "Choose" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      CampaignSele: [
        { label: "Choose", value: "Choose" },
        { label: "Pubilc Relations", value: "Pubilc Relations" },
        { label: "Brand", value: "Brand" },
        { label: "Media", value: "Media" },
      ],
      PeriodSeleOne: [
        { label: "Choose", value: "Choose" },
        { label: "Days", value: "Days" },
        { label: "Weekly", value: "Weekly" },
        { label: "Monthly", value: "Monthly" },
      ],
      CurrencySeleOne: [
        { label: "Choose", value: "Choose" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      CampaignSeleOne: [
        { label: "Choose", value: "Choose" },
        { label: "Pubilc Relations", value: "Pubilc Relations" },
        { label: "Brand", value: "Brand" },
        { label: "Media", value: "Media" },
      ],
    };
  },
};
</script>
