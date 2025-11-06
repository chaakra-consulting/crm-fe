<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Checkbox & Radios
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
            <li class="text-dark font-medium" aria-current="page">Checkbox & Radios</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div>
        <div class="lg:grid grid-cols-4 gap-x-6">
          <div class="col-span-2">
            <div class="card border w-full border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div class="card-header justify-between py-4 px-5 border-b border-borderColor">
                <h4 class="card-title">Checkbox</h4>
              </div>
              <div class="card-body p-5">
                <div class="form-check">
                  <input class="text-primary rounded border-borderColor" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary rounded border-borderColor" type="checkbox" value="" id="flexCheckChecked"
                    checked="">
                  <label class="form-check-label" for="flexCheckChecked">
                    Checked checkbox
                  </label>
                </div>
              </div>

            </div>
          </div>

          <div class="col-span-2">
            <div class="card border w-full border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div class="card-header justify-between py-4 px-5 border-b border-borderColor">
                <h4 class="card-title">Disabled</h4>
              </div>
              <div class="card-body p-5">
                <div class="form-check">
                  <input class="text-primary rounded border-borderColor" type="checkbox" value="" id="flexCheckDisabled"
                    disabled="">
                  <label class="text-gray-300" for="flexCheckDisabled">
                    Disabled checkbox
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary rounded border-borderColor" type="checkbox" value=""
                    id="flexCheckCheckedDisabled" checked="" disabled="">
                  <label class="text-gray-300" for="flexCheckCheckedDisabled">
                    Disabled checked checkbox
                  </label>
                </div>
              </div>

            </div>
          </div>

          <div class="col-span-2">
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div class="card-header justify-between py-4 px-5 border-b border-borderColor">
                <h4 class="card-title">Radios</h4>
              </div>
              <div class="card-body p-5">
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault"
                    id="flexRadioDefault1">
                  <label class="form-check-label" for="flexRadioDefault1">
                    Default radio
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="flexRadioDefault"
                    id="flexRadioDefault2" checked="">
                  <label class="form-check-label" for="flexRadioDefault2">
                    Default checked radio
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-2">
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div class="card-header justify-between py-4 px-5 border-b border-borderColor">
                <h4 class="card-title">Radios</h4>
              </div>
              <div class="card-body p-5">
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="flexRadioDisabled"
                    id="flexRadioDisabled" disabled="">
                  <label class="text-gray-300" for="flexRadioDisabled">
                    Disabled radio
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="flexRadioDisabled"
                    id="flexRadioCheckedDisabled" checked="" disabled="">
                  <label class="text-gray-300" for="flexRadioCheckedDisabled">
                    Disabled checked radio
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-2">
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div class="card-header justify-between py-4 px-5 border-b border-borderColor">
                <h4 class="card-title">Default (stacked)</h4>
              </div>
              <div class="card-body p-5">
                <div class="form-check">
                  <input class="text-primary rounded border-borderColor" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    Default checkbox
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary rounded border-borderColor" type="checkbox" value="" id="defaultCheck2"
                    disabled="">
                  <label class="text-gray-300" for="defaultCheck2">
                    Disabled checkbox
                  </label>
                </div>
                <div class="form-check">
                  <input class="text-primary border-borderColor" type="radio" name="exampleRadios" id="exampleRadios1"
                    value="option1" checked="">
                  <label class="form-check-label" for="exampleRadios1">
                    Default radio
                  </label>
                </div>
                <div class="form-check mb-0">
                  <input class="text-primary border-borderColor" type="radio" name="exampleRadios" id="exampleRadios3"
                    value="option3" disabled="">
                  <label class="text-gray-300" for="exampleRadios3">
                    Disabled radio
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-2">
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div class="card-header justify-between py-4 px-5 border-b border-borderColor">
                <h4 class="card-title">Switches</h4>
              </div>
              <div class="card-body p-5">
                <div class="form-check form-switch">
                  <input class="text-primary rounded border-borderColor" type="checkbox" role="switch"
                    id="flexSwitchCheckDefault">
                  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch
                    checkbox input
                  </label>
                </div>
                <div class="form-check form-switch">
                  <input class="text-primary rounded border-borderColor" type="checkbox" role="switch"
                    id="flexSwitchCheckChecked" checked="">
                  <label class="form-check-label" for="flexSwitchCheckChecked">
                    Checked switch checkbox input
                  </label>
                </div>
                <div class="form-check form-switch">
                  <input class="text-primary rounded border-borderColor" type="checkbox" role="switch"
                    id="flexSwitchCheckDisabled" disabled="">
                  <label class="text-gray-300" for="flexSwitchCheckDisabled">
                    Disabled switch checkbox input
                  </label>
                </div>
                <div class="form-check form-switch mb-0">
                  <input class="text-primary rounded border-borderColor" type="checkbox" role="switch"
                    id="flexSwitchCheckCheckedDisabled" checked="" disabled="">
                  <label class="text-gray-300" for="flexSwitchCheckCheckedDisabled">
                    Disabled checked switch checkbox input
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:grid grid-cols-6 gap-5">
          <div class="col-span-2">
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div class="card-header justify-between p-5 border-b border-borderColor">
                <h4 class="card-title">
                  Checkbox Sizes
                </h4>
              </div>
              <div class="card-body flex items-center justify-between p-5">
                <div class="flex items-center">
                  <input class="text-primary rounded border-borderColor me-1" type="checkbox" value="" id="checkebox-sm"
                    checked="">
                  <label class="form-check-label" for="checkebox-sm">
                    Default
                  </label>
                </div>
                <div class="flex items-center">
                  <input class="text-primary rounded border-borderColor size-5 me-1" type="checkbox" value=""
                    id="checkebox-md" checked="">
                  <label class="text-base" for="checkebox-md">
                    Medium
                  </label>
                </div>
                <div class="flex items-center">
                  <input class="text-primary rounded border-borderColor size-6 me-1" type="checkbox" value=""
                    id="checkebox-lg" checked="">
                  <label class="text-lg" for="checkebox-lg">
                    Large
                  </label>
                </div>
              </div>

            </div>
          </div>
          <div class="col-span-2">
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div class="card-header justify-between p-5 border-b border-borderColor">
                <h4 class="card-title">
                  Radio Sizes
                </h4>
              </div>
              <div class="card-body flex items-center justify-between p-5">
                <div class="flex items-center">
                  <input class="text-primary border-borderColor me-1" type="radio" name="Radio" id="Radio-sm">
                  <label for="Radio-sm">
                    Default
                  </label>
                </div>
                <div class="flex items-center">
                  <input class="text-primary border-borderColor size-5 me-1" type="radio" name="Radio" id="Radio-md">
                  <label class="text-base" for="Radio-md">
                    Medium
                  </label>
                </div>
                <div class="flex items-center">
                  <input class="text-primary border-borderColor size-6 me-1" type="radio" name="Radio" id="Radio-lg"
                    checked="">
                  <label class="text-lg" for="Radio-lg">
                    Large
                  </label>
                </div>
              </div>

            </div>
          </div>
          <div class="col-span-2">
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div class="card-header justify-between p-5 border-b border-borderColor">
                <h4 class="card-title">
                  Switch Sizes
                </h4>
              </div>
              <div class="card-body flex items-center justify-between p-5">
                <div class="flex items-center">
                  <input class="text-primary rounded border-borderColor me-1" type="checkbox" role="switch"
                    id="switch-sm">
                  <label for="switch-sm">Default</label>
                </div>
                <div class="flex items-center">
                  <input class="text-primary rounded border-borderColor me-1" type="checkbox" role="switch"
                    id="switch-md">
                  <label class="text-base" for="switch-md">Medium</label>
                </div>
                <div class="flex items-center">
                  <input class="text-primary rounded border-borderColor me-1" type="checkbox" role="switch"
                    id="switch-lg">
                  <label class="text-lg" for="switch-lg">Large</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:grid grid-cols-4 gap-5">
          <div class="col-span-2">
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div class="card-header justify-between p-5 border-b border-borderColor">
                <h4 class="card-title">Inline</h4>
              </div>
              <div class="card-body flex items-center justify-between p-5">
                <div class="form-check form-check-inline">
                  <input class="border-borderColor text-primary rounded" type="checkbox" id="inlineCheckbox1"
                    value="option1">
                  <label class="form-check-label" for="inlineCheckbox1">1</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="border-borderColor text-primary rounded" type="checkbox" id="inlineCheckbox2"
                    value="option2">
                  <label class="form-check-label" for="inlineCheckbox2">2</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="border-borderColor text-primary rounded" type="checkbox" id="inlineCheckbox3"
                    value="option3" disabled="">
                  <label class="text-gray-300" for="inlineCheckbox3">3 (disabled)</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="border-borderColor text-primary" type="radio" name="inlineRadioOptions"
                    id="inlineRadio1" value="option1">
                  <label class="form-check-label" for="inlineRadio1">1</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="border-borderColor text-primary" type="radio" name="inlineRadioOptions"
                    id="inlineRadio2" value="option2">
                  <label class="form-check-label" for="inlineRadio2">2</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="border-borderColor text-primary" type="radio" name="inlineRadioOptions"
                    id="inlineRadio3" value="option3" disabled="">
                  <label class="text-gray-300" for="inlineRadio3">3 (disabled)</label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-2">
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div class="card-header justify-between p-5 border-b border-borderColor">
                <h4 class="card-title">Without labels</h4>
              </div>
              <div class="card-body p-5">
                <span class="me-3">
                  <input class="border-borderColor text-primary rounded" type="checkbox" id="checkboxNoLabel" value=""
                    aria-label="...">
                </span>
                <span>
                  <input class="border-borderColor text-primary" type="radio" name="radioNoLabel" id="radioNoLabel1"
                    value="" aria-label="...">
                </span>
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
      text: "Checks & Radios",
    };
  },
};
</script>
