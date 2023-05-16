<template src="./index.html"></template>
<script>
	import bus from '../../util/bus';
	export default {
		data() {
			return {
				tagsList: [],
				router: ""
			}
		},
		methods: {
			isActive(path) {
				return path === this.$route.fullPath;
			},
			// 关闭单个标签
			closeTags(index) {
				const delItem = this.tagsList.splice(index, 1)[0];
				const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
				if (item) {
					delItem.path === this.$route.fullPath && this.$router.push(item.path);
				} else {
					this.$router.push('/');
				}
			},
			// 关闭全部标签
			closeAll() {
				this.tagsList = [];
				this.$router.push('/');
			},
			// 关闭其他标签
			closeOther() {
				const curItem = this.tagsList.filter(item => {
					return item.path === this.$route.fullPath;
				})
				this.tagsList = curItem;
			},
			// 设置标签
			setTags(route) {
				const isExist = this.tagsList.some(item => {
					return item.path === route.fullPath;
				})
				if (!isExist) {
					if (this.tagsList.length >= 8) {
						this.tagsList.shift();
					}
					if (this.$notemptyandnull(route.meta.title)) {
						this.tagsList.push({
							title: route.meta.title,
							path: route.fullPath,
							name: route.matched[1].components.default.name
						})
					}

				}
				bus.$emit('tags', this.tagsList);
			},
			handleTags(command) {
				command === 'other' ? this.closeOther() : this.closeAll();
			}
		},
		computed: {
			showTags() {
				return this.tagsList.length > 0;
			}
		},
		watch: {
			$route(newValue, oldValue) {
				if (this.$notemptyandnull(newValue.path)) {
					this.router = newValue.path
				}
				this.setTags(newValue);
			}
		},
		created() {
			this.router = this.$route.fullPath
			this.setTags(this.$route);

			// 监听关闭当前页面的标签页
			bus.$on('close_current_tags', () => {
				for (let i = 0, len = this.tagsList.length; i < len; i++) {
					const item = this.tagsList[i];
					if (item.path === this.$route.fullPath) {
						if (i < len - 1) {
							this.$router.push(this.tagsList[i + 1].path);
						} else if (i > 0) {
							this.$router.push(this.tagsList[i - 1].path);
						} else {
							this.$router.push('/');
						}
						this.tagsList.splice(i, 1);
						break;
					}
				}
			})
		}
	}
</script>
<style scoped>
	@import url("./index.css");
</style>
