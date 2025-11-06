<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Scrollbar
        </h4>
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li>
              <a href="javascript:void(0);" class="hover:underline text-gray-700">Advanced UI</a>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li class="text-dark font-medium" aria-current="page">Scrollbar</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Scroll -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b border-borderColor p-4">
              <h5 class="card-title">Horizontal Scroll</h5>
            </div>
            <div class="card-body p-4">
              <div class="scroll-bar-wrap overflow-auto">
                <div class="horizontal-scroll scroll-demo">
                  <div class="horz-scroll-content" style="width:1500px;">
                    <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6">
                      <div class="col-span-3">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer took a galley
                          of type and scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap into
                          electronic typesetting, remaining essentially unchanged.Lorem
                          Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer took a galley
                          of type and scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap into
                          electronic typesetting, remaining essentially unchanged.</p>
                      </div>
                      <div class="col-span-3">
                        <p>It was popularised in the 1960s with the release of Letraset
                          sheets containing Lorem Ipsum passages, and more recently with
                          desktop publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum passages, and
                          more recently with desktop publishing software like Aldus
                          PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                      <div class="col-span-3">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random
                          text. It has roots in a piece of classical Latin literature from
                          45 BC, making it over 2000 years old. Richard McClintock, a
                          Latin professor at Hampden-Sydney College in Virginia, looked up
                          one of the more obscure Latin words.It was popularised in the
                          1960s with the release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing software
                          like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                      <div class="col-span-3">
                        <p>It is a long established fact that a reader will be distracted by
                          the readable content of a page when looking at its layout. The
                          point of using Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content here,
                          content here', making it look like readable English. Many
                          desktop publishing packages and web page editors.It was
                          popularised in the 1960s with the release of Letraset sheets
                          containing Lorem Ipsum passages, and more recently with desktop
                          publishing software like Aldus PageMaker including versions of
                          Lorem Ipsum.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Scroll -->

        <!-- Scroll -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 border-borderColor">
              <h5 class="card-title">Vertical Scroll</h5>
            </div>
            <div class="card-body p-4">
              <div class="vertical-scroll scroll-demo max-h-[300px] overflow-y-auto">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.</p>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                  in a piece of classical Latin literature from 45 BC, making it over 2000 years
                  old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                  Virginia, looked up one of the more obscure Latin words</p>
                <p>It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using
                  'Content here, content here', making it look like readable English. Many desktop
                  publishing packages and web page editors.</p>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                  officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- /Scroll -->

        <!-- Scroll -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 border-borderColor">
              <h5 class="card-title">Small Size Scroll</h5>
            </div>
            <div class="card-body p-4">
              <div class="scrollbar-margins large-margin scroll-demo max-h-[300px] overflow-y-auto">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.</p>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                  in a piece of classical Latin literature from 45 BC, making it over 2000 years
                  old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                  Virginia, looked up one of the more obscure Latin words</p>
                <p>It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using
                  'Content here, content here', making it look like readable English. Many desktop
                  publishing packages and web page editors.</p>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                  officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- /Scroll -->

        <!-- Scroll -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 border-borderColor">
              <h5 class="card-title">Visible Scroll</h5>
            </div>
            <div class="card-body p-4">
              <div class="scroll-bar-wrap">
                <div class="visible-scroll always-visible scroll-demo max-h-[300px] overflow-auto">
                  <div class="horz-scroll-content" style="width:1500px;">
                    <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6">
                      <div class="col-span-3">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer took a galley
                          of type and scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap into
                          electronic typesetting, remaining essentially unchanged.</p>
                        <p>It was popularised in the 1960s with the release of Letraset
                          sheets containing Lorem Ipsum passages, and more recently with
                          desktop publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum</p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random
                          text. It has roots in a piece of classical Latin literature from
                          45 BC, making it over 2000 years old. Richard McClintock, a
                          Latin professor at Hampden-Sydney College in Virginia, looked up
                          one of the more obscure Latin words</p>
                      </div>
                      <div class="col-span-3">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random
                          text. It has roots in a piece of classical Latin literature from
                          45 BC, making it over 2000 years old. Richard McClintock, a
                          Latin professor at Hampden-Sydney College in Virginia, looked up
                          one of the more obscure Latin words</p>
                        <p>It is a long established fact that a reader will be distracted by
                          the readable content of a page when looking at its layout. The
                          point of using Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content here,
                          content here', making it look like readable English. Many
                          desktop publishing packages and web page editors.</p>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui
                          blanditiis praesentium voluptatum deleniti atque corrupti quos
                          dolores et quas molestias excepturi sint occaecati cupiditate
                          non provident, similique sunt in culpa qui officia deserunt
                          mollitia animi, id est laborum et dolorum fuga.</p>
                      </div>
                      <div class="col-span-3">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer took a galley
                          of type and scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap into
                          electronic typesetting, remaining essentially unchanged.</p>
                        <p>It was popularised in the 1960s with the release of Letraset
                          sheets containing Lorem Ipsum passages, and more recently with
                          desktop publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum</p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random
                          text. It has roots in a piece of classical Latin literature from
                          45 BC, making it over 2000 years old. Richard McClintock, a
                          Latin professor at Hampden-Sydney College in Virginia, looked up
                          one of the more obscure Latin words</p>
                      </div>
                      <div class="col-span-3">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random
                          text. It has roots in a piece of classical Latin literature from
                          45 BC, making it over 2000 years old. Richard McClintock, a
                          Latin professor at Hampden-Sydney College in Virginia, looked up
                          one of the more obscure Latin words</p>
                        <p>It is a long established fact that a reader will be distracted by
                          the readable content of a page when looking at its layout. The
                          point of using Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content here,
                          content here', making it look like readable English. Many
                          desktop publishing packages and web page editors.</p>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui
                          blanditiis praesentium voluptatum deleniti atque corrupti quos
                          dolores et quas molestias excepturi sint occaecati cupiditate
                          non provident, similique sunt in culpa qui officia deserunt
                          mollitia animi, id est laborum et dolorum fuga.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Scroll -->

      </div>

    </div>

    <layouts-footer></layouts-footer>
  </div>

  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Home",
      text: "Scrollbar",
    };
  },
};
</script>
