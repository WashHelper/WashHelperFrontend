<template>
	<view class="card VIP">
		<header>
			<view class="card-type ">VIP卡</view>
			<view class="warn">每年最低可省150元！</view>
			<view class="money">已支付99元</view>
		</header>
		<footer>
			<view class="first-charge">
				首充赠20元代金券
			</view>
			<view class="discount">
				洗护享7.5折
			</view>
			<view class="time">
				有效期：2023/3/25-2024/3/25
			</view>
		</footer>
	</view>
</template>

<script>
	export default {
		name: "vip-card",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.card {
		width: 87.1vw;
		// height: 175px;
		height: 154px;
		border-radius: 10px;
		margin-bottom: 16px;

		header {
			top: 10px;
			position: relative;
			height: 50%;

			.card-type {
				height: 22px;
				margin-left: 23px;
				font-size: 16px;
				color: rgba(161, 149, 108, 1);
			}


			.warn {

				height: 22px;
				margin-left: 23px;
				font-size: 14px;
				line-height: 0px;
				margin-top: 8px;
				color: rgba(255, 99, 99, 0.9);
			}

			.money {
				position: absolute;
				right: 15px;
				top: 0px;
				font-size: 14px;
				color: rgba(255, 245, 207, 1);
			}

		}

		footer {
			height: 50%;
			position: relative;
			margin-top: 11px;

			.first-charge {
				font-size: 14px;
				color: rgba(161, 149, 108, 1);
				margin-left: 23px;
			}

			.discount {
				margin-left: 23px;
				font-size: 14px;
				margin-top: 10px;
				color: rgba(255, 245, 207, 1);
			}

			.time {
				position: absolute;
				color: rgba(255, 245, 207, 1);
				font-size: 12px;
				right: 14px;
				bottom: 42px;
				line-height: 0px;
			}
		}
	}


	.VIP {
		background: linear-gradient(135.87deg, rgba(240, 255, 217, 1) 0.56%, rgba(12, 162, 199, 0.39) 61.39%,
				rgba(137, 145, 42, 0.01) 100%);
	}
</style>