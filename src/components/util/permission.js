import Vue from 'vue'
const permission = {
	inserted(el, value, vnode) {
		let newarr = value.expression
		var permissions = localStorage.getItem('resources')
		if (permissions == null || permissions == "" || permissions == undefined) {
			el.parentNode && el.parentNode.removeChild(el)
		}
		if (!(permissions.includes(newarr))) {
			el.parentNode && el.parentNode.removeChild(el)
		}
	}
}
Vue.directive('permission', permission)
