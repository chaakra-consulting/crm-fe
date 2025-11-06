<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- ============================================================== -->
  <!-- Start Page Content here -->
  <!-- ============================================================== -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Dragula</h4>
        </div>

        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

            <li class="breadcrumb-item">
              <a href="javascript: void(0);">Advanced UI</a>
            </li>

            <li class="breadcrumb-item active">Dragula</li>
          </ol>
        </div>
      </div>

      <!-- start row -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div
              class="card-header border-bottom border-dashed d-flex align-items-center"
            >
              <h4 class="header-title">Simple Drag and Drop Example</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">
                Just specify the data attribute <code>data-plugin='dragula'</code> to have
                drag and drop support in your container.
              </p>

              <draggable class="row" v-model="cards" group="cards" item-key="id">
                <template #item="{ element }">
                  <div class="col-md-4">
                    <div :class="['card', 'mb-3', 'mt-3', element.bg, 'text-white']">
                      <div class="card-body">
                        <blockquote class="card-bodyquote mb-0">
                          <p>{{ element.text }}</p>
                          <footer>
                            Someone famous in
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </template>
              </draggable>

              <!-- end row -->
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <!-- start row -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">Move stuff between containers</h4>
            </div>

            <div class="card-body">
              <p class="text-muted">
                Just specify the data attribute <code>data-plugin='dragula'</code> and
                <code
                  >data-containers='["first-container-id", "second-container-id"]'</code
                >.
              </p>

              <!-- start row -->
              <div
                class="row"
                data-plugin="dragula"
                data-containers='["company-list-left", "company-list-right"]'
              >
                <div class="col-md-6">
                  <div class="bg-light bg-opacity-50 p-2 p-lg-4">
                    <h5 class="mt-0">Part 1</h5>
                    <div id="company-list-left" class="pt-2">
                      <draggable v-model="companyListLeft" group="companyList" item-key="id">
                        <template #item="{ element }">
                          <div class="card mb-0 mt-2">
                            <div class="card-body">
                              <div class="d-flex align-items-start">
                                <img
                                  :src="getImageUrl(element.img)"
                                  alt="image"
                                  class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                                />
                                <div class="w-100 overflow-hidden">
                                  <h5 class="mb-1 mt-0">{{ element.name }}</h5>
                                  <p>{{ element.role }}</p>
                                  <p class="mb-0 text-muted">
                                    <span class="fst-italic">
                                      <b>"</b>{{ element.quote }}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </template>
                      </draggable>
                    </div>
                    <!-- end company-list -->
                  </div>
                  <!-- end div.bg-light -->
                </div>
                <!-- end col -->

                <div class="col-md-6">
                  <div class="bg-light bg-opacity-50 p-2 p-lg-4">
                    <h5 class="mt-0">Part 2</h5>
                    <div id="company-list-right" class="pt-2">
                      <draggable v-model="companyListRight" group="companyList" item-key="id">
                        <template #item="{ element }">
                          <div class="card mb-0 mt-2">
                            <div class="card-body">
                              <div class="d-flex align-items-start">
                                <img
                                  :src="getImageUrl(element.img)"
                                  alt="image"
                                  class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                                />
                                <div class="w-100 overflow-hidden">
                                  <h5 class="mb-1 mt-0">{{ element.name }}</h5>
                                  <p>{{ element.role }}</p>
                                  <p class="mb-0 text-muted">
                                    <span class="fst-italic">
                                      <b>"</b>{{ element.quote }}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </template>
                      </draggable>
                      <!-- end col -->
                    </div>
                    <!-- end company-list -->
                  </div>
                  <!-- end div.bg-light -->
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <!-- start row -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">Move stuff between containers using handle</h4>
            </div>

            <div class="card-body">
              <p class="text-muted">
                Just specify the data attribute <code>data-plugin='dragula'</code>,
                <code
                  >data-containers='["first-container-id", "second-container-id"]'</code
                >
                and <code>data-handle-class='dragula-handle'</code>.
              </p>

              <!-- start row -->
              <div
                class="row"
                data-plugin="dragula"
                data-containers='["handle-dragula-left", "handle-dragula-right"]'
                data-handleClass="dragula-handle"
              >
                <div class="col-md-6">
                  <div class="bg-light bg-opacity-50 p-2 p-lg-4">
                    <h5 class="mt-0">Part 1</h5>
                    <div id="handle-dragula-left" class="pt-2">
                      <draggable v-model="companyRolesLeft" group="companyList" item-key="id">
                        <template #item="{ element }">
                          <div class="card mb-0 mt-2">
                            <div class="card-body">
                              <div class="d-flex align-items-start">
                                <img
                                  :src="getImageUrl(element.img)"
                                  alt="image"
                                  class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                                />
                                <div class="w-100 overflow-hidden">
                                  <h5 class="mb-1">{{ element.name }}</h5>
                                  <p class="mb-0">{{ element.role }}</p>
                                </div>
                                <span class="dragula-handle"></span>
                              </div>
                            </div>
                          </div>
                        </template>
                      </draggable>
                    </div>
                    <!-- end company-list -->
                  </div>
                  <!-- end div -->
                </div>
                <!-- end col -->

                <div class="col-md-6">
                  <div class="bg-light bg-opacity-50 p-2 p-lg-4">
                    <h5 class="mt-0">Part 2</h5>
                    <div id="handle-dragula-right" class="pt-2">

                      <draggable v-model="companyRolesRight" group="companyList" item-key="id">
                        <template #item="{ element }">
                          <div class="card mb-0 mt-2">
                            <div class="card-body">
                              <div class="d-flex align-items-start">
                                <img
                                  :src="getImageUrl(element.img)"
                                  alt="image"
                                  class="me-3 d-none d-sm-block avatar-sm rounded-circle"
                                />
                                <div class="w-100 overflow-hidden">
                                  <h5 class="mb-1">{{ element.name }}</h5>
                                  <p class="mb-0">{{ element.role }}</p>
                                </div>
                                <span class="dragula-handle"></span>
                              </div>
                            </div>
                          </div>
                        </template>
                      </draggable>
                    </div>
                    <!-- end company-list -->
                  </div>
                  <!-- end div -->
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- End Content -->

    <!-- Start Footer -->
    <footer class="footer text-center">
               <p class="mb-0 text-dark">2025 &copy; <a href="javascript:void(0);" class="link-primary">DreamsEMR</a> - All Rights Reserved.</p>
            </footer>
            <!-- End Footer -->
  </div>

  <!-- ============================================================== -->
  <!-- End Page content -->
  <!-- ============================================================== -->
