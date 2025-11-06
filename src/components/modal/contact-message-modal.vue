<template>
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
          <p class="mb-3">Are you sure you want to remove contact message you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" data-modal-hide="delete_modal" class="btn btn-primary z-1 w-full">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->

  <!-- Add Contact Message -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="add_contact">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add New Contact Message</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_contact">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="mb-3">
              <label class="form-label">Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="William Anderson">
            </div>
            <!-- start row -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-6">
                <div class="mb-3">
                  <div class="flex items-center justify-between">
                    <label class="form-label">Email <span class="text-danger">*</span></label>
                    <div class="form-check form-switch">
                      <label class="flex items-center cursor-pointer mb-1">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <span class="text-sm me-2">Email Opt Out</span>
                        <span
                          class="relative w-[28px] h-[17px] bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[13px] after:w-[13px] after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </div>
                  </div>
                  <input type="text" class="form-control">
                </div>
              </div><!-- end col -->
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Phone <span class="text-danger">*</span></label>
                  <input type="text" class="form-control phone">
                </div>
              </div><!-- end col -->
            </div>
            <!-- end row -->
            <div class="mb-0">
              <label class="form-label">Message <span class="text-danger ms-1">*</span></label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_contact" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Create New
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Contact Message -->

  <!-- Edit Contact Message -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="edit_contact">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Edit Contact Message</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="edit_contact">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="mb-3">
              <label class="form-label">Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="William Anderson">
            </div>
            <!-- start row -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-6">
                <div class="mb-3">
                  <div class="flex items-center justify-between">
                    <label class="form-label">Email <span class="text-danger">*</span></label>
                    <div class="form-check form-switch">
                      <label class="flex items-center cursor-pointer mb-1">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <span class="text-sm me-2">Email Opt Out</span>
                        <span
                          class="relative w-[28px] h-[17px] bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[13px] after:w-[13px] after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </div>
                  </div>
                  <input type="text" class="form-control" value="william@example.com">
                </div>
              </div><!-- end col -->
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Phone <span class="text-danger">*</span></label>
                  <input type="text" class="form-control phone">
                </div>
              </div><!-- end col -->
            </div>
            <!-- end row -->
            <div class="mb-0">
              <label class="form-label">Message <span class="text-danger ms-1">*</span></label>
              <textarea class="form-control"
                rows="3">I’m having trouble accessing my account. Could you assist with a password reset ?</textarea>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="edit_contact" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Edit Contact Message -->

</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
