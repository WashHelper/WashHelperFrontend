<template>
	<view class="type-container">
		<text class="title">选择种类</text>
		<!-- 左侧的滑动区域 -->
		<view class="scroll-view-container">
			<scroll-view class="left-scroll-view" scroll-y="true" :style="{height:wh+'px','width':'58px'}">
				<block v-for="(item,i) in leftscrollList" :index="i" :key="i">
					<view :class="['choice',i===active?'active':'']" @click="activeChange(i)">{{item.text}}
					</view>
				</block>

			</scroll-view>
			<scroll-view class="right-scroll-view" scroll-y="true" :style="{height:wh+'px'}">
				<view class="first" v-if="active==0">
					<uni-grid :column="4" :show-border="false" :square="false" class="wash-shoes">
						<uni-grid-item v-for="(item,index) in goodsList" :index="index" :key="index">
							<view v-if="index<=7" class="grid-item-box">
								<view class="background" @click="clickItem(index)">
									<image :src="item.pictureUrl||defaultPic" mode="aspectFit"></image>
									<uni-badge class="uni-badge" :text="item.productNum" absolute="rightTop"
										:offset="[5, -8]" size="primary"></uni-badge>
									<uni-icons v-if="item.productNum!=0" class="minus" type="minus-filled" size="22"
										@tap.native.stop="minus(index)" color="rgba(166, 166, 166, 1)"></uni-icons>
								</view>
								<text class="text" style="font-size: 14px;">{{item.productName }}</text>
								<text class="price">{{item.originalPrice }}元</text>
							</view>
						</uni-grid-item>
					</uni-grid>
					<uni-section title="增值服务" padding style="font-size: 14px;">
						<uni-grid :column="4" :show-border="false" :square="false" class="addlist">
							<uni-grid-item v-for="(item ,index) in goodsList" :index="index" :key="index">
								<view v-if="index>7" class="grid-item-box">
									<view class="background" @click="clickItem(index)">
										<text class="text" style="font-size: 14px;">{{item.productName}}</text>
										<text class="price">{{item.originalPrice}}元</text>
										<uni-badge class="uni-badge" :text="item.productNum" absolute="rightTop"
											:offset="[5, -5]" size="small"></uni-badge>
										<uni-icons v-if="item.productNum!=0" class="minus" type="minus-filled" size="22"
											@tap.native.stop="minus(index)" color="rgba(166, 166, 166, 1)"
											style="left: 0px;"></uni-icons>
									</view>
								</view>
							</uni-grid-item>
						</uni-grid>
					</uni-section>
				</view>

				<view v-if="active==1" class="repair-shoes">
					<view class="list" v-for="(item,index) in goodsList" :index="index" :key="index"
						@click="clickItem(index)">
						<text class="text">{{item.productName }}</text>
						<text class="price">{{item.originalPrice}}元</text>
						<uni-badge class="uni-badge" :text="item.productNum" absolute="rightTop" :offset="[5, -8]"
							size="primary" style="color: #fff;"></uni-badge>
						<uni-icons v-if="item.productNum!=0" class="minus" type="minus-filled" size="22"
							@tap.native.stop="minus(index)" color="rgba(166, 166, 166, 1)"
							style="left: 0px;"></uni-icons>
					</view>
				</view>
				<uni-grid v-if="active==2" :column="3" :show-border="false" :square="false" class="clothes">
					<uni-grid-item v-for="(item,index) in goodsList" :index="index" :key="index">
						<view class="grid-item-box">
							<view class="background" @click="clickItem(index)">
								<image :src="item.pictureUrl||defaultPic" class="image" mode="aspectFit"></image>
								<uni-badge class="uni-badge" :text="item.productNum" absolute="rightTop"
									:offset="[10, -8]" size="primary"></uni-badge>
								<uni-icons v-if="item.productNum!=0" class="minus" type="minus-filled" size="22"
									@tap.native.stop="minus(index)" color="rgba(166, 166, 166, 1)"
									style="left: 0px;"></uni-icons>
							</view>
							<text class="text">{{item.productName }}</text>
							<text class="price">{{item.originalPrice}}元</text>
						</view>
					</uni-grid-item>
				</uni-grid>
				<uni-grid v-if="active==3" :column="3" :show-border="false" class="textiles">
					<uni-grid-item v-for="(item,index) in goodsList" :index="index" :key="index" style="height: 169px;">
						<view class="grid-item-box" style="height: 169px;margin-top: 0px;">
							<view class="background" @click="clickItem(index)">
								<image :src="item.pictureUrl||defaultPic" class="image" mode="aspectFit"></image>
								<uni-badge class="uni-badge" :text="item.productNum" absolute="rightTop"
									:offset="[10, -8]" size="primary"></uni-badge>
								<uni-icons v-if="item.productNum!=0" class="minus" type="minus-filled" size="22"
									@tap.native.stop="minus(index)" color="rgba(166, 166, 166, 1)"
									style="left: 0px;"></uni-icons>
							</view>
							<text class="text">{{item.productName}}</text>
							<text class="price">{{item.originalPrice}}元</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</scroll-view>
		</view>
		<footer class="shop">
			<uni-badge class="uni-badge-left-margin" :text="totalNumber" absolute="rightTop" :offset="[4, 4]"
				size="small">
				<uni-icons class="cart" type="cart" size="30" color="rgba(255, 195, 0, 1)"></uni-icons>
			</uni-badge>

			<text v-bind:value="totalprice">{{Number(totalprice).toFixed(2)}}元</text>
			<button @click="admitOrder()">确认下单</button>
		</footer>
	</view>
