<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">
      <div class="flex justify-center">
        <div class="w-full lg:w-10/12 mx-auto">
          <div class="bg-white">
            <div class="p-4 border-b border-borderColor flex items-center justify-between gap-2 flex-wrap">
              <h6 class="fs-18 mb-0">Add New Page</h6>
              <router-link to="/content/pages" class="btn btn-primary btn-sm">Back<i class="ti ti-chevron-right ms-1"></i></router-link>
            </div>
            <form>
              <div class="p-4 pb-2">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Title <span class="text-danger">*</span></label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Slug <span class="text-danger">*</span></label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Keywords <span class="text-danger">*</span></label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Status</label>
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
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Visibility</label>
                      <div class="flex items-center gap-4">
                        <div class="form-check">
                          <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault2"
                            id="flexRadioDefault3" checked>
                          <label class="form-check-label" for="flexRadioDefault3">
                            Show
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault2"
                            id="flexRadioDefault4">
                          <label class="form-check-label" for="flexRadioDefault4">
                            Hide
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="md:col-span-12">
                    <div class="mb-3">
                      <label class="form-label">Description</label>
                      <textarea class="form-control" rows="3"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-end p-4 border-t border-borderColor">
                <button type="button" class="btn btn-light me-2">Cancel</button>
                <button type="submit" class="btn btn-primary">Create New</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
</template>
