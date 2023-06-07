<template>
	<view class="login-section">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="title">
			<text>欢迎来到洗笑颜开！</text>
		</view>
		<view class="input-wrapper">
			<view class="phoneNum">
				<text>手机号码</text>
				<input type="text" placeholder="请输入手机号码" placeholder-class="placeholder" v-model="phoneNumber">
			</view>
			<view>
				<text>验证码</text>
				<view class="verification-code">
					<input type="text" placeholder="请输入验证码" placeholder-class="placeholder" v-model="captcha">
					<text @click="getCaptcha">获取验证码</text>
				</view>
			</view>
			<view class="password">
				<text>设置密码</text>
				<input type="password" placeholder="请输入密码" placeholder-class="placeholder" v-model="password">
			</view>

			<view class="button-wrapper">
				<button @click="handleRegister">注册并登录</button>
				<text>&nbsp;登录即表示接受</text>
				<navigator url="">《用户协议》</navigator><text>与</text>
				<navigator url="">《隐私政策》</navigator>
			</view>
		</view>
		<view class="third-party-login">
			<view class="text">
				<text>————</text>
				<text>第三方登录</text>
				<text>————</text>
			</view>

			<view class="sign-in-with">
				<image src="/static/login/qq.png" mode="" @click="quickLogin('qq')"></image>
				<image src="/static/login/vx.png" mode="" @click="quickLogin('vx')"></image>
			</view>
		</view>
		<uni-popup ref="uPopup" :mask-click="false" type="center">
			<view class="agreement-view"
				:style="{ width: scrollWidth * 0.80 + 'px', height: scrollHeight * 0.70 + 'px' }">
				<!-- 弹框提示头 -->
				<view class="u-text-center">用户使用须知</view>
				<scroll-view scroll-y class="agreement-content" :style="{ height: (scrollHeight - 110) * 0.70 + 'px' }">
					请你务必审慎阅读、充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了更好的向你提供服务，我们需要收集你的设备标识、操作日志等信息用于分析、优化应用性能。<br />你可阅读
					<navigator href="\\">《服务协议》</navigator>和<navigator href="\\">《隐私政策》</navigator>
					了解详细信息。如果你同意，请点击下面按钮开始接受我们的服务。
				</scroll-view>
				<view class="agreement-btns"
					:style="{ height: (scrollHeight*0.7 - (scrollHeight - 120) * 0.70) - 42 + 'px' }">
					<navigator class="no-btn text" target="miniProgram" open-type="exit">
						暂不使用
					</navigator>
					<view class="yse-btn text" @tap="admit">同意</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	const phoneNumberReg = /^[1][3,4,5,7,8][0-9]{9}$/
	export default {
		data() {
			return {
				phoneNumber: '',
				captcha: '',
				password: '',
				isloading: uni.getStorageSync('isloading') || true,
				// 内容的高度
				scrollWidth: uni.getSystemInfoSync().windowWidth,
				scrollHeight: uni.getSystemInfoSync().windowHeight,
			}
		},
		mounted() {
			this.judge()
		},
		methods: {
			// 初始化的时候调用参数，判断用户是否第一次进入
			judge() {
				uni.getStorage({
					key: 'token',
					success: () => {
						// 获取到了不显示弹窗
						this.$refs.uPopup.close();
						uni.showTabBar({
							animation: true
						})
						uni.switchTab({
							url: '/pages/index/index'
						})
					},
					fail: () => {
						uni.hideTabBar({
							animation: true
						})
						this.$refs.uPopup.open('center');
					}
				})
			},
			// 同意按钮
			admit() {
				try {
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
				} catch (e) {
					//TODO handle the exception
				}
				this.$refs.uPopup.close();
				uni.showTabBar({
					animation: true
				})
			},
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
			failToLogin(res) {
				wx.showToast({
					title: res,
					icon: 'error',
					duration: 1000
				});
			},
			getCaptcha() {
				if (!phoneNumberReg.test(this.phoneNumber)) {
					uni.showToast({
						title: '重新输入手机号',
						icon: 'error'
					})
					this.phoneNumber = ''
				} else {
					this.$axios.getCaptcha(this.phoneNumber)
				}
			},
			handleRegister() {
				if (!this.captcha.trim()) {
					uni.showToast({
						title: '请输入验证码',
						icon: 'error'
					})
					return
				}
				if (!this.password.trim()) {
					uni.showToast({
						title: '请输入密码',
						icon: 'error'
					})
					return
				}
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			quickLogin(provider) {
				if (provider === 'qq') {
					uni.login({
						provider: 'qq', //使用微信登录
						onlyAuthorize: true,
						success: function({
							code
						}) {
							console.log(code);
							uni.navigateTo({
								url: '/pages/login/quickLogin'
							})
						}
					});
				} else if (provider === 'vx') {
					uni.login({
						provider: 'weixin', //使用微信登录
						onlyAuthorize: true,
						success: ({
							code
						}) => {
							this.$axios.login(code)
							// uni.navigateTo({
							// 	url: '/pages/login/quickLogin'
							// })
						}
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url('index.css');

	.login-section {
		padding: 20px 15px;

		.title {
			text {
				font-size: 18px;
				font-weight: 500;
				letter-spacing: 0px;
				color: rgba(0, 0, 0, 1);
				vertical-align: top;
			}
		}

		.input-wrapper {
			padding: 27px 17px;
			margin-top: 14px;
			height: calc(336px - 27px - 27px);
			border-radius: 10px;
			background: rgba(255, 255, 255, 1);

			& view {
				margin-top: 10px;

				&:first-of-type {
					margin-top: 0;
				}
			}

			text {
				font-size: 16px;
				font-weight: 500;
				line-height: 24px;
				color: rgba(0, 0, 0, 0.9);
			}

			input {
				margin-top: 10px;
				height: 26px;
			}

			.placeholder {
				font-size: 12px;
				font-weight: 400;
				color: rgba(207, 207, 207, 1);
			}

			.verification-code {
				width: 100%;

				text {
					position: relative;
					top: -24px;
					left: calc(100% - 60px - 20px);
					font-size: 12px;
					font-weight: 400;
					color: rgba(207, 207, 207, 1);
					z-index: 10;
				}
			}
		}

		.button-wrapper {
			margin-top: 36px;
			color: rgba(153, 153, 153, 1);
			text-align: center;

			button {
				width: 228px;
				height: 35px;
				border: transparent;
				border-radius: 10px;
				background: linear-gradient(223.13deg, rgba(87, 182, 230, 1) 0%, rgba(141, 242, 234, 0.5) 90.99%, rgba(247, 247, 193, 0.01) 100%);
				font-size: 18px;
				line-height: 35px;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
			}

			text {
				font-size: 12px;
				font-weight: 400;
				margin-top: 5px;
				color: rgba(153, 153, 153, 1);
			}

			navigator {
				font-size: 12px;
				font-weight: 400;
				display: inline-block;
				color: rgba(64, 158, 254, 1)
			}
		}

		.third-party-login {
			margin: 0 auto;
			margin-top: 53px;
			width: 80%;

			.text {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				font-weight: 400;
				color: rgba(105, 105, 108, 1);
			}

			.sign-in-with {
				display: flex;
				justify-content: space-around;
				margin-top: 14px;

				image {
					width: 54px;
					height: 54px;
				}
			}
		}
	}
</style>