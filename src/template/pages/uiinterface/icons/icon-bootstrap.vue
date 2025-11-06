<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Bootstrap Icons
        </h4>
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li>
              <a href="javascript:void(0);" class="hover:underline text-gray-700">Icons</a>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li class="text-dark font-medium" aria-current="page">Bootstrap Icons</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div>

        <div>
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <div class="card-title">Bootstrap Icons</div>
            </div>
            <div class="card-body p-5">
              <p class="mb-2"><code class="text-pink text-sm">&lt;i class="bi bi-ICON_NAME"&gt;&lt;/i&gt;</code>. For
                more information <a href="https://icons.getbootstrap.com/" target="_blank" class="text-primary">click
                  here</a>.</p>
              <div class="icons-items">
                <div class="icons-list flex flex-wrap">

                  <div class="icons-list-item">
                    <i class="bi bi-house" data-tooltip-target="bi-house" data-tooltip-placement="top"></i>
                    <div id="bi-house" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-house
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-speedometer2" data-tooltip-target="bi-speedometer2"
                      data-tooltip-placement="top"></i>
                    <div id="bi-speedometer2" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-speedometer2
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-map" data-tooltip-target="bi-map" data-tooltip-placement="top"></i>
                    <div id="bi-map" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-map
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-chat-left-text" data-tooltip-target="bi-chat-left-text"
                      data-tooltip-placement="top"></i>
                    <div id="bi-chat-left-text" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-chat-left-text
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-people" data-tooltip-target="bi-people" data-tooltip-placement="top"></i>
                    <div id="bi-people" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-people
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-card-image" data-tooltip-target="bi-card-image" data-tooltip-placement="top"></i>
                    <div id="bi-card-image" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-card-image
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-file-earmark-text" data-tooltip-target="bi-file-earmark-text"
                      data-tooltip-placement="top"></i>
                    <div id="bi-file-earmark-text" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-file-earmark-text
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-bar-chart" data-tooltip-target="bi-bar-chart" data-tooltip-placement="top"></i>
                    <div id="bi-bar-chart" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-bar-chart
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-arrow-clockwise" data-tooltip-target="bi-arrow-clockwise"
                      data-tooltip-placement="top"></i>
                    <div id="bi-arrow-clockwise" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-arrow-clockwise
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-list" data-tooltip-target="bi-list" data-tooltip-placement="top"></i>
                    <div id="bi-list" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-list
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-gear" data-tooltip-target="bi-gear" data-tooltip-placement="top"></i>
                    <div id="bi-gear" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-gear
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-building" data-tooltip-target="bi-building" data-tooltip-placement="top"></i>
                    <div id="bi-building" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-building
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-basket" data-tooltip-target="bi-basket" data-tooltip-placement="top"></i>
                    <div id="bi-basket" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-basket
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-camera-reels" data-tooltip-target="bi-camera-reels"
                      data-tooltip-placement="top"></i>
                    <div id="bi-camera-reels" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-camera-reels
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-bell" data-tooltip-target="bi-bell" data-tooltip-placement="top"></i>
                    <div id="bi-bell" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-bell
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-envelope" data-tooltip-target="bi-envelope" data-tooltip-placement="top"></i>
                    <div id="bi-envelope" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-envelope
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-pin-angle" data-tooltip-target="bi-pin-angle" data-tooltip-placement="top"></i>
                    <div id="bi-pin-angle" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-pin-angle
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-pie-chart" data-tooltip-target="bi-pie-chart" data-tooltip-placement="top"></i>
                    <div id="bi-pie-chart" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-pie-chart
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-check2-square" data-tooltip-target="bi-check2-square"
                      data-tooltip-placement="top"></i>
                    <div id="bi-check2-square" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-check2-square
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-check2-all" data-tooltip-target="bi-check2-all" data-tooltip-placement="top"></i>
                    <div id="bi-check2-all" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-check2-all
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-archive" data-tooltip-target="bi-archive" data-tooltip-placement="top"></i>
                    <div id="bi-archive" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-archive
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-arrow-down-square" data-tooltip-target="bi-arrow-down-square"
                      data-tooltip-placement="top"></i>
                    <div id="bi-arrow-down-square" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-arrow-down-square
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-arrow-down-up" data-tooltip-target="bi-arrow-down-up"
                      data-tooltip-placement="top"></i>
                    <div id="bi-arrow-down-up" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-arrow-down-up
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-cloud-arrow-down" data-tooltip-target="bi-cloud-arrow-down"
                      data-tooltip-placement="top"></i>
                    <div id="bi-cloud-arrow-down" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-cloud-arrow-down
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-database" data-tooltip-target="bi-database" data-tooltip-placement="top"></i>
                    <div id="bi-database" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-database
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-laptop" data-tooltip-target="bi-laptop" data-tooltip-placement="top"></i>
                    <div id="bi-laptop" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-laptop
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-exclamation-circle" data-tooltip-target="bi-exclamation-circle"
                      data-tooltip-placement="top"></i>
                    <div id="bi-exclamation-circle" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-three-dots-vertical" data-tooltip-target="bi-three-dots-vertical"
                      data-tooltip-placement="top"></i>
                    <div id="bi-three-dots-vertical" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-three-dots-vertical
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-download" data-tooltip-target="bi-download" data-tooltip-placement="top"></i>
                    <div id="bi-download" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-download
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-trash3" data-tooltip-target="bi-trash3" data-tooltip-placement="top"></i>
                    <div id="bi-trash3" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-trash3
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-folder2-open" data-tooltip-target="bi-folder2-open"
                      data-tooltip-placement="top"></i>
                    <div id="bi-folder2-open" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-folder2-open
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-calendar" data-tooltip-target="bi-calendar" data-tooltip-placement="top"></i>
                    <div id="bi-calendar" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-calendar
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-star" data-tooltip-target="bi-star" data-tooltip-placement="top"></i>
                    <div id="bi-star" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-star
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-clock" data-tooltip-target="bi-clock" data-tooltip-placement="top"></i>
                    <div id="bi-clock" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-clock
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-telephone" data-tooltip-target="bi-telephone" data-tooltip-placement="top"></i>
                    <div id="bi-telephone" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-telephone
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div class="icons-list-item">
                    <i class="bi bi-camera-video" data-tooltip-target="bi-camera-video"
                      data-tooltip-placement="top"></i>
                    <div id="bi-camera-video" role="tooltip"
                      class="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                      bi bi-camera-video
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                </div>
              </div>
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
</template>
<script>
export default {
  data() {
    return {
      title: "Home",
      text: "Pricing",
    };
  },
};
</script>
