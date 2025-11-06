<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[252px]">
    <div class="content p-5">
      <h6 class="font-bold mb-4 flex items-center"><router-link to="/application/invoice-list"><i
            class="ti ti-chevron-left me-1 fs-14"></i>Invoices</router-link></h6>
      <div class="card rounded-0 mb-0 bg-white border border-borderColor rounded">
        <div class="card-header p-4 border-b border-borderColor">
          <h6 class="fw-bold m-0"> Edit Invoice </h6>
        </div> <!-- end card-header -->

        <form>
          <div class="card-body p-5">

            <!-- start grid -->
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                <div>
                  <label class="form-label">Patient Name <span class="text-danger">*</span></label>
                  <input type="search" class="form-control border-0" value="Bernardo James">
                </div>
              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                <div>
                  <label class="form-label">Email <span class="text-danger">*</span></label>
                  <input type="search" class="form-control border-0" value="bernando@example.com">
                </div>
              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                <div>
                  <label class="form-label">Customer <span class="text-danger">*</span></label>
                  <vue3-select v-model="selected" :options="Customer" placeholder="Anthony Lewis"></vue3-select>
                </div>
              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                <div>
                  <label class="form-label">Tax <span class="text-danger">*</span></label>
                  <vue3-select v-model="selectedOne" :options="Tax" placeholder="GST"></vue3-select>
                </div>
              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                <label class="form-label">Invoice Date<span class="text-danger ms-1">*</span></label>
                <div class="input-group w-auto input-group-flat">
                  <a-date-picker v-model:value="valueOne"
                    class="form-control"
                    value="23 May, 2025"
                    format="DD MMM YYYY"
                  />
                  <span class="input-group-text">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                <label class="form-label">Due Date<span class="text-danger ms-1">*</span></label>
                <div class="input-group w-auto input-group-flat">
                  <a-date-picker v-model:value="valueTwo"
                    class="form-control"
                    value="25 May, 2025"
                    format="DD MMM YYYY"
                  />
                  <span class="input-group-text">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                <label class="form-label">Patient Address<span class="text-danger ms-1">*</span></label>
                <textarea class="form-control" rows="4">5754 Airport Rd, Coosada, AL, 36020</textarea>
              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                <label class="form-label">Billing Address <span class="text-danger ms-1">*</span></label>
                <textarea class="form-control" rows="4">5754 Airport Rd, Coosada, AL, 36020</textarea>
              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                <div>
                  <label class="form-label">Payment Method <span class="text-danger">*</span></label>
                  <vue3-select v-model="selectedTwo" :options="PaymentMethod" placeholder="Paypal"></vue3-select>
                </div>
              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                <div>
                  <label class="form-label">Payment Status <span class="text-danger">*</span></label>
                  <vue3-select v-model="selectedThree" :options="PaymentStatus" placeholder="Inprogress"></vue3-select>
                </div>
              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
                <div class="table-responsive">
                  <table class="table table w-full border-b border-borderColor">
                    <thead class="bg-white">
                      <tr>
                        <th
                          class="text-[13px] bg-white leading-normal px-5 py-2.5 text-gray-900 border-b border-borderColor font-medium text-start">
                          Item</th>
                        <th
                          class="text-[13px] bg-white leading-normal px-5 py-2.5 text-gray-900 border-b border-borderColor font-medium text-start">
                          Description</th>
                        <th
                          class="text-[13px] bg-white leading-normal px-5 py-2.5 text-gray-900 border-b border-borderColor font-medium text-start">
                          Unit Cost</th>
                        <th
                          class="text-[13px] bg-white leading-normal px-5 py-2.5 text-gray-900 border-b border-borderColor font-medium text-start">
                          Qty</th>
                        <th
                          class="text-[13px] bg-white leading-normal px-5 py-2.5 text-gray-900 border-b border-borderColor font-medium text-start">
                          Amount</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody class="invoices-list bg-white">
                      <tr class="invoices-list-item" v-for="(invoice, index) in invoices"
                      :key="index">
                        <td class="px-3 py-4"><input type="text" class="form-control" v-model="invoice.item"></td>
                        <td class="px-3 py-4"><input type="text" class="form-control" v-model="invoice.description"></td>
                        <td class="px-3 py-4"><input type="number" class="form-control" v-model="invoice.unitCost"></td>
                        <td class="px-3 py-4"><input type="number" class="form-control" v-model="invoice.qty"></td>
                        <td class="px-3 py-4"><input type="text" class="form-control" readonly v-model="invoice.Amount"></td>
                        <td class="px-2 py-4"><button
                            class="btn remove-invoices btn-sm border border-borderColor py-2.5 px-3 flex items-center justify-center rounded text-[14px]" @click="removeInvoice(index)"><i
                              class="ti ti-trash"></i></button></td>
                      </tr>
                      <tr>
                        <td class="py-5 px-3">
                          <a href="javascript:void(0);" class="font-medium add-invoices text-dark flex items-center text-[14px] pl-0" @click="addInvoice">
                            <i class="ti ti-circle-plus text-primary me-1"></i> Add Invoice
                          </a>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-8 xl:col-span-8"></div>
              <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <h6 class="text-[14px] font-normal text-dark">Amount</h6>
                    <h6 class="text-[14px] font-semibold text-dark">$0</h6>
                  </div>
                  <div class="flex items-center justify-between mb-4">
                    <h6 class="text-[14px] font-normal text-dark">Tax (0%)</h6>
                    <h6 class="text-[14px] font-semibold text-dark">$0</h6>
                  </div>
                  <div class="flex items-center justify-between mb-4">
                    <h6 class="text-[14px] font-normal text-dark">Discount</h6>
                    <div>
                      <vue3-select v-model="selectedFour" :options="Discount" placeholder="0%"></vue3-select>
                    </div>
                  </div>
                  <div class="flex items-center justify-between mb-4 pb-4 border-b border-borderColor">
                    <div>
                      <label class="flex gap-2 items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer">
                        <span
                          class="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></span>
                        <span class="text-[14px] font-normal text-dark">Round Off Total</span>
                      </label>
                    </div>
                    <h6 class="text-[14px] font-semibold text-dark">$0</h6>
                  </div>
                  <div class="flex items-center justify-between mb-2">
                    <h6 class="text-[18px] font-bold">Total (USD)</h6>
                    <h6 class="text-[18px] font-bold">$0</h6>
                  </div>
                </div>
              </div>
              <div class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
                <div>
                  <label class="form-label">Other Information<span class="text-danger">*</span></label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
            </div>
          </div> <!-- end card-body -->
          <div class="card-footer p-5 text-end border-t border-borderColor">
            <div class="flex gap-2 items-center justify-end mb-0">
              <button type="button" class="btn btn-light">Cancel</button>
              <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
          </div> <!-- end card footer -->
        </form>
      </div> <!-- end card -->

    </div>
    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      valueOne,
      valueTwo,
      Customer: [
        { label: "Select", value: "Select" },
        { label: "Anthony Lewis", value: "Anthony Lewis" },
        { label: "Brian Villalobos", value: "Brian Villalobos" },
        { label: "Harvey Smith", value: "Harvey Smith" },
        { label: "Stephan Peralt", value: "Stephan Peralt" },
      ],
      Tax: [
        { label: "Select", value: "Select" },
        { label: "GST", value: "GST" },
        { label: "VAT", value: "VAT" },
        { label: "Professional", value: "Professional" },
        { label: "Income", value: "Income" },
      ],
      PaymentMethod: [
        { label: "Select", value: "Select" },
        { label: "Paypal", value: "Paypal" },
        { label: "Options Enhanced", value: "Options Enhanced" },
        { label: "Cheque", value: "Cheque" },
      ],
      PaymentStatus: [
        { label: "Select", value: "Select" },
        { label: "Inprogress", value: "Inprogress" },
        { label: "Completed", value: "Completed" },
        { label: "Pending", value: "Pending" },
      ],
      Discount: [
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
