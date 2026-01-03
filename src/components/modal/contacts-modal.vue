<template>
  <!-- Add Contact -->
  <div v-if="showAddCanvas">
    <div
      id="offcanvas_add"
      class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
      tabindex="-1"
    >
      <div class="p-4 border-b border-borderColor">
        <h5 class="inline-flex items-center font-bold">Tambah Kontak Baru</h5>
        <button
          type="button"
          data-drawer-hide="offcanvas_add"
          aria-controls="offcanvas_add"
          class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
        >
          <i class="ti ti-x"></i> <span class="sr-only">Tutup</span>
        </button>
      </div>
      <form>
        <div id="accordion-collapse-2" class="p-6" data-accordion="collapse">
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
                    <div class="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                      <i class="ti ti-file-broken me-1"></i>Unggah Foto
                      <input
                        type="file"
                        class="opacity-0 absolute start-0 top-0"
                        multiple
                        @change="onPhotoChange"
                      />
                    </div>
                    <span>JPG, GIF or PNG. Maksimal Ukuran 2MB</span>
                  </div>
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <div class="flex justify-between items-center">
                    <label class="form-label">Nama Lengkap <span class="text-danger">*</span></label>
                  </div>
                  <input type="text" class="form-control" v-model="form.full_name" />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">No. Telepon 1 <span class="text-danger">*</span></label>
                  <input
                    type="number"
                    class="form-control phone"
                    name="phone_number_1"
                    v-model="form.phone_number_1"
                  />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">No. Telepon 2</label>
                  <input
                    type="number"
                    class="form-control phone"
                    name="phone_number_2"
                    v-model="form.phone_number_2"
                  />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Email <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" v-model="form.email"/>
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Tanggal Lahir</label>
                  <div class="input-group w-auto input-group-flat">
                    <a-date-picker
                      v-model="form.birth_date"
                      class="form-control datetimepicker"
                      placeholder="20/09/2025"
                    />
                    <span class="input-group-text">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="text-center font-semibold text-gray-700 mb-2 md:col-span-12">Alamat</h6>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">
                    Alamat Lengkap <span class="text-danger">*</span>
                  </label>
                  <textarea class="form-control" rows="3" v-model="form.address"></textarea>
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Provinsi</label>
                  <vue3-select
                    v-model="form.province"
                    :options="Province"
                    placeholder="Pilih/Cari"
                    @update:modelValue="fetchCities"
                  />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3 mb-md-0">
                  <label class="form-label">Kota</label>
                  <vue3-select
                    v-model="form.city"
                    :options="City"
                    placeholder="Pilih/Cari"
                    :disabled="!selectedProvince"
                  />
                </div>
              </div>
              <h6 class="text-center font-semibold text-gray-700 mb-2 md:col-span-12">
                Sosial Media
              </h6>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Facebook</label>
                  <input type="text" class="form-control" v-model="form.facebook"/>
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Instagram </label>
                  <input type="text" class="form-control" v-model="form.instagram"/>
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Linkedin </label>
                  <input type="text" class="form-control" v-model="form.linkedin"/>
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Twitter / X</label>
                  <input type="text" class="form-control" v-model="form.twitter"/>
                </div>
              </div>
              <h6 class="text-center font-semibold text-gray-700 mb-2 md:col-span-12">Lainnya</h6>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Asal Data <span class="text-danger">*</span></label>
                  <vue3-select v-model="form.source" :options="Source" placeholder="Select" />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Tags </label>
                  <!-- <vue3-tags-input
                    class="input-tags bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                    placeholder=""
                    type="text"
                    data-role="tagsinput"
                    name="Label"
                    value="Tag1"
                    :tags="tags2"
                  /> -->
                  <Multiselect
                    v-model="form.tags"
                    :options="Tags"
                    :multiple="true"
                    tag-position="bottom"
                    track-by="name"
                    label="name"
                    class="tag-select"
                    placeholder="Pilih atau ketik tag"
                    :taggable="true"
                    @tag="addTag"
                  />
                  <span class="fs-13 mt-2">Masukkan atau Cari Tag</span>
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Nama Perusahaan<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select v-model="form.company" :options="Company" placeholder="Pilih/Cari" />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Jabatan</label>
                  <input type="text" class="form-control" v-model="form.title"/>
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Pemilik Kontak</label>
                  <vue3-select v-model="form.owner" :options="Owner" placeholder="Pilih/Cari" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end p-4 pt-0">
          <button type="button" data-drawer-hide="offcanvas_add" class="btn btn-light me-2">
            Batal
          </button>
          <button type="submit" class="btn btn-primary">Tambahkan</button>
        </div>
      </form>
    </div>
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
                        <img src="@/assets/img/users/avatar-1.jpg" class="rounded" alt="img" />
                      </div>
                      <a
                        href="javascript:void(0);"
                        class="text-[12px] text-danger border-0 w-5 h-5 rounded-full bg-danger-100 flex items-center justify-center absolute right-0 top-0"
                        ><i class="ti ti-trash"></i
                      ></a>
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
                      <label class="form-label">Email <span class="text-danger">*</span></label>
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
                    <vue3-select v-model="selectedTwos" :options="Deals" placeholder="Collins" />
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
                    <label class="form-label">Source <span class="text-danger">*</span></label>
                    <vue3-select
                      v-model="selectedFours"
                      :options="Source"
                      placeholder="Phone Calls"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Industry <span class="text-danger">*</span></label>
                    <vue3-select
                      v-model="selectedFives"
                      :options="Industry"
                      placeholder="Retail Industry"
                    />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Currency <span class="text-danger">*</span></label>
                    <vue3-select v-model="selectedSixs" :options="Currency" placeholder="Dollar" />
                  </div>
                </div>
                <div class="md:col-span-6">
                  <div class="mb-3">
                    <label class="form-label">Language <span class="text-danger">*</span></label>
                    <vue3-select
                      v-model="selectedSevens"
                      :options="Language"
                      placeholder="English"
                    />
                  </div>
                </div>
                <div class="md:col-span-12">
                  <div class="mb-0">
                    <label class="form-label">Description <span class="text-danger">*</span></label>
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
                    <vue3-select v-model="selectedCountry" :options="Country" placeholder="USA" />
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
                    <vue3-select v-model="selectedCity" :options="City" placeholder="Los Angeles" />
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
                  <label class="form-check-label" for="flexRadioDefault5"> Private </label>
                </div>
                <div class="form-check">
                  <input
                    class="text-primary border-borderColor"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault6"
                  />
                  <label class="form-check-label" for="flexRadioDefault6"> Select Pepole </label>
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
              <label class="form-label">Deal Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <label class="form-label">Pipeine <span class="text-danger">*</span></label>
              </div>
              <vue3-select v-model="selectedPipeine" :options="Pipeine" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedStatus" :options="Status" placeholder="Select" />
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
              <vue3-select v-model="selectedCurrency" :options="Currency" placeholder="Select" />
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
              <vue3-select v-model="selectedContacts" :options="Contacts" placeholder="Select" />
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
              <label class="form-label">Due Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueTwo" class="form-control" placeholder="dd/mm/yyyy" />
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
                <a-date-picker v-model="valueThree" class="form-control" placeholder="dd/mm/yyyy" />
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
                <a-date-picker v-model="valueFour" class="form-control" placeholder="dd/mm/yyyy" />
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
              <label class="form-label">Priority <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedPriority" :options="Priority" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description <span class="text-danger">*</span></label>
              <div class="editor pages-editor ql-container ql-snow">
                <div ref="editorRefone" class="quill-editor"></div>
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
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import Vue3TagsInput from 'vue3-tags-input'
import Multiselect from 'vue-multiselect'
import { initFlowbite } from 'flowbite'
import { ref } from 'vue'
import { DatePicker } from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import api from '../../api/api'
const value = ref(new Date())
const valueOne = ref(new Date())
const valueTwo = ref(new Date())
const valueThree = ref(new Date())
const valueFour = ref(new Date())

