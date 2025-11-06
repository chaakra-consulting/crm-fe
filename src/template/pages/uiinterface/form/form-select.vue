<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Form Select
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
            <li class="text-dark font-medium" aria-current="page">Form Select</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">

        <div class="col-12">
          <div class="card border bg-white border-borderColor mb-5 rounded">
            <div class="card-header border-b border-borderColor p-4">
              <h5 class="card-title">Select2</h5>
            </div>
            <div class="card-body p-4">

              <p class="text-muted mb-4">Select2 gives you a customizable select box with support for searching,
                tagging, remote data sets, infinite scrolling, and many other highly used options.</p>
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div class="lg:col-span-6">
                  <p class="mb-1 font-bold text-muted">Single Select</p>
                  <p class="text-muted text-[14px]">
                    Select2 can take a regular select box like this...
                  </p>
                  <select class="form-control select2" data-toggle="select2">
                    <option>Select</option>
                    <optgroup label="Alaskan/Hawaiian Time Zone">
                      <option value="AK">Alaska</option>
                      <option value="HI">Hawaii</option>
                    </optgroup>
                    <optgroup label="Pacific Time Zone">
                      <option value="CA">California</option>
                      <option value="NV">Nevada</option>
                      <option value="OR">Oregon</option>
                      <option value="WA">Washington</option>
                    </optgroup>
                    <optgroup label="Mountain Time Zone">
                      <option value="AZ">Arizona</option>
                      <option value="CO">Colorado</option>
                      <option value="ID">Idaho</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NM">New Mexico</option>
                      <option value="ND">North Dakota</option>
                      <option value="UT">Utah</option>
                      <option value="WY">Wyoming</option>
                    </optgroup>
                    <optgroup label="Central Time Zone">
                      <option value="AL">Alabama</option>
                      <option value="AR">Arkansas</option>
                      <option value="IL">Illinois</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="OK">Oklahoma</option>
                      <option value="SD">South Dakota</option>
                      <option value="TX">Texas</option>
                      <option value="TN">Tennessee</option>
                      <option value="WI">Wisconsin</option>
                    </optgroup>
                    <optgroup label="Eastern Time Zone">
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="IN">Indiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="OH">Ohio</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WV">West Virginia</option>
                    </optgroup>
                  </select>
                </div> <!-- end col -->

                <div class="lg:col-span-6">
                  <p class="mb-1 font-bold text-muted">Multiple Select</p>
                  <p class="text-muted text-[14px]">
                    Select2 can take a regular select box like this...
                  </p>

                  <select class="select2 form-control select2-multiple" data-toggle="select2" multiple="multiple"
                    data-placeholder="Choose ...">
                    <optgroup label="Alaskan/Hawaiian Time Zone">
                      <option value="AK">Alaska</option>
                      <option value="HI">Hawaii</option>
                    </optgroup>
                    <optgroup label="Pacific Time Zone">
                      <option value="CA">California</option>
                      <option value="NV">Nevada</option>
                      <option value="OR">Oregon</option>
                      <option value="WA">Washington</option>
                    </optgroup>
                    <optgroup label="Mountain Time Zone">
                      <option value="AZ">Arizona</option>
                      <option value="CO">Colorado</option>
                      <option value="ID">Idaho</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NM">New Mexico</option>
                      <option value="ND">North Dakota</option>
                      <option value="UT">Utah</option>
                      <option value="WY">Wyoming</option>
                    </optgroup>
                    <optgroup label="Central Time Zone">
                      <option value="AL">Alabama</option>
                      <option value="AR">Arkansas</option>
                      <option value="IL">Illinois</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="OK">Oklahoma</option>
                      <option value="SD">South Dakota</option>
                      <option value="TX">Texas</option>
                      <option value="TN">Tennessee</option>
                      <option value="WI">Wisconsin</option>
                    </optgroup>
                    <optgroup label="Eastern Time Zone">
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="IN">Indiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="OH">Ohio</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WV">West Virginia</option>
                    </optgroup>
                  </select>
                </div> <!-- end col -->
              </div>
              <!-- end row -->

            </div> <!-- end card body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

      </div>
      <!-- end row -->

      <!-- start row -->
      <div class="row">

        <div class="col-lg-12">
          <div class="card border bg-white border-borderColor mb-5 rounded">
            <div class="card-header border-b border-borderColor p-4">
              <h5 class="card-title">Choices</h5>
            </div>
            <div class="card-body p-4">
              <div>
                <h5 class="text-[14px] mb-2">Single Select Input Example</h5>

                <!-- start row -->
                <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">

                  <div class="lg:col-span-4 md:col-span-6">
                    <div class="mb-3">
                      <label for="choices-single-default" class="form-label text-muted">Default</label>
                      <p class="text-muted">Set <code class="text-[#DD2590]">data-choices</code> attribute to set a
                        default single select.</p>
                      <select class="form-control" data-choices name="choices-single-default"
                        id="choices-single-default">
                        <option value="">This is a placeholder</option>
                        <option value="Choice 1">Choice 1</option>
                        <option value="Choice 2">Choice 2</option>
                        <option value="Choice 3">Choice 3</option>
                      </select>
                    </div>
                  </div> <!-- end col -->

                  <div class="lg:col-span-4 md:col-span-6">
                    <div class="mb-3">
                      <label for="choices-single-groups" class="form-label text-muted">Option Groups</label>
                      <p class="text-muted">Set <code class="text-[#DD2590]">data-choices data-choices-groups</code>
                        attribute to set option group</p>
                      <select class="form-control" id="choices-single-groups" data-choices data-choices-groups
                        data-placeholder="Select City" name="choices-single-groups">
                        <option value="">Choose a city</option>
                        <optgroup label="UK">
                          <option value="London">London</option>
                          <option value="Manchester">Manchester</option>
                          <option value="Liverpool">Liverpool</option>
                        </optgroup>
                        <optgroup label="FR">
                          <option value="Paris">Paris</option>
                          <option value="Lyon">Lyon</option>
                          <option value="Marseille">Marseille</option>
                        </optgroup>
                        <optgroup label="DE" disabled>
                          <option value="Hamburg">Hamburg</option>
                          <option value="Munich">Munich</option>
                          <option value="Berlin">Berlin</option>
                        </optgroup>
                        <optgroup label="US">
                          <option value="New York">New York</option>
                          <option value="Washington" disabled>Washington</option>
                          <option value="Michigan">Michigan</option>
                        </optgroup>
                        <optgroup label="SP">
                          <option value="Madrid">Madrid</option>
                          <option value="Barcelona">Barcelona</option>
                          <option value="Malaga">Malaga</option>
                        </optgroup>
                        <optgroup label="CA">
                          <option value="Montreal">Montreal</option>
                          <option value="Toronto">Toronto</option>
                          <option value="Vancouver">Vancouver</option>
                        </optgroup>
                      </select>
                    </div>
                  </div> <!-- end col -->

                  <div class="lg:col-span-4 md:col-span-6">
                    <div class="mb-3">
                      <label for="choices-single-no-search" class="form-label text-muted">Options added via config with
                        no search</label>
                      <p class="text-muted">Set <code
                          class="text-[#DD2590]">data-choices data-choices-search-false data-choices-removeItem</code>
                      </p>
                      <select class="form-control" id="choices-single-no-search" name="choices-single-no-search"
                        data-choices data-choices-search-false data-choices-removeItem>
                        <option value="Zero">Zero</option>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                        <option value="Four">Four</option>
                        <option value="Five">Five</option>
                        <option value="Six">Six</option>
                      </select>
                    </div>
                  </div> <!-- end col -->

                  <div class="lg:col-span-4 md:col-span-6">
                    <div class="mb-3">
                      <label for="choices-single-no-sorting" class="form-label text-muted">Options added via config with
                        no sorting</label>
                      <p class="text-muted">Set <code
                          class="text-[#DD2590]">data-choices data-choices-sorting-false</code> attribute.</p>
                      <select class="form-control" id="choices-single-no-sorting" name="choices-single-no-sorting"
                        data-choices data-choices-sorting-false>
                        <option value="Madrid">Madrid</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Vancouver">Vancouver</option>
                        <option value="London">London</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Liverpool">Liverpool</option>
                        <option value="Paris">Paris</option>
                        <option value="Malaga">Malaga</option>
                        <option value="Washington" disabled>Washington</option>
                        <option value="Lyon">Lyon</option>
                        <option value="Marseille">Marseille</option>
                        <option value="Hamburg">Hamburg</option>
                        <option value="Munich">Munich</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Montreal">Montreal</option>
                        <option value="New York">New York</option>
                        <option value="Michigan">Michigan</option>
                      </select>
                    </div>
                  </div> <!-- end col -->

                </div>
                <!-- end row -->

              </div>

              <div class="mt-4">
                <h5 class="text-[14px] mb-3">Multiple Select Input</h5>

                <!-- start row -->
                <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">

                  <div class="lg:col-span-4 md:col-span-6">
                    <div class="mb-3">
                      <label for="choices-multiple-default" class="form-label text-muted">Default</label>
                      <p class="text-muted">Set <code class="text-[#DD2590]">data-choices multiple</code> attribute.</p>
                      <select class="form-control" id="choices-multiple-default" data-choices
                        name="choices-multiple-default" multiple>
                        <option value="Choice 1" selected>Choice 1</option>
                        <option value="Choice 2">Choice 2</option>
                        <option value="Choice 3">Choice 3</option>
                        <option value="Choice 4" disabled>Choice 4</option>
                      </select>
                    </div>
                  </div> <!-- end col -->

                  <div class="lg:col-span-4 md:col-span-6">
                    <div class="mb-3">
                      <label for="choices-multiple-remove-button" class="form-label text-muted">With remove
                        button</label>
                      <p class="text-muted">Set <code
                          class="text-[#DD2590]">data-choices data-choices-removeItem multiple</code> attribute.</p>
                      <select class="form-control" id="choices-multiple-remove-button" data-choices
                        data-choices-removeItem name="choices-multiple-remove-button" multiple>
                        <option value="Choice 1" selected>Choice 1</option>
                        <option value="Choice 2">Choice 2</option>
                        <option value="Choice 3">Choice 3</option>
                        <option value="Choice 4">Choice 4</option>
                      </select>
                    </div>
                  </div> <!-- end col -->

                  <div class="lg:col-span-4 md:col-span-6">
                    <div class="mb-3">
                      <label for="choices-multiple-groups" class="form-label text-muted">Option groups</label>
                      <p class="text-muted">Set <code
                          class="text-[#DD2590]">data-choices data-choices-multiple-groups="true" multiple</code>
                        attribute. </p>
                      <select class="form-control" id="choices-multiple-groups" name="choices-multiple-groups"
                        data-choices data-choices-multiple-groups="true" multiple>
                        <option value="">Choose a city</option>
                        <optgroup label="UK">
                          <option value="London">London</option>
                          <option value="Manchester">Manchester</option>
                          <option value="Liverpool">Liverpool</option>
                        </optgroup>
                        <optgroup label="FR">
                          <option value="Paris">Paris</option>
                          <option value="Lyon">Lyon</option>
                          <option value="Marseille">Marseille</option>
                        </optgroup>
                        <optgroup label="DE" disabled>
                          <option value="Hamburg">Hamburg</option>
                          <option value="Munich">Munich</option>
                          <option value="Berlin">Berlin</option>
                        </optgroup>
                        <optgroup label="US">
                          <option value="New York">New York</option>
                          <option value="Washington" disabled>Washington</option>
                          <option value="Michigan">Michigan</option>
                        </optgroup>
                        <optgroup label="SP">
                          <option value="Madrid">Madrid</option>
                          <option value="Barcelona">Barcelona</option>
                          <option value="Malaga">Malaga</option>
                        </optgroup>
                        <optgroup label="CA">
                          <option value="Montreal">Montreal</option>
                          <option value="Toronto">Toronto</option>
                          <option value="Vancouver">Vancouver</option>
                        </optgroup>
                      </select>
                    </div>
                  </div> <!-- end col -->

                </div>
                <!-- end row -->

              </div>

              <div class="mt-4">
                <h5 class="text-[14px] mb-3">Text Inputs</h5>

                <!-- start row -->
                <div class="row">

                  <div class="lg:col-span-4 md:col-span-6">
                    <div class="mb-3">
                      <label for="choices-text-remove-button" class="form-label text-muted">Set limit values with remove
                        button</label>
                      <p class="text-muted">Set <code
                          class="text-[#DD2590]">data-choices data-choices-limit="Required Limit" data-choices-removeItem</code>
                        attribute.</p>
                      <input class="form-control" id="choices-text-remove-button" data-choices data-choices-limit="3"
                        data-choices-removeItem type="text" value="Task-1">
                    </div>
                  </div> <!-- end col -->

                  <div class="lg:col-span-4 md:col-span-6">
                    <div class="mb-3">
                      <label for="choices-text-unique-values" class="form-label text-muted">Unique values only, no
                        pasting</label>
                      <p class="text-muted">Set <code
                          class="text-[#DD2590]">data-choices data-choices-text-unique-true</code> attribute.</p>
                      <input class="form-control" id="choices-text-unique-values" data-choices
                        data-choices-text-unique-true type="text" value="Project-A, Project-B">
                    </div>
                  </div> <!-- end col -->

                </div>
                <!-- end row -->

                <div>
                  <label for="choices-text-disabled" class="form-label text-muted">Disabled</label>
                  <p class="text-muted">Set <code
                      class="text-[#DD2590]">data-choices data-choices-text-disabled-true</code> attribute.</p>
                  <input class="form-control" id="choices-text-disabled" data-choices data-choices-text-disabled-true
                    type="text" value="alex@example.com, laura@example.com">
                </div>

              </div>
            </div> <!-- end card-body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

      </div>
      <!-- end row -->

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
      title: "Form Select2",
      text: "Dashboard",
      text1: "Form Select2",
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      selectedEight: null,
      SelectOne: [
        { label: "Selection-1", value: "Selection-1" },
        { label: "Selection-2", value: "Selection-2" },
        { label: "Selection-3", value: "Selection-3" },
        { label: "Selection-4", value: "Selection-4" },
        { label: "Selection-5", value: "Selection-5" },
      ],
      SelectTwo: [{ label: "Multiple-1", value: "Multiple-1" }, { label: "Multiple-2", value: "Multiple-2" }, { label: "Multiple-3", value: "Multiple-3" }, { label: "Multiple-4", value: "Multiple-4" }, { label: "Multiple-5", value: "Multiple-5" }],
      SelectThree: [{ label: "Texas", value: "Texas" }, { label: "Georgia", value: "Georgia" }, { label: "California", value: "California" }, { label: "Washington D.C", value: "Washington D.C" }, { label: "Virginia", value: "Virginia" }],
      SelectFour: [{ label: "Apple", value: "Apple" }, { label: "Mango", value: "Mango" }, { label: "Orange", value: "Orange" }, { label: "Guava", value: "Guava" }, { label: "Pineapple", value: "Pineapple" }],
      SelectFive: [{ label: "Apple", value: "Apple" }, { label: "Mango", value: "Mango" }, { label: "Orange", value: "Orange" }, { label: "Guava", value: "Guava" }, { label: "Pineapple", value: "Pineapple" }],
      SelectSix: [{ label: "Orange", value: "Orange" }, { label: "White", value: "White" }, { label: "Purple", value: "Purple" }],
      SelectSeven: [{ label: "First", value: "First" }, { label: "Second", value: "Second" }, { label: "Third", value: "Third" }, { label: "Fourth", value: "Fourth" }, { label: "Fifth", value: "Fifth" }],
      SelectEight: [{ label: "Orange", value: "Orange" }, { label: "White", value: "White" }, { label: "Purple", value: "Purple" }],
      SelectNine: [{ label: "First", value: "First" }, { label: "Second", value: "Second" }, { label: "Third", value: "Third" }],
    };
  },
};
</script
