import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

// import VueGoogleMap from 'vuejs-google-maps'
import 'vuejs-google-maps/dist/vuejs-google-maps.css'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Vue.use(VueGoogleMap, {
//   load: {
//       apiKey: 'AIzaSyBhckzzc9M_OWIGaP9jyEhWBfU4kAi9hFk',
//       libraries: [places]
//   }
// })

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
