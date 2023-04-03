<template>
	<view class="container">
		<view class="banner-box">
			<view>全部</view>
			<view>待处理</view>
			<view>已完成</view>
			<view>已取消</view>
		</view>

		<view class="search">
			<image src="@/static/order-index/search-icon.png" mode="aspectFit"></image>
			<text class="placeholder">订单号搜索</text>
		</view>
		<view class="order-detail" @click="gotodetail">
			<header>
				<text class="text">订单状态：取件成功</text><br>
				<text class="text"> 预约时间：2023-03-12 8：00-9：00</text><br>
				<text class="text">下单时间：2023-03-12 8：43：10</text>
			</header>

			<div-line></div-line>
			<view class="order-number text">
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
			gotodetail() {
				uni.navigateTo({
					url: '/pages/order/detail'
				})
			}
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
			position: sticky;
			width: 100vw;
			display: flex;
			flex-direction: row;
			background-color: #fff;
			// margin-bottom: 10px;

			view {
				width: 25vw;
				height: 40px;
				text-align: center;
				font-size: 13px;
				line-height: 40px;
				font-weight: 400;
			}
		}

		.search {
			width: 89.74vw;
			height: 40px;
			border-radius: 100px;
			background-color: #fff;
			margin-top: 16px;
			display: flex;
			align-items: center;

			image {
				width: 25.14px;
				height: 18.16px;
				margin-left: 5.27%;
				margin-right: 5.27%;
			}

			.placeholder {
				font-size: 14px;
				color: rgba(183, 183, 183, 1);
			}
		}

		.order-detail {
			width: 89.7vw;
			border-radius: 10px;
			height: 175px;
			// padding21px :
			// padding-left: 10px;
			background-color: #fff;
			margin-top: 16px;

			header {
				padding: 16px 0px 17px 10px;

				.text {
					line-height: 28px;
					font-size: 12px;
					font-family: '思源黑体';
				}
			}

			.order-number {
				line-height: 23px;
				margin-bottom: 6px;
				margin-left: 10px;
				font-size: 12px;
			}


			.footer-banner {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;

				view {
					width: 25%;
					text-align: center;
					font-size: 12px;
					color: rgba(105, 105, 105, 1);
				}
			}
		}
	}
</style>