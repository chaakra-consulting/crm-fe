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
            Notifications
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Notifications</li>
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
        </div>
      </div>
      <!-- End Page Header -->

      <!-- card start -->
      <div class="card border border-borderColor rounded bg-white mb-0">

        <div class="card-header border-b border-borderColor p-4 flex items-center flex-wrap gap-2 justify-between">
          <h6 class="d-inline-flex align-items-center mb-0">Total Notifications <span
              class="badge bg-danger ms-2">658</span></h6>
          <div class="flex items-center gap-2 flex-wrap">
            <a href="javascript:void(0);:void(0);" class="btn btn-light"><i class="ti ti-checks me-1"></i>Mark all as read</a>
            <a href="javascript:void(0);:void(0);" class="btn btn-danger"><i class="ti ti-trash me-1"></i>Delete All</a>
          </div>
        </div>

        <div class="card-body p-4">

          <div class="card notication-card border border-borderColor rounded bg-white mb-4">
            <div class="card-body p-4">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center">
                  <a href="javascript:void(0);" class="avatar flex-shrink-0">
                    <img src="@/assets/img/users/user-07.jpg" alt="img" class="rounded-full">
                  </a>
                  <div class="ms-2">
                    <div>
                      <p class="mb-1"><a href="javascript:void(0);" class="fw-medium">Daniel Martinz</a> requested
                        Sick Leave from <span class="text-dark fw-medium">May 28 2025</span> to <span
                          class="text-dark fw-medium"> May 29 2025</span></p>
                      <p class="fs-12 mb-0 d-inline-flex align-items-center"><i class="ti ti-clock me-1"></i> 4 min
                        ago<span class="ms-2"><i class="ti ti-point-filled text-danger fs-16 lh-sm"></i></span></p>
                    </div>
                  </div>
                </div>
                <div class="noti-btn">
                  <a href="javascript:void(0);:void(0);" class="btn btn-danger d-inline-flex align-items-center"><i
                      class="ti ti-trash me-1"></i>Delete</a>
                </div>
              </div>
            </div>
          </div>

          <div class="card notication-card border border-borderColor rounded bg-white mb-4">
            <div class="card-body p-4">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center">
                  <a href="javascript:void(0);" class="avatar flex-shrink-0">
                    <img src="@/assets/img/users/user-02.jpg" alt="img" class="rounded-full">
                  </a>
                  <div class="ms-2">
                    <div>
                      <p class="mb-1">Leave for <a href="javascript:void(0);" class="fw-medium">Emily Clark</a> <span
                          class="text-dark fw-medium">(May 26 2025)</span> has been approved.</p>
                      <p class="fs-12 mb-0 d-inline-flex align-items-center"><i class="ti ti-clock me-1"></i> 15 min
                        ago<span class="ms-2"><i class="ti ti-point-filled text-danger fs-16 lh-sm"></i></span></p>
                    </div>
                  </div>
                </div>
                <div class="noti-btn">
                  <a href="javascript:void(0);:void(0);" class="btn btn-danger d-inline-flex align-items-center"><i
                      class="ti ti-trash me-1"></i>Delete</a>
                </div>
              </div>
            </div>
          </div>

          <div class="card notication-card border border-borderColor rounded bg-white mb-4">
            <div class="card-body p-4">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center">
                  <a href="javascript:void(0);" class="avatar flex-shrink-0">
                    <img src="@/assets/img/users/user-04.jpg" alt="img" class="rounded-full">
                  </a>
                  <div class="ms-2">
                    <div>
                      <p class="mb-1">Leave request from <a href="javascript:void(0);" class="fw-medium">David
                          Anderson</a> <span class="text-dark fw-medium">(May 30 2025)</span> has been rejected.</p>
                      <p class="fs-12 mb-0 d-inline-flex align-items-center"><i class="ti ti-clock me-1"></i> 45 Min
                        Ago<span class="ms-2"><i class="ti ti-point-filled text-danger fs-16 lh-sm"></i></span></p>
                    </div>
                  </div>
                </div>
                <div class="noti-btn">
                  <a href="javascript:void(0);:void(0);" class="btn btn-danger d-inline-flex align-items-center"><i
                      class="ti ti-trash me-1"></i>Delete</a>
                </div>
              </div>
            </div>
          </div>

          <div class="card notication-card border border-borderColor rounded bg-white">
            <div class="card-body p-4">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center">
                  <a href="javascript:void(0);" class="avatar flex-shrink-0">
                    <img src="@/assets/img/users/user-24.jpg" alt="img" class="rounded-full">
                  </a>
                  <div class="ms-2">
                    <div>
                      <p class="mb-1"><a href="javascript:void(0);" class="fw-medium">Ann McClure</a> cancelled her
                        appointment scheduled for <span class="text-dark fw-medium">February 5, 2024</span></p>
                      <p class="fs-12 mb-0 d-inline-flex align-items-center"><i class="ti ti-clock me-1"></i> 58 Min
                        Ago<span class="ms-2"><i class="ti ti-point-filled text-danger fs-16 lh-sm"></i></span></p>
                    </div>
                  </div>
                </div>
                <div class="noti-btn">
                  <a href="javascript:void(0);:void(0);" class="btn btn-danger d-inline-flex align-items-center"><i
                      class="ti ti-trash me-1"></i>Delete</a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <!-- card start -->

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
  },
};
</script>
