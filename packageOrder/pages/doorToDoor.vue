<template>
	<view class="doorToDoor-section">
		<text class="text1">上门取件</text>
		<view class="input-wrapper">

			<view class="main-item">
				<text>联系人</text>
				<input type="text" placeholder="请输入姓名" placeholder-class="placeholder" class="input1" v-model="contactName">
			</view>
			<view class="main-item">
				<text>联系方式</text>
				<input type="text" placeholder="请输入电话" placeholder-class="placeholder">
			</view>
			<view class="main-item">
				<text>所在地区</text>
				<view class="cover">
					<input type="text" placeholder="请选择省市区" placeholder-class="placeholder" @click="showPopup"
						v-model="selected">
				</view>
			</view>
			<view class="main-item">
				<text>详细地址</text>
				<input type="text" placeholder="请填写具体地址" placeholder-class="placeholder">
			</view>
			<view class="main-item">
				<text>取件时间</text>
				<input type="text" placeholder="请选择具体时间" placeholder-class="placeholder">
			</view>
			<view class="default">
				<text>设为默认</text>
			</view>
		</view>
		<button @click="handleRegister">保存</button>

		<!-- cover -->
		<view class="cover">
			<view class="popup" :class="{show: isPopup}">
				<view class="popup-content">

					<view class="popup-body">
						<ul>
							<li v-for="(item, index) in list" :key="index" @click="handleStore(index)" id="item">
								{{item}}
							</li>
						</ul>
					</view>
					<view class="popup-bottom" @click="handleSelect()">
						<button>保存</button>
					</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseUsed: false,
				// cover
				isPopup: false,
				title: "请选择",
				list: ["桂苑", "荷苑", "李苑", "柳苑"],
				selected: "",

				// 双向绑定
				contactName: '',




			}
		},

		methods: {
			//cover
			showPopup() {
				this.isPopup = true;
			},
			hidePopup() {
				this.isPopup = false;
			},
			handleSelect() {
				this.hidePopup();
			},
			handleStore(index) {
				this.selected = this.list[index];
				console.log(this.selected);
			},

			// 输入框
			getName() {
					this.$axios.getName(this.phoneNumber)
			},











		}
	}
</script>
<style lang="scss" scoped>
	.doorToDoor-section {
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
				margin-top: 26rpx;
				width: 365rpx;
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
					float: right;
					font-size: 23.08rpx;
					margin-top: -12rpx;
					color: rgba(0, 0, 0, 1);
					margin-right: 29rpx;
				}

				text:after {
					content: '';
					display: inline-block;
					background: url('../../static/order-pickup/choose.png');
					background-size: cover;
					width: 30.77rpx;
					height: 30.77rpx;
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

	// cover
	.cover {

		button {
			width: 128px;
			height: 67rpx;
			border: transparent;
			border-radius: 10px;
			line-height: 67rpx;
			background: rgba(131, 195, 230, 1);
			color: rgba(255, 255, 255, 1);
			margin-top: 33rpx;
			margin-bottom: 65rpx;
			font-size: 34.62rpx;
			font-weight: 400;
			letter-spacing: 0px;
		}

		.popup {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			top: 0;
			background: rgba(0, 0, 0, 0.6);
			display: none;
			z-index: 9999;
		}

		.popup.show {
			display: block;
		}

		.popup .popup-content {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			opacity: 1;
			background: rgba(255, 255, 255, 1);
			transform: translateY(100%);
			transition: all 0.3s ease;
			overflow: hidden;
		}

		.popup.show .popup-content {
			transform: translateY(0);
		}

		.popup .popup-header {
			background: #f0f0f0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px 20px;
			font-size: 16px;
			font-weight: bold;
			border-bottom: 1px solid #ddd;
		}

		.popup .popup-body {
			width: 628.85rpx;
			margin: 0 auto;
		}

		.popup .popup-body ul {
			margin: 0;
			padding: 0;
			list-style: none;
		}

		.popup .popup-body li {
			padding: 33rpx 20px;
			cursor: pointer;
			border-bottom: 1px solid #ddd;
			transition: all 0.3s ease;
			font-size: 26.92rpx;
			font-weight: 400;
			letter-spacing: 0px;
			color: rgba(0, 0, 0, 0.9);
			text-align: center;
		}

		.popup .popup-body li:first-child {
			padding-top: 35rpx;
		}

		.popup .popup-body li:hover {
			color: rgba(254, 61, 47, 1);
			background: #eee;
		}

		.choose {
			background: #eee;
		}

	}
</style>