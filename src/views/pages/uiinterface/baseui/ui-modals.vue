<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Modals
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
            <li class="text-dark font-medium" aria-current="page">Modals</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-3 gap-x-6">

        <!-- Basic Modal -->
        <div class="col-xl-4">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Basic Modal</h5>
            </div>
            <div class="card-body p-4">

              <div id="standard-modal"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
                <div class="modal-dialog w-full max-w-[500px] max-h-full">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="standard-modalLabel">Modal Heading</h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="standard-modal">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <h6>Text in a modal</h6>
                      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                      <hr>
                      <h6>Overflowing text to show scroll behavior</h6>
                      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros.</p>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                        auctor.</p>
                      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                        cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                        dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-light me-2" data-modal-hide="standard-modal">Close</button>
                      <button type="button" class="btn btn-primary">Save Changes</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="button-list">
                <!-- Standard  modal -->
                <button type="button" class="btn btn-primary mt-1" data-modal-toggle="standard-modal"
                  data-modal-target="standard-modal">Launch Demo Modal</button>
              </div>
            </div>
          </div>
        </div>
        <!-- /Basic Modal -->

        <!-- Static Backdrop -->
        <div class="col-xl-4">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Static Backdrop</h5>
            </div>
            <div class="card-body p-4 card-buttons">
              <button type="button" class="btn btn-primary" data-modal-toggle="staticBackdrop"
                data-modal-target="staticBackdrop">
                Launch static backdrop modal
              </button>

              <!-- Modal -->
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="staticBackdrop" data-modal-backdrop="static" aria-hidden="true">
                <div class="modal-dialog w-full max-w-[500px] max-h-full">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="staticBackdrop">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                      terry richardson ad squid. 3 wolf moon officia aute,
                      non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                      laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                      assumenda shoreditch et.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-light me-2" data-modal-hide="staticBackdrop">Close</button>
                      <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Static Backdrop -->

        <!-- Scrolling Long Content -->
        <div class="col-xl-4">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Scrolling Long Content</h5>
            </div>
            <div class="card-body p-4 card-buttons">
              <button type="button" class="btn btn-primary" data-modal-toggle="scrollable-modal"
                data-modal-target="scrollable-modal">
                Scrolling Long Content
              </button>

              <!-- Long Content Scroll Modal -->
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="scrollable-modal" tabindex="-1" role="dialog" aria-labelledby="scrollableModalTitle"
                aria-hidden="true">
                <div class="modal-dialog w-full max-w-[500px] max-h-100 modal-dialog-scrollable" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="scrollableModalTitle">Modal title</h5>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="scrollable-modal">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body overflow-y-auto max-h-[300px]">
                      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas
                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.</p>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue
                        laoreet rutrum faucibus dolor auctor.</p>
                      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                        cursus magna, vel scelerisque nisl
                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.</p>
                      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas
                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.</p>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue
                        laoreet rutrum faucibus dolor auctor.</p>
                      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                        cursus magna, vel scelerisque nisl
                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.</p>
                      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas
                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.</p>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue
                        laoreet rutrum faucibus dolor auctor.</p>
                      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                        cursus magna, vel scelerisque nisl
                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.</p>
                      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas
                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.</p>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue
                        laoreet rutrum faucibus dolor auctor.</p>
                      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                        cursus magna, vel scelerisque nisl
                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.</p>
                      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas
                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.</p>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue
                        laoreet rutrum faucibus dolor auctor.</p>
                      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                        cursus magna, vel scelerisque nisl
                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.</p>
                      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas
                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.</p>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue
                        laoreet rutrum faucibus dolor auctor.</p>
                      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                        cursus magna, vel scelerisque nisl
                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-light me-2" data-modal-hide="scrollable-modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Modal -->
            </div>
          </div>
        </div>
        <!-- /Scrolling Long Content -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-3 gap-x-6">

        <!-- Using the Grid -->
        <div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor justify-between p-4 border-b">
              <div class="card-title">
                <h5 class="card-title">Using the grid</h5>
              </div>
            </div>
            <div class="card-body p-4">
              <button type="button" class="btn btn-primary" data-modal-toggle="exampleModalScrollable5"
                data-modal-target="exampleModalScrollable5">
                Launch demo modal
              </button>
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalScrollable5" tabindex="-1" aria-labelledby="exampleModalScrollable5"
                data-bs-keyboard="false" aria-hidden="true">
                <div class="modal-dialog w-full max-w-[500px] max-h-full modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="staticBackdropLabel5">Modal title
                      </h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalScrollable5">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="container-fluid">
                        <div class="grid grid-cols-12">
                          <div class="col-span-4 bg-light border">.col-md-4</div>
                          <div class="col-span-4 ms-auto bg-light border">.col-md-4
                            .ms-auto</div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-md-3 ms-auto bg-light border">.col-md-3
                            .ms-auto</div>
                          <div class="col-md-2 ms-auto bg-light border">.col-md-2
                            .ms-auto</div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-md-6 ms-auto bg-light border">.col-md-6
                            .ms-auto</div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-sm-9 bg-light border">
                            Level 1: .col-sm-9
                            <div class="row">
                              <div class="col-8 col-sm-6 bg-light border">
                                Level 2: .col-8 .col-sm-6
                              </div>
                              <div class="col-4 col-sm-6 bg-light border">
                                Level 2: .col-4 .col-sm-6
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-light me-2"
                        data-modal-hide="exampleModalScrollable5">Close</button>
                      <button type="button" class="btn btn-primary">Save
                        Changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Using the Grid -->

        <!-- Toggle Between Modals -->
        <div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor border-b p-4">
              <h5 class="card-title">Toggle Between Modals</h5>
            </div>
            <div class="card-body p-4">
              <!-- Modal -->
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalToggle" aria-hidden="true" tabindex="-1">
                <div class="modal-dialog w-full max-w-[500px] max-h-full modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Modal 1</h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalToggle">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Show a second modal and hide this one with the button below.
                    </div>
                    <div class="modal-footer">
                      <button class="btn btn-primary" data-modal-target="exampleModalToggle2"
                        data-modal-toggle="exampleModalToggle2">Open second
                        modal</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Modal -->

              <!-- Modal -->
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalToggle2" aria-hidden="true" tabindex="-1">
                <div class="modal-dialog w-full max-w-[500px] max-h-full modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Modal 2</h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalToggle2">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Hide this modal and show the first with the button below.
                    </div>
                    <div class="modal-footer">
                      <button class="btn btn-primary" data-modal-target="exampleModalToggle"
                        data-modal-toggle="exampleModalToggle" data-modal-hide="exampleModalToggle2">Back to
                        first</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Modal -->

              <a class="btn btn-primary" data-modal-toggle="exampleModalToggle" data-modal-target="exampleModalToggle"
                href="#" role="button">Open first modal</a>

            </div>
          </div>
        </div>
        <!-- /Toggle Between Modals -->

        <!-- Optional Sizes -->
        <div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Optional Sizes</h5>
            </div>
            <div class="card-body p-4">

              <!--  Modal -->
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                aria-hidden="true">
                <div class="modal-dialog w-full max-w-[800px] max-h-full modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="myLargeModalLabel">Large modal</h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="bs-example-modal-lg">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Modal -->

              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
                aria-hidden="true">
                <div class="modal-dialog w-full max-w-[300px] max-h-full modal-sm">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="mySmallModalLabel">Small modal</h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="bs-example-modal-sm">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Modal -->

              <!-- Modal -->
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-hidden="true">
                <div class="modal-dialog w-full max-w-[800px] max-h-full modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="exampleModalLgLabel">Extra Large Modal
                      </h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalLg">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Modal -->

              <div class="button-list">
                <button type="button" class="btn btn-primary mt-1" data-modal-toggle="exampleModalLg"
                  data-modal-target="exampleModalLg">Extra Large Modal</button>
                <button type="button" class="btn btn-primary mt-1" data-modal-toggle="bs-example-modal-lg"
                  data-modal-target="bs-example-modal-lg">Large Modal</button>
                <button type="button" class="btn btn-primary mt-1" data-modal-toggle="bs-example-modal-sm"
                  data-modal-target="bs-example-modal-sm">Small Modal</button>
              </div>
            </div>
          </div>
        </div>
        <!-- /Optional Sizes -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Modal with Pages -->
        <div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Modal with Pages</h5>
            </div>
            <div class="card-body card-buttons p-4">
              <!-- Modal -->
              <div id="signup-modal"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog w-full max-w-[500px] max-h-full modal-lg">
                  <div class="modal-content">

                    <div class="modal-body">
                      <div class="text-center mt-2 mb-4">
                        <div class="auth-logo">
                          <a href="javascript:void(0);" class="logo logo-dark">
                            <span class="logo-lg">
                              <!-- <img src="@/assets/img/logo.png" alt="Logo" height="42"> -->
                            </span>
                          </a>
                        </div>
                      </div>

                      <form class="px-3" action="#">

                        <div class="mb-3">
                          <label class="block mb-1 text-sm leading-normal font-medium text-title">Last Name</label>
                          <input type="text"
                            class="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                            placeholder="Michael Zenaty">
                        </div>

                        <div class="mb-3">
                          <label class="block mb-1 text-sm leading-normal font-medium text-title">Email address</label>
                          <input type="text"
                            class="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                            placeholder="john@deo.com">
                        </div>

                        <div class="mb-3">
                          <label class="block mb-1 text-sm leading-normal font-medium text-title">Password</label>
                          <input type="password"
                            class="bg-white border border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                            placeholder="john@deo.com">
                        </div>

                        <div class="mb-3">
                          <div class="form-check form-check-md mb-0">

                            <label class="flex items-center ">
                              <input
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                type="checkbox">
                              <span>I accept Terms and Conditions</span>
                            </label>
                          </div>
                        </div>

                        <div class="mb-3 text-center">
                          <button class="btn btn-primary" type="submit">Sign Up
                            Free</button>
                        </div>

                      </form>

                    </div>
                  </div>
                </div>
              </div>
              <!-- /Modal -->

              <!-- Modal -->
              <div id="login-modal"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog w-full max-w-[500px] max-h-full modal-lg">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div class="text-center mt-2 mb-4">
                        <div class="auth-logo">
                          <a href="javascript:void(0);" class="logo logo-dark">
                            <span class="logo-lg">
                              <!-- <img src="@/assets/img/logo.png" alt="Logo" height="42"> -->
                            </span>
                          </a>
                        </div>
                      </div>

                      <form action="#" class="px-3">

                        <div class="mb-3">
                          <label for="emailaddress1" class="form-label">Email
                            address</label>
                          <input class="form-control" type="email" id="emailaddress1" required=""
                            placeholder="john@deo.com">
                        </div>

                        <div class="mb-3">
                          <label for="password1" class="form-label">Password</label>
                          <input class="form-control" type="password" required="" id="password1"
                            placeholder="Enter your password">
                        </div>

                        <div class="mb-3">
                          <label class="flex items-center ">
                            <input
                              class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              type="checkbox">
                            <span>Remember me</span>
                          </label>
                        </div>

                        <div class="mb-2 text-center">
                          <button class="btn rounded-pill btn-primary" type="submit">Sign
                            In</button>
                        </div>

                      </form>

                    </div>
                  </div>
                </div>
              </div>
              <!-- /Modal -->

              <div class="button-list">
                <!-- Sign Up modal -->
                <button type="button" class="btn btn-primary mt-1" data-modal-toggle="signup-modal"
                  data-modal-target="signup-modal">Sign Up Modal</button>
                <!-- Log In modal -->
                <button type="button" class="btn btn-primary mt-1" data-modal-toggle="login-modal"
                  data-modal-target="login-modal">Log In Modal</button>
              </div>

            </div>
          </div>
        </div>
        <!-- /Modal with Pages -->

        <!-- Custom Modals -->
        <div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Custom Modals</h5>
            </div>
            <div class="card-body p-4">

              <!-- sample modal content -->
              <div id="con-close-modal"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog w-full max-w-[500px] max-h-full">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Modal Content is Responsive</h4>
                      <button type="button" class="btn-close" data-modal-hide="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="field-1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="field-1" placeholder="John">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="field-2" class="form-label">Surname</label>
                            <input type="text" class="form-control" id="field-2" placeholder="Doe">
                          </div>
                        </div>
                      </div>
                      <div class="grid grid-cols-2 xl:grid-cols-1">
                        <div class="col-md-12">
                          <div class="mb-3">
                            <label for="field-3" class="form-label">Address</label>
                            <input type="text" class="form-control" id="field-3" placeholder="Address">
                          </div>
                        </div>
                      </div>
                      <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        <div class="col-md-4">
                          <div class="mb-3">
                            <label for="field-4" class="form-label">City</label>
                            <input type="text" class="form-control" id="field-4" placeholder="Boston">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="mb-3">
                            <label for="field-5" class="form-label">Country</label>
                            <input type="text" class="form-control" id="field-5" placeholder="United States">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="mb-3">
                            <label for="field-6" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="field-6" placeholder="123456">
                          </div>
                        </div>
                      </div>
                      <div class="grid grid-cols-1 xl:grid-cols-1 gap-6">
                        <div class="col-md-12">
                          <div>
                            <label for="field-7" class="form-label">Personal
                              Info</label>
                            <textarea class="form-control" id="field-7"
                              placeholder="Write something about yourself"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-light me-2 waves-effect"
                        data-modal-hide="con-close-modal">Close</button>
                      <button type="button" class="btn btn-primary waves-effect waves-light">Save
                        changes</button>
                    </div>
                  </div>
                </div>
              </div><!-- /Modal -->

              <div id="accordion-modal"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog w-full max-w-[500px] max-h-full">
                  <div class="modal-content p-0">
                    <div id="accordion-collapse" data-accordion="collapse" data-active-classes="bg-white text-gray-900">
                      <div class="card mb-0 p-4 border-b">
                        <h2 class="accordion-header" id="headingOne">
                          <button class="flex justify-between items-center text-sm w-full text-start text-gray-300"
                            type="button" data-accordion-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            Collapsible Group Item #1

                          </button>
                        </h2>

                        <div id="collapseOne" class="hidden p-3 px-0" aria-labelledby="headingOne">
                          <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia
                            aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon
                            tempor, sunt aliqua put a bird on it squid single-origin
                            coffee nulla assumenda shoreditch et. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan
                            excepteur butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </div>
                        </div>
                      </div>
                      <div class="card mb-0 p-4 border-b">
                        <h2 class="accordion-header" id="heading2">
                          <button class="flex justify-between items-center text-sm w-full text-start text-gray-300"
                            type="button" data-accordion-target="#collapse2" aria-expanded="true"
                            aria-controls="collapse2">
                            Collapsible Group Item #2

                          </button>
                        </h2>
                        <div id="collapse2" class="hidden p-3 px-0" aria-labelledby="heading2">
                          <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia
                            aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon
                            tempor, sunt aliqua put a bird on it squid single-origin
                            coffee nulla assumenda shoreditch et. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan
                            excepteur butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </div>
                        </div>
                      </div>
                      <div class="card mb-0 p-4 border-b">
                        <h2 class="accordion-header" id="heading3">
                          <button class="flex justify-between items-center text-sm w-full text-start text-gray-300"
                            type="button" data-accordion-target="#collapse3" aria-expanded="true"
                            aria-controls="collapse3">
                            Collapsible Group Item #3

                          </button>
                        </h2>
                        <div id="collapse3" class="hidden p-3 px-0" aria-labelledby="heading3">
                          <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia
                            aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon
                            tempor, sunt aliqua put a bird on it squid single-origin
                            coffee nulla assumenda shoreditch et. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan
                            excepteur butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div><!-- /Modal -->

              <div class="button-list">
                <!-- Responsive modal -->
                <button type="button" class="btn btn-primary waves-effect waves-light mt-1"
                  data-modal-toggle="con-close-modal" data-modal-target="con-close-modal">Responsive
                  Modal</button>
                <!-- Accordion modal -->
                <button type="button" class="btn btn-secondary waves-effect waves-light mt-1"
                  data-modal-toggle="accordion-modal" data-modal-target="accordion-modal">Accordion in
                  Modal</button>
              </div>
            </div>
          </div>
        </div>
        <!-- /Custom Modals -->

      </div>

      <div class="grid grid-cols-1 xl:grid-cols-3 gap-x-6">

        <!-- Vertically Centered Modal -->
        <div class="col-xl-4">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor justify-between border-b p-4">
              <div class="card-title">
                <h5 class="card-title">Vertically Centered Modal</h5>
              </div>
            </div>
            <div class="card-body p-4">
              <button type="button" class="btn btn-primary" data-modal-toggle="exampleModalScrollable2"
                data-modal-target="exampleModalScrollable2">
                Vertically centered modal
              </button>
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalScrollable2" tabindex="-1" aria-labelledby="exampleModalScrollable2"
                data-bs-keyboard="false" aria-hidden="true">
                <!-- Scrollable modal -->
                <div class="modal-dialog modal-dialog-centered w-full max-w-[500px] max-h-full">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="staticBackdropLabel2">Modal title
                      </h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalScrollable2">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Libero
                        ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                        nisi
                        ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-light me-2"
                        data-modal-hide="exampleModalScrollable2">Close</button>
                      <button type="button" class="btn btn-primary">Save
                        Changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Vertically Centered Modal -->

        <!-- Vertically Centered Scrollable -->
        <div class="col-xl-4">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor justify-between border-b p-4">
              <div class="card-title">
                <h5 class="card-title">Vertical Centered Scrollable</h5>
              </div>
            </div>
            <div class="card-body p-4">
              <button type="button" class="btn btn-primary" data-modal-toggle="exampleModalScrollable3"
                data-modal-target="exampleModalScrollable3">
                Vertically centered scrollable modal
              </button>
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalScrollable3" tabindex="-1" aria-labelledby="exampleModalScrollable3"
                data-bs-keyboard="false" aria-hidden="true">
                <!-- Scrollable modal -->
                <div
                  class="modal-dialog modal-dialog-centered modal-dialog-scrollable w-full max-w-[500px] max-h-[500px] overflow-y-auto">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="staticBackdropLabel3">Modal title
                      </h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalScrollable3">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                        voluptatibus, ipsam quo est rerum modi quos expedita facere,
                        ex
                        tempore fuga similique ipsa blanditiis et accusamus
                        temporibus
                        commodi voluptas! Nobis veniam illo architecto expedita quam
                        ratione quaerat omnis. In, recusandae eos! Pariatur,
                        deleniti
                        quis ad nemo ipsam officia temporibus, doloribus fuga
                        asperiores
                        ratione distinctio velit alias hic modi praesentium aperiam
                        officiis eaque, accusamus aut. Accusantium assumenda,
                        commodi
                        nulla provident asperiores fugit inventore iste amet aut
                        placeat
                        consequatur reprehenderit. Ratione tenetur eligendi, quis
                        aperiam dolores magni iusto distinctio voluptatibus minus a
                        unde
                        at! Consequatur voluptatum in eaque obcaecati, impedit
                        accusantium ea soluta, excepturi, quasi quia commodi
                        blanditiis?
                        Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                        consequuntur quod quo veniam? Labore dignissimos reiciendis
                        accusamus recusandae est consequuntur iure.</p>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-light me-2"
                        data-modal-hide="exampleModalScrollable3">Close</button>
                      <button type="button" class="btn btn-primary">Save
                        Changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Vertically Centered Scrollable -->

        <!-- Tooltips and popovers -->
        <div class="col-xl-4">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor justify-between border-b p-4">
              <div class="card-title">
                <h5 class="card-title">Tooltips and popovers</h5>
              </div>
            </div>
            <div class="card-body p-4">
              <button type="button" class="btn btn-primary" data-modal-toggle="exampleModalScrollable4"
                data-modal-target="exampleModalScrollable4">
                Launch demo modal
              </button>
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalScrollable4" tabindex="-1" aria-labelledby="exampleModalScrollable4"
                data-bs-keyboard="false" aria-hidden="true">
                <!-- Scrollable modal -->
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable w-full max-w-[500px] max-h-full">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="staticBackdropLabel4">Modal title
                      </h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalScrollable4">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <h5>Popover in a modal</h5>
                      <p>This <a href="#" role="button" class="btn btn-secondary mb-4" data-bs-toggle="popover"
                          title="Popover title"
                          data-bs-content="Popover body content is set in this attribute.">button</a>
                        triggers a popover on click.</p>

                      <h5>Tooltips in a modal</h5>
                      <p><a href="#" class="text-primary" data-bs-toggle="tooltip" title="Tooltip">This
                          link</a> and <a href="#" class="text-primary" data-bs-toggle="tooltip" title="Tooltip">that
                          link</a> have
                        tooltips on hover.
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-light me-2"
                        data-modal-hide="exampleModalScrollable4">Close</button>
                      <button type="button" class="btn btn-primary">Save
                        Changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Tooltips and popovers -->

      </div>

      <div class="grid gdid-cols-1">

        <!-- Fullscreen Modal -->
        <div class="col-xl-12">
          <div class="border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor justify-between p-4 border-b">
              <div class="card-title">
                <h5 class="card-title">Fullscreen Modal</h5>
              </div>
            </div>
            <div class="card-body p-4">
              <div class="bd-example">
                <button type="button" class="btn btn-primary mb-1" data-modal-toggle="exampleModalFullscreen"
                  data-modal-target="exampleModalFullscreen">Full screen</button>
                <button type="button" class="btn btn-secondary mb-1" data-modal-toggle="exampleModalFullscreenSm"
                  data-modal-target="exampleModalFullscreenSm">Full screen below sm</button>
                <button type="button" class="btn btn-warning mb-1" data-modal-toggle="exampleModalFullscreenMd"
                  data-modal-target="exampleModalFullscreenMd">Full screen below md</button>
                <button type="button" class="btn btn-info mb-1" data-modal-toggle="exampleModalFullscreenLg"
                  data-modal-target="exampleModalFullscreenLg">Full screen below lg</button>
                <button type="button" class="btn btn-success mb-1" data-modal-toggle="exampleModalFullscreenXl"
                  data-modal-target="exampleModalFullscreenXl">Full screen below xl</button>
                <button type="button" class="btn btn-danger mb-1" data-modal-toggle="exampleModalFullscreenXxl"
                  data-modal-target="exampleModalFullscreenXxl">Full screen below
                  xxl</button>
              </div>
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-fullscreen modal-dialog-scrollable w-full max-w-full h-full max-h-full">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="exampleModalFullscreenLabel">Full
                        screen modal</h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalFullscreen">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary"
                        data-modal-hide="exampleModalFullscreen">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalFullscreenSm" tabindex="-1" aria-labelledby="exampleModalFullscreenSmLabel"
                aria-hidden="true">
                <div
                  class="modal-dialog modal-fullscreen-sm-down modal-dialog-scrollable w-full max-w-[500px] max-h-full">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="exampleModalFullscreenSmLabel">
                        Full
                        screen below sm</h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalFullscreenSm">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary"
                        data-modal-hide="exampleModalFullscreenSm">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalFullscreenMd" tabindex="-1" aria-labelledby="exampleModalFullscreenMdLabel"
                aria-hidden="true">
                <div
                  class="modal-dialog modal-fullscreen-md-down modal-dialog-scrollable w-full max-w-[500px] max-h-full">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="exampleModalFullscreenMdLabel">
                        Full
                        screen below md</h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalFullscreenMd">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary"
                        data-modal-hide="exampleModalFullscreenMd">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalFullscreenLg" tabindex="-1" aria-labelledby="exampleModalFullscreenLgLabel"
                aria-hidden="true">
                <div
                  class="modal-dialog modal-fullscreen-lg-down modal-dialog-scrollable w-full max-w-[500px] max-h-full">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="exampleModalFullscreenLgLabel">
                        Full
                        screen below lg</h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalFullscreenLg">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary"
                        data-modal-hide="exampleModalFullscreenLg">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalFullscreenXl" tabindex="-1" aria-labelledby="exampleModalFullscreenXlLabel"
                aria-hidden="true">
                <div
                  class="modal-dialog modal-fullscreen-xl-down modal-dialog-scrollable w-full max-w-[500px] max-h-full">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="exampleModalFullscreenXlLabel">
                        Full
                        screen below xl</h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalFullscreenXl">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary"
                        data-modal-hide="exampleModalFullscreenXl">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalFullscreenXxl" tabindex="-1" aria-labelledby="exampleModalFullscreenXxlLabel"
                aria-hidden="true">
                <div
                  class="modal-dialog modal-fullscreen-xxl-down modal-dialog-scrollable w-full max-w-full max-h-full h-full">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="exampleModalFullscreenXxlLabel">
                        Full
                        screen below xxl</h4>
                      <button type="button"
                        class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalFullscreenXxl">
                        <i class="ti ti-x"></i>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary"
                        data-modal-hide="exampleModalFullscreenXxl">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Fullscreen Modal -->

      </div>

      <div class="grid gdid-cols-1">

        <!-- Varying Modal Content -->
        <div class="col-xl-12">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor justify-between border-b p-4">
              <div class="card-title">
                <h5 class="card-title">Varying Modal Content</h5>
              </div>
            </div>
            <div class="card-body p-4">
              <button type="button" class="btn btn-primary mb-1" data-modal-toggle="formmodal"
                data-modal-target="formmodal" data-modal-whatever="@mdo">Open modal for
                @mdo</button>
              <button type="button" class="btn btn-secondary mb-1" data-modal-toggle="formmodal"
                data-modal-target="formmodal" data-modal-whatever="@fat">Open modal for
                @fat</button>
              <button type="button" class="btn btn-light mb-1" data-modal-toggle="formmodal"
                data-modal-target="formmodal" data-modal-whatever="@getbootstrap">Open modal for
                @getbootstrap</button>
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="formmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable w-full max-w-[500px] max-h-full">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="exampleModalLabel">New message</h4>
                      <button type="button" class="btn-close" data-modal-hide="formmodal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <label for="recipient-name" class="col-form-label">Recipient:</label>
                          <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="mb-3">
                          <label for="message-text" class="col-form-label">Message:</label>
                          <textarea class="form-control" id="message-text"></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-modal-hide="formmodal">Close</button>
                      <button type="button" class="btn btn-primary">Send
                        message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Varying Modal Content -->

      </div>

      <div class="row hidden">

        <!-- Modal Animation Effects -->
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header border-borderColor justify-between">
              <div class="card-title">
                <h5 class="card-title">Modal Animation Effects</h5>
              </div>
            </div>
            <div class="card-body pb-1">
              <div class="row ">
                <div class="col-sm-6 col-md-4 col-xl-3">
                  <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-scale"
                    data-modal-toggle="modaldemo8" href="#modaldemo8">Scale</a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-3">
                  <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-right"
                    data-modal-toggle="modaldemo8" href="#modaldemo8">Slide In Right</a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-3">
                  <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-bottom"
                    data-bs-toggle="modal" href="#modaldemo8">Slide In Bottom</a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-3">
                  <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-newspaper"
                    data-bs-toggle="modal" href="#modaldemo8">Newspaper</a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-3">
                  <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-fall"
                    data-bs-toggle="modal" href="#modaldemo8">Fall</a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-3">
                  <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-horizontal"
                    data-bs-toggle="modal" href="#modaldemo8">Flip Horizontal</a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-3">
                  <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-vertical"
                    data-bs-toggle="modal" href="#modaldemo8">Flip Vertical</a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-3">
                  <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-super-scaled"
                    data-bs-toggle="modal" href="#modaldemo8">Super Scaled</a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-3">
                  <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-sign"
                    data-bs-toggle="modal" href="#modaldemo8">Sign</a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-3">
                  <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-bottom"
                    data-bs-toggle="modal" href="#modaldemo8">Rotate Bottom</a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-3">
                  <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-left"
                    data-bs-toggle="modal" href="#modaldemo8">Rotate Left</a>
                </div>
              </div>
              <div
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="modaldemo8">
                <div
                  class="modal-dialog modal-dialog-centered text-center modal-dialog-scrollable w-full max-w-[500px] max-h-full"
                  role="document">
                  <div class="modal-content modal-content-demo">
                    <div class="modal-header">
                      <h4 class="modal-title">Message Preview</h4><button aria-label="Close" class="btn-close"
                        data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-start">
                      <h6>Why We Use Electoral College, Not Popular Vote</h6>
                      <p class="text-muted mb-0">It is a long established fact that a reader
                        will be distracted by the readable content of a page when looking at
                        its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed to using
                        'Content here, content here', making it look like readable English.
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button class="btn btn-primary">Save changes</button> <button class="btn btn-light me-2"
                        data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Modal Animation Effects -->

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
