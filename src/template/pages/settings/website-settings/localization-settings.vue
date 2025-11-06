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
        <website-sidebar></website-sidebar>
        <div class="xl:col-span-9">
          <div class="bg-white border border-borderColor rounded p-4">
            <div class="border-b border-borderColor mb-3 pb-3">
              <h5 class="mb-0 text-[17px]">Localization</h5>
            </div>
            <form>
              <div class="mb-3">
                <h6 class="mb-1">Basic Information</h6>
                <p class="mb-0">Provide the basic information below</p>
              </div>
              <div class="border-b border-borderColor mb-3">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Language</h6>
                      <p class="text-[13px] mb-0">Select Language of the website</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selectedFour" :options="LangSele" placeholder="English" />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Language Switcher</h6>
                      <p class="text-[13px] mb-0">To display in all the pages</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <label class="flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Timezone</h6>
                      <p class="text-[13px] mb-0">Select date format to display in website</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selected" :options="TimeZon" placeholder="(+5:30) GMT" />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Date Format</h6>
                      <p class="text-[13px] mb-0">Select Language of the website</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selectedTwo" :options="Datefor" placeholder="18 Mar 2025" />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Time Format</h6>
                      <p class="text-[13px] mb-0">Select time format to display in website</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selectedThree" :options="Timesele" placeholder="12 hrs" />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Financial Year</h6>
                      <p class="text-[13px] mb-0">Select year for finance</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selectedTwo" :options="Datefor" placeholder="2025" />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Starting Month</h6>
                      <p class="text-[13px] mb-0">Select starting month to display</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selectedFourOne" :options="LangSeleOne" placeholder="English" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <h6 class="mb-1">Currency Settings</h6>
                <p>Provide the currency information below</p>
              </div>
              <div class="border-b border-borderColor mb-3">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Currency</h6>
                      <p class="text-[13px] mb-0">Select currency</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selectedFive" :options="RupeSele" placeholder="USD" />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Currency Symbol</h6>
                      <p class="text-[13px] mb-0">Select currency symbol</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selectedSix" :options="CurrSysel" placeholder="$" />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Currency Position</h6>
                      <p class="text-[13px] mb-0">Select currency position</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selectedSeven" :options="PosiSele" placeholder="$100" />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Decimal Seperator</h6>
                      <p class="text-[13px] mb-0">Select decimal seperator</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selectedEight" :options="SeparSel" placeholder="." />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Thousand Seperator</h6>
                      <p class="text-[13px] mb-0">Select thousand seperator</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selectedNine" :options="ThSepSel" placeholder="." />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <h6 class="mb-1">Country Settings</h6>
                <p class="mb-0">Provide the country information below</p>
              </div>
              <div class="border-b border-borderColor mb-3">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Countries Restriction</h6>
                      <p class="mb-0">Select restricted countries</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <vue3-select v-model="selectedTen" :options="ThSepSelOne" placeholder="Allow All Countries" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <h6 class="mb-1">File Settings</h6>
                <p class="mb-0">Provide the files information below</p>
              </div>
              <div class="border-b border-borderColor mb-3 border-0">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Allowed Files</h6>
                      <p class="text-[13px] mb-0">Select allowed files</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                        <vue3-tags-input
                          class="input-tags form-control"
                          type="text"
                          data-role="tagsinput"
                          name="Label"
                          value="Tag1"
                          :tags="tags"
                        />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                  <div class="md:col-span-8">
                    <div class="mb-3">
                      <h6 class="text-[14px] font-semibold mb-1">Max File Size</h6>
                      <p class="text-[13px] mb-0">Select size of the files</p>
                    </div>
                  </div>
                  <div class="md:col-span-4">
                    <div class="mb-3">
                      <input type="text" class="form-control" value="5000MB">
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-end flex-wrap gap-2">
                <a href="#" class="btn btn-sm btn-light">Cancel</a>
                <button type="submit" class="btn btn-sm btn-primary">Save Changes</button>
              </div>
            </form>
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
import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFourOne: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      selectedEight: null,
      selectedNine: null,
      selectedTen: null,
      ThSepSel: [
        { label: ".", value: "." },
        { label: ",", value: "," },
        { label: "'", value: "'" },
      ],
      SeparSel: [
        { label: ".", value: "." },
        { label: ",", value: "," },
      ],
      PosiSele: [
        { label: "$100", value: "$100" },
        { label: "100$", value: "100$" },
        { label: "$ 100", value: "$ 100" },
        { label: "100 $", value: "100 $" },
      ],
      CurrSysel: [
        { label: "$", value: "$" },
        { label: "₹", value: "₹" },
        { label: "£", value: "£" },
        { label: "€", value: "€" },
      ],
      RupeSele: [
        { label: "USD", value: "USD" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      LangSele: [
        { label: "English", value: "English" },
        { label: "German", value: "German" },
        { label: "Arabic", value: "Arabic" },
        { label: "French", value: "French" },
      ],
      LangSeleOne: [
        { label: "January", value: "January" },
        { label: "February", value: "February" },
        { label: "March", value: "March" },
      ],
      ThSepSelOne: [
        { label: "Allow All Countries", value: "Allow All Countries" },
        { label: "Deny All Countries", value: "Deny All Countries" },
      ],
      Timesele: [
        { label: "12 hrs", value: "12 hrs" },
        { label: "24 hrs", value: "24 hrs" },
      ],
      Datefor: ["2025", "2024", "2023"],
      StarSele: [
        { label: "Monday", value: "Monday" },
        { label: "Tuesday", value: "Tuesday" },
        { label: "Wednesday", value: "Wednesday" },
        { label: "Thursday", value: "Thursday" },
        { label: "Friday", value: "Friday" },
        { label: "Saturday", value: "Saturday" },
        { label: "Sunday", value: "Sunday" },
      ],
      TimeZon: [
        { label: "(+5:30) GMT", value: "(+5:30) GMT" },
        { label: "(GMT -10:00) Hawaii", value: "(GMT -10:00) Hawaii" },
        { label: "(GMT -9:30) Taiohae", value: "(GMT -9:30) Taiohae" },
        { label: "(GMT -9:00) Alaska", value: "(GMT -9:00) Alaska" },
        {
          label: "(GMT -8:00) Pacific Time, Canada",
          value: "(GMT -8:00) Pacific Time, Canada",
        },
      ],
      tags: ["JPG", "PNG", "GIF"],
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
