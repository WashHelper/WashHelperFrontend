<template>
	<view class="purchase">
		<view class="image-wrapper">
			<image src="../../static/logo.png" mode=""></image>
		</view>
		<view class="text1">
			<text>下单成功！</text>
		</view>
		<view class="button-wrapper">
			<button @click="viewOrder">查看订单</button>
			<button @click="returnIndex">返回首页</button>
		</view>
		<!-- <view class="text2">
			<text>感谢您对洗笑颜开的支持!</text>
		</view> -->
	</view>
</template>

<script>
	export default {
		methods: {
			viewOrder() {
				uni.switchTab({
					url: '/pages/order/index'
				})
			},
			returnIndex() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.purchase {
		padding: 38rpx 29rpx;

		image {
			width: 100%;
		}

		.text1 {
			margin: 0 auto;
			padding: 42rpx 0;
			width: 90%;

			text {
				display: block;
				font-weight: 400;
				text-align: center;
				font-size: 12px;
				color: rgba(0, 0, 0, 1);
			}
		}

		.button-wrapper {
			display: flex;
			justify-content: space-around;
			margin-top: 42rpx;

			button {
				color: rgba(145, 145, 145, 1);
				font-size: 12px;
				width: 140rpx;
				height: 44rpx;
				border-radius: 10px;
				line-height: 44rpx;
				border: transparent;
				background: rgba(255, 255, 255, 1);
				padding: 0rpx 11rpx;
			}
		}

		.text2 {
			margin: 0 auto;
			padding: 137rpx 0px;
			width: 90%;

			text {
				display: block;
				font-weight: 400;
				text-align: center;
				font-size: 12px;
				color: rgba(0, 0, 0, 1);
			}
		}

	}
</style>