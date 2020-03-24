import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const GlobalData = new Vue();

import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
