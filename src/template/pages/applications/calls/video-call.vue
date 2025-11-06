<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">
      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Chat
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
            <li class="text-dark font-medium" aria-current="page">Chat</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-12">

        <!-- Call -->
        <div class="xl:col-span-12 md:col-span-12">
          <div class="single-video  flex">
            <div class="join-video w-full flex-fill">
              <img src="@/assets/img/social/video.jpg" class="w-full h-full img-fluid" alt="video">
              <div class="chat-active-users ">
                <div class="video-avatar">
                  <img src="@/assets/img/social/video.jpg" class="img-fluid" alt="video">
                  <div class="user-name">
                    <span>Joanne Conner</span>
                  </div>
                </div>
              </div>

              <div class="record-item flex items-center">
                <div class="record-time me-2">
                  <span>40:12</span>
                </div>
                <a href="javascript:void(0);"
                  class="video-expand flex items-center justify-center bg-white btnFullscreen avatar-sm rounded hover:bg-primary hover:text-white Z-[9]">
                  <i class="ti ti-maximize"></i>
                </a>
              </div>
              <div class="call-overlay-bottom flex justify-between items-center flex-wrap w-full">
                <a href="javascript:void(0);" class="options-icon flex items-center justify-center guest-off rounded"><i
                    class="ti ti-user-off"></i></a>
                <div class="call-option rounded-full flex justify-center items-center">
                  <a href="javascript:void(0);"
                    class="options-icon bg-light flex justify-center items-center rounded text-dark hover:text-primary me-2"><i
                      class="ti ti-microphone"></i></a>
                  <a href="javascript:void(0);"
                    class="options-icon bg-light flex justify-center items-center rounded text-dark hover:text-primary me-2"><i
                      class="ti ti-video"></i></a>
                  <a href="javascript:void(0);"
                    class="call-icon bg-danger text-white flex justify-center items-center rounded hover:text-dark"><i
                      class="ti ti-phone"></i></a>
                  <a href="javascript:void(0);"
                    class="options-icon bg-light flex justify-center items-center rounded text-dark hover:text-primary mx-2"><i
                      class="ti ti-volume"></i></a>
                  <a href="javascript:void(0);"
                    class="options-icon bg-light flex justify-center items-center rounded text-dark hover:text-primary"><i
                      class="ti ti-device-imac-share"></i></a>
                </div>
                <a href="javascript:void(0);" class="options-icon bg-light flex items-center justify-center rounded"
                  id="show-message"><i class="ti ti-dots"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!-- /Call -->

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
    return {};
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
  },
};
</script>
