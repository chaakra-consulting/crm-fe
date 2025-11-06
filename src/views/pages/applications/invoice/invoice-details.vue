<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">
    <div class="content p-5">
      <div class="w-full mx-auto lg:w-10/12">
        <h6 class="font-bold text-[14px] mb-4 flex items-center"><router-link to="/application/invoice-list"><i
              class="ti ti-arrow-left me-1"></i>Invoices</router-link></h6>
      </div>
      <div class="w-full mx-auto bg-white shadow rounded-lg p-6 lg:w-10/12">
        <!-- Header -->
        <div class="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
          <img src="@/assets/img/logo.svg" class="block invoice-logo" width="200" alt="Logo Light">
          <img src="@/assets/img/logo-white.svg" class="hidden invoice-logo-dark" width="200" alt="Logo Dark">
          <span
            class="bg-info-100 text-info rounded text-[12px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs mx-2">#PRE0025</span>
        </div>

        <!-- Start Invoice Details Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-borderColor pb-4 mb-4">
          <div>
            <h5 class="text-base font-bold mb-2">Invoice Details</h5>
            <p class="text-sm text-gray-500 mb-1">Invoice Number: <span class="text-dark">INV0025</span></p>
            <p class="text-sm text-gray-500 mb-1">Issued On: <span class="text-dark">25 Jan 2025</span></p>
            <p class="text-sm text-gray-500 mb-1">Due Date: <span class="text-dark">31 Jan 2025</span></p>
            <p class="text-sm text-gray-500">Recurring Invoice: <span class="text-dark">Monthly</span></p>
          </div>
          <div>
            <h5 class="text-base font-bold mb-2">Invoice From</h5>
            <p class="text-dark font-medium mb-1">Andrew Fletcher</p>
            <p class="text-sm text-gray-500">5754 Airport Rd Coosada, AL, 36020</p>
            <p class="text-sm text-gray-500">United States</p>
          </div>
          <div class="text-left md:text-right">
            <h5 class="text-base font-bold mb-2">Invoice To</h5>
            <p class="text-dark font-medium mb-1">Andrew Fletcher</p>
            <p class="text-sm text-gray-500">299 Star Trek Drive, Florida, 3240,</p>
            <p class="text-sm text-gray-500">United States</p>
          </div>
        </div>

        <!-- Product Table -->
        <div class="mb-4">
          <h6 class="text-base font-bold mb-4">Products/Service Items</h6>
          <div class="table-responsive">
            <table class="table table w-full border-b border-borderColor">
              <thead class="table-light">
                <tr>
                  <th
                    class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                    #</th>
                  <th
                    class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                    Product/Item</th>
                  <th
                    class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                    Description</th>
                  <th
                    class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                    Unit Cost</th>
                  <th
                    class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                    Quantity</th>
                  <th
                    class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                    Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-5 py-2.5 text-gray-500">1</td>
                  <td class="px-5 py-2.5 text-gray-500">Full body checkup</td>
                  <td class="px-5 py-2.5 text-gray-500">Complete health screening covering all major systems</td>
                  <td class="px-5 py-2.5 text-gray-500">$400</td>
                  <td class="px-5 py-2.5 text-gray-500">1</td>
                  <td class="px-5 py-2.5 text-gray-500">$400</td>
                </tr>
                <tr>
                  <td class="px-5 py-2.5 text-gray-500">2</td>
                  <td class="px-5 py-2.5 text-gray-500">Blood Test</td>
                  <td class="px-5 py-2.5 text-gray-500">Routine blood analysis to assess overall health status</td>
                  <td class="px-5 py-2.5 text-gray-500">$250</td>
                  <td class="px-5 py-2.5 text-gray-500">1</td>
                  <td class="px-5 py-2.5 text-gray-500">$250</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- Summary & Bank Details -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-borderColor pb-4 mb-4">
          <div>
            <h6 class="text-base font-bold mb-2">Bank Details</h6>
            <p class="text-sm text-gray-500 mb-1">Bank Name: <span class="text-dark">ABC Bank</span></p>
            <p class="text-sm text-gray-500 mb-1">Account Number: <span class="text-dark">782459739212</span></p>
            <p class="text-sm text-gray-500 mb-1">IFSC Code: <span class="text-dark">ABC0001345</span></p>
            <p class="text-sm text-gray-500">Payment Reference: <span class="text-dark">INV-20250220-001</span></p>
          </div>
          <div>
            <div class="flex justify-between font-medium text-sm text-gray-500 mb-2">
              <span>Amount</span>
              <span class="font-semibold text-dark">$1,793.12</span>
            </div>
            <div class="flex justify-between font-medium text-sm text-gray-500 mb-2">
              <span>CGST (9%)</span>
              <span class="font-semibold text-dark">$18</span>
            </div>
            <div class="flex justify-between font-medium text-sm text-gray-500 mb-2">
              <span>SGST (9%)</span>
              <span class="font-semibold text-dark">$18</span>
            </div>
            <div class="flex justify-between font-medium text-sm text-gray-500 border-b border-borderColor pb-4 mb-4">
              <span>Discount</span>
              <span class="font-semibold text-red-600">$18</span>
            </div>
            <div class="flex justify-between font-medium text-base font-bold mb-2">
              <h6 class="text-[18px]">Total (USD)</h6>
              <h6 class="text-[18px]">$1,972.43</h6>
            </div>
            <div>
              <p class="text-sm text-gray-500 mb-1">Total in words</p>
              <p class="font-semibold text-dark">Dollar Six Hundred Fifty</p>
            </div>
          </div>
        </div>
        <!-- Notes and Signature -->
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-borderColor pb-4 mb-4">
          <div>
            <h6 class="text-sm font-semibold mb-1">Terms and Conditions</h6>
            <p class="text-sm text-gray-500 mb-3">The Payment must be returned in the same condition.</p>
            <h6 class="text-sm font-semibold mb-1">Notes</h6>
            <p class="text-sm text-gray-500">All charges are final and include applicable taxes, fees, and additional
              costs.</p>
          </div>
          <div class="text-center">
            <img src="@/assets/img/icons/signature-img.svg" alt="Signature" class="w-32 mx-auto mb-2">
            <h6 class="text-sm font-semibold">Ted M. Davis</h6>
            <p class="text-xs text-gray-500">Manager</p>
          </div>
        </div>
        <div class="flex justify-center gap-4">
          <a href="#" class="flex items-center gap-2 px-4 py-2 bg-dark text-white rounded text-sm font-medium">
            <i class="ti ti-printer"></i> Print
          </a>
          <a href="#" class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded text-sm font-medium">
            <i class="ti ti-download"></i> Download
          </a>
        </div>
      </div>
    </div>
    <!-- Start Footer -->
    <layouts-footer />
    <!-- End Footer -->
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import { ref } from "vue";
const valueOne = ref();
const ValueTwo = ref();
export default {
  data() {
    return {
      selected: null,
      valueOne,
      ValueTwo,
      DisCo: [
        { label: "0%", value: "0%" },
        { label: "1%", value: "1%" },
        { label: "2%", value: "2%" },
        { label: "3%", value: "3%" },
        { label: "4%", value: "4%" },
      ],
      invoices: [
        {
          item: "",
          description: "",
          unitCost: "",
          qty: "",
          Amount: "",
        },
      ],
    };
  },
  methods: {
    addInvoice() {
      this.invoices.push({
        item: "",
        description: "",
        unitCost: "",
        qty: "",
        Amount: "",
      });
    },
    removeInvoice(index) {
      this.invoices.splice(index, 1);
    },
  },
};
</script>
