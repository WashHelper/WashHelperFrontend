import request from '@/utils/service.js'

export default {
	/**
	 * @param {String} params 
	 * @description 登录接口 
	 */
	login(code) {
		return request({
			url: '/login',
			method: 'post',
			data: {
				code
			}
		})
	},

	/**
	 * @param {Object} params
	 */
	register(params) {
		return request('/user/register', 'post', params)
	},

	/**
	 * @param {String} phoneNum
	 * @description 获取验证码
	 */
	getCaptcha(phoneNum) {
		// const data = new FormData()
		// data.append('phone', phoneNum)
		const data = {
			'phone': phoneNum
		}

		return request({
			url: '/getCaptcha',
			method: 'post',
			data
		})
	}

	// // 获取手机号
	// getUserPhoneNum(params) {
	// 	return request('/user/getPhone', 'post', params)
	// },

	// // 获取 openId
	// getUserOpenId(params) {
	// 	return request('/user/getOpenid', 'post', params)
	// },
}