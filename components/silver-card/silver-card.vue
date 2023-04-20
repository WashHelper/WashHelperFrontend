<template>
	<view class="card savings">
		<header>
			<view class="card-type ">储蓄银卡</view>
			<view class="money">{{msg}}</view>
		</header>
		<footer>
			<view class="first-charge">
				首充赠30元
			</view>
			<view class="discount">
				额外享受一个月VIP福利待遇
			</view>
		</footer>
	</view>
</template>

<script>
	export default {
		name: "silver-card",
		data() {
			return {

			};
		},
		props: ['msg']
	}
</script>

<style lang="scss">
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

	.savings {
		background: linear-gradient(135.87deg, rgba(225, 235, 237, 1) 0%, rgba(97, 76, 76, 0.2)100%);
	}
</style>