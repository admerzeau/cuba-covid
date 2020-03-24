import Vue from 'vue'
import App from './App.vue'
import VueNumber from 'vue-number-animation'

Vue.use(VueNumber)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