</template>

<script>
	import currency from 'currency.js';
	export default {
		data() {
			return {
				totalNumber: 0, // 下单数量
				totalprice: 0.00, //总共的价格
				active: 0,
				queryObj: {
					query: '',
					cid: ''
				},
				goodsList: [],
				cartList: [],
				//默认图片
				defaultPic: '',
				leftscrollList: [{
					id: 0,
					text: '洗鞋种类',
				}, {
					id: 1,
					text: '鞋类维修',
				}, {
					id: 2,
					text: '衣物'
				}, {
					id: 3,
					text: '家纺'
				}]
			};
		},
		onLoad(options) {
			this.getGoodsList(0);
			this.getCartList();
			// this.calculate(this.cartList)
		},
		methods: {
			//获取商品列表数据的方法
			async getGoodsList(i) {
				const {
					data: res
				} = await this.$axios.getTypeList(i)
				this.goodsList = res.productList;
				console.log("222", this.goodsList)

			},
			async activeChange(i) {
				this.active = i;
				await this.getGoodsList(i)
			},
			//添加购物车并计算价格
			clickItem(index) {
				this.$axios.add(this.goodsList[index].productId)
				this.goodsList[index].productNum = this.goodsList[index].productNum + 1
				this.totalNumber++;
				this.totalprice = this.currency(this.totalprice).add(this.goodsList[index].originalPrice)
			},
			minus(index) {
				// this.getCartList()
				this.$axios.sub(this.goodsList[index].productId)
				this.goodsList[index].productNum = this.goodsList[index].productNum - 1
				this.totalNumber--;
				this.totalprice = this.currency(this.totalprice).subtract(this.goodsList[index].originalPrice)
			},

			//确认下单
			async admitOrder() {
				const {
					data: res
				} = await this.$axios.getCart()
				this.cartList = res.productList
				let result = parseFloat(this.totalprice).toFixed(2)

				console.log('啊啊', result)
				let listArr = []
				this.cartList.forEach(item => {
					let listItem = {
						productId: item.productId,
						productNum: item.productNum
					}
					listArr.push(listItem)
				})
				console.log(listArr, this.totalprice)
				if (this.totalNumber === 0) {
					uni.showToast({
						title: '购物车为空',
						icon: 'none'
					})
					return;
				}
				uni.navigateTo({
					url: '/pages/order/mapBuy?listArr=' + JSON.stringify(listArr) + '&totalPrice=' + result
				})
			},
			//获取商品列表
			async getCartList() {
				const {
					data: res
				} = await this.$axios.getCart()
				this.cartList = res.productList
				this.totalNumber = res.totalNum
				console.log("111", this.cartList)
				this.calculate(this.cartList)
			},
			calculate(cartList) {
				for (let list of cartList) {
					this.totalprice += list.productNum * list.productPrice
				}
			}
		}
	}
