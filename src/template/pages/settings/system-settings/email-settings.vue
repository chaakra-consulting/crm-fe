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
        <system-sidebar></system-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor flex items-center justify-between mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">Email Settings</h5>
              <a href="javascript:void(0);"
                class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
                data-modal-target="add_mail" data-modal-toggle="add_mail">
                <i class="ti ti-send me-1"></i>
                Send Test Mail
              </a>
            </div>

            <!-- PHP Mailer -->
            <div class="border border-borderColor rounded shadow p-3 mb-3">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                <div class="md:col-span-5">
                  <div class="flex items-center">
                    <span
                      class="avatar avatar-lg border border-borderColor rounded flex items-center justify-center me-2 flex-shrink-0">
                      <img src="@/assets/img/icons/mail-01.svg" class="w-auto h-auto rounded-0" alt="Img">
                    </span>
                    <div>
                      <h6 class="fs-14 fw-medium mb-1">PHP Mailer</h6>
                      <a href="javascript:void(0);"
                        class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex">Connected</a>
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
                      <a href="javascript:void(0);" class="btn btn-light" data-modal-target="add_phpmail"
                        data-modal-toggle="add_phpmail"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="hidden" id="task-accordion-body-1" aria-labelledby="task-accordion-heading-1"
                data-accordion-body>
                <div class="mail-collapse mt-2">
                  <p class="mb-0">PHPMailer is a third-party PHP library that provides a simple way to send emails in
                    PHP. It offers a range of
                    features that make it a popular alternative to PHP's
                    built-in mail() function, such as support for HTML
                    emails, attachments, and SMTP authentication.</p>
                </div>
              </div>
            </div>
            <!-- /PHP Mailer -->

            <!-- SMTP -->
            <div class="border border-borderColor rounded shadow p-3 mb-3">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                <div class="md:col-span-5">
                  <div class="flex items-center">
                    <span
                      class="avatar avatar-lg border-borderColor rounded flex items-center justify-center border me-2 flex-shrink-0">
                      <img src="@/assets/img/icons/mail-02.svg" class="w-auto h-auto" alt="Img">
                    </span>
                    <div>
                      <h6 class="fs-14 fw-medium mb-1">SMTP</h6>
                      <a href="javascript:void(0);"
                        class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex">Connected</a>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-7">
                  <div class="flex items-center justify-between">
                    <div>
                      <a href="javascript:void(0);"
                        class="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"><i
                          class="ti ti-info-circle-filled me-1"></i></a>
                      <a href="javascript:void(0);" class="btn btn-light" data-modal-target="add_smtp"
                        data-modal-toggle="add_smtp"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <!-- /SMTP -->

            <!-- SendGrid -->
            <div class="border border-borderColor rounded shadow p-3">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                <div class="md:col-span-5">
                  <div class="flex items-center">
                    <span
                      class="avatar avatar-lg border-borderColor rounded flex items-center justify-center border me-2 flex-shrink-0">
                      <img src="@/assets/img/icons/mail-03.svg" class="w-auto h-auto" alt="Img">
                    </span>
                    <div>
                      <h6 class="fs-14 fw-medium mb-1">SendGrid</h6>
                      <a href="javascript:void(0);"
                        class="text-xs bg-light  text-dark rounded px-2 py-0.5 inline-flex">Not Connected</a>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-7">
                  <div class="flex items-center justify-between">
                    <div>
                      <a href="javascript:void(0);"
                        class="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"><i
                          class="ti ti-info-circle-filled me-1"></i></a>
                      <a href="javascript:void(0);" class="btn btn-light"><i
                          class="ti ti-plug-connected me-1"></i>Connect</a>
                    </div>
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" checked>
                      <span
                        class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <!-- /SendGrid -->
          </div>
        </div>
      </div>
    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->

  <!-- Test Mail -->
  <div id="add_mail"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Test Mail</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_mail">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">Enter Email Address <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_mail" type="button"
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
  <!-- /Test Mail -->

  <!-- PHP Mailer -->
  <div id="add_phpmail"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">PHP Mailer</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_phpmail">
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
                <label class="form-label">Email Password <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">From Email Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_phpmail" type="button"
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
  <!-- /PHP Mailer -->

  <!-- SMTP -->
  <div id="add_smtp"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">SMTP</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_smtp">
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
                <label class="form-label">Email Password <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
              <div class="md:col-span-12">
                <label class="form-label">From Host <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_smtp" type="button"
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
  <!-- /SMTP -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
