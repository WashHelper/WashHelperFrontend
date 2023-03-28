// 全局请求封装
export function request(url, method, params) {
	const baseUrl = ''
	const token = uni.getStorageSync('satoken')

	uni.showLoading({
		title: '加载中'
	})

	if (url !== '/user/login' && !token) {
		uni.hideLoading()
		uni.navigateTo({
			url: '/pages/index/index'
		})
		uni.showToast({
			icon: 'error',
			title: '请重新登陆',
			duration: 2000
		})
		return
	}

	if (method === 'delete') {
		return new Promise((resolve, reject) => {
			wx.request({
				url: `${baseUrl + url}?id=${params.id}`,
				method,
				header: {
					'satoken': token
				}, // 设置token，请根据实际情况判断是否要设置
				success(res) {
					uni.hideLoading()
					if (res.data.status === 401) {
						// 如果后端返回401无权限，则本地同步删除缓存(token等信息)
						uni.clearStorageSync()
					}
					if (res.data.status !== 200) {
						uni.showToast({
							icon: 'error',
							title: '请求出错',
							duration: 2000
						})
					}
					resolve(res.data)

				},
				fail(err) {
					uni.hideLoading()
					uni.showToast({
						icon: 'error',
						title: '请求出错',
						duration: 2000
					})
					uni.clearStorageSync()
					reject(err)
				},
				complete() {
					uni.hideLoading()
				}
			})
		})
	} else {
		return new Promise((resolve, reject) => {
			wx.request({
				url: baseUrl + url,
				method,
				header: {
					'satoken': token
				}, // 设置token，请根据实际情况判断是否要设置
				data: {
					...params
				},
				success(res) {
					uni.hideLoading()
					if (res.data.status === 401) {
						// 如果后端返回401无权限，则本地同步删除缓存(token等信息)
						uni.clearStorageSync()
					}
					if (res.data.status !== 200) {
						uni.showToast({
							icon: 'error',
							title: '请求出错',
							duration: 2000
						})
					}
					resolve(res.data)

				},
				fail(err) {
					uni.hideLoading()
					uni.showToast({
						icon: 'error',
						title: '请求出错',
						duration: 2000
					})
					uni.clearStorageSync()
					reject(err)
				},
				complete() {
					uni.hideLoading()
				}
			})
		})
	}
}
