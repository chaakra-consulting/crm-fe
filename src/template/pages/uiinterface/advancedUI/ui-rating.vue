<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
    <div class="content p-5 pb-0">
      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Rating
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
            <li class="text-dark font-medium" aria-current="page">Rating</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6">
        <!-- Basic Rating -->
        <div class="col-span-4 col-xl-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 border-borderColor">
              <div class="card-title">
                Basic Rater
              </div>
            </div>
            <div class="card-body p-4">
              <div class="flex flex-col space-y-4">
                <p class="fs-14 mb-0 fw-semibold">Basic Rating: {{ basicRating }}</p>
                <star-rating 
                  v-model="basicRating"
                  :show-rating="false"
                  :star-size="25"
                  :rounded-corners="true"
                  :increment="1"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Rating with Steps -->
        <div class="col-span-4 col-xl-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 border-borderColor">
              <div class="card-title">
                5 Star Rater with Steps
              </div>
            </div>
            <div class="card-body p-4">
              <div class="flex flex-col space-y-4">
                <p class="fs-14 mb-0 fw-semibold">Current Rating: {{ stepRating }}</p>
                <star-rating 
                  v-model="stepRating"
                  :star-size="25"
                  :increment="0.5"
                  :show-rating="false"
                  @rating-selected="onStepRatingSelected"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Messages -->
        <div class="col-span-4 col-xl-12">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 border-borderColor">
              <div class="card-title">
                Custom Messages
              </div>
            </div>
            <div class="card-body p-4">
              <div class="flex flex-col space-y-4">
                <p class="fs-14 mb-0 fw-semibold">{{ customMessage }}</p>
                <star-rating 
                  v-model="customRating"
                  :star-size="25"
                  :show-rating="false"
                  @hover:rating="onHoverRating"
                  @current-rating="onCurrentRating"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Readonly Rating -->
        <div class="col-span-6 col-xl-6 flex">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 flex-1">
            <div class="card-header border-b p-4 border-borderColor">
              <div class="card-title">
                Readonly Rating
              </div>
            </div>
            <div class="card-body p-4">
              <div class="flex flex-col space-y-4">
                <p class="fs-14 mb-0 fw-semibold">This rating is read-only ({{ readOnlyRating }})</p>
                <star-rating 
                  :increment="0.1"
                  :star-size="25"
                  :read-only="true"
                  :rating="readOnlyRating"
                  :show-rating="true"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Rating with Loading State -->
        <div class="col-span-6 col-xl-6 flex">
          <div class="card flex-1 border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 border-borderColor">
              <div class="card-title">
                Rating with Loading State
              </div>
            </div>
            <div class="card-body p-4">
              <div class="flex flex-col space-y-4">
                <div class="flex items-center space-x-2">
                  <p class="fs-14 mb-0 fw-semibold">Rate this item:</p>
                  <rotate-cw-icon v-if="isLoading" size="16" class="animate-spin"></rotate-cw-icon>
                </div>
                <div id="stars-busytext"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->

  <!-- Start Footer -->
  <layouts-footer></layouts-footer>
  <!-- End Footer -->

</template>

<script>
import StarRating from "vue3-star-ratings";
import { RotateCwIcon } from "vue-feather-icons";

export default {
  components: {
    StarRating,
    RotateCwIcon
  },
  data() {
    return {
      // Basic Rating
      basicRating: 3,
      
      // Step Rating
      stepRating: 2.5,
      
      // Custom Messages
      customRating: 0,
      customMessage: 'Hover or click to rate',
      
      // Readonly Rating
      readOnlyRating: 4.3,
      
      // Loading State
      loadingRating: 0,
      isLoading: false,
      apiResponse: ''
    };
  },
  methods: {
    onStepRatingSelected(rating) {
      console.log('Selected rating:', rating);
    },
    onHoverRating(rating) {
      if (rating === 0) {
        this.customMessage = 'Hover or click to rate';
      } else {
        this.customMessage = `You're hovering at ${rating} stars`;
      }
    },
    onCurrentRating(rating) {
      if (rating > 0) {
        this.customMessage = `You've rated this ${rating} star${rating > 1 ? 's' : ''}!`;
      }
    },
    simulateApiCall(rating) {
      this.isLoading = true;
      this.apiResponse = '';
      
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        this.apiResponse = `Thank you for your ${rating} star rating!`;
      }, 1500);
    }
  }
}
</script>
