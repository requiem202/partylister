import Vue from 'vue'
import App from './App.vue'
import VueAnime from 'vue-animejs'
import VueRouter from 'vue-router'
import 'bootstrap'

Vue.config.productionTip = false
Vue.use(VueAnime)
Vue.use(VueRouter)

import Home from './components/Home'
// import Intro from './components/Intro'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import Step5_1 from './components/Step5_1'
import Step5_2 from './components/Step5_2'

const routes = [
  { path: '/', component: Home },
  { path: '/1', component: Step1 },
  { path: '/2', component: Step2 },
  { path: '/3', component: Step3 },
  { path: '/4', component: Step4 },
  { path: '/5-1', component: Step5_1 },
  { path: '/5-2', component: Step5_2 },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
