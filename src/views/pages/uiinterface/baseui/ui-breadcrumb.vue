<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Breadcrumb
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
            <li class="text-dark font-medium" aria-current="page">Breadcrumb</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4  border-borderColor">
            <h5 class="card-title">Default Breadcrumb</h5>
          </div>
          <div class="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-2">
                <li class="breadcrumb-item active" aria-current="page">Home</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center mb-2">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item text-gray-900 active" aria-current="page">Library</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item text-gray-900 active" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4  border-borderColor">
            <h5 class="card-title">Arrow Style</h5>
          </div>
          <div class="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-2">
                <li class="breadcrumb-item active" aria-current="page">Home</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center breadcrumb-arrow  mb-2">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item text-gray-900 active" aria-current="page">Library</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center breadcrumb-arrow mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item text-gray-900 active" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4  border-borderColor">
            <h5 class="card-title">Pipe Style</h5>
          </div>
          <div class="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-2">
                <li class="breadcrumb-item active" aria-current="page">Home</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center breadcrumb-pipe mb-2">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item text-gray-900 active" aria-current="page">Library</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center breadcrumb-pipe mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item text-gray-900 active" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4  border-borderColor">
            <h5 class="card-title">Line Style</h5>
          </div>
          <div class="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-2">
                <li class="breadcrumb-item active" aria-current="page">Home</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center breadcrumb-line mb-2">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item text-gray-900 active" aria-current="page">Library</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center breadcrumb-line mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item text-gray-900 active" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4  border-borderColor">
            <h5 class="card-title">Dot Style</h5>
          </div>
          <div class="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-2">
                <li class="breadcrumb-item active" aria-current="page">Home</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center breadcrumb-dot mb-2">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item text-gray-900 active" aria-current="page">Library</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center breadcrumb-dot mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item text-gray-900 active" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4  border-borderColor">
            <h5 class="card-title">Dividers</h5>
          </div>
          <div class="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-2">
                <li class="breadcrumb-item active" aria-current="page">Home</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center breadcrumb-divide mb-2">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item text-gray-900 active" aria-current="page">Library</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center breadcrumb-divide mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item text-gray-900 active" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4  border-borderColor">
            <h5 class="card-title">Breadcrumb with Icon</h5>
          </div>
          <div class="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-2">
                <li class="breadcrumb-item active" aria-current="page"><i class="fas fa-home"></i></li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center mb-2">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center mb-0">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4  border-borderColor">
            <h5 class="card-title">Without Separator</h5>
          </div>
          <div class="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-2">
                <li class="breadcrumb-item active" aria-current="page"><i class="fas fa-home"></i></li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center breadcrumb-separatorless mb-2">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item active ps-2" aria-current="page">Library</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex items-center breadcrumb-separatorless mb-0">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item ps-2"><a href="#">Library</a></li>
                <li class="breadcrumb-item active ps-2" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4  border-borderColor">
            <h5 class="card-title">Colored Breadcrumb</h5>
          </div>
          <div class="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 mb-3 text-white bg-primary">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 mb-3 text-white bg-secondary">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 mb-3 text-white bg-success">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 mb-3 text-white bg-info">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 mb-3 text-white bg-warning">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 mb-3 text-white bg-danger">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 text-white bg-dark mb-0">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4  border-borderColor">
            <h5 class="card-title">Light Colored Breadcrumb</h5>
          </div>
          <div class="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 mb-3 text-white bg-primary-100">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 mb-3 text-white bg-secondary-100">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 mb-3 text-white bg-success-100">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 mb-3 text-white bg-info-100">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 mb-3 text-white bg-warning-100">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 mb-3 text-white bg-danger-100">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-colored flex items-center rounded p-2 text-white bg-dark-gray mb-0">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
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
