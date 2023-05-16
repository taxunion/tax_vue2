<template src="./index.html">
</template>
<script>
	import vHead from '../../layout/Header';
	import vSidebar from '../../layout/Sidebar';
	import vTags from '../../layout/Tags';
	import bus from '../../util/bus';
	export default {
		data() {
			return {
				tagsList: [],
				collapse: false
			};
		},
		components: {
			vHead,
			vSidebar,
			vTags
		},
		created() {
			bus.$on('collapse-content', msg => {
				this.collapse = msg;
			});
			// 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
			bus.$on('tags', msg => {
				let arr = [];
				for (let i = 0, len = msg.length; i < len; i++) {
					msg[i].name && arr.push(msg[i].name);
				}
				this.tagsList = arr;
			});
		},
		mounted() {
		},
		methods: {
			yinc(){
				bus.$emit('log', '')
			},
		}
	};
</script>
