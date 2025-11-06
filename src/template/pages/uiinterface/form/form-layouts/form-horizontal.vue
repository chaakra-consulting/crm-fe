<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Form Horizontal
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
            <li class="text-dark font-medium" aria-current="page">Form Horizontal</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="lg:grid grid-cols-4 gap-5">
        <div class="col-span-2">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h5 class="card-title">Basic Form</h5>
            </div>
            <div class="card-body p-5">
              <form action="#">
                <div class="lg:grid grid-cols-4 mb-3">
                  <label class="col-span-1 form-label">First Name</label>
                  <div class="col-span-3">
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="lg:grid grid-cols-4 mb-3">
                  <label class="col-span-1 form-label">Last Name</label>
                  <div class="col-span-3">
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="lg:grid grid-cols-4 mb-3">
                  <label class="col-span-1 form-label">Email Address</label>
                  <div class="col-span-3">
                    <input type="email" class="form-control">
                  </div>
                </div>
                <div class="lg:grid grid-cols-4 mb-3">
                  <label class="col-span-1 form-label">Username</label>
                  <div class="col-span-3">
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="lg:grid grid-cols-4 mb-3">
                  <label class="col-span-1 form-label">Password</label>
                  <div class="col-span-3">
                    <input type="password" class="form-control">
                  </div>
                </div>
                <div class="lg:grid grid-cols-4 mb-3">
                  <label class="col-span-1 form-label">Repeat Password</label>
                  <div class="col-span-3">
                    <input type="password" class="form-control">
                  </div>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn bg-primary text-white">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h5 class="card-title">Address Form</h5>
            </div>
            <div class="card-body p-5">
              <form action="#">
                <div class="lg:grid grid-cols-4 mb-3">
                  <label class="col-span-1 form-label">Address 1</label>
                  <div class="col-span-3">
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="lg:grid grid-cols-4 mb-3">
                  <label class="col-span-1 form-label">Address 2</label>
                  <div class="col-span-3">
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="lg:grid grid-cols-4 mb-3">
                  <label class="col-span-1 form-label">City</label>
                  <div class="col-span-3">
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="lg:grid grid-cols-4 mb-3">
                  <label class="col-span-1 form-label">State</label>
                  <div class="col-span-3">
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="lg:grid grid-cols-4 mb-3">
                  <label class="col-span-1 form-label">Country</label>
                  <div class="col-span-3">
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="lg:grid grid-cols-4 mb-3">
                  <label class="col-span-1 form-label">Postal Code</label>
                  <div class="col-span-3">
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn bg-primary text-white">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:grid grid-cols-1">
        <div class="col-span-1">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h4 class="card-title">Two Column Horizontal Form</h4>
            </div>
            <div class="card-body p-5">
              <h6 class="mb-3">Personal Information</h6>
              <form action="#">
                <div class="lg:grid grid-cols-4 gap-5">
                  <div class="col-span-2">
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">First Name</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">Last Name</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">Gender</label>
                      <div class="col-span-6 flex items-center">
                        <div class="flex items-center me-5">
                          <input class="text-primary border-borderColor me-2" type="radio" name="gender"
                            id="gender_male" value="option1" checked>
                          <label class="form-check-label" for="gender_male">
                            Male
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input class="text-primary border-borderColor me-2" type="radio" name="gender"
                            id="gender_female" value="option2">
                          <label class="form-check-label" for="gender_female">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">Blood Group</label>
                      <div class="col-span-6">
                        <select class="select">
                          <option>Select</option>
                          <option value="1">A+</option>
                          <option value="2">O+</option>
                          <option value="3">B+</option>
                          <option value="4">AB+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-2">
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">Username</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">Email</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">Password</label>
                      <div class="col-span-6">
                        <input type="password" class="form-control">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">Repeat Password</label>
                      <div class="col-span-6">
                        <input type="password" class="form-control">
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="mb-3">Address</h6>
                <div class="lg:grid grid-cols-4 gap-5">
                  <div class="col-span-2">
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">Address Line 1</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">Address Line 2</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">State</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="col-span-2">
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">City</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">Country</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-4">
                      <label class="col-span-2 form-label">Postal Code</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn bg-primary text-white">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:grid grid-cols-12">
        <div class="col-span-12">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h5 class="card-title">Two Column Horizontal Form 2</h5>
            </div>
            <div class="card-body p-5">
              <form action="#">
                <div class="lg:grid grid-cols-4 gap-5">
                  <div class="col-span-2">
                    <h6 class="mb-3">Personal Information</h6>
                    <div class="lg:grid grid-cols-8 mb-3">
                      <label class="col-span-2 form-label">First Name</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control ">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-3">
                      <label class="col-span-2 form-label">Last Name</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control ">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-3">
                      <label class="col-span-2 form-label">Password</label>
                      <div class="col-span-6">
                        <input type="password" class="form-control ">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-3">
                      <label class="col-span-2 form-label">State</label>
                      <div class="col-span-6">
                        <select
                          class="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                          id="specificSizeSelect">
                          <option selected="">Select State</option>
                          <option value="1">California</option>
                          <option value="2">Texas</option>
                          <option value="3">Florida</option>
                        </select>
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-3">
                      <label class="col-span-2 form-label">About</label>
                      <div class="col-span-6">
                        <textarea rows="4" cols="5"
                          class="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 placeholder:text-gray-400"
                          placeholder="Enter message"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-2">
                    <h6 class="mb-3">Personal Details</h6>
                    <div class="lg:grid grid-cols-8">
                      <label class="col-span-2 form-label">Name</label>
                      <div class="col-span-6">
                        <div class="grid grid-cols-4 gap-5">
                          <div class="col-span-2">
                            <div class="mb-3">
                              <input type="text" placeholder="First Name" class="form-control ">
                            </div>
                          </div>
                          <div class="col-span-2">
                            <div class="mb-3">
                              <input type="text" placeholder="Last Name" class="form-control ">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-3">
                      <label class="col-span-2 form-label">Email</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control ">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-3">
                      <label class="col-span-2 form-label">Phone</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control ">
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-8 mb-3">
                      <label class="col-span-2 form-label">Address</label>
                      <div class="col-span-6">
                        <input type="text" class="form-control ">
                        <div class="grid grid-cols-4 gap-5 mt-4">
                          <div class="col-span-2">
                            <div class="mb-3">
                              <select
                                class="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                id="specificSizeSelect">
                                <option selected="">Select Country</option>
                                <option value="1">USA</option>
                                <option value="2">France</option>
                                <option value="3">India</option>
                                <option value="4">Spain</option>
                              </select>
                            </div>
                            <div class="mb-3">
                              <input type="text" placeholder="ZIP code" class="form-control ">
                            </div>
                          </div>
                          <div class="col-span-2">
                            <div class="mb-3">
                              <input type="text" placeholder="State/Province" class="form-control ">
                            </div>
                            <div class="mb-3">
                              <input type="text" placeholder="City" class="form-control ">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn bg-primary text-white">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:grid grid-cols-4 gap-5">
        <div class="col-span-2">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h5 class="card-title">
                Horizontal form With Icons
              </h5>
            </div>
            <div class="card-body p-5">
              <form>
                <div class="lg:grid grid-cols-8 flex-wrap mb-3">
                  <label for="inputEmail1" class="col-span-2 form-label">Email</label>
                  <div class="col-span-6">
                    <div class="flex items-center">
                      <input type="email"
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-l-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        id="inputEmail1">
                      <div class="bg-white border border-borderColor text-gray-900 text-sm rounded-r-lg py-1.5 px-2.5">
                        <i class="ti ti-mail"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:grid grid-cols-8 mb-3">
                  <label for="inputPassword1" class="col-span-2 form-label">Password</label>
                  <div class="col-span-6">
                    <div class="flex items-center">
                      <input type="password"
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-l-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        id="inputPassword1">
                      <div class="bg-white border border-borderColor text-gray-900 text-sm rounded-r-lg py-1.5 px-2.5">
                        <i class="ti ti-lock"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn bg-primary text-white">Sign in</button>
              </form>
            </div>

          </div>
        </div>
        <div class="col-span-2">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h5 class="card-title">
                Horizontal form label sizing
              </h5>
            </div>
            <div class="card-body p-5">
              <div class="lg:grid grid-cols-8 mb-3">
                <label for="colFormLabelSm" class="col-span-2 form-label">Email</label>
                <div class="col-span-6">
                  <input type="email"
                    class="bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                    id="colFormLabelSm" placeholder="col-form-label-sm">
                </div>
              </div>
              <div class="lg:grid grid-cols-8 mb-3">
                <label for="colFormLabel" class="col-span-2 form-label">Email</label>
                <div class="col-span-6">
                  <input type="email"
                    class="bg-white border-borderColor text-gray-900 text-base rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                    id="colFormLabel" placeholder="col-form-label">
                </div>
              </div>
              <div class="lg:grid grid-cols-8">
                <label for="colFormLabelLg" class="col-span-2 form-label">Email</label>
                <div class="col-span-6">
                  <input type="email"
                    class="bg-white border-borderColor text-gray-900 text-lg rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                    id="colFormLabelLg" placeholder="col-form-label-lg">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="lg:grid grid-cols-1">
        <div class="col-span-1">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h5 class="card-title">
                Auto sizing
              </h5>

            </div>
            <div class="card-body p-5">
              <form class="lg:grid grid-cols-5 flex-wrap gap-3 items-center mb-4">
                <div class="col-auto mb-3">
                  <label class="hidden" for="autoSizingInput">Name</label>
                  <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
                </div>
                <div class="col-auto mb-3">
                  <label class="hidden" for="autoSizingInputGroup">Username</label>
                  <div class="flex items-center">
                    <div class="bg-white border border-borderColor text-gray-900 text-sm rounded-l-lg py-2 px-2.5">@
                    </div>
                    <input type="text"
                      class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                      id="autoSizingInputGroup" placeholder="Username">
                  </div>
                </div>
                <div class="col-auto mb-3">
                  <label class="hidden" for="autoSizingSelect">Preference</label>
                  <select
                    class="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                    id="autoSizingSelect">
                    <option selected="">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-auto mb-3">
                  <div class="flex items-center">
                    <input class="border-borderColor text-primary rounded me-2" type="checkbox" id="autoSizingCheck">
                    <label class="form-check-label" for="autoSizingCheck">
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn bg-primary text-white">Submit</button>
                </div>
              </form>
              <span class="font-semibold mb-2 block text-muted">
                You can then remix that once again withsize-specific column classes.
              </span>
              <form class="lg:grid grid-cols-8 gap-3 items-center mt-0">
                <div class="col-span-2 mb-3">
                  <label class="hidden" for="specificSizeInputName">Name</label>
                  <input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe">
                </div>
                <div class="col-span-2 mb-3">
                  <label class="hidden" for="specificSizeInputGroupUsername">Username</label>
                  <div class="flex items-center">
                    <div class="bg-white border border-borderColor text-gray-900 text-sm rounded-l-lg py-2 px-2.5">@
                    </div>
                    <input type="text"
                      class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                      id="specificSizeInputGroupUsername" placeholder="Username">
                  </div>
                </div>
                <div class="col-span-2 mb-3">
                  <label class="hidden" for="specificSizeSelect">Preference</label>
                  <select
                    class="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                    id="specificSizeSelect">
                    <option selected="">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-auto mb-3">
                  <div class="flex items-center">
                    <input class="border-borderColor text-primary rounded me-2" type="checkbox" id="autoSizingCheck2">
                    <label class="form-check-label" for="autoSizingCheck2">
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn bg-primary text-white">Submit</button>
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
      title: "Home",
      text: "Form Horizontal",
    };
  },
};
</script>
