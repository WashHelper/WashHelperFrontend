<template>
	<view class="detail-container">
		<view class="text-box">
			<view class="serial-number">
				<text>订单详情：</text>
				<view class="number">2020202</view>

			</view>
			<text>地址信息</text>
			<view class="get-address">

				<view class="get-clothes">
					<text>取衣地址</text><br>
					<text class="name-number">王二 188888</text><br>
					<text class="address">南京邮电大学</text>
				</view>

				<view class="send-clothes">
					<text>送衣地址</text><br>
					<text class="name-number">王二 188888</text><br>
					<text class="address">南京邮电大学</text>
				</view>
			</view>
		</view>
		<!-- 订单详情 -->
		<section class="detail-body">
			<view class="title">
				<text>订单详情</text>
				<view class="item-num">共1件</view>
			</view>
			<view class="divLine"></view>
			<!-- 衣服类型和图片 -->
			<view class="item-detail">
				<image src="@/static/order-detail/Artboard.png" mode="aspectFit"></image>
				<!-- 衣服类型和价格 -->
				<view class="type-container">
					<text class="clothes-type">西服</text>
					<view class="price">洗涤费：25</view>
				</view>
			</view>
			<view class="divLine"></view>
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
			width: 92.3vw;
			background-color: #fff;
			margin-top: 11px;
			padding-left: 10px;
			border-radius: 10px;

			.serial-number {
				line-height: 19px;
				padding-left: 2px;

				.number {
					display: inline-block;
				}
			}

			.get-address {
				margin-top: 2px;
				text-align: 19px;

				.name-number,
				.address {
					line-height: 19px;
					color: rgba(133, 131, 131, 1);
				}

				.address {
					padding-bottom: 8px;
				}

				.get-clothes,
				.send-clothes {}

			}
		}

		.detail-body {
			width: 92.3vw;
			background-color: #fff;
			border-radius: 10px;
			margin-top: 16px;
			padding: 11px 0px 15px 10px;

			.title {
				// margin-top: 11px;
				margin-left: 19.2rpx;
				display: flex;
				flex-direction: row;
				// line-height: 18px;

				text {
					font-weight: 400;
					line-height: 18px;
				}

				.item-num {
					line-height: 18px;
				}
			}

			.item-detail {
				display: flex;
				flex-direction: row;
				// margin-top: 7px;

				image {
					margin-left: 23rpx;
					width: 16.15vw;
					height: 72.31px;
				}

				.type-container {
					display: flex;
					flex-direction: row;
					margin-top: 16px;

					.clothes-type {
						margin-left: 36.5rpx;
					}
				}
			}

			.divLine {
				width: 83.8vw;
				height: 1px;
				background: #E0E3DA;
				margin: 0px auto;
			}
		}
	}
</style>