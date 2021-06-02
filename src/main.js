import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import '@/sass/app.scss' // main css

Vue.config.productionTip = false;

// App layouts
import AppMain from '@/layout/AppMain'
import AppContainer from '@/layout/AppContainer'
import AppSheet from '@/layout/AppSheet'

Vue.component('app-main', AppMain)
Vue.component('app-container', AppContainer)
Vue.component('app-sheet', AppSheet)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
