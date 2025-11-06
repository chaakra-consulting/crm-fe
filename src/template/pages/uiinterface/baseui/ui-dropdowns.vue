<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Dropdowns
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
            <li class="text-dark font-medium" aria-current="page">Dropdowns</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <!-- Start::row-1 -->
      <div class="grid grid-cols-1 gap-6">
        <div class="col-span-12">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 border-borderColor">
              <div class="card-title">
                Dropdowns
              </div>
            </div>
            <div class="card-body p-4 flex items-center">
              <div class="dropdown me-2">
                <button class="btn btn-primary dropdown-toggle" type="button" data-dropdown-toggle="dropdown1"
                  aria-expanded="false">
                  Dropdowns
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown1">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#">Another action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#">Something else here</a></li>
                </ul>
              </div>
              <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-dropdown-toggle="dropdown2"
                  aria-expanded="false">
                  Dropdown Link
                  <i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown2">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#">Another action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End::row-1 -->

      <!-- Start:: row-2 -->
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 border-borderColor">
              <div class="card-title">
                Single dropdown buttons
              </div>
            </div>
            <div class="card-body flex gap-3 items-center flex-wrap p-4">
              <div class="dropdown me-2">
                <button class="btn btn-primary dropdown-toggle" type="button" data-dropdown-toggle="dropdown3"
                  aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown3">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-dropdown-toggle="dropdown4"
                  aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown4">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-warning dropdown-toggle" type="button" data-dropdown-toggle="dropdown5"
                  aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown5">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-success dropdown-toggle" type="button" data-dropdown-toggle="dropdown6"
                  aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown6">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-info dropdown-toggle" type="button" data-dropdown-toggle="dropdown7"
                  aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown7">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-danger dropdown-toggle" type="button" data-dropdown-toggle="dropdown8"
                  aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown8">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 border-borderColor">
              <div class="card-title">
                Rounded Button Dropdowns
              </div>
            </div>
            <div class="card-body flex gap-3 items-center flex-wrap p-4">
              <div class="dropdown me-2">
                <button class="btn btn-primary rounded-s-full rounded-e-full dropdown-toggle" type="button"
                  data-dropdown-toggle="dropdown9" aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown9">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-secondary rounded-s-full rounded-e-full dropdown-toggle" type="button"
                  data-dropdown-toggle="dropdown10" aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown10">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-warning rounded-s-full rounded-e-full dropdown-toggle" type="button"
                  data-dropdown-toggle="dropdown11" aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown11">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-success rounded-s-full rounded-e-full dropdown-toggle" type="button"
                  data-dropdown-toggle="dropdown12" aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown12">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-info rounded-s-full rounded-e-full dropdown-toggle" type="button"
                  data-dropdown-toggle="dropdown13" aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown13">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-danger rounded-s-full rounded-e-full dropdown-toggle" type="button"
                  data-dropdown-toggle="dropdown14" aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown14">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 border-borderColor">
              <div class="card-title">
                Outline Button Dropdowns
              </div>
            </div>
            <div class="card-body flex gap-3 items-center flex-wrap p-4">
              <div class="dropdown me-2">
                <button class="btn btn-outline-primary dropdown-toggle" type="button" data-dropdown-toggle="dropdown15"
                  aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown15">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                  data-dropdown-toggle="dropdown16" aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown16">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-outline-warning dropdown-toggle" type="button" data-dropdown-toggle="dropdown17"
                  aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown17">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-outline-success dropdown-toggle" type="button" data-dropdown-toggle="dropdown18"
                  aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown18">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-outline-info dropdown-toggle" type="button" data-dropdown-toggle="dropdown19"
                  aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown19">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-outline-danger dropdown-toggle" type="button" data-dropdown-toggle="dropdown20"
                  aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown20">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 border-borderColor">
              <div class="card-title">
                Rounded Outline Dropdowns
              </div>
            </div>
            <div class="card-body flex gap-3 items-center flex-wrap p-4">
              <div class="dropdown me-2">
                <button class="btn btn-outline-primary rounded-s-full rounded-e-full dropdown-toggle" type="button"
                  data-dropdown-toggle="dropdown21" aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown21">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-outline-secondary rounded-s-full rounded-e-full dropdown-toggle" type="button"
                  data-dropdown-toggle="dropdown22" aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown22">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-outline-warning rounded-s-full rounded-e-full dropdown-toggle" type="button"
                  data-dropdown-toggle="dropdown23" aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown23">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-outline-success rounded-s-full rounded-e-full dropdown-toggle" type="button"
                  data-dropdown-toggle="dropdown24" aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown24">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-outline-info rounded-s-full rounded-e-full dropdown-toggle" type="button"
                  data-dropdown-toggle="dropdown25" aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown25">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button class="btn btn-outline-danger rounded-s-full rounded-e-full dropdown-toggle" type="button"
                  data-dropdown-toggle="dropdown26" aria-expanded="false">
                  Action
                  <i class="ti ti-chevron-down ml-1"></i>
                </button>
                <ul class="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden" id="dropdown26">
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Action</a></li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Another action</a>
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Something else
                      here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a
                      class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      href="javascript:void(0);">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End:: row-2 -->

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