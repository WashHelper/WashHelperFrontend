<template>
	<view>
		<view class="map-body">
			<view class="map-section">
				<map style="width: 100%; height: 723rpx;" :latitude="latitude" :longitude="longitude" :markers="covers"
					:scale="scale">
				</map>
				<view class="locationpicker-ic-marker">
					<image class="locationpicker-img" src="@/static/order-map/Oval.png"></img>
				</view>
			</view>
		</view>

		<view class="content">
			<view class="first-item">
				<view>
					<text>南京邮电大学仙林校区东门网点</text></br>
					<text>王二 18816887878</text>
				</view>

				<image src="@/static/order-map/Combined.png" alt="">

			</view>
			<view class="first-item">
				<view>
					<text>南京邮电大学仙林校区东门网点</text></br>
					<text>王二 18816887878</text>
				</view>

				<image src="@/static/order-map/Combined.png" alt="">

			</view>

			<view class="main-item">
				<text>取件方式</text>
				<input type="text" placeholder="请选择取件方式" placeholder-class="placeholder" v-modal="">
			</view>
			<view class="main-item">
				<text>送回方式</text>
				<input type="text" placeholder="请选择送回方式" placeholder-class="placeholder">
			</view>
			<view class="main-item">
				<text>上门时间</text>
				<uni-datetime-picker clear-icon placeholder='请选择时间' v-model="orderInfo.pickupTime" type="datetime" />
			</view>
			<view class="main-item">
				<text>折扣</text>
				<text class='specialRed'>新人礼遇券</text>
				<view class="cover">
					<input type="text" placeholder="请输入折扣" placeholder-class="placeholder" class='input2'>
				</view>
			</view>
			<view class="main-item">
				<text>会员价</text>
				<input type="text" placeholder="请输入价格" placeholder-class="placeholder">
			</view>
			<view class="main-item">
				<text>最终价格</text>
				<input type="text" placeholder="请输入价格" placeholder-class="placeholder">
			</view>
			<view></view>
			<view class="main-item">
				<text>备注</text>
				<input type="text" placeholder="填写要备注的内容" placeholder-class="placeholder" class="input5"
					v-model="orderInfo.remark">
			</view>
			<view class="default">
				<text>{{orderInfo.fee}}元</text>
				<button @click="confirmOrder">确认下单</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ["南京邮电大学", "南京财经大学", "南京大学", "南京理工大学", "东南大学"],
				scale: 12,
				latitude: 32.064118,
				longitude: 118.895458,
				covers: [{
					id: 0,
					width: 20,
					height: 20,
					latitude: 32.080982,
					longitude: 118.77094,
					iconPath: '../../static/order-map/location.png',
					//南邮
				}, {
					id: 1,
					width: 20,
					height: 20,
					latitude: 32.107498,
					longitude: 118.922689,
					iconPath: '../../static/order-map/location.png',
					//南财
				}, {
					id: 2,
					width: 20,
					height: 20,
					latitude: 32.119566,
					longitude: 118.958384,
					iconPath: '../../static/order-map/location.png',
					//南大
				}, {
					id: 3,
					width: 20,
					height: 20,
					latitude: 32.028344,
					longitude: 118.856503,
					iconPath: '../../static/order-map/location.png',
					//南理
				}, {
					id: 4,
					width: 20,
					height: 20,
					latitude: 32.054757,
					longitude: 118.794544,
					iconPath: '../../static/order-map/location.png',
					//东南
				}],
				orderInfo: {
					pickupLocationId: 1,
					deliveryLocationId: 2,
					productList: [],
					remark: "",
					fee: '',
					pickupTime: "",
					pictureUrl: ''
				},
			}
		},
		onLoad(options) {
			let {
				listArr,
				totalPrice: fee
			} = options
			this.orderInfo = {
				...this.orderInfo,
				...{
					productList: [...JSON.parse(listArr)],
					fee
				}
			}
		},
		methods: {
			confirmOrder() {
				uni.chooseMedia({
					count: 9,
					mediaType: ['image'],
					sourceType: ['album', 'camera'],
					maxDuration: 30,
					camera: 'back',
					success: ({
						tempFiles
					}) => {
						uni.uploadFile({
							url: 'http://1.13.80.178:9000/order/uploadPicture',
							filePath: tempFiles[0].tempFilePath,
							name: 'picture',
							header: {
								token: uni.getStorageSync('token')
							},
							success: async ({
								data
							}) => {
								this.orderInfo.pictureUrl = JSON.parse(data).data

								let {
									data: orderInfo
								} = await this.$axios.confirmOrder(this.orderInfo)

								uni.setStorageSync('orderInfo', orderInfo)
								uni.navigateTo({
									url: '/pages/order/orderConfirm'
								})
							},
						});
					}
				})
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

	.map-section image {
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
		height: 1090rpx;
		opacity: 1;
		background: rgba(255, 255, 255, 1);
		position: absolute;
		bottom: 0%;
		z-index: 100;
	}

	.content .first-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 110rpx;
		padding: 0 20px;
		border-bottom: 1.92rpx solid rgba(0, 0, 0, 0.3);
	}

	.content .first-item image {
		width: 42rpx;
		height: 42rpx;
	}

	.content .first-item text {
		font-size: 21.15rpx;
		font-weight: 400;
		letter-spacing: 0px;
		color: rgba(0, 0, 0, 1);
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

		.specialRed {
			font-size: 19.23rpx;
			font-weight: 400;
			color: rgba(240, 55, 55, 0.9);
			margin-left: 18rpx;
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

		.input2 {
			width: 270rpx;
			height: 26px;
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

	/deep/ .uni-date {
		.uni-date-x--border {
			border: transparent !important;
		}

		line-height: 108rpx;
	}
</style>