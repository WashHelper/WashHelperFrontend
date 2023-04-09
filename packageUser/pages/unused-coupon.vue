<template>
	<view class="container">
		<view class="banner">
			<view>卡包</view>
			<view class="">未用劵</view>
			<view class="">已用劵</view>
			<view class="">过期劵</view>
		</view>
		<section class="coupon-box">
			<view class="Washcare coupon">
				<text>会员首充赠送鞋类洗护劵</text>
				<text>2元*5张</text>
				<view class="time">
					有效期：2023/4/23-2023/5/23
				</view>
			</view>
			<view class="repair coupon">
				<text>会员首充赠送鞋类修护劵</text>
				<text>5元</text>
				<view class="time">
					有效期：2023/4/23-2023/5/23
				</view>
			</view>
			<view class="wash-colthes coupon">
				<text>会员首充赠送衣物洗护劵</text>
				<text>2.5元*5张</text>
				<view class="time">
					有效期：2023/4/23-2023/5/23
				</view>
			</view>
			<view class="newcomer coupon">
				<text>新人专属福利劵</text>
				<text>10元</text>
				<text>注册即享</text>
				<view class="time">
					有效期：2023/4/23-2023/5/23
				</view>
			</view>
			<view class="pull-people coupon">
				<text>会员首充赠送衣物洗护劵</text>
				<text>2元</text>
				<view class="time">
					有效期：2023/4/23-2023/5/23
				</view>
			</view>
		</section>
		<footer class="footer">
			<text>支付时优惠券不可叠加使用<br>最终解释权归洗笑颜开所有</text>
		</footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.container {
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;

		.banner {
			width: 100vw;
			height: 40px;
			display: flex;
			flex-direction: row;
			align-items: center;
			// justify-content: center;
			background: rgba(255, 255, 255, 1);

			view {
				width: 25vw;
				font-size: 13px;
				text-align: center;
				color: rgba(163, 163, 163, 1);
			}
		}

		.coupon-box {
			// width: 100vw;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 15px 25px 0px;

			.coupon {
				margin-bottom: 16px;
				border-radius: 30px;
				height: 53px;
				width: 289px;
				padding: 9px 24px 7px 27px;

				text {
					font-size: 14px;
					color: rgba(255, 255, 255, 1);

					&:nth-child(2) {
						margin-left: 68px;
					}
				}

				.time {
					font-size: 12px;
					height: 22px;
					margin-top: 8px;
					// line-height: 0px;
					color: rgba(255, 245, 207, 1);
				}
			}

			.Washcare {
				background: linear-gradient(90deg, rgba(255, 179, 28, 1) 0%, rgba(184, 217, 255, 0.65) 62.03%, rgba(181, 255, 254, 0.01) 100%);
			}

			.repair {
				background: linear-gradient(90deg, rgba(255, 179, 28, 1) 0%, rgba(219, 219, 99, 0.65) 62.03%, rgba(181, 255, 254, 0.01) 100%);
			}

			.wash-colthes {
				background: linear-gradient(90deg, rgba(255, 179, 28, 1) 0%, rgba(184, 217, 255, 0.65) 62.03%, rgba(181, 255, 254, 0.01) 100%);
			}

			.newcomer {
				background: linear-gradient(90deg, rgba(255, 179, 28, 1) 0%, rgba(219, 219, 99, 0.65) 62.03%, rgba(181, 255, 254, 0.01) 100%);
			}

			.pull-people {
				background: linear-gradient(90deg, rgba(255, 179, 28, 1) 0%, rgba(187, 99, 219, 0.65) 62.03%, rgba(181, 255, 254, 0.01) 100%);
			}
		}

		.footer {
			color: rgba(179, 179, 179, 1);
			font-size: 12px;
			position: absolute;
			bottom: 33px;
		}
	}
</style>