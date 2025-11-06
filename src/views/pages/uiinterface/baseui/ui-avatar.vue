<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Avatars
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
            <li class="text-dark font-medium" aria-current="page">Avatars</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Avatars -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatars</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-center flex-wrap gap-2">
              <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-xl rounded-full" alt="img">
              <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-xl rounded-none" alt="img">
              <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-xl rounded" alt="img">
              <span
                class="avatar-xl rounded-full bg-primary text-white text-xl leading-normal inline-flex items-center justify-center">SR</span>
              <span
                class="avatar-xl rounded-none bg-success text-xl text-white leading-normal inline-flex items-center justify-center">SR</span>
              <span
                class="avatar-xl rounded bg-danger text-white text-xl leading-normal inline-flex items-center justify-center">SR</span>
            </div>
          </div>
        </div>
        <!-- /Avatars -->

        <!-- Avatar Sizes -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar Sizes</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-end flex-wrap gap-2">
              <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-xs rounded" alt="img">
              <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-sm rounded" alt="img">
              <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-md rounded" alt="img">
              <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-lg rounded" alt="img">
              <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-xl rounded" alt="img">
              <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-xxl rounded" alt="img">
              <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-xxxl rounded" alt="img">
            </div>
          </div>
        </div>
        <!-- /Avatar Sizes -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar With Badge</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-end flex-wrap gap-2">
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-xs rounded-full" alt="img">
                <span class="bottom-0 end-0 absolute  size-2 bg-success border-2 border-white rounded-full"></span>
              </div>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-sm rounded-full" alt="img">
                <span class="bottom-0 end-0 absolute  size-2 bg-success border-2 border-white rounded-full"></span>
              </div>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-md rounded-full" alt="img">
                <span class="bottom-0 end-0 absolute  size-3 bg-success border-2 border-white rounded-full"></span>
              </div>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-lg rounded-full" alt="img">
                <span class="bottom-0 end-0 absolute  size-3.5 bg-success border-2 border-white rounded-full"></span>
              </div>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-xl rounded-full" alt="img">
                <span class="bottom-0 end-0 absolute  size-4 bg-success border-2 border-white rounded-full"></span>
              </div>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-xxl rounded-full" alt="img">
                <span class="bottom-0 end-1 absolute  size-4 bg-success border-2 border-white rounded-full"></span>
              </div>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-02.jpg" class="size-24 rounded-full" alt="img">
                <span class="bottom-0 end-1 absolute  size-[17px] bg-success border-2 border-white rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar With Badge</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-end flex-wrap gap-2">
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-xs rounded-full" alt="img">
                <span
                  class="-top-1/4 -end-2 absolute  size-4 text-white bg-primary inline-flex items-center justify-center text-[8px] rounded-full">2</span>
              </div>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-sm rounded-full" alt="img">
                <span
                  class="-top-1/4 -end-2 absolute  size-[18px] text-white bg-secondary inline-flex items-center justify-center text-[8px] rounded-full">5</span>
              </div>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-md rounded-full" alt="img">
                <span
                  class="-top-[6%] -end-[13%] absolute  size-5 text-white bg-warning inline-flex items-center justify-center text-[8px] rounded-full">1</span>
              </div>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-lg rounded-full" alt="img">
                <span
                  class="-top-[15%] -end-[0.25%] absolute  size-6 text-white bg-info inline-flex items-center justify-center text-[8px] rounded-full">7</span>
              </div>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-xl rounded-full" alt="img">
                <span
                  class="-top-[8%] -end-[0.2%] absolute  size-6 text-white bg-success inline-flex items-center justify-center text-[8px] rounded-full">3</span>
              </div>
              <div class="relative">
                <img src="@/assets/img/profiles/avatar-02.jpg" class="avatar-xxl rounded-full" alt="img">
                <span
                  class="-top-[4%] end-0 absolute  size-6 text-white bg-danger  inline-flex items-center justify-center text-[8px] rounded-full">9</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar With Badge</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-start flex-wrap gap-2">
              <span
                class="avatar rounded-full bg-primary text-sm leading-normal text-white inline-flex items-center justify-center">SR</span>
              <span
                class="avatar rounded-full bg-danger text-sm leading-normal text-white inline-flex items-center justify-center">SR</span>
              <span
                class="avatar rounded-full bg-success text-sm leading-normal text-white inline-flex items-center justify-center">SR</span>
              <span
                class="avatar rounded-full bg-warning text-sm leading-normal text-whitel inline-flex items-center justify-center">SR</span>
              <span
                class="avatar rounded-full bg-info text-sm leading-normal text-white inline-flex items-center justify-center">SR</span>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar With Badge</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex items-start flex-wrap gap-2">
              <span
                class="avatar rounded-full bg-secondary-300 text-sm leading-normal text-white inline-flex items-center justify-center">SR</span>
              <span
                class="avatar rounded-full bg-danger-300 text-sm leading-normal text-white inline-flex items-center justify-center">SR</span>
              <span
                class="avatar rounded-full bg-success-300 text-sm leading-normal text-white inline-flex items-center justify-center">SR</span>
              <span
                class="avatar rounded-full bg-warning-300 text-sm leading-normal text-white inline-flex items-center justify-center">SR</span>
              <span
                class="avatar rounded-full bg-info-300 text-sm leading-normal text-white inline-flex items-center justify-center">SR</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar With Badge</h5>
          </div>
          <div class="card-body p-5">
            <div class="avatar-list-stacked avatar-group-lg mb-6">
              <span class="avatar">
                <img src="@/assets/img/profiles/avatar-04.jpg" alt="img">
              </span>
              <span class="avatar">
                <img src="@/assets/img/profiles/avatar-04.jpg" alt="img">
              </span>
              <span class="avatar">
                <img src="@/assets/img/profiles/avatar-04.jpg" alt="img">
              </span>
              <a class="avatar bg-primary text-fixed-white" href="javascript:void(0);">
                +8
              </a>
            </div>
            <div class="avatar-list-stacked mb-6">
              <span class="avatar">
                <img src="@/assets/img/profiles/avatar-04.jpg" alt="img">
              </span>
              <span class="avatar">
                <img src="@/assets/img/profiles/avatar-04.jpg" alt="img">
              </span>
              <span class="avatar">
                <img src="@/assets/img/profiles/avatar-04.jpg" alt="img">
              </span>
              <a class="avatar bg-primary text-fixed-white" href="javascript:void(0);">
                +8
              </a>
            </div>
            <div class="avatar-list-stacked avatar-group-sm">
              <span class="avatar">
                <img src="@/assets/img/profiles/avatar-04.jpg" alt="img">
              </span>
              <span class="avatar">
                <img src="@/assets/img/profiles/avatar-04.jpg" alt="img">
              </span>
              <span class="avatar">
                <img src="@/assets/img/profiles/avatar-04.jpg" alt="img">
              </span>
              <a class="avatar bg-primary text-fixed-white" href="javascript:void(0);">
                +8
              </a>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar With Badge</h5>
          </div>
          <div class="card-body p-5">
            <div class="avatar-list-stacked avatar-group-lg mb-6">
              <span class="avatar avatar-rounded">
                <img class="border border-white" src="@/assets/img/profiles/avatar-05.jpg" alt="img">
              </span>
              <span class="avatar avatar-rounded">
                <img class="border border-white" src="@/assets/img/profiles/avatar-05.jpg" alt="img">
              </span>
              <span class="avatar avatar-rounded">
                <img src="@/assets/img/profiles/avatar-05.jpg" alt="img">
              </span>
              <a class="avatar bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
                +8
              </a>
            </div>
            <div class="avatar-list-stacked mb-6">
              <span class="avatar avatar-rounded">
                <img class="border border-white" src="@/assets/img/profiles/avatar-05.jpg" alt="img">
              </span>
              <span class="avatar avatar-rounded">
                <img class="border border-white" src="@/assets/img/profiles/avatar-05.jpg" alt="img">
              </span>
              <span class="avatar avatar-rounded">
                <img src="@/assets/img/profiles/avatar-05.jpg" alt="img">
              </span>
              <a class="avatar bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
                +8
              </a>
            </div>
            <div class="avatar-list-stacked avatar-group-sm">
              <span class="avatar avatar-rounded">
                <img class="border border-white" src="@/assets/img/profiles/avatar-05.jpg" alt="img">
              </span>
              <span class="avatar avatar-rounded">
                <img class="border border-white" src="@/assets/img/profiles/avatar-05.jpg" alt="img">
              </span>
              <span class="avatar avatar-rounded">
                <img src="@/assets/img/profiles/avatar-05.jpg" alt="img">
              </span>
              <a class="avatar bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
                +8
              </a>
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
