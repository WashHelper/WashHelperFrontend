import request from '@/utils/service.js'

export default {
	/**
	 * @param {String} code 
	 * @description 登录接口 
	 */
	login(code) {
		return request({
			url: '/login',
			method: 'post',
			params: {
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
}