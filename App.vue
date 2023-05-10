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
						uni.setStorageSync('avatarUrl', avatarUrl)
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
						console.log(code);

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
			// this.login();
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

			uni.checkSession({
				complete: (res) => {
					console.log(res);
				}
			})

			// },

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