</script>

<style lang="scss">
	.type-container {
		width: 100vw;
		padding-top: 20px;

		.title {
			font-size: 18px;
			font-weight: 400;
			line-height: 0px;
			margin-left: 3.85vw;
		}

		.scroll-view-container {
			display: flex;
			margin-top: 16px;
			background-color: #fff;
			padding-top: 15px;

			.left-scroll-view {
				width: 13.85vw;
				background-color: #fff;

				.choice {
					width: 100%;
					height: 127px;
					color: rgba(128, 128, 128, 1);
					text-align: center;
					font-size: 16px;
					display: flex;
					align-items: center;
					justify-content: center;

					&.active {
						background: rgba(247, 249, 252, 1);
						color: rgba(87, 182, 230, 1);
					}
				}
			}

			.right-scroll-view {
				// width: 78.46vw;
				padding-left: 3.85vw;
				padding-right: 3.85vw;

				.grid-dot {
					position: absolute;
					top: 5px;
					right: 15px;
				}

				.uni-badge {
					position: absolute;
					right: 2px;
					top: 2px;
					color: #fff;
				}

				.minus {
					position: absolute;
					top: 0px;
					left: 2px;
					z-index: 10;
				}

				.wash-shoes {
					.grid-item-box {
						height: 19.9vh;

						.background {
							width: 17.7vw;
							height: 93px;

							image {
								width: 100%;
								height: 100%;
							}
						}
					}
				}

				.addlist {
					.grid-item-box {
						.background {
							width: 17.7vw;
							height: 9.8vh;
							display: flex;
							flex-direction: column;

							text {
								line-height: 21px;
							}
						}
					}
				}

				.repair-shoes {

					.list {
						width: 60.77vw;
						height: 42px;
						background: rgba(247, 249, 252, 1);
						margin-top: 15px;
						display: flex;
						flex-direction: row;
						align-items: center;
						position: relative;

						text {
							font-size: 16px;
							color: rgba(128, 128, 128, 1);
						}

						.text {
							margin-left: 46px;
						}

						.price {
							position: absolute;
							margin-left: 41.8vw;
						}

						.uni-badge {
							color: #fff;
						}
					}
				}

				.clothes {

					.grid-item-box {
						height: 169px;

						.background {
							width: 23.077vw;
							height: 106px;
						}
					}

				}

				.textiles {
					.grid-item-box {
						height: 195px;

						.background {
							width: 90px;
							height: 106px;
						}

						.text {
							font-size: 18px;
						}
					}
				}

				.grid-item-box {
					// height: 160px;
					display: flex;
					flex-direction: column;
					align-items: center;

					.background {
						border-radius: 10px;
						display: flex;
						align-items: center;
						justify-content: center;
						background: rgba(247, 249, 252, 1);
					}

					.image {
						width: 48px;
						height: 48px;
						display: block;
					}

					.text,
					.price {
						width: 100%;
						display: flex;
						flex-direction: row;
						justify-content: center;
						color: rgba(128, 128, 128, 1);
					}

					.text {
						font-size: 18px;
					}

					.price {
						font-size: 12px;
					}
				}
			}
		}

		.shop {
			position: sticky;
			bottom: 0px;
			width: 100vw;
			height: 40px;
			background-color: #fff;
			display: flex;
			flex-direction: row;
			align-items: center;

			.cart {
				margin-left: 4.1vw;
			}

			text {
				color: rgba(255, 195, 0, 1);
				margin-left: 4px;
			}

			button {
				width: 25.9vw;
				display: flex;
				height: 75%;
				justify-content: center;
				align-items: center;
				margin-right: 5.6vw;
				font-size: 14px;
				color: rgba(255, 255, 255, 1);
				background: linear-gradient(223.13deg, rgba(87, 182, 230, 1) 0%, rgba(141, 242, 234, 0.5) 90.99%, rgba(247, 247, 193, 0.01) 100%);
				border-radius: 10px;
				text-align: center;
			}
		}
	}
</style>