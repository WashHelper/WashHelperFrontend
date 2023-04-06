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
		<view class="text2">
			<text>感谢您对洗笑颜开的支持!</text>
		</view>

	</view>
</template>

<script>
	export default {
		methods: {
			viewOrder() {
				uni.navigateTo({
					url: '/pages/order/index'
				})
			},
			returnIndex() {
				uni.navigateTo({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.purchase {
		padding: 20px 15px;

		image {
			width: 100%;
		}

		.text1 {
			margin: 0 auto;
			padding: 15px 10px;
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
			margin-top: 20px;

			button {
				color: rgba(145, 145, 145, 1);
				font-size: 12px;
				width: 76px;
				height: 23px;
				border-radius: 10px;
				line-height: 23px;
				border: transparent;
				background: rgba(255, 255, 255, 1);
			}
		}

		.text2 {
			margin: 0 auto;
			padding: 70px 10px;
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