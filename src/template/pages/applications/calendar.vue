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
            Calendar
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
              <li class="text-dark font-medium" aria-current="page">Calendar</li>
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
          <a href="#"
            class="flex items-center bg-primary text-sm font-medium py-2 rounded text-white px-3 hover:bg-primary-900 hover:text-white"
            data-modal-toggle="add_event" data-modal-target="add_event"><i class="ti ti-circle-plus me-2"></i>Create</a>
        </div>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <!-- Calendar Sidebar -->
        <div class="xxl:col-span-3 xl:col-span-4">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white">
            <div class="card-body p-4">

              <!-- Event -->
              <div class="border-b pb-5 mb-5">
                <div class="flex items-center justify-between mb-2">
                  <h5>Event </h5>
                  <a href="#" class="text-primary" data-modal-toggle="add_event" data-modal-target="add_event"><i
                      class="ti ti-square-rounded-plus-filled fs-16"></i></a>
                </div>
                <p class="fs-12 mb-2">Drag and drop your event or click in the calendar</p>
                <div id='external-events'>
                  <div class="external-event bg-success-transparent rounded p-2 cursor-move mb-1"
                    data-title="Team Events" data-event-classname="badge badge-success-transparent">
                    <i class="ti ti-square-rounded text-success me-2"></i>Team Events
                  </div>
                  <div class="external-event bg-warning-transparent rounded p-2 cursor-move mb-1" data-title="Work"
                    data-event-classname="badge badge-warning-transparent">
                    <i class="ti ti-square-rounded text-warning me-2"></i>Work
                  </div>
                  <div class="external-event bg-danger-transparent rounded p-2 cursor-move mb-1" data-title="External"
                    data-event-classname="badge badge-danger-transparent">
                    <i class="ti ti-square-rounded text-danger me-2"></i>External
                  </div>
                  <div class="external-event bg-info-transparent rounded p-2 cursor-move mb-1" data-title="Projects"
                    data-event-classname="badge badge-info-transparent">
                    <i class="ti ti-square-rounded text-info me-2"></i>Projects
                  </div>
                  <div class="external-event bg-purple-transparent rounded p-2 cursor-move mb-1"
                    data-title="Applications" data-event-classname="badge badge-purple-transparent">
                    <i class="ti ti-square-rounded text-purple me-2"></i>Applications
                  </div>
                  <div class="external-event bg-primary-transparent rounded p-2 cursor-move mb-0" data-title="Design"
                    data-event-classname="badge badge-primary-transparent">
                    <i class="ti ti-square-rounded text-primary me-2"></i>Design
                  </div>
                </div>
              </div>
              <!-- /Event -->

              <!-- Upcoming Event -->
              <div class="border-b pb-2 mb-4">
                <h5 class="mb-5 flex items-center">Upcoming Event<span
                    class="bg-success text-white rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs mx-2 ms-2">15</span>
                </h5>
                <div class="border-s-4 border-purple mb-3">
                  <div class="ps-3">
                    <h6 class="font-medium mb-1">Meeting with Team Dev</h6>
                    <p class="fs-12"><i class="ti ti-calendar-check text-info me-2"></i>15 Mar 2025</p>
                  </div>
                </div>
                <div class="border-s-4 border-pink mb-3">
                  <div class="ps-3">
                    <h6 class="font-medium mb-1">Design System With Client</h6>
                    <p class="fs-12"><i class="ti ti-calendar-check text-info me-2"></i>24 Mar 2025</p>
                  </div>
                </div>
                <div class="border-s-4 border-success mb-3">
                  <div class="ps-3">
                    <h6 class="font-medium mb-1">UI/UX Team Call</h6>
                    <p class="fs-12"><i class="ti ti-calendar-check text-info me-2"></i>28 Mar 2025</p>
                  </div>
                </div>
              </div>
              <!-- /Upcoming Event -->

              <!-- Upgrade Details -->
              <div class="bg-dark rounded text-center relative z-[1] p-4">
                <span class="w-11 h-11 mx-auto rounded-full flex items-center justify-center bg-white mb-2">
                  <i class="ti ti-alert-triangle text-dark"></i>
                </span>
                <h6 class="text-white mb-3">Enjoy Unlimited Access on a small price monthly.</h6>
                <a href="javascript:void(0);" class="btn bg-white text-gray-900">Upgrade Now <i
                    class="ti ti-arrow-right"></i></a>
                <div class="box-bg">
                  <span class="absolute top-0 right-0 z-[-1]"><img src="@/assets/img/bg/email-bg-01.png"
                      alt="Img"></span>
                  <span class="absolute left-0 bottom-0 z-[-1]"><img src="@/assets/img/bg/email-bg-02.png"
                      alt="Img"></span>
                </div>
              </div>
              <!-- /Upgrade Details -->

            </div>
          </div>

        </div>
        <!-- /Calendar Sidebar -->

        <div class="xxl:col-span-9 xl:col-span-8">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white">
            <div class="card-body p-4">
              <FullCalendar ref="calendarEl" :options="calendarOptions" />
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

  <!-- Add New Event -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="add_event">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <h4 class="font-semibold">Add New Event</h4>
          <button type="button"
            class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
            data-modal-hide="add_event"
            @click="hideModal('add_event')">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form>
          <div class="p-4">
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-12">
                <div class="mb-3">
                  <label class="form-label">Event Name</label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="col-span-12">
                <div class="mb-3">
                  <label class="form-label">Event Date</label>
                  <div class="input-group w-auto input-group-flat">
                    <a-date-picker v-model:value="valueOne" class="form-control" placeholder="Due Date"
                      format="DD MMM YYYY" />
                    <span class="input-group-text">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-span-12">
                <div>
                  <label class="form-label">Category Color <span class="text-danger">*</span></label>
                  <vue3-select v-model="selected" :options="Category" placeholder="Select" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-4 border-t border-borderColor">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary" x>Add Event</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add New Event -->

  <!-- Event -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="event_modal">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 bg-dark rounded-t">
          <div class="modal-title text-white"><span id="eventTitle" class="text-lg font-semibold"></span></div>
          <button type="button"
            class="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
            data-modal-hide="event_modal"
            @click="hideModal('event_modal')">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <p class="flex items-center font-medium text-black mb-3"><i
              class="ti ti-calendar-check text-default me-2"></i>26 Jul,2024 to 31 Jul,2024</p>
          <p class="flex items-center font-medium text-black mb-3"><i
              class="ti ti-calendar-check text-default me-2"></i>11:00 AM to 12:15 PM</p>
          <p class="flex items-center font-medium text-black mb-3"><i
              class="ti ti-map-pin-bolt text-default me-2"></i>Las Vegas, US</p>
          <p class="flex items-center font-medium text-black mb-0"><i
              class="ti ti-calendar-check text-default me-2"></i>A recurring or repeating event is simply any event that
            you will occur more than once on your calendar.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- /Event -->
