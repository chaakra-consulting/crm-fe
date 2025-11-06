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
        <general-sidebar></general-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4 pb-1">
            <div class="border-b border-borderColor mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">Security Settings</h5>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-6">

              <div class="lg:col-span-4 md:col-span-6 flex">
                <div class="border border-borderColor rounded bg-white flex-1 mb-3">
                  <div class="p-4 flex justify-between flex-col">
                    <div class="mb-3">
                      <div class="flex items-center justify-between mb-1">
                        <h6 class="text-[14px] font-semibold mb-0">Password</h6>
                      </div>
                      <p class="text-[13px] mb-0">Last Changed 03 Jan 2025, 09:00 AM</p>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="btn btn-xs px-2 py-1 btn-light"
                        data-modal-target="change_password" data-modal-toggle="change_password">
                        Change Password
                      </a>
                    </div>
                  </div>
                </div>
              </div> <!-- end col -->

              <div class="lg:col-span-4 md:col-span-6 flex">
                <div class="border border-borderColor rounded bg-white flex-1 mb-3">
                  <div class="p-4 flex justify-between flex-col">
                    <div class="mb-3">
                      <div class="flex items-center justify-between mb-1">
                        <h6 class="text-[14px] font-semibold mb-0">Two Factor</h6>
                        <label class="flex items-center justify-end cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </div>
                      <p class="text-[13px] mb-0">Receive codes via SMS or email every time you login</p>
                    </div>
                    <div>
                      <span
                        class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex">Enabled</span>
                    </div>
                  </div>
                </div>
              </div> <!-- end col -->

              <div class="lg:col-span-4 md:col-span-6 flex">
                <div class="border border-borderColor rounded bg-white flex-1 mb-3">
                  <div class="p-4 flex justify-between flex-col">
                    <div class="mb-3">
                      <div class="flex items-center justify-between mb-1">
                        <h6 class="text-[14px] font-semibold mb-0">Google Authenticator</h6>
                        <label class="flex items-center justify-end cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" checked>
                          <span
                            class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        </label>
                      </div>
                      <p class="text-[13px] mb-0">Google Authenticator adds an extra layer of security</p>
                    </div>
                    <div>
                      <span
                        class="text-xs bg-success-100 text-success rounded border-b border-success px-2 py-0.5 me-2">Connected</span>
                    </div>
                  </div>
                </div>
              </div> <!-- end col -->

              <div class="lg:col-span-4 md:col-span-6 flex">
                <div class="border border-borderColor rounded bg-white flex-1 mb-3">
                  <div class="p-4 flex justify-between flex-col">
                    <div class="mb-3">
                      <div class="flex items-center justify-between mb-1">
                        <h6 class="text-[14px] font-semibold mb-0">Phone Number Verification<i
                            class="ti ti-discount-check-filled text-success ms-1"></i>
                        </h6>
                      </div>
                      <p class="text-[13px] mb-0">Verified Mobile Number : <span class="text-dark">+99264710583</span>
                      </p>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <a href="javascript:void(0)" class="btn btn-xs px-2 py-1 btn-light me-2"
                          data-modal-target="change_phone_number" data-modal-toggle="change_phone_number">
                          Change
                        </a>
                      </div>
                      <a href="javascript:void(0)" class="text-primary text-[12px] font-medium">Remove</a>
                    </div>
                  </div>
                </div>
              </div> <!-- end col -->

              <div class="lg:col-span-4 md:col-span-6 flex">
                <div class="border border-borderColor rounded bg-white flex-1 mb-3">
                  <div class="p-4 flex justify-between flex-col">
                    <div class="mb-3">
                      <div class="flex items-center justify-between mb-1">
                        <h6 class="text-[14px] font-semibold mb-0">Email Verification<i
                            class="ti ti-discount-check-filled text-success ms-1"></i>
                        </h6>
                      </div>
                      <p class="text-[13px] mb-0">Verified Email : <span class="text-dark">info@example.com</span></p>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <a href="javascript:void(0)" class="btn btn-xs px-2 py-1 btn-light me-2"
                          data-modal-target="change_email" data-modal-toggle="change_email">
                          Change
                        </a>
                      </div>
                      <a href="javascript:void(0)" class="text-primary text-[12px] font-medium">Remove</a>
                    </div>
                  </div>
                </div>
              </div> <!-- end col -->

              <div class="lg:col-span-4 md:col-span-6 flex">
                <div class="border border-borderColor rounded bg-white flex-1 mb-3">
                  <div class="p-4 flex justify-between flex-col">
                    <div class="mb-3">
                      <div class="flex items-center justify-between mb-1">
                        <h6 class="text-[14px] font-semibold mb-0">Device Management</h6>
                      </div>
                      <p class="text-[13px] mb-0">Last Changed 15 Jan 2025, 12:00 AM</p>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="btn btn-xs px-2 py-1 btn-light me-2"
                        data-modal-target="device_management" data-modal-toggle="device_management">
                        Manage
                      </a>
                    </div>
                  </div>
                </div>
              </div> <!-- end col -->

              <div class="lg:col-span-4 md:col-span-6 flex">
                <div class="border border-borderColor rounded bg-white flex-1 mb-3">
                  <div class="p-4 flex justify-between flex-col">
                    <div class="mb-3">
                      <div class="flex items-center justify-between mb-1">
                        <h6 class="text-[14px] font-semibold mb-0">Account Activity</h6>
                      </div>
                      <p class="text-[13px] mb-0">Last Changed 20 Jan 2025, 11:30 AM</p>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="btn btn-xs px-2 py-1 btn-light me-2"
                        data-modal-target="account_activity" data-modal-toggle="account_activity">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div> <!-- end col -->

              <div class="lg:col-span-4 md:col-span-6 flex">
                <div class="border border-borderColor rounded bg-white flex-1 mb-3">
                  <div class="p-4 flex justify-between flex-col">
                    <div class="mb-3">
                      <div class="flex items-center justify-between mb-1">
                        <h6 class="text-[14px] font-semibold mb-0">Deactive Account</h6>
                      </div>
                      <p class="text-[13px] mb-0">Last Changed 04 Mar 2023, 08:40 AM</p>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="btn btn-xs px-2 py-1 btn-light me-2"
                        data-modal-target="deactive_account" data-modal-toggle="deactive_account">
                        Deactive
                      </a>
                    </div>
                  </div>
                </div>
              </div> <!-- end col -->

              <div class="lg:col-span-4 md:col-span-6 flex">
                <div class="border border-borderColor rounded bg-white flex-1 mb-3">
                  <div class="p-4 flex justify-between flex-col">
                    <div class="mb-3">
                      <div class="flex items-center justify-between mb-1">
                        <h6 class="text-[14px] font-semibold mb-0">Delete Account</h6>
                      </div>
                      <p class="text-[13px] mb-0">Last Changed 13 Mar 2023, 02:40 PM</p>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="btn btn-xs px-2 py-1 btn-light me-2"
                        data-modal-target="delete_account" data-modal-toggle="delete_account">
                        Delete Account
                      </a>
                    </div>
                  </div>
                </div> <!-- end col -->

              </div>
              <!-- end row -->

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
  <!-- Change Password -->
  <div id="change_password"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Change Password</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="change_password">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div>
              <div class="mb-3">
                <label class="form-label">Current Password <span class="text-danger">*</span></label>
                <input type="password" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-label">New Password <span class="text-danger">*</span></label>
                <input type="password" class="form-control">
              </div>
              <div class="mb-0">
                <label class="form-label">Confirm Password <span class="text-danger">*</span></label>
                <input type="password" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="change_password" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Change Password -->

  <!-- Change Phone Number -->
  <div id="change_phone_number"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Phone Number Verify</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="change_phone_number">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div>
              <div class="mb-3">
                <div class="input-blocks">
                  <label class="form-label">Current Phone Number <span class="text-danger">*</span></label>
                  <input class="form-control phone" name="phone" type="text">
                </div>
              </div>
              <div class="mb-3">
                <div>
                  <label class="form-label">New Phone Number <span class="text-danger">*</span></label>
                  <input class="form-control phone" name="phone" type="text">
                </div>
                <p class="mt-2"><i class="ti ti-info-circle me-1"></i>New phone number only updated once you verified
                </p>
              </div>
              <div>
                <label class="form-label">Current Password <span class="text-danger">*</span></label>
                <div class="input-group input-group-flat pass-group">
                  <input :type="showPasswordOne ? 'text' : 'password'" class="form-control pass-input"
                    placeholder="****************" v-model="passwordOne" />
                  <span class="input-group-text toggle-password" @click="togglePasswordOne">
                    <i :class="['ti', showPasswordOne ? 'ti-eye' : 'ti-eye-off']"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="change_phone_number" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Change Phone Number -->

  <!-- Change Email password -->
  <div id="change_email"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Change Email Address</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="change_email">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div>
              <div class="mb-3">
                <div class="input-blocks">
                  <label class="form-label">Current Email Address <span class="text-danger">*</span></label>
                  <input type="email" class="form-control">
                </div>
              </div>
              <div class="mb-3">
                <div>
                  <label class="form-label">New Email Address<span class="text-danger">*</span></label>
                  <input class="form-control" type="email">
                </div>
                <p class="d-inline-flex align-items-center mt-1 mb-0"><i class="ti ti-info-circle me-1"></i>New email
                  address only updated once you verified </p>
              </div>
              <div>
                <label class="form-label">Confirm Password<span class="text-danger">*</span></label>
                <div class="input-group input-group-flat pass-group">
                  <input :type="showPassword ? 'text' : 'password'" class="form-control pass-input"
                    placeholder="****************" v-model="password" />
                  <span class="input-group-text toggle-password" @click="togglePassword">
                    <i :class="['ti', showPassword ? 'ti-eye' : 'ti-eye-off']"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="change_email" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Change  Email password -->

  <!-- Change Device Password -->
  <div id="device_management"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[800px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Device Management</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="device_management">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <!-- Start Table -->
          <div class="table-responsive custom-table">
            <table class="table table-nowrap w-full">
              <thead class="table-light">
                <tr>
                  <th class="p-3 text-left">Device</th>
                  <th class="p-3 text-left">Date</th>
                  <th class="p-3 text-left">Location</th>
                  <th class="p-3 text-left">IP Address</th>
                  <th class="p-3 text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-3">Chrome - Windows</td>
                  <td class="p-3">15 May 2025, 10:30AM</td>
                  <td class="p-3">New York / USA</td>
                  <td class="p-3">232.222.12.72</td>
                  <td class="p-3">
                    <div>
                      <a href="#"
                        class="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded">
                        <i class="ti ti-logout"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="p-3">Safari Macos</td>
                  <td class="p-3">10 Apr 2025, 05:15 PM</td>
                  <td class="p-3">New York / USA</td>
                  <td class="p-3">224.111.12.75</td>
                  <td class="p-3">
                    <div>
                      <a href="#"
                        class="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded">
                        <i class="ti ti-logout"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="p-3">Firefox Windows</td>
                  <td class="p-3">15 Mar 2025, 02:40 PM</td>
                  <td class="p-3">New York / USA</td>
                  <td class="p-3">111.222.13.28</td>
                  <td class="p-3">
                    <div>
                      <a href="#"
                        class="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded">
                        <i class="ti ti-logout"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="p-3">Safari Macos</td>
                  <td class="p-3">15 Jan 2025, 08:00AM</td>
                  <td class="p-3">New York / USA</td>
                  <td class="p-3">120.517.26.17</td>
                  <td class="p-3">
                    <div>
                      <a href="#"
                        class="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded">
                        <i class="ti ti-logout"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- End Table -->
        </div>
      </div>
    </div>
  </div>
  <!-- /Change Device Password -->

  <!-- Change Account Activity -->
  <div id="account_activity"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[800px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Account Activity</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="account_activity">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <!-- Start Table -->
          <div class="table-responsive custom-table">
            <table class="table table-nowrap w-full">
              <thead class="table-light">
                <tr>
                  <th class="p-3 text-left">Date</th>
                  <th class="p-3 text-left">Device</th>
                  <th class="p-3 text-left">IP Address</th>
                  <th class="p-3 text-left">Location</th>
                  <th class="p-3 text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-3">15 May 2025, 10:30AM</td>
                  <td class="p-3">Chrome - Windows</td>
                  <td class="p-3">232.222.12.72</td>
                  <td class="p-3">New York / USA</td>
                  <td class="p-3">
                    <div>
                      <a href="#"
                        class="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded ">
                        <i class="ti ti-logout"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="p-3">10 Apr 2025, 05:15 PM</td>
                  <td class="p-3">Safari Macos</td>
                  <td class="p-3">224.111.12.75</td>
                  <td class="p-3">New York / USA</td>
                  <td class="p-3">
                    <div>
                      <a href="#"
                        class="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded ">
                        <i class="ti ti-logout"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="p-3">15 Mar 2025, 02:40 PM</td>
                  <td class="p-3">Firefox Windows</td>
                  <td class="p-3">111.222.13.28</td>
                  <td class="p-3">New York / USA</td>
                  <td class="p-3">
                    <div>
                      <a href="#"
                        class="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded ">
                        <i class="ti ti-logout"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="p-3">15 Jan 2025, 08:00AM</td>
                  <td class="p-3">Safari Macos</td>
                  <td class="p-3">120.517.26.17</td>
                  <td class="p-3">New York / USA</td>
                  <td class="p-3">
                    <div>
                      <a href="#"
                        class="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded ">
                        <i class="ti ti-logout"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- End Table -->
        </div>
      </div>
    </div>
  </div>
  <!-- /Change Account Activity -->

  <!-- Deactivate Account modal -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="deactive_account">
    <div class="relative bg-white rounded-defaultradius p-5">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center">
          <div class="mb-3 relative z-[1]">
            <span
              class="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center"><i
                class="ti ti-trash text-[24px]"></i></span>
          </div>
          <h5 class="mb-1">Deactive Account Confirmation</h5>
          <p class="mb-3">Are you sure you want to deactivate your account.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="deactive_account">Cancel</a>
            <a href="javascript:void(0);" data-modal-hide="deactive_account" class="btn btn-primary z-1 w-full">Yes,
              Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Deactivate Account modal -->

  <!-- Delete Account -->
  <div id="delete_account"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Deleting Your Account</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="delete_account">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4" data-select2-id="6">
            <p class="font-medium text-[16px] mb-1 text-dark">Why Are You Deleting Your Account?</p>
            <p class="text-[16px] mb-3">We're sorry to see you go! To help us improve, please let us know your reason
              for deleting your account</p>
            <div data-select2-id="5">
              <div>
                <div class="mb-3">
                  <label class="form-label">Reason<span class="text-danger ms-1">*</span></label>
                  <vue3-select v-model="selected" :options="Catego" placeholder="Select" />
                </div>
              </div><!-- end col -->
              <div id="otherReasonBox" style="display: none;">
                <label class="form-label">Please Specify<span class="text-danger ms-1">*</span></label>
                <textarea class="form-control" rows="3" placeholder="Description"></textarea>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="delete_account" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Delete Account -->
</template>
<script>
export default {
  data() {
    return {
      password: "",
      showPassword: false,
      passwordOne: "",
      showPasswordOne: false,
      selected: null,
      Catego: [
        { label: "Select", value: "Select" },
        { label: "No longer using the service", value: "No longer using the service" },
        { label: "Privacy Concerns", value: "Privacy Concerns" },
        {
          label: "Too many nofitications/emails",
          value: "Too many nofitications/emails",
        },
        { label: "Poor user experience", value: "Poor user experience" },
        { label: "Others", value: "Others" },
      ],
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    togglePasswordOne() {
      this.showPasswordOne = !this.showPasswordOne;
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
