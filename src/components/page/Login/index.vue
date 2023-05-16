<template src="./index.html"></template>
<script>
export default {
	data() {
		return {
			showpassword: false,
			loginform: {
				phone: '',
				email: '',
				password: '',
				// sign: '',
				type: 1
			},
			picture: '',
			loginformrules: {
				phone: [
					{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						message: '密码未填写，请填写完整',
						trigger: 'blur'
					}
				]
				// sign: [
				// 	{
				// 		required: true,
				// 		message: '验证码未填写，请填写完整',
				// 		trigger: 'blur'
				// 	}
				// ]
			},
			uuid: ''
		};
	},
	mounted() {
	},
	methods: {
		verification() {
		},
		forlogin() {
			this.$refs['loginform'].validate(async valid => {
				if (valid) {
				}
			});
		},
	}
};
</script>

<style scoped lang="less">
@import url('./index.less');
</style>
