import request from '@/utils/service.js'

export default {
	/**
	 * @description 获取地址信息列表
	 */

	getAddressList(type) {
		return request({
			url: `/location/list/${type}`,
			method: 'get',
			params: {
				type
			}
		})
	},

	/**
	 * @description 获取默认送货信息
	 */
	getDefault(type) {
		return request({
			url: `/location/default/${type}`,
			method: 'get',
			params: {
				type
			}
		})
	},

	/**
	 * @data locationId
	 * @description 修改默认送货信息
	 */

	changeDefault(locationId) {
		return request({
			url: '/location/default',
			method: 'post',
			data: {
				locationId
			}
		})
	},

	/**
	 * @description 新增用户地址
	 */

	addAddress() {
		return request({
			url: '/location/new',
			method: 'post',
			data: {
				area: "江苏省-南京市-高淳区",
				location: "1",
				name: "123",
				phone: "12345678",
				isSelf: true,
				tag: "this.tag",
				isDefault: false
			},
			params: {
				type: 1
			}
		})
	},

	/**
	 * @param {String} location 
	 * @description 获取城市编码
	 */

	getCityCoding() {
		return request({
			url: '/location/cityCode',
			method: 'get',
			params: {
				location
			}
		})
	},

	/**
	 * @description 获取常用地址标签
	 */

	getAddress() {
		return request({
			url: '/location/tags',
			method: 'get'
		})
	},
}