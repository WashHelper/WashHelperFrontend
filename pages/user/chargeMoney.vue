<template>
	<view class="container">
		<view class="banner">
			充值中心
		</view>
		<view class="card-box">
			<vip-card></vip-card>
			<silver-card></silver-card>
			<gold-card></gold-card>
		</view>
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
			background-color: #fff;
			height: 40px;
			text-align: center;
		}

		.card-box {
			margin-top: 16px;
		}
	}
</style>