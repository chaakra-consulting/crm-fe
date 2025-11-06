<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Popovers
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
            <li class="text-dark font-medium" aria-current="page">Popovers</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Popover -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Default Popovers</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">

              <button data-popover-target="popover-right" data-popover-placement="right" type="button"
                class="btn btn-outline-primary">Popover Right</button>
              <div data-popover id="popover-right" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-gray-900">Popover Top</h5>
                </div>
                <div class="px-3 py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="popover-default" data-popover-placement="top" type="button"
                class="btn btn-outline-primary">Popover Top</button>
              <div data-popover id="popover-default" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-gray-900">Popover Top</h5>
                </div>
                <div class="px-3 py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="popover-bottom" data-popover-placement="bottom" type="button"
                class="btn btn-outline-primary">Popover Bottom</button>
              <div data-popover id="popover-bottom" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-gray-900">Popover Bottom</h5>
                </div>
                <div class="px-3 py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="popover-left" data-popover-placement="left" type="button"
                class="btn btn-outline-primary">Popover Left</button>
              <div data-popover id="popover-left" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-gray-900">Popover Top</h5>
                </div>
                <div class="px-3 py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Popover -->

        <!-- Popover -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Basic Popovers</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button data-popover-target="popover-click" data-popover-trigger="click" data-popover-placement="top"
                type="button" class="btn btn-primary">Click to toggle popover</button>
              <div data-popover id="popover-click" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-gray-900">Popover title</h5>
                </div>
                <div class="px-3 py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="popover-hover" data-popover-trigger="hover" data-popover-placement="right"
                type="button" class="btn btn-primary">On Hover Tooltip</button>
              <div data-popover id="popover-hover" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-gray-900">Popover title</h5>
                </div>
                <div class="px-3 py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Popover -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Popover -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Colored Headers</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button data-popover-target="header-primary" data-popover-trigger="click" data-popover-placement="top"
                type="button" class="btn btn-outline-primary">Header Primary</button>
              <div data-popover id="header-primary" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-primary border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-white">Color Header</h5>
                </div>
                <div class="px-3 py-2">
                  <p>Popover with primary header</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="header-secondary" data-popover-trigger="hover" data-popover-placement="right"
                type="button" class="btn btn-outline-secondary">Header Secondary</button>
              <div data-popover id="header-secondary" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-secondary border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-white">Color Header</h5>
                </div>
                <div class="px-3 py-2">
                  <p>Popover with secondary header</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="header-info" data-popover-placement="bottom" type="button"
                class="btn btn-outline-info">Header Info</button>
              <div data-popover id="header-info" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-info border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-white">Color Header</h5>
                </div>
                <div class="px-3 py-2">
                  <p>Popover with info header</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="header-warning" data-popover-placement="left" type="button"
                class="btn btn-outline-warning">Header Warning</button>
              <div data-popover id="header-warning" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-warning border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-white">Color Header</h5>
                </div>
                <div class="px-3 py-2">
                  <p>Popover with warning header</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="header-success" data-popover-placement="left" type="button"
                class="btn btn-outline-success">Header Success</button>
              <div data-popover id="header-success" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-success border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-white">Color Header</h5>
                </div>
                <div class="px-3 py-2">
                  <p>Popover with success header</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="header-danger" data-popover-placement="left" type="button"
                class="btn btn-outline-danger">Header Danger</button>
              <div data-popover id="header-danger" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-danger border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-white">Color Header</h5>
                </div>
                <div class="px-3 py-2">
                  <p>Popover with danger header</p>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Popover -->

        <!-- Popover -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Colored Popovers</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button data-popover-target="popover-primary" data-popover-placement="top" type="button"
                class="btn btn-primary">Primary</button>
              <div data-popover id="popover-primary" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-primary border border-primary rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-primary border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-white">Color Background</h5>
                </div>
                <div class="px-3 py-2">
                  <p>Popover with primary background.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="popover-secondary" data-popover-placement="top" type="button"
                class="btn btn-secondary">Secondary</button>
              <div data-popover id="popover-secondary" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-secondary border border-secondary rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-secondary border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-white">Color Background</h5>
                </div>
                <div class="px-3 py-2">
                  <p>Popover with secondary background.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="popover-info" data-popover-placement="top" type="button"
                class="btn btn-info">Info</button>
              <div data-popover id="popover-info" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-info border border-info rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-info border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-white">Color Background</h5>
                </div>
                <div class="px-3 py-2">
                  <p>Popover with info background.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="popover-warning" data-popover-placement="top" type="button"
                class="btn btn-warning">Warning</button>
              <div data-popover id="popover-warning" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-warning border border-warning rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-warning border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-white">Color Background</h5>
                </div>
                <div class="px-3 py-2">
                  <p>Popover with warning background.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="popover-success" data-popover-placement="top" type="button"
                class="btn btn-success">Success</button>
              <div data-popover id="popover-success" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-success border border-success rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-success border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-white">Color Background</h5>
                </div>
                <div class="px-3 py-2">
                  <p>Popover with success background.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="popover-danger" data-popover-placement="top" type="button"
                class="btn btn-danger">Danger</button>
              <div data-popover id="popover-danger" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-danger border border-danger rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-danger border-b border-gray-200 rounded-t-lg ">
                  <h5 class="font-semibold text-white">Color Background</h5>
                </div>
                <div class="px-3 py-2">
                  <p>Popover with danger background.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Popover -->

        <!-- Popover -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Light Colored Popovers</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button data-popover-target="light-primary" data-popover-placement="top" type="button"
                class="btn btn-soft-primary">Primary</button>
              <div data-popover id="light-primary" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-primary transition-opacity duration-300 bg-white border border-primary/10 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-primary/10 border-b border-primary/10 rounded-t-lg ">
                  <h5 class="font-semibold text-primary">Light Background</h5>
                </div>
                <div class="px-3 py-2 bg-primary/10">
                  <p>Popover with light primary background.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="light-secondary" data-popover-placement="top" type="button"
                class="btn btn-soft-secondary">Secondary</button>
              <div data-popover id="light-secondary" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-secondary transition-opacity duration-300 bg-white border border-secondary/10 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-secondary/10 border-b border-secondary/10 rounded-t-lg ">
                  <h5 class="font-semibold text-secondary">Light Background</h5>
                </div>
                <div class="px-3 py-2 bg-secondary/10">
                  <p>Popover with light primary background.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="light-info" data-popover-placement="top" type="button"
                class="btn btn-soft-info">Info</button>
              <div data-popover id="light-info" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-info transition-opacity duration-300 bg-white border border-info/10 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-info/10 border-b border-info/10 rounded-t-lg ">
                  <h5 class="font-semibold text-info">Light Background</h5>
                </div>
                <div class="px-3 py-2 bg-info/10">
                  <p>Popover with light info background.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="light-warning" data-popover-placement="top" type="button"
                class="btn btn-soft-warning">Warning</button>
              <div data-popover id="light-warning" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-warning transition-opacity duration-300 bg-white border border-warning/10 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-warning/10 border-b border-warning/10 rounded-t-lg ">
                  <h5 class="font-semibold text-warning">Light Background</h5>
                </div>
                <div class="px-3 py-2 bg-warning/10">
                  <p>Popover with light warning background.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="light-success" data-popover-placement="top" type="button"
                class="btn btn-soft-success">Success</button>
              <div data-popover id="light-success" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-success transition-opacity duration-300 bg-white border border-success/10 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-success/10 border-b border-success/10 rounded-t-lg ">
                  <h5 class="font-semibold text-success">Light Background</h5>
                </div>
                <div class="px-3 py-2 bg-success/10">
                  <p>Popover with light success background.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <button data-popover-target="light-danger" data-popover-placement="top" type="button"
                class="btn btn-soft-danger">Danger</button>
              <div data-popover id="light-danger" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-danger transition-opacity duration-300 bg-white border border-danger/10 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2 bg-danger/10 border-b border-danger/10 rounded-t-lg ">
                  <h5 class="font-semibold text-danger">Light Background</h5>
                </div>
                <div class="px-3 py-2 bg-danger/10">
                  <p>Popover with danger danger background.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Popover -->

        <!-- Popover -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Disabled Popover</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button data-popover-target="popover-disable" data-popover-placement="right" type="button"
                class="btn btn-primary" disabled>Disabled Button</button>
              <div data-popover id="popover-disable" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-200 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2">
                  <p>Disabled Popover</p>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Popover -->

        <!-- Popover -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Icon Popovers</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <a data-popover-target="popover-icon" data-popover-placement="top" class="text-primary"><i
                  class="ti ti-info-circle text-primary text-xl"></i></a>
              <div data-popover id="popover-icon" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-primary border border-primary rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2">
                  <p>This popover is used to provide details about this icon.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <a data-popover-target="popover-icon1" data-popover-placement="top" class="text-secondary"><i
                  class="ti ti-question-mark text-secondary text-xl"></i></a>
              <div data-popover id="popover-icon1" role="tooltip"
                class="absolute z-[2000] invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-secondary border border-secondary rounded-lg shadow-sm opacity-0">
                <div class="px-3 py-2">
                  <p>This popover is used to provide information about this icon.</p>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Popover -->

      </div>

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->

