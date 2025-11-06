<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Links
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
            <li class="text-dark font-medium" aria-current="page">Links</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="grid grdid-cols-1 xl:grid-cols-12 gap-x-4">

        <div class="xl:col-span-6 flex">
          <div class="card border flex-1 border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div class="card-header border-b p-4 border-borderColor">
              <h5 class="card-title">Colored Links</h5>
            </div>
            <div class="card-body flex flex-col gap-3 p-4">
              <p class="text-muted">You can use the <code>.link-*</code> classes to colorize links. Unlike the <a
                  href="#"><code>.text-*</code> classes</a>, these classes have a <code>:hover</code> and
                <code>:focus</code> state. Some of the link styles use a relatively light foreground color, and should
                only be used on a dark background in order to have sufficient contrast.</p>
              <p><a href="#" class="text-primary">Primary link</a></p>
              <p><a href="#" class="text-secondary">Secondary link</a></p>
              <p><a href="#" class="text-success">Success link</a></p>
              <p><a href="#" class="text-danger">Danger link</a></p>
              <p><a href="#" class="text-warning">Warning link</a></p>
              <p><a href="#" class="text-info">Info link</a></p>
              <p><a href="#" class="text-gray">Light link</a></p>
              <p><a href="#" class="text-dark">Dark link</a></p>
              <p class="mb-0"><a href="#" class="link-body-emphasis">Emphasis link</a></p>
            </div> <!-- end card body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="xl:col-span-6 flex">
          <div class="card card-h-100 flex-1 border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div class="card-header border-b p-4 border-borderColor">
              <h5 class="card-title">Link Utilities</h5>
            </div>
            <div class="card-body flex flex-col gap-3 p-4">
              <p class="text-muted"><a href="#">Colored link helpers</a> have been updated to pair with our link
                utilities. Use the new utilities to modify the link opacity, underline opacity, and underline offset.
              </p>
              <p><a href="#"
                  class="text-primary underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Primary
                  link</a></p>
              <p><a href="#"
                  class="text-secondary underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Secondary
                  link</a></p>
              <p><a href="#"
                  class="text-success underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Success
                  link</a></p>
              <p><a href="#"
                  class="text-danger underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Danger
                  link</a></p>
              <p><a href="#"
                  class="text-warning underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Warning
                  link</a></p>
              <p><a href="#"
                  class="text-info underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Info
                  link</a></p>
              <p><a href="#"
                  class="text-gray underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Light
                  link</a></p>
              <p><a href="#"
                  class="text-dark underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Dark
                  link</a></p>
              <p class="mb-0"><a href="#"
                  class="link-body-emphasis underline link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis
                  link</a></p>
            </div> <!-- end card body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

      </div>
      <!-- end row -->

      <!-- start row -->
      <div class="grid grdid-cols-1 xl:grid-cols-12 gap-x-4">

        <div class="xl:col-span-6 flex">
          <div class="card border flex-1 border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div class="card-header border-b p-4 border-borderColor">
              <h5 class="card-title">Link Opacity</h5>
            </div>
            <div class="card-body flex flex-col gap-3 p-4">
              <p class="text-muted">Change the alpha opacity of the link <code>rgba()</code> color value with utilities.
                Please be aware that changes to a color’s opacity can lead to links with <em>insufficient</em> contrast.
              </p>
              <p><a class="opacity-10" href="#">Link opacity 10</a></p>
              <p><a class="opacity-25" href="#">Link opacity 25</a></p>
              <p><a class="opacity-50" href="#">Link opacity 50</a></p>
              <p><a class="opacity-75" href="#">Link opacity 75</a></p>
              <p class="mb-0"><a class="opacity-100" href="#">Link opacity 100</a></p>
            </div> <!-- end card body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="xl:col-span-6 flex">
          <div class="card flex-1 card-h-100 border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div class="card-header border-b p-4 border-borderColor">
              <h5 class="card-title">Link Hover Opacity</h5>
            </div>
            <div class="card-body flex flex-col gap-3 p-4">
              <p class="text-muted">You can even change the opacity level on hover.</p>

              <p><a class="hover:opacity-10" href="#">Link hover opacity 10</a></p>
              <p><a class="hover:opacity-25" href="#">Link hover opacity 25</a></p>
              <p><a class="hover:opacity-50" href="#">Link hover opacity 50</a></p>
              <p><a class="hover:opacity-75" href="#">Link hover opacity 75</a></p>
              <p class="mb-0"><a class="link-opacity-100" href="#">Link hover opacity 100</a></p>
            </div> <!-- end card body -->
          </div> <!-- end card -->
        </div> <!-- end col -->
      </div>
      <!--end row-->

      <!-- start row -->
      <div class="grid grdid-cols-1 xl:grid-cols-12 gap-x-4">
        <div class="xl:col-span-6 flex">
          <div class="card border flex-1 border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div class="card-header border-b p-4 border-borderColor">
              <h5 class="card-title">Underline Color</h5>
            </div>
            <div class="card-body flex flex-col gap-3 p-4">
              <p class="text-muted">Change the underline’s color independent of the link text color.</p>

              <p><a href="#" class="underline decoration-primary">Primary underline</a></p>
              <p><a href="#" class="underline decoration-secondary">Secondary underline</a></p>
              <p><a href="#" class="underline decoration-success">Success underline</a></p>
              <p><a href="#" class="underline decoration-danger">Danger underline</a></p>
              <p><a href="#" class="underline decoration-warning">Warning underline</a></p>
              <p><a href="#" class="underline decoration-info">Info underline</a></p>
              <p><a href="#" class="underline decoration-light">Light underline</a></p>
              <p class="mb-0"><a href="#" class="underline decoration-dark">Dark underline</a></p>
            </div> <!-- end card body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="xl:col-span-6 flex">
          <div class="card card-h-100 flex-1 border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div class="card-header border-b p-4 border-borderColor">
              <h5 class="card-title">Underline Opacity</h5>
            </div>
            <div class="card-body flex flex-col gap-3 p-4">
              <p class="text-muted">Change the underline’s opacity. Requires adding <code>.link-underline</code> to
                first set an <code>rgba()</code> color we use to then modify the alpha opacity.</p>

              <p><a class="underline link-offset-2 link-underline decoration-opacity-0 hover:text-primary"
                  href="#">Underline opacity 0</a></p>
              <p><a class="underline link-offset-2 link-underline decoration-opacity-10 hover:text-primary"
                  href="#">Underline opacity 10</a></p>
              <p><a class="underline link-offset-2 link-underline decoration-opacity-25 hover:text-primary"
                  href="#">Underline opacity 25</a></p>
              <p><a class="underline link-offset-2 link-underline decoration-opacity-50 hover:text-primary"
                  href="#">Underline opacity 50</a></p>
              <p><a class="underline link-offset-2 link-underline decoration-opacity-75 hover:text-primary"
                  href="#">Underline opacity 75</a></p>
              <p class="mb-0"><a class="underline link-offset-2 link-underline decoration-opacity-100"
                  href="#">Underline opacity 100</a></p>
            </div> <!-- end card body -->
          </div> <!-- end card -->
        </div> <!-- end col -->
      </div>
      <!-- end row -->

      <!-- start row -->
      <div class="grid grdid-cols-1 xl:grid-cols-12 gap-x-4">
        <div class="xl:col-span-6 flex">
          <div class="card border flex-1 border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div class="card-header border-b p-4 border-borderColor">
              <h5 class="card-title">Underline Offset</h5>
            </div>
            <div class="card-body flex flex-col gap-3 p-4">
              <p class="text-muted">Change the underline’s opacity. Requires adding <code>.link-underline</code> to
                first set an <code>rgba()</code> color we use to then modify the alpha opacity.</p>

              <p><a href="#">Default link</a></p>
              <p><a class="underline hover:text-primary link-offset-1" href="#">Offset 1 link</a></p>
              <p><a class="underline hover:text-primary link-offset-2" href="#">Offset 2 link</a></p>
              <p class="mb-0"><a class="underline hover:text-primary link-offset-3" href="#">Offset 3 link</a></p>

            </div> <!-- end card body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="xl:col-span-6 flex">
          <div class="card flex-1 card-h-100 border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div class="card-header border-b p-4 border-borderColor">
              <h5 class="card-title">Hover Variants</h5>
            </div>
            <div class="card-body p-4">
              <p class="text-muted mb-4">Just like the <code>.link-opacity-*-hover</code> utilities,
                <code>.link-offset</code> and <code>.link-underline-opacity</code> utilities include <code>:hover</code>
                variants by default. Mix and match to create unique link styles.</p>

              <a class="link-offset-2 link-offset-3-hover hover:text-primary underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#">
                Underline opacity 0
              </a>
            </div> <!-- end card body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

      </div>
      <!--end row -->

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
