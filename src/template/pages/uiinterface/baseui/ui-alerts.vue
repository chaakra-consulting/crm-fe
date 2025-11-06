<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Alerts
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
            <li class="text-dark font-medium" aria-current="page">Alerts</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Default Alerts</h5>
          </div>
          <div class="card-body p-5">
            <div class="space-y-4">
              <div class="bg-primary/10 border border-primary/10 text-[13px] text-primary rounded py-2.5 px-3.5"
                role="alert">
                A simple primary alert—check it out!
              </div>
              <div class="bg-secondary/10 border border-secondary/10 text-[13px] text-secondary rounded py-2.5 px-3.5"
                role="alert">
                A simple primary alert—check it out!
              </div>
              <div class="bg-success/10 border border-success/10 text-[13px] text-success rounded py-2.5 px-3.5"
                role="alert">
                A simple primary alert—check it out!
              </div>
              <div class="bg-danger/10 border border-danger/10 text-[13px] text-danger rounded py-2.5 px-3.5"
                role="alert">
                A simple primary alert—check it out!
              </div>
              <div class="bg-warning/10 border border-v/10 text-[13px] text-warning rounded py-2.5 px-3.5" role="alert">
                A simple primary alert—check it out!
              </div>
              <div class="bg-info/10 border border-info/10 text-[13px] text-info rounded py-2.5 px-3.5" role="alert">
                A simple primary alert—check it out!
              </div>
              <div class="bg-light border border-light text-[13px] text-default rounded py-2.5 px-3.5" role="alert">
                A simple primary alert—check it out!
              </div>
              <div class="bg-dark/10 border border-dark/10 text-[13px] text-dark rounded py-2.5 px-3.5" role="alert">
                A simple primary alert—check it out!
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Links in alerts</h5>
          </div>
          <div class="card-body p-5">
            <div class="space-y-4">
              <div class="bg-primary/10 border border-primary/10 text-[13px] text-primary rounded py-2.5 px-3.5"
                role="alert">
                A simple primary alert with <a href="#" class="font-medium text-primary">an example link</a>. Give it a
                click if you like.
              </div>
              <div class="bg-secondary/10 border border-secondary/10 text-[13px] text-secondary rounded py-2.5 px-3.5"
                role="alert">
                A simple primary alert with <a href="#" class="font-medium text-secondary">an example link</a>. Give it
                a click if you like.
              </div>
              <div class="bg-success/10 border border-success/10 text-[13px] text-success rounded py-2.5 px-3.5"
                role="alert">
                A simple primary alert with <a href="#" class="font-medium text-success">an example link</a>. Give it a
                click if you like.
              </div>
              <div class="bg-danger/10 border border-danger/10 text-[13px] text-danger rounded py-2.5 px-3.5"
                role="alert">
                A simple primary alert with <a href="#" class="font-medium text-danger">an example link</a>. Give it a
                click if you like.
              </div>
              <div class="bg-warning/10 border border-v/10 text-[13px] text-warning rounded py-2.5 px-3.5" role="alert">
                A simple primary alert with <a href="#" class="font-medium text-warning">an example link</a>. Give it a
                click if you like.
              </div>
              <div class="bg-info/10 border border-info/10 text-[13px] text-info rounded py-2.5 px-3.5" role="alert">
                A simple primary alert with <a href="#" class="font-medium text-info">an example link</a>. Give it a
                click if you like.
              </div>
              <div class="bg-light border border-light text-[13px] text-default rounded py-2.5 px-3.5" role="alert">
                A simple primary alert with <a href="#" class="font-medium text-default">an example link</a>. Give it a
                click if you like.
              </div>
              <div class="bg-dark/10 border border-dark/10 text-[13px] text-dark rounded py-2.5 px-3.5" role="alert">
                A simple primary alert with <a href="#" class="font-medium text-dark">an example link</a>. Give it a
                click if you like.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Solid Colored Alerts</h5>
          </div>
          <div class="card-body p-5">
            <div class="gap-4">
              <div id="alert1"
                class="bg-primary border border-primary text-[13px] text-white rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
                role="alert">
                A simple solid primary alert—check it out!
                <button type="button" class="ms-auto text-white/50 text-lg leading-normal" data-dismiss-target="#alert1"
                  aria-label="Close"><i class="fas fa-xmark"></i></button>
              </div>
              <div id="alert2"
                class="bg-secondary border border-secondary/10 text-[13px] text-white rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
                role="alert">
                A simple solid secondary alert—check it out!
                <button type="button" class="ms-auto text-white/50 text-lg leading-normal" data-dismiss-target="#alert2"
                  aria-label="Close"><i class="fas fa-xmark"></i></button>
              </div>
              <div id="alert3"
                class="bg-success border border-success/10 text-[13px] text-white rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
                role="alert">
                A simple solid success alert—check it out!
                <button type="button" class="ms-auto text-white/50 text-lg leading-normal" data-dismiss-target="#alert3"
                  aria-label="Close"><i class="fas fa-xmark"></i></button>
              </div>
              <div id="alert4"
                class="bg-danger border border-danger/10 text-[13px] text-white rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
                role="alert">
                A simple solid danger alert—check it out!
                <button type="button" class="ms-auto text-white/50 text-lg leading-normal" data-dismiss-target="#alert4"
                  aria-label="Close"><i class="fas fa-xmark"></i></button>
              </div>
              <div id="alert5"
                class="bg-warning border border-v/10 text-[13px] text-white rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
                role="alert">
                A simple solid warning alert—check it out!
                <button type="button" class="ms-auto text-white/50 text-lg leading-normal" data-dismiss-target="#alert5"
                  aria-label="Close"><i class="fas fa-xmark"></i></button>
              </div>
              <div id="alert6"
                class="bg-info border border-info/10 text-[13px] text-white rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
                role="alert">
                A simple solid info alert—check it out!
                <button type="button" class="ms-auto text-white/50 text-lg leading-normal" data-dismiss-target="#alert6"
                  aria-label="Close"><i class="fas fa-xmark"></i></button>
              </div>
              <div id="alert7"
                class="bg-light border border-light text-[13px] text-default rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
                role="alert">
                A simple solid light alert—check it out!
                <button type="button" class="ms-auto text-white/50 text-lg leading-normal" data-dismiss-target="#alert7"
                  aria-label="Close"><i class="fas fa-xmark"></i></button>
              </div>
              <div id="alert8"
                class="bg-dark border border-dark/10 text-[13px] text-white rounded py-2.5 px-3.5 flex items-center gap-1"
                role="alert">
                A simple solid dark alert—check it out!
                <button type="button" class="ms-auto text-white/50 text-lg leading-normal" data-dismiss-target="#alert8"
                  aria-label="Close"><i class="fas fa-xmark"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Outline Alerts</h5>
          </div>
          <div class="card-body p-5">
            <div id="alert9"
              class="bg-white border border-primary text-[13px] text-primary rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              A simple solid primary alert—check it out!
              <button type="button" class="ms-auto text-primary/50 text-lg leading-normal" data-dismiss-target="#alert9"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
            <div id="alert10"
              class="bg-white border border-secondary text-[13px] text-secondary rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              A simple outline secondary alert—check it out!
              <button type="button" class="ms-auto text-secondary/50 text-lg leading-normal"
                data-dismiss-target="#alert10" aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
            <div id="alert11"
              class="bg-white border border-success text-[13px] text-success rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              A simple outline success alert—check it out!
              <button type="button" class="ms-auto text-success/50 text-lg leading-normal"
                data-dismiss-target="#alert11" aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
            <div id="alert12"
              class="bg-white border border-danger text-[13px] text-danger rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              A simple outline danger alert—check it out!
              <button type="button" class="ms-auto text-danger/50 text-lg leading-normal" data-dismiss-target="#alert12"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
            <div id="alert13"
              class="bg-white border border-warning text-[13px] text-warning rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              A simple outline danger alert—check it out!
              <button type="button" class="ms-auto text-warning/50 text-lg leading-normal"
                data-dismiss-target="#alert13" aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
            <div id="alert14"
              class="bg-white border border-info text-[13px] text-info rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              A simple outline info alert—check it out!
              <button type="button" class="ms-auto text-info/50 text-lg leading-normal" data-dismiss-target="#alert14"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
            <div id="alert15"
              class="bg-white border border-light text-[13px] text-default rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              A simple outline light alert—check it out!
              <button type="button" class="ms-auto text-default/50 text-lg leading-normal"
                data-dismiss-target="#alert15" aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
            <div id="alert16"
              class="bg-white border border-dark text-[13px] text-dark rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              A simple outline dark alert—check it out!
              <button type="button" class="ms-auto text-dark/50 text-lg leading-normal" data-dismiss-target="#alert16"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Rounded Solid Alerts</h5>
          </div>
          <div class="card-body p-5">
            <div id="alert17"
              class="bg-primary border border-primary text-[13px] text-white rounded-full py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              A simple rounded primary alert—check it out!
              <button type="button" class="ms-auto text-white/50 text-lg leading-none" data-dismiss-target="#alert17"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
            <div id="alert18"
              class="bg-success border border-success text-[13px] text-white rounded-full py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              A simple rounded success alert—check it out!
              <button type="button" class="ms-auto text-white/50 text-lg leading-none" data-dismiss-target="#alert18"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Rounded Outline Alerts</h5>
          </div>
          <div class="card-body p-5">
            <div id="alert19"
              class="bg-white border border-primary text-[13px] text-primary rounded-full py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              A simple outline rounded primary alert—check it out!
              <button type="button" class="ms-auto text-primary/50 text-lg leading-none" data-dismiss-target="#alert19"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
            <div id="alert20"
              class="bg-white border border-success text-[13px] text-success rounded-full py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              A simple outline rounded Success alert—check it out!
              <button type="button" class="ms-auto text-success/50 text-lg leading-none" data-dismiss-target="#alert20"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Alerts With Images</h5>
          </div>
          <div class="card-body p-5">
            <div id="alert21"
              class="bg-primary border border-primary text-[13px] text-white rounded-full py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              <div class="avatar avatar-sm me-3 avatar-rounded">
                <img src="@/assets/img/profiles/avatar-01.jpg" alt="img">
              </div>
              A simple primary alert with image—check it out!
              <button type="button" class="ms-auto text-white/50 text-lg leading-none" data-dismiss-target="#alert21"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
            <div id="alert22"
              class="bg-success border border-success text-[13px] text-white rounded-full py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              <div class="avatar avatar-sm me-3 avatar-rounded">
                <img src="@/assets/img/profiles/avatar-02.jpg" alt="img">
              </div>
              A simple success alert with image—check it out!
              <button type="button" class="ms-auto text-white/50 text-lg leading-none" data-dismiss-target="#alert22"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
            <div id="alert26"
              class="bg-danger border border-danger text-[13px] text-white rounded-full py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              <div class="avatar avatar-sm me-3 avatar-rounded">
                <img src="@/assets/img/profiles/avatar-06.jpg" alt="img">
              </div>
              A simple danger alert with image—check it out!
              <button type="button" class="ms-auto text-white/50 text-lg leading-none" data-dismiss-target="#alert26"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Alerts With Different size Images</h5>
          </div>
          <div class="card-body p-5">
            <div id="alert23"
              class="bg-white border border-primary text-[13px] text-primary rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              <div class="avatar avatar-sm me-3 avatar-rounded">
                <img src="@/assets/img/profiles/avatar-03.jpg" alt="img">
              </div>
              A simple primary alert with image—check it out!
              <button type="button" class="ms-auto text-primary/50 text-lg leading-none" data-dismiss-target="#alert23"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
            <div id="alert24"
              class="bg-white border border-success text-[13px] text-success rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              <div class="avatar avatar-md me-3 avatar-rounded">
                <img src="@/assets/img/profiles/avatar-04.jpg" alt="img">
              </div>
              A simple success alert with image—check it out!
              <button type="button" class="ms-auto text-success/50 text-lg leading-none" data-dismiss-target="#alert24"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
            </div>
            <div id="alert25"
              class="bg-white border border-danger text-[13px] text-danger rounded py-2.5 px-3.5 flex items-center gap-1 mb-4"
              role="alert">
              <div class="avatar avatar-lg me-3 avatar-rounded">
                <img src="@/assets/img/profiles/avatar-05.jpg" alt="img">
              </div>
              A simple danger alert with image—check it out!
              <button type="button" class="ms-auto text-danger/50 text-lg leading-none" data-dismiss-target="#alert25"
                aria-label="Close"><i class="fas fa-xmark"></i></button>
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