export default {
  components: {
    Multiselect,
    Vue3TagsInput,
    'a-date-picker': DatePicker,
  },
  data() {
    return {
      mode: "create",
      form: {
        full_name: "",
        phone_number_1: "",
        phone_number_2: "",
        email: "",
        birth_date: "",
        address: "",
        province: "",
        city: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        twitter: "",
        source: "",
        tags: [],
        company: "",
        position: "",
        owner: "",
      },

      tags2: ['Collab'],
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
      selectedOnes: 'NovaWave LLC',
      selectedTwos: 'Collins',
      selectedThrees: 'Hendry Milner',
      selectedFours: 'Phone Calls',
      selectedFives: 'Retail Industry',
      selectedSixs: 'Dollar',
      selectedSevens: 'English',
      selectedCountry: [],
      selectedState: [],
      selectedCity: [],
      selectedPipeine: [],
      selectedStatus: [],
      selectedCurrency: [],
      selectedPeriod: [],
      selectedContacts: 'Darlee Robertson',
      selectedAssignee: 'Sharon Roy',
      selectedSource: [],
      selectedPriority: [],
      selectedTags: [],
      Company: [],
      Province: [],
      City: [],
      Tags: [],
      Deals: [
        { label: 'Select', value: 'Select' },
        { label: 'Collins', value: 'Collins' },
        { label: 'Konopelski', value: 'Konopelski' },
        { label: 'Adams', value: 'Adams' },
        { label: 'Schumm', value: 'Schumm' },
        { label: 'Wisozk', value: 'Wisozk' },
      ],
      Owner: [
        { label: 'Select', value: 'Select' },
        { label: 'Hendry Milner', value: 'Hendry Milner' },
        { label: 'Guilory Berggren', value: 'Guilory Berggren' },
        { label: 'Jami Carlile', value: 'Jami Carlile' },
        { label: 'Theresa Nelson', value: 'Theresa Nelson' },
        { label: 'Smith Cooper', value: 'Smith Cooper' },
      ],
      Source: [
        { label: 'Select', value: 'Select' },
        { label: 'Phone Calls', value: 'Phone Calls' },
        { label: 'Social Media', value: 'Social Media' },
        { label: 'Referral Sites', value: 'Referral Sites' },
        { label: 'Web Analytics', value: 'Web Analytics' },
        { label: 'Previous Purchases', value: 'Previous Purchases' },
      ],
      Industry: [
        { label: 'Select', value: 'Select' },
        { label: 'Retail Industry', value: 'Retail Industry' },
        { label: 'Banking', value: 'Banking' },
        { label: 'Hotels', value: 'Hotels' },
        { label: 'Financial Services', value: 'Financial Services' },
        { label: 'Insurance', value: 'Insurance' },
      ],
      Currency: [
        { label: 'Select', value: 'Select' },
        { label: 'Dollar', value: 'Dollar' },
        { label: 'Euro', value: 'Euro' },
        { label: 'Pound', value: 'Pound' },
        { label: 'Rupee', value: 'Rupee' },
      ],
      Language: [
        { label: 'Select', value: 'Select' },
        { label: 'English', value: 'English' },
        { label: 'Arabic', value: 'Arabic' },
        { label: 'French', value: 'French' },
        { label: 'German', value: 'German' },
      ],
      Country: [
        { label: 'Select', value: 'Select' },
        { label: 'USA', value: 'USA' },
        { label: 'Canada', value: 'Canada' },
        { label: 'Germany', value: 'Germany' },
        { label: 'France', value: 'France' },
      ],
      State: [
        { label: 'Select', value: 'Select' },
        { label: 'California', value: 'California' },
        { label: 'New York', value: 'New York' },
        { label: 'Texas', value: 'Texas' },
        { label: 'Florida', value: 'Florida' },
      ],
      Pipeine: [
        { label: 'Select', value: 'Select' },
        { label: 'Sales', value: 'Sales' },
        { label: 'Marketing', value: 'Marketing' },
        { label: 'Calls', value: 'Calls' },
      ],
      Status: [
        { label: 'Select', value: 'Select' },
        { label: 'Open', value: 'Open' },
        { label: 'Lost', value: 'Lost' },
        { label: 'Won', value: 'Won' },
      ],
      Period: [
        { label: 'Choose', value: 'Choose' },
        { label: 'Days', value: 'Days' },
        { label: 'Month', value: 'Month' },
      ],
      Contacts: [
        { label: 'Darlee Robertson', value: 'Darlee Robertson' },
        { label: 'Sharon Roy', value: 'Sharon Roy' },
        { label: 'Vaughan Lewis', value: 'Vaughan Lewis' },
        { label: 'Jessica Louise', value: 'Jessica Louise' },
        { label: 'Carol Thomas', value: 'Carol Thomas' },
      ],
      SourceOne: [
        { label: 'Select', value: 'Select' },
        { label: 'Google', value: 'Google' },
        { label: 'Social Media', value: 'Social Media' },
      ],
      Priority: [
        { label: 'Select', value: 'Select' },
        { label: 'High', value: 'High' },
        { label: 'Low', value: 'Low' },
        { label: 'Medium', value: 'Medium' },
      ],
    }
  },
  methods: {
    onPhotoChange(e) {
      this.form.photo = e.target.files[0];
    },
    addTag(newTag) {
      const tag = { name: newTag }
      this.Tags.push(tag)
      this.selectedTags.push(tag)
    },
    async fetchCompany() {
      try {
        const response = await api.get('/companies')
        const companies = Array.isArray(response.data) ? response.data : response.data.data || []

        this.Company = companies
          .filter((item) => item.deleted === 0)
          .map((item) => ({
            label: item.name,
            value: item.id,
          }))

        this.Company.unshift({
          label: 'Tanpa Perusahaan',
          value: '',
        })
      } catch (error) {
        console.error('Gagal memuat data Company:', error)
      }
    },
    async fetchProvince() {
      try {
        const response = await api.get('/provinces')
        const provinces = Array.isArray(response.data) ? response.data : response.data.data || []

        this.Province = provinces
          // .filter((item) => item.deleted === 0)
          .map((item) => ({
            label: item.name,
            value: item.id,
          }))
      } catch (error) {
        console.error('Gagal memuat data provinsi:', error)
      }
    },
    async fetchCities(provinceId) {
      try {
        if (!provinceId) {
          this.City = []
          this.selectedCity = null
          return
        }

        console.log('Memuat kota untuk province_id:', provinceId)

        const response = await api.get('/cities', {
          params: { province_id: provinceId },
        })

        this.City = (response.data || []).map((item) => ({
          label: item.name,
          value: item.id,
        }))

        console.log('Berhasil memuat kota:', this.City)
      } catch (error) {
        console.error('Gagal memuat data kota:', error)
      }
    },
    async fetchTags() {
      try {
        const response = await api.get('/tags')
        const tag = Array.isArray(response.data) ? response.data : response.data.data || []

        this.Tags = tag
          // .filter((item) => item.deleted === 0)
          .map((item) => ({
            name: item.name,
            code: item.slug,
          }))
      } catch (error) {
        console.error('Gagal memuat data provinsi:', error)
      }
    },
    initQuill() {
      if (this.$refs.editorRef) {
        const quill = new Quill(this.$refs.editorRef, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline'],
              ['image', 'code-block'],
            ],
          },
        })

        quill.on('text-change', () => {
          this.content = quill.root.innerHTML
        })
      }
      if (this.$refs.editorRefone) {
        const quillone = new Quill(this.$refs.editorRefone, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline'],
              ['image', 'code-block'],
            ],
          },
        })

        quillone.on('text-change', () => {
          this.content = quillone.root.innerHTML
        })
      }
    },
    resetForm() {
      this.form = {
        full_name: "",
        phone_number_1: "",
        phone_number_2: "",
        email: "",
        birth_date: "",
        address: "",
        province: "",
        city: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        twitter: "",
        source: "",
        tags: [],
        company: "",
        position: "",
        owner: "",
      };
    },
    submitForm() {
      this.createData();
    },
    createData() {
      api.post('/contacts/store', this.form)
        .then(() => {
          this.resetForm();
          alert("Data berhasil dibuat!");
        })
        .catch(error => {
          console.error(error);
          alert("Gagal membuat data!");
        });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initQuill()
    })
    this.fetchCompany()
    this.fetchProvince()
    this.fetchTags()
    initFlowbite()
  },
}
</script>
