<template>
	<view class="container">
		<view class="banner-box">
			<view>全部</view>
			<view>待处理</view>
			<view>已完成</view>
			<view>已取消</view>
		</view>

		<view class="search">

			<text class="placeholder">订单号搜索</text>
		</view>
		<view class="order-detail">
			<text>订单状态：取件成功</text><br>
			<text>预约时间：2023-03-12 8：00-9：00</text><br>
			<text class="order-time">下单时间：2023-03-12 8：43：10</text>
			<view class="order-number">
				订单号：188888888
			</view>
			<view class="footer-banner">
				<view>修改</view>
				<view>详情</view>
				<view>取消</view>
				<view>联系</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList: {}
			};
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.container {
		width: 100vw;
		background-color: rgba(245, 245, 245, 1);
		display: flex;
		flex-direction: column;
		align-items: center;

		.banner-box {
			width: 100vw;
			display: flex;
			flex-direction: row;
			justify-content: center;
			background-color: #fff;
			// margin-bottom: 10px;

			view {
				width: 187.5rpx;
				height: 40px;
				text-align: center;
			}
		}

		.search {
			width: 692rpx;
			height: 40px;
			border-radius: 100px;
			background-color: #fff;
			margin-top: 16px;
			display: flex;
			align-items: center;

			.placeholder {
				font-size: 14px;
				color: rgba(183, 183, 183, 1);
			}
		}

		.order-detail {
			width: 692rpx;
			height: 175px;
			padding: 21px 0px 10px 15px;
			background-color: #fff;
			margin-top: 16px;

			.footer-banner {
				display: flex;
				flex-direction: row;

				view {
					text-align: center;
					width: 187.5rpx;
				}
			}
		}
	}
</style>