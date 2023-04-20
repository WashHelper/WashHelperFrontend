<template>
	<view class="card-container">
		<view class="banner">
			<view v-for="(item,index) in bannerlist" :key="index" :index="index" :class="[index===active?'active':'']"
				@click="activeChange(index)">{{item.text}}</view>
			<!-- <view class="">{{item.text}}</view>
			<view class="">已用劵</view>
			<view class="">过期劵</view> -->
		</view>
		<section class="card-box" v-if="active==0">
			<vip-card warn="每年最低可省150元!" msg="已支付：99元" time="2023/3/25-2024/3/25"></vip-card>
			<silver-card msg="余额：124元"></silver-card>
		</section>
		<section class="coupon-box" v-if="active==1">
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
				active: 0,
				bannerlist: [{
					id: 0,
					text: '卡包'
				}, {
					id: 1,
					text: '未用劵'
				}, {
					id: 2,
					text: '已用劵'
				}, {
					id: 3,
					text: '过期劵'
				}]
			};
		},
		methods: {
			activeChange(index) {
				this.active = index
			}
		}
	}
</script>

<style lang="scss">
	.card-container {
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		height: 100vh;
		overflow: visible;

		.banner {
			width: 100vw;
			height: 40px;
			display: flex;
			// flex-direction: row;
			// align-items: center;
			// justify-content: center;
			background: rgba(255, 255, 255, 1);

			view {
				width: 25vw;
				font-size: 13px;
				text-align: center;
				color: rgba(163, 163, 163, 1);
			}

			.active {
				color: rgba(87, 182, 230, 1);
			}
		}

		.card-box {
			// width: 100vw;
			// padding-left: 6.4vw;
			// padding-right: 6.4vw;
			margin-top: 16px;

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
				background: linear-gradient(90deg, rgba(255, 179, 28, 1) 0%, rgba(184, 217, 255, 0.65)100%);
			}

			.repair {
				background: linear-gradient(90deg, rgba(255, 179, 28, 1) 0%, rgba(219, 219, 99, 0.65) 100%);
			}

			.wash-colthes {
				background: linear-gradient(90deg, rgba(255, 179, 28, 1) 0%, rgba(184, 217, 255, 0.65) 100%);
			}

			.newcomer {
				background: linear-gradient(90deg, rgba(255, 179, 28, 1) 0%, rgba(219, 219, 99, 0.65) 100%);
			}

			.pull-people {
				background: linear-gradient(90deg, rgba(255, 179, 28, 1) 0%, rgba(187, 99, 219, 0.65)100%);
			}
		}

		.footer {
			color: rgba(179, 179, 179, 1);
			font-size: 12px;
			position: absolute;
			bottom: 78px;
		}
	}
</style>