<template>
	<view class="container">
		<text class="text">地址管理</text>
		<view class="address-container">
			<view class="name-number">
				<text>张三</text>
				<text>1888888</text>
			</view>
			<view class="address-detail">
				<image class="location" src="@/static/user-address/address-icon.png" mode="aspectFit"></image>
				<text>江苏省 南京市 栖霞区 仙林街道 文苑路</text>
				<div-line></div-line>
			</view>
			<view class="choice">
				<view class="edit">编辑</view>
				<view class="delete">删除</view>
				<view class="default">设为默认</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.container {
		width: 100vw;
		padding: 10px 3.8vw 0px;

		.text {
			font-size: 18px;
			font-weight: 400;
			letter-spacing: 0px;
			line-height: 0px;
			height: 35px;
		}

		.address-container {
			width: 92.3vw;
			// height: 108px;
			border-radius: 10px;
			background: rgba(255, 255, 255, 1);
			padding: 6px 8px 9px 10px;
			margin-top: 15px;

			.name-number {

				height: 21px;

				text {
					font-size: 12px;
					font-weight: 400;
					letter-spacing: 0px;
					line-height: 0px;

					&:first-child {
						width: 69px;
						height: 21px;
						font-size: 12px;
						line-height: 0px;
					}

					&:nth-child(2) {
						margin-left: 11px;
						width: 185px;
						height: 21px;
						line-height: 0px;
					}
				}
			}

			.address-detail {
				width: 100%;
				margin-top: 15px;


				.location {
					width: 10.74px;
					height: 12.97px;
					margin-left: 4px;
				}

				text {
					height: 21px;
					font-size: 12px;
					line-height: 0px;
					margin-left: 7.26px;
				}
			}

			.choice {
				display: flex;
				flex-direction: row;
				margin-top: 11px;
				height: 21px;
				font-size: 12px;
				margin-bottom: 6px;
				position: relative;

				.edit {
					width: 53px;
					height: 21px;
				}

				.delete {
					width: 53px;
					height: 21px;
					margin-left: 7px;
				}

				.default {
					position: absolute;
					right: 1px;
				}
			}
		}
	}
</style>