</template>
<script>
import { onMounted, onUnmounted, ref } from "vue";
import { Popover } from "bootstrap";

export default {
  setup() {
    // Refs for DOM elements
    const popoverBtn = ref(null);
    const dismissiblePopover = ref(null);
    const hoverPopover = ref(null);
    const popoverTop = ref(null);
    const popoverBottom = ref(null);
    const popoverRight = ref(null);
    const popoverLeft = ref(null);
    const primaryPopover = ref(null);
    const successPopover = ref(null);
    const dangerPopover = ref(null);
    const infoPopover = ref(null);
    const darkPopover = ref(null);
    const secondaryPopover = ref(null);
    const disabledPopover = ref(null);

    // Store active popovers for disposal
    const popovers = [];

    onMounted(() => {
      const refs = [
        popoverBtn,
        dismissiblePopover,
        hoverPopover,
        popoverTop,
        popoverBottom,
        popoverRight,
        popoverLeft,
        primaryPopover,
        successPopover,
        dangerPopover,
        infoPopover,
        darkPopover,
        secondaryPopover,
        disabledPopover,
      ];

      refs.forEach((popoverRef) => {
        if (popoverRef.value) {
          const popoverInstance = new Popover(popoverRef.value);
          popovers.push(popoverInstance);
        }
      });
    });

    // Dispose popovers when component is unmounted
    onUnmounted(() => {
      popovers.forEach((popover) => popover.dispose());
    });

    return {
      popoverBtn,
      dismissiblePopover,
      hoverPopover,
      popoverTop,
      popoverBottom,
      popoverRight,
      popoverLeft,
      primaryPopover,
      successPopover,
      dangerPopover,
      infoPopover,
      darkPopover,
      secondaryPopover,
      disabledPopover,
    };
  },
};
</script>
