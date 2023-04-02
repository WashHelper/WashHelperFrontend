<template>
	<view class="detail-container">
		<view class="text-box">
			<view class="serial-number">
				<text>订单详情：</text>
				<view class="number">2020202</view>
			</view>
			<view class="get-address">
				<text class="title">地址信息</text>
				<view class="get-clothes" style="margin-top: 2px;">
					<text class="title">取衣地址</text><br>
					<text class="name-number">王二 188888</text><br>
					<text class="address">南京邮电大学仙林校区文苑路9号学</text>
				</view>

				<view class="send-clothes">
					<text class="title">送衣地址</text><br>
					<text class="name-number">王二 188888</text><br>
					<text class="address">南京邮电大学仙林校区文苑路9号</text>
				</view>
			</view>
		</view>
		<!-- 订单详情 -->
		<section class="detail-body">
			<view class="title">
				<text>订单详情</text>
				<view class="item-num">共1件</view>
			</view>
			<div-line></div-line>
			<!-- 衣服类型和图片 -->
			<view class="item-detail">
				<image src="@/static/order-detail/Artboard.png" mode="aspectFit"></image>
				<!-- 衣服类型和价格 -->
				<view class="type-container">
					<text class="clothes-type">西服</text>
					<view class="price">洗涤费：25</view>
				</view>
			</view>
			<div-line></div-line>
			<!-- 衣服价格的大盒子 -->
			<view class="price-container">
				<view class="wash-care">
					<text>洗护费</text>
					<text class="number">25</text>
				</view>
				<view class="packing">
					<text>包装费</text>
					<text class="number">0</text>
				</view>
				<view class="transport">
					<text>运费</text>
					<text class="number">0</text>
				</view>
				<view class="discounts">
					<text>优惠劵</text>
					<text class="number">-0</text>
				</view>
				<view class="total">
					<text>合计</text>
					<text class="number">25</text>
				</view>
				<!-- 下单时间 -->
				<view class="time">下单时间：2023-03-14 09：03：55</view>
			</view>
			<!-- 联系客服 -->
			<view class="call-service">
				<text>联系客服</text>
				<view class="call">
					18888888
				</view>
			</view>
		</section>
	</view>
</template>

<script>

</script>

<style lang="scss">
	.detail-container {
		width: 100vw;
		background-color: rgba(245, 245, 245, 1);
		display: flex;
		flex-direction: column;
		align-items: center;

		.text-box {
			padding: 2px 0px 0px 10px;
			width: 89.7vw;
			background-color: #fff;
			margin-top: 11px;
			border-radius: 10px;
			font-size: 12px;

			.serial-number {
				line-height: 19px;
				font-weight: 500;
				display: flex;

				.number {
					color: rgba(133, 131, 131, 1);
					font-size: 12px;
					font-weight: 400;
				}
			}

			.get-address {
				margin-top: 2px;
				text-align: 19px;

				.title {
					line-height: 19px;
					font-weight: 500;
				}

				.name-number,
				.address {
					line-height: 19px;
					color: rgba(133, 131, 131, 1);
				}

				.address {
					padding-bottom: 8px;
				}

				.get-clothes,
				.send-clothes {
					height: 65px;
				}

			}
		}

		.detail-body {
			width: 89.74vw;
			height: 345px;
			background-color: #fff;
			border-radius: 10px;
			margin-top: 16px;
			padding: 11px 0px 15px 10px;

			.title {
				margin-left: 19.2rpx;
				display: flex;
				flex-direction: row;
				font-size: 12px;
				position: relative;
				font-weight: 500;

				text {

					font-weight: 400;
					line-height: 18px;

				}

				.item-num {
					line-height: 18px;
					// position: absolute;
					// left: 79.487vw;
					width: 12.8vw;
					position: absolute;
					right: 0px;
				}
			}

			.item-detail {
				display: flex;
				flex-direction: row;
				padding: 7px 0px 24px 12px;

				image {
					width: 16.15vw;
					height: 72.31px;
				}

				.type-container {
					width: 100%;
					display: flex;
					flex-direction: row;
					margin-top: 16px;
					position: relative;

					.clothes-type {
						margin-left: 36.5rpx;
						font-size: 13px;
						font-weight: 500;
					}

					.price {
						font-size: 12px;
						color: rgba(133, 131, 131, 1);
						position: absolute;
						right: 0px;
					}
				}
			}

			.price-container {
				padding: 16px 0px 10px 12px;
				position: relative;
				font-size: 12px;
				font-weight: 500;

				&>view {
					height: 24px;
					vertical-align: top;
				}

				.number {
					position: absolute;
					left: 79.23vw;
				}

				.time {
					font-size: 10px;
					color: rgba(133, 131, 131, 1);
					height: 19px;
				}
			}

			.call-service {
				text-align: center;

				text {
					font-size: 12px;
					line-height: 19px;
				}

				.call {
					font-size: 12px;
					font-weight: 400;
					height: 13px;
					color: rgba(133, 131, 131, 1);
				}
			}
		}
	}
</style>