<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Pagination
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
            <li class="text-dark font-medium" aria-current="page">Pagination</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid md:grid-cols-2 gap-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-borderColor border-b p-4">
            <h5 class="card-title">Basic</h5>
          </div>
          <div class="card-body p-4">

            <nav aria-label="Page navigation example">
              <ul class="inline-flex -space-x-px text-sm mb-4">
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page"
                    class="flex items-center justify-center px-3 h-8 text-primary-600 border border-gray-300  hover:text-primary-700 hover:bg-primary-200 bg-primary-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Page navigation example">
              <ul class="inline-flex -space-x-px text-base h-10">
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page"
                    class="flex items-center justify-center px-4 h-10 text-primary-600 border border-gray-300 bg-primary-200 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-borderColor border-b p-4">
            <h5 class="card-title">Pagination Style 1</h5>
          </div>
          <div class="card-body p-4">

            <div class="grid w-full grid-cols-1">



              <nav aria-label="Page navigation example">
                <ul class="list-style-none flex flex-wrap gap-[5px]">
                  <li>
                    <a
                      class="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">Previous</a>
                  </li>
                  <li>
                    <a class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!">1</a>
                  </li>
                  <li aria-current="page">
                    <a class="relative block rounded bg-primary text-white px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300"
                      href="#!">2
                      <span
                        class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">(current)</span>
                    </a>
                  </li>
                  <li>
                    <a class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!">3</a>
                  </li>
                  <li>
                    <a class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!">Next</a>
                  </li>
                </ul>
              </nav>



            </div>

          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-borderColor border-b p-4">
            <h5 class="card-title">Sizing</h5>
          </div>
          <div class="card-body p-4">

            <div class="grid w-full grid-cols-1">


              <nav aria-label="Page navigation example">
                <!-- Unordered list container with flex display and no list style -->
                <ul class="list-style-none flex flex-wrap gap-[5px]">
                  <!-- Previous button (disabled) -->
                  <li>
                    <a
                      class="relative block px-5 py-3 text-lg transition-all duration-300 bg-transparent rounded pointer-events-none text-neutral-500 dark:text-neutral-400">Previous</a>
                  </li>
                  <!-- Page number 1 -->
                  <li>
                    <a class="relative block px-5 py-3 text-lg transition-all duration-300 bg-transparent rounded text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!">1</a>
                  </li>
                  <!-- Page number 2 (current) -->
                  <li aria-current="page">
                    <a class="relative block px-5 py-3 text-lg font-medium text-white transition-all duration-300 rounded bg-primary"
                      href="#!">2
                      <!-- Visually hidden text indicating current page -->
                      <span
                        class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">(current)</span>
                    </a>
                  </li>
                  <!-- Page number 3 -->
                  <li>
                    <a class="relative block px-5 py-3 text-lg transition-all duration-300 bg-transparent rounded text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!">3</a>
                  </li>
                  <!-- Next button -->
                  <li>
                    <a class="relative block px-5 py-3 text-lg transition-all duration-300 bg-transparent rounded text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!">Next</a>
                  </li>
                </ul>
              </nav>

              <!-- Second navigation component with smaller text and padding -->
              <nav aria-label="Page navigation example">
                <!-- Unordered list for the navigation items -->
                <ul class="list-style-none flex flex-wrap p-[13px] gap-[5px]">
                  <!-- Previous page item with disabled pointer events -->
                  <li>
                    <a
                      class="relative block px-2 py-1 text-sm transition-all duration-300 bg-transparent rounded pointer-events-none text-neutral-500 dark:text-neutral-400">Previous</a>
                  </li>
                  <!-- Page number 1 item -->
                  <li>
                    <a class="relative block px-2 py-1 text-sm transition-all duration-300 bg-transparent rounded text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!">1</a>
                  </li>
                  <!-- Current page (2) item with highlighted background and "current" label -->
                  <li aria-current="page">
                    <a class="relative block px-2 py-1 text-sm font-medium text-white transition-all duration-300 rounded bg-primary"
                      href="#!">2
                      <!-- Hidden "current" label for screen readers -->
                      <span
                        class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">(current)</span>
                    </a>
                  </li>
                  <!-- Page number 3 item -->
                  <li>
                    <a class="relative block px-2 py-1 text-sm transition-all duration-300 bg-transparent rounded text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!">3</a>
                  </li>
                  <!-- Next page item -->
                  <li>
                    <a class="relative block px-2 py-1 text-sm transition-all duration-300 bg-transparent rounded text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!">Next</a>
                  </li>
                </ul>
              </nav>



            </div>

          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-borderColor border-b p-4">
            <h5 class="card-title">Pagination Style 2</h5>
          </div>
          <div class="card-body p-4">

            <div class="grid w-full grid-cols-1">


              <nav aria-label="Page navigation example">
                <ul class="list-style-none flex flex-wrap gap-[5px]">
                  <li>
                    <a
                      class="pointer-events-none relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">Previous</a>
                  </li>
                  <li>
                    <a class="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!">1</a>
                  </li>
                  <li aria-current="page">
                    <a class="relative block rounded-full bg-primary text-white px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300"
                      href="#!">2
                      <span
                        class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">(current)</span>
                    </a>
                  </li>
                  <li>
                    <a class="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!">3</a>
                  </li>
                  <li>
                    <a class="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!">Next</a>
                  </li>
                </ul>
              </nav>


            </div>

          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-borderColor border-b p-4">
            <h5 class="card-title">Previous and Next</h5>
          </div>
          <div class="card-body p-4">
            <div class="grid w-full grid-cols-1">

              <div class="flex mb-3">
                <!-- Previous Button -->
                <a href="#"
                  class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Previous
                </a>

                <!-- Next Button -->
                <a href="#"
                  class="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Next
                </a>
              </div>

              <div class="flex">
                <!-- Previous Button -->
                <a href="#"
                  class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Previous
                </a>

                <!-- Next Button -->
                <a href="#"
                  class="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Next
                </a>
              </div>

            </div>

          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-borderColor border-b p-4">
            <h5 class="card-title">Pagination With Icons</h5>
          </div>
          <div class="card-body p-4">
            <nav aria-label="Page navigation example">
              <ul class="inline-flex -space-x-px text-sm mb-4">
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><i
                      class="fas fa-angle-left"></i></a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page"
                    class="flex items-center justify-center px-3 h-8 text-primary-600 border border-gray-300  hover:text-primary-700 hover:bg-primary-200 bg-primary-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><i
                      class="fas fa-angle-right"></i></a>
                </li>
              </ul>
            </nav>

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
