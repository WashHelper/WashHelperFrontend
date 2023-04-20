import request from '@/utils/service.js'

export default {

	/**
	 * @param {String} productId 
	 * @description 添加购物车接口 
	 */
	add(productId) {
		return request({
			url: '/cart/add',
			method: 'post',
			params: {
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
			}
		})
	},
}