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
      <b-tabs content-class="" card class="mb-0">
        <b-tab title="New Leads">
          <!-- <h6 class="text-secondary text-center">1 Jan 2021 - 7 Jan 2021</h6> -->
          <b-card>
            <div>
              <!-- <highcharts :options="chartOptionNewLeads"></highcharts> -->
              <highcharts :options="chartOptionNewLeads1"></highcharts>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="New Appointment Completed" lazy>
          <b-card>
            <div>
              <highcharts
                :options="chartOptionNewAppointmentCompleted"
              ></highcharts>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="New Appointment Reported" lazy>
          <b-card>
            <div>
              <highcharts
                :options="chartOptionNewAppointmentReported"
              ></highcharts>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="New Booking Unit" lazy>
          <b-card>
            <div>
              <highcharts :options="chartOptionNewBookingUnit"></highcharts>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Lead Appointment Completed" lazy>
          <b-card>
            <div>
              <highcharts
                :options="chartOptionLeadAppointmentCompleted"
              ></highcharts>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Win Rate" lazy>
          <b-card>
            <div>
              <highcharts :options="chartOptionWinRate"></highcharts>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Loss Leads" lazy>
          <b-card>
            <div>
              <highcharts :options="chartOptionLossLeads"></highcharts>
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Average Sales Cycle" lazy>
          <b-card>
            <div>
              <highcharts :options="chartOptionAverageSalesCycle"></highcharts>
              Average Sales Cycle
            </div>
          </b-card>
        </b-tab>
        <b-tab title="Average Deal Size" lazy>
          <!-- <h6 class="text-secondary text-center">1 Jan 2021 - 7 Jan 2021</h6> -->
          <b-card>
            <div></div>
          </b-card>
        </b-tab>
        <b-tab title="Sales Forecast" lazy>
          <!-- <h6 class="text-secondary text-center">1 Jan 2021 - 7 Jan 2021</h6> -->
          <b-card>
            <div></div>
          </b-card>
        </b-tab>
        <b-tab title="Revenue Rate" lazy>
          <!-- <h6 class="text-secondary text-center">1 Jan 2021 - 7 Jan 2021</h6> -->
          <b-card>
            <div></div>
          </b-card>
        </b-tab>
        <b-tab title="Database Per Person" lazy>
          <!-- <h6 class="text-secondary text-center">1 Jan 2021 - 7 Jan 2021</h6> -->
          <b-card>
            <div></div>
          </b-card>
        </b-tab>
        <b-tab title="Booking Per Person" lazy>
          <!-- <h6 class="text-secondary text-center">1 Jan 2021 - 7 Jan 2021</h6> -->
          <b-card>
            <div></div>
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
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
              49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
              194.1, 95.6, 54.4,
            ],
          },
          {
            name: "Last Week",
            data: [
              83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
              106.6, 92.3,
            ],
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
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
              134, 21, 75, 102.2, 144.0, 176.0, 55.6, 74.5, 216.4, 50.1, 20.6,
              54.4,
            ],
          },
          {
            name: "Last Week",
            data: [
              106.6, 50.8, 78.5, 83.4, 96.0, 25.5, 85.0, 104.3, 91.2, 92.5,
              15.6, 201.3,
            ],
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
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
              50, 75, 175, 102.2, 144.0, 206, 175.6, 150.5, 216.4, 250.1, 220.6,
              254.4,
            ],
          },
          {
            name: "Last Week",
            data: [
              106.6, 50.8, 178.5, 83.4, 96.0, 125.5, 185.0, 104.3, 191.2, 192.5,
              115.6, 201.3,
            ],
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
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
              50, 175, 75, 12.2, 14.0, 26, 75.6, 150.5, 216.4, 150.1, 170.6,
              205.4,
            ],
          },
          {
            name: "Last Week",
            data: [
              20.6, 150.8, 78.5, 23.4, 16.0, 125.5, 150.0, 104.3, 151.2, 192.5,
              115.6, 190.3,
            ],
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
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
              150, 275, 275, 212.2, 214.0, 226, 275.6, 250.5, 216.4, 350.1,
              270.6, 305.4,
            ],
          },
          {
            name: "Last Week",
            data: [
              120.6, 250.8, 278.5, 223.4, 216.0, 125.5, 150.0, 304.3, 251.2,
              392.5, 215.6, 290.3,
            ],
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
            '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
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
            '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
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
    };
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
