import request from '@/utils/service.js'

export default {
	/**
	 * @description 获取地址信息列表
	 */

	getAddressList(type) {
		return request({
			url: '/location/list/type',
			method: 'get',
			headers: {
				'Content-Type': 'application/json'
			},
			params: {
				type
			},
		})
	}
}