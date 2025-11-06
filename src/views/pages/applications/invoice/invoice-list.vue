<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">
    <div class="content p-5">
      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Invoices
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li>
                <a href="javascript:void(0);" class="hover:underline text-gray-700">Applications</a>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Invoices</li>
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

      <!-- start row -->
      <div class="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-6 mb-5">
        <!-- Item 1 -->
        <div class="bg-white rounded border border-borderColor flex flex-col flex-1">
          <div class="p-5 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <div class="flex flex-col items-center">
                <p class="mb-1 d-block">Total Invoice</p>
                <h5 class="text-[16px] mb-0">$3,237.94</h5>
              </div>
            </div>
            <div class="pipeline-progress flex items-center mb-2">
              <div class="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                <div class="h-1 rounded-[50px] w-[100px] bg-pink" role="progressbar"></div>
              </div>
            </div>
            <p class="flex items-center text-truncate mb-0"><span
                class="text-success text-[12px] flex items-center me-1"><i
                  class="ti ti-arrow-wave-right-up me-1"></i>+32.40%</span>from last month</p>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="bg-white rounded border border-borderColor flex flex-col flex-1">
          <div class="p-5 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <div class="flex flex-col items-center">
                <p class="mb-1 d-block">Outstanding</p>
                <h5 class="text-[16px] mb-0">$3,237.94</h5>
              </div>
            </div>
            <div class="pipeline-progress flex items-center mb-2">
              <div class="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                <div class="h-1 rounded-[50px] w-[100px] bg-purple" role="progressbar"></div>
              </div>
            </div>
            <p class="flex items-center text-truncate mb-0"><span
                class="text-success text-[12px] flex items-center me-1"><i
                  class="ti ti-arrow-wave-right-up me-1"></i>+32.40%</span>from last month</p>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="bg-white rounded border border-borderColor flex flex-col flex-1">
          <div class="p-5 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <div class="flex flex-col items-center">
                <p class="mb-1 d-block">Draft</p>
                <h5 class="text-[16px] mb-0">$3,237.94</h5>
              </div>
            </div>
            <div class="pipeline-progress flex items-center mb-2">
              <div class="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                <div class="h-1 rounded-[50px] w-[100px] bg-warning" role="progressbar"></div>
              </div>
            </div>
            <p class="flex items-center text-truncate mb-0"><span
                class="text-success text-[12px] flex items-center me-1"><i
                  class="ti ti-arrow-wave-right-up me-1"></i>+12.40%</span>from last month</p>
          </div>
        </div>

        <!-- Item 4 -->
        <div class="bg-white rounded border border-borderColor flex flex-col flex-1">
          <div class="p-5 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <div class="flex flex-col items-center">
                <p class="mb-1 d-block">Total Overdue</p>
                <h5 class="text-[16px] mb-0">$3,237.94</h5>
              </div>
            </div>
            <div class="pipeline-progress flex items-center mb-2">
              <div class="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                <div class="h-1 rounded-[50px] w-[200px] bg-danger" role="progressbar"></div>
              </div>
            </div>
            <p class="flex items-center text-dangermb-0"><span
                class="text-success text-[12px] flex items-center me-1"><i
                  class="ti ti-arrow-wave-right-up me-1"></i>+12.40%</span>from last month</p>
          </div>
        </div>
      </div>
      <!-- end row -->

      <div class="flex items-center justify-between flex-wrap gap-2 mb-4">
        <h5 class="flex items-center mb-0">Invoices<span
            class="badge bg-gray-100 ms-2 text-dark text-[12px] font-medium">2000 Invoices</span></h5>
        <router-link to="/application/add-invoices" class="btn btn-md btn-primary flex items-center"><i
            class="ti ti-circle-plus me-2"></i>Add Invoices</router-link>
      </div>

      <!-- start table -->
      <a-table
        class="table table w-full border-b border-borderColor table-light"
        :columns="columns"
        :data-source="paginatedData"
        :row-selection="rowSelection"
        :pagination="false"
      >
        <template #bodyCell="{ column, record }">
          <!-- Checkbox column -->
          <template v-if="column.key === 'checkbox'">
            <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0" type="checkbox">
          </template>
          
          <!-- Star column -->
          <template v-else-if="column.key === 'Star'">
            <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
          </template>
          
          <!-- Invoice column -->
          <template v-else-if="column.key === 'Invoice'">
            <router-link to="/application/invoice-details">{{ record.Invoice }}</router-link>
          </template>
          
          <!-- Name column -->
          <template v-else-if="column.key === 'Name'">
            <div class="flex items-center">
              <router-link to="/application/invoice-details"  class="w-10 h-10 mr-2">
                <img :src="getImageUrl(record.Image)" class="rounded-full w-full h-full object-cover" alt="user">
              </router-link>
              <div>
                <h6 class="font-medium mb-0 text-[14px]">
                  <router-link to="/application/invoice-details" class="hover:underline">{{ record.Name }}</router-link>
                </h6>
                <span class="text-[12px] text-gray-500">{{ record.Email }}</span>
              </div>
            </div>
          </template>
          
          <!-- Status column -->
          <template v-else-if="column.key === 'Status'">
            <span 
              :class="{
                'text-xs bg-success-100 text-success rounded border-b border-success px-2 py-0.5 me-2': record.Status === 'Paid',
                'text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5 me-2': record.Status === 'Pending',
                'text-xs bg-danger-100 text-danger rounded border-b border-danger px-2 py-0.5 me-2': record.Status === 'Overdue',
                'text-xs bg-gray-100 text-gray rounded border-b border-gray px-2 py-0.5 me-2': record.Status === 'Draft'
              }"
            >
              {{ record.Status }}
            </span>
          </template>
          
          <!-- Action column -->
          <template v-else-if="column.key === 'action'">
            <div class="flex items-center gap-2">
              <router-link to="/application/invoice-details" class="btn btn-icon btn-sm btn-outline-white border-0"><i class="ti ti-eye"></i></router-link>
              <router-link to="/application/edit-invoices" class="btn btn-icon btn-sm btn-outline-white border-0"><i class="ti ti-edit"></i></router-link>
              <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i class="ti ti-trash"></i></a>
            </div>
          </template>
          
          <!-- Default rendering for other columns -->
          <template v-else>
            {{ record[column.dataIndex] }}
          </template>
        </template>
      </a-table>
      <!-- end table-->
    </div>
    <!-- Start Footer -->
    <layouts-footer />
    <!-- End Footer -->
  </div>
  <!-- /Page Wrapper -->

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
          <p class="mb-3">Are you sure you want to remove contract you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->
