<template>
  <!-- Add Deals -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Lead</h5>
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
              <label class="form-label">Lead Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Lead Type</label>
              <div class="flex items-center gap-4">
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="lead-type" id="flexRadioDefault1"
                    checked="">
                  <label class="form-check-label" for="flexRadioDefault1">
                    Person
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="lead-type" id="flexRadioDefault2">
                  <label class="form-check-label" for="flexRadioDefault2">
                    Organization
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Company Name</label>
                <a href="javascript:void(0);" class="label-add text-primary mb-1" data-drawer-target="offcanvas_add2"
                  data-drawer-show="offcanvas_add2" aria-controls="offcanvas_add2" data-drawer-placement="right"><i
                    class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <vue3-select
                v-model="selected"
                :options="CompanySele"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Value <span class="text-danger">*</span></label>
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
              <label class="form-label">Phone <span class="text-danger">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label min-h-[20px]"></label>
              <vue3-select
                v-model="selectedTwo"
                :options="PhoneSele"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Source <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedThree"
                :options="SourceSele"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Industry <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedFour"
                :options="IndustrySele"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Owner <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedFive"
                :options="ResponsibleTwo"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Tags <span class="text-danger">*</span></label>
              <vue3-tags-input
                class="input-tags form-control border-0 h-100"
                placeholder=""
                type="text"
                data-role="tagsinput"
                name="Label"
                value="Tag1"
                :tags="tags2"
              />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description <span class="text-danger">*</span></label>
              <textarea rows="3" class="form-control"></textarea>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Visibility</label>
              <div class="flex items-center gap-4">
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="visibility" id="flexRadioDefault3"
                    checked="">
                  <label class="form-check-label" for="flexRadioDefault3">
                    Public
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="visibility" id="flexRadioDefault4">
                  <label class="form-check-label" for="flexRadioDefault4">
                    Private
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="visibility" id="flexRadioDefault5">
                  <label class="form-check-label" for="flexRadioDefault5">
                    Select Pepole
                  </label>
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
  <!-- /Add Deals -->

  <!-- Edit Deals -->
  <div id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Edit Lead</h5>
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
              <label class="form-label">Lead Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="Elizabeth Morgan">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Lead Type</label>
              <div class="flex items-center gap-4">
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="lead-type2" id="flexRadioDefault9"
                    checked="">
                  <label class="form-check-label" for="flexRadioDefault9">
                    Person
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="lead-type2" id="flexRadioDefault10">
                  <label class="form-check-label" for="flexRadioDefault10">
                    Organization
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Company Name</label>
                <a href="javascript:void(0);" class="label-add text-primary mb-1" data-drawer-target="offcanvas_add2"
                  data-drawer-show="offcanvas_add2" aria-controls="offcanvas_add2" data-drawer-placement="right"><i
                    class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <vue3-select
                v-model="selectedSix"
                :options="CompanySele"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Value <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="10">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Currency <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedSeven"
                :options="CurrencySele"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Phone <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="+1 87545 54503">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label min-h-[20px]"></label>
              <vue3-select
                v-model="selectedEight"
                :options="PhoneSele"
                placeholder="Work"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Source <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedNine"
                :options="SourceSele"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Industry <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedTen"
                :options="IndustrySele"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Owner <span class="text-danger">*</span></label>
              <vue3-select
                v-model="selectedTwelve"
                :options="ResponsibleTwo"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Tags <span class="text-danger">*</span></label>
              <vue3-tags-input
                class="input-tags form-control border-0 h-100"
                placeholder=""
                type="text"
                data-role="tagsinput"
                name="Label"
                value="Tag1"
                :tags="tags2"
              />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description <span class="text-danger">*</span></label>
              <textarea rows="3"
                class="form-control">Key decision-maker overseeing operations and strategic planning. Responsible for approving major deals and partnerships. Prefers direct communication via email.</textarea>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Visibility</label>
              <div class="flex items-center gap-4">
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="visibility2" id="flexRadioDefault11"
                    checked="">
                  <label class="form-check-label" for="flexRadioDefault11">
                    Public
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="visibility2"
                    id="flexRadioDefault12">
                  <label class="form-check-label" for="flexRadioDefault12">
                    Private
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="visibility2"
                    id="flexRadioDefault13">
                  <label class="form-check-label" for="flexRadioDefault13">
                    Select Pepole
                  </label>
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
  <!-- /Edit Deals -->

  <!-- Add Company -->
  <div id="offcanvas_add2"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Company</h5>
      <button type="button" data-drawer-hide="offcanvas_add2" aria-controls="offcanvas_add2"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
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
          <div id="collapse-4" class="hidden p-4 border-t border-borderColor " aria-labelledby="heading-4">
            <div class="accordion-body text-[12px]">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                <div class="md:col-span-12">
                  <div class="flex items-center mb-3">
                    <div
                      class="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                      <div class="relative flex items-center justify-center">
                        <i class="ti ti-photo text-dark fs-16"></i>
                      </div>
                    </div>
                    <div class="inline-flex flex-col items-start">
                      <div class="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                        <i class="ti ti-file-broken me-1"></i>Upload file
                        <input type="file" class="opacity-0 absolute start-0 top-0" multiple="">
                      </div>
                      <span>JPG, GIF or PNG. Max size of 800K</span>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-12">
                  <div class="mb-3">
                    <label class="form-label">Company Name<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="md:col-span-12">
                  <div class="mb-3">
                    <div class="flex justify-between items-center">
                      <label class="form-label">Email <span class="text-danger">*</span></label>
                      <label class="flex items-center cursor-pointer mb-2">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <span class="text-sm font-medium me-2">Email Opt Out</span>
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </div>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Phone 1</label>
                    <input type="text" class="form-control phone" name="phone">
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Phone 2</label>
                    <input type="text" class="form-control phone" name="phone">
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Fax</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <div class="flex items-center justify-between">
                      <label class="form-label">Website</label>
                      <a href="javascript:void(0);" class="label-add text-primary mb-1"
                        data-drawer-target="offcanvas_add2" data-drawer-show="offcanvas_add2"
                        aria-controls="offcanvas_add2" data-drawer-placement="right"><i class="ti ti-plus me-1"></i>Add
                        New</a>
                    </div>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3 position-relative">
                    <label class="form-label">Reviews </label>
                    <div class="input-group w-auto input-group-flat">
                      <input type="text" class="form-control">
                      <span class="input-group-text"><i class="ti ti-star"></i></span>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Owner</label>
                    <vue3-select
                      v-model="selectedThirteen"
                      :options="ResponsibleTwo"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Tags </label>
                    <vue3-tags-input
                      class="input-tags form-control border-0 h-100"
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
                    <div class="flex items-center justify-between">
                      <label class="form-label">Deals</label>
                      <a href="javascript:void(0);" class="label-add text-primary mb-1"
                        data-drawer-target="offcanvas_add2" data-drawer-show="offcanvas_add2"
                        aria-controls="offcanvas_add2" data-drawer-placement="right"><i class="ti ti-plus me-1"></i>Add
                        New</a>
                    </div>
                    <vue3-select
                      v-model="selectedFourteen"
                      :options="DealsSele"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Source <span class="text-danger">*</span></label>
                    <vue3-select
                      v-model="selectedFifteen"
                      :options="SourceSele"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Industry <span class="text-danger">*</span></label>
                    <vue3-select
                      v-model="selectedSixteen"
                      :options="IndustrySeleOne"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-12">
                  <div class="mb-3">
                    <label class="form-label">Contacts <span class="text-danger">*</span></label>
                    <vue3-select
                      v-model="selectedSeventeen"
                      :options="ContactsSele"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Currency <span class="text-danger">*</span></label>
                    <vue3-select
                      v-model="selectedEighteen"
                      :options="CurrencySele"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Language <span class="text-danger">*</span></label>
                    <vue3-select
                      v-model="selectedNineteen"
                      :options="LanguageSele"
                      placeholder="Select"
                    />
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
          <div id="collapse-7" class="hidden p-4  border-t border-borderColor" aria-labelledby="heading-7">
            <div class="accordion-body text-[12px]">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                <div class="md:col-span-12">
                  <div class="mb-3">
                    <label class="form-label">Street Address </label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Country</label>
                    <vue3-select
                      v-model="selectedTwenty"
                      :options="CountrySele"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">State / Province </label>
                    <vue3-select
                      v-model="selectedTwentyOne"
                      :options="StatPro"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3 mb-md-0">
                    <label class="form-label">City </label>
                    <vue3-select
                      v-model="selectedTwentyTwo"
                      :options="CityPro"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-0">
                    <label class="form-label">Zipcode </label>
                    <input type="text" class="form-control">
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
          <div id="collapse-5" class="hidden p-4  border-t border-borderColor" aria-labelledby="heading-5">
            <div class="accordion-body text-[12px]">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Facebook</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Skype </label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Linkedin </label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Twitter</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3 mb-md-0">
                    <label class="form-label">Whatsapp</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-0">
                    <label class="form-label">Instagram</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item border border-borderColor rounded">
          <h2 class="accordion-header" id="heading-6">
            <button
              class="flex justify-between items-center text-sm w-full p-4 bg-white  text-start text-dark font-bold text-[16px]"
              type="button" data-accordion-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
              <span class="flex items-center"><span class="w-8 h-8 rounded flex items-center justify-center me-1"><i
                    class="ti ti-accessible"></i></span>Access</span>
              <span><i class="ti ti-chevron-down"></i></span>
            </button>
          </h2>
          <div id="collapse-6" class="hidden p-4  border-t border-borderColor" aria-labelledby="heading-6">
            <div class="accordion-body text-[12px]">
              <div class="flex items-center gap-4">
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault"
                    id="flexRadioDefault6" checked>
                  <label class="form-check-label" for="flexRadioDefault6">
                    Public
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault"
                    id="flexRadioDefault7">
                  <label class="form-check-label" for="flexRadioDefault7">
                    Private
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault"
                    id="flexRadioDefault8">
                  <label class="form-check-label" for="flexRadioDefault8">
                    Select Pepole
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end p-4 pt-0">
        <button type="button" data-drawer-hide="offcanvas_add2" class="btn btn-light me-2">Cancel</button>
        <button type="submit" class="btn btn-primary">Create New</button>
      </div>
    </form>
  </div>
  <!-- /Add Company -->

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
          <p class="mb-3">Are you sure you want to remove lead you selected.</p>
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
import { initFlowbite } from "flowbite";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      tags2: ["Collab"],
      selectOne: [],
      selectTwo: [],
      selectThree: [],
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
      selectedEleven: null,
      selectedTwelve: null,
      selectedThirteen: null,
      selectedFourteen: null,
      selectedFifteen: null,
      selectedSixteen: null,
      selectedSeventeen: null,
      selectedEighteen: null,
      selectedNineteen: null,
      selectedTwenty: null,
      selectedTwentyOne: null,
      selectedTwentyTwo: null,
      ContactsSele: [
        { label: "Darlee Robertson", value: "Darlee Robertson" },
        { label: "Sharon Roy", value: "Sharon Roy" },
        { label: "Vaughan Lewis", value: "Vaughan Lewis" },
        { label: "Jessica Louise", value: "Jessica Louise" },
        { label: "Carol Thomas", value: "Carol Thomas" },
      ],
      ResponsibleTwo: [
        { label: "Darlee Robertson", value: "Darlee Robertson" },
        { label: "Sharon Roy", value: "Sharon Roy" },
        { label: "Vaughan Lewis", value: "Vaughan Lewis" },
        { label: "Jessica Louise", value: "Jessica Louise" },
        { label: "Carol Thomas", value: "Carol Thomas" },
      ],
      IndustrySe: [
        { label: "Select", value: "Select" },
        { label: "Retail Industry", value: "Retail Industry" },
        { label: "Banking", value: "Banking" },
        { label: "Hotels", value: "Hotels" },
        { label: "Financial Services", value: "Financial Services" },
        { label: "Insurance", value: "Insurance" },
      ],
      OwnerSel: [
        { label: "Select", value: "Select" },
        { label: "Hendry Milner", value: "Hendry Milner" },
        { label: "Guilory Berggren", value: "Guilory Berggren" },
        { label: "Jami Carlile", value: "Jami Carlile" },
        { label: "Theresa Nelson", value: "Theresa Nelson" },
        { label: "Smith Cooper", value: "Smith Cooper" },
      ],
      DealsSele: [
        { label: "Select", value: "Select" },
        { label: "Collins", value: "Collins" },
        { label: "Konopelski", value: "Konopelski" },
        { label: "Adams", value: "Adams" },
        { label: "Schumm", value: "Schumm" },
        { label: "Wisozk", value: "Wisozk" },
      ],
      CurrencySe: [
        { label: "Select", value: "Select" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      LanguageSele: [
        { label: "Select", value: "Select" },
        { label: "English", value: "English" },
        { label: "Arabic", value: "Arabic" },
        { label: "French", value: "French" },
        { label: "German", value: "German" },
      ],
      CompanySele: [
        { label: "Select", value: "Select" },
        { label: "NovoWave LLC", value: "NovoWave LLC" },
        { label: "BlueSky Industries", value: "BlueSky Industries" },
        { label: "Sliver Hawk", value: "Sliver Hawk" },
        { label: "Sumit Peak", value: "Sumit Peak" },
        { label: "RiverStone Ventur", value: "RiverStone Ventur" },
      ],
      CurrencySele: [
        { label: "Select", value: "Select" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      PhoneSele: [
        { label: "Select", value: "Select" },
        { label: "Work", value: "Work" },
        { label: "Home", value: "Home" },
      ],
      SourceSele: [
        { label: "Select", value: "Select" },
        { label: "Phone Calls", value: "Phone Calls" },
        { label: "Social Media", value: "Social Media" },
        { label: "Refferal Sites", value: "Refferal Sites" },
        { label: "Web Analytics", value: "Web Analytics" },
        { label: "Previous Puruchases", value: "Previous Puruchases" },
      ],
      IndustrySele: [
        { label: "Select", value: "Select" },
        { label: "Retail Industry", value: "Retail Industry" },
        { label: "Banking", value: "Banking" },
        { label: "Hotels", value: "Hotels" },
        { label: "Financial Services", value: "Financial Services" },
        { label: "Insurance", value: "Insurance" },
      ],
      IndustryOne: [
        { label: "Select", value: "Select" },
        { label: "Retail Industry", value: "Retail Industry" },
        { label: "Banking", value: "Banking" },
        { label: "Hotels", value: "Hotels" },
        { label: "Financial Services", value: "Financial Services" },
        { label: "Insurance", value: "Insurance" },
      ],
      CompanySeleOne: [
        { label: "Select", value: "Select" },
        { label: "NovoWave LLC", value: "NovoWave LLC" },
        { label: "BlueSky Industries", value: "BlueSky Industries" },
        { label: "Sliver Hawk", value: "Sliver Hawk" },
        { label: "Sumit Peak", value: "Sumit Peak" },
        { label: "RiverStone Ventur", value: "RiverStone Ventur" },
      ],
      CurrencySeleOne: [
        { label: "Select", value: "Select" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      PhoneSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Work", value: "Work" },
        { label: "Home", value: "Home" },
      ],
      SourceSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Phone Calls", value: "Phone Calls" },
        { label: "Social Media", value: "Social Media" },
        { label: "Refferal Sites", value: "Refferal Sites" },
        { label: "Web Analytics", value: "Web Analytics" },
        { label: "Previous Puruchases", value: "Previous Puruchases" },
      ],
      IndustrySeleOne: [
        { label: "Select", value: "Select" },
        { label: "Retail Industry", value: "Retail Industry" },
        { label: "Banking", value: "Banking" },
        { label: "Hotels", value: "Hotels" },
        { label: "Financial Services", value: "Financial Services" },
        { label: "Insurance", value: "Insurance" },
      ],
      CityPro: [
        { label: "Select", value: "Select" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "Toronto", value: "Toronto" },
        { label: "London", value: "London" },
        { label: "Munich", value: "Munich" },
      ],
      StatPro: [
        { label: "Select", value: "Select" },
        { label: "California", value: "California" },
        { label: "Onatario", value: "Onatario" },
        { label: "England", value: "England" },
        { label: "Bavaria", value: "Bavaria" },
      ],
      CountrySele: [
        { label: "Select", value: "Select" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "UK", value: "UK" },
        { label: "Germany", value: "Germany" },
      ],
    };
  },
  mounted() {
    initFlowbite();
  },
};
</script>
