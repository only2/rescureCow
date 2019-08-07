import Vue from 'vue'
import Router from 'vue-router'
import RescueCow from './../components/RescureCow'
import Hello from './../components/HelloWorld'
import test from './../components/test'
import test1 from './../components/test1'
Vue.use(Router)

export default new Router({
  routes: [
    {
        name: 'rescue',
        path: '/',
        component: RescueCow
    },
    {
        name: 'Hello',
        path: '/hello',
        component: Hello
    },
    {
        name: 'Test',
        path: '/test',
        component: test
    }
  ]
})