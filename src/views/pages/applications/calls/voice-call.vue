<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Audio Call
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
            <li class="text-dark font-medium" aria-current="page">Audio Call</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-12">

        <!-- Call -->
        <div class="xl:col-span-12 md:col-span-12">
          <div
            class="card border-borderColor rounded-[5px] shadow-xs flex flex-col justify-between relative h-[calc(100vh-174px)] overflow-y-auto bg-white mb-0">
            <div class="card-header py-4 px-5 border-borderColor border-b">
              <div class="flex items-center justify-between flex-wrap gap-3">
                <div class="flex items-center">
                  <span class="me-2">
                    <img src="@/assets/img/users/user-01.jpg" class="avatar-lg rounded-full" alt="img">
                  </span>
                  <div>
                    <h5 class="mb-1"><a class="hover:text-primary" href="#">Anthony Lewis</a></h5>
                    <span class="block">Online</span>
                  </div>
                </div>
                <a href="#" class="avatar-md rounded-full flex items-center justify-center bg-gray-200 text-dark">
                  <i class="ti ti-user-plus text-[20px]"></i>
                </a>
              </div>
            </div>
            <div class="card-body p-5 relative items-center flex flex-col justify-center">
              <div class="voice-call-img mb-3">
                <img src="@/assets/img/users/user-01.jpg" class="w-[100px] h-[100px] rounded-full animate-ripple"
                  alt="img">
              </div>
              <h4 class="display-4">Anthony Lewis</h4>
              <p>00:24</p>
              <a href="#" class="  absolute end-0 bottom-0 m-3"><img src="@/assets/img/users/user-05.jpg"
                  class="avatar-xl rounded" alt="Img"></a>
            </div>
            <div class="card-footer border-t border-borderColor py-4 px-5">
              <div class="flex items-center justify-center">
                <a href="#"
                  class="btn btn-light w-[40px] h-[40px] p-0 flex items-center justify-center rounded-full me-3 hover:btn-gray"><i
                    class="ti ti-video text-[20px]"></i></a>
                <a href="#"
                  class="btn btn-danger w-[40px] h-[40px] p-0 flex items-center justify-center rounded-full me-3 hover:btn-danger-400"><i
                    class="ti ti-phone text-[20px]"></i></a>
                <a href="#"
                  class="btn btn-light w-[40px] h-[40px] p-0 flex items-center justify-center rounded-full hover:btn-gray"><i
                    class="ti ti-microphone text-[20px]"></i></a>
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
