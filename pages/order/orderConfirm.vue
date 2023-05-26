<template>
	<view class="container">
		<view class="top">
			<view class="clock">
				<image src="../../static/order/clock.png" mode=""></image>
				<view class="time">
					<text>付款倒计时</text>&nbsp;<text class="remain">{{remainingMin}}:{{remainingSec}}</text>
				</view>
				<view class="description">
					<text>订单将在倒计时结束后自动取消</text>
				</view>
			</view>
		</view>
		<view class="item">
			<view class="address">
				<view class="address-container">
					<view class="name-number">
						<view class="name">张三</view>
						<view class="phone">1888888</view>
					</view>
					<view class="address-detail">
						<image class="location-icon" src="@/static/user-address/address-icon.png" mode="aspectFit">
						</image>
						<view class="box">
							<!-- 省市县 -->
							<view class="area">
								江苏省 南京市 栖霞区
							</view>
							<!-- 具体地址 -->
							<view class="location">
								仙林街道 文苑路
							</view>
						</view>
					</view>
					<view class="choice">
						<view class="left">
							<view class="edit">编辑</view>
							<view class="delete">删除</view>
						</view>
						<view class="default" @click="changeIcon()">
							<view class="text">设为默认</view>
							<uni-icons :type="icon" size="20"></uni-icons>
						</view>
					</view>
				</view>
			</view>
			<view class="pay">
				<view class="cancel">取消订单</view>
				<view class="total">
					<text>合计</text>
					<text class="money">￥{{totalFee}}</text>
				</view>
				<button @click="payment">支付</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalFee: '',
				isDefault: false,
				remainingTime: Math.ceil(3000 / 1000)
			}
		},
		computed: {
			icon() {
				if (this.isDefault) return 'checkbox-filled'
				return 'checkbox'
			},
			remainingMin() {
				let min = Math.floor(this.remainingTime / 60)
				return String(min).padStart(2, '0')
			},
			remainingSec() {
				let sec = Math.floor(this.remainingTime % 60)
				return String(sec).padStart(2, '0')
			}
		},
		async onLoad() {
			const {
				orderNumber,
				totalFee,
				remark
			} = uni.getStorageSync('orderInfo')
			this.totalFee = totalFee

			const orderInfo = {
				orderNumber,
				totalFee,
				description: '洗鞋宝-订单支付',
				remark
			}

			let {
				data
			} = await this.$axios.prePay(orderInfo)
			this.timeCutDown()
		},
		methods: {
			timeCutDown() {
				let timer = setTimeout(h => {
					if (this.remainingTime > 0) {
						this.remainingTime--
						this.timeCutDown()
					} else {
						this.remainingTime = 0;
						uni.showModal({
							title: '支付已超时，请重新下单',
							showCancel: false,
							confirmText: '确定',
							confirmColor: '#ffcf0e',
							success: (result) => {
								if (result.confirm) {
									uni.navigateBack({
										delta: 1
									});
								}
							},
						});
					}
				}, 1000)
			},
			payment() {

			},
			modify(item) {},
			changeIcon() {
				this.isDefault = !this.isDefault
			},
		}
	};
</script>

<style scoped lang="scss">
	.top {
		margin-bottom: 61.32upx;
	}

	.top .clock {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 113.89upx;
		font-size: 20px;
		font-weight: bold;
	}

	.top .clock image {
		width: 117.39upx;
		height: 117.39upx;
		margin-bottom: 28.03upx;
	}

	.remain {
		color: rgba(255, 207, 14, 1);
	}

	.description {
		margin-top: 14.03upx;
		color: rgba(130, 130, 130, 1);
		font-size: 24.53upx;
	}

	.address-container {
		width: 342px;
		border-radius: 10px;
		background: rgba(255, 255, 255, 1);
		padding: 6px 8px 9px 10px;
		margin: 0px auto;

		.name-number {
			margin-top: 6px;
			display: flex;
			// flex-direction: row;
			height: 21px;
			font-size: 12px;

		}

		.address-detail {
			width: 100%;
			height: 27px;
			margin-top: 13px;
			border-bottom: 1px solid rgba(235, 236, 237, 1);
			display: flex;
			flex-direction: row;
			align-items: center;

			.location-icon {
				width: 10.74px;
				height: 12.97px;
				margin-left: 4px;
			}

			.box {
				height: 21px;
				font-size: 12px;
				margin-left: 7.26px;
				display: flex;
				flex-direction: row;
			}
		}

		.choice {
			display: flex;
			flex-direction: row;
			margin-top: 11px;
			height: 21px;
			font-size: 12px;
			justify-content: space-around;

			.left {
				display: flex;
				flex-direction: row;

				.edit {
					width: 53px;
					height: 21px;
				}

				.delete {
					width: 53px;
					height: 21px;
					margin-left: -7px;
				}

			}

			.default {
				right: 1px;
				display: flex;
				align-items: center;

				.text {
					font-size: 12px;
				}
			}
		}
	}

	.pay {
		box-sizing: border-box;
		padding: 0 45.55upx 0 52.56upx;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 198upx;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.pay .cancel {
		color: rgba(145, 145, 145, 1);
		font-size: 31.54upx;
	}

	.pay button {
		margin: 0;
		width: 194.23rpx;
		height: 57.69rpx;
		border: transparent;
		border-radius: 19.23rpx;
		background: linear-gradient(223.13deg, rgba(87, 182, 230, 1) 0%, rgba(141, 242, 234, 0.5) 90.99%, rgba(247, 247, 193, 0.01) 100%);
		font-size: 26.92rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 57.69rpx;
		color: rgba(255, 255, 255, 1);

	}

	.total .money {
		color: rgba(255, 195, 0, 1);
	}
</style>