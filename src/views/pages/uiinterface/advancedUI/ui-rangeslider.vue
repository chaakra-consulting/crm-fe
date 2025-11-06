<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Range Slider
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
            <li class="text-dark font-medium" aria-current="page">Range Slider</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">

        <!-- Rangeslider -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4">
              <h5 class="card-title">Default</h5>
            </div>
            <div class="card-body p-4">
              <Slider v-model="value1" />
            </div>
          </div>
        </div>
        <!-- /Rangeslider -->

        <!-- Rangeslider -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4">
              <h5 class="card-title">Min-Max</h5>
            </div>
            <div class="card-body p-4">
              <Slider v-model="value2" />
            </div>
          </div>
        </div>
        <!-- /Rangeslider -->

        <!-- Rangeslider -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4">
              <h5 class="card-title">Prefix</h5>
            </div>
            <div class="card-body p-4">
              <Slider v-model="value1" :format="format" />
            </div>
          </div>
        </div>
        <!-- /Rangeslider -->

        <!-- Rangeslider -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4">
              <h5 class="card-title">Range</h5>
            </div>
            <div class="card-body p-4">
              <Slider v-model="value3" />
            </div>
          </div>
        </div>
        <!-- /Rangeslider -->

        <!-- Rangeslider -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4">
              <h5 class="card-title">Step</h5>
            </div>
            <div class="card-body p-4">
              <Slider v-model="value4" :step="5" />
            </div>
          </div>
        </div>
        <!-- /Rangeslider -->

        <!-- Rangeslider -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4">
              <h5 class="card-title">Custom Values</h5>
            </div>
            <div class="card-body p-4">
              <Slider v-model="value9" />
            </div>
          </div>
        </div>
        <!-- /Rangeslider -->

        <!-- Rangeslider -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-4 border-b">
              <h5 class="card-title">Modern skin</h5>
            </div>
            <div class="card-body p-4">
              <Slider v-model="value1" class="modernskin" />
            </div>
          </div>
        </div>
        <!-- /Rangeslider -->

        <!-- Rangeslider -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4">
              <h5 class="card-title">Sharp Skin</h5>
            </div>
            <div class="card-body p-4">
              <Slider v-model="value1" class="sharpskin" />
            </div>
          </div>
        </div>
        <!-- /Rangeslider -->

        <!-- Rangeslider -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4">
              <h5 class="card-title">Round skin</h5>
            </div>
            <div class="card-body p-4">
              <Slider v-model="value1" class="roundskin" />
            </div>
          </div>
        </div>
        <!-- /Rangeslider -->

        <!-- Rangeslider -->
        <div class="col-md-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4">
              <h5 class="card-title">Square Skin</h5>
            </div>
            <div class="card-body p-4">
              <Slider v-model="value1" class="squareskin" />
            </div>
          </div>
        </div>
        <!-- /Rangeslider -->

      </div>

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import Slider from "@vueform/slider";