</template>

<script>
const data = [
  {
    key: "1",
    Invoice: "INV-1454",
    Image: "user-01.jpg",
    Name: "Anthony Lewis",
    Email: "anthony@example.com",
    Created_On: "14 Jan 2024, 04:27 AM",
    Total: "$300",
    Amount_Due: "$0",
    Due_Date: "14 Jan 2024, 04:27 AM",
    Status: "Paid",
  },
  {
    key: "2",
    Invoice: "INV-6571",
    Image: "user-09.jpg",
    Name: "Brian Villalobos",
    Email: "brian@example.com",
    Created_On: "21 Jan 2024, 03:19 AM",
    Total: "$547",
    Amount_Due: "$200",
    Due_Date: "21 Jan 2024, 03:19 AM",
    Status: "Overdue",
  },
  {
    key: "3",
    Invoice: "INV-2245",
    Image: "user-01.jpg",
    Name: "Harvey Smith",
    Email: "harvey@example.com",
    Created_On: "20 Feb 2024, 12:15 PM",
    Total: "$325",
    Amount_Due: "$65",
    Due_Date: "20 Feb 2024, 12:15 PM",
    Status: "Pending",
  },
  {
    key: "4",
    Invoice: "INV-1456",
    Image: "user-02.jpg",
    Name: "Stephan Peralt",
    Email: "peral@example.com",
    Created_On: "15 Mar 2024, 12:11 AM",
    Total: "$471",
    Amount_Due: "$145",
    Due_Date: "15 Mar 2024, 12:11 AM",
    Status: "Pending",
  },
  {
    key: "5",
    Invoice: "INV-0045",
    Image: "user-03.jpg",
    Name: "Doglas Martini",
    Email: "martniwr@example.com",
    Created_On: "12 Apr 2024, 05:48 PM",
    Total: "$147",
    Amount_Due: "$32",
    Due_Date: "12 Apr 2024, 05:48 PM",
    Status: "Overdue",
  },
  {
    key: "6",
    Invoice: "INV-6244",
    Image: "user-02.jpg",
    Name: "Linda Ray",
    Email: "ray456@example.com",
    Created_On: "20 Apr 2024, 06:11 PM",
    Total: "$654",
    Amount_Due: "$140",
    Due_Date: "20 Apr 2024, 06:11 PM",
    Status: "Draft",
  },
  {
    key: "7",
    Invoice: "INV-9565",
    Image: "user-06.jpg",
    Name: "Elliot Murray",
    Email: "murray@example.com",
    Created_On: "14 Jan 2024, 04:27 AM",
    Total: "$300",
    Amount_Due: "$0",
    Due_Date: "14 Jan 2024, 04:27 AM",
    Status: "Paid",
  },
  {
    key: "8",
    Invoice: "INV-6874",
    Image: "user-07.jpg",
    Name: "Rebecca Smtih",
    Email: "smtih@example.com",
    Created_On: "02 Sep 2024, 09:21 PM",
    Total: "$654",
    Amount_Due: "$65",
    Due_Date: "02 Sep 2024, 09:21 PM",
    Status: "Paid",
  },
  {
    key: "9",
    Invoice: "INV-1454",
    Image: "user-08.jpg",
    Name: "Anthony Lewis",
    Email: "anthony@example.com",
    Created_On: "14 Jan 2024, 04:27 AM",
    Total: "$300",
    Amount_Due: "$0",
    Due_Date: "14 Jan 2024, 04:27 AM",
    Status: "Draft",
  },
  {
    key: "10",
    Invoice: "INV-6587",
    Image: "user-09.jpg",
    Name: "Connie Waters",
    Email: "connie@example.com",
    Created_On: "15 Nov 2024, 12:44 PM",
    Total: "$987",
    Amount_Due: "$47",
    Due_Date: "15 Nov 2024, 12:44 PM",
    Status: "Pending",
  },
  {
    key: "11",
    Invoice: "INV-5879",
    Image: "user-10.jpg",
    Name: "Lori Broaddus",
    Email: "broaddus@example.com",
    Created_On: "10 Dec 2024, 11:23 PM",
    Total: "$365",
    Amount_Due: "$21",
    Due_Date: "10 Dec 2024, 11:23 PM",
    Status: "Overdue",
  },
];

