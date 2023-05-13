import request from '@/utils/service.js'

export default {
	/**
	 * @param {String} code 获取手机号的身份识别code
	 * @description 获取用户手机号
	 */
	getPhoneNumber(code) {
		return request({
			url: '/user/getphone',
			method: 'post',
			data: {
				code
			}
		})
	},

	// 删除预约
	deleteAppointment(params) {
		return request('/order/deleteorder', 'delete', params)
	},

	// 修改预约
	modifyAppointment(params) {
		return request('/order/updateorder', 'post', params)
	},
	//获取用户信息
	getUserInfoList(token) {
		return request({
			url: '/user/info',
			method: 'get',
			params: {
				token
			}
		})
	},
	//更新用户信息
	updateUserInfoList() {
		return request({
			url: '/user/updateInfo',
			method: 'post',
			headers: {
				'Content-Type': 'application/form-data'
			},
			data: {
				name,
				gender,
				phone,
				email,
				role,
				age,
				birthday,
				avatar,
				city
			}
		})
	}
}