<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">

      <!-- start page header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">
            File Manager
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li>
                <a href="#" class="hover:underline text-gray-700">Applications</a>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">File Manager</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Refresh Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Refresh">
            <i class="ti ti-refresh"></i>
          </button>
          <!-- Collapse Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Collapse" id="collapse-header" @click="toggleHeader">
            <i class="ti ti-transition-top"></i>
          </button>
        </div>
      </div>
      <!-- end page header -->

      <div class="flex flex-wrap items-center justify-between gap-2 mb-5">
        <div>
          <a href="javascript:void(0);"
            class="border border-borderColor rounded p-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
            data-dropdown-toggle="export-dropdown">
            All Files <i class="ti ti-chevron-down ms-1"></i>
          </a>
          <ul id="export-dropdown" class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">All
                Files</a>
            </li>
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Music</a>
            </li>
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Video</a>
            </li>
            <li>
              <a href="javascript:void(0);"
                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Doduments</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="#" data-modal-target="create_folder" data-modal-toggle="create_folder"
            class="btn btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-1"></i>Create
            Folder</a>
        </div>
      </div>

      <!-- start row -->
      <div class="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-6 mb-5">
        <!-- Item 1 -->
        <div class="bg-white rounded border border-borderColor flex flex-col flex-1">
          <div class="p-5 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <img src="@/assets/img/icons/dropbox.svg" alt="img" class="w-6 h-6">
                <h5 class="text-[16px] ml-2 mb-0">Dropbox</h5>
              </div>
              <div>
                <a href="javascript:void(0);" data-dropdown-toggle="dropbox-dropdown-1">
                  <i class="ti ti-dots text-dark"></i>
                </a>
                <ul id="dropbox-dropdown-1"
                  class="hidden p-2 z-[1] w-[150px] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                        class="ti ti-folder-open me-2"></i>Open</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                        class="ti ti-trash me-1"></i>Delete All</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                        class="ti ti-status-change me-1"></i>Reset</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pipeline-progress flex items-center mb-2">
              <div class="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                <div class="h-1 rounded-[50px] w-[100px] bg-pink" role="progressbar"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <p class="mb-0 text-sm">200 Files</p>
              <p class="mb-0 text-sm text-dark">28GB</p>
            </div>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="bg-white rounded border border-borderColor flex flex-col flex-1">
          <div class="p-5 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <img src="@/assets/img/icons/drive.svg" alt="img" class="w-6 h-6">
                <h5 class="text-[16px] ml-2 mb-0">Google Drive</h5>
              </div>
              <div>
                <a href="javascript:void(0);" data-dropdown-toggle="drive-dropdown-1">
                  <i class="ti ti-dots text-dark"></i>
                </a>
                <ul id="drive-dropdown-1"
                  class="hidden p-2 z-[1] w-[150px] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                        class="ti ti-folder-open me-2"></i>Open</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                        class="ti ti-trash me-1"></i>Delete All</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                        class="ti ti-status-change me-1"></i>Reset</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pipeline-progress flex items-center mb-2">
              <div class="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                <div class="h-1 rounded-[50px] w-[100px] bg-pink" role="progressbar"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <p class="mb-0 text-sm">144 Files</p>
              <p class="mb-0 text-sm text-dark">56GB</p>
            </div>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="bg-white rounded border border-borderColor flex flex-col flex-1">
          <div class="p-5 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <img src="@/assets/img/icons/cloud.svg" alt="img" class="w-6 h-6">
                <h5 class="text-[16px] ml-2 mb-0">Cloud Storage</h5>
              </div>
              <div>
                <a href="javascript:void(0);" data-dropdown-toggle="storage-dropdown-1">
                  <i class="ti ti-dots text-dark"></i>
                </a>
                <ul id="storage-dropdown-1"
                  class="hidden p-2 z-[1]  w-[150px] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                        class="ti ti-folder-open me-2"></i>Open</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                        class="ti ti-trash me-1"></i>Delete All</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                        class="ti ti-status-change me-1"></i>Reset</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pipeline-progress flex items-center mb-2">
              <div class="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                <div class="h-1 rounded-[50px] w-[100px] bg-pink" role="progressbar"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <p class="mb-0 text-sm">200 Files</p>
              <p class="mb-0 text-sm text-dark">28GB</p>
            </div>
          </div>
        </div>

        <!-- Item 4 -->
        <div class="bg-white rounded border border-borderColor flex flex-col flex-1">
          <div class="p-5 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <img src="@/assets/img/icons/storage.svg" alt="img" class="w-6 h-6">
                <h5 class="text-[16px] ml-2 mb-0">Internal Storage</h5>
              </div>
              <div>
                <a href="javascript:void(0);" data-dropdown-toggle="internal-dropdown-1">
                  <i class="ti ti-dots text-dark"></i>
                </a>
                <ul id="internal-dropdown-1"
                  class="hidden p-2 z-[1] w-[150px] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex text-body items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                        class="ti ti-folder-open me-2"></i>Open</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex text-bodyitems-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                        class="ti ti-trash me-1"></i>Delete All</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex text-body items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                        class="ti ti-status-change me-1"></i>Reset</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pipeline-progress flex items-center mb-2">
              <div class="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                <div class="h-1 rounded-[50px] w-[200px] bg-pink" role="progressbar"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <p class="mb-0 text-sm">144 Files</p>
              <p class="mb-0 text-sm text-dark">54GB</p>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->

      <!-- start row -->
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-3">
          <!-- Item 1 -->
          <div class="bg-white rounded border border-borderColor flex flex-col flex-1 mb-4">
            <div class="p-5 flex flex-col flex-1">
              <div class="flex items-center overflow-hidden mb-4">
                <span class="avatar flex-shrink-0">
                  <img src="@/assets/img/profiles/avatar-01.jpg" alt="img" class="rounded-full">
                </span>
                <div class="overflow-hidden ms-2">
                  <h5 class="text-[16px] mb-1">James Hong</h5>
                  <p class="text-[13px] mb-0">jameshong@example.com</p>
                </div>
              </div>
              <div class="border border-borderColor rounded relative p-5 mb-4 text-center">
                <span class="inline-flex items-center justify-center bg-primary text-white mb-2 w-6 h-6 rounded">
                  <i class="ti ti-upload text-[16px]"></i>
                </span>
                <h6 class="mb-2">Drop files here</h6>
                <p class="text-[13px] mb-0">Select files to upload</p>
                <input type="file" class="absolute top-0 start-0 opacity-0 w-full h-full">
              </div>
              <div class="files-list nav d-block">
                <a href="javscript:void(0);"
                  class="flex items-center font-medium p-2 bg-light text-gray-900 rounded active"><i
                    class="ti ti-folder-up me-2"></i>All Folder / Files</a>
                <a href="javscript:void(0);" class="flex items-center font-medium p-2 text-gray-900"><i
                    class="ti ti-star me-2"></i>Drive</a>
                <a href="javscript:void(0);" class="flex items-center font-medium p-2 text-gray-900"><i
                    class="ti ti-octahedron me-2"></i>Dropbox</a>
                <a href="javscript:void(0);" class="flex items-center font-medium p-2 text-gray-900"><i
                    class="ti ti-share-2 me-2"></i>Shared with Me</a>
                <a href="javscript:void(0);" class="flex items-center font-medium p-2 text-gray-900"><i
                    class="ti ti-file me-2"></i>Document</a>
                <a href="javscript:void(0);" class="flex items-center font-medium p-2 text-gray-900"><i
                    class="ti ti-clock-hour-11 me-2"></i>Recent File</a>
                <a href="javscript:void(0);" class="flex items-center font-medium p-2 text-gray-900"><i
                    class="ti ti-star me-2"></i>Important</a>
                <a href="javscript:void(0);" class="flex items-center font-medium p-2 text-gray-900"><i
                    class="ti ti-music me-2"></i>Media</a>
              </div>
            </div>
          </div>

          <!-- Storage Details -->
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white w-full mb-6">
            <div class="card-body p-5">
              <div class="flex items-center justify-between mb-4 flex-wrap gap-2">
                <h5 class="text-[16px] mb-1">Storage Details</h5>
                <span class="bg-success text-white text-[12px] px-1.5 py-0.5 rounded flex-shrink-0">Used 77%</span>
              </div>
              <div id="storage-chart"></div>
              <div class="flex items-center flex-wrap gap-2 justify-between mb-4">
                <div class="flex items-center flex-wrap gap-2 overflow-hidden">
                  <span class="avatar avatar-lg rounded bg-info-100 flex justify-center items-center">
                    <i class="ti ti-music text-[20px] text-info"></i>
                  </span>
                  <div class="overflow-hidden ms-2">
                    <h6 class="text-truncate text-[14px] mb-1">Music</h6>
                    <p class="text-truncate">35 Files</p>
                  </div>
                </div>
                <p class="text-gray-900">8.5 GB</p>
              </div>
              <div class="flex items-center flex-wrap gap-2 justify-between mb-4">
                <div class="flex items-center flex-wrap gap-2 overflow-hidden">
                  <span class="avatar avatar-lg rounded bg-warning-100 flex justify-center items-center">
                    <i class="fa-regular fa-file-audio text-[20px] text-warning"></i>
                  </span>
                  <div class="overflow-hidden ms-2">
                    <h6 class="text-truncate text-[14px] mb-1">Video</h6>
                    <p class="text-truncate">145 Files</p>
                  </div>
                </div>
                <p class="text-gray-900">2 GB</p>
              </div>
              <div class="flex items-center flex-wrap gap-2 justify-between mb-4">
                <div class="flex items-center flex-wrap gap-2 overflow-hidden">
                  <span class="avatar avatar-lg rounded bg-secondary-100 flex justify-center items-center">
                    <i class="ti ti-file-description text-[20px] text-secondary"></i>
                  </span>
                  <div class="overflow-hidden ms-2">
                    <h6 class="text-truncate text-[14px] mb-1">Documents</h6>
                    <p class="text-truncate">487 Files</p>
                  </div>
                </div>
                <p class="text-gray-900">24.5 GB</p>
              </div>
              <div class="flex items-center flex-wrap gap-2 justify-between mb-4">
                <div class="flex items-center flex-wrap gap-2 overflow-hidden">
                  <span class="avatar avatar-lg rounded bg-primary-100 flex justify-center items-center">
                    <i class="ti ti-photo text-[20px] text-primary"></i>
                  </span>
                  <div class="overflow-hidden ms-2">
                    <h6 class="text-truncate text-[14px] mb-1">Photos</h6>
                    <p class="text-truncate">35 Files</p>
                  </div>
                </div>
                <p class="text-gray-900">8.5 GB</p>
              </div>
              <div class="flex items-center flex-wrap gap-2 justify-between mb-0">
                <div class="flex items-center flex-wrap gap-2 overflow-hidden">
                  <span class="avatar avatar-lg rounded bg-danger-100 flex justify-center items-center">
                    <i class="ti ti-file-type-doc text-[20px] text-danger"></i>
                  </span>
                  <div class="overflow-hidden ms-2">
                    <h6 class="text-truncate text-[14px] mb-1">Other</h6>
                    <p class="text-truncate">487 Files</p>
                  </div>
                </div>
                <p class="text-gray-900">16.2 GB</p>
              </div>
            </div>
          </div>
          <!-- /Storage Details -->
        </div>

        <div class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-9">
          <!-- Item 1 -->
          <div class="border-b border-borderColor pb-4 mb-4">
            <div class="flex items-center justify-between mb-2">
              <h6 class="mb-2">Quick Access</h6>
              <div>
                <a href="javascript:void(0);" class="mb-2 font-medium link-default text-dark">View All</a>
              </div>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-4 gap-4 flex items-center justify-center w-full">
              <div class="xl:col-span-1 flex">
                <div class="card bg-white rounded border border-borderColor flex-1 relative">
                  <div class="card-body p-5 text-center">
                    <div class="flex justify-center items-center">
                      <img src="@/assets/img/icons/file.svg" alt="img" class="mb-3">
                    </div>
                    <h6 class="mb-2 font-medium"><a href="javascript:void(0);">Final.doc</a></h6>
                    <span
                      class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">2.4GB</span>
                  </div>
                  <span class="access-rate rating-select absolute top-2 right-2 "><i
                      class="ti ti-star-filled text-warning"></i></span>
                </div>
              </div>
              <div class=" xl:col-span-1 flex">
                <div class="card bg-white rounded border border-borderColor flex-1 relative">
                  <div class="card-body p-5 text-center">
                    <div class="flex justify-center items-center">
                      <img src="@/assets/img/icons/pdf-icon.svg" alt="img" class="mb-3">
                    </div>
                    <h6 class="mb-2 font-medium"><a href="javascript:void(0);">Marklist.pdf</a></h6>
                    <span
                      class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">2.4GB</span>
                  </div>
                  <span class="access-rate rating-select absolute top-2 right-2 "><i class="ti ti-star"></i></span>
                </div>
              </div>
              <div class=" xl:col-span-1 flex">
                <div class="card bg-white rounded border border-borderColor flex-1 relative">
                  <div class="card-body p-5 text-center">
                    <div class="flex justify-center items-center">
                      <img src="@/assets/img/icons/image.svg" alt="img" class="mb-3">
                    </div>
                    <h6 class="mb-2 font-medium"><a href="javascript:void(0);">Nature.png</a></h6>
                    <span
                      class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">2.4GB</span>
                  </div>
                  <span class="access-rate rating-select absolute top-2 right-2 "><i
                      class="ti ti-star-filled text-warning"></i></span>
                </div>
              </div>
              <div class="xl:col-span-1 flex">
                <div class="card bg-white rounded border border-borderColor flex-1 relative">
                  <div class="card-body p-5 text-center">
                    <div class="flex justify-center items-center">
                      <img src="@/assets/img/icons/xls-icon.svg" alt="img" class="mb-3">
                    </div>
                    <h6 class="mb-2 font-medium"><a href="javascript:void(0);">List.xlsx</a></h6>
                    <span
                      class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">2.4GB</span>
                  </div>
                  <span class="access-rate rating-select absolute top-2 right-2 "><i
                      class="ti ti-star-filled text-warning"></i></span>
                </div>
              </div>
              <div class="xl:col-span-1 flex justify-center">
                <div class="card bg-white rounded border border-borderColor flex-1 relative">
                  <div class="card-body p-5 text-center">
                    <div class="flex justify-center items-center">
                      <img src="@/assets/img/icons/folder-icon.svg" alt="img" class="mb-3">
                    </div>
                    <h6 class="mb-2 font-medium"><a href="javascript:void(0);">Group Photos</a></h6>
                    <span
                      class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">2.4GB</span>
                  </div>
                  <span class="access-rate rating-select absolute top-2 right-2 "><i
                      class="ti ti-star-filled text-warning"></i></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="border-b border-borderColor pb-4 mb-4">
            <div class="flex items-center justify-between mb-3">
              <h6 class="0">Recent Folders</h6>
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor rounded py-1 px-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="Last-dropdown">
                  Last 7 Days <i class="ti ti-chevron-down ms-1"></i>
                </a>
                <ul id="Last-dropdown" class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Last
                      7 Days</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Last
                      Month</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Last
                      year</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 flex items-center justify-center w-full">
              <div class="lg:col-span-1">
                <div
                  class="folder-wrap flex-wrap gap-2 border border-borderColor rounded mb-4 hover:shadow-md bg-white p-4 flex justify-between items-center">
                  <div class="flex items-center flex-wrap gap-2">
                    <span class="text-warning text-[30px]">
                      <i class="ti ti-folder-filled"></i>
                    </span>
                    <div class="ms-2">
                      <h6 class="mb-1"><a href="#" data-drawer-target="offcanvas_add2" data-drawer-show="offcanvas_add2"
                          aria-controls="offcanvas_add2" data-drawer-placement="right">Assets</a></h6>
                      <div class="flex items-center">
                        <p class="text-[12px] mb-0 me-2">2.4 GB</p>
                        <p class="text-[12px] mb-0 flex items-center"><i
                            class="ti ti-circle-filled text-[6px] me-2 text-gray-900"></i>135 files</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="avatar-list-stacked avatar-group-sm">
                      <span class="avatar avatar-rounded">
                        <img class="border border-white" src="@/assets/img/profiles/avatar-19.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-rounded">
                        <img class="border border-white" src="@/assets/img/profiles/avatar-10.jpg" alt="img">
                      </span>
                    </div>
                    <div>
                      <div class="ml-2">
                        <a href="javascript:void(0);" class="text-gray-900" data-dropdown-toggle="folder-dropdown">
                          <i class="ti ti-dots"></i>
                        </a>
                        <ul id="folder-dropdown"
                          class="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[200px]">
                          <li class="mb-3">
                            <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview"
                              data-drawer-target="offcanvas_add2" data-drawer-show="offcanvas_add2"
                              aria-controls="offcanvas_add2" data-drawer-placement="right"><i
                                class="ti ti-folder-open me-2"></i>Preview</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-copy me-2"></i>Duplicate</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-arrow-left-right me-2"></i>Move</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-user-plus me-2"></i>Invite</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-share-3 me-2"></i>Share Link</a>
                          </li>
                          <li class="mb-3">
                            <hr class="dropdown-divider border border-borderColor my-2">
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-eye me-2"></i>View Details</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-download me-2"></i>Download</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal" class="dropdown-item rounded-1"><i
                                class="ti ti-trash-x me-2"></i>Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-1">
                <div
                  class="folder-wrap flex-wrap gap-2 border border-borderColor rounded mb-4 hover:shadow-md bg-white p-4 flex justify-between items-center">
                  <div class="flex items-center flex-wrap gap-2">
                    <span class="text-warning text-[30px]">
                      <i class="ti ti-folder-filled"></i>
                    </span>
                    <div class="ms-2">
                      <h6 class="mb-1"><a href="#" data-drawer-target="offcanvas_add2" data-drawer-show="offcanvas_add2"
                          aria-controls="offcanvas_add2" data-drawer-placement="right">Document</a></h6>
                      <div class="flex items-center">
                        <p class="text-[12px] mb-0 me-2">2.4 GB</p>
                        <p class="text-[12px] mb-0 flex items-center"><i
                            class="ti ti-circle-filled text-[6px] me-2 text-gray-900"></i>135 files</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="avatar-list-stacked avatar-group-sm">
                      <span class="avatar avatar-rounded">
                        <img class="border border-white" src="@/assets/img/profiles/avatar-19.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-rounded">
                        <img class="border border-white" src="@/assets/img/profiles/avatar-10.jpg" alt="img">
                      </span>
                    </div>
                    <div>
                      <div class="ml-2">
                        <a href="javascript:void(0);" class="text-gray-900" data-dropdown-toggle="folderone-dropdown">
                          <i class="ti ti-dots"></i>
                        </a>
                        <ul id="folderone-dropdown"
                          class="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[200px]">
                          <li class="mb-3">
                            <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview"
                              class="dropdown-item rounded-1" data-drawer-target="offcanvas_add2"
                              data-drawer-show="offcanvas_add2" aria-controls="offcanvas_add2"
                              data-drawer-placement="right"><i class="ti ti-folder-open me-2"></i>Preview</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-copy me-2"></i>Duplicate</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-arrow-left-right me-2"></i>Move</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-user-plus me-2"></i>Invite</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-share-3 me-2"></i>Share Link</a>
                          </li>
                          <li class="mb-3">
                            <hr class="dropdown-divider border border-borderColor my-2">
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-eye me-2"></i>View Details</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-download me-2"></i>Download</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal" class="dropdown-item rounded-1"><i
                                class="ti ti-trash-x me-2"></i>Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-1">
                <div
                  class="folder-wrap flex-wrap gap-2 border border-borderColor rounded mb-4 hover:shadow-md bg-white p-4 flex justify-between items-center">
                  <div class="flex items-center flex-wrap gap-2">
                    <span class="text-warning text-[30px]">
                      <i class="ti ti-folder-filled"></i>
                    </span>
                    <div class="ms-2">
                      <h6 class="mb-1"><a href="#" data-drawer-target="offcanvas_add2" data-drawer-show="offcanvas_add2"
                          aria-controls="offcanvas_add2" data-drawer-placement="right">Handyimages</a></h6>
                      <div class="flex items-center">
                        <p class="text-[12px] mb-0 me-2">2.4 GB</p>
                        <p class="text-[12px] mb-0 flex items-center"><i
                            class="ti ti-circle-filled text-[6px] me-2 text-gray-900"></i>135 files</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="avatar-list-stacked avatar-group-sm">
                      <span class="avatar avatar-rounded">
                        <img class="border border-white" src="@/assets/img/profiles/avatar-19.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-rounded">
                        <img class="border border-white" src="@/assets/img/profiles/avatar-10.jpg" alt="img">
                      </span>
                    </div>
                    <div>
                      <div class="ml-2">
                        <a href="javascript:void(0);" class="text-gray-900" data-dropdown-toggle="foldertwo-dropdown">
                          <i class="ti ti-dots"></i>
                        </a>
                        <ul id="foldertwo-dropdown"
                          class="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[200px]">
                          <li class="mb-3">
                            <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview"
                              class="dropdown-item rounded-1" data-drawer-target="offcanvas_add2"
                              data-drawer-show="offcanvas_add2" aria-controls="offcanvas_add2"
                              data-drawer-placement="right"><i class="ti ti-folder-open me-2"></i>Preview</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-copy me-2"></i>Duplicate</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-arrow-left-right me-2"></i>Move</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-user-plus me-2"></i>Invite</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-share-3 me-2"></i>Share Link</a>
                          </li>
                          <li class="mb-3">
                            <hr class="dropdown-divider border border-borderColor my-2">
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-eye me-2"></i>View Details</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-download me-2"></i>Download</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal" class="dropdown-item rounded-1"><i
                                class="ti ti-trash-x me-2"></i>Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="border-b border-borderColor pb-4 mb-4">
            <div class="flex items-center justify-between mb-3">
              <h6 class="0">Recent Files</h6>
              <div>
                <a href="javascript:void(0);"
                  class="border border-borderColor rounded py-1 px-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="Modified-dropdown">
                  Last Modified<i class="ti ti-chevron-down ms-1"></i>
                </a>
                <ul id="Modified-dropdown"
                  class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Newest
                      to Oldest</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Last
                      Modified</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Oldest
                      to Newest</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
              <div class="col-span-1">
                <div class="files-wrap border border-borderColor rounded hover:shadow-md ">
                  <div class="bg-dark-transparent p-12 flex items-center justify-center  files-icon">
                    <i class="ti ti-file-description text-[24px] text-gray-900"></i>
                  </div>
                  <div class="bg-white flex items-center justify-between p-3 files-content">
                    <h6 class="font-medium">customer_data.txt</h6>
                    <div>
                      <div class="ml-2">
                        <a href="javascript:void(0);" class="text-gray-900" data-dropdown-toggle="recent-dropdown">
                          <i class="ti ti-dots"></i>
                        </a>
                        <ul id="recent-dropdown"
                          class="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[200px]">
                          <li class="mb-3">
                            <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview"
                              class="dropdown-item rounded-1" data-drawer-target="offcanvas_add2"
                              data-drawer-show="offcanvas_add2" aria-controls="offcanvas_add2"
                              data-drawer-placement="right"><i class="ti ti-folder-open me-2"></i>Preview</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-copy me-2"></i>Duplicate</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-arrow-left-right me-2"></i>Move</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-user-plus me-2"></i>Invite</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-share-3 me-2"></i>Share Link</a>
                          </li>
                          <li class="mb-3">
                            <hr class="dropdown-divider border border-borderColor my-2">
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-eye me-2"></i>View Details</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-download me-2"></i>Download</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal" class="dropdown-item rounded-1"><i
                                class="ti ti-trash-x me-2"></i>Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-1">
                <div class="files-wrap border border-borderColor rounded hover:shadow-md ">
                  <div class="bg-dark-transparent p-12 flex items-center justify-center  files-icon">
                    <i class="ti ti-file-description text-[24px] text-gray-900"></i>
                  </div>
                  <div class="bg-white flex items-center justify-between p-3 files-content">
                    <h6 class="font-medium">customer_data.txt</h6>
                    <div>
                      <div class="ml-2">
                        <a href="javascript:void(0);" class="text-gray-900" data-dropdown-toggle="recentone-dropdown">
                          <i class="ti ti-dots"></i>
                        </a>
                        <ul id="recentone-dropdown"
                          class="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[200px]">
                          <li class="mb-3">
                            <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview"
                              class="dropdown-item rounded-1" data-drawer-target="offcanvas_add2"
                              data-drawer-show="offcanvas_add2" aria-controls="offcanvas_add2"
                              data-drawer-placement="right"><i class="ti ti-folder-open me-2"></i>Preview</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-copy me-2"></i>Duplicate</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-arrow-left-right me-2"></i>Move</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-user-plus me-2"></i>Invite</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-share-3 me-2"></i>Share Link</a>
                          </li>
                          <li class="mb-3">
                            <hr class="dropdown-divider border border-borderColor my-2">
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-eye me-2"></i>View Details</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-download me-2"></i>Download</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal" class="dropdown-item rounded-1"><i
                                class="ti ti-trash-x me-2"></i>Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-1">
                <div class="files-wrap border border-borderColor rounded hover:shadow-md ">
                  <div class="bg-dark-transparent p-12 flex items-center justify-center  files-icon">
                    <i class="ti ti-file-description text-[24px] text-gray-900"></i>
                  </div>
                  <div class="bg-white flex items-center justify-between p-3 files-content">
                    <h6 class="font-medium">customer_data.txt</h6>
                    <div>
                      <div class="ml-2">
                        <a href="javascript:void(0);" class="text-gray-900" data-dropdown-toggle="recenttwo-dropdown">
                          <i class="ti ti-dots"></i>
                        </a>
                        <ul id="recenttwo-dropdown"
                          class="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[200px]">
                          <li class="mb-3">
                            <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview"
                              class="dropdown-item rounded-1" data-drawer-target="offcanvas_add2"
                              data-drawer-show="offcanvas_add2" aria-controls="offcanvas_add2"
                              data-drawer-placement="right"><i class="ti ti-folder-open me-2"></i>Preview</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-copy me-2"></i>Duplicate</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-arrow-left-right me-2"></i>Move</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-user-plus me-2"></i>Invite</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-share-3 me-2"></i>Share Link</a>
                          </li>
                          <li class="mb-3">
                            <hr class="dropdown-divider border border-borderColor my-2">
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-eye me-2"></i>View Details</a>
                          </li>
                          <li class="mb-3">
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"><i
                                class="ti ti-download me-2"></i>Download</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal" class="dropdown-item rounded-1"><i
                                class="ti ti-trash-x me-2"></i>Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Item 4 -->
          <div>
            <div class="flex flex-wrap gap-2 items-center justify-between mb-3">
              <h6 class="0">Files</h6>
              <div class="flex flex-wrap gap-2 items-center">
                <div>
                  <a href="javascript:void(0);"
                    class="border border-borderColor rounded py-1 px-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="table-dropdown">
                    Sort By : Docs Type <i class="ti ti-chevron-down ms-2"></i>
                  </a>
                  <ul id="table-dropdown"
                    class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]">
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Docs</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Pdf</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Image</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Folder</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Xml</a>
                    </li>
                  </ul>
                </div>
                <a href="javascript:void(0);" class="text-danger font-medium link-default ms-2">View All</a>
              </div>
            </div>
            <div class="custom-datatable-filter">
              <table class="table w-full border-b border-borderColor">
                <thead class="thead-light">
                  <tr>
                    <th
                      class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                      Name</th>
                    <th
                      class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                      Size</th>
                    <th
                      class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                      Type</th>
                    <th
                      class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                      Modified</th>
                    <th
                      class="text-sm leading-normal px-5 py-2.5 bg-gray-200  text-gray-900 border-borderColor font-medium text-start">
                      Share</th>
                    <th
                      class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-borderColor">
                  <tr class="even:bg-white dark:even-bg-white">
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="flex justify-start items-center file-name-icon">
                        <a href="#" class="avatar avatar-md avatar-rounded  bg-light flex justify-center items-center ">
                          <img src="@/assets/img/icons/file-01.svg" class="img-fluid w-[20px] h-[20px]" alt="img"></a>
                        <div class="ms-2">
                          <p class="text-gray-900 font-medium  mb-0"><a href="#">Secret</a></p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">7.6 MB</td>
                    <td class="px-5 py-2.5 text-gray-500">Doc</td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <p class="text-gray-900 mb-0">Mar 15, 2025</p>
                      <span>05:00:14 PM</span>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="avatar-list-stacked avatar-group-sm">
                        <span class="avatar avatar-rounded">
                          <img class="border " src="@/assets/img/profiles/avatar-27.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded">
                          <img class="border " src="@/assets/img/profiles/avatar-11.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded">
                          <img class="border " src="@/assets/img/profiles/avatar-12.jpg" alt="img">
                        </span>
                      </div>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="flex items-center">
                        <div class="rating-select me-1">
                          <a href="javascript:void(0);"><i class="ti ti-star"></i></a>
                        </div>
                        <div>
                          <a href="javascript:void(0);" class="text-gray-900" data-dropdown-toggle="tableone-dropdown">
                            <i class="ti ti-dots ms-1"></i>
                          </a>
                          <ul id="tableone-dropdown"
                            class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]">
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                                  class="ti ti-trash me-2"></i>Permanent Delete</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                  class="ti ti-edit-circle me-2"></i>Restore File</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="even:bg-white dark:even-bg-white">
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="flex justify-start items-center file-name-icon">
                        <a href="#" class="avatar avatar-md avatar-rounded  bg-light flex justify-center items-center ">
                          <img src="@/assets/img/icons/file-02.svg" class="img-fluid w-[20px] h-[20px]" alt="img"></a>
                        <div class="ms-2">
                          <p class="text-gray-900 font-medium  mb-0"><a href="#">Sophie Headrick</a></p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">7.4 MB</td>
                    <td class="px-5 py-2.5 text-gray-500">PDF</td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <p class="text-gray-900 mb-0">Jan 8, 2025</p>
                      <span>08:20:13 PM</span>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="avatar-list-stacked avatar-group-sm">
                        <span class="avatar avatar-rounded">
                          <img class="border " src="@/assets/img/profiles/avatar-15.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded">
                          <img class="border " src="@/assets/img/profiles/avatar-16.jpg" alt="img">
                        </span>
                      </div>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="flex items-center">
                        <div class="rating-select me-2">
                          <a href="javascript:void(0);"><i class="ti ti-star"></i></a>
                        </div>
                        <div>
                          <a href="javascript:void(0);" class="text-gray-900" data-dropdown-toggle="tabletwo-dropdown">
                            <i class="ti ti-dots ms-1"></i>
                          </a>
                          <ul id="tabletwo-dropdown"
                            class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]">
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                                  class="ti ti-trash me-2"></i>Permanent Delete</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                  class="ti ti-edit-circle me-2"></i>Restore File</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="even:bg-white dark:even-bg-white">
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="flex justify-start items-center file-name-icon">
                        <a href="#" class="avatar avatar-md avatar-rounded  bg-light flex justify-center items-center ">
                          <img src="@/assets/img/icons/file-03.svg" class="img-fluid w-[20px] h-[20px]" alt="img"></a>
                        <div class="ms-2">
                          <p class="text-gray-900 font-medium  mb-0"><a href="#">Gallery</a></p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">6.1 MB</td>
                    <td class="px-5 py-2.5 text-gray-500">Image</td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <p class="text-gray-900 mb-0">Aug 6, 2025</p>
                      <span>04:10:12 PM</span>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="avatar-list-stacked avatar-group-sm">
                        <span class="avatar avatar-rounded border-0">
                          <img src="@/assets/img/profiles/avatar-02.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded border-0">
                          <img src="@/assets/img/profiles/avatar-03.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded border-0">
                          <img src="@/assets/img/profiles/avatar-05.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded border-0">
                          <img src="@/assets/img/profiles/avatar-06.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded rounded-full bg-primary">
                          <span class="rounded-full">+1</span>

                        </span>
                      </div>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="flex items-center">
                        <div class="rating-select me-2">
                          <a href="javascript:void(0);"><i class="ti ti-star"></i></a>
                        </div>
                        <div>
                          <a href="javascript:void(0);" class="text-gray-900"
                            data-dropdown-toggle="tablethree-dropdown">
                            <i class="ti ti-dots ms-1"></i>
                          </a>
                          <ul id="tablethree-dropdown"
                            class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]">
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                                  class="ti ti-trash me-2"></i>Permanent Delete</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                  class="ti ti-edit-circle me-2"></i>Restore File</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="even:bg-white dark:even-bg-white">
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="flex justify-start items-center file-name-icon">
                        <a href="#" class="avatar avatar-md avatar-rounded  bg-light flex justify-center items-center">
                          <img src="@/assets/img/icons/file-04.svg" class="img-fluid w-[20px] h-[20px]" alt="img"></a>
                        <div class="ms-2">
                          <p class="text-gray-900 font-medium  mb-0"><a href="#">Doris Crowley</a></p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">5.2 MB</td>
                    <td class="px-5 py-2.5 text-gray-500">Folder</td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <p class="text-gray-900 mb-0">Jan 6, 2025</p>
                      <span>03:40:14 PM</span>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="avatar-list-stacked avatar-group-sm">
                        <span class="avatar avatar-rounded border-0">
                          <img src="@/assets/img/profiles/avatar-06.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded border-0">
                          <img src="@/assets/img/profiles/avatar-10.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded border-0">
                          <img src="@/assets/img/profiles/avatar-15.jpg" alt="img">
                        </span>
                      </div>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="flex items-center">
                        <div class="rating-select me-2">
                          <a href="javascript:void(0);"><i class="ti ti-star"></i></a>
                        </div>
                        <div>
                          <a href="javascript:void(0);" class="text-gray-900" data-dropdown-toggle="tablefour-dropdown">
                            <i class="ti ti-dots ms-1"></i>
                          </a>
                          <ul id="tablefour-dropdown"
                            class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]">
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                                  class="ti ti-trash me-2"></i>Permanent Delete</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                  class="ti ti-edit-circle me-2"></i>Restore File</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="even:bg-white dark:even-bg-white">
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="flex justify-start items-center file-name-icon">
                        <a href="#" class="avatar avatar-md avatar-rounded  bg-light flex justify-center items-center">
                          <img src="@/assets/img/icons/file-05.svg" class="img-fluid w-[20px] h-[20px]" alt="img"></a>
                        <div class="ms-2">
                          <p class="text-gray-900 font-medium  mb-0"><a href="#">Cheat_codez</a></p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">8 MB</td>
                    <td class="px-5 py-2.5 text-gray-500">Xml</td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <p class="text-gray-900 mb-0">Oct 12, 2025</p>
                      <span>05:00:14 PM</span>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="avatar-list-stacked avatar-group-sm">
                        <span class="avatar avatar-rounded border-0">
                          <img src="@/assets/img/profiles/avatar-04.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded border-0">
                          <img src="@/assets/img/profiles/avatar-11.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded border-0">
                          <img src="@/assets/img/profiles/avatar-14.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded border-0">
                          <img src="@/assets/img/profiles/avatar-15.jpg" alt="img">
                        </span>
                      </div>
                    </td>
                    <td class="px-5 py-2.5 text-gray-500">
                      <div class="flex items-center">
                        <div class="rating-select me-2">
                          <a href="javascript:void(0);"><i class="ti ti-star"></i></a>
                        </div>
                        <div>
                          <a href="javascript:void(0);" class="text-gray-900" data-dropdown-toggle="tablefive-dropdown">
                            <i class="ti ti-dots ms-1"></i>
                          </a>
                          <ul id="tablefive-dropdown"
                            class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]">
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                                  class="ti ti-trash me-2"></i>Permanent Delete</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                  class="ti ti-edit-circle me-2"></i>Restore File</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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

  <!-- start Create Folder -->
  <div id="create_folder"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Create Folder</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="create_folder">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="mb-4">
              <label class="form-label">Folder Name</label>
              <input type="text" class="form-control">
            </div>
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="create_folder" class="btn btn-light">Cancel</button>
          <button type="button" class="btn btn-primary">Add New Folder</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end edit call modal -->

  <!-- delete modal -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="delete_modal">
    <div class="relative bg-white rounded-defaultradius p-5">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center">
          <div class="mb-3 relative z-[1]">
            <span
              class="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center"><i
                class="ti ti-trash text-[24px]"></i></span>
          </div>
          <h5 class="mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure you want to remove contract you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full" data-modal-hide="delete_modal">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->

  <!-- start Add Memnber Folder -->
  <div id="add_member"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Add Members</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="add_member">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="relative mb-4 w-full">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                <i class="ti ti-search"></i>
              </span>
              <input type="text" placeholder="Search"
                class="pl-9 w-full pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
            </div>

            <ul class="space-y-3 max-h-64 gap-4 overflow-y-auto">
              <li class="mb-3">
                <label class="flex items-center justify-between space-x-2 text-gray-700 cursor-pointer">
                  <span class="flex items-center space-x-2">
                    <img src="@/assets/img/users/user-06.jpg" alt="Elizabeth" class="h-6 w-6 rounded-full">
                    <span>Elizabeth Morgan</span>
                  </span>
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                </label>
              </li>
              <li class="mb-3">
                <label class="flex items-center justify-between space-x-2 text-gray-700 cursor-pointer">
                  <span class="flex items-center space-x-2">
                    <img src="@/assets/img/users/user-40.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                    <span>Katherine Brooks</span>
                  </span>
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                </label>
              </li>
              <li class="mb-3">
                <label class="flex items-center justify-between space-x-2 text-gray-700 cursor-pointer">
                  <span class="flex items-center space-x-2">
                    <img src="@/assets/img/users/user-05.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                    <span>Sophia Lopez</span>
                  </span>
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                </label>
              </li>
              <li class="mb-3">
                <label class="flex items-center justify-between space-x-2 text-gray-700 cursor-pointer">
                  <span class="flex items-center space-x-2">
                    <img src="@/assets/img/users/user-10.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                    <span>John Michael</span>
                  </span>
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                </label>
              </li>
              <li class="mb-3">
                <label class="flex items-center justify-between space-x-2 text-gray-700 cursor-pointer">
                  <span class="flex items-center space-x-2">
                    <img src="@/assets/img/users/user-15.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                    <span>Natalie Brooks</span>
                  </span>
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                </label>
              </li>
              <li>
                <label class="flex items-center justify-between space-x-2 text-gray-700 cursor-pointer">
                  <span class="flex items-center space-x-2">
                    <img src="@/assets/img/users/user-01.jpg" alt="Katherine" class="h-6 w-6 rounded-full">
                    <span>William Turner</span>
                  </span>
                  <input type="checkbox"
                    class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                </label>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- end edit call modal -->

  <!-- Start Preview Offcanvs -->
  <div id="offcanvas_add2"
    class="fixed top-0 right-0 z-[9999] h-screen overflow-y-auto transition-transform translate-x-full bg-white w-100 dark:bg-gray-800"
    tabindex="-1">
    <div class="flex items-center justify-between bg-dark p-4">
      <div>
        <h4 class="mb-1 text-white" data-drawer-target="offcanvas_add2" data-drawer-show="offcanvas_add2"
          aria-controls="offcanvas_add2" data-drawer-placement="right">Preview</h4>
      </div>
      <div class="flex items-center gap-2">
        <a href="#" class="flex items-center justify-center me-3"><i
            class="ti ti-star-filled filled text-warning"></i></a>
        <a href="#" class="flex items-center justify-center text-white me-3"><i class="ti ti-trash"></i></a>
        <a href="#" class="custom-btn-close text-white" data-drawer-hide="offcanvas_add2"
          aria-controls="offcanvas_add2"><i class="ti ti-x"></i></a>
      </div>
    </div>
    <div class="offcanvas-body p-0">
      <div class="bg-light document-wrap text-center p-5">
        <div class="mb-2 flex justify-center">
          <img src="@/assets/img/icons/pdf-icon.svg" alt="icon">
        </div>
        <h6 class="mb-1">Document Final Proof Read<span
            class="badge bg-warning font-normal text-[12px] text-white ms-2">2.4 GB</span></h6>
        <p>Last Accessed on 15 Mar 2025, 08:15:23 PM</p>
      </div>
      <div class="preview-content p-4">
        <h6 class="mb-3">File Info</h6>
        <div class="border rounded flex items-center justify-between p-2 pb-0 gx-2 mb-4">
          <div class="text-center mb-2 border-r pe-5">
            <p class="text-[12px] mb-0">File Type</p>
            <p class="text-dark mb-0">PDF</p>
          </div>
          <div class="text-center mb-2 border-r pe-5">
            <p class="text-[12px] mb-0">Created on</p>
            <p class="text-dark table-nowrap mb-0">22 Feb 2025, 08:30 PM</p>
          </div>
          <div class="text-center mb-2 border-0">
            <p class="text-[12px] mb-0">Location</p>
            <p class="text-dark mb-0">Drive</p>
          </div>
        </div>
        <div class="mb-4">
          <h6 class="mb-2 fw-medium">Description</h6>
          <div class="editor pages-editor"></div>
        </div>
        <h6 class="mb-3">Recent Activity</h6>
        <div class="card shadow-0 border border-borderColor rounded mb-5">
          <div class="card-body p-4 pb-0">
            <h6 class="mb-3 text-[16px]">Today</h6>
            <ul class="recent-activity mb-3">
              <li class="flex mb-4 flex-wrap gap-3 relative">
                <span class="avatar avatar-rounded avatar-lg">
                  <img src="@/assets/img/profiles/avatar-01.jpg" class="rounded-full" alt="img">
                </span>
                <div class="ms-2 flex-1">
                  <p class="mb-0"><span class="text-gray-900">Mercy</span> Added New File in <span
                      class="text-gray-900">Drive</span></p>
                  <p class="mb-0">05:22 PM</p>
                  <div class="bg-light rounded p-2 flex items-center justify-between mt-2 flex-1">
                    <div class="flex items-center">
                      <i class="ti ti-video text-gray-900 text-[16px]"></i>
                      <p class="ms-2">All_files.mp4</p>
                    </div>
                    <span class="text-[12px]">8.2 MB</span>
                  </div>
                </div>
                <span
                  class="absolute border-dashed border border-1 border-borderColor w-[45px] rotate-90 top-[56px] left-[-5px] z-0"></span>
              </li>
              <li class="flex mb-4 flex-wrap gap-3 relative">
                <span class="avatar avatar-lg avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-15.jpg" class="rounded-full" alt="img">
                </span>
                <div class="ms-2 flex-grow-1">
                  <p class="mb-0"><span class="text-gray-900">Druman</span> Added New File in <span
                      class="text-gray-900">ROOT FOLDER</span></p>
                  <p class="mb-0">05:23 PM</p>
                  <div class="bg-light rounded p-2 flex items-center justify-between mt-2">
                    <div class="flex items-center">
                      <i class="ti ti-photo text-gray-900 text-[16px]"></i>
                      <p class="ms-2">WebsiteBackupScreen.png</p>
                    </div>
                    <span class="text-[12px]">3.2 MB</span>
                  </div>
                  <div class="bg-light rounded p-2 flex items-center justify-between mt-2">
                    <div class="flex items-center">
                      <i class="ti ti-file-zip text-gray-900 text-[16px]"></i>
                      <p class="ms-2">Finaldraft.zip</p>
                    </div>
                    <span class="text-[12px]">4 MB</span>
                  </div>
                  <div class="bg-light rounded p-2 flex items-center justify-between mt-1">
                    <div class="flex items-center">
                      <i class="ti ti-photo text-gray-900 text-[16px]"></i>
                      <p class="ms-2">Photo.jpg</p>
                    </div>
                    <span class="text-[12px]">6.5 MB</span>
                  </div>
                </div>
              </li>
            </ul>
            <h6 class="mb-3">28 Jan 2025</h6>
            <ul class="recent-activity mb-3">
              <li class="flex mb-4 flex-wrap gap-3 relative">
                <span class="avatar avatar-lg avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-12.jpg" class="rounded-full" alt="img">
                </span>
                <div class="ms-2 flex-grow-1">
                  <p class="mb-0"><span class="text-gray-900">Mercy</span> Added New File in <span
                      class="text-gray-900">Personal Assets</span></p>
                  <p class="mb-0">05:22 PM</p>
                  <div class="bg-light rounded p-2 flex items-center justify-between mt-2">
                    <div class="flex items-center">
                      <i class="ti ti-photo text-gray-900 text-[16px]"></i>
                      <p class="ms-2">Photo_12.jpg</p>
                    </div>
                    <span class="text-[12px]">6.2 MB</span>
                  </div>
                </div>
                <span
                  class="absolute border-dashed border border-1 border-borderColor w-[45px] rotate-90 top-[56px] left-[-5px] z-0"></span>
              </li>
              <li class="flex mb-4 flex-wrap gap-3">
                <span class="avatar avatar-lg avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-25.jpg" class="rounded-full" alt="img">
                </span>
                <div class="ms-2 flex-grow-1">
                  <p class="mb-0"><span class="text-gray-900">Jackson</span> Added New File in <span
                      class="text-gray-900">Drive</span></p>
                  <p class="mb-0">05:23 PM</p>
                  <div class="bg-light rounded p-2 flex items-center justify-between mt-2">
                    <div class="flex items-center">
                      <i class="ti ti-photo text-gray-900 text-[16px]"></i>
                      <p class="ms-2">Photo.jpg</p>
                    </div>
                    <span class="text-[12px]">15.5 MB</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <h6 class="mb-3">Members</h6>
          <a href="javascript:void(0);" class="text-[12px] mb-3 text-danger" data-modal-target="add_member"
            data-modal-toggle="add_member">Add Members</a>
        </div>
        <div class="card shadow-0 border border-borderColor rounded mb-0">
          <div class="card-body p-5 pb-0">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center mb-2">
                <span class="avatar avatar-lg avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-16.jpg" class="rounded-full" alt="img">
                </span>
                <div class="ms-2">
                  <h6 class="font-medium">Anthony Lewis</h6>
                  <p class="text-[12px]">Finance</p>
                </div>
              </div>
              <a href="javascript:void(0);" class="user-icon mb-2 p-1 rounded hover:bg-dark-transparent">
                <i class="ti ti-user-x text-[16px]"></i>
              </a>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center mb-2">
                <span class="avatar avatar-lg avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-06.jpg" class="rounded-full" alt="img">
                </span>
                <div class="ms-2">
                  <h6 class="font-medium">Harvey Smith</h6>
                  <p class="text-[12px]">Developer</p>
                </div>
              </div>
              <a href="javascript:void(0);" class="user-icon mb-2 p-1 rounded hover:bg-dark-transparent ">
                <i class="ti ti-user-x text-[16px]"></i>
              </a>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center mb-2">
                <span class="avatar avatar-lg avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-02.jpg" class="rounded-full" alt="img">
                </span>
                <div class="ms-2">
                  <h6 class="font-medium">Stephan Peralt</h6>
                  <p class="text-[12px]">Executive Officer</p>
                </div>
              </div>
              <a href="javascript:void(0);" class="user-icon mb-2 p-1 rounded hover:bg-dark-transparent">
                <i class="ti ti-user-x text-[16px]"></i>
              </a>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center mb-2">
                <span class="avatar avatar-lg avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-26.jpg" class="rounded-full" alt="img">
                </span>
                <div class="ms-2">
                  <h6 class="font-medium">Doglas Martini</h6>
                  <p class="text-[12px]">Manager</p>
                </div>
              </div>
              <a href="javascript:void(0);" class="user-icon mb-2 p-1 rounded hover:bg-dark-transparent">
                <i class="ti ti-user-x text-[16px]"></i>
              </a>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center mb-2">
                <span class="avatar avatar-lg avatar-rounded">
                  <img src="@/assets/img/profiles/avatar-01.jpg" class="rounded-full" alt="img">
                </span>
                <div class="ms-2">
                  <h6 class="font-medium">Linda Ray</h6>
                  <p class="text-[12px]">Finance</p>
                </div>
              </div>
              <a href="javascript:void(0);" class="user-icon mb-2 p-1 rounded hover:bg-dark-transparent">
                <i class="ti ti-user-x text-[16px]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Preview Offcanvs -->
</template>

<script>
import { initFlowbite } from 'flowbite';
export default {
  data() {
    return {
      title: "Home",
      text1: "Applications",
      text: "File manager",
    };
  },
  mounted() {
    initFlowbite();
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
