<template>
	<view class="card-container">
		<view class="banner">
			<view v-for="(item,index) in bannerlist" :key="index" :index="index" :class="[index===active?'active':'']"
				@click="activeChange(index)">{{item.text}}</view>
			<!-- <view class="">{{item.text}}</view>
			<view class="">已用劵</view>
			<view class="">过期劵</view> -->
		</view>
		<section class="card-box">
			<vip-card></vip-card>
			<silver-card></silver-card>
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

		.footer {
			color: rgba(179, 179, 179, 1);
			font-size: 12px;
			position: absolute;
			bottom: 78px;
		}
	}
</style>