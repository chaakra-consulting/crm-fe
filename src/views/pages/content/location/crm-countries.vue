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
            Countries
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Countries</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Dropdown -->
          <div>
            <a href="javascript:void(0);"
              class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
              data-dropdown-toggle="export-dropdown">
              <i class="ti ti-package-export me-2"></i>Export<i class="ti ti-chevron-down ml-1"></i>
            </a>
            <ul id="export-dropdown" class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
              <li>
                <a href="javascript:void(0);"
                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                    class="ti ti-file-type-pdf me-1"></i>Export as PDF</a>
              </li>
              <li>
                <a href="javascript:void(0);"
                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                    class="ti ti-file-type-xls me-1"></i>Export as Excel </a>
              </li>
            </ul>
          </div>
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

      <div class="card">
        <div
          class="flex flex-wrap items-center justify-between gap-2 p-4 border-b border-borderColor bg-white rounded-t">

          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
              <i class="ti ti-search"></i>
            </span>
            <input type="text" placeholder="Search" v-model="searchQuery"
              class="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
          </div>

          <!-- Add New Button -->
          <a href="javascript:void(0);"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
            data-modal-target="add_modal" data-modal-toggle="add_modal">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add Country
          </a>
        </div>
        <div class="bg-white p-4">
          <!-- Contact List -->
          <div class="table-responsive custom-table">
            <div id="countrieslist_wrapper" class="dt-container dt-tailwindcss dt-empty-footer">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start "></div>
                <div class="col-start-2 justify-self-end "></div>
              </div>
              <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="col-span-2 table-responsive">
                  <a-table
                    class="table table-nowrap border border-borderColor dataTable min-w-full text-sm align-middle whitespace-nowrap"
                    :columns="columns" :data-source="paginatedData" :row-selection="rowSelection" :pagination="false">
                    <template #bodyCell="{ column, record }">
                      <template v-if="column.key === 'Star'">
                        <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
                      </template>
                      <template v-if="column.key === 'CountryCode'">
                        {{ record.CountryCode }}
                      </template>
                      <template v-if="column.key === 'CountryID'">
                        {{ record.CountryID }}
                      </template>
                      <template v-if="column.key === 'CountryName'">
                        <a href="javascript:void(0);" class="flex items-center">
                          <span class="location-flag-img me-2">
                            <img :src="getImageUrl(record.Image)" class="img-fluid" alt="img">
                          </span>
                          <span>{{ record.CountryName }}</span>
                        </a>
                      </template>
                      <template v-if="column.key === 'action'">
                        <div class="dropdown relative table-action">
                          <a href="javascript:void(0);"
                            class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            @click="toggleDropdown(record.key, $event)"
                            :class="{ 'active': openDropdown === record.key }">
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div
                            class="dropdown-menu absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg"
                            :class="{ 'hidden': openDropdown !== record.key, 'block': openDropdown === record.key }">
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="edit_modal" data-modal-toggle="edit_modal">
                              <i class="ti ti-edit me-1"></i> Edit
                            </a>
                            <a class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              href="javascript:void(0);" data-modal-target="delete_modal"
                              data-modal-toggle="delete_modal">
                              <i class="ti ti-trash me-1"></i> Delete
                            </a>
                          </div>
                        </div>
                      </template>
                    </template>
                  </a-table>
                </div>
              </div>
              <BasePagination :currentPage="currentPage" :pageSize="pageSize" :pageSizeOptions="pageSizeOptions"
              :totalItems="filteredPages.length" @page-change="onPageChange" @page-size-change="onPageSizeChange" />
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start "></div>
                <div class="col-start-2 justify-self-end "></div>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="w-full md:w-1/2">
              <div class="datatable-length"></div>
            </div>
            <div class="w-full md:w-1/2 mt-4 md:mt-0 text-end">
              <div class="datatable-paginate"></div>
            </div>
          </div>
          <!-- /Contact List -->
        </div>
      </div>

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->

  <!-- Add Country -->
  <div id="add_modal" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
			<div class="relative p-4 w-full max-w-[500px] max-h-full">
				<div class="relative bg-white rounded-defaultradius">
					<div class="flex items-center justify-between p-4 border-b border-borderColor">
						<h5 class="font-bold text-[18px]">Add Country</h5>
						<button type="button" class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center" data-modal-hide="add_modal">
							<i class="ti ti-x"></i>
							<span class="sr-only">Close modal</span>
						</button>
					</div>
					<form>
						<div class="p-4">
							<div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
								<div class="md:col-span-12">
									<label class="form-label">Country Code <span class="text-danger">*</span></label>
									<input type="text" class="form-control">
								</div>
								<div class="md:col-span-12">
									<label class="form-label">Country ID <span class="text-danger">*</span></label>
									<input type="text" class="form-control">
								</div>
								<div class="md:col-span-12">
									<label class="form-label">Country Name <span class="text-danger">*</span></label>
									<input type="text" class="form-control">
								</div>
							</div>
						</div>
						<div class="flex items-center justify-end p-4 border-t border-borderColor">
							<button data-modal-hide="add_modal" type="button" class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
							</button>
							<button type="submit" class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
								Create
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Add Country -->

		<!-- Edit Country -->
		<div id="edit_modal" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
			<div class="relative p-4 w-full max-w-[500px] max-h-full">
				<div class="relative bg-white rounded-defaultradius">
					<div class="flex items-center justify-between p-4 border-b border-borderColor">
						<h5 class="font-bold text-[18px]">Edit Country</h5>
						<button type="button" class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center" data-modal-hide="edit_modal">
							<i class="ti ti-x"></i>
							<span class="sr-only">Close modal</span>
						</button>
					</div>
					<form>
						<div class="p-4">
							<div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
								<div class="md:col-span-12">
									<label class="form-label">Country Code <span class="text-danger">*</span></label>
									<input type="text" class="form-control" value="US">
								</div>
								<div class="md:col-span-12">
									<label class="form-label">Country ID <span class="text-danger">*</span></label>
									<input type="text" class="form-control" value="840">
								</div>
								<div class="md:col-span-12">
									<label class="form-label">Country Name <span class="text-danger">*</span></label>
									<input type="text" class="form-control" value="United States">
								</div>
							</div>
						</div>
						<div class="flex items-center justify-end p-4 border-t border-borderColor">
							<button data-modal-hide="edit_modal" type="button" class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
							</button>
							<button type="submit" class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
								Save Changes
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Edit Country -->
  <!-- delete modal -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="delete_modal">
    <div class="relative bg-white rounded-defaultradius p-5">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center">
          <div class="mb-3 relative z-[1]">
            <span
              class="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center"><i
                class="ti ti-trash text-[24px]"></i></span>
          </div>
          <h5 class="mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure you want to remove city you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full" data-modal-hide="delete_modal">Yes,
              Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->
