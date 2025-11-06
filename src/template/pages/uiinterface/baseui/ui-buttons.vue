<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Buttons
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
            <li class="text-dark font-medium" aria-current="page">Buttons</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-1 gap-x-6">

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Default Buttons</h5>
          </div>
          <div class="card-body p-5">
            <p class="text-md mb-3">Use the <span class="text-secondary">btn</span> class to show the default button
              style.</p>
            <div class="flex flex-wrap gap-2">
              <button type="button" class="btn btn-primary">Primary</button>
              <button type="button" class="btn btn-secondary">Secondary</button>
              <button type="button" class="btn btn-success">Success</button>
              <button type="button" class="btn btn-danger">Danger</button>
              <button type="button" class="btn btn-warning">Warning</button>
              <button type="button" class="btn btn-info">Info</button>
              <button type="button" class="btn btn-light">Light</button>
              <button type="button" class="btn btn-dark">Dark</button>
              <button type="button" class="btn border rounded border-borderColor">White</button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Outline Buttons</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button type="button" class="btn btn-outline-primary">Primary</button>
              <button type="button" class="btn btn-outline-secondary">Secondary</button>
              <button type="button" class="btn btn-outline-success">Success</button>
              <button type="button" class="btn btn-outline-danger">Danger</button>
              <button type="button" class="btn btn-outline-warning">Warning</button>
              <button type="button" class="btn btn-outline-info">Info</button>
              <button type="button" class="btn btn-outline-light">Light</button>
              <button type="button" class="btn btn-outline-dark">Dark</button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Rounded Buttons</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button type="button" class="btn btn-primary rounded-full">Primary</button>
              <button type="button" class="btn btn-secondary rounded-full">Secondary</button>
              <button type="button" class="btn btn-success rounded-full">Success</button>
              <button type="button" class="btn btn-danger rounded-full">Danger</button>
              <button type="button" class="btn btn-warning rounded-full">Warning</button>
              <button type="button" class="btn btn-info rounded-full">Info</button>
              <button type="button" class="btn btn-light rounded-full">Light</button>
              <button type="button" class="btn btn-dark rounded-full">Dark</button>
              <button type="button" class="btn btn-link rounded-full">Link</button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-1 gap-x-6">

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Rounded Outline Buttons</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button type="button" class="btn btn-outline-primary rounded-full">Primary</button>
              <button type="button" class="btn btn-outline-secondary rounded-full">Secondary</button>
              <button type="button" class="btn btn-outline-success rounded-full">Success</button>
              <button type="button" class="btn btn-outline-danger rounded-full">Danger</button>
              <button type="button" class="btn btn-outline-warning rounded-full">Warning</button>
              <button type="button" class="btn btn-outline-info rounded-full">Info</button>
              <button type="button" class="btn btn-outline-light rounded-full">Light</button>
              <button type="button" class="btn btn-outline-dark rounded-full">Dark</button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-1 gap-x-6">

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Soft Buttons</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button type="button" class="btn btn-soft-primary">Primary</button>
              <button type="button" class="btn btn-soft-secondary">Secondary</button>
              <button type="button" class="btn btn-soft-success">Success</button>
              <button type="button" class="btn btn-soft-danger">Danger</button>
              <button type="button" class="btn btn-soft-warning">Warning</button>
              <button type="button" class="btn btn-soft-info">Info</button>
              <button type="button" class="btn btn-soft-light">Light</button>
              <button type="button" class="btn btn-soft-dark">Dark</button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Soft Rounded Button</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button type="button" class="btn btn-soft-primary rounded-full">Primary</button>
              <button type="button" class="btn btn-soft-secondary rounded-full">Secondary</button>
              <button type="button" class="btn btn-soft-success rounded-full">Success</button>
              <button type="button" class="btn btn-soft-danger rounded-full">Danger</button>
              <button type="button" class="btn btn-soft-warning rounded-full">Warning</button>
              <button type="button" class="btn btn-soft-info rounded-full">Info</button>
              <button type="button" class="btn btn-soft-light rounded-full">Light</button>
              <button type="button" class="btn btn-soft-dark rounded-full">Dark</button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-1 gap-x-6">

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Square Button</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button type="button" class="btn  rounded-none btn-primary">Primary</button>
              <button type="button" class="btn  rounded-none btn-secondary">Secondary</button>
              <button type="button" class="btn  rounded-none btn-success">Success</button>
              <button type="button" class="btn  rounded-none btn-danger">Danger</button>
              <button type="button" class="btn  rounded-none btn-warning">Warning</button>
              <button type="button" class="btn  rounded-none btn-info">Info</button>
              <button type="button" class="btn  rounded-none btn-light">Light</button>
              <button type="button" class="btn  rounded-none btn-dark">Dark</button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Soft Rounded Button</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button type="button" class="btn rounded-none btn-outline-primary">Primary</button>
              <button type="button" class="btn rounded-none btn-outline-secondary">Secondary</button>
              <button type="button" class="btn rounded-none btn-outline-success">Success</button>
              <button type="button" class="btn rounded-none btn-outline-danger">Danger</button>
              <button type="button" class="btn rounded-none btn-outline-warning">Warning</button>
              <button type="button" class="btn rounded-none btn-outline-info">Info</button>
              <button type="button" class="btn rounded-none btn-outline-light">Light</button>
              <button type="button" class="btn rounded-none btn-outline-dark">Dark</button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Sizes</h5>
            <p>Add <code class="text-primary">.btn-lg</code>, <code class="text-primary">.btn-sm</code>, or <code
                class="text-primary">.btn-xs</code> for additional sizes.
            </p>
          </div>
          <div class="card-body p-5">
            <div class="flex items-end flex-wrap gap-2">
              <button type="button" class="btn btn-primary btn-sm">Small Button</button>
              <button type="button" class="btn btn-secondary">Default Button</button>
              <button type="button" class="btn btn-success btn-lg">Large Button</button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Button Tags</h5>
            <p>Add <code class="text-primary">input, submit, reset</code></p>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <a class="btn btn-primary m-0" href="#" role="button">Link</a>
              <button class="btn btn-primary m-0" type="submit">Button</button>
              <input class="btn btn-primary" type="button" value="Input">
              <input class="btn btn-primary" type="submit" value="Submit">
              <input class="btn btn-primary" type="reset" value="Reset">
            </div>
          </div>
        </div>
        <!-- /Buttons -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Button Widths</h5>
            <p>Use a classes <code class="text-primary">.btn-w-**</code> for width.</p>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button type="button" class="btn btn-primary btn-w-xs">XS</button>
              <button type="button" class="btn btn-secondary btn-w-sm">SM</button>
              <button type="button" class="btn btn-warning btn-w-md">MD</button>
              <button type="button" class="btn btn-info btn-w-lg me-0">LG</button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Button Disabled</h5>
            <p>Add <code class="text-primary">disabled</code> attribute to buttons.</p>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button type="button" class="btn btn-primary disabled">Primary</button>
              <button type="button" class="btn btn-success disabled">Success</button>
              <button type="button" class="btn btn-info disabled">Info</button>
              <button type="button" class="btn btn-warning disabled">Warning</button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Button Loader</h5>
            <p>Use icons to add loader</p>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button type="button" class="btn btn-primary"><i
                  class="fas fa-spinner fa-spin me-2"></i>Loading...</button>
              <button type="button" class="btn btn-secondary"><i
                  class="fas fa-spinner fa-spin me-2"></i>Loading...</button>
              <button type="button" class="btn btn-warning"><i
                  class="fas fa-spinner fa-spin me-2"></i>Loading...</button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Icon Buttons</h5>
            <p>Add <code class="text-primary">.btn-icon</code> to quickly create a bordered buttons..</p>
          </div>
          <div class="card-body p-5">
            <div class="flex flex-wrap gap-2">
              <button class="btn btn-icon btn-primary">
                <i class="fas fa-bell"></i>
              </button>
              <button class="btn btn-icon btn-success">
                <i class="fas fa-bell"></i>
              </button>
              <button class="btn btn-icon btn-soft-primary rounded-full">
                <i class="fas fa-bell"></i>
              </button>
              <button class="btn btn-icon btn-soft-success rounded-full">
                <i class="fas fa-bell"></i>
              </button>
              <button class="btn btn-icon btn-outline-primary rounded-full">
                <i class="fas fa-bell"></i>
              </button>
              <button class="btn btn-icon btn-outline-success rounded-full">
                <i class="fas fa-bell"></i>
              </button>
              <button type="button" class="btn btn-primary">
                <i class="fas fa-bell me-2"></i>Like
              </button>
              <button type="button" class="btn btn-success">
                <i class="fas fa-bell me-2"></i>Like
              </button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

      </div>

      <div class="grid grid-cols-1 gap-x-6">

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Block buttons</h5>
            <p>Create block level buttons by adding class <code class="text-primary">.grid</code> to parent div.</p>
          </div>
          <div class="card-body p-5">
            <div class="grid gap-2 mb-6">
              <button class="btn btn-primary" type="button">Button</button>
              <button class="btn btn-secondary" type="button">Button</button>
            </div>
            <div class="grid gap-2 md:block mb-4">
              <button class="btn btn-info" type="button">Button</button>
              <button class="btn btn-success" type="button">Button</button>
            </div>
            <div class="grid gap-2 max-w-sm mx-auto">
              <button class="btn btn-danger" type="button">Button</button>
              <button class="btn btn-warning" type="button">Button</button>
            </div>
            <div class="grid gap-2 md:flex md:justify-end">
              <button class="btn btn-primary" type="button">Button</button>
              <button class="btn btn-secondary" type="button">Button</button>
            </div>
          </div>
        </div>
        <!-- /Buttons -->

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
