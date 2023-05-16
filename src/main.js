import 'babel-polyfill'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import './components/util/Function'
import './components/util/directives.js'
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './components/util/permission.js'
import './components/util/isshowtoolit.js'


Vue.use(ElementUI, {
	size: 'small'
});
import taxui from 'tax-ui'
Vue.use(taxui)

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
