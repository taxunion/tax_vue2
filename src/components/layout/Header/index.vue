<template src="./index.html"></template>
<script>
// var _this=this
import bus from '../../util/bus';
import { getdata } from './data.js';
export default {
	inject: ['reload'],
	data() {
		return {
			productVersion: {
				versionCode: '',
				versionDate: '',
				registerDeadline: ''
			},
			show: false,
			introduceshow: false,
			options: [
				{
					label: '重新登录',
					value: 'loginout'
				}
			],
			listout: [],
			userInfo: {},
			sysUserSTXX: {}
		};
	},

	created() {},
	methods: {
		forupdata(e) {
			window.open(e);
		},
		active_show() {
			this.show = !this.show;
		},
		introduce_show() {
			this.introduceshow = !this.introduceshow;
		}
	},
	mounted() {
		bus.$on('log', content => {
			this.show = false;
		});
		bus.$on('log', content => {
			this.introduceshow = false;
		});
	}
};
</script>

<style scoped>
@import url('./index.css');
</style>
<style scoped lang="less">
.backinput {
	/deep/.el-input--small .el-input__inner {
		background-color: white !important;
	}
}
.header/deep/.el-input--small .el-input__inner {
	border: none;
	background-color: #354257;
}

.header/deep/.el-icon-search {
	font-size: 19px;
	position: relative;
	top: 3px;
	margin-left: 17px;
}
</style>
