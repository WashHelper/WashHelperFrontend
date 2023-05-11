import request from '@/utils/service.js'

export default {
	/**
	 * @param {String} productId 
	 * @description 往购物车内加入商品
	 */
	add(productId) {
		return request({
			url: '/cart/add',
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			data: {
				productId
			},
		})
	},
	/**
	 * @param {String} productId 
	 * @description 往购物车内减少商品
	 */
	sub(productId) {
		return request({
			url: '/cart/delete',
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			data: {
				productId
			}
		})
	},
	/**
	 * @param {Object} categoryId
	 * @description 获取商品列表
	 */


	getTypeList(categoryId) {
		return request({
			url: '/order/getCategory',
			method: 'get',
			params: {
				categoryId
			},
			// headers: {
			// }
		})
	}
}