<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          File Uploads
        </h4>
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li>
              <a href="javascript:void(0);" class="hover:underline text-gray-700">Forms</a>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li class="text-dark font-medium" aria-current="page">File Uploads</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="card bg-white border border-borderColor rounded mb-5">
        <div class="card-header border-b border-borderColor p-4">
          <h5 class="card-title">Dropzone File Upload</h5>
        </div>
        <div class="card-body p-4">
          <p class="text-muted mb-4">
            DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.
          </p>
          <form action="/" method="post"
            class="dropzone border-2 border-dashed border-borderColor rounded min-h-[150px] p-5 cursor-pointer"
            id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews"
            data-upload-preview-template="#uploadPreviewTemplate">
            <div class="fallback">
              <!-- <input name="file" type="file" multiple> -->
            </div>
            <div class="dz-message text-center my-4 needsclick">
              <i class="ti ti-cloud-upload h1 text-muted text-[24px]"></i>
              <h3 class="my-3 text-[28px]">Drop files here or click to upload.</h3>
              <span class="text-muted fs-13">(This is just a demo dropzone. Selected files are <strong>not</strong>
                actually uploaded.)</span>
            </div>
          </form>

          <!-- Preview -->
          <div class="dropzone-previews" id="file-previews"></div>

        </div> <!-- end card-body -->
      </div> <!-- end card -->

      <!-- file preview template -->
      <div class="hidden" id="uploadPreviewTemplate">
        <div class="card mt-2 mb-0 shadow-none border">
          <div class="p-2">
            <div class="row align-items-center">
              <div class="col-auto">
                <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="Img">
              </div>
              <div class="col ps-0">
                <a href="javascript:void(0);" class="text-muted fw-bold" data-dz-name></a>
                <p class="mb-0" data-dz-size></p>
              </div>
              <div class="col-auto">
                <!-- Button -->
                <a href="javascript:void(0);" class="btn btn-link btn-lg text-muted" data-dz-remove>
                  <i class="ti ti-x"></i>
                </a>
              </div>
            </div>
          </div>
        </div> <!-- end card -->
      </div>

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Home",
      text: "File Upload",
    };
  },
};
</script>
