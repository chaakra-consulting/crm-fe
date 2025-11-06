<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Lightbox
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
            <li class="text-dark font-medium" aria-current="page">Lightbox</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 gap-x-6">

        <div>
          <!-- Single Image Lightbox -->
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h5>Single Image Lightbox</h5>
            </div>
            <div class="card-body p-5">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div class="md:col-span-4">
                  <a href="javascript:;" class="image-popup" @click="show(0)">
                    <img :src="getImageUrl('img-01.jpg')" class="img-fluid" alt="image">
                  </a>
                </div>
                <div class="md:col-span-4">
                  <a href="javascript:;" class="image-popup" @click="show(1)">
                    <img :src="getImageUrl('img-02.jpg')" class="img-fluid" alt="image">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- /Single Image Lightbox -->

          <!-- Image with Description Lightbox -->
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h5>Image with Description</h5>
            </div>
            <div class="card-body p-5">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div class="md:col-span-4">
                  <a href="javascript:;" class="image-popup-desc" 
                     data-title="Title 01"
                     data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                     @click="show(2)">
                    <img :src="getImageUrl('img-03.jpg')" class="img-fluid" alt="work-thumbnail">
                  </a>
                </div>
                <div class="md:col-span-4">
                  <a href="javascript:;" class="image-popup-desc" 
                     data-title="Title 02"
                     data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                     @click="show(3)">
                    <img :src="getImageUrl('img-04.jpg')" class="img-fluid" alt="work-thumbnail">
                  </a>
                </div>
                <div class="md:col-span-4">
                  <a href="javascript:;" class="image-popup-desc" 
                     data-title="Title 03"
                     data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                     @click="show(4)">
                    <img :src="getImageUrl('img-05.jpg')" class="img-fluid" alt="work-thumbnail">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- /Image with Description Lightbox -->

          <!-- Vue Easy Lightbox Component -->
          <vue-easy-lightbox
            :visible="visible"
            :index="index"
            :imgs="galleryImages.map((image) => getImageUrl(image.src))"
            @hide="visible = false"
          />
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
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      visible: false,
      index: 0,
      galleryImages: [
        { src: "img-01.jpg" },
        { src: "img-02.jpg" },
        { src: "img-03.jpg" },
        { src: "img-04.jpg" },
        { src: "img-05.jpg" }
      ],
    };
  },
  methods: {
    show(imageIndex) {
      this.index = imageIndex;
      this.visible = true;
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/media/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
