import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BootStrapView from '../views/BootStrapView.vue'
import BootStrapViewTwo from '../views/BootStrapView2.vue'
import BootStrapViewThree from '../views/BootStrapView3.vue'
import BootStrapViewFour from '../views/BootStrapView4.vue'
import BootStrapViewFive from '../views/BootStrapView5.vue'
import BootStrapViewSix from '../views/BootStrapView6.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {    path: '/bs1',    name: 'bs1',    component: BootStrapView  },
  {    path: '/bs2',    name: 'bs2',    component: BootStrapViewTwo  },
  {    path: '/bs3',    name: 'bs3',    component: BootStrapViewThree  },
  {    path: '/bs4',    name: 'bs4',    component: BootStrapViewFour  },
  {    path: '/bs5',    name: 'bs5',    component: BootStrapViewFive  },
  {    path: '/bs6',    name: 'bs6',    component: BootStrapViewSix  },
  {    path: '/in1',    name: 'in1',   component: () => import('../views/Input1.vue')   },
  {    path: '/in2',    name: 'in2',   component: () => import('../views/Input2.vue')   },
  {    path: '/in3',    name: 'in3',   component: () => import('../views/Input3.vue')   },
  {    path: '/in4',    name: 'in4',   component: () => import('../views/Input4.vue')   },
  {    path: '/in5',    name: 'in5',   component: () => import('../views/Input5.vue')   },
  {    path: '/in6',    name: 'in6',   component: () => import('../views/Input6.vue')   },
  {    path: '/in7',    name: 'in7',   component: () => import('../views/Input7.vue')   },
  {    path: '/ca1',    name: 'ca1',   component: () => import('../views/Cal1.vue')   },
  {    path: '/ca2',    name: 'ca2',   component: () => import('../views/Cal2.vue')   },
  {    path: '/ta1',    name: 'ta1',   component: () => import('../views/Tag1.vue')   },
  {    path: '/ta2',    name: 'ta2',   component: () => import('../views/Tag2.vue')   },
  {    path: '/cr1',    name: 'cr1',   component: () => import('../views/Carousel1.vue')   },
  {    path: '/cr2',    name: 'cr2',   component: () => import('../views/Carousel2.vue')   },
  {    path: '/em1',    name: 'em1',   component: () => import('../views/Embed1.vue')   },
  {    path: '/se1',    name: 'se1',   component: () => import('../views/Sel1.vue')   },
  {    path: '/se2',    name: 'se2',   component: () => import('../views/Sel2.vue')   },
  {    path: '/te1',    name: 'te1',   component: () => import('../views/Text1.vue')   },
  {    path: '/te2',    name: 'te2',   component: () => import('../views/Text2.vue')   },
  {    path: '/ax1',    name: 'ax1',   component: () => import('../views/Axios1.vue')   },
  {    path: '/ax2',    name: 'ax2',   component: () => import('../views/Axios2.vue')   },
  {    path: '/crypto1',    name: 'crypto1',   component: () => import('../components/crypto/CryptoApp.vue')   },
  {    path: '/json1',    name: 'json1',   component: () => import('../views/Json1.vue')   },
  {    path: '/table1',    name: 'table1',   component: () => import('../views/Table1.vue')   },
  {    path: '/table2',    name: 'table2',   component: () => import('../views/Table1.vue')   },
  {    path: '/excel1',    name: 'excel1',   component: () => import('../views/Excel1.vue')   },
  {    path: '/excel2',    name: 'excel2',   component: () => import('../views/Excel2.vue')   },
  {    path: '/excel3',    name: 'excel3',   component: () => import('../views/Excel3.vue')   },
  {    path: '/excel4',    name: 'excel4',   component: () => import('../views/Excel4.vue')   },
  {    path: '/excel5',    name: 'excel5',   component: () => import('../views/Excel5.vue')   },
  {    path: '/esm1',    name: 'esm1',   component: () => import('../views/EsmUtil1.vue')   },
  {    path: '/lifecycle1',    name: 'lifecycle1',   component: () => import('../views/LifeCycle1.vue')   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