</template>

<script>
import { ref, nextTick } from "vue";
const valueOne = ref();

// ✅ FullCalendar imports
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Draggable } from "@fullcalendar/interaction";
import { initFlowbite } from 'flowbite';
export default {
  name: "CalendarPage",
  components: { FullCalendar },

  data() {
    return {
      valueOne,
      selected: "null",
      Category: [
        { label: "Select", value: "Select" },
        { label: "Green", value: "Green" },
        { label: "Yellow", value: "Yellow" },
        { label: "Red", value: "Red" },
        { label: "Blue", value: "Blue" },
      ],
      calendarEl: ref(null),
      events: [
        {
          title: 'Meeting with Team Dev',
          className: 'badge badge-pink-transparent',
          backgroundColor: '#FFEDF6',
          textColor: "#FD3995",
          start: new Date(Date.now() - 168000000).toISOString().split('T')[0],
          end: new Date(Date.now() - 168000000).toISOString().split('T')[0],
        },
        {
          title: 'UI/UX Team Call',
          className: 'badge badge-secondary-transparent',
          backgroundColor: '#EDF2F4',
          textColor: "#0C4B5E",
          start: new Date(Date.now() + 338000000).toISOString().split('T')[0]
        },
        {
          title: 'Data Update Meeting',
          className: 'badge badge-purple-transparent',
          backgroundColor: '#F7EEF9',
          textColor: "#AB47BC",
          start: new Date(Date.now() - 338000000).toISOString().split('T')[0]
        },
        {
          title: 'Design Review',
          className: 'badge badge-dark-transparent',
          backgroundColor: '#E8E9EA',
          textColor: "#212529",
          start: new Date(Date.now() + 68000000).toISOString().split('T')[0]
        },
        {
          title: 'Design System',
          className: 'badge badge-danger-transparent',
          backgroundColor: '#FAE7E7',
          textColor: "#E70D0D",
          start: new Date(Date.now() + 88000000).toISOString().split('T')[0]
        },
      ],
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        },
        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        weekends: true,
        droppable: true,
        height: 500,
        contentHeight: 580,
        aspectRatio: 3,
        dayMaxEvents: true,
        navLinks: true,
        events: [
          {
            title: 'Meeting with Team Dev',
            className: 'badge badge-pink-transparent',
            backgroundColor: '#FFEDF6',
            textColor: "#FD3995",
            start: new Date(Date.now() - 168000000).toISOString().split('T')[0],
            end: new Date(Date.now() - 168000000).toISOString().split('T')[0],
          },
          {
            title: 'UI/UX Team Call',
            className: 'badge badge-secondary-transparent',
            backgroundColor: '#EDF2F4',
            textColor: "#0C4B5E",
            start: new Date(Date.now() + 338000000).toISOString().split('T')[0]
          },
          {
            title: 'Data Update Meeting',
            className: 'badge badge-purple-transparent',
            backgroundColor: '#F7EEF9',
            textColor: "#AB47BC",
            start: new Date(Date.now() - 338000000).toISOString().split('T')[0]
          },
          {
            title: 'Design Review',
            className: 'badge badge-dark-transparent',
            backgroundColor: '#E8E9EA',
            textColor: "#212529",
            start: new Date(Date.now() + 68000000).toISOString().split('T')[0]
          },
          {
            title: 'Design System',
            className: 'badge badge-danger-transparent',
            backgroundColor: '#FAE7E7',
            textColor: "#E70D0D",
            start: new Date(Date.now() + 88000000).toISOString().split('T')[0]
          },
        ],
        eventClick: (info) => {
          this.onEventClick(info);
          // Populate modal with event details
          const eventTitleElement = document.getElementById('eventTitle');
          if (eventTitleElement) {
            eventTitleElement.innerText = info.event.title;
          }
        },
        drop: (info) => {
          console.log();
        },
        eventReceive: (info) => {
          console.log();
        },
        eventDrop: (info) => this.onEventDrop(info),
      },

      // form data for new event
      newEvent: {
        title: "",
        start: "",
        end: "",
        description: "",
      },
      selectedEvent: { id: "", title: "", start: "", description: "", className: "" },
    };
  },

  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    showModal(id) {
      const el = document.getElementById(id);
      if (!el) return;
      const Bootstrap = window && window.bootstrap ? window.bootstrap : null;
      if (Bootstrap && Bootstrap.Modal) {
        const bs = Bootstrap.Modal.getInstance(el) || new Bootstrap.Modal(el);
        bs.show();
        return;
      }
      el.classList.remove("hidden");
      el.classList.add("flex");
      el.removeAttribute("aria-hidden");
      el.setAttribute("aria-modal", "true");
      el.setAttribute("role", "dialog");
      document.body.classList.add("overflow-hidden");
      if (!document.querySelector(".bg-gray-900\\/50")) {
        const backdrop = document.createElement("div");
        backdrop.className = "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40";
        document.body.appendChild(backdrop);
        // Add click listener to backdrop to close modal and remove overflow-hidden
        backdrop.addEventListener('click', () => {
          this.hideModal(id);
        });
      }
    },
    hideModal(id) {
      const el = document.getElementById(id);
      if (!el) return;
      const Bootstrap = window && window.bootstrap ? window.bootstrap : null;
      if (Bootstrap && Bootstrap.Modal) {
        const bs = Bootstrap.Modal.getInstance(el) || new Bootstrap.Modal(el);
        bs.hide();
        return;
      }
      el.classList.add("hidden");
      el.classList.remove("flex");
      el.setAttribute("aria-hidden", "true");
      el.removeAttribute("aria-modal");
      el.removeAttribute("role");
      document.body.classList.remove("overflow-hidden");
      const backdrop = document.querySelector(".bg-gray-900\\/50");
      if (backdrop) backdrop.remove();
    },
    normalizeDate(value) {
      if (!value) return "";
      if (typeof value === "string") return value;
      try {
        const d = value?.toDate ? value.toDate() : value;
        return new Date(d).toISOString().split("T")[0];
      } catch (e) {
        return "";
      }
    },
    createNewEvent() {
      const today = new Date().toISOString().split("T")[0];
      this.newEvent = { title: "", start: today, end: today, description: "" };
      this.showModal("add_new");
    },
    addEvent() {
      const start = this.normalizeDate(this.newEvent.start);
      const end = this.normalizeDate(this.newEvent.end) || start;
      if (!this.newEvent.title || !start) {
        alert("Please enter at least Title and Start Date.");
        return;
      }
      let badgeClass = "bg-info";
      if (this.newEvent.className?.includes("calendar-event-hiring"))
        badgeClass = "bg-success";
      else if (this.newEvent.className?.includes("calendar-event-office"))
        badgeClass = "bg-secondary";
      else if (this.newEvent.className?.includes("calendar-event-holiday"))
        badgeClass = "bg-pink";
      else if (this.newEvent.className?.includes("calendar-event-employee"))
        badgeClass = "bg-warning";
      const newEvt = {
        id: Date.now().toString(),
        title: this.newEvent.title,
        start,
        end,
        className: `${this.newEvent.className || "calendar-event-meeting"} ${badgeClass}`,
        description: this.newEvent.description || "",
      };
      this.events = [...this.events, newEvt];
      this.newEvent = { title: "", start: "", end: "", description: "" };
      this.hideModal("add_new");
    },
    onEventClick(info) {
      this.selectedEvent = {
        id: info.event.id,
        title: info.event.title,
        start: info.event.startStr,
        description: info.event.extendedProps?.description || "",
        className: (info.event.classNames || []).join(" "),
      };
      this.showModal("event_modal");
    },
    onDateClick(info) {
      this.newEvent = {
        title: "",
        start: info.dateStr,
        end: info.dateStr,
        description: "",
      };
      this.showModal("add_new");
    },
    onDrop(info) {
      // This method is now handled by eventReceive in calendarOptions
      // Keeping for compatibility with existing drag functionality
      console.log();
    },
    onEventDrop(info) {
      const movedId = info.event.id;
      const newStart = info.event.startStr;
      this.events = this.events.map((e) =>
        e.id === movedId ? { ...e, start: newStart } : e
      );
    },
    deleteSelectedEvent() {
      if (!this.selectedEvent?.id) return;
      this.events = this.events.filter((e) => e.id !== this.selectedEvent.id);
      this.hideModal("event_modal");
    },

    handleTabSwitch() {
      document.querySelectorAll('[data-bs-toggle="tab"]').forEach((tab) => {
        tab.addEventListener("shown.bs.tab", () => {
          nextTick(() => {
            if (this.$refs.calendarEl?.getApi()) {
              this.$refs.calendarEl.getApi().updateSize();
            }
          });
        });
      });
    },
  },
  mounted() {
    initFlowbite();
    this.handleTabSwitch();
    const externalEl = document.getElementById("external-events");
    if (externalEl) {
        // eslint-disable-next-line no-new
        // Use the actual external event selector from the template
        new Draggable(externalEl, {
          itemSelector: ".external-event",
          eventData: (eventEl) => {
            const classAttr = eventEl.getAttribute("data-event-classname") || "";
            // split on whitespace to support multiple classes
            const classNames = classAttr.trim() ? classAttr.trim().split(/\s+/) : [];
            return {
              title: eventEl.innerText.trim(),
              classNames,
            };
          }
        });
    }
    // Modal visibility is controlled via showModal/hideModal to keep backdrop logic consistent
  },
};
</script>
