import request from '@/utils/service.js'

export default {
	// 密码登录
	login(params) {
		return request('/user/login', 'post', params)
	},

	// 注册
	register(params) {
		return request('/user/register', 'post', params)
	},

	// // 获取手机号
	// getUserPhoneNum(params) {
	// 	return request('/user/getPhone', 'post', params)
	// },

	// // 获取 openId
	// getUserOpenId(params) {
	// 	return request('/user/getOpenid', 'post', params)
	// },
}