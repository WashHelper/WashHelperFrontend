<template>
	<view class="type-container">
		<text class="title">选择种类</text>
		<!-- 左侧的滑动区域 -->
		<view class="scroll-view-container">
			<scroll-view class="left-scroll-view" scroll-y="true" :style="{height:wh+'px','width':'58px'}">
				<block v-for="(item,i) in leftscrollList" :index="i" :key="i">
					<view :class="['choice',i===active?'active':'']" @click="activeChange(i)">{{item.text}}</view>
				</block>

			</scroll-view>
			<scroll-view class="right-scroll-view" scroll-y="true" :style="{height:wh+'px'}">
				<uni-grid v-if="active==0" :column="4" :show-border="false" :square="false" class="wash-shoes">
					<uni-grid-item v-for="(item,index) in washlist" :index="index" :key="index">
						<view class="grid-item-box">
							<view class="background" @click="click(item)">
								<image :src="item.url||defaultPic" mode="aspectFit"></image>
							</view>
							<text class="text" style="font-size: 14px;">{{item.text}}</text>
							<text class="price">{{item.price}}元</text>
						</view>
					</uni-grid-item>
				</uni-grid>
				<view v-if="active==1" class="repair-shoes">
					<view class="list" v-for="(item,index) in repairlist" :index="index" :key="index"
						@click="click(item)">
						<text class="text">{{item.text}}</text>
						<text class="price">{{item.price}}元</text>
					</view>
				</view>
				<uni-grid v-if="active==2" :column="3" :show-border="false" :square="false" class="clothes">
					<uni-grid-item v-for="(item,index) in clothesList" :index="index" :key="index">
						<view class="grid-item-box">
							<view class="background" @click="click(item)">
								<image :src="item.url||defaultPic" class="image" mode="aspectFit"></image>
							</view>
							<text class="text">{{item.text}}</text>
							<text class="price">{{item.price}}元</text>
						</view>
					</uni-grid-item>
				</uni-grid>
				<uni-grid v-if="active==3" :column="3" :show-border="false" class="textiles">
					<uni-grid-item v-for="(item,index) in textiles" :index="index" :key="index">
						<view class="grid-item-box">
							<view class="background" @click="click(item)">
								<image :src="item.url||defaultPic" class="image" mode="aspectFit"></image>
							</view>
							<text class="text">{{item.text}}</text>
							<text class="price">{{item.price}}元</text>
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

			<text>{{totalprice}}元</text>
			<button>确认下单</button>
		</footer>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		// computed: {
		// 	...mapState('m_cart', [addToCart])
		// },
		data() {
			return {
				totalNumber: 0, // 下单数量
				totalprice: 0, //总共的价格
				wh: 0,
				active: 0,
				queryObj: {
					query: '',
					cid: ''
				},
				goodsList: [],
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
				}],
				washlist: [{
					url: '',
					text: '休闲鞋',
					price: 19
				}, {
					url: '',
					text: '运动鞋',
					price: 23
				}, {
					url: '',
					text: '足球鞋',
					price: 23
				}, {
					url: '',
					text: '篮球鞋',
					price: 25
				}, {
					url: '',
					text: '皮鞋（短）',
					price: 28
				}, {
					url: '',
					text: '皮面长靴',
					price: 32
				}, {
					url: '',
					text: '绒面鞋',
					price: 25
				}, {
					url: '',
					text: '布面鞋',
					price: 19
				}],
				repairlist: [{
					text: '更换气垫',
					price: 169
				}, {
					text: '更换围边',
					price: 229
				}, {
					text: '网面破损织补',
					price: 35
				}, {
					text: '破损修复',
					price: 79
				}, {
					text: '加后掌耐磨贴',
					price: 79
				}],
				repairlist: [{
					text: '更换气垫',
					price: 169
				}, {
					text: '更换围边',
					price: 229
				}, {
					text: '网面破损织补',
					price: 35
				}, {
					text: '破损修复',
					price: 79
				}, {
					text: '加后掌耐磨贴',
					price: 79
				}],
				//二级分类列表
				clothesList: [{
					url: '/static/order-types/Artboard 93@3x.png',
					text: '羽绒服',
					badge: '0',
					price: 35,
				}, {
					url: '/static/order-types/Artboard 71@3x.png',
					text: '棉服',
					badge: '0',
					price: 35,
				}, {
					url: '/static/order-types/Artboard 69@3x.png',
					text: '牛仔',
					badge: '0',
					price: 25,
				}, {
					url: '/static/order-types/Artboard 97@3x.png',
					text: '大衣',
					badge: '0',
					price: 40,
				}, {
					url: '/static/order-types/Artboard 69@3x.png',
					text: '皮衣',
					badge: '0',
					price: 40,
				}, {
					url: '/static/order-types/Artboard 73@3x.png',
					text: '西装',
					badge: '0',
					price: 25
				}],
				textiles: [{
					url: '',
					text: '毛绒玩具',
					price: 25
				}, {
					url: '',
					text: '床单',
					price: 15
				}, {
					url: '',
					text: '被套',
					price: 20
				}, {
					url: '',
					text: '枕头',
					price: 25
				}, {
					url: '',
					text: '毛毯',
					price: 20
				}],
				//节流阀
				isloading: false
			};
		},
		onLoad(options) {
			const sysInfo = uni.getSystemInfoSync()
			this.wh = sysInfo.windowHeight - 115 //赋值

			this.getGoodsList()
		},
		methods: {
			// ...mapMutations('m_cart', ['addToCart']),
			...mapMutations('m_cart', ['addToCart']),
			//获取商品列表数据的方法
			getGoodsList(cb) {
				//打开节流阀
				// 	this.isloading = true
				// async const {
				// 	data: res
				// } = await uni.$http.get(''，
				// 	this.queryObj)
				// if (res.meta.status !== 200) {
				// 	retrun uni.$showMsg()
				// }
				//关闭节流阀
				// 	this.isloading = false

				// this.goodsList = res.message.goods
			},
			activeChange(i) {
				this.active = i;

				//重新为二级分类赋值
				// this.rightList = this.leftscrollList[i].
			},
			//添加购物车并计算价格
			click(item) {
				this.totalNumber++
				this.totalprice += item.price
			}
		},
		// onReachBottom() {

		// },
		onPullDownRefresh() {
			this.isloading = false
			// this.goodsList = []

			//重新发送数据请求
			// this.getGoodsList(()=>uni.stopPullRefresh())
		},
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

				.repair-shoes {
					// display: flex;
					// flex-direction: column;
					// justify-content: center;

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
					.background {
						width: 90px;
						height: 106px;
					}

					.text {
						font-size: 18px;
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