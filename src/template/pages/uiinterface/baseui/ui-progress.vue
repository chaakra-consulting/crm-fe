<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Progress
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
            <li class="text-dark font-medium" aria-current="page">Progress</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Progress -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Basic Progress</h5>
          </div>
          <div class="card-body p-5">
            <div class="progress mb-4">
              <div class="progress-bar bg-primary" style="width: 0%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-primary" style="width: 25%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-primary" style="width: 50%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-primary" style="width: 75%"></div>
            </div>
            <div class="progress mb-0">
              <div class="progress-bar bg-primary" style="width: 100%"></div>
            </div>
          </div>
        </div>
        <!-- /Progress -->

        <!-- Progress -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Colored Progress</h5>
          </div>
          <div class="card-body p-5">
            <div class="progress mb-4">
              <div class="progress-bar bg-secondary" style="width: 20%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-warning" style="width: 40%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-info" style="width: 60%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-success" style="width: 80%"></div>
            </div>
            <div class="progress mb-0">
              <div class="progress-bar bg-danger" style="width: 100%"></div>
            </div>
          </div>
        </div>
        <!-- /Progress -->

        <!-- Progress -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Striped Progress</h5>
          </div>
          <div class="card-body p-5">
            <div class="progress mb-4">
              <div class="progress-bar bg-primary progress-bar-striped" style="width: 10%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-secondary progress-bar-striped" style="width: 20%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-info progress-bar-striped" style="width: 60%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-success progress-bar-striped" style="width: 80%"></div>
            </div>
            <div class="progress mb-0">
              <div class="progress-bar bg-danger progress-bar-striped" style="width: 100%"></div>
            </div>
          </div>
        </div>
        <!-- /Progress -->

        <!-- Progress -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Progress Height</h5>
          </div>
          <div class="card-body p-5">
            <div class="progress progress-xs mb-4">
              <div class="progress-bar progress-bar-xs bg-primary" style="width: 10%"></div>
            </div>
            <div class="progress progress-sm mb-4">
              <div class="progress-bar progress-bar-sm bg-primary" style="width: 25%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-primary" style="width: 50%"></div>
            </div>
            <div class="progress progress-lg mb-4">
              <div class="progress-bar progress-bar-lg bg-primary" style="width: 75%"></div>
            </div>
            <div class="progress progress-xl mb-0">
              <div class="progress-bar progress-bar-xl bg-primary" style="width: 100%"></div>
            </div>
          </div>
        </div>
        <!-- /Progress -->

        <!-- Progress -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Progress With Labels</h5>
          </div>
          <div class="card-body p-5">
            <div class="progress mb-4">
              <div
                class="progress-bar bg-primary text-white text-center p-0.5 text-xs leading-none flex flex-col justify-center overflow-hidden"
                style="width: 10%">10%</div>
            </div>
            <div class="progress mb-4">
              <div
                class="progress-bar bg-secondary text-white text-center p-0.5 text-xs leading-none flex flex-col justify-center overflow-hidden"
                style="width: 20%">20%</div>
            </div>
            <div class="progress mb-4">
              <div
                class="progress-bar bg-success text-white text-center p-0.5 text-xs leading-none flex flex-col justify-center overflow-hidden"
                style="width: 40%">40%</div>
            </div>
            <div class="progress mb-4">
              <div
                class="progress-bar bg-info text-white text-center p-0.5 text-xs leading-none flex flex-col justify-center overflow-hidden"
                style="width: 60%">60%</div>
            </div>
            <div class="progress mb-0">
              <div
                class="progress-bar bg-warning text-white text-center p-0.5 text-xs leading-none flex flex-col justify-center overflow-hidden"
                style="width: 80%">80%</div>
            </div>
          </div>
        </div>
        <!-- /Progress -->

        <!-- Progress -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Multiple bars With Sizes</h5>
          </div>
          <div class="card-body p-5">
            <div class="progress-stacked progress-xs flex mb-4">
              <div class="progress-bar bg-primary rounded-s" style="width: 5%"></div>
              <div class="progress-bar bg-secondary" style="width: 10%"></div>
              <div class="progress-bar bg-success" style="width: 15%"></div>
            </div>
            <div class="progress-stacked progress-sm flex mb-4">
              <div class="progress-bar bg-warning rounded-s" style="width: 10%"></div>
              <div class="progress-bar bg-info" style="width: 15%"></div>
              <div class="progress-bar bg-danger" style="width: 20%"></div>
            </div>
            <div class="progress-stacked flex mb-4">
              <div class="progress-bar bg-info rounded-s" style="width: 15%"></div>
              <div class="progress-bar bg-success" style="width: 20%"></div>
              <div class="progress-bar bg-primary" style="width: 25%"></div>
            </div>
            <div class="progress-stacked progress-lg flex mb-4">
              <div class="progress-bar bg-purple rounded-s" style="width: 20%"></div>
              <div class="progress-bar bg-success" style="width: 25%"></div>
              <div class="progress-bar bg-primary" style="width: 30%"></div>
            </div>
            <div class="progress-stacked progress-xl flex mb-0">
              <div class="progress-bar bg-success rounded-s" style="width: 25%"></div>
              <div class="progress-bar bg-danger" style="width: 30%"></div>
              <div class="progress-bar bg-warning" style="width: 35%"></div>
            </div>
          </div>
        </div>
        <!-- /Progress -->

        <!-- Progress -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Striped Progress</h5>
          </div>
          <div class="card-body p-5">
            <div class="progress mb-4">
              <div class="progress-bar bg-primary progress-bar-striped animate-progress-bar-animated"
                style="width: 10%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-secondary progress-bar-striped animate-progress-bar-animated"
                style="width: 20%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-info progress-bar-striped animate-progress-bar-animated" style="width: 60%">
              </div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-success progress-bar-striped animate-progress-bar-animated"
                style="width: 80%"></div>
            </div>
            <div class="progress mb-0">
              <div class="progress-bar bg-danger progress-bar-striped animate-progress-bar-animated"
                style="width: 100%"></div>
            </div>
          </div>
        </div>
        <!-- /Progress -->

        <!-- Progress -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Gradient Progress</h5>
          </div>
          <div class="card-body p-5">
            <div class="progress mb-4">
              <div class="progress-bar bg-primary-gradient" style="width: 10%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-secondary-gradient" style="width: 20%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-success-gradient" style="width: 40%"></div>
            </div>
            <div class="progress mb-4">
              <div class="progress-bar bg-info-gradient" style="width: 60%"></div>
            </div>
            <div class="progress mb-0">
              <div class="progress-bar bg-warning-gradient" style="width: 100%"></div>
            </div>
          </div>
        </div>
        <!-- /Progress -->

        <!-- Progress -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Progress Vertical Bottom</h5>
          </div>
          <div class="card-body p-5">
            <div class="flex gap-4">
              <div class="progress progress-vertical-bottom progress-xs ">
                <div class="progress-bar bg-primary" style="height: 15%"></div>
              </div>
              <div class="progress progress-vertical-bottom progress-sm">
                <div class="progress-bar bg-secondary" style="height: 25%"></div>
              </div>
              <div class="progress progress-vertical-bottom">
                <div class="progress-bar bg-info" style="height: 50%"></div>
              </div>
              <div class="progress progress-vertical-bottom progress-lg">
                <div class="progress-bar bg-success" style="height: 75%"></div>
              </div>
              <div class="progress progress-vertical-bottom progress-xl">
                <div class="progress-bar bg-danger" style="height: 90%"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Progress -->

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
