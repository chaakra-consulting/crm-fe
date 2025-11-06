<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Chart JS
        </h4>
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li>
              <a href="javascript:void(0);" class="hover:underline text-gray-700">Charts</a>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li class="text-dark font-medium" aria-current="page">Chart JS</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="md:grid grid-cols-2 gap-x-6">

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Bar Chart</h4>
            </div>
            <div class="card-body p-5">
              <div>
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...barchartjs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Transparency </h4>
            </div>
            <div class="card-body p-5">
              <div>
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...transparencychartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Gradient Bar Chart</h4>
            </div>
            <div class="card-body p-5">
              <div>
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...gradientchartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->


        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Horizontal Bar Chart</h4>
            </div>
            <div class="card-body p-5">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...horizontalchartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Horizontal Bar Chart Style2</h4>
            </div>
            <div class="card-body p-5">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...horizontal2chartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Vertical Stacked Bar Chart</h4>
            </div>
            <div class="card-body p-5">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...verticalchartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Horizontal Stacked Bar Chart</h4>
            </div>
            <div class="card-body p-5">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...horizontal3ChartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Line Chart</h4>
            </div>
            <div class="card-body p-5">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...linechartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Donut Chart</h4>
            </div>
            <div class="card-body p-5">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...donutchartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Pie Chart</h4>
            </div>
            <div class="card-body p-5">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...piechartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Area Chart</h4>
            </div>
            <div class="card-body p-5">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...areachartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Scatter Chart</h4>
            </div>
            <div class="card-body p-5">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...radarchartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

      </div>

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import {
  barchartjs,
  transparencychartJs,
  gradientchartJs,
  horizontalchartJs,
  horizontal2chartJs,
  verticalchartJs,
  horizontal3ChartJs,
  linechartJs,
  areachartJs,
  donutchartJs,
  piechartJs,
} from "./data";
export default {
  data() {
    return {
      barchartjs: barchartjs,
      transparencychartJs: transparencychartJs,
      gradientchartJs: gradientchartJs,
      horizontalchartJs: horizontalchartJs,
      horizontal2chartJs: horizontal2chartJs,
      verticalchartJs: verticalchartJs,
      horizontal3ChartJs: horizontal3ChartJs,
      linechartJs: linechartJs,
      areachartJs: areachartJs,
      donutchartJs: donutchartJs,
      piechartJs: piechartJs,
      title: "Home",
      text1: "Chart",
      text: "Chart JS",
    };
  },
  components: {
    Vue3ChartJs,
  },
};
</script>
