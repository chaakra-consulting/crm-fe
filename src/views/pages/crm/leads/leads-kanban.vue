<template>
  <div class="flex overflow-x-auto items-start">
    <div class="kanban-list-items bg-light me-5 p-4 min-w-[300px] border border-borderColor rounded-[5px] shadow-xs mb-4 w-full" v-for="(module, color) in modules" :key="color">
      <div class="card rounded shadow bg-white">
        <div class="card-body p-3">
          <div class="flex justify-between items-center">
            <div>
              <h6 class="flex items-center mb-1">
                <i class="ti ti-circle-filled fs-10 me-1" :class="module.DotClass"></i>{{ module.Title }}
              </h6>
              <span class="fw-medium">{{ module.Count }}</span>
            </div>
            <div class="flex items-center">
              <a href="javascript:void(0);" class="text-info me-2"><i class="ti ti-plus"></i></a>
              <div class="dropdown relative table-action">
                <a href="javascript:void(0);" class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"><i class="ti ti-dots-vertical"></i></a>
                <div class="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900" href="javascript:void(0);" data-drawer-target="offcanvas_edit" data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit" data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                  <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900" href="javascript:void(0);" data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="kanban-drag-wrap ui-sortable">
        <draggable :list="module.Cards" :group="{ name: 'kanban', pull: true, put: true }" @end="onDragEnd(color)">
          <div v-for="Card in module.Cards" :key="Card.id">
            <div class="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
              <div class="card-body p-4">
                <div class="block">
                  <div class="card-topbar mb-4 pt-1" :class="Card.CardClass"></div>
                  <div class="flex items-center mb-3">
                    <router-link to="/crm/leads-details" class="w-10 h-10 flex items-center justify-center bg-info-100 text-info rounded-full flex-shrink-0 me-2"><span class="avatar-title text-info">{{ Card.Logo }}</span></router-link>
                    <h6 class="font-medium text-[14px] hover:text-primary mb-0"><router-link to="/crm/leads-details">{{ Card.CompanyName }}</router-link></h6>
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
                  <p class="text-default inline-flex items-center mb-0">
                    <i class="ti ti-map-pin-pin text-dark me-1"></i>
                    {{ Card.Location }}
                  </p>
                </div>
                <div class="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                  <span class="w-7 h-7 flex items-center justify-center border border-borderColor rounded-full p-1"><img src="@/assets/img/icons/company-icon-09.svg" alt="Img"></span>
                  <div class="icons-social flex items-center gap-1">
                    <a href="javascript:void(0);" class="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"><i class="ti ti-phone-check"></i></a>
                    <a href="javascript:void(0);" class="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"><i class="ti ti-message-circle-2"></i></a>
                    <a href="javascript:void(0);" class="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"><i class="ti ti-color-swatch"></i></a>
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
      modules: {
        Contacted: {
          DotClass: "text-warning",
          Title: "Contacted",
          Count: "45 Leads - $15,44,540",
          Cards: [
            {
              id: 1,
              CardClass: "bg-secondary",
              Logo: "SM",
              CompanyName: "Schumm",
              Amount: "$03,50,000",
              Email: "darleeo@example.com",
              MobileNo: "+1 12445-47878",
              Location: "Newyork, United States",
              Image: "company-icon-09.svg",
            },
            {
              id: 2,
              CardClass: "bg-success",
              Logo: "CS",
              CompanyName: "Collins",
              Amount: "$02,10,000",
              Email: "robertson@example.com",
              MobileNo: "+1 13987-90231",
              Location: "Austin, United States",
              Image: "company-icon-01.svg",
            },
            {
              id: 3,
              CardClass: "bg-danger",
              Logo: "KI",
              CompanyName: "Konopelski",
              Amount: "$02,18,000",
              Email: "sharon@example.com",
              MobileNo: "+1 17932-04278",
              Location: "Atlanta, United States",
              Image: "company-icon-02.svg",
            },
          ],
        },
        NotContacted: {
          DotClass: "text-purple",
          Title: "Not Contacted",
          Count: "45 Leads - $15,44,540",
          Cards: [
            {
              id: 4,
              CardClass: "bg-purple",
              Logo: "AS",
              CompanyName: "Adams",
              Amount: "$02,45,000",
              Email: "vaughan12@example.com",
              MobileNo: "+1 17392-27846",
              Location: "London, United Kingdom",
              Image: "company-icon-03.svg",
            },
            {
              id: 5,
              CardClass: "bg-warning",
              Logo: "WK",
              CompanyName: "Wizosk",
              Amount: "$01,17,000",
              Email: "caroltho3@example.com",
              MobileNo: "+1 78982-09163",
              Location: "Bristol, United Kingdom",
              Image: "company-icon-04.svg",
            },
            {
              id: 6,
              CardClass: "bg-success",
              Logo: "HR",
              CompanyName: "Heller",
              Amount: "$02,12,000",
              Email: "dawnmercha@example.com",
              MobileNo: "+1 27691-89246",
              Location: "San Francisco, United States",
              Image: "company-icon-05.svg",
            },
          ],
        },
        Closed: {
          DotClass: "text-success",
          Title: "Closed",
          Count: "45 Leads - $15,44,540",
          Cards: [
            {
              id: 7,
              CardClass: "bg-success",
              Logo: "GI",
              CompanyName: "Gutkowsi",
              Amount: "$01,84,043",
              Email: "rachel@example.com",
              MobileNo: "+1 17839-93617",
              Location: "Dallas, United States",
              Image: "company-icon-06.svg",
            },
            {
              id: 8,
              CardClass: "bg-danger",
              Logo: "WR",
              CompanyName: "Walter",
              Amount: "$09,35,189",
              Email: "jonelle@example.com",
              MobileNo: "+1 16739-47193",
              Location: "Leicester, United Kingdom",
              Image: "company-icon-07.svg",
            },
            {
              id: 9,
              CardClass: "bg-purple",
              Logo: "HN",
              CompanyName: "Hansen",
              Amount: "$04,27,940",
              Email: "jonathan@example.com",
              MobileNo: "+1 18390-37153",
              Location: "Norwich, United Kingdom",
              Image: "company-icon-08.svg",
            },
          ],
        },
        Lost: {
          DotClass: "text-danger",
          Title: "Lost",
          Count: "15 Leads - $14,89,543",
          Cards: [
            {
              id: 10,
              CardClass: "bg-danger",
              Logo: "SE",
              CompanyName: "Steve",
              Amount: "$04,17,593",
              Email: "sidney@example.com",
              MobileNo: "+1 11739-38135",
              Location: "Manchester, United Kingdom",
              Image: "company-icon-09.svg",
            },
            {
              id: 11,
              CardClass: "bg-success",
              Logo: "LE",
              CompanyName: "Leuschke",
              Amount: "$08,81,389",
              Email: "brook@example.com",
              MobileNo: "+1 19302-91043",
              Location: "Chicago, United States",
              Image: "company-icon-10.svg",
            },
            {
              id: 12,
              CardClass: "bg-warning",
              Logo: "AY",
              CompanyName: "Anthony",
              Amount: "$09,27,193",
              Email: "mickey@example.com",
              MobileNo: "+1 17280-92016",
              Location: "Derby, United Kingdom",
              Image: "company-icon-01.svg",
            },
          ],
        },
      },
    };
  },
  methods: {
    onDragEnd() {
      // Handle module drops here
    },
    onModuleDragEnd() { },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
