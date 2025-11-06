<template>
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
          <p class="mb-3">Are you sure you want to remove ticket you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" data-modal-hide="delete_modal" class="btn btn-primary z-1 w-full">Yes, Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->

  <!-- Add New Ticket -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="add_ticket">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Add New Ticket</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_ticket">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="mb-3">
              <label class="form-label">Subject <span class="text-danger">*</span></label>
              <input type="text" class="form-control">
            </div>
            <!-- start row -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-6">
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Created Date <span class="text-danger">*</span></label>
                  <div class="relative">
                    <input type="text"
                      class="form-control block flex-1 border border-borderColor bg-white rounded-[5px] py-1.5 pr-2.5 !pl-8 text-gray-900 focus:ring-0 focus:border-borderColor h-[38px] placeholder:text-gray-400 text-sm date-range bookingrange"
                      ref="dateRangeInputThree"
                      placeholder="dd/mm/yyyy - dd/mm/yyyy">
                    <span class="absolute inset-y-1/2 start-[10px] flex items-center me-2.5 pointer-events-none">
                      <i class="ti ti-calendar-due text-dark text-[14px] me-1"></i>
                    </span>
                  </div>
                </div>
              </div><!-- end col -->
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Due Date <span class="text-danger">*</span></label>
                  <div class="relative">
                    <input type="text"
                      class="form-control block flex-1 border border-borderColor bg-white rounded-[5px] py-1.5 pr-2.5 !pl-8 text-gray-900 focus:ring-0 focus:border-borderColor h-[38px] placeholder:text-gray-400 text-sm date-range bookingrange"
                      ref="dateRangeInput1"
                      placeholder="dd/mm/yyyy - dd/mm/yyyy">
                    <span class="absolute inset-y-1/2 start-[10px] flex items-center me-2.5 pointer-events-none">
                      <i class="ti ti-calendar-due text-dark text-[14px] me-1"></i>
                    </span>
                  </div>
                </div>
              </div><!-- end col -->
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Assigned Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control">
                </div>
              </div><!-- end col -->
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Assignee Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control">
                </div>
              </div><!-- end col -->
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Priority <span class="text-danger">*</span></label>
                  <vue3-select
                    v-model="selected"
                    :options="PriorSel"
                    placeholder="Select"
                  />
                </div>
              </div><!-- end col -->
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Status <span class="text-danger">*</span></label>
                  <vue3-select
                    v-model="selectedOne"
                    :options="PriorSta"
                    placeholder="Select"
                  />
                </div>
              </div><!-- end col -->
            </div>
            <!-- end row -->
            <div class="mb-0">
              <label class="form-label">Textarea</label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="add_ticket" type="button"
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
  <!-- End Add New Ticket -->

  <!-- Edit Ticket -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="edit_ticket">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 class="font-bold text-[18px]">Edit Ticket</h5>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="edit_ticket">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="mb-3">
              <label class="form-label">Subject <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="Support for Theme">
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-6">
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Created Date <span class="text-danger">*</span></label>
                  <div class="relative">
                    <input type="text"
                      class="form-control block flex-1 border border-borderColor bg-white rounded-[5px] py-1.5 pr-2.5 !pl-8 text-gray-900 focus:ring-0 focus:border-borderColor h-[38px] placeholder:text-gray-400 text-sm date-range bookingrange"
                      ref="dateRangeInput"
                      placeholder="dd/mm/yyyy - dd/mm/yyyy">
                    <span class="absolute inset-y-1/2 start-[10px] flex items-center me-2.5 pointer-events-none">
                      <i class="ti ti-calendar-due text-dark text-[14px] me-1"></i>
                    </span>
                  </div>
                </div>
              </div><!-- end col -->
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Due Date <span class="text-danger">*</span></label>
                  <div class="relative">
                    <input type="text"
                      class="form-control block flex-1 border border-borderColor bg-white rounded-[5px] py-1.5 pr-2.5 !pl-8 text-gray-900 focus:ring-0 focus:border-borderColor h-[38px] placeholder:text-gray-400 text-sm date-range bookingrange"
                      ref="dateRangeInput2"
                      placeholder="dd/mm/yyyy - dd/mm/yyyy">
                    <span class="absolute inset-y-1/2 start-[10px] flex items-center me-2.5 pointer-events-none">
                      <i class="ti ti-calendar-due text-dark text-[14px] me-1"></i>
                    </span>
                  </div>
                </div>
              </div><!-- end col -->
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Assigned Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" value="Robert Johnson">
                </div>
              </div><!-- end col -->
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Assignee Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" value="Elizabeth Morgan">
                </div>
              </div><!-- end col -->
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Priority <span class="text-danger">*</span></label>
                  <vue3-select
                    v-model="selectedTwo"
                    :options="PriorSelOne"
                    placeholder="Medium"
                  />
                </div>
              </div><!-- end col -->
              <div class="lg:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Status <span class="text-danger">*</span></label>
                  <vue3-select
                    v-model="selectedThree"
                    :options="PriorStaOne"
                    placeholder="Resloved"
                  />
                </div>
              </div><!-- end col -->
            </div>
            <!-- end row -->
            <div class="mb-0">
              <label class="form-label">Textarea</label>
              <textarea class="form-control"
                rows="3">Encountering layout issues with the updated CRM theme; request support for resolving display and compatibility problems with my setup.</textarea>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button data-modal-hide="edit_ticket" type="button"
              class="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2">Cancel
            </button>
            <button type="submit"
              class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Ticket -->
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      PriorSta: [
        { label: "Select", value: "Select" },
        { label: "Resolved", value: "Resolved" },
        { label: "Open", value: "Open" },
        { label: "Pending", value: "Pending" },
        { label: "Closed", value: "Closed" },
      ],
      PriorSel: [
        { label: "Select", value: "Select" },
        { label: "Low", value: "Low" },
        { label: "Medium", value: "Medium" },
        { label: "High", value: "High" },
      ],
      PriorStaOne: [
        { label: "Select", value: "Select" },
        { label: "Resolved", value: "Resolved" },
        { label: "Open", value: "Open" },
        { label: "Pending", value: "Pending" },
        { label: "Closed", value: "Closed" },
      ],
      PriorSelOne: [
        { label: "Select", value: "Select" },
        { label: "Low", value: "Low" },
        { label: "Medium", value: "Medium" },
        { label: "High", value: "High" },
      ],
    };
  },
  setup() {
    const dateRangeInputThree = ref(null);
    const dateRangeInput1 = ref(null);
    const dateRangeInput = ref(null);
    const dateRangeInput2 = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInputThree.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInputThree.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
      if (dateRangeInput1.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput1.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
      if (dateRangeInput2.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput2.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInputThree,
      dateRangeInput1,
      dateRangeInput2,
      dateRangeInput,
    };
  },
};
</script>
