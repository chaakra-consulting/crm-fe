<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          C3 Charts
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
            <li class="text-dark font-medium" aria-current="page">C3 Charts</li>
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
                height="300"
                :options="barc3Chart.barc3"
                :series="barc3Chart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-span-1">
          <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
            <div class="card-header py-4 px-5 border-b border-borderColor">
              <h4 class="card-title">Multiple Bar Chart</h4>
            </div>
            <div class="card-body p-5">
              <apexchart
                type="bar"
                height="300"
                :options="multic3Chart.multibarc3"
                :series="multic3Chart.series"
              ></apexchart>
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
              <apexchart
                type="bar"
                height="300"
                :options="horizontalc3Chart.horizontalbarc3"
                :series="horizontalc3Chart.series"
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
                type="area"
                height="300"
                :options="linec3Chart.linebarc3"
                :series="linec3Chart.series"
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
                height="300"
                :options="line2c3Chart.line2barc3"
                :series="line2c3Chart.series"
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
                type="area"
                height="300"
                :options="line3c3Chart.line3barc3"
                :series="line3c3Chart.series"
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
            <div class="card-body p-5">
              <apexchart
                type="pie"
                height="300"
                :options="piec3Chart.piec3"
                :series="piec3Chart.series"
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
            <div class="card-body p-5">
              <apexchart
                type="donut"
                height="300"
                :options="donutc3Chart.donutc3"
                :series="donutc3Chart.series"
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
  barc3Chart,
  multic3Chart,
  horizontalc3Chart,
  linec3Chart,
  line2c3Chart,
  line3c3Chart,
  piec3Chart,
  donutc3Chart,
} from "./data";
export default {
  data() {
    return {
      barc3Chart: barc3Chart,
      multic3Chart: multic3Chart,
      horizontalc3Chart: horizontalc3Chart,
      linec3Chart: linec3Chart,
      line2c3Chart: line2c3Chart,
      line3c3Chart: line3c3Chart,
      piec3Chart: piec3Chart,
      donutc3Chart: donutc3Chart,
      title: "Home",
      text1: "Chart",
      text: "Chart C3",
    };
  },
};
</script>
