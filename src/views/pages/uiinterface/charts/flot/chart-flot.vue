<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Chart Flot
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
            <li class="text-dark font-medium" aria-current="page">Chart Flot</li>
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
            <div class="card-body p-5 chart-set">
              <apexchart
                type="bar"
                height="300"
                :options="barflotChart.flotbar1"
                :series="barflotChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Bar Chart</h4>
            </div>
            <div class="card-body p-5 chart-set">
              <apexchart
                type="bar"
                height="300"
                :options="bar2flotChart.flotbar2"
                :series="bar2flotChart.series"
              ></apexchart>
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
            <div class="card-body p-5 chart-set">
              <apexchart
                type="line"
                height="300"
                :options="lineflotChat.flotline1"
                :series="lineflotChat.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Line ChartPOints</h4>
            </div>
            <div class="card-body p-5 chart-set">
              <apexchart
                type="line"
                height="300"
                :options="linepointflotChart.flotline2"
                :series="linepointflotChart.series"
              ></apexchart>
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
            <div class="card-body p-5 chart-set">
              <apexchart
                type="area"
                height="300"
                :options="areaflotChart.flotarea1"
                :series="areaflotChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Area Chart Points</h4>
            </div>
            <div class="card-body p-5 chart-set">
              <apexchart
                type="area"
                height="300"
                :options="areapointflotChart.flotarea2"
                :series="areapointflotChart.series"
              ></apexchart>
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
            <div class="card-body p-5 chart-set">
              <apexchart
                type="pie"
                height="300"
                :options="pieflotChart.flotpie1"
                :series="pieflotChart.series"
              ></apexchart>
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
            <div class="card-body p-5 chart-set">
              <apexchart
                type="donut"
                height="300"
                :options="donutflotChart.flotpie2"
                :series="donutflotChart.series"
              ></apexchart>
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
import {
  barflotChart,
  bar2flotChart,
  lineflotChat,
  linepointflotChart,
  areaflotChart,
  areapointflotChart,
  pieflotChart,
  donutflotChart,
} from "./data";
export default {
  data() {
    return {
      barflotChart: barflotChart,
      bar2flotChart: bar2flotChart,
      lineflotChat: lineflotChat,
      linepointflotChart: linepointflotChart,
      areaflotChart: areaflotChart,
      areapointflotChart: areapointflotChart,
      pieflotChart: pieflotChart,
      donutflotChart: donutflotChart,
      title: "Home",
      text1: "Charts",
      text: "Flot Charts",
    };
  },
};
</script>
