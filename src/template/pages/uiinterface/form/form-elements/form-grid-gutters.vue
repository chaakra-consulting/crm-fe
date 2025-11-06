<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Grid System
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
            <li class="text-dark font-medium" aria-current="page">Grid System</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="lg:grid grid-cols-4 gap-x-6">
        <div class="col-span-2">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h4 class="card-title">
                Form Grid
              </h4>
            </div>
            <div class="card-body p-5">
              <div class="md:grid grid-cols-4 gap-x-6">
                <div class="col-span-2 mb-4">
                  <label class="form-label">First Name</label>
                  <input type="text" class="form-control" placeholder="First Name">
                </div>
                <div class="col-span-2 mb-4">
                  <label class="form-label">Last Name</label>
                  <input type="text" class="form-control" placeholder="Last Name">
                </div>
                <div class="col-span-2 mb-4">
                  <label class="form-label">Address</label>
                  <div class="lg:grid grid-cols-4 gap-x-6">
                    <div class="col-span-4 mb-4">
                      <input type="text" class="form-control" placeholder="Street">
                    </div>
                    <div class="col-span-4 mb-4">
                      <input type="text" class="form-control" placeholder="Landmark">
                    </div>
                    <div class="col-span-2 mb-4">
                      <input type="text" class="form-control" placeholder="City">
                    </div>
                    <div class="col-span-2 mb-4">
                      <select id="inputState1"
                        class="form-select bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400">
                        <option selected="">State</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="col-span-2 mb-4">
                      <input type="text" class="form-control" placeholder="Postal/Zip code">
                    </div>
                    <div class="col-span-2 mb-4">
                      <select id="inputCountry"
                        class="form-select bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400">
                        <option selected="">Country</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-span-2">
                  <div class="lg:grid grid-cols-4 gap-x-6">
                    <div class="col-span-4 mb-4">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="col-span-4 mb-4">
                      <label class="form-label">DOB</label>
                      <input type="date" class="form-control">
                    </div>
                    <div class="col-span-4 mb-4">
                      <label class="form-label">Maritial Status</label>
                      <div class="md:grid grid-cols-4 gap-x-6">
                        <div class="col-span-2">
                          <div class="form-check flex items-center">
                            <input class="form-check-input me-2 border-borderColor rounded" type="checkbox" value=""
                              id="status-married" required="">
                            <label class="form-check-label" for="status-married">
                              Married
                            </label>
                          </div>
                        </div>
                        <div class="col-span-2">
                          <div class="form-check flex items-center">
                            <input class="form-check-input me-2 border-borderColor rounded" type="checkbox" value=""
                              id="status-unmarried" required="">
                            <label class="form-check-label" for="status-unmarried">
                              Single
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-2 mb-4">
                  <label class="form-label">Contact Number</label>
                  <input type="number" class="form-control" placeholder="Phone Number">
                </div>
                <div class="col-span-2 mb-4">
                  <label class="form-label">Alternative Contact</label>
                  <input type="number" class="form-control" placeholder="Phone Number">
                </div>
                <div class="col-span-4">
                  <div class="form-check flex items-center mb-4">
                    <input class="form-check-input border-borderColor rounded text-primary me-1" type="checkbox"
                      id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div class="col-span-4">
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-span-2">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-5 border-b border-borderColor">
              <h4 class="card-title">
                Gutters
              </h4>

            </div>
            <div class="card-body p-5">
              <form class="lg:grid grid-cols-6 gap-x-6">
                <div class="col-span-3 mb-4">
                  <label class="form-label">First Name</label>
                  <input type="text" class="form-control" placeholder="First Name">
                </div>
                <div class="col-span-3 mb-4">
                  <label class="form-label">Last Name</label>
                  <input type="text" class="form-control" placeholder="Last Name">
                </div>
                <div class="col-span-3 mb-4">
                  <label for="inputEmail4" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail4">
                </div>
                <div class="col-span-3 mb-4">
                  <label for="inputPassword4" class="form-label">Password</label>
                  <input type="password" class="form-control" id="inputPassword4">
                </div>
                <div class="col-span-6 mb-4">
                  <label for="inputAddress" class="form-label">Address</label>
                  <input type="text" class="form-control" id="inputAddress">
                </div>
                <div class="col-span-6 mb-4">
                  <label for="inputAddress2" class="form-label">Address 2</label>
                  <input type="text" class="form-control" id="inputAddress2">
                </div>
                <div class="col-span-3 mb-4">
                  <label for="inputCity" class="form-label">City</label>
                  <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="col-span-2 mb-4">
                  <label for="inputState" class="form-label">State</label>
                  <select id="inputState"
                    class="form-select bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400">
                    <option selected="">Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-span-1 mb-4">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="inputZip">
                </div>
                <div class="col-span-6 mb-4">
                  <div class="form-check flex item-center">
                    <input class="form-check-input rounded border-borderColor text-primary me-2" type="checkbox"
                      id="gridCheck3">
                    <label class="form-check-label" for="gridCheck3">
                      Check me out
                    </label>
                  </div>
                </div>
                <div class="col-span-6">
                  <button type="submit" class="btn btn-primary">Sign in</button>
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
      text: "Grid Gutters",
    };
  },
};
</script>
