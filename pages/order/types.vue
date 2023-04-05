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
				<!-- <view class="choose-type"></view> -->
				<uni-grid :column="3" :show-border="false" :square="false">
					<uni-grid-item v-for="(item,index) in rightList" :index="index" :key="index">
						<view class="grid-item-box">
							<view class="background">
								<image :src="item.url" class="image" mode="aspectFit"></image>
							</view>

							<text class="text">{{item.text}}</text>
							<text class="price">{{item.price}}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</scroll-view>
		</view>

		<footer class="shop">
			<uni-badge class="uni-badge-left-margin" :text="1" absolute="rightTop" :offset="[4, 4]" size="small">
				<uni-icons class="cart" type="cart" size="30" color="rgba(255, 195, 0, 1)"></uni-icons>
			</uni-badge>

			<text>xx元</text>
			<button>确认下单</button>
		</footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wh: 0,
				active: 0,
				leftscrollList: [{
					text: '洗鞋种类',
				}, {
					text: '鞋类维修',
				}, {
					text: '衣物'
				}, {
					text: '家纺'
				}],
				//二级分类列表
				rightList: [{
					url: '/static/order-types/Artboard 93@3x.png',
					text: '羽绒服',
					badge: '0',
					price: '35元',
				}, {
					url: '/static/order-types/Artboard 71@3x.png',
					text: '棉服',
					badge: '0',
					price: '35元',
				}, {
					url: '/static/order-types/Artboard 69@3x.png',
					text: '牛仔',
					badge: '0',
					price: '25元',
				}, {
					url: '/static/order-types/Artboard 97@3x.png',
					text: '大衣',
					badge: '0',
					price: '40元',
				}, {
					url: '/static/order-types/Artboard 69@3x.png',
					text: '皮衣',
					badge: '0',
					price: '40元',
				}, {
					url: '/static/order-types/Artboard 73@3x.png',
					text: '西装',
					badge: '0',
					price: '25元',
				}]
			};
		},
		onLoad() {
			const sysInfo = uni.getSystemInfoSync()
			this.wh = sysInfo.windowHeight - 60 //赋值
		},
		methods: {
			activeChange(i) {
				this.active = i;

				//重新为二级分类赋值
				// this.rightList = this.leftscrollList[i].
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
				width: 54px;
				background-color: #fff;

				.choice {
					width: 100%;
					height: 140px;
					color: rgba(128, 128, 128, 1);
					text-align: center;
					font-size: 16px;
					display: flex;
					align-items: center;
					justify-content: center;

					&.active {
						background: rgba(247, 249, 252, 1);
					}
				}


			}

			.right-scroll-view {
				// width: 78.46vw;
				padding-left: 3.85vw;
				padding-right: 3.85vw;


				.grid-item-box {
					height: 160px;
					display: flex;
					flex-direction: column;
					align-items: center;

					.background {
						width: 23.077vw;
						height: 106px;
						display: flex;
						align-items: center;
						justify-content: center;
						background: rgba(247, 249, 252, 1);
					}

					.image {
						width: 48px;
						height: 48px;
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