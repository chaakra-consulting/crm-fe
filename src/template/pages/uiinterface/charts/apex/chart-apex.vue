<template>
  <div>
    <layouts-header />
    <layouts-sidebar />
    <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
      <div class="content p-5 pb-0">
        <!-- Page Header -->
        <div class="mb-7">
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Apex Charts
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
              <li class="text-dark font-medium" aria-current="page">Apex Charts</li>
            </ol>
          </nav>
        </div>
        <!-- End Page Header -->

        <div class="md:grid grid-cols-2 gap-x-6">
          <!-- Line Chart -->
          <div class="col-span-1">
            <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
              <div class="card-header py-4 px-5 border-b border-borderColor">
                <h4 class="card-title">Line Chart</h4>
              </div>
              <div class="card-body p-5">
                <apex-chart
                  type="line"
                  height="350"
                  :options="lineChartOptions"
                  :series="lineSeries"
                ></apex-chart>
              </div>
            </div>
          </div>

          <!-- Area Chart -->
          <div class="col-span-1">
            <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
              <div class="card-header py-4 px-5 border-b border-borderColor">
                <h4 class="card-title">Area Chart</h4>
              </div>
              <div class="card-body p-5">
                <apex-chart
                  type="area"
                  height="350"
                  :options="areaChartOptions"
                  :series="areaSeries"
                ></apex-chart>
              </div>
            </div>
          </div>

          <!-- Bar Chart -->
          <div class="col-span-1">
            <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
              <div class="card-header py-4 px-5 border-b border-borderColor">
                <h4 class="card-title">Bar Chart</h4>
              </div>
              <div class="card-body p-5">
                <apex-chart
                  type="bar"
                  height="350"
                  :options="barChartOptions"
                  :series="barSeries"
                ></apex-chart>
              </div>
            </div>
          </div>

          <!-- Stacked Bar Chart -->
          <div class="col-span-1">
            <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
              <div class="card-header py-4 px-5 border-b border-borderColor">
                <h4 class="card-title">Stacked Bar Chart</h4>
              </div>
              <div class="card-body p-5">
                <apex-chart
                  type="bar"
                  height="350"
                  :options="stackedBarOptions"
                  :series="stackedBarSeries"
                ></apex-chart>
              </div>
            </div>
          </div>

          <!-- Donut Chart -->
          <div class="col-span-1">
            <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
              <div class="card-header py-4 px-5 border-b border-borderColor">
                <h4 class="card-title">Donut Chart</h4>
              </div>
              <div class="card-body p-5">
                <apex-chart
                  type="donut"
                  height="350"
                  :options="donutOptions"
                  :series="donutSeries"
                ></apex-chart>
              </div>
            </div>
          </div>

          <!-- Radial Chart -->
          <div class="col-span-1">
            <div class="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
              <div class="card-header py-4 px-5 border-b border-borderColor">
                <h4 class="card-title">Radial Chart</h4>
              </div>
              <div class="card-body p-5">
                <apex-chart
                  type="radialBar"
                  height="350"
                  :options="radialOptions"
                  :series="radialSeries"
                ></apex-chart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <layouts-footer />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

export default {
  name: 'ApexChartsDemo',
  components: {
    'apex-chart': VueApexCharts,
  },
  setup() {
    // Line Chart
    const lineChartOptions = ref({
      chart: {
        type: 'line',
        height: 350,
        zoom: { enabled: false },
        toolbar: { show: true },
      },
      stroke: { curve: 'smooth', width: 2 },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      title: { text: 'Monthly Sales', align: 'left' },
      colors: ['#5e72e4'],
      tooltip: { theme: 'light' },
    });

    const lineSeries = ref([{
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }]);

    // Area Chart
    const areaChartOptions = ref({
      chart: {
        type: 'area',
        height: 350,
        zoom: { enabled: false },
        toolbar: { show: true },
      },
      stroke: { curve: 'smooth', width: 2 },
      fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.3 } },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      title: { text: 'Monthly Revenue', align: 'left' },
      colors: ['#2dce89'],
      tooltip: { theme: 'light' },
    });

    const areaSeries = ref([{
      name: 'Revenue',
      data: [45, 52, 38, 45, 49, 43, 55, 60, 70]
    }]);

    // Bar Chart
    const barChartOptions = ref({
      chart: {
        type: 'bar',
        height: 350,
        toolbar: { show: true },
      },
      plotOptions: {
        bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
      title: { text: 'Monthly Sales', align: 'left' },
      colors: ['#5e72e4', '#2dce89', '#fb6340'],
      tooltip: { theme: 'light' },
    });

    const barSeries = ref([{
      name: 'Sales',
      data: [30, 40, 45, 50, 49, 60, 70]
    }]);

    // Stacked Bar Chart
    const stackedBarOptions = ref({
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: { show: true },
      },
      plotOptions: {
        bar: { horizontal: true, barHeight: '80%' },
      },
      xaxis: {
        categories: [2011, 2012, 2013, 2014, 2015, 2016, 2017],
      },
      title: { text: 'Yearly Comparison', align: 'left' },
      colors: ['#5e72e4', '#2dce89', '#fb6340'],
      tooltip: { theme: 'light' },
    });

    const stackedBarSeries = ref([
      {
        name: 'Product A',
        data: [30, 40, 45, 50, 49, 60, 70]
      },
      {
        name: 'Product B',
        data: [20, 35, 40, 45, 49, 45, 50]
      },
      {
        name: 'Product C',
        data: [10, 25, 30, 35, 39, 35, 40]
      }
    ]);

    // Donut Chart
    const donutOptions = ref({
      chart: {
        type: 'donut',
        height: 350,
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      title: { text: 'Team Distribution', align: 'left' },
      colors: ['#5e72e4', '#2dce89', '#fb6340', '#f5365c', '#11cdef'],
      tooltip: { theme: 'light' },
      legend: { position: 'bottom' },
    });

    const donutSeries = ref([44, 55, 13, 43, 22]);

    // Radial Chart
    const radialOptions = ref({
      chart: {
        type: 'radialBar',
        height: 350,
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: { fontSize: '22px' },
            value: { fontSize: '16px' },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                return '89.9%';
              },
            },
          },
        },
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
      colors: ['#5e72e4', '#2dce89', '#fb6340', '#f5365c'],
      title: { text: 'Fruit Distribution', align: 'left' },
    });

    const radialSeries = ref([70, 67, 61, 90]);

    return {
      // Line Chart
      lineChartOptions,
      lineSeries,
      
      // Area Chart
      areaChartOptions,
      areaSeries,
      
      // Bar Chart
      barChartOptions,
      barSeries,
      
      // Stacked Bar Chart
      stackedBarOptions,
      stackedBarSeries,
      
      // Donut Chart
      donutOptions,
      donutSeries,
      
      // Radial Chart
      radialOptions,
      radialSeries,
    };
  },
};
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-title {
  color: #2d3748;
  font-weight: 600;
}
</style>
