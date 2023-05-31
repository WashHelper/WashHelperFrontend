<template>
	<view class="container">
		<view class="banner-box">
			<view class="hed-banner" :class="{active:active==index}" v-for="(item,index) in bannerlist" :key="index"
				@click="clickbar(index)">{{item.title}}</view>
		</view>
		<view v-if="active==0">
			<view class="search">
				<image src="@/static/order-index/search-icon.png" mode="aspectFit"></image>
				<text class="placeholder" @click="Search()">订单号搜索</text>
			</view>
			<block v-for="(item,i) in OrderList" :index="i" :key="i">
				<navigator class="order-detail" :url="'/packageOrder/pages/detail?orderNumber='+item.orderNumber">
					<header>
						<text class="text">订单状态：下单成功</text><br>
						<text class="text"> 预约时间：{{item.orderTime}}</text><br>
						<text class="text">下单时间：{{item.pickupTime}}</text>
					</header>
					<div-line></div-line>
					<view class="order-number text">
						订单号：{{item.orderNumber}}
					</view>
					<view class="footer-banner">
						<view>修改</view>
						<view>详情</view>
						<view @tap.native.stop="deleteUserOrder(i)">取消</view>
						<view>联系</view>
					</view>
				</navigator>
			</block>
		</view>
		<view v-if="active==1">
			<view class="search">
				<image src="@/static/order-index/search-icon.png" mode="aspectFit"></image>
				<text class="placeholder" @click="Search()">订单号搜索</text>
			</view>
			<block v-for="(item,i) in OrderList" :index="i" :key="i">
				<navigator class="order-detail" :url="'/packageOrder/pages/detail?orderNumber='+item.orderNumber">
					<header>
						<text class="text">订单状态：待处理</text><br>
						<text class="text"> 预约时间：{{item.orderTime}}</text><br>
						<text class="text">下单时间：{{item.pickupTime}}</text>
					</header>
					<div-line></div-line>
					<view class="order-number text">
						订单号：{{item.orderNumber}}
					</view>
					<view class="footer-banner">
						<view>修改</view>
						<view>详情</view>
						<view @tap.native.stop="deleteUserOrder(i)">取消</view>
						<view>联系</view>
					</view>
				</navigator>
			</block>
		</view>
		<view v-if="active==2">
			<view class="search">
				<image src="@/static/order-index/search-icon.png" mode="aspectFit"></image>
				<text class="placeholder" @click="Search()">订单号搜索</text>
			</view>
			<block v-for="(item,i) in OrderList" :index="i" :key="i">
				<navigator class="order-detail" @click="gotodetail()">
					<header>
						<text class="text">订单状态：取件成功</text><br>
						<text class="text"> 预约时间：{{item.orderTime}}</text><br>
						<text class="text">下单时间：{{item.pickupTime}}</text>
					</header>
					<div-line></div-line>
					<view class="order-number text">
						订单号：{{item.orderNumber}}
					</view>
					<view class="footer-banner">
						<view>修改</view>
						<view>详情</view>
						<view @tap.native.stop="deleteUserOrder(i)">取消</view>
						<view>联系</view>
					</view>
				</navigator>
			</block>
		</view>
		<view v-if="active==3">
			<view class="search">
				<image src="@/static/order-index/search-icon.png" mode="aspectFit"></image>
				<text class="placeholder" @click="Search()">订单号搜索</text>
			</view>
			<block v-for="(item,i) in OrderList" :index="i" :key="i">
				<navigator class="order-detail" @click="gotodetail()">
					<header>
						<text class="text">订单状态：取件已取消</text><br>
						<text class="text"> 预约时间：{{item.orderTime}}</text><br>
						<text class="text">下单时间：{{item.pickupTime}}</text>
					</header>
					<div-line></div-line>
					<view class="order-number text">
						订单号：{{item.orderNumber}}
					</view>
					<view class="footer-banner">
						<view>修改</view>
						<view>详情</view>
						<view @tap.native.stop="showWarn()">取消</view>
						<view>联系</view>
					</view>
				</navigator>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// date: new Date().toISOString(),
				active: 0,
				status: 0,
				OrderList: [],
				// orderList: {},
				bannerlist: [{
					id: 0,
					title: "全部"
				}, {
					id: 1,
					title: "待处理"
				}, {
					id: 2,
					title: "已完成"
				}, {
					id: 3,
					title: "已取消"
				}]
			};
		},
		onLoad() {
			this.getItemList()
		},
		mounted() {
			let _this = this;
			setInterval(function() {
				_this.data = Date.parse(new Date())
			}, 1000)
		},
		methods: {
			gotodetail() {
				uni.navigateTo({
					url: '/packageOrder/pages/detail?orderNumber=' + item.orderNumber
				})
			},
			clickbar(i) {
				this.active = i;
				if (i >= 1) {
					this.getItemList(i - 1)
				} else {
					this.getItemList()
				}
			},

			//查询用户订单
			async getItemList(i) {
				const {
					data: res
				} = await this.$axios.getOrderList(i)
				res.forEach(floor => {
					floor.id = floor.orderId
				})
				// console.log(res[i])
				console.log('获取订单详情 ')
				this.OrderList = res
				console.log(this.OrderList)
			},
			//取消订单
			async deleteUserOrder(i) {
				await this.$axios.deleteOrder(this.OrderList[i].orderNumber).then((res) => {
					console.log(res)
				})
				console.log('取消的订单', this.OrderList[i].orderNumber)
				uni.showToast({
					title: '该订单已取消',
					icon: 'none'
				});
			},
			Search() {
				console.log('搜索')
			},
			showWarn() {
				uni.showToast({
					title: '该订单已取消',
					icon: 'none'
				});
			}
		}
	}
</script>

<style lang="scss">
	.container {
		width: 100vw;
		background-color: rgba(245, 245, 245, 1);
		display: flex;
		flex-direction: column;
		align-items: center;

		.banner-box {
			position: sticky;
			width: 100vw;
			display: flex;
			flex-direction: row;
			background-color: #fff;
			// margin-bottom: 10px;

			view {
				width: 25vw;
				height: 40px;
				text-align: center;
				font-size: 13px;
				line-height: 40px;
				font-weight: 400;
			}

			.active {
				color: rgba(87, 182, 230, 1);
			}
		}

		.search {
			width: 89.74vw;
			height: 40px;
			border-radius: 100px;
			background-color: #fff;
			margin-top: 16px;
			display: flex;
			align-items: center;

			image {
				width: 25.14px;
				height: 18.16px;
				margin-left: 5.27%;
				margin-right: 5.27%;
			}

			.placeholder {
				font-size: 14px;
				color: rgba(183, 183, 183, 1);
			}
		}

		.order-detail {
			width: 89.7vw;
			border-radius: 10px;
			// height: 175px;
			// padding21px :
			// padding-left: 10px;
			background-color: #fff;
			margin-top: 16px;

			header {
				padding: 16px 0px 17px 10px;

				.text {
					line-height: 28px;
					font-size: 12px;
					font-family: '思源黑体';
				}
			}

			.order-number {
				line-height: 23px;
				margin-bottom: 6px;
				margin-left: 10px;
				font-size: 12px;
			}


			.footer-banner {
				padding-bottom: 5px;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;

				view {
					width: 25%;
					text-align: center;
					font-size: 12px;
					color: rgba(105, 105, 105, 1);
				}
			}
		}
	}
</style>