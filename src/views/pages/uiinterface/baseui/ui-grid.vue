<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Grid System
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
            <li class="text-dark font-medium" aria-current="page">Grid System</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-b p-4 border-borderColor">
          <h5 class="card-title">Basic</h5>
        </div>
        <div class="card-body p-4">
          <div class="grid w-full grid-cols-12">
            <div class="col-span-6 p-3 text-white bg-gray-300 dark:text-title-dark mb-4">1 of 2</div>
            <div class="col-span-6 p-3 text-white bg-gray-500 dark:text-title-dark mb-4">2 of 2</div>
            <div class="col-span-4 p-3 text-white bg-gray-500 dark:text-title-dark mb-4">1 of 3</div>
            <div class="col-span-4 p-3 text-white bg-gray-300 dark:text-title-dark mb-4">2 of 3</div>
            <div class="col-span-4 p-3 text-white bg-gray-500 dark:text-title-dark mb-4">3 of 3</div>
          </div>
        </div>
      </div>
      <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-b p-4 border-borderColor">
          <h5 class="card-title">Grid for column</h5>
        </div>
        <div class="card-body p-4">
          <div class="grid md:grid-cols-12 gap-6">
            <div class="col-span-1 text-center bg-dark-transparent p-2"><span>col-span-1</span></div>
            <div class="col-span-2  text-center bg-dark-transparent p-2"><span>col-span-2</span></div>
            <div class="col-span-2  text-center bg-dark-transparent p-2"><span>col-span-2</span></div>
            <div class="col-span-3  text-center bg-dark-transparent p-2"><span>col-span-3</span></div>
            <div class="col-span-4  text-center bg-dark-transparent p-2"><span>col-span-4</span></div>
            <div class="col-span-5  text-center bg-dark-transparent p-2"><span>col-span-5</span></div>
            <div class="col-span-7  text-center bg-dark-transparent p-2"><span>col-span-7</span></div>
            <div class="col-span-6  text-center bg-dark-transparent p-2"><span>col-span-6</span></div>
            <div class="col-span-6  text-center bg-dark-transparent p-2"><span>col-span-6</span></div>
            <div class="col-span-8  text-center bg-dark-transparent p-2"><span>col-span-8</span></div>
            <div class="col-span-4  text-center bg-dark-transparent p-2"><span>col-span-4</span></div>
            <div class="col-span-9  text-center bg-dark-transparent p-2"><span>col-span-9</span></div>
            <div class="col-span-3  text-center bg-dark-transparent p-2"><span>col-span-3</span></div>
            <div class="col-span-10  text-center bg-dark-transparent p-2"><span>col-span-10</span></div>
            <div class="col-span-2  text-center bg-dark-transparent p-2"><span>col-span-2</span></div>
            <div class="col-span-12  text-center bg-dark-transparent p-2"><span>col-span-12</span></div>
          </div>
        </div>
      </div>
      <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-b p-4 border-borderColor">
          <h5 class="card-title">Vertical alignment</h5>
        </div>
        <div class="card-body p-4">
          <div class="grid md:grid-cols-12 gap-6">
            <div class="col-span-4">
              <div class="grid md:grid-cols-12 items-start m-1 gap-2 bg-light p-3 min-h-[150px]">
                <div class="col-span-6 p-2 bg-white"><span class="bg-white">one column</span></div>
                <div class="col-span-6 p-2 bg-white"><span class="bg-white">two column</span></div>
              </div>
            </div>
            <div class="col-span-4">
              <div class="grid md:grid-cols-12  grid-vertical items-center m-1 gap-2 bg-light p-3 min-h-[150px]">
                <div class="col-span-6 p-2 bg-white"><span class="bg-white">one column</span></div>
                <div class="col-span-6 p-2 bg-white"><span class="bg-white">two column</span></div>
              </div>
            </div>
            <div class="col-span-4">
              <div class="grid md:grid-cols-12 grid-vertical items-end m-1 gap-2 bg-light p-3 min-h-[150px]">
                <div class="col-span-6 p-2 bg-white"><span class="bg-white">one column</span></div>
                <div class="col-span-6 p-2 bg-white"><span class="bg-white">two column</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-b p-4 border-borderColor">
          <h5 class="card-title">Horizontal alignment</h5>
        </div>
        <div class="card-body p-4">
          <div class="grid md:grid-cols-12 gap-6">
            <div class="col-span-12">
              <div class="grid md:grid-cols-12 items-start justify-start m-1 gap-2 bg-light p-3 min-h-[150px]">
                <div class="col-span-5 p-2 bg-white"><span class="bg-white">one column</span></div>
                <div class="col-span-5 p-2 bg-white"><span class="bg-white">two column</span></div>
              </div>
            </div>
            <div class="col-span-12">
              <div
                class="grid md:grid-cols-12 items-start  grid-vertical justify-center m-1 gap-2 bg-light p-3 min-h-[150px]">
                <div class="col-span-5 p-2 bg-white"><span class="bg-white">one column</span></div>
                <div class="col-span-5 p-2 bg-white"><span class="bg-white">two column</span></div>
              </div>
            </div>
            <div class="col-span-12">
              <div
                class="grid md:grid-cols-12 items-start grid-vertical justify-end m-1 gap-2 bg-light p-3 min-h-[150px]">
                <div class="col-span-5 p-2 bg-white"><span class="bg-white">one column</span></div>
                <div class="col-span-5 p-2 bg-white"><span class="bg-white">two column</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-b p-4 border-borderColor">
          <h5 class="card-title">Nesting</h5>
        </div>
        <div class="card-body p-4">
          <div class="grid md:grid-cols-12 gap-3">
            <div class="col-span-3 bg-light p-2"><span>Level 1: .col-3</span></div>
            <div class="col-span-9 bg-light p-2">
              <div class="grid-wrapper pb-0">
                <div class="grid md:grid-cols-12 gap-3">
                  <div class="col-span-5 p-2"><span class="border-2 block p-2">Level 2: .col-span-5</span>
                  </div>
                  <div class="col-span-7 p-2"><span class="border-2 block p-2">Level 2: .col-span-7</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-8 bg-light p-2">
              <div class="grid-wrapper pb-0">
                <div class="grid md:grid-cols-12 gap-3">
                  <div class="col-span-2 col-4"><span class="border-2 block p-2">Level 1:
                      .col-span-2</span></div>
                  <div class="col-span-10 col-8"><span class="border-2 block p-2">Level 1:
                      .col-span-10</span></div>
                </div>
              </div>
            </div>
            <div class="col-span-4 bg-light p-2"><span>Level 2: .col-4 </span></div>
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
