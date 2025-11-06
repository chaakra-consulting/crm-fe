<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">

      <h4 class="mb-4">Ticket Details</h4>

      <div class="grid grid-cols-12">
        <div class="lg:col-span-10 lg:col-start-2">

          <div class="mb-3">
            <router-link to="/support/tickets" class="inline-flex items-center font-medium text-gray-900 hover:text-primary"><i
                class="ti ti-arrow-left me-1"></i>Back to Tickets</router-link>
          </div>

          <!-- Ticket Details -->
          <div class="card bg-white rounded-defaultradius mb-0">
            <div class="p-4">

              <div class="border border-borderColor br-5 mb-3">
                <div class="p-3 bg-light flex items-center justify-between flex-wrap gap-3">
                  <h6>#TK0020 - <span class="text-body">Support for Theme</span></h6>
                  <div class="dropdown">
                    <a href="javascript:void(0);"
                      class="border border-borderColor btn rounded py-2 px-3 bg-white inline-flex items-center text-gray-500"
                      data-dropdown-toggle="ticket-dropdown">
                      <i class="ti ti-badge me-1"></i>Resolved
                    </a>
                    <ul id="ticket-dropdown"
                      class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg min-w-[170px]">
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Resolved</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Inprogress</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Open</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                          class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500">Closed</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="p-3">
                  <div class="grid grid-cols-1 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3">
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">Created By</h6>
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-xs rounded-full me-1"><img
                            src="@/assets/img/users/user-03.jpg" class="flex-shrink-0 rounded-full" alt="img"></a>
                        <a href="javascript:void(0);" class="text-truncate text-gray-900 hover:text-primary">Michael
                          Dawson</a>
                      </div>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">Priority</h6>
                      <span class="badge bg-danger inline-flex items-center badge-sm">High</span>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">Assigned To</h6>
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-xs rounded-full me-1"><img
                            src="@/assets/img/users/user-07.jpg" class="flex-shrink-0 rounded-full" alt="img"></a>
                        <a href="javascript:void(0);" class="text-truncate text-gray-900 hover:text-primary">Michael
                          Dawson</a>
                      </div>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">Created at</h6>
                      <p class="text-[13px]">20 Jan 2025</p>
                    </div>
                    <div>
                      <h6 class="text-[13px] font-medium mb-1">Last Updated</h6>
                      <p class="text-[13px]">18 Feb 2025</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <h6 class="mb-2">Description</h6>
                <p class="mb-2">After applying the updated CRM theme, I am experiencing significant layout and design
                  problems that affect my workflow. I urgently need assistance to resolve these display issues and
                  compatibility challenges with the existing modules and plugins to ensure smooth operations and a
                  consistent user experience.</p>
                <p class="mb-0">I’ve made several attempts to adjust theme settings and configurations, but the layout
                  issues persist. The theme appears to conflict with essential CRM modules and custom workflows I
                  heavily depend on.</p>
              </div>
              <div class="mb-3">
                <h6 class="mb-2">Attachments</h6>
                <div class="flex items-center gap-3 flex-wrap">
                  <div class="bg-light p-3 flex items-center border border-borderColor">
                    <span class="avatar rounded-md flex items-center justify-center bg-danger me-2">
                      <img src="@/assets/img/icons/pdf-1.svg" alt="img" class="w-auto h-auto">
                    </span>
                    <div class="me-2">
                      <h6 class="text-[14px] font-medium">Report1.pdf</h6>
                      <p class="text-[12px] mb-0">45 KB</p>
                    </div>
                    <a href="javascript:void(0);"
                      class="avatar avatar-sm avatar-rounded download-icon flex items-center justify-center">
                      <i class="ti ti-download fs-16"></i>
                    </a>
                  </div>
                  <div class="bg-light p-3 flex items-center border border-borderColor">
                    <span class="avatar flex items-center justify-center bg-success rounded-md me-2">
                      <img src="@/assets/img/icons/jpg-1.svg" alt="img" class="w-auto h-auto">
                    </span>
                    <div class="me-2">
                      <h6 class="text-[14px] font-medium">Image2.jpg</h6>
                      <p class="text-[12px] mb-0">38 KB</p>
                    </div>
                    <a href="javascript:void(0);"
                      class="avatar avatar-sm avatar-rounded download-icon flex items-center justify-center">
                      <i class="ti ti-download fs-16"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div class="flex items-center">
                  <div>
                    <a href="javascript:void(0);" class="avatar rounded-full me-2 block"><img
                        src="@/assets/img/profiles/avatar-27.jpg" alt="img" class="avatar rounded-full"></a>
                  </div>
                  <div class="flex items-center">
                    <p class="font-medium text-dark mb-0 me-1">Rely To :</p>
                    <a href="javascript:void(0);"
                      class="py-1 px-2 bg-danger-100 text-danger text-[12px] font-medium rounded">Michael Dawson
                      (michael123@example.com) <i class="ti ti-x ms-1"></i></a>
                  </div>
                </div>
              </div>
              <div class="mb-0">
                <h6 class="mb-2">Message</h6>
                <div class="editor pages-editor ql-container ql-snow">
                    <div ref="editorRef" class="quill-editor"></div>
                  </div>
              </div>
            </div>
            <div class="p-4 border-borderColor border-t">
              <div class="flex items-center justify-end">
                <a href="javascript:void(0);" class="btn btn-light me-3">Cancel</a>
                <a href="javascript:void(0);" class="btn btn-primary">Send Reply</a>
              </div>
            </div>
          </div>
          <!-- /Ticket Details -->
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
import Quill from "quill";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    this.initQuill();
  },

  methods: {
    initQuill() {
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
    },
  },
};
</script>
