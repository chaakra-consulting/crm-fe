<template>
  <!-- Add Invoices -->
  <div id="offcanvas_add"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Add New Invoice</h5>
      <button type="button" data-drawer-hide="offcanvas_add" aria-controls="offcanvas_add"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
          <div class="md:col-span-12">
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Client</label>
                <a href="#" class="mb-2 text-primary" data-modal-target="add_client" data-modal-toggle="add_client"><i
                    class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <vue3-select v-model="selected" :options="ClientSele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Bill To <span class="text-danger"> *</span></label>
              <input class="form-control" type="text">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Ship To <span class="text-danger"> *</span></label>
              <input class="form-control" type="text">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Project</label>
                <a href="#" class="mb-2 text-primary" data-modal-target="add_client" data-modal-toggle="add_client"><i
                    class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <vue3-select v-model="selectedOne" :options="ProjectSele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Amount <span class="text-danger"> *</span></label>
              <input class="form-control" type="text">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Currency <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedTwo" :options="CurrencySele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueThree" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Open Till <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueFour" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Payment Method </label>
              <vue3-select v-model="selectedThree" :options="PaymentSele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status</label>
              <vue3-select v-model="selectedFour" :options="StatusSele" placeholder="Select" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description </label>
              <div class="editor pages-editor ql-container ql-snow">
                <div ref="editorRef" class="quill-editor"></div>
              </div>
            </div>
          </div>
          <div class="md:col-span-12 mb-4">
            <div class="table-responsive mb-3">
              <table class="table table-borderless table-nowrap">
                <thead class="table-light">
                  <tr>
                    <th class="p-3 text-left">Item</th>
                    <th class="p-3 text-left">Quantity</th>
                    <th class="p-3 text-left">Price</th>
                    <th class="p-3 text-left">Discount</th>
                    <th class="p-3 text-left">Amount</th>
                    <th class="p-3 text-left"></th>
                  </tr>
                </thead>
                <tbody class="invoices-list-two">
                  <tr>
                    <td class="p-3">
                      <div class="input-table input-table-descripition">
                        <input type="text" class="form-control">
                      </div>
                    </td>
                    <td class="p-3">
                      <div>
                        <input type="text" class="form-control">
                      </div>
                    </td>
                    <td class="p-3">
                      <div>
                        <input type="text" class="form-control">
                      </div>
                    </td>
                    <td class="p-3">
                      <div>
                        <vue3-select v-model="selectedFive" :options="InvoiSele" placeholder="Select" />
                      </div>
                    </td>
                    <td class="p-3">
                      <div>
                        <input type="text" class="form-control">
                      </div>
                    </td>
                    <td class="p-3">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a href="#" class="text-primary add-invoices-two mb-3"><i class="ti ti-plus me-1"></i>Add New</a>
          </div>
          <div class="md:col-span-12">
            <div class="card border border-borderColor rounded mb-4">
              <div class="card-body p-4">
                <div class="flex items-center justify-between mb-3">
                  <h6 class="text-[14px] font-semibold mb-0">Subtotal</h6>
                  <h6 class="text-[14px] font-semibold mb-0">$0.00</h6>
                </div>
                <div class="flex items-center justify-between mb-3">
                  <h6 class="text-[14px] font-semibold mb-0">Discount 2%</h6>
                  <h6 class="text-[14px] font-semibold mb-0">$18</h6>
                </div>
                <div class="flex items-center justify-between mb-3">
                  <h6 class="text-[14px] font-semibold mb-0">Extra Discount 0%</h6>
                  <h6 class="text-[14px] font-semibold mb-0">$18</h6>
                </div>
                <div class="flex items-center justify-between mb-3">
                  <h6 class="text-[14px] font-semibold mb-0">Tax</h6>
                  <h6 class="text-[14px] font-semibold mb-0">$18</h6>
                </div>
                <div class="flex items-center justify-between">
                  <h6 class="text-[14px] font-semibold mb-0">Total</h6>
                  <h6 class="text-[14px] font-semibold mb-0">$18</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Notes</label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Terms & Conditions</label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button type="button" data-drawer-hide="offcanvas_add" class="btn btn-light me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Create New</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Add Invoices -->

  <!-- Add Client -->
  <div id="add_client"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_client">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
              <div class="md:col-span-12">
                <label class="form-label">Name</label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_client" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Create New
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Client -->

  <!-- Edit Proposal -->
  <div id="offcanvas_edit"
    class="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1">
    <div class="p-4 border-b border-borderColor">
      <h5 class="inline-flex items-center">Edit Proposal</h5>
      <button type="button" data-drawer-hide="offcanvas_edit" aria-controls="offcanvas_edit"
        class="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"><i
          class="ti ti-x"></i> <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="p-4">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
          <div class="md:col-span-12">
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Client</label>
                <a href="#" class="mb-2 text-primary" data-modal-target="add_client" data-modal-toggle="add_client"><i
                    class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <vue3-select v-model="selectedSix" :options="ClientSeleOne" placeholder="NovaWave LLC" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Bill To <span class="text-danger"> *</span></label>
              <input class="form-control" type="text">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Ship To <span class="text-danger"> *</span></label>
              <input class="form-control" type="text">
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <div class="flex items-center justify-between">
                <label class="form-label">Project</label>
                <a href="#" class="mb-2 text-primary" data-modal-target="add_client" data-modal-toggle="add_client"><i
                    class="ti ti-plus me-1"></i>Add New</a>
              </div>
              <vue3-select v-model="selectedSeven" :options="ProjectSeleOne" placeholder="Truelysell" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Amount <span class="text-danger"> *</span></label>
              <input class="form-control" type="text">
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Currency <span class="text-danger">*</span></label>
              <vue3-select v-model="selectedEight" :options="CurrencySeleOne" placeholder="Dollar" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Date <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueOne" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Open Till <span class="text-danger">*</span></label>
              <div class="input-group w-auto input-group-flat">
                <a-date-picker v-model="valueTwo" class="form-control" placeholder="dd/mm/yyyy" />
                <span class="input-group-text">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Payment Method </label>
              <vue3-select v-model="selectedNine" :options="PaymentSeleOne" placeholder="Credit Card" />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="mb-3">
              <label class="form-label">Status</label>
              <vue3-select v-model="selectedTen" :options="StatusSeleOne" placeholder="Paid" />
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Description </label>
              <div class="editor pages-editor ql-container ql-snow">
                <div ref="editorRefOne" class="quill-editor"></div>
              </div>
            </div>
          </div>
          <div class="md:col-span-12 mb-4">
            <div class="table-responsive mb-3">
              <table class="table table-borderless table-nowrap">
                <thead class="table-light">
                  <tr>
                    <th class="p-3 text-left">Item</th>
                    <th class="p-3 text-left">Quantity</th>
                    <th class="p-3 text-left">Price</th>
                    <th class="p-3 text-left">Discount</th>
                    <th class="p-3 text-left">Amount</th>
                    <th class="p-3 text-left"></th>
                  </tr>
                </thead>
                <tbody class="invoices-list-3">
                  <tr>
                    <td class="p-3">
                      <div class="input-table input-table-descripition">
                        <input type="text" class="form-control">
                      </div>
                    </td>
                    <td class="p-3">
                      <div>
                        <input type="text" class="form-control">
                      </div>
                    </td>
                    <td class="p-3">
                      <div>
                        <input type="text" class="form-control">
                      </div>
                    </td>
                    <td class="p-3">
                      <div>
                        <vue3-select v-model="selectedTenOne" :options="InvoiSeleOne" placeholder="Select" />
                      </div>
                    </td>
                    <td class="p-3">
                      <div>
                        <input type="text" class="form-control">
                      </div>
                    </td>
                    <td class="p-3">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a href="#" class="text-primary add-invoices-3 mb-3"><i class="ti ti-plus me-1"></i>Add New</a>
          </div>
          <div class="md:col-span-12">
            <div class="card border border-borderColor rounded mb-4">
              <div class="card-body p-4">
                <div class="flex items-center justify-between mb-3">
                  <h6 class="text-[14px] font-semibold mb-0">Subtotal</h6>
                  <h6 class="text-[14px] font-semibold mb-0">$0.00</h6>
                </div>
                <div class="flex items-center justify-between mb-3">
                  <h6 class="text-[14px] font-semibold mb-0">Discount 2%</h6>
                  <h6 class="text-[14px] font-semibold mb-0">$18</h6>
                </div>
                <div class="flex items-center justify-between mb-3">
                  <h6 class="text-[14px] font-semibold mb-0">Extra Discount 0%</h6>
                  <h6 class="text-[14px] font-semibold mb-0">$18</h6>
                </div>
                <div class="flex items-center justify-between mb-3">
                  <h6 class="text-[14px] font-semibold mb-0">Tax</h6>
                  <h6 class="text-[14px] font-semibold mb-0">$18</h6>
                </div>
                <div class="flex items-center justify-between">
                  <h6 class="text-[14px] font-semibold mb-0">Total</h6>
                  <h6 class="text-[14px] font-semibold mb-0">$18</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Notes</label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
          <div class="md:col-span-12">
            <div class="mb-3">
              <label class="form-label">Terms & Conditions</label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button type="button" data-drawer-hide="offcanvas_edit" class="btn btn-light me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
  <!-- /Edit Proposal -->

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
          <p class="mb-3">Are you sure you want to remove invoice you selected.</p>
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
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { ref } from "vue";
const valueOne = ref();
const ValueTwo = ref();
const valueThree = ref();
const valueFour = ref();
export default {
  data() {
    return {
      valueOne,
      ValueTwo,
      valueThree,
      valueFour,
      selected: null,
      selectedOne: null,
      selecteTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      selectedEight: null,
      selectedNine: null,
      selectedTen: null,
      selectedTenOne: null,
      CurrencySele: [
        { label: "Select", value: "Select" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      ProjectSele: [
        { label: "Select", value: "Select" },
        { label: "Trulysell", value: "Trulysell" },
        { label: "Dreamschat", value: "Dreamschat" },
        { label: "Servbook", value: "Servbook" },
      ],
      PaymentSele: [
        { label: "Select", value: "Select" },
        { label: "Credit Card", value: "Credit Card" },
        { label: "Paypal", value: "Paypal" },
        { label: "Debit Card", value: "Debit Card" },
      ],
      StatusSele: [
        { label: "Select", value: "Select" },
        { label: "Paid", value: "Paid" },
        { label: "Unpaid", value: "Unpaid" },
        { label: "Partially Paid", value: "Partially Paid" },
      ],
      InvoiSele: [
        { label: "0%", value: "0%" },
        { label: "5%", value: "5%" },
      ],
      ClientSele: [
        { label: "Select", value: "Select" },
        { label: "NovaWave LLC", value: "NovaWave LLC" },
        { label: "BlueSky Indurstries", value: "BlueSky Indurstries" },
        { label: "Asliver Hawkdams", value: "Asliver Hawkdams" },
      ],
      CurrencySeleOne: [
        { label: "Select", value: "Select" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      ProjectSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Trulysell", value: "Trulysell" },
        { label: "Dreamschat", value: "Dreamschat" },
        { label: "Servbook", value: "Servbook" },
      ],
      PaymentSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Credit Card", value: "Credit Card" },
        { label: "Paypal", value: "Paypal" },
        { label: "Debit Card", value: "Debit Card" },
      ],
      StatusSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Paid", value: "Paid" },
        { label: "Unpaid", value: "Unpaid" },
        { label: "Partially Paid", value: "Partially Paid" },
      ],
      InvoiSeleOne: [
        { label: "10%", value: "0%" },
        { label: "15%", value: "5%" },
      ],
      ClientSeleOne: [
        { label: "Select", value: "Select" },
        { label: "NovaWave LLC", value: "NovaWave LLC" },
        { label: "BlueSky Indurstries", value: "BlueSky Indurstries" },
        { label: "Asliver Hawkdams", value: "Asliver Hawkdams" },
      ],
    };
  },
  mounted() {
    this.initQuill();
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
    },
    initQuill() {
      // Check if editorRef exists before initializing Quill
      if (this.$refs.editorRef) {
        const quill = new Quill(this.$refs.editorRef, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          },
        });

        quill.on("text-change", () => {
          this.content = quill.root.innerHTML;
        });
      }

      // Check if editorRefone exists before initializing Quill
      if (this.$refs.editorRefOne) {
        const quillOne = new Quill(this.$refs.editorRefOne, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          },
        });

        quillOne.on("text-change", () => {
          this.content = quillOne.root.innerHTML;
        });
      }
    },
  },
};
</script>
