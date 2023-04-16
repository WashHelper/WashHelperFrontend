<template>
	<view class="pickupAddress-section">
		<text class="text1">送回地址</text>

		<view class="input-wrapper">

			<view class="main-item">
				<text>联系人</text>
				<input type="text" placeholder="请输入姓名" placeholder-class="placeholder" class="input1">
			</view>
			<view class="main-item">
				<text>联系方式</text>
				<input type="text" placeholder="请输入电话" placeholder-class="placeholder">
			</view>
			<view class="main-item">
				<text>送回方式</text>
				<input type="text" placeholder="送回网点/上门配送" placeholder-class="placeholder" @click="shareToggle">
			</view>
			<view class="main-item">
				<text>网点选择</text>
				<input type="text" placeholder="请选择服务网点" placeholder-class="placeholder">
			</view>
			<view class="main-item">
				<text>详细地址</text>
				<input type="text" placeholder="请填写具体地址" placeholder-class="placeholder">
			</view>
			<view class="default">
				<text>设为默认</text>
				<img src="../../static/order-pickup/choose.png" alt="">
			</view>

		</view>
		<button @click="handleRegister">注册并登录</button>


		<view>

		</view>

	</view>
</template>

<script>
	export default {
		methods: {
			shareToggle() {
			
				
				
				
				
				
				
				
				
				
				
			},
		}
	}
</script>
<style lang="scss" scoped>
	.pickupAddress-section {
		padding: 38rpx 29rpx;


		.text1 {

			text {
				font-size: 34.62px;
				font-weight: 400;
				letter-spacing: 0px;
				line-height: 0px;
				color: rgba(0, 0, 0, 1);
			}
		}

		.input-wrapper {
			padding: 2rpx;
			margin-top: 27rpx;
			width: 692rpx;
			height: 642rpx;
			border-radius: 10px;
			background: rgba(255, 255, 255, 1);

			text {
				font-size: 30.77rpx;
				font-weight: 400;
				color: rgba(0, 0, 0, 0.9);
				line-height: 108rpx;
			}

			input {
				margin-top: 10px;
				width: 330rpx;
				height: 26px;
			}

			.main-item {
				width: 629rpx;
				height: 108rpx;
				border-bottom: 1.92rpx solid rgba(0, 0, 0, 0.04);
				margin: 0 auto;

				text {
					float: left;
				}

				input {
					float: left;
					padding: 8rpx 71rpx;
				}

				.input1 {
					margin-left: 30rpx;
				}


				.placeholder {
					font-size: 26.92rpx;
					font-weight: 400;
					letter-spacing: 0px;
					line-height: 42.31px;
					color: rgba(0, 0, 0, 0.3);
				}
			}

			.default {
				text {
					float: left;
					font-size: 23.08rpx;
					margin-left: 520rpx;
					margin-top: -12rpx;
					color: rgba(0, 0, 0, 1);
				}

				img {
					float: right;
					width: 30.77rpx;
					margin-right: 29rpx;
					margin-top: 27rpx;
				}
			}
		}

		button {
			width: 438rpx;
			height: 67rpx;
			border: transparent;
			font-size: 34.62rpx;
			line-height: 67rpx;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
			border-radius: 19.23rpx;
			background: linear-gradient(223.13deg, rgba(87, 182, 230, 1) 0%, rgba(141, 242, 234, 0.5) 90.99%, rgba(247, 247, 193, 0.01) 100%);
			margin-top: 31rpx;
		}


	}
</style>