<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Form Vertical
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
            <li class="text-dark font-medium" aria-current="page">Form Vertical</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="md:grid grid-cols-2 gap-5">
        <div class="col-span-1">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h5 class="card-title">Basic Form</h5>
            </div>
            <div class="card-body p-5">
              <form action="#">
                <div class="mb-3">
                  <label class="form-label">First Name</label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Last Name</label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Email Address</label>
                  <input type="email" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Username</label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Repeat Password</label>
                  <input type="password" class="form-control">
                </div>
                <div class="text-end">
                  <button type="submit" class="btn bg-primary text-white">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h5 class="card-title">Address Form</h5>
            </div>
            <div class="card-body p-5">
              <form action="#">
                <div class="mb-3">
                  <label class="form-label">Address Line 1</label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Address Line 2</label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">City</label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">State</label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Country</label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Postal Code</label>
                  <input type="text" class="form-control">
                </div>
                <div class="text-end">
                  <button type="submit" class="btn bg-primary text-white">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="grid">
        <div class="col-1">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h4 class="card-title">Two Column Vertical Form</h4>
            </div>
            <div class="card-body p-5">
              <form action="#">
                <h4 class="card-title mb-3">Personal Information</h4>
                <div class="md:grid grid-cols-4 gap-5">
                  <div class="col-span-2">
                    <div class="mb-3">
                      <label class="form-label">First Name</label>
                      <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Last Name</label>
                      <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Blood Group</label>
                      <select class="select">
                        <option>Select</option>
                        <option value="1">A+</option>
                        <option value="2">O+</option>
                        <option value="3">B+</option>
                        <option value="4">AB+</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label class="block">Gender:</label>
                      <div class="flex items-center">
                        <div class="flex items-center me-3">
                          <input class="text-primary border-borderColor me-2" type="radio" name="gender"
                            id="gender_male" value="option1">
                          <label class="form-check-label" for="gender_male">Male</label>
                        </div>
                        <div class="flex items-center">
                          <input class="text-primary border-borderColor me-2" type="radio" name="gender"
                            id="gender_female" value="option2">
                          <label class="form-check-label" for="gender_female">Female</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-2">
                    <div class="mb-3">
                      <label class="form-label">Username</label>
                      <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="text" class="form-control">
                    </div>

                    <div class="mb-3">
                      <label class="form-label">Password</label>
                      <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Repeat Password</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                </div>
                <h4 class="card-title mb-3">Postal Address</h4>
                <div class="md:grid grid-cols-4 gap-5">
                  <div class="col-span-2">
                    <div class="mb-3">
                      <label class="form-label">Address Line 1</label>
                      <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Address Line 2</label>
                      <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">State</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-span-2">
                    <div class="mb-3">
                      <label class="form-label">City</label>
                      <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Country</label>
                      <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Postal Code</label>
                      <input type="text" class="form-control">
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

      <div class="grid">
        <div class="col-12">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h5 class="card-title">Two Column Vertical Form</h5>
            </div>
            <div class="card-body p-5">
              <form action="#">
                <div class="md:grid grid-cols-4 gap-5">
                  <div class="col-span-2">
                    <h5 class="card-title mb-2">Personal details</h5>
                    <div class="mb-3">
                      <label class="form-label">Name:</label>
                      <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Password:</label>
                      <input type="password" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">State:</label>
                      <select
                          class="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                          id="specificSizeSelect">
                          <option selected="">Select State</option>
                          <option value="1">California</option>
                          <option value="2">Texas</option>
                          <option value="3">Florida</option>
                        </select>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Your Message:</label>
                      <textarea rows="5" cols="5"
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 placeholder:text-gray-400"
                        placeholder="Enter message"></textarea>
                    </div>
                  </div>
                  <div class="col-span-2">
                    <h5 class="card-title mb-2">Personal details</h5>
                    <div class="md:grid grid-cols-4 gap-5">
                      <div class="col-span-2">
                        <div class="mb-3">
                          <label class="form-label">First Name:</label>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="col-span-2">
                        <div class="mb-3">
                          <label class="form-label">Last Name:</label>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="md:grid grid-cols-4 gap-5">
                      <div class="col-span-2">
                        <div class="mb-3">
                          <label class="form-label">Email:</label>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="col-span-2">
                        <div class="mb-3">
                          <label class="form-label">Phone:</label>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="grid">
                      <div class="col-12">
                        <div class="mb-3">
                          <label class="form-label">Address line:</label>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="md:grid grid-cols-4 gap-5">
                      <div class="col-span-2">
                        <div class="mb-3">
                          <label class="form-label">Country:</label>
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
                      </div>
                      <div class="col-span-2">
                        <div class="mb-3">
                          <label class="form-label">State/Province:</label>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="md:grid grid-cols-4 gap-5">
                      <div class="col-span-2">
                        <div class="mb-3">
                          <label class="form-label">ZIP code:</label>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="col-span-2">
                        <div class="mb-3">
                          <label class="form-label">City:</label>
                          <input type="text" class="form-control">
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
                Vertical Forms with icon
              </h5>

            </div>
            <div class="card-body p-5">
              <div class="mb-3">
                <label for="form-text1" class="form-label">Enter name</label>
                <div class="flex items-center">
                  <div class="bg-white border border-borderColor text-gray-900 text-sm rounded-l-lg py-2 px-2.5"><i
                      class="ti ti-user"></i></div>
                  <input type="text"
                    class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                    id="form-text1" placeholder="">
                </div>
              </div>
              <div class="mb-3">
                <label for="form-password1" class="form-label">
                  Enter Password
                </label>
                <div class="flex items-center">
                  <div class="bg-white border border-borderColor text-gray-900 text-sm rounded-l-lg py-2 px-2.5"><i
                      class="ti ti-lock"></i></div>
                  <input type="password"
                    class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                    id="form-password1" placeholder="">
                </div>
              </div>
              <div class="mb-3">
                <label for="form-password1" class="form-label">Enter Repeat Password</label>
                <div class="flex items-center">
                  <div class="bg-white border border-borderColor text-gray-900 text-sm rounded-l-lg py-2 px-2.5"><i
                      class="ti ti-lock"></i></div>
                  <input type="password"
                    class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                    id="form-password2" placeholder="">
                </div>
              </div>
              <button class="btn bg-primary text-white" type="submit">Submit</button>
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
              <div class="mb-3">
                <label for="colFormLabelSm" class="form-label">Email</label>
                <input type="email" class="form-control" id="colFormLabelSm" placeholder="col-form-label-sm">
              </div>
              <div class="mb-3">
                <label for="colFormLabel" class="form-label">Email</label>
                <input type="email"
                  class="bg-white border-borderColor text-gray-900 text-base rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                  id="colFormLabel" placeholder="col-form-label">
              </div>
              <div>
                <label for="colFormLabelLg" class="form-label">Email</label>
                <input type="email"
                  class="bg-white border-borderColor text-gray-900 text-lg rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                  id="colFormLabelLg" placeholder="col-form-label-lg">
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
</template>
<script>
export default {
  data() {
    return {
      title: "Home",
      text: "Form Vertical",
    };
  },
};
</script>
