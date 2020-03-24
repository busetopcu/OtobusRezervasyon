import Vue from 'vue'
import SeferAra from "./views/SeferAra";
import KoltukSecimi from "./views/KoltukSecimi";
import YolcuBilgileri from "./views/YolcuBilgileri";
import odemeBilgileri from "./views/odemeBilgileri";
import Home from "./views/Home";

import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component:'/home',
      redirect:'seferAra'
    },
    {
      path: '/seferAra',
      name: 'seferAra',
      component: SeferAra
    },
    {
      path: '/koltukSecimi/:sefer_id?',            //soru işareti boş bıraklabilir anlamına geliyor
      name: 'koltukSecimi',
      component: KoltukSecimi
    },
    {
      path: '/yolcuBilgileri',
      name: 'yolcuBilgileri',
      component: YolcuBilgileri
    },
    {
      path: '/odemeBilgileri',
      name: 'odemeBilgileri',
      component: odemeBilgileri
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
}
  ]
})
