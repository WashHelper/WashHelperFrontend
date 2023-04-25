import request from '@/utils/service.js'

export default {
	/**
	 * @description 获得图片地址
	 */

	getUrl() {
		return request({
			url: '/user/carousel',
			method: 'get',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
}