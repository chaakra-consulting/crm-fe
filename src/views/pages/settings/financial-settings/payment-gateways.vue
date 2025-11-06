<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">

      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Settings
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Settings</li>
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
      <!-- End Page Header -->

      <settings-tabs></settings-tabs>

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
        <financial-sidebar></financial-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">Payment Gateways</h5>
            </div>

            <div class="border border-borderColor rounded shadow p-3 mb-4">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-5 gap-x-6">
                <div class="md:col-span-5">
                  <div class="flex items-center">
                    <span>
                      <img src="@/assets/img/payments/payment-1.svg" alt="Img">
                    </span>
                    <div class="ms-2">
                      <a href="javascript:void(0);"
                        class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2">Connected
                      </a>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-7">
                  <div class="flex items-center justify-between" data-accordion="collapse">
                    <div>
                      <a href="javascript:void(0);" data-accordion-target="#task-accordion-body-1" aria-expanded="false"
                        aria-controls="task-accordion-body-1"
                        class="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"><i
                          class="ti ti-info-circle-filled me-1"></i></a>
                      <a href="javascript:void(0);" class="btn btn-light" data-modal-target="payment_1"
                        data-modal-toggle="payment_1"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="hidden" id="task-accordion-body-1" data-accordion-body>
                <div class="mail-collapse mt-2">
                  <p class="mb-0">PHPMailer is a third-party PHP library that provides a simple way to send emails in
                    PHP. It offers a range of
                    features that make it a popular alternative to PHP's
                    built-in mail() function, such as support for HTML
                    emails, attachments, and SMTP authentication.</p>
                </div>
              </div>
            </div>

            <div class="border border-borderColor rounded shadow p-3 mb-4">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                <div class="md:col-span-5">
                  <div class="flex items-center">
                    <span>
                      <img src="@/assets/img/payments/payment-2.svg" alt="Img">
                    </span>
                    <div class="ms-2">
                      <a href="javascript:void(0);"
                        class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2">Connected
                      </a>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-7">
                  <div class="flex items-center justify-between" data-accordion="collapse">
                    <div>
                      <a href="javascript:void(0);" data-accordion-target="#task-accordion-body-2" aria-expanded="false"
                        aria-controls="task-accordion-body-2"
                        class="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"><i
                          class="ti ti-info-circle-filled me-1"></i></a>
                      <a href="javascript:void(0);" class="btn btn-light" data-modal-target="payment_2"
                        data-modal-toggle="payment_2"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="hidden" id="task-accordion-body-2" data-accordion-body>
                <div class="mail-collapse mt-2">
                  <p class="mb-0">Stripe Holdings, Inc. is an American multinational financial technology company
                    operating an online payments system in the majority of countries that support online money
                    transfers, and serves as an electronic alternative to traditional paper methods such as checks and
                    money orders.</p>
                </div>
              </div>
            </div>

            <div class="border border-borderColor rounded shadow p-3 mb-4">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                <div class="md:col-span-5">
                  <div class="flex items-center">
                    <span>
                      <img src="@/assets/img/payments/payment-3.svg" alt="Img">
                    </span>
                    <div class="ms-2">
                      <a href="javascript:void(0);"
                        class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2">Connected
                      </a>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-7">
                  <div class="flex items-center justify-between" data-accordion="collapse">
                    <div>
                      <a href="javascript:void(0);" data-accordion-target="#task-accordion-body-3" aria-expanded="false"
                        aria-controls="task-accordion-body-3"
                        class="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"><i
                          class="ti ti-info-circle-filled me-1"></i></a>
                      <a href="javascript:void(0);" class="btn btn-light" data-modal-target="payment_3"
                        data-modal-toggle="payment_3"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="hidden" id="task-accordion-body-3" data-accordion-body>
                <div class="mail-collapse mt-2">
                  <p class="mb-0">Braintree Holdings, Inc. is an American multinational financial technology company
                    operating an online payments system in the majority of countries that support online money
                    transfers, and serves as an electronic alternative to traditional paper methods such as checks and
                    money orders.</p>
                </div>
              </div>
            </div>

            <div class="border border-borderColor rounded shadow p-3 mb-4">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                <div class="md:col-span-5">
                  <div class="flex items-center">
                    <span>
                      <img src="@/assets/img/payments/payment-4.svg" alt="Img">
                    </span>
                    <div class="ms-2">
                      <a href="javascript:void(0);"
                        class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2">Connected
                      </a>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-7">
                  <div class="flex items-center justify-between" data-accordion="collapse">
                    <div>
                      <a href="javascript:void(0);" data-accordion-target="#task-accordion-body-4" aria-expanded="false"
                        aria-controls="task-accordion-body-4"
                        class="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"><i
                          class="ti ti-info-circle-filled me-1"></i></a>
                      <a href="javascript:void(0);" class="btn btn-light" data-modal-target="payment_4"
                        data-modal-toggle="payment_4"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="hidden" id="task-accordion-body-4" data-accordion-body>
                <div class="mail-collapse mt-2">
                  <p class="mb-0">Skrill Holdings, Inc. is an American multinational financial technology company
                    operating an online payments system in the majority of countries that support online money
                    transfers, and serves as an electronic alternative to traditional paper methods such as checks and
                    money orders.</p>
                </div>
              </div>
            </div>

            <div class="border border-borderColor rounded shadow p-3 mb-4">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                <div class="md:col-span-5">
                  <div class="flex items-center">
                    <span>
                      <img src="@/assets/img/payments/payment-5.svg" alt="Img">
                    </span>
                    <div class="ms-2">
                      <a href="javascript:void(0);"
                        class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2">Connected
                      </a>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-7">
                  <div class="flex items-center justify-between" data-accordion="collapse">
                    <div>
                      <a href="javascript:void(0);" data-accordion-target="#task-accordion-body-5" aria-expanded="false"
                        aria-controls="task-accordion-body-5"
                        class="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"><i
                          class="ti ti-info-circle-filled me-1"></i></a>
                      <a href="javascript:void(0);" class="btn btn-light" data-modal-target="payment_5"
                        data-modal-toggle="payment_5"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="hidden" id="task-accordion-body-5" data-accordion-body>
                <div class="mail-collapse mt-2">
                  <p class="mb-0">Razorpay Holdings, Inc. is an American multinational financial technology company
                    operating an online payments system in the majority of countries that support online money
                    transfers, and serves as an electronic alternative to traditional paper methods such as checks and
                    money orders.</p>
                </div>
              </div>
            </div>

            <div class="border border-borderColor rounded shadow p-3 mb-4">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                <div class="md:col-span-5">
                  <div class="flex items-center">
                    <span>
                      <img src="@/assets/img/payments/payment-6.svg" alt="Img">
                    </span>
                    <div class="ms-2">
                      <a href="javascript:void(0);"
                        class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2">Connected
                      </a>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-7">
                  <div class="flex items-center justify-between" data-accordion="collapse">
                    <div>
                      <a href="javascript:void(0);" data-accordion-target="#task-accordion-body-6" aria-expanded="false"
                        class="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"><i
                          class="ti ti-info-circle-filled me-1"></i></a>
                      <a href="javascript:void(0);" class="btn btn-light" data-modal-target="payment_6"
                        data-modal-toggle="payment_6"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="hidden" id="task-accordion-body-6" data-accordion-body>
                <div class="mail-collapse mt-2">
                  <p class="mb-0">Payoneer Holdings, Inc. is an American multinational financial technology company
                    operating an online payments system in the majority of countries that support online money
                    transfers, and serves as an electronic alternative to traditional paper methods such as checks and
                    money orders.</p>
                </div>
              </div>
            </div>

            <div class="border border-borderColor rounded shadow p-3 mb-4">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                <div class="md:col-span-5">
                  <div class="flex items-center">
                    <span>
                      <img src="@/assets/img/payments/payment-7.svg" alt="Img">
                    </span>
                    <div class="ms-2">
                      <a href="javascript:void(0);"
                        class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2">Connected
                      </a>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-7">
                  <div class="flex items-center justify-between" data-accordion="collapse">
                    <div>
                      <a href="javascript:void(0);" data-accordion-target="#task-accordion-body-7" aria-expanded="false"
                        aria-controls="task-accordion-body-7"
                        class="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"><i
                          class="ti ti-info-circle-filled me-1"></i></a>
                      <a href="javascript:void(0);" class="btn btn-light" data-modal-target="payment_7"
                        data-modal-toggle="payment_7"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="hidden" id="task-accordion-body-7" data-accordion-body>
                <div class="mail-collapse mt-2">
                  <p class="mb-0">Pay Holdings, Inc. is an American multinational financial technology company operating
                    an online payments system in the majority of countries that support online money transfers, and
                    serves as an electronic alternative to traditional paper methods such as checks and money orders.
                  </p>
                </div>
              </div>
            </div>

            <div class="border border-borderColor rounded shadow p-3 mb-4">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                <div class="md:col-span-5">
                  <div class="flex items-center">
                    <span>
                      <img src="@/assets/img/payments/payment-8.svg" alt="Img">
                    </span>
                    <div class="ms-2">
                      <a href="javascript:void(0);"
                        class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2">Connected
                      </a>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-7">
                  <div class="flex items-center justify-between" data-accordion="collapse">
                    <div>
                      <a href="javascript:void(0);" data-accordion-target="#task-accordion-body-8" aria-expanded="false"
                        aria-controls="task-accordion-body-8"
                        class="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"><i
                          class="ti ti-info-circle-filled me-1"></i></a>
                      <a href="javascript:void(0);" class="btn btn-light" data-modal-target="payment_8"
                        data-modal-toggle="payment_8"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="hidden" id="task-accordion-body-8" data-accordion-body>
                <div class="mail-collapse mt-2">
                  <p class="mb-0">Paytm Holdings, Inc. is an American multinational financial technology company
                    operating an online payments system in the majority of countries that support online money
                    transfers, and serves as an electronic alternative to traditional paper methods such as checks and
                    money orders.</p>
                </div>
              </div>
            </div>

            <div class="border border-borderColor rounded shadow p-3 mb-4">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                <div class="md:col-span-5">
                  <div class="flex items-center">
                    <span>
                      <img src="@/assets/img/payments/payment-9.svg" alt="Img">
                    </span>
                    <div class="ms-2">
                      <a href="javascript:void(0);"
                        class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2">Connected
                      </a>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-7">
                  <div class="flex items-center justify-between" data-accordion="collapse">
                    <div>
                      <a href="javascript:void(0);" data-accordion-target="#task-accordion-body-9" aria-expanded="false"
                        aria-controls="task-accordion-body-9"
                        class="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"><i
                          class="ti ti-info-circle-filled me-1"></i></a>
                      <a href="javascript:void(0);" class="btn btn-light" data-modal-target="payment_9"
                        data-modal-toggle="payment_9"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="hidden" id="task-accordion-body-9" data-accordion-body>
                <div class="mail-collapse mt-2">
                  <p class="mb-0">Bank Transfer Holdings, Inc. is an American multinational financial technology company
                    operating an online payments system in the majority of countries that support online money
                    transfers, and serves as an electronic alternative to traditional paper methods such as checks and
                    money orders.</p>
                </div>
              </div>
            </div>

            <div class="border border-borderColor rounded shadow p-3">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                <div class="md:col-span-5">
                  <div class="flex items-center">
                    <span>
                      <img src="@/assets/img/payments/payment-10.svg" alt="Img">
                    </span>
                    <div class="ms-2">
                      <a href="javascript:void(0);"
                        class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2">Connected
                      </a>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-7">
                  <div class="flex items-center justify-between" data-accordion="collapse">
                    <div>
                      <a href="javascript:void(0);" data-accordion-target="#task-accordion-body-10"
                        aria-expanded="false" aria-controls="task-accordion-body-10"
                        class="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"><i
                          class="ti ti-info-circle-filled me-1"></i></a>
                      <a href="javascript:void(0);" class="btn btn-light" data-modal-target="payment_10"
                        data-modal-toggle="payment_10"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="hidden" id="task-accordion-body-10" data-accordion-body>
                <div class="mail-collapse mt-2">
                  <p class="mb-0">Cash on delivery Holdings, Inc. is an American multinational financial technology
                    company operating an online payments system in the majority of countries that support online money
                    transfers, and serves as an electronic alternative to traditional paper methods such as checks and
                    money orders.</p>
                </div>
              </div>
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

  <!-- Payment -->
  <div id="payment_1"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Paypal</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="payment_1">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">From Email Address <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">API Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Secret Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="payment_1" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Payment -->

  <!-- Payment -->
  <div id="payment_2"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Stripe</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="payment_2">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">From Email Address <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">API Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Secret Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="payment_2" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Payment -->

  <!-- Payment -->
  <div id="payment_3"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">BrainTree</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="payment_3">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">From Email Address <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">API Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Secret Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="payment_3" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Payment -->

  <!-- Payment -->
  <div id="payment_4"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Skrill</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="payment_4">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">From Email Address <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">API Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Secret Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="payment_4" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Payment -->

  <!-- Payment -->
  <div id="payment_5"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Razorpay</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="payment_5">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">From Email Address <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">API Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Secret Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="payment_5" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Payment -->

  <!-- Payment -->
  <div id="payment_6"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Payoneer</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="payment_6">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">From Email Address <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">API Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Secret Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="payment_6" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Payment -->

  <!-- Payment -->
  <div id="payment_7"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Pay</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="payment_7">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">From Email Address <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">API Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Secret Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="payment_7" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Payment -->

  <!-- Payment -->
  <div id="payment_8"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Paytm</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="payment_8">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">From Email Address <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">API Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Secret Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="payment_8" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Payment -->

  <!-- Payment -->
  <div id="payment_9"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Bank Transfer</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="payment_9">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">From Email Address <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">API Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Secret Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="payment_9" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Payment -->

  <!-- Payment -->
  <div id="payment_10"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Cash On Delivery</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="payment_10">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">From Email Address <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">API Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">Secret Key <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="payment_10" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Payment -->
</template>
<script>
export default {
  data() {
    return {
      title: "Settings",
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
