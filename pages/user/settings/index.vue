<template>
	<view class="container">
		<text>设置</text>
		<section class="list-box">
			<view class="avatar">
				<text>头像</text>
				<image src="@/static/user-order-index/avatar.png" mode="aspectFit"></image>
			</view>
			<div-line></div-line>
			<view class="user-name">
				<text>用户名</text>
				<text>微信用户</text>
			</view>
			<div-line></div-line>
			<view class="change-number">
				<text>手机号修改</text>
				<text>18888888</text>
			</view>
			<div-line></div-line>
			<view class="address">
				<text>地址管理</text>
			</view>
		</section>
	</view>
</template>

<script></script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		position: relative;

		text {
			margin-top: 10px;
			margin-left: 15px;
			font-size: 18px;
			font-weight: 400;
			letter-spacing: 0px;
			line-height: 0px;
		}

		.list-box {
			width: 360px;
			height: 264px;
			margin: 15px auto 0px;
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
					right: 19px;
				}
			}

			.user-name {
				width: 100%;
				height: 56px;
				display: flex;
				flex-direction: row;
				align-items: center;

				text:nth-child(2) {
					position: absolute;
					right: 19px;
					line-height: 22px;
					color: rgba(0, 0, 0, 0.5);
				}
			}

			.change-number {
				width: 100%;
				height: 56px;
				display: flex;
				flex-direction: row;
				align-items: center;

				text:nth-child(2) {
					position: absolute;
					right: 19px;
					line-height: 22px;
					color: rgba(0, 0, 0, 0.5);
				}
			}

			.address {
				width: 100%;
				height: 76px;
				margin-top: 16px;

				text {
					line-height: 24px;
					// font-size: 16px;

				}
			}
		}
	}
</style>