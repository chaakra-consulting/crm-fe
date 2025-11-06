<template>
  <div class="flex overflow-x-auto items-start">
    <div
      class="kanban-list-items bg-light me-5 p-4 min-w-[300px] border border-borderColor rounded-[5px] shadow-xs mb-4 w-full"
      v-for="(module, color) in modules"
      :key="color"
    >
      <div class="card rounded shadow bg-white">
        <div class="card-body p-3">
          <div class="flex justify-between items-center">
            <div>
              <h6 class="flex items-center mb-1">
                <i class="ti ti-circle-filled text-[10px] me-1" :class="module.DotClass"></i>{{ module.Title }}
              </h6>
              <span>{{ module.Count }}</span>
            </div>
            <div class="dropdown relative table-action">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                @click="toggleDropdown(color, $event)"
                ><i class="ti ti-dots-vertical"></i
              ></a>
              <div
                class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                :class="{ 'hidden': openDropdown !== color, 'block': openDropdown === color }"
                style="top: 100%; right: 0;"
              >
                <a
                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                  href="javascript:void(0);"
                  data-drawer-target="offcanvas_edit"
                  data-drawer-show="offcanvas_edit"
                  aria-controls="offcanvas_edit"
                  data-drawer-placement="right"
                  ><i class="ti ti-edit me-1"></i> Edit</a
                >
                <a
                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                  href="javascript:void(0);"
                  data-modal-target="delete_modal"
                  data-modal-toggle="delete_modal"
                  ><i class="ti ti-trash me-1"></i> Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="kanban-drag-wrap">
        <draggable
          :list="module.Cards"
          :group="{ name: 'kanban', pull: true, put: true }"
          @end="onDragEnd(color)"
        >
          <div v-for="Card in module.Cards" :key="Card.id">
            <div class="card kanban-card border border-borderColor mt-4 shadow bg-white rounded">
              <div class="card-body p-4">
                <div class="block">
                  <div class="flex items-center mb-3">
                    <router-link
                      to="/crm/deals-details"
                      class="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 me-2"
                      :class="Card.CardClass"
                      ><span class="avatar-title" :class="Card.CardClassOne">{{
                        Card.Logo
                      }}</span></router-link
                    >
                    <h6 class="font-medium text-[14px] hover:text-primary mb-0">
                      <router-link to="/crm/deals-details"
                        >{{ Card.CompanyName }} <br />
                        {{ Card.CompanyNameOne }}</router-link
                      >
                    </h6>
                  </div>
                </div>
                <div class="flex flex-col">
                  <p class="text-default inline-flex items-center mb-2">
                    <i class="ti ti-report-money text-dark me-1"></i>
                    {{ Card.Amount }}
                  </p>
                  <p class="text-default inline-flex items-center mb-2">
                    <i class="ti ti-mail text-dark me-1"></i>
                    {{ Card.Email }}
                  </p>
                  <p class="text-default inline-flex items-center mb-2">
                    <i class="ti ti-phone text-dark me-1"></i>
                    {{ Card.MobileNo }}
                  </p>
                  <p class="text-default inline-flex items-center mb-3">
                    <i class="ti ti-map-pin-pin text-dark me-1"></i>
                    {{ Card.Location }}
                  </p>
                </div>
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <a
                      href="javascript:void(0);"
                      class="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                      ><img
                        :src="getImageUrl(Card.Image)"
                        alt="Img"
                        class="rounded-full"
                    /></a>
                    <a href="javascript:void(0);" class="text-dark hover:text-primary"
                      >{{ Card.Name }}</a
                    >
                  </div>
                  <span class="px-1.5 py-0.5 rounded text-[12px] text-white"
                    :class="Card.Status"
                    >{{ Card.Percentage }}</span
                  >
                </div>
                <div
                  class="flex items-center justify-between border-t border-borderColor pt-3 mt-3"
                >
                  <span><i class="ti ti-calendar-due"></i> {{ Card.Date }}</span>
                  <div class="icons-social flex items-center gap-1">
                    <a
                      href="javascript:void(0);"
                      class="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                      ><i class="ti ti-phone-check"></i
                    ></a>
                    <a
                      href="javascript:void(0);"
                      class="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                      ><i class="ti ti-message-circle-2"></i
                    ></a>
                    <a
                      href="javascript:void(0);"
                      class="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                      ><i class="ti ti-color-swatch"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";

