import request from '@/utils/service.js'

export default {
	/**
	 * @param {Object} status
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
	getOrderDetail(orderNumber) {
		return request({
			url: '/order/info',
			method: 'get',
			params: {
				orderNumber
			}
		})
	},

	/**
	 * @param {Object} data 订单信息 
	 * @description 下单确认
	 */
	confirmOrder(data) {
		return request({
			url: '/order/confirm',
			method: 'post',
			data
		})
	},

	/**
	 * @@param {Object} data = [value]
	 * @@description 预支付 
	 */
	prePay(data) {
		return request({
			url: '/pay/unifiedOrder',
			method: 'post',
			data
		})
	}
}