import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/basis',
      name: 'vue基础',
      component: () => import('../components/vue基础')
    },
    {
      
        path: '/router',
        name: 'vue路由',
        component: () => import('../components/vue路由')
    },
    {
      
      path: '/three',
      name: 'Three.js',
      component: () => import('../components/threejs网页')
  }
  ]
})
