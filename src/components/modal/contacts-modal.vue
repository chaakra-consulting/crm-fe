<template>
  <!-- Add Contact -->
  <div
    id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1"
  >
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Contact</h5>
      <button
        type="button"
        data-drawer-hide="offcanvas_add"
        aria-controls="offcanvas_add"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
      >
        <i class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <form>
      <div id="accordion-collapse-2" class="p-4" data-accordion="collapse">
        <div class="accordion-item border border-borderColor rounded mb-3">
          <h2 class="accordion-header" id="heading-4">
            <button
              class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
              type="button"
              data-accordion-target="#collapse-4"
              aria-expanded="false"
              aria-controls="collapse-4"
            >
              <span class="flex items-center"
                ><span class="w-8 h-8 rounded flex items-center justify-center me-1"
                  ><i class="ti ti-user-plus"></i></span
                >Basic Info</span
              >
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div
            id="collapse-4"
            class="hidden p-4 border-t border-borderColor"
            aria-labelledby="heading-4"
          >
            <div class="accordion-body text-[12px]">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                <div class="md:col-span-12">
                  <div class="flex items-center mb-3">
                    <div
                      class="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center"
                    >
                      <div class="relative flex items-center justify-center">
                        <i class="ti ti-photo text-dark fs-16"></i>
                      </div>
                    </div>
                    <div class="inline-flex flex-col items-start">
                      <div
                        class="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2"
                      >
                        <i class="ti ti-file-broken me-1"></i>Upload file
                        <input
                          type="file"
                          class="opacity-0 absolute start-0 top-0"
                          multiple=""
                        />
                      </div>
                      <span>JPG, GIF or PNG. Max size of 800K</span>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >First Name <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Last Name <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Job Title <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Company Name<span class="text-danger ms-1">*</span></label
                    >
                    <vue3-select
                      v-model="selected"
                      :options="Company"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-12">
                  <div class="mb-3">
                    <div class="flex justify-between items-center">
                      <label class="form-label"
                        >Email <span class="text-danger">*</span></label
                      >
                      <label class="flex items-center cursor-pointer mb-2">
                        <input type="checkbox" value="" class="sr-only peer" checked />
                        <span class="text-sm font-medium me-2">Email Opt Out</span>
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"
                        ></span>
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
                      <a
                        href="javascript:void(0);"
                        class="label-add text-primary mb-1"
                        data-drawer-target="offcanvas_add2"
                        data-drawer-show="offcanvas_add2"
                        aria-controls="offcanvas_add2"
                        data-drawer-placement="right"
                        ><i class="ti ti-plus me-1"></i>Add New</a
                      >
                    </div>
                    <vue3-select
                      v-model="selectedOne"
                      :options="Deals"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Date of Birth</label>
                    <div class="input-group w-auto input-group-flat">
                      <a-date-picker
                        v-model="valueOne"
                        class="form-control datetimepicker"
                        placeholder="20/09/2025"
                      />
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
                    <vue3-select
                      v-model="selectedTwo"
                      :options="Owner"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Tags </label>
                    <vue3-tags-input
                      class="input-tags bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                      placeholder=""
                      type="text"
                      data-role="tagsinput"
                      name="Label"
                      value="Tag1"
                      :tags="tags2"
                    />
                    <span class="fs-13 mt-2">Enter value separated by comma</span>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Source <span class="text-danger">*</span></label
                    >
                    <vue3-select
                      v-model="selectedThree"
                      :options="Source"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Industry <span class="text-danger">*</span></label
                    >
                    <vue3-select
                      v-model="selectedFour"
                      :options="Industry"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Currency <span class="text-danger">*</span></label
                    >
                    <vue3-select
                      v-model="selectedFive"
                      :options="Industry"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Language <span class="text-danger">*</span></label
                    >
                    <vue3-select
                      v-model="selectedSix"
                      :options="Language"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-12">
                  <div class="mb-0">
                    <label class="form-label"
                      >Description <span class="text-danger">*</span></label
                    >
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
              type="button"
              data-accordion-target="#collapse-7"
              aria-expanded="false"
              aria-controls="collapse-7"
            >
              <span class="flex items-center"
                ><span class="w-8 h-8 rounded flex items-center justify-center me-1"
                  ><i class="ti ti-map-pin-cog"></i></span
                >Address Info</span
              >
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div
            id="collapse-7"
            class="hidden p-4 border-t border-borderColor"
            aria-labelledby="heading-7"
          >
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
                    <vue3-select
                      v-model="selectedSeven"
                      :options="Country"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">State / Province </label>
                    <vue3-select
                      v-model="selectedEight"
                      :options="State"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3 mb-md-0">
                    <label class="form-label">City </label>
                    <vue3-select
                      v-model="selectedNine"
                      :options="City"
                      placeholder="Select"
                    />
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
              type="button"
              data-accordion-target="#collapse-5"
              aria-expanded="false"
              aria-controls="collapse-5"
            >
              <span class="flex items-center"
                ><span class="w-8 h-8 rounded flex items-center justify-center me-1"
                  ><i class="ti ti-social"></i></span
                >Social Profile</span
              >
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div
            id="collapse-5"
            class="hidden p-4 border-t border-borderColor"
            aria-labelledby="heading-5"
          >
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
              type="button"
              data-accordion-target="#collapse-6"
              aria-expanded="false"
              aria-controls="collapse-6"
            >
              <span class="flex items-center"
                ><span class="w-8 h-8 rounded flex items-center justify-center me-1"
                  ><i class="ti ti-accessible"></i></span
                >Access</span
              >
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div
            id="collapse-6"
            class="hidden p-4 border-t border-borderColor"
            aria-labelledby="heading-6"
          >
            <div class="accordion-body text-[12px]">
              <div class="flex items-center gap-4">
                <div class="form-check">
                  <input
                    class="text-primary border-borderColor"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault1"> Public </label>
                </div>
                <div class="form-check">
                  <input
                    class="text-primary border-borderColor"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Private
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="text-primary border-borderColor"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                  />
                  <label class="form-check-label" for="flexRadioDefault3">
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
  <!-- /Add Contact -->

  <!-- Edit Contact -->
  <div
    id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1"
  >
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Edit Contact</h5>
      <button
        type="button"
        data-drawer-hide="offcanvas_edit"
        aria-controls="offcanvas_edit"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
      >
        <i class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <form>
      <div id="accordion-collapse" class="p-4" data-accordion="collapse">
        <div class="accordion-item border border-borderColor rounded mb-3">
          <h2 class="accordion-header" id="heading-14">
            <button
              class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
              type="button"
              data-accordion-target="#collapse-14"
              aria-expanded="false"
              aria-controls="collapse-14"
            >
              <span class="flex items-center"
                ><span class="w-8 h-8 rounded flex items-center justify-center me-1"
                  ><i class="ti ti-user-plus"></i></span
                >Basic Info</span
              >
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div
            id="collapse-14"
            class="hidden p-4 border-t border-borderColor"
            aria-labelledby="heading-14"
          >
            <div class="accordion-body text-[12px]">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                <div class="md:col-span-12">
                  <div class="flex items-center mb-3">
                    <div
                      class="w-[80px] h-[80px] me-3 flex-shrink-0 flex items-center justify-center relative"
                    >
                      <div class="relative flex items-center justify-center">
                        <img
                          src="@/assets/img/users/avatar-1.jpg"
                          class="rounded"
                          alt="img"
                        />
                      </div>
                      <a
                        href="javascript:void(0);"
                        class="text-[12px] text-danger border-0 w-5 h-5 rounded-full bg-danger-100 flex items-center justify-center absolute right-0 top-0"
                        ><i class="ti ti-trash"></i
                      ></a>
                    </div>
                    <div class="inline-flex flex-col items-start">
                      <div
                        class="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2"
                      >
                        <i class="ti ti-file-broken me-1"></i>Upload file
                        <input
                          type="file"
                          class="opacity-0 absolute start-0 top-0"
                          multiple=""
                        />
                      </div>
                      <span>JPG, GIF or PNG. Max size of 800K</span>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >First Name <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" value="William" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Last Name <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" value="Anderson" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Job Title <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" value="Data Analytics" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Company Name<span class="text-danger ms-1">*</span></label
                    >
                    <vue3-select
                      v-model="selectedOnes"
                      :options="Company"
                      placeholder="NovaWave LLC"
                    />
                  </div>
                </div>
                <div class="md:col-span-12">
                  <div class="mb-3">
                    <div class="flex justify-between items-center">
                      <label class="form-label"
                        >Email <span class="text-danger">*</span></label
                      >
                      <label class="flex items-center cursor-pointer mb-2">
                        <input type="checkbox" value="" class="sr-only peer" checked />
                        <span class="text-sm font-medium me-2">Email Opt Out</span>
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"
                        ></span>
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
                      <a
                        href="javascript:void(0);"
                        class="label-add text-primary mb-1"
                        data-drawer-target="offcanvas_add2"
                        data-drawer-show="offcanvas_add2"
                        aria-controls="offcanvas_add2"
                        data-drawer-placement="right"
                        ><i class="ti ti-plus me-1"></i>Add New</a
                      >
                    </div>
                    <vue3-select
                      v-model="selectedTwos"
                      :options="Deals"
                      placeholder="Collins"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Date of Birth</label>
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
                    <vue3-select
                      v-model="selectedThrees"
                      :options="Owner"
                      placeholder="Hendry Milner"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Tags </label>
                    <vue3-tags-input
                      class="input-tags bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                      placeholder=""
                      type="text"
                      data-role="tagsinput"
                      name="Label"
                      value="Tag1"
                      :tags="tags2"
                    />
                    <span class="fs-13 mt-2">Enter value separated by comma</span>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Source <span class="text-danger">*</span></label
                    >
                    <vue3-select
                      v-model="selectedFours"
                      :options="Source"
                      placeholder="Phone Calls"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Industry <span class="text-danger">*</span></label
                    >
                    <vue3-select
                      v-model="selectedFives"
                      :options="Industry"
                      placeholder="Retail Industry"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Currency <span class="text-danger">*</span></label
                    >
                    <vue3-select
                      v-model="selectedSixs"
                      :options="Currency"
                      placeholder="Dollar"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Language <span class="text-danger">*</span></label
                    >
                    <vue3-select
                      v-model="selectedSevens"
                      :options="Language"
                      placeholder="English"
                    />
                  </div>
                </div>
                <div class="md:col-span-12">
                  <div class="mb-0">
                    <label class="form-label"
                      >Description <span class="text-danger">*</span></label
                    >
                    <div class="editor pages-editor ql-container ql-snow">
                          <div ref="editorRef" class="quill-editor"></div>
                      </div>
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
              type="button"
              data-accordion-target="#collapse-17"
              aria-expanded="false"
              aria-controls="collapse-17"
            >
              <span class="flex items-center"
                ><span class="w-8 h-8 rounded flex items-center justify-center me-1"
                  ><i class="ti ti-map-pin-cog"></i></span
                >Address Info</span
              >
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div
            id="collapse-17"
            class="hidden p-4 border-t border-borderColor"
            aria-labelledby="heading-17"
          >
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
                    <vue3-select
                      v-model="selectedCountry"
                      :options="Country"
                      placeholder="USA"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">State / Province </label>
                    <vue3-select
                      v-model="selectedState"
                      :options="State"
                      placeholder="California"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3 mb-md-0">
                    <label class="form-label">City </label>
                    <vue3-select
                      v-model="selectedCity"
                      :options="City"
                      placeholder="Los Angeles"
                    />
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
              type="button"
              data-accordion-target="#collapse-15"
              aria-expanded="false"
              aria-controls="collapse-15"
            >
              <span class="flex items-center"
                ><span class="w-8 h-8 rounded flex items-center justify-center me-1"
                  ><i class="ti ti-social"></i></span
                >Social Profile</span
              >
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div
            id="collapse-15"
            class="hidden p-4 border-t border-borderColor"
            aria-labelledby="heading-15"
          >
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
          <h2 class="accordion-header" id="heading-16">
            <button
              class="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
              type="button"
              data-accordion-target="#collapse-16"
              aria-expanded="false"
              aria-controls="collapse-16"
            >
              <span class="flex items-center"
                ><span class="w-8 h-8 rounded flex items-center justify-center me-1"
                  ><i class="ti ti-accessible"></i></span
                >Access</span
              >
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div
            id="collapse-16"
            class="hidden p-4 border-t border-borderColor"
            aria-labelledby="heading-16"
          >
            <div class="accordion-body text-[12px]">
              <div class="flex items-center gap-4">
                <div class="form-check">
                  <input
                    class="text-primary border-borderColor"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault4"> Public </label>
                </div>
                <div class="form-check">
                  <input
                    class="text-primary border-borderColor"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault5"
                  />
                  <label class="form-check-label" for="flexRadioDefault5">
                    Private
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="text-primary border-borderColor"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault6"
                  />
                  <label class="form-check-label" for="flexRadioDefault6">
                    Select Pepole
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end p-4 pt-0">
        <button
          type="button"
          data-drawer-hide="offcanvas_edit"
          class="btn btn-light me-2"
        >
          Cancel
        </button>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </div>
    </form>
  </div>
  <!-- /Edit Contact -->

  <!-- Add Deals -->
  <div
    id="offcanvas_add2"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1"
  >
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Deals</h5>
      <button
        type="button"
        data-drawer-hide="offcanvas_add2"
        aria-controls="offcanvas_add2"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
      >
        <i class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label"
                >Deal Name <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <label class="form-label"
                  >Pipeine <span class="text-danger">*</span></label
                >
              </div>
              <vue3-select
                v-model="selectedPipeine"
                :options="Pipeine"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedStatus"
                :options="Status"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label"
                >Deal Value<span class="text-danger"> *</span></label
              >
              <input class="form-control" type="text" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label"
                >Currency <span class="text-danger">*</span></label
              >
              <vue3-select
                v-model="selectedCurrency"
                :options="Currency"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Period <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedPeriod"
                :options="Period"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label"
                >Period Value <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label"
                >Contacts <span class="text-danger">*</span></label
              >
              <vue3-select
                v-model="selectedContacts"
                :options="Contacts"
                placeholder="Select"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Project <span class="text-danger">*</span></label>
              <vue3-tags-input
                class="input-tags form-control"
                placeholder=""
                type="text"
                data-role="tagsinput"
                name="Label"
                value="Tag1"
                :tags="tags2"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label"
                >Due Date <span class="text-danger">*</span></label
              >
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
              <label class="form-label"
                >Expected Closing Date <span class="text-danger">*</span></label
              >
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
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label"
                >Assignee <span class="text-danger">*</span></label
              >
              <vue3-select
                v-model="selectedAssignee"
                :options="Contacts"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label"
                >Follow Up Date <span class="text-danger">*</span></label
              >
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
              <label class="form-label">Source <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedSource"
                :options="SourceOne"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Tags <span class="text-danger">*</span></label>
              <vue3-tags-input
                class="input-tags form-control"
                placeholder=""
                type="text"
                data-role="tagsinput"
                name="Label"
                value="Tag1"
                :tags="tags2"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label"
                >Priority <span class="text-danger">*</span></label
              >
              <vue3-select
                v-model="selectedPriority"
                :options="Priority"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label"
                >Description <span class="text-danger">*</span></label
              >
              <div class="editor pages-editor ql-container ql-snow">
                <div ref="editorRefone" class="quill-editor"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button
            type="button"
            data-drawer-hide="offcanvas_add2"
            class="btn btn-light me-2"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Add Deals -->

  <!-- delete modal -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out modal p-4"
    id="delete_modal"
  >
    <div class="relative bg-white rounded-defaultradius p-5">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center">
          <div class="mb-3 relative z-[1]">
            <span
              class="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center"
              ><i class="ti ti-trash text-[24px]"></i
            ></span>
          </div>
          <h5 class="mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure you want to remove contact you selected.</p>
          <div class="flex justify-center items-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
              class="btn btn-primary z-1 w-full"
              data-modal-hide="delete_modal"
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
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Vue3TagsInput from "vue3-tags-input";
import { initFlowbite } from "flowbite";
import { ref } from "vue";
import { DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
const value = ref(new Date());
const valueOne = ref(new Date());
const valueTwo = ref(new Date());
const valueThree = ref(new Date());
const valueFour = ref(new Date());

export default {
  components: {
    Vue3TagsInput,
    'a-date-picker': DatePicker,
  },
  data() {
    return {
      tags2: ["Collab"],
      value,
      valueOne,
      valueTwo,
      valueThree,
      valueFour,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      selectedFive: [],
      selectedSix: [],
      selectedSeven: [],
      selectedEight: [],
      selectedNine: [],
      selectedOnes: "NovaWave LLC",
      selectedTwos: "Collins",
      selectedThrees: "Hendry Milner",
      selectedFours: "Phone Calls",
      selectedFives: "Retail Industry",
      selectedSixs: "Dollar",
      selectedSevens: "English",
      selectedCountry: [],
      selectedState: [],
      selectedCity: [],
      selectedPipeine: [],
      selectedStatus: [],
      selectedCurrency: [],
      selectedPeriod: [],
      selectedContacts: "Darlee Robertson",
      selectedAssignee: "Sharon Roy",
      selectedSource: [],
      selectedPriority: [],
      Company: [
        { label: "Select", value: "Select" },
        { label: "NovaWave LLC", value: "NovaWave LLC" },
        { label: "BlueSky Industries", value: "BlueSky Industries" },
        { label: "Silver Hawk", value: "Silver Hawk" },
        { label: "Summit Peak", value: "Summit Peak" },
        { label: "RiverStone Ventur", value: "RiverStone Ventur" },
      ],
      Deals: [
        { label: "Select", value: "Select" },
        { label: "Collins", value: "Collins" },
        { label: "Konopelski", value: "Konopelski" },
        { label: "Adams", value: "Adams" },
        { label: "Schumm", value: "Schumm" },
        { label: "Wisozk", value: "Wisozk" },
      ],
      Owner: [
        { label: "Select", value: "Select" },
        { label: "Hendry Milner", value: "Hendry Milner" },
        { label: "Guilory Berggren", value: "Guilory Berggren" },
        { label: "Jami Carlile", value: "Jami Carlile" },
        { label: "Theresa Nelson", value: "Theresa Nelson" },
        { label: "Smith Cooper", value: "Smith Cooper" },
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
      Currency: [
        { label: "Select", value: "Select" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      Language: [
        { label: "Select", value: "Select" },
        { label: "English", value: "English" },
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
      Contacts: [
        { label: "Darlee Robertson", value: "Darlee Robertson" },
        { label: "Sharon Roy", value: "Sharon Roy" },
        { label: "Vaughan Lewis", value: "Vaughan Lewis" },
        { label: "Jessica Louise", value: "Jessica Louise" },
        { label: "Carol Thomas", value: "Carol Thomas" },
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
    };
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
  mounted() {
    this.$nextTick(() => {
      this.initQuill();
    });
    initFlowbite();
  },
};
</script>
