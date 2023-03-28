/* eslint-disable */
import axios from 'axios';


// 创建axios实例
const service = axios.create({
	// 超时
	timeout: 5000,
	baseURL: 'http://1.117.115.133:8080',
});

axios.defaults.adapter = function(config) {
	return new Promise((resolve, reject) => {
		var settle = require('axios/lib/core/settle');
		var buildURL = require('axios/lib/helpers/buildURL');
		uni.request({
			method: config.method.toUpperCase(),
			url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
			header: config.headers,
			data: config.data,
			dataType: config.dataType,
			responseType: config.responseType,
			sslVerify: config.sslVerify,
			complete: function complete(response) {
				response = {
					data: response.data,
					status: response.statusCode,
					errMsg: response.errMsg,
					header: response.header,
					config: config
				};

				settle(resolve, reject, response);
			}
		})
	})
}

// request 拦截器
service.interceptors.request.use(
	(config) => {
		config.headers['token'] = uni.getStorageSync('token')
		return config

	},
	(error) => {
		if (error.request.status == 500) {
			var img = new Image();
			//临时判断网络是否通畅
			img.src = 'https://www.baidu.com/favicon.ico?_t=' + Date.now();

			img.onerror = function() {
				//'提示','断网了，请注意您的网络连接';
				uni.showToast({
					title: '断网了，请注意您的网络连接',
					icon: 'error',
					duration: 2000
				})
			};
		} else {
			return Promise.reject(error);
		}
	},
);

// 响应拦截器
service.interceptors.response.use((res) => {
		let {
			code,
			message
		} = res.data

		if (code === 200) {} else {
			uni.showToast({
				title: message,
				icon: 'error',
				duration: 2000
			});
		}
		return res.data

	},
	(error) => {
		return Promise.reject(error);
	});
export default service;
