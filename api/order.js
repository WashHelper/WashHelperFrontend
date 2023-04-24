import request from '@/utils/service.js'

export default {
	// 获取全部审核通过的预约
	getAllAppointments_ok(params) {
		return request('/order/getorder/ok', 'get', params)
	},

	// 获取全部审核未通过的预约
	getAllAppointments_pass(params) {
		return request('/order/getorder/no', 'get', params)
	},

	// 获取指定日期审核通过的预约
	getAppointmentsByDate_ok(params) {
		return request('/order/getorderbydate/ok', 'get', params)
	},

	// 获取指定日期审核未通过的预约
	getAppointmentsByDate_pass(params) {
		return request('/order/getorderbydate/no', 'get', params)
	},

	// 接口
	/**
	 * @param {String} contactName
	 * @description 获取验证码
	 */
	getName(contactName) {
		// const data = new FormData()
		// data.append('phone', phoneNum)
		const data = {
			'phone': phoneNum
		}

		return request({
			url: '/',
			method: 'post',
			data
		})
	}












}