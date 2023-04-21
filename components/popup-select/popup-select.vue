<template>
	<view class="cover">
		<input v-model="selected" placeholder="请选择" @click="showPopup" placeholder-class="placeholder">
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
					<button>确定</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Popup",
		data() {
			return {
				isPopup: false,
				title: "请选择",
				list: ["选项1", "选项2", "选项3"],
				selected: ""
			};
		},
		methods: {
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
			}
		}
	};
</script>

<style lang="scss" scoped>
	.cover {

		button {
			width: 128px;
			height: 67rpx;
			border: transparent;
			border-radius: 10px;
			line-height: 67rpx;
			color: rgba(255, 255, 255, 1);
			background: linear-gradient(223.13deg, #57B6E6 0%, #8DF2EA 90.99%, #F7F7C1 100%);
			margin-top: 33rpx;
			margin-bottom: 65rpx;
			font-size: 34.62rpx;
			font-weight: 400;
			letter-spacing: 0px;
		}

		input {
			width: 500rpx;
			height: 26px;
		}

		.placeholder {
			font-size: 26.92rpx;
			font-weight: 400;
			letter-spacing: 0px;
			line-height: 42.31px;
			color: rgba(0, 0, 0, 0.3);
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
			background: #eee;
		}

		.choose {
			background: #eee;
		}

	}
</style>