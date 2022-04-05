import Vue from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping as farCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons'
import { faCircleUser as fasCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faInstagram, faYoutube, faLinkedin, faTwitter, fasStar, farCartShopping, fasCircleUser, faSearch ), 
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
