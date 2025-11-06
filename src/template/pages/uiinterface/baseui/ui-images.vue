<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Images
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
            <li class="text-dark font-medium" aria-current="page">Images</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 gap-x-6">

        <!-- Images Shape -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Images Shapes</h5>
          </div>
          <div class="card-body p-5">
            <p class="mb-3">Add classes to an <code class="text-primary">&lt;img&gt;</code> element to easily style
              images in any project.</p>
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <img src="@/assets/img/media/img-4.jpg" alt="image" class="img-fluid rounded mb-2" width="200">
                <p class="mt-1">
                  <code class="text-primary">.rounded</code>
                </p>
              </div>
              <div>
                <img src="@/assets/img/profiles/avatar-03.jpg" alt="image" class="img-fluid rounded-full mb-2"
                  width="133">
                <p class="mt-1">
                  <code class="text-primary">.rounded-full</code>
                </p>
              </div>
              <div>
                <img src="@/assets/img/media/img-1.jpg" alt="image"
                  class="img-fluid rounded ring-1 ring-borderColor ring-offset-4 ring-offset-white mb-2" width="200">
                <p class="mt-1">
                  <code class="text-primary">.rounded ring-1 ring-borderColor ring-offset-4 ring-offset-white</code>
                </p>
              </div>
              <div>
                <img src="@/assets/img/profiles/avatar-02.jpg" alt="image"
                  class="img-fluid rounded-full ring-1 ring-borderColor ring-offset-4 ring-offset-white mb-2"
                  width="133">
                <p class="mt-1">
                  <code class="text-primary">.rounded ring-1 ring-borderColor ring-offset-4 ring-offset-white</code>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- /Images Shape -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6">

        <!-- Image Left Align -->
        <div class="xl:col-span-4">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 w-full">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Image Left Align</h5>
            </div>
            <div class="card-body p-5">
              <div class="text-left">
                <img class="rounded inline-block" src="@/assets/img/media/img-1.jpg" alt="..." width="200">
              </div>
            </div>
          </div>

        </div>
        <!-- /Image Left Align -->

        <!-- Image Center Align -->
        <div class="xl:col-span-4">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Image Center Align</h5>
            </div>
            <div class="card-body p-5">
              <div class="text-center">
                <img class="rounded inline-block" src="@/assets/img/media/img-1.jpg" alt="..." width="200">
              </div>
            </div>
          </div>

        </div>
        <!-- /Image Center Align -->

        <!-- Image Right Align -->
        <div class="xl:col-span-4">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Image Right Align</h5>
            </div>
            <div class="card-body p-5">
              <div class="text-end">
                <img class="rounded inline-block" src="@/assets/img/media/img-1.jpg" alt="..." width="200">
              </div>
            </div>
          </div>
        </div>
        <!-- /Image Right Align -->

        <!-- Figures -->
        <div class="xl:col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Figures</h5>
            </div>
            <div class="card-body p-5 flex justify-between gap-2">
              <figure class="figure">
                <img class="rounded mb-2" src="@/assets/img/media/img-1.jpg" alt="...">
                <figcaption>A caption for the above image.</figcaption>
              </figure>
              <figure class="figure text-right">
                <img class="rounded mb-2" src="@/assets/img/media/img-1.jpg" alt="...">
                <figcaption>A caption for the above image.</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <!-- /Figures -->

      </div>

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