</template>
<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

const cards = ref([
  { id: 1, bg: "bg-primary", text: "Lorem ipsum dolor sit amet." },
  { id: 2, bg: "bg-secondary", text: "Consectetur adipiscing elit." },
  { id: 3, bg: "bg-success", text: "Integer posuere erat a ante." },
  { id: 4, bg: "bg-info", text: "Lorem ipsum again here." },
  { id: 5, bg: "bg-warning", text: "Little warning note here." },
  { id: 6, bg: "bg-danger", text: "Dangerous content." },
]);

const companyListLeft = ref([
  {
    id: 1,
    img: "avatar-01.jpg",
    name: "Louis K. Bond",
    role: "Founder & CEO",
    quote:
      "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
  },
  {
    id: 2,
    img: "avatar-02.jpg",
    name: "Dennis N. Cloutier",
    role: "Software Engineer",
    quote:
      "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
  },
  {
    id: 3,
    img: "avatar-03.jpg",
    name: "Susan J. Sander",
    role: "Web Designer",
    quote:
      "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
  },
]);

const companyListRight = ref([
  {
    id: 1,
    img: "avatar-04.jpg",
    name: "James M. Short",
    role: "Web Developer",
    quote: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh",
  },
  {
    id: 2,
    img: "avatar-05.jpg",
    name: "Gabriel J. Snyder",
    role: "Business Analyst",
    quote: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh",
  },
  {
    id: 3,
    img: "avatar-06.jpg",
    name: "Louie C. Mason",
    role: "Human Resources",
    quote:
      "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
  },
]);

const companyRolesLeft = ref([
  {
    id: 1,
    img: "avatar-07.jpg",
    name: "Louis K. Bond",
    role: "Founder & CEO",
  },
  {
    id: 2,
    img: "avatar-08.jpg",
    name: "Dennis N. Cloutier",
    role: "Software Engineer"
  },
  {
    id: 3,
    img: "avatar-09.jpg",
    name: "Susan J. Sander",
    role: "Web Designer"
  },
]);

const companyRolesRight = ref([
  {
    id: 1,
    img: "avatar-10.jpg",
    name: "James M. Short",
    role: "Web Developer",
  },
  {
    id: 2,
    img: "avatar-05.jpg",
    name: "Gabriel J. Snyder",
    role: "Business Analyst"
  },
  {
    id: 3,
    img: "avatar-03.jpg",
    name: "Louie C. Mason",
    role: "Human Resources"
  },
]);

function getImageUrl(imageName) {
  return new URL(`/src/assets/img/avatars/${imageName}`, import.meta.url).href;
}
</script>
