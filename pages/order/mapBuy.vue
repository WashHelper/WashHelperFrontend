<template>
	<view>
		<view class="map-body">
			<view class="map-section">
				<map style="width: 100%; height: 723rpx;" id="map" :latitude="latitude" :longitude="longitude"
					:markers="covers" :scale="scale">
				</map>
				<view class="locationpicker-ic-marker">
					<img class="locationpicker-img" src="../../static/order-map/Oval.png"></img>
				</view>
			</view>
		</view>

		<view class="content">

			<view class="first-item">
<!-- 				<img src="../../static/order-map/icPin.png" mode=""></img> -->
				<label>
					<p>南京邮电大学仙林校区东门网点</p>
					<p>王二 18816887878</p>
				</label>
				<span>
					<img src="../../static/order-map/Combined.png" alt="">
				</span>
			</view>
			<view class="first-item">
<!-- 				<img src="../../static/order-map/icPin.png" mode=""></img> -->
				<label>
					<p>南京邮电大学仙林校区东门网点</p>
					<p>王二 18816887878</p>
				</label>
				<span>
					<img src="../../static/order-map/Combined.png" alt="">
				</span>
			</view>

			<view class="main-item">
				<text>取件方式</text>
				<input type="text" placeholder="请选择取件方式" placeholder-class="placeholder">
			</view>
			<view class="main-item">
				<text>送回方式</text>
				<input type="text" placeholder="请选择送回方式" placeholder-class="placeholder">
			</view>
			<view class="main-item">
				<text>价格</text>
				<input type="text" placeholder="请输入价格" placeholder-class="placeholder">
			</view>
			<view class="main-item">
				<text>折扣</text>
				<view class="cover">
					<input type="text" placeholder="请输入折扣" placeholder-class="placeholder" @click="showPopup"
						v-model="selected">
				</view>
			</view>
			<view class="main-item">
				<text>备注</text>
				<input type="text" placeholder="填写要备注的内容" placeholder-class="placeholder" class="input5">
			</view>
			<view class="default">
				<text>35元</text>
				<button>确认下单</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ["南京邮电大学", "南京财经大学", "南京大学", "南京理工大学", "东南大学"],
				selected: "",
				urlsList: [],
				baseUrl: 'https://wash-helper.oss-cn-nanjing.aliyuncs.com/',

				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				scale: 12,
				latitude: 32.064118,
				longitude: 118.895458,
				covers: [{
					latitude: 32.080982,
					longitude: 118.77094,
					iconPath: '../../static/order-map/location.png',
					//南邮
				}, {
					latitude: 32.107498,
					longitude: 118.922689,
					iconPath: '../../static/order-map/location.png',
					//南财
				}, {
					latitude: 32.119566,
					longitude: 118.958384,
					iconPath: '../../static/order-map/location.png',
					//南大
				}, {
					latitude: 32.028344,
					longitude: 118.856503,
					iconPath: '../../static/order-map/location.png',
					//南理
				}, {
					latitude: 32.054757,
					longitude: 118.794544,
					iconPath: '../../static/order-map/location.png',
					//东南
				}]
			}
		},
		onLoad() {
			this.testGet();
			// console.log(123)
		},
		methods: {
			handleStore(index) {
				this.selected = this.list[index];
				// console.log(this.selected);
			},
			comfirmOrder() {},
			async testGet() {
				const {
					data: res
				} = await this.$axios.getUrl()
				this.urlsList = res
			}
		}
	}
</script>

<style lang="scss" scoped>
	.map-body {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.map-section {
		position: relative;
	}

	.map-section img {
		width: 256rpx;
		height: 256rpx;
	}

	.locationpicker-ic-marker {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -128rpx;
		margin-left: -128rpx;
		z-index: 10;
	}

	.content {
		width: 750rpx;
		height: 925rpx;
		opacity: 1;
		background: rgba(255, 255, 255, 1);
		position: absolute;
		bottom: 0%;
		z-index: 100;
	}

	.content .first-item {
		position: relative;
		width: 692rpx;
		height: 110rpx;
		margin: 0 auto;
		border-bottom: 1.92rpx solid rgba(0, 0, 0, 0.3);
	}

	.content .first-item img {
		float: left;
		width: 62rpx;
		margin: 23rpx 75rpx;
	}

	.content .first-item p {
		font-size: 21.15rpx;
		font-weight: 400;
		letter-spacing: 0px;
		color: rgba(0, 0, 0, 1);
	}

	.content .first-item p:nth-child(1) {
		padding-top: 23rpx;
	}

	.content .first-item p:nth-child(2) {
		padding-top: 5rpx;
	}


	.content .first-item span {
		position: absolute;
		right: -48rpx;
		top: 14rpx;
	}

	.content .first-item span img {
		width: 40rpx;
	}

	.main-item {
		width: 629rpx;
		height: 108rpx;
		border-bottom: 1.92rpx solid rgba(0, 0, 0, 0.04);
		margin: 0 auto;

		text {
			float: left;
			font-size: 30.77rpx;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.9);
			line-height: 108rpx;
		}

		input {
			float: left;
			padding: 8rpx 71rpx;
			margin-top: 26rpx;
			width: 365rpx;
			height: 26px;
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
		position: relative;

		text {
			position: absolute;
			top: 60rpx;
			left: 167rpx;
			font-size: 26.92rpx;
			font-weight: 400;
			letter-spacing: 0px;
			line-height: 0px;
			color: rgba(255, 195, 0, 1);
		}

		button {
			position: absolute;
			top: 38rpx;
			right: 42rpx;
			width: 194.23rpx;
			height: 57.69rpx;
			opacity: 1;
			border-radius: 19.23rpx;
			background: linear-gradient(223.13deg, rgba(87, 182, 230, 1) 0%, rgba(141, 242, 234, 0.5) 90.99%, rgba(247, 247, 193, 0.01) 100%);
			font-size: 26.92rpx;
			font-weight: 400;
			letter-spacing: 0px;
			line-height: 57.69rpx;
			color: rgba(255, 255, 255, 1);
		}
	}
</style>