</template>
<script>
const columns = [
  {
    title: "",
    dataIndex: "",
    key: "Star",
    sorter: false,
  },
  {
    title: "Country Code",
    dataIndex: "CountryCode",
    key: "CountryCode",
    sorter: {
      compare: (a, b) =>
        a.CountryCode.toLowerCase() > b.CountryCode.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Country ID",
    dataIndex: "CountryID",
    key: "CountryID",
    sorter: {
      compare: (a, b) => (a.CountryID.toLowerCase() > b.CountryID.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Country Name",
    dataIndex: "CountryName",
    key: "CountryName",
    sorter: {
      compare: (a, b) =>
        a.CountryName.toLowerCase() > b.CountryName.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Action",
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    key: "1",
    Image: "country-01.svg",
    CountryCode: "US",
    CountryID: "840",
    CountryName: "United States",
  },
  {
    key: "2",
    Image: "country-02.svg",
    CountryCode: "CAN",
    CountryID: "124",
    CountryName: "Canada",
  },
  {
    key: "3",
    Image: "country-03.svg",
    CountryCode: "ES",
    CountryID: "34",
    CountryName: "Spain",
  },
  {
    key: "4",
    Image: "country-04.svg",
    CountryCode: "IN",
    CountryID: "356",
    CountryName: "India",
  },
  {
    key: "5",
    Image: "country-05.svg",
    CountryCode: "BR",
    CountryID: "076",
    CountryName: "Brazil",
  },
  {
    key: "6",
    Image: "country-06.svg",
    CountryCode: "DE",
    CountryID: "49",
    CountryName: "Germany",
  },
  {
    key: "7",
    Image: "country-07.svg",
    CountryCode: "MX",
    CountryID: "52",
    CountryName: "Mexico",
  },
  {
    key: "8",
    Image: "country-08.svg",
    CountryCode: "CN",
    CountryID: "156",
    CountryName: "China",
  },
  {
    key: "9",
    Image: "country-09.svg",
    CountryCode: "RU",
    CountryID: "7",
    CountryName: "Russia",
  },
  {
    key: "10",
    Image: "country-10.svg",
    CountryCode: "IT",
    CountryID: "39",
    CountryName: "Italy",
  },
];
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
import BasePagination from '@/components/BasePagination.vue';
import { initFlowbite } from "flowbite";
import { onMounted, onUnmounted, ref } from 'vue';
export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      searchQuery: "",
      data,
      columns,
      rowSelection,
      currentPage: 1,
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 50],
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    onPageChange(page) {
      this.currentPage = page;
    },
    onPageSizeChange(size) {
      this.pageSize = Number(size);
      this.currentPage = 1;
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/country/${imageName}`, import.meta.url).href;
    },
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.CountryCode.toLowerCase().includes(query) ||
          record.CountryID.toLowerCase().includes(query) ||
          record.CountryName.toLowerCase().includes(query)
        );
      });
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.filteredPages.slice(start, start + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.filteredPages.length / this.pageSize) || 1;
    },
  },
  mounted() {
    initFlowbite();
  },
  setup() {
    const openDropdown = ref(null);
    const dropdownRefs = ref([]);

    const toggleDropdown = (index, event) => {
      event.stopPropagation();
      if (openDropdown.value === index) {
        openDropdown.value = null;
      } else {
        openDropdown.value = index;
      }
    };

    const closeAllDropdowns = () => {
      openDropdown.value = null;
    };

    const handleClickOutside = (event) => {
      if (dropdownRefs.value && dropdownRefs.value.some(ref => ref && ref.contains(event.target))) {
        return;
      }
      closeAllDropdowns();
    };

    onMounted(() => {
      initFlowbite();
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      openDropdown,
      dropdownRefs,
      toggleDropdown,
      closeAllDropdowns
    };
  }
};
</script>
