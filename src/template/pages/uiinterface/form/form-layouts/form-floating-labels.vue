<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Floating Label
        </h4>
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li>
              <a href="javascript:void(0);" class="hover:underline text-gray-700">Forms</a>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li class="text-dark font-medium" aria-current="page">Floating Label</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <!-- Floating Label -->
      <div class="md:grid grid-cols-4 gap-5">
        <div class="col-span-2">
          <div class="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <div class="card-title">
                Basic Examples
              </div>
            </div>
            <div class="card-body p-5">
              <div class="form-floating mb-3">
                <div class="relative">
                  <input type="email" id="floating_email"
                    class="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-borderColor rounded-input bg-white appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" " />
                  <label for="floating_email"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email
                    address</label>
                </div>
              </div>
              <div class="form-floating">
                <div class="relative">
                  <input type="password" id="floating_password"
                    class="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-borderColor rounded-input bg-white appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" " />
                  <label for="floating_password"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div class="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <div class="card-title">
                Readonly plain text
              </div>
            </div>
            <div class="card-body p-5">
              <div class="form-floating mb-3">
                <div class="relative">
                  <input type="email" id="floating_email3"
                    class="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white border-0 appearance-none"
                    readonly />
                  <label for="floating_email3"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Empty
                    input</label>
                </div>
              </div>
              <div class="form-floating">
                <div class="relative">
                  <input type="email" id="form-control-plaintext"
                    class="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white border-0 appearance-none peer"
                    value="name@example.com" readonly />
                  <label for="form-control-plaintext"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Input
                    with value</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Floating Label -->

      <!-- Floating Label -->
      <div class="md:grid grid-cols-4 gap-5">
        <div class="col-span-2">
          <div class="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <div class="card-title">
                Floating Labels With Pre Defined Values
              </div>
            </div>
            <div class="card-body p-5">
              <form class="form-floating my-3">
                <div class="relative">
                  <input type="email" id="floating_email"
                    class="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-borderColor rounded-input bg-white appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" " value="test@example.com" />
                  <label for="floating_email"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email
                    address</label>
                </div>
              </form>
              <form class="form-floatin">
                <input type="email"
                  class="bg-white border border-danger text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400 focus:border-danger"
                  id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com">
                <label for="floatingInputInvalid">Invalid input</label>
              </form>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div class="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <div class="card-title">
                Textareas
              </div>
            </div>
            <div class="card-body p-5">
              <div class="form-floating mb-3">
                <div class="relative">
                  <textarea id="floatingTextarea"
                    class="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-1 border-borderColor rounded-input bg-white appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "></textarea>
                  <label for="floatingTextarea"
                    class="absolute text-sm bg-white p-1 text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Description</label>
                </div>
              </div>
              <div class="form-floating">
                <div class="relative">
                  <textarea id="disabled_outlined"
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-borderColor appearance-none bg-gray-50 focus:ring-0 peer"
                    placeholder=" " disabled></textarea>
                  <label for="disabled_outlined"
                    class="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Disabled</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Floating Label -->

      <!-- Floating Label -->
      <div class="md:grid grid-cols-4 gap-5">
        <div class="col-span-2">
          <div class="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <div class="card-title">
                Floating Labels In Select
              </div>
            </div>
            <div class="card-body p-5">
              <div class="form-floating">
                <div class="relative">
                  <select
                    class="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-500 border-1 border-borderColor rounded-input focus:border-blue-600 appearance-none focus:outline-none focus:ring-0 peer"
                    id="floatingSelectGrid">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label for="floatingSelectGrid"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Works
                    with selects</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div class="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <div class="card-title">
                Floating Labels With Layouts
              </div>
            </div>
            <div class="card-body p-5">
              <div class="md:grid grid-cols-12 gap-5">
                <div class="col-span-6">
                  <div class="form-floating mb-3">
                    <div class="relative">
                      <input type="email" id="floating_email1"
                        class="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-1 border-borderColor rounded-input bg-white appearance-none focus:outline-none focus:ring-0 peer"
                        placeholder=" " value="mdo@example.com" />
                      <label for="floating_email2"
                        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email
                        address</label>
                    </div>
                  </div>
                </div>
                <div class="col-span-6">
                  <div class="form-floating mb-3">
                    <div class="relative">
                      <select
                        class="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-500 border-1 border-borderColor rounded-input bg-white focus:border-blue-600 appearance-none focus:outline-none focus:ring-0 peer"
                        id="floatingSelectGrid">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <label for="floatingSelectGrid"
                        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Works
                        with selects</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Floating Label -->

      <!-- Floating Label Colors -->
      <div class="grid">
        <div class="col-12">
          <div class="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <div class="card-title">
                Floating Label Colors
              </div>
            </div>
            <div class="card-body p-5">
              <div class="md:grid grid-cols-6 gap-5">
                <div class="col-span-2">
                  <div class="form-floating mb-3 floating-primary">
                    <div class="relative border border-primary rounded">
                      <input type="email" id="floating_primary"
                        class="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 bg-gray-50 appearance-none peer"
                        placeholder="" />
                      <label for="floating_primary"
                        class="absolute text-sm text-primary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Primary</label>
                    </div>
                  </div>
                </div>
                <div class="col-span-2">
                  <div class="form-floating mb-3 floating-secondary">
                    <div class="relative border border-secondary rounded">
                      <input type="email" id="floating_secondary"
                        class="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 bg-gray-50 appearance-none peer"
                        placeholder="" />
                      <label for="floating_secondary"
                        class="absolute text-sm text-secondary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Secondary</label>
                    </div>
                  </div>
                </div>
                <div class="col-span-2">
                  <div class="form-floating mb-3 floating-warning">
                    <div class="relative border border-warning rounded">
                      <input type="email" id="floating_warning"
                        class="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 bg-gray-50 appearance-none peer"
                        placeholder="" />
                      <label for="floating_warning"
                        class="absolute text-sm text-warning duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-warning peer-focus:dark:text-warning peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Warning</label>
                    </div>
                  </div>
                </div>
                <div class="col-span-2">
                  <div class="form-floating mb-3 floating-info">
                    <div class="relative border border-info rounded">
                      <input type="email" id="floating_info"
                        class="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 bg-gray-50 appearance-none peer"
                        placeholder="" />
                      <label for="floating_info"
                        class="absolute text-sm text-info duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-info peer-focus:dark:text-info peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Info</label>
                    </div>
                  </div>
                </div>
                <div class="col-span-2">
                  <div class="form-floating mb-3 floating-success">
                    <div class="relative border border-success rounded">
                      <input type="email" id="floating_success"
                        class="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 bg-gray-50 appearance-none peer"
                        placeholder="" />
                      <label for="floating_success"
                        class="absolute text-sm text-success duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-success peer-focus:dark:text-success peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Success</label>
                    </div>
                  </div>
                </div>
                <div class="col-span-2">
                  <div class="form-floating mb-3 floating-danger">
                    <div class="relative border border-danger rounded">
                      <input type="email" id="floating_danger"
                        class="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 bg-gray-50 appearance-none peer"
                        placeholder="" />
                      <label for="floating_danger"
                        class="absolute text-sm text-danger duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-danger peer-focus:dark:text-danger peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Danger</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Floating Label Colors -->

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Home",
      text: "Pricing",
    };
  },
};
</script>
