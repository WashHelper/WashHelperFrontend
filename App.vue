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
				wx.getUserProfile({
					desc: '获取你的昵称、头像',
					provider: 'weixin',
					success: (infoRes) => {
						let nickName = infoRes.userInfo.nickName; //获取用户登录昵称
						let avatarUrl = infoRes.userInfo.avatarUrl; //获取用户头像
						console.log(infoRes);
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

						this.getUserProfile()

						uni.setStorageSync('token', token);

						uni.switchTab({
							url: '/pages/index/index'
						})
					}
				});
			}


		},
		onLaunch() {
			wx.showModal({
				title: '提示',
				content: '请登录以正常使用',
				success: (res) => {
					if (res.confirm) {
						this.login();
					} else if (res.cancel) {
						this.failToLogin('拒绝登录');
					}
				}
			});

			uni.checkSession({
				complete: (res) => {
					console.log(res);
				}
			})

		},
		onShow() {
			// uni.getSystemInfo({
			// 	success(e) {
			// 		/* 窗口宽度大于420px且不在PC页面且不在移动设备时跳转至 PC.html 页面 */
			// 		if (e.windowWidth > 420 && !window.top.isPC && !/iOS|Android/i.test(e.system)) {
			// 			console.log('跳转到html页面')
			// 		}
			// 	}
			// })
		},
		onHide() {}
	}
</script>

<style lang="scss">
	@import 'sadais-piui/scss/index.scss';

	page {
		/*每个页面公共css */
		background: rgba(245, 245, 245, 1);
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>