const columns = [
  {
    title: "",
    key: "Star",
    sorter: false,
  },
  {
    title: "Invoice",
    dataIndex: "Invoice",
    key: "Invoice",
    sorter: {
      compare: (a, b) => (a.Invoice.toLowerCase() > b.Invoice.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Created On",
    dataIndex: "Created_On",
    sorter: {
      compare: (a, b) =>
        a.Created_On.toLowerCase() > b.Created_On.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Total",
    dataIndex: "Total",
    sorter: {
      compare: (a, b) => (a.Total.toLowerCase() > b.Total.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Amount Due",
    dataIndex: "Amount_Due",
    sorter: {
      compare: (a, b) =>
        a.Amount_Due.toLowerCase() > b.Amount_Due.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Due Date",
    dataIndex: "Due_Date",
    sorter: {
      compare: (a, b) => (a.Due_Date.toLowerCase() > b.Due_Date.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => (a.Status.toLowerCase() > b.Status.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Action",
    key: "action",
    sorter: false,
  },
];

const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};

import { ref } from "vue";
import BasePagination from '@/components/BasePagination.vue';
import { initFlowbite } from "flowbite";
const currentDate = ref(new Date());
export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      title: "Home",
      text1: "Applications",
      text: "Invoice",
      searchQuery: "",
      data,
      columns,
      rowSelection,
      currentPage: 1,
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 50],
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
    },
    onPageChange(page) {
      this.currentPage = page;
    },
    onPageSizeChange(size) {
      this.pageSize = Number(size);
      this.currentPage = 1;
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.Invoice.toLowerCase().includes(query) ||
          record.Name.toLowerCase().includes(query) ||
          record.Created_On.toLowerCase().includes(query) ||
          record.Total.toLowerCase().includes(query) ||
          record.Amount_Due.toLowerCase().includes(query) ||
          record.Due_Date.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
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
};
</script>
