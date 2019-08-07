// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import createStore from './store/'
import ElementUI from 'element-ui';
import App from './App'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
function initApp() {
    let store = createStore({
    });
    return new Vue({
        el: '#app',
        router,
        store,
        render: h=> h(App),
    }).$mount('#app');
}

initApp();
