<template>
	<view class="container">
		<text class="text">地址管理</text>
		<view class="address-container" @click="changeicon()">
			<view class="name-number">
				<text>张三</text>
				<text>1888888</text>
			</view>
			<view class="address-detail">
				<image class="location" src="@/static/user-address/address-icon.png" mode="aspectFit"></image>
				<text>江苏省 南京市 栖霞区 仙林街道 文苑路</text>
				<!-- <div-line></div-line> -->
			</view>
			<view class="choice">
				<view class="edit">编辑</view>
				<view class="delete">删除</view>
				<view class="default">
					<view class="text">设为默认</view>
					<uni-icons :type="icon" size="20"></uni-icons>
				</view>
			</view>
		</view>

		<button>增添新地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icon: 'checkbox',
				clickedicon: 'checkbox-filled'
			};
		},
		methods: {
			changeicon() {
				this.icon = this.clickedicon
			}
		}
	}
</script>

<style lang="scss">
	.container {
		width: 100vw;
		padding-top: 10px;

		.text {
			font-size: 18px;
			font-weight: 400;
			letter-spacing: 0px;
			line-height: 0px;
			margin-left: 15px;
		}

		.address-container {
			width: 92.3vw;
			// height: 108px;
			border-radius: 10px;
			background: rgba(255, 255, 255, 1);
			padding: 6px 8px 9px 10px;
			margin: 15px auto;

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
				height: 27px;
				margin-top: 15px;
				border-bottom: 1px solid rgba(235, 236, 237, 1);

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
					display: flex;
					align-items: center;

					.text {
						font-size: 12px;
					}
				}
			}
		}

		button {
			width: 228px;
			height: 35px;
			border-radius: 10px;
			background: linear-gradient(223.13deg, rgba(87, 182, 230, 1) 0%, rgba(141, 242, 234, 0.5) 90.99%, rgba(247, 247, 193, 0.01) 100%);
			color: rgba(255, 255, 255, 1);
			text-align: center;
		}
	}
</style>