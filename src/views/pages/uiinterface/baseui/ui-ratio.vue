<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Ratio Video
        </h4>
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li>
              <a href="javascript:void(0);" class="hover:underline text-gray-700">Base UI</a>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li class="text-dark font-medium" aria-current="page">Ratio Video</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="grid grdid-cols-1 xl:grid-cols-12 gap-x-4">

        <div class="xl:col-span-6">
          <div class="card border border-borderColor rounded bg-white mb-4">
            <div class="card-header p-4 border-b border-borderColor">
              <h5 class="card-title">Responsive Ratio video 21:9</h5>
            </div>
            <div class="card-body p-4">
              <p class="text-muted">Use class <code>.ratio-21x9</code></p>
              <!-- 21:9 aspect ratio -->
              <div class="ratio aspect-[16/9]">
                <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"
                  class="w-full h-full"></iframe>
              </div>
            </div> <!-- end card body -->
          </div> <!-- end card -->

          <div class="card border border-borderColor rounded bg-white mb-4">
            <div class="card-header p-4 border-b border-borderColor">
              <h5 class="card-title">Responsive Ratio video 1:1</h5>
            </div>
            <div class="card-body p-4">
              <p class="text-muted">Use class <code>.ratio-1x1</code></p>
              <!-- 1:1 aspect ratio -->
              <div class="ratio aspect-[4/3]">
                <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"
                  class="h-full w-full"></iframe>
              </div>
            </div> <!-- end card body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="xl:col-span-6">
          <div class="card border border-borderColor rounded bg-white mb-4">
            <div class="card-header p-4 border-b border-borderColor">
              <h5 class="card-title">Responsive Ratio video 16:9</h5>
            </div>
            <div class="card-body p-4">
              <p class="text-muted">Use class <code>.ratio-16x9</code></p>
              <!-- 16:9 aspect ratio -->
              <div class="ratio aspect-[1/1]">
                <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"
                  class="h-full w-full"></iframe>
              </div>
            </div> <!-- end card body -->
          </div> <!-- end card -->

          <div class="card border border-borderColor rounded bg-white mb-4">
            <div class="card-header p-4 border-b border-borderColor">
              <h5 class="card-title">Responsive Ratio video 4:3</h5>
            </div>
            <div class="card-body p-4">
              <p class="text-muted">Use class <code>.ratio-4x3</code></p>
              <!-- 4:3 aspect ratio -->
              <div class="ratio">
                <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"
                  class="h-full w-full"></iframe>
              </div>
            </div> <!-- end card body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

      </div>
      <!-- end row -->

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

export default {
  name: 'UiAccordion',
  setup() {
    onMounted(() => {
      initFlowbite();
    });
  }
};
</script>
