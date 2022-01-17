<template>
  <div>
    <div>
      <div class="row mb-2">
        <div class="col-sm-4">
          <h4 class="mb-2"><h4 class="mb-2">Statistik</h4></h4>
        </div>
        <div class="col-sm-8">
          <div class="sort-date">
            <div class="row">
              <div class="col-md-12">
                <b-button variant="danger" size="sm" class="mx-1"
                  >Weekly</b-button
                >
                <b-button variant="outline-danger" size="sm" class="mx-1"
                  >Monthly</b-button
                >
                <b-button variant="light">
                  <b-icon
                    icon="arrow-left-circle-fill"
                    variant="danger"
                  ></b-icon>
                </b-button>
                <b-button variant="light" disabled>
                  <b-icon
                    icon="arrow-right-circle-fill"
                    variant="danger"
                    disable
                  ></b-icon>
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-4">
      <h6 class="text-secondary text-center">1 Jan 2021 - 7 Jan 2021</h6>
      <b-tabs content-class="" card class="mb-0">
        <b-tab title="New Leads">
          <!-- <h6 class="text-secondary text-center">1 Jan 2021 - 7 Jan 2021</h6> -->
          <b-card>
            <div>
              <!-- <highcharts :options="chartOptionNewLeads"></highcharts> -->
              <highcharts :options="chartOptionNewLeads1"></highcharts>
              <div class="card mt-3">
                <div class="card-body">
                  <div class="table-reponsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Nama Sales</th>
                          <th scope="col">Minggu Lalu</th>
                          <th scope="col">Minggu Ini</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Hanif</td>
                          <td>499</td>
                          <td>83</td>
                          <td class="text-success">+416</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Deny</td>
                          <td>71</td>
                          <td>78</td>
                          <td class="text-danger">-7</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Adven</td>
                          <td>106</td>
                          <td>98</td>
                          <td class="text-success">+8</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Indra</td>
                          <td>129</td>
                          <td>93</td>
                          <td class="text-success">+36</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Bagas</td>
                          <td>144</td>
                          <td>200</td>
                          <td class="text-danger">-56</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="New Appointment Completed" lazy>
          <b-card>
            <div>
              <highcharts
                :options="chartOptionNewAppointmentCompleted"
              ></highcharts>
              <div class="card mt-3">
                <div class="card-body">
                  <div class="table-reponsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Nama Sales</th>
                          <th scope="col">Minggu Lalu</th>
                          <th scope="col">Minggu Ini</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Hanif</td>
                          <td>134</td>
                          <td>36</td>
                          <td class="text-success">+28</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Deny</td>
                          <td>21</td>
                          <td>50</td>
                          <td class="text-danger">-29</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Adven</td>
                          <td>75</td>
                          <td>75</td>
                          <td>0</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Indra</td>
                          <td>1022</td>
                          <td>83</td>
                          <td class="text-success">+939</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Bagas</td>
                          <td>144</td>
                          <td>96</td>
                          <td class="text-success">+48</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="New Appointment Reported" lazy>
          <b-card>
            <div>
              <highcharts
                :options="chartOptionNewAppointmentReported"
              ></highcharts>
              <div class="card mt-3">
                <div class="card-body">
                  <div class="table-reponsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Nama Sales</th>
                          <th scope="col">Minggu Lalu</th>
                          <th scope="col">Minggu Ini</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Hanif</td>
                          <td>50</td>
                          <td>106</td>
                          <td class="text-danger">-56</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Deny</td>
                          <td>75</td>
                          <td>50</td>
                          <td class="text-success">+25</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Adven</td>
                          <td>175</td>
                          <td>178</td>
                          <td class="text-danger">-3</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Indra</td>
                          <td>102</td>
                          <td>83</td>
                          <td class="text-success">+19</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Bagas</td>
                          <td>144</td>
                          <td>96</td>
                          <td class="text-success">+48</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="New Booking Unit" lazy>
          <b-card>
            <div>
              <highcharts :options="chartOptionNewBookingUnit"></highcharts>
              <div class="card mt-3">
                <div class="card-body">
                  <div class="table-reponsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Nama Sales</th>
                          <th scope="col">Minggu Lalu</th>
                          <th scope="col">Minggu Ini</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Hanif</td>
                          <td>50</td>
                          <td>20</td>
                          <td class="text-success">+30</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Deny</td>
                          <td>175</td>
                          <td>150</td>
                          <td class="text-success">+25</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Adven</td>
                          <td>75</td>
                          <td>78</td>
                          <td class="text-danger">-3</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Indra</td>
                          <td>12</td>
                          <td>23</td>
                          <td class="text-danger">-11</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Bagas</td>
                          <td>14</td>
                          <td>16</td>
                          <td class="text-danger">-2</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Lead Appointment Completed" lazy>
          <b-card>
            <div>
              <highcharts
                :options="chartOptionLeadAppointmentCompleted"
              ></highcharts>
              <div class="card mt-3">
                <div class="card-body">
                  <div class="table-reponsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Nama Sales</th>
                          <th scope="col">Minggu Lalu</th>
                          <th scope="col">Minggu Ini</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Hanif</td>
                          <td>150</td>
                          <td>120</td>
                          <td class="text-success">+30</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Deny</td>
                          <td>275</td>
                          <td>250</td>
                          <td class="text-success">+25</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Adven</td>
                          <td>275</td>
                          <td>278</td>
                          <td class="text-danger">-3</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Indra</td>
                          <td>212</td>
                          <td>223</td>
                          <td class="text-danger">-11</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Bagas</td>
                          <td>214</td>
                          <td>216</td>
                          <td class="text-danger">-2</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Win Rate" lazy>
          <b-card>
            <div>
              <highcharts :options="chartOptionWinRate"></highcharts>
            </div>
            <div class="card mt-3">
              <div class="card-body">
                <div class="table-reponsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Nama Sales</th>
                        <th scope="col">Minggu Lalu</th>
                        <th scope="col">Minggu Ini</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Hanif</td>
                        <td>50%</td>
                        <td>55%</td>
                        <td class="text-danger">-5%</td>
                        <td></td>
                        <!-- <td>3</td> -->
                      </tr>
                      <tr>
                        <td>Deny</td>
                        <td>75%</td>
                        <td>65%</td>
                        <td class="text-success">+10%</td>
                        <td></td>
                        <!-- <td>3</td> -->
                      </tr>
                      <tr>
                        <td>Adven</td>
                        <td>75%</td>
                        <td>78%</td>
                        <td class="text-danger">-3%</td>
                        <td></td>
                        <!-- <td>3</td> -->
                      </tr>
                      <tr>
                        <td>Indra</td>
                        <td>22%</td>
                        <td>24%</td>
                        <td class="text-danger">-2%</td>
                        <td></td>
                        <!-- <td>3</td> -->
                      </tr>
                      <tr>
                        <td>Bagas</td>
                        <td>24%</td>
                        <td>20%</td>
                        <td class="text-success">+4%</td>
                        <td></td>
                        <!-- <td>3</td> -->
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Loss Leads" lazy>
          <b-card>
            <div>
              <highcharts :options="chartOptionLossLeads"></highcharts>
              <div class="card mt-3">
                <div class="card-body">
                  <div class="table-reponsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Nama Sales</th>
                          <th scope="col">Minggu Lalu</th>
                          <th scope="col">Minggu Ini</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Hanif</td>
                          <td>20%</td>
                          <td>25%</td>
                          <td class="text-danger">-5%</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Deny</td>
                          <td>15%</td>
                          <td>15%</td>
                          <td>0%</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Adven</td>
                          <td>25%</td>
                          <td>28%</td>
                          <td class="text-danger">-3%</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Indra</td>
                          <td>42%</td>
                          <td>44%</td>
                          <td class="text-danger">-2%</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Bagas</td>
                          <td>54%</td>
                          <td>50%</td>
                          <td class="text-success">+4%</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Average Sales Cycle" lazy>
          <b-card>
            <div>
              <highcharts :options="chartOptionAverageSalesCycle"></highcharts>
              <div class="card mt-3">
                <div class="card-body">
                  <div class="table-reponsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Nama Sales</th>
                          <th scope="col">Minggu Lalu</th>
                          <th scope="col">Minggu Ini</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Hanif</td>
                          <td>10 hari</td>
                          <td>5 hari</td>
                          <td class="text-success">+5 hari</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Deny</td>
                          <td>5 hari</td>
                          <td>5 hari</td>
                          <td>0 hari</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Adven</td>
                          <td>5 hari</td>
                          <td>8 hari</td>
                          <td class="text-danger">-3 hari</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Indra</td>
                          <td>2 hari</td>
                          <td>4 hari</td>
                          <td class="text-danger">-2 hari</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Bagas</td>
                          <td>4 hari</td>
                          <td>5 hari</td>
                          <td class="text-danger">-1 hari</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Average Deal Size" lazy>
          <b-card>
            <div>
              <highcharts :options="chartOptionAverageDealSize"></highcharts>
              <div class="card mt-3">
                <div class="card-body">
                  <div class="table-reponsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Nama Sales</th>
                          <th scope="col">Minggu Lalu</th>
                          <th scope="col">Minggu Ini</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Hanif</td>
                          <td>10</td>
                          <td>5</td>
                          <td class="text-success">+5</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Deny</td>
                          <td>5</td>
                          <td>5</td>
                          <td>0</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Adven</td>
                          <td>5</td>
                          <td>8</td>
                          <td class="text-danger">-3</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Indra</td>
                          <td>2</td>
                          <td>4</td>
                          <td class="text-danger">-2</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Bagas</td>
                          <td>4</td>
                          <td>5</td>
                          <td class="text-danger">-1</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Sales Forecast" lazy>
          <b-card>
            <div>
              <highcharts :options="chartOptionSalesForecast"></highcharts>
              <div class="card mt-3">
                <div class="card-body">
                  <div class="table-reponsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Nama Sales</th>
                          <th scope="col">Minggu Lalu</th>
                          <th scope="col">Minggu Ini</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Hanif</td>
                          <td>Rp 9.000.000.000</td>
                          <td>Rp 5.000.000.000</td>
                          <td class="text-success">+Rp 4.000.000.000</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Deny</td>
                          <td>Rp 800.000.000</td>
                          <td>Rp 5.000.000.000</td>
                          <td class="text-success">+Rp 4.200.000.000</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Adven</td>
                          <td>Rp 5.000.000.000</td>
                          <td>Rp 8.000.000.000</td>
                          <td class="text-danger">-Rp 3.000.000.000</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Indra</td>
                          <td>Rp 2.000.000.000</td>
                          <td>Rp 4.000.000.000</td>
                          <td class="text-danger">-Rp 4.000.000.000</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Bagas</td>
                          <td>Rp 4.000.000.000</td>
                          <td>Rp 5.000.000.000</td>
                          <td class="text-danger">-Rp 1.000.000.000</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Revenue Rate" lazy>
          <b-card>
            <div>
              <highcharts :options="chartOptionRevenueRate"></highcharts>
              <div class="card mt-3">
                <div class="card-body">
                  <div class="table-reponsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Nama Sales</th>
                          <th scope="col">Minggu Lalu</th>
                          <th scope="col">Minggu Ini</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Hanif</td>
                          <td>100</td>
                          <td>95</td>
                          <td class="text-success">+5</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Deny</td>
                          <td>52</td>
                          <td>52</td>
                          <td>0</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Adven</td>
                          <td>54</td>
                          <td>84</td>
                          <td class="text-danger">-30</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Indra</td>
                          <td>20</td>
                          <td>40</td>
                          <td class="text-danger">-20</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Bagas</td>
                          <td>40</td>
                          <td>50</td>
                          <td class="text-danger">-10</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Database Per Person" lazy>
          <b-card>
            <div>
              <highcharts :options="chartOptionDatabasePerPerson"></highcharts>
              <div class="card mt-3">
                <div class="card-body">
                  <div class="table-reponsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Nama Sales</th>
                          <th scope="col">Minggu Lalu</th>
                          <th scope="col">Minggu Ini</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Hanif</td>
                          <td>50</td>
                          <td>106</td>
                          <td class="text-danger">-56</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Deny</td>
                          <td>75</td>
                          <td>50</td>
                          <td class="text-success">25</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Adven</td>
                          <td>175</td>
                          <td>178</td>
                          <td class="text-danger">-3</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Indra</td>
                          <td>102</td>
                          <td>83</td>
                          <td class="text-success">+20</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Bagas</td>
                          <td>144</td>
                          <td>96</td>
                          <td class="text-success">+48</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Booking Per Person" lazy>
          <b-card>
            <div>
              <highcharts :options="chartOptionBookingPerPerson"></highcharts>
              <div class="card mt-3">
                <div class="card-body">
                  <div class="table-reponsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Nama Sales</th>
                          <th scope="col">Minggu Lalu</th>
                          <th scope="col">Minggu Ini</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Hanif</td>
                          <td>50</td>
                          <td>20</td>
                          <td class="text-success">+30</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Deny</td>
                          <td>175</td>
                          <td>150</td>
                          <td class="text-success">25</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Adven</td>
                          <td>75</td>
                          <td>78</td>
                          <td class="text-danger">-3</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Indra</td>
                          <td>12</td>
                          <td>23</td>
                          <td class="text-danger">-11</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                        <tr>
                          <td>Bagas</td>
                          <td>14</td>
                          <td>16</td>
                          <td class="text-danger">-2</td>
                          <td></td>
                          <!-- <td>3</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      formatIDR: 0,
      chartOptionNewLeads: {
        chart: {
          type: "column",
        },
        title: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        subtitle: {
          text: "",
        },
        accessibility: {
          announceNewData: {
            enabled: true,
          },
        },
        xAxis: {
          type: "category",
        },
        yAxis: {
          title: {
            text: "Total percent market share",
          },
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "{point.y:.1f}%",
            },
          },
        },

        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
        },

        series: [
          {
            name: "Browsers",
            colorByPoint: true,
            data: [
              {
                name: "Chrome",
                y: 62.74,
                drilldown: "Chrome",
              },
              {
                name: "Firefox",
                y: 10.57,
                drilldown: "Firefox",
              },
              {
                name: "Internet Explorer",
                y: 7.23,
                drilldown: "Internet Explorer",
              },
              {
                name: "Safari",
                y: 5.58,
                drilldown: "Safari",
              },
              {
                name: "Edge",
                y: 4.02,
                drilldown: "Edge",
              },
              {
                name: "Opera",
                y: 1.92,
                drilldown: "Opera",
              },
              {
                name: "Other",
                y: 7.62,
                drilldown: null,
              },
            ],
          },
        ],
      },
      chartOptionNewLeads1: {
        chart: {
          type: "column",
        },
        title: {
          text: "New Leads",
        },
        subtitle: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        colors: ["#2ba9fc", "#a1a1a1"],
        xAxis: {
          categories: [
            "Hanif",
            "Deny",
            "Adven",
            "Indra",
            "Bagas",
            "Mawar",
            "Fajar",
            "Melati",
            "Septian",
            "Anis",
            "Zahra",
            "Agus",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total New Leads",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        dataseries: [
          {
            name: "This Week",
          },
          {
            name: "Last Week",
          },
        ],
        series: [
          {
            name: "This Week",
            data: [499, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54],
          },
          {
            name: "Last Week",
            data: [83, 78, 98, 93, 200, 84, 105, 104, 91, 83, 106, 92],
          },
        ],
      },
      chartOptionNewAppointmentCompleted: {
        chart: {
          type: "column",
        },
        title: {
          text: "New Appointment Completed",
        },
        subtitle: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        colors: ["#33ff4e", "#a1a1a1"],
        xAxis: {
          categories: [
            "Hanif",
            "Deny",
            "Adven",
            "Indra",
            "Bagas",
            "Mawar",
            "Fajar",
            "Melati",
            "Septian",
            "Anis",
            "Zahra",
            "Agus",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total New Appointment Completed",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.f}</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "This Week",
            data: [134, 21, 75, 1022, 144, 176, 55, 74, 216, 50, 20, 54],
          },
          {
            name: "Last Week",
            data: [106, 50, 75, 83, 96, 25, 85, 104, 91, 92, 15, 201],
          },
        ],
      },
      chartOptionNewAppointmentReported: {
        chart: {
          type: "column",
        },
        title: {
          text: "New Appointment Reported",
        },
        subtitle: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        colors: ["#d32323", "#a1a1a1"],
        xAxis: {
          categories: [
            "Hanif",
            "Deny",
            "Adven",
            "Indra",
            "Bagas",
            "Mawar",
            "Fajar",
            "Melati",
            "Septian",
            "Anis",
            "Zahra",
            "Agus",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total New Appointment Reported",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.f}</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "This Week",
            data: [50, 75, 175, 102, 144, 206, 175, 150, 216, 250, 220, 254],
          },
          {
            name: "Last Week",
            data: [106, 50, 178, 83, 96, 125, 185, 104, 191, 192, 115, 201],
          },
        ],
      },
      chartOptionNewBookingUnit: {
        chart: {
          type: "column",
        },
        title: {
          text: "New Booking Unit",
        },
        subtitle: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        colors: ["#fca12b", "#a1a1a1"],
        xAxis: {
          categories: [
            "Hanif",
            "Deny",
            "Adven",
            "Indra",
            "Bagas",
            "Mawar",
            "Fajar",
            "Melati",
            "Septian",
            "Anis",
            "Zahra",
            "Agus",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total New Booking Unit",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.f}</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "This Week",
            data: [50, 175, 75, 12, 14, 26, 75, 150, 216, 150, 170, 205],
          },
          {
            name: "Last Week",
            data: [20, 150, 78, 23, 16, 125, 150, 104, 151, 192, 115, 190],
          },
        ],
      },
      chartOptionLeadAppointmentCompleted: {
        chart: {
          type: "column",
        },
        title: {
          text: "Lead Appointment Completed",
        },
        subtitle: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        colors: ["#6dfc2b", "#a1a1a1"],
        xAxis: {
          categories: [
            "Hanif",
            "Deny",
            "Adven",
            "Indra",
            "Bagas",
            "Mawar",
            "Fajar",
            "Melati",
            "Septian",
            "Anis",
            "Zahra",
            "Agus",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total Lead Appointment Completed",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.f}</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "This Week",
            data: [150, 275, 275, 212, 214, 226, 275, 250, 216, 350, 270, 305],
          },
          {
            name: "Last Week",
            data: [120, 250, 278, 223, 216, 125, 150, 304, 251, 392, 215, 290],
          },
        ],
      },
      chartOptionWinRate: {
        chart: {
          type: "column",
        },
        title: {
          text: "Win Rate",
        },
        subtitle: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        colors: ["#cf3a3a", "#a1a1a1"],
        xAxis: {
          categories: [
            "Hanif",
            "Deny",
            "Adven",
            "Indra",
            "Bagas",
            "Mawar",
            "Fajar",
            "Melati",
            "Septian",
            "Anis",
            "Zahra",
            "Agus",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total Win Rate",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.f}%</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "This Week",
            data: [50, 75, 75, 22, 24, 26, 56, 65, 70, 75, 80, 95],
          },
          {
            name: "Last Week",
            data: [55, 65, 78, 24, 20, 25, 65, 55, 75, 78, 80, 83],
          },
        ],
      },
      chartOptionLossLeads: {
        chart: {
          type: "column",
        },
        title: {
          text: "Loss Leads",
        },
        subtitle: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        colors: ["#f5e027", "#a1a1a1"],
        xAxis: {
          categories: [
            "Hanif",
            "Deny",
            "Adven",
            "Indra",
            "Bagas",
            "Mawar",
            "Fajar",
            "Melati",
            "Septian",
            "Anis",
            "Zahra",
            "Agus",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total Loss Leads",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.f}%</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "This Week",
            data: [20, 15, 25, 42, 54, 76, 76, 85, 60, 55, 60, 75],
          },
          {
            name: "Last Week",
            data: [25, 15, 28, 44, 50, 75, 75, 75, 65, 68, 65, 80],
          },
        ],
      },
      chartOptionAverageSalesCycle: {
        chart: {
          type: "column",
        },
        title: {
          text: "Average Sales Cycle",
        },
        subtitle: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        colors: ["#2ba9fc", "#a1a1a1"],
        xAxis: {
          categories: [
            "Hanif",
            "Deny",
            "Adven",
            "Indra",
            "Bagas",
            "Mawar",
            "Fajar",
            "Melati",
            "Septian",
            "Anis",
            "Zahra",
            "Agus",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total Average Sales Cycle",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:f} hari</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "This Week",
            data: [10, 5, 5, 2, 4, 6, 7, 8, 10, 15, 16, 25],
          },
          {
            name: "Last Week",
            data: [5, 5, 8, 4, 5, 5, 7, 5, 15, 18, 15, 20],
          },
        ],
      },
      chartOptionAverageDealSize: {
        chart: {
          type: "column",
        },
        title: {
          text: "Average Deal Size",
        },
        subtitle: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        colors: ["#d32323", "#a1a1a1"],
        xAxis: {
          categories: [
            "Hanif",
            "Deny",
            "Adven",
            "Indra",
            "Bagas",
            "Mawar",
            "Fajar",
            "Melati",
            "Septian",
            "Anis",
            "Zahra",
            "Agus",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total Average Deal Size",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "This Week",
            data: [10, 5, 5, 2, 4, 6, 7, 8, 10, 15, 16, 25],
          },
          {
            name: "Last Week",
            data: [5, 5, 8, 4, 5, 5, 7, 5, 15, 18, 15, 20],
          },
        ],
      },
      chartOptionSalesForecast: {
        chart: {
          type: "column",
        },
        title: {
          text: "Sales Forecast",
        },
        subtitle: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        colors: ["#fca12b", "#a1a1a1"],
        xAxis: {
          categories: [
            "Hanif",
            "Deny",
            "Adven",
            "Indra",
            "Bagas",
            "Mawar",
            "Fajar",
            "Melati",
            "Septian",
            "Anis",
            "Zahra",
            "Agus",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total Sales Forecast",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            `<td style="padding:0"><b>{point.y:f}</b></td></tr>`,
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "This Week",
            data: [
              900000000, 80000000, 500000000, 200000000, 400000000, 600000000,
              700000000, 800000000, 1000000000, 1500000000, 1600000000,
              2500000000,
            ],
          },
          {
            name: "Last Week",
            data: [
              500000000, 500000000, 800000000, 400000000, 500000000, 500000000,
              700000000, 500000000, 1500000000, 1800000000, 1500000000,
              500000000,
            ],
          },
        ],
      },
      chartOptionRevenueRate: {
        chart: {
          type: "column",
        },
        title: {
          text: "Revenue Rate",
        },
        subtitle: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        colors: ["#33ff4e", "#a1a1a1"],
        xAxis: {
          categories: [
            "Hanif",
            "Deny",
            "Adven",
            "Indra",
            "Bagas",
            "Mawar",
            "Fajar",
            "Melati",
            "Septian",
            "Anis",
            "Zahra",
            "Agus",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total Revenue Rate",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "This Week",
            data: [100, 52, 54, 20, 40, 60, 75, 81, 109, 150, 160, 250],
          },
          {
            name: "Last Week",
            data: [95, 52, 84, 40, 50, 51, 72, 52, 152, 180, 150, 290],
          },
        ],
      },
      chartOptionDatabasePerPerson: {
        chart: {
          type: "column",
        },
        title: {
          text: "Database per Person",
        },
        subtitle: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        colors: ["#2ba9fc", "#a1a1a1"],
        xAxis: {
          categories: [
            "Hanif",
            "Deny",
            "Adven",
            "Indra",
            "Bagas",
            "Mawar",
            "Fajar",
            "Melati",
            "Septian",
            "Anis",
            "Zahra",
            "Agus",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total Database Per Person",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.f}</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "This Week",
            data: [50, 75, 175, 102, 144, 206, 175, 150, 216, 250, 220, 254],
          },
          {
            name: "Last Week",
            data: [106, 50, 178, 83, 96, 125, 185, 104, 191, 192, 115, 201],
          },
        ],
      },
      chartOptionBookingPerPerson: {
        chart: {
          type: "column",
        },
        title: {
          text: "Booking Per Person",
        },
        subtitle: {
          text: "1 Jan 2021 - 7 Jan 2021",
        },
        colors: ["#fca12b", "#a1a1a1"],
        xAxis: {
          categories: [
            "Hanif",
            "Deny",
            "Adven",
            "Indra",
            "Bagas",
            "Mawar",
            "Fajar",
            "Melati",
            "Septian",
            "Anis",
            "Zahra",
            "Agus",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total Booking Per Person",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.f}</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "This Week",
            data: [50, 175, 75, 12, 14, 26, 75, 150, 216, 150, 170, 205],
          },
          {
            name: "Last Week",
            data: [20, 150, 78, 23, 16, 125, 150, 104, 151, 192, 115, 190],
          },
        ],
      },
    };
  },
  methods: {
    getDataIDR() {
      console.log(this.formatIDR);
    },
  },
};
</script>

<style scoped>
.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.alert-bg {
  background-color: #ffc1071a;
  border: 1px solid #ffc10726;
  color: #53535f;
}
.card-body {
  padding: 15px;
}

.nav-tabs .nav-link {
  border: 0px solid red !important;
}

.nav-item a {
  color: orange;
  background-color: white !important;
}

.form-group,
.form-control {
  font-size: 13px;
}

.form-group input,
textarea {
  font-size: 13px;
  /* background-color: #fbfbfb; */
}

.input-group-text {
  background-color: #ba1823 !important;
  color: white;
}

label {
  font-size: 13px;
}

.text-ket {
  font-size: 10px;
}

.tab-pane {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.sort-date {
  display: flex;
  flex-direction: row;
  justify-content: end;
}
.btn .b-icon.bi {
  font-size: 25px;
}
</style>
