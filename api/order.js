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
	getName() {
		return request({
			url: '/user/info',
			method: 'get'
		})

	},

	/**
	 * @param {integer} status
	 * @description -获取订单列表
	 */
	getOrderList() {
		const data = {
			'name': 1,
			"age": 2
		}
		return request({
			url: '/user/info',
			method: 'get',
			params: data
		})

	}












}