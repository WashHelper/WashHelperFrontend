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

	/**
	 * @param {Object} categoryId
	 * @description 获取用户信息
	 */

	getOrderList(status) {
		return request({
			url: '/order/getList',
			method: 'get',
			params: {
				status
			}
		})
	},

	changeOrder() {
		return request({
			url: '/order/update',
			method: 'post'
		})
	}
}