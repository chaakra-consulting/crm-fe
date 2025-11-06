<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Offcanvas
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
            <li class="text-dark font-medium" aria-current="page">Offcanvas</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <div>
          <!-- Offcanvas -->
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h5>Offcanvas</h5>
              <p>You can use a link with the <code>href</code> attribute, or a button with the
                <code>data-drawer-target</code> attribute. In both cases, the <code>data-drawer-show"</code> is
                required. </p>
            </div>
            <div class="card-body p-5">
              <a class="btn btn-primary me-2" data-drawer-target="offcanvasExample" data-drawer-show="offcanvasExample"
                aria-controls="offcanvasExample"> Link with href </a>
              <button class="btn btn-primary" type="button" data-drawer-target="offcanvasExample1"
                data-drawer-show="offcanvasExample1" aria-controls="offcanvasExample1"> Button with data-bs-target
              </button>

              <!-- drawer component -->
              <div id="offcanvasExample"
                class="fixed top-0 left-0 z-[9999] h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-80"
                tabindex="-1">
                <div class="p-4 border-b border-borderColor">
                  <h5 class="inline-flex items-center">Offcanvas</h5>
                  <button type="button" data-drawer-hide="offcanvasExample" aria-controls="offcanvasExample"
                    class="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"><i
                      class="ti ti-x"></i> <span class="sr-only">Close menu</span>
                  </button>
                </div>
                <div class="p-4">
                  <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.</div>
                  <h5 class="mt-4">List</h5>
                  <ul>
                    <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li>Neque porro quisquam est, qui dolorem</li>
                    <li>Quis autem vel eum iure qui in ea</li>
                  </ul>
                  <ul>
                    <li>At vero eos et accusamus et iusto odio dignissimos</li>
                    <li>Et harum quidem rerum facilis</li>
                    <li>Temporibus autem quibusdam et aut officiis</li>
                  </ul>
                </div>
              </div>
              <!-- /drawer component -->

              <!-- drawer component -->
              <div id="offcanvasExample1"
                class="fixed top-0 left-0 z-[9999] h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-80"
                tabindex="-1">
                <div class="p-4 border-b border-borderColor">
                  <h5 class="inline-flex items-center">Offcanvas</h5>
                  <button type="button" data-drawer-hide="offcanvasExample1" aria-controls="offcanvasExample1"
                    class="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"><i
                      class="ti ti-x"></i> <span class="sr-only">Close menu</span>
                  </button>
                </div>
                <div class="p-4">
                  <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.</div>
                  <h5 class="mt-4">List</h5>
                  <ul>
                    <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li>Neque porro quisquam est, qui dolorem</li>
                    <li>Quis autem vel eum iure qui in ea</li>
                  </ul>
                  <ul>
                    <li>At vero eos et accusamus et iusto odio dignissimos</li>
                    <li>Et harum quidem rerum facilis</li>
                    <li>Temporibus autem quibusdam et aut officiis</li>
                  </ul>
                </div>
              </div>
              <!-- /drawer component -->

            </div>
          </div>
          <!-- /Offcanvas -->

          <!-- Offcanvas -->
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h5>Offcanvas Backdrop</h5>
              <p>Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are
                visible. Use the <code>data-drawer-body-scrolling</code> attribute to toggle <code>&lt;body&gt;</code>
                scrolling and <code>data-drawer-backdrop</code> to toggle the backdrop. </p>
            </div>
            <div class="card-body p-5">
              <div class="flex flex-wrap gap-2">
                <button class="btn btn-primary" type="button" data-drawer-target="offcanvasScrolling"
                  data-drawer-show="offcanvasScrolling" data-drawer-backdrop="false" data-drawer-body-scrolling="true"
                  aria-controls="offcanvasScrolling">Enable body scrolling</button>
                <button class="btn btn-primary" type="button" data-drawer-target="offcanvasWithBackdrop"
                  data-drawer-show="offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">Enable backdrop
                  (default)</button>
                <button class="btn btn-primary" type="button" data-drawer-target="offcanvasWithBothOptions"
                  data-drawer-show="offcanvasWithBothOptions" data-drawer-body-scrolling="true"
                  aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>
              </div>

              <!-- drawer component -->
              <div id="offcanvasScrolling"
                class="fixed top-0 left-0 z-[9999] h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-80"
                tabindex="-1">
                <div class="p-4 border-b border-borderColor">
                  <h5 class="inline-flex items-center">Colored with scrolling</h5>
                  <button type="button" data-drawer-hide="offcanvasScrolling" aria-controls="offcanvasScrolling"
                    class="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"><i
                      class="ti ti-x"></i> <span class="sr-only">Close menu</span>
                  </button>
                </div>
                <div class="p-4">
                  <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.</div>
                  <h5 class="mt-4">List</h5>
                  <ul>
                    <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li>Neque porro quisquam est, qui dolorem</li>
                    <li>Quis autem vel eum iure qui in ea</li>
                  </ul>
                  <ul>
                    <li>At vero eos et accusamus et iusto odio dignissimos</li>
                    <li>Et harum quidem rerum facilis</li>
                    <li>Temporibus autem quibusdam et aut officiis</li>
                  </ul>
                </div>
              </div>
              <!-- /drawer component -->

              <!-- drawer component -->
              <div id="offcanvasWithBackdrop"
                class="fixed top-0 left-0 z-[9999] h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-80"
                tabindex="-1">
                <div class="p-4 border-b border-borderColor">
                  <h5 class="inline-flex items-center">Offcanvas with backdrop</h5>
                  <button type="button" data-drawer-hide="offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"
                    class="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"><i
                      class="ti ti-x"></i> <span class="sr-only">Close menu</span>
                  </button>
                </div>
                <div class="p-4">
                  <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.</div>
                  <h5 class="mt-4">List</h5>
                  <ul>
                    <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li>Neque porro quisquam est, qui dolorem</li>
                    <li>Quis autem vel eum iure qui in ea</li>
                  </ul>
                  <ul>
                    <li>At vero eos et accusamus et iusto odio dignissimos</li>
                    <li>Et harum quidem rerum facilis</li>
                    <li>Temporibus autem quibusdam et aut officiis</li>
                  </ul>
                </div>
              </div>
              <!-- /drawer component -->

              <!-- drawer component -->
              <div id="offcanvasWithBothOptions"
                class="fixed top-0 left-0 z-[9999] h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-80"
                tabindex="-1">
                <div class="p-4 border-b border-borderColor">
                  <h5 class="inline-flex items-center">Backdroped with scrolling</h5>
                  <button type="button" data-drawer-hide="offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                    class="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"><i
                      class="ti ti-x"></i> <span class="sr-only">Close menu</span>
                  </button>
                </div>
                <div class="p-4">
                  <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.</div>
                  <h5 class="mt-4">List</h5>
                  <ul>
                    <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li>Neque porro quisquam est, qui dolorem</li>
                    <li>Quis autem vel eum iure qui in ea</li>
                  </ul>
                  <ul>
                    <li>At vero eos et accusamus et iusto odio dignissimos</li>
                    <li>Et harum quidem rerum facilis</li>
                    <li>Temporibus autem quibusdam et aut officiis</li>
                  </ul>
                </div>
              </div>
              <!-- /drawer component -->

            </div>
          </div>
          <!-- /Offcanvas -->

        </div>

        <!-- Offcanvas -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Offcanvas Placement</h5>
            <ul>
              <li><code>data-drawer-placement="left"</code> places offcanvas on the left of the viewport
                (shown above)</li>
              <li><code>data-drawer-placement="right"</code> places offcanvas on the right of the viewport</li>
              <li><code>data-drawer-placement="top"</code> places offcanvas on the top of the viewport</li>
              <li><code>data-drawer-placement="left"</code> places offcanvas on the bottom of the viewport
              </li>
            </ul>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button class="btn btn-primary" type="button" data-drawer-target="offcanvasTop"
                data-drawer-show="offcanvasTop" aria-controls="offcanvasTop" data-drawer-placement="top">Toggle Top
                offcanvas</button>
              <button class="btn btn-primary" type="button" data-drawer-target="offcanvasRight"
                data-drawer-show="offcanvasRight" aria-controls="offcanvasRight" data-drawer-placement="right">Toggle
                Right offcanvas</button>
              <button class="btn btn-primary" type="button" data-drawer-target="offcanvasBottom"
                data-drawer-show="offcanvasBottom" aria-controls="offcanvasBottom" data-drawer-placement="bottom">Toggle
                Bottom offcanvas</button>
              <button class="btn btn-primary" type="button" data-drawer-target="offcanvasLeft"
                data-drawer-show="offcanvasLeft" aria-controls="offcanvasLeft" data-drawer-placement="left">Toggle Left
                offcanvas</button>
            </div>

            <!-- drawer component -->
            <div id="offcanvasTop"
              class="fixed top-0 left-0 right-0 z-[9999] w-full transition-transform -translate-y-full bg-white"
              tabindex="-1">
              <div class="p-4 border-b border-borderColor">
                <h5 class="inline-flex items-center">Offcanvas Top</h5>
                <button type="button" data-drawer-hide="offcanvasTop" aria-controls="offcanvasTop"
                  class="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"><i
                    class="ti ti-x"></i> <span class="sr-only">Close menu</span>
                </button>
              </div>
              <div class="p-4">
                <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                  images, lists, etc.</div>
                <h5 class="mt-4">List</h5>
                <ul>
                  <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li>Neque porro quisquam est, qui dolorem</li>
                  <li>Quis autem vel eum iure qui in ea</li>
                </ul>
                <ul>
                  <li>At vero eos et accusamus et iusto odio dignissimos</li>
                  <li>Et harum quidem rerum facilis</li>
                  <li>Temporibus autem quibusdam et aut officiis</li>
                </ul>
              </div>
            </div>
            <!-- /drawer component -->

            <!-- drawer component -->
            <div id="offcanvasRight"
              class="fixed top-0 right-0 z-[9999] h-screen overflow-y-auto transition-transform translate-x-full bg-white w-80"
              tabindex="-1">
              <div class="p-4 border-b border-borderColor">
                <h5 class="inline-flex items-center">Offcanvas</h5>
                <button type="button" data-drawer-hide="offcanvasRight" aria-controls="offcanvasRight"
                  class="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"><i
                    class="ti ti-x"></i> <span class="sr-only">Close menu</span>
                </button>
              </div>
              <div class="p-4">
                <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                  images, lists, etc.</div>
                <h5 class="mt-4">List</h5>
                <ul>
                  <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li>Neque porro quisquam est, qui dolorem</li>
                  <li>Quis autem vel eum iure qui in ea</li>
                </ul>
                <ul>
                  <li>At vero eos et accusamus et iusto odio dignissimos</li>
                  <li>Et harum quidem rerum facilis</li>
                  <li>Temporibus autem quibusdam et aut officiis</li>
                </ul>
              </div>
            </div>
            <!-- /drawer component -->

            <!-- drawer component -->
            <div id="offcanvasBottom"
              class="fixed bottom-0 left-0 right-0 z-[9999] w-full p-4 overflow-y-auto transition-transform bg-white translate-y-full"
              tabindex="-1">
              <div class="p-4 border-b border-borderColor">
                <h5 class="inline-flex items-center">Offcanvas</h5>
                <button type="button" data-drawer-hide="offcanvasBottom" aria-controls="offcanvasBottom"
                  class="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"><i
                    class="ti ti-x"></i> <span class="sr-only">Close menu</span>
                </button>
              </div>
              <div class="p-4">
                <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                  images, lists, etc.</div>
                <h5 class="mt-4">List</h5>
                <ul>
                  <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li>Neque porro quisquam est, qui dolorem</li>
                  <li>Quis autem vel eum iure qui in ea</li>
                </ul>
                <ul>
                  <li>At vero eos et accusamus et iusto odio dignissimos</li>
                  <li>Et harum quidem rerum facilis</li>
                  <li>Temporibus autem quibusdam et aut officiis</li>
                </ul>
              </div>
            </div>
            <!-- /drawer component -->

            <!-- drawer component -->
            <div id="offcanvasLeft"
              class="fixed top-0 left-0 z-[9999] h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80"
              tabindex="-1">
              <div class="p-4 border-b border-borderColor">
                <h5 class="inline-flex items-center">Offcanvas</h5>
                <button type="button" data-drawer-hide="offcanvasLeft" aria-controls="offcanvasLeft"
                  class="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"><i
                    class="ti ti-x"></i> <span class="sr-only">Close menu</span>
                </button>
              </div>
              <div class="p-4">
                <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                  images, lists, etc.</div>
                <h5 class="mt-4">List</h5>
                <ul>
                  <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li>Neque porro quisquam est, qui dolorem</li>
                  <li>Quis autem vel eum iure qui in ea</li>
                </ul>
                <ul>
                  <li>At vero eos et accusamus et iusto odio dignissimos</li>
                  <li>Et harum quidem rerum facilis</li>
                  <li>Temporibus autem quibusdam et aut officiis</li>
                </ul>
              </div>
            </div>
            <!-- /drawer component -->

          </div>
        </div>
        <!-- /Offcanvas -->

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
