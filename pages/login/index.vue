<template>
	<view class="login-section">
		<view class="title">
			<text>欢迎来到洗笑颜开！</text>
		</view>
		<view class="input-wrapper">
			<view class="phoneNum">
				<text>手机号码</text>
				<input type="text" placeholder="请输入手机号码" placeholder-class="placeholder">
			</view>
			<view>
				<text>验证码</text>
				<view class="verification-code">
					<input type="text" placeholder="请输入验证码" placeholder-class="placeholder">
					<text @click="getCaptcha">获取验证码</text>
				</view>
			</view>
			<view class="password">
				<text>设置密码</text>
				<input type="password" placeholder="请输入密码" placeholder-class="placeholder">
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
				<image src="/static/login/qq.png" mode="" @click="quickLogin"></image>
				<image src="/static/login/vx.png" mode="" @click="quickLogin"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			getCaptcha() {
				// this.$axios.getCaptcha('123123123')
			},
			handleRegister() {
				uni.navigateTo({
					url: '/pages/index/index'
				})
			},
			quickLogin() {
				console.log(123123);
				uni.navigateTo({
					url: '/pages/login/quickLogin'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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
