import request from '@/utils/service.js'

export default {
	// 申请预约
	applyAppointment(params) {
		return request('/order/applyorder', 'post', params)
	},

	// 删除预约
	deleteAppointment(params) {
		return request('/order/deleteorder', 'delete', params)
	},

	// 修改预约
	modifyAppointment(params) {
		return request('/order/updateorder', 'post', params)
	}
}
