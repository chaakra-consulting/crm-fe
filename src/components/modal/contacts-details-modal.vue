<template>
  <!-- start add notes  modal -->
  <div id="add_new_notes"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Add New Notes</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="add_new_notes">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="mb-4">
              <label class="form-label">Title<span class="text-danger ms-1">*</span></label>
              <input class="form-control" type="text" />
            </div>
            <div class="mb-4">
              <label class="form-label">Notes<span class="text-danger ms-1">*</span></label>
              <textarea rows="4"
                class="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-900"></textarea>
            </div>
            <div class="mb-4">
              <label class="form-label">Attachment<span class="text-danger ms-1">*</span></label>
              <div
                class="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
                <span class="block mb-1"><i class="ti ti-folder-open text-primary fs-16"></i></span>
                <p class="mb-0 tet-[14px] text-dark">
                  Drop your files here or
                  <a href="javascript:void(0);" class="underline text-primary">browse</a>
                </p>
                <input type="file" accept="video/image"
                  class="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer" />
                <p class="text-[13px] mb-0">Maximum size : 50 MB</p>
              </div>
            </div>
            <!-- start row -->
            <div class="grid grid-cols-1 lg:grid-cols-12">
              <div class="lg:col-span-7">
                <div class="border border-borderColor rounded p-4 rounded relative">
                  <div class="flex items-center gap-3 flex-wrap">
                    <div class="flex items-center justify-center w-10 h-10 rounded bg-success shrink-0">
                      <i class="ti ti-file-spreadsheet text-[18px] text-white"></i>
                    </div>
                    <div>
                      <h6 class="font-medium text-[14px] mb-1">Project Specs.xls.</h6>
                      <p class="mb-0">365 KB</p>
                    </div>
                  </div>
                  <button
                    class="w-6 h-6 rounded-full absolute right-2 top-5 bg-light text-dark flex items-center justify-center hover:bg-gray-200">
                    <i class="ti ti-arrow-down"></i>
                  </button>
                </div>
              </div>
            </div>
            <!-- end row -->
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="add_new_notes" class="btn btn-light">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">Confirm</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end add new modal -->

  <!-- start edit notes  modal -->
  <div id="edit_notes"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Edit Notes</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="edit_notes">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="mb-4">
              <label class="form-label">Title<span class="text-danger ms-1">*</span></label>
              <input class="form-control" type="text" placeholder="Team meet at Starbucks" />
            </div>
            <div class="mb-4">
              <label class="form-label">Notes<span class="text-danger ms-1">*</span></label>
              <textarea rows="4"
                class="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-900"
                placeholder="A project review evaluates the success of an initiative and identifies areas for improvement. "></textarea>
            </div>
            <div class="mb-4">
              <label class="form-label">Attachment<span class="text-danger ms-1">*</span></label>
              <div
                class="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
                <span class="block mb-1"><i class="ti ti-folder-open text-primary fs-16"></i></span>
                <p class="mb-0 tet-[14px] text-dark">
                  Drop your files here or
                  <a href="javascript:void(0);" class="underline text-primary">browse</a>
                </p>
                <input type="file" accept="video/image"
                  class="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer" />
                <p class="text-[13px] mb-0">Maximum size : 50 MB</p>
              </div>
            </div>
            <!-- start row -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div class="lg:col-span-7">
                <div class="border border-borderColor rounded p-4 rounded relative">
                  <div class="flex items-center gap-3 flex-wrap">
                    <div class="flex items-center justify-center w-10 h-10 rounded bg-success shrink-0">
                      <i class="ti ti-file-spreadsheet text-[18px] text-white"></i>
                    </div>
                    <div>
                      <h6 class="font-medium text-[14px] mb-1">Project Specs.xls.</h6>
                      <p class="mb-0">365 KB</p>
                    </div>
                  </div>
                  <button
                    class="w-6 h-6 rounded-full absolute right-2 top-5 bg-light text-dark flex items-center justify-center hover:bg-gray-200">
                    <i class="ti ti-arrow-down"></i>
                  </button>
                </div>
              </div>
            </div>
            <!-- end row -->
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="edit_notes" class="btn btn-light">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end edit new modal -->

  <!-- start add call modal -->
  <div id="add_call"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Create Call Log</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="add_call">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="mb-4">
              <label class="form-label">Status<span class="text-danger ms-1">*</span></label>
              <vue3-select v-model="selectedEightss" :options="StatusOne" placeholder="Select" />
            </div>
            <div class="mb-4">
              <label class="form-label">Follow Up Date<span class="text-danger ms-1">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueOne" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
            <div class="mb-4">
              <label class="form-label">Notes<span class="text-danger ms-1">*</span></label>
              <textarea rows="4"
                class="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-900"></textarea>
            </div>
            <div>
              <label class="flex items-center space-x-2 text-body gap-2 cursor-pointer">
                <input type="checkbox"
                  class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0" />
                Create a follow up task
              </label>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="add_call" class="btn btn-light">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">Create New</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end add call modal -->

  <!-- start edit call modal -->
  <div id="edit_call"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Edit Call Log</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="edit_call">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="mb-4">
              <label class="form-label">Status<span class="text-danger ms-1">*</span></label>
              <vue3-select v-model="selectedOne" :options="Status" placeholder="Select" class="select" />
            </div>
            <div class="mb-4">
              <label class="form-label">Follow Up Date<span class="text-danger ms-1">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueTwo" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
            <div class="mb-4">
              <label class="form-label">Notes<span class="text-danger ms-1">*</span></label>
              <textarea rows="4"
                class="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-900"
                placeholder="A project review evaluates the success of an initiative and identifies areas for improvement. "></textarea>
            </div>
            <div>
              <label class="flex items-center space-x-2 text-body gap-2 cursor-pointer">
                <input type="checkbox"
                  class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0" />
                Create a follow up task
              </label>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="edit_call" class="btn btn-light">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end edit call modal -->

  <!-- start add call modal -->
  <div id="create_account"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[800px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Create New File</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="create_account">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <div class="add-info-fieldset">
            <div class="add-details-wizard mb-4 flex items-center">
              <ul class="progress-bar-wizard flex gap-3 items-center border-borderColor">
                <li>
                  <button class="active btn btn-primary rounded multi-step-info">
                    <i class="ti ti-file me-2"></i>Basic Info
                  </button>
                </li>
                <li>
                  <button class="btn btn-light rounded multi-step-info">
                    <i class="ti ti-circle-plus me-2"></i>Add Recipient
                  </button>
                </li>
              </ul>
            </div>
            <fieldset id="first-field-file">
              <form>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-4 mb-4">
                  <div class="md:col-span-12">
                    <div>
                      <label class="form-label">Choose Leads<span class="text-danger ms-1">*</span></label>
                      <vue3-select v-model="selectedTens" :options="Deals" placeholder="Select" />
                    </div>
                  </div>
                  <div class="md:col-span-6">
                    <div>
                      <label class="form-label">Document Type<span class="text-danger ms-1">*</span></label>
                      <vue3-select v-model="selectedElevens" :options="Document" placeholder="Select" />
                    </div>
                  </div>
                  <div class="md:col-span-6">
                    <div>
                      <label class="form-label">Owner<span class="text-danger ms-1">*</span></label>
                      <vue3-select v-model="selectedTweles" :options="Owner" placeholder="Select" />
                    </div>
                  </div>
                  <div class="md:col-span-12">
                    <div>
                      <label class="form-label">Title<span class="text-danger ms-1">*</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="md:col-span-12">
                    <div class="bg-light border border-borderColor rounded p-4">
                      <h6 class="mb-3 font-semibold">Signature</h6>
                      <ul class="nav" data-tabs-toggle="#sign-tab-content"
                        data-tabs-active-classes="text-default hover:text-default">
                        <li class="nav-item block mb-2" role="presentation">
                          <span class="flex" role="tab" data-tabs-target="#nosign" aria-selected="false">
                            <input type="radio" class="text-primary border border-borderColor mt-1" id="sign1"
                              name="email" checked />
                            <label for="sign1" class="form-check-label ms-2 font-medium"><span
                                class="block font-medium text-dark mb-1">No Signature</span>This document does not
                              require a signature before
                              acceptance.</label>
                          </span>
                        </li>
                        <li class="nav-item block mb-0" role="presentation">
                          <span class="active flex mb-0" role="tab" data-tabs-target="#use-esign" aria-selected="true">
                            <input type="radio" class="text-primary border border-borderColor mt-1" id="sign2"
                              name="email" />
                            <label for="sign2" class="form-check-label ms-2"><span
                                class="block font-medium text-dark mb-1">Use e-signature</span>This document require
                              e-signature before acceptance.</label>
                          </span>
                        </li>
                      </ul>
                      <div id="sign-tab-content" class="sign-tab-content">
                        <div class="hidden" id="nosign" role="tabpanel"></div>
                        <div class="hidden mt-4" id="use-esign" role="tabpanel">
                          <div class="mb-0">
                            <label class="form-label">Document Signers<span class="text-danger ms-1">*</span></label>
                          </div>
                          <div class="sign-content1">
                            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                              <div class="md:col-span-6">
                                <input type="text" class="form-control placeholder:text-gray-400" />
                              </div>
                              <div class="md:col-span-6">
                                <div class="flex items-center">
                                  <div class="flex-1 me-2">
                                    <input type="text" class="form-control placeholder:text-gray-400" />
                                  </div>
                                  <a href="javascript:void(0);"
                                    class="size-7 flex items-center justify-center add-sign1 rounded text-dark hover:bg-dark-transparent hover:text-primary"><i
                                      class="ti ti-circle-plus"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="md:col-span-12">
                    <div>
                      <label class="form-label">Content<span class="text-danger ms-1">*</span></label>
                      <textarea rows="3"
                        class="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-600"></textarea>
                    </div>
                  </div>
                </div>
                <div class="text-end form-wizard-button pt-4 gap-x-2 border-t border-borderColor">
                  <button class="btn btn-light me-2" type="reset">Cancel</button>
                  <button class="btn btn-primary wizard-next-btn" type="button">
                    Next
                  </button>
                </div>
              </form>
            </fieldset>

            <fieldset>
              <form>
                <div class="contact-input-set">
                  <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-4 mb-4">
                    <div class="md:col-span-12">
                      <div class="bg-light border border-borderColor rounded p-4">
                        <h6 class="mb-1 font-semibold text-[14px]">
                          Send the document to following signers
                        </h6>
                        <p class="mb-4">In order to send the document to the signers</p>
                        <div class="sign-content">
                          <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                            <div class="md:col-span-6">
                              <div class="mb-0">
                                <label class="form-label">Document Signers<span
                                    class="text-danger ms-1">*</span></label>
                              </div>
                              <input type="text" class="form-control placeholder:text-gray-400" />
                            </div>
                            <div class="md:col-span-6">
                              <div class="mb-0">
                                <label class="form-label">Recipients Email<span
                                    class="text-danger ms-1">*</span></label>
                              </div>
                              <div class="flex items-center">
                                <div class="flex-1 me-2">
                                  <input type="text" class="form-control placeholder:text-gray-400" />
                                </div>
                                <a href="javascript:void(0);"
                                  class="size-7 flex items-center justify-center add-sign rounded text-dark hover:bg-dark-transparent hover:text-primary"><i
                                    class="ti ti-circle-plus"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="md:col-span-12">
                      <div>
                        <label class="form-label">Message Subject<span class="text-danger ms-1">*</span></label>
                        <input type="text" class="form-control" placeholder="Enter Subject" />
                      </div>
                    </div>
                    <div class="md:col-span-12">
                      <div>
                        <label class="form-label">Message Text<span class="text-danger ms-1">*</span></label>
                        <textarea rows="3"
                          class="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-600"></textarea>
                      </div>
                    </div>
                    <div class="md:col-span-6">
                      <button class="btn btn-light" type="reset">Send Now</button>
                    </div>
                    <div class="md:col-span-12">
                      <div class="bg-success-100 text-success border border border-success rounded p-3">
                        <p class="mb-0">
                          <i class="ti ti-circle-check-filled me-1"></i> Document sent
                          successfully to the selected recipients
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 text-end form-wizard-button pt-4 gap-x-2 border-t border-borderColor">
                    <button class="btn btn-light me-2" type="reset">Cancel</button>
                    <button class="btn btn-primary" type="button" data-bs-dismiss="modal">
                      Save & Next
                    </button>
                  </div>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end add call modal -->

  <!-- start Manage Email -->
  <div id="manage_email"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Connect Account</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="manage_email">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="mb-4">
              <label class="form-label">Account type<span class="text-danger ms-1">*</span></label>
              <vue3-select v-model="selectedNines" :options="Account" placeholder="Select" />
            </div>
            <div>
              <label class="form-label mb-3">Sync emails from<span class="text-danger ms-1">*</span></label>
              <div class="form-check mb-2">
                <input class="text-primary border-borderColor me-2" type="radio" name="flexRadioDefaulttwo"
                  id="flexRadioDefaulttwo" checked />
                <label class="form-check-label" for="flexRadioDefaulttwo"> Now </label>
              </div>
              <div class="form-check mb-2">
                <input class="text-primary border-borderColor me-2" type="radio" name="flexRadioDefaultfour"
                  id="flexRadioDefaultfour" />
                <label class="form-check-label" for="flexRadioDefaultfour">
                  1 Month Ago
                </label>
              </div>
              <div class="form-check mb-2">
                <input class="text-primary border-borderColor me-2" type="radio" name="flexRadioDefaultseven"
                  id="flexRadioDefaultseven" />
                <label class="form-check-label" for="flexRadioDefaultseven">
                  3 Month Ago
                </label>
              </div>
              <div class="form-check mb-2">
                <input class="text-primary border-borderColor me-2" type="radio" name="flexRadioDefaulteight"
                  id="flexRadioDefaulteight" />
                <label class="form-check-label" for="flexRadioDefaulteight">
                  6 Month Ago
                </label>
              </div>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="manage_email" class="btn btn-light">
            Cancel
          </button>
          <button type="button" class="btn btn-primary">Connect Account</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end edit call modal -->

  <!-- delete modal -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out modal p-4"
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
          <p class="mb-3">Are you sure you want to remove contract you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full" data-modal-hide="delete_modal">Yes,
              Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->

  <!-- Start Add Contact -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Contact</h5>
      <button type="button" data-drawer-hide="offcanvas_add" aria-controls="offcanvas_add"
        class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center">
        <i class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <form>
      <div id="accordion-collapse-2" class="p-4" data-accordion="collapse">
        <div class="accordion-item border border-borderColor rounded mb-3">
          <h2 class="accordion-header" id="heading-4">
            <button
              class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
              type="button" data-accordion-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
              <span class="flex items-center"><span class="w-8 h-8 rounded flex items-center justify-center me-1"><i
                    class="ti ti-user-plus"></i></span>Basic Info</span>
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div id="collapse-4" class="hidden p-4 border-t border-borderColor" aria-labelledby="heading-4">
            <div class="accordion-body text-[12px]">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-4">
                <div class="md:col-span-12">
                  <div class="flex items-center mb-4">
                    <div
                      class="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                      <div class="relative flex items-center justify-center">
                        <i class="ti ti-photo text-dark text-[16px]"></i>
                      </div>
                    </div>
                    <div class="inline-flex flex-col items-start">
                      <div class="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                        <i class="ti ti-file-broken me-1"></i>Upload file
                        <input type="file" class="opacity-0 absolute start-0 top-0" multiple="" />
                      </div>
                      <span>JPG, GIF or PNG. Max size of 800K</span>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-4">
                    <label class="form-label">First Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Last Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Job Title <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Company Name<span class="text-danger ms-1">*</span></label>
                    <vue3-select v-model="selectedCompany" :options="Company" placeholder="Select" />
                  </div>
                </div>
                <div class="md:col-span-12">
                  <div class="mb-3">
                    <div class="flex justify-between items-center">
                      <label class="form-label">Email <span class="text-danger">*</span></label>
                      <label class="flex items-center cursor-pointer mb-2">
                        <input type="checkbox" value="" class="sr-only peer" checked />
                        <span class="text-sm font-medium me-2">Email Opt Out</span>
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </div>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Phone 1</label>
                    <input type="text" class="form-control phone" name="phone" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Phone 2</label>
                    <input type="text" class="form-control phone" name="phone" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Fax</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <div class="flex items-center justify-between">
                      <label class="form-label">Deals</label>
                      <a href="javascript:void(0);" class="label-add text-primary mb-1"
                        data-drawer-target="offcanvas_add2" data-drawer-show="offcanvas_add2"
                        aria-controls="offcanvas_add2" data-drawer-placement="right"><i class="ti ti-plus me-1"></i>Add
                        New</a>
                    </div>
                    <vue3-select v-model="selectedDeals" :options="Deals" placeholder="Select" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Date of Birth</label>
                    <div class="input-group w-auto input-group-flat">
                      <a-date-picker v-model="valueSeven" class="form-control" placeholder="dd/mm/yyyy" />
                      <span class="input-group-text">
                        <i class="ti ti-calendar"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3 position-relative">
                    <label class="form-label">Reviews </label>
                    <div class="input-group w-auto input-group-flat">
                      <input type="text" class="form-control" />
                      <span class="input-group-text"><i class="ti ti-star"></i></span>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Owner</label>
                    <vue3-select v-model="selectedOwner" :options="Owner" placeholder="Select" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Tags </label>
                    <vue3-tags-input
                      class="input-tags bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                      placeholder="" type="text" data-role="tagsinput" name="Label" value="Tag1" :tags="tags2" />
                    <span class="text-[13px] mt-2">Enter value separated by comma</span>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Source <span class="text-danger">*</span></label>
                    <vue3-select v-model="selectedOnes" :options="Source" placeholder="Select" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Industry <span class="text-danger">*</span></label>
                    <vue3-select v-model="selectedTwos" :options="Industry" placeholder="Select" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Currency <span class="text-danger">*</span></label>
                    <vue3-select v-model="selectedThrees" :options="Currency" placeholder="Select" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Language <span class="text-danger">*</span></label>
                    <vue3-select v-model="selectedFours" :options="Language" placeholder="Select" />
                  </div>
                </div>
                <div class="md:col-span-12">
                  <div class="mb-0">
                    <label class="form-label">Description <span class="text-danger">*</span></label>
                    <textarea class="form-control" rows="3"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item border border-borderColor rounded mb-3">
          <h2 class="accordion-header" id="heading-7">
            <button
              class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
              type="button" data-accordion-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
              <span class="flex items-center"><span class="w-8 h-8 rounded flex items-center justify-center me-1"><i
                    class="ti ti-map-pin-cog"></i></span>Address Info</span>
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div id="collapse-7" class="hidden p-4 border-t border-borderColor" aria-labelledby="heading-7">
            <div class="accordion-body text-[12px]">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                <div class="md:col-span-12">
                  <div class="mb-3">
                    <label class="form-label">Street Address </label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Country</label>
                    <vue3-select v-model="selectedFives" :options="Country" placeholder="Select" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">State / Province </label>
                    <vue3-select v-model="selectedSixs" :options="State" placeholder="Select" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3 mb-md-0">
                    <label class="form-label">City </label>
                    <vue3-select v-model="selectedSevens" :options="City" placeholder="Select" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-0">
                    <label class="form-label">Zipcode </label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item border border-borderColor rounded mb-3">
          <h2 class="accordion-header" id="heading-5">
            <button
              class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
              type="button" data-accordion-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
              <span class="flex items-center"><span class="w-8 h-8 rounded flex items-center justify-center me-1"><i
                    class="ti ti-social"></i></span>Social Profile</span>
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div id="collapse-5" class="hidden p-4 border-t border-borderColor" aria-labelledby="heading-5">
            <div class="accordion-body text-[12px]">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Facebook</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Skype </label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Linkedin </label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Twitter</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3 mb-md-0">
                    <label class="form-label">Whatsapp</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-0">
                    <label class="form-label">Instagram</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item border border-borderColor rounded">
          <h2 class="accordion-header" id="heading-6">
            <button
              class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
              type="button" data-accordion-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
              <span class="flex items-center"><span class="w-8 h-8 rounded flex items-center justify-center me-1"><i
                    class="ti ti-accessible"></i></span>Access</span>
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div id="collapse-6" class="hidden p-4 border-t border-borderColor" aria-labelledby="heading-6">
            <div class="accordion-body text-[12px]">
              <div class="flex items-center gap-4">
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault1"
                    id="flexRadioDefault1" checked />
                  <label class="form-check-label" for="flexRadioDefault1"> Public </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault2"
                    id="flexRadioDefault2" />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Private
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="flexRadioDefaultone"
                    id="flexRadioDefaultone" />
                  <label class="form-check-label" for="flexRadioDefaultone">
                    Select Pepole
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end p-4 pt-0">
        <button type="button" data-drawer-hide="offcanvas_add" class="btn btn-light me-2">
          Cancel
        </button>
        <button type="submit" class="btn btn-primary">Create New</button>
      </div>
    </form>
  </div>
  <!-- End Add Contact -->

  <!-- Start Edit Contact Offcanvas -->
  <div id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Edit Contact</h5>
      <button type="button" data-drawer-hide="offcanvas_edit" aria-controls="offcanvas_edit"
        class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center">
        <i class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <form>
      <div id="accordion-collapse" class="p-4" data-accordion="collapse">
        <div class="accordion-item border border-borderColor rounded mb-3">
          <h2 class="accordion-header" id="heading-14">
            <button
              class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
              type="button" data-accordion-target="#collapse-14" aria-expanded="false" aria-controls="collapse-14">
              <span class="flex items-center"><span class="w-8 h-8 rounded flex items-center justify-center me-1"><i
                    class="ti ti-user-plus"></i></span>Basic Info</span>
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div id="collapse-14" class="hidden p-4 border-t border-borderColor" aria-labelledby="heading-14">
            <div class="accordion-body text-[12px]">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
                <div class="md:col-span-12">
                  <div class="flex items-center mb-3">
                    <div class="w-[80px] h-[80px] me-3 flex-shrink-0 flex items-center justify-center relative">
                      <div class="relative flex items-center justify-center">
                        <img src="@/assets/img/users/avatar-1.jpg" class="rounded" alt="img" />
                      </div>
                      <a href="javascript:void(0);"
                        class="text-[12px] text-danger border-0 w-5 h-5 rounded-full bg-danger-100 flex items-center justify-center absolute right-0 top-0"><i
                          class="ti ti-trash"></i></a>
                    </div>
                    <div class="inline-flex flex-col items-start">
                      <div class="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                        <i class="ti ti-file-broken me-1"></i>Upload file
                        <input type="file" class="opacity-0 absolute start-0 top-0" multiple="" />
                      </div>
                      <span>JPG, GIF or PNG. Max size of 800K</span>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">First Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" value="William" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Last Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" value="Anderson" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Job Title <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" value="Data Analytics" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Company Name<span class="text-danger ms-1">*</span></label>
                    <vue3-select v-model="selectedCompany" :options="Company" placeholder="Select" />
                  </div>
                </div>
                <div class="md:col-span-12">
                  <div class="mb-3">
                    <div class="flex justify-between items-center">
                      <label class="form-label">Email <span class="text-danger">*</span></label>
                      <label class="flex items-center cursor-pointer mb-2">
                        <input type="checkbox" value="" class="sr-only peer" checked />
                        <span class="text-sm font-medium me-2">Email Opt Out</span>
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </div>
                    <input type="text" class="form-control" value="william@example.com" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Phone 1</label>
                    <input type="text" class="form-control phone" name="phone" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Phone 2</label>
                    <input type="text" class="form-control phone" name="phone" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Fax</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <div class="flex items-center justify-between">
                      <label class="form-label">Deals</label>
                      <a href="javascript:void(0);" class="label-add text-primary mb-1"
                        data-drawer-target="offcanvas_add2" data-drawer-show="offcanvas_add2"
                        aria-controls="offcanvas_add2" data-drawer-placement="right"><i class="ti ti-plus me-1"></i>Add
                        New</a>
                    </div>
                    <vue3-select v-model="selectedDeals" :options="Deals" placeholder="Collins" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Date of Birth</label>
                    <div class="input-group w-auto input-group-flat">
                      <a-date-picker v-model="valueThree" class="form-control" placeholder="dd/mm/yyyy" />
                      <span class="input-group-text">
                        <i class="ti ti-calendar"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3 position-relative">
                    <label class="form-label">Reviews </label>
                    <div class="input-group w-auto input-group-flat">
                      <input type="text" class="form-control" value="4.5" />
                      <span class="input-group-text"><i class="ti ti-star"></i></span>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Owner</label>
                    <vue3-select v-model="selectedOwner" :options="Owner" placeholder="Hendry Milner" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Tags </label>
                    <vue3-tags-input
                      class="input-tags bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                      placeholder="" type="text" data-role="tagsinput" name="Label" value="Tag1" :tags="tags2" />
                    <span class="text-[13px] mt-2">Enter value separated by comma</span>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Source <span class="text-danger">*</span></label>
                    <vue3-select v-model="selectedOnes" :options="Source" placeholder="Phone Calls" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Industry <span class="text-danger">*</span></label>
                    <vue3-select v-model="selectedTwos" :options="Industry" placeholder="Retail Industry" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Currency <span class="text-danger">*</span></label>
                    <vue3-select v-model="selectedThrees" :options="Currency" placeholder="Dollar" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Language <span class="text-danger">*</span></label>
                    <vue3-select v-model="selectedFours" :options="Language" placeholder="English" />
                  </div>
                </div>
                <div class="md:col-span-12">
                  <div class="mb-0">
                    <label class="form-label">Description <span class="text-danger">*</span></label>
                    <textarea class="form-control" rows="3">
Key decision-maker overseeing operations and strategic planning. Responsible for approving major deals and partnerships. Prefers direct communication via email.</textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item border border-borderColor rounded mb-3">
          <h2 class="accordion-header" id="heading-17">
            <button
              class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
              type="button" data-accordion-target="#collapse-17" aria-expanded="false" aria-controls="collapse-17">
              <span class="flex items-center"><span class="w-8 h-8 rounded flex items-center justify-center me-1"><i
                    class="ti ti-map-pin-cog"></i></span>Address Info</span>
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div id="collapse-17" class="hidden p-4 border-t border-borderColor" aria-labelledby="heading-17">
            <div class="accordion-body text-[12px]">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
                <div class="md:col-span-12">
                  <div class="mb-3">
                    <label class="form-label">Street Address </label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Country</label>
                    <vue3-select v-model="selectedFives" :options="Country" placeholder="USA" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">State / Province </label>
                    <vue3-select v-model="selectedSixs" :options="State" placeholder="California" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3 mb-md-0">
                    <label class="form-label">City </label>
                    <vue3-select v-model="selectedSevens" :options="City" placeholder="Los Angeles" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-0">
                    <label class="form-label">Zipcode </label>
                    <input type="text" class="form-control" value="1019" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item border border-borderColor rounded mb-3">
          <h2 class="accordion-header" id="heading-15">
            <button
              class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
              type="button" data-accordion-target="#collapse-15" aria-expanded="false" aria-controls="collapse-15">
              <span class="flex items-center"><span class="w-8 h-8 rounded flex items-center justify-center me-1"><i
                    class="ti ti-social"></i></span>Social Profile</span>
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div id="collapse-15" class="hidden p-4 border-t border-borderColor" aria-labelledby="heading-15">
            <div class="accordion-body text-[12px]">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Facebook</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Skype </label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Linkedin </label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Twitter</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3 mb-md-0">
                    <label class="form-label">Whatsapp</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-0">
                    <label class="form-label">Instagram</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item border border-borderColor rounded">
          <h2 class="accordion-header" id="heading-16">
            <button
              class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
              type="button" data-accordion-target="#collapse-16" aria-expanded="false" aria-controls="collapse-16">
              <span class="flex items-center"><span class="w-8 h-8 rounded flex items-center justify-center me-1"><i
                    class="ti ti-accessible"></i></span>Access</span>
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div id="collapse-16" class="hidden p-4 border-t border-borderColor" aria-labelledby="heading-16">
            <div class="accordion-body text-[12px]">
              <div class="flex items-center gap-4 gap-y-1">
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="flexRadioDefaultfive"
                    id="flexRadioDefaultfive" checked />
                  <label class="form-check-label" for="flexRadioDefaultfive">
                    Public
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="flexRadioDefaultsix"
                    id="flexRadioDefaultsix" />
                  <label class="form-check-label" for="flexRadioDefaultsix">
                    Private
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="flexRadioDefaultnine"
                    id="flexRadioDefaultnine" />
                  <label class="form-check-label" for="flexRadioDefaultnine">
                    Select Pepole
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end p-4 pt-0">
        <button type="button" data-drawer-hide="offcanvas_edit" class="btn btn-light me-2">
          Cancel
        </button>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </div>
    </form>
  </div>
  <!-- End Edit Contact Offcanvas -->

  <!-- Start Add Deals Offcanvas -->
  <div id="offcanvas_add2"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Deals</h5>
      <button type="button" data-drawer-hide="offcanvas_add2" aria-controls="offcanvas_add2"
        class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center">
        <i class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Deal Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Pipeine <span class="text-danger">*</span></label>
              </div>
              <vue3-select v-model="selectedTen" :options="Pipeine" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedEleven" :options="Status" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Deal Value<span class="text-danger"> *</span></label>
              <input class="form-control" type="text" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Currency <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedTwele" :options="Currency" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Period <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedPeriod" :options="Period" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Period Value <span class="text-danger">*</span></label>
              <input class="form-control" type="text" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Contacts <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedContact" :options="Contacts" placeholder="Select" />
            </div>
            <div class="mb-3">
              <label class="form-label">Project <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedProject" :options="Project" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Due Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueFour" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Expected Closing Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueFive" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Assignee <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedAssignee" :options="Contacts" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Follow Up Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueSix" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Source <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedSource" :options="SourceOne" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Tags <span class="text-danger">*</span></label>
              <vue3-tags-input
                class="input-tags bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                placeholder="" type="text" data-role="tagsinput" name="Label" value="Tag1" :tags="tags2" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Priority <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedPriority" :options="Priority" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description <span class="text-danger">*</span></label>
              <div class="editor pages-editor ql-container ql-snow">
                  <div ref="editorRef" class="quill-editor"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button type="button" data-drawer-hide="offcanvas_add2" class="btn btn-light me-2">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
  <!-- End Add Deals Offcanvas -->
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Vue3TagsInput from "vue3-tags-input";
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();
const valueFour = ref();
const valueFive = ref();
const valueSix = ref();
const valueSeven = ref();
import { initFlowbite } from "flowbite";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      valueOne,
      valueTwo,
      valueThree,
      valueFour,
      valueFive,
      valueSix,
      valueSeven,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: "Darlee Robertson",
      selectedFive: [],
      selectedSix: [],
      selectedSeven: [],
      selectedEight: [],
      selectedNine: [],
      selectedTen: [],
      selectedEleven: [],
      selectedTwele: [],
      selectedPeriod: [],
      selectedContact: "Darlee Robertson",
      selectedProject: "Devops Design",
      selectedAssignee: "Sharon Roy",
      selectedSource: [],
      selectedPriority: [],
      selectedCompany: "NovaWave LLC",
      selectedDeals: "Collins",
      selectedOwner: "Hendry Milner",
      selectedOnes: "Phone Calls",
      selectedTwos: "Banking",
      selectedThrees: "Dollar",
      selectedFours: "English",
      selectedFives: [],
      selectedSixs: [],
      selectedSevens: [],
      selectedEights: "Busy",
      selectedEightss: "Busy",
      selectedNines: "Gmail",
      selectedTens: [],
      selectedElevens: [],
      selectedTweles: [],
      Owner: [
        { label: "Select", value: "Select" },
        { label: "Hendry Milner", value: "Hendry Milner" },
        { label: "Guilory Berggren", value: "Guilory Berggren" },
        { label: "Jami Carlile", value: "Jami Carlile" },
        { label: "Theresa Nelson", value: "Theresa Nelson" },
        { label: "Smith Cooper", value: "Smith Cooper" },
      ],
      Deals: [
        { label: "Select", value: "Select" },
        { label: "Collins", value: "Collins" },
        { label: "Konopelski", value: "Konopelski" },
        { label: "Adams", value: "Adams" },
        { label: "Schumm", value: "Schumm" },
        { label: "Wisozk", value: "Wisozk" },
      ],
      Source: [
        { label: "Select", value: "Select" },
        { label: "Phone Calls", value: "Phone Calls" },
        { label: "Social Media", value: "Social Media" },
        { label: "Referral Sites", value: "Referral Sites" },
        { label: "Web Analytics", value: "Web Analytics" },
        { label: "Previous Purchases", value: "Previous Purchases" },
      ],
      Industry: [
        { label: "Select", value: "Select" },
        { label: "Retail Industry", value: "Retail Industry" },
        { label: "Banking", value: "Banking" },
        { label: "Hotels", value: "Hotels" },
        { label: "Financial Services", value: "Financial Services" },
        { label: "Insurance", value: "Insurance" },
      ],
      Contacts: [
        { label: "Select", value: "Select" },
        { label: "Darlee Robertson", value: "Darlee Robertson" },
        { label: "Sharon Roy", value: "Sharon Roy" },
        { label: "Vaughan Lewis", value: "Vaughan Lewis" },
        { label: "Jessica Louise", value: "Jessica Louise" },
        { label: "Carol Thomas", value: "Carol Thomas" },
      ],
      Currency: [
        { label: "Choose", value: "Choose" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      Language: [
        { label: "Select", value: "Select" },
        { label: "Language", value: "Language" },
        { label: "Arabic", value: "Arabic" },
        { label: "French", value: "French" },
        { label: "German", value: "German" },
      ],
      Country: [
        { label: "Select", value: "Select" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "Germany", value: "Germany" },
        { label: "France", value: "France" },
      ],
      State: [
        { label: "Select", value: "Select" },
        { label: "California", value: "California" },
        { label: "New York", value: "New York" },
        { label: "Texas", value: "Texas" },
        { label: "Florida", value: "Florida" },
      ],
      City: [
        { label: "Select", value: "Select" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "San Diego", value: "San Diego" },
        { label: "Fresno", value: "Fresno" },
        { label: "San Francisco", value: "San Francisco" },
      ],
      Pipeine: [
        { label: "Select", value: "Select" },
        { label: "Sales", value: "Sales" },
        { label: "Marketing", value: "Marketing" },
        { label: "Calls", value: "Calls" },
      ],
      Status: [
        { label: "Select", value: "Select" },
        { label: "Open", value: "Open" },
        { label: "Lost", value: "Lost" },
        { label: "Won", value: "Won" },
      ],
      Period: [
        { label: "Choose", value: "Choose" },
        { label: "Days", value: "Days" },
        { label: "Month", value: "Month" },
      ],
      Project: [
        { label: "Devops Design", value: "Devops Design" },
        { label: "Margrate Design", value: "Margrate Design" },
        { label: "UI for Chat", value: "UI for Chat" },
        { label: "Web Chat", value: "Web Chat" },
      ],
      SourceOne: [
        { label: "Select", value: "Select" },
        { label: "Google", value: "Google" },
        { label: "Social Media", value: "Social Media" },
      ],
      Priority: [
        { label: "Select", value: "Select" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
        { label: "Medium", value: "Medium" },
      ],
      Company: [
        { label: "Select", value: "Devops Design" },
        { label: "NovaWave LLC", value: "NovaWave LLC" },
        { label: "BlueSky Industries", value: "BlueSky Industries" },
        { label: "Silver Hawk", value: "Silver Hawk" },
        { label: "Summit Peak", value: "Summit Peak" },
        { label: "RiverStone Ventur", value: "RiverStone Ventur" },
      ],
      StatusOne: [
        { label: "Busy", value: "Busy" },
        { label: "Unavailable", value: "Unavailable" },
        { label: "No Answer", value: "No Answer" },
        { label: "Wrong Number", value: "Wrong Number" },
        { label: "Left Voice Message", value: "Left Voice Message" },
        { label: "Moving Forward", value: "Moving Forward" },
      ],
      Account: [
        { label: "Gmail", value: "Gmail" },
        { label: "Outlook", value: "Outlook" },
        { label: "Imap", value: "Imap" },
      ],
      Document: [
        { label: "Select", value: "Select" },
        { label: "Contract", value: "Contract" },
        { label: "Proposal", value: "Proposal" },
        { label: "Quote", value: "Quote" },
      ],
      tags2: ["Collab"],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initQuill();
    });
    initFlowbite();
  },
  methods: {
    initQuill() {
      // Check if editorRef exists before initializing Quill
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

      // Check if editorRefone exists before initializing Quill
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
