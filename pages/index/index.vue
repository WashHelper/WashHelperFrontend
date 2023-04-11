<template>
	<view class="container">
		<view class="bigbox">
			<view class="banner">
				<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" circular
					autoplay interval="4000">
					<swiper-item>
						<image src="@/static/index-index/index-banner/first.png"></image>
					</swiper-item>
					<swiper-item>
						<image src="@/static/index-index/index-banner/second.png"></image>
					</swiper-item>
					<swiper-item>
						<image src="@/static/index-index/index-banner/third.png"></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="choice-container">
				<view class="ullist">
					<view class="item" :class="{active:active==index}" v-for="(item,index) in navArr" :key="index"
						@click="clickNav(index)">
						{{item.title}}
					</view>
				</view>
				<view v-if="active==0">
					<indexInput></indexInput>
				</view>
				<view v-if="active==1">
					hello
				</view>
				<view v-if="active==2">
					<view class="indexInput-box">
						<view class="input">
							<image src="@/static/index-index/cun.png" mode="aspectFit"></image>
							<view class="placeholder">
								<text>选择智能鞋柜</text><br>
								<text style="font-size: 9px;">洗送衣物存哪里</text>
							</view>
						</view>
						<view class="input">
							<image src="@/static/index-index/send.png" mode="aspectFit"></image>
							<view class="placeholder">
								<text>选择智能鞋柜</text><br>
								<text style="font-size: 9px;">洗好衣服送回哪里</text>
							</view>
						</view>

					</view>
				</view>
				<view v-if="active==3">
					hello
				</view>
			</view>

		</view>
		<uni-section class="ad" style="background-color: transparent;">
			<image src="@/static/index-index/ad-first.png" mode="aspectFit"></image>
			<image src="@/static/index-index/ad-second.png" mode="aspectFit"></image>
			<image src="@/static/index-index/ad-third.png" mode="aspectFit"></image>
			<image src="@/static/index-index/ad-fourth.png" mode="aspectFit" @click="toggle('center')">
			</image>
			<!-- 分享至 -->
			<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
				<!-- <uni-popup-share>
				</uni-popup-share> -->
			</uni-popup>
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" @change="change()" type="center">
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
					<image src="@/static/index-index/ad.png" mode="aspectFill" class="pop-ad"></image>
					<text>成功邀请一名好友注册<br>即可获得2元洗护券一张</text>
				</view>
			</uni-popup>
		</uni-section>
		<text class="ad-text">精心呵护|工序质检|全程监控|保价可赔</text>
		<view class="serve-container">
			<text class="serve-text">服务类别</text>
			<view class="serve-choice">
				<button type="default" disabled="true">衣旧情深</button>
				<button type="default" disabled="true">商城</button>
				<button type="default" disabled="true">碳积分</button>
			</view>
		</view>
		<view class="kong" style="height: 110rpx;"></view>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				type: 'center',
				messageText: '这是一条成功提示',
				navArr: [{
					id: 0,
					title: "网点自送"
				}, {
					id: 1,
					title: "上门取件"
				}, {
					id: 2,
					title: '智能鞋柜'
				}, {
					id: 3,
					title: '邮寄取送'
				}],
				navIndex: 0,
			};
		},
		onLoad() {
			const sysInfo = uni.getSystemInfoSync()
			this.wh = sysInfo.windowHeight
		},
		methods: {
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open()
			},
			shareToggle() {
				this.$refs.share.open()
			},
			clickNav(id) {
				this.active = id;
			}
		}
	}
</script>

<style lang="scss">
	.container {
		width: 100vw;
		// height: 858px;
		padding-top: 20px;
		// background-color: rgba(235, 236, 237, 1);
		display: flex;
		flex-direction: column; //竖直展示内容
		align-items: center;

		.bigbox {
			width: 92.3vw;
			background-color: #fff;

			.banner {
				width: 100%;
				height: 187px;
				background-color: #fff;
				border-radius: 10px;

				swiper {
					width: 100%;
					height: 100%;
				}

				image {
					width: 100%;
					height: 100%;
				}
			}

			.choice-container {
				margin-top: 5px;
				width: 92.3vw;
				font-size: 14px;

				.ullist {
					display: flex;
					flex-direction: row;

					.item {
						width: 25%;
						height: 44px;
						display: flex;
						align-items: center;
						justify-content: center;
						color: rgba(207, 207, 207, 1);

						&.active {
							color: #57B6E6;
						}
					}
				}

				.indexInput-box {
					display: flex;
					flex-direction: column;
					align-items: center;

					.input {
						display: flex;
						flex-direction: row;
						align-items: center;
						background-color: #EDF2F2;
						width: 81.5vw;
						height: 45px;
						border-radius: 10px;

						&:first-child {
							margin-bottom: 8px;
						}

						&:last-child {
							margin-bottom: 20px;
						}

						image {
							height: 70rpx;
							width: 70rpx;
							margin-left: 3.85vw;
							margin-right: 18.46vw;
						}

						.placeholder {
							color: #C9C9C9;
							margin-top: 8rpx;

							text {
								&:first-child {
									font-size: 13px;
								}
							}

						}
					}
				}
			}
		}


		.ad {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			width: 92.3vw;
			// background-color: transparent;

			image {
				&:nth-child(2n+1) {
					width: 39.7vw;
					height: 60px;
				}

				&:first-child {
					margin-bottom: 5px;
				}

				&:nth-child(2) {
					margin-bottom: 5px;
				}

				&:nth-child(2n) {
					width: 49.74vw;
					height: 60px;
					margin-left: 2.8vw;
				}

				&:nth-child(3) {
					margin-bottom: 10px;
				}

				&:nth-child(4) {
					margin-bottom: 10px;
				}
			}

			.popup-content {
				// width: 65.38vw;
				// height: 50.75vh;

				display: flex;
				flex-direction: column;
				// justify-content: center;
				align-items: center;

				.pop-ad {
					// width: 100%;
					// height: 100%;
					width: 48.38vw;
					height: 48.75vh;
				}

				text {
					border: 1px solid rgba(87, 182, 230, 1);
					color: #fff;
				}
			}
		}

		.ad-text {
			// margin-top: 15px;
			color: rgba(166, 166, 166, 1);
			font-size: 11px;
		}

		.serve-container {
			width: 92.3vw;
			height: 63rpx;
			margin-top: 13px;

			.serve-text {
				// margin-top: 16px;
				font-size: 18px;
				font-family: '黑体';
				line-height: 24px;
			}

			.serve-choice {
				display: flex;
				flex-direction: row;
				margin-top: 15px;
				justify-content: space-around;
				align-self: center;

				button {
					border-color: transparent;
					width: 23.59vw;
					height: 24px;
					font-size: 14px;
					display: flex;
					align-items: center;
					justify-content: center;
					color: rgba(179, 179, 179, 1);
				}
			}
		}
	}
</style>