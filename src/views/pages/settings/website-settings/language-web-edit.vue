<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">

      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Settings
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Settings</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Refresh Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Refresh">
            <i class="ti ti-refresh"></i>
          </button>
          <!-- Collapse Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Collapse" id="collapse-header" @click="toggleHeader">
            <i class="ti ti-transition-top"></i>
          </button>
        </div>
      </div>
      <!-- End Page Header -->

      <settings-tabs></settings-tabs> 

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
       <website-sidebar></website-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor mb-3 pb-3 flex items-center justify-between flex-wrap gap-y-3">
              <h5 class="mb-0 text-[17px]">Language</h5>
              <div class="flex items-center flex-wrap gap-3">
                <router-link to="/website-settings/language-web"
                  class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition">
                  <i class="ti ti-circle-arrow-left me-1"></i>Back to Translations
                </router-link>
                <!-- Dropdown -->
                <div>
                  <a href="javascript:void(0);"
                    class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="lang-dropdown">
                    <img src="@/assets/img/flags/us.svg" class="me-2" alt="Img" width="16" height="16">English<i
                      class="ti ti-chevron-down ml-1"></i>
                  </a>
                  <ul id="lang-dropdown"
                    class="hidden p-2 z-[1] w-[150px] border border-borderColor rounded bg-white shadow-lg">
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><img
                          src="@/assets/img/flags/us.svg" class="me-2" alt="Img" width="16" height="16">English</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><img
                          src="@/assets/img/flags/de.svg" class="me-2" alt="Img" width="16" height="16">German</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><img
                          src="@/assets/img/flags/ae.svg" alt="Img" class="me-2" width="16" height="16">Arabic</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><img
                          src="@/assets/img/flags/fr.svg" alt="Img" class="me-2" width="16" height="16">French</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span class="block mb-1">Progress</span>
                  <div class="pipeline-progress flex items-center">
                    <div class="h-1 rounded-[50px] w-[63px] bg-light flex-shrink-0 me-3">
                      <div class="h-1 rounded-[50px] w-[50px] bg-warning"></div>
                    </div>
                    <span class="font-medium text-dark">80%</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Contact List -->
            <div class="table-responsive custom-table mb-4">
              <table class="table table-nowrap border border-borderColor w-full">
                <thead class="table-light">
                  <tr>
                    <th class="p-3 text-dark text-left">English</th>
                    <th class="p-3 text-dark text-left">Arabic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-3">
                      Name
                    </td>
                    <td class="p-3">
                      <div class="py-1 px-2 text-end bg-light border border-borderColor rounded text-dark">
                        اسم
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">
                      Phone
                    </td>
                    <td class="p-3">
                      <div class="py-1 px-2 text-end bg-light border border-borderColor rounded text-dark">
                        الفواتير المتكررة
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">
                      Email
                    </td>
                    <td class="p-3">
                      <div class="py-1 px-2 text-end bg-light border border-borderColor rounded text-dark">
                        بريد إلكتروني
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">
                      Tags
                    </td>
                    <td class="p-3">
                      <div class="py-1 px-2 text-end bg-light border border-borderColor rounded text-dark">
                        العلامات
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">
                      Location
                    </td>
                    <td class="p-3">
                      <div class="py-1 px-2 text-end bg-light border border-borderColor rounded text-dark">
                        موقع
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">
                      Rating
                    </td>
                    <td class="p-3">
                      <div class="py-1 px-2 text-end bg-light border border-borderColor rounded text-dark">
                        تصنيف
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-3">
                      Owner
                    </td>
                    <td class="p-3">
                      <div class="py-1 px-2 text-end bg-light border border-borderColor rounded text-dark">
                        مالك
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->

  <!-- Add Language -->
  <div id="add_lang"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add Translation</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_lang">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">Language <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Code <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-6">
                <div class="flex items-center gap-4">
                  <div class="form-check">
                    <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault"
                      id="flexRadioDefault1" checked>
                    <label class="form-check-label" for="flexRadioDefault1">
                      Active
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault"
                      id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                      Inactive
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_lang" type="button"
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
  <!-- /Add Language -->

  <!-- Edit Language -->
  <div id="edit_modal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Edit Translation</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="edit_modal">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">Language <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="English">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Code <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="en">
              </div>
              <div class="md:col-span-6">
                <div class="flex items-center gap-4">
                  <div class="form-check">
                    <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault2"
                      id="flexRadioDefault3" checked>
                    <label class="form-check-label" for="flexRadioDefault3">
                      Active
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault2"
                      id="flexRadioDefault4">
                    <label class="form-check-label" for="flexRadioDefault4">
                      Inactive
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="edit_modal" type="button"
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
  <!-- /Edit Language -->

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
          <p class="mb-3">Are you sure you want to remove language you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
