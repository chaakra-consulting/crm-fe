<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Form Validation
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
            <li class="text-dark font-medium" aria-current="page">Form Validation</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <!-- Row -->
      <div class="grid">
        <div class="col-12">

          <!-- Custom Boostrap Validation -->
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Custom Bootstrap Form Validation</h4>
              <p class="card-text text-xs">
                For custom Bootstrap form validation messages, you’ll need to add the <code
                  class="text-pink">novalidate</code> boolean attribute to your form. For server side validation
                <a href="https://getbootstrap.com/docs/4.1/components/forms/#server-side" target="_blank"
                  class="text-gray-900 hover:text-primary">
                  read full documentation
                </a>
                .
              </p>
            </div>
            <div class="card-body p-5">
              <div class="grid">
                <div class="sm:col">
                  <form class="needs-validation" novalidate>
                    <div class="lg:grid grid-cols-6 gap-5">
                      <div class="col-span-2 mb-3">
                        <label class="form-label" for="validationCustom01">
                          First name
                        </label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder="First name"
                          value="Mark" required>
                        <div class="valid-feedback hidden">
                          Looks good!
                        </div>
                      </div>
                      <div class="col-span-2 mb-3">
                        <label class="form-label" for="validationCustom02">Last name</label>
                        <input type="text" class="form-control" id="validationCustom02" placeholder="Last name"
                          value="Otto" required>
                        <div class="valid-feedback hidden">
                          Looks good!
                        </div>
                      </div>
                      <div class="col-span-2 mb-3">
                        <label class="form-label" for="validationCustomUsername">Username</label>
                        <div class="flex items-center">
                          <span
                            class="bg-white border border-borderColor text-gray-900 text-sm rounded-l-lg py-2 px-2.5"
                            id="inputGroupPrepend">@</span>
                          <input type="text"
                            class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                            id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend"
                            required>
                          <div class="invalid-feedback hidden">
                            Please choose a username.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-4 gap-5">
                      <div class="col-span-2 mb-3">
                        <label class="form-label" for="validationCustom03">City</label>
                        <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
                        <div class="invalid-feedback hidden">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div class="col-span-1 mb-3">
                        <label class="form-label" for="validationCustom04">State</label>
                        <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
                        <div class="invalid-feedback hidden">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div class="col-span-1 mb-3">
                        <label class="form-label" for="validationCustom05">Zip</label>
                        <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
                        <div class="invalid-feedback hidden">
                          Please provide a valid zip.
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="flex items-center">
                        <input class="bg-white border-borderColor rounded text-primary size-2 me-2" type="checkbox"
                          value="" id="invalidCheck" required>
                        <label class="form-check-label" for="invalidCheck">
                          Agree to terms and conditions
                        </label>
                        <div class="invalid-feedback hidden">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <button class="btn bg-primary text-white" type="submit">Submit form</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- /Custom Boostrap Validation -->

          <!-- Default Browser Validation -->
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Browser defaults</h4>
              <p class="card-text text-xs">
                Not interested in custom validation feedback messages or writing JavaScript to change form behaviors?
                All good, you can use the browser defaults. Try submitting the form below.
              </p>
            </div>
            <div class="card-body p-5">
              <div class="grid">
                <div class="col-12">
                  <form>
                    <div class="lg:grid grid-cols-6 gap-5">
                      <div class="col-span-2 mb-3">
                        <label class="form-label" for="validationDefault01">
                          First name
                        </label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="First name"
                          value="Mark" required>
                      </div>
                      <div class="col-span-2 mb-3">
                        <label class="form-label" for="validationDefault02">
                          Last name
                        </label>
                        <input type="text" class="form-control" id="validationDefault02" placeholder="Last name"
                          value="Otto" required>
                      </div>
                      <div class="col-span-2 mb-3">
                        <label class="form-label" for="validationDefaultUsername">Username</label>
                        <div class="flex items-center">
                          <span
                            class="bg-white border border-borderColor text-gray-900 text-sm rounded-l-lg py-2 px-2.5"
                            id="inputGroupPrepend2">@</span>
                          <input type="text"
                            class="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                            id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2"
                            required>
                        </div>
                      </div>
                    </div>
                    <div class="lg:grid grid-cols-4 gap-5">
                      <div class="col-span-2 mb-3">
                        <label class="form-label" for="validationDefault03">City</label>
                        <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
                      </div>
                      <div class="col-span-1 mb-3">
                        <label class="form-label" for="validationDefault04">State</label>
                        <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
                      </div>
                      <div class="col-span-1 mb-3">
                        <label class="form-label" for="validationDefault05">Zip</label>
                        <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="flex items-center">
                        <input class="bg-white border-borderColor rounded-input text-primary size-3 me-2"
                          type="checkbox" value="" id="invalidCheck2" required>
                        <label class="form-check-label" for="invalidCheck2">
                          Agree to terms and conditions
                        </label>
                      </div>
                    </div>
                    <button class="btn bg-primary text-white" type="submit">Submit form</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- /Default Browser Validation -->

          <!-- Server Side Validation -->
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Server side</h4>
              <p class="text-xs">
                We recommend using client side validation, but in case you require server side, you can indicate invalid
                and valid form fields with <code class="text-pink">.is-invalid</code> and <code
                  class="text-pink">.is-valid</code>. Note that <code class="text-pink">.invalid-feedback</code> is also
                supported with these classes.
              </p>
            </div>
            <div class="card-body p-5">
              <form>
                <div class="lg:grid grid-cols-6 gap-5">
                  <div class="col-span-2 mb-4">
                    <label class="form-label" for="validationServer01">First name</label>
                    <input type="text"
                      class="bg-white border-success focus:border-blue-500 focus:outline-none text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400 mb-1"
                      id="validationServer01" placeholder="First name" value="Mark" required>
                    <div class="valid-feedback text-success text-xs">
                      Looks good!
                    </div>
                  </div>
                  <div class="col-span-2 mb-4">
                    <label class="form-label" for="validationServer02">Last name</label>
                    <input type="text"
                      class="bg-white border-success text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400 mb-1"
                      id="validationServer02" placeholder="Last name" value="Otto" required>
                    <div class="valid-feedback text-success text-xs">
                      Looks good!
                    </div>
                  </div>
                  <div class="col-span-2 mb-4">
                    <label class="form-label" for="validationServerUsername">Username</label>
                    <div class="input-group input-grp">
                      <div class="flex items-center">
                        <span
                          class="bg-white border border-borderColor text-gray-900 text-sm rounded-l-lg py-2 px-2.5 mb-1"
                          id="inputGroupPrepend3">@</span>
                        <input type="text"
                          class="bg-white border-danger text-gray-900 text-sm block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400 mb-1"
                          id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3"
                          required>
                      </div>
                      <div class="invalid-feedback text-danger text-xs">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:grid grid-cols-4 gap-5">
                  <div class="col-span-2 mb-4">
                    <label class="form-label" for="validationServer03">City</label>
                    <input type="text"
                      class="bg-white border-danger text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400 mb-1"
                      id="validationServer03" placeholder="City" required>
                    <div class="invalid-feedback text-danger text-xs">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div class="col-span-1 mb-4">
                    <label class="form-label" for="validationServer04">State</label>
                    <input type="text"
                      class="bg-white border-danger text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400 mb-1"
                      id="validationServer04" placeholder="State" required>
                    <div class="invalid-feedback text-danger text-xs">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div class="col-span-1 mb-4">
                    <label class="form-label" for="validationServer05">Zip</label>
                    <input type="text"
                      class="bg-white border-danger text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400 mb-1"
                      id="validationServer05" placeholder="Zip" required>
                    <div class="invalid-feedback text-danger text-xs">
                      Please provide a valid zip.
                    </div>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="form-check">
                    <div class="flex items-center mb-2">
                      <input class="border-borderColor rounded size-3 me-2" type="checkbox" value="" id="invalidCheck3"
                        required>
                      <label class="text-danger" for="invalidCheck3">
                        Agree to terms and conditions
                      </label>
                    </div>
                    <div class="text-danger text-xs ms-6">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <button class="btn bg-primary text-white" type="submit">Submit form</button>
              </form>
            </div>
          </div>
          <!-- /Server Side Validation -->

          <!-- Supported Elements -->
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Supported elements</h4>
              <p class="card-text text-xs">
                Form validation styles are also available for bootstrap custom form controls.
              </p>
            </div>
            <div class="card-body p-5">
              <div class="grid">
                <div class="col-12">
                  <form class="was-validated">
                    <div class="mb-3">
                      <label for="validationTextarea" class="form-label">Textarea</label>
                      <textarea
                        class="bg-white border-danger text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 placeholder:text-gray-400 mb-1"
                        id="validationTextarea" placeholder="Required example textarea" required></textarea>
                      <div class="invalid-feedback text-xs text-danger">
                        Please enter a message in the textarea.
                      </div>
                    </div>

                    <div class="form-check mb-3">
                      <input type="checkbox" class="border-danger text-success rounded me-1" id="validationFormCheck1"
                        required>
                      <label class="text-danger" for="validationFormCheck1">
                        Check this checkbox
                      </label>
                      <div class="invalid-feedback text-xs text-danger ms-6">Example invalid feedback text</div>
                    </div>

                    <div class="form-check mb-1">
                      <input type="radio" class="border-danger text-success me-1" id="validationFormCheck2"
                        name="radio-stacked" required>
                      <label class="text-danger" for="validationFormCheck2">
                        Toggle this radio
                      </label>
                    </div>
                    <div class="form-check mb-3">
                      <input type="radio" class="border-danger text-success me-1" id="validationFormCheck3"
                        name="radio-stacked" required>
                      <label class="text-danger" for="validationFormCheck3">
                        Or toggle this other radio
                      </label>
                      <div class="invalid-feedback text-xs text-danger ms-6">More example invalid feedback text</div>
                    </div>

                    <div class="mb-3">
                      <select
                        class="bg-white border-danger text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400 mb-1"
                        required aria-label="select example">
                        <option value="">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div class="invalid-feedback text-xs text-danger">Example invalid select feedback</div>
                    </div>

                    <div class="mb-3">
                      <input type="file"
                        class="bg-white border border-danger text-gray-900 text-sm rounded-input block w-full mb-1"
                        aria-label="file example" required>
                      <div class="invalid-feedback text-xs text-danger">Example invalid form file feedback</div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- /Supported Elements -->

          <!-- Validation Tooltips -->
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Tooltips</h4>
              <p class="text-xs">
                You can swap the <code class="text-pink">.{valid|invalid}-feedback</code> classes for <code
                  class="text-pink">.{valid|invalid}-tooltip</code> classes to display validation feedback in a styled
                tooltip.
              </p>
            </div>
            <div class="card-body p-5">
              <form class="needs-validation" novalidate>
                <div class="lg:grid grid-cols-6 gap-5">
                  <div class="col-span-2 mb-3">
                    <label class="form-label" for="validationTooltip01">First name</label>
                    <input type="text" class="form-control" id="validationTooltip01" placeholder="First name"
                      value="Mark" required>
                    <div class="valid-tooltip hidden">
                      Looks good!
                    </div>
                  </div>
                  <div class="col-span-2 mb-3">
                    <label class="form-label" for="validationTooltip02">Last name</label>
                    <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name"
                      value="Otto" required>
                    <div class="valid-tooltip hidden">
                      Looks good!
                    </div>
                  </div>
                  <div class="col-span-2 mb-3">
                    <label class="form-label" for="validationTooltipUsername">Username</label>
                    <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username"
                      required>
                    <div class="invalid-tooltip hidden">
                      Please choose a unique and valid username.
                    </div>
                  </div>
                </div>
                <div class="lg:grid grid-cols-4 gap-5">
                  <div class="col-span-1 mb-3">
                    <label class="form-label" for="validationTooltip03">City</label>
                    <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required>
                    <div class="invalid-tooltip hidden">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div class="col-span-1 mb-3">
                    <label class="form-label" for="validationTooltip04">State</label>
                    <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required>
                    <div class="invalid-tooltip hidden">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div class="col-span-1 mb-3">
                    <label class="form-label" for="validationTooltip05">Zip</label>
                    <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
                    <div class="invalid-tooltip hidden">
                      Please provide a valid zip.
                    </div>
                  </div>
                </div>
                <button class="btn bg-primary text-white" type="submit">Submit form</button>
              </form>
            </div>
          </div>
          <!-- /Validation Tooltips -->

        </div>
      </div>
      <!-- /Row -->

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
</template>