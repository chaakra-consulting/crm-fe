<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Tooltips
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
            <li class="text-dark font-medium" aria-current="page">Tooltips</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 gap-x-6">

        <!-- Tooltip -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Colored Tooltips</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button data-tooltip-target="tooltip-primary" type="button" class="btn btn-primary">Primary
                tooltip</button>
              <div id="tooltip-primary" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-primary rounded-lg shadow-sm opacity-0 tooltip">
                Primary Tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-secondary" type="button" class="btn btn-secondary">Secondary
                tooltip</button>
              <div id="tooltip-secondary" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-secondary rounded-lg shadow-sm opacity-0 tooltip">
                Secondary Tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-warning" type="button" class="btn btn-warning">Warning
                tooltip</button>
              <div id="tooltip-warning" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-warning rounded-lg shadow-sm opacity-0 tooltip">
                Warning Tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-info" type="button" class="btn btn-info">Info tooltip</button>
              <div id="tooltip-info" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-info rounded-lg shadow-sm opacity-0 tooltip">
                Info Tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-success" type="button" class="btn btn-success">Success
                tooltip</button>
              <div id="tooltip-success" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-success rounded-lg shadow-sm opacity-0 tooltip">
                Success Tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-danger" type="button" class="btn btn-danger">Danger tooltip</button>
              <div id="tooltip-danger" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-danger rounded-lg shadow-sm opacity-0 tooltip">
                Danger Tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-light" type="button" class="btn btn-light">Light tooltip</button>
              <div id="tooltip-light" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-gray-900 transition-opacity duration-300 bg-light rounded-lg shadow-sm opacity-0 tooltip">
                Light Tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-dark" type="button" class="btn btn-dark">Light Dark</button>
              <div id="tooltip-dark" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-dark rounded-lg shadow-sm opacity-0 tooltip">
                Dark Tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Tooltip -->

        <!-- Tooltip -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Html Element</h5>
          </div>
          <div class="card-body p-5">
            <button data-tooltip-target="tooltip-primary5" type="button" class="btn btn-primary">Hover me</button>
            <div id="tooltip-primary5" role="tooltip"
              class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
              Popover Title
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>
        <!-- /Tooltip -->

        <!-- Tooltip -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Direction Tooltip</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button data-tooltip-target="tooltip-top" data-tooltip-placement="top" type="button"
                class="btn btn-primary">Hover me</button>
              <div id="tooltip-top" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                Tooltip on top
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button"
                class="btn btn-primary">Hover me</button>
              <div id="tooltip-right" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                Tooltip on right
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button"
                class="btn btn-primary">Hover me</button>
              <div id="tooltip-bottom" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                Tooltip on bottom
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-left" data-tooltip-placement="left" type="button"
                class="btn btn-primary">Hover me</button>
              <div id="tooltip-left" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                Tooltip on left
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Tooltip -->

      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-x-6">

        <!-- Tooltip -->
        <div class="md:col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 w-full">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Html Element</h5>
            </div>
            <div class="card-body p-5">
              <button data-tooltip-target="tooltip-hover" type="button" class="btn btn-primary me-2"> Tooltip with
                HTML</button>
              <div id="tooltip-hover" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                <em>Tooltip</em> <u>with</u> <b>HTML</b>
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-click" data-tooltip-trigger="click" type="button"
                class="btn btn-primary">Click Me</button>
              <div id="tooltip-click" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                <em>Tooltip</em> <u>with</u> <b>HTML</b>
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Tooltip -->

        <!-- Tooltip -->
        <div class="md:col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 w-full">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Disabled Elements</h5>
            </div>
            <div class="card-body p-5">
              <button data-tooltip-target="tooltip-disable" type="button" class="btn btn-primary" disabled>Disabled
                button</button>
              <div id="tooltip-disable" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                Disabled tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Tooltip -->

        <!-- Tooltip -->
        <div class="md:col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 w-full">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Tooltips on Links</h5>
            </div>
            <div class="card-body p-5">
              <p class="text-muted mb-0">Hover on the link to view the <a href="javascript:void(0);"
                  data-tooltip-target="tooltip-link" class="text-primary">Tooltip</a>
              </p>
              <div id="tooltip-link" role="tooltip"
                class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-primary rounded-lg shadow-sm opacity-0 tooltip">
                Link Tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Tooltip -->

        <!-- Tooltip -->
        <div class="md:col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 w-full">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Tooltip For Images</h5>
            </div>
            <div class="card-body p-5">
              <div class="flex items-end flex-wrap gap-2">
                <div class="relative" data-tooltip-target="tooltip-image1">
                  <img src="@/assets/img/profiles/avatar-01.jpg" class="size-8 rounded-full" alt="avatar-01">
                  <span class="bottom-0 end-0 absolute  size-3 bg-success border-2 border-white rounded-full"></span>
                </div>
                <div id="tooltip-image1" role="tooltip"
                  class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                  Marina Kai
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div class="relative" data-tooltip-target="tooltip-image2">
                  <img src="@/assets/img/profiles/avatar-02.jpg" class="size-[45px] rounded-full" alt="avatar-02">
                  <span class="bottom-0 end-0 absolute  size-3.5 bg-success border-2 border-white rounded-full"></span>
                </div>
                <div id="tooltip-image2" role="tooltip"
                  class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                  Alex Carey
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div class="relative" data-tooltip-target="tooltip-image3">
                  <img src="@/assets/img/profiles/avatar-03.jpg" class="size-[58px] rounded-full" alt="avatar-03">
                  <span class="bottom-0 end-0 absolute  size-4 bg-success border-2 border-white rounded-full"></span>
                </div>
                <div id="tooltip-image3" role="tooltip"
                  class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                  Maria John
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Tooltip -->

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
