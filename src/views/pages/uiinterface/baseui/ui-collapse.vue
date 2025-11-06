<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Collapse
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
            <li class="text-dark font-medium" aria-current="page">Collapse</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <!-- start row-->
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-5">

        <div class="xl:col-span-6">
          <div class="card bg-white border border-borderColor rounded mb-4">
            <div class="card-header border-b border-borderColor p-4">
              <h5 class="card-title">Collapse</h5>
            </div>
            <div class="card-body p-4" data-accordion="collapse">
              <p class="text-muted mb-3">Bootstrap's collapse provides the way to toggle the visibility of any content
                or element. Please read the official <a href="https://getbootstrap.com/docs/5.2/components/collapse/"
                  target="_blank">Bootstrap</a> documentation for a full list of options.</p>

              <p class="mb-0 d-flex align-items-center gap-2 flex-wrap">
                <a class="btn btn-primary text-white bg-primary" data-accordion-target="#collapse-67"
                  aria-expanded="true" aria-controls="collapse-67">
                  Link with href
                </a>
                <button class="btn btn-primary bg-primary text-white ms-1" type="button"
                  data-accordion-target="#collapse-67" aria-expanded="true" aria-controls="collapse-67">
                  Button with data-bs-target
                </button>
              </p>
              <div class="hidden mt-3" id="collapse-67" aria-labelledby="heading-67">
                <div class="card card-body text-dark mb-0">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
                  anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
              </div>
            </div> <!-- end card-body-->
          </div> <!-- end card-->
        </div> <!-- end col-->

        <div class="xl:col-span-6">
          <div class="card bg-white border border-borderColor rounded mb-4">
            <div class="card-header border-b border-borderColor p-4">
              <h5 class="card-title">Collapse Horizontal</h5>
            </div>

            <div class="card-body p-4" data-accordion="collapse">
              <p class="text-muted mb-3">Bootstrap's collapse provides the way to toggle the visibility of any content
                or element. Please read the official <a href="https://getbootstrap.com/docs/5.2/components/collapse/"
                  target="_blank">Bootstrap</a> documentation for a full list of options.</p>

              <p class="mb-0 d-flex align-items-center gap-2 flex-wrap">
                <a class="btn btn-primary bg-primary text-white" data-accordion-target="#collapse-6"
                  aria-expanded="true" aria-controls="collapse-6">
                  Toggle width collapse
                </a>
              </p>
              <div class="hidden mt-3" id="collapse-6" aria-labelledby="heading-6">
                <div class="card card-body text-dark mb-0">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
                  anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
              </div>
            </div> <!-- end card-body-->
          </div> <!-- end card-->
        </div> <!-- end col-->

      </div>
      <!-- end row-->


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
