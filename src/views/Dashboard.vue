<template>
    <div>
        <!-- <div class="text-center">
            <b-img center src="https://picsum.photos/125/125/?image=58" alt="Center image" rounded="circle" class="mb-2"></b-img>
           <h4>Vasanta Innopark</h4>
           <h6>PT Sirius Innopark</h6>
        </div> -->

        <h5 class="font-weight-bolder">Dashboard</h5>

        <div class="card my-4">
            <div class="card-body">
                <b-img center src="https://picsum.photos/125/125/?image=58" alt="Center image" rounded="circle" class="mb-2"></b-img>
                <div class="text-center">
                    <h4 class="mb-0">Vasanta Innopark</h4>
                    <h6 class="text-secondary">PT. Sirius</h6>
                    <p class="mb-0">Berlaku Sampai: 9-September-2020</p>
                </div>
            </div>
        </div>

        
        <div class="my-4">
            <div class="col-sm-3 pl-0">
            <b-form-select v-model="selected" :options="options" size="sm"></b-form-select>
            <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
        </div>
            <div class="row ">
                <div class="col-lg-3 mt-2">
                    <div class="card ket">
                        <div class="card-body">
                            <h5 class="card-title mb-1">Total Leads</h5>
                            <h4 class="card-text text-right font-weight-bold text-danger">350.000</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 mt-2">
                    <div class="card ket">
                        <div class="card-body">
                            <h5 class="card-title mb-1">Total Booking</h5>
                            <h4 class="card-text text-right font-weight-bold text-danger">350.000</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 mt-2">
                    <div class="card ket">
                        <div class="card-body">
                            <h5 class="card-title mb-1">In-House Sales</h5>
                            <h4 class="card-text text-right font-weight-bold text-danger">350.000</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 mt-2">
                    <div class="card ket">
                        <div class="card-body">
                            <h5 class="card-title mb-1">Total Member</h5>
                            <h4 class="card-text text-right font-weight-bold text-danger">350.000</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 mt-2">
                    <div class="card ket">
                        <div class="card-body">
                            <h5 class="card-title mb-1">Agen SQM</h5>
                            <div class="text-muted small">Pending: 0</div>
                            <!-- <p >Pending: 0</p> -->
                            <h4 class="card-text text-right font-weight-bold text-danger">350.000</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-4">
            <h4>Status</h4>
            <p class="text-muted">Persentase & jumlah leads yang Anda terima dari member SQM dengan status terupdate</p>
            <div class="card mt-3">
                <div class="card-body">
                    <div id="chart">
                        <apexcharts height="350" type="bar" :options="chartOptions" :series="series"></apexcharts>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-4">
            <h4>Performa In-house Sales</h4>
            <p class="text-muted">Performa agen in house yang didasarkan oleh status leads</p>
            <div class="card mt-3">
                <div class="card-body">
                    <div class="table-reponsive">
                        <table class="table table-sm">
                            <thead>
                                <tr>
                                <th scope="col">Nama Agen</th>
                                <th scope="col">Total leads</th>
                                <th scope="col">Baru</th>
                                <th scope="col">Follow up</th>
                                <th scope="col">Appointment</th>
                                <th scope="col">Site Visit</th>
                                <th scope="col">Booking</th>
                                <th scope="col">Booking Ditolak</th>
                                <th scope="col">Drop</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >sales22</td >
                                    <td>3</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <!-- <td>3</td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-4">
            <h4>Jadwal Appointment In-house Sales</h4>
            <p class="text-muted">Jadwal Appointment In-house Sales</p>
            <div class="card mt-3">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-sm">
                            <thead>
                                <tr>
                                <th scope="col">Tanggal</th>
                                <th scope="col">Waktu</th>
                                <th scope="col">Nama Proyek</th>
                                <th scope="col">Nama Prospek</th>
                                <th scope="col">Nama Agen</th>
                                <th scope="col">Lokasi</th>
                                <th scope="col">Status Leads</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>31-12-2021</td>
                                    <td>11:31</td>
                                    <td>Apartemen</td>
                                    <td>Test</td>
                                    <td>Sales 1 Demo</td>
                                    <td>Sana</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
        options: [
          { value: null, text: 'Semua' },
          { value: 'a', text: 'Apartemen' },
          { value: 'b', text: 'Perumahan' },
        ],
        selected: null,

        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 1]
          }],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: true,
            //   offsetY: 120,
              style: {
                  fontSize: '12px',
                  colors: ["#304758"]
              }
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            // yaxis: {
            //   title: {
            //     text: '$ (thousands)'
            //   }
            // },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
    }
  },
}
</script>

<style scoped>
    .ket{
        height: 125px;
    }

    .card-title{
        margin-bottom: 0px;
    }

    .small {
        font-size: 12px;
    }
</style>