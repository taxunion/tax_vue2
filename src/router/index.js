import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			component: () => import('../components/layout/Home'),
			redirect: '/homePage',
			meta: {
				title: ''
			},
			children: [{
					path: '/homePage',
					component: () => import('../components/page/home/index.vue'),
					meta: {
						title: '首页',
						roles: ['homePage']
					},
				},
			]
		},
		{
			path: '/Login',
			component: () => import( /* webpackChunkName: "home" */ '../components/page/Login'),
			meta: {
				title: '登录'
			},
		},

	]
});