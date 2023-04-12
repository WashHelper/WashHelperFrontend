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
		<footer class="footer">
			<text>{{totalprice}}</text>
			<button @click="charge()" class="btn">支付</button>
		</footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalprice: '0元',
				cardList: [{
					id: 0,
					type: 'VIP',
					price: '99元'
				}, {
					id: 1,
					type: 'silver',
					price: '150元'
				}, {
					id: 2,
					type: 'gold',
					price: '300元'
				}]
			};
		},
		methods: {
			charge() {
				//没想好
			}
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

		.footer {
			position: fixed;
			bottom: 0px;
			width: 100%;
			height: 45px;
			background-color: #fff;
			display: flex;
			flex-direction: row;
			align-items: center;

			text {
				margin-left: 53.59vw;
				color: rgba(255, 195, 0, 1);
			}

			.btn {
				width: 101px;
				height: 30px;
				background: linear-gradient(223.13deg, rgba(87, 182, 230, 1) 0%, rgba(141, 242, 234, 0.5) 90.99%, rgba(247, 247, 193, 0.01) 100%);
				display: flex;
				font-size: 14px;
				justify-content: center;
				align-items: center;
				color: rgba(255, 255, 255, 1);
			}
		}
	}
</style>