<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Spinners
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
            <li class="text-dark font-medium" aria-current="page">Spinners</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Spinner -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Border Spinner</h5>
          </div>
          <div class="card-body p-5">
            <div class="spinner-border border-gray-200" role="status" aria-label="loading">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <!-- /Spinner -->

        <!-- Color Spinner -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Colored Spinner</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <div class="spinner-border border-primary" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border border-secondary" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border border-success" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border border-danger" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border border-warning" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border border-info" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border border-light" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border border-dark" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Color Spinner -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Grow Spinner -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Grow Spinner</h5>
            </div>
            <div class="card-body p-5">
              <div class="spinner-grow bg-gray-500" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Grow Spinner -->

        <!-- Colored Grow Spinner -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Colored Grow Spinner</h5>
            </div>
            <div class="card-body flex items-center p-5">
              <div class="spinner-grow bg-primary me-3" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow bg-secondary me-3" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow bg-success me-3" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow bg-danger me-3" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow bg-warning me-3" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow bg-info me-3" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow bg-light me-3" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow bg-dark me-0" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Colored Grow Spinner -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!--Flex Alignment -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Flex Alignment</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex justify-center mb-6">
              <div class="spinner-border border-gray-500" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <strong>Loading...</strong>
              <div class="spinner-border border-gray-500" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Flex Alignment -->

        <!-- Float Alignment -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Float Alignment</h5>
          </div>
          <div class="card-body p-5 clear-both">
            <div class="mb-6">
              <div class="spinner-border border-gray-500 float-right" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <div>
              <div class="spinner-border border-gray-500 float-left" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Float Alignment -->

        <!-- Alignment Text center -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Alignment Text center</h5>
          </div>
          <div class="card-body p-5">
            <div class="text-center">
              <div class="spinner-border border-gray-500" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Alignment Text center -->

        <!-- Alignment Margin -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Alignment Margin</h5>
          </div>
          <div class="card-body p-5">
            <div class="m-5">
              <div class="spinner-border border-gray-500" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Alignment Margin -->

      </div>

      <!-- Different Sizes -->
      <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
          <h5>Different Sizes</h5>
        </div>
        <div class="card-body p-5">
          <div class="flex items-end flex-wrap gap-2">
            <div class="spinner-border spinner-border-sm border-gray-500" role="status" aria-label="loading">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow spinner-grow-sm bg-gray-500 me-3" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-border border-gray-500" role="status" aria-label="loading">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow bg-gray-500 me-3" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-border spinner-border-lg border-gray-500" role="status" aria-label="loading">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow spinner-grow-lg bg-gray-500" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
      <!-- /Different Sizes -->

      <!-- Buttons -->
      <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
          <h5>Buttons</h5>
        </div>
        <div class="card-body p-5">
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-primary-light flex items-center" type="button" disabled>
              <span class="spinner-border spinner-border-sm border-primary" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </span>
            </button>
            <button type="button"
              class="btn btn-primary-light border border-primary text-primary text-sm flex items-center" disabled>
              <svg class="spinner-border spinner-border-sm border-primary mr-2" viewBox="0 0 24 24"></svg>
              Loading...
            </button>

            <button class="btn btn-primary-light flex items-center" type="button" disabled>
              <span class="spinner-grow spinner-grow-sm bg-primary" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
              </span>
            </button>
            <button type="button" class="btn btn-primary-light border border-primary text-primary flex items-center"
              disabled>
              <svg class="spinner-grow spinner-grow-sm bg-primary mr-2" viewBox="0 0 24 24"></svg>
              Loading...
            </button>
            <button type="button"
              class="btn btn-secondary-light border border-secondary text-secondary bg-secondary-100 flex items-center"
              disabled>
              <svg class="spinner-grow spinner-grow-sm bg-secondary mr-2" viewBox="0 0 24 24"></svg>
              Loading...
            </button>
            <button type="button"
              class="btn btn-success-light border border-success text-success bg-success-100 flex items-center"
              disabled>
              <svg class="spinner-grow spinner-grow-sm bg-success mr-2" viewBox="0 0 24 24"></svg>
              Loading...
            </button>
            <button type="button" class="btn btn-info-light border border-info text-info bg-info-100 flex items-center"
              disabled>
              <svg class="spinner-grow spinner-grow-sm bg-info mr-2" viewBox="0 0 24 24"></svg>
              Loading...
            </button>
            <button type="button"
              class="btn btn-warning-light border border-warning text-warning bg-warning-100 flex items-center"
              disabled>
              <svg class="spinner-grow spinner-grow-sm bg-warning mr-2" viewBox="0 0 24 24"></svg>
              Loading...
            </button>
            <button type="button"
              class="btn btn-danger-light border border-danger text-danger bg-danger-100 flex items-center" disabled>
              <svg class="spinner-grow spinner-grow-sm bg-danger mr-2" viewBox="0 0 24 24"></svg>
              Loading...
            </button>
            <button type="button" class="btn btn-light border border-light text-gray-900 flex items-center" disabled>
              <svg class="spinner-grow spinner-grow-sm bg-gray-900 mr-2" viewBox="0 0 24 24"></svg>
              Loading...
            </button>
            <button type="button" class="btn btn-dark border border-dark text-white flex items-center" disabled>
              <svg class="spinner-grow spinner-grow-sm bg-white mr-3" viewBox="0 0 24 24"></svg>
              Loading...
            </button>

          </div>
        </div>
      </div>
      <!-- /Buttons -->

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
