const path = require('path')
module.exports = {
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [
				path.resolve(__dirname, './src/assets/css/flexall.less'),
			],
		},
	},
	// devServer: { // 自定义服务配置
	// 	port: 3000
	// },
	publicPath: './',
};
