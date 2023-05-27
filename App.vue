<script>
	export default {
		methods: {
			failToLogin(res) {
				wx.showToast({
					title: res,
					icon: 'error',
					duration: 2000
				});
			},
			/**
			 * 获取用户信息
			 */
			getUserProfile() {
				uni.getUserInfo({
					desc: '获取你的昵称、头像',
					provider: 'weixin',
					success: (infoRes) => {
						const {
							nickName,
							avatarUrl
						} = infoRes.userInfo
						uni.setStorageSync('nickName', nickName)
						try {
							uni.setStorageSync('isloading', false); //记录是否第一次授权  false:表示不是第一次授权
						} catch (e) {}
					},
					fail: res => {
						this.failToLogin(res);
					}
				});
			},

			/**
			 * @description 登录
			 */
			login() {
				uni.login({
					provider: 'weixin',
					success: async (loginRes) => {

						const {
							code
						} = loginRes

						const {
							data: {
								token
							}
						} = await this.$axios.login(code)

						await this.getUserProfile()
						uni.setStorageSync('token', token);
						uni.switchTab({
							url: '/pages/index/index'
						})
					}
				});
			}
		},

		onLaunch() {
			if (uni.getStorageSync('token')) {
				this.login()
				return
				const timeStamp = new Date().getTime()
				const orderInfo = {
					appid: 'wx86812ba3adbd4c65',
					partnerid: '1641733714',
					prepayid: '',
					timeStamp,
					nonceStr: ' res.nonceStr',
					package: 'Sign=WXPay',
					sign: 'res.signType',
					paySign: 'res.paySign',
				}
				console.log(orderInfo);
				// uni.requestPayment({
				// 	provider: 'wxpay',
				// 	orderInfo,
				// 	success: (resp) => {
				// 		console.log('success:' + JSON.stringify(resp));
				// 		uni.showToast({
				// 			title: '支付成功',
				// 			icon: 'none',
				// 			duration: 2000
				// 		});
				// 		const params = {
				// 			outTradeNo: that.toClass.orderId + '',
				// 		}
				// 		getwxorder(params).then(orderStatus => {
				// 			console.log(orderStatus)
				// 			setTimeout(function() {
				// 				uni.navigateTo({
				// 					url: '/pages/course/order?item=2'
				// 				});
				// 			}, 0);
				// 		})
				// 	},
				// 	fail: (resp) => {
				// 		console.log('fail:' + JSON.stringify(resp));
				// 		uni.showToast({
				// 			title: '支付失败',
				// 			icon: 'none'
				// 		});
				// 	}
				// })
			}

			wx.showModal({
				title: '提示',
				content: '请登录以正常使用',
				success: (res) => {
					if (res.confirm) {
						this.login();
					} else if (res.cancel) {
						this.failToLogin('拒绝一键登录');
					}
				}
			});
		},

		onShow() {},
		onHide() {}
	}
</script>

<style lang="scss">
	page {
		/*每个页面公共css */
		background: rgba(245, 245, 245, 1);
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	// 取消地图上的 logo
	a .csssprite {
		display: none;
	}

	::-webkit-scrollbar {
		width: 0;

	}
</style>