export default {
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      openDropdown: null,
      modules: {
        Qualify: {
          DotClass: "text-info",
          Title: "Qualify To Buy",
          Count: "45 Leads - $15,44,540",
          Cards: [
            {
              id: 1,
              CardClass: "bg-success-100 text-success rounded-full",
              CardClassOne: "text-success",
              Logo: "HT",
              CompanyName: "Howell, Tremblay and Rath",
              CompanyNameOne: "and Rath",
              Amount: "$03,50,000",
              Email: "darleeo@example.com",
              MobileNo: "+1 12445-47878",
              Location: "Newyork, United States",
              Image: "avatar-19.jpg",
              Name: "Darlee Robertson",
              Percentage: "85%",
              Status: "bg-success",
              Date: "10 Jan 2024",
            },
            {
              id: 2,
              CardClass: "bg-warning-100 text-warning rounded-full",
              CardClassOne: "text-warning",
              Logo: "RJ",
              CompanyName: "Robert, John",
              CompanyNameOne: "and Carlos",
              Amount: "$02,10,000",
              Email: "sheron@example.com",
              MobileNo: "+1 12445-47878",
              Location: "Exeter, United States",
              Image: "avatar-20.jpg",
              Name: "Darlee Robertson",
              Percentage: "15%",
              Status: "bg-warning",
              Date: "12 Jan 2024",
            },
            {
              id: 3,
              CardClass: "bg-info-100 text-info rounded-full",
              CardClassOne: "text-info",
              Logo: "WS",
              CompanyName: "Wendy, Star",
              CompanyNameOne: "and David",
              Amount: "$04,22,000",
              Email: "vau@example.com",
              MobileNo: "+1 12445-47878",
              Location: "Phoenix, United States",
              Image: "avatar-21.jpg",
              Name: "Darlee Robertson",
              Percentage: "95%",
              Status: "bg-info",
              Date: "14 Jan 2024",
            },
          ],
        },
        Contact: {
          DotClass: "text-info",
          Title: "Contact Made",
          Count: "30 Leads - $19,94,938",
          Cards: [
            {
              id: 4,
              CardClass: "bg-danger-100 text-danger rounded-full",
              CardClassOne: "text-danger",
              Logo: "BR",
              CompanyName: "Byron, Roman",
              CompanyNameOne: "and Bailey",
              Amount: "$02,45,000",
              Email: "jessica13@example.com",
              MobileNo: "+1 89351-90346",
              Location: "Chester, United States",
              Image: "avatar-01.jpg",
              Name: "Jessica",
              Percentage: "47%",
              Status: "bg-danger",
              Date: "06 Feb 2024",
            },
            {
              id: 5,
              CardClass: "bg-success-100 text-success rounded-full",
              CardClassOne: "text-success",
              Logo: "CH",
              CompanyName: "Robert, John",
              CompanyNameOne: "and Carlos",
              Amount: "$01,17,000",
              Email: "caroltho3@example.com",
              MobileNo: "+1 78982-09163",
              Location: "Charlotte, United States",
              Image: "avatar-16.jpg",
              Name: "Carol Thomas",
              Percentage: "98%",
              Status: "bg-success",
              Date: "15 Feb 2024",
            },
            {
              id: 6,
              CardClass: "bg-danger-100 text-danger rounded-full",
              CardClassOne: "text-danger",
              Logo: "IC",
              CompanyName: "Irene, Charles",
              CompanyNameOne: "and Wilston",
              Amount: "$02,12,000",
              Email: "dawnmercha@example.com",
              MobileNo: "+1 27691-89246",
              Location: "Bristol, United States",
              Image: "avatar-22.jpg",
              Name: "Dawn Mercha",
              Percentage: "95%",
              Status: "bg-danger",
              Date: "25 Jan 2024",
            },
          ],
        },
        Presentation: {
          DotClass: "text-info",
          Title: "Presentation",
          Count: "25 Leads - $10,36.390",
          Cards: [
            {
              id: 7,
              CardClass: "bg-info-100 text-info rounded-full",
              CardClassOne: "text-info",
              Logo: "HT",
              CompanyName: "Jody, Powell",
              CompanyNameOne: "and Cecil",
              Amount: "$01,84,043",
              Email: "rachel@example.com",
              MobileNo: "+1 17839-93617",
              Location: "Baltimore, United States",
              Image: "avatar-23.jpg",
              Name: "Rachel Hampton",
              Percentage: "25%",
              Status: "bg-info",
              Date: "18 Mar 2024",
            },
            {
              id: 8,
              CardClass: "bg-danger-100 text-danger rounded-full",
              CardClassOne: "text-danger",
              Logo: "BL",
              CompanyName: "Bonnie, Linda",
              CompanyNameOne: "and Mullin",
              Amount: "$09,35,189",
              Email: "jonelle@example.com",
              MobileNo: "+1 16739-47193",
              Location: "Coventry, United States",
              Image: "avatar-24.jpg",
              Name: "Jonelle Curtiss",
              Percentage: "70%",
              Status: "bg-danger",
              Date: "15 Feb 2024",
            },
            {
              id: 9,
              CardClass: "bg-success-100 text-success rounded-full",
              CardClassOne: "text-success",
              Logo: "CJ",
              CompanyName: "Carlos, Jones",
              CompanyNameOne: "and Jim",
              Amount: "$04,27,940",
              Email: "jonathan@example.com",
              MobileNo: "+1 18390-37153",
              Location: "Seattle",
              Image: "avatar-25.jpg",
              Name: "Jonathan",
              Percentage: "45%",
              Status: "bg-success",
              Date: "30 Jan 2024",
            },
          ],
        },
        Proposal: {
          DotClass: "text-info",
          Title: "Proposal Made",
          Count: "50 Leads - $18,83,013",
          Cards: [
            {
              id: 10,
              CardClass: "bg-info-100 text-info rounded-full",
              CardClassOne: "text-info",
              Logo: "FJ",
              CompanyName: "Freda,Jennfier",
              CompanyNameOne: "and Thompson",
              Amount: "$04,17,593",
              Email: "sidney@example.com",
              MobileNo: "+1 11739-38135",
              Location: "London, United States",
              Image: "avatar-17.jpg",
              Name: "Sidney Franks",
              Percentage: "59%",
              Status: "bg-info",
              Date: "11 Apr 2024",
            },
            {
              id: 11,
              CardClass: "bg-danger-100 text-danger rounded-full",
              CardClassOne: "text-danger",
              Logo: "BF",
              CompanyName: "Bruce, Faulkner",
              CompanyNameOne: "and Lela",
              Amount: "$08,81,389",
              Email: "brook@example.com",
              MobileNo: "+1 19302-91043",
              Location: "Detroit, United States",
              Image: "avatar-26.jpg",
              Name: "Brook",
              Percentage: "72%",
              Status: "bg-danger",
              Date: "17 Apr 2024",
            },
            {
              id: 12,
              CardClass: "bg-danger-100 text-danger rounded-full",
              CardClassOne: "text-danger",
              Logo: "LP",
              CompanyName: "Lawrence, Patrick",
              CompanyNameOne: "and Vandorn",
              Amount: "$09,27,193",
              Email: "mickey@example.com",
              MobileNo: "+1 17280-92016",
              Location: "Manchester, United States",
              Image: "avatar-15.jpg",
              Name: "Mickey",
              Percentage: "20%",
              Status: "bg-danger",
              Date: "10 Feb 2024",
            },
          ],
        },
        Appointment: {
          DotClass: "text-info",
          Title: "Appointment",
          Count: "50 Leads - $18,83,013",
          Cards: [
            {
              id: 13,
              CardClass: "bg-danger-100 text-danger rounded-full",
              CardClassOne: "text-danger",
              Logo: "HT",
              CompanyName: "Howell, Tremblay and Rath",
              CompanyNameOne: "and Rath",
              Amount: "$03,50,000",
              Email: "darleeo@example.com",
              MobileNo: "+1 12445-47878",
              Location: "Newyork, United States",
              Image: "avatar-19.jpg",
              Name: "Darlee Robertson",
              Percentage: "59%",
              Status: "bg-danger",
              Date: "10 Jan 2024",
            },
            {
              id: 14,
              CardClass: "bg-danger-100 text-danger rounded-full",
              CardClassOne: "text-danger",
              Logo: "BF",
              CompanyName: "Bruce, Faulkner",
              CompanyNameOne: "and Lela",
              Amount: "$08,81,389",
              Email: "brook@example.com",
              MobileNo: "+1 19302-91043",
              Location: "Detroit, United States",
              Image: "avatar-26.jpg",
              Name: "Brook",
              Percentage: "72%",
              Status: "bg-danger",
              Date: "17 Apr 2024",
            },
            {
              id: 15,
              CardClass: "bg-info-100 text-info rounded-full",
              CardClassOne: "text-info",
              Logo: "LP",
              CompanyName: "Lawrence, Patrick",
              CompanyNameOne: "and Vandorn",
              Amount: "$09,27,193",
              Email: "mickey@example.com",
              MobileNo: "+1 17280-92016",
              Location: "Manchester, United States",
              Image: "avatar-15.jpg",
              Name: "Mickey",
              Percentage: "20%",
              Status: "bg-info",
              Date: "10 Feb 2024",
            },
          ],
        },
      },
    };
  },
  methods: {
    toggleDropdown(columnName, event) {
      event.stopPropagation();
      this.openDropdown = this.openDropdown === columnName ? null : columnName;
    },
    onDragEnd(columnName) {
      console.log(`Card moved in column: ${columnName}`);
      // Here you could implement logic to save the new order to a backend
      // or update the component state as needed
    },
    onModuleDragEnd() {
      console.log('Module drag ended');
      // Handle any module-level drag operations if needed
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
    },
    handleClickOutside(event) {
      if (!event.target.closest('.dropdown')) {
        this.openDropdown = null;
      }
    },
  },
  mounted() {
    // Close dropdown when clicking outside
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>
