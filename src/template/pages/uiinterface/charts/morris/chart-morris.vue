<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Morris Chart
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
            <li class="text-dark font-medium" aria-current="page">Morris Chart</li>
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
              <apexchart
                type="bar"
                height="350"
                :options="barchartjs.morrisbar"
                :series="barchartjs.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Stacked Bar Chart </h4>
            </div>
            <div class="card-body p-5">
              <apexchart
                type="bar"
                height="350"
                :options="barstacked.morrisbar2"
                :series="barstacked.series"
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
            <div class="card-body p-5">
              <apexchart
                type="line"
                height="350"
                :options="linechart.morrisbar3"
                :series="linechart.series"
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
            <div class="card-body p-5">
              <apexchart
                type="area"
                height="350"
                :options="areachart.morrisbar4"
                :series="areachart.series"
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
            <div class="card-body p-5">
              <apexchart
                type="line"
                height="350"
                :options="linechart3.morrisbar6"
                :series="linechart3.series"
              >
              </apexchart>
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
              <apexchart
                type="donut"
                height="350"
                :options="linechart2.morrisbar5"
                :series="linechart2.series"
              >
              </apexchart>
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
  barchartjs,
  barstacked,
  linechart,
  areachart,
  linechart2,
  linechart3,
} from "./data";

export default {
  data() {
    return {
      barchartjs: barchartjs,
      barstacked: barstacked,
      linechart: linechart,
      areachart: areachart,
      linechart2: linechart2,
      linechart3: linechart3,
      title: "Home",
      text1: "Chart",
      text: "Morris Chart",
    };
  },
  components: {},
  mounted() { },
  name: "chart-morris",
};
</script>
