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

				<view class="item" :class="navIndex==index ? 'active' : ''" v-for="(item,index) in navArr"
					:key="item.id" @click="clickNav(index)">
					{{item.title}}
				</view>
			</view>

			<indexInput></indexInput>
		</view>
		<uni-section class="ad">
			<image src="@/static/index-index/ad-first.png" mode="aspectFit"></image>
			<image src="@/static/index-index/ad-second.png" mode="aspectFit"></image>
			<image src="@/static/index-index/ad-third.png" mode="aspectFit"></image>
			<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
				<uni-popup-share>
					<image src="@/static/index-index/ad-fourth.png" mode="aspectFit"></image>
				</uni-popup-share>
			</uni-popup>
		</uni-section>
		<view>
			<!-- 分享示例 -->
			<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
				<uni-popup-share>
					<image src="@/static/index-index/ad-fourth.png" mode="aspectFit"></image>
				</uni-popup-share>
			</uni-popup>
		</view>
		<uni-section>
			<image src="@/static/index-index/ad-fourth.png" mode="aspectFit" @click="shareToggle"></image>
		</uni-section>
		<text class=" ad-text">精心呵护|工序质检|全程监控|保价可赔</text>
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
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open()
			},
			shareToggle() {
				this.$refs.share.open()
			}
		}
	}
</script>

<style lang="scss">
	.container {
		width: 100vw;
		// height: 858px;
		padding-top: 20px;
		background-color: rgba(235, 236, 237, 1);
		display: flex;
		flex-direction: column; //水平展示内容
		align-items: center;

		.bigbox {
			width: 692rpx;
			background-color: #fff;

			.banner {
				width: 692rpx;
				height: 350rpx;
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
				width: 692rpx;
				height: 44px;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				font-size: 14px;

				.choice {
					color: rgba(207, 207, 207, 1);

					&.active {
						color: #57B6E6;
					}
				}
			}
		}


		.ad {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
			margin-top: 10px;
			width: 692rpx;
			height: 158px;

			image {
				&:nth-child(2n+1) {
					width: 298rpx;
					height: 60px;
				}

				&:nth-child(2n) {
					width: 373rpx;
					height: 60px;
				}

			}
		}

		.ad-text {
			color: rgba(166, 166, 166, 1);
			font-size: 11px;
		}

		.serve-container {
			width: 692rpx;
			height: 63rpx;

			.serve-text {
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
					width: 91px;
					font-size: 14px;
					color: rgba(179, 179, 179, 1);
				}
			}
		}
	}
</style>