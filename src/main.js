import Vue from 'vue'
import App from './App.vue'
import VueNumber from 'vue-number-animation'
import VueFormWizard from 'vue-form-wizard'
import VueSweetalert2 from 'vue-sweetalert2';

import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueNumber)
Vue.use(VueFormWizard)
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
