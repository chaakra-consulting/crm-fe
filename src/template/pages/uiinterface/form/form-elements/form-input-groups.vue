<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Input Groups
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
            <li class="text-dark font-medium" aria-current="page">Input Groups</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div>
        <div>
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h4 class="card-title">Basic Examples</h4>
            </div>
            <div class="card-body p-6">
              <form action="#">
                <div class="mb-3 grid grid-cols-8">
                  <label class=" mb-1 col-span-2 text-sm leading-normal font-medium text-title">Group Left</label>
                  <div class="col-span-6">
                    <div class="input-group flex items-center">
                      <span class="border border-borderColor rounded-l-lg text-gray-900 text-base px-2 py-1.5"
                        id="basic-addon1">@</span>
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                  </div>
                </div>
                <div class="mb-3 grid grid-cols-8">
                  <label class=" mb-1 col-span-2 text-sm leading-normal font-medium text-title">Group Right</label>
                  <div class="col-span-6">
                    <div class="input-group flex items-center">
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-l-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        placeholder="Recipient's username" aria-label="Recipient's username"
                        aria-describedby="basic-addon2">
                      <span
                        class="input-group-text col-span-2 text-base leading-normal font-medium text-title border border-borderColor rounded-r-lg px-2 py-1.5"
                        id="basic-addon2">@example.com</span>
                    </div>
                  </div>
                </div>
                <div class="mb-3 grid grid-cols-8">
                  <label class=" mb-1 text-sm col-span-2 leading-normal font-medium text-title">URL Example</label>
                  <div class="col-span-6">
                    <div class="input-group flex items-center">
                      <span
                        class="input-group-text border border-borderColor text-gray-900 text-base rounded-l-lg px-2 py-1.5"
                        id="basic-addon3">https://example.com/users/</span>
                      <input type="text"
                        class="bg-white border border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        id="basic-url" aria-describedby="basic-addon3">
                    </div>
                  </div>
                </div>

                <div class="mb-3 grid grid-cols-8">
                  <label class=" mb-1 col-span-2 text-sm leading-normal font-medium text-title">Group with Price</label>
                  <div class="col-span-6">
                    <div class="input-group flex items-center">
                      <span
                        class="input-group-text text-base py-1.5 px-2 border border-borderColor rounded-l-lg text-gray-900">$</span>
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-sm block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        aria-label="Amount (to the nearest dollar)">
                      <span
                        class="input-group-text text-base py-1.5 px-2 border border-borderColor rounded-r-lg text-gray-900">.00</span>
                    </div>
                  </div>
                </div>

                <div class="mb-3 grid grid-cols-8">
                  <label class="mb-1 text-base col-span-2 leading-normal font-medium text-title">Group with Price
                    (Left)</label>
                  <div class="col-span-6">
                    <div class="input-group mb-3 flex items-center">
                      <span
                        class="input-group-text text-gray-900 text-base border border-borderColor rounded-l-lg px-2 py-1.5">$</span>
                      <span
                        class="input-group-text text-gray-900 text-base border border-borderColor px-2 py-1.5">0.00</span>
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400">
                    </div>
                    <div class="input-group flex items-center">
                      <span
                        class="input-group-text text-gray-900 text-base border border-borderColor rounded-l-lg px-2 py-1.5">$</span>
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-sm  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        aria-label="Amount (to the nearest dollar)">
                      <span
                        class="input-group-text text-gray-900 text-base border border-borderColor rounded-r-lg px-2 py-1.5">.00</span>
                    </div>
                  </div>
                </div>

                <div class="mb-3 grid grid-cols-8">
                  <label class=" mb-1 col-span-2 text-sm leading-normal font-medium text-title">With textarea</label>
                  <div class="col-span-6">
                    <div class="input-group flex items-center">
                      <span
                        class="input-group-text text-gray-900 text-base border border-borderColor rounded-l-lg px-2 py-1">With
                        textarea</span>
                      <textarea
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full placeholder:text-gray-400"
                        aria-label="With textarea"></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h4 class="card-title">Sizing</h4>
            </div>
            <div class="card-body p-5 pb-1">
              <form action="#">
                <div class="mb-3 grid grid-cols-8">
                  <label class=" mb-1 col-span-2 text-sm leading-normal font-medium text-title">Input Group
                    Large</label>
                  <div class="col-span-6">
                    <div class="flex items-center">
                      <span class="text-xl text-gray-900 border border-borderColor rounded-l-lg px-2 py-1"
                        id="inputGroup-sizing-lg">Large</span>
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-lg rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                    </div>
                  </div>
                </div>
                <div class="mb-3 grid grid-cols-8">
                  <label class="col-span-2 mb-1 text-sm leading-normal font-medium text-title">Input Group
                    Default</label>
                  <div class="col-span-6">
                    <div class="flex items-center">
                      <span class="text-base text-gray-900 border border-borderColor rounded-l-lg px-2 py-1.5"
                        id="inputGroup-sizing-default">Default</span>
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-base rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    </div>
                  </div>
                </div>
                <div class="mb-3 grid grid-cols-8">
                  <label class="col-span-2 mb-1 text-sm leading-normal font-medium text-title">Input Group Small</label>
                  <div class="col-span-6">
                    <div class="flex items-center">
                      <span class="text-sm text-gray-900 border border-borderColor rounded-l-lg p-2"
                        id="inputGroup-sizing-sm">Small</span>
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h4 class="card-title">Checkbox and Radio Addons</h4>
            </div>
            <div class="card-body p-5 pb-1">
              <form action="#">
                <div class="mb-3 grid grid-cols-8">
                  <label class="col-span-2 mb-1 text-sm leading-normal font-medium text-title">Checkbox</label>
                  <div class="col-span-6">
                    <div class="flex items-center">
                      <div class="border border-borderColor rounded-l-lg p-2">
                        <input class="rounded text-primary border-borderColor" type="checkbox" value=""
                          aria-label="Checkbox for following text input">
                      </div>
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        aria-label="Text input with checkbox">
                    </div>
                  </div>
                </div>
                <div class="mb-3 grid grid-cols-8">
                  <label class="col-span-2 mb-1 text-sm leading-normal font-medium text-title">Radio</label>
                  <div class="col-span-6">
                    <div class="flex items-center">
                      <div class="border border-borderColor rounded-l-lg p-2">
                        <input class="text-primary border-borderColor" type="radio" value=""
                          aria-label="Radio button for following text input">
                      </div>
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        aria-label="Text input with radio button">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h4 class="card-title">Multiple Addons</h4>
            </div>
            <div class="card-body p-5 pb-1">
              <form action="#">
                <div class="mb-3 grid grid-cols-8">
                  <label class="col-span-2 mb-1 text-sm leading-normal font-medium text-title">Radio and Text
                    Addons</label>
                  <div class="col-span-6">
                    <div class="flex items-center">
                      <span class="border border-borderColor rounded-l-lg p-2">
                        <input type="checkbox" class="text-primary rounded">
                      </span>
                      <span class="border border-borderColor px-2 py-1.5 text-base text-gray-900">$</span>
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400">
                    </div>
                  </div>
                </div>
                <div class="mb-3 grid grid-cols-8">
                  <label class="col-span-2 mb-1 text-sm leading-normal font-medium text-title">Two Addons</label>
                  <div class="col-span-6">
                    <div class="flex items-center">
                      <span class="border border-borderColor px-2 py-1.5 rounded-l-lg text-base text-gray-900">$</span>
                      <span class="border border-borderColor px-2 py-1.5 text-base text-gray-900">0.00</span>
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h4 class="card-title">Buttons with dropdowns</h4>
            </div>
            <div class="card-body p-5 pb-1">
              <form action="#">
                <div class="mb-3 grid grid-cols-8">
                  <label class="col-span-2 mb-1 text-sm leading-normal font-medium text-title">Left Dropdown Text
                    Addons</label>
                  <div class="col-span-6 flex items-center">
                    <div>
                      <a href="javascript:void(0);"
                        class="border rounded-l-lg p-2 bg-primary text-white font-semibold inline-flex items-center"
                        data-dropdown-toggle="dropdown-1">
                        Dropdowns
                        <i class="ti ti-chevron-down ml-1"></i>
                      </a>
                      <ul id="dropdown-1" class="hidden p-4 border rounded bg-white shadow-lg">
                        <li>
                          <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Another
                            action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Something
                            else here</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Seperates
                            link</a>
                        </li>
                      </ul>
                    </div>
                    <input type="text"
                      class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                      aria-label="Text input with dropdown button">
                  </div>
                </div>

                <div class="mb-3 grid grid-cols-8">
                  <label class="col-span-2 mb-1 text-sm leading-normal font-medium text-title">Right Dropdown Text
                    Addons</label>
                  <div class="col-span-6">
                    <div class="flex items-center">
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-l-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        aria-label="Text input with dropdown button">
                      <div>
                        <a href="javascript:void(0);"
                          class="border border-primary text-primary font-semibold rounded-r-lg p-2 bg-white hover:bg-primary hover:text-white inline-flex items-center"
                          data-dropdown-toggle="dropdown-2">
                          Dropdowns
                          <i class="ti ti-chevron-down ml-1"></i>
                        </a>
                        <ul id="dropdown-2" class="hidden p-4 border rounded bg-white shadow-lg">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Action</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Another
                              action</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Something
                              else here</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Seperates
                              link</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mb-3 grid grid-cols-8">
                  <label class="col-span-2 mb-1 text-sm leading-normal font-medium text-title">Right Dropdown Text
                    Addons</label>
                  <div class="col-span-6">
                    <div class="flex items-center">
                      <div>
                        <a href="javascript:void(0);"
                          class="border text-primary rounded-l-lg p-2 bg-primary-400 font-semibold hover:border-primary inline-flex items-center"
                          data-dropdown-toggle="dropdown-3">
                          Dropdowns
                          <i class="ti ti-chevron-down ml-1"></i>
                        </a>
                        <ul id="dropdown-3" class="hidden p-4 border rounded bg-white shadow-lg">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Action
                              before</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Another
                              action before</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Something
                              else here</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Seperates
                              link</a>
                          </li>
                        </ul>
                      </div>
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-sm block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        aria-label="Text input with 2 dropdown buttons">
                      <div>
                        <a href="javascript:void(0);"
                          class="border text-primary rounded-r-lg p-2 bg-primary-400 font-semibold hover:border-primary inline-flex items-center"
                          data-dropdown-toggle="dropdown-4">
                          Dropdowns
                          <i class="ti ti-chevron-down ml-1"></i>
                        </a>
                        <ul id="dropdown-4" class="hidden p-4 border rounded bg-white shadow-lg">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Action</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Another
                              action</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Something
                              else here</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Seperates
                              link</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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
</template>
<script>
export default {
  data() {
    return {
    };
  },
};
</script>
