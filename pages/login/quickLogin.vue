<template>
	<view class="quick-login">
		<view class="image-wrapper">
			<image src="../../static/logo.png" mode=""></image>
		</view>
		<view class="text">
			<text>申请获得以下权限：</text>
			<text>您的公开信息（您的昵称、头像等）</text>
		</view>
		<view class="button-wrapper">
			<button @click="handleLogin">授权登录</button>
			<navigator url="">其他方式登录</navigator>
		</view><!--  -->

		<view class="footer">
			<text>授权登录表示您已经同意我们的服务条款</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onShow() {
			// uni.getUserInfo({
			// 	provider: 'weixin',
			// 	success: (infoRes) => {
			// 		let nickName = infoRes.userInfo.nickName; //获取用户登录昵称
			// 		let avatarUrl = infoRes.userInfo.avatarUrl; //获取用户头像
			// 		try {
			// 			uni.setStorageSync('isloading', false); //记录是否第一次授权  false:表示不是第一次授权
			// 		} catch (e) {
			// 			console.log(e);
			// 		}
			// 	},
			// 	fail(err) {
			// 		console.log(err);
			// 	}
			// });
			wx.getUserProfile({
				desc: '获取你的昵称、头像',
				success: res => {
					//本地存储userInfo
					uni.setStorageSync('userInfo', res.userInfo);
					uni.setStorageSync('phonenumber', "请在“个人中心”页面获取");
					wx.showToast({
						title: '登录成功',
						icon: 'success',
						duration: 1000
					});
				},
				fail: res => {}
			});

		},
		methods: {
			handleLogin() {
				wx.login({
					success: (res) => {
						if (res.code) {
							//发起网络请求
							this.$axios.login(res.code)

						} else {
							console.log('登录失败！' + res.errMsg)
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.quick-login {
		padding: 20px 15px;

		image {
			width: 100%;
		}

		.text {
			margin: 0 auto;
			margin-top: 16px;
			padding: 15px 10px;
			width: 90%;
			border-top: 2px solid grey;

			text {
				display: block;
				font-weight: 400;
				text-align: center;

				&:first-of-type {
					font-size: 14px;
					color: rgba(0, 0, 0, 1);
				}

				&:last-of-type {
					margin-top: 16px;
					font-size: 10px;
					color: rgba(166, 166, 166, 1);
				}
			}
		}

		.button-wrapper {
			margin-top: 63px;
			text-align: center;

			button {
				width: 128px;
				height: 35px;
				border: transparent;
				border-radius: 10px;
				line-height: 35px;
				color: white;
				background: linear-gradient(223.13deg, #57B6E6 0%, #8DF2EA 90.99%, #F7F7C1 100%);
			}

			navigator {
				margin-top: 10px;
				font-size: 10px;
				font-weight: 400;
				color: rgba(166, 166, 166, 1);
			}
		}

		.footer {
			margin-top: 183px;
			text-align: center;

			text {
				font-size: 10px;
				font-weight: 400;
				color: rgba(166, 166, 166, 1);
			}
		}
	}
</style>