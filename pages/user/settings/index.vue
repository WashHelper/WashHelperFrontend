<template>
	<view class="container">
		<text class="title">设置</text>
		<section class="list-box">
			<view class="avatar">
				<text>头像</text>
				<image src="@/static/user-order-index/avatar.png" mode="aspectFit"></image>
			</view>
			<div-line></div-line>
			<view class="user-name">
				<text>用户名</text>
				<view class="right">
					<text>微信用户</text>
					<uni-icons type="forward" size="20" color="rgba(207, 207, 207, 1)"></uni-icons>
				</view>

			</view>
			<div-line></div-line>
			<view class="change-number">
				<text>手机号修改</text>
				<view class="right">
					<text>18888888</text>
					<uni-icons type="forward" size="20" color="rgba(207, 207, 207, 1)"></uni-icons>
				</view>
			</view>
			<div-line></div-line>
			<view class="address" @click="gotoaddress">
				<text>地址管理</text>
				<view class="right">
					<uni-icons type="forward" size="20" color="rgba(207, 207, 207, 1)"></uni-icons>
				</view>
			</view>
			<div-line></div-line>
		</section>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			gotoaddress() {
				uni.navigateTo({
					url: '/pages/user/settings/address'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		position: relative;
		padding-top: 2.76vh;

		.title {
			margin-top: 2.76vh;
			font-size: 18px;
			margin-left: 3.85vw;
			letter-spacing: 0px;
			line-height: 0px;
		}

		.list-box {
			display: flex;
			flex-direction: column;
			width: 87.95vw;
			margin: 15px auto;
			height: 30.5vh;
			padding: 7px 0px 19px 17px;
			border-radius: 10px;
			background: rgba(255, 255, 255, 1);

			.avatar {
				width: 100%;
				height: 73px;
				display: flex;
				flex-direction: row;
				align-items: center;
				position: relative;

				text {
					// font-size: 16px;
					line-height: 24px;
				}

				image {
					position: absolute;
					width: 60px;
					height: 60px;
					right: 4.87vw;
				}
			}

			.user-name {
				width: 100%;
				height: 7.73vh;
				display: flex;
				flex-direction: row;
				align-items: center;

				.right {
					position: absolute;
					right: 8.7vw;
					// line-height: 22px;
					line-height: 7.73vh;
					color: rgba(0, 0, 0, 0.5);

					uni-icons {
						margin-top: 29px;
					}
				}
			}

			.change-number {
				width: 100%;
				height: 7.73vh;
				display: flex;
				flex-direction: row;
				align-items: center;

				.right {
					position: absolute;
					right: 8.7vw;
					line-height: 22px;
					color: rgba(0, 0, 0, 0.5);
				}
			}

			.address {
				width: 100%;
				height: 7.73vh;
				display: flex;
				flex-direction: row;
				align-items: center;

				.right {
					display: flex;
					justify-content: flex-end;
					line-height: 24px;
				}
			}
		}
	}
</style>