export default {
  data() {
    return {
      title: "Home",
      text: "Range Slider",
    };
  },
  components: {
    Slider,
  },

  data: () => ({
    value1: 10,
    value5: 10,
    value6: 10,
    value7: 10,
    value8: 10,
    value2: 55,
    from: 100,
    to: 1000,
    merge: 10,
    value3: [20, 80],
    format: {
      prefix: "$",
      suffix: "0",
    },
    value4: [5, 50],
    value9: [20, 50],
  }),
};
</script>
<style>
.slider-connect {
  background: var(--slider-connect-bg, #ed5565) !important;
  cursor: pointer;
}

.modernskin .slider-connect {
  background: var(--slider-connect-bg, #20b426) !important;
  cursor: pointer;
  height: 5px;
}

.sharpskin .slider-connect {
  background: var(--slider-connect-bg, #ee22fa) !important;
  cursor: pointer;
  height: 2px;
}

.sharpskin .slider-base,
.slider-connects {
  height: 2px;
  position: relative;
  width: 100%;
}

.roundskin .slider-connect {
  background: var(--slider-connect-bg, #006cfa) !important;
  cursor: pointer;
  height: 4px;
}

.roundskin .slider-base,
.slider-connects {
  height: 4px;
  position: relative;
  width: 100%;
  border-radius: 4px;
}

.squareskin .slider-connect {
  background: var(--slider-connect-bg, #000) !important;
  cursor: pointer;
  height: 4px;
}

.squareskin .slider-base,
.slider-connects {
  height: 4px;
  position: relative;
  width: 100%;
}

.slider-tooltip {
  background: var(--slider-tooltip-bg, #ed5565) !important;
  border: 1px solid var(--slider-tooltip-bg, #ed5565) !important;
  border-radius: var(--slider-tooltip-radius, 5px);
  color: var(--slider-tooltip-color, #fff);
  display: block;
  font-size: var(--slider-tooltip-font-size, 0.875rem);
  font-weight: var(--slider-tooltip-font-weight, 600);
  line-height: var(--slider-tooltip-line-height, 1.25rem);
  min-width: var(--slider-tooltip-min-width, 20px);
  padding: var(--slider-tooltip-py, 2px) var(--slider-tooltip-px, 6px);
  position: absolute;
  text-align: center;
  white-space: nowrap;
}

.modernskin .slider-tooltip {
  background: var(--slider-tooltip-bg, #20b426) !important;
  border: 1px solid var(--slider-tooltip-bg, #20b426) !important;
  border-radius: var(--slider-tooltip-radius, 5px);
  color: var(--slider-tooltip-color, #fff);
  display: block;
  font-size: var(--slider-tooltip-font-size, 0.875rem);
  font-weight: var(--slider-tooltip-font-weight, 600);
  line-height: var(--slider-tooltip-line-height, 1.25rem);
  min-width: var(--slider-tooltip-min-width, 20px);
  padding: var(--slider-tooltip-py, 2px) var(--slider-tooltip-px, 6px);
  position: absolute;
  text-align: center;
  white-space: nowrap;
}

.sharpskin .slider-tooltip {
  background: var(--slider-tooltip-bg, #ee22fa) !important;
  border: 1px solid var(--slider-tooltip-bg, #ee22fa) !important;
  border-radius: var(--slider-tooltip-radius, 5px);
  color: var(--slider-tooltip-color, #fff);
  display: block;
  font-size: var(--slider-tooltip-font-size, 0.875rem);
  font-weight: var(--slider-tooltip-font-weight, 600);
  line-height: var(--slider-tooltip-line-height, 1.25rem);
  min-width: var(--slider-tooltip-min-width, 20px);
  padding: var(--slider-tooltip-py, 2px) var(--slider-tooltip-px, 6px);
  position: absolute;
  text-align: center;
  white-space: nowrap;
}

.roundskin .slider-tooltip {
  background: var(--slider-tooltip-bg, #006cfa) !important;
  border: 1px solid var(--slider-tooltip-bg, #006cfa) !important;
  border-radius: var(--slider-tooltip-radius, 5px);
  color: var(--slider-tooltip-color, #fff);
  display: block;
  font-size: var(--slider-tooltip-font-size, 0.875rem);
  font-weight: var(--slider-tooltip-font-weight, 600);
  line-height: var(--slider-tooltip-line-height, 1.25rem);
  min-width: var(--slider-tooltip-min-width, 20px);
  padding: var(--slider-tooltip-py, 2px) var(--slider-tooltip-px, 6px);
  position: absolute;
  text-align: center;
  white-space: nowrap;
}

.squareskin .slider-tooltip {
  background: var(--slider-tooltip-bg, #000) !important;
  border: 1px solid var(--slider-tooltip-bg, #000) !important;
  border-radius: var(--slider-tooltip-radius, 5px);
  color: var(--slider-tooltip-color, #fff);
  display: block;
  font-size: var(--slider-tooltip-font-size, 0.875rem);
  font-weight: var(--slider-tooltip-font-weight, 600);
  line-height: var(--slider-tooltip-line-height, 1.25rem);
  min-width: var(--slider-tooltip-min-width, 20px);
  padding: var(--slider-tooltip-py, 2px) var(--slider-tooltip-px, 6px);
  position: absolute;
  text-align: center;
  white-space: nowrap;
}

.rangeslider .slider-base,
.slider-connects {
  height: 12px;
}

.rangeslider .slider-horizontal .slider-handle {
  height: var(--slider-handle-height, 17px);
  right: calc(var(--slider-handle-width, 1px) / 2 * -1);
  top: calc((var(--slider-handle-height, 16px) - var(--slider-height, 6px)) / 2 * -1 + 2px);
  width: var(--slider-handle-width, 4px);
  position: absolute;
  display: block;
  background-color: #ed5565;
  box-shadow: none;
}

.roundskin-slider .slider-horizontal .slider-handle {
  top: calc((var(--slider-handle-height, 30px) - var(--slider-height, 6px)) / 2 * -1 + 2px);
  width: 24px;
  height: 24px;
  position: absolute;
  display: block;
  border: 4px solid #006cfa;
  background-color: white;
  border-radius: 24px;
  box-shadow: none;
}

.squareskin-slider .slider-horizontal .slider-touch-area {
  top: calc((var(--slider-handle-height, 10px) - var(--slider-height, 6px)) / 2 * -1 + 2px);
  width: 16px;
  height: 16px;
  position: absolute;
  display: block;
  border: 3px solid black;
  background-color: white;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  border-radius: 0px;
  box-shadow: none;
}

.squareskin-slider .slider-horizontal .slider-tooltip-top {
  transform: rotate(0deg) !important;
}

.sharpskin-slider .slider-horizontal .slider-handle {
  top: calc((var(--slider-handle-height, 18px) - var(--slider-height, 6px)) / 2 * -1 + 2px);
  width: var(--slider-handle-width, 10px);
  height: 10px;
  position: absolute;
  display: block;
  background-color: #a804b2;
  box-shadow: var(--slider-handle-shadow, 0.1px 0.1px 0px 0px rgba(0, 0, 0, 0.32));
  border-radius: 0px;
}

.sharpskin-slider .slider-horizontal .slider-handle-lower::before {
  position: absolute;
  display: block;
  top: 100%;
  left: 0;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top-color: #a804b2;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
