<template>
  <!-- Add Pipeline -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Pipeline</h5>
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
              <label class="form-label">Pipeline Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <div class="pipe-title flex items-center justify-between mb-2">
                <label class="form-label m-0">Pipeline Stages</label>
                <a href="#" class="add-stage text-primary" data-modal-target="add_stage"
                  data-modal-toggle="add_stage"><i class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <div
                class="pipeline-item flex items-center justify-between p-3 shadow-sm bg-white mb-1 border-l-4 border-warning">
                <p class="mb-0 font-semibold me-3 text-dark"><i class="ti ti-grip-vertical text-body"></i> Inpipeline
                </p>
                <div class="inline-flex items-center">
                  <a href="#" data-modal-target="edit_stage" data-modal-toggle="edit_stage"
                    class="btn btn-sm btn-outline-light border-0 text-dark font-medium"><i
                      class="ti ti-edit me-1"></i>Edit</a>
                  <a href="#" data-modal-target="delete_stage" data-modal-toggle="delete_stage"
                    class="btn btn-sm btn-outline-light border-0 text-dark font-medium"><i
                      class="ti ti-trash me-1"></i>Delete</a>
                </div>
              </div>
              <div
                class="pipeline-item flex items-center justify-between p-3 shadow-sm bg-white mb-1 border-l-4 border-warning">
                <p class="mb-0 font-semibold me-3 text-dark"><i class="ti ti-grip-vertical text-body"></i> Follow Up</p>
                <div class="inline-flex items-center">
                  <a href="#" data-modal-target="edit_stage" data-modal-toggle="edit_stage"
                    class="btn btn-sm btn-outline-light border-0 text-dark font-medium"><i
                      class="ti ti-edit me-1"></i>Edit</a>
                  <a href="#" data-modal-target="delete_stage" data-modal-toggle="delete_stage"
                    class="btn btn-sm btn-outline-light border-0 text-dark font-medium"><i
                      class="ti ti-trash me-1"></i>Delete</a>
                </div>
              </div>
              <div
                class="pipeline-item flex items-center justify-between p-3 shadow-sm bg-white mb-1 border-l-4 border-warning">
                <p class="mb-0 font-semibold me-3 text-dark"><i class="ti ti-grip-vertical text-body"></i> Schedule
                  Service</p>
                <div class="inline-flex items-center">
                  <a href="#" data-modal-target="edit_stage" data-modal-toggle="edit_stage"
                    class="btn btn-sm btn-outline-light border-0 text-dark font-medium"><i
                      class="ti ti-edit me-1"></i>Edit</a>
                  <a href="#" data-modal-target="delete_stage" data-modal-toggle="delete_stage"
                    class="btn btn-sm btn-outline-light border-0 text-dark font-medium"><i
                      class="ti ti-trash me-1"></i>Delete</a>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Access</label>
              <ul class="nav flex items-center gap-3" data-tabs-toggle="#sign-tab-content"
                data-tabs-active-classes="text-default hover:text-default">
                <li class="nav-item block" role="presentation">
                  <span class="flex" role="tab" data-tabs-target="#nosign" aria-selected="false">
                    <input type="radio" class="text-primary border border-borderColor mt-1" id="sign1" name="email"
                      checked>
                    <label for="sign1" class="form-check-label ms-2 text-dark font-medium">All</label>
                  </span>
                </li>
                <li class="nav-item block mb-0" role="presentation">
                  <span class="flex mb-0" role="tab" data-tabs-target="#use-esign" aria-selected="false">
                    <input type="radio" class="text-primary border border-borderColor mt-1" id="sign2" name="email">
                    <label for="sign2" class="form-check-label ms-2 text-dark font-medium">Select Person</label>
                  </span>
                </li>
              </ul>
              <div id="sign-tab-content" class="sign-tab-content">
                <div class="hidden" id="nosign" role="tabpanel"></div>
                <div class="hidden mt-4" id="use-esign" role="tabpanel">
                  <div class="access-wrapper mb-5">
                    <div class="flex items-center mb-2 justify-between rounded p-2 bg-white border border-borderColor">
                      <div class="flex items-center gap-2">
                        <div class="w-8 h-8 flex items-center">
                          <img src="@/assets/img/profiles/avatar-21.jpg" alt="Image" class="rounded-full">
                        </div>
                        <span>Vaughan Lewis</span>
                      </div>
                      <a href="javascript:void(0);" class="text-primary">Remove</a>
                    </div>
                    <div class="flex items-center mb-2 justify-between rounded p-2 bg-white border border-borderColor">
                      <div class="flex items-center gap-2">
                        <div class="w-8 h-8 flex items-center">
                          <img src="@/assets/img/profiles/avatar-08.jpg" alt="Image" class="rounded-full">
                        </div>
                        <span>Katherine Brooks</span>
                      </div>
                      <a href="javascript:void(0);" class="text-primary">Remove</a>
                    </div>
                  </div>
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
  <!-- /Add Pipeline -->

  <!-- Edit Pipeline -->
  <div id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Edit Pipeline</h5>
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
              <label class="form-label">Pipeline Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="Inpipeline">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <div class="pipe-title flex items-center justify-between mb-2">
                <label class="form-label m-0">Pipeline Stages</label>
                <a href="#" class="add-stage text-primary" data-modal-target="add_stage"
                  data-modal-toggle="add_stage"><i class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <div
                class="pipeline-item flex items-center justify-between p-3 shadow-sm bg-white mb-1 border-l-4 border-warning">
                <p class="mb-0 font-semibold me-3 text-dark"><i class="ti ti-grip-vertical text-body"></i> Inpipeline
                </p>
                <div class="inline-flex items-center">
                  <a href="#" data-modal-target="edit_stage" data-modal-toggle="edit_stage"
                    class="btn btn-sm btn-outline-light border-0 text-dark font-medium"><i
                      class="ti ti-edit me-1"></i>Edit</a>
                  <a href="#" data-modal-target="delete_stage" data-modal-toggle="delete_stage"
                    class="btn btn-sm btn-outline-light border-0 text-dark font-medium"><i
                      class="ti ti-trash me-1"></i>Delete</a>
                </div>
              </div>
              <div
                class="pipeline-item flex items-center justify-between p-3 shadow-sm bg-white mb-1 border-l-4 border-warning">
                <p class="mb-0 font-semibold me-3 text-dark"><i class="ti ti-grip-vertical text-body"></i> Follow Up</p>
                <div class="inline-flex items-center">
                  <a href="#" data-modal-target="edit_stage" data-modal-toggle="edit_stage"
                    class="btn btn-sm btn-outline-light border-0 text-dark font-medium"><i
                      class="ti ti-edit me-1"></i>Edit</a>
                  <a href="#" data-modal-target="delete_stage" data-modal-toggle="delete_stage"
                    class="btn btn-sm btn-outline-light border-0 text-dark font-medium"><i
                      class="ti ti-trash me-1"></i>Delete</a>
                </div>
              </div>
              <div
                class="pipeline-item flex items-center justify-between p-3 shadow-sm bg-white mb-1 border-l-4 border-warning">
                <p class="mb-0 font-semibold me-3 text-dark"><i class="ti ti-grip-vertical text-body"></i> Schedule
                  Service</p>
                <div class="inline-flex items-center">
                  <a href="#" data-modal-target="edit_stage" data-modal-toggle="edit_stage"
                    class="btn btn-sm btn-outline-light border-0 text-dark font-medium"><i
                      class="ti ti-edit me-1"></i>Edit</a>
                  <a href="#" data-modal-target="delete_stage" data-modal-toggle="delete_stage"
                    class="btn btn-sm btn-outline-light border-0 text-dark font-medium"><i
                      class="ti ti-trash me-1"></i>Delete</a>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Access</label>
              <ul class="nav flex items-center gap-3" data-tabs-toggle="#sign-tab-content2"
                data-tabs-active-classes="text-default hover:text-default">
                <li class="nav-item block" role="presentation">
                  <span class="flex" role="tab" data-tabs-target="#nosign2" aria-selected="false">
                    <input type="radio" class="text-primary border border-borderColor mt-1" id="sign3" name="email"
                      checked>
                    <label for="sign3" class="form-check-label ms-2 text-dark font-medium">All</label>
                  </span>
                </li>
                <li class="nav-item block mb-0" role="presentation">
                  <span class="flex mb-0" role="tab" data-tabs-target="#use-esign2" aria-selected="false">
                    <input type="radio" class="text-primary border border-borderColor mt-1" id="sign4" name="email">
                    <label for="sign4" class="form-check-label ms-2 text-dark font-medium">Select Person</label>
                  </span>
                </li>
              </ul>
              <div id="sign-tab-content2" class="sign-tab-content">
                <div class="hidden" id="nosign2" role="tabpanel"></div>
                <div class="hidden mt-4" id="use-esign2" role="tabpanel">
                  <div class="access-wrapper mb-5">
                    <div class="flex items-center mb-2 justify-between rounded p-2 bg-white border border-borderColor">
                      <div class="flex items-center gap-2">
                        <div class="w-8 h-8 flex items-center">
                          <img src="@/assets/img/profiles/avatar-21.jpg" alt="Image" class="rounded-full">
                        </div>
                        <span>Vaughan Lewis</span>
                      </div>
                      <a href="javascript:void(0);" class="text-primary">Remove</a>
                    </div>
                    <div class="flex items-center mb-2 justify-between rounded p-2 bg-white border border-borderColor">
                      <div class="flex items-center gap-2">
                        <div class="w-8 h-8 flex items-center">
                          <img src="@/assets/img/profiles/avatar-08.jpg" alt="Image" class="rounded-full">
                        </div>
                        <span>Katherine Brooks</span>
                      </div>
                      <a href="javascript:void(0);" class="text-primary">Remove</a>
                    </div>
                  </div>
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
  <!-- /Edit Pipeline -->

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
          <p class="mb-3">Are you sure you want to remove pipeline you selected.</p>
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

  <!-- delete Stage -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="delete_stage">
    <div class="relative bg-white rounded-defaultradius p-5">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center">
          <div class="mb-3 relative z-[1]">
            <span
              class="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center"><i
                class="ti ti-trash text-[24px]"></i></span>
          </div>
          <h5 class="mb-1">Remove Stage</h5>
          <p class="mb-3">Are you sure you want to remove stage you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_stage">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full" data-modal-hide="delete_stage">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete Stage -->

  <!-- Add Stage -->
  <div id="add_stage"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add New Stage</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_stage">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">Stage Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_stage" type="button"
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
  <!-- /Add Stage -->

  <!-- Edit Stage -->
  <div id="edit_stage"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Edit Stage</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="edit_stage">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">Stage Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="Inpipeline">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="edit_stage" type="button"
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
  <!-- /Edit Stage -->
</template>
