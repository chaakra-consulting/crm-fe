<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Badges
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
            <li class="text-dark font-medium" aria-current="page">Badges</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Default Badges</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-start flex-wrap gap-2">
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-primary text-white">Primary</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-secondary text-white">Secondary</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-success text-white">Success</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-warning text-white">Warning</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-info text-white">Info</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-light text-dark">Light</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-dark text-white">Dark</span>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Rounded Badges</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-start flex-wrap gap-2">
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-primary text-white">Primary</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-secondary text-white">Secondary</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-success text-white">Success</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-warning text-white">Warning</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-info text-white">Info</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-light text-dark">Light</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-dark text-white">Dark</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Badge Size -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Soft Badges</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-start flex-wrap gap-2">
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-primary-100 text-primary">Primary</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-secondary-100 text-secondary">Secondary</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-success-100 text-success">Success</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-warning-100 text-warning">Warning</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-info-100 text-info">Info</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-light-100 text-default">Light</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-dark/30 text-white">Dark</span>
            </div>
          </div>
        </div>
        <!-- Badge Size -->

        <!-- Badge Size -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Soft Rounded Badges</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-start flex-wrap gap-2">
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-primary-100 text-primary">Primary</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-secondary-100 text-secondary">Secondary</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-success-100 text-success">Success</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-warning-100 text-warning">Warning</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-info-100 text-info">Info</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-light-100 text-default">Light</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-dark/30 text-white">Dark</span>
            </div>
          </div>
        </div>
        <!-- Badge Size -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Solid Colored Alerts -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Outline Badges</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-start flex-wrap gap-2">
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-primary text-primary">Primary</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-secondary text-secondary">Secondary</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-success text-success">Success</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-warning text-warning">Warning</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-info text-info">Info</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-light text-dark">Light</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-dark text-dark">Dark</span>
            </div>
          </div>
        </div>
        <!-- Badge Size -->

        <!-- Badge Size -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Outline Rounded Badges</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-start flex-wrap gap-2">
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-primary text-primary">Primary</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-secondary text-secondary">Secondary</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-success text-success">Success</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-warning text-warning">Warning</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-info text-info">Info</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-light text-dark">Light</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-dark text-dark">Dark</span>
            </div>
          </div>
        </div>
        <!-- Badge Size -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Badge Size -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Badge Sizes</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-center flex-wrap gap-2">
              <span
                class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-primary-100 text-primary">Default</span>
              <span
                class="inline-flex items-center py-0 px-1 rounded text-[10px] leading-[18px] font-medium bg-secondary-100 text-secondary">XS</span>
              <span
                class="inline-flex items-center py-1 px-2 rounded text-[11px] leading-[11px] font-semibold bg-success text-white">SM</span>
              <span
                class="inline-flex items-center py-1 px-3 rounded text-xs leading-normal font-semibold bg-success text-white">MD</span>
              <span
                class="inline-flex items-center py-0 px-2.5 rounded text-sm leading-[30px] font-semibold bg-danger text-white">LG</span>
              <span
                class="inline-flex items-center py-0 px-4 rounded text-base leading-9 font-semibold bg-warning text-white">XL</span>
            </div>
          </div>
        </div>
        <!-- /Badge Size -->

        <!-- Badge Usage -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Badge Usage</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-x-6 gap-y-2">
              <button type="button"
                class="relative btn bg-primary border border-primary text-white text-center py-1.5 px-3 hover:bg-primary-900 hover:text-white text-sm inline-flex items-center justify-center">
                Inbox
                <span
                  class="absolute inline-flex items-center justify-center py-1 px-2 text-xs leading-none font-semibold text-white bg-danger border border-danger rounded-full -top-1 -end-3">99+</span>
              </button>
              <button type="button"
                class="relative btn bg-secondary border border-secondary text-white text-center py-1.5 px-3 hover:bg-secondary-900 hover:text-white text-sm leading-none inline-flex items-center justify-center">
                Profile
                <span
                  class="absolute inline-flex items-center justify-center size-4 text-white bg-success border-1 border-light rounded-full -top-2 -end-2"></span>
              </button>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-01.jpg" class="size-[42px] rounded" alt="img">
                <span
                  class="absolute inline-flex items-center justify-center size-2.5 bg-success border border-light rounded-full -top-1 -end-1"></span>
              </div>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-27.jpg" class="size-[42px] rounded-full" alt="img">
                <span
                  class="absolute inline-flex items-center justify-center size-2.5 bg-success border border-light rounded-full -top-1 -end-1"></span>
              </div>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-27.jpg" class="size-[42px] rounded-full" alt="img">
                <span
                  class="absolute inline-flex items-center justify-center py-1 px-2 text-xs leading-none bg-secondary border border-secondary text-white rounded-full font-medium -top-0.5 -end-4">1000+</span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Badge Usage -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Buttons With Badges -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Buttons With Badges</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-center flex-wrap gap-2">
              <button type="button"
                class="btn inline-flex items-center text-white bg-primary text-center rounded hover:bg-primary-900 hover:text-white">
                Notifications
                <span
                  class="inline-flex items-center justify-center ms-2 text-xs font-semibold text-white bg-secondary rounded py-1 px-2">3</span>
              </button>
              <button type="button"
                class="btn inline-flex items-center text-white bg-success text-center rounded hover:bg-success-900 hover:text-white">
                Notifications
                <span
                  class="inline-flex items-center justify-center ms-2 text-xs font-semibold text-white bg-danger rounded py-1 px-2">15</span>
              </button>
              <button type="button"
                class="btn inline-flex items-center text-white bg-danger text-center rounded hover:bg-danger-900 hover:text-white">
                Notifications
                <span
                  class="inline-flex items-center justify-center ms-2 text-xs font-semibold text-dark bg-white rounded py-1 px-2">24</span>
              </button>
            </div>
          </div>
        </div>
        <!-- /Buttons With Badges -->

        <!-- Buttons With Badges -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Outline Buttons With Badges</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-x-6 gap-y-2">
              <button type="button"
                class="btn inline-flex items-center text-primary bg-white border border-primary text-center rounded hover:bg-primary hover:text-white">
                Notifications
                <span
                  class="inline-flex items-center justify-center ms-2 text-xs font-semibold text-white bg-primary rounded py-1 px-2">3</span>
              </button>
              <button type="button"
                class="btn inline-flex items-center text-success bg-white border border-success text-center rounded hover:bg-success hover:text-white">
                Notifications
                <span
                  class="inline-flex items-center justify-center ms-2 text-xs font-semibold text-white bg-success rounded py-1 px-2">15</span>
              </button>
              <button type="button"
                class="btn inline-flex items-center text-danger bg-white border border-danger text-center rounded hover:bg-danger hover:text-white">
                Notifications
                <span
                  class="inline-flex items-center justify-center ms-2 text-xs font-semibold text-white bg-danger rounded py-1 px-2">24</span>
              </button>
            </div>
          </div>
        </div>
        <!-- /Buttons With Badges -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <!-- Buttons With Badges -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Buttons With Badges</h5>
          </div>
          <div class="card-body p-5">
            <h1 class="mb-4">Example heading <span
                class="py-1 px-2 font-semibold rounded inline-block bg-primary text-white leading-none text-[0.75em]">New</span>
            </h1>
            <h2 class="mb-4">Example heading <span
                class="py-1 px-2 font-semibold rounded inline-block bg-primary text-white leading-none text-[0.75em]">New</span>
            </h2>
            <h3 class="mb-4">Example heading <span
                class="py-1 px-2 font-semibold rounded inline-block bg-primary text-white leading-none text-[0.75em]">New</span>
            </h3>
            <h4 class="mb-4">Example heading <span
                class="py-1 px-2 font-semibold rounded inline-block bg-primary text-white leading-none text-[0.75em]">New</span>
            </h4>
            <h5 class="mb-4">Example heading <span
                class="py-1 px-2 font-semibold rounded inline-block bg-primary text-white leading-none text-[0.75em]">New</span>
            </h5>
            <h6>Example heading <span
                class="py-1 px-2 font-semibold rounded inline-block bg-primary text-white leading-none text-[0.75em]">New</span>
            </h6>
          </div>
        </div>
        <!-- /Buttons With Badges -->

        <!-- Badge with icons -->
        <div>
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Badge with icons</h5>
            </div>
            <div class="card-body p-5">
              <div class="flex flex-wrap gap-2">
                <span
                  class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-secondary text-white">Secondary<i
                    class="ti ti-plus ms-1"></i></span>
                <span
                  class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-success text-white">Success<i
                    class="ti ti-check ms-1"></i></span>
                <span
                  class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-warning text-white">Warning<i
                    class="ti ti-info-circle ms-1"></i></span>
                <span
                  class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-info text-white">Info<i
                    class="ti ti-info-circle ms-1"></i></span>
                <span
                  class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-danger text-white">Danger<i
                    class="ti ti-x ms-1"></i></span>
              </div>
            </div>
          </div>
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Badge with icons</h5>
            </div>
            <div class="card-body p-5">
              <div class="flex flex-wrap gap-2">
                <span
                  class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-secondary text-secondary">Secondary<i
                    class="ti ti-plus ms-1"></i></span>
                <span
                  class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-success text-success">Success<i
                    class="ti ti-check ms-1"></i></span>
                <span
                  class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-warning text-warning">Warning<i
                    class="ti ti-info-circle ms-1"></i></span>
                <span
                  class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-info text-info">Info<i
                    class="ti ti-info-circle ms-1"></i></span>
                <span
                  class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-danger text-danger">Danger<i
                    class="ti ti-x ms-1"></i></span>
              </div>
            </div>
          </div>
        </div>
        <!-- /Badge with icons -->

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