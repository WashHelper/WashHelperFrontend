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
	 * @param {Object}status
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
	
	/**
	 * @data 
	 * @description 修改订单
	 */
	changeOrder() {
		return request({
			url: '/order/update',
			method: 'post',
			data: {}
		})
	},
	
	/**
	 * @data orderId
	 * @description 取消订单
	 */

	deleteOrder(orderId) {
		return request({
			url: '/order/cancel',
			method: 'post',
			data: {
				orderId
			}
		})
	},

	/**
	 * @data orderId
	 * @description 订单详情
	 */
	getOrderDetail(orderId) {
		return request({
			url: '/order/info',
			method: 'get',
			params: {
				orderId
			}
		})
	},

	/**
	 * @data 
	 * @description 意见反馈
	 */


	/**
	 * @data 
	 * @description 下单确认
	 */

	confirmOrder() {
		return request({
			url: '/order/confirm',
			method: 'post',
			data: {
				pickupLocationId,
				deliveryLocationId,
				picture,
				productList,
				pickupTime,
				remark
			}
		})
	}
}