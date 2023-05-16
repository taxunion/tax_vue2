import Axios from 'axios'
import {
	MessageBox,
	Message,
	Loading
} from 'element-ui'
import router from '../router/index.js';
import qs from 'qs'
import configHttp from '../../configHttp.js'
const baseurl = configHttp.baseURL
const axios = Axios.create({

})
axios.defaults.timeout = 60000; //响应时间
axios.defaults.baseURL = configHttp.baseURL;

axios.interceptors.response.use((res) => {
	//对响应数据做些事
	if (!res.data.success) {
		return Promise.resolve(res);
	}
	return res;
}, (error) => {
	return Promise.reject(error);
});
var loadingCount = 0

function closeloading(loading) {
	loadingCount--
	console.log(loadingCount)
	if (loadingCount == 0) {
		loading.close()

	}
}

function showloading(Loading) {
	var loading = Loading.service({
		lock: true,
		text: '疯狂加载中,请稍等',
		background: 'transparent'
	})
	loadingCount++
	return loading
}
export default function request(url, method = 'get', params = {}) {
	return new Promise((resolve, reject) => {
		axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
		var loading = showloading(Loading)
		var token = localStorage.getItem('token');
		if (token != "" & token != null) {
			axios.defaults.headers.common['token'] = token;
		} else {
			localStorage.removeItem("token")
			if (configHttp.projectType == 'Amat' && configHttp.ssoSwitch) {
				router.push('/login_Fin');
			} else {
				router.push('/login');
			}
		}
		if (method == "post") {
			var formData = new FormData();
			for (var i in params) {
				if (i == 'uploadFile') {
					params[i].forEach(item => {
						formData.append('uploadFile', item);
					})
				} else {
					formData.append(i, params[i]);
				}
			}
			axios({
					method: "post",
					url: url,
					headers: {
						"token": token
					},
					data: formData,
				}).then((response) => {
					closeloading(loading)
					if (response.data.msg == "用户连接超时" || response.data.code == "2018") {
						localStorage.removeItem("token")
						if (configHttp.projectType == 'Amat' && configHttp.ssoSwitch) {
							router.push('/login_Fin');
						} else {
							router.push('/login');
						}
					}
					resolve(response);
				}, err => {
					if (err.response.data.msg == "用户连接超时" || response.data.code == "2018") {
						closeloading(loading)
						localStorage.removeItem("token")
						if (configHttp.projectType == 'Amat' && configHttp.ssoSwitch) {
							router.push('/login_Fin');
						} else {
							router.push('/login');
						}
					}
					reject(err);
				})
				.catch((error) => {
					reject(error)
				})
		} else {
			axios.get(url, {
					params: params
				})
				.then(response => {
					closeloading(loading)
					if (response.data.msg == "用户连接超时" || response.data.code == "2018") {
						localStorage.removeItem("token")
						if (configHttp.projectType == 'Amat' && configHttp.ssoSwitch) {
							router.push('/login_Fin');
						} else {
							router.push('/login');
						}
					}

					resolve(response)
				}, err => {
					if (err.response.data.msg == "用户连接超时" || response.data.code == "2018") {
						closeloading(loading)
						localStorage.removeItem("token")
						if (configHttp.projectType == 'Amat' && configHttp.ssoSwitch) {
							router.push('/login_Fin');
						} else {
							router.push('/login');
						}
					}
					reject(err)

				})
				.catch((error) => {
					reject(error)
				})
		}

	})
}
export function requestbody(url, method = 'get', params = {}) {
	axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
	return new Promise((resolve, reject) => {
		var loading = showloading(Loading)
		var token = localStorage.getItem('token')
		if (token != "" & token != null) {
			axios.defaults.headers.common['token'] = token;
		} else {
			localStorage.removeItem("token")
			router.push('/login');
		}
		if (method == "post") {
			axios.post(url, params)
				.then(response => {
					closeloading(loading)
					if (response.data.msg == "用户连接超时" || response.data.code == "2018") {
						localStorage.removeItem("token")
						if (configHttp.projectType == 'Amat' && configHttp.ssoSwitch) {
							router.push('/login_Fin');
						} else {
							router.push('/login');
						}
					}
					resolve(response);
				}, err => {
					reject(err);
				})
				.catch((error) => {
					reject(error)
				})
		} else {
			axios.get(url, {
					params: params
				})
				.then(response => {
					closeloading(loading)
					if (response.data.msg == "用户连接超时" || response.data.code == "2018") {
						localStorage.removeItem("token")
						if (configHttp.projectType == 'Amat' && configHttp.ssoSwitch) {
							router.push('/login_Fin');
						} else {
							router.push('/login');
						}
					}
					resolve(response)
				}, err => {
					reject(err)
				})
				.catch((error) => {
					reject(error)
				})
		}

	})
}
