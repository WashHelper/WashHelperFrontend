import request from '@/utils/service.js'

export default {

	/**
	 * @param {String} productId 
	 * @description 往购物车内加入商品
	 */
	add(productList) {
		return request({
			url: '/cart/add',
			data: {
				// picture,
				productList
			},
			method: 'post',
			header: {
				// Authorization,
				'Content-Type': 'application/form-data;'
				// productList: {
				// 	productId,
				// 	productNum
				// }
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
	/**
	 * @param {Object} productList
	 * @description 往购物车内加入商品
	 */
}