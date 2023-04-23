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
			<ul>
				<li v-for="(item, index) in list" :key="index" @click="handleStore(index)" id="item">
					{{item}}
				</li>
			</ul>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				//
				list: ["南京邮电大学", "南京财经大学", "南京大学", "南京理工大学", "东南大学"],
				selected: "",



				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 32.064118,
				longitude: 118.855458,
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

		methods: {

			handleStore(index) {
				this.selected = this.list[index];
				console.log(this.selected);
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
		height: 587rpx;
		opacity: 1;
		background: rgba(255, 255, 255, 1);
		position: absolute;
		bottom: 0%;
		z-index: 100;
	}

	.content ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.content li {
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

	.content li:first-child {
		padding-top: 35rpx;
	}

	.content li:hover {
		color: rgba(254, 61, 47, 1);
		background: #eee;
	}

	.choose {
		background: #eee;
	}
</style>