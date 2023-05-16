<template>
	<div id="app" v-if="isRouterAlive"><router-view></router-view></div>
</template>
<script>
export default {
	name: 'App',
	provide() {
		return {
			reload: this.reload //  声明一个变量
		};
	},
	data() {
		return {
			isRouterAlive: true
		};
	},
	created() {
		// this.$router.beforeEach((to, from, next) => {
		// 	if (to.path == '/login' || from.path == '/login' || to.path == '/login_Fin' || from.path == '/login_Fin') {
		// 		next();
		// 	} else {
		// 		var sysUserSTXX = localStorage.getItem('sysUserSTXX');
		// 		if (!sysUserSTXX) {
		// 			localStorage.removeItem("token");
		// 			router.push('/login');
		// 		}
		// 		if (routearr.indexOf(to.meta.roles[0]) == -1) {
		// 			next(from.path);
		// 		} else {
		// 			next();
		// 		}
		// 	}
		// });
	},
	methods: {
		reload() {
			// 通过 this.isRouterAlive 控制 router-view 达到刷新效果
			this.isRouterAlive = false;
			this.$nextTick(() => {
				this.isRouterAlive = true;
			});
		}
	}
};
</script>
<style>
@import './assets/css/main.css';
</style>
